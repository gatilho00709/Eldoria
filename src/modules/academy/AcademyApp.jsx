
import { useEffect, useState } from 'react'
import {
  BookOpen, GraduationCap, Languages, CalendarDays,
  Trophy, Brain, Plus, CheckCircle2, Clock,
  ArrowLeft, ClipboardList, Sparkles, BookMarked,
  RefreshCw, LoaderCircle, Volume2
} from 'lucide-react'

import './AcademyApp.css'

import {
  loadAcademyData,
  saveAcademyData,
  EMPTY_ACADEMY_DATA,
} from './academyService'

import {
  createLesson,
  generateQuiz,
  gradeQuiz,
  distributeWeeklyContent,
  getDayName,
} from './academyEngine'

import { CURRICULUM } from './academyCurriculum'

const TABS = [
  { id: 'home', label: 'Início', icon: GraduationCap },
  { id: 'planner', label: 'Planejamento', icon: CalendarDays },
  { id: 'vocabulary', label: 'Vocabulário', icon: BookMarked },
  { id: 'reports', label: 'Relatórios', icon: ClipboardList },
]

export default function AcademyApp() {
  const [data, setData] = useState(EMPTY_ACADEMY_DATA)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [tab, setTab] = useState('home')
  const [language, setLanguage] = useState('japanese')
  const [topic, setTopic] = useState('')
  const [content, setContent] = useState('')
  const [selectedDays, setSelectedDays] = useState([1, 2, 3, 4, 5, 6])
  const [plan, setPlan] = useState([])
  const [lesson, setLesson] = useState(null)
  const [quiz, setQuiz] = useState([])
  const [answers, setAnswers] = useState({})
  const [quizType, setQuizType] = useState('daily')
  const [result, setResult] = useState(null)
  const [vocabWord, setVocabWord] = useState('')
  const [vocabReading, setVocabReading] = useState('')
  const [vocabMeaning, setVocabMeaning] = useState('')

  useEffect(() => {
    let active = true

    async function load() {
      try {
        const saved = await loadAcademyData()
        if (active) setData(saved)
      } catch (err) {
        if (active) setError(err.message || 'Não foi possível carregar a Academia.')
      } finally {
        if (active) setLoading(false)
      }
    }

    load()
    return () => { active = false }
  }, [])

  useEffect(() => {
    if (loading) return

    let active = true
    setSaving(true)

    const timeout = setTimeout(async () => {
      try {
        await saveAcademyData(data)
        if (active) setError('')
      } catch (err) {
        if (active) setError(
          err.message || 'Erro ao salvar os dados da Academia.'
        )
      } finally {
        if (active) setSaving(false)
      }
    }, 700)

    return () => {
      active = false
      clearTimeout(timeout)
    }
  }, [data, loading])

  function updateData(key, value) {
    setData(previous => ({ ...previous, [key]: value }))
  }

  function toggleDay(day) {
    setSelectedDays(previous =>
      previous.includes(day)
        ? previous.filter(item => item !== day)
        : [...previous, day].sort()
    )
  }

  function createPlan() {
    const newPlan = distributeWeeklyContent(content, selectedDays)
    setPlan(newPlan)
    updateData('plans', [
      ...data.plans,
      {
        id: crypto.randomUUID(),
        language,
        createdAt: new Date().toISOString(),
        items: newPlan,
      },
    ])
    setContent('')
  }

  function startLesson(selectedTopic = topic) {
    if (!selectedTopic.trim()) return

    const newLesson = createLesson(language, selectedTopic, content)

    setLesson(newLesson)
    setQuiz([])
    setAnswers({})
    setResult(null)
    setTab('lesson')
  }

  function startAssessment(type = 'daily') {
    if (!lesson) return

    const amount = type === 'recovery' ? 5 : 10

    setQuizType(type)
    setQuiz(generateQuiz(language, amount))
    setAnswers({})
    setResult(null)
    setTab('quiz')
  }

  function submitQuiz() {
    const score = gradeQuiz(quiz, answers)

    const report = {
      id: crypto.randomUUID(),
      language,
      topic: lesson?.topic || 'Prova final',
      type: quizType,
      date: new Date().toISOString(),
      ...score,
      answers,
    }

    updateData('reports', [...data.reports, report])
    setResult(score)
  }

  function startFinalExam() {
    setLesson({
      id: crypto.randomUUID(),
      language,
      topic: 'Prova final semanal',
      explanation: 'Esta avaliação reúne os conhecimentos estudados durante a semana.',
      examples: [],
    })

    setQuizType('final')
    setQuiz(generateQuiz(language, 10))
    setAnswers({})
    setResult(null)
    setTab('quiz')
  }

  function startRecovery() {
    startAssessment('recovery')
  }

  function addVocabulary() {
    if (!vocabWord.trim() || !vocabMeaning.trim()) return

    updateData('vocabulary', [
      ...data.vocabulary,
      {
        id: crypto.randomUUID(),
        language,
        word: vocabWord.trim(),
        reading: vocabReading.trim(),
        meaning: vocabMeaning.trim(),
      },
    ])

    setVocabWord('')
    setVocabReading('')
    setVocabMeaning('')
  }

  function renderHome() {
    const languageData = CURRICULUM[language]
    const languageReports = data.reports.filter(item => item.language === language)
    const completed = languageReports.filter(item => item.passed).length

    return (
      <>
        <div className="academy-hero">
          <div>
            <span className="academy-eyebrow">CENTRO DE APRENDIZAGEM</span>
            <h1>Academia de Línguas</h1>
            <p>Aprenda, pratique, evolua e acompanhe seu progresso.</p>
          </div>
          <div className="academy-hero-icon"><GraduationCap size={54} /></div>
        </div>

        <div className="academy-language-switch">
          <button
            className={language === 'japanese' ? 'active' : ''}
            onClick={() => setLanguage('japanese')}
          >
            🇯🇵 Japonês
          </button>
          <button
            className={language === 'english' ? 'active' : ''}
            onClick={() => setLanguage('english')}
          >
            🇬🇧 Inglês
          </button>
        </div>

        <div className="academy-section-title">
          <div>
            <span className="academy-eyebrow">SUA JORNADA</span>
            <h2>{languageData.name}</h2>
          </div>
        </div>

        <div className="academy-stats">
          <div className="academy-stat">
            <BookOpen />
            <strong>{data.lessons.length}</strong>
            <span>Aulas registradas</span>
          </div>
          <div className="academy-stat">
            <Trophy />
            <strong>{completed}</strong>
            <span>Aprovações</span>
          </div>
          <div className="academy-stat">
            <Brain />
            <strong>{languageReports.length}</strong>
            <span>Avaliações</span>
          </div>
        </div>

        <div className="academy-action-grid">
          <button className="academy-action-card" onClick={() => setTab('planner')}>
            <CalendarDays size={27} />
            <strong>Planejar semana</strong>
            <span>Organize seus conteúdos e dias de estudo.</span>
          </button>

          <button className="academy-action-card" onClick={() => setTab('lesson-create')}>
            <Sparkles size={27} />
            <strong>Estudar agora</strong>
            <span>Crie uma aula e comece a aprender.</span>
          </button>

          <button className="academy-action-card" onClick={startFinalExam}>
            <GraduationCap size={27} />
            <strong>Prova final</strong>
            <span>Faça uma avaliação de 10 questões.</span>
          </button>

          <button className="academy-action-card" onClick={() => setTab('vocabulary')}>
            <BookMarked size={27} />
            <strong>Vocabulário</strong>
            <span>Consulte e adicione novas palavras.</span>
          </button>
        </div>

        <div className="academy-panel">
          <h3>Conteúdo disponível</h3>
          {languageData.levels.map(level => (
            <div key={level.title}>
              <span className="academy-level">{level.title}</span>
              {level.topics.map(item => (
                <button
                  className="academy-topic"
                  key={item.title}
                  onClick={() => {
                    setTopic(item.title)
                    const newLesson = createLesson(language, item.title)
                    setLesson(newLesson)
                    updateData('lessons', [...data.lessons, newLesson])
                    setTab('lesson')
                  }}
                >
                  <BookOpen size={17} />
                  <span>{item.title}</span>
                  <span className="academy-topic-arrow">Estudar →</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </>
    )
  }

  function renderPlanner() {
    return (
      <div className="academy-panel">
        <button className="academy-back" onClick={() => setTab('home')}>
          <ArrowLeft size={16} /> Voltar
        </button>

        <span className="academy-eyebrow">ORGANIZAÇÃO</span>
        <h2>Planejamento semanal</h2>
        <p>Informe os conteúdos. A Academia os distribuirá pelos dias escolhidos.</p>

        <div className="academy-language-switch">
          <button className={language === 'japanese' ? 'active' : ''} onClick={() => setLanguage('japanese')}>🇯🇵 Japonês</button>
          <button className={language === 'english' ? 'active' : ''} onClick={() => setLanguage('english')}>🇬🇧 Inglês</button>
        </div>

        <label className="academy-label">Conteúdos da semana (um por linha)</label>
        <textarea
          className="academy-textarea"
          value={content}
          onChange={event => setContent(event.target.value)}
          placeholder={'Exemplo:\nApresentações\nAdjetivos básicos\nVocabulário de animais'}
        />

        <label className="academy-label">Dias de estudo</label>
        <div className="academy-days">
          {[
            ['Seg', 1], ['Ter', 2], ['Qua', 3],
            ['Qui', 4], ['Sex', 5], ['Sáb', 6],
          ].map(([name, day]) => (
            <button
              key={day}
              className={selectedDays.includes(day) ? 'selected' : ''}
              onClick={() => toggleDay(day)}
            >
              {name}
            </button>
          ))}
        </div>

        <p className="academy-hint">Domingo fica reservado para a prova final semanal.</p>

        <button className="academy-primary" onClick={createPlan} disabled={!content.trim() || !selectedDays.length}>
          <Sparkles size={17} /> Distribuir conteúdos
        </button>

        {plan.length > 0 && (
          <div className="academy-plan-result">
            <h3>Seu planejamento</h3>
            {plan.map(item => (
              <div className="academy-plan-item" key={item.id}>
                <strong>{getDayName(item.day)}</strong>
                <span>{item.topic}</span>
              </div>
            ))}
            <button className="academy-primary" onClick={() => setTab('home')}>Concluir planejamento</button>
          </div>
        )}
      </div>
    )
  }

  function renderLessonCreate() {
    return (
      <div className="academy-panel">
        <button className="academy-back" onClick={() => setTab('home')}>
          <ArrowLeft size={16} /> Voltar
        </button>
        <span className="academy-eyebrow">NOVA AULA</span>
        <h2>O que vamos estudar?</h2>

        <label className="academy-label">Idioma</label>
        <div className="academy-language-switch">
          <button className={language === 'japanese' ? 'active' : ''} onClick={() => setLanguage('japanese')}>🇯🇵 Japonês</button>
          <button className={language === 'english' ? 'active' : ''} onClick={() => setLanguage('english')}>🇬🇧 Inglês</button>
        </div>

        <label className="academy-label">Assunto</label>
        <input className="academy-input" value={topic} onChange={event => setTopic(event.target.value)} placeholder="Ex.: Apresentações" />

        <label className="academy-label">Material personalizado (opcional)</label>
        <textarea className="academy-textarea" value={content} onChange={event => setContent(event.target.value)} placeholder="Cole aqui o conteúdo que deseja estudar..." />

        <button className="academy-primary" onClick={() => {
          const newLesson = createLesson(language, topic, content)
          setLesson(newLesson)
          updateData('lessons', [...data.lessons, newLesson])
          setTab('lesson')
          setContent('')
        }} disabled={!topic.trim()}>
          <BookOpen size={17} /> Criar aula
        </button>
      </div>
    )
  }

  function renderLesson() {
    if (!lesson) return null

    return (
      <div className="academy-panel">
        <button className="academy-back" onClick={() => setTab('home')}>
          <ArrowLeft size={16} /> Voltar
        </button>

        <span className="academy-eyebrow">AULA DE {CURRICULUM[lesson.language].name.toUpperCase()}</span>
        <h2>{lesson.topic}</h2>

        <div className="academy-explanation">
          <h3><BookOpen size={19} /> Explicação</h3>
          <p>{lesson.explanation}</p>
        </div>

        {lesson.examples?.length > 0 && (
          <div className="academy-examples">
            <h3>Exemplos</h3>
            {lesson.examples.map((example, index) => (
              <div className="academy-example" key={index}>
                <strong>{example.jp}</strong>
                <span>{example.romaji}</span>
                <small>{example.pt}</small>
                <button
                  className="academy-audio"
                  title="Pronúncia do navegador"
                  onClick={() => {
                    if ('speechSynthesis' in window) {
                      const speech = new SpeechSynthesisUtterance(example.jp)
                      speech.lang = lesson.language === 'japanese' ? 'ja-JP' : 'en-US'
                      window.speechSynthesis.speak(speech)
                    }
                  }}
                >
                  <Volume2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="academy-hint">
          Leia a explicação, observe os exemplos e depois faça a avaliação.
        </div>

        <button className="academy-primary" onClick={() => startAssessment('daily')}>
          <ClipboardList size={17} /> Fazer avaliação de 10 questões
        </button>
      </div>
    )
  }

  function renderQuiz() {
    if (result) {
      return (
        <div className="academy-panel academy-result">
          <Trophy size={45} />
          <span className="academy-eyebrow">RESULTADO DA AVALIAÇÃO</span>
          <h2>{result.percentage}%</h2>
          <p>{result.correct} de {result.total} respostas corretas.</p>

          <div className={`academy-result-status ${result.passed ? 'passed' : 'failed'}`}>
            {result.passed ? 'Aprovado! Excelente trabalho.' : 'Você precisa fazer a recuperação.'}
          </div>

          <div className="academy-review">
            {quiz.map((question, index) => (
              <div key={question.id}>
                <strong>{index + 1}. {question.question}</strong>
                <p>Sua resposta: {question.options[answers[index]] ?? 'Não respondida'}</p>
                <p>Resposta correta: {question.options[question.answer]}</p>
                <small>{question.explanation}</small>
              </div>
            ))}
          </div>

          {!result.passed && quizType !== 'recovery' && (
            <button className="academy-primary" onClick={startRecovery}>
              <RefreshCw size={17} /> Fazer recuperação de 5 questões
            </button>
          )}

          {!result.passed && quizType === 'recovery' && (
            <p className="academy-hint">Revise a aula e tente novamente em outra sessão.</p>
          )}

          <button className="academy-secondary" onClick={() => setTab('home')}>Voltar ao início</button>
        </div>
      )
    }

    return (
      <div className="academy-panel">
        <button className="academy-back" onClick={() => setTab('lesson')}>
          <ArrowLeft size={16} /> Voltar à aula
        </button>

        <span className="academy-eyebrow">
          {quizType === 'recovery' ? 'RECUPERAÇÃO' : quizType === 'final' ? 'PROVA FINAL' : 'AVALIAÇÃO'}
        </span>
        <h2>{quiz.length} questões</h2>
        <p>Você precisa alcançar pelo menos 80% para ser aprovado.</p>

        {quiz.map((question, index) => (
          <div className="academy-question" key={question.id}>
            <strong>{index + 1}. {question.question}</strong>
            <div className="academy-options">
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  className={Number(answers[index]) === optionIndex ? 'selected' : ''}
                  onClick={() => setAnswers(previous => ({ ...previous, [index]: optionIndex }))}
                >
                  <span>{String.fromCharCode(65 + optionIndex)}</span>
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button className="academy-primary" onClick={submitQuiz} disabled={Object.keys(answers).length !== quiz.length}>
          Finalizar avaliação
        </button>
      </div>
    )
  }

  function renderVocabulary() {
    const words = data.vocabulary.filter(item => item.language === language)

    return (
      <div className="academy-panel">
        <button className="academy-back" onClick={() => setTab('home')}>
          <ArrowLeft size={16} /> Voltar
        </button>
        <span className="academy-eyebrow">CADERNO PESSOAL</span>
        <h2>Vocabulário</h2>

        <div className="academy-language-switch">
          <button className={language === 'japanese' ? 'active' : ''} onClick={() => setLanguage('japanese')}>🇯🇵 Japonês</button>
          <button className={language === 'english' ? 'active' : ''} onClick={() => setLanguage('english')}>🇬🇧 Inglês</button>
        </div>

        <div className="academy-vocab-form">
          <input className="academy-input" placeholder="Palavra" value={vocabWord} onChange={event => setVocabWord(event.target.value)} />
          <input className="academy-input" placeholder="Leitura / pronúncia" value={vocabReading} onChange={event => setVocabReading(event.target.value)} />
          <input className="academy-input" placeholder="Significado" value={vocabMeaning} onChange={event => setVocabMeaning(event.target.value)} />
          <button className="academy-primary" onClick={addVocabulary}><Plus size={17} /> Adicionar palavra</button>
        </div>

        <div className="academy-vocabulary-list">
          {words.map((item, index) => (
            <div className="academy-vocabulary-item" key={item.id || `${item.word}-${index}`}>
              <strong>{item.word}</strong>
              <span>{item.reading}</span>
              <small>{item.meaning}</small>
            </div>
          ))}
        </div>
      </div>
    )
  }

  function renderReports() {
    return (
      <div className="academy-panel">
        <button className="academy-back" onClick={() => setTab('home')}>
          <ArrowLeft size={16} /> Voltar
        </button>
        <span className="academy-eyebrow">ACOMPANHAMENTO</span>
        <h2>Relatórios</h2>

        <div className="academy-stats">
          <div className="academy-stat"><ClipboardList /><strong>{data.reports.length}</strong><span>Avaliações</span></div>
          <div className="academy-stat"><CheckCircle2 /><strong>{data.reports.filter(item => item.passed).length}</strong><span>Aprovações</span></div>
          <div className="academy-stat"><Trophy /><strong>{data.reports.length ? Math.round(data.reports.reduce((sum, item) => sum + item.percentage, 0) / data.reports.length) : 0}%</strong><span>Média geral</span></div>
        </div>

        <h3>Histórico de avaliações</h3>
        {data.reports.length === 0 && <p>Nenhuma avaliação registrada ainda.</p>}

        {[...data.reports].reverse().map(report => (
          <div className="academy-report" key={report.id}>
            <div>
              <strong>{report.topic}</strong>
              <span>{CURRICULUM[report.language]?.name} · {new Date(report.date).toLocaleDateString('pt-BR')}</span>
            </div>
            <strong>{report.percentage}%</strong>
            <span className={report.passed ? 'report-pass' : 'report-fail'}>
              {report.passed ? 'Aprovado' : 'Recuperação'}
            </span>
          </div>
        ))}

        <div className="academy-hint">
          A prova final semanal tem 10 questões e exige 80% de aproveitamento.
        </div>
      </div>
    )
  }

  if (loading) {
    return <div className="academy-loading"><LoaderCircle className="academy-spin" /> Carregando Academia...</div>
  }

  return (
    <div className="academy">
      <header className="academy-header">
        <div className="academy-brand">
          <GraduationCap size={27} />
          <div>
            <strong>ELDORIA</strong>
            <span>ACADEMIA DE LÍNGUAS</span>
          </div>
        </div>

        <span className="academy-save-status">
          {saving ? 'Salvando...' : 'Progresso sincronizado'}
        </span>
      </header>

      {error && <div className="academy-error">{error}</div>}

      <nav className="academy-nav">
        {TABS.map(item => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              className={tab === item.id ? 'active' : ''}
              onClick={() => setTab(item.id)}
            >
              <Icon size={17} /> {item.label}
            </button>
          )
        })}
      </nav>

      <main className="academy-content">
        {tab === 'home' && renderHome()}
        {tab === 'planner' && renderPlanner()}
        {tab === 'lesson-create' && renderLessonCreate()}
        {tab === 'lesson' && renderLesson()}
        {tab === 'quiz' && renderQuiz()}
        {tab === 'vocabulary' && renderVocabulary()}
        {tab === 'reports' && renderReports()}
      </main>

      <footer className="academy-footer">
        ELDORIA ACADEMY · APRENDA UM POUCO TODOS OS DIAS
      </footer>
    </div>
  )
}
