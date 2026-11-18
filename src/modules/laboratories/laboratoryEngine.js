
// laboratoryEngine.js

import { LABORATORY_QUESTIONS } from "./laboratoryQuestions";

export const PASSING_SCORE = 80;

export const QUIZ_SIZES = {
  daily: 5,
  recovery: 5,
  final: 10
};


// =====================================================
// VALIDAÇÃO
// =====================================================

function validateQuestion(question) {

  if (!question.id) return false;

  if (!question.prompt) return false;

  if (!Array.isArray(question.options)) return false;

  if (question.options.length !== 4) return false;

  if (
    !Number.isInteger(question.correctAnswer) ||
    question.correctAnswer < 0 ||
    question.correctAnswer > 3
  ) return false;

  if (!question.explanation) return false;

  return true;

}


// =====================================================
// EMBARALHAMENTO
// =====================================================

function shuffle(array) {

  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];

  }

  return result;

}


// =====================================================
// CRIAÇÃO DE AVALIAÇÕES
// =====================================================

export function createQuiz({
  section,
  week,
  day = 1,
  type = "daily",
  count,
  seed
}) {

  const weekBank = LABORATORY_QUESTIONS[section]?.[week];

  if (!weekBank) {

    throw new Error(
      `Não existe banco de questões para ${section}, semana ${week}.`
    );

  }

  let questions = [];

  if (type === "daily") {

    questions = weekBank.days?.[day] || [];

  }

  else if (type === "recovery") {

    questions = weekBank.recovery || [];

  }

  else if (type === "final") {

    questions = Object.values(weekBank.days || {})
      .flat();

  }

  else {

    throw new Error("Tipo de avaliação inválido.");

  }

  questions = questions.filter(validateQuestion);

  const requestedCount = count || QUIZ_SIZES[type];

  if (questions.length < requestedCount) {

    throw new Error(
      `Banco incompleto: ${questions.length}/${requestedCount} questões válidas.`
    );

  }

  return shuffle(questions)
    .slice(0, requestedCount)
    .map((question, index) => ({

      ...question,

      displayNumber: index + 1

    }));

}


// =====================================================
// CORREÇÃO
// =====================================================

export function gradeQuiz(quiz, answers) {

  let correct = 0;

  const results = quiz.map(question => {

    const userAnswer = answers[question.id];

    const isCorrect = userAnswer === question.correctAnswer;

    if (isCorrect) correct++;

    return {

      ...question,

      userAnswer,

      isCorrect

    };

  });

  const total = quiz.length;

  const score = total
    ? Math.round((correct / total) * 100)
    : 0;

  return {

    correct,
    total,
    score,

    passed: score >= PASSING_SCORE,

    results

  };

}
