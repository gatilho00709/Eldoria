
import { useCallback, useEffect, useState } from 'react'
import {
  CloudSun,
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudFog,
  Droplets,
  Wind,
  Thermometer,
  MapPin,
  Search,
  Sunrise,
  Sunset,
  RefreshCw,
  Navigation,
  Loader2,
  CloudDrizzle,
  Gauge,
  CalendarDays,
} from 'lucide-react'

import './Weather.css'

const WEATHER_CODES = {
  0: { label: 'Céu limpo', icon: Sun },
  1: { label: 'Predominantemente limpo', icon: Sun },
  2: { label: 'Parcialmente nublado', icon: CloudSun },
  3: { label: 'Nublado', icon: Cloud },
  45: { label: 'Nevoeiro', icon: CloudFog },
  48: { label: 'Nevoeiro com geada', icon: CloudFog },
  51: { label: 'Garoa leve', icon: CloudDrizzle },
  53: { label: 'Garoa moderada', icon: CloudDrizzle },
  55: { label: 'Garoa intensa', icon: CloudRain },
  56: { label: 'Garoa congelante leve', icon: CloudDrizzle },
  57: { label: 'Garoa congelante intensa', icon: CloudRain },
  61: { label: 'Chuva leve', icon: CloudRain },
  63: { label: 'Chuva moderada', icon: CloudRain },
  65: { label: 'Chuva forte', icon: CloudRain },
  66: { label: 'Chuva congelante leve', icon: CloudRain },
  67: { label: 'Chuva congelante forte', icon: CloudRain },
  71: { label: 'Neve leve', icon: CloudSnow },
  73: { label: 'Neve moderada', icon: CloudSnow },
  75: { label: 'Neve intensa', icon: CloudSnow },
  77: { label: 'Grãos de neve', icon: CloudSnow },
  80: { label: 'Pancadas de chuva leves', icon: CloudRain },
  81: { label: 'Pancadas de chuva moderadas', icon: CloudRain },
  82: { label: 'Pancadas de chuva fortes', icon: CloudRain },
  85: { label: 'Pancadas de neve leves', icon: CloudSnow },
  86: { label: 'Pancadas de neve fortes', icon: CloudSnow },
  95: { label: 'Trovoadas', icon: CloudLightning },
  96: { label: 'Trovoadas com granizo leve', icon: CloudLightning },
  99: { label: 'Trovoadas com granizo forte', icon: CloudLightning },
}

function getWeather(code) {
  return WEATHER_CODES[code] || {
    label: 'Condição desconhecida',
    icon: Cloud,
  }
}

