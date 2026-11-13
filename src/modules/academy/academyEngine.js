
import { CURRICULA } from "./academyCurriculum";
import { QUESTION_BANK } from "./academyQuestions";

const PASSING_SCORE = 80;

const QUIZ_SIZES = {
  daily: 10,
  recovery: 5,
  final: 10,
};

// ==========================================
// CURRÍCULO
// ==========================================

function normalizeLanguage(language) {
  if (language === "jp") return "ja";
  if (language === "ja" || language === "en") return language;

  throw new Error("Idioma inválido.");
}

export function getCurriculum(language) {
  const lang = normalizeLanguage(language);

  return CURRICULA[lang].map((week, wi) => ({
    ...week,
    number: wi + 1,
    week: wi + 1,
    days: week.days.map((day, di) => ({
      ...day,
      day: di + 1,
    })),
  }));
}

export function getWeekName(language, week) {
  const lang = normalizeLanguage(language);
  return CURRICULA[lang]?.[week - 1]?.title || "Semana";
}

export function getLesson(language, week, day) {
  const lang = normalizeLanguage(language);
  const currentWeek = CURRICULA[lang]?.[week - 1];
  const lesson = currentWeek?.days?.[day - 1];

  if (!lesson) throw new Error("Aula não encontrada.");

  return {
    language: lang,
    week,
    weekTitle: currentWeek.title,
    phase: currentWeek.phase,
    day,
    title: lesson.title,
    explanation: lesson.explanation || "",
    examples: lesson.examples || [],
    keyPoints: lesson.keyPoints || [],
    goal: currentWeek.goal || "",
  };
}

// ==========================================
// EMBARALHAMENTO
// ==========================================

function shuffle(array, seed = Date.now()) {
  const result = [...array];
  let value = Math.abs(Number(seed)) || 1;

  for (let i = result.length - 1; i > 0; i--) {
    value = (value * 16807) % 2147483647;
    const j = Math.floor((value / 2147483647) * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

// ==========================================
// VALIDAÇÃO DAS QUESTÕES
// ==========================================

function validateQuestion(question) {
  if (!question.id || !question.prompt) {
    throw new Error("Questão sem identificação ou enunciado.");
  }

  if (!Array.isArray(question.options) || question.options.length !== 4) {
    throw new Error(`A questão ${question.id} precisa de 4 alternativas.`);
  }

  if (
    !Number.isInteger(question.correctAnswer) ||
    question.correctAnswer < 0 ||
    question.correctAnswer > 3
  ) {
    throw new Error(`Gabarito inválido: ${question.id}`);
  }

  if (!question.explanation) {
    throw new Error(`Falta explicação: ${question.id}`);
  }

  return question;
}

// ==========================================
// CRIAÇÃO DAS PROVAS
// ==========================================

export function createQuiz({
  language,
  week,
  day = 1,
  count,
  type = "daily",
  seed = Date.now(),
}) {
  const lang = normalizeLanguage(language);
  const expected = QUIZ_SIZES[type];

  if (!expected) throw new Error("Tipo de prova inválido.");

  if (count !== undefined && count !== expected) {
    throw new Error(`Esta prova precisa ter ${expected} questões.`);
  }

  const weekBank = QUESTION_BANK[lang]?.[week];

  if (!weekBank) {
    throw new Error(`Banco da semana ${week} ainda não cadastrado.`);
  }

  let questions;

  if (type === "daily") {
    questions = weekBank.days?.[day];
  } else {
    questions = weekBank[type];
  }

  if (!Array.isArray(questions)) {
    throw new Error(
      `Questões de ${lang}, semana ${week}, aula ${day}, tipo ${type} não cadastradas.`
    );
  }

  questions.forEach(validateQuestion);

  if (questions.length < expected) {
    throw new Error(
      `Banco incompleto: ${questions.length}/${expected} questões.`
    );
  }

  return shuffle(questions, seed)
    .slice(0, expected)
    .map((question, index) => ({
      ...question,
      displayNumber: index + 1,
    }));
}

// ==========================================
// CORREÇÃO AUTOMÁTICA
// ==========================================

export function gradeQuiz(questions, answers) {
  const results = questions.map((question) => {
    const answer = answers?.[question.id];
    const answered = answer !== undefined && answer !== "";

    const correct =
      answered && Number(answer) === question.correctAnswer;

    return {
      id: question.id,
      prompt: question.prompt,
      selectedAnswer: answered ? Number(answer) : null,
      correctAnswer: question.correctAnswer,
      correct,
      explanation: question.explanation,
    };
  });

  const total = questions.length;
  const correct = results.filter((item) => item.correct).length;
  const score = total
    ? Math.round((correct / total) * 100)
    : 0;

  return {
    correct,
    total,
    score,
    passed: score >= PASSING_SCORE,
    results,
  };
}

