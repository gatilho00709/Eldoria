
import { CURRICULUM } from './academyCurriculum'

const JAPANESE_QUESTIONS = [
  { question: 'O que significa わたし?', options: ['Eu', 'Gato', 'Livro', 'Chá'], answer: 0, explanation: 'わたし significa eu.' },
  { question: 'Qual palavra significa gato?', options: ['ほん', 'ねこ', 'おちゃ', 'がくせい'], answer: 1, explanation: 'ねこ significa gato.' },
  { question: 'O que significa おいしい?', options: ['Triste', 'Livro', 'Delicioso', 'Estudante'], answer: 2, explanation: 'おいしい significa delicioso.' },
  { question: 'Qual palavra significa estudante?', options: ['がくせい', 'ねこ', 'ほん', 'かわいい'], answer: 0, explanation: 'がくせい significa estudante.' },
  { question: 'O que significa ほん?', options: ['Água', 'Livro', 'Gato', 'Chá'], answer: 1, explanation: 'ほん significa livro.' },
  { question: 'Qual palavra significa fofo?', options: ['げんき', 'おちゃ', 'かわいい', 'わたし'], answer: 2, explanation: 'かわいい significa fofo.' },
  { question: 'O que significa おちゃ?', options: ['Chá', 'Livro', 'Estudante', 'Gato'], answer: 0, explanation: 'おちゃ significa chá.' },
  { question: 'Qual palavra pode significar bem ou saudável?', options: ['ねこ', 'げんき', 'ほん', 'おいしい'], answer: 1, explanation: 'げんき significa bem ou saudável.' },
  { question: 'Como se diz "Eu sou estudante"?', options: ['ねこです', 'おちゃです', 'わたしは がくせいです', 'ほんです'], answer: 2, explanation: 'わたしは がくせいです significa eu sou estudante.' },
  { question: 'Qual palavra significa livro?', options: ['ほん', 'ねこ', 'げんき', 'かわいい'], answer: 0, explanation: 'ほん significa livro.' },
]

const ENGLISH_QUESTIONS = [
  { question: 'What does "I" mean?', options: ['Você', 'Eu', 'Ele', 'Nós'], answer: 1, explanation: 'I significa eu.' },
  { question: 'What does "cat" mean?', options: ['Cachorro', 'Livro', 'Gato', 'Casa'], answer: 2, explanation: 'Cat significa gato.' },
  { question: 'What does "book" mean?', options: ['Livro', 'Água', 'Comida', 'Escola'], answer: 0, explanation: 'Book significa livro.' },
  { question: 'What does "happy" mean?', options: ['Triste', 'Feliz', 'Bravo', 'Cansado'], answer: 1, explanation: 'Happy significa feliz.' },
  { question: 'How do you say "Eu sou estudante"?', options: ['I am a student.', 'I cat student.', 'You are book.', 'I happy.'], answer: 0, explanation: 'I am a student significa eu sou estudante.' },
  { question: 'What does "water" mean?', options: ['Leite', 'Chá', 'Água', 'Suco'], answer: 2, explanation: 'Water significa água.' },
  { question: 'What does "beautiful" mean?', options: ['Bonito', 'Feio', 'Pequeno', 'Grande'], answer: 0, explanation: 'Beautiful significa bonito.' },
  { question: 'What does "delicious" mean?', options: ['Amargo', 'Delicioso', 'Frio', 'Quente'], answer: 1, explanation: 'Delicious significa delicioso.' },
  { question: 'Complete: My name ___ Caio.', options: ['are', 'be', 'is', 'am'], answer: 2, explanation: 'My name is Caio.' },
  { question: 'What does "student" mean?', options: ['Professor', 'Estudante', 'Diretor', 'Amigo'], answer: 1, explanation: 'Student significa estudante.' },
]

export function createLesson(language, topic, customContent = '') {
  const curriculum = CURRICULUM[language]
  const allTopics = curriculum.levels.flatMap(level => level.topics)

  const found = allTopics.find(
    item => item.title.toLowerCase() === topic.toLowerCase()
  )

  return {
    id: crypto.randomUUID(),
    language,
    topic,
    explanation: customContent.trim()
      ? customContent.trim()
      : found?.explanation || `Nesta aula vamos estudar ${topic}. O conteúdo será trabalhado com exemplos e exercícios.`,
    examples: found?.examples || [],
    createdAt: new Date().toISOString(),
  }
}

export function generateQuiz(language, amount = 10) {
  const source = language === 'japanese'
    ? JAPANESE_QUESTIONS
    : ENGLISH_QUESTIONS

  return Array.from({ length: amount }, (_, index) => ({
    ...source[index % source.length],
    id: `${language}-${amount}-${index}`,
  }))
}

export function gradeQuiz(questions, answers) {
  const correct = questions.filter(
    (question, index) => Number(answers[index]) === question.answer
  ).length

  const total = questions.length
  const percentage = total ? Math.round((correct / total) * 100) : 0

  return {
    correct,
    total,
    percentage,
    passed: percentage >= 80,
  }
}

export function distributeWeeklyContent(content, selectedDays) {
  const topics = content
    .split('\n')
    .map(item => item.trim())
    .filter(Boolean)

  if (!topics.length || !selectedDays.length) return []

  return selectedDays.map((day, index) => ({
    id: crypto.randomUUID(),
    day,
    topic: topics[index % topics.length],
    completed: false,
  }))
}

export function getDayName(day) {
  return [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ][day]
}
