
// LaboratoryApp.jsx

import React, { useEffect, useMemo, useState } from "react";

import {
  getCurriculum,
  getLesson
} from "./laboratoryCurriculum";

import {
  createQuiz,
  gradeQuiz
} from "./laboratoryEngine";

import {
  loadLaboratoryData,
  saveLaboratoryData
} from "./laboratoryService";

import "./laboratory.css";


const DAYS = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado"
];


function today() {

  return new Date().toLocaleDateString("pt-BR");

}


function progressKey(section, week, day) {

  return `${section}-${week}-${day}`;

}


export default function LaboratoryApp() {

  const [data, setData] = useState(null);

  const [ready, setReady] = useState(false);

  const [error, setError] = useState("");

  const [section, setSection] = useState("matters");

  const [week, setWeek] = useState(1);

  const [day, setDay] = useState(1);

  const [tab, setTab] = useState("course");

  const [quiz, setQuiz] = useState(null);

  const [answers, setAnswers] = useState({});

  const [result, setResult] = useState(null);

  const [mode, setMode] = useState("daily");

  const [busy, setBusy] = useState(false);


  // ===================================================
  // CARREGAMENTO
  // ===================================================

  useEffect(() => {

    let active = true;

    loadLaboratoryData()
      .then(loaded => {

        if (!active) return;

        setData(loaded);

        setSection(loaded.selectedSection || "matters");

        setWeek(
          loaded.selectedWeek?.[loaded.selectedSection] ||
          (loaded.selectedSection === "engineering" ? 10 : 1)
        );

        setReady(true);

      })
      .catch(e => {

        if (!active) return;

        console.error("Erro ao carregar Laboratório:", e);

        setError(`Não foi possível carregar o progresso: ${e.message}`);

        setData({

          progress: {},
          reports: [],
          selectedSection: "matters",

          selectedWeek: {
            matters: 1,
            engineering: 10
          }

        });

        setReady(true);

      });

    return () => {

      active = false;

    };

  }, []);


  // ===================================================
  // SALVAMENTO AUTOMÁTICO
  // ===================================================

  useEffect(() => {

    if (!ready || !data) return;

    const timer = setTimeout(() => {

      setBusy(true);

      saveLaboratoryData(data)
        .then(() => setBusy(false))
        .catch(e => {

          console.error("Erro ao salvar Laboratório:", e);

          setError(`Falha ao salvar progresso: ${e.message}`);

          setBusy(false);

        });

    }, 500);

    return () => clearTimeout(timer);

  }, [data, ready]);


  // ===================================================
  // CURRÍCULO ATUAL
  // ===================================================

  const curriculum = useMemo(
    () => getCurriculum(section),
    [section]
  );

  const currentWeek = curriculum.find(
    item => item.number === Number(week)
  );

  const lesson = getLesson(section, week, day);

  const progress = data?.progress || {};

  const weekProgress = Array.from(
    { length: 6 },
    (_, index) =>
      progress[progressKey(section, week, index + 1)]?.status === "passed"
  );

  const completedDays = weekProgress.filter(Boolean).length;

  const finalPassed =
    progress[`final-${section}-${week}`]?.status === "passed";


  // ===================================================
  // ATUALIZAÇÃO DOS DADOS
  // ===================================================

  const updateData = fn => {

    setData(old => fn({ ...old }));

  };


  // ===================================================
  // TROCAR SEÇÃO
  // ===================================================

  const chooseSection = newSection => {

    const weeks = getCurriculum(newSection);

    const savedWeek =
      data.selectedWeek?.[newSection] ||
      (newSection === "engineering" ? 10 : 1);

    const validWeek = weeks.some(
      item => item.number === savedWeek
    );

    const nextWeek = validWeek
      ? savedWeek
      : weeks[0]?.number || savedWeek;

    setSection(newSection);

    setWeek(nextWeek);

    setDay(1);

    setQuiz(null);

    setResult(null);

    setAnswers({});

    updateData(d => {

      d.selectedSection = newSection;

      d.selectedWeek = {
        ...(d.selectedWeek || {}),
        [newSection]: nextWeek
      };

      return d;

    });

  };


  // ===================================================
  // TROCAR SEMANA
  // ===================================================

  const chooseWeek = number => {

    const nextWeek = Number(number);

    setWeek(nextWeek);

    setDay(1);

    setQuiz(null);

    setResult(null);

    setAnswers({});

    updateData(d => {

      d.selectedWeek = {
        ...(d.selectedWeek || {}),
        [section]: nextWeek
      };

      return d;

    });

  };


  // ===================================================
  // INICIAR AVALIAÇÃO
  // ===================================================

  const startQuiz = (type = "daily") => {

    try {

      setError("");

      const count =
        type === "final" ? 10 : 5;

      const questions = createQuiz({

        section,

        week,

        day,

        type,

        count,

        seed: Date.now()

      });

      if (!questions || questions.length !== count) {

        throw new Error("A avaliação não foi gerada corretamente.");

      }

      setMode(type);

      setQuiz(questions);

      setAnswers({});

      setResult(null);

      setTab("lesson");

    } catch (e) {

      console.error("Erro ao iniciar avaliação:", e);

      setError(`Não foi possível iniciar a avaliação: ${e.message}`);

    }

  };


  // ===================================================
  // CORRIGIR AVALIAÇÃO
  // ===================================================

  const submitQuiz = () => {

    if (!quiz || result) return;

    const graded = gradeQuiz(quiz, answers);

    setResult(graded);

    const report = {

      id: `${Date.now()}-${Math.random()}`,

      date: today(),

      section,

      week,

      weekTitle: currentWeek?.title || `Semana ${week}`,

      day,

      type: mode,

      correct: graded.correct,

      total: graded.total,

      score: graded.score,

      passed: graded.passed

    };

    updateData(d => {

      d.reports = [
        report,
        ...(d.reports || [])
      ].slice(0, 500);

      const key = progressKey(section, week, day);

      const old = d.progress[key] || {};

      if (
        (mode === "daily" || mode === "recovery") &&
        graded.passed
      ) {

        d.progress[key] = {

          ...old,

          status: "passed",

          bestScore: Math.max(
            old.bestScore || 0,
            graded.score
          ),

          dailyPassed: true,

          ...(mode === "recovery"
            ? { recoveryPassed: true }
            : {})

        };

      }

      if (mode === "final" && graded.passed) {

        d.progress[`final-${section}-${week}`] = {

          status: "passed",

          bestScore: graded.score

        };

        d.progress[`week-${section}-${week}`] = {

          status: "passed",

          bestScore: graded.score

        };

      }

      return d;

    });

  };


  // ===================================================
  // PRÓXIMA AULA
  // ===================================================

  const goNext = () => {

    if (day < 6) {

      setDay(day + 1);

      setQuiz(null);

      setResult(null);

      setAnswers({});

    } else {

      startQuiz("final");

    }

  };


  // ===================================================
  // RELATÓRIOS
  // ===================================================

  const allReports = (data?.reports || []).filter(
    report => report.section === section
  );

  const average = allReports.length
    ? Math.round(
        allReports.reduce(
          (sum, report) => sum + report.score,
          0
        ) / allReports.length
      )
    : 0;


  // ===================================================
  // CARREGAMENTO
  // ===================================================

  if (!ready || !data) {

    return (

      <div className="laboratory-shell">

        <p>Carregando Laboratório...</p>

      </div>

    );

  }


  // ===================================================
  // INTERFACE
  // ===================================================

  return (

    <div className="laboratory-shell">

      <header className="laboratory-header">

        <div>

          <span className="laboratory-label">
            CENTRO DE APRENDIZADO
          </span>

          <h1>Laboratório</h1>

          <p>
            Estude, pratique, avalie e acompanhe sua evolução.
          </p>

        </div>

        <span className="laboratory-save">

          {busy ? "Salvando..." : "Progresso sincronizado"}

        </span>

      </header>


      {error && (

        <div className="laboratory-error">

          {error}

          <button onClick={() => setError("")}>
            Fechar
          </button>

        </div>

      )}


      {/* SELEÇÃO DE SEÇÃO */}

      <div className="laboratory-sections">

        <button

          className={
            section === "matters" ? "active" : ""
          }

          onClick={() => chooseSection("matters")}

        >

          <strong>Laboratório de Matérias</strong>

          <span>Matemática, Física, Química e muito mais.</span>

        </button>


        <button

          className={
            section === "engineering" ? "active" : ""
          }

          onClick={() => chooseSection("engineering")}

        >

          <strong>Laboratório de Engenharia</strong>

          <span>Matemática aplicada, mecânica, elétrica e tecnologia.</span>

        </button>

      </div>


      {/* NAVEGAÇÃO */}

      <nav className="laboratory-tabs">

        <button
          className={tab === "course" ? "active" : ""}
          onClick={() => setTab("course")}
        >
          Curso
        </button>

        <button
          className={tab === "lesson" ? "active" : ""}
          onClick={() => setTab("lesson")}
        >
          Aula e avaliação
        </button>

        <button
          className={tab === "reports" ? "active" : ""}
          onClick={() => setTab("reports")}
        >
          Relatórios
        </button>

      </nav>


      {/* CURSO */}

      {tab === "course" && (

        <section className="laboratory-panel">

          <div className="laboratory-week-selector">

            <label htmlFor="laboratory-week">
              Semana de estudo
            </label>

            <select

              id="laboratory-week"

              value={week}

              onChange={e => chooseWeek(e.target.value)}

            >

              {curriculum.map(item => (

                <option
                  key={item.number}
                  value={item.number}
                >

                  Semana {item.number} — {item.title}

                </option>

              ))}

            </select>

          </div>


          {!currentWeek ? (

            <div className="laboratory-empty">

              <h2>Currículo em construção</h2>

              <p>
                Ainda não existem semanas cadastradas nesta seção.
                Em breve, adicionaremos os primeiros blocos de conteúdo.
              </p>

            </div>

          ) : (

            <>

              <div className="laboratory-week-heading">

                <div>

                  <span>SEMANA {week}</span>

                  <h2>{currentWeek.title}</h2>

                  <p>{currentWeek.goal}</p>

                </div>

                <strong>
                  {completedDays}/6 aulas concluídas
                </strong>

              </div>


              <div className="laboratory-progress">

                <div
                  style={{
                    width: `${(completedDays / 6) * 100}%`
                  }}
                />

              </div>


              <div className="laboratory-day-grid">

                {DAYS.map((dayName, index) => {

                  const dayNumber = index + 1;

                  const completed =
                    weekProgress[index];

                  const hasLesson =
                    Boolean(currentWeek.days?.[index]);

                  return (

                    <button

                      key={dayNumber}

                      disabled={!hasLesson}

                      className={completed ? "completed" : ""}

                      onClick={() => {

                        setDay(dayNumber);

                        setQuiz(null);

                        setResult(null);

                        setAnswers({});

                        setTab("lesson");

                      }}

                    >

                      <span>{dayName}</span>

                      <strong>Dia {dayNumber}</strong>

                      <small>

                        {completed
                          ? "Concluído"
                          : hasLesson
                            ? "Estudar aula"
                            : "Não cadastrado"}

                      </small>

                    </button>

                  );

                })}

              </div>


              <div className="laboratory-final-status">

                <strong>
                  Avaliação semanal
                </strong>

                <span>

                  {finalPassed
                    ? "Aprovado"
                    : "Ainda não concluída"}

                </span>

                <button

                  onClick={() => startQuiz("final")}

                  disabled={
                    !currentWeek.days ||
                    currentWeek.days.length === 0
                  }

                >

                  Iniciar avaliação

                </button>

              </div>

            </>

          )}

        </section>

      )}


      {/* AULA E AVALIAÇÃO */}

      {tab === "lesson" && (

        <section className="laboratory-panel">

          {!currentWeek || !lesson ? (

            <div className="laboratory-empty">

              <h2>Aula não cadastrada</h2>

              <p>
                Escolha uma semana e um dia que já possuam conteúdo.
              </p>

            </div>

          ) : (

            <>

              <div className="laboratory-lesson-heading">

                <span>
                  SEMANA {week} · DIA {day}
                </span>

                <h2>{lesson.title}</h2>

                <p>{lesson.goal}</p>

              </div>


              {!quiz ? (

                <>

                  <article className="laboratory-explanation">

                    <h3>Conteúdo da aula</h3>

                    <p>{lesson.explanation}</p>

                  </article>


                  {lesson.examples.length > 0 && (

                    <article className="laboratory-content-block">

                      <h3>Exemplos</h3>

                      <ul>

                        {lesson.examples.map((example, index) => (

                          <li key={index}>{example}</li>

                        ))}

                      </ul>

                    </article>

                  )}


                  {lesson.keyPoints.length > 0 && (

                    <article className="laboratory-content-block">

                      <h3>Pontos importantes</h3>

                      <ul>

                        {lesson.keyPoints.map((point, index) => (

                          <li key={index}>{point}</li>

                        ))}

                      </ul>

                    </article>

                  )}


                  <div className="laboratory-actions">

                    <button
                      className="laboratory-primary"
                      onClick={() => startQuiz("daily")}
                    >

                      Fazer prova diária · 5 questões

                    </button>

                    <button
                      onClick={() => startQuiz("recovery")}
                    >

                      Recuperação · 5 questões

                    </button>

                  </div>

                </>

              ) : (

                <>

                  <div className="laboratory-quiz-heading">

                    <h3>

                      {mode === "final"
                        ? "Avaliação semanal"
                        : mode === "recovery"
                          ? "Recuperação"
                          : "Avaliação diária"}

                    </h3>

                    <span>{quiz.length} questões</span>

                  </div>


                  {quiz.map((question, index) => (

                    <article
                      className="laboratory-question"
                      key={question.id}
                    >

                      <h3>
                        {index + 1}. {question.prompt}
                      </h3>

                      <div className="laboratory-options">

                        {question.options.map((option, optionIndex) => (

                          <label

                            key={optionIndex}

                            className={
                              answers[question.id] === optionIndex
                                ? "selected"
                                : ""
                            }

                          >

                            <input

                              type="radio"

                              name={question.id}

                              value={optionIndex}

                              checked={
                                answers[question.id] === optionIndex
                              }

                              disabled={Boolean(result)}

                              onChange={() => {

                                setAnswers(old => ({

                                  ...old,

                                  [question.id]: optionIndex

                                }));

                              }}

                            />

                            {option}

                          </label>

                        ))}

                      </div>


                      {result && (

                        <div className="laboratory-feedback">

                          <strong>

                            {question.correctAnswer === answers[question.id]
                              ? "Resposta correta!"
                              : `Resposta correta: ${question.options[question.correctAnswer]}`}

                          </strong>

                          <p>{question.explanation}</p>

                        </div>

                      )}

                    </article>

                  ))}


                  {!result ? (

                    <button

                      className="laboratory-primary"

                      disabled={
                        Object.keys(answers).length !== quiz.length
                      }

                      onClick={submitQuiz}

                    >

                      Corrigir avaliação

                    </button>

                  ) : (

                    <div className="laboratory-result">

                      <strong>
                        {result.correct}/{result.total} · {result.score}%
                      </strong>

                      <h3>

                        {result.passed
                          ? "Parabéns! Você foi aprovado!"
                          : "Você ainda não atingiu 80%."}

                      </h3>

                      {!result.passed && mode === "daily" && (

                        <button
                          className="laboratory-primary"
                          onClick={() => startQuiz("recovery")}
                        >

                          Fazer recuperação

                        </button>

                      )}


                      {result.passed && mode !== "final" && (

                        <button
                          className="laboratory-primary"
                          onClick={goNext}
                        >

                          {day < 6
                            ? "Próxima aula"
                            : "Avaliação semanal"}

                        </button>

                      )}


                      {mode === "final" && (

                        <button
                          onClick={() => {

                            setQuiz(null);

                            setResult(null);

                            setTab("course");

                          }}
                        >

                          Voltar ao curso

                        </button>

                      )}

                    </div>

                  )}

                </>

              )}

            </>

          )}

        </section>

      )}


      {/* RELATÓRIOS */}

      {tab === "reports" && (

        <section className="laboratory-panel">

          <h2>Relatórios de desempenho</h2>

          <div className="laboratory-stat-grid">

            <div>

              <span>Avaliações realizadas</span>

              <strong>{allReports.length}</strong>

            </div>

            <div>

              <span>Média geral</span>

              <strong>{average}%</strong>

            </div>

            <div>

              <span>Aulas concluídas</span>

              <strong>

                {Object.entries(progress).filter(([key, value]) =>

                  key.startsWith(`${section}-`) &&
                  value.status === "passed"

                ).length}

              </strong>

            </div>

          </div>


          <h3>Histórico de avaliações</h3>

          {allReports.length === 0 ? (

            <p>Ainda não existem avaliações registradas.</p>

          ) : (

            allReports.slice(0, 50).map(report => (

              <article
                className="laboratory-report"
                key={report.id}
              >

                <div>

                  <strong>
                    Semana {report.week} — {report.weekTitle}
                  </strong>

                  <small>

                    {report.type === "final"
                      ? "Avaliação semanal"
                      : report.type === "recovery"
                        ? "Recuperação"
                        : `Dia ${report.day}`}

                    {" · "}

                    {report.date}

                  </small>

                </div>

                <b className={report.passed ? "pass" : "fail"}>

                  {report.correct}/{report.total} · {report.score}%

                </b>

              </article>

            ))

          )}

        </section>

      )}

    </div>

  );

}
