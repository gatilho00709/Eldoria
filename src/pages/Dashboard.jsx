
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, Sparkles, Crown } from 'lucide-react'
import { apps } from '../data/apps'
import AppCard from '../components/AppCard'

export default function Dashboard() {
  const [search, setSearch] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  const activeCategory = searchParams.get('category') || 'Todos'

  const categories = [
    'Todos',
    'Produtividade',
    'Criação',
    'Estudos',
    'Eldoria',
  ]

  const filteredApps = useMemo(() => apps.filter((app) => {
    const matchesCategory =
      activeCategory === 'Todos' || app.category === activeCategory

    const matchesSearch =
      app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.description.toLowerCase().includes(search.toLowerCase())

    return matchesCategory && matchesSearch
  }), [activeCategory, search])

  function selectCategory(category) {
    if (category === 'Todos') {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  return (
    <div className="page-content">
      <section className="welcome-banner">
        <div className="welcome-content">
          <div className="welcome-label">
            <Sparkles size={15} />
            BEM-VINDO AO REINO
          </div>

          <h2>Bem-vindo ao <span>Eldoria.</span></h2>

          <p>
            Entre pelos portões do castelo. Explore suas dependências,
            construa suas ideias e descubra todas as ferramentas do reino.
          </p>

          <button
            className="welcome-button"
            onClick={() => document.getElementById('app-catalog')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Crown size={17} />
            Explorar o castelo
          </button>
        </div>

        <div className="welcome-decoration">
          <div className="decoration-circle circle-one" />
          <div className="decoration-circle circle-two" />
          <Crown size={110} strokeWidth={0.8} />
        </div>
      </section>

      <section className="catalog-section" id="app-catalog">
        <div className="section-heading">
          <div>
            <span className="eyebrow">AS DEPENDÊNCIAS DO REINO</span>
            <h2>Salão de aplicativos</h2>
            <p>Escolha uma ferramenta para entrar em sua respectiva sala.</p>
          </div>

          <div className="app-count">
            {filteredApps.length} dependências
          </div>
        </div>

        <div className="search-box dashboard-search">
          <Search size={18} />
          <input
            placeholder="Procurar uma dependência..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="filter-list">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-button ${activeCategory === category ? 'selected' : ''}`}
              onClick={() => selectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="apps-grid">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {filteredApps.length === 0 && (
          <div className="empty-state">
            <Search size={35} />
            <h3>Nenhuma dependência encontrada</h3>
            <p>Experimente outra pesquisa ou categoria.</p>
          </div>
        )}
      </section>

      <footer className="footer">
        <span>ELDORIA © 2026</span>
        <span>Fundado e construído por Gatilho.</span>
      </footer>
    </div>
  )
}