function formatHour(date) {
  return new Date(date).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

function formatDay(date, index) {
  if (index === 0) return 'Hoje'

  return new Date(`${date}T12:00:00`).toLocaleDateString('pt-BR', {
    weekday: 'short',
  })
}

function formatDate(date) {
  return new Date(date + 'T12:00:00').toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default function WeatherApp() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [searching, setSearching] = useState(false)
  const [error, setError] = useState('')
  const [locationStatus, setLocationStatus] = useState(
    'Obtendo localização...'
  )

  const loadWeather = useCallback(async (latitude, longitude, cityName) => {
    setLoading(true)
    setError('')

    try {
      const params = new URLSearchParams({
        latitude,
        longitude,
        current: [
          'temperature_2m',
          'relative_humidity_2m',
          'apparent_temperature',
          'is_day',
          'precipitation',
          'rain',
          'weather_code',
          'wind_speed_10m',
          'wind_direction_10m',
        ].join(','),
        hourly: [
          'temperature_2m',
          'precipitation_probability',
          'weather_code',
        ].join(','),
        daily: [
          'weather_code',
          'temperature_2m_max',
          'temperature_2m_min',
          'precipitation_probability_max',
          'sunrise',
          'sunset',
        ].join(','),
        timezone: 'auto',
        forecast_days: '7',
      })

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?${params}`
      )

      if (!response.ok) {
        throw new Error('Não foi possível consultar os dados climáticos.')
      }

      const data = await response.json()

      setWeather(data)
      setCity(cityName)
      setLocationStatus('Dados atualizados')
    } catch (err) {
      setError(err.message || 'Erro ao carregar o clima.')
    } finally {
      setLoading(false)
    }
  }, [])

  const getCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Seu navegador não oferece suporte à localização.')
      setLoading(false)
      return
    }

    setLoading(true)
    setError('')
    setLocationStatus('Obtendo localização...')

    navigator.geolocation.getCurrentPosition(
      async position => {
        const { latitude, longitude } = position.coords

        try {
          const response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${latitude}&longitude=${longitude}&language=pt&format=json`
          )

          const result = await response.json()
          const place = result.results?.[0]

          const cityName = place
            ? `${place.name}${place.admin1 ? `, ${place.admin1}` : ''}`
            : 'Minha localização'

          loadWeather(latitude, longitude, cityName)
        } catch {
          loadWeather(latitude, longitude, 'Minha localização')
        }
      },
      () => {
        setLoading(false)
        setLocationStatus('Localização não disponível')
        setError(
          'Não conseguimos acessar sua localização. Autorize o acesso ou pesquise uma cidade.'
        )
      },
      {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 300000,
      }
    )
  }, [loadWeather])

  const searchCity = async e => {
    e.preventDefault()

    const query = search.trim()

    if (!query) return

    setSearching(true)
    setError('')

    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=10&language=pt&format=json`
      )

      if (!response.ok) {
        throw new Error('Falha na pesquisa de cidades.')
      }

      const result = await response.json()

      if (!result.results?.length) {
        throw new Error('Nenhuma cidade encontrada.')
      }

      const place = result.results[0]

      const cityName = [
        place.name,
        place.admin1,
        place.country,
      ].filter(Boolean).join(', ')

      setSearch('')

      await loadWeather(
        place.latitude,
        place.longitude,
        cityName
      )
    } catch (err) {
      setError(err.message || 'Erro ao pesquisar cidade.')
    } finally {
      setSearching(false)
    }
  }

  useEffect(() => {
    getCurrentLocation()
  }, [getCurrentLocation])

  if (loading && !weather) {
    return (
      <div className="weather-loading">
        <div className="weather-loading-icon">
          <CloudSun size={42} />
        </div>

        <Loader2 className="weather-spinner" size={25} />

        <h2>Preparando o Observatório</h2>
        <p>Buscando informações meteorológicas...</p>
      </div>
    )
  }

  const current = weather?.current
  const daily = weather?.daily
  const hourly = weather?.hourly

  const condition = current
    ? getWeather(current.weather_code)
    : getWeather(0)

  const CurrentIcon = condition.icon

  const now = new Date()

  const currentHourIndex = hourly
    ? hourly.time.findIndex(time => new Date(time).getTime() >= now.getTime())
    : 0

  const hourlyStart = Math.max(0, currentHourIndex)

  const hourlyForecast = hourly
    ? hourly.time.slice(hourlyStart, hourlyStart + 12).map((time, index) => {
        const i = hourlyStart + index

        return {
          time,
          temperature: hourly.temperature_2m[i],
          probability: hourly.precipitation_probability[i],
          code: hourly.weather_code[i],
        }
      })
    : []

  return (
    <div className="weather-app">
      <header className="weather-header">
        <div className="weather-brand">
          <div className="weather-brand-icon">
            <CloudSun size={27} />
          </div>

          <div>
            <h1>Observatório Climático</h1>
            <p>Seu mundo, em tempo real.</p>
          </div>
        </div>

        <button
          className="weather-location-button"
          onClick={getCurrentLocation}
          title="Usar minha localização"
        >
          <Navigation size={17} />
          Minha localização
        </button>
      </header>

      <form className="weather-search" onSubmit={searchCity}>
        <Search size={20} />

        <input
          type="text"
          placeholder="Pesquisar cidade..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <button type="submit" disabled={searching || !search.trim()}>
          {searching ? (
            <Loader2 size={18} className="weather-spinner" />
          ) : (
            'Pesquisar'
          )}
        </button>
      </form>

      {error && (
        <div className="weather-error">
          <span>{error}</span>
          <button onClick={() => setError('')}>
            Fechar
          </button>
        </div>
      )}

      {weather && current && (
        <>
          <section className="weather-main-card">
            <div className="weather-main-top">
              <div>
                <div className="weather-location">
                  <MapPin size={17} />
                  {city}
                </div>

                <p className="weather-date">
                  {formatDate(daily.time[0])}
                </p>
              </div>

              <button
                className="weather-refresh"
                onClick={() =>
                  loadWeather(
                    weather.latitude,
                    weather.longitude,
                    city
                  )
                }
                title="Atualizar dados"
              >
                <RefreshCw size={19} />
              </button>
            </div>

            <div className="weather-main-content">
              <div className="weather-temperature">
                <span>{Math.round(current.temperature_2m)}°</span>
                <p>{condition.label}</p>
              </div>

              <div className="weather-main-icon">
                <CurrentIcon size={100} strokeWidth={1.3} />
              </div>
            </div>

            <div className="weather-feels">
              Sensação térmica de {Math.round(current.apparent_temperature)}°C
            </div>

            <div className="weather-stats">
              <div>
                <Droplets size={21} />
                <span>Umidade</span>
                <strong>{current.relative_humidity_2m}%</strong>
              </div>

              <div>
                <Wind size={21} />
                <span>Vento</span>
                <strong>{Math.round(current.wind_speed_10m)} km/h</strong>
              </div>

              <div>
                <CloudRain size={21} />
                <span>Precipitação</span>
                <strong>{current.precipitation} mm</strong>
              </div>

              <div>
                <Thermometer size={21} />
                <span>Sensação</span>
                <strong>{Math.round(current.apparent_temperature)}°C</strong>
              </div>
            </div>
          </section>

          <section className="weather-section">
            <div className="weather-section-title">
              <div>
                <h2>Próximas horas</h2>
                <p>Acompanhe a evolução do clima</p>
              </div>

              <CalendarDays size={23} />
            </div>

            <div className="weather-hourly">
              {hourlyForecast.map((item, index) => {
                const HourIcon = getWeather(item.code).icon

                return (
                  <div className="weather-hour" key={item.time}>
                    <span>
                      {index === 0 ? 'Agora' : formatHour(item.time)}
                    </span>

                    <HourIcon size={27} />

                    <strong>{Math.round(item.temperature)}°</strong>

                    <small>
                      <Droplets size={12} />
                      {item.probability ?? 0}%
                    </small>
                  </div>
                )
              })}
            </div>
          </section>

          <section className="weather-section">
            <div className="weather-section-title">
              <div>
                <h2>Previsão para 7 dias</h2>
                <p>Confira o que vem pela frente</p>
              </div>

              <Sun size={23} />
            </div>

            <div className="weather-week">
              {daily.time.map((date, index) => {
                const dayCondition = getWeather(daily.weather_code[index])
                const DayIcon = dayCondition.icon

                return (
                  <div className="weather-day" key={date}>
                    <strong className="weather-day-name">
                      {formatDay(date, index)}
                    </strong>

                    <div className="weather-day-condition">
                      <DayIcon size={27} />
                      <span>{dayCondition.label}</span>
                    </div>

                    <div className="weather-day-rain">
                      <Droplets size={14} />
                      {daily.precipitation_probability_max[index] ?? 0}%
                    </div>

                    <div className="weather-day-temperatures">
                      <strong>
                        {Math.round(daily.temperature_2m_max[index])}°
                      </strong>

                      <span>
                        {Math.round(daily.temperature_2m_min[index])}°
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <section className="weather-section">
            <div className="weather-section-title">
              <div>
                <h2>Informações do dia</h2>
                <p>Dados adicionais da região</p>
              </div>

              <Gauge size={23} />
            </div>

            <div className="weather-extra-grid">
              <div className="weather-extra-card">
                <Sunrise size={27} />
                <span>Nascer do sol</span>
                <strong>{formatHour(daily.sunrise[0])}</strong>
              </div>

              <div className="weather-extra-card">
                <Sunset size={27} />
                <span>Pôr do sol</span>
                <strong>{formatHour(daily.sunset[0])}</strong>
              </div>

              <div className="weather-extra-card">
                <Wind size={27} />
                <span>Direção do vento</span>
                <strong>{current.wind_direction_10m}°</strong>
              </div>

              <div className="weather-extra-card">
                <CloudRain size={27} />
                <span>Probabilidade de chuva</span>
                <strong>
                  {daily.precipitation_probability_max[0] ?? 0}%
                </strong>
              </div>
            </div>
          </section>

          <footer className="weather-footer">
            <div className="weather-footer-status">
              <span className="weather-status-dot" />
              {locationStatus}
            </div>

            <p>
              Dados meteorológicos fornecidos por Open-Meteo.
            </p>
          </footer>
        </>
      )}

      {loading && weather && (
        <div className="weather-updating">
          <Loader2 size={17} className="weather-spinner" />
          Atualizando informações...
        </div>
      )}
    </div>
  )
}
