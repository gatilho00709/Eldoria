import { useEffect, useMemo, useState } from "react";
import { BookOpen, CheckCircle2, ChevronLeft, ChevronRight, GraduationCap, Languages, RotateCcw, Trophy } from "lucide-react";
import { createQuiz, getCurriculum, getLesson, gradeQuiz } from "./academyEngine";
import { EMPTY_ACADEMY_DATA, loadAcademyData, saveAcademyData } from "./academyService";
import "./AcademyApp.css";

const DAYS=["Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
const keyFor=(lang,week,day)=>`${lang}-${week}-${day}`;
const today=()=>new Date().toISOString().slice(0,10);

export default function AcademyApp(){
  const [data,setData]=useState(EMPTY_ACADEMY_DATA);
  const [ready,setReady]=useState(false);
  const [error,setError]=useState("");
  const [tab,setTab]=useState("course");
  const [language,setLanguage]=useState("ja");
  const [week,setWeek]=useState(1);
  const [day,setDay]=useState(1);
  const [quiz,setQuiz]=useState(null);
  const [answers,setAnswers]=useState({});
  const [result,setResult]=useState(null);
  const [mode,setMode]=useState("daily");
  const [showRecovery,setShowRecovery]=useState(false);
  const [busy,setBusy]=useState(false);

  useEffect(()=>{ let active=true; loadAcademyData().then(v=>{if(active){setData(v);setLanguage(v.selectedLanguage||"ja");setWeek(v.selectedWeek?.[v.selectedLanguage||"ja"]||1);setReady(true);}}).catch(e=>{if(active){setError(`Não foi possível carregar o progresso: ${e.message}`);setReady(true);}}); return ()=>{active=false};},[]);
  useEffect(()=>{if(!ready)return;const timer=setTimeout(()=>saveAcademyData(data).catch(e=>setError(`Falha ao salvar: ${e.message}`)),500);return()=>clearTimeout(timer);},[data,ready]);

  const curriculum=useMemo(()=>getCurriculum(language),[language]);
  const currentWeek=curriculum[week-1];
  const lesson=getLesson(language,week,day);
  const progress=data.progress||{};
  const weekProgress=Array.from({length:6},(_,i)=>progress[keyFor(language,week,i+1)]?.status==="passed");
  const completedDays=weekProgress.filter(Boolean).length;
  const updateData=(fn)=>setData(old=>fn({...old}));
  const chooseLanguage=(lang)=>{setLanguage(lang);setWeek(data.selectedWeek?.[lang]||1);setDay(1);setQuiz(null);setResult(null);updateData(d=>{d.selectedLanguage=lang;return d;});};
  const chooseWeek=(n)=>{const w=Math.max(1,Math.min(52,n));setWeek(w);setDay(1);setQuiz(null);setResult(null);updateData(d=>{d.selectedWeek={...(d.selectedWeek||{}),[language]:w};return d;});};
  const startQuiz=(kind="daily")=>{
    const count=kind==="recovery"?5:10;
    const q=createQuiz({language,week,day,count,type:kind,seed:Date.now()});
    setMode(kind);setQuiz(q);setAnswers({});setResult(null);setShowRecovery(false);setTab("lesson");
  };
  const submitQuiz=()=>{
    if(!quiz)return;
    const graded=gradeQuiz(quiz,answers);setResult(graded);
    const report={id:`${Date.now()}-${Math.random()}`,date:today(),language,week,weekTitle:currentWeek.title,day,type:mode,correct:graded.correct,total:graded.total,score:graded.score,passed:graded.passed};
    updateData(d=>{
      d.reports=[report,...(d.reports||[])].slice(0,500);
      const k=keyFor(language,week,day);
      const old=d.progress[k]||{};
      if(mode==="daily"&&graded.passed)d.progress[k]={...old,status:"passed",bestScore:Math.max(old.bestScore||0,graded.score),dailyPassed:true};
      if(mode==="recovery"&&graded.passed)d.progress[k]={...old,status:"passed",bestScore:Math.max(old.bestScore||0,graded.score),dailyPassed:true,recoveryPassed:true};
      if(mode==="final"&&graded.passed){d.progress[`final-${language}-${week}`]={status:"passed",bestScore:graded.score};d.progress[`week-${language}-${week}`]={status:"passed",bestScore:graded.score};}
      return d;
    });
  };
  const startFinal=()=>{
    const q=createQuiz({language,week,day:1,count:10,type:"final",seed:Date.now()});
    setMode("final");setQuiz(q);setAnswers({});setResult(null);setTab("lesson");
  };
  const goNext=()=>{if(day<6){setDay(day+1);setQuiz(null);setResult(null);}else startFinal();};
  const allReports=(data.reports||[]).filter(r=>r.language===language);
  const avg=allReports.length?Math.round(allReports.reduce((a,r)=>a+r.score,0)/allReports.length):0;
  const finalPassed=progress[`final-${language}-${week}`]?.status==="passed";

  if(!ready)return <div className="academy-shell"><p>Carregando Academia...</p></div>;
  return <div className="academy-shell">
    <header className="academy-header">
      <div className="academy-brand"><div className="academy-emblem"><GraduationCap/></div><div><span className="academy-kicker">CENTRO DE APRENDIZADO</span><h1>Academia de Línguas</h1><p>Seu progresso, suas aulas, seu ritmo.</p></div></div>
      <div className="academy-language-switch">
        <button className={language==="ja"?"active":""} onClick={()=>chooseLanguage("ja")}>🇯🇵 Japonês</button>
        <button className={language==="en"?"active":""} onClick={()=>chooseLanguage("en")}>🇺🇸 Inglês</button>
      </div>
    </header>
    {error&&<div className="academy-alert">{error} <span>Confira se executou o SQL da tabela academy_data.</span></div>}
    <nav className="academy-tabs">
      {[["course","Curso"],["lesson","Aula e prova"],["reports","Relatórios"],["vocabulary","Vocabulário"]].map(([id,label])=><button key={id} className={tab===id?"selected":""} onClick={()=>setTab(id)}>{label}</button>)}
    </nav>
    {tab==="course"&&<>
      <section className="academy-overview">
        <div><span className="academy-kicker">{currentWeek.phase}</span><h2>Semana {week} — {currentWeek.title}</h2><p>{currentWeek.goal}</p></div>
        <div className="academy-week-controls"><button aria-label="Semana anterior" onClick={()=>chooseWeek(week-1)} disabled={week===1}><ChevronLeft/></button><select value={week} onChange={e=>chooseWeek(Number(e.target.value))}>{curriculum.map(w=><option value={w.number} key={w.number}>{progress[`week-${language}-${w.number}`]?.status==="passed"?"✓ ":""}Semana {w.number} — {w.title}</option>)}</select><button aria-label="Próxima semana" onClick={()=>chooseWeek(week+1)} disabled={week===52}><ChevronRight/></button></div>
      </section>
      <section className="academy-progress-card">
        <div className="academy-progress-top"><strong>Progresso desta semana</strong><span>{completedDays}/6 aulas concluídas</span></div>
        <div className="academy-progress-track"><div style={{width:`${completedDays/6*100}%`}}/></div>
        <div className="academy-progress-dots">{DAYS.map((d,i)=><span key={d} className={weekProgress[i]?"done":""}>{i+1}</span>)}</div>
      </section>
      <div className="academy-day-grid">{currentWeek.days.map((d,i)=>{const p=progress[keyFor(language,week,i+1)];return <button key={d.day} className={`academy-day-card ${p?.status==="passed"?"complete":""} ${day===d.day?"current":""}`} onClick={()=>{setDay(d.day);setTab("lesson");setQuiz(null);setResult(null);}}><span className="academy-day-number">DIA {d.day}</span><strong>{d.title}</strong><small>{p?.status==="passed"?"Concluída":DAYS[i]}</small>{p?.status==="passed"&&<CheckCircle2 className="academy-day-check"/>}</button>})}</div>
      <section className="academy-final-card"><div><Trophy/><div><strong>Dia 7 — Avaliação final</strong><p>10 questões sobre os conteúdos dos seis dias.</p><small>{finalPassed?"Avaliação concluída":"Disponível quando quiser revisar a semana"}</small></div></div><button onClick={startFinal}>Fazer prova semanal</button></section>
    </>}
    {tab==="lesson"&&<section className="academy-lesson">
      {!quiz?<><div className="academy-lesson-heading"><span className="academy-kicker">SEMANA {week} · DIA {day}</span><h2>{lesson.title}</h2><p>{currentWeek.title}</p></div><article className="academy-explanation"><h3><BookOpen size={18}/> Explicação da aula</h3><p>{lesson.explanation}</p><h4>Exemplos</h4>{lesson.examples.map(x=><div className="academy-example" key={x}>{x}</div>)}<h4>Pontos para dominar</h4><ul>{lesson.keyPoints.map(x=><li key={x}>{x}</li>)}</ul><p className="academy-engine-note">A explicação segue o currículo cadastrado. O gerador de questões atual usa modelos programados e bancos de exercícios; ele não é uma IA generativa.</p></article><div className="academy-lesson-actions"><button className="academy-primary" onClick={()=>startQuiz("daily")}>Iniciar avaliação · 10 questões</button><button onClick={()=>{if(day>1){setDay(day-1);setQuiz(null);setResult(null)}else chooseWeek(week-1)}} disabled={week===1&&day===1}>Aula anterior</button><button onClick={()=>{if(day<6){setDay(day+1);setQuiz(null);setResult(null)}else startFinal()}}>Próxima aula <ChevronRight size={16}/></button></div></>
      :<><div className="academy-quiz-heading"><span className="academy-kicker">{mode==="final"?"AVALIAÇÃO SEMANAL":mode==="recovery"?"RECUPERAÇÃO":"AVALIAÇÃO DIÁRIA"}</span><h2>{mode==="final"?`Prova da semana ${week}`:lesson.title}</h2><p>{quiz.length} questões · Aprovação: 80%</p></div>{quiz.map((q,i)=><article className="academy-question" key={q.id}><strong>{i+1}. {q.prompt}</strong><div className="academy-options">{q.options.map((op,j)=><label key={`${q.id}-${j}`} className={result?(j===q.correctAnswer?"correct":Number(answers[q.id])===j?"wrong":""):""}><input type="radio" name={q.id} value={j} checked={String(answers[q.id])===String(j)} disabled={!!result} onChange={()=>setAnswers(a=>({...a,[q.id]:String(j)}))}/><span>{op}</span></label>)}</div>{result&&<p className="academy-feedback">{result.results[i].correct?"Correto!":"Resposta correta: "+q.options[q.correctAnswer]} — {q.explanation}</p>}</article>)}{!result?<button className="academy-primary academy-submit" disabled={Object.keys(answers).length!==quiz.length} onClick={submitQuiz}>Corrigir avaliação</button>:<div className="academy-result"><strong>{result.correct}/{result.total} · {result.score}%</strong><p>{result.passed?"Parabéns! Você atingiu a nota necessária.":"Você ainda não atingiu 80%. Revise o conteúdo e tente a recuperação."}</p>{!result.passed&&mode==="daily"&&<button className="academy-primary" onClick={()=>startQuiz("recovery")}>Fazer recuperação · 5 questões</button>}{result.passed&&mode!=="final"&&<button className="academy-primary" onClick={goNext}>{day<6?"Ir para próxima aula":"Ir para avaliação semanal"}</button>}{mode==="final"&&<button onClick={()=>{setQuiz(null);setResult(null);setTab("course")}}>Voltar ao curso</button>}</div>}</>}
    </section>}
    {tab==="reports"&&<section className="academy-reports"><div className="academy-stat-grid"><div><span>Avaliações realizadas</span><strong>{allReports.length}</strong></div><div><span>Média geral</span><strong>{avg}%</strong></div><div><span>Aulas concluídas</span><strong>{Object.entries(progress).filter(([k,v])=>k.startsWith(`${language}-`)&&v.status==="passed").length}</strong></div></div><h2>Histórico de avaliações</h2>{allReports.length===0?<p>Ainda não há avaliações registradas.</p>:allReports.slice(0,50).map(r=><article className="academy-report-row" key={r.id}><div><strong>Semana {r.week} — {r.weekTitle}</strong><small>{r.type==="final"?"Prova semanal":r.type==="recovery"?"Recuperação":`Dia ${r.day}`} · {r.date}</small></div><b className={r.passed?"pass":"fail"}>{r.correct}/{r.total} · {r.score}%</b></article>)}</section>}
    {tab==="vocabulary"&&<Vocabulary data={data} setData={setData} language={language}/>}
  </div>;
}

function Vocabulary({data,setData,language}){
  const [term,setTerm]=useState("");const [meaning,setMeaning]=useState("");
  const words=(data.vocabulary||[]).filter(w=>w.language===language);
  const add=()=>{if(!term.trim()||!meaning.trim())return;setData(d=>({...d,vocabulary:[...(d.vocabulary||[]),{id:Date.now(),language,term:term.trim(),meaning:meaning.trim(),createdAt:today(),reviewed:false}]}));setTerm("");setMeaning("");};
  return <section className="academy-vocabulary"><h2>Caderno de vocabulário</h2><p>Guarde palavras e expressões para revisar depois.</p><div className="academy-vocab-form"><input value={term} onChange={e=>setTerm(e.target.value)} placeholder={language==="ja"?"Palavra em japonês":"Word in English"}/><input value={meaning} onChange={e=>setMeaning(e.target.value)} placeholder="Significado em português"/><button className="academy-primary" onClick={add}>Adicionar</button></div>{words.map(w=><article key={w.id} className="academy-report-row"><div><strong>{w.term}</strong><small>{w.meaning}</small></div><button onClick={()=>setData(d=>({...d,vocabulary:d.vocabulary.map(x=>x.id===w.id?{...x,reviewed:!x.reviewed}:x)}))}>{w.reviewed?"Revisado":"Marcar revisão"}</button></article>)}</section>;
}
