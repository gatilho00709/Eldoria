
export const CURRICULUM = {
  japanese: {
    name: 'Japonês',
    flag: '🇯🇵',
    levels: [
      {
        title: 'Primeiros passos',
        topics: [
          {
            title: 'Apresentações',
            explanation:
              'Nesta aula você vai aprender a se apresentar em japonês. わたし significa eu. がくせい significa estudante. Para dizer que você é estudante, pode usar わたしは がくせいです.',
            examples: [
              { jp: 'わたし', romaji: 'watashi', pt: 'Eu' },
              { jp: 'がくせい', romaji: 'gakusei', pt: 'Estudante' },
              { jp: 'わたしは がくせいです。', romaji: 'Watashi wa gakusei desu.', pt: 'Eu sou estudante.' },
            ],
          },
          {
            title: 'Adjetivos básicos',
            explanation:
              'Os adjetivos descrevem pessoas, objetos e situações. かわいい significa fofo ou bonito. おいしい significa gostoso ou delicioso. げんき pode significar bem, saudável ou animado.',
            examples: [
              { jp: 'かわいい', romaji: 'kawaii', pt: 'Fofo' },
              { jp: 'おいしい', romaji: 'oishii', pt: 'Delicioso' },
              { jp: 'げんき', romaji: 'genki', pt: 'Bem / saudável' },
            ],
          },
          {
            title: 'Objetos e animais',
            explanation:
              'Vamos aprender palavras do cotidiano. ねこ significa gato, ほん significa livro e おちゃ significa chá.',
            examples: [
              { jp: 'ねこ', romaji: 'neko', pt: 'Gato' },
              { jp: 'ほん', romaji: 'hon', pt: 'Livro' },
              { jp: 'おちゃ', romaji: 'ocha', pt: 'Chá' },
            ],
          },
        ],
      },
    ],
  },

  english: {
    name: 'Inglês',
    flag: '🇬🇧',
    levels: [
      {
        title: 'Beginner',
        topics: [
          {
            title: 'Introducing yourself',
            explanation:
              'In English, we use I am to identify ourselves. You can also use I am a student to say that you study.',
            examples: [
              { jp: 'I am', romaji: 'I am', pt: 'Eu sou / estou' },
              { jp: 'I am a student.', romaji: 'I am a student.', pt: 'Eu sou estudante.' },
              { jp: 'My name is Caio.', romaji: 'My name is Caio.', pt: 'Meu nome é Caio.' },
            ],
          },
          {
            title: 'Basic adjectives',
            explanation:
              'Adjectives describe people, animals and objects. Happy means feliz, beautiful means bonito e delicious means delicioso.',
            examples: [
              { jp: 'Happy', romaji: 'happy', pt: 'Feliz' },
              { jp: 'Beautiful', romaji: 'beautiful', pt: 'Bonito' },
              { jp: 'Delicious', romaji: 'delicious', pt: 'Delicioso' },
            ],
          },
          {
            title: 'Everyday vocabulary',
            explanation:
              'Learn common words used in everyday situations. Cat means gato, book means livro and water means água.',
            examples: [
              { jp: 'Cat', romaji: 'cat', pt: 'Gato' },
              { jp: 'Book', romaji: 'book', pt: 'Livro' },
              { jp: 'Water', romaji: 'water', pt: 'Água' },
            ],
          },
        ],
      },
    ],
  },
}

export const INITIAL_VOCABULARY = [
  { language: 'japanese', word: 'わたし', reading: 'watashi', meaning: 'Eu' },
  { language: 'japanese', word: 'がくせい', reading: 'gakusei', meaning: 'Estudante' },
  { language: 'japanese', word: 'げんき', reading: 'genki', meaning: 'Bem / saudável' },
  { language: 'japanese', word: 'ねこ', reading: 'neko', meaning: 'Gato' },
  { language: 'japanese', word: 'かわいい', reading: 'kawaii', meaning: 'Fofo' },
  { language: 'japanese', word: 'おちゃ', reading: 'ocha', meaning: 'Chá' },
  { language: 'japanese', word: 'おいしい', reading: 'oishii', meaning: 'Delicioso' },
  { language: 'japanese', word: 'ほん', reading: 'hon', meaning: 'Livro' },
]
