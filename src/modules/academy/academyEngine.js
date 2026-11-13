import { CURRICULA } from "./academyCurriculum";

const jpWords = [
  ["わたし","eu"],["がくせい","estudante"],["げんき","bem / saudável"],
  ["ねこ","gato"],["かわいい","fofo"],["おちゃ","chá"],["おいしい","delicioso"],["ほん","livro"]
];
const enWords = [
  ["student","estudante"],["book","livro"],["house","casa"],["water","água"],
  ["happy","feliz"],["school","escola"],["friend","amigo"],["food","comida"]
];

const hash = (s) => [...String(s)].reduce((a,c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
function shuffleFrom(items, seed) {
  const a = [...items];
  let x = seed || 1;
  for (let i=a.length-1;i>0;i--) { x = (x * 1664525 + 1013904223) >>> 0; const j=x%(i+1); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
function makeQuestion(id, prompt, answer, distractors, explanation) {
  const choices = shuffleFrom([answer, ...distractors.filter(x=>x!==answer).slice(0,3)], hash(id + prompt));
  return { id, prompt, options: choices, correctAnswer: choices.indexOf(answer), explanation };
}
function vocabQuestions(lang, focus, count, seed) {
  const words = lang === "ja" ? jpWords : enWords;
  const questions = [];
  const pool = shuffleFrom(words, seed);
  for (let i=0;i<count;i++) {
    const [word, meaning] = pool[i % pool.length];
    const distractors = pool.filter(x=>x[1]!==meaning).map(x=>x[1]);
    questions.push(makeQuestion(
      `${seed}-v${i}`,
      lang === "ja" ? `O que significa “${word}”?` : `Qual é o significado de “${word}”?`,
      meaning, distractors,
      `“${word}” significa “${meaning}”.`
    ));
  }
  return questions;
}
function topicQuestions(lang, week, day, count, seed) {
  const curriculum = CURRICULA[lang][week-1];
  const lessons = curriculum.days;
  const target = lessons[day-1]?.title || curriculum.title;
  const all = lessons.map(x=>x.title);
  const questions = [];
  for (let i=0;i<count;i++) {
    const distractors = all.filter(x=>x!==target);
    const prompts = [
      `Qual é o foco principal desta aula: “${target}”?`,
      `Qual tópico você precisa dominar no Dia ${day}?`,
      `A aula atual trabalha qual conteúdo?`,
      `Identifique o assunto estudado nesta lição.`
    ];
    questions.push(makeQuestion(`${seed}-t${i}`, prompts[i%prompts.length], target, distractors, `O foco desta aula é “${target}”, dentro da semana ${week}: ${curriculum.title}.`));
  }
  return questions;
}
function weeklyTopicQuestions(lang, week, count, seed) {
  const lessons = CURRICULA[lang][week-1].days;
  const all = lessons.map(x=>x.title);
  return Array.from({length:count},(_,i)=>{
    const target = lessons[i%lessons.length].title;
    const distractors = all.filter(x=>x!==target);
    return makeQuestion(`${seed}-week-${i}`, `Qual conteúdo foi estudado no Dia ${(i%6)+1} desta semana?`, target, distractors,
      `O Dia ${(i%6)+1} abordou “${target}”.`);
  });
}
function englishGrammarQuestions(week, day, count, seed) {
  const banks = {
    1: [
      ["Choose the correct sentence.","I am a student.",["I is a student.","I are a student.","I be a student."],"With I, use am."],
      ["Choose the correct pronoun for Maria.","She",["He","It","They"],"Maria is referred to with she."],
      ["Complete: They ___ happy.","are",["am","is","be"],"Use are with they."]
    ],
    2: [
      ["Choose the correct third-person form.","She works every day.",["She work every day.","She working every day.","She do works every day."],"In the present simple, he/she/it usually takes -s."],
      ["Choose the negative form.","I do not like coffee.",["I does not like coffee.","I not like coffee.","I am not like coffee."],"Use do not with I/you/we/they."],
      ["Complete: ___ he live here?","Does",["Do","Is","Are"],"Use does for he/she/it."]
    ],
    3: [
      ["Choose the correct question.","Do you study English?",["Does you study English?","Are you study English?","You do study English?"],"Use do + subject + base verb."],
      ["Which means “sempre”?","always",["never","sometimes","rarely"],"Always means sempre."],
      ["Which means “nunca”?","never",["usually","often","always"],"Never means nunca."]
    ],
    4: [
      ["Choose the regular past form of play.","played",["plaied","playd","playing"],"Most regular verbs add -ed."],
      ["Choose the correct negative.","I didn't work yesterday.",["I don't worked yesterday.","I didn't worked yesterday.","I not work yesterday."],"After didn't, use the base verb."],
      ["Choose the correct question.","Did you study?",["Did you studied?","Do you studied?","Were you study?"],"After did, use the base verb."]
    ],
    6: [
      ["Which form commonly expresses a planned intention?","going to",["did","does","was"],"Going to is commonly used for plans."],
      ["Which modal can express a prediction?","will",["has","does","were"],"Will can express predictions."],
      ["Complete: I am ___ visit my friend.","going to",["go to","will to","went to"],"Use am/is/are going to + base verb."]
    ],
    10: [
      ["Choose the present continuous.","I am studying now.",["I study every day.","I studied yesterday.","I will study tomorrow."],"Present continuous uses be + verb-ing."],
      ["Choose the present simple for a habit.","She walks to school every day.",["She is walking now.","She walked yesterday.","She will walk tomorrow."],"Present simple describes habits and routines."],
      ["Complete: They ___ playing.","are",["is","am","be"],"Use are with they."]
    ],
    20: [
      ["Choose the present perfect.","I have visited Japan.",["I visit Japan yesterday.","I am visit Japan.","I has visited Japan."],"Present perfect uses have/has + past participle."],
      ["Which word means “já” in many present perfect contexts?","already",["yet","never","since"],"Already often means já."],
      ["Complete: Have you ___ eaten sushi?","ever",["yet","just","for"],"Ever is common in experience questions."]
    ]
  };
  const bank = banks[week] || [
    [`Which option is most closely related to “${CURRICULA.en[week-1].days[day-1].title}”?`, CURRICULA.en[week-1].days[day-1].title,
      [CURRICULA.en[week-1].days[(day)%6].title,CURRICULA.en[week-1].days[(day+1)%6].title,CURRICULA.en[week-1].title],
      `This lesson focuses on ${CURRICULA.en[week-1].days[day-1].title}.`]
  ];
  const out=[];
  for(let i=0;i<count;i++){
    const item=bank[i%bank.length];
    out.push(makeQuestion(`${seed}-g${i}`,item[0],item[1],item[2],item[3]));
  }
  return out;
}
function japaneseGrammarQuestions(week, day, count, seed) {
  const bank = [
    ["O que は geralmente marca na frase básica?","O tópico da frase",["O passado do verbo","Uma pergunta de preço","O plural"],"は marca o tópico da frase."],
    ["Qual expressão pode significar “Eu sou estudante”?","わたしは がくせいです。",["ねこは かわいいです。","これは おちゃです。","ほんを よみます。"],"わたしは がくせいです。 = Eu sou estudante."],
    ["Qual é a leitura de ねこ?","neko",["hon","ocha","watashi"],"ねこ é lido neko e significa gato."],
    ["Qual partícula costuma marcar o objeto direto?","を",["は","に","も"],"を marca frequentemente o objeto direto."],
    ["Qual forma é usada para expressar desejo de fazer algo?","たい",["でした","まで","から"],"たい expressa desejo de realizar uma ação."]
  ];
  const out=[];
  for(let i=0;i<count;i++){ const q=bank[(i+seed)%bank.length]; out.push(makeQuestion(`${seed}-j${i}`,q[0],q[1],q[2],q[3])); }
  return out;
}
export function getLesson(language, week, day) {
  const w = CURRICULA[language][week-1], d = w.days[day-1];
  return { language, week, weekTitle:w.title, phase:w.phase, day, title:d.title, explanation:d.explanation, examples:d.examples, keyPoints:d.keyPoints };
}
export function createQuiz({language, week, day=1, count=10, type="daily", seed=Date.now()}) {
  const base = hash(`${language}-${week}-${day}-${type}-${seed}`);
  let questions;
  if (type === "final") {
    questions = weeklyTopicQuestions(language, week, count, base);
  } else if (language === "en") {
    questions = [...englishGrammarQuestions(week,day,Math.ceil(count*.7),base), ...topicQuestions(language,week,day,count-Math.ceil(count*.7),base+31)];
  } else {
    questions = [...japaneseGrammarQuestions(week,day,Math.ceil(count*.7),base), ...topicQuestions(language,week,day,count-Math.ceil(count*.7),base+31)];
  }
  // Vocabulário inicial entra como contexto extra, sem exigir katakana antes da semana 17.
  if (language === "ja" && week <= 16 && count >= 10) {
    questions.splice(0,2,...vocabQuestions(language,"",2,base+71));
  }
  return shuffleFrom(questions,base+101).slice(0,count);
}
export function gradeQuiz(questions, answers) {
  const results=questions.map(q=>({id:q.id,correct:Number(answers[q.id])===q.correctAnswer,correctAnswer:q.options[q.correctAnswer],explanation:q.explanation}));
  const correct=results.filter(x=>x.correct).length, total=questions.length;
  const score=total ? Math.round(correct/total*100) : 0;
  return {correct,total,score,passed:score>=80,results};
}
export function getCurriculum(language) { return CURRICULA[language] || CURRICULA.en; }
export function getWeekName(language, week) { return getCurriculum(language)[week-1]?.title || "Semana"; }
