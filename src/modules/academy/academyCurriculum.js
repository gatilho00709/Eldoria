
// ============================================
// ELDORIA — ACADEMIA DE LÍNGUAS
// CURRÍCULO COMPLETO
// ============================================
//
// Cada idioma possui uma sequência de semanas.
// Cada semana possui 6 aulas.
// Cada aula possui:
// - title
// - explanation
// - examples
// - keyPoints
//
// IMPORTANTE:
// As semanas serão adicionadas individualmente.
// Não utilizar explicações ou exemplos genéricos.
// ============================================


// ============================================
// JAPONÊS
// ============================================

const jp = [

{
  title: "Hiragana + estrutura básica",

  goal: "Reconhecer os sons básicos do Hiragana e construir frases afirmativas extremamente simples em japonês.",

  days: [
    {
      title: "Revisão do Hiragana: sons e combinações",

      explanation: "O Hiragana é um dos sistemas de escrita japoneses. Cada caractere representa geralmente uma unidade sonora, formada por uma vogal ou por uma combinação de consoante e vogal. As cinco vogais fundamentais são あ (a), い (i), う (u), え (e) e お (o). A partir delas surgem sequências como か (ka), き (ki), く (ku), け (ke) e こ (ko). Também existem combinações especiais: quando や, ゆ ou よ aparecem em tamanho pequeno depois de determinados caracteres, formam um som combinado, como きゃ (kya), しゅ (shu) e ちょ (cho). O objetivo é reconhecer os sons e ler palavras simples sem depender da romanização.",

      examples: [
        "あお (ao) — azul.",
        "いえ (ie) — casa.",
        "ねこ (neko) — gato.",
        "きょう (kyou) — hoje.",
        "しゃしん (shashin) — fotografia."
      ],

      keyPoints: [
        "As cinco vogais são あ, い, う, え e お.",
        "Cada caractere representa uma unidade sonora.",
        "Caracteres pequenos ゃ, ゅ e ょ formam combinações.",
        "A leitura deve ser praticada diretamente em Hiragana."
      ]
    },

    {
      title: "Ordem básica das frases",

      explanation: "A estrutura das frases japonesas é diferente da estrutura mais comum do português. Em português, dizemos normalmente 'Eu como uma maçã'. Em japonês, a informação costuma ser organizada de modo que o verbo apareça no final. Uma estrutura inicial muito útil é: tópico + informação + verbo ou expressão final. As partículas ajudam a identificar a função das palavras. Por isso, não devemos traduzir uma frase japonesa simplesmente palavra por palavra seguindo a ordem portuguesa. É necessário observar como cada elemento se relaciona com os outros.",

      examples: [
        "わたしは がくせいです。 — Eu sou estudante.",
        "わたしは ほんを よみます。 — Eu leio um livro.",
        "ねこが います。 — Há um gato."
      ],

      keyPoints: [
        "O verbo geralmente aparece no final.",
        "A ordem japonesa não é igual à portuguesa.",
        "As partículas indicam relações entre palavras.",
        "Aprenda a reconhecer a estrutura completa da frase."
      ]
    },

    {
      title: "A expressão です",

      explanation: "です é uma expressão muito utilizada para terminar frases educadas. Em construções básicas, ela pode transmitir o sentido de 'ser' ou 'estar', dependendo da informação apresentada. Ela aparece depois do substantivo ou da expressão que descreve o tópico. Por exemplo, em わたしは がくせいです, a expressão がくせい significa estudante e です completa a afirmação. É importante entender que です não funciona exatamente como os verbos portugueses em todas as situações: sua utilização depende da estrutura japonesa.",

      examples: [
        "わたしは がくせいです。 — Eu sou estudante.",
        "これは ほんです。 — Isto é um livro.",
        "あのひとは せんせいです。 — Aquela pessoa é professora.",
        "おちゃは おいしいです。 — O chá é gostoso."
      ],

      keyPoints: [
        "です aparece frequentemente no final de frases educadas.",
        "Pode transmitir a ideia de ser ou estar.",
        "É utilizado depois da informação apresentada.",
        "Não deve ser confundido com todos os usos dos verbos portugueses."
      ]
    },

    {
      title: "A partícula は",

      explanation: "A partícula は apresenta o tópico da frase, isto é, aquilo sobre o que estamos falando. Ela aparece depois da palavra que representa esse tópico. Um detalhe muito importante é que, quando は funciona como partícula, sua pronúncia é 'wa', embora o caractere normalmente represente o som 'ha'. Em わたしは がくせいです, por exemplo, わたし é o tópico e は indica que a frase apresentará uma informação sobre ele. Essa partícula será muito importante durante todo o aprendizado do japonês.",

      examples: [
        "わたしは がくせいです。 — Eu sou estudante.",
        "ねこは かわいいです。 — O gato é fofo.",
        "これは ほんです。 — Isto é um livro.",
        "おちゃは おいしいです。 — O chá é gostoso."
      ],

      keyPoints: [
        "は apresenta o tópico da frase.",
        "A partícula é pronunciada 'wa'.",
        "Ela aparece depois do tópico.",
        "O caractere は também pode ter a leitura normal 'ha' em outras palavras."
      ]
    },

    {
      title: "Construindo frases afirmativas",

      explanation: "Uma frase afirmativa apresenta uma informação como verdadeira. Uma das estruturas mais simples do japonês é tópico + は + informação + です. Com ela, podemos falar sobre nossa identidade, objetos e características. Também podemos combinar essa estrutura com palavras que já conhecemos. Observe que o tópico aparece primeiro e que です encerra a frase. A prática consiste em substituir o tópico e a informação para construir novas afirmações sem mudar a estrutura principal.",

      examples: [
        "わたしは がくせいです。 — Eu sou estudante.",
        "これは ほんです。 — Isto é um livro.",
        "ねこは かわいいです。 — O gato é fofo.",
        "おちゃは おいしいです。 — O chá é gostoso.",
        "わたしは げんきです。 — Eu estou bem."
      ],

      keyPoints: [
        "Frases afirmativas comunicam informações.",
        "は apresenta o tópico.",
        "A informação aparece depois do tópico.",
        "です encerra muitas afirmações educadas.",
        "Substituir palavras permite criar novas frases."
      ]
    },

    {
      title: "Apresentação pessoal",

      explanation: "Agora vamos reunir as estruturas estudadas para criar uma apresentação pessoal simples. Podemos começar dizendo que somos estudantes, falar de algo de que gostamos ou informar como estamos. A expressão わたし significa 'eu' e pode ser utilizada para apresentar o tópico. A construção わたしは, seguida de uma informação e de です, permite formar várias frases. O objetivo desta aula é conseguir produzir uma pequena apresentação usando frases independentes e compreensíveis.",

      examples: [
        "わたしは がくせいです。 — Eu sou estudante.",
        "わたしは げんきです。 — Eu estou bem.",
        "わたしは ねこが すきです。 — Eu gosto de gatos.",
        "わたしは おちゃが すきです。 — Eu gosto de chá."
      ],

      keyPoints: [
        "わたし significa eu.",
        "わたしは apresenta o assunto da frase.",
        "です pode encerrar uma apresentação educada.",
        "É possível apresentar várias informações em frases separadas.",
        "Pratique falando sem depender da tradução."
      ]
    }
  ]
},

{
  title: "Partículas básicas",

  goal: "Compreender a função das partículas は, が, を e も e utilizá-las em frases simples.",

  days: [
    {
      title: "A partícula は: identificando o tópico",

      explanation: "A partícula は indica o tópico da frase. Ela apresenta o assunto sobre o qual será dada uma informação. Por exemplo, em わたしは がくせいです, o assunto é わたし, ou seja, eu. A informação apresentada sobre esse assunto é がくせいです, sou estudante. É importante lembrar que は não é simplesmente uma tradução de 'eu' ou de 'sobre'. Sua função é gramatical: organizar a informação e indicar o tópico. Em conversas, o tópico pode ser omitido quando já está claro pelo contexto.",

      examples: [
        "わたしは がくせいです。 — Eu sou estudante.",
        "ねこは かわいいです。 — O gato é fofo.",
        "これは ほんです。 — Isto é um livro.",
        "おちゃは おいしいです。 — O chá é gostoso."
      ],

      keyPoints: [
        "は marca o tópico.",
        "Sua pronúncia como partícula é 'wa'.",
        "Ela aparece depois do tópico.",
        "O tópico é o assunto sobre o qual a frase apresenta uma informação."
      ]
    },

    {
      title: "A partícula が: sujeito e destaque",

      explanation: "A partícula が pode marcar o sujeito da frase e destacar quem ou o que está relacionado à informação apresentada. Ela é muito utilizada quando introduzimos uma informação nova, identificamos algo ou falamos sobre existência. Também aparece em determinadas construções de preferência, como わたしは ねこが すきです. Nesse exemplo, わたしは apresenta o tópico, enquanto ねこが identifica aquilo de que a pessoa gosta. A diferença entre は e が depende do contexto, e nem sempre existe uma tradução direta para o português.",

      examples: [
        "ねこが います。 — Há um gato.",
        "だれが きますか。 — Quem vem?",
        "いぬが います。 — Há um cachorro.",
        "わたしは ねこが すきです。 — Eu gosto de gatos."
      ],

      keyPoints: [
        "が pode marcar o sujeito.",
        "É comum ao apresentar informações novas.",
        "Aparece em frases de existência.",
        "Também aparece em expressões de preferência.",
        "は e が não são intercambiáveis em todos os contextos."
      ]
    },

    {
      title: "A partícula を: objeto da ação",

      explanation: "A partícula を indica frequentemente o objeto direto de uma ação, ou seja, aquilo que recebe a ação expressa pelo verbo. Ela é escrita com o caractere を, mas sua pronúncia moderna é 'o'. Normalmente aparece depois do objeto e antes do verbo. Por exemplo, em ほんを よみます, ほん significa livro, を indica que o livro é o objeto da ação e よみます significa ler. Essa partícula é especialmente útil para falar de atividades cotidianas.",

      examples: [
        "ほんを よみます。 — Leio um livro.",
        "おちゃを のみます。 — Bebo chá.",
        "りんごを たべます。 — Como uma maçã.",
        "みずを のみます。 — Bebo água."
      ],

      keyPoints: [
        "を marca frequentemente o objeto direto.",
        "Sua pronúncia é 'o'.",
        "Aparece depois do objeto.",
        "Normalmente vem antes do verbo.",
        "É utilizada com ações como ler, beber e comer."
      ]
    },

    {
      title: "A partícula も: também",

      explanation: "A partícula も transmite a ideia de 'também'. Ela é utilizada quando queremos acrescentar outro elemento a uma informação que já foi apresentada. Em muitos casos, も ocupa o lugar de は ou が, dependendo da estrutura da frase. Por exemplo, わたしは がくせいです significa 'eu sou estudante', enquanto わたしも がくせいです significa 'eu também sou estudante'. A partícula permite relacionar duas informações sem precisar repetir toda a ideia anterior.",

      examples: [
        "わたしも がくせいです。 — Eu também sou estudante.",
        "これも ほんです。 — Isto também é um livro.",
        "ねこも かわいいです。 — O gato também é fofo.",
        "わたしも おちゃを のみます。 — Eu também bebo chá."
      ],

      keyPoints: [
        "も pode significar também.",
        "É usada para acrescentar uma informação.",
        "Frequentemente substitui outra partícula.",
        "O contexto ajuda a identificar a relação entre as frases."
      ]
    },

    {
      title: "Identificando a função de cada partícula",

      explanation: "As partículas são pequenas, mas mudam a organização e a interpretação das frases. Para identificá-las, observe a palavra que aparece antes de cada uma. Se は vier depois de um tópico, a frase está apresentando uma informação sobre ele. Se が marcar um sujeito ou elemento destacado, observe o que está sendo identificado. Se を vier depois de algo que recebe uma ação, procure o verbo correspondente. Já も indica que uma informação também se aplica a outro elemento. Essa análise é mais importante do que decorar traduções isoladas.",

      examples: [
        "わたしは がくせいです。 — は apresenta o tópico: eu.",
        "ねこが います。 — が marca aquilo que existe: gato.",
        "ほんを よみます。 — を marca o objeto da ação: livro.",
        "わたしも がくせいです。 — も acrescenta a ideia de também."
      ],

      keyPoints: [
        "は apresenta o tópico.",
        "が pode marcar o sujeito ou destacar uma informação.",
        "を marca frequentemente o objeto da ação.",
        "も acrescenta a ideia de também.",
        "Observe a função da partícula dentro da frase inteira."
      ]
    },

    {
      title: "Montando frases com partículas",

      explanation: "Nesta aula, você vai combinar as quatro partículas estudadas para construir frases mais completas. Uma mesma frase pode conter várias partículas, cada uma com uma função diferente. Em わたしは ほんを よみます, は apresenta o tópico e を marca o objeto da ação. Já em わたしは ねこが すきです, は apresenta a pessoa sobre a qual estamos falando e が marca aquilo de que ela gosta. O objetivo é reconhecer essas relações e montar frases próprias.",

      examples: [
        "わたしは ほんを よみます。 — Eu leio um livro.",
        "わたしは おちゃを のみます。 — Eu bebo chá.",
        "わたしも がくせいです。 — Eu também sou estudante.",
        "わたしは ねこが すきです。 — Eu gosto de gatos.",
        "ねこが います。 — Há um gato."
      ],

      keyPoints: [
        "Uma frase pode ter várias partículas.",
        "Cada partícula possui uma função própria.",
        "は e が podem aparecer na mesma frase.",
        "A partícula を geralmente está ligada ao verbo.",
        "Pratique criando frases com vocabulário conhecido."
      ]
    }
  ]
},

{
  title: "Partículas de localização e direção",

  goal: "Utilizar に, で, へ, と, から e まで para indicar destino, localização, companhia, origem e limites.",

  days: [
    {
      title: "A partícula に: destino e tempo",

      explanation: "A partícula に possui vários usos. Um dos mais importantes para iniciantes é indicar o destino de um movimento ou o momento em que uma ação acontece. Em frases de deslocamento, に pode indicar para onde alguém vai. Em frases sobre horários, pode indicar quando uma ação acontece. É importante observar o verbo e o contexto para descobrir qual sentido está sendo utilizado. A partícula também aparece em construções de existência, indicando onde algo ou alguém está.",

      examples: [
        "がっこうに いきます。 — Vou para a escola.",
        "うちに かえります。 — Volto para casa.",
        "しちじに おきます。 — Acordo às sete horas.",
        "へやに ねこが います。 — Há um gato no quarto."
      ],

      keyPoints: [
        "に pode indicar destino.",
        "Também pode indicar horário específico.",
        "Aparece em frases de existência.",
        "O sentido depende da construção e do verbo."
      ]
    },

    {
      title: "A partícula で: local da ação e meio",

      explanation: "A partícula で pode indicar o local onde uma ação acontece. Ela também pode indicar o meio ou instrumento utilizado para realizar uma atividade. Por exemplo, em がっこうで べんきょうします, a escola é o lugar onde a ação de estudar acontece. Já em はしで たべます, os hashis são o instrumento utilizado para comer. Uma diferença importante é que に pode indicar onde alguém ou algo existe, enquanto で costuma indicar onde uma ação acontece.",

      examples: [
        "がっこうで べんきょうします。 — Estudo na escola.",
        "うちで ごはんを たべます。 — Como em casa.",
        "はしで たべます。 — Como com hashis.",
        "ばすで いきます。 — Vou de ônibus."
      ],

      keyPoints: [
        "で pode indicar o local de uma ação.",
        "Também pode indicar o meio utilizado.",
        "に e で possuem funções diferentes.",
        "Observe se a frase fala de existência ou de uma atividade."
      ]
    },

    {
      title: "A partícula へ: direção",

      explanation: "A partícula へ indica a direção de um movimento. Ela é escrita com o caractere へ, mas, quando utilizada como partícula, sua pronúncia é 'e'. É muito comum aparecer com verbos de deslocamento, como いきます, que significa ir, e かえります, que significa voltar. Tanto に quanto へ podem indicar destino em muitas frases, mas へ destaca mais diretamente a direção do movimento.",

      examples: [
        "がっこうへ いきます。 — Vou em direção à escola.",
        "にほんへ いきます。 — Vou para o Japão.",
        "うちへ かえります。 — Volto para casa.",
        "ともだちの うちへ いきます。 — Vou para a casa de um amigo."
      ],

      keyPoints: [
        "へ indica direção.",
        "Como partícula, sua pronúncia é 'e'.",
        "É utilizada frequentemente com verbos de movimento.",
        "に e へ podem indicar destinos em diversas situações."
      ]
    },

    {
      title: "A partícula と: companhia e ligação",

      explanation: "A partícula と possui diferentes funções. Uma das mais comuns é indicar companhia, com o sentido de 'com alguém'. Ela também pode ligar substantivos, transmitindo a ideia de 'e'. Por exemplo, ともだちと いきます significa 'vou com um amigo'. Já ねこと いぬ apresenta dois substantivos ligados por と: gato e cachorro. Em níveis mais avançados, essa partícula também aparece em outras estruturas, mas nesta etapa vamos concentrar a atenção nesses dois usos.",

      examples: [
        "ともだちと いきます。 — Vou com um amigo.",
        "かぞくと たべます。 — Como com a família.",
        "ねこと いぬ。 — Gato e cachorro.",
        "ともだちと がっこうへ いきます。 — Vou para a escola com um amigo."
      ],

      keyPoints: [
        "と pode indicar companhia.",
        "Também pode ligar substantivos com o sentido de 'e'.",
        "A posição de と ajuda a entender sua função.",
        "O contexto determina a interpretação."
      ]
    },

    {
      title: "から e まで: origem e limite",

      explanation: "As partículas から e まで podem ser utilizadas juntas para indicar o início e o fim de um percurso, período ou intervalo. から transmite a ideia de 'de', 'desde' ou 'a partir de'. まで transmite a ideia de 'até'. Quando aparecem em uma frase de deslocamento, indicam de onde alguém parte e até onde vai. Quando aparecem com horários, delimitam o período em que uma atividade acontece. É uma estrutura muito útil para falar sobre trajetos e rotinas.",

      examples: [
        "うちから がっこうまで いきます。 — Vou de casa até a escola.",
        "くじから ごじまで べんきょうします。 — Estudo das nove até as cinco.",
        "えきから うちまで あるきます。 — Caminho da estação até casa.",
        "げつようびから きんようびまで。 — De segunda-feira até sexta-feira."
      ],

      keyPoints: [
        "から indica origem ou ponto inicial.",
        "まで indica limite ou ponto final.",
        "As duas partículas podem formar uma estrutura de intervalo.",
        "Podem indicar percursos e períodos de tempo."
      ]
    },

    {
      title: "Aplicação em frases reais",

      explanation: "Agora vamos reunir todas as partículas de localização e direção em situações cotidianas. Imagine uma pessoa contando sua rotina: ela sai de casa, vai para a escola, estuda lá, encontra um amigo e volta para casa. Cada parte dessa situação pode ser expressa com uma partícula diferente. に pode indicar o destino, で o local onde a ação acontece, へ a direção, と a companhia, から a origem e まで o limite. O objetivo é escolher a partícula adequada de acordo com a relação que queremos comunicar.",

      examples: [
        "うちから がっこうへ いきます。 — Vou de casa em direção à escola.",
        "がっこうで べんきょうします。 — Estudo na escola.",
        "ともだちと ひるごはんを たべます。 — Almoço com um amigo.",
        "しちじに うちへ かえります。 — Volto para casa às sete horas.",
        "げつようびから きんようびまで がっこうへ いきます。 — Vou à escola de segunda a sexta-feira."
      ],

      keyPoints: [
        "に pode indicar destino e horário.",
        "で indica local da ação ou meio utilizado.",
        "へ indica direção.",
        "と indica companhia ou liga substantivos.",
        "から indica origem ou início.",
        "まで indica limite ou término.",
        "Escolha a partícula observando o sentido da frase."
      ]
    }
  ]
},


{
  title: "Verbos básicos",

  goal: "Reconhecer verbos cotidianos e utilizar suas formas afirmativa, negativa, passada e passada negativa.",

  days: [
    {
      title: "Verbos do cotidiano",

      explanation: "Os verbos expressam ações, acontecimentos e estados. Em japonês, eles normalmente aparecem no final da frase. Alguns verbos muito utilizados no cotidiano são たべます (comer), のみます (beber), いきます (ir), きます (vir), みます (ver ou assistir), よみます (ler), かきます (escrever) e ねます (dormir). Nesta etapa, vamos estudar as formas educadas terminadas em ます, que são bastante utilizadas em conversas e situações do dia a dia. Observe que o verbo não muda de acordo com a pessoa: a mesma forma pode ser usada para eu, você ou outra pessoa, dependendo do contexto.",

      examples: [
        "たべます — comer.",
        "のみます — beber.",
        "いきます — ir.",
        "きます — vir.",
        "みます — ver ou assistir.",
        "よみます — ler.",
        "ねます — dormir."
      ],

      keyPoints: [
        "Verbos geralmente aparecem no final da frase.",
        "ます é uma terminação da forma educada.",
        "O verbo não muda conforme a pessoa.",
        "O contexto indica quem realiza a ação.",
        "Aprenda os verbos dentro de frases."
      ]
    },

    {
      title: "Presente afirmativo: ます",

      explanation: "A forma ます é utilizada para construir frases afirmativas educadas no presente. Ela também pode indicar ações habituais ou futuras, dependendo do contexto. Para utilizar um verbo nessa forma, basta conhecer sua conjugação educada. Por exemplo, たべます significa comer ou como, enquanto のみます significa beber ou bebo. A tradução exata depende da situação. Em japonês, geralmente não precisamos acrescentar um pronome como わたし se já estiver claro quem está realizando a ação.",

      examples: [
        "わたしは りんごを たべます。 — Eu como uma maçã.",
        "みずを のみます。 — Bebo água.",
        "ほんを よみます。 — Leio um livro.",
        "まいにち がっこうへ いきます。 — Vou à escola todos os dias.",
        "えいがを みます。 — Assisto a um filme."
      ],

      keyPoints: [
        "ます forma a afirmação educada.",
        "Pode indicar hábitos e ações futuras.",
        "O verbo aparece no final.",
        "O sujeito pode ser omitido quando está claro.",
        "O contexto ajuda a determinar o tempo da ação."
      ]
    },

    {
      title: "Presente negativo: ません",

      explanation: "Para transformar um verbo na forma educada afirmativa em uma forma negativa, substituímos ます por ません. Assim, たべます significa comer ou como, enquanto たべません significa não comer ou não como. Essa forma pode expressar tanto uma ação que não acontece habitualmente quanto uma ação que não acontecerá, dependendo do contexto. É uma maneira bastante útil de falar sobre preferências, rotinas e coisas que não fazemos.",

      examples: [
        "わたしは にくを たべません。 — Eu não como carne.",
        "あさごはんを たべません。 — Não tomo café da manhã.",
        "きょうは がっこうへ いきません。 — Hoje não vou à escola.",
        "おちゃを のみません。 — Não bebo chá.",
        "ほんを よみません。 — Não leio livros."
      ],

      keyPoints: [
        "ません forma o negativo educado.",
        "A transformação básica é ます → ません.",
        "A frase mantém o restante da estrutura.",
        "O contexto pode indicar hábito ou futuro.",
        "Não confunda ません com ませんでした."
      ]
    },

    {
      title: "Passado afirmativo: ました",

      explanation: "Para falar de uma ação concluída no passado utilizando a forma educada, substituímos ます por ました. Por exemplo, たべます significa comer ou como, enquanto たべました significa comi ou comeu, conforme o contexto. Essa forma é utilizada para contar acontecimentos e atividades que já ocorreram. A estrutura da frase continua semelhante: o objeto pode vir acompanhado de を e o verbo permanece no final.",

      examples: [
        "りんごを たべました。 — Comi uma maçã.",
        "みずを のみました。 — Bebi água.",
        "ほんを よみました。 — Li um livro.",
        "きのう がっこうへ いきました。 — Ontem fui à escola.",
        "えいがを みました。 — Assisti a um filme."
      ],

      keyPoints: [
        "ました indica passado afirmativo.",
        "A transformação básica é ます → ました.",
        "É utilizada para ações concluídas.",
        "きのう significa ontem.",
        "A estrutura geral da frase permanece."
      ]
    },

    {
      title: "Passado negativo: ませんでした",

      explanation: "A forma ませんでした é utilizada para expressar que uma ação não aconteceu no passado. Ela corresponde a uma construção como 'não comi', 'não fui' ou 'não assisti'. Para formar essa conjugação, utilizamos a terminação ませんでした no lugar da forma afirmativa ます. É importante perceber a diferença: ません indica uma negação no presente ou em uma situação futura, enquanto ませんでした indica que a ação não aconteceu no passado.",

      examples: [
        "りんごを たべませんでした。 — Não comi uma maçã.",
        "おちゃを のみませんでした。 — Não bebi chá.",
        "きのう がっこうへ いきませんでした。 — Ontem não fui à escola.",
        "ほんを よみませんでした。 — Não li um livro.",
        "えいがを みませんでした。 — Não assisti a um filme."
      ],

      keyPoints: [
        "ませんでした indica passado negativo.",
        "Não confunda com ません.",
        "A forma expressa uma ação que não aconteceu.",
        "きのう pode ajudar a identificar o passado.",
        "Observe a terminação completa do verbo."
      ]
    },

    {
      title: "Construindo frases com verbos",

      explanation: "Agora vamos combinar verbos, objetos e expressões de tempo para construir frases mais completas. Uma frase pode apresentar quem realiza a ação, o objeto envolvido, quando ela acontece e o verbo no final. Nesta aula, pratique transformar a mesma frase entre afirmativa, negativa, passado afirmativo e passado negativo. Isso ajuda a perceber que a mudança de tempo e polaridade acontece principalmente na terminação verbal, enquanto os outros elementos permanecem iguais.",

      examples: [
        "わたしは ほんを よみます。 — Eu leio um livro.",
        "わたしは ほんを よみません。 — Eu não leio um livro.",
        "わたしは ほんを よみました。 — Eu li um livro.",
        "わたしは ほんを よみませんでした。 — Eu não li um livro.",
        "きのう みずを のみました。 — Ontem bebi água."
      ],

      keyPoints: [
        "ます: afirmativo.",
        "ません: negativo.",
        "ました: passado afirmativo.",
        "ませんでした: passado negativo.",
        "O verbo normalmente fica no final.",
        "Pratique as quatro formas com o mesmo verbo."
      ]
    }
  ]
},

{
  title: "Adjetivos",

  goal: "Identificar い-adjetivos e な-adjetivos e utilizá-los nas formas afirmativa, negativa e passada para descrever pessoas, lugares e objetos.",

  days: [
    {
      title: "Conhecendo os い-adjetivos",

      explanation: "Os い-adjetivos são uma categoria de adjetivos japoneses que normalmente terminam em い na forma básica. Eles descrevem características, como tamanho, aparência, temperatura, qualidade e estado. Alguns exemplos são おおきい (grande), ちいさい (pequeno), あたらしい (novo), ふるい (velho), たかい (caro ou alto) e おいしい (gostoso). Esses adjetivos podem aparecer diretamente antes de um substantivo ou no final de uma frase. Entretanto, nem toda palavra terminada em い é necessariamente um い-adjetivo: por isso, é importante aprender cada palavra com sua categoria.",

      examples: [
        "おおきい — grande.",
        "ちいさい — pequeno.",
        "あたらしい — novo.",
        "ふるい — velho ou antigo.",
        "たかい — caro ou alto.",
        "おいしい — gostoso."
      ],

      keyPoints: [
        "い-adjetivos normalmente terminam em い.",
        "Descrevem características.",
        "Podem aparecer antes de substantivos.",
        "Também podem terminar uma frase com です.",
        "Nem toda palavra terminada em い pertence a essa categoria."
      ]
    },

    {
      title: "Conhecendo os な-adjetivos",

      explanation: "Os な-adjetivos formam outra categoria importante. Diferentemente dos い-adjetivos, eles geralmente não terminam em い na forma básica e precisam da partícula な quando aparecem diretamente antes de um substantivo. Alguns exemplos são しずか (silencioso ou tranquilo), げんき (saudável ou animado), きれい (bonito ou limpo) e べんり (conveniente). Observe que きれい termina em い, mas é um な-adjetivo. Isso mostra por que não devemos classificar uma palavra apenas olhando sua última letra.",

      examples: [
        "しずか — silencioso ou tranquilo.",
        "げんき — saudável ou animado.",
        "きれい — bonito ou limpo.",
        "べんり — conveniente.",
        "しずかな まち — cidade tranquila.",
        "きれいな へや — quarto bonito ou limpo."
      ],

      keyPoints: [
        "な-adjetivos usam な antes de substantivos.",
        "きれい é um な-adjetivo, apesar de terminar em い.",
        "げんき descreve uma condição ou estado.",
        "A classificação determina como o adjetivo será conjugado."
      ]
    },

    {
      title: "Adjetivos na forma afirmativa",

      explanation: "Na forma afirmativa educada, os い-adjetivos podem receber です diretamente depois deles. Já os な-adjetivos também podem receber です quando aparecem no final da frase, mas utilizam な antes de um substantivo. Por exemplo, おいしいです significa que algo é gostoso, enquanto しずかです significa que algo é tranquilo. Se quisermos dizer 'uma cidade tranquila', usamos しずかな まち. É importante distinguir a posição do adjetivo: antes do substantivo ou no final da frase.",

      examples: [
        "この りんごは おいしいです。 — Esta maçã é gostosa.",
        "この ほんは あたらしいです。 — Este livro é novo.",
        "この まちは しずかです。 — Esta cidade é tranquila.",
        "これは べんりです。 — Isto é conveniente.",
        "しずかな へやです。 — É um quarto tranquilo."
      ],

      keyPoints: [
        "い-adjetivo + です forma uma afirmação educada.",
        "な-adjetivo + です também forma uma afirmação.",
        "な aparece antes de substantivos com な-adjetivos.",
        "A posição do adjetivo influencia a construção."
      ]
    },

    {
      title: "Adjetivos na forma negativa",

      explanation: "Os い-adjetivos possuem uma conjugação negativa própria. Retiramos o い final e acrescentamos くないです. Por exemplo, おいしい transforma-se em おいしくないです, que significa 'não é gostoso'. Já os な-adjetivos formam a negativa acrescentando じゃありません ou ではありません depois do adjetivo, sem utilizar な nessa posição. Assim, しずかです pode virar しずかじゃありません. Essas construções permitem negar características de pessoas, objetos e lugares.",

      examples: [
        "おいしくないです。 — Não é gostoso.",
        "たかくないです。 — Não é caro ou alto.",
        "この ほんは あたらしくないです。 — Este livro não é novo.",
        "この まちは しずかじゃありません。 — Esta cidade não é tranquila.",
        "わたしは げんきじゃありません。 — Eu não estou bem."
      ],

      keyPoints: [
        "い-adjetivo: い → くないです.",
        "な-adjetivo: じゃありません.",
        "ではありません é outra forma negativa educada.",
        "Não utilize な antes de じゃありません.",
        "A conjugação depende da categoria do adjetivo."
      ]
    },

    {
      title: "Adjetivos no passado",

      explanation: "Para transformar um い-adjetivo em passado afirmativo, retiramos o い final e acrescentamos かったです. Por exemplo, おいしい transforma-se em おいしかったです, significando 'era gostoso' ou 'foi gostoso'. Para os な-adjetivos, utilizamos でした depois do adjetivo, sem な. Assim, しずかでした significa 'era tranquilo'. Essas formas são úteis para descrever experiências, lugares visitados e características observadas anteriormente.",

      examples: [
        "おいしかったです。 — Estava gostoso.",
        "たかかったです。 — Era caro ou estava alto.",
        "たのしかったです。 — Foi divertido.",
        "この まちは しずかでした。 — Esta cidade era tranquila.",
        "きのうは げんきでした。 — Ontem eu estava bem."
      ],

      keyPoints: [
        "い-adjetivo: い → かったです.",
        "な-adjetivo: でした.",
        "Não acrescente い a um な-adjetivo.",
        "O passado descreve uma característica anterior.",
        "Observe se o adjetivo é い ou な."
      ]
    },

    {
      title: "Descrevendo pessoas, lugares e objetos",

      explanation: "Nesta aula, vamos utilizar os adjetivos para produzir descrições completas. Podemos descrever pessoas usando げんき, lugares usando しずか e objetos usando あたらしい ou ふるい. Quando um adjetivo vem diretamente antes de um substantivo, os い-adjetivos normalmente permanecem em sua forma básica, enquanto os な-adjetivos precisam da ligação な. Também podemos formar frases com は para apresentar o assunto e です para concluir a descrição. O objetivo é conseguir falar sobre características usando diferentes categorias de adjetivos.",

      examples: [
        "この ねこは かわいいです。 — Este gato é fofo.",
        "この まちは しずかです。 — Esta cidade é tranquila.",
        "あたらしい ほんです。 — É um livro novo.",
        "きれいな へやです。 — É um quarto bonito ou limpo.",
        "この ひとは げんきです。 — Esta pessoa está bem."
      ],

      keyPoints: [
        "い-adjetivos podem aparecer diretamente antes de substantivos.",
        "な-adjetivos precisam de な antes de substantivos.",
        "Use は para apresentar o assunto.",
        "Use です para formar descrições educadas.",
        "Pratique descrições de pessoas, lugares e objetos."
      ]
    }
  ]
},

{
  title: "Números e tempo",

  goal: "Reconhecer números japoneses e utilizar expressões básicas para idade, horas, dias, meses e datas.",

  days: [
    {
      title: "Números em japonês",

      explanation: "Os números japoneses são construídos principalmente combinando unidades. Os números de um a dez possuem formas próprias: いち (1), に (2), さん (3), よん ou し (4), ご (5), ろく (6), なな ou しち (7), はち (8), きゅう ou く (9) e じゅう (10). A partir do onze, combinamos じゅう com outros números. Por exemplo, onze é じゅういち e vinte é にじゅう. O sistema também utiliza ひゃく para cem e せん para mil. Algumas leituras mudam em determinadas combinações, então é importante aprender as formas mais comuns.",

      examples: [
        "いち — 1.",
        "に — 2.",
        "さん — 3.",
        "よん — 4.",
        "ご — 5.",
        "じゅう — 10.",
        "じゅういち — 11.",
        "にじゅう — 20.",
        "ひゃく — 100.",
        "せん — 1.000."
      ],

      keyPoints: [
        "Aprenda primeiro os números de 1 a 10.",
        "じゅう representa dez.",
        "にじゅう representa vinte.",
        "ひゃく representa cem.",
        "せん representa mil.",
        "Alguns números possuem leituras alternativas."
      ]
    },

    {
      title: "Falando sobre idade",

      explanation: "Para perguntar a idade de alguém, podemos utilizar なんさいですか, que significa 'quantos anos você tem?'. Para responder, colocamos o número antes de さい, o contador utilizado para idade. Por exemplo, じゅうさんさい significa treze anos. Algumas idades possuem pronúncias especiais, como はたち para vinte anos. Em situações educadas, podemos acrescentar わたしは no começo da resposta, embora seja possível omitir o sujeito quando o contexto já deixa claro quem está falando.",

      examples: [
        "なんさいですか。 — Quantos anos você tem?",
        "じゅうさんさいです。 — Tenho treze anos.",
        "じゅうごさいです。 — Tenho quinze anos.",
        "はたちです。 — Tenho vinte anos.",
        "わたしは じゅうよんさいです。 — Eu tenho quatorze anos."
      ],

      keyPoints: [
        "さい é o contador de idade.",
        "なんさい pergunta a idade.",
        "O número vem antes de さい.",
        "はたち é a leitura especial de vinte anos.",
        "A idade pode ser informada sem repetir o sujeito."
      ]
    },

    {
      title: "Horas e minutos",

      explanation: "Para falar as horas em japonês, utilizamos じ depois do número. Por exemplo, いちじ significa uma hora e ごじ significa cinco horas. Para indicar os minutos, utilizamos ふん ou ぷん, dependendo do número. Algumas leituras precisam ser memorizadas, como いっぷん (um minuto), さんぷん (três minutos), ごふん (cinco minutos) e じゅっぷん (dez minutos). Para perguntar o horário, podemos utilizar なんじですか, que significa 'que horas são?'. A expressão はん também é utilizada para indicar meia hora.",

      examples: [
        "いちじ — uma hora.",
        "さんじ — três horas.",
        "ごじ — cinco horas.",
        "しちじ — sete horas.",
        "はちじ — oito horas.",
        "さんじはん — três e meia.",
        "ごふん — cinco minutos.",
        "なんじですか。 — Que horas são?"
      ],

      keyPoints: [
        "じ indica horas.",
        "ふん e ぷん indicam minutos.",
        "Algumas leituras dos minutos são irregulares.",
        "はん indica meia hora.",
        "なんじ pergunta o horário."
      ]
    },

    {
      title: "Dias da semana",

      explanation: "Os dias da semana em japonês terminam com 曜日, lido ようび. Cada dia possui um elemento antes dessa terminação. Segunda-feira é げつようび, terça-feira é かようび, quarta-feira é すいようび, quinta-feira é もくようび, sexta-feira é きんようび, sábado é どようび e domingo é にちようび. Para perguntar qual é o dia da semana, utilizamos なんようびですか. Essas expressões são muito úteis para falar de escola, compromissos e rotinas.",

      examples: [
        "げつようび — segunda-feira.",
        "かようび — terça-feira.",
        "すいようび — quarta-feira.",
        "もくようび — quinta-feira.",
        "きんようび — sexta-feira.",
        "どようび — sábado.",
        "にちようび — domingo.",
        "なんようびですか。 — Que dia da semana é?"
      ],

      keyPoints: [
        "ようび faz parte dos nomes dos dias da semana.",
        "げつようび é segunda-feira.",
        "きんようび é sexta-feira.",
        "にちようび é domingo.",
        "なんようび pergunta o dia da semana."
      ]
    },

    {
      title: "Meses do ano",

      explanation: "Os meses em japonês são formados pelo número correspondente seguido de がつ. Por exemplo, いちがつ significa janeiro, にがつ significa fevereiro e さんがつ significa março. A estrutura é bastante regular, mas existem algumas leituras especiais que merecem atenção. Abril é しがつ, julho é しちがつ e setembro é くがつ. Para perguntar em que mês estamos, utilizamos なんがつですか. Aprender os meses permite falar sobre aniversários, eventos e datas importantes.",

      examples: [
        "いちがつ — janeiro.",
        "にがつ — fevereiro.",
        "さんがつ — março.",
        "しがつ — abril.",
        "ごがつ — maio.",
        "しちがつ — julho.",
        "くがつ — setembro.",
        "じゅうにがつ — dezembro.",
        "なんがつですか。 — Que mês é?"
      ],

      keyPoints: [
        "がつ indica mês.",
        "O número geralmente vem antes de がつ.",
        "Abril é しがつ.",
        "Julho é しちがつ.",
        "Setembro é くがつ.",
        "なんがつ pergunta o mês."
      ]
    },

    {
      title: "Datas e calendário",

      explanation: "Para construir datas em japonês, precisamos combinar mês e dia. O mês utiliza o número seguido de がつ, enquanto o dia utiliza o número seguido de uma leitura de にち ou uma forma especial. Alguns dias possuem pronúncias próprias, como ついたち para o dia primeiro, ふつか para o dia dois, みっか para o dia três e よっか para o dia quatro. Outros exemplos incluem いつか (dia cinco), むいか (dia seis), なのか (dia sete), ようか (dia oito) e ここのか (dia nove). Para perguntar a data, podemos utilizar なんがつ なんにちですか. É importante aprender as leituras especiais mais comuns antes de tentar decorar todas as datas.",

      examples: [
        "いちがつ ついたち — 1º de janeiro.",
        "さんがつ みっか — 3 de março.",
        "ごがつ いつか — 5 de maio.",
        "しちがつ なのか — 7 de julho.",
        "じゅうがつ じゅうよっか — 14 de outubro.",
        "なんがつ なんにちですか。 — Que dia é hoje?"
      ],

      keyPoints: [
        "がつ indica o mês.",
        "O dia utiliza leituras próprias.",
        "ついたち significa dia primeiro.",
        "ふつか significa dia dois.",
        "みっか significa dia três.",
        "Alguns dias possuem pronúncias especiais.",
        "Pratique lendo datas completas."
      ]
    }
  ]
},


{
  title: "Rotina e cotidiano",

  goal: "Ampliar o vocabulário cotidiano e conseguir descrever a própria rotina utilizando frases simples em japonês.",

  days: [
    {
      title: "Vocabulário da escola",

      explanation: "Nesta aula, vamos aprender palavras relacionadas ao ambiente escolar. Conhecer esse vocabulário permite falar sobre estudos, aulas, materiais e atividades. Em japonês, がっこう significa escola, せんせい significa professor ou professora e がくせい significa estudante. Também podemos utilizar palavras como べんきょう (estudo), ほん (livro) e きょうしつ (sala de aula). O objetivo é conseguir identificar esses elementos e utilizá-los em frases simples, combinando-os com as partículas e os verbos que já estudamos.",

      examples: [
        "がっこう — escola.",
        "せんせい — professor ou professora.",
        "がくせい — estudante.",
        "きょうしつ — sala de aula.",
        "べんきょう — estudo.",
        "ほん — livro.",
        "わたしは がっこうへ いきます。 — Eu vou para a escola."
      ],

      keyPoints: [
        "がっこう significa escola.",
        "せんせい significa professor ou professora.",
        "がくせい significa estudante.",
        "べんきょう está relacionado ao estudo.",
        "Utilize に ou へ para indicar destino."
      ]
    },

    {
      title: "Vocabulário de casa e família",

      explanation: "Agora vamos estudar palavras relacionadas à casa e à família. A palavra いえ significa casa, enquanto へや significa quarto ou cômodo. Para falar sobre familiares, podemos utilizar かぞく (família), おかあさん (mãe), おとうさん (pai), おにいさん (irmão mais velho) e おねえさん (irmã mais velha). Existem formas diferentes para falar dos próprios familiares e dos familiares de outras pessoas, mas nesta aula vamos começar pelas expressões mais comuns e compreender seu significado em conversas simples.",

      examples: [
        "いえ — casa.",
        "へや — quarto ou cômodo.",
        "かぞく — família.",
        "おかあさん — mãe.",
        "おとうさん — pai.",
        "おにいさん — irmão mais velho.",
        "おねえさん — irmã mais velha.",
        "わたしの かぞくです。 — É a minha família."
      ],

      keyPoints: [
        "いえ significa casa.",
        "へや significa quarto ou cômodo.",
        "かぞく significa família.",
        "の indica uma relação de posse ou associação.",
        "As palavras familiares podem mudar conforme o contexto e a pessoa com quem falamos."
      ]
    },

    {
      title: "Vocabulário de comida e refeições",

      explanation: "A alimentação é um dos assuntos mais comuns em conversas cotidianas. Nesta aula, vamos aprender nomes de alimentos e refeições. ごはん pode significar arroz cozido ou refeição, dependendo do contexto. みず significa água, おちゃ significa chá, にく significa carne e さかな significa peixe. Também vamos aprender palavras para as refeições: あさごはん (café da manhã), ひるごはん (almoço) e ばんごはん (jantar). Podemos utilizar を para indicar o alimento que recebe a ação de comer ou beber.",

      examples: [
        "ごはん — arroz cozido ou refeição.",
        "みず — água.",
        "おちゃ — chá.",
        "にく — carne.",
        "さかな — peixe.",
        "あさごはん — café da manhã.",
        "ひるごはん — almoço.",
        "ばんごはん — jantar.",
        "ばんごはんを たべます。 — Como o jantar."
      ],

      keyPoints: [
        "ごはん pode significar arroz ou refeição.",
        "あさごはん é café da manhã.",
        "ひるごはん é almoço.",
        "ばんごはん é jantar.",
        "を marca o objeto da ação."
      ]
    },

    {
      title: "Vocabulário de hobbies e atividades",

      explanation: "Para conversar sobre interesses pessoais, precisamos conhecer palavras relacionadas a hobbies e atividades. しゅみ significa hobby ou passatempo. おんがく significa música, どくしょ significa leitura, え significa desenho ou imagem e うんどう significa exercício ou atividade física. Também podemos utilizar すきです para dizer que gostamos de alguma coisa. Uma construção bastante útil é わたしは おんがくが すきです, que significa 'eu gosto de música'.",

      examples: [
        "しゅみ — hobby ou passatempo.",
        "おんがく — música.",
        "どくしょ — leitura.",
        "え — desenho ou imagem.",
        "うんどう — exercício físico.",
        "ゲーム — jogo.",
        "わたしは おんがくが すきです。 — Eu gosto de música.",
        "どくしょが すきです。 — Gosto de leitura."
      ],

      keyPoints: [
        "しゅみ significa hobby.",
        "すきです expressa gostar.",
        "が aparece frequentemente com すきです.",
        "おんがく significa música.",
        "É possível falar sobre seus interesses com frases simples."
      ]
    },

    {
      title: "Amigos e convivência",

      explanation: "Nesta aula, vamos aprender a falar sobre amigos e convivência. ともだち significa amigo ou amiga. ひと significa pessoa, enquanto みんな significa todos ou todo mundo. Podemos utilizar と para indicar companhia, como em ともだちと いきます, que significa 'vou com um amigo'. Também podemos combinar essas palavras com verbos cotidianos para falar sobre encontros, conversas e atividades realizadas com outras pessoas.",

      examples: [
        "ともだち — amigo ou amiga.",
        "ひと — pessoa.",
        "みんな — todos ou todo mundo.",
        "ともだちと いきます。 — Vou com um amigo.",
        "ともだちと はなします。 — Converso com um amigo.",
        "みんなと べんきょうします。 — Estudo com todos.",
        "ともだちに あいます。 — Encontro um amigo."
      ],

      keyPoints: [
        "ともだち significa amigo ou amiga.",
        "と pode indicar companhia.",
        "に pode aparecer com あいます para indicar a pessoa encontrada.",
        "みんな significa todos.",
        "Combine vocabulário com verbos já conhecidos."
      ]
    },

    {
      title: "Descrevendo sua própria rotina",

      explanation: "Nesta última aula, vamos reunir o vocabulário da semana para falar sobre uma rotina pessoal. Uma rotina pode incluir acordar, tomar café da manhã, ir à escola, estudar, conversar com amigos, praticar hobbies e dormir. Expressões como まいにち (todos os dias), あさ (manhã), ひる (meio do dia) e よる (noite) ajudam a organizar as atividades. Não precisamos repetir わたし em todas as frases quando já está claro quem realiza as ações. O objetivo é produzir uma sequência compreensível de frases sobre o cotidiano.",

      examples: [
        "まいにち がっこうへ いきます。 — Vou à escola todos os dias.",
        "あさごはんを たべます。 — Tomo café da manhã.",
        "がっこうで べんきょうします。 — Estudo na escola.",
        "ともだちと はなします。 — Converso com amigos.",
        "よるに ほんを よみます。 — Leio um livro à noite.",
        "じゅうじに ねます。 — Durmo às dez horas."
      ],

      keyPoints: [
        "まいにち significa todos os dias.",
        "あさ significa manhã.",
        "ひる significa meio do dia.",
        "よる significa noite.",
        "Organize as atividades em uma sequência.",
        "Utilize verbos e partículas para construir sua rotina."
      ]
    }
  ]
},

{
  title: "Perguntas e respostas",

  goal: "Aprender palavras interrogativas e construir perguntas e respostas para manter pequenos diálogos em japonês.",

  days: [
    {
      title: "Quem? — だれ",

      explanation: "A palavra だれ significa 'quem' e é utilizada para perguntar sobre pessoas. Ela pode aparecer sozinha em uma pergunta ou acompanhada de partículas, dependendo da informação desejada. Por exemplo, だれですか pergunta 'quem é?', enquanto だれと いきますか pergunta 'com quem você vai?'. Também podemos utilizar だれの para perguntar a quem pertence alguma coisa. O objetivo é aprender a identificar a pessoa procurada e responder com frases simples.",

      examples: [
        "だれですか。 — Quem é?",
        "あのひとは だれですか。 — Quem é aquela pessoa?",
        "だれと いきますか。 — Com quem você vai?",
        "だれの ほんですか。 — De quem é o livro?",
        "ともだちです。 — É um amigo."
      ],

      keyPoints: [
        "だれ significa quem.",
        "だれと pergunta com quem.",
        "だれの pergunta de quem.",
        "A partícula utilizada modifica a relação da pergunta.",
        "Responda identificando a pessoa."
      ]
    },

    {
      title: "O quê? — なに e なん",

      explanation: "As palavras なに e なん são utilizadas para perguntar 'o quê?' ou 'qual?', dependendo da construção. Elas possuem significados relacionados, mas sua pronúncia muda conforme as palavras que aparecem depois. なに é comum em perguntas como なにを たべますか, enquanto なん aparece em construções como なんさいですか e なんじですか. Não é necessário decorar todas as situações imediatamente: o mais importante é reconhecer as expressões frequentes e observar como elas aparecem nas perguntas.",

      examples: [
        "なにを たべますか。 — O que você vai comer?",
        "なにを のみますか。 — O que você vai beber?",
        "これは なんですか。 — O que é isto?",
        "なんさいですか。 — Quantos anos você tem?",
        "なんじですか。 — Que horas são?",
        "ほんを よみます。 — Vou ler um livro."
      ],

      keyPoints: [
        "なに e なん podem significar o quê.",
        "なにを é comum em perguntas sobre ações.",
        "なんじ pergunta as horas.",
        "なんさい pergunta a idade.",
        "A forma depende da construção seguinte."
      ]
    },

    {
      title: "Onde? — どこ",

      explanation: "A palavra どこ significa 'onde'. Ela é utilizada para perguntar sobre a localização de pessoas, objetos ou lugares. Podemos combiná-la com partículas diferentes para descobrir onde algo está, para onde alguém vai ou de onde alguém vem. Por exemplo, どこに いますか pergunta onde alguém está, enquanto どこへ いきますか pergunta para onde alguém vai. A escolha da partícula depende da relação que queremos descobrir.",

      examples: [
        "どこですか。 — Onde é?",
        "どこに いますか。 — Onde está?",
        "どこへ いきますか。 — Para onde vai?",
        "どこから きましたか。 — De onde veio?",
        "がっこうに います。 — Estou na escola."
      ],

      keyPoints: [
        "どこ significa onde.",
        "どこに pode perguntar onde alguém ou algo está.",
        "どこへ pergunta o destino.",
        "どこから pergunta a origem.",
        "A partícula muda o sentido da pergunta."
      ]
    },

    {
      title: "Quando? — いつ",

      explanation: "A palavra いつ significa 'quando' e é utilizada para perguntar sobre o momento em que uma ação acontece. Ela pode aparecer com verbos e expressões temporais. Por exemplo, いつ いきますか pergunta quando alguém vai, enquanto いつ べんきょうしますか pergunta quando alguém estuda. Para responder, podemos utilizar expressões como あした (amanhã), きょう (hoje), きのう (ontem) e らいしゅう (semana que vem).",

      examples: [
        "いつ いきますか。 — Quando você vai?",
        "いつ べんきょうしますか。 — Quando você estuda?",
        "いつ きましたか。 — Quando você veio?",
        "あした いきます。 — Vou amanhã.",
        "らいしゅう べんきょうします。 — Vou estudar na semana que vem."
      ],

      keyPoints: [
        "いつ significa quando.",
        "Pode ser utilizado com diferentes verbos.",
        "あした significa amanhã.",
        "きょう significa hoje.",
        "きのう significa ontem.",
        "らいしゅう significa semana que vem."
      ]
    },

    {
      title: "Por quê? — どうして e なぜ",

      explanation: "As expressões どうして e なぜ são utilizadas para perguntar o motivo de alguma coisa. Ambas podem ser traduzidas como 'por quê?'. どうして é bastante comum em conversas cotidianas, enquanto なぜ também aparece em perguntas que podem soar mais formais ou diretas. Para responder, podemos apresentar uma razão utilizando から no final da explicação. Por exemplo, いそがしいですから significa 'porque estou ocupado'. Nesta etapa, vamos aprender a perguntar e responder motivos simples.",

      examples: [
        "どうして いきませんか。 — Por que você não vai?",
        "なぜ べんきょうしますか。 — Por que você estuda?",
        "どうして すきですか。 — Por que você gosta?",
        "いそがしいですから。 — Porque estou ocupado.",
        "おもしろいですから。 — Porque é interessante."
      ],

      keyPoints: [
        "どうして significa por quê.",
        "なぜ também significa por quê.",
        "から pode apresentar a razão.",
        "A resposta deve explicar o motivo.",
        "どうして é bastante útil em conversas cotidianas."
      ]
    },

    {
      title: "Como? Quanto? — どうやって, いくら e いくつ",

      explanation: "Existem várias palavras interrogativas para perguntar sobre maneira, preço e quantidade. どうやって significa 'como?' no sentido de perguntar de que maneira algo é feito. いくら pergunta quanto custa ou qual é o preço. いくつ pergunta quantos ou quantas unidades, sendo útil para quantidades e algumas situações de idade. Essas expressões permitem obter informações práticas durante compras, deslocamentos e conversas. Ao responder, procure utilizar a mesma informação que foi solicitada na pergunta.",

      examples: [
        "どうやって がっこうへ いきますか。 — Como você vai para a escola?",
        "ばすで いきます。 — Vou de ônibus.",
        "これは いくらですか。 — Quanto custa isto?",
        "せんえんです。 — Custa mil ienes.",
        "りんごは いくつ ありますか。 — Quantas maçãs existem?",
        "みっつ あります。 — Existem três."
      ],

      keyPoints: [
        "どうやって pergunta como fazer algo.",
        "いくら pergunta preço.",
        "いくつ pergunta quantidade.",
        "で pode indicar o meio utilizado.",
        "Pratique perguntas e respostas completas."
      ]
    }
  ]
},

{
  title: "Forma て",

  goal: "Compreender a formação da forma て, reconhecer suas terminações e utilizar essa forma para ligar ações.",

  days: [
    {
      title: "Conhecendo a forma て",

      explanation: "A forma て é uma das conjugações mais importantes dos verbos japoneses. Ela permite ligar ações, fazer pedidos, solicitar permissão e construir diversas outras estruturas. Seu nome vem da terminação て, mas alguns verbos terminam em で nessa conjugação. Para compreender sua formação, precisamos conhecer os grupos de verbos japoneses. Os verbos do grupo 1, chamados godan, possuem mudanças diferentes conforme sua terminação. Os verbos do grupo 2, chamados ichidan, normalmente perdem o る e recebem て. Existem ainda verbos irregulares, como する e くる.",

      examples: [
        "たべる → たべて — comer → forma て.",
        "みる → みて — ver → forma て.",
        "のむ → のんで — beber → forma て.",
        "かく → かいて — escrever → forma て.",
        "する → して — fazer → forma て."
      ],

      keyPoints: [
        "A forma て possui várias funções gramaticais.",
        "Os verbos são divididos em grupos de conjugação.",
        "Ichidan geralmente transforma る em て.",
        "Godan possui diferentes padrões de transformação.",
        "する e くる são irregulares."
      ]
    },

    {
      title: "Formação da forma て: verbos ichidan",

      explanation: "Os verbos ichidan normalmente terminam em る na forma de dicionário. Para formar a forma て, retiramos る e acrescentamos て. Por exemplo, たべる transforma-se em たべて e みる transforma-se em みて. Essa regra é relativamente simples, mas é importante identificar corretamente o grupo do verbo, porque nem todo verbo terminado em る pertence ao grupo ichidan. Aprender os verbos com sua forma de dicionário ajuda a reconhecer sua conjugação.",

      examples: [
        "たべる → たべて — comer.",
        "みる → みて — ver.",
        "ねる → ねて — dormir.",
        "おきる → おきて — acordar.",
        "あける → あけて — abrir."
      ],

      keyPoints: [
        "Ichidan geralmente termina em る.",
        "Retire る.",
        "Acrescente て.",
        "Exemplo: たべる → たべて.",
        "Nem todo verbo terminado em る é ichidan."
      ]
    },

    {
      title: "Formação da forma て: verbos godan",

      explanation: "Os verbos godan possuem diferentes terminações na forma de dicionário. Por isso, a transformação para a forma て depende da última sílaba. Verbos terminados em う, つ e る geralmente recebem って. Verbos terminados em む, ぶ e ぬ recebem んで. Verbos terminados em く recebem いて, enquanto os terminados em ぐ recebem いで. Já os verbos terminados em す recebem して. Existe uma exceção importante: いく normalmente se transforma em いって, e não いいて.",

      examples: [
        "かう → かって — comprar.",
        "まつ → まって — esperar.",
        "とる → とって — pegar.",
        "のむ → のんで — beber.",
        "よぶ → よんで — chamar.",
        "しぬ → しんで — morrer.",
        "かく → かいて — escrever.",
        "およぐ → およいで — nadar.",
        "はなす → はなして — falar.",
        "いく → いって — ir."
      ],

      keyPoints: [
        "う・つ・る → って.",
        "む・ぶ・ぬ → んで.",
        "く → いて.",
        "ぐ → いで.",
        "す → して.",
        "いく é uma exceção importante: いって."
      ]
    },

    {
      title: "Verbos irregulares e reconhecimento",

      explanation: "Além dos grupos ichidan e godan, existem verbos irregulares que precisam ser memorizados. Os dois mais importantes para iniciantes são する e くる. Na forma て, する transforma-se em して e くる transforma-se em きて. Também é importante reconhecer as formas て de verbos já estudados, como たべます, のみます e いきます. Para isso, precisamos identificar primeiro sua forma de dicionário: たべる, のむ e いく. A forma ます não deve ser simplesmente transformada em て retirando sua terminação; é necessário conhecer a conjugação correta do verbo.",

      examples: [
        "する → して — fazer.",
        "くる → きて — vir.",
        "べんきょうする → べんきょうして — estudar.",
        "たべる → たべて — comer.",
        "のむ → のんで — beber.",
        "いく → いって — ir."
      ],

      keyPoints: [
        "する transforma-se em して.",
        "くる transforma-se em きて.",
        "べんきょうする transforma-se em べんきょうして.",
        "Aprenda a forma de dicionário dos verbos.",
        "Não tente conjugar todos os verbos apenas pela terminação ます."
      ]
    },

    {
      title: "Reconhecendo a forma て em frases",

      explanation: "A forma て pode aparecer no meio de uma frase e não necessariamente no final. Quando encontramos um verbo terminado em て ou で, precisamos observar o contexto para compreender sua função. Nesta etapa, vamos reconhecer a conjugação sem tentar aprender todas as suas aplicações de uma vez. Uma frase pode apresentar uma ação na forma て e depois continuar com outra informação. O importante é perceber que essa forma conecta o verbo ao restante da construção.",

      examples: [
        "ほんを よんで — lendo um livro ou leia um livro, conforme o contexto.",
        "みずを のんで — bebendo água ou beba água, conforme o contexto.",
        "ごはんを たべて — comendo uma refeição ou coma uma refeição, conforme o contexto.",
        "がっこうへ いって — indo para a escola.",
        "べんきょうして — estudando ou estude, conforme o contexto."
      ],

      keyPoints: [
        "A forma て pode aparecer no meio da frase.",
        "Terminações て e で podem indicar a conjugação.",
        "O contexto determina sua função.",
        "A forma て ainda não indica, sozinha, um tempo verbal.",
        "Observe o que aparece depois dela."
      ]
    },

    {
      title: "Ligando ações com a forma て",

      explanation: "Uma das utilizações mais comuns da forma て é conectar ações que fazem parte de uma sequência. Quando colocamos um verbo na forma て e depois acrescentamos outro verbo, podemos comunicar que uma ação acontece e depois outra. Essa estrutura permite descrever rotinas com mais naturalidade. Por exemplo, podemos dizer que acordamos, comemos e depois vamos à escola. A ordem das ações deve ser organizada de maneira lógica para que a sequência seja compreendida.",

      examples: [
        "あさ おきて、あさごはんを たべます。 — Acordo de manhã e tomo café da manhã.",
        "ほんを よんで、ねます。 — Leio um livro e durmo.",
        "うちへ かえって、べんきょうします。 — Volto para casa e estudo.",
        "てを あらって、ごはんを たべます。 — Lavo as mãos e como.",
        "がっこうへ いって、べんきょうします。 — Vou à escola e estudo."
      ],

      keyPoints: [
        "A forma て pode ligar ações.",
        "O verbo seguinte completa a sequência.",
        "A ordem dos acontecimentos importa.",
        "Utilize vírgulas japonesas 、 para separar partes da frase.",
        "Pratique descrevendo sua própria rotina."
      ]
    }
  ]
},

{
  title: "Forma て na prática",

  goal: "Utilizar a forma て para fazer pedidos, solicitar permissão e falar sobre ações em andamento.",

  days: [
    {
      title: "Pedidos educados com てください",

      explanation: "A expressão てください é utilizada para fazer pedidos ou dar instruções de maneira educada. Para construí-la, colocamos ください depois de um verbo na forma て. Por exemplo, みてください significa 'por favor, veja'. Essa estrutura é muito comum em salas de aula, orientações e conversas cotidianas. É importante lembrar que a forma て do verbo precisa estar correta antes de acrescentarmos ください. O pedido pode ser feito para que alguém realize uma ação específica.",

      examples: [
        "みてください。 — Por favor, veja.",
        "きいてください。 — Por favor, escute.",
        "よんでください。 — Por favor, leia.",
        "まってください。 — Por favor, espere.",
        "ここに かいてください。 — Por favor, escreva aqui."
      ],

      keyPoints: [
        "てください forma pedidos educados.",
        "A estrutura é verbo na forma て + ください.",
        "A forma て precisa estar correta.",
        "É comum em instruções e orientações.",
        "O pedido pode indicar uma ação específica."
      ]
    },

    {
      title: "Solicitando permissão com てもいいですか",

      explanation: "A expressão てもいいですか é utilizada para perguntar se algo é permitido. Primeiro colocamos o verbo na forma て e depois acrescentamos もいいですか. A construção pode ser traduzida como 'posso fazer isso?' ou 'tudo bem se eu fizer isso?'. Ela é muito útil em situações cotidianas, como pedir autorização para entrar, utilizar alguma coisa ou realizar uma atividade. Para responder afirmativamente, podemos utilizar いいですよ. Para negar educadamente, podemos utilizar すみません、ちょっと... ou uma explicação mais direta, conforme o contexto.",

      examples: [
        "はいっても いいですか。 — Posso entrar?",
        "ここで たべても いいですか。 — Posso comer aqui?",
        "これを つかっても いいですか。 — Posso usar isto?",
        "しゃしんを とっても いいですか。 — Posso tirar uma fotografia?",
        "いいですよ。 — Tudo bem."
      ],

      keyPoints: [
        "てもいいですか pergunta se algo é permitido.",
        "Utilize o verbo na forma て.",
        "もいいですか completa a pergunta.",
        "いいですよ pode conceder permissão.",
        "A expressão é útil em situações reais."
      ]
    },

    {
      title: "Negando permissão com てはいけません",

      explanation: "Para indicar que determinada ação não é permitida, podemos utilizar てはいけません. A estrutura é formada pelo verbo na forma て seguido de はいけません. Ela expressa proibição e pode ser traduzida como 'não pode fazer isso' ou 'não é permitido'. É diferente de um simples pedido para alguém não fazer alguma coisa: trata-se de indicar que a ação não é permitida em determinada situação. Em conversas, também podemos encontrar a forma contraída ちゃいけません, mas vamos começar pela construção completa.",

      examples: [
        "ここで たべてはいけません。 — Não pode comer aqui.",
        "ここに はいってはいけません。 — Não pode entrar aqui.",
        "しゃしんを とってはいけません。 — Não pode tirar fotografias.",
        "ここで あそんではいけません。 — Não pode brincar aqui.",
        "さわってはいけません。 — Não pode tocar."
      ],

      keyPoints: [
        "てはいけません expressa proibição.",
        "A estrutura utiliza a forma て.",
        "Não significa apenas um pedido educado.",
        "Pode ser utilizada em regras e avisos.",
        "Observe a diferença entre permissão e proibição."
      ]
    },

    {
      title: "Ações em andamento com ています",

      explanation: "A expressão ています é formada pela forma て do verbo seguida de います. Uma de suas utilizações mais importantes é indicar uma ação que está acontecendo naquele momento. Por exemplo, たべています significa 'estou comendo', enquanto よんでいます significa 'estou lendo'. Dependendo do verbo e do contexto, ています também pode indicar estados resultantes ou situações habituais, mas inicialmente vamos concentrar nosso aprendizado nas ações em andamento. Essa construção permite descrever o que uma pessoa está fazendo agora.",

      examples: [
        "ごはんを たべています。 — Estou comendo.",
        "ほんを よんでいます。 — Estou lendo um livro.",
        "みずを のんでいます。 — Estou bebendo água.",
        "べんきょうしています。 — Estou estudando.",
        "ともだちと はなしています。 — Estou conversando com um amigo."
      ],

      keyPoints: [
        "ています pode indicar uma ação em andamento.",
        "A estrutura é forma て + います.",
        "A tradução pode utilizar 'estou fazendo'.",
        "O contexto pode apresentar outros sentidos.",
        "Observe a conjugação do verbo antes de います."
      ]
    },

    {
      title: "Utilizando ています em situações cotidianas",

      explanation: "Agora vamos praticar ています em diferentes situações. Podemos utilizar essa construção para responder o que estamos fazendo, descrever outras pessoas ou contar o que acontece em determinado ambiente. A pergunta なにを していますか significa 'o que você está fazendo?'. Para responder, basta utilizar o verbo na forma ています. É importante lembrar que o sujeito pode ser omitido quando já está claro pelo contexto. Também podemos combinar essa construção com expressões de lugar e companhia.",

      examples: [
        "なにを していますか。 — O que você está fazendo?",
        "ほんを よんでいます。 — Estou lendo um livro.",
        "ともだちは べんきょうしています。 — Meu amigo está estudando.",
        "うちで おちゃを のんでいます。 — Estou bebendo chá em casa.",
        "こどもが あそんでいます。 — A criança está brincando."
      ],

      keyPoints: [
        "なにを していますか pergunta o que alguém está fazendo.",
        "ています descreve ações em andamento.",
        "O sujeito pode ser omitido.",
        "Combine ています com partículas de localização.",
        "Pratique descrevendo situações ao seu redor."
      ]
    },

    {
      title: "Diálogos com a forma て",

      explanation: "Nesta aula, vamos combinar pedidos, permissões, proibições e ações em andamento em pequenos diálogos. Imagine uma conversa em uma sala ou na casa de alguém. Uma pessoa pode perguntar se pode utilizar um objeto, outra pode responder concedendo permissão e depois fazer um pedido. Essas situações permitem utilizar várias construções da forma て de maneira natural. O objetivo é reconhecer qual expressão utilizar de acordo com a intenção: pedir, autorizar, proibir ou descrever uma ação.",

      examples: [
        "ここに すわっても いいですか。 — Posso sentar aqui?",
        "はい、いいですよ。 — Sim, tudo bem.",
        "この ほんを よんでください。 — Por favor, leia este livro.",
        "ここで しゃしんを とってはいけません。 — Não pode tirar fotografias aqui.",
        "なにを していますか。 — O que você está fazendo?",
        "べんきょうしています。 — Estou estudando."
      ],

      keyPoints: [
        "てください faz pedidos.",
        "てもいいですか pergunta sobre permissão.",
        "てはいけません expressa proibição.",
        "ています descreve ações em andamento.",
        "Escolha a construção de acordo com sua intenção."
      ]
    }
  ]
},

{
  title: "Forma ない",

  goal: "Aprender a formar a conjugação negativa informal dos verbos e utilizá-la em frases e proibições.",

  days: [
    {
      title: "Conhecendo a forma ない",

      explanation: "A forma ない é a conjugação negativa informal dos verbos japoneses. Ela permite dizer que uma ação não acontece ou que alguém não realiza determinada atividade. Diferentemente da forma educada ません, a forma ない é utilizada em conversas informais e também aparece em diversas estruturas gramaticais. Para formá-la, precisamos conhecer o grupo de conjugação de cada verbo. Os verbos ichidan normalmente perdem o る e recebem ない. Os verbos godan mudam a última sílaba para a linha do あ antes de acrescentar ない. Existem exceções, como する e くる.",

      examples: [
        "たべる → たべない — não comer.",
        "みる → みない — não ver.",
        "のむ → のまない — não beber.",
        "かく → かかない — não escrever.",
        "する → しない — não fazer.",
        "くる → こない — não vir."
      ],

      keyPoints: [
        "ない forma a negação informal.",
        "Ichidan geralmente transforma る em ない.",
        "Godan muda a última sílaba para a linha do あ.",
        "する transforma-se em しない.",
        "くる transforma-se em こない."
      ]
    },

    {
      title: "Formação da forma ない: ichidan",

      explanation: "Os verbos ichidan possuem uma formação relativamente simples. Retiramos o る final da forma de dicionário e acrescentamos ない. Por exemplo, たべる transforma-se em たべない, enquanto みる transforma-se em みない. A mesma regra pode ser aplicada a outros verbos desse grupo, como ねる e おきる. É importante lembrar que a forma de dicionário é a base da conjugação. Por isso, não devemos retirar simplesmente ます da forma educada e acrescentar ない.",

      examples: [
        "たべる → たべない — comer → não comer.",
        "みる → みない — ver → não ver.",
        "ねる → ねない — dormir → não dormir.",
        "おきる → おきない — acordar → não acordar.",
        "あける → あけない — abrir → não abrir."
      ],

      keyPoints: [
        "Identifique se o verbo é ichidan.",
        "Retire る.",
        "Acrescente ない.",
        "たべる transforma-se em たべない.",
        "Utilize a forma de dicionário como base."
      ]
    },

    {
      title: "Formação da forma ない: godan",

      explanation: "Os verbos godan precisam de uma transformação diferente. Para formar a negativa, substituímos a última sílaba da linha do う pela sílaba correspondente da linha do あ e acrescentamos ない. Por exemplo, のむ transforma-se em のまない, かく transforma-se em かかない e はなす transforma-se em はなさない. Quando o verbo termina em う, a transformação é especial: かう transforma-se em かわない. Essa regra precisa ser praticada com diferentes terminações para que a conjugação fique natural.",

      examples: [
        "のむ → のまない — beber.",
        "かく → かかない — escrever.",
        "はなす → はなさない — falar.",
        "まつ → またない — esperar.",
        "とる → とらない — pegar.",
        "よぶ → よばない — chamar.",
        "かう → かわない — comprar.",
        "いく → いかない — ir."
      ],

      keyPoints: [
        "Godan muda a última sílaba para a linha do あ.",
        "む → ま.",
        "く → か.",
        "す → さ.",
        "つ → た.",
        "る → ら.",
        "う → わ.",
        "Depois da mudança, acrescentamos ない."
      ]
    },

    {
      title: "Verbos irregulares na forma ない",

      explanation: "Dois verbos muito importantes possuem conjugações irregulares na forma ない. する transforma-se em しない, enquanto くる transforma-se em こない. Também precisamos prestar atenção ao verbo ある, que significa existir para coisas ou situações. Sua forma negativa comum é ない, e não あらない. Essas formas precisam ser memorizadas porque não seguem integralmente as regras dos grupos regulares. Elas aparecem com frequência em conversas e construções gramaticais.",

      examples: [
        "する → しない — fazer → não fazer.",
        "くる → こない — vir → não vir.",
        "べんきょうする → べんきょうしない — estudar → não estudar.",
        "ある → ない — existir → não existir.",
        "きょうは がっこうへ いかない。 — Hoje não vou à escola."
      ],

      keyPoints: [
        "する transforma-se em しない.",
        "くる transforma-se em こない.",
        "べんきょうする transforma-se em べんきょうしない.",
        "ある possui a negativa especial ない.",
        "Memorize as formas irregulares."
      ]
    },

    {
      title: "Utilizando ない em frases",

      explanation: "Depois de aprender a formação, podemos utilizar a forma ない em frases negativas informais. Ela permite falar sobre hábitos, decisões e ações que não serão realizadas. A frase わたしは にくを たべない significa 'eu não como carne'. Já きょうは いかない significa 'hoje não vou'. Diferentemente da forma educada ません, a forma ない é mais comum em conversas informais e exige atenção ao nível de formalidade. Em contextos educados, devemos continuar utilizando as formas apropriadas.",

      examples: [
        "わたしは にくを たべない。 — Eu não como carne.",
        "きょうは がっこうへ いかない。 — Hoje não vou à escola.",
        "おちゃを のまない。 — Não bebo chá.",
        "ほんを よまない。 — Não leio livros.",
        "ともだちと あそばない。 — Não brinco com amigos."
      ],

      keyPoints: [
        "ない forma frases negativas informais.",
        "Pode expressar hábitos e decisões.",
        "A estrutura da frase permanece semelhante.",
        "A forma ない não é tão educada quanto ません.",
        "Escolha a forma verbal conforme a situação."
      ]
    },

    {
      title: "Proibições e pedidos negativos",

      explanation: "A forma ない aparece em construções utilizadas para pedir que alguém não faça alguma coisa. Uma expressão importante é ないでください, que significa 'por favor, não faça'. Ela é diferente de てはいけません, que indica proibição. Por exemplo, ここで たべないでください é um pedido para que alguém não coma naquele local. Já ここで たべてはいけません expressa que comer ali não é permitido. Essa diferença é importante para compreender o tom e a intenção de cada frase.",

      examples: [
        "たべないでください。 — Por favor, não coma.",
        "いかないでください。 — Por favor, não vá.",
        "ここで はなさないでください。 — Por favor, não fale aqui.",
        "わすれないでください。 — Por favor, não esqueça.",
        "ここで たべてはいけません。 — Não é permitido comer aqui."
      ],

      keyPoints: [
        "ないでください faz pedidos negativos.",
        "A estrutura é forma ない sem い + でください.",
        "てはいけません indica proibição.",
        "Um pedido negativo e uma proibição não são exatamente iguais.",
        "Observe o contexto antes de escolher a expressão."
      ]
    }
  ]
},

{
  title: "Forma た",

  goal: "Aprender a conjugação informal do passado, falar sobre experiências e construir pequenas narrativas.",

  days: [
    {
      title: "Conhecendo a forma た",

      explanation: "A forma た é utilizada para expressar ações concluídas no passado em construções informais. Ela possui uma formação muito parecida com a forma て: as terminações são praticamente as mesmas, mas o て final é substituído por た e o で final por だ. Por exemplo, たべて transforma-se em たべた, enquanto のんで transforma-se em のんだ. Essa semelhança facilita o aprendizado porque podemos utilizar as regras da forma て como referência. A forma た aparece em conversas informais e em estruturas importantes para contar acontecimentos.",

      examples: [
        "たべる → たべた — comer → comeu.",
        "みる → みた — ver → viu.",
        "のむ → のんだ — beber → bebeu.",
        "かく → かいた — escrever → escreveu.",
        "する → した — fazer → fez."
      ],

      keyPoints: [
        "た indica passado informal afirmativo.",
        "A formação é parecida com a forma て.",
        "て geralmente corresponde a た.",
        "で geralmente corresponde a だ.",
        "O contexto indica quem realizou a ação."
      ]
    },

    {
      title: "Formação da forma た: ichidan e irregulares",

      explanation: "Os verbos ichidan formam a forma た retirando o る final e acrescentando た. Assim, たべる transforma-se em たべた e みる transforma-se em みた. Os verbos irregulares precisam ser memorizados: する transforma-se em した e くる transforma-se em きた. Também é importante conhecer a exceção いく, que se transforma em いった. Essas formas são muito utilizadas para falar sobre ações que já aconteceram.",

      examples: [
        "たべる → たべた — comer → comeu.",
        "みる → みた — ver → viu.",
        "ねる → ねた — dormir → dormiu.",
        "おきる → おきた — acordar → acordou.",
        "する → した — fazer → fez.",
        "くる → きた — vir → veio.",
        "いく → いった — ir → foi."
      ],

      keyPoints: [
        "Ichidan: る → た.",
        "する transforma-se em した.",
        "くる transforma-se em きた.",
        "いく transforma-se em いった.",
        "Memorize as formas irregulares."
      ]
    },

    {
      title: "Formação da forma た: godan",

      explanation: "Os verbos godan utilizam as mesmas mudanças da forma て, mas terminam em た ou だ. Verbos terminados em う, つ e る recebem った. Verbos terminados em む, ぶ e ぬ recebem んだ. Os terminados em く recebem いた, enquanto os terminados em ぐ recebem いだ. Já os terminados em す recebem した. Por exemplo, のむ transforma-se em のんだ e かく transforma-se em かいた. A exceção いく transforma-se em いった.",

      examples: [
        "かう → かった — comprar → comprou.",
        "まつ → まった — esperar → esperou.",
        "とる → とった — pegar → pegou.",
        "のむ → のんだ — beber → bebeu.",
        "よぶ → よんだ — chamar → chamou.",
        "しぬ → しんだ — morrer → morreu.",
        "かく → かいた — escrever → escreveu.",
        "およぐ → およいだ — nadar → nadou.",
        "はなす → はなした — falar → falou.",
        "いく → いった — ir → foi."
      ],

      keyPoints: [
        "う・つ・る → った.",
        "む・ぶ・ぬ → んだ.",
        "く → いた.",
        "ぐ → いだ.",
        "す → した.",
        "いく é uma exceção: いった."
      ]
    },

    {
      title: "Passado informal negativo",

      explanation: "A forma negativa passada informal é construída a partir da forma ない. Primeiro transformamos o verbo para sua forma negativa e depois substituímos o い final por かった. Por exemplo, たべない transforma-se em たべなかった, que significa 'não comeu'. Da mesma maneira, のまない transforma-se em のまなかった. Essa estrutura permite contar acontecimentos que não ocorreram. É importante não confundir たべなかった com たべなかったです, que acrescenta uma forma de cortesia e pode aparecer em conversas.",

      examples: [
        "たべない → たべなかった — não comeu.",
        "のまない → のまなかった — não bebeu.",
        "いかない → いかなかった — não foi.",
        "みない → みなかった — não viu.",
        "しない → しなかった — não fez.",
        "こない → こなかった — não veio."
      ],

      keyPoints: [
        "ない transforma-se em なかった.",
        "A forma expressa passado negativo.",
        "たべない transforma-se em たべなかった.",
        "しない transforma-se em しなかった.",
        "こない transforma-se em こなかった."
      ]
    },

    {
      title: "Falando sobre experiências",

      explanation: "A forma た pode ser utilizada em uma estrutura muito importante para falar sobre experiências: verbo na forma た + ことがある. Essa construção significa que alguém já fez determinada coisa alguma vez. Por exemplo, にほんへ いったことがある significa 'já fui ao Japão'. Para perguntar se alguém já teve uma experiência, utilizamos ことが ありますか. A resposta negativa pode ser construída com ことが ありません ou, em linguagem informal, ことが ない. Essa estrutura não indica apenas uma ação passada específica, mas uma experiência acumulada até o momento.",

      examples: [
        "にほんへ いったことが あります。 — Já fui ao Japão.",
        "すしを たべたことが あります。 — Já comi sushi.",
        "この ほんを よんだことが あります。 — Já li este livro.",
        "にほんごを べんきょうしたことが あります。 — Já estudei japonês.",
        "にほんへ いったことが ありますか。 — Você já foi ao Japão?"
      ],

      keyPoints: [
        "たことがある expressa experiência.",
        "O verbo precisa estar na forma た.",
        "ことがある significa ter uma experiência.",
        "ことがありません pode negar a experiência.",
        "É diferente de simplesmente contar quando algo aconteceu."
      ]
    },

    {
      title: "Pequenas narrativas no passado",

      explanation: "Nesta aula, vamos utilizar a forma た para contar acontecimentos simples. Uma narrativa pode apresentar quando algo aconteceu, onde a pessoa estava, quais atividades realizou e como foi a experiência. Podemos combinar expressões como きのう (ontem), せんしゅう (semana passada) e そのあと (depois disso). Também podemos ligar acontecimentos utilizando a forma て e encerrar as ações com verbos no passado. O objetivo é construir uma sequência organizada de frases que conte uma pequena história compreensível.",

      examples: [
        "きのう がっこうへ いった。 — Ontem fui à escola.",
        "ともだちと はなした。 — Conversei com um amigo.",
        "うちへ かえって、ほんを よんだ。 — Voltei para casa e li um livro.",
        "そのあと、ばんごはんを たべた。 — Depois disso, jantei.",
        "よるに ねた。 — Dormi à noite."
      ],

      keyPoints: [
        "た permite narrar ações concluídas.",
        "きのう significa ontem.",
        "せんしゅう significa semana passada.",
        "そのあと significa depois disso.",
        "A forma て pode conectar ações.",
        "Organize os acontecimentos em ordem cronológica."
      ]
    }
  ]
},


// ======================================================
// SEMANA 13 — DESEJO E INTENÇÃO
// ======================================================

{
  title: "Desejo e intenção",
  goal: "Aprender a expressar vontades, desejos, intenções, planos e convites em japonês.",
  days: [
    {
      title: "Expressando vontade com たい",
      explanation: "A estrutura たい é usada para dizer que você quer fazer alguma coisa. Ela é adicionada à base da forma ます do verbo, retirando o ます e colocando たい. Por exemplo: たべます vira たべたい, que significa querer comer. Essa estrutura expressa o desejo de quem está falando.",
      examples: [
        { jp: "すしを たべたいです。", pt: "Quero comer sushi." },
        { jp: "にほんごを べんきょうしたいです。", pt: "Quero estudar japonês." },
        { jp: "みずを のみたいです。", pt: "Quero beber água." },
        { jp: "ほんを よみたいです。", pt: "Quero ler um livro." }
      ],
      keyPoints: [
        "Retire ます do verbo e acrescente たい.",
        "たべます → たべたい.",
        "のみます → のみたい.",
        "べんきょうします → べんきょうしたい.",
        "たい expressa o desejo de realizar uma ação."
      ]
    },
    {
      title: "Perguntando sobre desejos",
      explanation: "Para perguntar se outra pessoa quer fazer alguma coisa, podemos usar たいですか. A estrutura é a mesma da afirmação, mas transformada em pergunta. É importante lembrar que, ao falar sobre o desejo de outra pessoa, existem outras construções mais específicas, mas nesta etapa vamos praticar perguntas diretas em conversas simples.",
      examples: [
        { jp: "なにを たべたいですか。", pt: "O que você quer comer?" },
        { jp: "なにを のみたいですか。", pt: "O que você quer beber?" },
        { jp: "どこへ いきたいですか。", pt: "Para onde você quer ir?" },
        { jp: "にほんごを べんきょうしたいですか。", pt: "Você quer estudar japonês?" }
      ],
      keyPoints: [
        "たいですか transforma o desejo em pergunta.",
        "なに significa o quê.",
        "どこ significa onde.",
        "へ indica direção ou destino.",
        "Responda usando たいです ou たいです + uma informação."
      ]
    },
    {
      title: "Expressando desejo com ほしい",
      explanation: "A palavra ほしい significa querer ou desejar alguma coisa. Diferentemente de たい, que é usada para ações, ほしい é usada principalmente para expressar desejo por objetos ou coisas. A estrutura mais comum é: objeto + が + ほしいです.",
      examples: [
        { jp: "あたらしい ほんが ほしいです。", pt: "Quero um livro novo." },
        { jp: "みずが ほしいです。", pt: "Quero água." },
        { jp: "じかんが ほしいです。", pt: "Quero tempo." },
        { jp: "ねこが ほしいです。", pt: "Quero um gato." }
      ],
      keyPoints: [
        "たい é usado para querer fazer uma ação.",
        "ほしい é usado para querer alguma coisa.",
        "A partícula が aparece frequentemente antes de ほしい.",
        "ほんを よみたい = Quero ler um livro.",
        "ほんが ほしい = Quero um livro."
      ]
    },
    {
      title: "Falando sobre intenções com つもり",
      explanation: "A estrutura つもりです é usada para expressar uma intenção ou um plano pessoal. Ela aparece depois do verbo na forma de dicionário. Por exemplo, いく significa ir. いくつもりです significa pretendo ir. Também podemos usar a forma negativa do verbo para dizer que não pretendemos fazer alguma coisa.",
      examples: [
        { jp: "あした べんきょうする つもりです。", pt: "Pretendo estudar amanhã." },
        { jp: "にほんへ いく つもりです。", pt: "Pretendo ir ao Japão." },
        { jp: "きょうは いかない つもりです。", pt: "Não pretendo ir hoje." },
        { jp: "ほんを よむ つもりです。", pt: "Pretendo ler um livro." }
      ],
      keyPoints: [
        "つもりです expressa intenção ou plano.",
        "Use o verbo na forma de dicionário antes de つもりです.",
        "A forma negativa também pode ser usada.",
        "いく つもりです = Pretendo ir.",
        "いかない つもりです = Não pretendo ir."
      ]
    },
    {
      title: "Fazendo convites",
      explanation: "Para convidar alguém a fazer alguma coisa, podemos usar ませんか. Essa estrutura equivale a um convite educado, como 'Você gostaria de...?'. Outra possibilidade é ましょう, que significa 'Vamos...'. A diferença é que ませんか apresenta um convite, enquanto ましょう expressa uma proposta ou decisão de fazer algo juntos.",
      examples: [
        { jp: "いっしょに べんきょうしませんか。", pt: "Você gostaria de estudar comigo?" },
        { jp: "いっしょに いきませんか。", pt: "Você gostaria de ir comigo?" },
        { jp: "いっしょに たべましょう。", pt: "Vamos comer juntos." },
        { jp: "ほんを よみましょう。", pt: "Vamos ler um livro." }
      ],
      keyPoints: [
        "ませんか é usado para fazer convites educados.",
        "ましょう significa vamos fazer alguma coisa.",
        "いっしょに significa juntos.",
        "しませんか = Você gostaria de fazer?",
        "しましょう = Vamos fazer!"
      ]
    },
    {
      title: "Construindo planos e convites",
      explanation: "Agora vamos combinar desejos, intenções e convites em situações reais. Uma conversa pode começar perguntando o que alguém quer fazer, continuar com uma resposta usando たい e terminar com uma proposta usando ませんか ou ましょう. O objetivo é conseguir expressar uma vontade e transformá-la em um plano simples.",
      examples: [
        { jp: "あした なにを したいですか。", pt: "O que você quer fazer amanhã?" },
        { jp: "ほんを よみたいです。", pt: "Quero ler um livro." },
        { jp: "いっしょに よみませんか。", pt: "Você gostaria de ler comigo?" },
        { jp: "はい、よみましょう。", pt: "Sim, vamos ler." },
        { jp: "あした べんきょうする つもりです。", pt: "Pretendo estudar amanhã." }
      ],
      keyPoints: [
        "Use たい para expressar desejos.",
        "Use ほしい para expressar desejo por coisas.",
        "Use つもり para falar sobre intenções.",
        "Use ませんか para convidar.",
        "Use ましょう para propor uma atividade conjunta."
      ]
    }
  ]
},

// ======================================================
// SEMANA 14 — COMPARAÇÕES E DESCRIÇÕES
// ======================================================

{
  title: "Comparações e descrições",
  goal: "Aprender a comparar pessoas, objetos, atividades e preferências usando より, ほうが e いちばん.",
  days: [
    {
      title: "Comparando com より",
      explanation: "A palavra より é usada para indicar o elemento de referência de uma comparação. Uma estrutura comum é: A は B より + descrição. Isso significa que A possui determinada característica em maior grau do que B. Por exemplo, にほんごは えいごより むずかしいです significa que japonês é mais difícil do que inglês.",
      examples: [
        { jp: "いぬは ねこより おおきいです。", pt: "Cachorros são maiores do que gatos." },
        { jp: "にほんごは えいごより むずかしいです。", pt: "Japonês é mais difícil do que inglês." },
        { jp: "きょうは きのうより あついです。", pt: "Hoje está mais quente do que ontem." },
        { jp: "この ほんは あの ほんより おもしろいです。", pt: "Este livro é mais interessante do que aquele livro." }
      ],
      keyPoints: [
        "より apresenta o elemento usado como referência.",
        "A は B より + característica.",
        "A comparação depende da característica utilizada.",
        "おおきい significa grande.",
        "むずかしい significa difícil."
      ]
    },
    {
      title: "Usando ほうが nas comparações",
      explanation: "A estrutura ほうが destaca qual dos dois elementos possui determinada característica em maior grau. Podemos construir a comparação colocando uma opção com より e a outra com ほうが. A estrutura A より B のほうが significa que B é mais alguma coisa do que A.",
      examples: [
        { jp: "ねこより いぬの ほうが すきです。", pt: "Gosto mais de cachorros do que de gatos." },
        { jp: "えいごより にほんごの ほうが おもしろいです。", pt: "Japonês é mais interessante do que inglês." },
        { jp: "バスより でんしゃの ほうが はやいです。", pt: "O trem é mais rápido do que o ônibus." },
        { jp: "きのうより きょうの ほうが さむいです。", pt: "Hoje está mais frio do que ontem." }
      ],
      keyPoints: [
        "A より B のほうが significa que B possui mais determinada característica.",
        "ほうが destaca a opção escolhida na comparação.",
        "すき significa gostar ou ser do agrado.",
        "はやい significa rápido.",
        "さむい significa frio."
      ]
    },
    {
      title: "Falando sobre o que mais gosta com いちばん",
      explanation: "A palavra いちばん significa número um, o primeiro ou o mais. Em comparações, ela é usada para indicar o elemento que possui determinada característica no grau mais alto dentro de um grupo. Podemos usar a estrutura: grupo の なかで + elemento が + いちばん + descrição.",
      examples: [
        { jp: "くだものの なかで りんごが いちばん すきです。", pt: "Entre as frutas, gosto mais de maçã." },
        { jp: "スポーツの なかで サッカーが いちばん すきです。", pt: "Entre os esportes, gosto mais de futebol." },
        { jp: "この まちで ここが いちばん しずかです。", pt: "Neste bairro, aqui é o lugar mais tranquilo." },
        { jp: "かぞくの なかで だれが いちばん はやいですか。", pt: "Na família, quem é o mais rápido?" }
      ],
      keyPoints: [
        "いちばん indica o maior grau dentro de um grupo.",
        "の なかで significa dentro de ou entre.",
        "いちばん すき significa o que mais gosta.",
        "Podemos comparar gostos, características e qualidades.",
        "A pergunta pode usar だれ ou なに."
      ]
    },
    {
      title: "Descrevendo preferências",
      explanation: "Para falar sobre preferências, podemos combinar すきです com as estruturas de comparação. Também podemos usar きらいです para dizer que não gostamos de alguma coisa. Assim, conseguimos explicar nossas escolhas e comparar duas ou mais opções.",
      examples: [
        { jp: "わたしは ねこが すきです。", pt: "Eu gosto de gatos." },
        { jp: "いぬより ねこの ほうが すきです。", pt: "Gosto mais de gatos do que de cachorros." },
        { jp: "やさいが きらいです。", pt: "Não gosto de vegetais." },
        { jp: "たべものの なかで すしが いちばん すきです。", pt: "Entre as comidas, gosto mais de sushi." }
      ],
      keyPoints: [
        "すきです expressa gostar.",
        "きらいです expressa não gostar.",
        "より e ほうが permitem explicar qual opção você prefere.",
        "いちばん permite indicar sua preferência principal.",
        "Use が com すき e きらい nas estruturas básicas."
      ]
    },
    {
      title: "Descrevendo diferenças",
      explanation: "Comparar não significa apenas dizer que algo é melhor ou maior. Também podemos comparar velocidade, dificuldade, tamanho, temperatura e interesse. Nesta aula, vamos praticar a escolha de características adequadas para descrever as diferenças entre duas coisas.",
      examples: [
        { jp: "この いえは あの いえより おおきいです。", pt: "Esta casa é maior do que aquela casa." },
        { jp: "でんしゃは バスより はやいです。", pt: "O trem é mais rápido do que o ônibus." },
        { jp: "この ほんは あの ほんより むずかしいです。", pt: "Este livro é mais difícil do que aquele livro." },
        { jp: "この へやは あの へやより しずかです。", pt: "Este quarto é mais tranquilo do que aquele quarto." }
      ],
      keyPoints: [
        "Escolha uma característica que faça sentido para a comparação.",
        "おおきい = grande.",
        "はやい = rápido.",
        "むずかしい = difícil.",
        "しずか = tranquilo ou silencioso."
      ]
    },
    {
      title: "Comparando e explicando escolhas",
      explanation: "Nesta aula, vamos juntar as estruturas aprendidas para construir opiniões mais completas. Uma boa resposta pode apresentar duas opções, dizer qual delas você prefere e explicar uma característica. O objetivo é deixar de responder apenas sim ou não e começar a explicar suas escolhas.",
      examples: [
        { jp: "ねこと いぬと どちらが すきですか。", pt: "De qual você gosta mais: gatos ou cachorros?" },
        { jp: "ねこの ほうが すきです。", pt: "Gosto mais de gatos." },
        { jp: "どうしてですか。", pt: "Por quê?" },
        { jp: "ねこは かわいいですから。", pt: "Porque gatos são fofos." },
        { jp: "どうぶつの なかで ねこが いちばん すきです。", pt: "Entre os animais, gosto mais de gatos." }
      ],
      keyPoints: [
        "どちら pergunta qual de duas opções.",
        "どうして pergunta por quê.",
        "から pode indicar uma razão, como porque.",
        "ほうが destaca a opção preferida.",
        "いちばん apresenta a preferência principal."
      ]
    }
  ]
},

// ======================================================
// SEMANA 15 — CONSTRUÇÃO DE DIÁLOGOS
// ======================================================

{
  title: "Construção de diálogos",
  goal: "Combinar os conteúdos das semanas anteriores para criar conversas básicas em japonês.",
  days: [
    {
      title: "Apresentação e primeiras perguntas",
      explanation: "Uma conversa básica geralmente começa com uma saudação e uma apresentação. Podemos dizer nosso nome, falar que somos estudantes, indicar de onde somos e perguntar informações sobre outra pessoa. Nesta aula, vamos combinar essas estruturas em uma conversa natural.",
      examples: [
        { jp: "こんにちは。", pt: "Olá." },
        { jp: "わたしは カイオです。", pt: "Eu sou Caio." },
        { jp: "がくせいです。", pt: "Sou estudante." },
        { jp: "どこから きましたか。", pt: "De onde você veio?" },
        { jp: "ブラジルから きました。", pt: "Vim do Brasil." },
        { jp: "よろしく おねがいします。", pt: "Prazer em conhecer você." }
      ],
      keyPoints: [
        "Comece com uma saudação.",
        "Use わたしは para iniciar uma apresentação.",
        "Use です para finalizar uma afirmação educada.",
        "どこから pergunta de onde alguém veio.",
        "Pratique perguntar e responder, não apenas apresentar a si mesmo."
      ]
    },
    {
      title: "Perguntas e respostas sobre rotina",
      explanation: "Agora vamos conversar sobre atividades do cotidiano. Para isso, podemos perguntar quando alguém acorda, onde estuda, o que faz e em que horário realiza determinada atividade. A estrutura de perguntas aprendida anteriormente será combinada com verbos e expressões de tempo.",
      examples: [
        { jp: "まいあさ なんじに おきますか。", pt: "A que horas você acorda todas as manhãs?" },
        { jp: "しちじに おきます。", pt: "Acordo às sete horas." },
        { jp: "どこで べんきょうしますか。", pt: "Onde você estuda?" },
        { jp: "いえで べんきょうします。", pt: "Estudo em casa." },
        { jp: "よる なにを しますか。", pt: "O que você faz à noite?" },
        { jp: "ほんを よみます。", pt: "Leio um livro." }
      ],
      keyPoints: [
        "まいあさ significa todas as manhãs.",
        "なんじ pergunta o horário.",
        "どこで pergunta onde uma ação acontece.",
        "いえ significa casa.",
        "Pratique respostas completas com verbos."
      ]
    },
    {
      title: "Falando sobre gostos e preferências",
      explanation: "Uma conversa fica mais interessante quando falamos sobre aquilo de que gostamos. Podemos perguntar sobre comida, animais, esportes e atividades. Também podemos comparar preferências e explicar por que gostamos de determinada coisa.",
      examples: [
        { jp: "なにが すきですか。", pt: "Do que você gosta?" },
        { jp: "サッカーが すきです。", pt: "Gosto de futebol." },
        { jp: "ねこと いぬと どちらが すきですか。", pt: "De qual você gosta mais: gatos ou cachorros?" },
        { jp: "ねこの ほうが すきです。", pt: "Gosto mais de gatos." },
        { jp: "どうしてですか。", pt: "Por quê?" },
        { jp: "かわいいですから。", pt: "Porque são fofos." }
      ],
      keyPoints: [
        "なにが すきですか pergunta do que alguém gosta.",
        "どちら permite comparar duas opções.",
        "ほうが destaca a preferência.",
        "どうして pergunta o motivo.",
        "から pode apresentar uma justificativa."
      ]
    },
    {
      title: "Contando o que aconteceu",
      explanation: "Para contar algo que aconteceu, precisamos utilizar as formas de passado. A forma ました é educada e serve para contar ações concluídas. Também podemos usar a forma informal た para montar frases e falar sobre experiências. Nesta aula, vamos priorizar a comunicação usando exemplos simples.",
      examples: [
        { jp: "きのう なにを しましたか。", pt: "O que você fez ontem?" },
        { jp: "ほんを よみました。", pt: "Li um livro." },
        { jp: "ともだちと あそびました。", pt: "Brinquei com um amigo." },
        { jp: "すしを たべました。", pt: "Comi sushi." },
        { jp: "にほんごを べんきょうしました。", pt: "Estudei japonês." }
      ],
      keyPoints: [
        "きのう significa ontem.",
        "ました indica passado na forma educada.",
        "しました é o passado de します.",
        "たべました é o passado de たべます.",
        "Responda perguntas sobre o passado usando ações que você conhece."
      ]
    },
    {
      title: "Falando sobre planos e fazendo pedidos",
      explanation: "Nesta aula, vamos combinar intenções, desejos, convites e pedidos. Podemos contar o que pretendemos fazer amanhã, perguntar o que outra pessoa deseja e pedir que alguém realize uma ação. A forma てください é utilizada para fazer pedidos educados.",
      examples: [
        { jp: "あした なにを する つもりですか。", pt: "O que você pretende fazer amanhã?" },
        { jp: "にほんごを べんきょうする つもりです。", pt: "Pretendo estudar japonês." },
        { jp: "いっしょに べんきょうしませんか。", pt: "Você gostaria de estudar comigo?" },
        { jp: "ちょっと まってください。", pt: "Por favor, espere um pouco." },
        { jp: "もういちど いってください。", pt: "Por favor, diga mais uma vez." }
      ],
      keyPoints: [
        "つもりです expressa intenção.",
        "ませんか é usado para convidar.",
        "てください é usado para fazer pedidos.",
        "もういちど significa mais uma vez.",
        "Combine planos com ações e horários."
      ]
    },
    {
      title: "Diálogo completo: uma conversa do cotidiano",
      explanation: "Agora vamos construir uma conversa que combina apresentação, perguntas, rotina, gostos, passado e planos. Leia o diálogo inteiro, identifique a função de cada frase e tente responder às perguntas sem consultar a tradução. O objetivo é compreender a conversa como um todo.",
      examples: [
        { jp: "こんにちは。おなまえは なんですか。", pt: "Olá. Qual é o seu nome?" },
        { jp: "わたしは カイオです。あなたは？", pt: "Eu sou Caio. E você?" },
        { jp: "わたしは アキです。", pt: "Eu sou Aki." },
        { jp: "まいにち なにを しますか。", pt: "O que você faz todos os dias?" },
        { jp: "にほんごを べんきょうします。", pt: "Estudo japonês." },
        { jp: "なにが すきですか。", pt: "Do que você gosta?" },
        { jp: "ねこと サッカーが すきです。", pt: "Gosto de gatos e futebol." },
        { jp: "きのう なにを しましたか。", pt: "O que você fez ontem?" },
        { jp: "ほんを よみました。", pt: "Li um livro." },
        { jp: "あした なにを する つもりですか。", pt: "O que pretende fazer amanhã?" },
        { jp: "ともだちと あそぶ つもりです。", pt: "Pretendo brincar com um amigo." },
        { jp: "いっしょに べんきょうしませんか。", pt: "Você gostaria de estudar comigo?" },
        { jp: "はい、べんきょうしましょう。", pt: "Sim, vamos estudar." }
      ],
      keyPoints: [
        "Leia o diálogo inteiro antes de consultar a tradução.",
        "Identifique quem está fazendo cada pergunta.",
        "Observe como as respostas aproveitam as perguntas anteriores.",
        "Tente substituir as informações por dados diferentes.",
        "O objetivo é construir uma conversa própria."
      ]
    }
  ]
},

// ======================================================
// SEMANA 16 — TESTE DE BASE
// ======================================================

{
  title: "Teste de base — Consigo conversar em japonês básico?",
  goal: "Avaliar se o estudante consegue compreender e produzir uma conversa básica em japonês, utilizando os conteúdos das semanas 1 a 15.",
  days: [
    {
      title: "Revisão prática: apresentação e informações pessoais",
      explanation: "O primeiro desafio é conseguir se apresentar sem depender de um modelo pronto. Você deve conseguir dizer seu nome, informar que é estudante, falar de onde veio e responder perguntas simples sobre você. Não é necessário utilizar frases complexas: o importante é transmitir a informação corretamente.",
      examples: [
        { jp: "わたしは カイオです。", pt: "Eu sou Caio." },
        { jp: "がくせいです。", pt: "Sou estudante." },
        { jp: "ブラジルから きました。", pt: "Vim do Brasil." },
        { jp: "おなまえは なんですか。", pt: "Qual é o seu nome?" },
        { jp: "どこから きましたか。", pt: "De onde você veio?" }
      ],
      keyPoints: [
        "Consiga se apresentar com pelo menos três informações.",
        "Entenda perguntas sobre nome e origem.",
        "Responda sem precisar traduzir palavra por palavra.",
        "Utilize frases completas sempre que possível.",
        "Não é necessário falar rapidamente."
      ]
    },
    {
      title: "Revisão prática: perguntas e respostas",
      explanation: "Uma conversa depende da capacidade de perguntar e responder. Nesta aula, vamos revisar palavras interrogativas e estruturas utilizadas para descobrir informações. O estudante deve reconhecer o que cada pergunta procura e formular uma resposta adequada.",
      examples: [
        { jp: "だれですか。", pt: "Quem é?" },
        { jp: "なにを しますか。", pt: "O que você faz?" },
        { jp: "どこへ いきますか。", pt: "Para onde você vai?" },
        { jp: "いつ べんきょうしますか。", pt: "Quando você estuda?" },
        { jp: "どうして にほんごを べんきょうしますか。", pt: "Por que você estuda japonês?" },
        { jp: "どうやって いきますか。", pt: "Como você vai?" }
      ],
      keyPoints: [
        "Reconheça だれ, なに, どこ, いつ e どうして.",
        "Entenda a diferença entre perguntas sobre lugar, tempo e motivo.",
        "Consiga criar pelo menos três perguntas próprias.",
        "Responda de acordo com a informação solicitada.",
        "Não confunda a palavra interrogativa com a resposta."
      ]
    },
    {
      title: "Revisão prática: rotina e gostos",
      explanation: "Agora o desafio é falar sobre o cotidiano e as preferências pessoais. Você deve conseguir explicar algumas atividades que realiza, falar de horários simples, dizer do que gosta e comparar duas opções. As respostas podem ser curtas, mas devem fazer sentido dentro da conversa.",
      examples: [
        { jp: "まいあさ しちじに おきます。", pt: "Acordo às sete todas as manhãs." },
        { jp: "いえで べんきょうします。", pt: "Estudo em casa." },
        { jp: "サッカーが すきです。", pt: "Gosto de futebol." },
        { jp: "ねこより いぬの ほうが すきです。", pt: "Gosto mais de cachorros do que de gatos." },
        { jp: "くだものの なかで りんごが いちばん すきです。", pt: "Entre as frutas, gosto mais de maçã." }
      ],
      keyPoints: [
        "Fale sobre pelo menos três atividades da sua rotina.",
        "Consiga dizer do que gosta.",
        "Consiga comparar duas preferências.",
        "Reconheça expressões de tempo e frequência.",
        "Tente explicar uma preferência usando から."
      ]
    },
    {
      title: "Revisão prática: passado, desejos e planos",
      explanation: "Uma conversa básica também precisa falar sobre o que já aconteceu e sobre o que ainda vai acontecer. Nesta aula, você deverá diferenciar passado, desejo e intenção. Utilize ました para falar educadamente sobre ações concluídas, たい para desejos e つもりです para planos.",
      examples: [
        { jp: "きのう ほんを よみました。", pt: "Ontem li um livro." },
        { jp: "すしを たべたいです。", pt: "Quero comer sushi." },
        { jp: "あした べんきょうする つもりです。", pt: "Pretendo estudar amanhã." },
        { jp: "にほんへ いきたいです。", pt: "Quero ir ao Japão." },
        { jp: "ともだちと あそぶ つもりです。", pt: "Pretendo brincar com um amigo." }
      ],
      keyPoints: [
        "ました indica uma ação passada na forma educada.",
        "たい expressa desejo de fazer alguma coisa.",
        "つもりです expressa intenção.",
        "Consiga falar sobre algo que fez ontem.",
        "Consiga falar sobre algo que pretende fazer amanhã."
      ]
    },
    {
      title: "Simulação: entendendo uma conversa",
      explanation: "Nesta aula, o estudante deve ler uma conversa sem receber a tradução imediatamente. O objetivo é identificar o assunto, compreender as perguntas e reconhecer as informações principais. Depois da leitura, responda às perguntas de compreensão. Não é necessário entender cada partícula para compreender a mensagem geral.",
      examples: [
        { jp: "アキ：こんにちは。きょうは なにを しますか。", pt: "Aki: Olá. O que você vai fazer hoje?" },
        { jp: "カイオ：ともだちと サッカーを します。", pt: "Caio: Vou jogar futebol com um amigo." },
        { jp: "アキ：サッカーが すきですか。", pt: "Aki: Você gosta de futebol?" },
        { jp: "カイオ：はい、とても すきです。", pt: "Caio: Sim, gosto muito." },
        { jp: "アキ：きのうも サッカーを しましたか。", pt: "Aki: Você também jogou futebol ontem?" },
        { jp: "カイオ：いいえ、きのうは ほんを よみました。", pt: "Caio: Não, ontem eu li um livro." },
        { jp: "アキ：あしたも あそびませんか。", pt: "Aki: Que tal brincarmos juntos amanhã também?" },
        { jp: "カイオ：はい、あした あそびましょう。", pt: "Caio: Sim, vamos brincar amanhã." }
      ],
      keyPoints: [
        "Identifique quem está falando.",
        "Descubra o que Caio fará hoje.",
        "Descubra o que ele fez ontem.",
        "Identifique o convite feito por Aki.",
        "Tente compreender a conversa antes de consultar a tradução."
      ]
    },
    {
      title: "Desafio final: minha primeira conversa em japonês",
      explanation: "Chegou o momento de reunir tudo. Imagine que você conheceu uma pessoa japonesa e precisa conversar com ela. Faça uma apresentação, responda perguntas, fale sobre sua rotina, explique seus gostos, conte algo que fez no passado e diga o que pretende fazer. Você também deverá compreender perguntas simples e fazer pelo menos um convite ou pedido. Não é uma avaliação de fluência: é uma avaliação de comunicação básica.",
      examples: [
        { jp: "こんにちは。わたしは カイオです。", pt: "Olá. Eu sou Caio." },
        { jp: "まいにち にほんごを べんきょうします。", pt: "Estudo japonês todos os dias." },
        { jp: "サッカーと ねこが すきです。", pt: "Gosto de futebol e gatos." },
        { jp: "きのう ほんを よみました。", pt: "Ontem li um livro." },
        { jp: "あした ともだちと あそぶ つもりです。", pt: "Amanhã pretendo brincar com um amigo." },
        { jp: "いっしょに べんきょうしませんか。", pt: "Você gostaria de estudar comigo?" },
        { jp: "もういちど いってください。", pt: "Por favor, diga mais uma vez." }
      ],
      keyPoints: [
        "Apresente-se em japonês.",
        "Faça e responda perguntas básicas.",
        "Fale sobre sua rotina.",
        "Explique seus gostos e preferências.",
        "Conte algo que fez no passado.",
        "Fale sobre seus desejos e planos.",
        "Faça um convite ou pedido.",
        "Demonstre compreensão de frases básicas."
      ]
    }
  ]
},


// ======================================================
// SEMANA 17 — KATAKANA I: ア〜ソ
// ======================================================

{
  title: "Katakana I — ア até ソ",
  goal: "Reconhecer, ler, escrever e pronunciar os primeiros 15 caracteres do katakana.",
  days: [
    {
      title: "Conhecendo o katakana",
      explanation: "O japonês utiliza três sistemas de escrita principais: hiragana, katakana e kanji. Nesta etapa, vamos estudar o katakana. Ele representa sons japoneses, assim como o hiragana, mas costuma aparecer em palavras de origem estrangeira, nomes estrangeiros, onomatopeias e algumas palavras que recebem destaque. Por exemplo, ア é o som 'a', enquanto あ representa o mesmo som em hiragana. A aparência é diferente, mas a pronúncia é a mesma.",
      examples: [
        { jp: "ア", pt: "A — katakana." },
        { jp: "あ", pt: "A — hiragana." },
        { jp: "イ", pt: "I — katakana." },
        { jp: "い", pt: "I — hiragana." },
        { jp: "アニメ", pt: "Anime." },
        { jp: "テレビ", pt: "Televisão." }
      ],
      keyPoints: [
        "Katakana e hiragana representam sons japoneses.",
        "Os dois sistemas possuem caracteres diferentes.",
        "Katakana aparece frequentemente em palavras estrangeiras.",
        "ア e あ possuem o mesmo som.",
        "Não confunda a aparência com a pronúncia."
      ]
    },
    {
      title: "Vogais: ア・イ・ウ・エ・オ",
      explanation: "O primeiro grupo do katakana é formado pelas cinco vogais. Elas devem ser aprendidas na ordem A, I, U, E, O. Observe cuidadosamente o formato de cada caractere e pratique escrevendo cada um várias vezes. A pronúncia é a mesma das vogais japonesas já estudadas no hiragana.",
      examples: [
        { jp: "ア", pt: "A." },
        { jp: "イ", pt: "I." },
        { jp: "ウ", pt: "U." },
        { jp: "エ", pt: "E." },
        { jp: "オ", pt: "O." },
        { jp: "アイ", pt: "A-I." },
        { jp: "ウエ", pt: "U-E." }
      ],
      keyPoints: [
        "ア = A.",
        "イ = I.",
        "ウ = U.",
        "エ = E.",
        "オ = O.",
        "Pratique reconhecer os caracteres fora da ordem apresentada."
      ]
    },
    {
      title: "Linha K: カ・キ・ク・ケ・コ",
      explanation: "Agora vamos aprender a linha K. Cada caractere combina o som K com uma das cinco vogais. A estrutura segue o mesmo padrão do hiragana: KA, KI, KU, KE e KO. Preste atenção especialmente à diferença visual entre カ e ク e entre キ e ケ.",
      examples: [
        { jp: "カ", pt: "KA." },
        { jp: "キ", pt: "KI." },
        { jp: "ク", pt: "KU." },
        { jp: "ケ", pt: "KE." },
        { jp: "コ", pt: "KO." },
        { jp: "カキ", pt: "KA-KI." },
        { jp: "ココ", pt: "KO-KO." }
      ],
      keyPoints: [
        "カ = KA.",
        "キ = KI.",
        "ク = KU.",
        "ケ = KE.",
        "コ = KO.",
        "A vogal determina o final do som.",
        "Compare os caracteres com o hiragana correspondente."
      ]
    },
    {
      title: "Linha S: サ・シ・ス・セ・ソ",
      explanation: "A linha S apresenta cinco caracteres. Quatro seguem o padrão SA, SU, SE e SO. O caractere シ é uma exceção importante: sua pronúncia é SHI, e não SI. Essa diferença também existe no hiragana, em し. Observe o formato de シ com atenção, pois ele pode ser confundido com ツ, que será estudado mais adiante.",
      examples: [
        { jp: "サ", pt: "SA." },
        { jp: "シ", pt: "SHI." },
        { jp: "ス", pt: "SU." },
        { jp: "セ", pt: "SE." },
        { jp: "ソ", pt: "SO." },
        { jp: "シオ", pt: "SHI-O." },
        { jp: "スシ", pt: "SU-SHI — sushi." }
      ],
      keyPoints: [
        "サ = SA.",
        "シ = SHI.",
        "ス = SU.",
        "セ = SE.",
        "ソ = SO.",
        "シ não se pronuncia SI.",
        "Comece a observar como os caracteres formam palavras."
      ]
    },
    {
      title: "Reconhecimento e leitura dos primeiros caracteres",
      explanation: "Agora vamos misturar as vogais, a linha K e a linha S. O objetivo é reconhecer os caracteres sem depender da ordem de aprendizagem. Leia cada sequência em voz alta e identifique cada som. Também vamos observar palavras reais escritas em katakana, como アイス, que significa sorvete, e カメラ, que significa câmera.",
      examples: [
        { jp: "アイス", pt: "Sorvete." },
        { jp: "カメラ", pt: "Câmera." },
        { jp: "ココア", pt: "Cacau ou bebida de cacau." },
        { jp: "スイカ", pt: "Melancia." },
        { jp: "アサ", pt: "Manhã." },
        { jp: "イエ", pt: "Casa." }
      ],
      keyPoints: [
        "Leia os caracteres sem seguir a ordem do quadro.",
        "Identifique os sons de cada caractere.",
        "アイス e カメラ são palavras reais.",
        "Algumas palavras japonesas também podem aparecer em katakana por escolha de escrita ou contexto.",
        "Não tente decorar apenas a aparência: associe cada símbolo ao som."
      ]
    },
    {
      title: "Prática de escrita e leitura — ア〜ソ",
      explanation: "Nesta aula, vamos consolidar os 15 caracteres aprendidos. Escreva cada caractere observando sua forma e direção dos traços. Depois, leia sequências misturadas e tente reconhecer palavras. O objetivo é conseguir identificar os caracteres mesmo quando aparecem em posições diferentes.",
      examples: [
        { jp: "ア・イ・ウ・エ・オ", pt: "Vogais." },
        { jp: "カ・キ・ク・ケ・コ", pt: "Linha K." },
        { jp: "サ・シ・ス・セ・ソ", pt: "Linha S." },
        { jp: "アイス", pt: "Sorvete." },
        { jp: "スシ", pt: "Sushi." },
        { jp: "カメラ", pt: "Câmera." }
      ],
      keyPoints: [
        "Reconheça os 15 caracteres sem consultar a tabela.",
        "Escreva cada caractere corretamente.",
        "Diferencie シ de outros caracteres parecidos.",
        "Leia palavras curtas em katakana.",
        "A meta é reconhecer, escrever e pronunciar."
      ]
    }
  ]
},

// ======================================================
// SEMANA 18 — KATAKANA II: タ〜ン
// ======================================================

{
  title: "Katakana II — タ até ン",
  goal: "Aprender o restante dos caracteres básicos do katakana, incluindo dakuten, handakuten e combinações com caracteres pequenos.",
  days: [
    {
      title: "Linha T: タ・チ・ツ・テ・ト",
      explanation: "A linha T possui cinco caracteres. A maioria segue o padrão TA, TE e TO, mas existem duas exceções importantes: チ é pronunciado CHI e ツ é pronunciado TSU. Observe especialmente ツ, pois sua aparência é parecida com シ. A direção e a posição dos pequenos traços ajudam a diferenciá-los.",
      examples: [
        { jp: "タ", pt: "TA." },
        { jp: "チ", pt: "CHI." },
        { jp: "ツ", pt: "TSU." },
        { jp: "テ", pt: "TE." },
        { jp: "ト", pt: "TO." },
        { jp: "テスト", pt: "Teste." },
        { jp: "タコ", pt: "Polvo." }
      ],
      keyPoints: [
        "タ = TA.",
        "チ = CHI.",
        "ツ = TSU.",
        "テ = TE.",
        "ト = TO.",
        "Não pronuncie チ como TI.",
        "Diferencie visualmente シ e ツ."
      ]
    },
    {
      title: "Linhas N e H",
      explanation: "Agora vamos aprender duas linhas completas. A linha N apresenta ナ, ニ, ヌ, ネ e ノ. A linha H apresenta ハ, ヒ, フ, ヘ e ホ. Na linha H, フ é pronunciado FU, com uma articulação mais suave do que um F comum em português. Pratique os dois grupos separadamente antes de misturá-los.",
      examples: [
        { jp: "ナ・ニ・ヌ・ネ・ノ", pt: "Linha N." },
        { jp: "ハ・ヒ・フ・ヘ・ホ", pt: "Linha H." },
        { jp: "ネコ", pt: "Gato — palavra geralmente escrita em hiragana ou kanji, mas aqui usada como exercício de leitura." },
        { jp: "ホテル", pt: "Hotel." },
        { jp: "ノート", pt: "Caderno." },
        { jp: "ハンカチ", pt: "Lenço." }
      ],
      keyPoints: [
        "ナ = NA; ニ = NI; ヌ = NU; ネ = NE; ノ = NO.",
        "ハ = HA; ヒ = HI; フ = FU; ヘ = HE; ホ = HO.",
        "フ possui uma pronúncia diferente do F forte do português.",
        "ホテル e ノート são palavras reais.",
        "Treine a leitura de cada linha separadamente."
      ]
    },
    {
      title: "Linhas M, Y, R e W",
      explanation: "Nesta aula vamos completar os caracteres básicos restantes. A linha M possui cinco sons. A linha Y possui apenas YA, YU e YO. A linha R possui RA, RI, RU, RE e RO. A linha W possui ワ e, tradicionalmente, ヲ. Também existe ン, que representa um som nasal. Em japonês moderno, ヲ aparece principalmente como partícula e geralmente é pronunciado O.",
      examples: [
        { jp: "マ・ミ・ム・メ・モ", pt: "Linha M." },
        { jp: "ヤ・ユ・ヨ", pt: "Linha Y." },
        { jp: "ラ・リ・ル・レ・ロ", pt: "Linha R." },
        { jp: "ワ・ヲ・ン", pt: "Linha W e nasal." },
        { jp: "メモ", pt: "Anotação." },
        { jp: "ラジオ", pt: "Rádio." },
        { jp: "レモン", pt: "Limão." }
      ],
      keyPoints: [
        "A linha Y não possui YA, YI, YU, YE e YO completos: os caracteres básicos são ヤ, ユ e ヨ.",
        "A linha R possui cinco caracteres.",
        "ワ representa WA.",
        "ヲ é usado principalmente como partícula e normalmente tem som de O.",
        "ン representa um som nasal."
      ]
    },
    {
      title: "Dakuten: os sons com marcações",
      explanation: "O dakuten é representado por duas pequenas marcas no canto superior direito de alguns caracteres. Ele modifica o som original. Na linha K, transforma K em G. Na linha S, transforma S em Z, com a exceção de シ, que vira ジ. Na linha T, transforma T em D, com as exceções チ → ヂ e ツ → ヅ. Na linha H, transforma H em B.",
      examples: [
        { jp: "カ → ガ", pt: "KA → GA." },
        { jp: "キ → ギ", pt: "KI → GI." },
        { jp: "サ → ザ", pt: "SA → ZA." },
        { jp: "シ → ジ", pt: "SHI → JI." },
        { jp: "タ → ダ", pt: "TA → DA." },
        { jp: "ハ → バ", pt: "HA → BA." },
        { jp: "ガス", pt: "Gás." },
        { jp: "ギター", pt: "Guitarra." }
      ],
      keyPoints: [
        "Dakuten são duas pequenas marcas.",
        "K passa a G.",
        "S passa a Z.",
        "T passa a D, respeitando as pronúncias especiais.",
        "H passa a B.",
        "Algumas combinações são raras no japonês moderno."
      ]
    },
    {
      title: "Handakuten: a linha P",
      explanation: "O handakuten é representado por um pequeno círculo. Ele é utilizado na linha H e transforma seus sons em P. Assim, ハ vira パ, ヒ vira ピ, フ vira プ, ヘ vira ペ e ホ vira ポ. Essa mudança é muito importante para ler palavras estrangeiras e japonesas que utilizam esses sons.",
      examples: [
        { jp: "ハ → パ", pt: "HA → PA." },
        { jp: "ヒ → ピ", pt: "HI → PI." },
        { jp: "フ → プ", pt: "FU → PU." },
        { jp: "ヘ → ペ", pt: "HE → PE." },
        { jp: "ホ → ポ", pt: "HO → PO." },
        { jp: "パン", pt: "Pão." },
        { jp: "ピアノ", pt: "Piano." },
        { jp: "ペン", pt: "Caneta." }
      ],
      keyPoints: [
        "Handakuten é um pequeno círculo.",
        "Ele transforma a linha H em linha P.",
        "パン significa pão.",
        "ピアノ significa piano.",
        "Não confunda o círculo do handakuten com as duas marcas do dakuten."
      ]
    },
    {
      title: "Combinações com ャ・ュ・ョ",
      explanation: "Assim como no hiragana, o katakana permite combinações entre determinados caracteres e os pequenos ャ, ュ e ョ. Essas combinações formam sons como KYA, SHU, CHO e RYO. O segundo caractere deve ser pequeno para formar a combinação. Quando aparece em tamanho normal, representa uma sílaba separada.",
      examples: [
        { jp: "キャ", pt: "KYA." },
        { jp: "キュ", pt: "KYU." },
        { jp: "キョ", pt: "KYO." },
        { jp: "シャ", pt: "SHA." },
        { jp: "シュ", pt: "SHU." },
        { jp: "ショ", pt: "SHO." },
        { jp: "チョ", pt: "CHO." },
        { jp: "リョ", pt: "RYO." }
      ],
      keyPoints: [
        "ャ, ュ e ョ pequenos formam combinações.",
        "キ + ャ = キャ.",
        "シ + ュ = シュ.",
        "チ + ョ = チョ.",
        "O tamanho do segundo caractere muda a leitura.",
        "Pratique a diferença entre uma combinação e duas sílabas separadas."
      ]
    }
  ]
},

// ======================================================
// SEMANA 19 — KATAKANA III
// ======================================================

{
  title: "Katakana III — Pequenos caracteres e palavras estrangeiras",
  goal: "Dominar o pequeno ッ, as vogais longas, combinações especiais e a adaptação de palavras estrangeiras ao katakana.",
  days: [
    {
      title: "O pequeno ッ: pausa e consoante dobrada",
      explanation: "O pequeno ッ é chamado de sokuon. Ele indica uma pequena pausa antes da consoante seguinte, representando uma consoante dobrada na romanização. Não deve ser pronunciado como TSU. Por exemplo, ベッド é lido beddo, com uma pequena interrupção antes do som D. É importante diferenciar ッ pequeno de ツ em tamanho normal.",
      examples: [
        { jp: "ッ", pt: "Pequeno TSU — marca de pausa." },
        { jp: "ツ", pt: "TSU em tamanho normal." },
        { jp: "ベッド", pt: "Cama." },
        { jp: "カップ", pt: "Copo ou xícara." },
        { jp: "チケット", pt: "Ingresso." },
        { jp: "サッカー", pt: "Futebol." }
      ],
      keyPoints: [
        "ッ pequeno não é pronunciado como uma sílaba independente.",
        "Ele indica uma pausa antes da consoante seguinte.",
        "ツ e ッ são diferentes.",
        "サッカー possui uma pausa antes do K.",
        "Pratique a diferença entre caracteres pequenos e normais."
      ]
    },
    {
      title: "Vogais longas no katakana",
      explanation: "Em katakana, as vogais longas são frequentemente indicadas por uma linha horizontal chamada chōonpu: ー. Essa linha prolonga a vogal anterior. Por exemplo, コーヒー significa café. A linha não é uma sílaba separada: ela indica que o som anterior deve durar mais. O comprimento da vogal pode mudar a palavra e sua pronúncia.",
      examples: [
        { jp: "ー", pt: "Marca de vogal longa." },
        { jp: "コーヒー", pt: "Café." },
        { jp: "ケーキ", pt: "Bolo." },
        { jp: "タクシー", pt: "Táxi." },
        { jp: "ゲーム", pt: "Jogo." },
        { jp: "スーパー", pt: "Supermercado." }
      ],
      keyPoints: [
        "ー prolonga a vogal anterior.",
        "コーヒー possui duas vogais longas.",
        "ケーキ prolonga o som E.",
        "タクシー prolonga o som I.",
        "Não ignore a linha horizontal ao ler."
      ]
    },
    {
      title: "Combinações especiais para sons estrangeiros",
      explanation: "O katakana moderno possui combinações que ajudam a representar sons de outras línguas. Elas utilizam caracteres pequenos, principalmente ァ, ィ, ゥ, ェ e ォ. Por exemplo, ファ representa FA e ティ representa TI. Essas combinações não seguem apenas o conjunto tradicional de sons japoneses, pois foram desenvolvidas para aproximar a pronúncia de palavras estrangeiras.",
      examples: [
        { jp: "ファ", pt: "FA." },
        { jp: "フィ", pt: "FI." },
        { jp: "フェ", pt: "FE." },
        { jp: "フォ", pt: "FO." },
        { jp: "ティ", pt: "TI." },
        { jp: "ディ", pt: "DI." },
        { jp: "ウィ", pt: "WI." },
        { jp: "ヴァ", pt: "VA." }
      ],
      keyPoints: [
        "Caracteres pequenos podem modificar a leitura de combinações.",
        "ファ representa FA.",
        "ティ representa TI.",
        "ディ representa DI.",
        "Essas combinações são comuns em palavras estrangeiras.",
        "A pronúncia japonesa pode ser uma aproximação do som original."
      ]
    },
    {
      title: "Palavras estrangeiras: alimentos e objetos",
      explanation: "Uma das principais utilizações do katakana é escrever palavras emprestadas de outros idiomas. Muitas palavras vieram do inglês, mas foram adaptadas aos sons disponíveis no japonês. Por isso, a escrita pode parecer diferente da palavra original. Nesta aula, vamos aprender a reconhecer palavras relacionadas a alimentos e objetos do cotidiano.",
      examples: [
        { jp: "パン", pt: "Pão." },
        { jp: "アイスクリーム", pt: "Sorvete cremoso." },
        { jp: "チョコレート", pt: "Chocolate." },
        { jp: "ジュース", pt: "Suco." },
        { jp: "コンピューター", pt: "Computador." },
        { jp: "スマートフォン", pt: "Smartphone." },
        { jp: "テーブル", pt: "Mesa." }
      ],
      keyPoints: [
        "Muitas palavras estrangeiras são escritas em katakana.",
        "A pronúncia é adaptada à fonologia japonesa.",
        "Observe o uso de vogais longas.",
        "Identifique o pequeno ッ nas palavras que possuem pausa.",
        "Não tente pronunciar todas as palavras exatamente como no idioma original."
      ]
    },
    {
      title: "Palavras estrangeiras: lugares, pessoas e atividades",
      explanation: "Agora vamos ampliar o vocabulário com nomes de lugares, profissões e atividades. O katakana também é utilizado para escrever nomes estrangeiros, incluindo nomes de pessoas. A escrita japonesa adapta a pronúncia do nome aos sons disponíveis. Isso significa que nem sempre a grafia em katakana corresponde exatamente às letras do nome original.",
      examples: [
        { jp: "ブラジル", pt: "Brasil." },
        { jp: "アメリカ", pt: "Estados Unidos ou América." },
        { jp: "ホテル", pt: "Hotel." },
        { jp: "サッカー", pt: "Futebol." },
        { jp: "テニス", pt: "Tênis." },
        { jp: "カメラ", pt: "Câmera." },
        { jp: "ゲーム", pt: "Jogo." }
      ],
      keyPoints: [
        "Nomes de países estrangeiros podem ser escritos em katakana.",
        "ブラジル significa Brasil.",
        "サッカー significa futebol.",
        "テニス significa tênis.",
        "A escrita de nomes pessoais depende da pronúncia pretendida."
      ]
    },
    {
      title: "Leitura de palavras completas em katakana",
      explanation: "Nesta aula, vamos reunir os conteúdos da semana para ler palavras completas. Identifique os caracteres, observe as vogais longas, reconheça o pequeno ッ e procure combinações especiais. Depois, tente descobrir o significado sem consultar a tradução imediatamente. O objetivo é desenvolver autonomia na leitura.",
      examples: [
        { jp: "コーヒー", pt: "Café." },
        { jp: "サッカー", pt: "Futebol." },
        { jp: "チケット", pt: "Ingresso." },
        { jp: "コンピューター", pt: "Computador." },
        { jp: "ブラジル", pt: "Brasil." },
        { jp: "アイスクリーム", pt: "Sorvete cremoso." },
        { jp: "スマートフォン", pt: "Smartphone." }
      ],
      keyPoints: [
        "Leia palavras inteiras, não apenas caracteres isolados.",
        "Identifique o pequeno ッ.",
        "Reconheça a linha de vogal longa.",
        "Observe combinações especiais.",
        "Tente compreender o significado pelo contexto."
      ]
    }
  ]
},

// ======================================================
// SEMANA 20 — KATAKANA + JAPONÊS BÁSICO
// ======================================================

{
  title: "Hiragana + Katakana — Leitura integrada",
  goal: "Combinar hiragana, katakana e estruturas gramaticais básicas para compreender frases e textos curtos em japonês.",
  days: [
    {
      title: "Reconhecendo hiragana e katakana juntos",
      explanation: "Agora vamos misturar os dois sistemas de escrita. O hiragana continua sendo utilizado em partículas, terminações gramaticais e muitas palavras japonesas. O katakana aparece frequentemente em palavras estrangeiras. Uma frase pode conter os dois sistemas ao mesmo tempo. O objetivo é reconhecer a função de cada escrita sem precisar separar a frase em exercícios diferentes.",
      examples: [
        { jp: "わたしは コーヒーを のみます。", pt: "Eu bebo café." },
        { jp: "テレビを みます。", pt: "Assisto à televisão." },
        { jp: "パンを たべます。", pt: "Como pão." },
        { jp: "ゲームを します。", pt: "Jogo videogame." },
        { jp: "ブラジルに すんでいます。", pt: "Moro no Brasil." }
      ],
      keyPoints: [
        "Hiragana e katakana aparecem juntos em frases.",
        "Partículas como は, を e に são escritas em hiragana.",
        "Palavras estrangeiras como コーヒー são escritas em katakana.",
        "Identifique cada sistema antes de interpretar a frase.",
        "Não confunda a função da escrita com a pronúncia."
      ]
    },
    {
      title: "Palavras reais dentro de frases",
      explanation: "Uma palavra em katakana não aparece isolada o tempo todo. Ela pode funcionar como objeto, lugar ou complemento de uma frase. Nesta aula, vamos identificar a palavra em katakana e observar como ela se conecta às partículas e aos verbos. Assim, você começa a ler frases completas em vez de apenas listas de vocabulário.",
      examples: [
        { jp: "スーパーで パンを かいます。", pt: "Compro pão no supermercado." },
        { jp: "ホテルに いきます。", pt: "Vou ao hotel." },
        { jp: "ともだちと サッカーを します。", pt: "Jogo futebol com um amigo." },
        { jp: "レストランで ジュースを のみます。", pt: "Bebo suco no restaurante." },
        { jp: "カメラで しゃしんを とります。", pt: "Tiro fotografias com uma câmera." }
      ],
      keyPoints: [
        "スーパー significa supermercado.",
        "で indica o local onde uma ação acontece ou o meio utilizado.",
        "を marca frequentemente o objeto de uma ação.",
        "と pode indicar companhia.",
        "Leia a frase inteira para compreender a função da palavra."
      ]
    },
    {
      title: "Perguntas utilizando hiragana e katakana",
      explanation: "Agora vamos fazer perguntas que incluem palavras em katakana. Você já conhece estruturas interrogativas como なに, どこ, いつ e だれ. Nesta aula, elas serão combinadas com vocabulário estrangeiro. Observe que a palavra em katakana não altera a estrutura básica da pergunta.",
      examples: [
        { jp: "なにを のみますか。", pt: "O que você vai beber?" },
        { jp: "コーヒーを のみます。", pt: "Vou beber café." },
        { jp: "どこで サッカーを しますか。", pt: "Onde você joga futebol?" },
        { jp: "いつ テレビを みますか。", pt: "Quando você assiste à televisão?" },
        { jp: "どんな ゲームが すきですか。", pt: "De que tipo de jogo você gosta?" }
      ],
      keyPoints: [
        "なに pergunta o quê.",
        "どこ pergunta onde.",
        "いつ pergunta quando.",
        "どんな pergunta que tipo de.",
        "Palavras em katakana podem ser utilizadas normalmente em perguntas."
      ]
    },
    {
      title: "Descrições, gostos e comparações",
      explanation: "Nesta aula, vamos combinar vocabulário em katakana com adjetivos e estruturas de preferência. Você deverá conseguir descrever objetos, alimentos e atividades, além de comparar opções. A estrutura gramatical continua sendo a mesma, independentemente de a palavra estar em hiragana ou katakana.",
      examples: [
        { jp: "コーヒーが すきです。", pt: "Gosto de café." },
        { jp: "ジュースより コーヒーの ほうが すきです。", pt: "Gosto mais de café do que de suco." },
        { jp: "この カメラは あたらしいです。", pt: "Esta câmera é nova." },
        { jp: "サッカーは おもしろいです。", pt: "Futebol é interessante." },
        { jp: "スポーツの なかで サッカーが いちばん すきです。", pt: "Entre os esportes, gosto mais de futebol." }
      ],
      keyPoints: [
        "すき expressa preferência.",
        "より e ほうが formam comparações.",
        "いちばん indica o maior grau dentro de um grupo.",
        "あたらしい significa novo.",
        "おもしろい significa interessante."
      ]
    },
    {
      title: "Leitura de um pequeno texto",
      explanation: "Chegou a hora de ler um texto curto que combina hiragana e katakana. Primeiro, tente identificar as palavras conhecidas. Depois, observe as partículas e os verbos para entender as relações entre as informações. Não é necessário conhecer todos os caracteres de memória para compreender a ideia geral, mas tente reconhecer o máximo possível sem consultar a tradução.",
      examples: [
        { jp: "わたしは ブラジルに すんでいます。", pt: "Eu moro no Brasil." },
        { jp: "まいにち にほんごを べんきょうします。", pt: "Estudo japonês todos os dias." },
        { jp: "あさは コーヒーを のみます。", pt: "De manhã, bebo café." },
        { jp: "よるは テレビを みたり、ほんを よんだりします。", pt: "À noite, assisto à televisão, leio livros e faço outras atividades." },
        { jp: "きのうは ともだちと サッカーを しました。", pt: "Ontem joguei futebol com um amigo." },
        { jp: "あしたは ゲームを する つもりです。", pt: "Amanhã pretendo jogar videogame." }
      ],
      keyPoints: [
        "Identifique as palavras em katakana.",
        "Reconheça as partículas em hiragana.",
        "Observe os verbos e suas terminações.",
        "Identifique a diferença entre passado e intenção.",
        "Tente explicar o assunto principal do texto."
      ]
    },
    {
      title: "Desafio final — Leitura integrada",
      explanation: "Nesta última aula, você deverá demonstrar que consegue utilizar hiragana e katakana juntos. Leia as frases, identifique palavras estrangeiras, interprete partículas e reconheça estruturas gramaticais já estudadas. Depois, produza frases próprias usando os dois sistemas. Esta aula encerra a primeira etapa de leitura integrada da Academia.",
      examples: [
        { jp: "こんにちは。わたしは カイオです。", pt: "Olá. Eu sou Caio." },
        { jp: "ブラジルに すんでいます。", pt: "Moro no Brasil." },
        { jp: "まいにち にほんごを べんきょうします。", pt: "Estudo japonês todos os dias." },
        { jp: "コーヒーと パンが すきです。", pt: "Gosto de café e pão." },
        { jp: "きのう テレビを みました。", pt: "Ontem assisti à televisão." },
        { jp: "あしたは ともだちと サッカーを する つもりです。", pt: "Amanhã pretendo jogar futebol com um amigo." },
        { jp: "いっしょに べんきょうしませんか。", pt: "Você gostaria de estudar comigo?" }
      ],
      keyPoints: [
        "Leia frases que misturam hiragana e katakana.",
        "Reconheça palavras estrangeiras.",
        "Identifique partículas e verbos.",
        "Compreenda frases no presente e no passado.",
        "Expresse intenções e convites.",
        "Produza frases próprias utilizando os dois sistemas.",
        "Leia pequenos textos sem depender constantemente da tradução."
      ]
    }
  ]
},


// ======================================================
// SEMANA 21 — INTRODUÇÃO AOS KANJI
// ======================================================

{
  title: "Introdução aos Kanji",
  goal: "Compreender o funcionamento dos kanji, reconhecer seus componentes, conhecer on'yomi e kun'yomi e aprender os primeiros caracteres.",
  days: [
    {
      title: "O que são kanji?",
      explanation: "Kanji são caracteres utilizados na escrita japonesa que foram historicamente adaptados dos caracteres chineses. Diferentemente do hiragana e do katakana, que representam sons, os kanji carregam significado. Um mesmo kanji pode participar da escrita de várias palavras e possuir diferentes leituras dependendo do contexto. Por exemplo, 山 representa montanha. Pode ser lido como やま em uma palavra japonesa e como さん em determinadas palavras compostas. Os três sistemas de escrita trabalham juntos: kanji para representar muitos conceitos e raízes de palavras, hiragana para partículas e terminações gramaticais, e katakana para muitas palavras estrangeiras.",
      examples: [
        { jp: "山", pt: "Montanha." },
        { jp: "川", pt: "Rio." },
        { jp: "人", pt: "Pessoa." },
        { jp: "水", pt: "Água." },
        { jp: "山に いきます。", pt: "Vou à montanha." },
        { jp: "水を のみます。", pt: "Bebo água." }
      ],
      keyPoints: [
        "Kanji são caracteres que carregam significado.",
        "Um kanji pode ter mais de uma leitura.",
        "Hiragana, katakana e kanji são utilizados juntos.",
        "O contexto ajuda a identificar a leitura correta.",
        "Aprenda palavras completas, não apenas símbolos isolados."
      ]
    },
    {
      title: "Radicais e componentes dos kanji",
      explanation: "Muitos kanji são formados por componentes menores. Alguns desses componentes são chamados de radicais. Eles podem ajudar a identificar o significado de um caractere ou a compreender sua estrutura. Por exemplo, 氵 é uma forma do componente relacionado à água e aparece em kanji como 海 (mar) e 河 (rio). O componente 亻 está relacionado a pessoas e aparece em caracteres como 休 (descansar) e 体 (corpo). Nem todo componente revela diretamente o significado, mas reconhecer estruturas ajuda na memorização.",
      examples: [
        { jp: "氵 → 海", pt: "Componente relacionado à água → mar." },
        { jp: "氵 → 河", pt: "Componente relacionado à água → rio." },
        { jp: "亻 → 休", pt: "Componente relacionado a pessoa → descansar." },
        { jp: "亻 → 体", pt: "Componente relacionado a pessoa → corpo." },
        { jp: "木 → 林", pt: "Árvore → bosque." },
        { jp: "木 → 森", pt: "Árvore → floresta." }
      ],
      keyPoints: [
        "Radicais são componentes importantes dos kanji.",
        "Alguns componentes ajudam a identificar o campo de significado.",
        "氵 aparece em vários kanji relacionados à água.",
        "亻 aparece em vários kanji relacionados a pessoas.",
        "Um componente pode ajudar na memorização sem determinar sozinho o significado."
      ]
    },
    {
      title: "Como memorizar kanji",
      explanation: "Memorizar kanji exige mais do que olhar para o caractere repetidamente. Uma estratégia eficiente é aprender o significado, observar seus componentes, praticar a escrita, conhecer palavras que utilizam o caractere e encontrá-lo em frases. Por exemplo, ao aprender 日, você pode estudar seu significado de sol ou dia e aprender palavras como 日本 (Japão), 日曜日 (domingo) e 毎日 (todos os dias). Assim, o caractere deixa de ser um desenho isolado e passa a fazer parte do vocabulário.",
      examples: [
        { jp: "日", pt: "Sol ou dia." },
        { jp: "日本", pt: "Japão." },
        { jp: "日曜日", pt: "Domingo." },
        { jp: "毎日", pt: "Todos os dias." },
        { jp: "毎日 にほんごを べんきょうします。", pt: "Estudo japonês todos os dias." }
      ],
      keyPoints: [
        "Aprenda o significado antes de decorar a forma.",
        "Observe os componentes do caractere.",
        "Pratique a escrita e a leitura.",
        "Memorize palavras completas que utilizam o kanji.",
        "Revise os caracteres em frases e textos."
      ]
    },
    {
      title: "On'yomi: leitura de origem chinesa",
      explanation: "On'yomi é uma categoria de leitura dos kanji historicamente relacionada às pronúncias chinesas que foram incorporadas ao japonês. Ela aparece frequentemente em palavras compostas por dois ou mais kanji. Por exemplo, 学 pode ser lido como ガク em 学生 (がくせい), que significa estudante. Não existe uma única leitura on'yomi para todos os kanji, e ela não deve ser escolhida automaticamente apenas porque a palavra possui dois caracteres. É necessário aprender as leituras dentro das palavras.",
      examples: [
        { jp: "学", pt: "Leitura on'yomi: ガク, em palavras como 学生." },
        { jp: "学生（がくせい）", pt: "Estudante." },
        { jp: "学校（がっこう）", pt: "Escola." },
        { jp: "電気（でんき）", pt: "Eletricidade." },
        { jp: "電話（でんわ）", pt: "Telefone." }
      ],
      keyPoints: [
        "On'yomi é uma leitura historicamente relacionada ao chinês.",
        "Aparece frequentemente em palavras compostas.",
        "学 é lido ガク em 学生.",
        "A leitura pode sofrer alterações em palavras específicas.",
        "Estude as leituras dentro de vocabulário real."
      ]
    },
    {
      title: "Kun'yomi: leitura japonesa",
      explanation: "Kun'yomi é a leitura japonesa associada ao significado de um kanji. Ela aparece frequentemente quando o caractere representa uma palavra japonesa independente ou quando recebe terminações em hiragana. Por exemplo, 山 pode ser lido やま quando significa montanha. 食 pode ser lido た quando aparece na forma 食べる (たべる), que significa comer. A presença de hiragana depois de um kanji é comum e pode indicar uma terminação gramatical.",
      examples: [
        { jp: "山（やま）", pt: "Montanha." },
        { jp: "川（かわ）", pt: "Rio." },
        { jp: "人（ひと）", pt: "Pessoa." },
        { jp: "食べる（たべる）", pt: "Comer." },
        { jp: "見る（みる）", pt: "Ver." }
      ],
      keyPoints: [
        "Kun'yomi é a leitura japonesa do kanji.",
        "Aparece frequentemente em palavras japonesas independentes.",
        "Pode aparecer junto de terminações em hiragana.",
        "山 pode ser lido やま.",
        "食べる combina kanji e hiragana."
      ]
    },
    {
      title: "Primeiros kanji: 一・二・三・人・山",
      explanation: "Vamos começar a memorizar alguns caracteres fundamentais. 一, 二 e 三 representam os números um, dois e três. 人 significa pessoa. 山 significa montanha. Observe que cada caractere possui uma forma própria e uma ou mais leituras. Neste primeiro contato, concentre-se em reconhecer o significado e aprender uma palavra ou leitura útil para cada um.",
      examples: [
        { jp: "一（いち）", pt: "Um." },
        { jp: "二（に）", pt: "Dois." },
        { jp: "三（さん）", pt: "Três." },
        { jp: "人（ひと）", pt: "Pessoa." },
        { jp: "山（やま）", pt: "Montanha." },
        { jp: "三人（さんにん）", pt: "Três pessoas." },
        { jp: "山に いきます。", pt: "Vou à montanha." }
      ],
      keyPoints: [
        "一 significa um.",
        "二 significa dois.",
        "三 significa três.",
        "人 significa pessoa.",
        "山 significa montanha.",
        "Aprenda também como os kanji funcionam em palavras compostas."
      ]
    }
  ]
},

// ======================================================
// SEMANA 22 — KANJI FUNDAMENTAIS
// ======================================================

{
  title: "Kanji fundamentais",
  goal: "Aprender kanji essenciais de números, pessoas, natureza, dias e tempo, reconhecendo suas leituras em palavras comuns.",
  days: [
    {
      title: "Números: 一・二・三・四・五",
      explanation: "Os kanji numéricos aparecem constantemente em datas, quantidades, idades, preços e horários. Nesta aula, vamos estudar os números de um a cinco. Além de reconhecer cada caractere, é importante aprender suas leituras mais comuns. Observe que 四 possui leituras como よん e し, enquanto 五 é lido ご. A leitura correta depende da palavra e da situação.",
      examples: [
        { jp: "一（いち）", pt: "Um." },
        { jp: "二（に）", pt: "Dois." },
        { jp: "三（さん）", pt: "Três." },
        { jp: "四（よん）", pt: "Quatro." },
        { jp: "五（ご）", pt: "Cinco." },
        { jp: "四人（よにん）", pt: "Quatro pessoas." },
        { jp: "五分（ごふん）", pt: "Cinco minutos." }
      ],
      keyPoints: [
        "一 = um.",
        "二 = dois.",
        "三 = três.",
        "四 possui leituras diferentes, incluindo よん e し.",
        "五 = cinco.",
        "A leitura de números pode variar em contadores e palavras compostas."
      ]
    },
    {
      title: "Números: 六・七・八・九・十",
      explanation: "Agora vamos completar os números de um a dez. 六 é seis, 七 é sete, 八 é oito, 九 é nove e 十 é dez. Alguns desses caracteres possuem mais de uma leitura. Por exemplo, 七 pode ser lido なな ou しち, enquanto 九 pode ser lido きゅう ou く. Em palavras do cotidiano, é importante aprender a leitura utilizada naquela palavra específica.",
      examples: [
        { jp: "六（ろく）", pt: "Seis." },
        { jp: "七（なな）", pt: "Sete." },
        { jp: "八（はち）", pt: "Oito." },
        { jp: "九（きゅう）", pt: "Nove." },
        { jp: "十（じゅう）", pt: "Dez." },
        { jp: "七人（しちにん）", pt: "Sete pessoas." },
        { jp: "八時（はちじ）", pt: "Oito horas." },
        { jp: "十分（じゅっぷん）", pt: "Dez minutos." }
      ],
      keyPoints: [
        "六 = seis.",
        "七 = sete.",
        "八 = oito.",
        "九 = nove.",
        "十 = dez.",
        "Algumas palavras apresentam leituras especiais."
      ]
    },
    {
      title: "Pessoas e família: 人・男・女・子・友",
      explanation: "Os kanji desta aula estão relacionados a pessoas, gênero, crianças e amizade. 人 significa pessoa. 男 significa homem ou masculino. 女 significa mulher ou feminino. 子 significa criança ou filho. 友 significa amigo. Eles aparecem em várias palavras do cotidiano, como 男の人, 女の人, 子ども e 友だち. Observe que algumas palavras misturam kanji e hiragana.",
      examples: [
        { jp: "人（ひと）", pt: "Pessoa." },
        { jp: "男（おとこ）", pt: "Homem." },
        { jp: "女（おんな）", pt: "Mulher." },
        { jp: "子ども（こども）", pt: "Criança." },
        { jp: "友だち（ともだち）", pt: "Amigo." },
        { jp: "男の人（おとこのひと）", pt: "Homem." },
        { jp: "女の人（おんなのひと）", pt: "Mulher." }
      ],
      keyPoints: [
        "人 representa pessoa.",
        "男 está relacionado a homem ou masculino.",
        "女 está relacionado a mulher ou feminino.",
        "子 aparece em palavras relacionadas a crianças.",
        "友 aparece em palavras relacionadas à amizade."
      ]
    },
    {
      title: "Natureza: 日・月・火・水・木",
      explanation: "Os kanji desta aula representam elementos e conceitos da natureza. 日 significa sol ou dia; 月 significa lua ou mês; 火 significa fogo; 水 significa água; 木 significa árvore ou madeira. Esses caracteres também aparecem nos nomes dos dias da semana. Observe como um mesmo kanji pode participar de palavras diferentes e assumir leituras distintas.",
      examples: [
        { jp: "日（ひ）", pt: "Sol ou dia." },
        { jp: "月（つき）", pt: "Lua." },
        { jp: "火（ひ）", pt: "Fogo." },
        { jp: "水（みず）", pt: "Água." },
        { jp: "木（き）", pt: "Árvore ou madeira." },
        { jp: "月曜日（げつようび）", pt: "Segunda-feira." },
        { jp: "水曜日（すいようび）", pt: "Quarta-feira." }
      ],
      keyPoints: [
        "日 significa sol ou dia.",
        "月 significa lua ou mês.",
        "火 significa fogo.",
        "水 significa água.",
        "木 significa árvore ou madeira.",
        "Os mesmos kanji aparecem em palavras e nomes de dias."
      ]
    },
    {
      title: "Dias da semana: 曜日",
      explanation: "Os dias da semana japoneses são formados pelo nome de um elemento ou corpo celeste seguido de 曜日, que significa dia da semana. Os sete dias utilizam 日, 月, 火, 水, 木, 金 e 土. Por exemplo, 月曜日 é segunda-feira e 日曜日 é domingo. O caractere 曜 aparece na expressão 曜日 e sua leitura nessa palavra é ようび.",
      examples: [
        { jp: "月曜日（げつようび）", pt: "Segunda-feira." },
        { jp: "火曜日（かようび）", pt: "Terça-feira." },
        { jp: "水曜日（すいようび）", pt: "Quarta-feira." },
        { jp: "木曜日（もくようび）", pt: "Quinta-feira." },
        { jp: "金曜日（きんようび）", pt: "Sexta-feira." },
        { jp: "土曜日（どようび）", pt: "Sábado." },
        { jp: "日曜日（にちようび）", pt: "Domingo." }
      ],
      keyPoints: [
        "曜日 significa dia da semana.",
        "月曜日 = segunda-feira.",
        "火曜日 = terça-feira.",
        "水曜日 = quarta-feira.",
        "木曜日 = quinta-feira.",
        "金曜日 = sexta-feira.",
        "土曜日 = sábado.",
        "日曜日 = domingo."
      ]
    },
    {
      title: "Tempo: 年・時・分・今・毎",
      explanation: "Vamos aprender kanji que aparecem frequentemente em expressões de tempo. 年 significa ano. 時 está relacionado a hora ou tempo e aparece em palavras como 三時 (três horas). 分 pode indicar minutos ou partes de uma unidade. 今 significa agora, enquanto 毎 indica cada ou todo e aparece em 毎日, que significa todos os dias. Esses caracteres serão importantes para falar de datas, horários e rotina.",
      examples: [
        { jp: "年（とし）", pt: "Ano." },
        { jp: "時（とき）", pt: "Tempo ou momento." },
        { jp: "三時（さんじ）", pt: "Três horas." },
        { jp: "五分（ごふん）", pt: "Cinco minutos." },
        { jp: "今（いま）", pt: "Agora." },
        { jp: "毎日（まいにち）", pt: "Todos os dias." },
        { jp: "今年（ことし）", pt: "Este ano." }
      ],
      keyPoints: [
        "年 está relacionado a ano.",
        "時 aparece em horários e expressões de tempo.",
        "分 aparece em expressões de minutos.",
        "今 significa agora.",
        "毎 indica repetição ou cada.",
        "Aprenda os kanji dentro das expressões completas."
      ]
    }
  ]
},

// ======================================================
// SEMANA 23 — KANJI DO COTIDIANO
// ======================================================

{
  title: "Kanji do cotidiano",
  goal: "Reconhecer kanji relacionados à escola, casa, alimentação, lugares e objetos utilizados no dia a dia.",
  days: [
    {
      title: "Escola e aprendizagem: 学・校・生・先",
      explanation: "Vamos estudar caracteres muito comuns no ambiente escolar. 学 está relacionado a estudo e aprendizagem. 校 aparece em palavras relacionadas a escolas. 生 pode representar vida, nascimento ou estudante dependendo da palavra. 先 significa anterior ou antes e aparece em 先生, que significa professor. Observe que 学校 é formada por dois kanji e significa escola, enquanto 学生 significa estudante.",
      examples: [
        { jp: "学（がく）", pt: "Estudo ou aprendizagem, em compostos." },
        { jp: "学校（がっこう）", pt: "Escola." },
        { jp: "学生（がくせい）", pt: "Estudante." },
        { jp: "先生（せんせい）", pt: "Professor." },
        { jp: "大学（だいがく）", pt: "Universidade." },
        { jp: "生まれる（うまれる）", pt: "Nascer." }
      ],
      keyPoints: [
        "学 está relacionado a estudo.",
        "校 aparece em palavras relacionadas a escolas.",
        "生 possui vários significados e leituras.",
        "先生 significa professor.",
        "学校 significa escola.",
        "Aprenda os compostos como palavras completas."
      ]
    },
    {
      title: "Casa e família: 家・室・父・母",
      explanation: "Nesta aula, vamos estudar kanji utilizados para falar de casas, cômodos e familiares. 家 pode significar casa ou família. 室 significa quarto ou sala em determinados compostos. 父 significa pai e 母 significa mãe. É importante observar que as palavras familiares podem ter leituras diferentes conforme sejam utilizadas para falar da própria família ou da família de outra pessoa.",
      examples: [
        { jp: "家（いえ）", pt: "Casa." },
        { jp: "家族（かぞく）", pt: "Família." },
        { jp: "教室（きょうしつ）", pt: "Sala de aula." },
        { jp: "父（ちち）", pt: "Meu pai." },
        { jp: "母（はは）", pt: "Minha mãe." },
        { jp: "お父さん（おとうさん）", pt: "Pai, em tratamento respeitoso." },
        { jp: "お母さん（おかあさん）", pt: "Mãe, em tratamento respeitoso." }
      ],
      keyPoints: [
        "家 pode significar casa ou família.",
        "室 aparece em palavras relacionadas a cômodos.",
        "父 é usado para falar do próprio pai em muitos contextos.",
        "母 é usado para falar da própria mãe em muitos contextos.",
        "お父さん e お母さん são formas respeitosas e comuns."
      ]
    },
    {
      title: "Comida e bebida: 食・飲・肉・魚",
      explanation: "Agora vamos aprender kanji relacionados à alimentação. 食 está relacionado a comer e alimentação. 飲 significa beber. 肉 significa carne. 魚 significa peixe. Eles aparecem em verbos e palavras muito comuns, como 食べる, 飲む, 肉 e 魚. Repare que os verbos 食べる e 飲む misturam kanji e hiragana.",
      examples: [
        { jp: "食べる（たべる）", pt: "Comer." },
        { jp: "食べ物（たべもの）", pt: "Comida ou alimento." },
        { jp: "飲む（のむ）", pt: "Beber." },
        { jp: "飲み物（のみもの）", pt: "Bebida." },
        { jp: "肉（にく）", pt: "Carne." },
        { jp: "魚（さかな）", pt: "Peixe." },
        { jp: "魚を 食べます。", pt: "Como peixe." }
      ],
      keyPoints: [
        "食 está relacionado a comer e alimentação.",
        "飲 significa beber.",
        "肉 significa carne.",
        "魚 significa peixe.",
        "Observe a combinação entre kanji e hiragana nos verbos."
      ]
    },
    {
      title: "Lugares e direções: 国・店・駅・上・下",
      explanation: "Nesta aula, vamos aprender kanji que ajudam a identificar lugares e posições. 国 significa país. 店 significa loja. 駅 significa estação, especialmente estação de transporte. 上 indica acima ou em cima, enquanto 下 indica abaixo ou embaixo. Esses caracteres aparecem em placas, mapas, endereços e frases de localização.",
      examples: [
        { jp: "国（くに）", pt: "País." },
        { jp: "外国（がいこく）", pt: "País estrangeiro." },
        { jp: "店（みせ）", pt: "Loja." },
        { jp: "駅（えき）", pt: "Estação." },
        { jp: "上（うえ）", pt: "Em cima." },
        { jp: "下（した）", pt: "Embaixo." },
        { jp: "駅の 上", pt: "Acima da estação." }
      ],
      keyPoints: [
        "国 significa país.",
        "店 significa loja.",
        "駅 significa estação.",
        "上 significa acima ou em cima.",
        "下 significa abaixo ou embaixo.",
        "Aprenda a reconhecer esses caracteres em contextos de localização."
      ]
    },
    {
      title: "Objetos e cotidiano: 本・車・電・門",
      explanation: "Vamos estudar caracteres que aparecem em objetos e meios de transporte. 本 significa livro e também pode significar origem ou base em outros contextos. 車 significa veículo ou carro. 電 está relacionado à eletricidade e aparece em 電車 (trem elétrico) e 電話 (telefone). 門 significa portão. Observe como um caractere pode participar de diversas palavras compostas.",
      examples: [
        { jp: "本（ほん）", pt: "Livro." },
        { jp: "日本（にほん）", pt: "Japão." },
        { jp: "車（くるま）", pt: "Carro." },
        { jp: "電車（でんしゃ）", pt: "Trem elétrico." },
        { jp: "電話（でんわ）", pt: "Telefone." },
        { jp: "門（もん）", pt: "Portão." },
        { jp: "本を 読みます。", pt: "Leio um livro." }
      ],
      keyPoints: [
        "本 significa livro em uma de suas palavras mais comuns.",
        "車 significa carro ou veículo.",
        "電 está relacionado à eletricidade.",
        "電車 significa trem elétrico.",
        "電話 significa telefone.",
        "Observe como os kanji se combinam para formar novas palavras."
      ]
    },
    {
      title: "Construindo frases com kanji do cotidiano",
      explanation: "Agora vamos utilizar os kanji estudados em frases completas. Observe que os kanji representam palavras ou partes de palavras, enquanto o hiragana continua marcando partículas e terminações gramaticais. A leitura de uma frase depende da compreensão de todos esses elementos. Não tente traduzir cada caractere isoladamente: procure identificar primeiro as palavras completas.",
      examples: [
        { jp: "学校で 日本語を 勉強します。", pt: "Estudo japonês na escola." },
        { jp: "家で 本を 読みます。", pt: "Leio um livro em casa." },
        { jp: "駅で 友だちに 会います。", pt: "Encontro um amigo na estação." },
        { jp: "店で 水を 買います。", pt: "Compro água na loja." },
        { jp: "父は 車で 会社に 行きます。", pt: "Meu pai vai à empresa de carro." }
      ],
      keyPoints: [
        "Kanji podem aparecer junto de partículas em hiragana.",
        "勉強します significa estudar.",
        "会います significa encontrar alguém.",
        "買います significa comprar.",
        "Identifique as palavras completas antes de traduzir a frase."
      ]
    }
  ]
},

// ======================================================
// SEMANA 24 — KANJI + VOCABULÁRIO
// ======================================================

{
  title: "Kanji e vocabulário",
  goal: "Aprender a utilizar kanji dentro de palavras completas, compreender compostos, reconhecer diferentes leituras e ampliar o vocabulário.",
  days: [
    {
      title: "Por que aprender palavras, não apenas kanji?",
      explanation: "Um kanji isolado pode possuir várias leituras e significados relacionados. Por isso, decorar apenas a tradução de um caractere não garante que você consiga ler uma palavra. Por exemplo, 生 aparece em 学生 (がくせい), 先生 (せんせい) e 生まれる (うまれる), com leituras diferentes. A maneira mais eficiente de aprender é estudar o kanji junto de palavras reais, observando a leitura utilizada em cada uma.",
      examples: [
        { jp: "生（せい）", pt: "Leitura em 学生 e 先生." },
        { jp: "学生（がくせい）", pt: "Estudante." },
        { jp: "先生（せんせい）", pt: "Professor." },
        { jp: "生まれる（うまれる）", pt: "Nascer." },
        { jp: "生きる（いきる）", pt: "Viver." },
        { jp: "毎日 生きています。", pt: "Estou vivo todos os dias / Vivo todos os dias." }
      ],
      keyPoints: [
        "Um kanji pode possuir várias leituras.",
        "A leitura depende da palavra e do contexto.",
        "生 aparece em palavras com leituras diferentes.",
        "Aprenda vocabulário completo.",
        "Não tente adivinhar a leitura de todos os kanji por regras fixas."
      ]
    },
    {
      title: "Compostos de dois kanji",
      explanation: "Muitas palavras japonesas são formadas pela combinação de dois ou mais kanji. Esses compostos são chamados de jukugo. Por exemplo, 電話 combina 電, relacionado à eletricidade, e 話, relacionado à fala ou conversa. O significado da palavra completa é telefone. 学校 combina 学 e 校 para formar escola. É importante aprender o significado da palavra inteira, porque nem sempre ele pode ser deduzido perfeitamente pela soma dos caracteres.",
      examples: [
        { jp: "学校（がっこう）", pt: "Escola." },
        { jp: "学生（がくせい）", pt: "Estudante." },
        { jp: "電話（でんわ）", pt: "Telefone." },
        { jp: "電車（でんしゃ）", pt: "Trem elétrico." },
        { jp: "日本（にほん）", pt: "Japão." },
        { jp: "外国（がいこく）", pt: "País estrangeiro." }
      ],
      keyPoints: [
        "Jukugo são palavras compostas por kanji.",
        "Muitos compostos utilizam leituras on'yomi.",
        "学校 é lido がっこう.",
        "電話 é lido でんわ.",
        "Aprenda a leitura da palavra completa."
      ]
    },
    {
      title: "Verbos escritos com kanji",
      explanation: "Muitos verbos japoneses são escritos utilizando kanji seguido de hiragana. A parte em kanji carrega a raiz principal do significado, enquanto o hiragana indica a terminação e as mudanças gramaticais. Por exemplo, 食べる é o verbo comer. Ao passar para a forma educada, temos 食べます. O kanji continua igual e a terminação em hiragana muda. Essa característica será essencial para ler textos japoneses.",
      examples: [
        { jp: "食べる（たべる）", pt: "Comer." },
        { jp: "食べます（たべます）", pt: "Como / come, forma educada." },
        { jp: "飲む（のむ）", pt: "Beber." },
        { jp: "飲みます（のみます）", pt: "Bebo / bebe, forma educada." },
        { jp: "見る（みる）", pt: "Ver." },
        { jp: "見ます（みます）", pt: "Vejo / vê, forma educada." },
        { jp: "読む（よむ）", pt: "Ler." },
        { jp: "読みます（よみます）", pt: "Leio / lê, forma educada." }
      ],
      keyPoints: [
        "Verbos frequentemente misturam kanji e hiragana.",
        "A terminação em hiragana muda conforme a conjugação.",
        "食べる e 食べます são formas do mesmo verbo.",
        "飲む e 飲みます são formas do mesmo verbo.",
        "Reconheça a raiz do verbo mesmo quando a terminação muda."
      ]
    },
    {
      title: "Adjetivos escritos com kanji",
      explanation: "Alguns adjetivos japoneses também utilizam kanji e terminam em hiragana. Por exemplo, 新しい significa novo, 高い significa alto ou caro e 安い significa barato. Quando conjugamos esses adjetivos, o kanji permanece e a terminação muda. É importante memorizar a palavra completa e reconhecer seu significado dentro da frase.",
      examples: [
        { jp: "新しい（あたらしい）", pt: "Novo." },
        { jp: "古い（ふるい）", pt: "Velho ou antigo." },
        { jp: "高い（たかい）", pt: "Alto ou caro." },
        { jp: "安い（やすい）", pt: "Barato." },
        { jp: "大きい（おおきい）", pt: "Grande." },
        { jp: "小さい（ちいさい）", pt: "Pequeno." },
        { jp: "この 本は 新しいです。", pt: "Este livro é novo." }
      ],
      keyPoints: [
        "Adjetivos podem combinar kanji e hiragana.",
        "新しい significa novo.",
        "古い significa antigo ou velho.",
        "高い pode significar alto ou caro.",
        "安い significa barato.",
        "Observe a terminação ao estudar a forma gramatical."
      ]
    },
    {
      title: "Leituras diferentes dentro do vocabulário",
      explanation: "Agora vamos observar como o mesmo kanji pode ser lido de maneiras diferentes em palavras distintas. 水 pode ser lido みず em 水 e すい em 水曜日. 人 pode ser lido ひと isoladamente, mas aparece como じん em 日本人 e como にん em 三人. Essas diferenças são normais. O estudante deve aprender as leituras junto de cada palavra, em vez de tentar utilizar uma única pronúncia para todas as situações.",
      examples: [
        { jp: "水（みず）", pt: "Água." },
        { jp: "水曜日（すいようび）", pt: "Quarta-feira." },
        { jp: "人（ひと）", pt: "Pessoa." },
        { jp: "日本人（にほんじん）", pt: "Pessoa japonesa." },
        { jp: "三人（さんにん）", pt: "Três pessoas." },
        { jp: "外国人（がいこくじん）", pt: "Pessoa estrangeira." }
      ],
      keyPoints: [
        "Um mesmo kanji pode ter leituras diferentes.",
        "水 pode ser lido みず ou すい.",
        "人 pode ser lido ひと, じん ou にん em palavras diferentes.",
        "Aprenda cada palavra com sua leitura.",
        "O contexto e o vocabulário determinam a pronúncia."
      ]
    },
    {
      title: "Vocabulário integrado: palavras em frases",
      explanation: "Nesta última aula da semana, vamos reunir os kanji e as palavras estudadas. Leia cada frase procurando reconhecer as palavras completas. Identifique os verbos, substantivos e adjetivos e observe como os sistemas de escrita trabalham juntos. O objetivo é conseguir compreender frases simples sem precisar traduzir caractere por caractere.",
      examples: [
        { jp: "毎日 学校で 日本語を 勉強します。", pt: "Todos os dias estudo japonês na escola." },
        { jp: "先生は 新しい 本を 読みます。", pt: "O professor lê um livro novo." },
        { jp: "父は 車で 会社に 行きます。", pt: "Meu pai vai à empresa de carro." },
        { jp: "母は 店で 水と 食べ物を 買います。", pt: "Minha mãe compra água e comida na loja." },
        { jp: "日曜日に 友だちと サッカーを します。", pt: "No domingo, jogo futebol com um amigo." }
      ],
      keyPoints: [
        "Reconheça palavras completas dentro das frases.",
        "Observe a mistura entre kanji e hiragana.",
        "Identifique os verbos e suas terminações.",
        "Use o contexto para compreender o significado.",
        "Não dependa de traduzir cada caractere individualmente."
      ]
    }
  ]
},


// ======================================================
// SEMANA 25 — KANJI EM FRASES
// ======================================================

{
  title: "Kanji em frases",
  goal: "Ler frases que combinam kanji, hiragana e katakana, identificar palavras completas e compreender estruturas japonesas sem traduzir caractere por caractere.",
  days: [
    {
      title: "Os três sistemas trabalhando juntos",
      explanation: "Na escrita japonesa, kanji, hiragana e katakana aparecem frequentemente na mesma frase. Os kanji representam muitas palavras e raízes de palavras; o hiragana é utilizado em partículas, terminações e diversas palavras japonesas; o katakana aparece principalmente em palavras estrangeiras, nomes e outros usos específicos. Por exemplo, em 私はコーヒーを飲みます, 私 significa eu, は marca o tópico, コーヒー significa café, を marca o objeto e 飲みます significa beber. Não precisamos separar a frase em três traduções independentes: devemos reconhecer cada palavra e sua função.",
      examples: [
        { jp: "私は学生です。", pt: "Eu sou estudante." },
        { jp: "水を飲みます。", pt: "Bebo água." },
        { jp: "パンを食べます。", pt: "Como pão." },
        { jp: "学校でサッカーをします。", pt: "Jogo futebol na escola." },
        { jp: "コーヒーを飲みます。", pt: "Bebo café." }
      ],
      keyPoints: [
        "Uma frase japonesa pode utilizar os três sistemas de escrita.",
        "Kanji aparecem em substantivos, raízes verbais e adjetivos.",
        "Hiragana marca partículas e terminações gramaticais.",
        "Katakana aparece em muitas palavras estrangeiras.",
        "Identifique as palavras completas antes de interpretar a frase."
      ]
    },
    {
      title: "Identificando kanji dentro das frases",
      explanation: "Quando encontramos uma frase com vários kanji, não devemos tentar traduzir cada caractere isoladamente. Primeiro, procure palavras que você já conhece. Depois, observe as partículas e as terminações. Na frase 毎日学校で日本語を勉強します, por exemplo, 毎日 significa todos os dias, 学校 significa escola, 日本語 significa língua japonesa e 勉強します significa estudar. O hiragana conecta essas palavras e indica suas funções gramaticais.",
      examples: [
        { jp: "毎日学校へ行きます。", pt: "Vou à escola todos os dias." },
        { jp: "家で本を読みます。", pt: "Leio um livro em casa." },
        { jp: "友だちと映画を見ます。", pt: "Assisto a um filme com um amigo." },
        { jp: "水を買います。", pt: "Compro água." },
        { jp: "先生は日本語を話します。", pt: "O professor fala japonês." }
      ],
      keyPoints: [
        "Procure reconhecer palavras completas.",
        "毎日 significa todos os dias.",
        "学校 significa escola.",
        "日本語 significa língua japonesa.",
        "As partículas ajudam a compreender a organização da frase."
      ]
    },
    {
      title: "Kanji em frases com verbos",
      explanation: "Os verbos japoneses frequentemente apresentam kanji seguido de hiragana. A terminação pode mudar conforme o tempo verbal e o nível de formalidade. Por exemplo, 読む significa ler, 読みます é sua forma educada no presente ou futuro, e 読みました é a forma educada no passado. O kanji 読 permanece reconhecível, enquanto a parte em hiragana muda. Essa característica permite identificar a raiz do verbo mesmo quando ele está conjugado.",
      examples: [
        { jp: "本を読みます。", pt: "Leio um livro." },
        { jp: "本を読みました。", pt: "Li um livro." },
        { jp: "水を飲みます。", pt: "Bebo água." },
        { jp: "水を飲みました。", pt: "Bebi água." },
        { jp: "学校へ行きました。", pt: "Fui à escola." },
        { jp: "映画を見ています。", pt: "Estou assistindo a um filme." }
      ],
      keyPoints: [
        "Verbos podem misturar kanji e hiragana.",
        "A terminação em hiragana muda conforme a conjugação.",
        "読みます é a forma educada de 読む.",
        "読みました indica passado.",
        "Reconhecer a raiz ajuda a compreender diferentes formas verbais."
      ]
    },
    {
      title: "Kanji em frases com adjetivos",
      explanation: "Os adjetivos japoneses também podem conter kanji e terminações em hiragana. 新しい significa novo, 古い significa antigo, 高い significa alto ou caro e 安い significa barato. Para compreender uma frase, observe o adjetivo e o substantivo que ele descreve. Por exemplo, 新しい本 significa livro novo. O caractere permanece igual, mas o contexto determina o significado da palavra.",
      examples: [
        { jp: "新しい本です。", pt: "É um livro novo." },
        { jp: "古い家です。", pt: "É uma casa antiga." },
        { jp: "この車は高いです。", pt: "Este carro é caro." },
        { jp: "この店は安いです。", pt: "Esta loja é barata." },
        { jp: "大きい犬がいます。", pt: "Há um cachorro grande." }
      ],
      keyPoints: [
        "Adjetivos podem ser escritos com kanji e hiragana.",
        "新しい significa novo.",
        "古い significa antigo.",
        "高い pode significar alto ou caro.",
        "安い significa barato.",
        "Observe qual substantivo está sendo descrito."
      ]
    },
    {
      title: "Leitura de frases com palavras estrangeiras",
      explanation: "O katakana aparece frequentemente em palavras de origem estrangeira. Ao ler frases com kanji e katakana, procure identificar cada palavra pelo sistema de escrita e pelo contexto. Por exemplo, em 私はブラジル人です, encontramos 私, escrito em kanji, は, escrito em hiragana, e ブラジル, escrito em katakana. 人 completa a palavra ブラジル人, que significa brasileiro ou brasileira. O sistema de escrita não muda a estrutura gramatical da frase.",
      examples: [
        { jp: "私はブラジル人です。", pt: "Sou brasileiro(a)." },
        { jp: "学校でサッカーをします。", pt: "Jogo futebol na escola." },
        { jp: "カメラで写真を撮ります。", pt: "Tiro fotos com uma câmera." },
        { jp: "コーヒーとパンを買います。", pt: "Compro café e pão." },
        { jp: "友だちとテレビを見ます。", pt: "Assisto à televisão com um amigo." }
      ],
      keyPoints: [
        "ブラジル é escrito em katakana.",
        "ブラジル人 significa brasileiro ou brasileira.",
        "サッカー significa futebol.",
        "カメラ significa câmera.",
        "O katakana pode aparecer no meio de frases com kanji e hiragana."
      ]
    },
    {
      title: "Interpretação de frases completas",
      explanation: "Nesta aula, vamos interpretar frases um pouco maiores. O objetivo é identificar o tópico, a ação, os objetos e as informações de tempo ou lugar. Não traduza cada símbolo separadamente. Primeiro encontre o verbo principal e depois descubra quem realiza a ação, onde ela acontece e quais objetos estão envolvidos. Algumas frases podem conter estruturas gramaticais que você já estudou, como passado, rotina, companhia e intenção.",
      examples: [
        { jp: "毎朝、家で朝ご飯を食べます。", pt: "Todas as manhãs, tomo café da manhã em casa." },
        { jp: "昨日、友だちと映画を見ました。", pt: "Ontem, assisti a um filme com um amigo." },
        { jp: "日曜日に学校へ行きません。", pt: "Não vou à escola no domingo." },
        { jp: "明日、新しい本を買うつもりです。", pt: "Amanhã, pretendo comprar um livro novo." },
        { jp: "夜、家で日本語を勉強します。", pt: "À noite, estudo japonês em casa." }
      ],
      keyPoints: [
        "Encontre o verbo principal da frase.",
        "Observe partículas como は, を, に, で e と.",
        "Identifique expressões de tempo.",
        "Reconheça palavras mesmo quando aparecem em frases maiores.",
        "Utilize o contexto para compreender a mensagem completa."
      ]
    }
  ]
},

// ======================================================
// SEMANA 26 — KANJI II
// ======================================================

{
  title: "Kanji II — Novos caracteres fundamentais",
  goal: "Aprender novos kanji relacionados a tamanho, posição, direção, movimento, existência e características, ampliando a leitura de palavras comuns.",
  days: [
    {
      title: "Tamanho e posição: 大・小・中",
      explanation: "Vamos estudar três kanji fundamentais para descrever tamanho e posição. 大 significa grande, 小 significa pequeno e 中 significa dentro, meio ou centro, dependendo da palavra. Eles aparecem em palavras como 大きい (grande), 小さい (pequeno), 中学校 (escola de ensino fundamental II) e 中国 (China). Observe que as leituras variam conforme o vocabulário.",
      examples: [
        { jp: "大きい（おおきい）", pt: "Grande." },
        { jp: "小さい（ちいさい）", pt: "Pequeno." },
        { jp: "中（なか）", pt: "Dentro ou meio." },
        { jp: "大学（だいがく）", pt: "Universidade." },
        { jp: "小学校（しょうがっこう）", pt: "Escola primária." },
        { jp: "中国（ちゅうごく）", pt: "China." }
      ],
      keyPoints: [
        "大 significa grande.",
        "小 significa pequeno.",
        "中 pode significar dentro, meio ou centro.",
        "大学 significa universidade.",
        "小学校 significa escola primária.",
        "Aprenda os compostos junto de suas leituras."
      ]
    },
    {
      title: "Direções: 左・右・前・後",
      explanation: "Os kanji desta aula são utilizados para indicar posições e direções. 左 significa esquerda e 右 significa direita. 前 significa frente ou antes, enquanto 後 pode significar atrás ou depois, dependendo da palavra. Eles são úteis para compreender instruções, localizações e expressões temporais. Por exemplo, 前 pode aparecer em 名前, que significa nome, e 午後 significa tarde, no sentido de período depois do meio-dia.",
      examples: [
        { jp: "左（ひだり）", pt: "Esquerda." },
        { jp: "右（みぎ）", pt: "Direita." },
        { jp: "前（まえ）", pt: "Frente ou antes." },
        { jp: "後ろ（うしろ）", pt: "Atrás." },
        { jp: "名前（なまえ）", pt: "Nome." },
        { jp: "午後（ごご）", pt: "Tarde, período após o meio-dia." }
      ],
      keyPoints: [
        "左 significa esquerda.",
        "右 significa direita.",
        "前 significa frente ou antes.",
        "後ろ significa atrás.",
        "後 aparece em expressões relacionadas ao depois.",
        "A palavra completa determina a leitura."
      ]
    },
    {
      title: "Movimento e deslocamento: 行・来・出・入",
      explanation: "Agora vamos aprender quatro kanji muito utilizados para falar de movimento. 行 está relacionado a ir, 来 a vir, 出 a sair ou aparecer e 入 a entrar. Eles aparecem em verbos e palavras compostas. Por exemplo, 行く significa ir, 来る significa vir, 出る significa sair e 入る significa entrar. As terminações em hiragana fazem parte da escrita dos verbos.",
      examples: [
        { jp: "行く（いく）", pt: "Ir." },
        { jp: "来る（くる）", pt: "Vir." },
        { jp: "出る（でる）", pt: "Sair." },
        { jp: "入る（はいる）", pt: "Entrar." },
        { jp: "銀行（ぎんこう）", pt: "Banco." },
        { jp: "入口（いりぐち）", pt: "Entrada." },
        { jp: "出口（でぐち）", pt: "Saída." }
      ],
      keyPoints: [
        "行 está relacionado a ir.",
        "来 está relacionado a vir.",
        "出 está relacionado a sair.",
        "入 está relacionado a entrar.",
        "入口 significa entrada.",
        "出口 significa saída."
      ]
    },
    {
      title: "Existência e localização: 有・無・在",
      explanation: "Nesta aula, vamos conhecer kanji utilizados em palavras relacionadas a existência e presença. 有 está relacionado a possuir ou existir, 無 indica ausência ou inexistência, e 在 aparece em palavras relacionadas a localização ou presença. É importante reconhecer esses caracteres mesmo quando eles aparecem em compostos mais elaborados. Em frases básicas, continuaremos utilizando あります e います, que você já estudou anteriormente.",
      examples: [
        { jp: "有名（ゆうめい）", pt: "Famoso." },
        { jp: "有料（ゆうりょう）", pt: "Pago." },
        { jp: "無料（むりょう）", pt: "Gratuito." },
        { jp: "無理（むり）", pt: "Impossível ou excessivo, conforme o contexto." },
        { jp: "現在（げんざい）", pt: "Atualmente ou presente." },
        { jp: "存在（そんざい）", pt: "Existência." }
      ],
      keyPoints: [
        "有 está relacionado a possuir ou existir.",
        "無 indica ausência ou inexistência.",
        "在 aparece em palavras relacionadas a presença e localização.",
        "有名 significa famoso.",
        "無料 significa gratuito.",
        "Aprenda os caracteres por meio das palavras em que aparecem."
      ]
    },
    {
      title: "Características e aparência: 白・黒・赤・青",
      explanation: "Vamos aprender quatro kanji de cores. 白 significa branco, 黒 significa preto, 赤 significa vermelho e 青 significa azul. Eles aparecem em adjetivos e expressões utilizadas para descrever objetos e características. Observe que os adjetivos podem receber terminações em hiragana. Por exemplo, 白い significa branco e 黒い significa preto.",
      examples: [
        { jp: "白（しろ）", pt: "Branco." },
        { jp: "黒（くろ）", pt: "Preto." },
        { jp: "赤（あか）", pt: "Vermelho." },
        { jp: "青（あお）", pt: "Azul." },
        { jp: "白い（しろい）", pt: "Branco, como adjetivo." },
        { jp: "黒い（くろい）", pt: "Preto, como adjetivo." },
        { jp: "赤い車", pt: "Carro vermelho." }
      ],
      keyPoints: [
        "白 significa branco.",
        "黒 significa preto.",
        "赤 significa vermelho.",
        "青 significa azul.",
        "白い e 黒い são adjetivos.",
        "Observe a terminação em hiragana dos adjetivos."
      ]
    },
    {
      title: "Aplicação dos novos kanji",
      explanation: "Nesta aula, vamos combinar os caracteres estudados em frases e pequenas descrições. Observe que um mesmo kanji pode aparecer em diferentes palavras, e que seu significado pode variar de acordo com o contexto. Leia as frases identificando as palavras completas, as partículas e o verbo principal.",
      examples: [
        { jp: "学校の前に店があります。", pt: "Há uma loja em frente à escola." },
        { jp: "駅の右に銀行があります。", pt: "Há um banco à direita da estação." },
        { jp: "部屋の中に本があります。", pt: "Há um livro dentro do quarto." },
        { jp: "赤い車が来ます。", pt: "Um carro vermelho está vindo." },
        { jp: "友だちは家に入ります。", pt: "Meu amigo entra em casa." }
      ],
      keyPoints: [
        "前 e 右 indicam posições.",
        "中 significa dentro ou meio.",
        "来ます indica vir.",
        "入ります indica entrar.",
        "O contexto permite compreender o uso dos novos kanji."
      ]
    }
  ]
},

// ======================================================
// SEMANA 27 — KANJI III
// ======================================================

{
  title: "Kanji III — Palavras compostas",
  goal: "Aprender palavras compostas por vários kanji, ampliar o vocabulário de trabalho, tempo, transporte, comunicação e vida cotidiana.",
  days: [
    {
      title: "Trabalho e profissões: 会・社・員・仕・事",
      explanation: "Nesta aula, vamos aprender kanji que aparecem frequentemente no ambiente de trabalho. 会 aparece em palavras relacionadas a encontros e reuniões. 社 está relacionado a empresas e organizações. 員 pode indicar membro ou funcionário. 仕 e 事 aparecem juntos em 仕事, que significa trabalho. A palavra 会社 significa empresa, e 会社員 significa funcionário de uma empresa. Estude os compostos como unidades completas.",
      examples: [
        { jp: "会社（かいしゃ）", pt: "Empresa." },
        { jp: "会社員（かいしゃいん）", pt: "Funcionário de empresa." },
        { jp: "仕事（しごと）", pt: "Trabalho." },
        { jp: "社員（しゃいん）", pt: "Funcionário ou membro de uma empresa." },
        { jp: "会う（あう）", pt: "Encontrar alguém." },
        { jp: "仕事をします。", pt: "Trabalho." }
      ],
      keyPoints: [
        "会 aparece em palavras relacionadas a encontros.",
        "社 aparece em palavras relacionadas a empresas.",
        "員 pode indicar membro ou funcionário.",
        "会社 significa empresa.",
        "仕事 significa trabalho.",
        "Aprenda a leitura completa de cada composto."
      ]
    },
    {
      title: "Tempo e calendário: 午・半・間・毎",
      explanation: "Vamos ampliar o vocabulário relacionado ao tempo. 午 aparece em 午前 e 午後. 午前 significa período da manhã, antes do meio-dia, e 午後 significa período da tarde, depois do meio-dia. 半 significa metade ou meia hora em expressões de horário. 間 pode significar intervalo ou período. 毎 aparece em palavras como 毎日 e 毎週, que indicam repetição.",
      examples: [
        { jp: "午前（ごぜん）", pt: "Manhã, antes do meio-dia." },
        { jp: "午後（ごご）", pt: "Tarde, depois do meio-dia." },
        { jp: "半分（はんぶん）", pt: "Metade." },
        { jp: "一時間（いちじかん）", pt: "Uma hora de duração." },
        { jp: "毎週（まいしゅう）", pt: "Toda semana." },
        { jp: "毎月（まいつき）", pt: "Todo mês." },
        { jp: "午後三時半（ごごさんじはん）", pt: "Três e meia da tarde." }
      ],
      keyPoints: [
        "午前 indica o período antes do meio-dia.",
        "午後 indica o período depois do meio-dia.",
        "半 significa metade ou meia unidade.",
        "間 pode indicar intervalo ou duração.",
        "毎 indica repetição.",
        "三時半 significa três e meia."
      ]
    },
    {
      title: "Comunicação: 言・話・語・読",
      explanation: "Os kanji desta aula estão relacionados à linguagem e à comunicação. 言 está relacionado a dizer ou palavra. 話 está relacionado a falar e conversar. 語 aparece em palavras relacionadas a idiomas. 読 significa ler. Observe a diferença entre 日本語, que significa língua japonesa, e 日本人, que significa pessoa japonesa. Uma pequena alteração no segundo kanji muda completamente o significado da palavra.",
      examples: [
        { jp: "言う（いう）", pt: "Dizer." },
        { jp: "話す（はなす）", pt: "Falar." },
        { jp: "電話（でんわ）", pt: "Telefone." },
        { jp: "日本語（にほんご）", pt: "Língua japonesa." },
        { jp: "英語（えいご）", pt: "Língua inglesa." },
        { jp: "読む（よむ）", pt: "Ler." },
        { jp: "読書（どくしょ）", pt: "Leitura de livros." }
      ],
      keyPoints: [
        "言 está relacionado a dizer.",
        "話 está relacionado a falar e conversar.",
        "語 aparece em palavras relacionadas a idiomas.",
        "読 significa ler.",
        "日本語 significa língua japonesa.",
        "英語 significa língua inglesa."
      ]
    },
    {
      title: "Transporte e deslocamento: 鉄・道・車・駅",
      explanation: "Vamos estudar vocabulário relacionado a transporte e caminhos. 鉄 significa ferro e aparece em 鉄道, que significa ferrovia ou sistema ferroviário. 道 significa caminho ou estrada. 車 significa veículo ou carro. 駅 significa estação. Ao combinar esses caracteres, conseguimos compreender palavras comuns em placas, mapas e conversas sobre deslocamento.",
      examples: [
        { jp: "鉄（てつ）", pt: "Ferro." },
        { jp: "鉄道（てつどう）", pt: "Ferrovia ou sistema ferroviário." },
        { jp: "道（みち）", pt: "Caminho ou estrada." },
        { jp: "車（くるま）", pt: "Carro." },
        { jp: "駅（えき）", pt: "Estação." },
        { jp: "電車（でんしゃ）", pt: "Trem elétrico." },
        { jp: "道路（どうろ）", pt: "Via ou estrada." }
      ],
      keyPoints: [
        "鉄 significa ferro.",
        "道 significa caminho.",
        "鉄道 significa ferrovia.",
        "車 significa veículo ou carro.",
        "駅 significa estação.",
        "Reconheça os compostos utilizados em transporte."
      ]
    },
    {
      title: "Natureza e ambiente: 花・草・森・空・天",
      explanation: "Nesta aula, vamos ampliar o vocabulário de natureza. 花 significa flor, 草 significa grama ou planta herbácea, 森 significa floresta, 空 significa céu e 天 aparece em palavras relacionadas ao céu e ao clima. Alguns caracteres podem possuir leituras diferentes em compostos. Por exemplo, 天気 é lido てんき e significa clima ou tempo atmosférico.",
      examples: [
        { jp: "花（はな）", pt: "Flor." },
        { jp: "草（くさ）", pt: "Grama." },
        { jp: "森（もり）", pt: "Floresta." },
        { jp: "空（そら）", pt: "Céu." },
        { jp: "天気（てんき）", pt: "Clima ou tempo atmosférico." },
        { jp: "花火（はなび）", pt: "Fogos de artifício." },
        { jp: "森の中", pt: "Dentro da floresta." }
      ],
      keyPoints: [
        "花 significa flor.",
        "草 significa grama.",
        "森 significa floresta.",
        "空 significa céu.",
        "天気 significa clima.",
        "Aprenda as leituras por meio das palavras completas."
      ]
    },
    {
      title: "Compostos em pequenas situações",
      explanation: "Agora vamos reunir o vocabulário das aulas anteriores em situações do cotidiano. Observe como os compostos podem ser utilizados em frases sobre trabalho, estudo, horários, comunicação e deslocamento. Algumas palavras podem conter kanji que ainda não foram estudados individualmente. Neste caso, aprenda a palavra completa e reconheça o novo caractere pelo contexto.",
      examples: [
        { jp: "午前八時に会社へ行きます。", pt: "Vou à empresa às oito da manhã." },
        { jp: "午後六時に仕事が終わります。", pt: "O trabalho termina às seis da tarde." },
        { jp: "毎週、日本語を勉強します。", pt: "Estudo japonês toda semana." },
        { jp: "駅で友だちと会います。", pt: "Encontro um amigo na estação." },
        { jp: "日本語の本を読みます。", pt: "Leio um livro de japonês." }
      ],
      keyPoints: [
        "Leia os compostos como palavras completas.",
        "午前 e 午後 indicam períodos do dia.",
        "会社 significa empresa.",
        "仕事 significa trabalho.",
        "毎週 significa toda semana.",
        "Utilize o contexto para compreender caracteres novos."
      ]
    }
  ]
},

// ======================================================
// SEMANA 28 — KANJI IV
// ======================================================

{
  title: "Kanji IV — Reconhecimento e leitura",
  goal: "Desenvolver reconhecimento visual de kanji, identificar leituras em palavras conhecidas, compreender compostos e interpretar pequenos textos.",
  days: [
    {
      title: "Reconhecimento visual de kanji",
      explanation: "Até agora, você aprendeu diversos kanji em grupos temáticos. Nesta aula, o objetivo é reconhecê-los rapidamente mesmo quando aparecem fora da ordem em que foram estudados. Observe a forma dos caracteres e associe cada um a palavras conhecidas. Por exemplo, 水 pode aparecer isoladamente como みず ou dentro de 水曜日 como すい. O reconhecimento visual deve ser acompanhado da compreensão da palavra completa.",
      examples: [
        { jp: "水（みず）", pt: "Água." },
        { jp: "火（ひ）", pt: "Fogo." },
        { jp: "木（き）", pt: "Árvore." },
        { jp: "金曜日（きんようび）", pt: "Sexta-feira." },
        { jp: "学校（がっこう）", pt: "Escola." },
        { jp: "会社（かいしゃ）", pt: "Empresa." },
        { jp: "電車（でんしゃ）", pt: "Trem elétrico." }
      ],
      keyPoints: [
        "Reconheça os caracteres sem depender da ordem das aulas.",
        "Um kanji pode aparecer em diferentes palavras.",
        "水 possui leituras diferentes em palavras distintas.",
        "Associe o caractere a palavras já conhecidas.",
        "Pratique a leitura em contextos variados."
      ]
    },
    {
      title: "Diferenciando kanji parecidos",
      explanation: "Alguns kanji podem parecer semelhantes, especialmente quando possuem poucos traços ou componentes parecidos. Comparar seus formatos ajuda a evitar confusões. Observe a diferença entre 人 (pessoa) e 入 (entrar), entre 大 (grande) e 太 (grosso ou espesso), e entre 日 (sol ou dia) e 目 (olho). Não basta observar o significado: é importante prestar atenção à estrutura visual e à posição dos traços.",
      examples: [
        { jp: "人（ひと）", pt: "Pessoa." },
        { jp: "入る（はいる）", pt: "Entrar." },
        { jp: "大きい（おおきい）", pt: "Grande." },
        { jp: "太い（ふとい）", pt: "Grosso ou espesso." },
        { jp: "日（ひ）", pt: "Sol ou dia." },
        { jp: "目（め）", pt: "Olho." }
      ],
      keyPoints: [
        "人 e 入 são caracteres diferentes.",
        "大 e 太 possuem estruturas semelhantes, mas significados diferentes.",
        "日 e 目 não são o mesmo caractere.",
        "Observe a posição e a quantidade de traços.",
        "Associe cada forma a uma palavra para evitar confusões."
      ]
    },
    {
      title: "Reconhecendo leituras em compostos",
      explanation: "Nesta aula, vamos praticar a identificação de leituras em palavras formadas por dois ou mais kanji. Algumas palavras utilizam leituras on'yomi, outras utilizam kun'yomi e existem também leituras especiais. Não é necessário memorizar uma regra absoluta para cada composição. O objetivo é reconhecer o vocabulário e aprender como cada palavra é pronunciada.",
      examples: [
        { jp: "学校（がっこう）", pt: "Escola." },
        { jp: "先生（せんせい）", pt: "Professor." },
        { jp: "日本（にほん）", pt: "Japão." },
        { jp: "日本人（にほんじん）", pt: "Pessoa japonesa." },
        { jp: "火曜日（かようび）", pt: "Terça-feira." },
        { jp: "電話（でんわ）", pt: "Telefone." },
        { jp: "毎日（まいにち）", pt: "Todos os dias." }
      ],
      keyPoints: [
        "Compostos podem utilizar leituras on'yomi.",
        "Nem toda palavra composta segue uma regra única.",
        "学校 é lido がっこう.",
        "日本 é lido にほん nesta palavra.",
        "Memorize as palavras completas com suas leituras."
      ]
    },
    {
      title: "Leitura de frases sem furigana",
      explanation: "Furigana são pequenos caracteres em hiragana ou katakana colocados próximos de um kanji para indicar sua leitura. Nesta aula, vamos praticar frases sem furigana. O aluno deve tentar reconhecer os kanji estudados e utilizar o contexto para compreender o significado. Caso encontre uma palavra desconhecida, procure identificar primeiro as partes que já conhece.",
      examples: [
        { jp: "毎日学校へ行きます。", pt: "Vou à escola todos os dias." },
        { jp: "友だちと映画を見ます。", pt: "Assisto a um filme com um amigo." },
        { jp: "父は会社で仕事をします。", pt: "Meu pai trabalha na empresa." },
        { jp: "日曜日に家で本を読みます。", pt: "No domingo, leio um livro em casa." },
        { jp: "午後三時に駅で会います。", pt: "Encontro alguém na estação às três da tarde." }
      ],
      keyPoints: [
        "Furigana indicam a leitura de um kanji.",
        "As frases desta aula não apresentam furigana.",
        "Tente reconhecer palavras já estudadas.",
        "Não interrompa a leitura por causa de cada caractere desconhecido.",
        "Utilize o contexto para compreender a frase."
      ]
    },
    {
      title: "Leitura de um pequeno texto",
      explanation: "Agora vamos ler um texto curto que reúne vocabulário de rotina, família, estudo e tempo. Leia primeiro o texto inteiro sem consultar a tradução. Depois, identifique palavras conhecidas e tente compreender a sequência de acontecimentos. Observe expressões de tempo, lugares e ações. O objetivo é começar a construir uma compreensão geral do texto, sem depender da tradução de cada palavra.",
      examples: [
        {
          jp: "私は学生です。毎日、学校へ行きます。学校で日本語を勉強します。午後、家へ帰ります。家で本を読みます。",
          pt: "Sou estudante. Todos os dias vou à escola. Estudo japonês na escola. À tarde, volto para casa. Leio um livro em casa."
        },
        { jp: "毎日", pt: "Todos os dias." },
        { jp: "学校へ行きます", pt: "Vou à escola." },
        { jp: "日本語を勉強します", pt: "Estudo japonês." },
        { jp: "家へ帰ります", pt: "Volto para casa." }
      ],
      keyPoints: [
        "Leia o texto inteiro antes de consultar a tradução.",
        "Identifique palavras de tempo e lugar.",
        "Observe a sequência das ações.",
        "Reconheça os kanji dentro das palavras.",
        "Busque compreender a mensagem geral."
      ]
    },
    {
      title: "Desafio de reconhecimento e interpretação",
      explanation: "Nesta última aula da semana, vamos reunir reconhecimento visual, leitura de compostos e interpretação. O aluno deve identificar os kanji conhecidos, ler palavras completas e compreender frases curtas. Quando encontrar um caractere desconhecido, deverá observar os elementos ao redor e tentar deduzir a função da palavra na frase. A meta é desenvolver independência na leitura, sem exigir que todos os caracteres sejam conhecidos.",
      examples: [
        { jp: "月曜日に学校へ行きます。", pt: "Vou à escola na segunda-feira." },
        { jp: "母は店でパンを買います。", pt: "Minha mãe compra pão na loja." },
        { jp: "友だちは午後に来ます。", pt: "Meu amigo vem à tarde." },
        { jp: "父は車で会社へ行きます。", pt: "Meu pai vai à empresa de carro." },
        { jp: "私は毎日、日本語の本を読みます。", pt: "Leio um livro de japonês todos os dias." }
      ],
      keyPoints: [
        "Reconheça os kanji em frases variadas.",
        "Leia os compostos como palavras completas.",
        "Utilize as partículas para compreender a estrutura.",
        "Não é necessário conhecer todos os kanji para compreender uma frase.",
        "O objetivo é ganhar autonomia na leitura."
      ]
    }
  ]
},


// ======================================================
// SEMANA 29 — KANJI V: ESCRITA, LEITURA E VOCABULÁRIO
// ======================================================

{
  title: "Kanji V — Escrita, leitura e vocabulário",
  goal: "Aprender a escrever kanji respeitando a ordem dos traços, reconhecer suas estruturas, ampliar o vocabulário e utilizar os caracteres em frases.",
  days: [
    {
      title: "Ordem dos traços: como escrever kanji",
      explanation: "Os kanji seguem convenções de ordem dos traços. Essas convenções ajudam a escrever os caracteres de maneira organizada e consistente. Algumas regras frequentes são: traços horizontais geralmente vêm antes dos verticais que os cruzam; traços que descem da esquerda para a direita geralmente vêm nessa direção; componentes superiores costumam ser escritos antes dos inferiores; componentes à esquerda geralmente vêm antes dos da direita. Essas são orientações gerais, não regras absolutas para todos os caracteres. Para aprender a escrita, observe diagramas de ordem dos traços e pratique cada caractere com atenção.",
      examples: [
        { jp: "一", pt: "Um traço horizontal, da esquerda para a direita." },
        { jp: "二", pt: "Dois traços horizontais, começando pelo superior." },
        { jp: "三", pt: "Três traços horizontais, de cima para baixo." },
        { jp: "十", pt: "Horizontal primeiro, depois vertical." },
        { jp: "人", pt: "Dois traços, começando pelo traço que desce para a esquerda." },
        { jp: "大", pt: "Três traços, começando pelo horizontal." }
      ],
      keyPoints: [
        "A ordem dos traços ajuda a manter a estrutura dos kanji.",
        "Caracteres são escritos seguindo convenções específicas.",
        "Horizontal geralmente vem antes do vertical que o cruza.",
        "Componentes superiores geralmente vêm antes dos inferiores.",
        "Consulte diagramas de ordem dos traços para caracteres novos.",
        "Pratique a escrita sem depender apenas de copiar o desenho."
      ]
    },
    {
      title: "Escrevendo kanji de números e tempo",
      explanation: "Vamos praticar a escrita de kanji utilizados em números e expressões temporais. Escreva cada caractere observando seus traços, proporções e posição. Depois, utilize-o em palavras completas. Por exemplo, 日 aparece em 日本, 毎日 e 日曜日. Ao praticar o caractere dentro de palavras, você aprende tanto sua forma quanto seu uso. Não basta escrever dez vezes sem compreender: tente lembrar o significado e uma palavra que contenha cada kanji.",
      examples: [
        { jp: "一・二・三・四・五", pt: "Um, dois, três, quatro e cinco." },
        { jp: "六・七・八・九・十", pt: "Seis, sete, oito, nove e dez." },
        { jp: "日（ひ）", pt: "Dia ou sol." },
        { jp: "月（つき）", pt: "Lua ou mês." },
        { jp: "年（とし）", pt: "Ano." },
        { jp: "毎日（まいにち）", pt: "Todos os dias." },
        { jp: "今年（ことし）", pt: "Este ano." }
      ],
      keyPoints: [
        "Pratique os kanji de números individualmente.",
        "Observe a proporção dos traços.",
        "日 aparece em palavras relacionadas a dias.",
        "月 pode representar lua ou mês.",
        "年 está relacionado a ano.",
        "Associe a escrita ao vocabulário."
      ]
    },
    {
      title: "Escrevendo kanji de pessoas e cotidiano",
      explanation: "Nesta aula, vamos praticar caracteres relacionados a pessoas, família, estudo e objetos. Alguns kanji possuem poucos traços, enquanto outros são mais complexos. Divida mentalmente os caracteres em componentes para compreender sua estrutura. Depois de escrever cada um, forme uma palavra completa. Por exemplo, 学 aparece em 学生 e 学校. Assim, você pratica o caractere em diferentes contextos.",
      examples: [
        { jp: "人（ひと）", pt: "Pessoa." },
        { jp: "男（おとこ）", pt: "Homem." },
        { jp: "女（おんな）", pt: "Mulher." },
        { jp: "子（こ）", pt: "Criança ou filho, conforme a palavra." },
        { jp: "学（がく）", pt: "Estudo, em compostos." },
        { jp: "学校（がっこう）", pt: "Escola." },
        { jp: "学生（がくせい）", pt: "Estudante." },
        { jp: "本（ほん）", pt: "Livro." }
      ],
      keyPoints: [
        "Divida caracteres complexos em componentes.",
        "Pratique os kanji dentro de palavras.",
        "学 aparece em 学校 e 学生.",
        "人 possui leituras diferentes em palavras diferentes.",
        "A escrita deve ser acompanhada de leitura e significado."
      ]
    },
    {
      title: "Escrevendo kanji em palavras completas",
      explanation: "Agora vamos passar da escrita de caracteres isolados para palavras completas. Ao escrever uma palavra, observe a proporção entre os kanji e a posição das terminações em hiragana. Por exemplo, 食べる combina o kanji 食 com べる. Já 電車 combina dois kanji. Pratique os dois tipos de estrutura. Lembre-se de que as palavras precisam ser memorizadas com suas leituras, pois a leitura nem sempre pode ser deduzida apenas pela aparência dos caracteres.",
      examples: [
        { jp: "食べる（たべる）", pt: "Comer." },
        { jp: "飲む（のむ）", pt: "Beber." },
        { jp: "見る（みる）", pt: "Ver." },
        { jp: "読む（よむ）", pt: "Ler." },
        { jp: "学校（がっこう）", pt: "Escola." },
        { jp: "電車（でんしゃ）", pt: "Trem elétrico." },
        { jp: "電話（でんわ）", pt: "Telefone." }
      ],
      keyPoints: [
        "Pratique palavras inteiras, não apenas caracteres isolados.",
        "Observe onde o kanji termina e o hiragana começa.",
        "食べる combina kanji e hiragana.",
        "電車 combina dois kanji.",
        "Memorize a leitura completa de cada palavra."
      ]
    },
    {
      title: "Memória ativa: escrever sem consultar",
      explanation: "Memória ativa é a prática de recuperar uma informação sem olhar imediatamente para a resposta. Para estudar kanji, observe o significado em português e tente escrever o caractere correspondente. Depois, confira sua resposta. Em seguida, faça o contrário: observe o kanji e tente lembrar seu significado e uma palavra em que aparece. Se não conseguir, revise o caractere e tente novamente depois de algum tempo. Essa prática é mais eficiente do que apenas reler uma lista muitas vezes.",
      examples: [
        { jp: "Água → 水", pt: "水 é lido みず na palavra água." },
        { jp: "Montanha → 山", pt: "山 é lido やま na palavra montanha." },
        { jp: "Pessoa → 人", pt: "人 é lido ひと na palavra pessoa." },
        { jp: "Livro → 本", pt: "本 é lido ほん na palavra livro." },
        { jp: "Escola → 学校", pt: "学校 é lido がっこう." },
        { jp: "Japão → 日本", pt: "日本 é lido にほん." }
      ],
      keyPoints: [
        "Tente recuperar o caractere antes de consultar a resposta.",
        "Associe significado, escrita e leitura.",
        "Pratique nos dois sentidos: português para japonês e japonês para português.",
        "Revise novamente os caracteres que causaram dificuldade.",
        "Utilize palavras completas para verificar se realmente aprendeu."
      ]
    },
    {
      title: "Produção escrita: frases com kanji",
      explanation: "Nesta última aula, vamos produzir frases utilizando os kanji estudados. Primeiro, escolha palavras que você já conhece. Depois, organize a frase com partículas e terminações gramaticais corretas. Procure escrever sem consultar os exemplos imediatamente. Após terminar, confira a escrita dos caracteres, a conjugação dos verbos e o uso das partículas. O objetivo é transformar o conhecimento de kanji em capacidade real de escrita.",
      examples: [
        { jp: "毎日学校へ行きます。", pt: "Vou à escola todos os dias." },
        { jp: "家で本を読みます。", pt: "Leio um livro em casa." },
        { jp: "水を飲みました。", pt: "Bebi água." },
        { jp: "友だちと映画を見ます。", pt: "Assisto a um filme com um amigo." },
        { jp: "日曜日に日本語を勉強します。", pt: "Estudo japonês no domingo." }
      ],
      keyPoints: [
        "Escreva frases completas utilizando kanji.",
        "Revise partículas e terminações.",
        "Confira a ordem dos traços.",
        "Não dependa de copiar os exemplos.",
        "A escrita precisa comunicar uma ideia completa."
      ]
    }
  ]
},

// ======================================================
// SEMANA 30 — KANJI VI: APLICAÇÃO EM TEXTOS
// ======================================================

{
  title: "Kanji VI — Aplicação em textos",
  goal: "Aplicar kanji conhecidos na leitura e interpretação de textos curtos, identificar informações importantes e compreender o sentido geral.",
  days: [
    {
      title: "Como começar a ler um texto japonês",
      explanation: "Ao encontrar um texto japonês, não tente traduzir cada caractere imediatamente. Primeiro, observe o contexto e procure reconhecer palavras familiares. Depois, identifique as partículas e os verbos. Os kanji ajudam a localizar substantivos e raízes de palavras, enquanto o hiragana mostra muitas relações gramaticais. Se encontrar uma palavra desconhecida, continue a leitura quando possível e tente descobrir sua função a partir das outras informações. O objetivo inicial é compreender a mensagem geral.",
      examples: [
        { jp: "私は学生です。", pt: "Sou estudante." },
        { jp: "毎日学校へ行きます。", pt: "Vou à escola todos os dias." },
        { jp: "学校で日本語を勉強します。", pt: "Estudo japonês na escola." },
        { jp: "家で本を読みます。", pt: "Leio um livro em casa." }
      ],
      keyPoints: [
        "Leia a frase inteira antes de tentar traduzi-la.",
        "Reconheça palavras familiares.",
        "Observe partículas e verbos.",
        "Use o contexto para interpretar palavras desconhecidas.",
        "Busque primeiro compreender a mensagem geral."
      ]
    },
    {
      title: "Texto sobre rotina",
      explanation: "Vamos ler um texto sobre uma rotina diária. Observe as expressões de tempo, os lugares e as ações. Procure perceber como o texto organiza os acontecimentos em sequência. O kanji 日 aparece em expressões temporais, 学 em palavras relacionadas a estudo e 家 em palavras relacionadas a casa. Leia primeiro sem consultar a tradução e depois confira sua compreensão.",
      examples: [
        {
          jp: "私は学生です。毎朝七時に起きます。朝ご飯を食べて、学校へ行きます。学校で日本語と英語を勉強します。午後、家へ帰ります。夜、本を読みます。",
          pt: "Sou estudante. Todas as manhãs acordo às sete horas. Tomo café da manhã e vou à escola. Na escola, estudo japonês e inglês. À tarde, volto para casa. À noite, leio um livro."
        },
        { jp: "毎朝（まいあさ）", pt: "Todas as manhãs." },
        { jp: "起きます（おきます）", pt: "Acordo." },
        { jp: "学校へ行きます", pt: "Vou à escola." },
        { jp: "家へ帰ります", pt: "Volto para casa." }
      ],
      keyPoints: [
        "Identifique as expressões de tempo.",
        "Observe a sequência dos acontecimentos.",
        "Reconheça os kanji dentro das palavras.",
        "Não é necessário traduzir cada partícula separadamente.",
        "Compreenda a rotina como um conjunto de informações."
      ]
    },
    {
      title: "Texto sobre família e atividades",
      explanation: "Nesta aula, o texto apresenta diferentes pessoas e suas atividades. Preste atenção aos sujeitos, aos lugares e aos verbos. Em japonês, o sujeito pode ser omitido quando está claro pelo contexto. Por isso, nem toda frase apresenta explicitamente quem está realizando a ação. Procure entender a relação entre as frases, em vez de interpretar cada uma como uma informação completamente isolada.",
      examples: [
        {
          jp: "私の家族は四人です。父は会社で仕事をします。母は店で働きます。弟は学生です。日曜日、家族で公園へ行きます。",
          pt: "Minha família tem quatro pessoas. Meu pai trabalha em uma empresa. Minha mãe trabalha em uma loja. Meu irmão mais novo é estudante. No domingo, minha família vai ao parque."
        },
        { jp: "家族（かぞく）", pt: "Família." },
        { jp: "四人（よにん）", pt: "Quatro pessoas." },
        { jp: "父（ちち）", pt: "Meu pai." },
        { jp: "母（はは）", pt: "Minha mãe." },
        { jp: "弟（おとうと）", pt: "Irmão mais novo." },
        { jp: "公園（こうえん）", pt: "Parque." }
      ],
      keyPoints: [
        "O sujeito pode ser omitido quando o contexto permite identificá-lo.",
        "家族 significa família.",
        "父 e 母 são formas comuns de falar do próprio pai e da própria mãe.",
        "弟 significa irmão mais novo.",
        "Relacionar as frases ajuda a compreender o texto inteiro."
      ]
    },
    {
      title: "Texto sobre lugares e deslocamento",
      explanation: "Agora vamos interpretar um texto que descreve deslocamentos pela cidade. Observe as partículas に, へ e で. A partícula へ pode indicar direção, に pode indicar destino ou ponto de chegada, e で pode indicar o local onde uma ação acontece ou o meio utilizado, conforme a estrutura. Reconhecer essas funções ajuda a compreender onde uma pessoa está indo, onde realiza uma atividade e como se desloca.",
      examples: [
        {
          jp: "土曜日、友だちと駅で会いました。駅から電車に乗りました。町の大きい店へ行きました。店で新しい本を買いました。その後、家へ帰りました。",
          pt: "No sábado, encontrei um amigo na estação. Pegamos um trem na estação. Fomos a uma grande loja da cidade. Comprei um livro novo na loja. Depois, voltei para casa."
        },
        { jp: "土曜日（どようび）", pt: "Sábado." },
        { jp: "駅（えき）", pt: "Estação." },
        { jp: "電車（でんしゃ）", pt: "Trem elétrico." },
        { jp: "町（まち）", pt: "Cidade ou bairro." },
        { jp: "買いました（かいました）", pt: "Comprei." },
        { jp: "その後（そのあと）", pt: "Depois disso." }
      ],
      keyPoints: [
        "駅 significa estação.",
        "電車 significa trem elétrico.",
        "町 significa cidade ou bairro.",
        "で pode indicar o local de uma ação.",
        "から pode indicar origem.",
        "A sequência temporal ajuda a acompanhar o deslocamento."
      ]
    },
    {
      title: "Texto com passado e planos",
      explanation: "Nesta aula, vamos combinar acontecimentos passados e planos futuros. Observe expressões como 昨日, que significa ontem, e 明日, que significa amanhã. Os verbos no passado aparecem com terminações como ました ou formas informais já estudadas. Os planos podem aparecer com つもりです. Ao ler, procure distinguir o que já aconteceu daquilo que ainda está planejado.",
      examples: [
        {
          jp: "昨日、友だちとサッカーをしました。その後、レストランでご飯を食べました。とても楽しかったです。明日は学校へ行くつもりです。学校で先生に会います。",
          pt: "Ontem, joguei futebol com um amigo. Depois, comemos em um restaurante. Foi muito divertido. Amanhã, pretendo ir à escola. Encontrarei o professor na escola."
        },
        { jp: "昨日（きのう）", pt: "Ontem." },
        { jp: "明日（あした）", pt: "Amanhã." },
        { jp: "楽しかったです（たのしかったです）", pt: "Foi divertido." },
        { jp: "行くつもりです", pt: "Pretendo ir." },
        { jp: "先生に会います", pt: "Encontro o professor." }
      ],
      keyPoints: [
        "昨日 indica passado.",
        "明日 indica futuro próximo.",
        "ました é uma terminação de passado educado.",
        "つもりです expressa intenção ou plano.",
        "Diferencie acontecimentos de planos."
      ]
    },
    {
      title: "Interpretação de texto sem tradução imediata",
      explanation: "Nesta aula, o aluno deverá ler um texto inteiro antes de consultar qualquer tradução. Depois da leitura, deve responder mentalmente a perguntas como: quem participa da história? Onde os acontecimentos ocorrem? O que aconteceu primeiro? Qual foi o resultado? Essa estratégia desenvolve compreensão global. O objetivo não é conhecer absolutamente todas as palavras, mas identificar informações suficientes para entender a mensagem.",
      examples: [
        {
          jp: "田中さんは学生です。毎朝、自転車で学校へ行きます。学校では日本語を勉強します。昼休みに友だちとご飯を食べます。午後四時に家へ帰ります。夜は本を読んだり、音楽を聞いたりします。",
          pt: "Tanaka é estudante. Todas as manhãs vai à escola de bicicleta. Na escola, estuda japonês. Durante o intervalo do almoço, come com amigos. Às quatro da tarde, volta para casa. À noite, lê livros e escuta música."
        },
        { jp: "田中さん（たなかさん）", pt: "Sr./Sra. Tanaka." },
        { jp: "自転車（じてんしゃ）", pt: "Bicicleta." },
        { jp: "昼休み（ひるやすみ）", pt: "Intervalo do almoço." },
        { jp: "音楽（おんがく）", pt: "Música." },
        { jp: "聞きます（ききます）", pt: "Escutar." }
      ],
      keyPoints: [
        "Leia o texto inteiro antes de consultar o significado.",
        "Identifique personagens, lugares e horários.",
        "Procure a sequência dos acontecimentos.",
        "Não dependa da tradução palavra por palavra.",
        "A compreensão global é mais importante do que traduzir cada caractere."
      ]
    }
  ]
},

// ======================================================
// SEMANA 31 — KANJI VII: TEXTOS MAIORES
// ======================================================

{
  title: "Kanji VII — Textos maiores",
  goal: "Ler textos mais longos, conectar informações entre parágrafos, identificar ideias principais e compreender vocabulário em contexto.",
  days: [
    {
      title: "Conectando frases em um texto",
      explanation: "Um texto maior não é apenas uma sequência de frases independentes. As informações se conectam por expressões de tempo, causa, contraste e sequência. Em japonês, expressões como そして (e então), でも (mas), だから (por isso) e その後 (depois disso) ajudam a organizar as ideias. Ao ler, observe como uma frase se relaciona com a anterior. Isso permite compreender a história inteira sem precisar traduzir cada palavra isoladamente.",
      examples: [
        { jp: "そして", pt: "E então." },
        { jp: "でも", pt: "Mas." },
        { jp: "だから", pt: "Por isso." },
        { jp: "その後", pt: "Depois disso." },
        { jp: "まず", pt: "Primeiro." },
        { jp: "最後に", pt: "Por último." },
        { jp: "朝ご飯を食べました。そして、学校へ行きました。", pt: "Tomei café da manhã. Depois, fui à escola." }
      ],
      keyPoints: [
        "Textos possuem conexões entre suas frases.",
        "そして indica continuidade.",
        "でも indica contraste.",
        "だから introduz uma consequência.",
        "その後 indica uma sequência temporal.",
        "Observe a relação entre as ideias."
      ]
    },
    {
      title: "Texto: um dia de estudos",
      explanation: "Leia o texto procurando compreender a rotina completa do personagem. Observe os horários, as atividades e os lugares. Não consulte a tradução antes de tentar identificar a ideia principal. Depois, procure palavras conhecidas e observe como as ações estão organizadas. O texto utiliza vocabulário de rotina, escola, alimentação e estudo.",
      examples: [
        {
          jp: "山田さんの一日\n山田さんは高校生です。毎朝六時半に起きます。朝ご飯を食べてから、七時半に家を出ます。学校まではバスで三十分かかります。学校では数学や日本語など、いろいろな科目を勉強します。昼休みには友だちと話しながらお弁当を食べます。午後三時半に授業が終わります。家に帰った後、宿題をして、夜は少し本を読みます。",
          pt: "Um dia de Yamada. Yamada é estudante do ensino médio. Todas as manhãs acorda às seis e meia. Depois de tomar café da manhã, sai de casa às sete e meia. Até a escola, o trajeto de ônibus leva trinta minutos. Na escola, estuda várias matérias, como matemática e japonês. Durante o intervalo do almoço, come sua marmita enquanto conversa com amigos. As aulas terminam às três e meia da tarde. Depois de voltar para casa, faz a lição de casa e lê um pouco à noite."
        },
        { jp: "高校生（こうこうせい）", pt: "Estudante do ensino médio." },
        { jp: "家を出ます（いえをでます）", pt: "Sai de casa." },
        { jp: "科目（かもく）", pt: "Matéria escolar." },
        { jp: "授業（じゅぎょう）", pt: "Aula." },
        { jp: "宿題（しゅくだい）", pt: "Lição de casa." }
      ],
      keyPoints: [
        "Identifique a rotina do personagem.",
        "Observe os horários e a sequência das atividades.",
        "高校生 significa estudante do ensino médio.",
        "授業 significa aula.",
        "宿題 significa lição de casa.",
        "Utilize o contexto para compreender vocabulário novo."
      ]
    },
    {
      title: "Texto: uma visita a outra cidade",
      explanation: "Agora vamos ler uma narrativa sobre uma viagem. Procure identificar o local de origem, o destino, o meio de transporte e as atividades realizadas. Observe também expressões de passado. Um texto narrativo apresenta acontecimentos em uma sequência, e reconhecer essa sequência ajuda a compreender palavras desconhecidas. Não é necessário traduzir cada expressão para entender o que aconteceu.",
      examples: [
        {
          jp: "先週、家族と京都へ行きました。朝、新幹線に乗って、京都の駅に着きました。駅の近くで昼ご飯を食べました。その後、古いお寺を見に行きました。お寺の近くには大きい公園がありました。たくさん写真を撮りました。夜、ホテルに帰りました。とても楽しい旅行でした。",
          pt: "Na semana passada, fui a Kyoto com minha família. De manhã, peguei o trem-bala e cheguei à estação de Kyoto. Comemos perto da estação. Depois, fomos visitar um templo antigo. Perto do templo havia um parque grande. Tiramos muitas fotos. À noite, voltamos ao hotel. Foi uma viagem muito divertida."
        },
        { jp: "先週（せんしゅう）", pt: "Semana passada." },
        { jp: "京都（きょうと）", pt: "Kyoto." },
        { jp: "新幹線（しんかんせん）", pt: "Trem-bala japonês." },
        { jp: "着きました（つきました）", pt: "Chegamos." },
        { jp: "お寺（おてら）", pt: "Templo budista." },
        { jp: "旅行（りょこう）", pt: "Viagem." }
      ],
      keyPoints: [
        "先週 indica a semana passada.",
        "新幹線 significa trem-bala.",
        "着きました indica chegada.",
        "旅行 significa viagem.",
        "Identifique a ordem dos acontecimentos.",
        "Observe como o texto descreve lugares e atividades."
      ]
    },
    {
      title: "Texto: gostos, opiniões e comparações",
      explanation: "Nesta aula, vamos interpretar um texto que apresenta preferências e comparações. Observe expressões como 好き, que significa gostar, より, que indica comparação, e いちばん, que indica o mais ou a maior preferência em determinado conjunto. Procure identificar quais atividades cada personagem prefere e quais motivos são apresentados. O importante é compreender as relações entre as opiniões.",
      examples: [
        {
          jp: "私の友だちはスポーツが好きです。特にサッカーが大好きです。でも、私は音楽を聞くことが好きです。スポーツも楽しいですが、音楽を聞く時間が一番好きです。友だちは野球よりサッカーのほうが好きです。私は静かな音楽が好きです。",
          pt: "Meu amigo gosta de esportes. Especialmente, adora futebol. Mas eu gosto de escutar música. Esportes também são divertidos, mas o momento de escutar música é o meu favorito. Meu amigo gosta mais de futebol do que de beisebol. Eu gosto de música tranquila."
        },
        { jp: "特に（とくに）", pt: "Especialmente." },
        { jp: "大好き（だいすき）", pt: "Gostar muito ou adorar." },
        { jp: "時間（じかん）", pt: "Tempo ou período." },
        { jp: "一番（いちばん）", pt: "O mais ou número um." },
        { jp: "静か（しずか）", pt: "Silencioso ou tranquilo." }
      ],
      keyPoints: [
        "特に destaca algo em particular.",
        "大好き expressa gostar muito.",
        "一番 indica o maior grau dentro de um conjunto.",
        "より e ほうが participam de comparações.",
        "Identifique a preferência de cada personagem."
      ]
    },
    {
      title: "Texto: um problema e sua solução",
      explanation: "Textos também podem apresentar um problema, uma tentativa de solução e um resultado. Ao ler, procure identificar o que aconteceu, por que aconteceu e como foi resolvido. Expressões como から ajudam a indicar motivos, enquanto でも apresenta contraste e だから pode apresentar uma consequência. O objetivo é compreender a lógica da situação, e não somente reconhecer os kanji.",
      examples: [
        {
          jp: "昨日、私は学校へ行く前に宿題をしました。でも、数学の問題が難しくて、全部できませんでした。だから、先生に質問しました。先生はゆっくり説明してくれました。その後、家で同じ問題をもう一度勉強しました。今日は全部わかりました。",
          pt: "Ontem, fiz a lição de casa antes de ir à escola. Mas os exercícios de matemática eram difíceis e não consegui fazer todos. Por isso, fiz uma pergunta ao professor. O professor explicou calmamente. Depois, em casa, estudei os mesmos exercícios mais uma vez. Hoje entendi tudo."
        },
        { jp: "問題（もんだい）", pt: "Problema ou exercício." },
        { jp: "難しい（むずかしい）", pt: "Difícil." },
        { jp: "全部（ぜんぶ）", pt: "Tudo ou todos." },
        { jp: "質問（しつもん）", pt: "Pergunta." },
        { jp: "説明（せつめい）", pt: "Explicação." },
        { jp: "もう一度（もういちど）", pt: "Mais uma vez." }
      ],
      keyPoints: [
        "Identifique o problema apresentado.",
        "Observe a relação de causa e consequência.",
        "でも introduz contraste.",
        "だから pode indicar consequência.",
        "もう一度 significa mais uma vez.",
        "Compreenda como a situação foi resolvida."
      ]
    },
    {
      title: "Leitura e resumo de um texto maior",
      explanation: "Nesta aula, você deverá ler um texto maior e produzir um resumo em português ou em japonês simples. Primeiro, identifique o assunto principal. Depois, anote os personagens, os acontecimentos importantes e o resultado. Não é necessário copiar todas as frases. Um bom resumo preserva as informações essenciais e demonstra que você compreendeu a sequência. Essa atividade desenvolve leitura, interpretação e organização de ideias.",
      examples: [
        {
          jp: "日曜日、私は家族と町の図書館へ行きました。図書館にはたくさんの本がありました。私は日本語の本を読みたかったので、受付で本の場所を聞きました。図書館の人は親切に教えてくれました。私は一時間ぐらい本を読みました。その後、近くの公園へ行って、家族と話しました。午後五時ごろ家に帰りました。とてもいい日曜日でした。",
          pt: "No domingo, fui à biblioteca da cidade com minha família. Havia muitos livros na biblioteca. Como queria ler um livro de japonês, perguntei na recepção onde os livros ficavam. A pessoa da biblioteca me ensinou gentilmente. Li por aproximadamente uma hora. Depois, fui ao parque próximo e conversei com minha família. Voltei para casa por volta das cinco da tarde. Foi um domingo muito bom."
        },
        { jp: "図書館（としょかん）", pt: "Biblioteca." },
        { jp: "受付（うけつけ）", pt: "Recepção." },
        { jp: "場所（ばしょ）", pt: "Lugar." },
        { jp: "親切（しんせつ）", pt: "Gentil." },
        { jp: "一時間ぐらい", pt: "Aproximadamente uma hora." },
        { jp: "ごろ", pt: "Por volta de determinado horário." }
      ],
      keyPoints: [
        "Identifique o assunto principal.",
        "Localize personagens e acontecimentos.",
        "Observe a ordem dos eventos.",
        "Produza um resumo com as informações essenciais.",
        "Não é necessário traduzir todas as palavras.",
        "Um resumo deve demonstrar compreensão, não apenas copiar frases."
      ]
    }
  ]
},

// ======================================================
// SEMANA 32 — KANJI VIII: VOCABULÁRIO INTERMEDIÁRIO
// ======================================================

{
  title: "Kanji VIII — Vocabulário intermediário",
  goal: "Ampliar o vocabulário com kanji de uso frequente em situações intermediárias, compreender compostos mais elaborados e utilizar novas palavras em contexto.",
  days: [
    {
      title: "Sentimentos e estados: 心・気・思・楽",
      explanation: "Vamos aprender kanji presentes em palavras relacionadas a sentimentos, pensamentos e estados. 心 está relacionado ao coração e à mente. 気 aparece em palavras como 元気 e 天気. 思 significa pensar ou sentir, dependendo da palavra. 楽 aparece em 楽しい, que significa divertido, e em 音楽, que significa música. O significado de um kanji deve ser compreendido dentro da palavra completa.",
      examples: [
        { jp: "心（こころ）", pt: "Coração ou mente." },
        { jp: "元気（げんき）", pt: "Disposição ou bem-estar." },
        { jp: "天気（てんき）", pt: "Clima." },
        { jp: "思う（おもう）", pt: "Pensar ou achar." },
        { jp: "楽しい（たのしい）", pt: "Divertido." },
        { jp: "音楽（おんがく）", pt: "Música." },
        { jp: "大切（たいせつ）", pt: "Importante ou precioso." }
      ],
      keyPoints: [
        "心 está relacionado ao coração e à mente.",
        "気 aparece em várias expressões do cotidiano.",
        "思う significa pensar ou achar.",
        "楽しい significa divertido.",
        "音楽 significa música.",
        "Memorize as palavras completas."
      ]
    },
    {
      title: "Natureza e clima: 雨・雪・風・海・山",
      explanation: "Nesta aula, vamos ampliar o vocabulário relacionado ao ambiente natural e ao clima. 雨 significa chuva, 雪 significa neve, 風 significa vento e 海 significa mar. 山 significa montanha e já foi estudado anteriormente. Esses kanji aparecem em previsões meteorológicas, descrições de paisagens e conversas sobre o clima. Observe que alguns caracteres podem possuir leituras diferentes em palavras compostas.",
      examples: [
        { jp: "雨（あめ）", pt: "Chuva." },
        { jp: "雪（ゆき）", pt: "Neve." },
        { jp: "風（かぜ）", pt: "Vento." },
        { jp: "海（うみ）", pt: "Mar." },
        { jp: "山（やま）", pt: "Montanha." },
        { jp: "台風（たいふう）", pt: "Tufão." },
        { jp: "大雨（おおあめ）", pt: "Chuva forte." }
      ],
      keyPoints: [
        "雨 significa chuva.",
        "雪 significa neve.",
        "風 significa vento.",
        "海 significa mar.",
        "山 significa montanha.",
        "台風 significa tufão."
      ]
    },
    {
      title: "Ações e habilidades: 作・使・持・知",
      explanation: "Vamos estudar kanji utilizados em verbos comuns. 作 está relacionado a fazer ou produzir. 使 significa usar. 持 significa segurar ou possuir. 知 significa conhecer ou saber. Esses caracteres aparecem em verbos como 作る, 使う, 持つ e 知る. Observe as terminações em hiragana e as mudanças que podem ocorrer quando os verbos são conjugados.",
      examples: [
        { jp: "作る（つくる）", pt: "Fazer ou produzir." },
        { jp: "使う（つかう）", pt: "Usar." },
        { jp: "持つ（もつ）", pt: "Segurar ou possuir." },
        { jp: "知る（しる）", pt: "Saber ou conhecer." },
        { jp: "使います（つかいます）", pt: "Uso, forma educada." },
        { jp: "知っています（しっています）", pt: "Sei ou conheço." },
        { jp: "料理を作ります。", pt: "Faço comida." }
      ],
      keyPoints: [
        "作る significa fazer ou produzir.",
        "使う significa usar.",
        "持つ significa segurar ou possuir.",
        "知る significa saber ou conhecer.",
        "Verbos combinam kanji com terminações em hiragana.",
        "Aprenda a reconhecer o kanji em diferentes conjugações."
      ]
    },
    {
      title: "Sociedade e cotidiano: 社・会・地・図",
      explanation: "Nesta aula, vamos aprender palavras utilizadas para falar de sociedade, encontros, localização e representação de lugares. 社 aparece em 会社, que significa empresa. 会 aparece em 会う, encontrar alguém. 地 está relacionado a terra ou região, e 図 aparece em palavras relacionadas a desenhos, mapas e diagramas. 地図 significa mapa. Observe como os caracteres se combinam para formar conceitos mais específicos.",
      examples: [
        { jp: "会社（かいしゃ）", pt: "Empresa." },
        { jp: "社会（しゃかい）", pt: "Sociedade." },
        { jp: "会う（あう）", pt: "Encontrar alguém." },
        { jp: "地図（ちず）", pt: "Mapa." },
        { jp: "地下（ちか）", pt: "Subsolo." },
        { jp: "図書館（としょかん）", pt: "Biblioteca." },
        { jp: "世界（せかい）", pt: "Mundo." }
      ],
      keyPoints: [
        "社 aparece em palavras relacionadas a empresas e organizações.",
        "会 aparece em palavras relacionadas a encontros.",
        "地 está relacionado a terra e região.",
        "図 aparece em palavras relacionadas a mapas e diagramas.",
        "地図 significa mapa.",
        "社会 significa sociedade."
      ]
    },
    {
      title: "Vocabulário de comunicação e informação",
      explanation: "Vamos estudar palavras utilizadas em comunicação, notícias e informação. 新 significa novo, 聞 aparece em 聞く e 新聞, 読 aparece em 読む, e 情報 significa informação. 新聞 é uma palavra importante: significa jornal. Seu segundo kanji, 聞, também aparece no verbo 聞く, que pode significar ouvir ou perguntar conforme o contexto. Aprender essas palavras ajuda a compreender textos e materiais do cotidiano.",
      examples: [
        { jp: "新聞（しんぶん）", pt: "Jornal." },
        { jp: "新しい（あたらしい）", pt: "Novo." },
        { jp: "聞く（きく）", pt: "Ouvir ou perguntar." },
        { jp: "読む（よむ）", pt: "Ler." },
        { jp: "情報（じょうほう）", pt: "Informação." },
        { jp: "記事（きじ）", pt: "Artigo ou matéria." },
        { jp: "ニュース", pt: "Notícias." }
      ],
      keyPoints: [
        "新聞 significa jornal.",
        "聞く pode significar ouvir ou perguntar.",
        "新しい significa novo.",
        "情報 significa informação.",
        "記事 significa artigo ou matéria.",
        "O contexto ajuda a distinguir os sentidos de 聞く."
      ]
    },
    {
      title: "Utilizando vocabulário intermediário",
      explanation: "Nesta aula, vamos utilizar as palavras novas em frases e pequenos contextos. O aluno deve reconhecer os kanji, identificar o vocabulário e compreender a mensagem completa. Algumas palavras são compostas por kanji que já foram estudados em outras semanas. Outras apresentam caracteres novos. Não tente adivinhar todas as leituras: aprenda cada palavra em seu contexto e revise as que forem mais difíceis.",
      examples: [
        { jp: "今日は天気がいいです。", pt: "Hoje o tempo está bom." },
        { jp: "私は音楽を聞きます。", pt: "Eu escuto música." },
        { jp: "地図を見て、駅へ行きます。", pt: "Olho o mapa e vou à estação." },
        { jp: "新聞で新しい情報を読みました。", pt: "Li uma informação nova no jornal." },
        { jp: "友だちと料理を作ります。", pt: "Faço comida com um amigo." }
      ],
      keyPoints: [
        "Utilize os kanji em frases completas.",
        "天気 está relacionado ao clima.",
        "音楽 significa música.",
        "地図 significa mapa.",
        "情報 significa informação.",
        "Revise vocabulário por meio de leitura e escrita."
      ]
    }
  ]
},

// ======================================================
// SEMANA 33 — LEITURA COM KANJI
// ======================================================

{
  title: "Leitura com kanji",
  goal: "Ler textos simples e contextualizados sem depender da tradução palavra por palavra, reconhecer vocabulário conhecido e desenvolver autonomia de interpretação.",
  days: [
    {
      title: "Estratégias de leitura independente",
      explanation: "A leitura independente começa quando o aluno consegue compreender uma mensagem sem precisar interromper cada frase para consultar uma tradução. Primeiro, observe o título e o assunto. Depois, procure reconhecer palavras familiares e identificar o verbo principal de cada frase. Observe expressões de tempo, lugar, quantidade e opinião. Se encontrar um kanji desconhecido, tente compreender a função da palavra pelo restante da frase. Consulte o dicionário depois da primeira tentativa de interpretação.",
      examples: [
        { jp: "毎朝、学校へ行きます。", pt: "Todas as manhãs, vou à escola." },
        { jp: "昨日、新しい本を買いました。", pt: "Ontem, comprei um livro novo." },
        { jp: "友だちは音楽が好きです。", pt: "Meu amigo gosta de música." },
        { jp: "明日は雨が降ると思います。", pt: "Acho que amanhã vai chover." }
      ],
      keyPoints: [
        "Observe o assunto antes de começar a leitura.",
        "Procure palavras conhecidas.",
        "Identifique os verbos e as expressões de tempo.",
        "Tente compreender o contexto antes de consultar traduções.",
        "Consultar o dicionário depois da primeira tentativa ajuda a desenvolver autonomia."
      ]
    },
    {
      title: "Texto simples: minha rotina",
      explanation: "Leia o texto como se estivesse conhecendo a rotina de outra pessoa. Tente identificar os horários, as atividades e os hábitos. Depois da primeira leitura, responda mentalmente: a que horas a pessoa acorda? Para onde ela vai? O que faz à noite? O objetivo é localizar informações diretamente no texto, sem precisar traduzir todas as frases.",
      examples: [
        {
          jp: "私の毎日\n私は毎朝六時に起きます。顔を洗って、朝ご飯を食べます。七時に家を出て、学校へ行きます。学校では友だちと話したり、授業を受けたりします。午後、家に帰ります。夜は日本語を勉強して、十一時ごろ寝ます。",
          pt: "Meu dia a dia. Todas as manhãs acordo às seis horas. Lavo o rosto e tomo café da manhã. Saio de casa às sete e vou à escola. Na escola, converso com amigos e assisto às aulas. À tarde, volto para casa. À noite, estudo japonês e durmo por volta das onze."
        },
        { jp: "毎日（まいにち）", pt: "Todos os dias." },
        { jp: "顔（かお）", pt: "Rosto." },
        { jp: "授業（じゅぎょう）", pt: "Aula." },
        { jp: "寝ます（ねます）", pt: "Durmo." }
      ],
      keyPoints: [
        "Leia procurando informações específicas.",
        "Observe os horários.",
        "Identifique as atividades da manhã, tarde e noite.",
        "授業 significa aula.",
        "寝ます significa dormir.",
        "Não dependa da tradução de cada palavra."
      ]
    },
    {
      title: "Texto simples: uma experiência",
      explanation: "Agora vamos ler um relato de uma experiência passada. Procure identificar onde a pessoa foi, com quem estava e o que fez. Observe expressões como 初めて, que significa pela primeira vez, e 楽しかった, que indica que algo foi divertido. A leitura deve permitir reconstruir a experiência em sua mente, mesmo que algumas palavras ainda sejam desconhecidas.",
      examples: [
        {
          jp: "初めての旅行\n去年、家族と海へ行きました。私は海を見るのが初めてでした。天気がよくて、空も青かったです。海の近くで昼ご飯を食べました。その後、写真をたくさん撮りました。夕方、家に帰りました。とても楽しかったです。",
          pt: "Minha primeira viagem. No ano passado, fui ao mar com minha família. Era a primeira vez que eu via o mar. O tempo estava bom e o céu também estava azul. Comemos perto do mar. Depois, tiramos muitas fotos. À tarde, voltamos para casa. Foi muito divertido."
        },
        { jp: "去年（きょねん）", pt: "Ano passado." },
        { jp: "初めて（はじめて）", pt: "Pela primeira vez." },
        { jp: "海（うみ）", pt: "Mar." },
        { jp: "夕方（ゆうがた）", pt: "Fim da tarde." },
        { jp: "楽しかった（たのしかった）", pt: "Foi divertido." }
      ],
      keyPoints: [
        "去年 indica o ano passado.",
        "初めて indica uma primeira experiência.",
        "Identifique o local e os participantes.",
        "Observe a sequência da experiência.",
        "Reconheça as expressões que indicam passado."
      ]
    },
    {
      title: "Texto simples: uma pequena notícia",
      explanation: "Nesta aula, vamos interpretar um texto com estilo de pequena notícia. Observe o título, o acontecimento principal, o local e as informações complementares. Textos informativos frequentemente utilizam palavras compostas por kanji. Você não precisa conhecer todos os caracteres para entender o assunto. Identifique primeiro o que aconteceu e depois procure os detalhes.",
      examples: [
        {
          jp: "町に新しい図書館ができました\n今月、町の中心に新しい図書館ができました。この図書館には、子どもの本や外国語の本があります。毎日、たくさんの人が本を読みに来ます。図書館は午前九時から午後六時まで開いています。",
          pt: "Uma nova biblioteca foi inaugurada na cidade. Neste mês, uma nova biblioteca foi criada no centro da cidade. Essa biblioteca possui livros infantis e livros em línguas estrangeiras. Todos os dias, muitas pessoas vêm para ler. A biblioteca fica aberta das nove da manhã às seis da tarde."
        },
        { jp: "今月（こんげつ）", pt: "Este mês." },
        { jp: "中心（ちゅうしん）", pt: "Centro." },
        { jp: "外国語（がいこくご）", pt: "Língua estrangeira." },
        { jp: "午前（ごぜん）", pt: "Período da manhã." },
        { jp: "午後（ごご）", pt: "Período da tarde." },
        { jp: "開いています（あいています）", pt: "Está aberta." }
      ],
      keyPoints: [
        "Identifique o acontecimento principal.",
        "中心 significa centro.",
        "外国語 significa língua estrangeira.",
        "午前 e 午後 indicam períodos do dia.",
        "Procure informações específicas de horário e local.",
        "Não é necessário traduzir o texto inteiro para compreender a notícia."
      ]
    },
    {
      title: "Texto simples: opiniões e planos",
      explanation: "Vamos ler um texto que combina preferências, justificativas e planos. Procure identificar o que a pessoa gosta, por que gosta e o que pretende fazer. A expressão と思います pode indicar uma opinião ou pensamento, enquanto つもりです expressa intenção. Leia o texto procurando essas relações. O objetivo é compreender não apenas as ações, mas também os motivos e as opiniões do personagem.",
      examples: [
        {
          jp: "私の趣味\n私は本を読むことが好きです。特に、歴史の本が好きです。新しいことを知ることができるからです。今は日本語の勉強もしています。日本の文化について、もっと知りたいです。来年、日本語で簡単な本を読むつもりです。",
          pt: "Meu hobby. Gosto de ler livros. Especialmente, gosto de livros de história, porque posso aprender coisas novas. Atualmente também estou estudando japonês. Quero conhecer mais sobre a cultura japonesa. No próximo ano, pretendo ler um livro simples em japonês."
        },
        { jp: "趣味（しゅみ）", pt: "Hobby." },
        { jp: "歴史（れきし）", pt: "História." },
        { jp: "文化（ぶんか）", pt: "Cultura." },
        { jp: "知りたい（しりたい）", pt: "Quero saber ou conhecer." },
        { jp: "来年（らいねん）", pt: "Próximo ano." }
      ],
      keyPoints: [
        "趣味 significa hobby.",
        "歴史 significa história.",
        "文化 significa cultura.",
        "たい expressa desejo.",
        "つもりです expressa intenção.",
        "Identifique as preferências e os planos do personagem."
      ]
    },
    {
      title: "Desafio final de leitura independente",
      explanation: "Nesta última aula, você deverá ler um texto sem consultar a tradução durante a primeira tentativa. Depois, escreva um resumo curto em português e destaque cinco palavras japonesas que conseguiu reconhecer. Em seguida, confira a tradução e identifique quais informações compreendeu corretamente. Não é necessário conhecer todos os kanji do texto. A meta é conseguir entender a situação geral, localizar informações e utilizar o contexto de maneira independente.",
      examples: [
        {
          jp: "新しい友だち\n先月、私は新しい学校へ入りました。最初は少し不安でした。でも、クラスの友だちはとても親切でした。毎日、昼休みに一緒にご飯を食べます。放課後は図書館で勉強することもあります。今では学校の生活がとても楽しいです。これからも、たくさんのことを学びたいと思います。",
          pt: "Um novo amigo. No mês passado, entrei em uma escola nova. No começo, estava um pouco inseguro. Mas meus colegas de turma eram muito gentis. Todos os dias, comemos juntos durante o intervalo do almoço. Depois das aulas, às vezes estudamos na biblioteca. Agora, a vida escolar é muito divertida. Daqui para frente, quero aprender muitas coisas."
        },
        { jp: "先月（せんげつ）", pt: "Mês passado." },
        { jp: "最初（さいしょ）", pt: "Começo." },
        { jp: "不安（ふあん）", pt: "Insegurança ou preocupação." },
        { jp: "親切（しんせつ）", pt: "Gentil." },
        { jp: "放課後（ほうかご）", pt: "Depois das aulas." },
        { jp: "生活（せいかつ）", pt: "Vida ou cotidiano." }
      ],
      keyPoints: [
        "Faça a primeira leitura sem consultar a tradução.",
        "Identifique a situação inicial e o resultado.",
        "Procure reconhecer expressões de tempo.",
        "Escreva um resumo com as informações principais.",
        "Destaque palavras que conseguiu compreender.",
        "A leitura independente é o objetivo desta semana."
      ]
    }
  ]
},

// ======================================================
// SEMANA 34 — REVISÃO GERAL
// ======================================================

{
  title: "Revisão geral — Hiragana, Katakana, Kanji e Gramática",
  goal: "Consolidar os três sistemas de escrita, revisar vocabulário e gramática das fases anteriores e demonstrar capacidade de ler, escrever e interpretar japonês básico com kanji.",
  days: [
    {
      title: "Revisão do hiragana e da leitura",
      explanation: "Vamos revisar o hiragana, o primeiro sistema de escrita estudado. Ele é utilizado em partículas, terminações gramaticais e muitas palavras japonesas. Revise as linhas básicas, dakuten, handakuten e combinações com ゃ, ゅ e ょ. Também pratique a leitura de palavras e frases completas. A meta é conseguir ler hiragana sem depender de consultar constantemente uma tabela.",
      examples: [
        { jp: "あ・い・う・え・お", pt: "Vogais básicas." },
        { jp: "か・き・く・け・こ", pt: "Linha K." },
        { jp: "さ・し・す・せ・そ", pt: "Linha S." },
        { jp: "が・ぎ・ぐ・げ・ご", pt: "Linha com dakuten." },
        { jp: "ぱ・ぴ・ぷ・ぺ・ぽ", pt: "Linha com handakuten." },
        { jp: "きゃ・きゅ・きょ", pt: "Combinações com pequeno ゃ, ゅ e ょ." },
        { jp: "私は毎日日本語を勉強します。", pt: "Estudo japonês todos os dias." }
      ],
      keyPoints: [
        "Reconheça todas as linhas do hiragana.",
        "Revise dakuten e handakuten.",
        "Pratique combinações com ゃ, ゅ e ょ.",
        "Leia palavras sem consultar a tabela.",
        "Identifique partículas e terminações em frases."
      ]
    },
    {
      title: "Revisão do katakana",
      explanation: "O katakana é utilizado principalmente em palavras estrangeiras, nomes, onomatopeias e outros contextos específicos. Revise as linhas básicas, dakuten, handakuten, combinações especiais, pequeno ッ e vogais longas representadas por ー. A leitura precisa ser feita dentro das palavras, não apenas por meio de caracteres isolados. Observe também que algumas palavras de origem estrangeira apresentam pronúncias adaptadas à fonologia japonesa.",
      examples: [
        { jp: "ア・イ・ウ・エ・オ", pt: "Vogais básicas." },
        { jp: "カ・キ・ク・ケ・コ", pt: "Linha K." },
        { jp: "ガ・ギ・グ・ゲ・ゴ", pt: "Linha com dakuten." },
        { jp: "パ・ピ・プ・ペ・ポ", pt: "Linha com handakuten." },
        { jp: "コーヒー", pt: "Café." },
        { jp: "サッカー", pt: "Futebol." },
        { jp: "コンピューター", pt: "Computador." },
        { jp: "ブラジル", pt: "Brasil." }
      ],
      keyPoints: [
        "Revise todas as linhas do katakana.",
        "Reconheça dakuten e handakuten.",
        "Pequeno ッ indica uma consoante geminada.",
        "ー representa prolongamento de vogal.",
        "Leia palavras estrangeiras completas.",
        "Diferencie hiragana e katakana visualmente."
      ]
    },
    {
      title: "Revisão dos kanji fundamentais",
      explanation: "Agora vamos revisar os kanji fundamentais das semanas anteriores. Organize os caracteres por grupos de significado: números, pessoas, natureza, tempo, escola, casa, alimentação, lugares, direções e transporte. Não tente decorar todos como uma única lista. Reconheça cada caractere em palavras reais e revise suas leituras dentro dos compostos. A meta é conseguir identificar o significado provável e ler palavras já estudadas.",
      examples: [
        { jp: "一・二・三・四・五・六・七・八・九・十", pt: "Números." },
        { jp: "人・男・女・子・友・父・母", pt: "Pessoas e família." },
        { jp: "日・月・火・水・木・金・土", pt: "Elementos e dias da semana." },
        { jp: "学・校・生・先", pt: "Estudo e escola." },
        { jp: "食・飲・肉・魚", pt: "Alimentação." },
        { jp: "山・川・海・雨・雪・風", pt: "Natureza e clima." },
        { jp: "上・下・左・右・前・後", pt: "Posições e direções." }
      ],
      keyPoints: [
        "Revise os kanji por grupos temáticos.",
        "Associe cada caractere a palavras conhecidas.",
        "Diferencie caracteres visualmente semelhantes.",
        "Pratique leituras on'yomi e kun'yomi em palavras reais.",
        "Não presuma que um kanji possui apenas uma leitura.",
        "Reconheça os caracteres dentro de frases."
      ]
    },
    {
      title: "Revisão da gramática fundamental",
      explanation: "Vamos reunir as estruturas gramaticais estudadas desde a primeira fase. Revise partículas como は, が, を, に, で, へ, と e も. Revise também formas verbais: presente educado, passado, negativo, forma て, forma ない e forma た. Inclua estruturas de desejo, intenção, comparação, pedidos, permissão e proibição. O objetivo é reconhecer essas estruturas e utilizá-las corretamente em frases completas.",
      examples: [
        { jp: "私は学生です。", pt: "Sou estudante." },
        { jp: "水を飲みます。", pt: "Bebo água." },
        { jp: "学校へ行きました。", pt: "Fui à escola." },
        { jp: "本を読んでいます。", pt: "Estou lendo um livro." },
        { jp: "日本語を勉強したいです。", pt: "Quero estudar japonês." },
        { jp: "明日、学校へ行くつもりです。", pt: "Pretendo ir à escola amanhã." },
        { jp: "これはあれより高いです。", pt: "Isto é mais caro do que aquilo." },
        { jp: "ここで写真を撮ってもいいですか。", pt: "Posso tirar fotos aqui?" }
      ],
      keyPoints: [
        "Revise as principais partículas.",
        "Diferencie presente, passado e negativo.",
        "Revise forma て, ない e た.",
        "Revise desejo com たい.",
        "Revise intenção com つもり.",
        "Revise comparações com より e ほうが.",
        "Revise pedidos, permissões e proibições."
      ]
    },
    {
      title: "Leitura integrada: os três sistemas e gramática",
      explanation: "Nesta aula, vamos ler um texto que combina hiragana, katakana, kanji e estruturas gramaticais estudadas. O objetivo é identificar palavras completas, reconhecer partículas, compreender as ações e acompanhar a sequência dos acontecimentos. Faça uma primeira leitura sem consultar a tradução. Depois, confira o significado e identifique os caracteres e estruturas que você reconheceu.",
      examples: [
        {
          jp: "私の週末\n土曜日、私は友だちとショッピングセンターへ行きました。新しい本とノートを買いました。その後、カフェでコーヒーを飲みました。友だちはケーキを食べました。日曜日は家で日本語を勉強しました。午後、テレビで映画を見ました。とても楽しい週末でした。",
          pt: "Meu fim de semana. No sábado, fui ao shopping com um amigo. Comprei um livro novo e um caderno. Depois, tomei café em uma cafeteria. Meu amigo comeu bolo. No domingo, estudei japonês em casa. À tarde, assisti a um filme na televisão. Foi um fim de semana muito divertido."
        },
        { jp: "週末（しゅうまつ）", pt: "Fim de semana." },
        { jp: "買いました（かいました）", pt: "Comprei." },
        { jp: "喫茶店（きっさてん）", pt: "Cafeteria tradicional." },
        { jp: "映画（えいが）", pt: "Filme." },
        { jp: "楽しい（たのしい）", pt: "Divertido." }
      ],
      keyPoints: [
        "Leia o texto inteiro antes da tradução.",
        "Identifique kanji, hiragana e katakana.",
        "Observe os verbos no passado.",
        "Reconheça palavras estrangeiras em katakana.",
        "Identifique informações de tempo e sequência.",
        "Compreenda a mensagem geral do texto."
      ]
    },
    {
      title: "Avaliação de consolidação da Fase 3",
      explanation: "A última aula é uma preparação para a avaliação da fase. O aluno deverá demonstrar que consegue reconhecer os três sistemas de escrita, compreender palavras com kanji, identificar leituras em vocabulário conhecido, escrever caracteres fundamentais e interpretar textos simples. A avaliação deve verificar a aplicação do conhecimento, não apenas a memorização de traduções. Para ser considerado preparado, o aluno precisa conseguir ler frases, compreender textos curtos e construir suas próprias respostas utilizando a gramática estudada.",
      examples: [
        { jp: "日本語を勉強しています。", pt: "Estou estudando japonês." },
        { jp: "毎日学校へ行きます。", pt: "Vou à escola todos os dias." },
        { jp: "昨日、友だちと映画を見ました。", pt: "Ontem, assisti a um filme com um amigo." },
        { jp: "明日は日本語の本を読むつもりです。", pt: "Amanhã, pretendo ler um livro de japonês." },
        { jp: "この店はあの店より安いです。", pt: "Esta loja é mais barata do que aquela." }
      ],
      keyPoints: [
        "Reconheça hiragana, katakana e kanji.",
        "Leia palavras completas com kanji.",
        "Escreva os caracteres fundamentais.",
        "Identifique partículas e conjugações.",
        "Interprete textos sem tradução palavra por palavra.",
        "Construa frases próprias.",
        "Demonstre compreensão geral da Fase 3."
      ]
    }
  ]
},


// ======================================================
// SEMANA 35 — GRAMÁTICA INTERMEDIÁRIA
// ======================================================

{
  title: "Gramática intermediária — Consolidando o japonês",
  goal: "Consolidar as estruturas gramaticais aprendidas anteriormente, compreender como elas se conectam e utilizá-las em frases mais elaboradas.",
  days: [
    {
      title: "Revisão das partículas em frases complexas",
      explanation: "As partículas indicam a função das palavras dentro de uma frase. Nesta etapa, precisamos ir além de reconhecer cada partícula isoladamente: devemos entender como várias delas trabalham juntas. は apresenta o assunto, が pode identificar o sujeito ou destacar uma informação, を marca frequentemente o objeto direto, に pode indicar destino, horário ou localização de existência, で pode indicar o local de uma ação ou o meio utilizado, へ indica direção, と pode indicar companhia ou citação, e から pode indicar origem ou motivo. Uma mesma frase pode utilizar várias partículas, cada uma com sua função. Observe o contexto para interpretar corretamente.",
      examples: [
        { jp: "私は学校で日本語を勉強します。", pt: "Eu estudo japonês na escola." },
        { jp: "友だちと図書館へ行きます。", pt: "Vou à biblioteca com um amigo." },
        { jp: "七時に家を出ます。", pt: "Saio de casa às sete horas." },
        { jp: "日本語が好きです。", pt: "Gosto de japonês." },
        { jp: "水を飲んでから、学校へ行きます。", pt: "Depois de beber água, vou à escola." },
        { jp: "家から駅まで歩きます。", pt: "Caminho de casa até a estação." }
      ],
      keyPoints: [
        "は apresenta o assunto da frase.",
        "が pode identificar ou destacar o sujeito.",
        "を marca frequentemente o objeto direto.",
        "に pode indicar horário, destino ou localização de existência.",
        "で pode indicar local de ação ou meio utilizado.",
        "へ indica direção.",
        "と pode indicar companhia ou citação.",
        "から pode indicar origem ou motivo."
      ]
    },
    {
      title: "Conectando ações e ideias",
      explanation: "Uma frase pode apresentar várias ações relacionadas. A forma て permite conectar ações e também aparece em pedidos, permissões e outras construções. Expressões como てから indicam que uma ação acontece depois de outra. たり...たりします apresenta exemplos de atividades realizadas, sem necessariamente indicar uma lista completa. そして conecta informações, enquanto でも introduz contraste. Aprender a conectar ideias permite produzir textos mais naturais e compreender frases maiores.",
      examples: [
        { jp: "朝ご飯を食べて、学校へ行きます。", pt: "Tomo café da manhã e vou à escola." },
        { jp: "宿題をしてから、ゲームをします。", pt: "Depois de fazer a lição de casa, jogo." },
        { jp: "日曜日は本を読んだり、音楽を聞いたりします。", pt: "Aos domingos, leio livros, escuto música e faço outras atividades." },
        { jp: "友だちに会いました。そして、一緒にご飯を食べました。", pt: "Encontrei um amigo. Depois, comemos juntos." },
        { jp: "日本語は難しいです。でも、面白いです。", pt: "Japonês é difícil. Mas é interessante." }
      ],
      keyPoints: [
        "A forma て conecta ações e aparece em várias construções.",
        "てから indica que uma ação acontece depois de outra.",
        "たり...たりします apresenta exemplos de atividades.",
        "そして conecta informações.",
        "でも introduz contraste.",
        "A escolha da conexão muda a relação entre as ideias."
      ]
    },
    {
      title: "Revisão das formas verbais",
      explanation: "Os verbos japoneses mudam de forma para expressar tempo, negação, pedidos, possibilidades e outras ideias. Nesta aula, vamos comparar formas já estudadas. A forma ます é educada e aparece em frases afirmativas no presente ou futuro. ません expressa negação. ました indica passado afirmativo. ませんでした indica passado negativo. A forma て aparece em construções como ています, e a forma de dicionário aparece em estruturas como つもりです. É importante reconhecer essas diferenças dentro de frases completas.",
      examples: [
        { jp: "食べます。", pt: "Como ou vou comer." },
        { jp: "食べません。", pt: "Não como ou não vou comer." },
        { jp: "食べました。", pt: "Comi." },
        { jp: "食べませんでした。", pt: "Não comi." },
        { jp: "食べています。", pt: "Estou comendo." },
        { jp: "食べたいです。", pt: "Quero comer." },
        { jp: "食べるつもりです。", pt: "Pretendo comer." }
      ],
      keyPoints: [
        "ます: forma educada afirmativa.",
        "ません: forma educada negativa.",
        "ました: passado afirmativo.",
        "ませんでした: passado negativo.",
        "ています: pode indicar ação em andamento ou estado resultante.",
        "たい: expressa desejo.",
        "つもり: expressa intenção."
      ]
    },
    {
      title: "Adjetivos e descrições mais elaboradas",
      explanation: "Os adjetivos japoneses podem ser divididos em dois grupos principais: adjetivos terminados em い e adjetivos do tipo な. Eles podem descrever pessoas, objetos, lugares e situações. Adjetivos do tipo い possuem conjugações próprias, como 高い, 高くない e 高かった. Adjetivos do tipo な utilizam estruturas diferentes, como 静かです, 静かではありません e 静かでした. Também podemos conectar descrições utilizando formas como 高くて e 静かで. Observe que a forma de conexão depende do grupo do adjetivo.",
      examples: [
        { jp: "この本は面白いです。", pt: "Este livro é interessante." },
        { jp: "この本は面白くないです。", pt: "Este livro não é interessante." },
        { jp: "昨日の映画は面白かったです。", pt: "O filme de ontem foi interessante." },
        { jp: "この町は静かです。", pt: "Esta cidade é tranquila." },
        { jp: "この町は静かではありません。", pt: "Esta cidade não é tranquila." },
        { jp: "この公園は広くて、静かです。", pt: "Este parque é amplo e tranquilo." },
        { jp: "この店はきれいで、便利です。", pt: "Esta loja é bonita e conveniente." }
      ],
      keyPoints: [
        "Adjetivos terminados em い possuem conjugações próprias.",
        "高い pode virar 高くない na forma negativa.",
        "Adjetivos do tipo な seguem outra estrutura.",
        "静かです é uma construção com adjetivo do tipo な.",
        "高くて conecta adjetivos do tipo い.",
        "静かで conecta descrições com adjetivos do tipo な."
      ]
    },
    {
      title: "Expressando motivos, opiniões e intenções",
      explanation: "Para compreender conversas mais elaboradas, precisamos reconhecer como as pessoas explicam motivos e apresentam opiniões. から pode indicar uma razão. と思います apresenta aquilo que alguém pensa ou considera. たい expressa desejo do falante, enquanto つもりです expressa uma intenção. Também podemos utilizar ので para apresentar uma razão de maneira geralmente mais suave ou explicativa. Essas estruturas ajudam a transformar frases simples em explicações completas.",
      examples: [
        { jp: "雨が降っていますから、家にいます。", pt: "Como está chovendo, fico em casa." },
        { jp: "日本語は面白いと思います。", pt: "Acho que japonês é interessante." },
        { jp: "日本へ行きたいです。", pt: "Quero ir ao Japão." },
        { jp: "来年、日本語を勉強するつもりです。", pt: "Pretendo estudar japonês no próximo ano." },
        { jp: "今日は忙しいので、行きません。", pt: "Como estou ocupado hoje, não vou." },
        { jp: "この本は難しいと思います。", pt: "Acho que este livro é difícil." }
      ],
      keyPoints: [
        "から apresenta motivos.",
        "ので também apresenta motivos e pode soar mais suave.",
        "と思います apresenta uma opinião ou pensamento.",
        "たい expressa desejo.",
        "つもりです expressa intenção.",
        "Diferencie uma vontade de um plano."
      ]
    },
    {
      title: "Produção de frases intermediárias",
      explanation: "Nesta última aula, vamos reunir as estruturas da semana para construir frases maiores. Uma frase intermediária pode apresentar um assunto, uma ação, uma justificativa e uma opinião. Primeiro, escolha o que deseja comunicar. Depois, organize as informações utilizando partículas e conjugações adequadas. Não tente traduzir uma frase longa palavra por palavra do português. Pense nas informações que deseja transmitir e construa a frase japonesa respeitando sua organização.",
      examples: [
        { jp: "私は日本語が好きですから、毎日勉強しています。", pt: "Como gosto de japonês, estudo todos os dias." },
        { jp: "昨日、友だちと映画を見てから、レストランへ行きました。", pt: "Ontem, depois de assistir a um filme com um amigo, fui a um restaurante." },
        { jp: "この町は静かで、とても住みやすいです。", pt: "Esta cidade é tranquila e muito fácil de morar." },
        { jp: "日本の文化は面白いと思います。", pt: "Acho que a cultura japonesa é interessante." },
        { jp: "週末は本を読んだり、音楽を聞いたりするつもりです。", pt: "Pretendo ler livros, escutar música e fazer outras atividades no fim de semana." }
      ],
      keyPoints: [
        "Combine mais de uma estrutura gramatical.",
        "Organize as informações antes de escrever.",
        "Revise partículas e conjugações.",
        "Utilize conectores para relacionar ideias.",
        "Construa frases próprias, não apenas copie exemplos.",
        "O objetivo é comunicar ideias completas."
      ]
    }
  ]
},

// ======================================================
// SEMANA 36 — CONDICIONAIS
// ======================================================

{
  title: "Condicionais — たら, なら e と",
  goal: "Compreender diferentes formas de expressar condições em japonês, distinguir seus usos e aplicar cada estrutura em situações adequadas.",
  days: [
    {
      title: "Introdução às condições em japonês",
      explanation: "Uma condição apresenta uma situação que precisa acontecer ou ser considerada para que outra situação ocorra. Em português, utilizamos expressões como 'se chover', 'se tiver tempo' e 'se estudar'. Em japonês existem diferentes construções condicionais. Nesta semana, vamos estudar principalmente たら, なら e と. Elas não são intercambiáveis em todas as situações. Cada uma apresenta características próprias, e a escolha depende do tipo de condição e da relação entre as duas partes da frase.",
      examples: [
        { jp: "雨が降ったら、家にいます。", pt: "Se chover, ficarei em casa." },
        { jp: "時間があったら、勉強します。", pt: "Se tiver tempo, estudarei." },
        { jp: "日本へ行くなら、京都も見てください。", pt: "Se você vai ao Japão, visite Kyoto também." },
        { jp: "春になると、花が咲きます。", pt: "Quando chega a primavera, as flores desabrocham." }
      ],
      keyPoints: [
        "Condições relacionam uma situação a outra.",
        "たら é uma construção condicional bastante versátil.",
        "なら considera uma situação ou informação como ponto de partida.",
        "と aparece frequentemente em consequências automáticas ou habituais.",
        "As três estruturas possuem usos diferentes."
      ]
    },
    {
      title: "Condicional たら",
      explanation: "A estrutura たら é formada a partir da forma passada simples, adicionando ら. Apesar de utilizar a forma passada na construção, ela não significa necessariamente que algo aconteceu no passado. Ela pode expressar uma condição futura ou hipotética. Com verbos, 食べる vira 食べたら, 行く vira 行ったら e する vira したら. Com adjetivos do tipo い, 高い vira 高かったら. Com adjetivos do tipo な e substantivos, podemos utilizar だったら. Essa estrutura é muito versátil e aparece em situações cotidianas.",
      examples: [
        { jp: "時間があったら、映画を見ます。", pt: "Se eu tiver tempo, assistirei a um filme." },
        { jp: "雨が降ったら、行きません。", pt: "Se chover, não irei." },
        { jp: "家に帰ったら、電話してください。", pt: "Quando chegar em casa, por favor, telefone." },
        { jp: "安かったら、買います。", pt: "Se for barato, comprarei." },
        { jp: "暇だったら、一緒に勉強しましょう。", pt: "Se estiver livre, vamos estudar juntos." },
        { jp: "学生だったら、この本を読んでください。", pt: "Se você é estudante, leia este livro." }
      ],
      keyPoints: [
        "たら é formado a partir da forma passada simples + ら.",
        "食べたら significa se comer ou quando comer.",
        "行ったら significa se for ou quando for.",
        "高かったら é a condição de um adjetivo do tipo い.",
        "暇だったら é a condição de um adjetivo do tipo な.",
        "たら pode expressar condições futuras e situações hipotéticas.",
        "O contexto determina a melhor tradução."
      ]
    },
    {
      title: "Condicional なら",
      explanation: "A estrutura なら é utilizada quando uma informação ou situação apresentada serve como ponto de partida para uma recomendação, comentário ou decisão. Ela pode ser traduzida como 'se for', 'se você está falando de' ou 'se pretende'. Diferentemente de たら, なら frequentemente considera algo que já foi mencionado ou uma situação que o falante está supondo. Sua forma básica pode ser observada em 日本なら, 学生なら e 行くなら. Não é necessário transformar o verbo em forma passada para utilizar なら.",
      examples: [
        { jp: "日本へ行くなら、京都へ行きたいです。", pt: "Se eu for ao Japão, quero ir a Kyoto." },
        { jp: "日本語を勉強するなら、この本がいいです。", pt: "Se você vai estudar japonês, este livro é bom." },
        { jp: "暇なら、一緒に行きませんか。", pt: "Se estiver livre, não quer ir comigo?" },
        { jp: "学生なら、この割引があります。", pt: "Se você é estudante, existe este desconto." },
        { jp: "魚なら、私は寿司が好きです。", pt: "Se estamos falando de peixe, gosto de sushi." },
        { jp: "買うなら、今がいいと思います。", pt: "Se pretende comprar, acho que agora é uma boa hora." }
      ],
      keyPoints: [
        "なら considera uma situação como ponto de partida.",
        "Pode aparecer depois de substantivos e adjetivos do tipo な.",
        "Com verbos, pode aparecer depois da forma de dicionário.",
        "É comum em recomendações e conselhos.",
        "Pode retomar um assunto mencionado anteriormente.",
        "Não possui exatamente o mesmo sentido de たら."
      ]
    },
    {
      title: "Condicional と",
      explanation: "A estrutura condicional と é utilizada frequentemente para expressar consequências naturais, automáticas, habituais ou resultados que acontecem quando determinada condição é cumprida. Ela aparece depois da forma simples do verbo ou de certas formas de adjetivos e substantivos. Por exemplo, 春になると significa quando chega a primavera. ボタンを押すと significa quando se aperta o botão. Essa construção não costuma ser a escolha adequada quando a segunda parte apresenta livremente um pedido, uma ordem ou uma decisão pessoal do falante. Ela é especialmente útil para descrever fenômenos, instruções e relações regulares.",
      examples: [
        { jp: "春になると、花が咲きます。", pt: "Quando chega a primavera, as flores desabrocham." },
        { jp: "このボタンを押すと、ドアが開きます。", pt: "Quando aperta este botão, a porta abre." },
        { jp: "右へ曲がると、駅があります。", pt: "Quando vira à direita, há uma estação." },
        { jp: "水を飲まないと、のどが渇きます。", pt: "Se não beber água, fica com sede." },
        { jp: "夜になると、暗くなります。", pt: "Quando chega a noite, escurece." },
        { jp: "この道をまっすぐ行くと、学校があります。", pt: "Se seguir reto por esta rua, encontrará uma escola." }
      ],
      keyPoints: [
        "と expressa consequências naturais, automáticas ou habituais.",
        "É comum em explicações de funcionamento.",
        "Aparece em instruções e descrições de caminhos.",
        "Pode descrever fenômenos naturais.",
        "Não costuma combinar com pedidos e ordens na segunda parte.",
        "A relação entre as duas partes precisa ser compatível com o uso de と."
      ]
    },
    {
      title: "Comparando たら, なら e と",
      explanation: "Agora vamos comparar as três construções. Imagine que alguém deseja visitar o Japão. たら pode apresentar uma condição geral: se eu for ao Japão, farei determinada coisa. なら pode considerar a informação de que alguém pretende viajar e oferecer uma recomendação. と pode apresentar uma consequência que acontece naturalmente ou regularmente. A diferença não está apenas na tradução portuguesa, mas também na relação entre as ideias. Observe o que o falante deseja comunicar antes de escolher a estrutura.",
      examples: [
        { jp: "日本へ行ったら、写真を撮ります。", pt: "Se eu for ao Japão, tirarei fotos." },
        { jp: "日本へ行くなら、京都がおすすめです。", pt: "Se você vai ao Japão, Kyoto é uma recomendação." },
        { jp: "春になると、暖かくなります。", pt: "Quando chega a primavera, fica mais quente." },
        { jp: "時間があったら、映画を見ます。", pt: "Se tiver tempo, assistirei a um filme." },
        { jp: "旅行するなら、早く予約したほうがいいです。", pt: "Se pretende viajar, é melhor reservar cedo." },
        { jp: "この道を行くと、駅に着きます。", pt: "Se seguir por este caminho, chegará à estação." }
      ],
      keyPoints: [
        "たら: condição versátil para situações reais ou hipotéticas.",
        "なら: considera uma situação como ponto de partida.",
        "と: consequência natural, automática ou habitual.",
        "A tradução portuguesa pode ser parecida.",
        "O contexto determina qual construção é mais apropriada.",
        "Não escolha apenas pela palavra 'se' na tradução."
      ]
    },
    {
      title: "Aplicação: criando frases condicionais",
      explanation: "Na última aula, você deverá produzir frases utilizando as três estruturas. Primeiro, pense em uma situação. Depois, decida se deseja apresentar uma condição geral, comentar uma informação já considerada ou descrever uma consequência natural. Finalmente, escolha たら, なら ou と. Tente criar frases sobre estudos, viagens, clima, alimentação e rotina. O objetivo é conseguir explicar relações entre acontecimentos, e não apenas memorizar as terminações.",
      examples: [
        { jp: "宿題が終わったら、ゲームをします。", pt: "Quando terminar a lição de casa, vou jogar." },
        { jp: "日本語を勉強するなら、毎日練習しましょう。", pt: "Se vai estudar japonês, vamos praticar todos os dias." },
        { jp: "冬になると、寒くなります。", pt: "Quando chega o inverno, fica frio." },
        { jp: "安かったら、この本を買います。", pt: "Se for barato, comprarei este livro." },
        { jp: "旅行するなら、カメラを持って行きます。", pt: "Se eu for viajar, levarei uma câmera." },
        { jp: "このボタンを押すと、電気がつきます。", pt: "Quando aperta este botão, a luz acende." }
      ],
      keyPoints: [
        "Crie frases com as três construções.",
        "Explique por que escolheu cada condicional.",
        "Use situações diferentes.",
        "Revise a formação de cada estrutura.",
        "Observe se a segunda parte combina com a condicional escolhida.",
        "O objetivo é utilizar condições de maneira natural."
      ]
    }
  ]
},

// ======================================================
// SEMANA 37 — POTENCIAL
// ======================================================

{
  title: "Forma potencial — Capacidade e possibilidade",
  goal: "Aprender a expressar capacidade e possibilidade em japonês, formar corretamente os verbos potenciais e utilizá-los em conversas e textos.",
  days: [
    {
      title: "O que é a forma potencial?",
      explanation: "A forma potencial dos verbos permite expressar que alguém consegue realizar uma ação ou que algo é possível. Em português, utilizamos expressões como 'consigo ler', 'posso falar' e 'ela consegue nadar'. Em japonês, podemos transformar o próprio verbo para transmitir essa ideia. Por exemplo, 読む significa ler e 読める significa conseguir ler. 話す significa falar e 話せる significa conseguir falar. Essa construção é diferente de simplesmente utilizar できます, embora ambas possam expressar capacidade em determinados contextos.",
      examples: [
        { jp: "日本語を話します。", pt: "Falo japonês." },
        { jp: "日本語が話せます。", pt: "Consigo falar japonês." },
        { jp: "漢字を読みます。", pt: "Leio kanji." },
        { jp: "漢字が読めます。", pt: "Consigo ler kanji." },
        { jp: "泳ぎます。", pt: "Nado." },
        { jp: "泳げます。", pt: "Consigo nadar." }
      ],
      keyPoints: [
        "A forma potencial expressa capacidade ou possibilidade.",
        "読む vira 読める.",
        "話す vira 話せる.",
        "泳ぐ vira 泳げる.",
        "A forma potencial modifica o próprio verbo.",
        "A partícula が é frequentemente utilizada com o objeto da habilidade."
      ]
    },
    {
      title: "Formação da forma potencial: verbos do grupo 1",
      explanation: "Os verbos do grupo 1, também chamados godan, formam o potencial mudando a última sílaba da linha do u para a linha do e e acrescentando る. Por exemplo, 書く vira 書ける, 読む vira 読める, 話す vira 話せる e 待つ vira 待てる. A terminação original determina a mudança. Verbos terminados em う mudam para える, como 買う → 買える. Essa transformação precisa ser praticada com diferentes verbos para que o aluno consiga reconhecer o padrão.",
      examples: [
        { jp: "書く → 書ける", pt: "Escrever → conseguir escrever." },
        { jp: "読む → 読める", pt: "Ler → conseguir ler." },
        { jp: "話す → 話せる", pt: "Falar → conseguir falar." },
        { jp: "待つ → 待てる", pt: "Esperar → conseguir esperar." },
        { jp: "買う → 買える", pt: "Comprar → conseguir comprar." },
        { jp: "泳ぐ → 泳げる", pt: "Nadar → conseguir nadar." },
        { jp: "遊ぶ → 遊べる", pt: "Brincar → conseguir brincar." },
        { jp: "帰る → 帰れる", pt: "Voltar → conseguir voltar." }
      ],
      keyPoints: [
        "Grupo 1: última sílaba da linha do u passa para a linha do e.",
        "Depois da mudança, acrescenta-se る.",
        "書く vira 書ける.",
        "読む vira 読める.",
        "話す vira 話せる.",
        "買う vira 買える.",
        "Pratique a transformação a partir da forma de dicionário."
      ]
    },
    {
      title: "Formação da forma potencial: grupo 2 e irregulares",
      explanation: "Os verbos do grupo 2 formam o potencial removendo る e acrescentando られる. Por exemplo, 食べる vira 食べられる e 見る vira 見られる. Na fala informal, algumas pessoas utilizam formas como 食べれる e 見れる, chamadas formas reduzidas ou ra-nuki. Entretanto, a forma padrão ensinada aqui é 食べられる e 見られる. Os verbos irregulares também precisam ser memorizados: する vira できる e 来る vira 来られる, lido こられる.",
      examples: [
        { jp: "食べる → 食べられる", pt: "Comer → conseguir comer." },
        { jp: "見る → 見られる", pt: "Ver → conseguir ver." },
        { jp: "起きる → 起きられる", pt: "Acordar → conseguir acordar." },
        { jp: "寝る → 寝られる", pt: "Dormir → conseguir dormir." },
        { jp: "する → できる", pt: "Fazer → conseguir fazer." },
        { jp: "来る → 来られる（こられる）", pt: "Vir → conseguir vir." },
        { jp: "今日は早く起きられます。", pt: "Hoje consigo acordar cedo." }
      ],
      keyPoints: [
        "Grupo 2: remova る e acrescente られる.",
        "食べる vira 食べられる.",
        "見る vira 見られる.",
        "する vira できる.",
        "来る vira 来られる, com leitura こられる.",
        "A forma padrão utiliza られる nos verbos do grupo 2.",
        "Não confunda o potencial com outras utilizações de られる."
      ]
    },
    {
      title: "Negação e passado da forma potencial",
      explanation: "A forma potencial também pode ser conjugada. Como a forma resultante geralmente se comporta como um verbo do grupo 2, podemos utilizar terminações como ます, ません, ました e ませんでした. Na forma informal, podemos utilizar ない e た. Assim, 読める vira 読めない na negativa e 読めた no passado afirmativo. Essas formas permitem explicar o que alguém consegue fazer, não consegue fazer ou conseguiu fazer em determinado momento.",
      examples: [
        { jp: "日本語が話せます。", pt: "Consigo falar japonês." },
        { jp: "日本語が話せません。", pt: "Não consigo falar japonês." },
        { jp: "漢字が読めました。", pt: "Consegui ler os kanji." },
        { jp: "漢字が読めませんでした。", pt: "Não consegui ler os kanji." },
        { jp: "今日は泳げない。", pt: "Hoje não consigo nadar." },
        { jp: "昨日、一人で行けた。", pt: "Ontem consegui ir sozinho." }
      ],
      keyPoints: [
        "A forma potencial pode ser conjugada normalmente.",
        "話せます é afirmativa educada.",
        "話せません é negativa educada.",
        "読めました indica capacidade no passado.",
        "読めない é negativa informal.",
        "行けた indica que foi possível ir ou que alguém conseguiu ir."
      ]
    },
    {
      title: "Potencial com partículas e situações reais",
      explanation: "Quando utilizamos a forma potencial, o objeto da habilidade frequentemente aparece com が, embora を também possa ocorrer em determinados contextos e estilos. Por isso, é importante reconhecer construções como 日本語が話せます e 漢字が読めます. Também podemos falar sobre lugares onde é possível realizar uma atividade, horários e condições. A forma potencial pode expressar capacidade pessoal, mas também disponibilidade ou possibilidade oferecida por uma situação.",
      examples: [
        { jp: "私は日本語が少し話せます。", pt: "Consigo falar um pouco de japonês." },
        { jp: "この漢字が読めますか。", pt: "Você consegue ler este kanji?" },
        { jp: "ここで写真が撮れます。", pt: "É possível tirar fotos aqui." },
        { jp: "この店ではカードが使えます。", pt: "Nesta loja, é possível usar cartão." },
        { jp: "今日は時間がありませんから、行けません。", pt: "Como não tenho tempo hoje, não consigo ir." },
        { jp: "私は一人で料理ができます。", pt: "Consigo cozinhar sozinho." }
      ],
      keyPoints: [
        "が aparece frequentemente com a forma potencial.",
        "A forma potencial pode indicar capacidade pessoal.",
        "Também pode indicar possibilidade oferecida por um lugar ou situação.",
        "使えます significa que algo pode ser utilizado.",
        "撮れます significa que é possível tirar uma foto.",
        "Observe a relação entre o verbo e a partícula."
      ]
    },
    {
      title: "Produção: falando sobre o que consigo fazer",
      explanation: "Na última aula, vamos utilizar a forma potencial para falar sobre habilidades e possibilidades. O aluno deverá apresentar coisas que consegue fazer, atividades que ainda não consegue realizar e coisas que conseguiu fazer no passado. Também deverá formular perguntas sobre as habilidades de outras pessoas. O objetivo é utilizar a forma potencial espontaneamente, sem precisar reconstruir todas as regras mentalmente a cada frase.",
      examples: [
        { jp: "私は日本語の本が少し読めます。", pt: "Consigo ler um pouco de livros em japonês." },
        { jp: "弟は自転車に乗れます。", pt: "Meu irmão mais novo consegue andar de bicicleta." },
        { jp: "友だちは五つの料理が作れます。", pt: "Meu amigo consegue preparar cinco pratos." },
        { jp: "昨日、難しい漢字が読めました。", pt: "Ontem, consegui ler um kanji difícil." },
        { jp: "あなたは何語が話せますか。", pt: "Quais idiomas você consegue falar?" },
        { jp: "ここで泳げますか。", pt: "É possível nadar aqui?" }
      ],
      keyPoints: [
        "Fale sobre habilidades pessoais.",
        "Formule perguntas utilizando a forma potencial.",
        "Utilize formas afirmativas e negativas.",
        "Diferencie capacidade atual de capacidade no passado.",
        "Utilize a forma potencial em situações reais.",
        "O objetivo é expressar possibilidades com naturalidade."
      ]
    }
  ]
},

// ======================================================
// SEMANA 38 — EXPERIÊNCIA
// ======================================================

{
  title: "Experiência — Falar sobre coisas que já fez",
  goal: "Aprender a falar sobre experiências anteriores utilizando たことがある, diferenciar experiência de acontecimento passado e conversar sobre vivências.",
  days: [
    {
      title: "Como expressar experiências em japonês",
      explanation: "Em português, podemos dizer 'já viajei', 'já comi sushi' ou 'nunca visitei o Japão'. Em japonês, uma estrutura muito utilizada para falar de experiências é a forma passada simples do verbo seguida de ことがある. Por exemplo, 食べたことがある significa já ter comido alguma coisa. Essa construção não está simplesmente contando o que aconteceu ontem: ela informa que determinada experiência já ocorreu alguma vez na vida. O contexto ajuda a entender se estamos falando de uma experiência positiva, negativa ou inexistente.",
      examples: [
        { jp: "日本へ行ったことがあります。", pt: "Já fui ao Japão." },
        { jp: "寿司を食べたことがあります。", pt: "Já comi sushi." },
        { jp: "富士山を見たことがあります。", pt: "Já vi o Monte Fuji." },
        { jp: "馬に乗ったことがあります。", pt: "Já andei a cavalo." },
        { jp: "日本語で話したことがあります。", pt: "Já conversei em japonês." }
      ],
      keyPoints: [
        "A estrutura é verbo na forma た + ことがある.",
        "Expressa uma experiência que aconteceu alguma vez.",
        "食べたことがあります significa já comi.",
        "行ったことがあります significa já fui.",
        "A estrutura não indica necessariamente quando a experiência aconteceu.",
        "Diferencie experiência de acontecimento específico no passado."
      ]
    },
    {
      title: "Formando たことがある",
      explanation: "Para utilizar essa estrutura, primeiro precisamos transformar o verbo para a forma た. Depois acrescentamos ことがある. Verbos do grupo 2 como 食べる viram 食べた. Verbos do grupo 1 seguem as mudanças da forma た, como 書く → 書いた, 読む → 読んだ e 話す → 話した. Os irregulares são する → した e 来る → 来た. Depois da transformação, acrescentamos ことがあります para formar a versão educada. É importante praticar a transformação antes de construir a frase completa.",
      examples: [
        { jp: "食べる → 食べた → 食べたことがあります", pt: "Comer → comeu → já comeu." },
        { jp: "見る → 見た → 見たことがあります", pt: "Ver → viu → já viu." },
        { jp: "読む → 読んだ → 読んだことがあります", pt: "Ler → leu → já leu." },
        { jp: "書く → 書いた → 書いたことがあります", pt: "Escrever → escreveu → já escreveu." },
        { jp: "する → した → したことがあります", pt: "Fazer → fez → já fez." },
        { jp: "来る → 来た → 来たことがあります", pt: "Vir → veio → já veio." }
      ],
      keyPoints: [
        "Primeiro transforme o verbo para a forma た.",
        "Depois acrescente ことがあります.",
        "食べる vira 食べた.",
        "読む vira 読んだ.",
        "書く vira 書いた.",
        "する vira した.",
        "来る vira 来た."
      ]
    },
    {
      title: "Experiências negativas: nunca fiz",
      explanation: "Para expressar que nunca tivemos determinada experiência, utilizamos a forma negativa da estrutura: verbo na forma た + ことがありません. Por exemplo, 日本へ行ったことがありません significa nunca fui ao Japão. Essa construção comunica ausência de experiência até o momento. Também podemos utilizar expressões como 一度も, que significa nem uma vez, para reforçar a ideia de que algo nunca aconteceu. É importante observar que o verbo continua na forma た, mesmo quando a frase expressa uma experiência negativa.",
      examples: [
        { jp: "日本へ行ったことがありません。", pt: "Nunca fui ao Japão." },
        { jp: "寿司を食べたことがありません。", pt: "Nunca comi sushi." },
        { jp: "富士山を見たことがありません。", pt: "Nunca vi o Monte Fuji." },
        { jp: "一度も飛行機に乗ったことがありません。", pt: "Nunca andei de avião nem uma vez." },
        { jp: "日本語で手紙を書いたことがありません。", pt: "Nunca escrevi uma carta em japonês." }
      ],
      keyPoints: [
        "A forma negativa é verbo na forma た + ことがありません.",
        "O verbo permanece na forma passada dentro da estrutura.",
        "ことがありません indica ausência de experiência.",
        "一度も reforça a ideia de nunca.",
        "Não confunda a experiência negativa com uma ação que não aconteceu ontem."
      ]
    },
    {
      title: "Perguntando sobre experiências",
      explanation: "Podemos utilizar a estrutura たことがありますか para perguntar se alguém já realizou determinada atividade. Para responder afirmativamente, utilizamos はい、あります. Para responder negativamente, podemos dizer いいえ、ありません. Também podemos perguntar quantas vezes alguém realizou uma atividade utilizando 何回. A estrutura permite manter conversas sobre viagens, comidas, esportes, filmes, estudos e diversas experiências pessoais.",
      examples: [
        { jp: "日本へ行ったことがありますか。", pt: "Você já foi ao Japão?" },
        { jp: "はい、あります。", pt: "Sim, já fui." },
        { jp: "いいえ、ありません。", pt: "Não, nunca fui." },
        { jp: "寿司を食べたことがありますか。", pt: "Você já comeu sushi?" },
        { jp: "日本の映画を見たことがありますか。", pt: "Você já assistiu a um filme japonês?" },
        { jp: "何回日本へ行ったことがありますか。", pt: "Quantas vezes você já foi ao Japão?" }
      ],
      keyPoints: [
        "たことがありますか pergunta sobre experiências.",
        "はい、あります é uma resposta afirmativa possível.",
        "いいえ、ありません é uma resposta negativa possível.",
        "何回 pergunta quantas vezes.",
        "A estrutura pode ser usada para conversar sobre diferentes atividades.",
        "Responda com informações adicionais quando quiser continuar a conversa."
      ]
    },
    {
      title: "Experiência versus passado específico",
      explanation: "Uma diferença muito importante é saber quando utilizar たことがある e quando simplesmente utilizar a forma passada. A forma passada relata um acontecimento específico ou uma ação concluída. Já たことがある apresenta uma experiência acumulada ao longo da vida. Compare '昨日、寿司を食べました', que significa que comi sushi ontem, com '寿司を食べたことがあります', que significa que já comi sushi alguma vez. As duas frases podem falar da mesma atividade, mas apresentam informações diferentes.",
      examples: [
        { jp: "昨日、映画を見ました。", pt: "Ontem, assisti a um filme." },
        { jp: "映画を見たことがあります。", pt: "Já assisti a um filme alguma vez." },
        { jp: "去年、日本へ行きました。", pt: "Fui ao Japão no ano passado." },
        { jp: "日本へ行ったことがあります。", pt: "Já fui ao Japão." },
        { jp: "先週、馬に乗りました。", pt: "Andei a cavalo na semana passada." },
        { jp: "馬に乗ったことがあります。", pt: "Já andei a cavalo alguma vez." }
      ],
      keyPoints: [
        "Forma passada relata uma ação concluída.",
        "たことがある expressa experiência anterior.",
        "Ontem, semana passada e ano passado indicam períodos específicos.",
        "Uma experiência não precisa apresentar uma data específica.",
        "O contexto determina qual estrutura é adequada."
      ]
    },
    {
      title: "Conversação: contando experiências",
      explanation: "Na última aula, vamos construir conversas sobre experiências pessoais. O aluno deverá perguntar, responder e acrescentar detalhes sobre quando, onde e com quem realizou uma atividade. Depois de responder se já teve uma experiência, pode continuar a conversa utilizando frases no passado para contar um acontecimento específico. Essa combinação permite transformar uma resposta curta em uma conversa completa.",
      examples: [
        { jp: "A：日本へ行ったことがありますか。", pt: "A: Você já foi ao Japão?" },
        { jp: "B：いいえ、ありません。でも、日本へ行きたいです。", pt: "B: Não, nunca fui. Mas quero ir ao Japão." },
        { jp: "A：日本の料理を食べたことがありますか。", pt: "A: Você já comeu comida japonesa?" },
        { jp: "B：はい、あります。昨日、寿司を食べました。", pt: "B: Sim, já comi. Ontem, comi sushi." },
        { jp: "A：どうでしたか。", pt: "A: Como foi?" },
        { jp: "B：とてもおいしかったです。", pt: "B: Estava muito gostoso." }
      ],
      keyPoints: [
        "Pergunte sobre experiências.",
        "Responda afirmativamente e negativamente.",
        "Acrescente detalhes de acontecimentos específicos.",
        "Utilize adjetivos para descrever experiências.",
        "Mantenha uma conversa com perguntas e respostas.",
        "O objetivo é falar sobre vivências com naturalidade."
      ]
    }
  ]
},

// ======================================================
// SEMANA 39 — DAR E RECEBER
// ======================================================

{
  title: "Dar e receber — あげる・くれる・もらう",
  goal: "Compreender a perspectiva de quem dá e de quem recebe, utilizar corretamente あげる, くれる e もらう e reconhecer essas estruturas em conversas.",
  days: [
    {
      title: "Como o japonês expressa dar e receber",
      explanation: "Em japonês, os verbos utilizados para dar e receber dependem da perspectiva de quem está falando. あげる é utilizado quando alguém dá algo a outra pessoa, geralmente considerando uma direção que vai do falante ou de alguém próximo para outra pessoa. くれる é utilizado quando alguém dá algo ao falante ou a alguém do grupo do falante. もらう é utilizado quando alguém recebe algo de outra pessoa. Em português, podemos traduzir os três utilizando ideias parecidas, mas em japonês a escolha revela quem está dando e quem está recebendo. Por isso, observe cuidadosamente as pessoas envolvidas.",
      examples: [
        { jp: "私は友だちに本をあげました。", pt: "Dei um livro a um amigo." },
        { jp: "友だちは私に本をくれました。", pt: "Meu amigo me deu um livro." },
        { jp: "私は友だちに本をもらいました。", pt: "Recebi um livro de um amigo." },
        { jp: "母は弟にお菓子をあげました。", pt: "Minha mãe deu doces ao meu irmão mais novo." },
        { jp: "先生は私に本をくれました。", pt: "O professor me deu um livro." }
      ],
      keyPoints: [
        "あげる: alguém dá algo a outra pessoa.",
        "くれる: alguém dá algo ao falante ou ao grupo do falante.",
        "もらう: alguém recebe algo.",
        "A perspectiva do falante influencia a escolha do verbo.",
        "Observe quem dá e quem recebe.",
        "A mesma situação pode ser descrita com perspectivas diferentes."
      ]
    },
    {
      title: "Utilizando あげる",
      explanation: "あげる expressa que alguém dá algo a outra pessoa. A pessoa que dá normalmente aparece marcada por は ou が, enquanto a pessoa que recebe pode aparecer com に. O objeto dado aparece frequentemente com を. A estrutura básica é: quem dá + に + objeto + を + あげる. Quando o falante dá algo a um amigo, pode dizer 友だちに本をあげました. Também é possível falar de outra pessoa dando algo a alguém. A escolha de あげる depende da direção da ação e da relação entre os participantes.",
      examples: [
        { jp: "私は妹に花をあげました。", pt: "Dei flores à minha irmã mais nova." },
        { jp: "田中さんは友だちにプレゼントをあげました。", pt: "Tanaka deu um presente a um amigo." },
        { jp: "父は母に時計をあげました。", pt: "Meu pai deu um relógio à minha mãe." },
        { jp: "私は弟におもちゃをあげます。", pt: "Vou dar um brinquedo ao meu irmão mais novo." },
        { jp: "友だちに何をあげましたか。", pt: "O que você deu ao seu amigo?" }
      ],
      keyPoints: [
        "あげる expressa uma ação de dar.",
        "A pessoa que recebe pode ser marcada com に.",
        "O objeto dado aparece frequentemente com を.",
        "私は妹に花をあげました significa dei flores à minha irmã.",
        "O verbo muda conforme o tempo e a forma de tratamento.",
        "Observe a direção da ação."
      ]
    },
    {
      title: "Utilizando くれる",
      explanation: "くれる é utilizado quando outra pessoa dá algo ao falante ou a alguém considerado parte de seu grupo. A pessoa que dá pode aparecer com は ou が, e a pessoa que recebe pode ser indicada por に. Quando o falante é o destinatário, ele frequentemente não precisa ser mencionado, pois já está implícito no uso de くれる. Por exemplo, 友だちが本をくれました significa que um amigo me deu um livro. Essa construção mostra a perspectiva de quem recebe o benefício.",
      examples: [
        { jp: "友だちが私に本をくれました。", pt: "Meu amigo me deu um livro." },
        { jp: "母がケーキをくれました。", pt: "Minha mãe me deu um bolo." },
        { jp: "先生が私に辞書をくれました。", pt: "O professor me deu um dicionário." },
        { jp: "兄が新しい時計をくれました。", pt: "Meu irmão mais velho me deu um relógio novo." },
        { jp: "何をくれましたか。", pt: "O que deram a você?" }
      ],
      keyPoints: [
        "くれる expressa que alguém dá algo ao falante ou ao seu grupo.",
        "O destinatário pode ficar implícito.",
        "A pessoa que dá pode aparecer com は ou が.",
        "私に pode ser utilizado para deixar claro quem recebeu.",
        "Não escolha くれる apenas porque a frase contém a palavra 'dar'.",
        "Considere a perspectiva de quem fala."
      ]
    },
    {
      title: "Utilizando もらう",
      explanation: "もらう expressa receber algo de outra pessoa. O destinatário normalmente aparece como sujeito da frase, enquanto a pessoa de quem se recebe pode aparecer marcada por に ou から. A estrutura básica é: quem recebe + は + pessoa de origem + に ou から + objeto + を + もらう. Por exemplo, 私は友だちに本をもらいました significa recebi um livro de um amigo. A diferença em relação a くれる está na perspectiva: くれる apresenta a ação de dar, enquanto もらう apresenta a ação de receber.",
      examples: [
        { jp: "私は友だちにプレゼントをもらいました。", pt: "Recebi um presente de um amigo." },
        { jp: "妹は母からお金をもらいました。", pt: "Minha irmã mais nova recebeu dinheiro da mãe." },
        { jp: "私は先生に本をもらいました。", pt: "Recebi um livro do professor." },
        { jp: "兄は友だちから手紙をもらいました。", pt: "Meu irmão mais velho recebeu uma carta de um amigo." },
        { jp: "誰からプレゼントをもらいましたか。", pt: "De quem você recebeu o presente?" }
      ],
      keyPoints: [
        "もらう expressa receber.",
        "O destinatário é o sujeito da frase.",
        "に ou から podem indicar de quem algo foi recebido.",
        "を marca o objeto recebido.",
        "から destaca a origem ou fonte.",
        "A perspectiva é diferente de くれる."
      ]
    },
    {
      title: "Comparando あげる, くれる e もらう",
      explanation: "Vamos comparar as três estruturas utilizando uma mesma situação. Imagine que um amigo deu um livro ao falante. Podemos dizer 友だちが私に本をくれました, destacando que o amigo deu o livro ao falante. Também podemos dizer 私は友だちに本をもらいました, destacando que o falante recebeu o livro. Se o falante der um livro ao amigo, utilizaremos あげる: 私は友だちに本をあげました. A escolha não depende somente de quem está envolvido, mas também da perspectiva que a frase deseja apresentar.",
      examples: [
        { jp: "私は友だちに本をあげました。", pt: "Eu dei um livro ao meu amigo." },
        { jp: "友だちは私に本をくれました。", pt: "Meu amigo me deu um livro." },
        { jp: "私は友だちに本をもらいました。", pt: "Eu recebi um livro do meu amigo." },
        { jp: "母は弟に服をあげました。", pt: "Minha mãe deu roupas ao meu irmão mais novo." },
        { jp: "弟は母から服をもらいました。", pt: "Meu irmão mais novo recebeu roupas da minha mãe." }
      ],
      keyPoints: [
        "あげる destaca quem dá algo a outra pessoa.",
        "くれる destaca alguém dando algo ao falante ou ao seu grupo.",
        "もらう destaca quem recebe algo.",
        "Uma mesma situação pode ser descrita por perspectivas diferentes.",
        "Observe sujeito, destinatário e objeto.",
        "A direção da ação determina a escolha do verbo."
      ]
    },
    {
      title: "Conversação: presentes e favores",
      explanation: "Nesta última aula, vamos praticar os três verbos em situações de conversa. O aluno deverá falar sobre presentes recebidos, presentes oferecidos e situações em que alguém recebeu algo. Também vamos introduzir uma observação importante: as formas estudadas podem ser utilizadas para descrever ações de dar e receber objetos. Mais adiante, existem construções com てあげる, てくれる e てもらう, que expressam ações realizadas como benefício para alguém. Elas serão estudadas separadamente, pois acrescentam uma ideia gramatical nova.",
      examples: [
        { jp: "A：誕生日に何をもらいましたか。", pt: "A: O que você recebeu no aniversário?" },
        { jp: "B：友だちに本をもらいました。", pt: "B: Recebi um livro de um amigo." },
        { jp: "A：誰にプレゼントをあげましたか。", pt: "A: Para quem você deu um presente?" },
        { jp: "B：妹にプレゼントをあげました。", pt: "B: Dei um presente à minha irmã mais nova." },
        { jp: "A：先生は何をくれましたか。", pt: "A: O que o professor deu a você?" },
        { jp: "B：日本語の辞書をくれました。", pt: "B: Ele me deu um dicionário de japonês." }
      ],
      keyPoints: [
        "Utilize os três verbos em conversas.",
        "Pergunte sobre presentes recebidos.",
        "Explique para quem deu algo.",
        "Identifique a perspectiva do falante.",
        "Diferencie receber de alguém e alguém dar a você.",
        "As construções com てあげる, てくれる e てもらう serão estudadas posteriormente."
      ]
    }
  ]
},

// ======================================================
// SEMANA 40 — FRASES RELATIVAS
// ======================================================

{
  title: "Frases relativas — Informações dentro de outras frases",
  goal: "Compreender como o japonês utiliza orações que descrevem substantivos, reconhecer a ordem das informações e construir frases relativas.",
  days: [
    {
      title: "O que são frases relativas?",
      explanation: "Uma frase relativa é uma parte da frase que fornece informações sobre um substantivo. Em português, dizemos 'o livro que eu comprei', 'a pessoa que mora aqui' ou 'o filme que assistimos'. Em japonês, a informação que descreve o substantivo aparece antes dele. Não existe uma palavra equivalente obrigatória a 'que' nessa construção. Por exemplo, 私が買った本 significa o livro que eu comprei. A parte 私が買った descreve 本. Essa organização é muito importante para compreender frases maiores em japonês.",
      examples: [
        { jp: "私が買った本", pt: "O livro que eu comprei." },
        { jp: "友だちが作った料理", pt: "A comida que meu amigo preparou." },
        { jp: "昨日見た映画", pt: "O filme que assisti ontem." },
        { jp: "日本に住んでいる人", pt: "A pessoa que mora no Japão." },
        { jp: "母が作ったケーキ", pt: "O bolo que minha mãe preparou." }
      ],
      keyPoints: [
        "A informação descritiva aparece antes do substantivo.",
        "Não existe uma palavra obrigatória equivalente a 'que'.",
        "私が買った descreve 本.",
        "昨日見た descreve 映画.",
        "A frase relativa ajuda a acrescentar informações sem criar outra frase independente.",
        "Leia a estrutura da esquerda para a direita, identificando o substantivo descrito."
      ]
    },
    {
      title: "Como construir uma frase relativa",
      explanation: "Para construir uma frase relativa, primeiro pense no substantivo que deseja descrever. Depois, forme uma frase que apresente uma informação sobre ele e coloque essa informação antes do substantivo. O verbo da parte descritiva aparece em uma forma simples, não na forma educada ます. Por exemplo, 'o livro que li' fica 私が読んだ本. A frase descritiva 私が読んだ aparece antes de 本. Não é necessário acrescentar uma palavra correspondente a 'que'. A relação entre as partes é compreendida pela ordem da construção.",
      examples: [
        { jp: "私が読んだ本", pt: "O livro que eu li." },
        { jp: "友だちが買ったカメラ", pt: "A câmera que meu amigo comprou." },
        { jp: "父が作る料理", pt: "A comida que meu pai prepara." },
        { jp: "先生が書いた文章", pt: "O texto que o professor escreveu." },
        { jp: "昨日食べたケーキ", pt: "O bolo que comi ontem." },
        { jp: "私が勉強している日本語", pt: "O japonês que estou estudando." }
      ],
      keyPoints: [
        "Identifique o substantivo que será descrito.",
        "Coloque a informação descritiva antes dele.",
        "Utilize a forma simples do verbo.",
        "Não acrescente uma palavra obrigatória equivalente a 'que'.",
        "A parte descritiva pode ser afirmativa, negativa ou estar no passado.",
        "A estrutura funciona com diferentes tipos de substantivos."
      ]
    },
    {
      title: "Frases relativas com verbos no passado e presente",
      explanation: "A informação que descreve um substantivo pode apresentar ações no presente ou no passado. Se o verbo está na forma simples presente, a descrição pode indicar um hábito, uma característica ou uma ação atual. Se está na forma passada, pode indicar uma ação concluída. Por exemplo, 私が読む本 significa o livro que eu leio, enquanto 私が読んだ本 significa o livro que eu li. A diferença está na forma verbal utilizada dentro da descrição. É importante não confundir o tempo da frase relativa com o restante da frase principal.",
      examples: [
        { jp: "私が読む本は面白いです。", pt: "O livro que eu leio é interessante." },
        { jp: "私が読んだ本は面白かったです。", pt: "O livro que eu li era interessante." },
        { jp: "母が作る料理はおいしいです。", pt: "A comida que minha mãe prepara é gostosa." },
        { jp: "母が作った料理を食べました。", pt: "Comi a comida que minha mãe preparou." },
        { jp: "昨日買った服を着ています。", pt: "Estou usando a roupa que comprei ontem." }
      ],
      keyPoints: [
        "A forma simples presente pode indicar hábitos ou ações atuais.",
        "A forma passada pode indicar uma ação concluída.",
        "読む本: livro que leio.",
        "読んだ本: livro que li.",
        "A frase principal pode apresentar um tempo verbal diferente.",
        "Observe a função de cada parte da frase."
      ]
    },
    {
      title: "Frases relativas com adjetivos e substantivos",
      explanation: "As frases relativas não são utilizadas somente com verbos. Também podemos descrever substantivos com adjetivos e informações nominais. Por exemplo, 静かな町 significa uma cidade tranquila. きれいな花 significa uma flor bonita. Quando utilizamos uma oração completa com substantivo e だ, a forma que aparece antes do substantivo pode ser diferente daquela utilizada em uma oração com verbo. Por exemplo, 学生だった人 significa a pessoa que era estudante. Para adjetivos do tipo な, observe a utilização de な quando o adjetivo descreve diretamente o substantivo.",
      examples: [
        { jp: "静かな町", pt: "Uma cidade tranquila." },
        { jp: "きれいな花", pt: "Uma flor bonita." },
        { jp: "有名な人", pt: "Uma pessoa famosa." },
        { jp: "高い山", pt: "Uma montanha alta." },
        { jp: "昨日は静かだった町", pt: "A cidade que estava tranquila ontem." },
        { jp: "学生だった人", pt: "A pessoa que era estudante." }
      ],
      keyPoints: [
        "Adjetivos do tipo な utilizam な antes do substantivo.",
        "Adjetivos do tipo い normalmente aparecem diretamente antes do substantivo.",
        "静かな町 significa cidade tranquila.",
        "高い山 significa montanha alta.",
        "学生だった人 significa a pessoa que era estudante.",
        "Diferencie adjetivos que descrevem diretamente um substantivo de orações completas."
      ]
    },
    {
      title: "Frases relativas em textos maiores",
      explanation: "Agora vamos interpretar frases relativas dentro de textos. Quando uma informação aparece antes de um substantivo, procure identificar qual palavra está sendo descrita. Uma oração relativa pode conter sujeito, objeto, partículas e até outras informações. Por isso, a frase pode parecer longa antes de chegar ao substantivo principal. Em vez de traduzir tudo imediatamente, identifique primeiro o núcleo da expressão: qual pessoa, objeto ou lugar está sendo descrito? Depois, interprete a informação que aparece antes dele.",
      examples: [
        {
          jp: "昨日、友だちが紹介した本を買いました。その本は日本の歴史について書いています。私が今読んでいる本は少し難しいですが、とても面白いです。",
          pt: "Ontem, comprei o livro que meu amigo apresentou. Esse livro fala sobre a história do Japão. O livro que estou lendo agora é um pouco difícil, mas muito interessante."
        },
        { jp: "友だちが紹介した本", pt: "O livro que meu amigo apresentou." },
        { jp: "日本の歴史", pt: "História do Japão." },
        { jp: "私が今読んでいる本", pt: "O livro que estou lendo agora." },
        { jp: "少し難しい", pt: "Um pouco difícil." },
        { jp: "とても面白い", pt: "Muito interessante." }
      ],
      keyPoints: [
        "Identifique o substantivo principal.",
        "Observe a informação que aparece antes dele.",
        "Orações relativas podem conter várias partículas.",
        "Uma frase relativa pode aparecer dentro de um texto maior.",
        "Procure compreender a relação entre as informações.",
        "Não traduza automaticamente cada palavra na ordem do português."
      ]
    },
    {
      title: "Produção: criando frases relativas",
      explanation: "Na última aula, você deverá criar frases relativas próprias. Comece com substantivos simples, como 本, 人, 映画 e 料理. Depois, acrescente informações: quem comprou o livro, quem viu o filme ou quem preparou a comida. Utilize verbos no presente, no passado e em construções contínuas. Em seguida, produza frases completas nas quais a expressão relativa apareça como sujeito ou objeto. O objetivo é conseguir colocar informações dentro de outras frases, tornando sua comunicação mais detalhada.",
      examples: [
        { jp: "私が昨日買った本は高いです。", pt: "O livro que comprei ontem é caro." },
        { jp: "日本に住んでいる友だちがいます。", pt: "Tenho um amigo que mora no Japão." },
        { jp: "母が作った料理を食べました。", pt: "Comi a comida que minha mãe preparou." },
        { jp: "私が見たい映画は日本の映画です。", pt: "O filme que quero assistir é um filme japonês." },
        { jp: "先生が教えている学生は私の友だちです。", pt: "O estudante que o professor está ensinando é meu amigo." },
        { jp: "昨日会った人は私の先生です。", pt: "A pessoa que encontrei ontem é meu professor." }
      ],
      keyPoints: [
        "Crie expressões relativas com substantivos diferentes.",
        "Utilize verbos no presente e no passado.",
        "Utilize informações de tempo e lugar.",
        "Coloque a expressão relativa antes do substantivo.",
        "Construa frases completas com as expressões.",
        "O objetivo é descrever pessoas, objetos e situações com mais detalhes."
      ]
    }
  ]
},


// ======================================================
// SEMANA 41 — CONECTORES E ESTRUTURAS COMPLEXAS
// ======================================================

{
  title: "Conectores e estruturas complexas",
  goal: "Aprender a conectar pensamentos, apresentar contrastes, explicar motivos, acrescentar informações e construir frases mais elaboradas.",
  days: [
    {
      title: "Conectando pensamentos com けれども",
      explanation: "A expressão けれども é utilizada para conectar duas ideias que apresentam algum contraste. Pode ser traduzida como 'mas', 'embora' ou 'apesar de'. Na linguagem cotidiana, também aparecem as formas けれど e けど. A primeira parte apresenta uma informação e a segunda acrescenta uma ideia que contrasta com ela. Diferentemente de simplesmente utilizar でも no início de outra frase, けれども conecta diretamente duas partes. É importante reconhecer suas diferentes formas, pois けど é bastante comum em conversas informais.",
      examples: [
        { jp: "日本語は難しいけれども、面白いです。", pt: "Japonês é difícil, mas interessante." },
        { jp: "雨が降っていますけど、学校へ行きます。", pt: "Está chovendo, mas vou à escola." },
        { jp: "この本は長いけれど、読みやすいです。", pt: "Este livro é longo, mas fácil de ler." },
        { jp: "忙しいけど、毎日勉強しています。", pt: "Estou ocupado, mas estudo todos os dias." },
        { jp: "行きたいけれども、時間がありません。", pt: "Quero ir, mas não tenho tempo." }
      ],
      keyPoints: [
        "けれども conecta ideias contrastantes.",
        "けれど e けど são formas mais curtas.",
        "けど é muito comum na linguagem informal.",
        "Pode conectar adjetivos, verbos e outras construções.",
        "Diferencie けど de でも.",
        "Observe como a segunda ideia contrasta com a primeira."
      ]
    },
    {
      title: "Expressando contraste com のに",
      explanation: "A estrutura のに apresenta uma situação inesperada ou contrária à expectativa. Pode ser traduzida como 'apesar de', 'mesmo que' ou 'embora'. Ela transmite um contraste mais forte de expectativa do que uma simples oposição. Por exemplo, 勉強したのに、分かりません significa 'apesar de ter estudado, não entendi'. A primeira parte cria uma expectativa, enquanto a segunda apresenta um resultado diferente do esperado. Com verbos e adjetivos do tipo い, utiliza-se a forma simples seguida de のに. Com adjetivos do tipo な e substantivos, utiliza-se normalmente なのに.",
      examples: [
        { jp: "たくさん勉強したのに、忘れました。", pt: "Apesar de ter estudado bastante, esqueci." },
        { jp: "雨が降っているのに、彼は外にいます。", pt: "Apesar de estar chovendo, ele está lá fora." },
        { jp: "安いのに、とてもおいしいです。", pt: "Apesar de ser barato, é muito gostoso." },
        { jp: "静かなのに、よく眠れません。", pt: "Apesar de estar tranquilo, não consigo dormir bem." },
        { jp: "日曜日なのに、学校へ行きます。", pt: "Apesar de ser domingo, vou à escola." },
        { jp: "友だちなのに、何も知りません。", pt: "Apesar de ser meu amigo, não sabe de nada." }
      ],
      keyPoints: [
        "のに apresenta uma situação contrária à expectativa.",
        "Verbos utilizam a forma simples antes de のに.",
        "Adjetivos do tipo い utilizam sua forma simples.",
        "Adjetivos do tipo な utilizam なのに.",
        "Substantivos também podem utilizar なのに.",
        "A estrutura costuma transmitir surpresa, frustração ou desapontamento, dependendo do contexto."
      ]
    },
    {
      title: "Realizando duas ações ao mesmo tempo com ながら",
      explanation: "A estrutura ながら permite expressar que uma pessoa realiza duas ações simultaneamente. Ela é formada utilizando a base da forma ます do verbo, removendo ます e acrescentando ながら. Por exemplo, 音楽を聞きます vira 音楽を聞きながら. A ação principal aparece normalmente no final da frase, enquanto a ação acompanhada de ながら apresenta o que acontece simultaneamente. Geralmente, as duas ações são realizadas pela mesma pessoa. Essa estrutura é bastante útil para falar sobre atividades cotidianas.",
      examples: [
        { jp: "音楽を聞きながら、勉強します。", pt: "Estudo enquanto escuto música." },
        { jp: "歩きながら、友だちと話しました。", pt: "Conversei com meu amigo enquanto caminhava." },
        { jp: "ご飯を食べながら、テレビを見ます。", pt: "Assisto à televisão enquanto como." },
        { jp: "歌を歌いながら、料理をします。", pt: "Cozinho enquanto canto." },
        { jp: "本を読みながら、お茶を飲みます。", pt: "Leio um livro enquanto tomo chá." },
        { jp: "母は働きながら、日本語を勉強しています。", pt: "Minha mãe estuda japonês enquanto trabalha." }
      ],
      keyPoints: [
        "ながら expressa duas ações simultâneas.",
        "Utilize a base da forma ます sem ます.",
        "聞きます vira 聞きながら.",
        "食べます vira 食べながら.",
        "A ação principal geralmente aparece no final.",
        "Normalmente, as duas ações possuem o mesmo sujeito."
      ]
    },
    {
      title: "Acrescentando razões com し",
      explanation: "A estrutura し permite apresentar motivos ou características adicionais. É muito útil quando queremos explicar uma opinião utilizando mais de uma razão. Por exemplo, この店は安いし、おいしいし、便利です significa que a loja é barata, gostosa e conveniente. O し pode aparecer repetidamente para acrescentar razões, e a frase pode terminar com uma conclusão. Com verbos e adjetivos do tipo い, utiliza-se a forma simples seguida de し. Com adjetivos do tipo な e substantivos, utiliza-se normalmente だ antes de し.",
      examples: [
        { jp: "この店は安いし、おいしいし、好きです。", pt: "Esta loja é barata, a comida é gostosa e eu gosto dela." },
        { jp: "今日は雨だし、寒いし、家にいます。", pt: "Hoje está chovendo e frio, então fico em casa." },
        { jp: "彼は親切だし、面白いです。", pt: "Ele é gentil e interessante." },
        { jp: "日本語は難しいし、漢字も多いです。", pt: "Japonês é difícil e também tem muitos kanji." },
        { jp: "この本は有名だし、読みやすいです。", pt: "Este livro é famoso e fácil de ler." },
        { jp: "日曜日だし、時間もあります。", pt: "É domingo e também tenho tempo." }
      ],
      keyPoints: [
        "し acrescenta motivos ou características.",
        "Pode ser repetido para apresentar várias razões.",
        "Verbos e adjetivos do tipo い utilizam a forma simples + し.",
        "Adjetivos do tipo な utilizam だ + し.",
        "Substantivos utilizam だ + し.",
        "É muito útil para justificar opiniões e decisões."
      ]
    },
    {
      title: "Expressando finalidade com ために",
      explanation: "A estrutura ために pode expressar a finalidade de uma ação, com o sentido de 'para' ou 'a fim de'. Quando queremos explicar que realizamos uma atividade com determinado objetivo, podemos utilizar a forma de dicionário do verbo seguida de ために. Também é possível utilizar um substantivo seguido de のために. Por exemplo, 日本へ行くために日本語を勉強しています significa que estudo japonês para ir ao Japão. Essa construção ajuda a explicar os objetivos por trás das ações.",
      examples: [
        { jp: "日本へ行くために、日本語を勉強しています。", pt: "Estudo japonês para ir ao Japão." },
        { jp: "試験に合格するために、毎日勉強します。", pt: "Estudo todos os dias para passar na prova." },
        { jp: "健康のために、毎日歩いています。", pt: "Caminho todos os dias pela minha saúde." },
        { jp: "新しいパソコンを買うために、お金を貯めています。", pt: "Estou juntando dinheiro para comprar um computador novo." },
        { jp: "日本語を話すために、会話を練習します。", pt: "Pratico conversação para falar japonês." }
      ],
      keyPoints: [
        "ために pode expressar finalidade.",
        "Verbos utilizam a forma de dicionário antes de ために.",
        "Substantivos podem utilizar のために.",
        "Indica o objetivo de uma ação.",
        "Não confunda finalidade com causa ou motivo.",
        "A estrutura ajuda a explicar planos e objetivos."
      ]
    },
    {
      title: "Construindo pensamentos com vários conectores",
      explanation: "Nesta aula, vamos combinar as estruturas estudadas durante a semana. Uma frase pode apresentar uma finalidade, um contraste, duas ações simultâneas e diferentes razões. O importante é compreender a função de cada conector. けれども apresenta contraste, のに destaca uma expectativa contrariada, ながら conecta ações simultâneas, し acrescenta razões e ために apresenta finalidade. Ao encontrar uma frase longa, identifique primeiro os conectores. Eles funcionam como pistas para entender a relação entre as informações.",
      examples: [
        { jp: "日本へ行くために勉強していますが、漢字は難しいです。", pt: "Estudo para ir ao Japão, mas os kanji são difíceis." },
        { jp: "音楽を聞きながら勉強します。日本語は難しいけれど、楽しいです。", pt: "Estudo enquanto escuto música. Japonês é difícil, mas divertido." },
        { jp: "今日は忙しいし、雨も降っているので、家にいます。", pt: "Hoje estou ocupado e também está chovendo, então fico em casa." },
        { jp: "たくさん勉強したのに、まだ分からない言葉があります。", pt: "Apesar de ter estudado bastante, ainda existem palavras que não entendo." },
        { jp: "試験に合格するために、本を読みながらノートを書いています。", pt: "Para passar na prova, leio livros enquanto faço anotações." }
      ],
      keyPoints: [
        "Identifique a função de cada conector.",
        "Combine estruturas sem perder o sentido.",
        "Diferencie contraste, finalidade e simultaneidade.",
        "Utilize し para apresentar vários motivos.",
        "Leia frases longas procurando as relações entre as partes.",
        "O objetivo é construir pensamentos maiores e organizados."
      ]
    }
  ]
},

// ======================================================
// SEMANA 42 — REVISÃO
// ======================================================

{
  title: "Revisão geral — Consolidando a Fase 4",
  goal: "Revisar as estruturas intermediárias das semanas anteriores, identificar dificuldades e demonstrar capacidade de compreender e produzir frases mais elaboradas.",
  days: [
    {
      title: "Revisão das condicionais",
      explanation: "Nesta aula, vamos revisar たら, なら e と. As três estruturas podem aparecer em situações que envolvem condições, mas cada uma apresenta uma relação diferente entre as ideias. たら é versátil e pode apresentar condições reais ou hipotéticas. なら considera uma situação como ponto de partida, frequentemente para dar conselhos ou recomendações. と é utilizado especialmente para consequências naturais, automáticas ou habituais. Para revisar, não basta reconhecer as terminações: é necessário observar o contexto e entender por que determinada estrutura foi escolhida.",
      examples: [
        { jp: "時間があったら、映画を見ます。", pt: "Se tiver tempo, assistirei a um filme." },
        { jp: "日本へ行くなら、京都がおすすめです。", pt: "Se vai ao Japão, Kyoto é recomendado." },
        { jp: "春になると、花が咲きます。", pt: "Quando chega a primavera, as flores desabrocham." },
        { jp: "宿題が終わったら、遊びます。", pt: "Quando terminar a lição de casa, vou brincar." },
        { jp: "このボタンを押すと、ドアが開きます。", pt: "Quando aperta este botão, a porta abre." }
      ],
      keyPoints: [
        "たら: condição versátil.",
        "なら: situação considerada como ponto de partida.",
        "と: consequência natural ou habitual.",
        "Revise a formação de cada estrutura.",
        "Observe a relação entre as duas partes.",
        "Não escolha uma condicional apenas pela tradução portuguesa."
      ]
    },
    {
      title: "Revisão da forma potencial",
      explanation: "A forma potencial expressa capacidade e possibilidade. Nos verbos do grupo 1, a última sílaba passa da linha do u para a linha do e e recebe る. Nos verbos do grupo 2, removemos る e acrescentamos られる. Os irregulares são する → できる e 来る → 来られる. Também precisamos reconhecer suas conjugações negativas e passadas. Nesta aula, vamos identificar a forma potencial em frases e comparar seu significado com o verbo original.",
      examples: [
        { jp: "話す → 話せる", pt: "Falar → conseguir falar." },
        { jp: "読む → 読める", pt: "Ler → conseguir ler." },
        { jp: "食べる → 食べられる", pt: "Comer → conseguir comer." },
        { jp: "見る → 見られる", pt: "Ver → conseguir ver." },
        { jp: "する → できる", pt: "Fazer → conseguir fazer." },
        { jp: "日本語が少し話せます。", pt: "Consigo falar um pouco de japonês." },
        { jp: "昨日は行けませんでした。", pt: "Ontem não consegui ir." }
      ],
      keyPoints: [
        "Grupo 1: linha do u para a linha do e + る.",
        "Grupo 2: remover る e acrescentar られる.",
        "する vira できる.",
        "来る vira 来られる.",
        "A forma potencial pode ser negativa ou passada.",
        "Reconheça a diferença entre realizar uma ação e conseguir realizá-la."
      ]
    },
    {
      title: "Revisão de experiências e passado",
      explanation: "Vamos revisar a diferença entre relatar acontecimentos passados e falar sobre experiências acumuladas. A forma passada simples informa que uma ação aconteceu. Já a estrutura たことがある informa que alguém já realizou determinada atividade alguma vez. Sua forma negativa, たことがありません, indica que a experiência nunca aconteceu. Também podemos formular perguntas utilizando たことがありますか. É importante compreender que a forma passada dentro da estrutura de experiência não representa necessariamente um acontecimento em uma data específica.",
      examples: [
        { jp: "昨日、寿司を食べました。", pt: "Ontem, comi sushi." },
        { jp: "寿司を食べたことがあります。", pt: "Já comi sushi alguma vez." },
        { jp: "日本へ行ったことがありません。", pt: "Nunca fui ao Japão." },
        { jp: "富士山を見たことがありますか。", pt: "Você já viu o Monte Fuji?" },
        { jp: "はい、一度あります。", pt: "Sim, uma vez." }
      ],
      keyPoints: [
        "Forma passada relata uma ação concluída.",
        "たことがある expressa experiência.",
        "たことがありません expressa ausência de experiência.",
        "たことがありますか pergunta sobre experiências.",
        "Uma data específica normalmente acompanha um relato de acontecimento.",
        "Observe o significado da frase inteira."
      ]
    },
    {
      title: "Revisão de dar e receber",
      explanation: "Os verbos あげる, くれる e もらう apresentam diferentes perspectivas de uma situação envolvendo dar e receber. あげる destaca alguém oferecendo algo a outra pessoa. くれる destaca alguém dando algo ao falante ou ao seu grupo. もらう destaca a pessoa que recebe. Para revisar, observe o sujeito, a pessoa que recebe e o objeto envolvido. A mesma situação pode ser descrita de mais de uma maneira, dependendo da perspectiva escolhida.",
      examples: [
        { jp: "私は友だちに本をあげました。", pt: "Dei um livro a um amigo." },
        { jp: "友だちが私に本をくれました。", pt: "Meu amigo me deu um livro." },
        { jp: "私は友だちに本をもらいました。", pt: "Recebi um livro de um amigo." },
        { jp: "母が弟に服をあげました。", pt: "Minha mãe deu roupas ao meu irmão." },
        { jp: "弟は母から服をもらいました。", pt: "Meu irmão recebeu roupas da minha mãe." }
      ],
      keyPoints: [
        "あげる: dar a outra pessoa.",
        "くれる: alguém dar ao falante ou ao seu grupo.",
        "もらう: receber de alguém.",
        " に e から podem indicar relações diferentes de origem e destinatário.",
        "A perspectiva determina a escolha do verbo.",
        "Analise quem realiza cada papel na situação."
      ]
    },
    {
      title: "Revisão de frases relativas e conectores",
      explanation: "Frases relativas permitem acrescentar informações antes de um substantivo. Conectores organizam a relação entre ideias. Vamos revisar as duas habilidades em conjunto. Uma frase relativa pode descrever uma pessoa, um objeto ou um lugar, enquanto conectores como けれども, のに, ながら, し e ために apresentam relações entre ações e pensamentos. Durante a leitura, procure reconhecer primeiro os substantivos principais e depois identifique as informações que os descrevem. Em seguida, observe os conectores que organizam o restante da frase.",
      examples: [
        { jp: "昨日買った本は面白いです。", pt: "O livro que comprei ontem é interessante." },
        { jp: "友だちが作った料理を食べました。", pt: "Comi a comida que meu amigo preparou." },
        { jp: "音楽を聞きながら、勉強しています。", pt: "Estou estudando enquanto escuto música." },
        { jp: "難しいけれど、毎日練習しています。", pt: "É difícil, mas pratico todos os dias." },
        { jp: "日本へ行くために、日本語を勉強しています。", pt: "Estudo japonês para ir ao Japão." }
      ],
      keyPoints: [
        "A frase relativa aparece antes do substantivo descrito.",
        "O verbo da parte relativa utiliza a forma simples.",
        "けれども apresenta contraste.",
        "ながら apresenta simultaneidade.",
        "ために apresenta finalidade.",
        "Identifique as relações entre as diferentes partes da frase."
      ]
    },
    {
      title: "Desafio de consolidação intermediária",
      explanation: "Nesta aula, o aluno deverá utilizar todas as habilidades revisadas para compreender e produzir frases maiores. A atividade começa com a leitura de um pequeno texto, seguido pela identificação das estruturas gramaticais. Depois, o aluno deverá explicar o sentido de determinadas frases e produzir respostas próprias. A intenção não é apenas lembrar regras isoladas, mas demonstrar que consegue reconhecer o funcionamento delas em situações reais de comunicação.",
      examples: [
        {
          jp: "私は日本へ行ったことがありません。でも、日本の文化に興味があります。いつか日本へ行くために、毎日日本語を勉強しています。漢字は難しいけれど、新しい言葉を読めると、とてもうれしいです。",
          pt: "Nunca fui ao Japão. Mas tenho interesse pela cultura japonesa. Estudo japonês todos os dias para ir ao Japão algum dia. Os kanji são difíceis, mas fico muito feliz quando consigo ler palavras novas."
        },
        { jp: "日本へ行ったことがありません。", pt: "Nunca fui ao Japão." },
        { jp: "日本へ行くために", pt: "Para ir ao Japão." },
        { jp: "漢字は難しいけれど", pt: "Os kanji são difíceis, mas..." },
        { jp: "新しい言葉を読める", pt: "Conseguir ler palavras novas." }
      ],
      keyPoints: [
        "Identifique as estruturas gramaticais no texto.",
        "Explique a função de cada conector.",
        "Reconheça a forma potencial.",
        "Diferencie experiência de acontecimento passado.",
        "Produza frases próprias utilizando as estruturas revisadas.",
        "Avalie quais conteúdos precisam de mais prática."
      ]
    }
  ]
},

// ======================================================
// SEMANA 43 — LEITURA
// ======================================================

{
  title: "Leitura — Textos progressivamente maiores",
  goal: "Desenvolver compreensão textual em japonês, reconhecer informações explícitas e implícitas e ler textos progressivamente maiores sem depender da tradução palavra por palavra.",
  days: [
    {
      title: "Estratégias para compreender textos em japonês",
      explanation: "Ler japonês não significa necessariamente conhecer o significado de todas as palavras. É possível compreender a ideia principal identificando o assunto, os verbos, as partículas, os conectores e as palavras conhecidas. Primeiro, observe o título e tente prever o assunto. Depois, leia o texto inteiro para descobrir a ideia geral. Na segunda leitura, procure informações específicas, como quem realizou determinada ação, onde aconteceu e quando ocorreu. Só depois consulte as palavras desconhecidas que realmente impedem a compreensão.",
      examples: [
        {
          jp: "田中さんは毎朝七時に起きます。朝ご飯を食べてから、学校へ行きます。学校では日本語と英語を勉強しています。",
          pt: "Tanaka acorda às sete todas as manhãs. Depois de tomar café da manhã, vai à escola. Na escola, estuda japonês e inglês."
        },
        { jp: "毎朝七時に起きます。", pt: "Acorda às sete todas as manhãs." },
        { jp: "学校へ行きます。", pt: "Vai à escola." },
        { jp: "日本語と英語を勉強しています。", pt: "Estuda japonês e inglês." }
      ],
      keyPoints: [
        "Leia o texto inteiro antes de procurar palavras.",
        "Identifique o assunto principal.",
        "Procure verbos para descobrir as ações.",
        "Utilize partículas para compreender relações.",
        "Observe palavras de tempo e lugar.",
        "Consulte apenas as palavras que realmente dificultam a compreensão."
      ]
    },
    {
      title: "Leitura de textos sobre rotina e cotidiano",
      explanation: "Textos sobre rotina são ótimos para desenvolver velocidade de leitura porque apresentam vocabulário e estruturas frequentemente utilizados. Observe expressões de tempo, frequência e sequência. Palavras como 毎日, 毎朝, いつも, 時々 e 週末 ajudam a compreender quando ou com que frequência uma atividade acontece. Também é importante reconhecer a ordem das ações e identificar se o texto descreve hábitos ou acontecimentos específicos.",
      examples: [
        {
          jp: "山田さんは毎朝六時半に起きます。顔を洗って、朝ご飯を食べます。それから、バスで会社へ行きます。昼休みには同僚と一緒に昼ご飯を食べます。仕事が終わると、家へ帰ります。夜は本を読んだり、音楽を聞いたりします。日曜日は家族と公園へ行くことが多いです。",
          pt: "Yamada acorda às seis e meia todas as manhãs. Lava o rosto e toma café da manhã. Depois, vai ao trabalho de ônibus. Durante o intervalo do almoço, come com os colegas. Quando o trabalho termina, volta para casa. À noite, lê livros, escuta música e realiza outras atividades. Aos domingos, costuma ir ao parque com a família."
        },
        { jp: "毎朝六時半に起きます。", pt: "Acorda às seis e meia todas as manhãs." },
        { jp: "バスで会社へ行きます。", pt: "Vai ao trabalho de ônibus." },
        { jp: "仕事が終わると、家へ帰ります。", pt: "Quando o trabalho termina, volta para casa." },
        { jp: "日曜日は家族と公園へ行くことが多いです。", pt: "Aos domingos, costuma ir ao parque com a família." }
      ],
      keyPoints: [
        "Identifique expressões de frequência.",
        "Observe a sequência das atividades.",
        "Diferencie rotina de acontecimentos específicos.",
        "Reconheça informações sobre horários e deslocamentos.",
        "Procure identificar quem realiza cada ação.",
        "Resuma o texto sem precisar reproduzir todas as frases."
      ]
    },
    {
      title: "Leitura de experiências e acontecimentos",
      explanation: "Nesta aula, vamos trabalhar com textos que relatam experiências passadas. Observe os verbos na forma passada e expressões como 昨日, 去年, 先週 e その時. Elas indicam quando os acontecimentos ocorreram. Também vamos reconhecer たことがある, que apresenta experiências acumuladas, e diferenciar essa estrutura de um relato específico. Procure identificar o que aconteceu primeiro, quais acontecimentos vieram depois e como o autor descreve sua experiência.",
      examples: [
        {
          jp: "先週、家族と海へ行きました。朝早く家を出て、車で三時間ぐらいかかりました。海はとてもきれいで、天気もよかったです。昼ご飯を食べた後、家族と写真を撮りました。私は初めてその場所へ行きましたが、また行きたいと思いました。",
          pt: "Na semana passada, fui à praia com minha família. Saímos de casa cedo e levamos cerca de três horas de carro. O mar era muito bonito e o tempo também estava bom. Depois de almoçar, tirei fotos com minha família. Foi a primeira vez que fui àquele lugar, mas pensei que gostaria de voltar."
        },
        { jp: "先週、家族と海へ行きました。", pt: "Na semana passada, fui à praia com minha família." },
        { jp: "車で三時間ぐらいかかりました。", pt: "Levamos cerca de três horas de carro." },
        { jp: "昼ご飯を食べた後", pt: "Depois de almoçar." },
        { jp: "また行きたいと思いました。", pt: "Pensei que gostaria de ir novamente." }
      ],
      keyPoints: [
        "Reconheça verbos na forma passada.",
        "Observe expressões de tempo.",
        "Organize os acontecimentos cronologicamente.",
        "Diferencie relato específico de experiência acumulada.",
        "Identifique opiniões e sentimentos do autor.",
        "Resuma os principais acontecimentos."
      ]
    },
    {
      title: "Leitura de textos informativos",
      explanation: "Textos informativos apresentam dados, explicações e informações sobre um assunto. Podem falar de cidades, natureza, cultura, tecnologia e acontecimentos. Para compreendê-los, procure identificar o tema principal, as informações mais importantes e os exemplos utilizados. Expressões como 例えば introduzem exemplos, つまり pode apresentar uma explicação ou reformulação, e そのため indica uma consequência. Nesta aula, o foco é compreender como as informações estão organizadas, mesmo quando aparecem palavras desconhecidas.",
      examples: [
        {
          jp: "日本には多くの山があります。その中で、富士山はとても有名です。富士山は日本で一番高い山で、たくさんの人が見に行きます。夏には山に登る人もいます。例えば、家族や友だちと一緒に登る人もいます。",
          pt: "O Japão possui muitas montanhas. Entre elas, o Monte Fuji é muito famoso. O Monte Fuji é a montanha mais alta do Japão, e muitas pessoas vão visitá-lo. No verão, também há pessoas que sobem a montanha. Por exemplo, algumas pessoas sobem acompanhadas da família ou dos amigos."
        },
        { jp: "日本には多くの山があります。", pt: "O Japão possui muitas montanhas." },
        { jp: "その中で、富士山はとても有名です。", pt: "Entre elas, o Monte Fuji é muito famoso." },
        { jp: "例えば", pt: "Por exemplo." },
        { jp: "夏には山に登る人もいます。", pt: "No verão, também há pessoas que sobem montanhas." }
      ],
      keyPoints: [
        "Identifique o assunto principal.",
        "Procure informações que explicam o tema.",
        "例えば introduz exemplos.",
        "つまり pode apresentar uma reformulação.",
        "そのため pode indicar consequência.",
        "Diferencie informação principal de exemplo."
      ]
    },
    {
      title: "Leitura de opiniões e argumentos",
      explanation: "Um texto de opinião apresenta o ponto de vista de alguém sobre determinado assunto. Para compreender esse tipo de texto, precisamos diferenciar fatos, opiniões, motivos e conclusões. Expressões como と思います apresentam pensamentos, から e ので podem introduzir motivos, e しかし pode introduzir contraste. Observe quais informações justificam a opinião do autor. Nem toda frase de um texto representa um fato comprovado: algumas apresentam preferências ou interpretações pessoais.",
      examples: [
        {
          jp: "私は外国語を勉強することが大切だと思います。新しい言葉を学ぶと、ほかの国の人と話すことができます。また、違う文化について知ることもできます。勉強は簡単ではありません。しかし、毎日少しずつ練習すれば、前より上手になります。",
          pt: "Acho importante estudar idiomas estrangeiros. Quando aprendemos palavras novas, podemos conversar com pessoas de outros países. Também podemos conhecer culturas diferentes. Estudar não é fácil. Entretanto, se praticarmos um pouco todos os dias, ficaremos melhores do que antes."
        },
        { jp: "大切だと思います。", pt: "Acho que é importante." },
        { jp: "ほかの国の人と話すことができます。", pt: "É possível conversar com pessoas de outros países." },
        { jp: "しかし", pt: "Entretanto ou porém." },
        { jp: "毎日少しずつ練習すれば", pt: "Se praticarmos um pouco todos os dias." }
      ],
      keyPoints: [
        "Identifique a opinião do autor.",
        "Diferencie opinião de informação.",
        "Procure os motivos que justificam a opinião.",
        "Reconheça conectores de contraste.",
        "Observe como o texto apresenta sua conclusão.",
        "Resuma o argumento principal."
      ]
    },
    {
      title: "Leitura independente de um texto maior",
      explanation: "Nesta última aula, vamos reunir as habilidades da semana em um texto mais longo. O aluno deverá realizar uma primeira leitura para identificar o assunto geral. Depois, fará uma segunda leitura procurando informações específicas. Em seguida, deverá identificar os conectores, reconhecer as estruturas gramaticais e explicar o sentido de trechos importantes. A atividade deve ser realizada sem interromper a leitura a cada palavra desconhecida. O objetivo é desenvolver independência e confiança na interpretação.",
      examples: [
        {
          jp: "田中さんは高校生で、外国語を勉強することが好きです。学校では英語を勉強していますが、家では日本語も勉強しています。最初は漢字を読むことが難しかったです。しかし、毎日少しずつ練習したので、今は簡単な文章が読めるようになりました。先月、日本語の本を一冊読みました。その本は少し長かったけれど、とても面白かったです。田中さんは、いつか日本へ行って、現地の人と日本語で話したいと思っています。",
          pt: "Tanaka é estudante do ensino médio e gosta de estudar idiomas estrangeiros. Na escola, estuda inglês, mas em casa também estuda japonês. No começo, ler kanji era difícil. Entretanto, como praticou um pouco todos os dias, agora consegue ler textos simples. No mês passado, leu um livro em japonês. O livro era um pouco longo, mas muito interessante. Tanaka espera ir ao Japão algum dia e conversar em japonês com as pessoas de lá."
        },
        { jp: "最初は漢字を読むことが難しかったです。", pt: "No começo, ler kanji era difícil." },
        { jp: "簡単な文章が読めるようになりました。", pt: "Passou a conseguir ler textos simples." },
        { jp: "その本は少し長かったけれど", pt: "O livro era um pouco longo, mas..." },
        { jp: "いつか日本へ行って", pt: "Ir ao Japão algum dia." }
      ],
      keyPoints: [
        "Leia o texto completo antes de consultar vocabulário.",
        "Identifique assunto, personagens e objetivo.",
        "Reconheça as mudanças entre passado e presente.",
        "Localize motivos e contrastes.",
        "Interprete informações utilizando o contexto.",
        "Produza um resumo com suas próprias palavras."
      ]
    }
  ]
},

// ======================================================
// SEMANA 44 — ESCUTA
// ======================================================

{
  title: "Escuta — Diálogos e compreensão oral",
  goal: "Desenvolver compreensão auditiva, reconhecer palavras em fala natural, identificar informações importantes em diálogos e compreender diferentes situações de comunicação.",
  days: [
    {
      title: "Como ouvir japonês sem tentar traduzir tudo",
      explanation: "A compreensão auditiva exige habilidades diferentes da leitura. Na fala, as palavras aparecem em sequência e não ficam disponíveis na tela para serem analisadas. Por isso, é importante aprender a identificar sons conhecidos, reconhecer expressões frequentes e compreender a ideia geral. Em uma primeira escuta, procure descobrir quem está falando e sobre qual assunto. Na segunda, observe informações específicas, como horários, lugares e ações. Na terceira, utilize a transcrição para conferir o que conseguiu reconhecer. A atividade desta aula utiliza um roteiro escrito que pode ser lido em voz alta por uma pessoa ou utilizado com áudio de estudo. O texto não substitui a experiência de escutar uma gravação real.",
      examples: [
        { jp: "おはようございます。今日はいい天気ですね。", pt: "Bom dia. Hoje está um tempo bom, não é?" },
        { jp: "はい。とても気持ちがいいですね。", pt: "Sim. Está muito agradável." },
        { jp: "今日は何をしますか。", pt: "O que você vai fazer hoje?" },
        { jp: "友だちと公園へ行きます。", pt: "Vou ao parque com um amigo." }
      ],
      keyPoints: [
        "Na primeira escuta, procure a ideia geral.",
        "Identifique quem está falando.",
        "Na segunda escuta, procure detalhes.",
        "Reconheça expressões que já conhece.",
        "Use a transcrição depois de tentar compreender.",
        "Escutar uma gravação real é diferente de apenas ler o diálogo."
      ]
    },
    {
      title: "Reconhecendo palavras e expressões na fala",
      explanation: "Uma dificuldade comum para estudantes é reconhecer palavras conhecidas quando aparecem na fala. Isso acontece porque os sons se conectam e o ritmo é diferente daquele utilizado na leitura. Nesta aula, vamos praticar o reconhecimento de expressões frequentes, números, horários e palavras de rotina. O aluno deverá observar quais palavras aparecem no diálogo e tentar compreender seu significado pelo contexto. Também deverá prestar atenção à entonação, às pausas e às mudanças de assunto.",
      examples: [
        { jp: "明日は何時に起きますか。", pt: "Amanhã, que horas você vai acordar?" },
        { jp: "六時半に起きます。", pt: "Vou acordar às seis e meia." },
        { jp: "朝ご飯を食べますか。", pt: "Você vai tomar café da manhã?" },
        { jp: "はい。パンと卵を食べます。", pt: "Sim. Vou comer pão e ovos." },
        { jp: "それから、学校へ行きます。", pt: "Depois disso, vou à escola." }
      ],
      keyPoints: [
        "Reconheça números e horários na fala.",
        "Observe expressões de sequência.",
        "Identifique palavras relacionadas à rotina.",
        "Preste atenção às pausas e à entonação.",
        "Não dependa de reconhecer cada sílaba isoladamente.",
        "Tente reconstruir o sentido geral do diálogo."
      ]
    },
    {
      title: "Compreendendo diálogos cotidianos",
      explanation: "Conversas cotidianas utilizam expressões que aparecem frequentemente em situações reais. É importante identificar cumprimentos, perguntas, respostas, confirmações e despedidas. Nesta aula, vamos acompanhar um diálogo entre duas pessoas que combinam um encontro. O aluno deverá descobrir onde elas vão se encontrar, qual horário escolheram e o que pretendem fazer. Também deverá observar como uma conversa pode mudar de assunto sem que todas as informações sejam explicadas novamente.",
      examples: [
        { jp: "A：土曜日は暇ですか。", pt: "A: Você está livre no sábado?" },
        { jp: "B：はい、暇です。どうしてですか。", pt: "B: Sim, estou livre. Por quê?" },
        { jp: "A：一緒に映画を見ませんか。", pt: "A: Quer assistir a um filme comigo?" },
        { jp: "B：いいですね。何時に会いますか。", pt: "B: Boa ideia. Que horas vamos nos encontrar?" },
        { jp: "A：午後二時に駅で会いましょう。", pt: "A: Vamos nos encontrar na estação às duas da tarde." },
        { jp: "B：分かりました。また土曜日に。", pt: "B: Entendi. Até sábado." }
      ],
      keyPoints: [
        "Identifique convites e respostas.",
        "Reconheça perguntas sobre horário e lugar.",
        "Observe como as pessoas combinam encontros.",
        "Entenda expressões de concordância.",
        "Perceba quando o assunto muda.",
        "Tente reproduzir o diálogo depois de compreendê-lo."
      ]
    },
    {
      title: "Compreendendo emoções e intenções pela voz",
      explanation: "A comunicação oral transmite informações além das palavras. A entonação, a velocidade da fala e o contexto ajudam a identificar se alguém está surpreso, animado, preocupado, confuso ou satisfeito. Uma mesma expressão pode apresentar sentidos diferentes dependendo da situação. Por exemplo, そうですか pode demonstrar que alguém recebeu uma informação, mas sua entonação pode indicar surpresa ou interesse. Nesta aula, vamos observar o papel da entonação e do contexto na interpretação de pequenas conversas.",
      examples: [
        { jp: "A：来週、日本へ行きます。", pt: "A: Na próxima semana, vou ao Japão." },
        { jp: "B：えっ、本当ですか。", pt: "B: Hein? É verdade?" },
        { jp: "A：はい。とても楽しみです。", pt: "A: Sim. Estou muito animado." },
        { jp: "B：いいですね。気をつけてください。", pt: "B: Que legal. Tome cuidado." },
        { jp: "A：ありがとうございます。", pt: "A: Muito obrigado." }
      ],
      keyPoints: [
        "A entonação transmite informações.",
        "Observe o contexto antes de interpretar uma expressão.",
        "えっ pode indicar surpresa.",
        "本当ですか pode demonstrar surpresa ou confirmação.",
        "楽しみです expressa expectativa positiva.",
        "Não interprete uma frase apenas pelo significado isolado das palavras."
      ]
    },
    {
      title: "Escutando diálogos maiores",
      explanation: "Nesta aula, vamos trabalhar com um diálogo mais longo, no qual aparecem diferentes assuntos. O aluno deverá acompanhar a conversa e identificar mudanças de tema. Primeiro, os personagens falam sobre estudos. Depois, conversam sobre uma viagem e apresentam opiniões. O desafio é acompanhar as informações sem perder o sentido geral quando surge uma palavra desconhecida. Ao final, o aluno deverá responder perguntas sobre os acontecimentos e explicar o que cada personagem pretende fazer.",
      examples: [
        { jp: "A：最近、日本語の勉強はどうですか。", pt: "A: Como estão os estudos de japonês ultimamente?" },
        { jp: "B：少し難しいですが、毎日勉強しています。", pt: "B: Está um pouco difícil, mas estudo todos os dias." },
        { jp: "A：漢字は読めますか。", pt: "A: Você consegue ler kanji?" },
        { jp: "B：簡単な漢字なら読めます。でも、長い文章はまだ難しいです。", pt: "B: Se forem kanji simples, consigo ler. Mas textos longos ainda são difíceis." },
        { jp: "A：いつか日本へ行きたいですか。", pt: "A: Você quer ir ao Japão algum dia?" },
        { jp: "B：はい。京都へ行って、日本の文化を見たいです。", pt: "B: Sim. Quero ir a Kyoto e conhecer a cultura japonesa." },
        { jp: "A：いいですね。私も日本へ行ったことがあります。", pt: "A: Que legal. Eu também já fui ao Japão." },
        { jp: "B：本当ですか。どうでしたか。", pt: "B: Sério? Como foi?" }
      ],
      keyPoints: [
        "Acompanhe diálogos com várias trocas de assunto.",
        "Identifique perguntas e respostas relacionadas.",
        "Reconheça opiniões e intenções.",
        "Utilize palavras conhecidas para compreender o restante.",
        "Observe a continuidade da conversa.",
        "Responda perguntas sem precisar traduzir todas as falas."
      ]
    },
    {
      title: "Interpretação auditiva e prática de compreensão",
      explanation: "Na última aula, vamos reunir as estratégias de escuta. O aluno deverá ouvir ou acompanhar um diálogo, identificar seu assunto principal, reconhecer informações específicas e resumir o que aconteceu. Se estiver utilizando uma gravação, deverá escutar primeiro sem transcrição, depois conferir o roteiro e escutar novamente. A repetição permite perceber sons e expressões que passaram despercebidos. O objetivo é desenvolver a capacidade de compreender japonês falado de maneira progressiva. Para uma avaliação auditiva verdadeira, esta atividade precisa ser acompanhada de áudio ou leitura em voz alta, não apenas da visualização do texto.",
      examples: [
        {
          jp: "A：昨日、何をしましたか。",
          pt: "A: O que você fez ontem?"
        },
        {
          jp: "B：友だちと買い物に行きました。それから、レストランで昼ご飯を食べました。",
          pt: "B: Fui fazer compras com um amigo. Depois, almoçamos em um restaurante."
        },
        {
          jp: "A：何を買いましたか。",
          pt: "A: O que você comprou?"
        },
        {
          jp: "B：新しい本を買いました。日本語の勉強に使います。",
          pt: "B: Comprei um livro novo. Vou utilizá-lo para estudar japonês."
        },
        {
          jp: "A：いいですね。私もその本を読んでみたいです。",
          pt: "A: Que legal. Também gostaria de experimentar ler esse livro."
        }
      ],
      keyPoints: [
        "Faça uma primeira escuta sem consultar a transcrição.",
        "Identifique assunto e participantes.",
        "Procure informações específicas na segunda escuta.",
        "Confira a transcrição depois da tentativa.",
        "Escute novamente para reconhecer palavras que passaram despercebidas.",
        "O objetivo é compreender a mensagem, não traduzir cada som."
      ]
    }
  ]
},

// ======================================================
// SEMANA 45 — VOCABULÁRIO COTIDIANO
// ======================================================

{
  title: "Vocabulário cotidiano — Expressões usadas no dia a dia",
  goal: "Aprender expressões frequentes do japonês cotidiano, compreender diferenças de formalidade e reconhecer palavras e construções comuns em conversas naturais.",
  days: [
    {
      title: "Cumprimentos e expressões do cotidiano",
      explanation: "O japonês utiliza expressões específicas em situações sociais. Algumas não possuem uma tradução direta para o português e precisam ser compreendidas pelo contexto. おはようございます é um cumprimento educado pela manhã, enquanto こんにちは é utilizado durante o dia. こんばんは é utilizado à noite. Também existem expressões relacionadas à saída e ao retorno de casa. いってきます é dito por quem está saindo, enquanto いってらっしゃい é dito por quem permanece e deseja uma boa saída. ただいま é utilizado ao retornar, e おかえり ou おかえりなさい é uma resposta comum de quem recebe a pessoa.",
      examples: [
        { jp: "おはようございます。", pt: "Bom dia." },
        { jp: "こんにちは。", pt: "Olá ou boa tarde." },
        { jp: "こんばんは。", pt: "Boa noite, como cumprimento." },
        { jp: "いってきます。", pt: "Estou saindo; até mais." },
        { jp: "いってらっしゃい。", pt: "Vá e volte bem." },
        { jp: "ただいま。", pt: "Cheguei; estou de volta." },
        { jp: "おかえりなさい。", pt: "Bem-vindo de volta." }
      ],
      keyPoints: [
        "Cumprimentos dependem do horário e da situação.",
        "いってきます é utilizado por quem está saindo.",
        "いってらっしゃい é uma resposta comum a いってきます.",
        "ただいま indica retorno.",
        "おかえりなさい recebe quem voltou.",
        "Aprenda essas expressões como pares de situações."
      ]
    },
    {
      title: "Expressões de reação e confirmação",
      explanation: "Em conversas naturais, as pessoas utilizam pequenas expressões para mostrar que estão acompanhando a conversa. そうですか pode indicar que alguém recebeu uma informação. そうなんですか pode demonstrar interesse ou surpresa. なるほど indica compreensão ou percepção de uma explicação. へえ é uma reação de surpresa ou interesse, dependendo da entonação. そうですね pode ser utilizado para concordar ou pensar antes de responder. Essas expressões ajudam a tornar uma conversa mais natural, mas seu uso depende do contexto e do relacionamento entre as pessoas.",
      examples: [
        { jp: "A：日本へ行ったことがあります。", pt: "A: Já fui ao Japão." },
        { jp: "B：そうですか。", pt: "B: Entendi." },
        { jp: "A：日本語を五年間勉強しています。", pt: "A: Estudo japonês há cinco anos." },
        { jp: "B：へえ、すごいですね。", pt: "B: Nossa, que incrível." },
        { jp: "A：この言葉は昔の日本語です。", pt: "A: Esta palavra pertence ao japonês antigo." },
        { jp: "B：なるほど。", pt: "B: Entendi; agora faz sentido." },
        { jp: "A：今日は暑いですね。", pt: "A: Hoje está quente, não é?" },
        { jp: "B：そうですね。", pt: "B: Pois é." }
      ],
      keyPoints: [
        "そうですか demonstra que uma informação foi recebida.",
        "そうなんですか pode expressar interesse ou surpresa.",
        "なるほど indica compreensão.",
        "へえ pode demonstrar surpresa ou interesse.",
        "そうですね pode expressar concordância ou reflexão.",
        "A entonação influencia o significado."
      ]
    },
    {
      title: "Expressões informais e diferenças de formalidade",
      explanation: "O japonês apresenta diferentes níveis de formalidade. Em situações educadas, utilizamos estruturas como です e ます. Entre amigos e pessoas próximas, aparecem formas informais. Por exemplo, そうです é uma forma educada de dizer 'é isso', enquanto そうだ é uma forma informal. じゃない pode ser a forma informal negativa de ではありません em determinados contextos. Também é comum ouvir じゃん em conversas informais, mas seu uso depende da região, do grupo e da situação. É importante compreender essas expressões antes de utilizá-las, pois uma forma informal pode não ser adequada em uma conversa formal.",
      examples: [
        { jp: "これはおいしいです。", pt: "Isto é gostoso. Forma educada." },
        { jp: "これ、おいしい。", pt: "Isto é gostoso. Forma informal." },
        { jp: "学生ではありません。", pt: "Não sou estudante. Forma educada." },
        { jp: "学生じゃない。", pt: "Não sou estudante. Forma informal." },
        { jp: "そうです。", pt: "É isso. Forma educada." },
        { jp: "そうだ。", pt: "É isso. Forma informal." },
        { jp: "大丈夫ですか。", pt: "Está tudo bem? Forma educada." },
        { jp: "大丈夫？", pt: "Tudo bem? Forma informal." }
      ],
      keyPoints: [
        "です e ます são comuns em situações educadas.",
        "Formas simples são frequentes entre pessoas próximas.",
        "じゃない pode expressar negação informal.",
        "じゃん aparece em conversas informais e possui usos variados.",
        "Não utilize automaticamente formas informais com desconhecidos.",
        "Compreender uma expressão informal não significa que ela seja adequada em todas as situações."
      ]
    },
    {
      title: "Expressões de sentimentos e reações",
      explanation: "Conversas cotidianas utilizam expressões curtas para transmitir sentimentos e reações. すごい pode expressar surpresa, admiração ou intensidade. うれしい significa estar feliz ou contente. かなしい significa estar triste. びっくりした significa que alguém ficou surpreso. 大丈夫 pode indicar que algo está bem, que uma pessoa está bem ou que uma situação não representa um problema. Já ちょっと pode significar 'um pouco', mas também pode suavizar uma resposta ou indicar hesitação. O contexto é fundamental para compreender essas expressões.",
      examples: [
        { jp: "すごいですね。", pt: "Que incrível!" },
        { jp: "とてもうれしいです。", pt: "Estou muito feliz." },
        { jp: "少し悲しいです。", pt: "Estou um pouco triste." },
        { jp: "びっくりしました。", pt: "Fiquei surpreso." },
        { jp: "大丈夫です。", pt: "Está tudo bem." },
        { jp: "ちょっと待ってください。", pt: "Espere um pouquinho, por favor." },
        { jp: "それはちょっと難しいです。", pt: "Isso é um pouco difícil." }
      ],
      keyPoints: [
        "すごい pode expressar admiração ou surpresa.",
        "うれしい expressa felicidade.",
        "悲しい expressa tristeza.",
        "びっくりした indica surpresa.",
        "大丈夫 possui diferentes sentidos conforme o contexto.",
        "ちょっと pode suavizar uma afirmação ou resposta."
      ]
    },
    {
      title: "Expressões sociais e situações do cotidiano",
      explanation: "Existem expressões japonesas utilizadas em momentos específicos de convivência. いただきます é dito antes de comer, expressando gratidão pelo alimento e por quem participou de sua preparação. ごちそうさまでした é utilizado depois da refeição para agradecer. おつかれさまです é comum em ambientes de estudo e trabalho, reconhecendo o esforço de alguém. よろしくお願いします aparece em apresentações, pedidos de colaboração e outras situações sociais. Essas expressões não possuem equivalentes perfeitos em português, por isso é importante aprender quando são utilizadas.",
      examples: [
        { jp: "いただきます。", pt: "Expressão de gratidão antes da refeição." },
        { jp: "ごちそうさまでした。", pt: "Expressão de agradecimento depois da refeição." },
        { jp: "おつかれさまです。", pt: "Reconhecimento do esforço de alguém; muito usado no trabalho." },
        { jp: "よろしくお願いします。", pt: "Expressão de consideração ao iniciar uma relação ou solicitar colaboração." },
        { jp: "はじめまして。", pt: "Prazer em conhecer você." },
        { jp: "こちらこそ、よろしくお願いします。", pt: "Eu que agradeço; conto com você também." }
      ],
      keyPoints: [
        "いただきます aparece antes das refeições.",
        "ごちそうさまでした aparece depois das refeições.",
        "おつかれさまです reconhece o esforço de alguém.",
        "よろしくお願いします aparece em várias situações sociais.",
        "はじめまして é utilizado ao conhecer alguém pela primeira vez.",
        "Aprenda as expressões considerando a situação social."
      ]
    },
    {
      title: "Compreendendo conversas naturais",
      explanation: "Nesta última aula, vamos combinar as expressões cotidianas em uma conversa. O objetivo é compreender não apenas as frases completas, mas também as pequenas reações que tornam o diálogo natural. Observe como os personagens utilizam cumprimentos, expressões de surpresa, comentários e despedidas. Também é importante perceber que algumas expressões são informais e outras são educadas. O aluno deverá identificar o relacionamento entre os participantes e explicar por que determinada expressão foi utilizada.",
      examples: [
        { jp: "A：おはよう。昨日の映画、どうだった？", pt: "A: Bom dia. Como foi o filme de ontem?" },
        { jp: "B：すごく面白かったよ。", pt: "B: Foi muito interessante." },
        { jp: "A：へえ、そうなんだ。", pt: "A: Nossa, é mesmo?" },
        { jp: "B：うん。少し長かったけど、よかった。", pt: "B: Sim. Foi um pouco longo, mas foi bom." },
        { jp: "A：いいね。私もちょっと見てみたい。", pt: "A: Que legal. Também gostaria de assistir." },
        { jp: "B：おすすめだよ。", pt: "B: Recomendo." }
      ],
      keyPoints: [
        "Reconheça expressões naturais em diálogos.",
        "Identifique o nível de formalidade.",
        "Observe reações e mudanças de assunto.",
        "Interprete expressões pelo contexto.",
        "Diferencie linguagem educada e informal.",
        "O objetivo é reconhecer como japoneses conversam no cotidiano."
      ]
    }
  ]
},

// ======================================================
// SEMANA 46 — INTERPRETAÇÃO
// ======================================================

{
  title: "Interpretação — Entender pelo contexto",
  goal: "Desenvolver a capacidade de interpretar mensagens, inferir significados, identificar intenções e compreender informações implícitas utilizando o contexto.",
  days: [
    {
      title: "O que significa entender pelo contexto?",
      explanation: "Nem sempre uma frase apresenta todas as informações necessárias de maneira explícita. Em conversas e textos, algumas informações podem ser compreendidas pelo contexto. Isso significa utilizar o que já foi dito, a situação, os participantes e as palavras conhecidas para descobrir o sentido de uma informação. Por exemplo, se alguém diz 'Está frio, não é?', a pessoa pode simplesmente estar comentando o clima ou sugerindo que uma janela seja fechada. O significado depende da situação. Em japonês, essa habilidade é especialmente importante porque muitas informações podem ser omitidas quando já são conhecidas pelos participantes.",
      examples: [
        { jp: "今日は寒いですね。", pt: "Hoje está frio, não é?" },
        { jp: "窓を閉めましょうか。", pt: "Quer que eu feche a janela?" },
        { jp: "ありがとうございます。", pt: "Muito obrigado." },
        { jp: "もう少しお願いします。", pt: "Mais um pouquinho, por favor." },
        { jp: "大丈夫です。", pt: "Está tudo bem; dependendo da situação, também pode ser uma recusa educada." }
      ],
      keyPoints: [
        "O significado depende da situação.",
        "Nem toda informação aparece explicitamente.",
        "Observe o que foi dito anteriormente.",
        "Considere quem está conversando.",
        "Algumas frases podem ter mais de uma interpretação.",
        "Utilize o contexto antes de escolher um significado."
      ]
    },
    {
      title: "Descobrindo palavras desconhecidas pelo contexto",
      explanation: "Quando encontramos uma palavra desconhecida, não precisamos interromper imediatamente a leitura. Primeiro, observe as palavras próximas e a função da palavra na frase. Procure identificar se ela representa uma pessoa, objeto, ação, característica ou lugar. Depois, observe os exemplos e as informações apresentadas ao redor. Mesmo sem conhecer uma palavra, podemos descobrir parte de seu significado. Essa estratégia é importante para ler textos maiores e acompanhar conversas sem depender constantemente de um dicionário.",
      examples: [
        {
          jp: "昨日、新しい道具を買いました。これを使うと、料理が簡単になります。",
          pt: "Ontem, comprei uma ferramenta ou utensílio novo. Quando utilizo isso, cozinhar fica mais fácil."
        },
        { jp: "新しい道具を買いました。", pt: "Comprei um utensílio novo." },
        { jp: "これを使うと", pt: "Quando utilizo isso." },
        { jp: "料理が簡単になります。", pt: "Cozinhar fica mais fácil." },
        { jp: "道具", pt: "Utensílio ou ferramenta; o contexto ajuda a descobrir o significado." }
      ],
      keyPoints: [
        "Observe as palavras ao redor da palavra desconhecida.",
        "Identifique a função gramatical.",
        "Procure exemplos ou explicações próximas.",
        "Utilize a situação para limitar as possibilidades.",
        "Não invente um significado sem evidências.",
        "Consulte um dicionário quando o contexto não for suficiente."
      ]
    },
    {
      title: "Interpretando informações omitidas",
      explanation: "O japonês frequentemente omite o sujeito ou outras informações quando eles já estão claros pelo contexto. Por exemplo, 行きます pode significar 'vou', 'vai' ou 'iremos', dependendo da conversa. Não é necessário repetir 私は em todas as frases. Para descobrir quem realizou a ação, observe as informações anteriores e a situação. Essa característica pode causar dificuldade para quem tenta traduzir cada frase isoladamente. É importante compreender a conversa como um conjunto, em vez de analisar cada frase sem considerar o que veio antes.",
      examples: [
        { jp: "A：明日、学校へ行きますか。", pt: "A: Amanhã, você vai à escola?" },
        { jp: "B：はい、行きます。", pt: "B: Sim, vou." },
        { jp: "A：何時に帰りますか。", pt: "A: Que horas volta?" },
        { jp: "B：午後五時に帰ります。", pt: "B: Volto às cinco da tarde." },
        { jp: "A：一緒に行きますか。", pt: "A: Vamos juntos?" },
        { jp: "B：はい、行きましょう。", pt: "B: Sim, vamos." }
      ],
      keyPoints: [
        "O sujeito pode ser omitido.",
        "O contexto ajuda a identificar quem realiza a ação.",
        "行きます pode ter diferentes sujeitos.",
        "Não traduza frases isoladamente quando fazem parte de uma conversa.",
        "Observe as informações anteriores.",
        "A omissão é uma característica comum da comunicação japonesa."
      ]
    },
    {
      title: "Identificando intenções e mensagens indiretas",
      explanation: "Uma pessoa nem sempre comunica sua intenção de maneira direta. Uma pergunta pode funcionar como convite, uma observação pode funcionar como sugestão e uma resposta curta pode indicar hesitação. Por exemplo, 今日はちょっと... pode indicar que alguém não consegue aceitar um convite, sem precisar dizer diretamente 'não'. Essa maneira de comunicar pode ser utilizada para suavizar uma resposta. Entretanto, não devemos interpretar automaticamente todas as frases indiretas da mesma maneira. O contexto, a entonação e o relacionamento entre as pessoas ajudam a descobrir a intenção.",
      examples: [
        { jp: "A：一緒に映画を見ませんか。", pt: "A: Quer assistir a um filme comigo?" },
        { jp: "B：今日はちょっと...。", pt: "B: Hoje é um pouco complicado..." },
        { jp: "A：そうですか。また今度ですね。", pt: "A: Entendi. Fica para outra vez, então." },
        { jp: "B：はい。すみません。", pt: "B: Sim. Desculpe." },
        { jp: "A：この料理、どうですか。", pt: "A: O que acha desta comida?" },
        { jp: "B：少し辛いですね。", pt: "B: Está um pouco apimentada." }
      ],
      keyPoints: [
        "A intenção nem sempre aparece diretamente nas palavras.",
        "ちょっと pode indicar hesitação ou suavizar uma resposta.",
        "Observe o contexto e a entonação.",
        "Uma pergunta pode funcionar como convite ou sugestão.",
        "Uma resposta indireta não possui sempre o mesmo significado.",
        "Evite interpretar sem considerar a situação."
      ]
    },
    {
      title: "Interpretando textos com informações implícitas",
      explanation: "Em textos maiores, algumas informações são sugeridas em vez de explicadas diretamente. Para interpretá-las, devemos relacionar acontecimentos, motivos e consequências. Observe os conectores, as escolhas dos personagens e as mudanças de comportamento. Também é importante diferenciar aquilo que o texto afirma diretamente daquilo que podemos concluir a partir das pistas apresentadas. Uma boa interpretação não consiste em inventar informações, mas em construir conclusões que sejam sustentadas pelo próprio texto.",
      examples: [
        {
          jp: "今日は朝から雨が降っていました。太郎さんは傘を持って家を出ました。しかし、駅に着いた時、傘がありませんでした。家に忘れたのかもしれません。太郎さんは駅の店で新しい傘を買いました。",
          pt: "Hoje estava chovendo desde a manhã. Taro saiu de casa levando um guarda-chuva. Entretanto, quando chegou à estação, estava sem o guarda-chuva. Talvez tenha esquecido em casa. Taro comprou um guarda-chuva novo na loja da estação."
        },
        { jp: "朝から雨が降っていました。", pt: "Estava chovendo desde a manhã." },
        { jp: "傘を持って家を出ました。", pt: "Saiu de casa levando um guarda-chuva." },
        { jp: "駅に着いた時、傘がありませんでした。", pt: "Quando chegou à estação, não estava com o guarda-chuva." },
        { jp: "家に忘れたのかもしれません。", pt: "Talvez tenha esquecido em casa." }
      ],
      keyPoints: [
        "Identifique as informações explícitas.",
        "Observe a sequência dos acontecimentos.",
        "Procure pistas que expliquem as ações.",
        "Diferencie fatos de hipóteses.",
        "かもしれません expressa possibilidade ou incerteza.",
        "Uma interpretação precisa ser sustentada pelo texto."
      ]
    },
    {
      title: "Desafio final de interpretação contextual",
      explanation: "Nesta última aula, o aluno deverá interpretar uma conversa e um pequeno texto sem depender da tradução de todas as palavras. Primeiro, deverá identificar os participantes e o assunto. Depois, procurará descobrir informações omitidas, intenções e relações entre os acontecimentos. Finalmente, deverá explicar o significado de expressões específicas e apresentar um resumo. O objetivo é demonstrar que consegue compreender uma mensagem utilizando vocabulário, gramática e contexto em conjunto.",
      examples: [
        {
          jp: "A：週末は何をする予定ですか。",
          pt: "A: O que pretende fazer no fim de semana?"
        },
        {
          jp: "B：まだ決めていません。でも、天気がよかったら、家族と公園へ行こうと思っています。",
          pt: "B: Ainda não decidi. Mas, se o tempo estiver bom, estou pensando em ir ao parque com minha família."
        },
        {
          jp: "A：いいですね。最近、外で遊ぶ時間が少ないですからね。",
          pt: "A: Que legal. Ultimamente, temos pouco tempo para atividades ao ar livre."
        },
        {
          jp: "B：そうなんです。だから、今週末はゆっくり過ごしたいです。",
          pt: "B: Pois é. Por isso, quero passar este fim de semana tranquilamente."
        },
        {
          jp: "A：楽しんでください。また月曜日に。",
          pt: "A: Aproveite. Até segunda-feira."
        }
      ],
      keyPoints: [
        "Identifique a intenção de cada participante.",
        "Reconheça informações que ainda não foram decididas.",
        "Interprete condições pelo contexto.",
        "Observe motivos e conclusões.",
        "Diferencie informações explícitas e implícitas.",
        "Resuma a conversa sem traduzir palavra por palavra."
      ]
    }
  ]
},


// ======================================================
// SEMANA 47 — ESCRITA
// ======================================================

{
  title: "Escrita — Pequenos textos e diário",
  goal: "Desenvolver a capacidade de escrever em japonês, organizar pensamentos, construir pequenos textos e registrar acontecimentos, experiências, opiniões e planos.",
  days: [
    {
      title: "Construindo frases e organizando ideias",
      explanation: "Escrever em japonês exige mais do que conhecer palavras e regras gramaticais. É necessário organizar as informações de maneira compreensível. Uma frase geralmente apresenta um assunto, uma informação sobre esse assunto e os elementos que complementam a mensagem. Nesta aula, vamos revisar a organização das frases e aprender a conectar várias informações em um pequeno parágrafo. Primeiro, escreva frases simples e completas. Depois, organize essas frases em uma sequência que faça sentido. Não tente escrever um texto enorme imediatamente: a prioridade é construir mensagens claras.",
      examples: [
        { jp: "私は学生です。", pt: "Sou estudante." },
        { jp: "毎日、日本語を勉強しています。", pt: "Estudo japonês todos os dias." },
        { jp: "日本語は難しいですが、面白いです。", pt: "Japonês é difícil, mas interessante." },
        { jp: "将来、日本へ行きたいです。", pt: "Quero ir ao Japão no futuro." },
        { jp: "私は学生です。毎日、日本語を勉強しています。日本語は難しいですが、面白いです。", pt: "Sou estudante. Estudo japonês todos os dias. Japonês é difícil, mas interessante." }
      ],
      keyPoints: [
        "Escreva frases completas antes de montar um parágrafo.",
        "Organize as informações em uma sequência lógica.",
        "Utilize partículas corretamente.",
        "Evite juntar muitas ideias em uma única frase.",
        "Utilize conectores quando necessário.",
        "Priorize clareza e correção gramatical."
      ]
    },
    {
      title: "Escrevendo sobre a própria rotina",
      explanation: "Nesta aula, vamos aprender a escrever um texto sobre a rotina pessoal. O texto deve apresentar horários, atividades, lugares e frequência. Expressões como 毎日, 毎朝, 時々 e 週末 ajudam a organizar as informações. Podemos utilizar verbos na forma ます para apresentar hábitos e ています para descrever atividades que fazem parte da rotina atual. Ao terminar, leia o texto novamente e verifique se uma pessoa que não conhece sua rotina conseguiria compreender como é seu dia.",
      examples: [
        {
          jp: "私は毎朝七時に起きます。朝ご飯を食べてから、学校へ行きます。学校ではいろいろなことを勉強します。家に帰った後、宿題をします。夜は日本語を勉強して、本を読みます。週末は友だちと遊ぶことがあります。",
          pt: "Acordo às sete todas as manhãs. Depois de tomar café da manhã, vou à escola. Na escola, estudo várias coisas. Depois de voltar para casa, faço a lição de casa. À noite, estudo japonês e leio livros. Às vezes, brinco com meus amigos no fim de semana."
        },
        { jp: "毎朝七時に起きます。", pt: "Acordo às sete todas as manhãs." },
        { jp: "家に帰った後、宿題をします。", pt: "Depois de voltar para casa, faço a lição de casa." },
        { jp: "週末は友だちと遊ぶことがあります。", pt: "Às vezes, brinco com meus amigos nos fins de semana." }
      ],
      keyPoints: [
        "Utilize expressões de frequência.",
        "Apresente as atividades em ordem cronológica.",
        "Inclua horários e lugares.",
        "Utilize verbos na forma adequada.",
        "Diferencie hábitos de acontecimentos específicos.",
        "Escreva um texto de pelo menos cinco frases."
      ]
    },
    {
      title: "Escrevendo sobre acontecimentos passados",
      explanation: "Um diário frequentemente registra acontecimentos que já ocorreram. Para isso, precisamos utilizar formas passadas dos verbos e expressões temporais. 昨日 significa ontem, 先週 significa semana passada e 去年 significa ano passado. Podemos acrescentar opiniões utilizando と思いました e descrever experiências com たことがあります. O texto deve apresentar o que aconteceu, onde aconteceu, quem participou e como foi a experiência. Procure evitar repetir sempre o mesmo verbo e utilize diferentes construções que já foram estudadas.",
      examples: [
        {
          jp: "昨日、友だちと公園へ行きました。天気がよかったので、たくさん歩きました。それから、近くの店で昼ご飯を食べました。とても楽しかったです。また一緒に行きたいと思いました。",
          pt: "Ontem, fui ao parque com um amigo. Como o tempo estava bom, caminhamos bastante. Depois, almoçamos em uma loja próxima. Foi muito divertido. Pensei que gostaria de ir novamente com ele."
        },
        { jp: "昨日、友だちと公園へ行きました。", pt: "Ontem, fui ao parque com um amigo." },
        { jp: "天気がよかったので", pt: "Como o tempo estava bom." },
        { jp: "とても楽しかったです。", pt: "Foi muito divertido." },
        { jp: "また一緒に行きたいと思いました。", pt: "Pensei que gostaria de ir novamente junto." }
      ],
      keyPoints: [
        "Utilize expressões temporais.",
        "Conjugue os verbos no passado.",
        "Apresente acontecimentos em sequência.",
        "Acrescente opiniões e sentimentos.",
        "Utilize conectores para explicar motivos.",
        "Escreva um relato com começo, desenvolvimento e conclusão."
      ]
    },
    {
      title: "Expressando opiniões por escrito",
      explanation: "Nesta aula, vamos desenvolver a capacidade de apresentar opiniões e justificativas. Uma opinião pode ser introduzida utilizando と思います. Para explicar motivos, podemos utilizar から ou ので. Também podemos apresentar contrastes com けれども e acrescentar diferentes características com し. Um bom texto de opinião apresenta primeiro o assunto, depois o ponto de vista e finalmente as razões que sustentam esse ponto de vista. Não basta escrever que algo é bom ou ruim: precisamos explicar por quê.",
      examples: [
        {
          jp: "私は外国語を勉強することが大切だと思います。新しい言葉を覚えると、外国の人と話すことができます。また、違う文化について知ることもできます。勉強は簡単ではありませんが、とても面白いです。",
          pt: "Acho importante estudar idiomas estrangeiros. Quando aprendemos palavras novas, conseguimos conversar com pessoas de outros países. Também podemos conhecer culturas diferentes. Estudar não é fácil, mas é muito interessante."
        },
        { jp: "大切だと思います。", pt: "Acho que é importante." },
        { jp: "外国の人と話すことができます。", pt: "É possível conversar com pessoas de outros países." },
        { jp: "勉強は簡単ではありませんが", pt: "Estudar não é fácil, mas..." },
        { jp: "とても面白いです。", pt: "É muito interessante." }
      ],
      keyPoints: [
        "Apresente sua opinião com clareza.",
        "Utilize と思います para expressar pensamentos.",
        "Explique os motivos utilizando から ou ので.",
        "Utilize conectores para organizar os argumentos.",
        "Diferencie opinião de informação objetiva.",
        "Escreva um pequeno texto argumentativo."
      ]
    },
    {
      title: "Criando um diário em japonês",
      explanation: "Um diário permite praticar a escrita regularmente sem precisar produzir textos complexos. Nesta aula, vamos estabelecer uma estrutura que pode ser utilizada para registrar acontecimentos. O texto pode começar com uma data, apresentar o que aconteceu durante o dia, descrever uma experiência e terminar com uma opinião ou plano. Não é necessário escrever sobre acontecimentos extraordinários. Atividades comuns também são ótimas oportunidades para praticar. O mais importante é produzir frases próprias, consultar o vocabulário quando necessário e revisar os erros.",
      examples: [
        {
          jp: "十一月十三日、金曜日。今日は学校へ行きました。友だちと話して、とても楽しかったです。家に帰ってから、日本語を勉強しました。漢字は少し難しかったですが、新しい言葉を覚えることができました。明日も勉強するつもりです。",
          pt: "Sexta-feira, 13 de novembro. Hoje fui à escola. Conversei com meus amigos e foi muito divertido. Depois de voltar para casa, estudei japonês. Os kanji foram um pouco difíceis, mas consegui aprender palavras novas. Pretendo estudar novamente amanhã."
        },
        { jp: "今日は学校へ行きました。", pt: "Hoje fui à escola." },
        { jp: "とても楽しかったです。", pt: "Foi muito divertido." },
        { jp: "新しい言葉を覚えることができました。", pt: "Consegui aprender palavras novas." },
        { jp: "明日も勉強するつもりです。", pt: "Pretendo estudar novamente amanhã." }
      ],
      keyPoints: [
        "Registre a data.",
        "Descreva acontecimentos do dia.",
        "Utilize passado para relatar o que aconteceu.",
        "Acrescente opiniões e sentimentos.",
        "Termine com um plano ou reflexão.",
        "Mantenha um diário com entradas frequentes."
      ]
    },
    {
      title: "Produção textual independente",
      explanation: "Nesta última aula, o aluno deverá produzir um texto próprio sem receber frases prontas para completar. O tema será uma experiência pessoal, um objetivo, uma atividade ou um assunto de interesse. O texto deverá possuir pelo menos oito frases e incluir informações temporais, verbos em diferentes tempos, uma opinião e pelo menos dois conectores. Depois da escrita, o aluno deverá revisar partículas, conjugações, ordem das palavras e coerência. A avaliação deve considerar tanto a correção gramatical quanto a capacidade de transmitir uma mensagem compreensível.",
      examples: [
        {
          jp: "私の好きなことは日本語を勉強することです。毎日、新しい言葉を覚えています。最初はひらがなを読むことも難しかったですが、少しずつ読めるようになりました。今は漢字も勉強しています。漢字は難しいけれど、新しい言葉が分かると、とてもうれしいです。いつか日本へ行って、日本語で話したいです。",
          pt: "Uma das coisas de que gosto é estudar japonês. Todos os dias, aprendo palavras novas. No começo, até ler hiragana era difícil, mas aos poucos passei a conseguir ler. Agora também estudo kanji. Kanji é difícil, mas fico muito feliz quando entendo palavras novas. Algum dia, quero ir ao Japão e conversar em japonês."
        }
      ],
      keyPoints: [
        "Produza um texto de pelo menos oito frases.",
        "Utilize vocabulário de diferentes assuntos.",
        "Inclua passado, presente e planos.",
        "Utilize pelo menos dois conectores.",
        "Apresente uma opinião pessoal.",
        "Revise e corrija o próprio texto."
      ]
    }
  ]
},

// ======================================================
// SEMANA 48 — CONVERSAÇÃO
// ======================================================

{
  title: "Conversação — Perguntas, respostas e situações",
  goal: "Desenvolver a capacidade de participar de conversas em japonês, formular perguntas, responder espontaneamente, manter diálogos e utilizar expressões adequadas a diferentes situações.",
  days: [
    {
      title: "Iniciando e mantendo uma conversa",
      explanation: "Uma conversa não consiste apenas em responder perguntas. Também é necessário demonstrar interesse, fazer perguntas complementares e contribuir para que o diálogo continue. Nesta aula, vamos praticar apresentações, cumprimentos, perguntas pessoais e respostas. Depois de responder, procure acrescentar uma informação relacionada ao assunto. Por exemplo, se alguém perguntar sobre seus hobbies, não responda apenas com uma palavra. Explique o que gosta de fazer e pergunte sobre a outra pessoa. Essa habilidade ajuda a evitar diálogos curtos e artificiais.",
      examples: [
        { jp: "A：こんにちは。お名前は何ですか。", pt: "A: Olá. Qual é o seu nome?" },
        { jp: "B：私は田中です。あなたは？", pt: "B: Sou Tanaka. E você?" },
        { jp: "A：私はマリアです。何が好きですか。", pt: "A: Sou Maria. Do que você gosta?" },
        { jp: "B：日本語と音楽が好きです。", pt: "B: Gosto de japonês e música." },
        { jp: "A：そうですか。どんな音楽が好きですか。", pt: "A: Entendi. Que tipo de música você gosta?" },
        { jp: "B：日本の音楽が好きです。", pt: "B: Gosto de música japonesa." }
      ],
      keyPoints: [
        "Inicie conversas com cumprimentos adequados.",
        "Responda perguntas com frases completas.",
        "Acrescente informações relacionadas ao assunto.",
        "Faça perguntas complementares.",
        "Utilize expressões de reação.",
        "Procure manter o diálogo sem depender de frases decoradas."
      ]
    },
    {
      title: "Conversando sobre rotina e experiências",
      explanation: "Nesta aula, vamos praticar conversas sobre atividades cotidianas e acontecimentos passados. O aluno deverá alternar entre perguntas sobre hábitos e perguntas sobre experiências. É importante reconhecer a diferença entre 何をしますか, que pergunta sobre o que alguém faz ou fará dependendo do contexto, e 何をしましたか, que pergunta sobre algo realizado. Também vamos utilizar たことがありますか para perguntar sobre experiências acumuladas. O objetivo é conseguir conversar sobre a vida cotidiana de maneira natural.",
      examples: [
        { jp: "A：毎日、何時に起きますか。", pt: "A: Todos os dias, que horas você acorda?" },
        { jp: "B：七時に起きます。あなたは？", pt: "B: Acordo às sete. E você?" },
        { jp: "A：私は六時に起きます。昨日は何をしましたか。", pt: "A: Acordo às seis. O que você fez ontem?" },
        { jp: "B：友だちとサッカーをしました。", pt: "B: Joguei futebol com um amigo." },
        { jp: "A：日本へ行ったことがありますか。", pt: "A: Você já foi ao Japão?" },
        { jp: "B：いいえ、まだありません。でも、行きたいです。", pt: "B: Não, ainda não. Mas quero ir." }
      ],
      keyPoints: [
        "Pergunte sobre hábitos e horários.",
        "Diferencie presente e passado.",
        "Utilize たことがありますか para experiências.",
        "Acrescente informações sobre acontecimentos.",
        "Faça perguntas de continuidade.",
        "Pratique alternando os papéis de quem pergunta e responde."
      ]
    },
    {
      title: "Situações práticas: restaurante e compras",
      explanation: "Conversas em estabelecimentos exigem vocabulário específico e expressões educadas. Em um restaurante, precisamos compreender perguntas sobre pedidos, quantidades e preferências. Em uma loja, podemos perguntar o preço, o tamanho ou a disponibilidade de um produto. Nesta aula, vamos praticar dois diálogos. O aluno deverá reconhecer a intenção de cada fala e conseguir adaptar as frases para outros produtos e alimentos. A prioridade é conseguir resolver uma situação cotidiana utilizando japonês compreensível.",
      examples: [
        { jp: "店員：いらっしゃいませ。", pt: "Funcionário: Bem-vindo." },
        { jp: "客：メニューをお願いします。", pt: "Cliente: O cardápio, por favor." },
        { jp: "店員：はい、どうぞ。", pt: "Funcionário: Sim, aqui está." },
        { jp: "客：これを一つください。", pt: "Cliente: Um deste, por favor." },
        { jp: "店員：ほかに何かありますか。", pt: "Funcionário: Deseja mais alguma coisa?" },
        { jp: "客：いいえ、これだけです。", pt: "Cliente: Não, somente isso." },
        { jp: "客：これはいくらですか。", pt: "Cliente: Quanto custa isto?" },
        { jp: "店員：千円です。", pt: "Funcionário: Custa mil ienes." }
      ],
      keyPoints: [
        "Utilize expressões educadas em estabelecimentos.",
        "Peça produtos e alimentos.",
        "Pergunte preços e quantidades.",
        "Reconheça perguntas de funcionários.",
        "Adapte o diálogo para situações diferentes.",
        "Pratique sem depender de uma tradução durante a conversa."
      ]
    },
    {
      title: "Expressando opiniões e discordâncias",
      explanation: "Conversas mais desenvolvidas exigem a capacidade de apresentar opiniões e reagir ao que outra pessoa diz. Podemos utilizar と思います para expressar pensamentos, そうですね para demonstrar concordância ou reflexão, e でも ou けれども para apresentar uma opinião diferente. É importante discordar de maneira respeitosa e explicar o motivo. Nesta aula, vamos conversar sobre preferências, estudos, tecnologia, filmes e atividades. O objetivo é construir respostas que apresentem uma opinião acompanhada de justificativa.",
      examples: [
        { jp: "A：日本語は難しいと思いますか。", pt: "A: Você acha japonês difícil?" },
        { jp: "B：はい、難しいと思います。でも、面白いです。", pt: "B: Sim, acho difícil. Mas é interessante." },
        { jp: "A：私は漢字が一番難しいと思います。", pt: "A: Acho que kanji é a parte mais difícil." },
        { jp: "B：そうですね。私もそう思います。", pt: "B: Pois é. Também penso assim." },
        { jp: "A：毎日勉強することが大切ですね。", pt: "A: É importante estudar todos os dias, não é?" },
        { jp: "B：はい。少しずつ練習すれば、上手になります。", pt: "B: Sim. Se praticarmos aos poucos, melhoramos." }
      ],
      keyPoints: [
        "Expresse opiniões com と思います.",
        "Justifique suas respostas.",
        "Demonstre concordância.",
        "Apresente discordâncias respeitosamente.",
        "Utilize conectores para desenvolver ideias.",
        "Evite responder somente はい ou いいえ quando uma explicação for necessária."
      ]
    },
    {
      title: "Resolvendo situações inesperadas",
      explanation: "Nem toda conversa acontece exatamente como planejamos. Podemos não entender uma pergunta, não conhecer uma palavra ou precisar pedir que alguém repita uma informação. Nesta aula, vamos aprender a lidar com essas situações. Expressões como もう一度お願いします pedem que algo seja repetido. ゆっくり話してください pede que a pessoa fale devagar. どういう意味ですか pergunta o significado de uma expressão. Essas frases são fundamentais porque permitem continuar uma conversa mesmo quando não compreendemos tudo.",
      examples: [
        { jp: "すみません、もう一度お願いします。", pt: "Desculpe, mais uma vez, por favor." },
        { jp: "もう少しゆっくり話してください。", pt: "Fale um pouco mais devagar, por favor." },
        { jp: "この言葉はどういう意味ですか。", pt: "O que significa esta palavra?" },
        { jp: "分かりました。ありがとうございます。", pt: "Entendi. Muito obrigado." },
        { jp: "すみません、よく分かりません。", pt: "Desculpe, não entendi muito bem." },
        { jp: "紙に書いてもらえますか。", pt: "Você poderia escrever no papel para mim?" }
      ],
      keyPoints: [
        "Peça para repetir informações.",
        "Solicite que a pessoa fale mais devagar.",
        "Pergunte o significado de palavras.",
        "Avise quando não compreender.",
        "Utilize pedidos educados.",
        "Aprenda a manter a conversa mesmo diante de dificuldades."
      ]
    },
    {
      title: "Simulação de conversação completa",
      explanation: "Nesta última aula, vamos realizar uma simulação de conversa mais longa. O aluno deverá cumprimentar, apresentar-se, falar sobre sua rotina, comentar experiências, expressar opiniões e conversar sobre planos futuros. Também deverá formular perguntas e reagir às respostas do interlocutor. A atividade deve ser realizada preferencialmente em voz alta. Primeiro, o aluno pode utilizar o diálogo como referência. Depois, deverá repetir a conversa alterando informações e criando respostas próprias. O objetivo é demonstrar capacidade de comunicação, e não memorizar um roteiro.",
      examples: [
        { jp: "A：こんにちは。日本語を勉強していますか。", pt: "A: Olá. Você está estudando japonês?" },
        { jp: "B：はい、毎日勉強しています。", pt: "B: Sim, estudo todos os dias." },
        { jp: "A：どのくらい勉強していますか。", pt: "A: Há quanto tempo você estuda?" },
        { jp: "B：一年ぐらい勉強しています。", pt: "B: Estudo há aproximadamente um ano." },
        { jp: "A：日本へ行ったことがありますか。", pt: "A: Você já foi ao Japão?" },
        { jp: "B：いいえ、ありません。でも、いつか行きたいです。", pt: "B: Não, nunca fui. Mas quero ir algum dia." },
        { jp: "A：日本で何をしたいですか。", pt: "A: O que gostaria de fazer no Japão?" },
        { jp: "B：日本の町を見て、現地の人と話したいです。", pt: "B: Quero conhecer as cidades japonesas e conversar com as pessoas de lá." },
        { jp: "A：いいですね。頑張ってください。", pt: "A: Que legal. Continue se esforçando." }
      ],
      keyPoints: [
        "Inicie e mantenha uma conversa.",
        "Fale sobre rotina e experiências.",
        "Expresse opiniões e planos.",
        "Formule perguntas próprias.",
        "Utilize expressões para lidar com dificuldades.",
        "Realize a simulação em voz alta e sem ler todas as respostas."
      ]
    }
  ]
},

// ======================================================
// SEMANA 49 — CONTEÚDO REAL
// ======================================================

{
  title: "Conteúdo real — Anime, vídeos, histórias e músicas",
  goal: "Aprender a utilizar materiais autênticos em japonês como ferramentas de compreensão, desenvolvendo escuta, leitura, interpretação e reconhecimento de expressões naturais.",
  days: [
    {
      title: "Como estudar com anime de verdade",
      explanation: "Assistir a um anime não significa automaticamente estudar japonês. Para transformar um episódio em material de aprendizagem, precisamos estabelecer um objetivo e realizar atividades de compreensão. Primeiro, escolha uma cena curta, de aproximadamente um a três minutos, que apresente uma situação compreensível. Faça uma primeira reprodução sem legenda em português e tente identificar personagens, assunto e acontecimentos. Depois, utilize legendas em japonês, quando disponíveis, para conferir as palavras reconhecidas. Identifique expressões, partículas, verbos e formas de tratamento. Por fim, assista novamente sem legendas em português e responda perguntas sobre a cena. Não é necessário compreender cada palavra. O importante é desenvolver a compreensão progressivamente. Anime também pode utilizar linguagem exagerada, informal ou específica de personagens, então nem toda expressão deve ser imitada em conversas comuns.",
      examples: [
        { jp: "何をしているんだ？", pt: "O que você está fazendo?" },
        { jp: "大丈夫か？", pt: "Você está bem?" },
        { jp: "早く行こう！", pt: "Vamos logo!" },
        { jp: "本当にありがとう。", pt: "Muito obrigado de verdade." },
        { jp: "絶対に忘れない。", pt: "Nunca vou esquecer." }
      ],
      keyPoints: [
        "Escolha cenas curtas e adequadas ao seu nível.",
        "Faça uma primeira escuta sem legenda em português.",
        "Identifique personagens, assunto e acontecimentos.",
        "Utilize legendas em japonês para conferir a compreensão.",
        "Anote expressões realmente úteis.",
        "Assista novamente sem depender da tradução portuguesa.",
        "Diferencie linguagem de personagens de japonês cotidiano."
      ]
    },
    {
      title: "Estudando vídeos e conteúdos de falantes japoneses",
      explanation: "Vídeos de pessoas falando japonês são ótimos materiais para desenvolver compreensão oral. Podemos utilizar entrevistas, vlogs, vídeos educativos e conversas sobre assuntos conhecidos. Escolha um trecho curto e tente identificar o tema, as informações principais e as opiniões do falante. Depois, observe expressões recorrentes e palavras que aparecem em diferentes situações. Se houver legendas em japonês, utilize-as para conferir o que foi compreendido. Uma boa atividade consiste em escrever um resumo do vídeo em português ou japonês e responder perguntas específicas. Evite assistir passivamente enquanto lê uma tradução completa: o objetivo é testar sua compreensão.",
      examples: [
        { jp: "今日は私の一日を紹介します。", pt: "Hoje vou apresentar meu dia." },
        { jp: "朝は六時に起きました。", pt: "Acordei às seis da manhã." },
        { jp: "それから、友だちと出かけました。", pt: "Depois, saí com um amigo." },
        { jp: "最後まで見てくれて、ありがとうございます。", pt: "Obrigado por assistir até o final." },
        { jp: "また次の動画で会いましょう。", pt: "Vamos nos encontrar novamente no próximo vídeo." }
      ],
      keyPoints: [
        "Escolha vídeos com assuntos compreensíveis.",
        "Identifique o tema antes de procurar palavras.",
        "Preste atenção à pronúncia e ao ritmo.",
        "Utilize legendas japonesas como apoio.",
        "Produza um resumo do conteúdo.",
        "Repita trechos para reconhecer expressões.",
        "Não confunda assistir com compreender."
      ]
    },
    {
      title: "Utilizando histórias e contos em japonês",
      explanation: "Histórias são excelentes materiais porque apresentam personagens, acontecimentos, problemas e consequências. Esses elementos ajudam a prever o que pode acontecer e compreender palavras desconhecidas pelo contexto. Nesta aula, vamos utilizar uma história curta original como modelo de atividade. Ao trabalhar com uma história real em japonês, leia ou escute primeiro sem consultar uma tradução. Depois, identifique personagens, lugar, objetivo e acontecimentos. Procure compreender a sequência da narrativa e explique o que aconteceu utilizando suas próprias palavras. Histórias infantis, contos adaptados e narrativas com vocabulário controlado podem ser especialmente úteis.",
      examples: [
        {
          jp: "小さな鳥が森に住んでいました。ある日、鳥は大きな木の下で小さな箱を見つけました。箱を開けると、中には古い地図がありました。鳥は地図を見て、森の奥へ行くことにしました。長い道を歩いた後、美しい湖を見つけました。",
          pt: "Um pequeno pássaro vivia na floresta. Certo dia, encontrou uma pequena caixa debaixo de uma grande árvore. Quando abriu a caixa, encontrou um mapa antigo. O pássaro olhou o mapa e decidiu ir para as profundezas da floresta. Depois de caminhar por um longo caminho, encontrou um belo lago."
        },
        { jp: "小さな鳥が森に住んでいました。", pt: "Um pequeno pássaro vivia na floresta." },
        { jp: "小さな箱を見つけました。", pt: "Encontrou uma pequena caixa." },
        { jp: "中には古い地図がありました。", pt: "Dentro havia um mapa antigo." },
        { jp: "美しい湖を見つけました。", pt: "Encontrou um belo lago." }
      ],
      keyPoints: [
        "Identifique personagens e cenário.",
        "Observe a sequência dos acontecimentos.",
        "Procure compreender o problema e o objetivo da história.",
        "Utilize o contexto para interpretar vocabulário.",
        "Faça um resumo sem copiar as frases originais.",
        "Experimente histórias com níveis progressivamente maiores."
      ]
    },
    {
      title: "Utilizando músicas como material de compreensão",
      explanation: "Músicas podem ajudar a reconhecer pronúncia, ritmo, vocabulário e expressões. Entretanto, estudar com música exige mais do que ouvir repetidamente. Escolha uma música adequada ao seu nível e trabalhe com pequenos trechos. Primeiro, escute sem consultar a tradução e tente identificar palavras conhecidas. Depois, procure uma transcrição japonesa autorizada ou disponibilizada pelo próprio material. Identifique vocabulário, expressões e estruturas gramaticais. Em seguida, escreva uma explicação do sentido do trecho utilizando suas próprias palavras. Músicas podem utilizar metáforas, omissões e construções poéticas, então nem sempre devem ser interpretadas literalmente. Não é necessário memorizar letras: a finalidade é compreender o idioma.",
      examples: [
        { jp: "会いたいです。", pt: "Quero encontrar você." },
        { jp: "夢を忘れないでください。", pt: "Não se esqueça dos sonhos." },
        { jp: "遠くにいても、心は一緒です。", pt: "Mesmo estando longe, nossos corações estão juntos." },
        { jp: "いつかまた会いましょう。", pt: "Vamos nos encontrar novamente algum dia." }
      ],
      keyPoints: [
        "Escolha músicas com vocabulário acessível.",
        "Escute primeiro sem tradução.",
        "Utilize transcrições japonesas autorizadas quando disponíveis.",
        "Identifique palavras e estruturas gramaticais.",
        "Considere metáforas e linguagem poética.",
        "Explique o sentido do trecho com suas próprias palavras.",
        "Não trate a tradução como substituta da compreensão."
      ]
    },
    {
      title: "Analisando diálogos e cenas de situações reais",
      explanation: "Nesta aula, vamos analisar uma cena ou diálogo como se estivéssemos investigando uma situação. Primeiro, identifique quem está falando e qual é o relacionamento entre os participantes. Depois, descubra o objetivo de cada personagem, as informações transmitidas e as possíveis intenções indiretas. Observe também o nível de formalidade, a entonação e as expressões utilizadas. Ao terminar, escreva um pequeno relatório explicando o que aconteceu. Essa atividade ajuda a transformar o consumo de conteúdo em uma prática ativa de interpretação.",
      examples: [
        { jp: "A：どうして来なかったんですか。", pt: "A: Por que você não veio?" },
        { jp: "B：急に用事ができたんです。", pt: "B: Surgiu um compromisso de repente." },
        { jp: "A：そうだったんですか。", pt: "A: Ah, foi isso?" },
        { jp: "B：連絡できなくて、すみませんでした。", pt: "B: Desculpe por não ter conseguido avisar." },
        { jp: "A：大丈夫ですよ。", pt: "A: Tudo bem." }
      ],
      keyPoints: [
        "Identifique os participantes.",
        "Observe a relação entre eles.",
        "Descubra o motivo da conversa.",
        "Reconheça formalidade e entonação.",
        "Interprete intenções pelo contexto.",
        "Produza um relatório sobre a cena.",
        "Diferencie o que foi dito do que foi apenas sugerido."
      ]
    },
    {
      title: "Projeto: transformar um conteúdo em uma aula",
      explanation: "Nesta última aula, o aluno deverá escolher um conteúdo real em japonês e transformá-lo em uma pequena atividade de estudo. Pode ser uma cena de anime, um vídeo curto, uma história ou uma música. O material precisa ser adequado ao nível e possuir uma transcrição ou apoio de compreensão quando possível. O aluno deverá registrar o tipo de conteúdo, o assunto, as palavras reconhecidas, as expressões novas, a gramática identificada e um resumo do significado. Também deverá criar cinco perguntas de compreensão sobre o material. O objetivo é aprender a estudar conteúdos autênticos de maneira independente, sem depender de uma tradução pronta.",
      examples: [
        { jp: "何について話していますか。", pt: "Sobre o que estão falando?" },
        { jp: "誰が話していますか。", pt: "Quem está falando?" },
        { jp: "何が起こりましたか。", pt: "O que aconteceu?" },
        { jp: "どうしてそう思いますか。", pt: "Por que você pensa assim?" },
        { jp: "この場面の大切な言葉は何ですか。", pt: "Quais são as palavras importantes desta cena?" }
      ],
      keyPoints: [
        "Escolha um conteúdo autêntico.",
        "Registre o assunto e o tipo de material.",
        "Identifique vocabulário e gramática.",
        "Produza um resumo com suas próprias palavras.",
        "Crie cinco perguntas de compreensão.",
        "Responda sem consultar uma tradução completa.",
        "Demonstre que utilizou o conteúdo como material de estudo."
      ]
    }
  ]
},

// ======================================================
// SEMANA 50 — IMERSÃO
// ======================================================

{
  title: "Imersão — Leitura, escuta, escrita e vocabulário",
  goal: "Integrar as principais habilidades do japonês em atividades completas, utilizando leitura, compreensão oral, escrita e vocabulário em conjunto.",
  days: [
    {
      title: "Imersão por leitura e vocabulário",
      explanation: "Nesta aula, vamos trabalhar com um texto em japonês e utilizar a leitura para desenvolver vocabulário. Primeiro, leia o texto inteiro sem interromper a cada palavra desconhecida. Depois, identifique o assunto, os acontecimentos e as informações principais. Na segunda leitura, destaque palavras importantes e tente descobrir seus significados pelo contexto. Por último, registre as palavras novas em um caderno, incluindo a leitura, o significado e uma frase original. O objetivo não é decorar listas isoladas, mas aprender palavras dentro de situações reais.",
      examples: [
        {
          jp: "日本の学校では、毎日いろいろなことを勉強します。学生たちは教室で先生の話を聞いたり、友だちと一緒に活動したりします。授業が終わると、家へ帰る学生もいれば、部活動をする学生もいます。",
          pt: "Nas escolas japonesas, os estudantes aprendem várias coisas todos os dias. Eles escutam os professores nas salas de aula e realizam atividades com os amigos. Quando as aulas terminam, alguns estudantes voltam para casa, enquanto outros participam de atividades extracurriculares."
        },
        { jp: "学校", pt: "Escola." },
        { jp: "学生", pt: "Estudante." },
        { jp: "教室", pt: "Sala de aula." },
        { jp: "授業", pt: "Aula." },
        { jp: "活動", pt: "Atividade." },
        { jp: "部活動", pt: "Atividade de clube escolar." }
      ],
      keyPoints: [
        "Leia primeiro para compreender a ideia geral.",
        "Identifique palavras importantes.",
        "Utilize o contexto para inferir significados.",
        "Registre leitura e significado das palavras.",
        "Crie frases próprias com o vocabulário novo.",
        "Evite decorar palavras sem compreender sua utilização."
      ]
    },
    {
      title: "Imersão por escuta e compreensão",
      explanation: "Nesta aula, vamos utilizar um diálogo em japonês como material de compreensão auditiva. Primeiro, escute sem consultar a transcrição. Tente identificar os participantes, o assunto e as informações principais. Depois, escute novamente procurando horários, lugares, motivos e intenções. Só então consulte a transcrição para verificar sua compreensão. Na terceira escuta, procure acompanhar o diálogo sem precisar ler todas as palavras. Se não houver gravação disponível, o roteiro pode ser lido em voz alta por outra pessoa, mas a atividade não deve ser considerada uma avaliação auditiva completa quando realizada apenas pela leitura silenciosa.",
      examples: [
        { jp: "A：最近、何か新しいことを始めましたか。", pt: "A: Você começou alguma coisa nova ultimamente?" },
        { jp: "B：はい、日本語の本を読むようになりました。", pt: "B: Sim, comecei a ler livros em japonês." },
        { jp: "A：どうですか。難しいですか。", pt: "A: Como está sendo? É difícil?" },
        { jp: "B：最初は難しかったですが、今は少し分かるようになりました。", pt: "B: No começo era difícil, mas agora comecei a entender um pouco." },
        { jp: "A：すごいですね。これからも頑張ってください。", pt: "A: Que incrível. Continue se esforçando." }
      ],
      keyPoints: [
        "Escute antes de consultar a transcrição.",
        "Identifique assunto e participantes.",
        "Procure informações específicas.",
        "Confira o que compreendeu.",
        "Repita a escuta sem tradução portuguesa.",
        "Registre expressões reconhecidas.",
        "Utilize áudio real para avaliar compreensão oral."
      ]
    },
    {
      title: "Imersão por escrita e produção de respostas",
      explanation: "Depois de ler e escutar, precisamos produzir informações em japonês. Nesta aula, o aluno deverá escrever respostas sobre um texto ou diálogo estudado. Primeiro, organize as informações principais. Depois, produza frases próprias utilizando o vocabulário aprendido. Evite copiar exatamente as frases do material. O desafio é demonstrar que compreendeu o conteúdo e consegue expressá-lo de outra maneira. Ao final, escreva um pequeno resumo e uma opinião pessoal sobre o assunto.",
      examples: [
        { jp: "この文章は学校について書いています。", pt: "Este texto fala sobre escolas." },
        { jp: "学生たちは毎日いろいろなことを勉強します。", pt: "Os estudantes aprendem várias coisas todos os dias." },
        { jp: "私はこの話が面白いと思います。", pt: "Acho esta história interessante." },
        { jp: "私も日本の学校についてもっと知りたいです。", pt: "Também quero conhecer mais sobre as escolas japonesas." }
      ],
      keyPoints: [
        "Produza respostas próprias.",
        "Utilize informações do material estudado.",
        "Evite copiar frases integralmente.",
        "Inclua vocabulário novo.",
        "Escreva um resumo.",
        "Apresente uma opinião pessoal.",
        "Revise gramática e partículas."
      ]
    },
    {
      title: "Imersão integrada: leitura e escuta",
      explanation: "Nesta aula, vamos trabalhar com um mesmo conteúdo por meio de leitura e escuta. Primeiro, o aluno escuta o material sem consultar o texto. Depois, realiza a leitura e identifica as informações que não conseguiu reconhecer durante a escuta. Em seguida, escuta novamente acompanhando o texto japonês. Essa comparação permite descobrir quais palavras são conhecidas visualmente, mas ainda não são reconhecidas quando pronunciadas. Também ajuda a perceber diferenças de ritmo, entonação e pronúncia. O objetivo é aproximar a compreensão escrita da compreensão oral.",
      examples: [
        {
          jp: "今日は朝から忙しい一日でした。午前中は学校で勉強して、午後は友だちと図書館へ行きました。図書館では日本語の本を読みました。分からない言葉もありましたが、辞書を使って調べました。家に帰ってから、今日勉強したことをノートに書きました。",
          pt: "Hoje foi um dia movimentado desde a manhã. Durante a manhã, estudei na escola e, à tarde, fui à biblioteca com um amigo. Na biblioteca, li um livro em japonês. Havia palavras que eu não entendia, mas pesquisei utilizando um dicionário. Depois de voltar para casa, escrevi no caderno o que estudei hoje."
        },
        { jp: "午前中は学校で勉強しました。", pt: "Estudei na escola durante a manhã." },
        { jp: "午後は友だちと図書館へ行きました。", pt: "À tarde, fui à biblioteca com um amigo." },
        { jp: "辞書を使って調べました。", pt: "Pesquisei utilizando um dicionário." },
        { jp: "今日勉強したことをノートに書きました。", pt: "Escrevi no caderno o que estudei hoje." }
      ],
      keyPoints: [
        "Escute o material antes de ler.",
        "Compare compreensão oral e escrita.",
        "Identifique palavras reconhecidas apenas na leitura.",
        "Acompanhe a gravação utilizando o texto japonês.",
        "Observe pronúncia e entonação.",
        "Resuma o conteúdo.",
        "Repita o exercício com novos materiais."
      ]
    },
    {
      title: "Imersão em vocabulário e situações reais",
      explanation: "A imersão também exige reconhecer palavras em diferentes contextos. Uma palavra pode apresentar significados ou utilizações diferentes dependendo da frase. Nesta aula, vamos trabalhar com vocabulário relacionado a deslocamentos, alimentação, estudos, comunicação e atividades cotidianas. O aluno deverá identificar as palavras dentro de frases, perceber suas relações e construir exemplos próprios. Também deverá reconhecer expressões que aparecem frequentemente em diálogos e textos. A prioridade é conseguir utilizar o vocabulário, e não apenas reconhecer sua tradução.",
      examples: [
        { jp: "駅で友だちに会いました。", pt: "Encontrei um amigo na estação." },
        { jp: "図書館で本を借りました。", pt: "Peguei um livro emprestado na biblioteca." },
        { jp: "店で新しいノートを買いました。", pt: "Comprei um caderno novo na loja." },
        { jp: "先生に質問しました。", pt: "Fiz uma pergunta ao professor." },
        { jp: "友だちと電話で話しました。", pt: "Conversei com um amigo por telefone." },
        { jp: "家族と一緒に料理を作りました。", pt: "Preparei uma refeição junto com minha família." }
      ],
      keyPoints: [
        "Reconheça palavras em frases completas.",
        "Observe o significado pelo contexto.",
        "Identifique partículas e relações.",
        "Crie frases próprias.",
        "Revise vocabulário de diferentes assuntos.",
        "Pratique tanto reconhecimento quanto produção."
      ]
    },
    {
      title: "Desafio de imersão completa",
      explanation: "Nesta última aula, o aluno deverá realizar uma atividade integrada. Primeiro, lerá um texto novo. Depois, escutará um diálogo relacionado ao mesmo tema. Em seguida, responderá perguntas de compreensão e escreverá um resumo em japonês. Finalmente, deverá apresentar oralmente sua opinião sobre o assunto. A atividade deverá utilizar vocabulário conhecido, estruturas intermediárias e algumas palavras novas que possam ser compreendidas pelo contexto. O objetivo é integrar as quatro habilidades fundamentais: leitura, escuta, escrita e conversação.",
      examples: [
        {
          jp: "外国語を勉強すると、新しい世界を知ることができます。最初は分からない言葉が多くて大変ですが、毎日練習すると、少しずつ理解できるようになります。読むことも、聞くことも、話すことも大切です。自分に合った方法を見つけて、続けて勉強しましょう。",
          pt: "Quando estudamos um idioma estrangeiro, podemos conhecer um mundo novo. No começo, existem muitas palavras que não entendemos e isso é difícil, mas, quando praticamos todos os dias, aos poucos passamos a compreender. Ler, escutar e falar são atividades importantes. Vamos encontrar um método adequado e continuar estudando."
        }
      ],
      keyPoints: [
        "Leia um texto novo.",
        "Escute um diálogo relacionado.",
        "Responda perguntas de compreensão.",
        "Escreva um resumo em japonês.",
        "Apresente uma opinião oralmente.",
        "Utilize vocabulário e gramática em conjunto.",
        "Avalie quais habilidades precisam de mais prática."
      ]
    }
  ]
},

// ======================================================
// SEMANA 51 — REVISÃO FINAL
// ======================================================

{
  title: "Revisão final — Consolidando todo o japonês",
  goal: "Revisar os principais conteúdos das 50 semanas anteriores, consolidar leitura, escrita, gramática, vocabulário, compreensão oral e conversação antes da avaliação final.",
  days: [
    {
      title: "Revisão dos sistemas de escrita",
      explanation: "Nesta aula, vamos revisar os três principais sistemas de escrita utilizados no japonês: hiragana, katakana e kanji. O hiragana é utilizado em palavras japonesas, terminações gramaticais e partículas. O katakana aparece frequentemente em palavras estrangeiras, nomes e outros usos específicos. Os kanji representam unidades de significado e aparecem em grande parte do vocabulário escrito. É importante reconhecer que os três sistemas podem aparecer juntos em uma mesma frase. A revisão deverá incluir leitura, reconhecimento e escrita de palavras e frases completas.",
      examples: [
        { jp: "わたしは学生です。", pt: "Sou estudante." },
        { jp: "コーヒーを飲みます。", pt: "Bebo café." },
        { jp: "日本語を勉強しています。", pt: "Estou estudando japonês." },
        { jp: "友だちと学校へ行きます。", pt: "Vou à escola com um amigo." },
        { jp: "新しい本を読みました。", pt: "Li um livro novo." }
      ],
      keyPoints: [
        "Reconheça hiragana.",
        "Reconheça katakana.",
        "Revise os kanji estudados.",
        "Identifique palavras que misturam diferentes sistemas.",
        "Reconheça partículas e terminações em hiragana.",
        "Pratique leitura e escrita de frases completas."
      ]
    },
    {
      title: "Revisão de vocabulário e expressões",
      explanation: "Nesta aula, vamos revisar vocabulário relacionado a pessoas, família, rotina, alimentação, escola, lugares, sentimentos, natureza, viagens e comunicação. Também vamos revisar expressões cotidianas e diferenças de formalidade. O aluno deverá reconhecer palavras dentro de frases, compreender seus significados e utilizá-las em situações diferentes. A avaliação não deve depender apenas de tradução isolada: é importante demonstrar que sabe utilizar o vocabulário de maneira adequada.",
      examples: [
        { jp: "家族と旅行しました。", pt: "Viajei com minha família." },
        { jp: "学校で友だちに会いました。", pt: "Encontrei um amigo na escola." },
        { jp: "今日はとても寒いです。", pt: "Hoje está muito frio." },
        { jp: "新しい言葉を覚えました。", pt: "Aprendi palavras novas." },
        { jp: "この本はとても面白いです。", pt: "Este livro é muito interessante." },
        { jp: "もう一度お願いします。", pt: "Mais uma vez, por favor." }
      ],
      keyPoints: [
        "Revise vocabulário de diferentes assuntos.",
        "Reconheça palavras em frases completas.",
        "Diferencie expressões educadas e informais.",
        "Revise cumprimentos e reações.",
        "Utilize palavras em frases próprias.",
        "Observe o significado conforme o contexto."
      ]
    },
    {
      title: "Revisão de gramática básica e intermediária",
      explanation: "Nesta aula, vamos revisar as estruturas gramaticais estudadas ao longo do curso. Entre elas estão partículas, formas verbais, passado, negação, forma て, forma ない, forma た, desejos, comparações, condicionais, potencial, experiências, dar e receber, frases relativas e conectores. O objetivo é reconhecer essas estruturas em frases e compreender a função de cada uma. Também será necessário identificar erros comuns, como utilizar uma partícula inadequada ou misturar terminações de diferentes formas verbais.",
      examples: [
        { jp: "本を読みます。", pt: "Leio um livro." },
        { jp: "本を読みました。", pt: "Li um livro." },
        { jp: "本を読んでいます。", pt: "Estou lendo um livro." },
        { jp: "本を読まないでください。", pt: "Por favor, não leia o livro." },
        { jp: "本を読めます。", pt: "Consigo ler o livro." },
        { jp: "本を読んだことがあります。", pt: "Já li esse livro alguma vez." },
        { jp: "時間があったら、本を読みます。", pt: "Se tiver tempo, lerei um livro." },
        { jp: "音楽を聞きながら、本を読みます。", pt: "Leio um livro enquanto escuto música." }
      ],
      keyPoints: [
        "Revise partículas.",
        "Reconheça diferentes formas verbais.",
        "Revise passado, negação e forma て.",
        "Reconheça desejos e comparações.",
        "Diferencie condicionais.",
        "Revise potencial e experiência.",
        "Reconheça frases relativas e conectores."
      ]
    },
    {
      title: "Revisão de leitura e interpretação",
      explanation: "Nesta aula, vamos revisar estratégias de compreensão textual. O aluno deverá ler textos de diferentes tamanhos, identificar informações principais, reconhecer conectores e compreender palavras pelo contexto. Também deverá diferenciar informações explícitas de conclusões que podem ser inferidas. É importante não depender de tradução palavra por palavra. Uma boa interpretação demonstra compreensão da mensagem, mesmo quando algumas palavras específicas ainda são desconhecidas.",
      examples: [
        {
          jp: "山田さんは日本語を三年間勉強しています。最初は漢字を読むことが難しかったですが、毎日練習したので、今は長い文章も少し読めるようになりました。将来、日本へ行って、日本の文化についてもっと勉強したいと思っています。",
          pt: "Yamada estuda japonês há três anos. No começo, ler kanji era difícil, mas, como praticou todos os dias, agora começou a conseguir ler até textos longos. No futuro, pretende ir ao Japão e estudar mais sobre a cultura japonesa."
        },
        { jp: "三年間勉強しています。", pt: "Estuda há três anos." },
        { jp: "最初は漢字を読むことが難しかったです。", pt: "No começo, ler kanji era difícil." },
        { jp: "毎日練習したので", pt: "Como praticou todos os dias." },
        { jp: "将来、日本へ行きたいと思っています。", pt: "Pretende ir ao Japão no futuro." }
      ],
      keyPoints: [
        "Identifique o assunto principal.",
        "Localize informações específicas.",
        "Reconheça conectores e estruturas.",
        "Interprete palavras pelo contexto.",
        "Diferencie fatos e opiniões.",
        "Resuma o texto sem traduzir frase por frase."
      ]
    },
    {
      title: "Revisão de escuta, conversação e escrita",
      explanation: "Esta aula integra as habilidades de produção e compreensão. O aluno deverá escutar um diálogo, identificar informações, responder perguntas oralmente e escrever um pequeno resumo. Depois, deverá participar de uma simulação de conversa sobre o assunto. O objetivo é verificar se consegue utilizar o japonês de maneira integrada, em vez de depender apenas de exercícios escritos. A atividade deve ser realizada com áudio ou leitura em voz alta para que a parte auditiva seja realmente praticada.",
      examples: [
        { jp: "最近、何を勉強していますか。", pt: "O que você está estudando ultimamente?" },
        { jp: "日本語を勉強しています。", pt: "Estou estudando japonês." },
        { jp: "どのくらい勉強しましたか。", pt: "Por quanto tempo você estudou?" },
        { jp: "一年以上勉強しました。", pt: "Estudei por mais de um ano." },
        { jp: "日本語で話すことができますか。", pt: "Você consegue conversar em japonês?" },
        { jp: "簡単な会話ならできます。", pt: "Se for uma conversa simples, consigo." }
      ],
      keyPoints: [
        "Pratique escuta com áudio.",
        "Responda perguntas oralmente.",
        "Produza um pequeno resumo escrito.",
        "Participe de uma conversa.",
        "Utilize vocabulário e gramática estudados.",
        "Identifique dificuldades de compreensão.",
        "Pratique as quatro habilidades em conjunto."
      ]
    },
    {
      title: "Preparação para o teste final",
      explanation: "Nesta última aula de revisão, vamos preparar o aluno para a avaliação da Semana 52. A prova deverá apresentar materiais novos, e não apenas repetir exemplos das aulas. O aluno precisa revisar leitura, vocabulário, gramática, compreensão oral, interpretação, conversação e produção textual. Também deverá praticar a administração do tempo: ler as instruções, observar o contexto, responder primeiro o que sabe e revisar suas respostas. O objetivo é chegar à avaliação com uma visão clara de suas habilidades e dificuldades.",
      examples: [
        { jp: "文章を読んで、質問に答えてください。", pt: "Leia o texto e responda às perguntas." },
        { jp: "会話を聞いて、正しい答えを選んでください。", pt: "Escute o diálogo e escolha a resposta correta." },
        { jp: "自分の意見を書いてください。", pt: "Escreva sua opinião." },
        { jp: "質問に日本語で答えてください。", pt: "Responda às perguntas em japonês." },
        { jp: "分からない言葉があっても、文全体を考えてください。", pt: "Mesmo que existam palavras que você não conhece, considere a frase inteira." }
      ],
      keyPoints: [
        "Revise os conteúdos das semanas anteriores.",
        "Pratique com textos inéditos.",
        "Pratique compreensão auditiva.",
        "Prepare-se para responder oralmente.",
        "Revise produção escrita.",
        "Leia as instruções cuidadosamente.",
        "A avaliação deve verificar compreensão real, não apenas memorização."
      ]
    }
  ]
},

// ======================================================
// SEMANA 52 — TESTE FINAL
// ======================================================

{
  title: "Teste final — Avaliação de compreensão e comunicação",
  goal: "Avaliar a capacidade de compreender textos novos, interpretar diálogos, reconhecer informações em áudio, responder perguntas, conversar e produzir textos próprios em japonês.",
  days: [
    {
      title: "Teste final — Interpretação de um texto novo",
      explanation: "Nesta aula, o aluno deverá ler um texto que não apareceu anteriormente no currículo. A avaliação deve verificar a capacidade de identificar assunto, personagens, acontecimentos, motivos, opiniões e informações implícitas. O texto deve utilizar vocabulário e estruturas compatíveis com os conteúdos estudados, mas apresentar combinações novas. As perguntas devem exigir compreensão real, incluindo identificação de informações, interpretação de expressões e conclusão baseada no contexto. Não será suficiente traduzir palavras isoladas: o aluno deverá demonstrar que compreendeu a mensagem completa.",
      examples: [
        {
          jp: "佐藤さんは去年、新しい町に引っ越しました。最初は友だちが少なくて、毎日少し寂しかったです。しかし、近くの図書館で日本語の勉強会に参加してから、たくさんの人と知り合いました。今では週末に友だちと会って、一緒に本を読んだり、町を歩いたりしています。佐藤さんは、新しい場所で生活することは大変ですが、新しい経験ができるので楽しいと思っています。",
          pt: "Sato mudou-se para uma cidade nova no ano passado. No começo, tinha poucos amigos e se sentia um pouco solitário todos os dias. Entretanto, depois de participar de um grupo de estudos de japonês na biblioteca próxima, conheceu muitas pessoas. Atualmente, encontra amigos nos fins de semana, lê livros com eles e passeia pela cidade. Sato acha que viver em um lugar novo é difícil, mas divertido porque proporciona novas experiências."
        }
      ],
      keyPoints: [
        "O texto deve ser inédito para o aluno.",
        "Identifique assunto e personagens.",
        "Compreenda acontecimentos e mudanças.",
        "Localize motivos e opiniões.",
        "Interprete informações pelo contexto.",
        "Responda perguntas utilizando evidências do texto.",
        "Não dependa de tradução palavra por palavra."
      ]
    },
    {
      title: "Teste final — Compreensão de áudio novo",
      explanation: "Nesta aula, o aluno deverá escutar um diálogo inédito em japonês. A gravação deverá ser reproduzida sem apresentar a transcrição inicialmente. Na primeira reprodução, o aluno deverá identificar o assunto e os participantes. Na segunda, deverá localizar informações específicas, como horários, lugares, motivos e planos. Depois, deverá responder perguntas de compreensão. A transcrição poderá ser apresentada somente depois da tentativa, para permitir a conferência. A avaliação deve considerar se o aluno compreendeu a mensagem oral, e não se conseguiu ler o texto.",
      examples: [
        { jp: "A：来月、新しい仕事を始めるんです。", pt: "A: No próximo mês, vou começar um trabalho novo." },
        { jp: "B：そうなんですか。どんな仕事ですか。", pt: "B: É mesmo? Que tipo de trabalho?" },
        { jp: "A：外国の人と話す仕事です。だから、英語も勉強しています。", pt: "A: É um trabalho em que converso com estrangeiros. Por isso, também estou estudando inglês." },
        { jp: "B：大変そうですね。でも、いい経験になりそうです。", pt: "B: Parece difícil. Mas parece que será uma boa experiência." },
        { jp: "A：はい。最初は少し心配ですが、頑張りたいです。", pt: "A: Sim. Estou um pouco preocupado no começo, mas quero me esforçar." }
      ],
      keyPoints: [
        "Utilize uma gravação inédita.",
        "Não mostre a transcrição antes da escuta.",
        "Identifique participantes e assunto.",
        "Reconheça informações específicas.",
        "Responda perguntas sobre o diálogo.",
        "Confira a transcrição somente depois.",
        "Avalie a compreensão auditiva separadamente da leitura."
      ]
    },
    {
      title: "Teste final — Interpretação de diálogo",
      explanation: "Nesta aula, o aluno deverá interpretar um diálogo novo, observando não apenas o significado literal das frases, mas também as intenções dos participantes. Será necessário identificar o relacionamento entre eles, o motivo da conversa, as opiniões apresentadas e possíveis informações indiretas. Algumas respostas poderão depender de contexto, entonação e continuidade do diálogo. O aluno deverá justificar suas interpretações com base nas informações apresentadas. A avaliação deve verificar se consegue acompanhar uma conversa e compreender o que está acontecendo.",
      examples: [
        { jp: "A：今週の日曜日、何か予定がありますか。", pt: "A: Você tem algum compromisso neste domingo?" },
        { jp: "B：午前中は予定がありますが、午後は暇です。", pt: "B: Tenho um compromisso durante a manhã, mas estou livre à tarde." },
        { jp: "A：それなら、一緒に新しい映画を見ませんか。", pt: "A: Nesse caso, quer assistir a um filme novo comigo?" },
        { jp: "B：いいですね。でも、映画館は少し遠いですね。", pt: "B: Boa ideia. Mas o cinema é um pouco longe." },
        { jp: "A：駅の近くにも映画館がありますよ。", pt: "A: Também existe um cinema perto da estação." },
        { jp: "B：それなら大丈夫です。何時に会いましょうか。", pt: "B: Nesse caso, tudo bem. Que horas vamos nos encontrar?" }
      ],
      keyPoints: [
        "Identifique o objetivo do diálogo.",
        "Reconheça as intenções dos participantes.",
        "Observe condições e sugestões.",
        "Interprete respostas pelo contexto.",
        "Identifique como o problema foi resolvido.",
        "Justifique suas conclusões.",
        "Demonstre compreensão da conversa inteira."
      ]
    },
    {
      title: "Teste final — Produção escrita",
      explanation: "Nesta aula, o aluno deverá produzir um texto original em japonês sobre um tema apresentado somente no momento da avaliação. O tema poderá envolver uma experiência, uma viagem, um objetivo, uma rotina ou uma opinião. O texto deverá apresentar pelo menos dez frases, utilizar vocabulário variado e incluir diferentes estruturas gramaticais estudadas. Será necessário organizar as ideias, utilizar partículas adequadas, apresentar informações em sequência e construir uma conclusão. A correção deverá considerar clareza, coerência, gramática, vocabulário e capacidade de transmitir uma mensagem própria.",
      examples: [
        { jp: "自分の経験について書いてください。", pt: "Escreva sobre uma experiência pessoal." },
        { jp: "将来の目標について説明してください。", pt: "Explique seus objetivos para o futuro." },
        { jp: "好きなことと、その理由を書いてください。", pt: "Escreva sobre algo de que gosta e explique o motivo." },
        { jp: "日本語を勉強して、何ができるようになりましたか。", pt: "O que você passou a conseguir fazer depois de estudar japonês?" }
      ],
      keyPoints: [
        "Produza pelo menos dez frases.",
        "Utilize vocabulário variado.",
        "Inclua diferentes tempos verbais.",
        "Apresente uma opinião e justificativas.",
        "Organize começo, desenvolvimento e conclusão.",
        "Revise partículas e conjugações.",
        "Não copie textos das aulas anteriores."
      ]
    },
    {
      title: "Teste final — Conversação e resposta espontânea",
      explanation: "Nesta aula, o aluno deverá participar de uma conversa simulada sem receber todas as respostas antecipadamente. O avaliador deverá fazer perguntas sobre apresentação, rotina, experiências, preferências, opiniões e planos. O aluno deverá responder em japonês e também formular perguntas próprias. Algumas perguntas poderão apresentar situações inesperadas, exigindo que o aluno peça esclarecimentos ou explique que não compreendeu determinada expressão. A avaliação deve considerar compreensão, clareza, capacidade de resposta, vocabulário e continuidade da conversa. Não é necessário falar perfeitamente: o objetivo é demonstrar comunicação funcional.",
      examples: [
        { jp: "自己紹介をしてください。", pt: "Apresente-se." },
        { jp: "最近、何を勉強していますか。", pt: "O que você está estudando ultimamente?" },
        { jp: "今までにどんな経験をしましたか。", pt: "Que experiências você já teve?" },
        { jp: "将来、何をしたいですか。", pt: "O que deseja fazer no futuro?" },
        { jp: "日本語を勉強して、一番難しいことは何ですか。", pt: "Depois de estudar japonês, qual é a coisa mais difícil?" },
        { jp: "分からない時、どうしますか。", pt: "O que você faz quando não entende?" }
      ],
      keyPoints: [
        "Apresente-se em japonês.",
        "Responda perguntas espontaneamente.",
        "Fale sobre experiências e planos.",
        "Expresse opiniões.",
        "Faça perguntas ao interlocutor.",
        "Utilize expressões para pedir esclarecimentos.",
        "Mantenha uma conversa sem depender de um roteiro decorado."
      ]
    },
    {
      title: "Conclusão — Avaliação integrada de japonês",
      explanation: "Esta é a última aula da Academia de Japonês. O aluno deverá realizar uma atividade integrada que combine leitura, escuta, interpretação, escrita e conversação. O material deverá ser novo e apresentar uma situação comunicativa completa. Primeiro, o aluno receberá um texto ou contexto inicial. Depois, escutará um diálogo relacionado. Em seguida, responderá perguntas, produzirá um texto e apresentará uma resposta oral. Ao terminar, receberá uma avaliação das habilidades demonstradas, com identificação dos pontos fortes e dos conteúdos que ainda precisam de prática. A conclusão do curso não significa que o aluno conhece todo o japonês ou que atingiu fluência. Significa que construiu uma base intermediária de compreensão e comunicação, capaz de permitir que continue aprendendo com materiais cada vez mais autênticos.",
      examples: [
        {
          jp: "新しい言葉を学ぶことは、簡単ではありません。しかし、毎日少しずつ続ければ、できることが増えていきます。大切なのは、間違いを恐れずに読んで、聞いて、書いて、話すことです。これからも日本語を勉強して、新しい世界を知っていきましょう。",
          pt: "Aprender palavras novas não é fácil. Entretanto, se continuarmos um pouco todos os dias, as coisas que conseguimos fazer vão aumentar. O importante é ler, escutar, escrever e falar sem ter medo de cometer erros. Vamos continuar estudando japonês e conhecendo um mundo novo."
        }
      ],
      keyPoints: [
        "Realize uma atividade integrada com material inédito.",
        "Demonstre compreensão de leitura.",
        "Demonstre compreensão auditiva.",
        "Interprete informações e intenções.",
        "Produza um texto próprio.",
        "Participe de uma conversa.",
        "Receba uma avaliação individual das quatro habilidades.",
        "Identifique os próximos passos de aprendizagem."
      ]
    }
  ]
},


  // ==========================================
  // COLE A SEMANA 1 AQUI
  // ==========================================


  // ==========================================
  // COLE A SEMANA 2 AQUI
  // ==========================================


  // ==========================================
  // COLE A SEMANA 3 AQUI
  // ==========================================


  // Continue adicionando as semanas em ordem.
];


// ============================================
// INGLÊS
// ============================================

const en = [


// ======================================================
// SEMANA 1 — ESTRUTURA BASE, PRONOMES E PRESENTE DO TO BE
// ======================================================

{
  title: "Estrutura base — Pronomes e verbo To Be",
  goal: "Compreender os sons essenciais do inglês, utilizar pronomes pessoais e dominar o verbo To Be em frases afirmativas, negativas e interrogativas. Conseguir apresentar-se e falar sobre si mesmo.",
  days: [
    {
      title: "Fonética e sons essenciais do inglês",
      explanation: "Antes de construir frases, precisamos compreender algumas características da pronúncia inglesa. O inglês possui sons que não existem exatamente da mesma maneira no português. Uma das diferenças mais importantes está nas vogais: a mesma letra pode apresentar sons diferentes dependendo da palavra. Também precisamos prestar atenção às consoantes finais, que frequentemente são pronunciadas e não devem ser simplesmente ignoradas. O som do TH, por exemplo, pode ser produzido com a língua próxima aos dentes. Existem duas pronúncias comuns desse grupo: uma sonora, como em THIS, e outra sem vibração das cordas vocais, como em THINK. Outra característica importante é o ritmo: palavras importantes costumam receber mais destaque, enquanto palavras gramaticais podem ser pronunciadas de maneira reduzida. Nesta primeira aula, o objetivo não é dominar todos os sons, mas reconhecer diferenças fundamentais e começar a ouvir o inglês com atenção.",
      examples: [
        { en: "CAT", pt: "Gato. O A apresenta um som diferente do A português." },
        { en: "SHE", pt: "Ela. O SH produz um som semelhante ao CH de 'chuva'." },
        { en: "THINK", pt: "Pensar. O TH é produzido com a língua próxima aos dentes, sem vibração." },
        { en: "THIS", pt: "Isto. O TH é produzido com vibração das cordas vocais." },
        { en: "NAME", pt: "Nome. O A apresenta um som longo, diferente do A de CAT." },
        { en: "BOOK", pt: "Livro. O OO apresenta um som curto." }
      ],
      keyPoints: [
        "Reconheça que letras iguais podem ter sons diferentes.",
        "Observe a diferença entre vogais curtas e longas.",
        "Pratique os sons TH, SH e CH.",
        "Não ignore as consoantes finais.",
        "Escute palavras completas em vez de depender apenas da escrita.",
        "A pronúncia deve ser praticada gradualmente."
      ]
    },
    {
      title: "Pronomes pessoais — Subject Pronouns",
      explanation: "Os pronomes pessoais substituem nomes de pessoas, animais ou coisas quando eles funcionam como sujeito da frase. Em inglês, os principais são I, YOU, HE, SHE, IT, WE e THEY. I significa eu e é sempre escrito com letra maiúscula. YOU pode significar você ou vocês. HE é utilizado para se referir a uma pessoa do gênero masculino, e SHE a uma pessoa do gênero feminino. IT é utilizado principalmente para objetos, animais quando não se especifica o gênero e situações ou ideias. WE significa nós e THEY significa eles, elas ou outras pessoas e coisas no plural. O pronome precisa combinar com o verbo utilizado. Essa relação será especialmente importante quando estudarmos o verbo To Be.",
      examples: [
        { en: "I am Caio.", pt: "Eu sou Caio." },
        { en: "You are my friend.", pt: "Você é meu amigo." },
        { en: "He is a student.", pt: "Ele é estudante." },
        { en: "She is happy.", pt: "Ela está feliz." },
        { en: "It is a dog.", pt: "É um cachorro." },
        { en: "We are friends.", pt: "Nós somos amigos." },
        { en: "They are students.", pt: "Eles são estudantes." }
      ],
      keyPoints: [
        "I = eu.",
        "YOU = você ou vocês.",
        "HE = ele.",
        "SHE = ela.",
        "IT = ele ou ela para coisas, animais e situações conforme o contexto.",
        "WE = nós.",
        "THEY = eles ou elas.",
        "I deve sempre ser escrito com letra maiúscula."
      ]
    },
    {
      title: "Verbo To Be — Forma afirmativa",
      explanation: "O verbo To Be é um dos verbos mais importantes do inglês. Dependendo do contexto, pode significar ser ou estar. No presente, ele apresenta três formas principais: AM, IS e ARE. Utilizamos AM com I, IS com HE, SHE e IT, e ARE com YOU, WE e THEY. A estrutura básica é sujeito + verbo To Be + complemento. O complemento pode indicar uma característica, uma profissão, uma identidade, um lugar ou um estado. Em português, muitas vezes traduzimos o verbo de maneiras diferentes, mas em inglês a estrutura continua seguindo a combinação correta do sujeito com AM, IS ou ARE.",
      examples: [
        { en: "I am happy.", pt: "Eu estou feliz." },
        { en: "You are intelligent.", pt: "Você é inteligente." },
        { en: "He is a teacher.", pt: "Ele é professor." },
        { en: "She is at home.", pt: "Ela está em casa." },
        { en: "It is cold.", pt: "Está frio." },
        { en: "We are students.", pt: "Nós somos estudantes." },
        { en: "They are Brazilian.", pt: "Eles são brasileiros." }
      ],
      keyPoints: [
        "I + AM.",
        "HE, SHE, IT + IS.",
        "YOU, WE, THEY + ARE.",
        "A estrutura afirmativa é sujeito + To Be + complemento.",
        "To Be pode significar ser ou estar.",
        "Não utilize AM, IS e ARE aleatoriamente."
      ]
    },
    {
      title: "Verbo To Be — Forma negativa",
      explanation: "Para transformar uma frase com To Be em negativa, basta acrescentar NOT depois do verbo. AM NOT, IS NOT e ARE NOT são as formas completas. Também existem contrações muito utilizadas na comunicação: ISN'T corresponde a IS NOT e AREN'T corresponde a ARE NOT. Com I, a forma mais comum é I'M NOT. Observe que o verbo continua combinando com o sujeito: HE ISN'T, SHE ISN'T, WE AREN'T e THEY AREN'T. Não devemos utilizar DO ou DOES para formar a negativa do verbo To Be. Essa é uma diferença importante entre To Be e outros verbos do presente simples.",
      examples: [
        { en: "I am not tired.", pt: "Eu não estou cansado." },
        { en: "You are not late.", pt: "Você não está atrasado." },
        { en: "He is not a doctor.", pt: "Ele não é médico." },
        { en: "She isn't at school.", pt: "Ela não está na escola." },
        { en: "It isn't difficult.", pt: "Não é difícil." },
        { en: "We aren't ready.", pt: "Nós não estamos prontos." },
        { en: "They aren't friends.", pt: "Eles não são amigos." }
      ],
      keyPoints: [
        "A negativa é formada com NOT depois de AM, IS ou ARE.",
        "IS NOT = ISN'T.",
        "ARE NOT = AREN'T.",
        "AM NOT pode ser contraído como I'M NOT.",
        "O verbo continua concordando com o sujeito.",
        "Não utilize DO ou DOES com o To Be nessa estrutura."
      ]
    },
    {
      title: "Verbo To Be — Perguntas e respostas",
      explanation: "Para formar perguntas utilizando o verbo To Be, colocamos AM, IS ou ARE antes do sujeito. Assim, uma frase afirmativa como YOU ARE HAPPY se transforma em ARE YOU HAPPY? A mesma regra vale para os outros pronomes. As respostas curtas são muito comuns: YES, I AM; NO, I AM NOT; YES, SHE IS; NO, SHE ISN'T. É importante perceber que a resposta curta normalmente repete o verbo utilizado na pergunta. Também podemos utilizar palavras interrogativas como WHAT, WHERE, WHO e HOW antes do verbo. WHAT pergunta o quê ou qual, WHERE pergunta onde, WHO pergunta quem e HOW pergunta como.",
      examples: [
        { en: "Are you happy?", pt: "Você está feliz?" },
        { en: "Yes, I am.", pt: "Sim, estou." },
        { en: "Is he your brother?", pt: "Ele é seu irmão?" },
        { en: "No, he isn't.", pt: "Não, ele não é." },
        { en: "Are they students?", pt: "Eles são estudantes?" },
        { en: "Where are you?", pt: "Onde você está?" },
        { en: "What is your name?", pt: "Qual é o seu nome?" },
        { en: "How are you?", pt: "Como você está?" }
      ],
      keyPoints: [
        "Coloque AM, IS ou ARE antes do sujeito.",
        "Perguntas com To Be não precisam de DO ou DOES.",
        "Utilize respostas curtas com o mesmo verbo.",
        "WHAT pergunta o quê ou qual.",
        "WHERE pergunta onde.",
        "WHO pergunta quem.",
        "HOW pergunta como."
      ]
    },
    {
      title: "Apresentação pessoal em inglês",
      explanation: "Agora vamos utilizar o que aprendemos para construir uma apresentação pessoal natural. Uma apresentação simples pode incluir nome, idade, nacionalidade, cidade, profissão ou ocupação, interesses e características. O verbo To Be aparece frequentemente nesse tipo de conversa: I AM, I'M FROM, I'M A STUDENT e I'M INTERESTED IN. Também podemos utilizar expressões como NICE TO MEET YOU para demonstrar educação ao conhecer alguém. Não precisamos decorar um discurso inteiro. O importante é compreender cada frase e conseguir substituir as informações por dados próprios. Ao final, o aluno deverá conseguir apresentar-se sem depender de um texto pronto.",
      examples: [
        { en: "Hello! My name is Alex.", pt: "Olá! Meu nome é Alex." },
        { en: "I am fifteen years old.", pt: "Eu tenho quinze anos." },
        { en: "I am from Brazil.", pt: "Eu sou do Brasil." },
        { en: "I am a student.", pt: "Eu sou estudante." },
        { en: "I am interested in sports and technology.", pt: "Tenho interesse em esportes e tecnologia." },
        { en: "I am friendly and curious.", pt: "Sou amigável e curioso." },
        { en: "Nice to meet you!", pt: "Prazer em conhecer você!" }
      ],
      keyPoints: [
        "Apresente seu nome.",
        "Informe sua idade utilizando YEARS OLD.",
        "Utilize FROM para indicar origem.",
        "Fale sobre sua ocupação.",
        "Apresente interesses e características.",
        "Utilize NICE TO MEET YOU em apresentações.",
        "Pratique uma apresentação própria sem ler."
      ]
    }
  ]
},

// ======================================================
// SEMANA 2 — PRESENT SIMPLE: AÇÕES DO COTIDIANO
// ======================================================

{
  title: "Present Simple — Ações do cotidiano",
  goal: "Compreender o presente simples, descrever hábitos e rotinas, utilizar verbos comuns e construir frases afirmativas e negativas com DO e DOES.",
  days: [
    {
      title: "O que é o Present Simple?",
      explanation: "O Present Simple é utilizado principalmente para falar sobre hábitos, rotinas, fatos gerais e situações consideradas estáveis. Diferentemente do português, o inglês normalmente não altera o verbo para cada pessoa, mas existe uma mudança importante na terceira pessoa do singular. Com I, YOU, WE e THEY, utilizamos o verbo em sua forma básica. Com HE, SHE e IT, normalmente acrescentamos S ou ES. A estrutura afirmativa é sujeito + verbo + complemento. É importante não confundir o Present Simple com o Present Continuous: o primeiro descreve hábitos e fatos, enquanto o segundo costuma indicar ações que estão acontecendo no momento.",
      examples: [
        { en: "I work every day.", pt: "Eu trabalho todos os dias." },
        { en: "You live in Brazil.", pt: "Você mora no Brasil." },
        { en: "We study English.", pt: "Nós estudamos inglês." },
        { en: "They play soccer.", pt: "Eles jogam futebol." },
        { en: "He works at home.", pt: "Ele trabalha em casa." },
        { en: "She likes music.", pt: "Ela gosta de música." },
        { en: "The sun rises in the east.", pt: "O sol nasce no leste." }
      ],
      keyPoints: [
        "Present Simple descreve hábitos, rotinas e fatos gerais.",
        "I, YOU, WE e THEY utilizam a forma básica do verbo.",
        "HE, SHE e IT normalmente recebem S ou ES no verbo.",
        "A estrutura afirmativa é sujeito + verbo + complemento.",
        "Não confunda hábitos com ações acontecendo agora."
      ]
    },
    {
      title: "Verbos comuns da rotina",
      explanation: "Para falar sobre o cotidiano, precisamos conhecer verbos utilizados em situações frequentes. WORK significa trabalhar, STUDY significa estudar, LIVE significa morar ou viver, LIKE significa gostar, PLAY significa jogar ou brincar, EAT significa comer, DRINK significa beber, GO significa ir, WAKE UP significa acordar e SLEEP significa dormir. Esses verbos podem ser combinados com horários, lugares e outras informações. Uma frase simples pode apresentar apenas uma ação, mas também pode incluir quando, onde e com quem ela acontece. Aprender os verbos dentro de frases ajuda a compreender sua utilização real.",
      examples: [
        { en: "I wake up at seven.", pt: "Eu acordo às sete." },
        { en: "I eat breakfast.", pt: "Eu tomo café da manhã." },
        { en: "I study English.", pt: "Eu estudo inglês." },
        { en: "I play soccer.", pt: "Eu jogo futebol." },
        { en: "I drink water.", pt: "Eu bebo água." },
        { en: "I go to school.", pt: "Eu vou para a escola." },
        { en: "I sleep at night.", pt: "Eu durmo à noite." }
      ],
      keyPoints: [
        "WORK = trabalhar.",
        "STUDY = estudar.",
        "LIVE = morar ou viver.",
        "LIKE = gostar.",
        "PLAY = jogar ou brincar.",
        "EAT = comer.",
        "DRINK = beber.",
        "GO = ir.",
        "WAKE UP = acordar.",
        "SLEEP = dormir."
      ]
    },
    {
      title: "Terceira pessoa — A regra do S",
      explanation: "Uma das regras mais importantes do Present Simple é a alteração do verbo quando o sujeito é HE, SHE ou IT. Na maioria dos verbos, acrescentamos S ao final: WORK vira WORKS e LIKE vira LIKES. Alguns verbos recebem ES, especialmente aqueles terminados em CH, SH, SS, X, Z e, em determinados casos, O. Por exemplo, WATCH vira WATCHES e GO vira GOES. Verbos terminados em consoante + Y geralmente trocam Y por IES: STUDY vira STUDIES. Já verbos terminados em vogal + Y apenas recebem S: PLAY vira PLAYS. O verbo HAVE é irregular nessa regra e se transforma em HAS.",
      examples: [
        { en: "I work. / He works.", pt: "Eu trabalho. / Ele trabalha." },
        { en: "You like music. / She likes music.", pt: "Você gosta de música. / Ela gosta de música." },
        { en: "They study. / He studies.", pt: "Eles estudam. / Ele estuda." },
        { en: "I watch TV. / She watches TV.", pt: "Eu assisto à TV. / Ela assiste à TV." },
        { en: "We go to school. / He goes to school.", pt: "Nós vamos à escola. / Ele vai à escola." },
        { en: "They have a dog. / She has a dog.", pt: "Eles têm um cachorro. / Ela tem um cachorro." }
      ],
      keyPoints: [
        "HE, SHE e IT exigem atenção especial.",
        "A maioria dos verbos recebe S.",
        "Terminações como CH, SH, SS e X geralmente recebem ES.",
        "Consoante + Y transforma-se em IES.",
        "Vogal + Y recebe apenas S.",
        "HAVE transforma-se em HAS.",
        "Não acrescente S aos verbos utilizados com I, YOU, WE e THEY."
      ]
    },
    {
      title: "Frases negativas com DO NOT e DOES NOT",
      explanation: "Para formar frases negativas com verbos comuns no Present Simple, utilizamos DO NOT ou DOES NOT antes do verbo principal. Com I, YOU, WE e THEY, utilizamos DO NOT, frequentemente contraído para DON'T. Com HE, SHE e IT, utilizamos DOES NOT, frequentemente contraído para DOESN'T. Uma regra fundamental: depois de DOES ou DOESN'T, o verbo principal volta para sua forma básica, sem S ou ES. Por isso, dizemos SHE DOESN'T LIKE, e não SHE DOESN'T LIKES. O DOES já carrega a marca da terceira pessoa.",
      examples: [
        { en: "I don't work on Sundays.", pt: "Eu não trabalho aos domingos." },
        { en: "You don't live here.", pt: "Você não mora aqui." },
        { en: "We don't play tennis.", pt: "Nós não jogamos tênis." },
        { en: "They don't like coffee.", pt: "Eles não gostam de café." },
        { en: "He doesn't study French.", pt: "Ele não estuda francês." },
        { en: "She doesn't watch TV.", pt: "Ela não assiste à TV." },
        { en: "It doesn't work.", pt: "Isso não funciona." }
      ],
      keyPoints: [
        "DO NOT = DON'T.",
        "DOES NOT = DOESN'T.",
        "I, YOU, WE e THEY utilizam DON'T.",
        "HE, SHE e IT utilizam DOESN'T.",
        "Depois de DOESN'T, o verbo fica na forma básica.",
        "Não utilize DOESN'T LIKES, DOESN'T WORKS ou DOESN'T STUDIES."
      ]
    },
    {
      title: "Construindo frases completas sobre hábitos",
      explanation: "Nesta aula, vamos combinar verbos, horários, lugares e informações adicionais para produzir frases mais completas. Uma frase pode começar com o sujeito, apresentar a ação e depois acrescentar quando ou onde ela acontece. Expressões como EVERY DAY, EVERY MORNING, AT NIGHT e ON WEEKENDS ajudam a indicar frequência ou período. Também podemos utilizar AND para conectar duas ações relacionadas. É importante perceber que a ordem das palavras em inglês costuma ser mais rígida do que em português. Organizar corretamente os elementos ajuda a evitar frases que parecem traduções literais.",
      examples: [
        { en: "I study English every morning.", pt: "Eu estudo inglês todas as manhãs." },
        { en: "She plays soccer after school.", pt: "Ela joga futebol depois da escola." },
        { en: "He works at a hospital.", pt: "Ele trabalha em um hospital." },
        { en: "We eat dinner at home.", pt: "Nós jantamos em casa." },
        { en: "They watch movies on weekends.", pt: "Eles assistem a filmes nos fins de semana." },
        { en: "I wake up early and drink water.", pt: "Eu acordo cedo e bebo água." }
      ],
      keyPoints: [
        "Organize sujeito, verbo e complemento.",
        "Acrescente horários e lugares.",
        "Utilize EVERY DAY para hábitos diários.",
        "Utilize AFTER SCHOOL para indicar depois da escola.",
        "Utilize AND para conectar ações.",
        "Observe a posição das expressões temporais."
      ]
    },
    {
      title: "Minha rotina em inglês",
      explanation: "Nesta aula, o aluno deverá construir uma descrição própria da rotina. Primeiro, deverá organizar as atividades em ordem cronológica. Depois, deverá transformar as informações em frases no Present Simple. O texto deve apresentar o que faz pela manhã, durante o dia e à noite. Também deverá incluir pelo menos uma frase negativa e uma frase utilizando HE ou SHE para descrever a rotina de outra pessoa. O objetivo é conseguir falar sobre atividades comuns sem depender de traduções prontas.",
      examples: [
        {
          en: "I wake up at six thirty. I eat breakfast and go to school. I study different subjects during the day. After school, I play soccer or study English. I don't watch TV every day. At night, I have dinner and go to bed.",
          pt: "Eu acordo às seis e meia. Tomo café da manhã e vou para a escola. Estudo diferentes matérias durante o dia. Depois da escola, jogo futebol ou estudo inglês. Não assisto à TV todos os dias. À noite, janto e vou dormir."
        },
        {
          en: "My brother wakes up later. He studies in the afternoon and plays video games at night.",
          pt: "Meu irmão acorda mais tarde. Ele estuda à tarde e joga videogame à noite."
        }
      ],
      keyPoints: [
        "Descreva uma rotina em ordem cronológica.",
        "Utilize pelo menos seis verbos diferentes.",
        "Inclua horários e expressões temporais.",
        "Produza frases afirmativas e negativas.",
        "Descreva também a rotina de outra pessoa.",
        "Observe a regra da terceira pessoa.",
        "Leia o texto em voz alta."
      ]
    }
  ]
},

// ======================================================
// SEMANA 3 — PERGUNTAS NO PRESENTE E FREQUÊNCIA
// ======================================================

{
  title: "Perguntas no presente — Do, Does e frequência",
  goal: "Formular perguntas no Present Simple, utilizar advérbios de frequência, responder perguntas e participar de diálogos de apresentação e rotina.",
  days: [
    {
      title: "Perguntas com DO",
      explanation: "Para fazer perguntas no Present Simple utilizando verbos comuns, utilizamos DO antes do sujeito. A estrutura é DO + sujeito + verbo na forma básica + complemento? Por exemplo, a frase YOU LIKE MUSIC se transforma em DO YOU LIKE MUSIC? O DO funciona como auxiliar e não precisa ser traduzido diretamente em português. Ele indica que estamos formando uma pergunta no presente simples. Podemos responder utilizando respostas curtas: YES, I DO ou NO, I DON'T. O verbo principal permanece na forma básica, mesmo quando a pergunta contém informações adicionais.",
      examples: [
        { en: "Do you like music?", pt: "Você gosta de música?" },
        { en: "Yes, I do.", pt: "Sim, gosto." },
        { en: "Do they play soccer?", pt: "Eles jogam futebol?" },
        { en: "No, they don't.", pt: "Não, eles não jogam." },
        { en: "Do we have English today?", pt: "Nós temos inglês hoje?" },
        { en: "What do you study?", pt: "O que você estuda?" },
        { en: "Where do you live?", pt: "Onde você mora?" }
      ],
      keyPoints: [
        "DO inicia perguntas com I, YOU, WE e THEY.",
        "A estrutura é DO + sujeito + verbo básico.",
        "O verbo principal não recebe S.",
        "YES, I DO é uma resposta curta afirmativa.",
        "NO, I DON'T é uma resposta curta negativa.",
        "WHAT e WHERE podem aparecer antes de DO."
      ]
    },
    {
      title: "Perguntas com DOES",
      explanation: "Quando o sujeito é HE, SHE ou IT, utilizamos DOES para formar perguntas no Present Simple. A estrutura é DOES + sujeito + verbo na forma básica + complemento? A mesma regra aplicada nas negativas vale aqui: o verbo principal não recebe S, porque o DOES já indica a terceira pessoa do singular. Assim, dizemos DOES SHE WORK HERE? e não DOES SHE WORKS HERE? As respostas curtas utilizam DOES ou DOESN'T. Essa estrutura é fundamental para perguntar sobre hábitos e atividades de outras pessoas.",
      examples: [
        { en: "Does he work here?", pt: "Ele trabalha aqui?" },
        { en: "Yes, he does.", pt: "Sim, trabalha." },
        { en: "Does she like coffee?", pt: "Ela gosta de café?" },
        { en: "No, she doesn't.", pt: "Não, ela não gosta." },
        { en: "Does it work?", pt: "Isso funciona?" },
        { en: "Where does he live?", pt: "Onde ele mora?" },
        { en: "What does she study?", pt: "O que ela estuda?" }
      ],
      keyPoints: [
        "DOES é utilizado com HE, SHE e IT.",
        "A estrutura é DOES + sujeito + verbo básico.",
        "Não acrescente S ao verbo principal.",
        "Respostas curtas utilizam DOES ou DOESN'T.",
        "WHAT e WHERE podem aparecer antes de DOES.",
        "Não confunda DOES HE WORK com DOES HE WORKS."
      ]
    },
    {
      title: "Advérbios de frequência — Always, Usually e outros",
      explanation: "Advérbios de frequência indicam quantas vezes uma atividade acontece. ALWAYS significa sempre, USUALLY significa geralmente, OFTEN significa frequentemente, SOMETIMES significa às vezes, RARELY significa raramente e NEVER significa nunca. Em frases com verbos comuns, esses advérbios normalmente aparecem antes do verbo principal: I ALWAYS STUDY. Com o verbo To Be, geralmente aparecem depois dele: SHE IS ALWAYS HAPPY. Essa diferença de posição é importante. Os advérbios ajudam a descrever hábitos com mais precisão e tornam as frases mais naturais.",
      examples: [
        { en: "I always study English.", pt: "Eu sempre estudo inglês." },
        { en: "She usually wakes up early.", pt: "Ela geralmente acorda cedo." },
        { en: "We often play soccer.", pt: "Nós frequentemente jogamos futebol." },
        { en: "They sometimes watch movies.", pt: "Eles às vezes assistem a filmes." },
        { en: "He rarely drinks coffee.", pt: "Ele raramente bebe café." },
        { en: "I never smoke.", pt: "Eu nunca fumo." },
        { en: "She is always happy.", pt: "Ela está sempre feliz." }
      ],
      keyPoints: [
        "ALWAYS = sempre.",
        "USUALLY = geralmente.",
        "OFTEN = frequentemente.",
        "SOMETIMES = às vezes.",
        "RARELY = raramente.",
        "NEVER = nunca.",
        "Com verbos comuns, o advérbio normalmente aparece antes do verbo.",
        "Com To Be, o advérbio normalmente aparece depois do verbo."
      ]
    },
    {
      title: "Perguntando sobre frequência",
      explanation: "Para perguntar com que frequência alguém realiza uma atividade, utilizamos HOW OFTEN. A expressão aparece no início da pergunta, seguida de DO ou DOES, dependendo do sujeito. Podemos responder utilizando advérbios de frequência ou expressões como ONCE A WEEK, TWICE A WEEK e EVERY DAY. ONCE significa uma vez, TWICE significa duas vezes e THREE TIMES significa três vezes. A palavra TIMES também é utilizada para indicar quantas vezes algo acontece. Essa estrutura permite obter informações mais específicas sobre hábitos e rotinas.",
      examples: [
        { en: "How often do you exercise?", pt: "Com que frequência você se exercita?" },
        { en: "I exercise every day.", pt: "Eu me exercito todos os dias." },
        { en: "How often does she study?", pt: "Com que frequência ela estuda?" },
        { en: "She studies twice a week.", pt: "Ela estuda duas vezes por semana." },
        { en: "How often do they play soccer?", pt: "Com que frequência eles jogam futebol?" },
        { en: "They play soccer once a week.", pt: "Eles jogam futebol uma vez por semana." },
        { en: "I rarely go to the cinema.", pt: "Eu raramente vou ao cinema." }
      ],
      keyPoints: [
        "HOW OFTEN pergunta com que frequência.",
        "Utilize DO ou DOES conforme o sujeito.",
        "ONCE A WEEK = uma vez por semana.",
        "TWICE A WEEK = duas vezes por semana.",
        "THREE TIMES A WEEK = três vezes por semana.",
        "Combine respostas com advérbios de frequência."
      ]
    },
    {
      title: "Diálogos de apresentação e rotina",
      explanation: "Nesta aula, vamos utilizar perguntas no presente simples em conversas de apresentação. Um diálogo natural pode começar com cumprimentos e perguntas sobre nome, origem e ocupação, utilizando o verbo To Be. Depois, pode avançar para perguntas sobre rotina, preferências e frequência, utilizando DO e DOES. É importante perceber que uma conversa pode misturar diferentes estruturas gramaticais. Não precisamos utilizar apenas uma regra por diálogo. O aluno deverá compreender as perguntas e formular respostas próprias, acrescentando informações para manter a conversa.",
      examples: [
        { en: "A: Hi! Where are you from?", pt: "A: Oi! De onde você é?" },
        { en: "B: I'm from Brazil. What about you?", pt: "B: Sou do Brasil. E você?" },
        { en: "A: I'm from Canada. Do you study English?", pt: "A: Sou do Canadá. Você estuda inglês?" },
        { en: "B: Yes, I do. I study every day.", pt: "B: Sim. Estudo todos os dias." },
        { en: "A: How often do you practice?", pt: "A: Com que frequência você pratica?" },
        { en: "B: I usually practice in the morning.", pt: "B: Geralmente pratico de manhã." },
        { en: "A: Do you like learning languages?", pt: "A: Você gosta de aprender idiomas?" },
        { en: "B: Yes! I really enjoy it.", pt: "B: Sim! Gosto muito disso." }
      ],
      keyPoints: [
        "Combine To Be e Present Simple.",
        "Faça perguntas sobre origem e ocupação.",
        "Pergunte sobre hábitos e preferências.",
        "Utilize HOW OFTEN.",
        "Responda com informações completas.",
        "Faça perguntas complementares.",
        "Pratique o diálogo com diferentes informações."
      ]
    },
    {
      title: "Entrevista: conhecendo outra pessoa",
      explanation: "Nesta última aula, o aluno deverá realizar uma pequena entrevista utilizando o conteúdo da semana. Primeiro, deverá preparar perguntas sobre rotina, estudos, hobbies e frequência. Depois, deverá responder às mesmas perguntas como se estivesse sendo entrevistado. O objetivo é desenvolver a capacidade de formular perguntas sem precisar consultar um modelo para cada frase. Também será necessário observar a diferença entre perguntas para YOU e perguntas sobre HE ou SHE. Ao final, o aluno deverá produzir um pequeno resumo sobre a pessoa entrevistada.",
      examples: [
        { en: "What do you do every morning?", pt: "O que você faz todas as manhãs?" },
        { en: "Do you play any sports?", pt: "Você pratica algum esporte?" },
        { en: "How often do you study English?", pt: "Com que frequência você estuda inglês?" },
        { en: "What does your friend do after school?", pt: "O que seu amigo faz depois da escola?" },
        { en: "Does your family speak English?", pt: "Sua família fala inglês?" },
        { en: "My friend usually studies at night.", pt: "Meu amigo geralmente estuda à noite." }
      ],
      keyPoints: [
        "Prepare perguntas próprias.",
        "Utilize DO e DOES corretamente.",
        "Inclua perguntas com HOW OFTEN.",
        "Utilize advérbios de frequência.",
        "Diferencie YOU de HE e SHE.",
        "Responda sem depender de frases decoradas.",
        "Escreva um resumo da entrevista."
      ]
    }
  ]
},

// ======================================================
// SEMANA 4 — PAST SIMPLE: VERBOS REGULARES
// ======================================================

{
  title: "Past Simple — Verbos regulares",
  goal: "Compreender o passado simples dos verbos regulares, utilizar a terminação -ED, formar frases afirmativas, negativas e perguntas e contar acontecimentos recentes.",
  days: [
    {
      title: "Introdução ao Past Simple",
      explanation: "O Past Simple é utilizado para falar sobre ações e acontecimentos que ocorreram e foram concluídos no passado. Uma característica importante é que a forma do verbo muda quando queremos indicar que a ação aconteceu anteriormente. Nos verbos regulares, normalmente acrescentamos ED ao final do verbo. Por exemplo, WORK transforma-se em WORKED e PLAY transforma-se em PLAYED. O Past Simple aparece frequentemente acompanhado de expressões temporais como YESTERDAY, LAST NIGHT, LAST WEEK e TWO DAYS AGO. Diferentemente do Present Simple, não precisamos utilizar DO ou DOES nas frases afirmativas do passado.",
      examples: [
        { en: "I worked yesterday.", pt: "Eu trabalhei ontem." },
        { en: "She played soccer last week.", pt: "Ela jogou futebol na semana passada." },
        { en: "We watched a movie last night.", pt: "Nós assistimos a um filme ontem à noite." },
        { en: "They studied English yesterday.", pt: "Eles estudaram inglês ontem." },
        { en: "He visited his grandmother.", pt: "Ele visitou sua avó." },
        { en: "I cleaned my room.", pt: "Eu limpei meu quarto." }
      ],
      keyPoints: [
        "Past Simple descreve ações concluídas no passado.",
        "Verbos regulares normalmente recebem ED.",
        "A forma passada é igual para todos os sujeitos.",
        "YESTERDAY = ontem.",
        "LAST WEEK = semana passada.",
        "LAST NIGHT = ontem à noite.",
        "AGO indica quanto tempo atrás algo aconteceu."
      ]
    },
    {
      title: "Formação dos verbos regulares com -ED",
      explanation: "A regra geral para formar o passado dos verbos regulares é acrescentar ED. Entretanto, existem algumas alterações ortográficas. Verbos terminados em E recebem apenas D: LIVE vira LIVED. Verbos terminados em consoante + Y normalmente trocam Y por IED: STUDY vira STUDIED. Quando terminam em vogal + Y, apenas recebem ED: PLAY vira PLAYED. Em alguns verbos curtos, a consoante final pode ser duplicada antes de ED, como STOP, que vira STOPPED. Essa duplicação depende das regras de acentuação e da estrutura da palavra, portanto não deve ser aplicada automaticamente a todos os verbos.",
      examples: [
        { en: "WORK → WORKED", pt: "Trabalhar → trabalhou." },
        { en: "PLAY → PLAYED", pt: "Jogar → jogou." },
        { en: "LIVE → LIVED", pt: "Morar → morou." },
        { en: "STUDY → STUDIED", pt: "Estudar → estudou." },
        { en: "STOP → STOPPED", pt: "Parar → parou." },
        { en: "WATCH → WATCHED", pt: "Assistir → assistiu." },
        { en: "CLEAN → CLEANED", pt: "Limpar → limpou." }
      ],
      keyPoints: [
        "Regra geral: verbo + ED.",
        "Verbos terminados em E recebem apenas D.",
        "Consoante + Y normalmente vira IED.",
        "Vogal + Y recebe ED.",
        "Alguns verbos duplicam a consoante final.",
        "Não aplique a duplicação indiscriminadamente.",
        "Pratique a escrita e a pronúncia dos verbos."
      ]
    },
    {
      title: "Pronúncia da terminação -ED",
      explanation: "A terminação ED não possui sempre a mesma pronúncia. Existem três possibilidades principais. Em verbos como WORKED e WATCHED, a terminação apresenta som de T. Em verbos como PLAYED e CLEANED, apresenta som de D. Em verbos como WANTED e NEEDED, apresenta uma sílaba adicional, com som de ID. A escolha depende do último som do verbo original, não simplesmente da última letra escrita. Depois de sons surdos como K, P, S, SH e CH, normalmente utilizamos a pronúncia T. Depois de sons sonoros e vogais, normalmente utilizamos D. Depois dos sons T e D, utilizamos ID. Reconhecer essas diferenças ajuda tanto na pronúncia quanto na compreensão auditiva.",
      examples: [
        { en: "WORKED", pt: "Terminação pronunciada como T." },
        { en: "WATCHED", pt: "Terminação pronunciada como T." },
        { en: "PLAYED", pt: "Terminação pronunciada como D." },
        { en: "CLEANED", pt: "Terminação pronunciada como D." },
        { en: "WANTED", pt: "Terminação pronunciada como ID." },
        { en: "NEEDED", pt: "Terminação pronunciada como ID." }
      ],
      keyPoints: [
        "ED pode apresentar três pronúncias.",
        "Som T após determinados sons surdos.",
        "Som D após sons sonoros e vogais.",
        "Som ID após T e D.",
        "A pronúncia depende do último som do verbo.",
        "Não pronuncie todas as terminações ED como uma sílaba separada."
      ]
    },
    {
      title: "Frases negativas com DIDN'T",
      explanation: "Para formar frases negativas no Past Simple, utilizamos DID NOT ou sua contração DIDN'T antes do verbo principal. Depois de DIDN'T, o verbo volta para sua forma básica, sem ED. Por exemplo, I WORKED transforma-se em I DIDN'T WORK. O auxiliar DID já indica que a frase está no passado, então não precisamos manter a terminação ED no verbo principal. Essa regra vale para todos os sujeitos: I, YOU, HE, SHE, IT, WE e THEY. É importante não misturar as duas marcas de passado na mesma estrutura.",
      examples: [
        { en: "I didn't work yesterday.", pt: "Eu não trabalhei ontem." },
        { en: "She didn't study last night.", pt: "Ela não estudou ontem à noite." },
        { en: "He didn't play soccer.", pt: "Ele não jogou futebol." },
        { en: "We didn't watch the movie.", pt: "Nós não assistimos ao filme." },
        { en: "They didn't visit us.", pt: "Eles não nos visitaram." },
        { en: "I didn't clean my room.", pt: "Eu não limpei meu quarto." }
      ],
      keyPoints: [
        "DID NOT = DIDN'T.",
        "DIDN'T é utilizado com todos os sujeitos.",
        "Depois de DIDN'T, utilize o verbo básico.",
        "Não escreva DIDN'T WORKED.",
        "O auxiliar DID já indica o passado.",
        "A regra também vale para verbos que serão estudados como irregulares."
      ]
    },
    {
      title: "Perguntas com DID",
      explanation: "Para formar perguntas no Past Simple, utilizamos DID antes do sujeito. A estrutura é DID + sujeito + verbo na forma básica + complemento? Assim, YOU WATCHED A MOVIE transforma-se em DID YOU WATCH A MOVIE? Observe que o verbo principal perde a terminação ED porque DID já indica o passado. As respostas curtas são YES, I DID e NO, I DIDN'T. Podemos acrescentar palavras interrogativas como WHAT, WHERE, WHEN e WHY antes de DID para perguntar sobre informações específicas. Essa estrutura permite conversar sobre acontecimentos passados.",
      examples: [
        { en: "Did you work yesterday?", pt: "Você trabalhou ontem?" },
        { en: "Yes, I did.", pt: "Sim, trabalhei." },
        { en: "Did she study English?", pt: "Ela estudou inglês?" },
        { en: "No, she didn't.", pt: "Não, ela não estudou." },
        { en: "What did you watch?", pt: "O que você assistiu?" },
        { en: "Where did they play?", pt: "Onde eles jogaram?" },
        { en: "When did he arrive?", pt: "Quando ele chegou?" }
      ],
      keyPoints: [
        "DID inicia perguntas no Past Simple.",
        "A estrutura é DID + sujeito + verbo básico.",
        "Não acrescente ED ao verbo principal.",
        "Respostas curtas utilizam DID ou DIDN'T.",
        "WHAT, WHERE, WHEN e WHY podem aparecer antes de DID.",
        "Não escreva DID YOU WATCHED."
      ]
    },
    {
      title: "Contando o que aconteceu ontem",
      explanation: "Nesta aula, vamos reunir as estruturas do Past Simple para contar acontecimentos de um dia anterior. Uma narrativa simples precisa apresentar a sequência dos fatos e pode utilizar expressões como FIRST, THEN, AFTER THAT e FINALLY. FIRST significa primeiro, THEN significa então ou depois, AFTER THAT significa depois disso e FINALLY significa finalmente. Essas expressões ajudam a organizar acontecimentos e deixam o texto mais fácil de acompanhar. O aluno deverá construir uma narrativa utilizando verbos regulares no passado, incluindo pelo menos uma frase negativa e uma pergunta sobre o acontecimento.",
      examples: [
        {
          en: "Yesterday, I visited my friend. We played soccer in the afternoon. Then, we watched a movie at his house. After that, we studied English together. I didn't stay late because I had to wake up early. It was a great day!",
          pt: "Ontem, visitei meu amigo. Jogamos futebol à tarde. Depois, assistimos a um filme na casa dele. Depois disso, estudamos inglês juntos. Não fiquei até tarde porque precisava acordar cedo. Foi um ótimo dia!"
        },
        { en: "First, I cleaned my room.", pt: "Primeiro, limpei meu quarto." },
        { en: "Then, I studied English.", pt: "Depois, estudei inglês." },
        { en: "After that, I watched a movie.", pt: "Depois disso, assisti a um filme." },
        { en: "Finally, I rested.", pt: "Finalmente, descansei." }
      ],
      keyPoints: [
        "Organize os acontecimentos cronologicamente.",
        "Utilize verbos regulares no passado.",
        "Inclua expressões de sequência.",
        "Produza pelo menos uma frase negativa.",
        "Utilize uma pergunta com DID.",
        "Escreva uma pequena narrativa sobre algo real."
      ]
    }
  ]
},

// ======================================================
// SEMANA 5 — PAST SIMPLE: VERBOS IRREGULARES
// ======================================================

{
  title: "Past Simple — Verbos irregulares essenciais",
  goal: "Reconhecer e utilizar os principais verbos irregulares do inglês, construir frases no passado e contar pequenas histórias sobre acontecimentos reais.",
  days: [
    {
      title: "O que são verbos irregulares?",
      explanation: "Nem todos os verbos do inglês formam o passado acrescentando ED. Alguns possuem formas próprias, chamadas de verbos irregulares. Por exemplo, GO transforma-se em WENT, SEE transforma-se em SAW e EAT transforma-se em ATE. Essas formas precisam ser aprendidas individualmente porque não seguem uma regra única que permita prever todas as mudanças. Apesar disso, as estruturas de frases continuam funcionando da mesma maneira que aprendemos na semana anterior. Na afirmativa, utilizamos a forma passada do verbo. Na negativa e na pergunta, utilizamos DID ou DIDN'T e o verbo retorna à forma básica.",
      examples: [
        { en: "GO → WENT", pt: "Ir → foi." },
        { en: "SEE → SAW", pt: "Ver → viu." },
        { en: "EAT → ATE", pt: "Comer → comeu." },
        { en: "HAVE → HAD", pt: "Ter → teve." },
        { en: "MAKE → MADE", pt: "Fazer → fez." },
        { en: "GET → GOT", pt: "Obter, conseguir ou receber → obteve, conseguiu ou recebeu." },
        { en: "BUY → BOUGHT", pt: "Comprar → comprou." },
        { en: "COME → CAME", pt: "Vir → veio." }
      ],
      keyPoints: [
        "Verbos irregulares não seguem a regra geral de ED.",
        "Cada verbo possui uma forma passada própria.",
        "GO vira WENT.",
        "SEE vira SAW.",
        "EAT vira ATE.",
        "HAVE vira HAD.",
        "MAKE vira MADE.",
        "GET vira GOT.",
        "A forma irregular é utilizada nas afirmativas do passado."
      ]
    },
    {
      title: "Verbos irregulares de movimento e experiências",
      explanation: "Nesta aula, vamos estudar verbos irregulares muito utilizados para falar sobre deslocamentos e experiências. GO significa ir e sua forma passada é WENT. COME significa vir e transforma-se em CAME. SEE significa ver e transforma-se em SAW. MEET significa encontrar ou conhecer alguém e transforma-se em MET. TAKE significa pegar, levar ou tomar e transforma-se em TOOK. Esses verbos aparecem frequentemente em histórias sobre viagens, encontros e atividades. Ao estudar cada um, procure aprender também as combinações comuns de palavras, como GO TO SCHOOL, COME HOME e MEET A FRIEND.",
      examples: [
        { en: "I went to school yesterday.", pt: "Eu fui à escola ontem." },
        { en: "She came home late.", pt: "Ela chegou em casa tarde." },
        { en: "We saw a beautiful bird.", pt: "Nós vimos um pássaro bonito." },
        { en: "He met his teacher.", pt: "Ele encontrou seu professor." },
        { en: "They took the bus.", pt: "Eles pegaram o ônibus." },
        { en: "I went to the park with my friends.", pt: "Fui ao parque com meus amigos." }
      ],
      keyPoints: [
        "GO → WENT.",
        "COME → CAME.",
        "SEE → SAW.",
        "MEET → MET.",
        "TAKE → TOOK.",
        "Aprenda os verbos dentro de frases.",
        "Observe as combinações frequentes de palavras."
      ]
    },
    {
      title: "Verbos irregulares de ações e atividades",
      explanation: "Agora vamos estudar verbos utilizados para falar sobre atividades cotidianas. EAT transforma-se em ATE, DRINK transforma-se em DRANK, HAVE transforma-se em HAD, MAKE transforma-se em MADE, GET transforma-se em GOT e GIVE transforma-se em GAVE. Esses verbos podem descrever alimentação, posse, criação, obtenção e ações realizadas no cotidiano. Também é importante observar que alguns possuem mais de um significado dependendo do contexto. GET, por exemplo, pode significar conseguir, receber, obter ou chegar em determinadas expressões. A melhor maneira de aprender é observar como cada verbo aparece em frases completas.",
      examples: [
        { en: "I ate pizza yesterday.", pt: "Eu comi pizza ontem." },
        { en: "She drank water.", pt: "Ela bebeu água." },
        { en: "We had a great day.", pt: "Nós tivemos um ótimo dia." },
        { en: "He made a cake.", pt: "Ele fez um bolo." },
        { en: "They got a new computer.", pt: "Eles conseguiram um computador novo." },
        { en: "I gave my friend a book.", pt: "Eu dei um livro ao meu amigo." }
      ],
      keyPoints: [
        "EAT → ATE.",
        "DRINK → DRANK.",
        "HAVE → HAD.",
        "MAKE → MADE.",
        "GET → GOT.",
        "GIVE → GAVE.",
        "Observe os diferentes significados de GET.",
        "Memorize os verbos por meio de exemplos contextualizados."
      ]
    },
    {
      title: "Perguntas e negativas com verbos irregulares",
      explanation: "Uma das maiores vantagens do sistema DID é que ele funciona tanto com verbos regulares quanto irregulares. Quando construímos uma afirmativa, utilizamos a forma passada do verbo: I WENT. Porém, na negativa, utilizamos DIDN'T GO. Na pergunta, utilizamos DID YOU GO? O verbo sempre retorna à forma básica depois de DID ou DIDN'T. Essa regra evita que o aluno precise aprender estruturas interrogativas diferentes para cada verbo irregular. Basta reconhecer qual é a forma básica e utilizar o auxiliar corretamente.",
      examples: [
        { en: "I went to the park.", pt: "Eu fui ao parque." },
        { en: "I didn't go to the park.", pt: "Eu não fui ao parque." },
        { en: "Did you go to the park?", pt: "Você foi ao parque?" },
        { en: "She ate breakfast.", pt: "Ela tomou café da manhã." },
        { en: "She didn't eat breakfast.", pt: "Ela não tomou café da manhã." },
        { en: "Did she eat breakfast?", pt: "Ela tomou café da manhã?" },
        { en: "They saw the movie.", pt: "Eles viram o filme." },
        { en: "Did they see the movie?", pt: "Eles viram o filme?" }
      ],
      keyPoints: [
        "Afirmativa utiliza a forma irregular.",
        "Negativa utiliza DIDN'T + verbo básico.",
        "Pergunta utiliza DID + sujeito + verbo básico.",
        "Não escreva DIDN'T WENT.",
        "Não escreva DID YOU SAW.",
        "DID funciona com verbos regulares e irregulares."
      ]
    },
    {
      title: "Criando pequenas narrativas no passado",
      explanation: "Nesta aula, vamos utilizar verbos regulares e irregulares para construir narrativas mais completas. Uma história simples pode apresentar um personagem, um lugar, uma sequência de acontecimentos e uma conclusão. O aluno deverá combinar verbos como WENT, SAW, HAD, ATE, MADE e PLAYED. Também deverá utilizar expressões temporais e conectores para deixar a narrativa organizada. É importante lembrar que a história precisa estar no passado de maneira consistente, exceto quando houver uma razão para utilizar outro tempo verbal, como apresentar uma opinião atual sobre o acontecimento.",
      examples: [
        {
          en: "Last Saturday, I went to the park with my family. We saw many animals and took some pictures. Then, we ate lunch together. My mother made a delicious meal. After lunch, my brother and I played soccer. We had a wonderful day and came home in the evening.",
          pt: "No sábado passado, fui ao parque com minha família. Vimos muitos animais e tiramos algumas fotos. Depois, almoçamos juntos. Minha mãe preparou uma refeição deliciosa. Depois do almoço, meu irmão e eu jogamos futebol. Tivemos um dia maravilhoso e voltamos para casa à noite."
        },
        { en: "Last Saturday, I went to the park.", pt: "No sábado passado, fui ao parque." },
        { en: "We saw many animals.", pt: "Vimos muitos animais." },
        { en: "We took some pictures.", pt: "Tiramos algumas fotos." },
        { en: "We ate lunch together.", pt: "Almoçamos juntos." },
        { en: "We had a wonderful day.", pt: "Tivemos um dia maravilhoso." }
      ],
      keyPoints: [
        "Combine verbos regulares e irregulares.",
        "Organize acontecimentos em sequência.",
        "Utilize expressões temporais.",
        "Inclua lugares, pessoas e atividades.",
        "Utilize conectores como THEN e AFTER THAT.",
        "Mantenha os acontecimentos no passado.",
        "Produza uma narrativa própria."
      ]
    },
    {
      title: "Minha história — Desafio do passado",
      explanation: "Na última aula da semana, o aluno deverá contar uma história própria utilizando os verbos irregulares estudados. A atividade pode envolver uma viagem, um passeio, um encontro, um dia especial ou qualquer acontecimento real. O texto deverá possuir pelo menos oito frases e incluir cinco verbos irregulares diferentes, além de verbos regulares. Também deverá conter uma frase negativa e uma pergunta no passado. Depois da escrita, o aluno deverá ler a narrativa em voz alta e responder perguntas sobre o que escreveu. A meta é conseguir contar algo que aconteceu sem precisar montar cada frase a partir de uma tradução literal do português.",
      examples: [
        {
          en: "Last weekend, I went to my friend's house. We played video games and watched a movie. Then, we ate pizza and drank juice. My friend showed me a new game. I liked it a lot. We didn't stay up late because we had to wake up early. It was a very fun day!",
          pt: "No fim de semana passado, fui à casa do meu amigo. Jogamos videogame e assistimos a um filme. Depois, comemos pizza e bebemos suco. Meu amigo me mostrou um jogo novo. Gostei muito dele. Não ficamos acordados até tarde porque precisávamos acordar cedo. Foi um dia muito divertido!"
        }
      ],
      keyPoints: [
        "Escreva pelo menos oito frases.",
        "Utilize cinco verbos irregulares diferentes.",
        "Inclua também verbos regulares.",
        "Produza uma frase negativa.",
        "Produza uma pergunta com DID.",
        "Organize a narrativa cronologicamente.",
        "Leia a história em voz alta.",
        "Responda perguntas sobre o próprio texto."
      ]
    }
  ]
},


// ======================================================
// SEMANA 6 — FUTURO: PLANOS E INTENÇÕES
// ======================================================

{
  title: "Future — Will e Going To",
  goal: "Aprender a falar sobre o futuro, diferenciar decisões rápidas de planos previamente organizados e descrever intenções, previsões e acontecimentos futuros.",
  days: [
    {
      title: "Introdução ao futuro em inglês",
      explanation: "Em inglês, existem diferentes maneiras de falar sobre o futuro. Duas das estruturas mais importantes são WILL e GOING TO. Ambas podem indicar acontecimentos futuros, mas são utilizadas em situações diferentes. WILL costuma aparecer em decisões tomadas no momento da fala, promessas, ofertas e previsões baseadas em opiniões. GOING TO costuma indicar planos e intenções que já existiam antes de falar, além de previsões baseadas em evidências presentes. Nesta primeira aula, vamos compreender a ideia geral dessas estruturas antes de estudar suas diferenças. O futuro não é formado simplesmente acrescentando uma terminação ao verbo: utilizamos palavras auxiliares que ajudam a indicar quando a ação acontecerá.",
      examples: [
        { en: "I will study tomorrow.", pt: "Eu estudarei amanhã." },
        { en: "She is going to travel next month.", pt: "Ela vai viajar no próximo mês." },
        { en: "We will visit our friends.", pt: "Nós visitaremos nossos amigos." },
        { en: "They are going to buy a new computer.", pt: "Eles vão comprar um computador novo." },
        { en: "He will call you later.", pt: "Ele ligará para você mais tarde." },
        { en: "I am going to learn English.", pt: "Eu vou aprender inglês." }
      ],
      keyPoints: [
        "WILL e GOING TO são estruturas comuns para falar do futuro.",
        "WILL aparece frequentemente em decisões rápidas e previsões.",
        "GOING TO aparece frequentemente em planos e intenções.",
        "TOMORROW = amanhã.",
        "NEXT WEEK = próxima semana.",
        "NEXT MONTH = próximo mês.",
        "LATER = mais tarde."
      ]
    },
    {
      title: "Will — Decisões rápidas, promessas e ofertas",
      explanation: "WILL é utilizado quando uma decisão é tomada no momento da conversa, sem necessariamente existir um planejamento anterior. Também aparece em promessas, ofertas e demonstrações de disposição para fazer alguma coisa. Sua estrutura afirmativa é sujeito + WILL + verbo na forma básica. O verbo não recebe S, ED ou qualquer outra alteração depois de WILL. Isso acontece porque o próprio auxiliar já indica o futuro. A forma contraída de WILL é frequentemente escrita como 'LL, como em I'LL, YOU'LL e SHE'LL. Em situações cotidianas, essas contrações são bastante comuns.",
      examples: [
        { en: "The phone is ringing. I will answer it.", pt: "O telefone está tocando. Eu vou atender." },
        { en: "I will help you.", pt: "Eu vou ajudar você." },
        { en: "She will call her mother.", pt: "Ela ligará para a mãe dela." },
        { en: "We will see you tomorrow.", pt: "Nós veremos você amanhã." },
        { en: "I'll open the door.", pt: "Eu vou abrir a porta." },
        { en: "They'll arrive soon.", pt: "Eles chegarão em breve." },
        { en: "I will always remember this day.", pt: "Eu sempre lembrarei deste dia." }
      ],
      keyPoints: [
        "WILL é utilizado em decisões tomadas no momento da fala.",
        "Também pode indicar promessas e ofertas.",
        "Estrutura: sujeito + WILL + verbo básico.",
        "Nunca acrescente S ou ED ao verbo depois de WILL.",
        "I'LL = I WILL.",
        "SHE'LL = SHE WILL.",
        "THEY'LL = THEY WILL."
      ]
    },
    {
      title: "Will — Negativas e perguntas",
      explanation: "Para formar a negativa com WILL, acrescentamos NOT depois do auxiliar. A forma completa é WILL NOT e a contração é WON'T. A estrutura fica sujeito + WILL NOT + verbo básico. Para perguntas, colocamos WILL antes do sujeito: WILL + sujeito + verbo básico? Essa organização é parecida com a utilizada nas perguntas do To Be, pois o auxiliar vai para o início da frase. As respostas curtas utilizam WILL ou WON'T. Também podemos usar palavras interrogativas antes de WILL, como WHAT, WHERE, WHEN e WHY.",
      examples: [
        { en: "I will not forget.", pt: "Eu não esquecerei." },
        { en: "She won't come today.", pt: "Ela não virá hoje." },
        { en: "They won't be late.", pt: "Eles não se atrasarão." },
        { en: "Will you help me?", pt: "Você vai me ajudar?" },
        { en: "Yes, I will.", pt: "Sim, vou." },
        { en: "Will he travel tomorrow?", pt: "Ele viajará amanhã?" },
        { en: "Where will you go?", pt: "Para onde você irá?" },
        { en: "What will they do?", pt: "O que eles farão?" }
      ],
      keyPoints: [
        "WILL NOT = WON'T.",
        "A negativa utiliza WILL NOT + verbo básico.",
        "Perguntas começam com WILL.",
        "Respostas curtas utilizam WILL ou WON'T.",
        "Não acrescente TO depois de WILL.",
        "WHAT, WHERE, WHEN e WHY podem aparecer antes de WILL."
      ]
    },
    {
      title: "Going To — Planos e intenções",
      explanation: "GOING TO é utilizado principalmente para falar sobre planos e intenções que já foram pensados antes do momento da fala. Sua estrutura é sujeito + AM, IS ou ARE + GOING TO + verbo básico. Observe que a estrutura começa com o verbo To Be, que precisa concordar com o sujeito. Utilizamos AM com I, IS com HE, SHE e IT, e ARE com YOU, WE e THEY. Depois de GOING TO, o verbo principal permanece na forma básica. Uma diferença importante é que GOING TO também pode indicar uma previsão baseada em sinais que já podemos observar.",
      examples: [
        { en: "I am going to study tonight.", pt: "Eu vou estudar hoje à noite." },
        { en: "She is going to travel next week.", pt: "Ela vai viajar na próxima semana." },
        { en: "We are going to play soccer tomorrow.", pt: "Nós vamos jogar futebol amanhã." },
        { en: "They are going to buy a house.", pt: "Eles vão comprar uma casa." },
        { en: "He is going to learn Japanese.", pt: "Ele vai aprender japonês." },
        { en: "Look at those clouds! It is going to rain.", pt: "Olhe aquelas nuvens! Vai chover." }
      ],
      keyPoints: [
        "GOING TO indica planos e intenções.",
        "Também pode indicar previsões baseadas em evidências.",
        "Estrutura: sujeito + AM/IS/ARE + GOING TO + verbo básico.",
        "I AM GOING TO.",
        "HE, SHE e IT IS GOING TO.",
        "YOU, WE e THEY ARE GOING TO.",
        "O verbo depois de GOING TO permanece na forma básica."
      ]
    },
    {
      title: "Will ou Going To? — Entendendo a diferença",
      explanation: "Agora vamos comparar as duas estruturas em situações concretas. Imagine que alguém oferece ajuda e você decide aceitar imediatamente. Nesse caso, WILL é natural: I'LL HELP YOU. Agora imagine que você já organizou uma viagem para o próximo mês. Nesse caso, GOING TO é adequado: I'M GOING TO TRAVEL NEXT MONTH. A diferença principal está na intenção e no contexto, não apenas na presença de uma expressão temporal. Uma frase com TOMORROW pode utilizar WILL ou GOING TO dependendo do que queremos comunicar. WILL também é bastante utilizado em previsões pessoais, enquanto GOING TO aparece em previsões baseadas em sinais observáveis. Em alguns contextos, as duas formas podem ser possíveis, com pequenas diferenças de sentido ou ênfase.",
      examples: [
        { en: "The phone is ringing. I'll answer it.", pt: "O telefone está tocando. Vou atender. Decisão tomada agora." },
        { en: "I am going to visit my grandmother tomorrow.", pt: "Vou visitar minha avó amanhã. Plano já organizado." },
        { en: "I think Brazil will win.", pt: "Acho que o Brasil vencerá. Previsão ou opinião." },
        { en: "Look! That glass is going to fall.", pt: "Olhe! Aquele copo vai cair. Há um sinal visível." },
        { en: "I promise I will help you.", pt: "Prometo que vou ajudar você." },
        { en: "We are going to study together tonight.", pt: "Vamos estudar juntos hoje à noite. Intenção planejada." }
      ],
      keyPoints: [
        "WILL é comum em decisões rápidas.",
        "GOING TO é comum em planos anteriores.",
        "WILL aparece em promessas e ofertas.",
        "WILL pode expressar previsões baseadas em opiniões.",
        "GOING TO pode expressar previsões baseadas em evidências.",
        "O contexto é mais importante do que decorar uma tradução."
      ]
    },
    {
      title: "Meus planos para o próximo fim de semana",
      explanation: "Nesta aula, vamos transformar o conteúdo da semana em uma situação real: planejar o próximo fim de semana ou as próximas férias. O aluno deverá descrever atividades que já pretende realizar utilizando GOING TO. Também deverá imaginar situações inesperadas em que utilizaria WILL para tomar decisões rápidas. O texto poderá mencionar lugares, pessoas, horários, transporte e atividades de lazer. Ao final, deverá conseguir responder perguntas sobre seus planos e explicar o que pretende fazer caso alguma situação mude. O objetivo é utilizar as duas estruturas com naturalidade, sem depender de traduções palavra por palavra.",
      examples: [
        {
          en: "Next weekend, I am going to visit my friends. We are going to play soccer on Saturday morning. In the afternoon, we are going to watch a movie. On Sunday, I am going to study English and relax. If my friend needs help, I will help him.",
          pt: "No próximo fim de semana, vou visitar meus amigos. Vamos jogar futebol no sábado de manhã. À tarde, vamos assistir a um filme. No domingo, vou estudar inglês e descansar. Se meu amigo precisar de ajuda, vou ajudá-lo."
        },
        { en: "What are you going to do next weekend?", pt: "O que você vai fazer no próximo fim de semana?" },
        { en: "I am going to travel with my family.", pt: "Vou viajar com minha família." },
        { en: "Will you study on Sunday?", pt: "Você vai estudar no domingo?" },
        { en: "Yes, I will.", pt: "Sim, vou." },
        { en: "I think it will be a great weekend.", pt: "Acho que será um ótimo fim de semana." }
      ],
      keyPoints: [
        "Descreva pelo menos três planos futuros.",
        "Utilize GOING TO para intenções planejadas.",
        "Utilize WILL para uma decisão rápida ou previsão.",
        "Inclua expressões temporais.",
        "Responda perguntas sobre seus planos.",
        "Escreva um pequeno texto sobre o próximo fim de semana."
      ]
    }
  ]
},

// ======================================================
// SEMANA 7 — ROTINA E CASA: VOCABULÁRIO PRÁTICO
// ======================================================

{
  title: "Everyday Vocabulary — Casa, comida, tecnologia, trabalho e estudos",
  goal: "Ampliar o vocabulário cotidiano e utilizar palavras relacionadas ao ambiente pessoal, alimentação, compras, tecnologia, trabalho e estudos em frases completas e naturais.",
  days: [
    {
      title: "Casa e cômodos — Rooms and furniture",
      explanation: "Nesta aula, vamos aprender palavras utilizadas para descrever uma casa e seus cômodos. HOUSE significa casa como construção, enquanto HOME costuma transmitir a ideia de lar ou lugar onde alguém vive. Os principais cômodos incluem BEDROOM, quarto; BATHROOM, banheiro; KITCHEN, cozinha; LIVING ROOM, sala de estar; e DINING ROOM, sala de jantar. Também precisamos conhecer objetos comuns, como BED, cama; TABLE, mesa; CHAIR, cadeira; SOFA, sofá; WINDOW, janela; e DOOR, porta. Para indicar onde algo está, podemos utilizar expressões como IN THE BEDROOM, ON THE TABLE e NEXT TO THE DOOR. Nesta aula, vamos utilizar THERE IS e THERE ARE para dizer que existe ou existem coisas em determinado lugar.",
      examples: [
        { en: "My bedroom is small.", pt: "Meu quarto é pequeno." },
        { en: "The kitchen is clean.", pt: "A cozinha está limpa." },
        { en: "There is a bed in my room.", pt: "Há uma cama no meu quarto." },
        { en: "There are two chairs in the kitchen.", pt: "Há duas cadeiras na cozinha." },
        { en: "The book is on the table.", pt: "O livro está sobre a mesa." },
        { en: "My computer is next to the window.", pt: "Meu computador está ao lado da janela." },
        { en: "We have a sofa in the living room.", pt: "Temos um sofá na sala de estar." }
      ],
      keyPoints: [
        "HOUSE = casa como construção.",
        "HOME = lar ou casa como lugar de moradia.",
        "BEDROOM = quarto.",
        "BATHROOM = banheiro.",
        "KITCHEN = cozinha.",
        "LIVING ROOM = sala de estar.",
        "THERE IS é utilizado com singular.",
        "THERE ARE é utilizado com plural.",
        "IN, ON e NEXT TO indicam localização."
      ]
    },
    {
      title: "Comida e bebidas — Food and drinks",
      explanation: "O vocabulário de alimentação é muito útil em situações cotidianas, principalmente em casa, restaurantes e viagens. Vamos aprender nomes de alimentos, bebidas e refeições. BREAKFAST significa café da manhã, LUNCH significa almoço e DINNER significa jantar. Entre os alimentos, temos BREAD, pão; RICE, arroz; BEANS, feijão; MEAT, carne; CHICKEN, frango; FISH, peixe; FRUIT, fruta; e VEGETABLES, vegetais. Entre as bebidas, temos WATER, água; MILK, leite; JUICE, suco; e COFFEE, café. Também vamos conhecer SOME e ANY. SOME costuma aparecer em frases afirmativas, enquanto ANY é comum em negativas e perguntas. Existem exceções e diferenças de contexto, mas essa é uma boa regra inicial.",
      examples: [
        { en: "I eat bread for breakfast.", pt: "Eu como pão no café da manhã." },
        { en: "We have rice and beans for lunch.", pt: "Nós comemos arroz e feijão no almoço." },
        { en: "She drinks water every day.", pt: "Ela bebe água todos os dias." },
        { en: "There is some milk in the fridge.", pt: "Há um pouco de leite na geladeira." },
        { en: "We don't have any juice.", pt: "Não temos suco." },
        { en: "Do you have any fruit?", pt: "Você tem alguma fruta?" },
        { en: "I would like some coffee.", pt: "Eu gostaria de um pouco de café." }
      ],
      keyPoints: [
        "BREAKFAST = café da manhã.",
        "LUNCH = almoço.",
        "DINNER = jantar.",
        "BREAD = pão.",
        "RICE = arroz.",
        "BEANS = feijão.",
        "CHICKEN = frango.",
        "VEGETABLES = vegetais.",
        "SOME aparece frequentemente em afirmativas.",
        "ANY aparece frequentemente em negativas e perguntas."
      ]
    },
    {
      title: "Compras no mercado — Shopping for groceries",
      explanation: "Nesta aula, vamos aprender a utilizar o vocabulário de alimentos em uma situação prática: fazer compras no mercado. SUPERMARKET significa supermercado, SHOPPING CART significa carrinho de compras, BASKET significa cesta e CASHIER significa caixa ou operador de caixa. Também precisamos saber perguntar preços e quantidades. HOW MUCH é utilizado para perguntar o preço de algo ou a quantidade de substantivos incontáveis. HOW MANY é utilizado com substantivos contáveis no plural. Por exemplo, podemos perguntar HOW MUCH IS THIS? para saber quanto custa um produto e HOW MANY APPLES DO YOU NEED? para perguntar quantas maçãs são necessárias. Vamos também aprender expressões educadas para pedir produtos.",
      examples: [
        { en: "Where is the supermarket?", pt: "Onde fica o supermercado?" },
        { en: "How much is this bread?", pt: "Quanto custa este pão?" },
        { en: "How many apples do we need?", pt: "De quantas maçãs precisamos?" },
        { en: "I need two bottles of water.", pt: "Preciso de duas garrafas de água." },
        { en: "Can I have a bag, please?", pt: "Posso pegar uma sacola, por favor?" },
        { en: "The milk is in the shopping cart.", pt: "O leite está no carrinho de compras." },
        { en: "How much are these oranges?", pt: "Quanto custam estas laranjas?" }
      ],
      keyPoints: [
        "SUPERMARKET = supermercado.",
        "SHOPPING CART = carrinho de compras.",
        "BASKET = cesta.",
        "CASHIER = caixa ou operador de caixa.",
        "HOW MUCH pergunta preço ou quantidade incontável.",
        "HOW MANY pergunta quantidade contável.",
        "CAN I HAVE...? é uma maneira educada de pedir algo.",
        "BOTTLE OF WATER = garrafa de água."
      ]
    },
    {
      title: "Tecnologia e gadgets — Technology",
      explanation: "A tecnologia faz parte do cotidiano e possui um vocabulário próprio em inglês. COMPUTER significa computador, LAPTOP significa notebook, SMARTPHONE significa celular inteligente, KEYBOARD significa teclado, MOUSE significa mouse, SCREEN significa tela e HEADPHONES significa fones de ouvido. Também precisamos conhecer verbos relacionados ao uso de aparelhos, como TURN ON, ligar; TURN OFF, desligar; DOWNLOAD, baixar; UPLOAD, enviar ou carregar; SAVE, salvar; e CHARGE, carregar a bateria. É importante aprender a utilizar essas palavras em situações reais, como explicar que um aparelho não funciona, pedir ajuda ou descrever uma atividade realizada no computador.",
      examples: [
        { en: "My laptop is on the desk.", pt: "Meu notebook está sobre a escrivaninha." },
        { en: "I use my smartphone every day.", pt: "Eu uso meu celular todos os dias." },
        { en: "Please turn on the computer.", pt: "Por favor, ligue o computador." },
        { en: "Don't forget to save the file.", pt: "Não se esqueça de salvar o arquivo." },
        { en: "I need to charge my phone.", pt: "Preciso carregar meu celular." },
        { en: "She downloaded a new application.", pt: "Ela baixou um aplicativo novo." },
        { en: "My headphones aren't working.", pt: "Meus fones de ouvido não estão funcionando." }
      ],
      keyPoints: [
        "COMPUTER = computador.",
        "LAPTOP = notebook.",
        "SMARTPHONE = celular inteligente.",
        "KEYBOARD = teclado.",
        "SCREEN = tela.",
        "HEADPHONES = fones de ouvido.",
        "TURN ON = ligar.",
        "TURN OFF = desligar.",
        "DOWNLOAD = baixar.",
        "SAVE = salvar.",
        "CHARGE = carregar."
      ]
    },
    {
      title: "Trabalho e estudos — Work and studies",
      explanation: "Nesta aula, vamos aprender vocabulário relacionado à escola, aos estudos e ao trabalho. SCHOOL significa escola, UNIVERSITY significa universidade, CLASS significa aula ou turma, SUBJECT significa matéria, HOMEWORK significa tarefa de casa e EXAM significa prova ou exame. No ambiente profissional, temos OFFICE, escritório; JOB, emprego ou trabalho; MEETING, reunião; MANAGER, gerente; e COWORKER, colega de trabalho. Também vamos observar a diferença entre JOB e WORK. JOB costuma indicar um emprego ou cargo específico, enquanto WORK pode representar trabalho como atividade ou tarefa. Com essas palavras, podemos descrever nossa rotina de estudos e trabalho.",
      examples: [
        { en: "I have English class today.", pt: "Tenho aula de inglês hoje." },
        { en: "My favorite subject is science.", pt: "Minha matéria favorita é ciências." },
        { en: "I have homework to do.", pt: "Tenho tarefa de casa para fazer." },
        { en: "She works in an office.", pt: "Ela trabalha em um escritório." },
        { en: "He has a new job.", pt: "Ele tem um emprego novo." },
        { en: "We have a meeting tomorrow.", pt: "Temos uma reunião amanhã." },
        { en: "My coworker helps me.", pt: "Meu colega de trabalho me ajuda." }
      ],
      keyPoints: [
        "SCHOOL = escola.",
        "UNIVERSITY = universidade.",
        "CLASS = aula ou turma.",
        "SUBJECT = matéria.",
        "HOMEWORK = tarefa de casa.",
        "EXAM = prova ou exame.",
        "OFFICE = escritório.",
        "JOB = emprego ou cargo.",
        "WORK = trabalho ou atividade de trabalhar.",
        "MEETING = reunião.",
        "COWORKER = colega de trabalho."
      ]
    },
    {
      title: "Descrevendo meu ambiente — Frases completas",
      explanation: "Nesta última aula, vamos combinar o vocabulário de casa, alimentação, tecnologia, trabalho e estudos para descrever um ambiente de maneira mais completa. Para isso, vamos utilizar THERE IS e THERE ARE, adjetivos, preposições de lugar e conectores como AND, BUT e BECAUSE. Uma descrição pode apresentar o que existe em um cômodo, onde os objetos estão e como utilizamos aquele espaço. Também podemos explicar nossas atividades dentro dele. O objetivo é deixar de produzir apenas listas de palavras e começar a construir frases conectadas que transmitam informações completas.",
      examples: [
        {
          en: "My bedroom is comfortable and organized. There is a desk next to the window, and my laptop is on the desk. I use my computer to study English and do my homework. There are some books on the shelf. I also have headphones because I like listening to music while I study.",
          pt: "Meu quarto é confortável e organizado. Há uma escrivaninha ao lado da janela, e meu notebook está sobre ela. Uso meu computador para estudar inglês e fazer minhas tarefas. Há alguns livros na prateleira. Também tenho fones de ouvido porque gosto de ouvir música enquanto estudo."
        },
        { en: "There is a refrigerator in the kitchen.", pt: "Há uma geladeira na cozinha." },
        { en: "There are many books in my room.", pt: "Há muitos livros no meu quarto." },
        { en: "My computer is old, but it works well.", pt: "Meu computador é antigo, mas funciona bem." },
        { en: "I study at home because it is quiet.", pt: "Estudo em casa porque é silencioso." }
      ],
      keyPoints: [
        "Combine vocabulário de diferentes ambientes.",
        "Utilize THERE IS e THERE ARE.",
        "Descreva a localização de objetos.",
        "Utilize adjetivos para caracterizar os espaços.",
        "AND adiciona informações.",
        "BUT apresenta contraste.",
        "BECAUSE apresenta uma razão.",
        "Produza um texto próprio sobre seu ambiente."
      ]
    }
  ]
},

// ======================================================
// SEMANA 8 — AS 7 PERGUNTAS MESTRAS
// ======================================================

{
  title: "The Seven Essential Questions — As sete perguntas mestras",
  goal: "Dominar as principais palavras interrogativas do inglês, formular perguntas com diferentes estruturas, compreender respostas e manter pequenos diálogos sobre pessoas, lugares, acontecimentos, motivos e quantidades.",
  days: [
    {
      title: "WHO e WHAT — Quem e o quê?",
      explanation: "WHO é utilizado para perguntar sobre pessoas. WHAT é utilizado para perguntar sobre coisas, informações, atividades ou determinadas escolhas. Essas palavras normalmente aparecem no início de uma pergunta. Quando perguntamos sobre hábitos no Present Simple, utilizamos DO ou DOES depois da palavra interrogativa. Quando perguntamos sobre o passado, utilizamos DID. Com o verbo To Be, a organização é diferente: colocamos AM, IS ou ARE depois da palavra interrogativa e antes do sujeito, quando houver sujeito explícito. É importante entender que a palavra interrogativa não substitui os auxiliares necessários para formar a pergunta.",
      examples: [
        { en: "Who is your teacher?", pt: "Quem é seu professor?" },
        { en: "Who do you live with?", pt: "Com quem você mora?" },
        { en: "Who called you?", pt: "Quem ligou para você?" },
        { en: "What is your name?", pt: "Qual é seu nome?" },
        { en: "What do you study?", pt: "O que você estuda?" },
        { en: "What did you eat yesterday?", pt: "O que você comeu ontem?" },
        { en: "What are you going to do tomorrow?", pt: "O que você vai fazer amanhã?" }
      ],
      keyPoints: [
        "WHO = quem.",
        "WHAT = o quê ou qual, dependendo do contexto.",
        "WHO pergunta sobre pessoas.",
        "WHAT pergunta sobre informações, coisas e atividades.",
        "Utilize DO ou DOES com perguntas no Present Simple.",
        "Utilize DID com perguntas no Past Simple.",
        "Observe a estrutura quando a pergunta utiliza To Be."
      ]
    },
    {
      title: "WHERE e WHEN — Onde e quando?",
      explanation: "WHERE pergunta sobre lugares e localização. WHEN pergunta sobre tempo, datas e momentos em que algo acontece. Podemos utilizar essas palavras em perguntas no presente, passado e futuro. No Present Simple, utilizamos DO ou DOES quando a pergunta contém um verbo comum. No Past Simple, utilizamos DID. Com o verbo To Be, o próprio verbo aparece depois da palavra interrogativa. Para responder WHERE, podemos utilizar expressões de localização como AT HOME, AT SCHOOL, IN BRAZIL e NEXT TO THE PARK. Para responder WHEN, podemos utilizar expressões como TOMORROW, LAST WEEK, ON MONDAY e AT NIGHT.",
      examples: [
        { en: "Where do you live?", pt: "Onde você mora?" },
        { en: "Where is my phone?", pt: "Onde está meu celular?" },
        { en: "Where did they go?", pt: "Para onde eles foram?" },
        { en: "Where are you going to study?", pt: "Onde você vai estudar?" },
        { en: "When is your birthday?", pt: "Quando é seu aniversário?" },
        { en: "When do you wake up?", pt: "Quando você acorda?" },
        { en: "When did she arrive?", pt: "Quando ela chegou?" },
        { en: "When will we meet?", pt: "Quando vamos nos encontrar?" }
      ],
      keyPoints: [
        "WHERE = onde ou para onde, dependendo do verbo.",
        "WHEN = quando.",
        "WHERE pergunta sobre localização ou destino.",
        "WHEN pergunta sobre momentos e datas.",
        "Utilize DO, DOES ou DID quando a estrutura exigir.",
        "Com To Be, coloque o verbo depois da palavra interrogativa.",
        "Aprenda respostas com expressões de tempo e lugar."
      ]
    },
    {
      title: "WHY e BECAUSE — Por quê e porque",
      explanation: "WHY é utilizado para perguntar o motivo ou a razão de alguma coisa. BECAUSE é utilizado para apresentar uma explicação. Em perguntas com verbos comuns no presente, utilizamos WHY + DO ou DOES + sujeito + verbo básico. No passado, utilizamos WHY + DID. A resposta pode começar com BECAUSE e apresentar uma razão. Também podemos utilizar BECAUSE para conectar duas ideias em uma única frase. É importante diferenciar WHY de WHAT: WHAT pergunta o que aconteceu ou qual é a informação, enquanto WHY pergunta por qual motivo aquilo aconteceu.",
      examples: [
        { en: "Why are you happy?", pt: "Por que você está feliz?" },
        { en: "Because I passed the exam.", pt: "Porque passei na prova." },
        { en: "Why do you study English?", pt: "Por que você estuda inglês?" },
        { en: "Because I want to learn a new language.", pt: "Porque quero aprender um novo idioma." },
        { en: "Why did he leave?", pt: "Por que ele foi embora?" },
        { en: "Because he was tired.", pt: "Porque ele estava cansado." },
        { en: "I stayed home because it was raining.", pt: "Fiquei em casa porque estava chovendo." }
      ],
      keyPoints: [
        "WHY = por quê ou por que.",
        "BECAUSE = porque.",
        "WHY pergunta o motivo.",
        "BECAUSE apresenta a explicação.",
        "BECAUSE pode conectar duas ideias.",
        "A estrutura da pergunta depende do tempo verbal.",
        "Não confunda WHY com WHAT."
      ]
    },
    {
      title: "HOW — Como?",
      explanation: "HOW é utilizado para perguntar sobre maneira, condição, estado ou modo de realizar alguma atividade. É uma palavra bastante flexível e aparece em muitas expressões. HOW ARE YOU? pergunta como alguém está. HOW DO YOU GO TO SCHOOL? pergunta como alguém vai à escola. HOW DOES IT WORK? pergunta como algo funciona. Também existem combinações como HOW OLD, para perguntar idade; HOW OFTEN, para perguntar frequência; HOW LONG, para perguntar duração ou comprimento; e HOW FAR, para perguntar distância. Nesta aula, vamos aprender a reconhecer o sentido de HOW de acordo com a palavra que aparece depois dele.",
      examples: [
        { en: "How are you?", pt: "Como você está?" },
        { en: "How do you study English?", pt: "Como você estuda inglês?" },
        { en: "How does this computer work?", pt: "Como este computador funciona?" },
        { en: "How old are you?", pt: "Quantos anos você tem?" },
        { en: "How often do you exercise?", pt: "Com que frequência você se exercita?" },
        { en: "How long is the movie?", pt: "Quanto tempo dura o filme?" },
        { en: "How far is the school?", pt: "A que distância fica a escola?" }
      ],
      keyPoints: [
        "HOW = como.",
        "HOW OLD = quantos anos.",
        "HOW OFTEN = com que frequência.",
        "HOW LONG = quanto tempo ou qual comprimento.",
        "HOW FAR = a que distância.",
        "HOW pode formar expressões com significados específicos.",
        "Observe o restante da pergunta para compreender seu sentido."
      ]
    },
    {
      title: "HOW MUCH e HOW MANY — Quanto e quantos?",
      explanation: "HOW MUCH e HOW MANY são utilizados para perguntar sobre quantidades, mas não são intercambiáveis em todas as situações. HOW MANY acompanha substantivos contáveis no plural, como APPLES, BOOKS e CARS. HOW MUCH acompanha substantivos incontáveis, como WATER, MILK, MONEY e RICE. HOW MUCH também é utilizado para perguntar preços: HOW MUCH IS THIS? significa quanto custa isto? Quando falamos sobre produtos que podem ser contados individualmente, utilizamos HOW MANY. Quando falamos sobre uma quantidade de algo tratado como massa ou substância, utilizamos HOW MUCH. Alguns substantivos podem ser contáveis ou incontáveis dependendo do significado e do contexto.",
      examples: [
        { en: "How many books do you have?", pt: "Quantos livros você tem?" },
        { en: "How many apples do we need?", pt: "De quantas maçãs precisamos?" },
        { en: "How much water do you drink?", pt: "Quanta água você bebe?" },
        { en: "How much money do you need?", pt: "De quanto dinheiro você precisa?" },
        { en: "How much is this phone?", pt: "Quanto custa este celular?" },
        { en: "How many students are in the classroom?", pt: "Quantos alunos estão na sala de aula?" },
        { en: "How much rice is there?", pt: "Quanto arroz há?" }
      ],
      keyPoints: [
        "HOW MANY acompanha substantivos contáveis no plural.",
        "HOW MUCH acompanha substantivos incontáveis.",
        "HOW MUCH também pergunta preços.",
        "APPLES, BOOKS e CARS são contáveis.",
        "WATER, MILK e RICE normalmente são incontáveis.",
        "Observe o substantivo antes de escolher MUCH ou MANY."
      ]
    },
    {
      title: "Construindo diálogos com as sete perguntas",
      explanation: "Nesta última aula, vamos combinar todas as palavras interrogativas em diálogos. Uma conversa natural não depende apenas de saber fazer perguntas: também é necessário compreender a resposta, identificar a informação principal e formular uma nova pergunta relacionada ao assunto. Vamos praticar perguntas sobre pessoas, atividades, localização, tempo, motivos, maneiras e quantidades. O aluno deverá perceber que as sete palavras interrogativas podem ser utilizadas em diferentes tempos verbais. Uma mesma conversa pode começar com uma pergunta no presente, passar pelo passado e terminar com uma pergunta sobre o futuro.",
      examples: [
        {
          en: "A: Who is your best friend? B: Lucas is my best friend. A: Where does he live? B: He lives near my house. A: What do you usually do together? B: We play soccer and play video games. A: How often do you meet? B: We meet twice a week.",
          pt: "A: Quem é seu melhor amigo? B: Lucas é meu melhor amigo. A: Onde ele mora? B: Ele mora perto da minha casa. A: O que vocês costumam fazer juntos? B: Jogamos futebol e videogame. A: Com que frequência vocês se encontram? B: Duas vezes por semana."
        },
        { en: "Why do you study English?", pt: "Por que você estuda inglês?" },
        { en: "Because I want to understand videos in English.", pt: "Porque quero entender vídeos em inglês." },
        { en: "When are you going to travel?", pt: "Quando você vai viajar?" },
        { en: "How much does the ticket cost?", pt: "Quanto custa a passagem?" }
      ],
      keyPoints: [
        "WHO pergunta sobre pessoas.",
        "WHAT pergunta sobre informações e atividades.",
        "WHERE pergunta sobre lugares.",
        "WHEN pergunta sobre tempo.",
        "WHY pergunta motivos.",
        "HOW pergunta maneiras e condições.",
        "HOW MUCH e HOW MANY perguntam quantidades e preços.",
        "Construa perguntas complementares a partir das respostas.",
        "Pratique diálogos sem ler as respostas."
      ]
    }
  ]
},

// ======================================================
// SEMANA 9 — PAST CONTINUOUS
// ======================================================

{
  title: "Past Continuous — Ações em andamento no passado",
  goal: "Compreender e utilizar WAS/WERE + verbo terminado em ING, descrever ações que estavam acontecendo em determinado momento e relacionar acontecimentos simultâneos ou interrompidos no passado.",
  days: [
    {
      title: "Introdução ao Past Continuous",
      explanation: "O Past Continuous é utilizado para descrever ações que estavam acontecendo em determinado momento do passado. Sua estrutura é WAS ou WERE + verbo terminado em ING. Utilizamos WAS com I, HE, SHE e IT. Utilizamos WERE com YOU, WE e THEY. Por exemplo, I WAS STUDYING significa eu estava estudando. Essa estrutura apresenta uma ação em andamento, e não apenas um acontecimento concluído. Compare I STUDIED YESTERDAY, que informa que estudei ontem, com I WAS STUDYING AT EIGHT, que informa que eu estava estudando às oito. O contexto determina qual estrutura comunica melhor a ideia.",
      examples: [
        { en: "I was sleeping.", pt: "Eu estava dormindo." },
        { en: "She was studying.", pt: "Ela estava estudando." },
        { en: "He was playing soccer.", pt: "Ele estava jogando futebol." },
        { en: "We were watching a movie.", pt: "Nós estávamos assistindo a um filme." },
        { en: "They were talking.", pt: "Eles estavam conversando." },
        { en: "You were working.", pt: "Você estava trabalhando." },
        { en: "I was reading at nine o'clock.", pt: "Eu estava lendo às nove horas." }
      ],
      keyPoints: [
        "Past Continuous descreve ações em andamento no passado.",
        "Estrutura: WAS/WERE + verbo com ING.",
        "I, HE, SHE e IT utilizam WAS.",
        "YOU, WE e THEY utilizam WERE.",
        "STUDYING = estudando.",
        "SLEEPING = dormindo.",
        "WORKING = trabalhando.",
        "O contexto indica o momento em que a ação estava acontecendo."
      ]
    },
    {
      title: "Formação do verbo com ING",
      explanation: "Para formar o gerúndio em inglês, normalmente acrescentamos ING ao verbo. Entretanto, algumas palavras passam por mudanças na escrita. Verbos terminados em E geralmente perdem essa letra antes de receber ING: MAKE vira MAKING e WRITE vira WRITING. Verbos curtos que seguem determinadas regras podem duplicar a consoante final: SIT vira SITTING e RUN vira RUNNING. Verbos terminados em IE trocam essa terminação por Y antes de receber ING: LIE vira LYING. Existem também verbos que simplesmente recebem ING, como PLAY, que vira PLAYING. É importante observar que essas regras dizem respeito à escrita e não alteram a estrutura principal do Past Continuous.",
      examples: [
        { en: "PLAY → PLAYING", pt: "Jogar → jogando." },
        { en: "STUDY → STUDYING", pt: "Estudar → estudando." },
        { en: "MAKE → MAKING", pt: "Fazer → fazendo." },
        { en: "WRITE → WRITING", pt: "Escrever → escrevendo." },
        { en: "RUN → RUNNING", pt: "Correr → correndo." },
        { en: "SIT → SITTING", pt: "Sentar → sentado ou sentando, conforme a frase." },
        { en: "LIE → LYING", pt: "Deitar-se ou estar deitado → deitando-se." }
      ],
      keyPoints: [
        "A regra geral é acrescentar ING.",
        "Verbos terminados em E geralmente perdem o E.",
        "Alguns verbos curtos duplicam a consoante final.",
        "Verbos terminados em IE transformam IE em YING.",
        "PLAYING e STUDYING não exigem alterações especiais.",
        "Aprenda a reconhecer a forma ING dentro de frases."
      ]
    },
    {
      title: "Past Continuous — Negativas e perguntas",
      explanation: "Para formar frases negativas no Past Continuous, acrescentamos NOT depois de WAS ou WERE. Podemos utilizar WAS NOT ou sua contração WASN'T, assim como WERE NOT ou WEREN'T. Para formar perguntas, colocamos WAS ou WERE antes do sujeito. A estrutura interrogativa é WAS/WERE + sujeito + verbo com ING? As respostas curtas utilizam WAS, WASN'T, WERE ou WEREN'T. É importante lembrar que não utilizamos DID para formar perguntas com Past Continuous, pois WAS e WERE já funcionam como auxiliares nessa estrutura.",
      examples: [
        { en: "I wasn't sleeping.", pt: "Eu não estava dormindo." },
        { en: "She wasn't working.", pt: "Ela não estava trabalhando." },
        { en: "They weren't studying.", pt: "Eles não estavam estudando." },
        { en: "Were you watching TV?", pt: "Você estava assistindo à TV?" },
        { en: "Yes, I was.", pt: "Sim, estava." },
        { en: "Was he playing soccer?", pt: "Ele estava jogando futebol?" },
        { en: "No, he wasn't.", pt: "Não, ele não estava." },
        { en: "What were they doing?", pt: "O que eles estavam fazendo?" }
      ],
      keyPoints: [
        "WAS NOT = WASN'T.",
        "WERE NOT = WEREN'T.",
        "A negativa utiliza NOT depois de WAS ou WERE.",
        "Perguntas começam com WAS ou WERE.",
        "Respostas curtas repetem WAS ou WERE.",
        "Não utilize DID para formar perguntas nessa estrutura.",
        "O verbo principal continua terminando em ING."
      ]
    },
    {
      title: "Past Continuous com WHEN",
      explanation: "Uma utilização muito comum do Past Continuous é descrever uma ação que estava acontecendo quando outro acontecimento ocorreu. Para isso, podemos combinar Past Continuous com Past Simple. O Past Continuous apresenta a ação em andamento, enquanto o Past Simple apresenta o acontecimento que ocorreu durante ela. WHEN significa quando. Em uma frase como I WAS SLEEPING WHEN YOU CALLED, a pessoa estava dormindo e a ligação aconteceu durante esse período. A ação em andamento não precisa necessariamente parar definitivamente: o importante é que outro acontecimento ocorreu naquele momento.",
      examples: [
        { en: "I was sleeping when you called.", pt: "Eu estava dormindo quando você ligou." },
        { en: "She was studying when her friend arrived.", pt: "Ela estava estudando quando o amigo dela chegou." },
        { en: "We were playing soccer when it started to rain.", pt: "Estávamos jogando futebol quando começou a chover." },
        { en: "He was cooking when the phone rang.", pt: "Ele estava cozinhando quando o telefone tocou." },
        { en: "They were watching TV when I arrived.", pt: "Eles estavam assistindo à TV quando cheguei." },
        { en: "I was walking when I saw my teacher.", pt: "Eu estava caminhando quando vi meu professor." }
      ],
      keyPoints: [
        "WHEN = quando.",
        "Past Continuous apresenta a ação em andamento.",
        "Past Simple apresenta o acontecimento que ocorreu.",
        "A estrutura pode ser Past Continuous + WHEN + Past Simple.",
        "O acontecimento no passado pode interromper ou ocorrer durante a ação em andamento.",
        "Observe qual ação estava acontecendo e qual aconteceu naquele momento."
      ]
    },
    {
      title: "Past Continuous com WHILE — Ações simultâneas",
      explanation: "WHILE significa enquanto e é frequentemente utilizado para apresentar duas ações que aconteciam ao mesmo tempo. Podemos utilizar Past Continuous nas duas partes da frase para mostrar simultaneidade. Por exemplo, WHILE I WAS STUDYING, MY BROTHER WAS PLAYING VIDEO GAMES. Isso significa que as duas atividades estavam acontecendo durante o mesmo período. Também podemos utilizar WHILE com uma ação em andamento e outra estrutura, dependendo do contexto. A posição das orações pode variar: podemos começar com WHILE ou colocar essa palavra no meio da frase. Quando a oração com WHILE aparece primeiro, normalmente utilizamos uma vírgula para separar as duas partes.",
      examples: [
        { en: "I was studying while my brother was playing.", pt: "Eu estava estudando enquanto meu irmão estava jogando." },
        { en: "She was cooking while he was cleaning.", pt: "Ela estava cozinhando enquanto ele estava limpando." },
        { en: "While they were talking, I was reading.", pt: "Enquanto eles estavam conversando, eu estava lendo." },
        { en: "We were listening to music while we were working.", pt: "Estávamos ouvindo música enquanto trabalhávamos." },
        { en: "While I was walking, my friend was running.", pt: "Enquanto eu estava caminhando, meu amigo estava correndo." }
      ],
      keyPoints: [
        "WHILE = enquanto.",
        "WHILE pode conectar duas ações simultâneas.",
        "As duas ações podem utilizar Past Continuous.",
        "A oração com WHILE pode aparecer no começo ou no meio.",
        "Utilize vírgula quando a oração inicial com WHILE for seguida pela oração principal.",
        "Identifique se as ações aconteciam ao mesmo tempo."
      ]
    },
    {
      title: "Descrevendo uma cena do passado",
      explanation: "Nesta aula, vamos utilizar o Past Continuous para imaginar e descrever uma cena que aconteceu em determinado momento. Podemos apresentar o lugar, as pessoas, as atividades e os acontecimentos que ocorreram durante aquele período. A descrição pode combinar Past Continuous com Past Simple, além de expressões de localização e tempo. O aluno deverá conseguir responder perguntas como WHAT WERE YOU DOING?, WHO WAS WITH YOU? e WHAT HAPPENED? O objetivo é desenvolver uma narrativa visual, como se estivéssemos descrevendo uma fotografia de um momento passado.",
      examples: [
        {
          en: "Yesterday at seven o'clock, my family was having dinner. My father was talking about his day, and my mother was preparing some food. My brother was drinking juice. Suddenly, the lights went out. We were sitting in the dark when the electricity stopped working. A few minutes later, the lights came back.",
          pt: "Ontem às sete horas, minha família estava jantando. Meu pai estava falando sobre seu dia, e minha mãe estava preparando comida. Meu irmão estava bebendo suco. De repente, as luzes se apagaram. Estávamos sentados no escuro quando a energia parou de funcionar. Alguns minutos depois, as luzes voltaram."
        },
        { en: "What were you doing at eight yesterday?", pt: "O que você estava fazendo ontem às oito?" },
        { en: "I was studying English.", pt: "Eu estava estudando inglês." },
        { en: "Who was with you?", pt: "Quem estava com você?" },
        { en: "My brother was with me.", pt: "Meu irmão estava comigo." }
      ],
      keyPoints: [
        "Descreva um momento específico do passado.",
        "Utilize WAS e WERE corretamente.",
        "Combine Past Continuous e Past Simple.",
        "Descreva pessoas, lugares e atividades.",
        "Utilize WHEN e WHILE quando necessário.",
        "Responda perguntas sobre a cena.",
        "Escreva uma descrição própria de um acontecimento."
      ]
    }
  ]
},

// ======================================================
// SEMANA 10 — PRESENT CONTINUOUS
// ======================================================

{
  title: "Present Continuous — O que está acontecendo agora",
  goal: "Aprender a descrever ações em andamento no presente, formar frases afirmativas, negativas e interrogativas e diferenciar o Present Simple do Present Continuous.",
  days: [
    {
      title: "Introdução ao Present Continuous",
      explanation: "O Present Continuous é utilizado principalmente para falar sobre ações que estão acontecendo no momento da fala ou em um período atual. Sua estrutura é AM, IS ou ARE + verbo terminado em ING. Utilizamos AM com I, IS com HE, SHE e IT, e ARE com YOU, WE e THEY. Por exemplo, I AM STUDYING significa eu estou estudando. Essa estrutura destaca uma ação em andamento. Compare I STUDY ENGLISH EVERY DAY, que descreve um hábito, com I AM STUDYING ENGLISH NOW, que descreve uma ação acontecendo agora. A palavra NOW significa agora, e RIGHT NOW significa exatamente neste momento.",
      examples: [
        { en: "I am studying now.", pt: "Eu estou estudando agora." },
        { en: "She is reading a book.", pt: "Ela está lendo um livro." },
        { en: "He is playing soccer.", pt: "Ele está jogando futebol." },
        { en: "We are watching a movie.", pt: "Nós estamos assistindo a um filme." },
        { en: "They are having dinner.", pt: "Eles estão jantando." },
        { en: "You are learning English.", pt: "Você está aprendendo inglês." },
        { en: "The dog is sleeping.", pt: "O cachorro está dormindo." }
      ],
      keyPoints: [
        "Present Continuous descreve ações em andamento no presente.",
        "Estrutura: AM/IS/ARE + verbo com ING.",
        "I AM.",
        "HE, SHE e IT IS.",
        "YOU, WE e THEY ARE.",
        "NOW = agora.",
        "RIGHT NOW = exatamente neste momento."
      ]
    },
    {
      title: "Present Continuous — Negativas e perguntas",
      explanation: "Para formar uma frase negativa no Present Continuous, acrescentamos NOT depois do verbo To Be. Podemos utilizar AM NOT, IS NOT ou ARE NOT. As contrações mais comuns são ISN'T e AREN'T, enquanto AM NOT aparece normalmente como I'M NOT. Para formar perguntas, colocamos AM, IS ou ARE antes do sujeito. A estrutura é AM/IS/ARE + sujeito + verbo com ING? As respostas curtas utilizam o mesmo verbo auxiliar. Não precisamos utilizar DO ou DOES, pois AM, IS e ARE já funcionam como auxiliares nessa construção.",
      examples: [
        { en: "I am not sleeping.", pt: "Eu não estou dormindo." },
        { en: "She isn't working now.", pt: "Ela não está trabalhando agora." },
        { en: "They aren't studying.", pt: "Eles não estão estudando." },
        { en: "Are you listening?", pt: "Você está ouvindo?" },
        { en: "Yes, I am.", pt: "Sim, estou." },
        { en: "Is he playing video games?", pt: "Ele está jogando videogame?" },
        { en: "No, he isn't.", pt: "Não, ele não está." },
        { en: "What are they doing?", pt: "O que eles estão fazendo?" }
      ],
      keyPoints: [
        "A negativa utiliza NOT depois de AM, IS ou ARE.",
        "IS NOT = ISN'T.",
        "ARE NOT = AREN'T.",
        "Perguntas começam com AM, IS ou ARE.",
        "Respostas curtas utilizam o mesmo auxiliar.",
        "Não utilize DO ou DOES com essa estrutura.",
        "O verbo principal permanece com ING."
      ]
    },
    {
      title: "Present Simple ou Present Continuous?",
      explanation: "Uma das diferenças mais importantes do inglês é saber quando utilizar Present Simple e quando utilizar Present Continuous. O Present Simple descreve hábitos, rotinas, fatos gerais e situações consideradas estáveis. O Present Continuous descreve principalmente ações em andamento ou situações temporárias. Compare I PLAY SOCCER EVERY WEEK com I AM PLAYING SOCCER NOW. A primeira frase indica um hábito; a segunda indica que a pessoa está jogando neste momento. Expressões como ALWAYS, USUALLY e EVERY DAY aparecem frequentemente com Present Simple. NOW, RIGHT NOW e AT THE MOMENT aparecem frequentemente com Present Continuous. Entretanto, a escolha depende do significado da frase, e não apenas da palavra utilizada.",
      examples: [
        { en: "I study English every day.", pt: "Eu estudo inglês todos os dias. Hábito." },
        { en: "I am studying English now.", pt: "Estou estudando inglês agora. Ação em andamento." },
        { en: "She works at a hospital.", pt: "Ela trabalha em um hospital. Situação habitual." },
        { en: "She is working right now.", pt: "Ela está trabalhando neste momento." },
        { en: "They usually play soccer on Sundays.", pt: "Eles geralmente jogam futebol aos domingos." },
        { en: "They are playing soccer at the moment.", pt: "Eles estão jogando futebol neste momento." },
        { en: "He drinks coffee every morning.", pt: "Ele bebe café todas as manhãs." },
        { en: "He is drinking water now.", pt: "Ele está bebendo água agora." }
      ],
      keyPoints: [
        "Present Simple descreve hábitos e fatos gerais.",
        "Present Continuous descreve ações em andamento.",
        "EVERY DAY aparece frequentemente com Present Simple.",
        "USUALLY aparece frequentemente com Present Simple.",
        "NOW aparece frequentemente com Present Continuous.",
        "AT THE MOMENT aparece frequentemente com Present Continuous.",
        "A escolha depende do significado e do contexto."
      ]
    },
    {
      title: "Ações temporárias e situações atuais",
      explanation: "O Present Continuous não é utilizado apenas para ações que acontecem exatamente no segundo em que falamos. Também pode descrever situações temporárias que estão acontecendo durante um período atual. Por exemplo, I AM STUDYING ENGLISH THIS MONTH indica uma atividade em andamento durante este mês, mesmo que a pessoa não esteja estudando no exato momento da frase. Também podemos utilizá-lo para mudanças e desenvolvimentos atuais. Expressões como THIS WEEK, THESE DAYS e THIS MONTH ajudam a indicar esses períodos. É importante diferenciar uma situação temporária de uma característica ou rotina mais estável.",
      examples: [
        { en: "I am studying English this month.", pt: "Estou estudando inglês neste mês." },
        { en: "She is staying with her grandmother this week.", pt: "Ela está ficando com a avó nesta semana." },
        { en: "We are learning a new language these days.", pt: "Estamos aprendendo um novo idioma atualmente." },
        { en: "My brother is working on a new project.", pt: "Meu irmão está trabalhando em um projeto novo." },
        { en: "The weather is getting colder.", pt: "O clima está ficando mais frio." },
        { en: "More people are using computers for work.", pt: "Mais pessoas estão usando computadores para trabalhar." }
      ],
      keyPoints: [
        "Present Continuous também descreve situações temporárias.",
        "THIS WEEK = nesta semana.",
        "THIS MONTH = neste mês.",
        "THESE DAYS = atualmente ou nestes dias.",
        "A estrutura pode indicar mudanças em andamento.",
        "Nem toda frase com Present Continuous precisa significar exatamente agora."
      ]
    },
    {
      title: "Descrevendo o que está acontecendo ao redor",
      explanation: "Nesta aula, vamos praticar a descrição do ambiente utilizando o Present Continuous. Imagine que você está em uma sala, em um parque ou em uma rua e precisa explicar o que as pessoas estão fazendo. Podemos utilizar verbos como WALKING, TALKING, RUNNING, READING, COOKING e PLAYING. Também podemos fazer perguntas utilizando WHAT IS HAPPENING? e WHAT ARE THEY DOING? A descrição pode combinar o Present Continuous com THERE IS e THERE ARE para apresentar pessoas e objetos presentes no ambiente. O objetivo é observar uma situação e transformar o que está acontecendo em frases completas.",
      examples: [
        {
          en: "There are many people in the park. A boy is riding a bicycle. Two children are playing with a ball. A woman is reading a book under a tree. Some people are walking, and others are talking. The weather is sunny, and everyone is enjoying the afternoon.",
          pt: "Há muitas pessoas no parque. Um menino está andando de bicicleta. Duas crianças estão brincando com uma bola. Uma mulher está lendo um livro debaixo de uma árvore. Algumas pessoas estão caminhando, e outras estão conversando. O tempo está ensolarado, e todos estão aproveitando a tarde."
        },
        { en: "What is the boy doing?", pt: "O que o menino está fazendo?" },
        { en: "He is riding a bicycle.", pt: "Ele está andando de bicicleta." },
        { en: "What are the children doing?", pt: "O que as crianças estão fazendo?" },
        { en: "They are playing with a ball.", pt: "Elas estão brincando com uma bola." },
        { en: "Is the woman sleeping?", pt: "A mulher está dormindo?" },
        { en: "No, she is reading.", pt: "Não, ela está lendo." }
      ],
      keyPoints: [
        "Observe as ações de cada pessoa.",
        "Utilize verbos terminados em ING.",
        "Combine THERE IS e THERE ARE com descrições.",
        "Faça perguntas com WHAT IS e WHAT ARE.",
        "Responda utilizando AM, IS ou ARE.",
        "Descreva lugares e atividades em frases completas."
      ]
    },
    {
      title: "Minha vida agora — Desafio do Present Continuous",
      explanation: "Na última aula, vamos utilizar o Present Continuous para descrever o que está acontecendo na vida do aluno neste período. O texto poderá mencionar atividades de estudo, projetos, mudanças, tarefas e objetivos atuais. Também deverá apresentar diferenças entre hábitos permanentes e ações temporárias, utilizando Present Simple e Present Continuous no mesmo texto. Por exemplo, I STUDY ENGLISH EVERY DAY descreve um hábito, enquanto I AM WORKING ON A NEW PROJECT THIS WEEK descreve uma atividade temporária. O objetivo é demonstrar que o aluno consegue escolher o tempo verbal de acordo com a informação que deseja transmitir.",
      examples: [
        {
          en: "I usually study in the afternoon, but this week I am studying in the morning. I am learning English and practicing new vocabulary. My brother is working on a school project, and my parents are organizing the house. I normally play soccer on weekends, but today I am staying home because I have some homework. We are having a busy week!",
          pt: "Normalmente estudo à tarde, mas nesta semana estou estudando de manhã. Estou aprendendo inglês e praticando vocabulário novo. Meu irmão está trabalhando em um projeto escolar, e meus pais estão organizando a casa. Normalmente jogo futebol nos fins de semana, mas hoje estou ficando em casa porque tenho algumas tarefas. Estamos tendo uma semana movimentada!"
        },
        { en: "What are you learning these days?", pt: "O que você está aprendendo atualmente?" },
        { en: "I am learning English.", pt: "Estou aprendendo inglês." },
        { en: "What do you usually do after school?", pt: "O que você geralmente faz depois da escola?" },
        { en: "I usually study and play soccer.", pt: "Geralmente estudo e jogo futebol." }
      ],
      keyPoints: [
        "Descreva atividades atuais.",
        "Inclua situações temporárias.",
        "Utilize pelo menos cinco verbos com ING.",
        "Combine Present Simple e Present Continuous.",
        "Diferencie hábitos de ações em andamento.",
        "Produza um texto próprio sobre sua vida atualmente.",
        "Leia o texto em voz alta."
      ]
    }
  ]
},


// ======================================================
// SEMANA 11 — MODAIS DE HABILIDADE E PERMISSÃO
// ======================================================

{
  title: "Modal Verbs — Ability, Permission and Possibility",
  goal: "Aprender a utilizar CAN, COULD, MAY e MIGHT para expressar habilidades, pedir permissões, fazer solicitações educadas e falar sobre possibilidades.",
  days: [
    {
      title: "CAN — Habilidades e capacidades",
      explanation: "CAN é um verbo modal utilizado principalmente para falar sobre habilidades e capacidades. Ele indica que alguém consegue ou sabe fazer alguma coisa. Sua estrutura afirmativa é sujeito + CAN + verbo na forma básica. Diferentemente de outros verbos, CAN não muda de acordo com o sujeito: utilizamos CAN com I, YOU, HE, SHE, IT, WE e THEY. Também não acrescentamos TO depois de CAN. Por exemplo, I CAN SWIM significa eu sei nadar ou consigo nadar. Podemos utilizar CAN para falar sobre habilidades físicas, conhecimentos, idiomas, atividades e capacidades em geral.",
      examples: [
        { en: "I can swim.", pt: "Eu sei nadar." },
        { en: "She can speak English.", pt: "Ela sabe falar inglês." },
        { en: "He can play the guitar.", pt: "Ele sabe tocar violão." },
        { en: "We can solve this problem.", pt: "Nós conseguimos resolver este problema." },
        { en: "They can understand Japanese.", pt: "Eles conseguem entender japonês." },
        { en: "My brother can cook.", pt: "Meu irmão sabe cozinhar." },
        { en: "I can use a computer.", pt: "Eu sei usar um computador." }
      ],
      keyPoints: [
        "CAN expressa habilidade ou capacidade.",
        "CAN significa poder, saber ou conseguir, dependendo do contexto.",
        "CAN não muda de acordo com o sujeito.",
        "Utilize o verbo principal na forma básica.",
        "Não utilize TO depois de CAN.",
        "CAN pode descrever habilidades físicas e conhecimentos."
      ]
    },
    {
      title: "CAN — Negativas e perguntas",
      explanation: "Para formar a negativa, acrescentamos NOT depois de CAN. A forma completa é CANNOT e a contração mais comum é CAN'T. A estrutura fica sujeito + CAN'T + verbo básico. Para formar perguntas, colocamos CAN antes do sujeito: CAN + sujeito + verbo básico? Não precisamos utilizar DO ou DOES, porque CAN já funciona como auxiliar. As respostas curtas utilizam CAN ou CAN'T. Também podemos acrescentar palavras interrogativas, como WHAT, WHERE e HOW, antes de CAN para formar perguntas mais específicas.",
      examples: [
        { en: "I can't drive.", pt: "Eu não sei dirigir." },
        { en: "She cannot speak French.", pt: "Ela não sabe falar francês." },
        { en: "They can't come today.", pt: "Eles não podem vir hoje." },
        { en: "Can you help me?", pt: "Você pode me ajudar?" },
        { en: "Yes, I can.", pt: "Sim, posso." },
        { en: "Can he play basketball?", pt: "Ele sabe jogar basquete?" },
        { en: "No, he can't.", pt: "Não, ele não sabe." },
        { en: "What can you do?", pt: "O que você consegue fazer?" }
      ],
      keyPoints: [
        "CANNOT e CAN'T são formas negativas.",
        "A negativa utiliza CAN'T + verbo básico.",
        "Perguntas começam com CAN.",
        "Não utilize DO ou DOES com CAN.",
        "Respostas curtas utilizam CAN ou CAN'T.",
        "WHAT CAN YOU DO? pergunta sobre capacidades."
      ]
    },
    {
      title: "COULD — Habilidades no passado e pedidos educados",
      explanation: "COULD possui diferentes utilizações. Uma delas é falar sobre habilidades que alguém possuía no passado. Por exemplo, I COULD SWIM WHEN I WAS FIVE significa que eu sabia nadar quando tinha cinco anos. COULD também é utilizado para fazer pedidos de maneira mais educada ou menos direta do que CAN. Compare CAN YOU HELP ME? com COULD YOU HELP ME? As duas frases pedem ajuda, mas a segunda costuma transmitir um tom mais educado. COULD não muda de acordo com o sujeito e sempre é seguido pelo verbo na forma básica, sem TO.",
      examples: [
        { en: "I could read when I was six.", pt: "Eu sabia ler quando tinha seis anos." },
        { en: "She could play the piano as a child.", pt: "Ela sabia tocar piano quando era criança." },
        { en: "Could you help me, please?", pt: "Você poderia me ajudar, por favor?" },
        { en: "Could you open the window?", pt: "Você poderia abrir a janela?" },
        { en: "Could I use your computer?", pt: "Eu poderia usar seu computador?" },
        { en: "He couldn't swim when he was young.", pt: "Ele não sabia nadar quando era jovem." },
        { en: "We could speak English after practicing.", pt: "Nós conseguíamos falar inglês depois de praticar." }
      ],
      keyPoints: [
        "COULD pode indicar habilidade no passado.",
        "COULD também é utilizado em pedidos educados.",
        "COULD é seguido pelo verbo básico.",
        "COULDN'T é a forma negativa.",
        "COULD não muda de acordo com o sujeito.",
        "COULD YOU...? costuma soar mais educado que CAN YOU...?"
      ]
    },
    {
      title: "MAY e MIGHT — Possibilidades",
      explanation: "MAY e MIGHT são verbos modais utilizados para falar sobre possibilidades. Eles indicam que alguma coisa pode acontecer, mas não existe certeza. MAY costuma expressar uma possibilidade, enquanto MIGHT frequentemente transmite uma possibilidade mais incerta ou hipotética. Entretanto, a diferença entre os dois depende bastante do contexto e nem sempre é uma separação rígida. Assim como CAN e COULD, MAY e MIGHT são seguidos pelo verbo na forma básica, sem TO. Também não mudam de acordo com o sujeito. É importante observar que MAY possui outra utilização bastante comum: pedir ou conceder permissão de maneira educada.",
      examples: [
        { en: "It may rain tomorrow.", pt: "Pode chover amanhã." },
        { en: "She might come to the party.", pt: "Talvez ela venha à festa." },
        { en: "We may travel next month.", pt: "Talvez viajemos no próximo mês." },
        { en: "He might be at home.", pt: "Talvez ele esteja em casa." },
        { en: "They may need some help.", pt: "Talvez eles precisem de ajuda." },
        { en: "I might study tonight.", pt: "Talvez eu estude hoje à noite." },
        { en: "It might be difficult.", pt: "Pode ser difícil." }
      ],
      keyPoints: [
        "MAY expressa possibilidade.",
        "MIGHT também expressa possibilidade.",
        "MIGHT pode transmitir maior incerteza em alguns contextos.",
        "MAY e MIGHT são seguidos pelo verbo básico.",
        "Não utilize TO depois de MAY ou MIGHT.",
        "Nenhum dos dois garante que algo acontecerá."
      ]
    },
    {
      title: "Pedindo favores e permissões",
      explanation: "Nesta aula, vamos utilizar CAN, COULD e MAY em situações cotidianas. CAN é bastante comum em pedidos e perguntas sobre permissão. COULD costuma deixar um pedido mais educado. MAY também é utilizado para perguntar ou conceder permissão, especialmente em situações mais formais. Podemos utilizar CAN I...? para perguntar se podemos fazer alguma coisa. COULD YOU...? para pedir que alguém faça algo. MAY I...? para solicitar permissão de maneira educada. É importante diferenciar pedir permissão de pedir um favor: CAN I USE YOUR PHONE? pergunta se posso usar o telefone; COULD YOU CALL ME? pede que alguém faça uma ligação.",
      examples: [
        { en: "Can I use your phone?", pt: "Posso usar seu celular?" },
        { en: "May I come in?", pt: "Posso entrar?" },
        { en: "Could you repeat that, please?", pt: "Você poderia repetir isso, por favor?" },
        { en: "Can you help me with this exercise?", pt: "Você pode me ajudar com este exercício?" },
        { en: "May I ask a question?", pt: "Posso fazer uma pergunta?" },
        { en: "Could you close the door?", pt: "Você poderia fechar a porta?" },
        { en: "Yes, you may.", pt: "Sim, você pode." },
        { en: "Of course, you can.", pt: "Claro, você pode." }
      ],
      keyPoints: [
        "CAN I...? pergunta sobre permissão.",
        "MAY I...? é uma maneira educada de pedir permissão.",
        "COULD YOU...? é utilizado para pedir favores.",
        "PLEASE deixa solicitações mais educadas.",
        "Diferencie pedir autorização de pedir que alguém faça algo.",
        "O contexto determina qual modal é mais adequado."
      ]
    },
    {
      title: "Minhas habilidades e possibilidades",
      explanation: "Nesta última aula, vamos combinar CAN, COULD, MAY e MIGHT em situações pessoais. O aluno deverá falar sobre coisas que consegue fazer atualmente, habilidades que possuía no passado e atividades que talvez realize no futuro. Também deverá praticar pedidos de favores e permissões. A ideia é desenvolver uma conversa na qual os modais apareçam naturalmente, em vez de serem utilizados apenas em frases isoladas. Ao final, o aluno deverá escrever um pequeno texto sobre suas habilidades e formular solicitações educadas para diferentes situações.",
      examples: [
        {
          en: "I can speak Portuguese, and I am learning English. I can use a computer and create digital projects. When I was younger, I couldn't understand English very well. Now I can understand simple conversations. I might study another language in the future. Could you help me practice?",
          pt: "Eu sei falar português e estou aprendendo inglês. Sei usar um computador e criar projetos digitais. Quando era mais novo, não conseguia entender inglês muito bem. Agora consigo compreender conversas simples. Talvez eu estude outro idioma no futuro. Você poderia me ajudar a praticar?"
        },
        { en: "What can you do?", pt: "O que você consegue fazer?" },
        { en: "What could you do when you were younger?", pt: "O que você conseguia fazer quando era mais novo?" },
        { en: "May I ask you something?", pt: "Posso perguntar uma coisa?" },
        { en: "Could you explain this exercise?", pt: "Você poderia explicar este exercício?" },
        { en: "I might travel next year.", pt: "Talvez eu viaje no próximo ano." }
      ],
      keyPoints: [
        "Descreva pelo menos três habilidades com CAN.",
        "Descreva uma habilidade passada com COULD.",
        "Utilize MAY ou MIGHT para apresentar possibilidades.",
        "Formule um pedido educado com COULD YOU.",
        "Formule uma pergunta de permissão com MAY I.",
        "Escreva um texto combinando os quatro modais."
      ]
    }
  ]
},

// ======================================================
// SEMANA 12 — MODAIS DE OBRIGAÇÃO E CONSELHO
// ======================================================

{
  title: "Modal Verbs — Obligation, Rules and Advice",
  goal: "Aprender a expressar obrigações, necessidades, proibições, recomendações e conselhos utilizando MUST, HAVE TO e SHOULD.",
  days: [
    {
      title: "MUST — Obrigações e regras",
      explanation: "MUST é um verbo modal utilizado para expressar obrigação forte, necessidade ou algo que o falante considera muito importante. Sua estrutura é sujeito + MUST + verbo básico. MUST não muda de acordo com o sujeito e não recebe TO depois dele. Podemos utilizá-lo para apresentar regras, instruções e obrigações. Por exemplo, YOU MUST WEAR A SEAT BELT significa que você deve usar cinto de segurança. Também podemos utilizar MUST em recomendações muito fortes, dependendo do contexto. É importante compreender que MUST não significa apenas uma ordem: seu sentido pode variar de acordo com a situação.",
      examples: [
        { en: "You must follow the rules.", pt: "Você deve seguir as regras." },
        { en: "Students must arrive on time.", pt: "Os alunos devem chegar no horário." },
        { en: "You must wear a seat belt.", pt: "Você deve usar cinto de segurança." },
        { en: "I must finish my homework.", pt: "Preciso terminar minha tarefa." },
        { en: "We must protect the environment.", pt: "Devemos proteger o meio ambiente." },
        { en: "You must listen carefully.", pt: "Você deve ouvir com atenção." }
      ],
      keyPoints: [
        "MUST expressa obrigação ou necessidade forte.",
        "MUST é seguido pelo verbo básico.",
        "Não utilize TO depois de MUST.",
        "MUST não muda de acordo com o sujeito.",
        "Pode aparecer em regras, instruções e recomendações fortes."
      ]
    },
    {
      title: "HAVE TO — Necessidades e obrigações",
      explanation: "HAVE TO também expressa obrigação ou necessidade, mas funciona de maneira diferente de MUST. HAVE TO utiliza o verbo HAVE, que precisa concordar com o sujeito e com o tempo verbal. No presente, utilizamos HAVE TO com I, YOU, WE e THEY. Utilizamos HAS TO com HE, SHE e IT. Por exemplo, I HAVE TO STUDY significa que preciso estudar, enquanto SHE HAS TO STUDY significa que ela precisa estudar. HAVE TO costuma ser utilizado para obrigações relacionadas a regras, circunstâncias, responsabilidades ou necessidades externas. MUST e HAVE TO frequentemente possuem sentidos semelhantes, mas podem transmitir diferenças de ênfase e contexto.",
      examples: [
        { en: "I have to wake up early.", pt: "Preciso acordar cedo." },
        { en: "She has to work tomorrow.", pt: "Ela precisa trabalhar amanhã." },
        { en: "We have to study for the exam.", pt: "Precisamos estudar para a prova." },
        { en: "He has to clean his room.", pt: "Ele precisa limpar o quarto." },
        { en: "They have to follow the instructions.", pt: "Eles precisam seguir as instruções." },
        { en: "You have to bring your notebook.", pt: "Você precisa trazer seu caderno." }
      ],
      keyPoints: [
        "HAVE TO expressa obrigação ou necessidade.",
        "I, YOU, WE e THEY utilizam HAVE TO.",
        "HE, SHE e IT utilizam HAS TO.",
        "HAVE TO é seguido pelo verbo básico.",
        "MUST e HAVE TO podem ter significados semelhantes.",
        "HAVE TO frequentemente apresenta obrigações ligadas a circunstâncias externas."
      ]
    },
    {
      title: "MUST NOT e DON'T HAVE TO — Proibição e ausência de obrigação",
      explanation: "É fundamental compreender a diferença entre MUST NOT e DON'T HAVE TO. MUST NOT, frequentemente escrito como MUSTN'T, indica que algo é proibido ou não deve ser feito. DON'T HAVE TO significa que algo não é obrigatório ou que não existe necessidade de fazer aquilo. Compare YOU MUSTN'T USE YOUR PHONE HERE, que significa que você não pode usar o celular aqui, com YOU DON'T HAVE TO BRING YOUR PHONE, que significa que você não precisa trazer o celular. Essas duas estruturas não são equivalentes. Para formar negativas com HAVE TO no presente, utilizamos DON'T HAVE TO com I, YOU, WE e THEY, e DOESN'T HAVE TO com HE, SHE e IT.",
      examples: [
        { en: "You mustn't park here.", pt: "Você não pode estacionar aqui." },
        { en: "Students mustn't cheat on exams.", pt: "Os alunos não podem colar nas provas." },
        { en: "I don't have to work tomorrow.", pt: "Não preciso trabalhar amanhã." },
        { en: "She doesn't have to cook today.", pt: "Ela não precisa cozinhar hoje." },
        { en: "We don't have to leave now.", pt: "Não precisamos sair agora." },
        { en: "He doesn't have to wear a uniform.", pt: "Ele não precisa usar uniforme." }
      ],
      keyPoints: [
        "MUST NOT ou MUSTN'T indica proibição.",
        "DON'T HAVE TO indica ausência de obrigação.",
        "DOESN'T HAVE TO é utilizado com HE, SHE e IT.",
        "MUSTN'T não significa simplesmente não precisar.",
        "Compare sempre o significado das duas frases.",
        "A diferença muda completamente a mensagem."
      ]
    },
    {
      title: "SHOULD — Conselhos e recomendações",
      explanation: "SHOULD é um verbo modal utilizado para dar conselhos, recomendações e sugestões. Seu significado mais comum é deveria. Podemos utilizá-lo para recomendar uma atitude que consideramos adequada, sem necessariamente indicar uma obrigação. Sua estrutura é sujeito + SHOULD + verbo básico. A forma negativa é SHOULD NOT ou SHOULDN'T. Para fazer perguntas, colocamos SHOULD antes do sujeito. Por exemplo, YOU SHOULD REST significa que você deveria descansar. SHOULD é muito comum em conversas, orientações, sugestões e situações nas quais alguém pede uma opinião sobre o que deve fazer.",
      examples: [
        { en: "You should study every day.", pt: "Você deveria estudar todos os dias." },
        { en: "She should drink more water.", pt: "Ela deveria beber mais água." },
        { en: "We should help our friends.", pt: "Deveríamos ajudar nossos amigos." },
        { en: "You shouldn't stay up too late.", pt: "Você não deveria ficar acordado até muito tarde." },
        { en: "He shouldn't forget his homework.", pt: "Ele não deveria esquecer a tarefa." },
        { en: "Should I call her?", pt: "Eu deveria ligar para ela?" },
        { en: "What should we do?", pt: "O que deveríamos fazer?" }
      ],
      keyPoints: [
        "SHOULD é utilizado para dar conselhos.",
        "SHOULD significa deveria.",
        "SHOULDN'T é a forma negativa.",
        "SHOULD é seguido pelo verbo básico.",
        "Perguntas começam com SHOULD.",
        "SHOULD geralmente é menos forte que MUST."
      ]
    },
    {
      title: "Como dar conselhos e explicar regras",
      explanation: "Agora vamos utilizar os três modais em situações práticas. Imagine que um amigo está com dificuldades para estudar, que uma escola possui regras ou que alguém precisa organizar sua rotina. Podemos utilizar SHOULD para recomendar uma atitude, MUST para apresentar uma obrigação forte e HAVE TO para falar sobre uma necessidade ou responsabilidade. Também podemos utilizar expressões como I THINK YOU SHOULD, que significa acho que você deveria, e YOU HAVE TO, que significa você precisa. O objetivo é compreender a intenção de cada frase e escolher a estrutura adequada para a situação.",
      examples: [
        { en: "I think you should study earlier.", pt: "Acho que você deveria estudar mais cedo." },
        { en: "You must follow the school rules.", pt: "Você deve seguir as regras da escola." },
        { en: "I have to finish this project today.", pt: "Preciso terminar este projeto hoje." },
        { en: "You shouldn't spend all your time on your phone.", pt: "Você não deveria passar todo o seu tempo no celular." },
        { en: "We have to prepare for the meeting.", pt: "Precisamos nos preparar para a reunião." },
        { en: "You mustn't enter this room.", pt: "Você não pode entrar nesta sala." },
        { en: "What should I do?", pt: "O que eu deveria fazer?" }
      ],
      keyPoints: [
        "SHOULD oferece conselhos.",
        "MUST apresenta obrigações fortes ou regras.",
        "HAVE TO apresenta necessidades e responsabilidades.",
        "MUSTN'T indica proibição.",
        "DON'T HAVE TO indica ausência de obrigação.",
        "I THINK YOU SHOULD é uma maneira de introduzir conselhos.",
        "Escolha o modal de acordo com a intenção."
      ]
    },
    {
      title: "Meu guia de regras e conselhos",
      explanation: "Nesta última aula, vamos criar um pequeno guia com regras e recomendações para uma situação escolhida, como uma sala de aula, um grupo de estudos, uma equipe ou uma rotina de organização. O aluno deverá escrever regras utilizando MUST e MUSTN'T, apresentar necessidades com HAVE TO e HAS TO e oferecer recomendações com SHOULD e SHOULDN'T. Também deverá explicar a diferença entre uma obrigação e um conselho. O objetivo é utilizar os modais em um texto organizado, com frases que tenham uma finalidade clara.",
      examples: [
        {
          en: "Study Group Rules: Students must arrive on time. Everyone has to bring their notebook. We must listen to each other. Students mustn't interrupt their classmates. You should review your notes after every lesson. You shouldn't leave all your homework until the last day. You don't have to know everything immediately, but you should keep practicing.",
          pt: "Regras do Grupo de Estudos: Os alunos devem chegar no horário. Todos precisam trazer seus cadernos. Devemos ouvir uns aos outros. Os alunos não podem interromper os colegas. Você deveria revisar suas anotações depois de cada aula. Não deveria deixar toda a tarefa para o último dia. Você não precisa saber tudo imediatamente, mas deveria continuar praticando."
        },
        { en: "What should a good student do?", pt: "O que um bom aluno deveria fazer?" },
        { en: "A good student should study regularly.", pt: "Um bom aluno deveria estudar regularmente." },
        { en: "What rules must students follow?", pt: "Quais regras os alunos devem seguir?" },
        { en: "They must respect their classmates.", pt: "Eles devem respeitar os colegas." }
      ],
      keyPoints: [
        "Escreva regras utilizando MUST.",
        "Apresente proibições utilizando MUSTN'T.",
        "Utilize HAVE TO e HAS TO para necessidades.",
        "Dê conselhos com SHOULD.",
        "Apresente recomendações negativas com SHOULDN'T.",
        "Explique a diferença entre obrigação e conselho.",
        "Produza seu próprio guia de regras."
      ]
    }
  ]
},

// ======================================================
// SEMANA 13 — COMPARAÇÕES
// ======================================================

{
  title: "Comparatives and Superlatives — Comparações",
  goal: "Aprender a comparar pessoas, lugares, objetos e experiências utilizando comparativos de superioridade, igualdade e superlativos, reconhecendo as regras de formação e as principais exceções.",
  days: [
    {
      title: "Introdução aos comparativos",
      explanation: "Os comparativos são utilizados para comparar duas pessoas, objetos, lugares ou situações. Uma das estruturas mais comuns é o comparativo de superioridade, que indica que uma característica aparece em maior grau em um elemento do que em outro. Para muitos adjetivos curtos, acrescentamos ER ao final do adjetivo e utilizamos THAN para introduzir o segundo elemento da comparação. Por exemplo, BIG vira BIGGER e FAST vira FASTER. A estrutura básica é elemento 1 + verbo To Be + adjetivo comparativo + THAN + elemento 2. O THAN utilizado nas comparações significa do que, e não deve ser confundido com THEN, que significa então ou depois.",
      examples: [
        { en: "My house is bigger than yours.", pt: "Minha casa é maior que a sua." },
        { en: "A train is faster than a bicycle.", pt: "Um trem é mais rápido que uma bicicleta." },
        { en: "This book is cheaper than that one.", pt: "Este livro é mais barato que aquele." },
        { en: "English is easier than I expected.", pt: "Inglês é mais fácil do que eu esperava." },
        { en: "My brother is taller than me.", pt: "Meu irmão é mais alto que eu." },
        { en: "This road is longer than that road.", pt: "Esta estrada é mais longa que aquela." }
      ],
      keyPoints: [
        "Comparativos comparam dois elementos.",
        "Adjetivos curtos geralmente recebem ER.",
        "THAN significa do que nas comparações.",
        "BIG → BIGGER.",
        "FAST → FASTER.",
        "CHEAP → CHEAPER.",
        "THAN e THEN possuem significados diferentes.",
        "A estrutura utiliza frequentemente o verbo To Be."
      ]
    },
    {
      title: "Regras de escrita dos comparativos",
      explanation: "A formação dos comparativos possui algumas regras ortográficas. Muitos adjetivos curtos recebem ER diretamente, como TALL → TALLER e SMALL → SMALLER. Quando um adjetivo termina em E, acrescentamos apenas R: NICE → NICER e LARGE → LARGER. Quando termina em consoante + Y, geralmente substituímos Y por IER: HAPPY → HAPPIER e EASY → EASIER. Em alguns adjetivos curtos com padrão de consoante-vogal-consoante, duplicamos a consoante final: BIG → BIGGER e HOT → HOTTER. Existem também formas irregulares que precisam ser memorizadas, como GOOD → BETTER e BAD → WORSE.",
      examples: [
        { en: "TALL → TALLER", pt: "Alto → mais alto." },
        { en: "NICE → NICER", pt: "Legal ou agradável → mais legal ou agradável." },
        { en: "HAPPY → HAPPIER", pt: "Feliz → mais feliz." },
        { en: "BIG → BIGGER", pt: "Grande → maior." },
        { en: "HOT → HOTTER", pt: "Quente → mais quente." },
        { en: "GOOD → BETTER", pt: "Bom → melhor." },
        { en: "BAD → WORSE", pt: "Ruim → pior." },
        { en: "My new computer is better than my old computer.", pt: "Meu computador novo é melhor que meu computador antigo." }
      ],
      keyPoints: [
        "Adjetivos terminados em E recebem apenas R.",
        "Consoante + Y geralmente vira IER.",
        "Alguns padrões curtos duplicam a consoante final.",
        "GOOD → BETTER é irregular.",
        "BAD → WORSE é irregular.",
        "Memorize as principais formas irregulares.",
        "A escrita do adjetivo muda, mas a estrutura da comparação permanece."
      ]
    },
    {
      title: "MORE — Comparativos com adjetivos longos",
      explanation: "Nem todos os adjetivos formam comparativos recebendo ER. Adjetivos mais longos normalmente utilizam MORE antes da palavra. A estrutura fica MORE + adjetivo + THAN. Por exemplo, EXPENSIVE vira MORE EXPENSIVE, INTERESTING vira MORE INTERESTING e BEAUTIFUL vira MORE BEAUTIFUL. Não devemos normalmente utilizar MORE e ER juntos no mesmo adjetivo. Portanto, MORE BIGGER está incorreto: o correto é BIGGER. Também podemos comparar características abstratas, como dificuldade, importância, utilidade e interesse. O contexto deve ajudar a compreender qual característica está sendo comparada.",
      examples: [
        { en: "This phone is more expensive than that one.", pt: "Este celular é mais caro que aquele." },
        { en: "This book is more interesting than the movie.", pt: "Este livro é mais interessante que o filme." },
        { en: "Science is more difficult than I thought.", pt: "Ciências é mais difícil do que eu pensei." },
        { en: "This application is more useful than the old one.", pt: "Este aplicativo é mais útil que o antigo." },
        { en: "The second lesson is more important.", pt: "A segunda aula é mais importante." },
        { en: "This explanation is more complicated than the first one.", pt: "Esta explicação é mais complicada que a primeira." }
      ],
      keyPoints: [
        "MORE é utilizado com muitos adjetivos longos.",
        "Estrutura: MORE + adjetivo + THAN.",
        "EXPENSIVE → MORE EXPENSIVE.",
        "INTERESTING → MORE INTERESTING.",
        "Não utilize MORE e ER juntos normalmente.",
        "Escolha a formação de acordo com o adjetivo."
      ]
    },
    {
      title: "Superlativos — The biggest e The most interesting",
      explanation: "Enquanto os comparativos normalmente comparam dois elementos, os superlativos destacam um elemento que apresenta o maior ou menor grau de determinada característica dentro de um grupo ou contexto. Adjetivos curtos geralmente recebem EST e são acompanhados por THE. Por exemplo, BIG vira THE BIGGEST e FAST vira THE FASTEST. Adjetivos longos normalmente utilizam THE MOST antes da palavra: THE MOST INTERESTING e THE MOST EXPENSIVE. Também existem formas irregulares, como GOOD → THE BEST e BAD → THE WORST. É comum utilizar expressões como IN THE WORLD, IN THE CLASS e OF ALL para indicar o grupo da comparação.",
      examples: [
        { en: "Mount Everest is the highest mountain in the world.", pt: "O Monte Everest é a montanha mais alta do mundo." },
        { en: "This is the biggest room in the house.", pt: "Este é o maior cômodo da casa." },
        { en: "She is the fastest runner in the team.", pt: "Ela é a corredora mais rápida da equipe." },
        { en: "This is the most interesting book.", pt: "Este é o livro mais interessante." },
        { en: "That is the most expensive computer in the store.", pt: "Aquele é o computador mais caro da loja." },
        { en: "This is the best day of my week.", pt: "Este é o melhor dia da minha semana." },
        { en: "It was the worst mistake.", pt: "Foi o pior erro." }
      ],
      keyPoints: [
        "Superlativos destacam o maior ou menor grau dentro de um grupo.",
        "Adjetivos curtos geralmente recebem EST.",
        "THE costuma acompanhar o superlativo.",
        "Adjetivos longos normalmente utilizam THE MOST.",
        "GOOD → THE BEST.",
        "BAD → THE WORST.",
        "IN THE WORLD e IN THE CLASS indicam o grupo considerado."
      ]
    },
    {
      title: "Comparando lugares, produtos e experiências",
      explanation: "Nesta aula, vamos utilizar comparativos e superlativos em situações práticas. Podemos comparar cidades, escolas, aparelhos eletrônicos, livros, atividades e experiências. Para isso, precisamos escolher adjetivos adequados e construir frases completas. Também vamos revisar expressões como CHEAPER THAN, MORE EXPENSIVE THAN, THE BIGGEST e THE MOST INTERESTING. É importante perceber que uma comparação depende da característica analisada: um produto pode ser mais barato, mas menos durável; um lugar pode ser maior, mas mais distante. Não existe uma única característica que determine todas as qualidades de alguma coisa.",
      examples: [
        { en: "This laptop is cheaper than that computer.", pt: "Este notebook é mais barato que aquele computador." },
        { en: "My city is smaller than São Paulo.", pt: "Minha cidade é menor que São Paulo." },
        { en: "This is the most interesting museum in the city.", pt: "Este é o museu mais interessante da cidade." },
        { en: "The blue phone is more expensive than the black phone.", pt: "O celular azul é mais caro que o preto." },
        { en: "This park is the biggest in the neighborhood.", pt: "Este é o maior parque do bairro." },
        { en: "Traveling by train is slower than traveling by plane.", pt: "Viajar de trem é mais lento do que viajar de avião." }
      ],
      keyPoints: [
        "Escolha uma característica para comparar.",
        "Utilize THAN para comparativos.",
        "Utilize THE com superlativos na estrutura comum.",
        "Adjetivos podem descrever preço, distância, tamanho e interesse.",
        "Compare características específicas, não tudo ao mesmo tempo.",
        "Explique por que um elemento é diferente do outro."
      ]
    },
    {
      title: "AS...AS — Comparações de igualdade e desafio",
      explanation: "Além de dizer que uma coisa é maior, menor, melhor ou pior que outra, podemos indicar que duas coisas possuem o mesmo grau de uma característica. Para isso, utilizamos AS + adjetivo + AS. Por exemplo, MY ROOM IS AS BIG AS YOUR ROOM significa que meu quarto é tão grande quanto o seu. Na forma negativa, podemos utilizar NOT AS + adjetivo + AS, indicando que algo não é tão... quanto outra coisa. Também vamos revisar os comparativos e superlativos em um pequeno desafio de escrita. O aluno deverá comparar pelo menos três elementos e explicar suas escolhas.",
      examples: [
        { en: "My computer is as fast as yours.", pt: "Meu computador é tão rápido quanto o seu." },
        { en: "This book is as interesting as the movie.", pt: "Este livro é tão interessante quanto o filme." },
        { en: "My room is not as big as yours.", pt: "Meu quarto não é tão grande quanto o seu." },
        { en: "English is as important as other languages.", pt: "O inglês é tão importante quanto outros idiomas." },
        { en: "This exercise is not as difficult as the last one.", pt: "Este exercício não é tão difícil quanto o anterior." },
        { en: "Which city is bigger?", pt: "Qual cidade é maior?" },
        { en: "What is the most interesting place you have visited?", pt: "Qual é o lugar mais interessante que você já visitou?" }
      ],
      keyPoints: [
        "AS + adjetivo + AS expressa igualdade.",
        "NOT AS + adjetivo + AS expressa desigualdade.",
        "THAN aparece em comparativos de superioridade.",
        "EST e MOST aparecem em superlativos.",
        "Revise as formas irregulares.",
        "Produza comparações utilizando diferentes estruturas."
      ]
    }
  ]
},

// ======================================================
// SEMANA 14 — ADJETIVOS, DESCRIÇÕES E EMOÇÕES
// ======================================================

{
  title: "Adjectives — Descriptions, Personality and Feelings",
  goal: "Ampliar o vocabulário de adjetivos, descrever pessoas de maneira respeitosa, apresentar características de personalidade, expressar sentimentos e compreender a diferença entre adjetivos terminados em ED e ING.",
  days: [
    {
      title: "Adjetivos físicos e características visíveis",
      explanation: "Adjetivos são palavras utilizadas para descrever características de pessoas, objetos, lugares e situações. Nesta aula, vamos aprender vocabulário neutro para descrever características visíveis, como altura, cabelo, olhos e roupas, sem transformar descrições em julgamentos sobre a aparência de alguém. TALL significa alto, SHORT pode significar baixo ou curto dependendo do substantivo, LONG significa longo, SHORT HAIR significa cabelo curto e CURLY HAIR significa cabelo cacheado. Também podemos descrever roupas e acessórios utilizando palavras como BLUE, BLACK, RED, OLD, NEW e COLORFUL. Em inglês, o adjetivo normalmente aparece antes do substantivo quando faz parte de uma expressão nominal: A BLUE SHIRT, por exemplo.",
      examples: [
        { en: "She has long hair.", pt: "Ela tem cabelo comprido." },
        { en: "He has short hair.", pt: "Ele tem cabelo curto." },
        { en: "My friend has curly hair.", pt: "Meu amigo tem cabelo cacheado." },
        { en: "She is wearing a blue shirt.", pt: "Ela está usando uma camiseta azul." },
        { en: "He has brown eyes.", pt: "Ele tem olhos castanhos." },
        { en: "The teacher is wearing black glasses.", pt: "O professor está usando óculos pretos." },
        { en: "My grandfather is tall.", pt: "Meu avô é alto." }
      ],
      keyPoints: [
        "ADJECTIVE = adjetivo.",
        "TALL = alto.",
        "SHORT = baixo ou curto, dependendo do contexto.",
        "LONG HAIR = cabelo comprido.",
        "SHORT HAIR = cabelo curto.",
        "CURLY HAIR = cabelo cacheado.",
        "STRAIGHT HAIR = cabelo liso.",
        "Adjetivos geralmente aparecem antes dos substantivos.",
        "HAS é utilizado para falar de características que alguém possui.",
        "IS pode descrever uma característica."
      ]
    },
    {
      title: "Personalidade — Describing personality",
      explanation: "Nesta aula, vamos aprender adjetivos utilizados para descrever características de personalidade e comportamento. FRIENDLY significa amigável, KIND significa gentil, FUNNY significa engraçado, CREATIVE significa criativo, PATIENT significa paciente, HONEST significa honesto, SHY significa tímido e OUTGOING significa extrovertido ou comunicativo. Também podemos utilizar HARD-WORKING para descrever alguém dedicado ao trabalho ou aos estudos, e CURIOUS para alguém curioso. Essas palavras ajudam a descrever como uma pessoa costuma agir, interagir e se comportar. Podemos utilizar o verbo TO BE para apresentar essas características: SHE IS FRIENDLY, HE IS CREATIVE.",
      examples: [
        { en: "My teacher is very patient.", pt: "Meu professor é muito paciente." },
        { en: "She is friendly and kind.", pt: "Ela é amigável e gentil." },
        { en: "He is funny.", pt: "Ele é engraçado." },
        { en: "My friend is creative.", pt: "Meu amigo é criativo." },
        { en: "I am curious about science.", pt: "Sou curioso sobre ciências." },
        { en: "They are hardworking students.", pt: "Eles são alunos dedicados." },
        { en: "My brother is shy, but he is very kind.", pt: "Meu irmão é tímido, mas é muito gentil." }
      ],
      keyPoints: [
        "FRIENDLY = amigável.",
        "KIND = gentil.",
        "FUNNY = engraçado.",
        "CREATIVE = criativo.",
        "PATIENT = paciente.",
        "HONEST = honesto.",
        "SHY = tímido.",
        "OUTGOING = extrovertido ou comunicativo.",
        "HARD-WORKING = dedicado.",
        "CURIOUS = curioso.",
        "Utilize TO BE para descrever características."
      ]
    },
    {
      title: "Sentimentos e emoções",
      explanation: "Agora vamos aprender palavras para expressar sentimentos e estados emocionais. HAPPY significa feliz, SAD significa triste, ANGRY significa com raiva, NERVOUS significa nervoso, EXCITED significa animado ou empolgado, WORRIED significa preocupado, CALM significa calmo, CONFUSED significa confuso e PROUD significa orgulhoso. Podemos utilizar o verbo TO BE para falar sobre como alguém está se sentindo: I AM HAPPY, SHE IS NERVOUS, THEY ARE EXCITED. Também podemos apresentar o motivo utilizando BECAUSE. É importante compreender que sentimentos podem mudar conforme a situação e que uma mesma pessoa pode experimentar emoções diferentes ao longo do dia.",
      examples: [
        { en: "I am happy today.", pt: "Estou feliz hoje." },
        { en: "She is excited about the trip.", pt: "Ela está empolgada com a viagem." },
        { en: "He is nervous before the exam.", pt: "Ele está nervoso antes da prova." },
        { en: "They are worried about the weather.", pt: "Eles estão preocupados com o clima." },
        { en: "We are proud of our work.", pt: "Estamos orgulhosos do nosso trabalho." },
        { en: "I am confused because the instructions are difficult.", pt: "Estou confuso porque as instruções são difíceis." },
        { en: "She feels calm at home.", pt: "Ela se sente calma em casa." }
      ],
      keyPoints: [
        "HAPPY = feliz.",
        "SAD = triste.",
        "ANGRY = com raiva.",
        "NERVOUS = nervoso.",
        "EXCITED = empolgado.",
        "WORRIED = preocupado.",
        "CALM = calmo.",
        "CONFUSED = confuso.",
        "PROUD = orgulhoso.",
        "Utilize TO BE para expressar estados.",
        "BECAUSE pode explicar o motivo de um sentimento."
      ]
    },
    {
      title: "Adjetivos terminados em ED e ING",
      explanation: "Uma diferença muito importante do inglês está nos adjetivos terminados em ED e ING. Adjetivos terminados em ED geralmente descrevem como uma pessoa se sente. Adjetivos terminados em ING geralmente descrevem aquilo que provoca determinado sentimento ou a característica de uma situação. Por exemplo, BORED significa entediado: descreve como alguém está se sentindo. BORING significa entediante: descreve algo que provoca tédio. Da mesma forma, EXCITED significa empolgado e EXCITING significa emocionante. Essa diferença aparece em muitas palavras e pode mudar completamente o sentido da frase. Não significa que toda palavra terminada em ED ou ING tenha obrigatoriamente essa função: estamos estudando especialmente pares de adjetivos derivados de verbos.",
      examples: [
        { en: "I am bored.", pt: "Estou entediado." },
        { en: "The movie is boring.", pt: "O filme é entediante." },
        { en: "She is excited.", pt: "Ela está empolgada." },
        { en: "The game is exciting.", pt: "O jogo é emocionante." },
        { en: "He is interested in science.", pt: "Ele está interessado em ciências." },
        { en: "Science is interesting.", pt: "Ciências é interessante." },
        { en: "We are surprised.", pt: "Estamos surpresos." },
        { en: "The news is surprising.", pt: "A notícia é surpreendente." },
        { en: "I am tired because the work is tiring.", pt: "Estou cansado porque o trabalho é cansativo." }
      ],
      keyPoints: [
        "BORED = entediado.",
        "BORING = entediante.",
        "EXCITED = empolgado.",
        "EXCITING = emocionante.",
        "INTERESTED = interessado.",
        "INTERESTING = interessante.",
        "SURPRISED = surpreso.",
        "SURPRISING = surpreendente.",
        "TIRED = cansado.",
        "TIRING = cansativo.",
        "ED geralmente descreve o sentimento de alguém.",
        "ING geralmente descreve aquilo que provoca o sentimento."
      ]
    },
    {
      title: "Descrevendo pessoas e situações",
      explanation: "Nesta aula, vamos combinar características físicas neutras, personalidade e sentimentos em descrições completas. Uma descrição pode apresentar o nome de uma pessoa, suas características visíveis, suas preferências, seu comportamento e como ela está se sentindo em determinado momento. Também podemos diferenciar características relativamente estáveis de estados temporários. Por exemplo, HE IS FRIENDLY descreve uma característica de personalidade, enquanto HE IS NERVOUS TODAY descreve um estado atual. Vamos utilizar AND, BUT e BECAUSE para conectar as informações e produzir textos mais naturais.",
      examples: [
        {
          en: "My friend Daniel has short brown hair and wears glasses. He is creative, curious and very friendly. He enjoys science and technology. Today, he is excited because he is preparing a new project. He is also a little nervous because he is going to present it at school tomorrow.",
          pt: "Meu amigo Daniel tem cabelo castanho curto e usa óculos. Ele é criativo, curioso e muito amigável. Gosta de ciências e tecnologia. Hoje, está empolgado porque está preparando um projeto novo. Também está um pouco nervoso porque vai apresentá-lo na escola amanhã."
        },
        { en: "What is your friend like?", pt: "Como é seu amigo em relação à personalidade?" },
        { en: "He is friendly and funny.", pt: "Ele é amigável e engraçado." },
        { en: "How is she feeling today?", pt: "Como ela está se sentindo hoje?" },
        { en: "She is excited.", pt: "Ela está empolgada." },
        { en: "Why is he nervous?", pt: "Por que ele está nervoso?" },
        { en: "Because he has an exam tomorrow.", pt: "Porque ele tem uma prova amanhã." }
      ],
      keyPoints: [
        "WHAT IS HE/SHE LIKE? pergunta sobre personalidade.",
        "HOW IS HE/SHE FEELING? pergunta sobre sentimentos.",
        "Utilize HAS para características que alguém possui.",
        "Utilize TO BE para características e estados.",
        "Diferencie características estáveis de estados temporários.",
        "Conecte ideias com AND, BUT e BECAUSE.",
        "Evite confundir adjetivos terminados em ED e ING."
      ]
    },
    {
      title: "Meu perfil em inglês — Desafio de descrição",
      explanation: "Nesta última aula, o aluno deverá produzir um perfil em inglês sobre si mesmo ou sobre uma personagem fictícia. O texto deverá incluir características visíveis descritas de maneira neutra, características de personalidade, sentimentos e preferências. Também deverá utilizar pelo menos um par de adjetivos terminados em ED e ING. O objetivo é demonstrar que o aluno consegue apresentar uma pessoa de maneira organizada, diferenciando o que ela é, o que possui e como está se sentindo. Não basta listar palavras: é necessário construir frases completas e conectar as informações.",
      examples: [
        {
          en: "Hello! My name is Alex. I am a curious and creative person. I have short dark hair and I usually wear glasses. I enjoy learning new things, especially about technology and science. I am excited about my new project because it is very interesting. Sometimes I feel tired after studying, but I am always interested in learning more.",
          pt: "Olá! Meu nome é Alex. Sou uma pessoa curiosa e criativa. Tenho cabelo curto e escuro e geralmente uso óculos. Gosto de aprender coisas novas, especialmente sobre tecnologia e ciências. Estou empolgado com meu novo projeto porque ele é muito interessante. Às vezes me sinto cansado depois de estudar, mas estou sempre interessado em aprender mais."
        },
        { en: "What are you like?", pt: "Como você é em relação à personalidade?" },
        { en: "What makes you excited?", pt: "O que deixa você empolgado?" },
        { en: "What are you interested in?", pt: "Em que você está interessado?" },
        { en: "Describe how you feel today.", pt: "Descreva como você está se sentindo hoje." }
      ],
      keyPoints: [
        "Escreva um perfil completo.",
        "Utilize pelo menos quatro adjetivos de personalidade.",
        "Inclua uma descrição neutra de características visíveis.",
        "Utilize pelo menos três sentimentos.",
        "Inclua um par de adjetivos terminados em ED e ING.",
        "Utilize AND, BUT ou BECAUSE.",
        "Revise a concordância do verbo TO BE."
      ]
    }
  ]
},

// ======================================================
// SEMANA 15 — CONSTRUÇÃO DE DIÁLOGOS COMPLETOS
// ======================================================

{
  title: "Complete Conversations — Comunicação integrada",
  goal: "Integrar os conhecimentos das semanas anteriores para compreender, construir e manter diálogos completos sobre apresentações, perguntas, rotinas, preferências, acontecimentos passados, planos futuros, opiniões e situações cotidianas.",
  days: [
    {
      title: "Apresentação pessoal e primeiras perguntas",
      explanation: "Uma conversa normalmente começa com uma saudação e uma apresentação. Podemos utilizar HELLO, HI, GOOD MORNING e NICE TO MEET YOU. Depois, podemos dizer nosso nome, apresentar informações gerais e perguntar sobre a outra pessoa. Nesta aula, vamos revisar o verbo TO BE, pronomes pessoais, perguntas com WHO, WHAT, WHERE e HOW, além de respostas curtas. Também vamos aprender a manter uma conversa em vez de responder apenas SIM ou NÃO. Uma boa apresentação pode incluir nome, cidade, interesses e informações sobre o que a pessoa está aprendendo. O objetivo é conseguir iniciar uma conversa e demonstrar interesse pelo interlocutor.",
      examples: [
        {
          en: "A: Hi! My name is Alex. What's your name? B: Hello! I'm Daniel. Nice to meet you. A: Nice to meet you too. Where are you from? B: I'm from Brazil. What about you? A: I'm from Brazil too. What do you do? B: I'm a student. I study English and science.",
          pt: "A: Oi! Meu nome é Alex. Qual é o seu nome? B: Olá! Sou Daniel. Prazer em conhecer você. A: Prazer em conhecer você também. De onde você é? B: Sou do Brasil. E você? A: Também sou do Brasil. O que você faz? B: Sou estudante. Estudo inglês e ciências."
        },
        { en: "What is your name?", pt: "Qual é seu nome?" },
        { en: "Where are you from?", pt: "De onde você é?" },
        { en: "What do you study?", pt: "O que você estuda?" },
        { en: "What are your hobbies?", pt: "Quais são seus passatempos?" },
        { en: "How are you today?", pt: "Como você está hoje?" }
      ],
      keyPoints: [
        "HELLO e HI são saudações comuns.",
        "NICE TO MEET YOU = prazer em conhecer você.",
        "WHAT'S YOUR NAME? pergunta o nome.",
        "WHERE ARE YOU FROM? pergunta a origem.",
        "WHAT DO YOU DO? pergunta sobre ocupação ou atividade.",
        "Utilize respostas completas sempre que possível.",
        "Faça perguntas complementares para manter a conversa."
      ]
    },
    {
      title: "Rotina, gostos e opiniões",
      explanation: "Nesta aula, vamos praticar como conversar sobre hábitos, atividades, preferências e opiniões. O Present Simple é utilizado para falar de rotinas e gostos. Podemos utilizar LIKE, LOVE, ENJOY e PREFER para expressar preferências, além de expressões como I THINK e IN MY OPINION para apresentar opiniões. Também vamos revisar advérbios de frequência, como ALWAYS, USUALLY, OFTEN, SOMETIMES e NEVER. Uma conversa natural precisa ir além de perguntar DO YOU LIKE...? e responder YES ou NO. Podemos explicar por que gostamos de algo, perguntar sobre a preferência da outra pessoa e apresentar uma opinião diferente de maneira respeitosa.",
      examples: [
        {
          en: "A: What do you usually do after school? B: I usually study and play video games. A: Do you like sports? B: Yes, I do. I really enjoy soccer. A: How often do you play? B: I play twice a week. What about you? A: I prefer basketball, but I sometimes play soccer too.",
          pt: "A: O que você geralmente faz depois da escola? B: Geralmente estudo e jogo videogame. A: Você gosta de esportes? B: Sim. Gosto muito de futebol. A: Com que frequência você joga? B: Jogo duas vezes por semana. E você? A: Prefiro basquete, mas às vezes também jogo futebol."
        },
        { en: "I think this game is interesting.", pt: "Acho que este jogo é interessante." },
        { en: "In my opinion, English is useful.", pt: "Na minha opinião, inglês é útil." },
        { en: "I prefer reading to watching television.", pt: "Prefiro ler a assistir televisão." },
        { en: "I usually study in the afternoon.", pt: "Geralmente estudo à tarde." },
        { en: "What kind of music do you like?", pt: "De que tipo de música você gosta?" }
      ],
      keyPoints: [
        "Present Simple descreve rotinas e preferências.",
        "DO YOU LIKE...? pergunta sobre gostos.",
        "HOW OFTEN...? pergunta frequência.",
        "I THINK apresenta uma opinião.",
        "IN MY OPINION significa na minha opinião.",
        "PREFER expressa preferência.",
        "Explique suas respostas utilizando razões.",
        "Faça perguntas relacionadas ao assunto."
      ]
    },
    {
      title: "Contando experiências e acontecimentos passados",
      explanation: "Nesta aula, vamos integrar o Past Simple e o Past Continuous em conversas sobre acontecimentos anteriores. O Past Simple descreve acontecimentos concluídos no passado. O Past Continuous descreve ações que estavam acontecendo em determinado momento. Podemos utilizar perguntas com DID para descobrir o que alguém fez e WAS/WERE para perguntar o que estava acontecendo. Também vamos revisar verbos regulares e irregulares, expressões de tempo como YESTERDAY, LAST WEEK e TWO DAYS AGO, e conectores como WHEN e WHILE. O objetivo é conseguir contar um pequeno acontecimento e responder perguntas sobre ele.",
      examples: [
        {
          en: "A: What did you do last weekend? B: I visited my grandparents. A: What did you do there? B: We had lunch together and watched a movie. A: What were you doing when I called you? B: I was having dinner. A: Did you have a good weekend? B: Yes, I did. It was great!",
          pt: "A: O que você fez no último fim de semana? B: Visitei meus avós. A: O que você fez lá? B: Almoçamos juntos e assistimos a um filme. A: O que você estava fazendo quando liguei? B: Estava jantando. A: Você teve um bom fim de semana? B: Sim. Foi ótimo!"
        },
        { en: "I went to the park yesterday.", pt: "Fui ao parque ontem." },
        { en: "She saw a new movie last week.", pt: "Ela assistiu a um filme novo na semana passada." },
        { en: "What did you eat?", pt: "O que você comeu?" },
        { en: "Were you sleeping when I called?", pt: "Você estava dormindo quando liguei?" },
        { en: "We were playing when it started to rain.", pt: "Estávamos jogando quando começou a chover." }
      ],
      keyPoints: [
        "Past Simple apresenta acontecimentos concluídos.",
        "Past Continuous apresenta ações em andamento no passado.",
        "DID é utilizado em perguntas no Past Simple.",
        "WAS e WERE formam perguntas no Past Continuous.",
        "WHEN pode conectar acontecimentos.",
        "WHILE pode apresentar ações simultâneas.",
        "Revise os principais verbos irregulares.",
        "Conte acontecimentos com começo, desenvolvimento e conclusão."
      ]
    },
    {
      title: "Planos, possibilidades e obrigações",
      explanation: "Agora vamos utilizar o futuro e os verbos modais para conversar sobre planos e responsabilidades. Podemos utilizar GOING TO para falar de planos já organizados, WILL para decisões rápidas e previsões, MAY e MIGHT para possibilidades, CAN e COULD para capacidades e solicitações, MUST e HAVE TO para obrigações e SHOULD para conselhos. Em uma conversa real, essas estruturas podem aparecer juntas. Por exemplo, uma pessoa pode contar o que pretende fazer no fim de semana, explicar o que precisa terminar antes e pedir ajuda a outra pessoa. O objetivo é escolher a estrutura adequada de acordo com o significado que queremos transmitir.",
      examples: [
        {
          en: "A: What are you going to do next weekend? B: I'm going to visit my cousins. A: That sounds interesting! Are you going to travel? B: Yes, we are going to travel by car. A: I might visit my grandparents too. B: You should go! A: I have to finish my homework first. B: I can help you if you want.",
          pt: "A: O que você vai fazer no próximo fim de semana? B: Vou visitar meus primos. A: Parece interessante! Você vai viajar? B: Sim, vamos viajar de carro. A: Talvez eu também visite meus avós. B: Você deveria ir! A: Primeiro preciso terminar minha tarefa. B: Posso ajudar você se quiser."
        },
        { en: "I will call you later.", pt: "Vou ligar para você mais tarde." },
        { en: "I am going to study tonight.", pt: "Vou estudar hoje à noite." },
        { en: "We might travel next month.", pt: "Talvez viajemos no próximo mês." },
        { en: "Could you help me?", pt: "Você poderia me ajudar?" },
        { en: "You should prepare for the exam.", pt: "Você deveria se preparar para a prova." },
        { en: "I have to finish this project.", pt: "Preciso terminar este projeto." }
      ],
      keyPoints: [
        "GOING TO indica planos e intenções.",
        "WILL indica decisões rápidas, promessas e previsões.",
        "MAY e MIGHT indicam possibilidades.",
        "CAN e COULD expressam habilidades e solicitações.",
        "MUST e HAVE TO expressam obrigações.",
        "SHOULD apresenta conselhos.",
        "Escolha o modal de acordo com a situação.",
        "Pratique diálogos sobre planos e responsabilidades."
      ]
    },
    {
      title: "Opiniões, comparações e descrições",
      explanation: "Nesta aula, vamos aprender a incluir opiniões, comparações e descrições em uma conversa. Podemos utilizar adjetivos para descrever lugares, atividades, pessoas e experiências. Comparativos permitem explicar que uma coisa é mais interessante, rápida, barata ou difícil do que outra. Superlativos destacam algo dentro de um grupo. Também vamos revisar sentimentos e a diferença entre adjetivos terminados em ED e ING. Em uma conversa, podemos concordar, discordar educadamente e explicar o motivo da nossa opinião. Expressões como I AGREE, I DON'T THINK SO e THAT'S INTERESTING ajudam a tornar a interação mais natural.",
      examples: [
        {
          en: "A: What do you think about this movie? B: I think it's interesting, but the book is more exciting. A: Really? I think the movie is the best part. B: That's interesting! What did you like most? A: I loved the ending. It was surprising. B: I agree. I was surprised too!",
          pt: "A: O que você acha deste filme? B: Acho interessante, mas o livro é mais emocionante. A: Sério? Acho que o filme é a melhor parte. B: Interessante! Do que você mais gostou? A: Adorei o final. Foi surpreendente. B: Concordo. Também fiquei surpreso!"
        },
        { en: "I agree with you.", pt: "Concordo com você." },
        { en: "I don't think so.", pt: "Não acho." },
        { en: "This place is more beautiful than the other one.", pt: "Este lugar é mais bonito que o outro." },
        { en: "That was the most interesting experience.", pt: "Aquela foi a experiência mais interessante." },
        { en: "I am bored because the class is boring.", pt: "Estou entediado porque a aula é entediante." },
        { en: "What is your opinion?", pt: "Qual é sua opinião?" }
      ],
      keyPoints: [
        "I THINK apresenta opiniões.",
        "I AGREE significa concordo.",
        "I DON'T THINK SO significa não acho.",
        "Comparativos utilizam THAN.",
        "Superlativos utilizam estruturas como THE MOST.",
        "ED descreve sentimentos em muitos pares de adjetivos.",
        "ING descreve características que provocam sentimentos.",
        "Explique o motivo da sua opinião."
      ]
    },
    {
      title: "Grande diálogo — Uma conversa do início ao fim",
      explanation: "Nesta última aula, vamos reunir os conhecimentos das semanas anteriores em uma conversa mais longa. O diálogo deverá incluir saudação, apresentação, perguntas pessoais, rotina, preferências, acontecimentos passados, planos futuros, capacidades, obrigações, conselhos, comparações e opiniões. O objetivo não é utilizar todas as estruturas em uma única conversa de maneira artificial, mas demonstrar que o aluno consegue escolher diferentes construções conforme a necessidade da comunicação. Depois de estudar o exemplo, o aluno deverá criar um diálogo próprio, substituindo as informações por situações e interesses diferentes. Também deverá praticar a leitura em voz alta, prestando atenção à pronúncia, à entonação das perguntas e às pausas entre as falas.",
      examples: [
        {
          en: "A: Hi! How are you? B: I'm great, thanks! What about you? A: I'm good. By the way, what do you usually do after school? B: I usually study English and play video games. A: That's interesting! What games do you like? B: I enjoy adventure games. I think they are more interesting than sports games. A: Cool! What did you do last weekend? B: I went to the park with my friends. We were playing soccer when it started to rain. A: That sounds fun! What are you going to do next weekend? B: I'm going to visit my grandparents. A: Nice! I might visit my cousins too. B: You should go! A: I have to finish my homework first. B: I can help you if you want. A: Really? Could you help me tomorrow? B: Of course! A: Thank you! B: You're welcome!",
          pt: "A: Oi! Como você está? B: Estou ótimo, obrigado! E você? A: Estou bem. Aliás, o que você geralmente faz depois da escola? B: Geralmente estudo inglês e jogo videogame. A: Interessante! De quais jogos você gosta? B: Gosto de jogos de aventura. Acho que são mais interessantes que jogos de esportes. A: Legal! O que você fez no último fim de semana? B: Fui ao parque com meus amigos. Estávamos jogando futebol quando começou a chover. A: Parece divertido! O que você vai fazer no próximo fim de semana? B: Vou visitar meus avós. A: Legal! Talvez eu também visite meus primos. B: Você deveria ir! A: Primeiro preciso terminar minha tarefa. B: Posso ajudar se você quiser. A: Sério? Você poderia me ajudar amanhã? B: Claro! A: Obrigado! B: De nada!"
        },
        { en: "Could you tell me more about it?", pt: "Você poderia me contar mais sobre isso?" },
        { en: "What do you think about this idea?", pt: "O que você acha desta ideia?" },
        { en: "I think it is a great idea.", pt: "Acho que é uma ótima ideia." },
        { en: "What are you going to do tomorrow?", pt: "O que você vai fazer amanhã?" },
        { en: "What were you doing yesterday afternoon?", pt: "O que você estava fazendo ontem à tarde?" }
      ],
      keyPoints: [
        "Inicie uma conversa com uma saudação.",
        "Apresente-se e faça perguntas.",
        "Converse sobre hábitos e preferências.",
        "Conte um acontecimento passado.",
        "Utilize Past Simple e Past Continuous.",
        "Fale sobre planos e possibilidades futuras.",
        "Utilize modais para habilidades, obrigações e conselhos.",
        "Apresente opiniões e comparações.",
        "Crie um diálogo próprio com pelo menos 12 falas.",
        "Leia o diálogo em voz alta e pratique a entonação."
      ]
    }
  ]
},


// ======================================================
// SEMANA 16 — TESTE DE BASE
// ======================================================

{
  title: "Base English Assessment — Teste de Base",
  goal: "Avaliar se o aluno consegue utilizar o inglês básico em situações cotidianas, apresentando-se, fazendo perguntas, falando sobre sua rotina, contando acontecimentos passados, descrevendo planos futuros e compreendendo mensagens simples sem depender da tradução palavra por palavra.",
  days: [
    {
      title: "Teste 1 — Apresentação e comunicação pessoal",
      explanation: "Nesta primeira etapa, o aluno deverá demonstrar que consegue iniciar uma conversa e apresentar informações pessoais em inglês. Será necessário utilizar pronomes pessoais, o verbo TO BE, vocabulário de apresentação, características pessoais, gostos e informações gerais. O objetivo não é decorar um texto pronto, mas conseguir falar sobre si mesmo de maneira compreensível. O aluno também deverá responder perguntas feitas por outra pessoa, sem depender de uma resposta previamente memorizada. Durante a atividade, serão avaliadas a construção das frases, a compreensão das perguntas e a capacidade de transmitir informações básicas.",
      examples: [
        {
          en: "Hello! My name is Alex. I am from Brazil and I am a student. I enjoy learning new things, especially about technology and languages. I am curious and creative. I usually study in the afternoon, and I like playing video games in my free time.",
          pt: "Olá! Meu nome é Alex. Sou do Brasil e sou estudante. Gosto de aprender coisas novas, especialmente sobre tecnologia e idiomas. Sou curioso e criativo. Geralmente estudo à tarde e gosto de jogar videogame no meu tempo livre."
        },
        { en: "What is your name?", pt: "Qual é seu nome?" },
        { en: "Where are you from?", pt: "De onde você é?" },
        { en: "What do you like doing?", pt: "O que você gosta de fazer?" },
        { en: "What are you interested in?", pt: "Em que você tem interesse?" },
        { en: "How would you describe yourself?", pt: "Como você se descreveria?" }
      ],
      keyPoints: [
        "Apresente seu nome e sua origem.",
        "Utilize corretamente o verbo TO BE.",
        "Fale sobre seus estudos e interesses.",
        "Descreva pelo menos duas características pessoais.",
        "Responda perguntas sem apenas repetir um texto decorado.",
        "Construa pelo menos cinco frases sobre você.",
        "Priorize a comunicação e a clareza."
      ]
    },
    {
      title: "Teste 2 — Perguntas e respostas",
      explanation: "Nesta etapa, o aluno deverá demonstrar que consegue participar de uma conversa fazendo perguntas e compreendendo respostas. Serão avaliadas as estruturas com WHO, WHAT, WHERE, WHEN, WHY, HOW, HOW MUCH e HOW MANY, além das perguntas com DO, DOES, DID, CAN e TO BE. O aluno deverá reconhecer o tipo de informação solicitado e formular perguntas adequadas para descobrir informações que ainda não conhece. Também deverá responder com frases completas sempre que possível. Não basta saber traduzir uma pergunta: é necessário compreender o que a pessoa está querendo descobrir.",
      examples: [
        {
          en: "A: Where do you live? B: I live in Brazil. A: What do you study? B: I study English and science. A: Why do you study English? B: Because I want to communicate with more people. A: How often do you study? B: I study almost every day.",
          pt: "A: Onde você mora? B: Moro no Brasil. A: O que você estuda? B: Estudo inglês e ciências. A: Por que você estuda inglês? B: Porque quero me comunicar com mais pessoas. A: Com que frequência você estuda? B: Estudo quase todos os dias."
        },
        { en: "Who is your best friend?", pt: "Quem é seu melhor amigo?" },
        { en: "What did you do yesterday?", pt: "O que você fez ontem?" },
        { en: "When do you usually study?", pt: "Quando você geralmente estuda?" },
        { en: "Why are you learning English?", pt: "Por que você está aprendendo inglês?" },
        { en: "How many books do you have?", pt: "Quantos livros você tem?" },
        { en: "How much is this notebook?", pt: "Quanto custa este caderno?" },
        { en: "Can you speak another language?", pt: "Você consegue falar outro idioma?" }
      ],
      keyPoints: [
        "Reconheça o significado das principais palavras interrogativas.",
        "Formule perguntas com DO e DOES.",
        "Formule perguntas no passado com DID.",
        "Utilize perguntas com CAN e TO BE.",
        "Responda perguntas de maneira coerente.",
        "Faça pelo menos cinco perguntas próprias.",
        "Diferencie HOW MUCH de HOW MANY.",
        "Compreenda o que cada pergunta está solicitando."
      ]
    },
    {
      title: "Teste 3 — Rotina, gostos e situações cotidianas",
      explanation: "Nesta etapa, o aluno deverá demonstrar que consegue falar sobre sua rotina, seus hábitos, suas preferências e atividades do cotidiano. Será necessário utilizar o Present Simple, advérbios de frequência, verbos comuns e expressões relacionadas a horários e atividades. Também serão avaliadas frases negativas, perguntas e a terceira pessoa do singular. O aluno deverá conseguir explicar o que normalmente faz durante um dia, o que gosta de fazer e com que frequência realiza determinadas atividades. Além disso, deverá interpretar pequenas situações relacionadas à casa, escola, alimentação, tecnologia e estudos.",
      examples: [
        {
          en: "I usually wake up early. I have breakfast and go to school. After school, I study and sometimes play soccer. I enjoy learning English because it is useful. I don't study all day, but I try to practice regularly. On weekends, I usually spend time with my family.",
          pt: "Geralmente acordo cedo. Tomo café da manhã e vou para a escola. Depois da escola, estudo e às vezes jogo futebol. Gosto de aprender inglês porque é útil. Não estudo o dia inteiro, mas tento praticar regularmente. Nos fins de semana, geralmente passo tempo com minha família."
        },
        { en: "What time do you wake up?", pt: "Que horas você acorda?" },
        { en: "How often do you play sports?", pt: "Com que frequência você pratica esportes?" },
        { en: "I sometimes watch videos in English.", pt: "Às vezes assisto a vídeos em inglês." },
        { en: "She studies every morning.", pt: "Ela estuda todas as manhãs." },
        { en: "He doesn't work on Sundays.", pt: "Ele não trabalha aos domingos." },
        { en: "Do you usually cook at home?", pt: "Você geralmente cozinha em casa?" }
      ],
      keyPoints: [
        "Descreva sua rotina utilizando o Present Simple.",
        "Utilize pelo menos três advérbios de frequência.",
        "Construa frases afirmativas e negativas.",
        "Utilize corretamente DOES com HE, SHE e IT.",
        "Fale sobre gostos e atividades.",
        "Compreenda vocabulário de casa, escola e cotidiano.",
        "Explique sua rotina em pelo menos seis frases."
      ]
    },
    {
      title: "Teste 4 — Passado e acontecimentos",
      explanation: "Nesta etapa, o aluno deverá demonstrar que consegue contar acontecimentos que já ocorreram. Será necessário utilizar o Past Simple com verbos regulares e irregulares, formar negativas e perguntas com DID e compreender expressões de tempo como YESTERDAY, LAST WEEK, LAST MONTH e TWO DAYS AGO. Também será avaliada a capacidade de reconhecer ações que estavam acontecendo em determinado momento, utilizando WAS/WERE + verbo terminado em ING. O aluno deverá contar uma experiência simples com começo, desenvolvimento e conclusão, além de responder perguntas sobre o que aconteceu.",
      examples: [
        {
          en: "Last weekend, I visited my grandparents. We had lunch together and watched a movie. Later, I went to the park with my friends. We were playing soccer when it started to rain. I enjoyed the day because I spent time with people I like.",
          pt: "No último fim de semana, visitei meus avós. Almoçamos juntos e assistimos a um filme. Depois, fui ao parque com meus amigos. Estávamos jogando futebol quando começou a chover. Gostei do dia porque passei tempo com pessoas de quem gosto."
        },
        { en: "What did you do yesterday?", pt: "O que você fez ontem?" },
        { en: "I studied English last night.", pt: "Estudei inglês ontem à noite." },
        { en: "Did you watch the movie?", pt: "Você assistiu ao filme?" },
        { en: "I didn't go to school yesterday.", pt: "Não fui à escola ontem." },
        { en: "What were you doing at eight o'clock?", pt: "O que você estava fazendo às oito horas?" },
        { en: "I was studying when my friend called.", pt: "Eu estava estudando quando meu amigo ligou." }
      ],
      keyPoints: [
        "Conte acontecimentos utilizando o Past Simple.",
        "Utilize verbos regulares e irregulares.",
        "Formule perguntas com DID.",
        "Forme negativas com DIDN'T + verbo básico.",
        "Reconheça WAS e WERE + verbo ING.",
        "Diferencie ações concluídas de ações em andamento no passado.",
        "Produza uma pequena narrativa de pelo menos cinco frases."
      ]
    },
    {
      title: "Teste 5 — Futuro, planos e compreensão de instruções",
      explanation: "Nesta etapa, o aluno deverá falar sobre planos, intenções, previsões e possibilidades futuras. Será necessário diferenciar GOING TO e WILL, utilizar MAY e MIGHT para possibilidades e compreender expressões de tempo como TOMORROW, NEXT WEEK e NEXT YEAR. Também serão avaliados os modais CAN, COULD, MUST, HAVE TO e SHOULD em situações cotidianas. Além disso, o aluno deverá compreender instruções simples sem precisar traduzir cada palavra isoladamente. A compreensão deverá considerar o contexto e a intenção da mensagem. Por exemplo, ao ouvir PLEASE OPEN YOUR BOOKS, o aluno deverá entender que precisa abrir os livros, mesmo que não conheça todos os detalhes gramaticais da frase.",
      examples: [
        {
          en: "Next weekend, I am going to visit my cousins. We are going to play games and watch a movie. I might stay there for two days. I will call my parents when I arrive. Before traveling, I have to finish my homework. I should prepare my bag tonight.",
          pt: "No próximo fim de semana, vou visitar meus primos. Vamos jogar e assistir a um filme. Talvez eu fique lá por dois dias. Vou ligar para meus pais quando chegar. Antes de viajar, preciso terminar minha tarefa. Deveria preparar minha mochila hoje à noite."
        },
        { en: "I am going to study tomorrow.", pt: "Vou estudar amanhã." },
        { en: "I think it will rain.", pt: "Acho que vai chover." },
        { en: "We might travel next year.", pt: "Talvez viajemos no próximo ano." },
        { en: "You should read this text.", pt: "Você deveria ler este texto." },
        { en: "You must follow the instructions.", pt: "Você deve seguir as instruções." },
        { en: "Please close the door.", pt: "Por favor, feche a porta." },
        { en: "Write your name at the top of the page.", pt: "Escreva seu nome no topo da página." },
        { en: "Choose the correct answer.", pt: "Escolha a resposta correta." }
      ],
      keyPoints: [
        "Utilize GOING TO para planos.",
        "Utilize WILL em decisões e previsões.",
        "Reconheça MAY e MIGHT como possibilidades.",
        "Revise CAN, COULD, MUST, HAVE TO e SHOULD.",
        "Compreenda instruções simples.",
        "Identifique verbos de ação em comandos.",
        "Tente compreender a mensagem pelo contexto.",
        "Fale sobre pelo menos dois planos futuros."
      ]
    },
    {
      title: "Teste 6 — Avaliação final de comunicação",
      explanation: "Esta é a etapa principal da Semana 16. O aluno deverá realizar uma avaliação integrada que simula situações básicas de comunicação em inglês. A avaliação será dividida em quatro partes: compreensão de leitura, interpretação de perguntas e respostas, produção escrita e comunicação em um diálogo. Primeiro, o aluno deverá ler um texto novo e responder perguntas sobre ele sem depender da tradução palavra por palavra. Depois, deverá responder perguntas pessoais e formular perguntas próprias. Em seguida, escreverá um pequeno texto reunindo rotina, gostos, acontecimentos passados e planos futuros. Finalmente, deverá participar de um diálogo simulado no qual precisará reagir a perguntas e situações inesperadas. O objetivo é verificar se consegue se comunicar de maneira básica e funcional, mesmo cometendo alguns erros. A avaliação não exige fluência, sotaque perfeito ou domínio de todas as estruturas.",
      examples: [
        {
          en: "My name is Lucas, and I live in a small town. I study in the morning and usually do my homework in the afternoon. I enjoy playing basketball and reading books. Last Saturday, I visited my uncle. We watched a movie and cooked dinner together. Next weekend, I am going to visit my friends. We might play basketball if the weather is good. I think learning English is important because it helps me understand people from different countries.",
          pt: "Meu nome é Lucas e moro em uma cidade pequena. Estudo de manhã e geralmente faço minha tarefa à tarde. Gosto de jogar basquete e ler livros. No último sábado, visitei meu tio. Assistimos a um filme e preparamos o jantar juntos. No próximo fim de semana, vou visitar meus amigos. Talvez joguemos basquete se o tempo estiver bom. Acho que aprender inglês é importante porque me ajuda a compreender pessoas de diferentes países."
        },
        { en: "Where does Lucas live?", pt: "Onde Lucas mora?" },
        { en: "When does he study?", pt: "Quando ele estuda?" },
        { en: "What does he enjoy doing?", pt: "O que ele gosta de fazer?" },
        { en: "What did he do last Saturday?", pt: "O que ele fez no último sábado?" },
        { en: "What is he going to do next weekend?", pt: "O que ele vai fazer no próximo fim de semana?" },
        { en: "Why does he think English is important?", pt: "Por que ele acha que inglês é importante?" },
        { en: "Do you think learning English is useful? Why?", pt: "Você acha que aprender inglês é útil? Por quê?" }
      ],
      keyPoints: [
        "Leia um texto novo e identifique suas informações principais.",
        "Responda perguntas de compreensão sem traduzir cada palavra.",
        "Faça perguntas próprias durante um diálogo.",
        "Escreva um texto sobre você com rotina, gostos, passado e futuro.",
        "Utilize diferentes tempos verbais de maneira coerente.",
        "Demonstre compreensão de instruções básicas.",
        "Consiga manter uma conversa simples.",
        "Erros pequenos são aceitáveis quando a mensagem continua compreensível.",
        "A avaliação deve medir comunicação, não memorização."
      ]
    }
  ]
},


// ======================================================
// SEMANA 17 — CONECTORES BÁSICOS DE IDEIAS
// ======================================================

{
  title: "Connecting Ideas — Conectores Básicos",
  goal: "Aprender a conectar palavras, frases e ideias utilizando AND, BUT, BECAUSE, SO, OR e ALTHOUGH, desenvolvendo parágrafos mais naturais e evitando a construção de frases curtas e isoladas.",
  days: [
    {
      title: "AND e BUT — Adicionando e contrastando ideias",
      explanation: "Conectores são palavras que ajudam a estabelecer relações entre ideias. AND significa e, sendo utilizado para adicionar informações relacionadas. BUT significa mas, sendo utilizado para apresentar contraste ou uma ideia diferente da anterior. Em vez de produzir várias frases isoladas, podemos conectar informações que pertencem ao mesmo assunto. Por exemplo, I STUDY ENGLISH AND I STUDY JAPANESE apresenta duas atividades relacionadas. Já I LIKE ENGLISH, BUT IT IS DIFFICULT apresenta uma preferência seguida de um contraste. É importante perceber que o conector deve representar a relação lógica entre as informações, e não ser colocado aleatoriamente. AND e BUT podem conectar palavras, expressões e orações.",
      examples: [
        { en: "I like English and Japanese.", pt: "Gosto de inglês e japonês." },
        { en: "She studies and works.", pt: "Ela estuda e trabalha." },
        { en: "I want to travel, but I don't have enough money.", pt: "Quero viajar, mas não tenho dinheiro suficiente." },
        { en: "He is tired, but he wants to continue.", pt: "Ele está cansado, mas quer continuar." },
        { en: "My brother likes soccer, and I like basketball.", pt: "Meu irmão gosta de futebol, e eu gosto de basquete." },
        { en: "The movie is long, but it is interesting.", pt: "O filme é longo, mas é interessante." },
        { en: "I study every day and practice speaking.", pt: "Estudo todos os dias e pratico conversação." }
      ],
      keyPoints: [
        "AND adiciona informações.",
        "BUT apresenta contraste.",
        "AND significa e.",
        "BUT significa mas.",
        "Utilize AND para conectar atividades ou características relacionadas.",
        "Utilize BUT quando a segunda ideia apresentar contraste.",
        "Os conectores podem unir orações completas.",
        "Não utilize conectores sem compreender a relação entre as ideias."
      ]
    },
    {
      title: "BECAUSE — Explicando motivos",
      explanation: "BECAUSE significa porque e é utilizado para explicar a razão de alguma coisa. Ele introduz uma oração que apresenta o motivo de uma afirmação ou situação. Compare I STUDY ENGLISH com I STUDY ENGLISH BECAUSE I WANT TO TRAVEL. A segunda frase explica por que a pessoa estuda inglês. BECAUSE pode aparecer no meio de uma frase ou no início de uma explicação. Quando aparece no início, é comum separar a oração explicativa da oração principal com uma vírgula. Também precisamos diferenciar BECAUSE de BECAUSE OF: BECAUSE normalmente introduz uma oração com sujeito e verbo, enquanto BECAUSE OF é seguido por um substantivo ou expressão nominal.",
      examples: [
        { en: "I study English because I want to travel.", pt: "Estudo inglês porque quero viajar." },
        { en: "She is happy because she passed the exam.", pt: "Ela está feliz porque passou na prova." },
        { en: "I stayed home because it was raining.", pt: "Fiquei em casa porque estava chovendo." },
        { en: "Because I was tired, I went to bed early.", pt: "Como eu estava cansado, fui dormir cedo." },
        { en: "We practice every day because we want to improve.", pt: "Praticamos todos os dias porque queremos melhorar." },
        { en: "The game was canceled because of the rain.", pt: "O jogo foi cancelado por causa da chuva." },
        { en: "Why are you learning English? Because I want to communicate better.", pt: "Por que você está aprendendo inglês? Porque quero me comunicar melhor." }
      ],
      keyPoints: [
        "BECAUSE apresenta uma razão ou explicação.",
        "BECAUSE significa porque.",
        "BECAUSE pode conectar duas orações.",
        "Uma oração com BECAUSE normalmente apresenta sujeito e verbo.",
        "BECAUSE OF é seguido por um substantivo ou expressão nominal.",
        "Utilize BECAUSE para explicar suas escolhas e opiniões.",
        "Responda perguntas com WHY utilizando BECAUSE."
      ]
    },
    {
      title: "SO — Consequências e resultados",
      explanation: "SO pode significar então ou por isso quando é utilizado para apresentar uma consequência. Ele conecta uma situação a um resultado produzido por ela. BECAUSE e SO podem apresentar relações semelhantes, mas observadas por perspectivas diferentes. Em I STAYED HOME BECAUSE IT WAS RAINING, apresentamos primeiro a decisão e depois seu motivo. Em IT WAS RAINING, SO I STAYED HOME, apresentamos primeiro a situação e depois sua consequência. Essa diferença ajuda a construir explicações mais organizadas. SO também possui outros usos em inglês, como intensificador em SO INTERESTING, mas nesta aula vamos concentrar nosso estudo no sentido de consequência.",
      examples: [
        { en: "It was raining, so we stayed home.", pt: "Estava chovendo, então ficamos em casa." },
        { en: "I was tired, so I went to bed.", pt: "Eu estava cansado, então fui dormir." },
        { en: "She studied hard, so she passed the exam.", pt: "Ela estudou bastante, então passou na prova." },
        { en: "The store was closed, so we went home.", pt: "A loja estava fechada, então fomos para casa." },
        { en: "I don't have a car, so I take the bus.", pt: "Não tenho carro, então pego o ônibus." },
        { en: "He forgot his umbrella, so he got wet.", pt: "Ele esqueceu o guarda-chuva, então se molhou." },
        { en: "The instructions were confusing, so I asked for help.", pt: "As instruções estavam confusas, então pedi ajuda." }
      ],
      keyPoints: [
        "SO pode apresentar consequência ou resultado.",
        "SO significa então ou por isso nesse contexto.",
        "BECAUSE apresenta uma razão.",
        "SO apresenta o resultado dessa razão.",
        "IT WAS LATE, SO I WENT HOME apresenta uma consequência.",
        "BECAUSE e SO podem expressar a mesma relação lógica por perspectivas diferentes.",
        "SO também pode funcionar como intensificador em outros contextos."
      ]
    },
    {
      title: "OR e ALTHOUGH — Alternativas e concessões",
      explanation: "OR significa ou e é utilizado para apresentar alternativas, escolhas ou possibilidades. ALTHOUGH significa embora ou apesar de que e introduz uma ideia que contrasta com a expectativa criada pela outra parte da frase. Por exemplo, DO YOU WANT TEA OR COFFEE? apresenta duas opções. Já ALTHOUGH IT WAS RAINING, WE WENT OUT apresenta uma situação que normalmente poderia impedir uma atividade, mas não impediu. ALTHOUGH não deve ser utilizado junto com BUT para conectar exatamente as mesmas duas orações na estrutura padrão, porque ambos já estabelecem o contraste. Também podemos colocar a oração com ALTHOUGH no final da frase, dependendo da construção.",
      examples: [
        { en: "Do you want tea or coffee?", pt: "Você quer chá ou café?" },
        { en: "We can study now or tomorrow.", pt: "Podemos estudar agora ou amanhã." },
        { en: "Would you like to walk or take the bus?", pt: "Você gostaria de caminhar ou pegar o ônibus?" },
        { en: "Although it was raining, we played soccer.", pt: "Embora estivesse chovendo, jogamos futebol." },
        { en: "Although she was tired, she finished her work.", pt: "Embora estivesse cansada, ela terminou seu trabalho." },
        { en: "I enjoyed the trip although it was expensive.", pt: "Gostei da viagem, embora tenha sido cara." },
        { en: "Although English is difficult, I enjoy studying it.", pt: "Embora o inglês seja difícil, gosto de estudá-lo." }
      ],
      keyPoints: [
        "OR apresenta alternativas e escolhas.",
        "OR significa ou.",
        "ALTHOUGH apresenta contraste ou concessão.",
        "ALTHOUGH pode significar embora.",
        "A oração com ALTHOUGH pode aparecer no início ou no final.",
        "Não utilize BUT para repetir o mesmo contraste já introduzido por ALTHOUGH na mesma construção.",
        "Escolha o conector de acordo com a relação entre as ideias."
      ]
    },
    {
      title: "Construindo parágrafos com conectores",
      explanation: "Agora vamos utilizar os seis conectores para transformar frases isoladas em parágrafos organizados. Um parágrafo pode começar apresentando um assunto, adicionar informações, explicar motivos e apresentar consequências ou contrastes. Em vez de escrever I LIKE SPORTS. I PLAY SOCCER. I AM TIRED. I CONTINUE, podemos construir uma sequência mais natural: I LIKE SPORTS, AND I PLAY SOCCER EVERY WEEK. SOMETIMES I AM TIRED, BUT I CONTINUE BECAUSE I ENJOY IT. É importante lembrar que um texto coeso não precisa colocar um conector em todas as frases. Os conectores devem ser utilizados quando realmente ajudam a estabelecer uma relação entre as ideias.",
      examples: [
        {
          en: "I enjoy learning languages because they help me communicate with people from different countries. I study English and Japanese, but I sometimes find grammar difficult. When I have free time, I practice reading or listening to conversations. I want to improve, so I try to study regularly. Although learning a language takes time, I enjoy the process.",
          pt: "Gosto de aprender idiomas porque eles me ajudam a me comunicar com pessoas de diferentes países. Estudo inglês e japonês, mas às vezes acho a gramática difícil. Quando tenho tempo livre, pratico leitura ou escuto conversas. Quero melhorar, então tento estudar regularmente. Embora aprender um idioma leve tempo, gosto do processo."
        },
        { en: "I like technology and I enjoy creating projects.", pt: "Gosto de tecnologia e gosto de criar projetos." },
        { en: "I want to improve because I want to learn more.", pt: "Quero melhorar porque quero aprender mais." },
        { en: "I was busy, so I studied at night.", pt: "Eu estava ocupado, então estudei à noite." },
        { en: "Although the task was difficult, I finished it.", pt: "Embora a tarefa fosse difícil, terminei." }
      ],
      keyPoints: [
        "Um parágrafo desenvolve um assunto central.",
        "AND adiciona informações.",
        "BUT e ALTHOUGH apresentam contraste.",
        "BECAUSE explica motivos.",
        "SO apresenta consequências.",
        "OR apresenta alternativas.",
        "Não coloque conectores aleatoriamente.",
        "Organize as ideias em uma sequência lógica.",
        "Nem toda frase precisa de um conector."
      ]
    },
    {
      title: "Desafio — Meu primeiro parágrafo conectado",
      explanation: "Nesta última aula, o aluno deverá escrever um parágrafo completo sobre um assunto de sua escolha, como estudos, tecnologia, esportes, viagens, família ou hobbies. O texto deverá apresentar uma ideia principal e desenvolver essa ideia com informações adicionais, motivos, consequências e pelo menos um contraste ou alternativa. É obrigatório utilizar AND, BUT, BECAUSE, SO, OR e ALTHOUGH de maneira coerente. Depois da escrita, o aluno deverá ler o parágrafo em voz alta e verificar se as ideias formam uma sequência natural. O objetivo é abandonar a dependência de frases isoladas e começar a organizar pensamentos em inglês.",
      examples: [
        {
          en: "I enjoy playing sports because they help me stay active and have fun. I usually play soccer with my friends, but sometimes we play basketball or volleyball. I want to improve my skills, so I practice whenever I have time. Although I am not an expert, I enjoy learning new techniques. I think sports are important because they teach teamwork and discipline.",
          pt: "Gosto de praticar esportes porque eles me ajudam a me manter ativo e me divertir. Geralmente jogo futebol com meus amigos, mas às vezes jogamos basquete ou vôlei. Quero melhorar minhas habilidades, então pratico sempre que tenho tempo. Embora eu não seja especialista, gosto de aprender novas técnicas. Acho que os esportes são importantes porque ensinam trabalho em equipe e disciplina."
        },
        { en: "What do you enjoy doing and why?", pt: "O que você gosta de fazer e por quê?" },
        { en: "What is difficult, but interesting to you?", pt: "O que é difícil, mas interessante para você?" },
        { en: "What would you like to learn or improve?", pt: "O que você gostaria de aprender ou melhorar?" }
      ],
      keyPoints: [
        "Escreva um parágrafo sobre um assunto escolhido.",
        "Utilize os seis conectores estudados.",
        "Apresente uma ideia principal.",
        "Adicione informações e explicações.",
        "Apresente pelo menos uma consequência.",
        "Utilize contraste e alternativas.",
        "Revise se cada conector faz sentido.",
        "Leia o texto em voz alta.",
        "Priorize a organização e a naturalidade."
      ]
    }
  ]
},

// ======================================================
// SEMANA 18 — PHRASAL VERBS ESSENCIAIS (PARTE 1)
// ======================================================

{
  title: "Essential Phrasal Verbs — Part 1",
  goal: "Compreender e utilizar phrasal verbs frequentes do cotidiano, reconhecendo como a combinação entre um verbo e uma partícula pode produzir um significado diferente do verbo original.",
  days: [
    {
      title: "O que são Phrasal Verbs?",
      explanation: "Phrasal verbs são combinações formadas por um verbo e uma ou mais partículas, normalmente uma preposição ou um advérbio. Juntas, essas palavras podem formar uma expressão com significado próprio. Por exemplo, LOOK significa olhar, mas LOOK FOR significa procurar. TURN significa virar ou girar, mas TURN ON pode significar ligar um aparelho. Por isso, não podemos interpretar todos os phrasal verbs traduzindo cada palavra separadamente. É necessário aprender o significado da expressão dentro de um contexto. Muitos phrasal verbs são extremamente comuns na comunicação cotidiana e aparecem em conversas, vídeos, instruções e textos. Nesta semana, vamos estudar expressões relacionadas à rotina e a situações práticas.",
      examples: [
        { en: "I wake up at seven.", pt: "Eu acordo às sete." },
        { en: "Please turn on the light.", pt: "Por favor, acenda a luz." },
        { en: "I am looking for my keys.", pt: "Estou procurando minhas chaves." },
        { en: "She found out the truth.", pt: "Ela descobriu a verdade." },
        { en: "Don't give up.", pt: "Não desista." },
        { en: "He gets up early.", pt: "Ele se levanta cedo." }
      ],
      keyPoints: [
        "Phrasal verbs combinam verbo e partícula.",
        "A combinação pode criar um significado diferente.",
        "LOOK FOR significa procurar.",
        "TURN ON significa ligar ou acender.",
        "Aprenda a expressão completa, não apenas cada palavra isolada.",
        "Observe o contexto para compreender o significado.",
        "Phrasal verbs aparecem frequentemente na comunicação cotidiana."
      ]
    },
    {
      title: "WAKE UP e GET UP — Acordar e levantar",
      explanation: "WAKE UP significa acordar, ou seja, deixar de estar dormindo. GET UP significa levantar-se, sair da cama ou ficar de pé, dependendo do contexto. Embora estejam relacionados, não são exatamente a mesma coisa. Uma pessoa pode WAKE UP às seis horas, mas só GET UP às seis e quinze. Essa diferença aparece bastante quando falamos sobre horários e rotina. Os dois phrasal verbs são muito comuns e normalmente podem aparecer separados de seus complementos de tempo, como IN THE MORNING, AT SIX O'CLOCK e EARLY. Também podemos utilizá-los no passado: WAKE UP vira WOKE UP, enquanto GET UP vira GOT UP.",
      examples: [
        { en: "I wake up at six every morning.", pt: "Acordo às seis todas as manhãs." },
        { en: "She gets up early.", pt: "Ela se levanta cedo." },
        { en: "I woke up late yesterday.", pt: "Acordei tarde ontem." },
        { en: "He got up at seven.", pt: "Ele se levantou às sete." },
        { en: "What time do you usually wake up?", pt: "Que horas você geralmente acorda?" },
        { en: "I wake up early, but I don't get up immediately.", pt: "Acordo cedo, mas não me levanto imediatamente." },
        { en: "Please wake me up at eight.", pt: "Por favor, me acorde às oito." }
      ],
      keyPoints: [
        "WAKE UP = acordar.",
        "GET UP = levantar-se.",
        "WAKE UP e GET UP possuem significados diferentes.",
        "WOKE UP é o passado de WAKE UP.",
        "GOT UP é o passado de GET UP.",
        "Pergunte horários utilizando WHAT TIME.",
        "WAKE SOMEONE UP significa acordar alguém."
      ]
    },
    {
      title: "TURN ON e TURN OFF — Ligar e desligar",
      explanation: "TURN ON significa ligar um aparelho, dispositivo ou equipamento. TURN OFF significa desligar. Essas expressões são muito utilizadas em casa, na escola e em ambientes de trabalho. Podemos utilizá-las com luzes, computadores, televisões, celulares e outros equipamentos. Uma característica importante é que TURN ON e TURN OFF são phrasal verbs separáveis quando possuem objeto direto. Isso significa que podemos dizer TURN ON THE COMPUTER ou TURN THE COMPUTER ON. Quando utilizamos um pronome, como IT ou THEM, ele precisa ficar entre o verbo e a partícula: TURN IT ON. Não dizemos TURN ON IT nessa construção. Essa posição é importante para utilizar a expressão corretamente.",
      examples: [
        { en: "Please turn on the computer.", pt: "Por favor, ligue o computador." },
        { en: "Turn off the television.", pt: "Desligue a televisão." },
        { en: "Can you turn on the lights?", pt: "Você pode acender as luzes?" },
        { en: "Please turn it off.", pt: "Por favor, desligue isso." },
        { en: "I turn on my computer every morning.", pt: "Ligo meu computador todas as manhãs." },
        { en: "Don't forget to turn off the lights.", pt: "Não se esqueça de apagar as luzes." },
        { en: "She turned the radio on.", pt: "Ela ligou o rádio." },
        { en: "He turned off his phone.", pt: "Ele desligou o celular." }
      ],
      keyPoints: [
        "TURN ON = ligar ou acender.",
        "TURN OFF = desligar ou apagar.",
        "São utilizados com aparelhos e equipamentos.",
        "Podem ser separados pelo objeto.",
        "Com pronomes, utilize TURN IT ON e TURN IT OFF.",
        "Não utilize TURN ON IT nessa construção.",
        "TURNED ON e TURNED OFF são formas de passado."
      ]
    },
    {
      title: "LOOK FOR — Procurando alguma coisa",
      explanation: "LOOK FOR significa procurar algo ou alguém. Essa expressão é utilizada quando estamos tentando encontrar alguma coisa que não sabemos exatamente onde está. Não devemos confundir LOOK FOR com LOOK AT. LOOK AT significa olhar para alguma coisa, enquanto LOOK FOR significa procurar. Por exemplo, I AM LOOKING AT MY PHONE indica que estou olhando para meu celular. Já I AM LOOKING FOR MY PHONE indica que estou procurando meu celular. LOOK FOR pode ser utilizado com objetos, pessoas, informações e oportunidades. É um phrasal verb muito útil em situações cotidianas.",
      examples: [
        { en: "I am looking for my keys.", pt: "Estou procurando minhas chaves." },
        { en: "She is looking for a new job.", pt: "Ela está procurando um novo emprego." },
        { en: "We are looking for a good restaurant.", pt: "Estamos procurando um bom restaurante." },
        { en: "What are you looking for?", pt: "O que você está procurando?" },
        { en: "He looked for his phone everywhere.", pt: "Ele procurou seu celular em todos os lugares." },
        { en: "I am looking for information about Japan.", pt: "Estou procurando informações sobre o Japão." },
        { en: "They are looking for a place to stay.", pt: "Eles estão procurando um lugar para ficar." }
      ],
      keyPoints: [
        "LOOK FOR = procurar.",
        "LOOK AT = olhar para.",
        "LOOK FOR indica uma busca.",
        "Pode ser utilizado com pessoas, objetos e informações.",
        "LOOKED FOR é a forma de passado.",
        "WHAT ARE YOU LOOKING FOR? pergunta o que alguém procura.",
        "Não confunda procurar com simplesmente olhar."
      ]
    },
    {
      title: "FIND OUT — Descobrir e descobrir informações",
      explanation: "FIND OUT significa descobrir uma informação, descobrir como alguma coisa funciona ou descobrir o que aconteceu. É diferente de FIND, que normalmente significa encontrar. Podemos encontrar um objeto utilizando FIND, mas descobrir a resposta de uma pergunta utilizando FIND OUT. Por exemplo, I FOUND MY PHONE significa encontrei meu celular. Já I FOUND OUT THE ANSWER significa descobri a resposta. FIND OUT é muito utilizado em conversas sobre pesquisas, notícias, investigações, estudos e situações nas quais alguém aprende uma informação que antes não conhecia. Sua forma no passado é FOUND OUT.",
      examples: [
        { en: "I want to find out the answer.", pt: "Quero descobrir a resposta." },
        { en: "She found out the truth.", pt: "Ela descobriu a verdade." },
        { en: "We need to find out what happened.", pt: "Precisamos descobrir o que aconteceu." },
        { en: "Did you find out his name?", pt: "Você descobriu o nome dele?" },
        { en: "I found out that the store was closed.", pt: "Descobri que a loja estava fechada." },
        { en: "Let's find out how this machine works.", pt: "Vamos descobrir como esta máquina funciona." },
        { en: "He found out about the meeting yesterday.", pt: "Ele ficou sabendo da reunião ontem." }
      ],
      keyPoints: [
        "FIND OUT = descobrir uma informação.",
        "FIND = encontrar.",
        "FIND OUT e FIND não são sempre intercambiáveis.",
        "FOUND é o passado de FIND.",
        "FOUND OUT é o passado de FIND OUT.",
        "Utilize FIND OUT para descobertas e informações.",
        "A expressão também aparece em perguntas e pesquisas."
      ]
    },
    {
      title: "GIVE UP — Desistir e continuar tentando",
      explanation: "GIVE UP significa desistir, abandonar uma tentativa ou parar de fazer alguma coisa. É muito utilizado quando falamos sobre dificuldades, desafios, objetivos e atividades que exigem persistência. Podemos dizer DON'T GIVE UP para incentivar alguém a continuar tentando. Também podemos utilizar GIVE UP ON SOMETHING ou GIVE UP ON SOMEONE, dependendo do contexto. Quando GIVE UP é seguido por um verbo, normalmente utilizamos a forma terminada em ING: GIVE UP TRYING, GIVE UP LEARNING ou GIVE UP PLAYING. Essa construção é importante porque não utilizamos GIVE UP TO TRY nessa estrutura. O passado de GIVE é GAVE, portanto o passado de GIVE UP é GAVE UP.",
      examples: [
        { en: "Don't give up.", pt: "Não desista." },
        { en: "I won't give up on my goals.", pt: "Não vou desistir dos meus objetivos." },
        { en: "She gave up after many attempts.", pt: "Ela desistiu depois de muitas tentativas." },
        { en: "He gave up playing the game.", pt: "Ele desistiu de jogar o jogo." },
        { en: "Don't give up learning English.", pt: "Não desista de aprender inglês." },
        { en: "They never give up.", pt: "Eles nunca desistem." },
        { en: "I don't want to give up.", pt: "Não quero desistir." }
      ],
      keyPoints: [
        "GIVE UP = desistir.",
        "DON'T GIVE UP = não desista.",
        "GAVE UP é a forma de passado.",
        "GIVE UP ON pode indicar desistência em relação a alguém ou algo.",
        "GIVE UP + verbo utiliza normalmente ING.",
        "GIVE UP LEARNING = desistir de aprender.",
        "A expressão é frequente em conversas sobre desafios e objetivos."
      ]
    }
  ]
},

// ======================================================
// SEMANA 19 — PHRASAL VERBS ESSENCIAIS (PARTE 2)
// ======================================================

{
  title: "Essential Phrasal Verbs — Part 2",
  goal: "Ampliar o domínio dos phrasal verbs utilizados em interações sociais, atividades cotidianas, organização, trabalho e resolução de problemas, aprendendo expressões naturais e suas estruturas gramaticais.",
  days: [
    {
      title: "HANG OUT — Passar tempo com outras pessoas",
      explanation: "HANG OUT significa passar tempo com alguém de maneira descontraída, geralmente para conversar, se divertir ou realizar atividades sem uma obrigação específica. É muito comum em conversas informais entre amigos. Podemos dizer HANG OUT WITH MY FRIENDS para indicar que vamos passar tempo com nossos amigos. A expressão pode ser utilizada no presente, no passado e em planos futuros. Seu passado é HUNG OUT. Também podemos utilizar WHERE DO YOU HANG OUT? para perguntar onde alguém costuma passar seu tempo livre. HANG OUT não significa necessariamente participar de uma festa: pode ser simplesmente conversar, jogar, caminhar ou ficar junto de outras pessoas.",
      examples: [
        { en: "I like to hang out with my friends.", pt: "Gosto de passar tempo com meus amigos." },
        { en: "We usually hang out after school.", pt: "Geralmente passamos tempo juntos depois da escola." },
        { en: "Do you want to hang out this weekend?", pt: "Você quer passar um tempo comigo neste fim de semana?" },
        { en: "They hung out at the park yesterday.", pt: "Eles passaram um tempo juntos no parque ontem." },
        { en: "Where do you usually hang out?", pt: "Onde você costuma passar seu tempo livre?" },
        { en: "I am hanging out with my cousins today.", pt: "Estou passando um tempo com meus primos hoje." },
        { en: "We hung out and watched a movie.", pt: "Passamos um tempo juntos e assistimos a um filme." }
      ],
      keyPoints: [
        "HANG OUT = passar tempo de maneira descontraída.",
        "HANG OUT WITH = passar tempo com alguém.",
        "HUNG OUT é o passado.",
        "É uma expressão informal e comum.",
        "Pode envolver conversas, jogos, passeios e outras atividades.",
        "DO YOU WANT TO HANG OUT? é um convite.",
        "Não confunda HANG OUT com uma obrigação ou compromisso formal."
      ]
    },
    {
      title: "CATCH UP — Colocar o papo em dia",
      explanation: "CATCH UP possui vários significados, mas nesta aula vamos concentrar nosso estudo em dois usos frequentes. O primeiro é colocar o papo em dia com alguém, conversando sobre acontecimentos e novidades que ocorreram desde a última vez que se encontraram. Nesse sentido, utilizamos CATCH UP WITH SOMEONE. O segundo é recuperar algo que ficou atrasado, como atividades, estudos ou tarefas. Podemos dizer CATCH UP ON MY HOMEWORK para indicar que vou colocar minhas tarefas em dia. O passado de CATCH é CAUGHT, portanto o passado de CATCH UP é CAUGHT UP. O contexto ajuda a identificar qual dos sentidos está sendo utilizado.",
      examples: [
        { en: "Let's catch up sometime.", pt: "Vamos colocar o papo em dia qualquer dia." },
        { en: "I want to catch up with my friends.", pt: "Quero colocar o papo em dia com meus amigos." },
        { en: "We caught up over lunch.", pt: "Colocamos o papo em dia durante o almoço." },
        { en: "I need to catch up on my homework.", pt: "Preciso colocar minhas tarefas em dia." },
        { en: "She is trying to catch up with the class.", pt: "Ela está tentando acompanhar o ritmo da turma." },
        { en: "I haven't seen him in months. We have a lot to catch up on.", pt: "Não o vejo há meses. Temos muitas novidades para colocar em dia." },
        { en: "He stayed home to catch up on his studies.", pt: "Ele ficou em casa para colocar os estudos em dia." }
      ],
      keyPoints: [
        "CATCH UP WITH SOMEONE = colocar o papo em dia com alguém.",
        "CATCH UP ON SOMETHING = recuperar algo atrasado.",
        "CAUGHT UP é o passado.",
        "CATCH UP pode aparecer em contextos sociais e acadêmicos.",
        "LET'S CATCH UP é um convite informal.",
        "O contexto determina o significado.",
        "Não traduza a expressão palavra por palavra."
      ]
    },
    {
      title: "RUN OUT OF — Ficar sem alguma coisa",
      explanation: "RUN OUT OF significa ficar sem alguma coisa porque a quantidade disponível acabou. É utilizado com alimentos, dinheiro, tempo, materiais, combustível e outros recursos. Por exemplo, WE RAN OUT OF MILK significa que ficamos sem leite. A expressão não indica simplesmente correr para fora de algum lugar: quando aparece com OF e um recurso, normalmente apresenta a ideia de esgotamento. O passado de RUN é RAN, portanto utilizamos RAN OUT OF para falar de situações que já aconteceram. Também podemos utilizar BE RUNNING OUT OF para indicar que algo está acabando naquele momento.",
      examples: [
        { en: "We ran out of milk.", pt: "Ficamos sem leite." },
        { en: "I am running out of time.", pt: "Estou ficando sem tempo." },
        { en: "They ran out of food.", pt: "Eles ficaram sem comida." },
        { en: "My phone ran out of battery.", pt: "Meu celular ficou sem bateria." },
        { en: "We are running out of paper.", pt: "Estamos ficando sem papel." },
        { en: "Don't run out of patience.", pt: "Não perca a paciência." },
        { en: "The store ran out of notebooks.", pt: "A loja ficou sem cadernos." }
      ],
      keyPoints: [
        "RUN OUT OF = ficar sem algo.",
        "RAN OUT OF é o passado.",
        "BE RUNNING OUT OF indica que algo está acabando.",
        "Pode ser utilizado com tempo, dinheiro, alimentos e materiais.",
        "A expressão indica que um recurso está se esgotando.",
        "O contexto determina o recurso que acabou.",
        "RUN OUT OF TIME é uma expressão muito comum."
      ]
    },
    {
      title: "FIGURE OUT — Descobrir como resolver",
      explanation: "FIGURE OUT significa descobrir, compreender ou encontrar uma maneira de resolver alguma coisa. É bastante utilizado quando alguém precisa pensar, analisar informações ou testar possibilidades para entender uma situação. Enquanto FIND OUT frequentemente destaca a descoberta de uma informação, FIGURE OUT costuma enfatizar o processo de raciocínio necessário para compreender ou solucionar algo. Por exemplo, I FOUND OUT THE ANSWER indica que descobri a resposta. Já I FIGURED OUT HOW TO SOLVE THE PROBLEM indica que consegui compreender como resolver o problema. FIGURE OUT também é separável quando possui objeto direto: podemos dizer FIGURE OUT THE PROBLEM ou FIGURE THE PROBLEM OUT. Com pronomes, utilizamos FIGURE IT OUT.",
      examples: [
        { en: "I need to figure out this problem.", pt: "Preciso descobrir como resolver este problema." },
        { en: "She figured out the answer.", pt: "Ela descobriu a resposta." },
        { en: "Can you figure it out?", pt: "Você consegue descobrir como resolver isso?" },
        { en: "We are trying to figure out what happened.", pt: "Estamos tentando descobrir o que aconteceu." },
        { en: "He figured out how the machine works.", pt: "Ele descobriu como a máquina funciona." },
        { en: "I can't figure out this exercise.", pt: "Não consigo entender este exercício." },
        { en: "Don't worry. We will figure it out.", pt: "Não se preocupe. Vamos encontrar uma solução." }
      ],
      keyPoints: [
        "FIGURE OUT = compreender, descobrir ou solucionar.",
        "Destaca frequentemente o raciocínio envolvido.",
        "FIGURED OUT é o passado.",
        "Pode ser separável quando possui objeto direto.",
        "Com pronome, utilize FIGURE IT OUT.",
        "FIND OUT e FIGURE OUT possuem sentidos relacionados, mas não idênticos.",
        "DON'T WORRY, WE'LL FIGURE IT OUT é uma expressão natural."
      ]
    },
    {
      title: "DROP OFF — Deixar alguém ou alguma coisa",
      explanation: "DROP OFF pode significar deixar alguém em determinado lugar, geralmente utilizando um veículo, ou entregar alguma coisa em um destino. Por exemplo, I WILL DROP YOU OFF AT SCHOOL significa que vou deixar você na escola. Também podemos utilizar DROP OFF para entregar um pacote, uma encomenda ou algum objeto. Quando falamos de pessoas ou objetos como complemento direto, a expressão pode ser separada: DROP OFF THE PACKAGE ou DROP THE PACKAGE OFF. Com pronomes, utilizamos DROP IT OFF ou DROP THEM OFF. Seu passado é DROPPED OFF. É importante observar que DROP OFF também pode significar diminuir ou cair em determinados contextos, mas vamos priorizar nesta aula os sentidos de transporte e entrega.",
      examples: [
        { en: "My father drops me off at school.", pt: "Meu pai me deixa na escola." },
        { en: "Can you drop me off at the station?", pt: "Você pode me deixar na estação?" },
        { en: "I need to drop off this package.", pt: "Preciso entregar este pacote." },
        { en: "She dropped off her brother at school.", pt: "Ela deixou o irmão na escola." },
        { en: "Please drop it off at the office.", pt: "Por favor, deixe isso no escritório." },
        { en: "We dropped off the documents yesterday.", pt: "Entregamos os documentos ontem." },
        { en: "He will drop the package off tomorrow.", pt: "Ele vai entregar o pacote amanhã." }
      ],
      keyPoints: [
        "DROP OFF pode significar deixar alguém em um lugar.",
        "DROP OFF também pode significar entregar algo.",
        "DROPPED OFF é o passado.",
        "Pode ser separado pelo objeto.",
        "Com pronomes, utilize DROP ME OFF, DROP IT OFF ou DROP THEM OFF.",
        "O contexto indica se a expressão envolve transporte ou entrega.",
        "Também existem outros sentidos de DROP OFF em contextos diferentes."
      ]
    },
    {
      title: "Diálogos sociais e situações práticas",
      explanation: "Nesta última aula, vamos integrar os phrasal verbs estudados em diálogos naturais. O objetivo é compreender as expressões pelo contexto e utilizá-las sem precisar traduzir cada palavra separadamente. Vamos trabalhar situações como combinar um encontro com amigos, recuperar tarefas atrasadas, procurar objetos, resolver problemas e entregar alguma coisa. Também vamos revisar as formas no passado e a posição dos pronomes em phrasal verbs separáveis. Ao final, o aluno deverá construir um diálogo próprio utilizando pelo menos cinco expressões desta semana e da semana anterior.",
      examples: [
        {
          en: "A: Hey! Do you want to hang out this weekend? B: Sure! We haven't seen each other in a long time. We have a lot to catch up on. A: Great! I can drop you off at home afterward. B: Thanks! I also need to catch up on my homework before Sunday. A: No problem. We can study together first.",
          pt: "A: Ei! Quer passar um tempo comigo neste fim de semana? B: Claro! Faz muito tempo que não nos vemos. Temos muitas novidades para colocar em dia. A: Ótimo! Posso deixar você em casa depois. B: Obrigado! Também preciso colocar minhas tarefas em dia antes de domingo. A: Sem problemas. Podemos estudar juntos primeiro."
        },
        {
          en: "A: What happened to the printer? B: We ran out of paper. A: Can you figure out how to fix it? B: I think so. First, we need to turn it off and check the paper tray. A: Great. Let me know when you find out what the problem is.",
          pt: "A: O que aconteceu com a impressora? B: Ficamos sem papel. A: Você consegue descobrir como consertá-la? B: Acho que sim. Primeiro, precisamos desligá-la e verificar a bandeja de papel. A: Ótimo. Avise quando descobrir qual é o problema."
        },
        { en: "Do you want to hang out tomorrow?", pt: "Você quer passar um tempo junto amanhã?" },
        { en: "I need to catch up on my studies.", pt: "Preciso colocar meus estudos em dia." },
        { en: "We are running out of time.", pt: "Estamos ficando sem tempo." },
        { en: "Can you figure it out?", pt: "Você consegue descobrir como resolver isso?" },
        { en: "Please drop me off here.", pt: "Por favor, me deixe aqui." }
      ],
      keyPoints: [
        "Utilize HANG OUT em convites e conversas sociais.",
        "Utilize CATCH UP para novidades e tarefas atrasadas.",
        "Utilize RUN OUT OF para recursos que acabam.",
        "Utilize FIGURE OUT para resolver situações.",
        "Utilize DROP OFF para deixar ou entregar algo.",
        "Reconheça os phrasal verbs pelo contexto.",
        "Revise as formas no passado.",
        "Construa um diálogo utilizando pelo menos cinco phrasal verbs."
      ]
    }
  ]
},

// ======================================================
// SEMANA 20 — PRESENT PERFECT
// ======================================================

{
  title: "Present Perfect — Experiências e Conexões com o Presente",
  goal: "Compreender e utilizar o Present Perfect para falar sobre experiências, acontecimentos passados relevantes no presente e situações relacionadas ao momento atual, reconhecendo a diferença entre HAVE/HAS + past participle e o Past Simple.",
  days: [
    {
      title: "O que é o Present Perfect?",
      explanation: "O Present Perfect é um tempo verbal utilizado para conectar acontecimentos passados ao presente. Sua estrutura básica é HAVE ou HAS + past participle, que é a terceira forma do verbo. Utilizamos HAVE com I, YOU, WE e THEY, e HAS com HE, SHE e IT. Uma utilização muito importante do Present Perfect é falar sobre experiências que aconteceram em algum momento da vida, sem especificar exatamente quando. Por exemplo, I HAVE VISITED JAPAN significa que já visitei o Japão em algum momento da minha vida. O foco está na experiência, e não na data específica. Não devemos traduzir o Present Perfect mecanicamente para o português, porque a tradução natural depende do contexto.",
      examples: [
        { en: "I have visited Japan.", pt: "Já visitei o Japão." },
        { en: "She has traveled to Canada.", pt: "Ela já viajou para o Canadá." },
        { en: "We have studied English for a long time.", pt: "Estudamos inglês há bastante tempo." },
        { en: "They have watched this movie.", pt: "Eles já assistiram a este filme." },
        { en: "He has learned a new language.", pt: "Ele aprendeu um novo idioma." },
        { en: "I have seen that video.", pt: "Já vi aquele vídeo." },
        { en: "My parents have visited that city.", pt: "Meus pais já visitaram aquela cidade." }
      ],
      keyPoints: [
        "Present Perfect conecta passado e presente.",
        "Estrutura: HAVE/HAS + past participle.",
        "HAVE é utilizado com I, YOU, WE e THEY.",
        "HAS é utilizado com HE, SHE e IT.",
        "O past participle é a terceira forma do verbo.",
        "Pode apresentar experiências sem especificar quando aconteceram.",
        "Não confunda Present Perfect com Past Simple."
      ]
    },
    {
      title: "Past Participle — A terceira forma dos verbos",
      explanation: "Para utilizar o Present Perfect corretamente, precisamos reconhecer o past participle. Nos verbos regulares, ele geralmente possui a mesma forma do passado simples, terminando em ED: WORK → WORKED → WORKED e PLAY → PLAYED → PLAYED. Nos verbos irregulares, a terceira forma pode ser diferente e precisa ser aprendida. Alguns exemplos são GO → WENT → GONE, SEE → SAW → SEEN, EAT → ATE → EATEN e WRITE → WROTE → WRITTEN. Também existem verbos cuja forma de passado e particípio é igual, como HAVE → HAD → HAD e MAKE → MADE → MADE. O importante é não utilizar automaticamente o passado simples depois de HAVE ou HAS: precisamos utilizar o particípio.",
      examples: [
        { en: "I have worked today.", pt: "Trabalhei hoje." },
        { en: "She has played this game.", pt: "Ela já jogou este jogo." },
        { en: "We have gone there before.", pt: "Já fomos lá antes." },
        { en: "He has seen this movie.", pt: "Ele já assistiu a este filme." },
        { en: "They have eaten sushi.", pt: "Eles já comeram sushi." },
        { en: "I have written three emails.", pt: "Escrevi três e-mails." },
        { en: "She has made a new project.", pt: "Ela fez um projeto novo." },
        { en: "We have had many opportunities.", pt: "Tivemos muitas oportunidades." }
      ],
      keyPoints: [
        "Past participle é a terceira forma do verbo.",
        "Verbos regulares normalmente terminam em ED.",
        "Verbos irregulares possuem formas próprias.",
        "GO → WENT → GONE.",
        "SEE → SAW → SEEN.",
        "EAT → ATE → EATEN.",
        "WRITE → WROTE → WRITTEN.",
        "HAVE → HAD → HAD.",
        "MAKE → MADE → MADE.",
        "Depois de HAVE/HAS, utilize o past participle."
      ]
    },
    {
      title: "EVER e NEVER — Experiências de vida",
      explanation: "EVER e NEVER são frequentemente utilizados com o Present Perfect para falar sobre experiências. EVER significa alguma vez ou já em perguntas sobre experiências. Por exemplo, HAVE YOU EVER EATEN SUSHI? pergunta se a pessoa já comeu sushi em algum momento da vida. NEVER significa nunca e é utilizado para indicar que uma experiência não aconteceu até o presente. Por exemplo, I HAVE NEVER VISITED JAPAN significa que nunca visitei o Japão. É importante não utilizar NOT junto com NEVER na mesma estrutura afirmativa negativa, pois NEVER já possui sentido negativo. Também podemos utilizar perguntas com EVER para descobrir se alguém já realizou determinada atividade.",
      examples: [
        { en: "Have you ever eaten sushi?", pt: "Você já comeu sushi alguma vez?" },
        { en: "I have never visited Japan.", pt: "Nunca visitei o Japão." },
        { en: "Has she ever traveled alone?", pt: "Ela já viajou sozinha alguma vez?" },
        { en: "We have never seen snow.", pt: "Nunca vimos neve." },
        { en: "Have they ever played this game?", pt: "Eles já jogaram este jogo alguma vez?" },
        { en: "He has never driven a car.", pt: "Ele nunca dirigiu um carro." },
        { en: "Yes, I have. I have eaten sushi before.", pt: "Sim. Já comi sushi antes." },
        { en: "No, I haven't. I have never tried it.", pt: "Não. Nunca experimentei." }
      ],
      keyPoints: [
        "EVER significa alguma vez em perguntas sobre experiências.",
        "NEVER significa nunca.",
        "HAVE YOU EVER...? pergunta sobre experiências de vida.",
        "HAVE NEVER indica que a experiência não aconteceu até agora.",
        "NEVER já possui sentido negativo.",
        "Utilize HAVE/HAS + past participle.",
        "Respostas curtas utilizam HAVE/HAVEN'T ou HAS/HASN'T."
      ]
    },
    {
      title: "ALREADY, YET e JUST — Quando algo acontece",
      explanation: "ALREADY, YET e JUST são palavras muito utilizadas com o Present Perfect para indicar a relação temporal de um acontecimento. ALREADY significa já e geralmente indica que algo aconteceu antes do esperado ou antes do momento atual. Normalmente aparece entre HAVE/HAS e o past participle. YET significa ainda ou já, dependendo do contexto, e aparece principalmente no final de perguntas e frases negativas. Em perguntas, pode indicar se algo já aconteceu. Em negativas, pode indicar que algo ainda não aconteceu. JUST significa acabado de ou acabou de e indica que algo aconteceu há pouco tempo. Essas palavras ajudam a apresentar detalhes temporais sem precisar indicar uma data específica.",
      examples: [
        { en: "I have already finished my homework.", pt: "Já terminei minha tarefa." },
        { en: "She has already eaten.", pt: "Ela já comeu." },
        { en: "Have you finished your project yet?", pt: "Você já terminou seu projeto?" },
        { en: "I haven't finished yet.", pt: "Ainda não terminei." },
        { en: "He has just arrived.", pt: "Ele acabou de chegar." },
        { en: "We have just watched the movie.", pt: "Acabamos de assistir ao filme." },
        { en: "Has the bus arrived yet?", pt: "O ônibus já chegou?" },
        { en: "They haven't called me yet.", pt: "Eles ainda não me ligaram." }
      ],
      keyPoints: [
        "ALREADY significa já.",
        "YET pode significar já em perguntas.",
        "YET significa ainda em negativas.",
        "JUST indica que algo aconteceu há pouco tempo.",
        "ALREADY geralmente aparece antes do past participle.",
        "JUST geralmente aparece antes do past participle.",
        "YET normalmente aparece no final da frase.",
        "Todas essas palavras são frequentemente utilizadas com Present Perfect."
      ]
    },
    {
      title: "Present Perfect ou Past Simple?",
      explanation: "Uma das maiores dificuldades do Present Perfect é diferenciá-lo do Past Simple. O Past Simple é utilizado para acontecimentos concluídos em um momento passado definido ou apresentado pelo contexto. O Present Perfect normalmente apresenta uma conexão com o presente, experiências sem data específica ou situações que continuam até agora. Compare I VISITED JAPAN IN 2024 com I HAVE VISITED JAPAN. A primeira frase informa quando a viagem aconteceu, utilizando Past Simple. A segunda apresenta a experiência sem especificar quando. Não utilizamos normalmente o Present Perfect com expressões de tempo passado concluído, como YESTERDAY, LAST YEAR e TWO DAYS AGO. Já expressões como EVER, NEVER e YET são frequentemente utilizadas com Present Perfect.",
      examples: [
        { en: "I visited Japan last year.", pt: "Visitei o Japão no ano passado." },
        { en: "I have visited Japan.", pt: "Já visitei o Japão." },
        { en: "She went to Canada in 2023.", pt: "Ela foi ao Canadá em 2023." },
        { en: "She has been to Canada.", pt: "Ela já esteve no Canadá." },
        { en: "We watched this movie yesterday.", pt: "Assistimos a este filme ontem." },
        { en: "We have watched this movie before.", pt: "Já assistimos a este filme antes." },
        { en: "Did you eat breakfast this morning?", pt: "Você tomou café da manhã hoje de manhã?" },
        { en: "Have you eaten breakfast yet?", pt: "Você já tomou café da manhã?" }
      ],
      keyPoints: [
        "Past Simple apresenta acontecimentos passados concluídos.",
        "Present Perfect conecta experiências passadas ao presente.",
        "YESTERDAY e LAST YEAR normalmente acompanham Past Simple.",
        "EVER e NEVER aparecem frequentemente com Present Perfect.",
        "Não utilize Present Perfect com um momento passado concluído como referência.",
        "Pergunte se a frase destaca quando aconteceu ou a experiência em si.",
        "O contexto é essencial para escolher o tempo verbal."
      ]
    },
    {
      title: "Experiências e acontecimentos — Desafio integrado",
      explanation: "Nesta última aula, vamos combinar todas as estruturas do Present Perfect em situações de comunicação. O aluno deverá falar sobre experiências que já teve, coisas que nunca fez, atividades que acabou de realizar e tarefas que ainda não terminou. Também deverá formular perguntas com EVER, responder utilizando HAVE ou HAVEN'T e diferenciar situações que exigem Past Simple. A atividade final será escrever um pequeno texto sobre experiências pessoais e participar de um diálogo sobre atividades que outras pessoas já realizaram. O objetivo é compreender o Present Perfect como uma ferramenta de comunicação, e não como uma fórmula gramatical isolada.",
      examples: [
        {
          en: "I have learned many interesting things this year. I have already finished several English lessons, but I haven't completed the entire course yet. I have just started studying Present Perfect, and I have discovered that it is different from the Past Simple. I have never visited Japan, but I would love to travel there one day. Last year, I studied other subjects, and yesterday I practiced English with a friend.",
          pt: "Aprendi muitas coisas interessantes este ano. Já terminei várias aulas de inglês, mas ainda não concluí o curso inteiro. Acabei de começar a estudar Present Perfect e descobri que ele é diferente do Past Simple. Nunca visitei o Japão, mas adoraria viajar para lá algum dia. No ano passado, estudei outras matérias e ontem pratiquei inglês com um amigo."
        },
        { en: "Have you ever traveled to another country?", pt: "Você já viajou para outro país?" },
        { en: "What have you learned recently?", pt: "O que você aprendeu recentemente?" },
        { en: "Have you finished your homework yet?", pt: "Você já terminou sua tarefa?" },
        { en: "I have already finished it.", pt: "Já terminei." },
        { en: "I haven't finished it yet.", pt: "Ainda não terminei." },
        { en: "What did you do yesterday?", pt: "O que você fez ontem?" },
        { en: "What have you never tried?", pt: "O que você nunca experimentou?" }
      ],
      keyPoints: [
        "Utilize HAVE/HAS + past participle.",
        "Fale sobre experiências utilizando EVER e NEVER.",
        "Utilize ALREADY para acontecimentos que já ocorreram.",
        "Utilize YET em perguntas e negativas.",
        "Utilize JUST para acontecimentos recentes.",
        "Diferencie Present Perfect de Past Simple.",
        "Não utilize datas passadas concluídas com Present Perfect.",
        "Escreva um texto sobre experiências pessoais.",
        "Participe de uma conversa utilizando perguntas e respostas."
      ]
    }
  ]
},


// ======================================================
// SEMANA 21 — PRESENT PERFECT CONTINUOUS
// ======================================================

{
  title: "Present Perfect Continuous — Duração e Continuidade",
  goal: "Aprender a utilizar o Present Perfect Continuous para falar sobre ações que começaram no passado e continuam até o presente, destacando sua duração, continuidade ou efeitos atuais.",
  days: [
    {
      title: "Conhecendo o Present Perfect Continuous",
      explanation: "O Present Perfect Continuous é utilizado principalmente para falar sobre ações que começaram no passado e continuam acontecendo, ou ações que terminaram recentemente e ainda apresentam efeitos no presente. Sua estrutura é HAVE ou HAS + BEEN + verbo terminado em ING. Utilizamos HAVE com I, YOU, WE e THEY, e HAS com HE, SHE e IT. A diferença em relação ao Present Perfect simples está no foco da comunicação. O Present Perfect frequentemente destaca o resultado ou a experiência de uma ação, enquanto o Present Perfect Continuous destaca a duração ou o processo da atividade. Por exemplo, I HAVE LEARNED ENGLISH pode destacar o aprendizado como resultado ou experiência. Já I HAVE BEEN LEARNING ENGLISH destaca o processo de estudar inglês ao longo do tempo.",
      examples: [
        { en: "I have been learning English.", pt: "Estou aprendendo inglês há algum tempo." },
        { en: "She has been studying all morning.", pt: "Ela está estudando durante toda a manhã." },
        { en: "They have been playing soccer.", pt: "Eles estão jogando futebol." },
        { en: "We have been working on a project.", pt: "Estamos trabalhando em um projeto." },
        { en: "He has been reading a book.", pt: "Ele está lendo um livro." },
        { en: "It has been raining.", pt: "Está chovendo há algum tempo." },
        { en: "You have been practicing a lot.", pt: "Você está praticando bastante." }
      ],
      keyPoints: [
        "Estrutura: HAVE/HAS + BEEN + verbo com ING.",
        "HAVE é utilizado com I, YOU, WE e THEY.",
        "HAS é utilizado com HE, SHE e IT.",
        "O tempo verbal destaca o processo ou a duração.",
        "Pode descrever ações que continuam no presente.",
        "Também pode descrever ações recentes com efeitos atuais.",
        "Não confunda com Present Perfect simples."
      ]
    },
    {
      title: "FOR e SINCE — Indicando duração",
      explanation: "FOR e SINCE são utilizados para indicar há quanto tempo uma atividade acontece, mas possuem funções diferentes. FOR apresenta uma duração ou quantidade de tempo, como FOR TWO YEARS, FOR THREE HOURS e FOR A LONG TIME. SINCE apresenta o ponto em que uma atividade começou, como SINCE 2020, SINCE MONDAY e SINCE I WAS A CHILD. No Present Perfect Continuous, essas expressões ajudam a explicar há quanto tempo uma ação está acontecendo. Por exemplo, I HAVE BEEN STUDYING FOR TWO HOURS significa que estou estudando há duas horas. Já I HAVE BEEN STUDYING SINCE EIGHT significa que comecei a estudar às oito. É importante não confundir a duração com o momento inicial.",
      examples: [
        { en: "I have been learning English for two years.", pt: "Estou aprendendo inglês há dois anos." },
        { en: "She has been working here since 2022.", pt: "Ela trabalha aqui desde 2022." },
        { en: "We have been waiting for thirty minutes.", pt: "Estamos esperando há trinta minutos." },
        { en: "He has been playing soccer since he was a child.", pt: "Ele joga futebol desde que era criança." },
        { en: "They have been studying for three hours.", pt: "Eles estão estudando há três horas." },
        { en: "It has been raining since this morning.", pt: "Está chovendo desde esta manhã." },
        { en: "I have been practicing Japanese for six months.", pt: "Estou praticando japonês há seis meses." }
      ],
      keyPoints: [
        "FOR indica duração.",
        "SINCE indica o ponto inicial.",
        "FOR TWO YEARS = durante dois anos / há dois anos.",
        "SINCE 2020 = desde 2020.",
        "SINCE MONDAY = desde segunda-feira.",
        "FOR THREE HOURS = há três horas.",
        "Utilize FOR para quantidades de tempo.",
        "Utilize SINCE para datas, horários e momentos iniciais."
      ]
    },
    {
      title: "Formas afirmativas, negativas e interrogativas",
      explanation: "O Present Perfect Continuous pode aparecer em frases afirmativas, negativas e interrogativas. Na forma afirmativa, utilizamos HAVE ou HAS + BEEN + verbo com ING. Na negativa, adicionamos NOT depois de HAVE ou HAS: HAVE NOT BEEN ou HAS NOT BEEN. As formas contraídas HAVEN'T BEEN e HASN'T BEEN são muito comuns em conversas. Para formar perguntas, colocamos HAVE ou HAS antes do sujeito: HAVE YOU BEEN STUDYING? ou HAS SHE BEEN WORKING? As respostas curtas utilizam HAVE, HAVEN'T, HAS ou HASN'T. É importante manter o BEEN na estrutura e não confundi-lo com o verbo BE utilizado no Present Continuous.",
      examples: [
        { en: "I have been studying.", pt: "Tenho estudado." },
        { en: "I haven't been sleeping well.", pt: "Não tenho dormido bem." },
        { en: "She hasn't been working recently.", pt: "Ela não tem trabalhado recentemente." },
        { en: "Have you been learning English?", pt: "Você tem estudado inglês?" },
        { en: "Has he been playing soccer?", pt: "Ele tem jogado futebol?" },
        { en: "Yes, I have.", pt: "Sim." },
        { en: "No, she hasn't.", pt: "Não." },
        { en: "Why have they been waiting?", pt: "Por que eles estão esperando há tanto tempo?" }
      ],
      keyPoints: [
        "Afirmativa: HAVE/HAS + BEEN + ING.",
        "Negativa: HAVE/HAS + NOT + BEEN + ING.",
        "HAVEN'T BEEN e HASN'T BEEN são formas contraídas.",
        "Pergunta: HAVE/HAS + sujeito + BEEN + ING?",
        "Respostas curtas utilizam HAVE, HAVEN'T, HAS e HASN'T.",
        "Não retire o BEEN da estrutura.",
        "Utilize WH-QUESTIONS para pedir informações adicionais."
      ]
    },
    {
      title: "Present Perfect Continuous ou Present Perfect?",
      explanation: "O Present Perfect e o Present Perfect Continuous podem descrever situações relacionadas ao passado e ao presente, mas apresentam focos diferentes. O Present Perfect simples costuma destacar o resultado, a experiência ou a quantidade concluída. O Present Perfect Continuous costuma destacar a duração ou o processo. Compare I HAVE READ THREE BOOKS, que destaca a quantidade de livros lidos, com I HAVE BEEN READING THIS BOOK FOR TWO HOURS, que destaca o tempo dedicado à leitura. Alguns verbos de estado, como KNOW, LIKE, BELIEVE e UNDERSTAND, normalmente não são utilizados na forma contínua com esse significado. Por isso, dizemos I HAVE KNOWN HER FOR YEARS, e não I HAVE BEEN KNOWING HER FOR YEARS. A escolha depende do significado que queremos destacar.",
      examples: [
        { en: "I have written five emails.", pt: "Escrevi cinco e-mails." },
        { en: "I have been writing emails all morning.", pt: "Estou escrevendo e-mails durante toda a manhã." },
        { en: "She has read three books this month.", pt: "Ela leu três livros este mês." },
        { en: "She has been reading for two hours.", pt: "Ela está lendo há duas horas." },
        { en: "They have played four games.", pt: "Eles jogaram quatro partidas." },
        { en: "They have been playing for an hour.", pt: "Eles estão jogando há uma hora." },
        { en: "I have known him since childhood.", pt: "Conheço ele desde a infância." }
      ],
      keyPoints: [
        "Present Perfect destaca frequentemente resultado ou experiência.",
        "Present Perfect Continuous destaca frequentemente processo ou duração.",
        "Quantidade concluída combina frequentemente com Present Perfect simples.",
        "Duração de uma atividade combina frequentemente com Continuous.",
        "Alguns verbos de estado normalmente não são usados no Continuous.",
        "KNOW, LIKE e BELIEVE são exemplos de verbos de estado.",
        "O contexto pode permitir mais de uma construção, com focos diferentes."
      ]
    },
    {
      title: "Ações recentes e evidências no presente",
      explanation: "O Present Perfect Continuous também pode ser utilizado quando uma atividade acabou recentemente, mas deixou sinais ou consequências que podem ser percebidos agora. Por exemplo, HE IS TIRED BECAUSE HE HAS BEEN RUNNING indica que ele está cansado porque esteve correndo. A corrida pode ter terminado, mas seus efeitos continuam presentes. Podemos utilizar essa estrutura para explicar cansaço, roupas molhadas, ambientes bagunçados, resultados de atividades e outras situações. Nesses casos, nem sempre é necessário indicar FOR ou SINCE, porque o contexto já mostra que a atividade aconteceu durante um período recente. A expressão HOW LONG é muito útil para perguntar sobre a duração de uma atividade.",
      examples: [
        { en: "You are wet. Have you been walking in the rain?", pt: "Você está molhado. Esteve caminhando na chuva?" },
        { en: "He is tired because he has been running.", pt: "Ele está cansado porque esteve correndo." },
        { en: "Her eyes are red because she has been crying.", pt: "Os olhos dela estão vermelhos porque ela esteve chorando." },
        { en: "The kitchen is messy because we have been cooking.", pt: "A cozinha está bagunçada porque estivemos cozinhando." },
        { en: "How long have you been studying?", pt: "Há quanto tempo você está estudando?" },
        { en: "How long has she been waiting?", pt: "Há quanto tempo ela está esperando?" },
        { en: "I have been working on this project all day.", pt: "Estou trabalhando neste projeto o dia inteiro." }
      ],
      keyPoints: [
        "A ação pode ter terminado recentemente.",
        "Os efeitos da atividade podem continuar no presente.",
        "HOW LONG pergunta sobre duração.",
        "O contexto pode indicar a atividade sem FOR ou SINCE.",
        "Utilize a estrutura para explicar resultados visíveis ou percebidos.",
        "Não é obrigatório que a ação ainda esteja acontecendo no exato momento.",
        "Diferencie a atividade passada de seus efeitos atuais."
      ]
    },
    {
      title: "Desafio — Minha trajetória e minhas atividades",
      explanation: "Nesta aula, o aluno deverá utilizar o Present Perfect Continuous para falar sobre atividades que realiza há algum tempo. O texto deve apresentar pelo menos três atividades, suas durações e alguns efeitos ou resultados no presente. Também deverá responder perguntas com HOW LONG, construir frases negativas e realizar uma pequena entrevista sobre hábitos de estudo, esportes, hobbies e projetos. Para completar o desafio, o aluno deverá comparar duas frases com Present Perfect e Present Perfect Continuous, explicando qual delas destaca o resultado e qual destaca o processo. O objetivo é conseguir falar sobre continuidade e duração sem depender de traduções palavra por palavra.",
      examples: [
        {
          en: "I have been studying English for some time, and I have been practicing Japanese as well. I have been working on different projects recently. Sometimes I feel tired because I have been spending many hours studying. However, I have been learning new things every week, and I want to continue improving.",
          pt: "Tenho estudado inglês há algum tempo e também tenho praticado japonês. Tenho trabalhado em diferentes projetos recentemente. Às vezes me sinto cansado porque tenho passado muitas horas estudando. Mesmo assim, tenho aprendido coisas novas todas as semanas e quero continuar melhorando."
        },
        { en: "How long have you been learning English?", pt: "Há quanto tempo você aprende inglês?" },
        { en: "What have you been doing recently?", pt: "O que você tem feito recentemente?" },
        { en: "Have you been practicing every day?", pt: "Você tem praticado todos os dias?" },
        { en: "I haven't been studying enough.", pt: "Não tenho estudado o suficiente." },
        { en: "I have been working on a new project for three weeks.", pt: "Estou trabalhando em um novo projeto há três semanas." }
      ],
      keyPoints: [
        "Produza um texto sobre atividades contínuas.",
        "Utilize HAVE/HAS + BEEN + ING.",
        "Inclua FOR e SINCE corretamente.",
        "Responda perguntas com HOW LONG.",
        "Construa frases afirmativas e negativas.",
        "Faça pelo menos duas perguntas a outra pessoa.",
        "Compare Present Perfect e Present Perfect Continuous.",
        "Explique a diferença entre resultado e duração."
      ]
    }
  ]
},

// ======================================================
// SEMANA 22 — PAST PERFECT
// ======================================================

{
  title: "Past Perfect — O Passado do Passado",
  goal: "Compreender e utilizar o Past Perfect para organizar acontecimentos anteriores a outros acontecimentos passados, construindo narrativas com ordem cronológica clara.",
  days: [
    {
      title: "Conhecendo o Past Perfect",
      explanation: "O Past Perfect é utilizado para indicar que uma ação aconteceu antes de outra ação ou momento no passado. Por isso, ele é frequentemente chamado de passado do passado. Sua estrutura é HAD + past participle e permanece igual para todos os sujeitos: I, YOU, HE, SHE, IT, WE e THEY. Imagine duas ações: primeiro uma pessoa saiu de casa; depois, outra pessoa chegou. Podemos dizer HE HAD ALREADY LEFT WHEN I ARRIVED. A saída aconteceu primeiro, enquanto a chegada aconteceu depois. O Past Perfect ajuda a deixar essa ordem explícita. Ele é especialmente útil em histórias, explicações e relatos que apresentam vários acontecimentos em momentos diferentes.",
      examples: [
        { en: "I had finished my homework before dinner.", pt: "Eu tinha terminado minha tarefa antes do jantar." },
        { en: "She had left when I arrived.", pt: "Ela tinha saído quando cheguei." },
        { en: "They had already eaten before the movie started.", pt: "Eles já tinham comido antes de o filme começar." },
        { en: "He had studied English before moving abroad.", pt: "Ele tinha estudado inglês antes de se mudar para o exterior." },
        { en: "We had never seen that place before.", pt: "Nunca tínhamos visto aquele lugar antes." },
        { en: "The train had departed before we reached the station.", pt: "O trem tinha partido antes de chegarmos à estação." },
        { en: "I had forgotten my keys.", pt: "Eu tinha esquecido minhas chaves." }
      ],
      keyPoints: [
        "Past Perfect indica uma ação anterior a outro momento passado.",
        "Estrutura: HAD + past participle.",
        "HAD é utilizado com todos os sujeitos.",
        "Não confunda HAD com HAD TO.",
        "A ação anterior recebe normalmente o Past Perfect.",
        "A ação posterior pode aparecer no Past Simple.",
        "É muito útil para organizar narrativas."
      ]
    },
    {
      title: "A ordem dos acontecimentos",
      explanation: "Para compreender o Past Perfect, precisamos identificar a ordem cronológica dos acontecimentos. Uma história pode ser narrada começando pelo acontecimento mais recente e depois explicar algo que aconteceu antes. O Past Perfect permite apresentar essa informação anterior sem confundir o leitor. Por exemplo, WHEN I ARRIVED AT THE STATION, THE TRAIN HAD LEFT. A chegada aconteceu primeiro na ordem da narrativa, mas a partida do trem aconteceu antes na cronologia real. Palavras como BEFORE, AFTER, WHEN e BY THE TIME ajudam a estabelecer relações temporais. O Past Perfect não precisa aparecer em todas as frases de uma história: seu uso é importante principalmente quando queremos destacar que uma ação aconteceu antes de outra referência passada.",
      examples: [
        { en: "When I arrived, the class had started.", pt: "Quando cheguei, a aula já tinha começado." },
        { en: "She had cleaned the room before her friends arrived.", pt: "Ela tinha limpado o quarto antes de seus amigos chegarem." },
        { en: "By the time we got there, the store had closed.", pt: "Quando chegamos lá, a loja já tinha fechado." },
        { en: "After he had finished work, he went home.", pt: "Depois que terminou o trabalho, ele foi para casa." },
        { en: "I had saved the file before the computer stopped working.", pt: "Eu tinha salvado o arquivo antes de o computador parar de funcionar." },
        { en: "They had left before the rain began.", pt: "Eles tinham saído antes de a chuva começar." },
        { en: "The movie had already ended when we entered the theater.", pt: "O filme já tinha terminado quando entramos no cinema." }
      ],
      keyPoints: [
        "Identifique qual acontecimento ocorreu primeiro.",
        "Utilize Past Perfect para destacar o acontecimento anterior.",
        "Past Simple pode apresentar o acontecimento posterior.",
        "BEFORE significa antes.",
        "AFTER significa depois.",
        "WHEN significa quando.",
        "BY THE TIME indica que algo já havia acontecido até determinado momento.",
        "Nem toda frase de uma narrativa precisa estar no Past Perfect."
      ]
    },
    {
      title: "Formas negativas e interrogativas",
      explanation: "O Past Perfect possui uma estrutura simples para negativas e perguntas. Na negativa, utilizamos HAD NOT + past participle. A forma contraída é HADN'T. Nas perguntas, colocamos HAD antes do sujeito: HAD YOU FINISHED? ou HAD SHE ARRIVED? As respostas curtas utilizam HAD ou HADN'T. Também podemos construir perguntas com WHAT, WHY, WHERE, WHEN e outras palavras interrogativas. É importante lembrar que HAD permanece igual para todos os sujeitos. Não utilizamos DID para formar perguntas no Past Perfect, porque HAD já é o auxiliar responsável pela estrutura.",
      examples: [
        { en: "I hadn't finished my homework.", pt: "Eu não tinha terminado minha tarefa." },
        { en: "She hadn't seen the movie before.", pt: "Ela não tinha assistido ao filme antes." },
        { en: "Had you visited that city before?", pt: "Você já tinha visitado aquela cidade antes?" },
        { en: "Had they arrived when you called?", pt: "Eles já tinham chegado quando você ligou?" },
        { en: "Why had he left so early?", pt: "Por que ele tinha saído tão cedo?" },
        { en: "Yes, I had.", pt: "Sim." },
        { en: "No, they hadn't.", pt: "Não." },
        { en: "What had happened before the accident?", pt: "O que tinha acontecido antes do acidente?" }
      ],
      keyPoints: [
        "Negativa: HAD NOT + past participle.",
        "Forma contraída: HADN'T.",
        "Pergunta: HAD + sujeito + past participle?",
        "Respostas curtas: HAD ou HADN'T.",
        "HAD funciona como auxiliar.",
        "Não utilize DID para formar perguntas no Past Perfect.",
        "Utilize WH-QUESTIONS para descobrir informações."
      ]
    },
    {
      title: "Past Perfect e Past Simple juntos",
      explanation: "Uma narrativa pode utilizar Past Perfect e Past Simple para apresentar acontecimentos em sequência. O Past Perfect explica o que já havia acontecido antes de determinado momento, enquanto o Past Simple apresenta os acontecimentos principais da história. Compare WHEN I GOT HOME, MY BROTHER HAD COOKED DINNER. A refeição foi preparada antes da chegada em casa. Depois, podemos continuar a história com I ATE WITH HIM AND WE WATCHED A MOVIE. Essas duas frases estão no Past Simple porque apresentam acontecimentos seguintes da narrativa. O objetivo não é transformar todas as ações passadas em Past Perfect, mas utilizar cada tempo verbal conforme sua função.",
      examples: [
        { en: "I had studied before I took the test.", pt: "Eu tinha estudado antes de fazer a prova." },
        { en: "She had packed her bags, so she went to the airport.", pt: "Ela tinha arrumado as malas, então foi para o aeroporto." },
        { en: "He had lost his phone, so he bought a new one.", pt: "Ele tinha perdido o celular, então comprou um novo." },
        { en: "We had prepared everything before the guests arrived.", pt: "Tínhamos preparado tudo antes de os convidados chegarem." },
        { en: "The team had trained hard, and then they won the match.", pt: "O time tinha treinado bastante e depois venceu a partida." },
        { en: "I had never traveled abroad, but last year I visited another country.", pt: "Nunca tinha viajado para o exterior, mas no ano passado visitei outro país." },
        { en: "When she called me, I had already gone to bed.", pt: "Quando ela me ligou, eu já tinha ido dormir." }
      ],
      keyPoints: [
        "Past Perfect destaca acontecimentos anteriores.",
        "Past Simple apresenta acontecimentos passados da narrativa.",
        "Uma mesma história pode utilizar os dois tempos.",
        "Não utilize Past Perfect automaticamente em toda frase passada.",
        "Identifique o ponto de referência temporal.",
        "SO pode conectar uma situação a uma consequência.",
        "Organize os acontecimentos antes de escolher o tempo verbal."
      ]
    },
    {
      title: "Narrativas complexas e acontecimentos anteriores",
      explanation: "Nesta aula, vamos trabalhar com histórias que possuem vários acontecimentos em momentos diferentes. Uma narrativa pode começar no presente da história, voltar ao passado para explicar uma informação e depois retornar aos acontecimentos principais. O Past Perfect permite fazer esse movimento temporal com clareza. Também podemos utilizá-lo para explicar experiências anteriores, decisões, descobertas e situações que influenciaram acontecimentos posteriores. Expressões como HAD ALREADY, HAD NEVER, HAD JUST e HAD NOT YET ajudam a acrescentar detalhes. O importante é que o aluno consiga perceber a diferença entre a ordem em que os fatos são contados e a ordem em que realmente aconteceram.",
      examples: [
        {
          en: "When Daniel arrived at the airport, his flight had already departed. He had left home late because he had forgotten to set his alarm. He called his family and explained what had happened. After he bought another ticket, he waited for the next flight.",
          pt: "Quando Daniel chegou ao aeroporto, seu voo já tinha partido. Ele tinha saído de casa tarde porque havia esquecido de programar o despertador. Ligou para sua família e explicou o que tinha acontecido. Depois de comprar outra passagem, esperou pelo próximo voo."
        },
        {
          en: "I didn't recognize the city because it had changed so much since my last visit.",
          pt: "Não reconheci a cidade porque ela tinha mudado muito desde minha última visita."
        },
        {
          en: "She was nervous because she had never spoken in public before.",
          pt: "Ela estava nervosa porque nunca tinha falado em público antes."
        },
        {
          en: "By the time the teacher arrived, the students had already started the activity.",
          pt: "Quando o professor chegou, os alunos já tinham começado a atividade."
        },
        {
          en: "He had just finished dinner when the phone rang.",
          pt: "Ele tinha acabado de terminar o jantar quando o telefone tocou."
        }
      ],
      keyPoints: [
        "Narrativas podem apresentar diferentes momentos passados.",
        "O Past Perfect permite explicar acontecimentos anteriores.",
        "HAD ALREADY indica que algo já tinha acontecido.",
        "HAD NEVER indica que algo nunca tinha acontecido até aquele momento.",
        "HAD JUST indica uma ação que tinha acabado de acontecer.",
        "HAD NOT YET indica algo que ainda não tinha acontecido.",
        "Diferencie a ordem cronológica da ordem narrativa."
      ]
    },
    {
      title: "Desafio — Contando uma história em ordem cronológica",
      explanation: "O desafio final será escrever uma história que apresente pelo menos cinco acontecimentos passados. O aluno deverá utilizar Past Perfect para explicar ações anteriores e Past Simple para desenvolver os acontecimentos principais. A narrativa deverá conter uma situação inicial, um acontecimento inesperado, uma explicação sobre algo que já havia ocorrido e uma conclusão. Depois da escrita, o aluno deverá organizar os acontecimentos em ordem cronológica e verificar se o leitor consegue entender exatamente o que aconteceu primeiro, depois e por último. Também deverá responder perguntas sobre a história utilizando HAD e o past participle.",
      examples: [
        {
          en: "Last Saturday, I went to visit my friend. When I arrived, he had already prepared everything for our project. He had collected the materials during the week, but he hadn't organized them yet. We worked together for three hours and finished most of the project. Before I left, we checked everything and planned our next meeting.",
          pt: "No sábado passado, fui visitar meu amigo. Quando cheguei, ele já tinha preparado tudo para nosso projeto. Ele havia reunido os materiais durante a semana, mas ainda não os tinha organizado. Trabalhamos juntos durante três horas e terminamos a maior parte do projeto. Antes de eu sair, verificamos tudo e planejamos nossa próxima reunião."
        },
        { en: "What had happened before the main event?", pt: "O que tinha acontecido antes do acontecimento principal?" },
        { en: "Had the characters prepared everything?", pt: "Os personagens tinham preparado tudo?" },
        { en: "What happened after they arrived?", pt: "O que aconteceu depois que eles chegaram?" },
        { en: "Why had the character been nervous?", pt: "Por que o personagem estava nervoso?" }
      ],
      keyPoints: [
        "Escreva uma narrativa com pelo menos cinco acontecimentos.",
        "Utilize Past Perfect para ações anteriores.",
        "Utilize Past Simple para desenvolver a história.",
        "Inclua HAD ALREADY, HAD NEVER ou HAD JUST.",
        "Apresente uma situação inicial e uma conclusão.",
        "Organize os acontecimentos cronologicamente.",
        "Responda perguntas sobre os acontecimentos anteriores.",
        "Revise a coerência temporal do texto."
      ]
    }
  ]
},

// ======================================================
// SEMANA 23 — PASSIVE VOICE
// ======================================================

{
  title: "Passive Voice — Voz Passiva",
  goal: "Aprender a utilizar a voz passiva para destacar ações e objetos em vez de quem realiza a ação, reconhecendo sua formação em diferentes tempos verbais e situações comunicativas.",
  days: [
    {
      title: "Voz ativa e voz passiva",
      explanation: "Na voz ativa, normalmente destacamos quem realiza uma ação. Na voz passiva, destacamos quem ou o que recebe essa ação. Compare SOMEONE STOLE THE CAR com THE CAR WAS STOLEN. Na primeira frase, o sujeito é quem realizou o roubo. Na segunda, o destaque está no carro, que recebeu a ação. A voz passiva é muito utilizada quando não sabemos quem realizou uma ação, quando essa informação não é importante ou quando queremos destacar o resultado. Sua estrutura básica é uma forma do verbo TO BE + past participle. O tempo verbal aparece na forma do verbo TO BE, enquanto o verbo principal permanece no past participle.",
      examples: [
        { en: "People speak English all over the world.", pt: "As pessoas falam inglês no mundo inteiro." },
        { en: "English is spoken all over the world.", pt: "O inglês é falado no mundo inteiro." },
        { en: "Someone stole my bicycle.", pt: "Alguém roubou minha bicicleta." },
        { en: "My bicycle was stolen.", pt: "Minha bicicleta foi roubada." },
        { en: "The chef prepared the meal.", pt: "O cozinheiro preparou a refeição." },
        { en: "The meal was prepared by the chef.", pt: "A refeição foi preparada pelo cozinheiro." },
        { en: "They built this bridge in 1990.", pt: "Eles construíram esta ponte em 1990." },
        { en: "This bridge was built in 1990.", pt: "Esta ponte foi construída em 1990." }
      ],
      keyPoints: [
        "Voz ativa destaca quem realiza a ação.",
        "Voz passiva destaca quem ou o que recebe a ação.",
        "Estrutura básica: TO BE + past participle.",
        "O tempo verbal aparece no verbo TO BE.",
        "O verbo principal fica no past participle.",
        "BY pode indicar quem realizou a ação.",
        "A voz passiva é útil quando o agente é desconhecido ou secundário."
      ]
    },
    {
      title: "Present Simple Passive",
      explanation: "O Present Simple Passive é utilizado para falar sobre ações habituais, fatos gerais, processos e situações que acontecem no presente. Sua estrutura é AM, IS ou ARE + past participle. Utilizamos IS com sujeitos singulares, ARE com sujeitos plurais e AM com I, embora a voz passiva com I seja menos frequente em situações comuns. Por exemplo, ENGLISH IS SPOKEN IN MANY COUNTRIES destaca o fato de que o inglês é falado em muitos países. Essa construção aparece bastante em informações, regras, notícias, descrições de processos e explicações sobre como alguma coisa funciona. Para formar negativas, adicionamos NOT ao verbo TO BE. Para perguntas, colocamos AM, IS ou ARE antes do sujeito.",
      examples: [
        { en: "English is spoken in many countries.", pt: "O inglês é falado em muitos países." },
        { en: "These products are made in Brazil.", pt: "Estes produtos são fabricados no Brasil." },
        { en: "The classrooms are cleaned every day.", pt: "As salas de aula são limpas todos os dias." },
        { en: "This software is used by many people.", pt: "Este programa é utilizado por muitas pessoas." },
        { en: "The emails are sent automatically.", pt: "Os e-mails são enviados automaticamente." },
        { en: "The doors aren't opened at night.", pt: "As portas não são abertas à noite." },
        { en: "Is this language taught at school?", pt: "Este idioma é ensinado na escola?" }
      ],
      keyPoints: [
        "Present Simple Passive: AM/IS/ARE + past participle.",
        "IS é utilizado com sujeitos singulares.",
        "ARE é utilizado com sujeitos plurais.",
        "AM é utilizado com I.",
        "Negativa: AM/IS/ARE + NOT + past participle.",
        "Pergunta: AM/IS/ARE + sujeito + past participle?",
        "É comum em fatos, processos e informações gerais."
      ]
    },
    {
      title: "Past Simple Passive",
      explanation: "O Past Simple Passive é utilizado para falar sobre ações que foram realizadas no passado. Sua estrutura é WAS ou WERE + past participle. Utilizamos WAS com I, HE, SHE e IT, e WERE com YOU, WE e THEY. Por exemplo, THE CAR WAS STOLEN significa que o carro foi roubado. A pessoa que realizou a ação pode ser desconhecida ou não ser importante. Podemos acrescentar BY para informar quem realizou a ação, como THE BOOK WAS WRITTEN BY THE AUTHOR. A forma negativa utiliza WASN'T ou WEREN'T, enquanto as perguntas começam com WAS ou WERE. Essa estrutura aparece frequentemente em notícias, relatos históricos e descrições de acontecimentos.",
      examples: [
        { en: "The car was stolen yesterday.", pt: "O carro foi roubado ontem." },
        { en: "The building was constructed in 2005.", pt: "O prédio foi construído em 2005." },
        { en: "The documents were signed yesterday.", pt: "Os documentos foram assinados ontem." },
        { en: "The book was written by a famous author.", pt: "O livro foi escrito por um autor famoso." },
        { en: "The windows weren't broken.", pt: "As janelas não foram quebradas." },
        { en: "Was the package delivered?", pt: "O pacote foi entregue?" },
        { en: "The match was watched by thousands of people.", pt: "A partida foi assistida por milhares de pessoas." }
      ],
      keyPoints: [
        "Past Simple Passive: WAS/WERE + past participle.",
        "WAS é utilizado com I, HE, SHE e IT.",
        "WERE é utilizado com YOU, WE e THEY.",
        "BY pode apresentar o agente da ação.",
        "Negativa: WASN'T/WEREN'T + past participle.",
        "Pergunta: WAS/WERE + sujeito + past participle?",
        "É frequente em notícias e acontecimentos históricos."
      ]
    },
    {
      title: "Voz passiva em diferentes tempos verbais",
      explanation: "A voz passiva pode ser utilizada em diferentes tempos verbais. O elemento que muda é a forma do verbo TO BE, enquanto o verbo principal continua no past participle. No Present Continuous Passive, utilizamos AM/IS/ARE + BEING + past participle, como THE HOUSE IS BEING BUILT. No Present Perfect Passive, utilizamos HAVE/HAS + BEEN + past participle, como THE WORK HAS BEEN FINISHED. No futuro com WILL, utilizamos WILL BE + past participle, como THE PROJECT WILL BE COMPLETED. É importante compreender que o tempo da ação continua sendo indicado pela estrutura auxiliar. Não basta decorar a palavra BEEN ou BEING: precisamos identificar o tempo verbal desejado.",
      examples: [
        { en: "The house is being built.", pt: "A casa está sendo construída." },
        { en: "The road is being repaired.", pt: "A estrada está sendo reparada." },
        { en: "The project has been completed.", pt: "O projeto foi concluído." },
        { en: "The emails have been sent.", pt: "Os e-mails foram enviados." },
        { en: "The results will be announced tomorrow.", pt: "Os resultados serão anunciados amanhã." },
        { en: "The new school will be opened next year.", pt: "A nova escola será inaugurada no próximo ano." },
        { en: "The problem is being investigated.", pt: "O problema está sendo investigado." }
      ],
      keyPoints: [
        "Present Continuous Passive: AM/IS/ARE + BEING + past participle.",
        "Present Perfect Passive: HAVE/HAS + BEEN + past participle.",
        "Future Passive: WILL BE + past participle.",
        "O verbo principal permanece no past participle.",
        "BEING indica uma ação passiva em andamento.",
        "BEEN aparece em estruturas perfeitas.",
        "Identifique o tempo antes de montar a voz passiva."
      ]
    },
    {
      title: "BY e o agente da ação",
      explanation: "Na voz passiva, BY pode ser utilizado para informar quem realizou a ação. Porém, nem sempre precisamos incluir essa informação. Se o agente for desconhecido, óbvio ou irrelevante, podemos simplesmente omiti-lo. Por exemplo, MY PHONE WAS STOLEN não informa quem roubou o celular porque essa informação pode não ser conhecida. Já THE SONG WAS WRITTEN BY THE ARTIST identifica quem realizou a ação. Também é importante perceber que algumas frases na voz ativa não possuem um objeto adequado para transformar em passiva. Verbos intransitivos, como ARRIVE e SLEEP em seus usos comuns, não formam uma voz passiva direta. A voz passiva é uma escolha de organização da informação, não uma transformação obrigatória de todas as frases.",
      examples: [
        { en: "The novel was written by the author.", pt: "O romance foi escrito pelo autor." },
        { en: "The window was broken.", pt: "A janela foi quebrada." },
        { en: "The new bridge was designed by engineers.", pt: "A nova ponte foi projetada por engenheiros." },
        { en: "The message was sent by my teacher.", pt: "A mensagem foi enviada pelo meu professor." },
        { en: "The computer was repaired yesterday.", pt: "O computador foi consertado ontem." },
        { en: "The movie was directed by a famous filmmaker.", pt: "O filme foi dirigido por um cineasta famoso." },
        { en: "The package was delivered this morning.", pt: "O pacote foi entregue esta manhã." }
      ],
      keyPoints: [
        "BY pode indicar quem realizou a ação.",
        "O agente pode ser omitido quando não é importante.",
        "MY PHONE WAS STOLEN não identifica o responsável.",
        "THE BOOK WAS WRITTEN BY... identifica o agente.",
        "A voz passiva destaca o receptor da ação.",
        "Nem todos os verbos permitem uma transformação passiva direta.",
        "Escolha a voz passiva quando o foco da informação justificar seu uso."
      ]
    },
    {
      title: "Desafio — Notícias, processos e acontecimentos",
      explanation: "Nesta última aula, o aluno deverá interpretar e produzir informações utilizando a voz passiva. A atividade principal será escrever uma pequena notícia ou descrição de um acontecimento, destacando o que aconteceu, quando aconteceu e quais elementos receberam a ação. O texto deverá apresentar exemplos no Present Simple Passive e no Past Simple Passive, além de pelo menos uma construção em outro tempo verbal. O aluno também deverá transformar frases da voz ativa para a passiva, identificando sujeito, objeto, verbo auxiliar e past participle. O objetivo é utilizar a voz passiva de maneira natural, sem transformar frases desnecessariamente.",
      examples: [
        {
          en: "A new library was opened in the city yesterday. The building was designed by local architects, and modern computers were installed inside. The library is visited by students every day. More books will be added next month.",
          pt: "Uma nova biblioteca foi aberta na cidade ontem. O prédio foi projetado por arquitetos locais e computadores modernos foram instalados no interior. A biblioteca é visitada por estudantes todos os dias. Mais livros serão adicionados no próximo mês."
        },
        { en: "People use smartphones every day.", pt: "As pessoas utilizam smartphones todos os dias." },
        { en: "Smartphones are used every day.", pt: "Smartphones são utilizados todos os dias." },
        { en: "Someone built this house in 2010.", pt: "Alguém construiu esta casa em 2010." },
        { en: "This house was built in 2010.", pt: "Esta casa foi construída em 2010." },
        { en: "The company will launch a new product.", pt: "A empresa lançará um novo produto." },
        { en: "A new product will be launched.", pt: "Um novo produto será lançado." }
      ],
      keyPoints: [
        "Escreva uma pequena notícia ou descrição.",
        "Utilize Present Simple Passive.",
        "Utilize Past Simple Passive.",
        "Inclua pelo menos uma estrutura passiva em outro tempo verbal.",
        "Transforme frases ativas em passivas.",
        "Identifique o receptor da ação.",
        "Utilize BY quando o agente for relevante.",
        "Não utilize a voz passiva sem necessidade."
      ]
    }
  ]
},

// ======================================================
// SEMANA 24 — REPORTED SPEECH
// ======================================================

{
  title: "Reported Speech — Discurso Indireto",
  goal: "Aprender a relatar o que outra pessoa disse sem reproduzir suas palavras exatamente, compreendendo as mudanças de tempo verbal, pronomes e expressões temporais.",
  days: [
    {
      title: "Discurso direto e discurso indireto",
      explanation: "O discurso direto reproduz exatamente as palavras de alguém, normalmente utilizando aspas. O discurso indireto apresenta a informação transmitida sem repetir necessariamente as palavras originais. Compare HE SAID, 'I AM TIRED' com HE SAID THAT HE WAS TIRED. Na primeira frase, mostramos exatamente o que a pessoa disse. Na segunda, contamos a outra pessoa o conteúdo da fala. O discurso indireto é muito utilizado em conversas, notícias, histórias e relatos. Podemos utilizar SAY e TELL para introduzir o que alguém falou, mas eles possuem estruturas diferentes. SAY normalmente não exige uma pessoa como objeto direto, enquanto TELL geralmente é seguido pela pessoa que recebeu a informação.",
      examples: [
        { en: "Direct: He said, 'I am tired.'", pt: "Direto: Ele disse: 'Estou cansado.'" },
        { en: "Reported: He said that he was tired.", pt: "Indireto: Ele disse que estava cansado." },
        { en: "Direct: She said, 'I like music.'", pt: "Direto: Ela disse: 'Gosto de música.'" },
        { en: "Reported: She said that she liked music.", pt: "Indireto: Ela disse que gostava de música." },
        { en: "He told me that he was busy.", pt: "Ele me disse que estava ocupado." },
        { en: "She said that she needed help.", pt: "Ela disse que precisava de ajuda." },
        { en: "They told us that they were ready.", pt: "Eles nos disseram que estavam prontos." }
      ],
      keyPoints: [
        "Direct Speech reproduz as palavras originais.",
        "Reported Speech relata o conteúdo da fala.",
        "THAT pode introduzir a informação relatada.",
        "SAY normalmente não recebe diretamente a pessoa como objeto.",
        "TELL geralmente precisa indicar a pessoa que recebeu a informação.",
        "SAY SOMETHING e TELL SOMEONE SOMETHING são estruturas comuns.",
        "O discurso indireto não precisa repetir as palavras exatamente."
      ]
    },
    {
      title: "Mudanças de tempo verbal — Backshift",
      explanation: "Quando relatamos uma fala utilizando um verbo introdutório no passado, como SAID ou TOLD, frequentemente deslocamos o tempo verbal da frase original para uma forma passada. Esse processo é chamado de backshift. O Present Simple normalmente passa para Past Simple: I AM TIRED vira HE SAID THAT HE WAS TIRED. O Present Continuous normalmente passa para Past Continuous: I AM STUDYING vira HE SAID THAT HE WAS STUDYING. O Past Simple frequentemente passa para Past Perfect: I SAW HER vira HE SAID THAT HE HAD SEEN HER. WILL normalmente passa para WOULD, e CAN normalmente passa para COULD. Essa mudança é comum, mas não é obrigatória em todos os contextos: quando a informação continua verdadeira ou o falante deseja manter sua atualidade, o tempo original pode ser preservado.",
      examples: [
        { en: "Direct: 'I work here.' Reported: He said that he worked there.", pt: "Direto: 'Trabalho aqui.' Indireto: Ele disse que trabalhava lá." },
        { en: "Direct: 'I am studying.' Reported: She said that she was studying.", pt: "Direto: 'Estou estudando.' Indireto: Ela disse que estava estudando." },
        { en: "Direct: 'I saw him.' Reported: He said that he had seen him.", pt: "Direto: 'Eu o vi.' Indireto: Ele disse que o tinha visto." },
        { en: "Direct: 'I will call you.' Reported: She said that she would call me.", pt: "Direto: 'Vou ligar para você.' Indireto: Ela disse que me ligaria." },
        { en: "Direct: 'I can swim.' Reported: He said that he could swim.", pt: "Direto: 'Sei nadar.' Indireto: Ele disse que sabia nadar." },
        { en: "Direct: 'I have finished.' Reported: She said that she had finished.", pt: "Direto: 'Terminei.' Indireto: Ela disse que tinha terminado." },
        { en: "Direct: 'I am Brazilian.' Reported: He said that he is Brazilian.", pt: "Direto: 'Sou brasileiro.' Indireto: Ele disse que é brasileiro." }
      ],
      keyPoints: [
        "Backshift é o deslocamento de tempo verbal no discurso indireto.",
        "Present Simple geralmente passa para Past Simple.",
        "Present Continuous geralmente passa para Past Continuous.",
        "Past Simple frequentemente passa para Past Perfect.",
        "WILL normalmente passa para WOULD.",
        "CAN normalmente passa para COULD.",
        "Informações ainda verdadeiras podem preservar o tempo original.",
        "O contexto determina se o backshift é necessário."
      ]
    },
    {
      title: "Pronomes e expressões temporais",
      explanation: "Ao transformar uma fala direta em indireta, também precisamos verificar os pronomes e as expressões de tempo e lugar. Isso acontece porque a pessoa que relata a fala pode estar em uma situação diferente daquela em que a declaração original foi feita. Por exemplo, I WILL CALL YOU TOMORROW pode virar HE SAID THAT HE WOULD CALL ME THE NEXT DAY. O pronome I mudou porque o sujeito original era outra pessoa. TOMORROW virou THE NEXT DAY porque a fala está sendo relatada posteriormente. Algumas mudanças comuns são TODAY para THAT DAY, YESTERDAY para THE DAY BEFORE, TOMORROW para THE NEXT DAY, HERE para THERE e THIS para THAT. Essas alterações dependem do contexto: se o momento e o lugar continuam os mesmos, nem sempre precisamos mudar as expressões.",
      examples: [
        { en: "Direct: 'I will visit you tomorrow.' Reported: She said that she would visit me the next day.", pt: "Direto: 'Vou visitar você amanhã.' Indireto: Ela disse que me visitaria no dia seguinte." },
        { en: "Direct: 'I am here today.' Reported: He said that he was there that day.", pt: "Direto: 'Estou aqui hoje.' Indireto: Ele disse que estava lá naquele dia." },
        { en: "Direct: 'This is my book.' Reported: She said that that was her book.", pt: "Direto: 'Este é meu livro.' Indireto: Ela disse que aquele era o livro dela." },
        { en: "Direct: 'I saw him yesterday.' Reported: He said that he had seen him the day before.", pt: "Direto: 'Eu o vi ontem.' Indireto: Ele disse que o tinha visto no dia anterior." },
        { en: "Direct: 'We are leaving now.' Reported: They said that they were leaving then.", pt: "Direto: 'Estamos saindo agora.' Indireto: Eles disseram que estavam saindo naquele momento." },
        { en: "Direct: 'I like this place.' Reported: She said that she liked that place.", pt: "Direto: 'Gosto deste lugar.' Indireto: Ela disse que gostava daquele lugar." }
      ],
      keyPoints: [
        "Revise os pronomes antes de relatar uma fala.",
        "I pode virar HE ou SHE.",
        "MY pode virar HIS ou HER.",
        "TOMORROW pode virar THE NEXT DAY.",
        "YESTERDAY pode virar THE DAY BEFORE.",
        "TODAY pode virar THAT DAY.",
        "HERE pode virar THERE.",
        "THIS pode virar THAT.",
        "As mudanças dependem do contexto temporal e espacial."
      ]
    },
    {
      title: "Relatando perguntas",
      explanation: "Também podemos utilizar o discurso indireto para contar o que alguém perguntou. Perguntas de resposta SIM ou NÃO normalmente são introduzidas por IF ou WHETHER. Por exemplo, ARE YOU TIRED? pode virar HE ASKED IF I WAS TIRED. Nas perguntas com WH-WORDS, mantemos a palavra interrogativa, como WHERE, WHAT, WHY e WHEN. Por exemplo, WHERE DO YOU LIVE? pode virar SHE ASKED WHERE I LIVED. Uma mudança muito importante é a ordem das palavras: no discurso indireto, utilizamos a estrutura de uma frase afirmativa, sem a inversão típica de uma pergunta direta. Também não utilizamos DO ou DID como auxiliares da pergunta original na estrutura indireta.",
      examples: [
        { en: "Direct: 'Are you tired?' Reported: He asked if I was tired.", pt: "Direto: 'Você está cansado?' Indireto: Ele perguntou se eu estava cansado." },
        { en: "Direct: 'Do you like English?' Reported: She asked if I liked English.", pt: "Direto: 'Você gosta de inglês?' Indireto: Ela perguntou se eu gostava de inglês." },
        { en: "Direct: 'Where do you live?' Reported: He asked where I lived.", pt: "Direto: 'Onde você mora?' Indireto: Ele perguntou onde eu morava." },
        { en: "Direct: 'What are you doing?' Reported: She asked what I was doing.", pt: "Direto: 'O que você está fazendo?' Indireto: Ela perguntou o que eu estava fazendo." },
        { en: "Direct: 'Did you see the movie?' Reported: He asked if I had seen the movie.", pt: "Direto: 'Você assistiu ao filme?' Indireto: Ele perguntou se eu tinha assistido ao filme." },
        { en: "Direct: 'Why are you late?' Reported: They asked why I was late.", pt: "Direto: 'Por que você está atrasado?' Indireto: Eles perguntaram por que eu estava atrasado." },
        { en: "Direct: 'Can you help me?' Reported: She asked if I could help her.", pt: "Direto: 'Você pode me ajudar?' Indireto: Ela perguntou se eu poderia ajudá-la." }
      ],
      keyPoints: [
        "Perguntas SIM/NÃO utilizam IF ou WHETHER.",
        "WH-WORDS são preservadas.",
        "A ordem das palavras passa a ser afirmativa.",
        "Não utilize a inversão da pergunta direta.",
        "Não utilize DO ou DID como auxiliares na estrutura indireta.",
        "ASKED é muito utilizado para relatar perguntas.",
        "Revise pronomes e tempos verbais."
      ]
    },
    {
      title: "Relatando ordens, pedidos e instruções",
      explanation: "O discurso indireto também pode transmitir ordens, pedidos, recomendações e instruções. Uma estrutura muito comum é TELL + pessoa + TO + verbo. Por exemplo, CLOSE THE DOOR pode virar HE TOLD ME TO CLOSE THE DOOR. Para transmitir uma ordem negativa, utilizamos NOT TO + verbo: DON'T TOUCH IT pode virar SHE TOLD ME NOT TO TOUCH IT. Com pedidos, podemos utilizar ASK + pessoa + TO + verbo. Essa estrutura permite contar o que alguém pediu sem reproduzir a frase original. Também podemos utilizar verbos como WARN, ADVISE e REMIND para indicar avisos, conselhos e lembretes, desde que a construção seja adequada ao contexto.",
      examples: [
        { en: "Direct: 'Close the door.' Reported: He told me to close the door.", pt: "Direto: 'Feche a porta.' Indireto: Ele me disse para fechar a porta." },
        { en: "Direct: 'Don't touch it.' Reported: She told me not to touch it.", pt: "Direto: 'Não toque nisso.' Indireto: Ela me disse para não tocar nisso." },
        { en: "Direct: 'Please help me.' Reported: He asked me to help him.", pt: "Direto: 'Por favor, me ajude.' Indireto: Ele me pediu para ajudá-lo." },
        { en: "Direct: 'Wait here.' Reported: The teacher told us to wait there.", pt: "Direto: 'Esperem aqui.' Indireto: O professor nos disse para esperar lá." },
        { en: "Direct: 'Be careful.' Reported: She warned me to be careful.", pt: "Direto: 'Tenha cuidado.' Indireto: Ela me alertou para ter cuidado." },
        { en: "Direct: 'Study for the test.' Reported: My teacher advised me to study for the test.", pt: "Direto: 'Estude para a prova.' Meu professor me aconselhou a estudar para a prova." },
        { en: "Direct: 'Remember to call me.' Reported: He reminded me to call him.", pt: "Direto: 'Lembre-se de me ligar.' Ele me lembrou de ligar para ele." }
      ],
      keyPoints: [
        "TELL + pessoa + TO + verbo transmite ordens e instruções.",
        "ASK + pessoa + TO + verbo transmite pedidos.",
        "NOT TO + verbo transmite uma ordem negativa.",
        "WARN pode transmitir um aviso.",
        "ADVISE pode transmitir um conselho.",
        "REMIND pode transmitir um lembrete.",
        "A estrutura muda de acordo com a intenção da fala."
      ]
    },
    {
      title: "Desafio — Recontando conversas",
      explanation: "Nesta última aula, o aluno deverá transformar uma conversa direta em um relato indireto. O diálogo deverá conter afirmações, perguntas e pelo menos uma ordem ou pedido. Depois, o aluno deverá escrever um pequeno texto contando a conversa para uma terceira pessoa, ajustando tempos verbais, pronomes e expressões temporais quando necessário. Também deverá identificar situações em que o tempo verbal pode permanecer igual porque a informação continua verdadeira. O objetivo é conseguir transmitir o conteúdo de uma conversa de forma organizada, sem depender de copiar as palavras originais.",
      examples: [
        {
          en: "Direct conversation: Anna: 'I am studying English.' Lucas: 'Why are you studying it?' Anna: 'I want to travel next year.' Lucas: 'Can you help me practice?' Anna: 'Of course. Call me tomorrow.' Reported conversation: Anna said that she was studying English. Lucas asked why she was studying it. She explained that she wanted to travel the following year. Lucas asked if she could help him practice, and Anna told him to call her the next day.",
          pt: "Conversa direta: Anna: 'Estou estudando inglês.' Lucas: 'Por que você está estudando?' Anna: 'Quero viajar no próximo ano.' Lucas: 'Você pode me ajudar a praticar?' Anna: 'Claro. Me ligue amanhã.' Relato indireto: Anna disse que estava estudando inglês. Lucas perguntou por que ela estava estudando. Ela explicou que queria viajar no ano seguinte. Lucas perguntou se ela poderia ajudá-lo a praticar, e Anna disse para ele ligar no dia seguinte."
        },
        { en: "What did Anna say she was studying?", pt: "O que Anna disse que estava estudando?" },
        { en: "Why did Lucas ask her a question?", pt: "Por que Lucas fez uma pergunta a ela?" },
        { en: "What did Anna tell Lucas to do?", pt: "O que Anna disse para Lucas fazer?" },
        { en: "Did Lucas ask a question using IF?", pt: "Lucas fez uma pergunta utilizando IF?" }
      ],
      keyPoints: [
        "Transforme um diálogo direto em um relato.",
        "Inclua afirmações e perguntas.",
        "Inclua pelo menos um pedido ou instrução.",
        "Revise os tempos verbais.",
        "Revise os pronomes.",
        "Ajuste expressões temporais quando necessário.",
        "Identifique informações que continuam verdadeiras.",
        "Mantenha o sentido original da conversa."
      ]
    }
  ]
},

// ======================================================
// SEMANA 25 — EXPRESSÕES IDIOMÁTICAS PRÁTICAS
// ======================================================

{
  title: "Practical Idioms — Expressões Idiomáticas",
  goal: "Compreender e utilizar expressões idiomáticas frequentes do inglês cotidiano, interpretando seus significados pelo contexto em vez de traduzir cada palavra literalmente.",
  days: [
    {
      title: "O que são Idioms?",
      explanation: "Idioms são expressões cujo significado geralmente não corresponde à tradução literal de cada palavra. Elas fazem parte da comunicação natural e aparecem em conversas, filmes, séries, vídeos e textos. Por exemplo, PIECE OF CAKE significa algo muito fácil, e não um pedaço de bolo quando utilizado como expressão idiomática. Da mesma maneira, COST AN ARM AND A LEG significa custar muito caro. Para compreender um idiom, precisamos observar a situação em que ele aparece. Algumas expressões são bastante informais, enquanto outras podem ser utilizadas em diferentes registros. Não é necessário decorar dezenas de expressões de uma vez: o mais importante é reconhecer as mais frequentes e saber utilizá-las adequadamente.",
      examples: [
        { en: "The test was a piece of cake.", pt: "A prova foi muito fácil." },
        { en: "This phone costs an arm and a leg.", pt: "Este celular custa uma fortuna." },
        { en: "I see him once in a blue moon.", pt: "Vejo ele muito raramente." },
        { en: "You hit the nail on the head.", pt: "Você acertou em cheio." },
        { en: "Break a leg!", pt: "Boa sorte!" },
        { en: "It's raining cats and dogs.", pt: "Está chovendo muito." },
        { en: "I am feeling under the weather.", pt: "Não estou me sentindo muito bem." }
      ],
      keyPoints: [
        "Idioms são expressões com significado próprio.",
        "A tradução literal normalmente não revela o significado.",
        "O contexto é essencial para interpretar uma expressão.",
        "PIECE OF CAKE significa algo muito fácil.",
        "COST AN ARM AND A LEG significa custar muito caro.",
        "ONCE IN A BLUE MOON significa muito raramente.",
        "Aprenda as expressões dentro de frases completas."
      ]
    },
    {
      title: "PIECE OF CAKE e HIT THE NAIL ON THE HEAD",
      explanation: "PIECE OF CAKE é utilizada para descrever algo extremamente fácil ou simples de realizar. Podemos utilizá-la depois de falar sobre uma prova, uma tarefa, um desafio ou uma atividade. HIT THE NAIL ON THE HEAD significa acertar exatamente o ponto principal de uma situação, apresentar a resposta correta ou descrever algo com precisão. As duas expressões são muito úteis em conversas cotidianas. A primeira descreve o nível de dificuldade de uma atividade, enquanto a segunda reconhece quando alguém compreendeu ou explicou algo perfeitamente. Observe que ambas são expressões informais e devem ser utilizadas de acordo com o contexto.",
      examples: [
        { en: "The exercise was a piece of cake.", pt: "O exercício foi muito fácil." },
        { en: "Don't worry. This task is a piece of cake.", pt: "Não se preocupe. Esta tarefa é muito fácil." },
        { en: "For her, learning new words is a piece of cake.", pt: "Para ela, aprender palavras novas é muito fácil." },
        { en: "You hit the nail on the head.", pt: "Você acertou em cheio." },
        { en: "That explanation hit the nail on the head.", pt: "Aquela explicação acertou exatamente o ponto principal." },
        { en: "He hit the nail on the head when he described the problem.", pt: "Ele acertou em cheio quando descreveu o problema." },
        { en: "Your answer really hit the nail on the head.", pt: "Sua resposta realmente acertou em cheio." }
      ],
      keyPoints: [
        "PIECE OF CAKE = algo muito fácil.",
        "HIT THE NAIL ON THE HEAD = acertar em cheio.",
        "As expressões possuem significados diferentes.",
        "PIECE OF CAKE descreve facilidade.",
        "HIT THE NAIL ON THE HEAD destaca precisão.",
        "Podem aparecer em conversas informais.",
        "Não interprete essas expressões literalmente."
      ]
    },
    {
      title: "ONCE IN A BLUE MOON e COST AN ARM AND A LEG",
      explanation: "ONCE IN A BLUE MOON significa muito raramente, indicando que algo acontece poucas vezes. É utilizada para falar sobre hábitos, encontros, acontecimentos e atividades que não fazem parte da rotina. COST AN ARM AND A LEG significa custar muito caro. É uma expressão exagerada e figurativa utilizada para enfatizar um preço elevado. Podemos dizer THIS COMPUTER COSTS AN ARM AND A LEG para indicar que o computador é muito caro. As duas expressões são bastante conhecidas e aparecem em diferentes situações informais. É importante observar que COST pode mudar de acordo com o tempo verbal e o sujeito, mas a expressão idiomática permanece reconhecível.",
      examples: [
        { en: "I eat at that restaurant once in a blue moon.", pt: "Como naquele restaurante muito raramente." },
        { en: "We only travel together once in a blue moon.", pt: "Só viajamos juntos muito raramente." },
        { en: "He visits his hometown once in a blue moon.", pt: "Ele visita sua cidade natal muito raramente." },
        { en: "That computer costs an arm and a leg.", pt: "Aquele computador custa uma fortuna." },
        { en: "This jacket cost an arm and a leg.", pt: "Esta jaqueta custou uma fortuna." },
        { en: "I wanted to buy that camera, but it costs an arm and a leg.", pt: "Eu queria comprar aquela câmera, mas ela custa uma fortuna." },
        { en: "Their new house must have cost an arm and a leg.", pt: "A casa nova deles deve ter custado uma fortuna." }
      ],
      keyPoints: [
        "ONCE IN A BLUE MOON = muito raramente.",
        "COST AN ARM AND A LEG = custar muito caro.",
        "A primeira expressão indica frequência.",
        "A segunda expressão indica preço elevado.",
        "COST pode aparecer no presente ou no passado.",
        "As expressões são figurativas.",
        "Utilize o contexto para interpretar o significado."
      ]
    },
    {
      title: "Outros Idioms frequentes no cotidiano",
      explanation: "Além das quatro expressões principais, existem muitos outros idioms que aparecem em situações cotidianas. BREAK A LEG é uma maneira informal de desejar boa sorte, especialmente antes de uma apresentação ou atividade. UNDER THE WEATHER significa não estar se sentindo bem. LET THE CAT OUT OF THE BAG significa revelar um segredo, muitas vezes sem querer. CALL IT A DAY significa encerrar o trabalho ou uma atividade naquele momento. GET COLD FEET significa ficar nervoso ou hesitante antes de realizar algo importante. Essas expressões precisam ser aprendidas em seus contextos naturais, pois sua tradução literal pode ser completamente diferente de seu sentido real.",
      examples: [
        { en: "You have a presentation today? Break a leg!", pt: "Você tem uma apresentação hoje? Boa sorte!" },
        { en: "I am feeling under the weather today.", pt: "Não estou me sentindo muito bem hoje." },
        { en: "He let the cat out of the bag about the surprise.", pt: "Ele revelou o segredo sobre a surpresa." },
        { en: "We have worked for six hours. Let's call it a day.", pt: "Trabalhamos por seis horas. Vamos encerrar por hoje." },
        { en: "She got cold feet before the competition.", pt: "Ela ficou nervosa antes da competição." },
        { en: "I think we should call it a day.", pt: "Acho que deveríamos encerrar por hoje." },
        { en: "Don't let the cat out of the bag!", pt: "Não revele o segredo!" }
      ],
      keyPoints: [
        "BREAK A LEG = boa sorte.",
        "UNDER THE WEATHER = não estar se sentindo bem.",
        "LET THE CAT OUT OF THE BAG = revelar um segredo.",
        "CALL IT A DAY = encerrar uma atividade por hoje.",
        "GET COLD FEET = ficar hesitante ou nervoso antes de algo.",
        "Idioms podem ser informais e dependem do contexto.",
        "Aprenda a intenção comunicativa de cada expressão."
      ]
    },
    {
      title: "Reconhecendo Idioms em conversas e situações",
      explanation: "Uma dificuldade comum para estudantes é encontrar uma expressão idiomática e tentar traduzir cada palavra separadamente. Para evitar isso, precisamos identificar a situação e o significado pretendido. Se alguém diz THIS TEST WAS A PIECE OF CAKE, provavelmente está falando sobre uma prova fácil. Se alguém diz THAT CAR COSTS AN ARM AND A LEG, está destacando o preço elevado do carro. Em conversas reais, também precisamos reconhecer quando uma expressão está sendo utilizada literalmente e quando está sendo utilizada de forma figurada. O contexto, a intenção do falante e as frases ao redor ajudam a descobrir o sentido correto. Nesta aula, vamos praticar a interpretação de pequenos diálogos.",
      examples: [
        {
          en: "A: How was the exam? B: It was a piece of cake! A: Really? Was it easy? B: Yes. I finished it in twenty minutes.",
          pt: "A: Como foi a prova? B: Foi muito fácil! A: Sério? Foi fácil? B: Sim. Terminei em vinte minutos."
        },
        {
          en: "A: Why don't you buy that camera? B: It costs an arm and a leg. A: Is it really that expensive? B: Yes, I need to save more money.",
          pt: "A: Por que você não compra aquela câmera? B: Ela custa uma fortuna. A: É realmente tão cara? B: Sim, preciso economizar mais dinheiro."
        },
        {
          en: "A: Do you visit your cousins often? B: Not really. I see them once in a blue moon. A: That's a long time! B: I know. We live very far away.",
          pt: "A: Você visita seus primos frequentemente? B: Não muito. Vejo eles muito raramente. A: Isso é bastante tempo! B: Eu sei. Moramos muito longe."
        },
        {
          en: "A: What do you think about my explanation? B: You hit the nail on the head. A: So you agree? B: Absolutely.",
          pt: "A: O que você acha da minha explicação? B: Você acertou em cheio. A: Então você concorda? B: Com certeza."
        },
        { en: "I am feeling under the weather, so I will stay home.", pt: "Não estou me sentindo bem, então vou ficar em casa." },
        { en: "Let's call it a day. We can continue tomorrow.", pt: "Vamos encerrar por hoje. Podemos continuar amanhã." }
      ],
      keyPoints: [
        "Interprete o contexto antes de traduzir.",
        "Identifique a intenção de quem está falando.",
        "Observe as frases anteriores e posteriores.",
        "Diferencie o sentido literal do figurado.",
        "Reconheça os idioms em diálogos.",
        "Não tente traduzir cada palavra isoladamente.",
        "Explique o significado da expressão com suas próprias palavras."
      ]
    },
    {
      title: "Desafio — Falando naturalmente com Idioms",
      explanation: "Nesta última aula, o aluno deverá criar uma conversa ou um pequeno texto utilizando pelo menos seis expressões idiomáticas estudadas. O texto deverá apresentar situações nas quais os idioms façam sentido, sem parecer uma lista de expressões colocadas aleatoriamente. Depois, o aluno deverá explicar o significado de cada expressão utilizada e identificar quais seriam inadequadas em situações formais. A atividade também inclui interpretação de diálogos novos, nos quais o aluno precisará descobrir o significado de expressões pelo contexto. O objetivo é ampliar a compreensão do inglês natural e reconhecer expressões comuns em conversas, filmes, séries e vídeos.",
      examples: [
        {
          en: "Last weekend, I went shopping with my friends. We found a beautiful computer, but it cost an arm and a leg. After that, we went to a restaurant and talked for hours. We only meet once in a blue moon, so we had a lot to discuss. My friend told me about a new project, and I said his explanation hit the nail on the head. Later, we decided to call it a day because everyone was tired.",
          pt: "No último fim de semana, fui fazer compras com meus amigos. Encontramos um computador bonito, mas ele custava uma fortuna. Depois disso, fomos a um restaurante e conversamos durante horas. Só nos encontramos muito raramente, então tínhamos muito para conversar. Meu amigo me contou sobre um projeto novo, e eu disse que a explicação dele acertou em cheio. Mais tarde, decidimos encerrar por hoje porque todos estavam cansados."
        },
        { en: "Why did the speaker decide not to buy the computer?", pt: "Por que o narrador decidiu não comprar o computador?" },
        { en: "How often do the friends meet?", pt: "Com que frequência os amigos se encontram?" },
        { en: "What did the speaker think about the explanation?", pt: "O que o narrador achou da explicação?" },
        { en: "Why did they call it a day?", pt: "Por que decidiram encerrar por hoje?" },
        { en: "What does once in a blue moon mean in the text?", pt: "O que significa once in a blue moon no texto?" }
      ],
      keyPoints: [
        "Escreva um diálogo ou texto com pelo menos seis idioms.",
        "Utilize as expressões em contextos naturais.",
        "Explique o significado de cada expressão.",
        "Identifique expressões informais.",
        "Interprete um diálogo novo.",
        "Não utilize traduções literais.",
        "Reconheça a intenção comunicativa.",
        "Revise se cada expressão está sendo utilizada corretamente."
      ]
    }
  ]
},


// ======================================================
// SEMANA 26 — GERUND VS. INFINITIVE
// ======================================================

{
  title: "Gerund vs. Infinitive — TO DO ou DOING",
  goal: "Compreender quando utilizar o gerúndio (verbo + ING) e quando utilizar o infinitivo com TO, reconhecendo os padrões dos verbos mais comuns e aplicando essas estruturas em situações cotidianas.",
  days: [
    {
      title: "Entendendo Gerund e Infinitive",
      explanation: "Em inglês, quando utilizamos dois verbos próximos, o segundo nem sempre aparece na forma básica. Dependendo do primeiro verbo, podemos utilizar o infinitivo com TO ou o gerúndio, formado pelo verbo + ING. Por exemplo, WANT normalmente é seguido por TO + verbo: I WANT TO LEARN. Já ENJOY normalmente é seguido por verbo + ING: I ENJOY LEARNING. Não existe uma única regra que explique todos os casos. Alguns verbos exigem infinitivo, outros exigem gerúndio e alguns aceitam os dois, podendo mudar ou manter o significado. O primeiro passo é reconhecer os padrões mais frequentes e aprender quais estruturas combinam com cada verbo.",
      examples: [
        { en: "I want to learn English.", pt: "Quero aprender inglês." },
        { en: "I enjoy learning English.", pt: "Gosto de aprender inglês." },
        { en: "She decided to travel.", pt: "Ela decidiu viajar." },
        { en: "He finished studying.", pt: "Ele terminou de estudar." },
        { en: "They hope to win.", pt: "Eles esperam vencer." },
        { en: "We avoid making mistakes.", pt: "Evitamos cometer erros." },
        { en: "I need to practice.", pt: "Preciso praticar." }
      ],
      keyPoints: [
        "Infinitive: TO + verbo na forma básica.",
        "Gerund: verbo + ING.",
        "WANT normalmente exige infinitivo.",
        "ENJOY normalmente exige gerúndio.",
        "DECIDE normalmente é seguido por TO + verbo.",
        "FINISH normalmente é seguido por verbo + ING.",
        "É necessário aprender os padrões dos verbos.",
        "Não escolha a estrutura apenas traduzindo literalmente do português."
      ]
    },
    {
      title: "Verbos seguidos de Infinitive",
      explanation: "Alguns verbos são normalmente seguidos pelo infinitivo com TO. Entre os mais importantes estão WANT, NEED, DECIDE, PLAN, HOPE, PROMISE, LEARN e AGREE. Esses verbos frequentemente expressam desejos, necessidades, decisões, planos, esperanças ou compromissos. Depois deles, utilizamos TO seguido da forma básica do próximo verbo. Por exemplo, SHE PLANS TO TRAVEL. Não dizemos SHE PLANS TRAVEL nem SHE PLANS TRAVELING nesse padrão. Também podemos colocar outras informações entre os verbos, como I WANT TO LEARN ENGLISH AT HOME. É importante perceber que TO faz parte da estrutura do infinitivo e não deve ser confundido com uma preposição que exige gerúndio em outras construções.",
      examples: [
        { en: "I want to improve my English.", pt: "Quero melhorar meu inglês." },
        { en: "She needs to study.", pt: "Ela precisa estudar." },
        { en: "We decided to start a project.", pt: "Decidimos começar um projeto." },
        { en: "They plan to visit another country.", pt: "Eles planejam visitar outro país." },
        { en: "He hopes to become a teacher.", pt: "Ele espera se tornar professor." },
        { en: "I promised to help my friend.", pt: "Prometi ajudar meu amigo." },
        { en: "She learned to play the guitar.", pt: "Ela aprendeu a tocar violão." },
        { en: "We agreed to work together.", pt: "Concordamos em trabalhar juntos." }
      ],
      keyPoints: [
        "WANT + TO + verbo.",
        "NEED + TO + verbo.",
        "DECIDE + TO + verbo.",
        "PLAN + TO + verbo.",
        "HOPE + TO + verbo.",
        "PROMISE + TO + verbo.",
        "LEARN + TO + verbo.",
        "AGREE + TO + verbo.",
        "Depois de TO, utilize a forma básica do verbo."
      ]
    },
    {
      title: "Verbos seguidos de Gerund",
      explanation: "Outros verbos são normalmente seguidos pelo gerúndio, ou seja, pelo verbo terminado em ING. Alguns dos mais importantes são ENJOY, FINISH, AVOID, SUGGEST, MIND, KEEP e PRACTICE. Esses verbos podem expressar prazer, conclusão, prevenção, sugestão, tolerância, continuidade e prática. Por exemplo, I ENJOY PLAYING SOCCER significa que gosto de jogar futebol. Já SHE FINISHED READING significa que ela terminou de ler. Depois desses verbos, não colocamos TO antes do segundo verbo nesse padrão. Também é importante lembrar que o gerúndio pode funcionar como sujeito de uma frase, como LEARNING LANGUAGES IS INTERESTING, em que aprender idiomas é o assunto da frase.",
      examples: [
        { en: "I enjoy playing soccer.", pt: "Gosto de jogar futebol." },
        { en: "She finished reading the book.", pt: "Ela terminou de ler o livro." },
        { en: "He avoids making the same mistake.", pt: "Ele evita cometer o mesmo erro." },
        { en: "They suggested going to the park.", pt: "Eles sugeriram ir ao parque." },
        { en: "Do you mind opening the window?", pt: "Você se importa de abrir a janela?" },
        { en: "Keep practicing every day.", pt: "Continue praticando todos os dias." },
        { en: "I practice speaking English.", pt: "Pratico falar inglês." },
        { en: "Learning languages takes time.", pt: "Aprender idiomas leva tempo." }
      ],
      keyPoints: [
        "ENJOY + verbo com ING.",
        "FINISH + verbo com ING.",
        "AVOID + verbo com ING.",
        "SUGGEST + verbo com ING.",
        "MIND + verbo com ING.",
        "KEEP + verbo com ING.",
        "PRACTICE + verbo com ING.",
        "O gerúndio também pode funcionar como sujeito da frase.",
        "Não acrescente TO nesses padrões."
      ]
    },
    {
      title: "Verbos que aceitam as duas formas",
      explanation: "Alguns verbos podem ser seguidos tanto por infinitivo quanto por gerúndio. Em certos casos, o significado permanece praticamente igual. Por exemplo, LIKE, LOVE, HATE e PREFER podem aparecer com TO + verbo ou verbo + ING. I LIKE READING e I LIKE TO READ são duas maneiras corretas de expressar que gosto de ler, embora possam apresentar pequenas diferenças de foco ou contexto. Outros verbos podem aceitar as duas estruturas, mas mudar de significado. STOP + ING significa interromper uma atividade, enquanto STOP + TO + verbo significa parar outra atividade para realizar determinada ação. REMEMBER e FORGET também podem apresentar diferenças importantes entre as duas construções. É essencial estudar o significado da frase completa, e não apenas decorar o formato.",
      examples: [
        { en: "I like reading books.", pt: "Gosto de ler livros." },
        { en: "I like to read before sleeping.", pt: "Gosto de ler antes de dormir." },
        { en: "She loves dancing.", pt: "Ela adora dançar." },
        { en: "He prefers to study at night.", pt: "Ele prefere estudar à noite." },
        { en: "He stopped smoking.", pt: "Ele parou de fumar." },
        { en: "He stopped to answer the phone.", pt: "Ele parou o que estava fazendo para atender ao telefone." },
        { en: "Remember to lock the door.", pt: "Lembre-se de trancar a porta." },
        { en: "I remember meeting her.", pt: "Lembro-me de ter conhecido ela." }
      ],
      keyPoints: [
        "LIKE, LOVE, HATE e PREFER aceitam frequentemente as duas formas.",
        "STOP + ING significa interromper uma atividade.",
        "STOP + TO + verbo significa parar para fazer outra coisa.",
        "REMEMBER + TO + verbo indica lembrar de fazer algo.",
        "REMEMBER + ING indica lembrar de algo que aconteceu.",
        "FORGET + TO + verbo indica esquecer de fazer algo.",
        "FORGET + ING indica esquecer uma experiência ou acontecimento.",
        "O contexto determina o significado."
      ]
    },
    {
      title: "Gerund depois de preposições e expressões comuns",
      explanation: "Uma regra bastante útil é que, quando um verbo vem diretamente depois de uma preposição, normalmente utilizamos a forma com ING. Isso acontece em expressões como INTERESTED IN, GOOD AT, WITHOUT, BEFORE, AFTER e THANKS FOR. Por exemplo, I AM INTERESTED IN LEARNING ENGLISH. O verbo LEARNING aparece com ING porque vem depois da preposição IN. Também utilizamos essa estrutura em expressões como LOOK FORWARD TO, que significa esperar ansiosamente por algo. Nesse caso, TO é uma preposição da expressão, e por isso o verbo seguinte aparece com ING: I LOOK FORWARD TO SEEING YOU. Essa é uma exceção importante à ideia de que todo TO deve ser seguido pelo verbo na forma básica.",
      examples: [
        { en: "I am interested in learning languages.", pt: "Tenho interesse em aprender idiomas." },
        { en: "She is good at drawing.", pt: "Ela é boa em desenhar." },
        { en: "He left without saying goodbye.", pt: "Ele saiu sem se despedir." },
        { en: "Wash your hands before eating.", pt: "Lave as mãos antes de comer." },
        { en: "After finishing the work, we went home.", pt: "Depois de terminar o trabalho, fomos para casa." },
        { en: "Thank you for helping me.", pt: "Obrigado por me ajudar." },
        { en: "I look forward to seeing you.", pt: "Espero ansiosamente encontrar você." },
        { en: "She is afraid of making mistakes.", pt: "Ela tem medo de cometer erros." }
      ],
      keyPoints: [
        "Depois de uma preposição, normalmente utilizamos verbo + ING.",
        "INTERESTED IN + ING.",
        "GOOD AT + ING.",
        "WITHOUT + ING.",
        "BEFORE e AFTER podem ser seguidos por ING.",
        "THANK YOU FOR + ING.",
        "LOOK FORWARD TO + ING.",
        "O TO de LOOK FORWARD TO é uma preposição.",
        "Nem todo TO antes de um verbo indica infinitivo."
      ]
    },
    {
      title: "Desafio — Escolhendo a estrutura correta",
      explanation: "Nesta aula, o aluno deverá utilizar infinitivo e gerúndio em frases e situações reais. A atividade começa com a identificação do primeiro verbo e a escolha da estrutura que ele exige. Depois, o aluno deverá completar frases, corrigir construções incorretas e escrever um pequeno texto sobre seus interesses, planos, hábitos e objetivos. O texto deverá apresentar verbos como WANT, PLAN, ENJOY, FINISH, AVOID e PREFER. Também deverá incluir uma expressão com preposição seguida de ING. Para finalizar, o aluno deverá explicar a diferença entre STOP DOING e STOP TO DO, demonstrando que compreendeu como a escolha da estrutura pode alterar o significado.",
      examples: [
        {
          en: "I enjoy learning new things, and I want to improve my English. I plan to practice every day because I need to become more confident. I avoid studying when I am very tired, but I keep trying to improve. I am interested in learning languages, and I look forward to using English in real conversations.",
          pt: "Gosto de aprender coisas novas e quero melhorar meu inglês. Planejo praticar todos os dias porque preciso ganhar mais confiança. Evito estudar quando estou muito cansado, mas continuo tentando melhorar. Tenho interesse em aprender idiomas e espero ansiosamente usar inglês em conversas reais."
        },
        { en: "She decided to travel.", pt: "Ela decidiu viajar." },
        { en: "He enjoys playing games.", pt: "Ele gosta de jogar." },
        { en: "I stopped working.", pt: "Parei de trabalhar." },
        { en: "I stopped to drink water.", pt: "Parei para beber água." },
        { en: "They are interested in learning English.", pt: "Eles têm interesse em aprender inglês." }
      ],
      keyPoints: [
        "Identifique o verbo que vem antes do segundo verbo.",
        "Escolha TO + verbo ou verbo + ING corretamente.",
        "Utilize pelo menos quatro verbos que exigem infinitivo.",
        "Utilize pelo menos quatro verbos que exigem gerúndio.",
        "Inclua uma expressão com preposição + ING.",
        "Diferencie STOP DOING e STOP TO DO.",
        "Escreva um texto sobre interesses e objetivos.",
        "Revise a estrutura de cada construção."
      ]
    }
  ]
},

// ======================================================
// SEMANA 27 — CONDITIONALS
// ======================================================

{
  title: "Conditionals — Zero, First e Second Conditional",
  goal: "Compreender como construir frases condicionais em inglês, diferenciando fatos gerais, possibilidades reais no futuro e hipóteses imaginárias.",
  days: [
    {
      title: "Entendendo as Conditional Sentences",
      explanation: "Conditional Sentences são frases que apresentam uma condição e seu resultado. Normalmente, são formadas por duas partes: a IF CLAUSE, que apresenta a condição, e a MAIN CLAUSE, que apresenta o resultado. Por exemplo, IF IT RAINS, I WILL STAY HOME. A condição é chover, e o resultado é ficar em casa. A ordem das partes pode mudar: I WILL STAY HOME IF IT RAINS também está correto. Quando a frase começa com IF CLAUSE, normalmente utilizamos uma vírgula para separar as duas partes. Existem diferentes tipos de condicionais, utilizados de acordo com o significado desejado. Nesta semana, estudaremos Zero, First e Second Conditional, que representam fatos gerais, possibilidades reais e hipóteses imaginárias.",
      examples: [
        { en: "If it rains, I will stay home.", pt: "Se chover, ficarei em casa." },
        { en: "I will call you if I have time.", pt: "Vou ligar para você se tiver tempo." },
        { en: "If you study, you learn.", pt: "Se você estuda, aprende." },
        { en: "If I had more time, I would travel.", pt: "Se eu tivesse mais tempo, viajaria." },
        { en: "If she arrives early, we can start.", pt: "Se ela chegar cedo, podemos começar." },
        { en: "If they practice, they will improve.", pt: "Se eles praticarem, vão melhorar." },
        { en: "I would help you if I could.", pt: "Eu ajudaria você se pudesse." }
      ],
      keyPoints: [
        "Conditional Sentences apresentam condição e resultado.",
        "IF introduz uma condição.",
        "IF CLAUSE apresenta a condição.",
        "MAIN CLAUSE apresenta o resultado.",
        "A ordem das duas partes pode mudar.",
        "Utilize vírgula quando a IF CLAUSE aparece primeiro.",
        "O tipo de condicional depende do significado da frase."
      ]
    },
    {
      title: "Zero Conditional — Fatos e verdades gerais",
      explanation: "O Zero Conditional é utilizado para apresentar fatos gerais, regras, verdades científicas, hábitos e situações em que uma condição normalmente produz determinado resultado. Sua estrutura mais comum é IF + Present Simple, Present Simple. Por exemplo, IF YOU HEAT ICE, IT MELTS. A frase indica um fato geral: quando o gelo é aquecido, ele derrete. Não estamos falando de uma possibilidade específica no futuro, mas de uma relação que normalmente é verdadeira. Podemos utilizar WHEN no lugar de IF quando queremos destacar que a situação acontece sempre que determinada condição ocorre. A estrutura também aparece em regras e instruções, como IF YOU PRESS THIS BUTTON, THE COMPUTER STARTS.",
      examples: [
        { en: "If you heat ice, it melts.", pt: "Se você aquece gelo, ele derrete." },
        { en: "If water reaches 100°C at standard atmospheric pressure, it boils.", pt: "Se a água chega a 100°C sob pressão atmosférica padrão, ela ferve." },
        { en: "If you don't eat, you get hungry.", pt: "Se você não come, fica com fome." },
        { en: "If people exercise regularly, they improve their fitness.", pt: "Se as pessoas se exercitam regularmente, melhoram seu condicionamento físico." },
        { en: "If you press this button, the machine starts.", pt: "Se você aperta este botão, a máquina começa a funcionar." },
        { en: "If the sun sets, it gets dark.", pt: "Se o sol se põe, escurece." },
        { en: "When I drink coffee at night, I have trouble sleeping.", pt: "Quando tomo café à noite, tenho dificuldade para dormir." }
      ],
      keyPoints: [
        "Estrutura: IF + Present Simple, Present Simple.",
        "Utilizado para fatos gerais e verdades.",
        "Pode apresentar regras e funcionamento de equipamentos.",
        "Não utiliza WILL na estrutura padrão.",
        "WHEN pode substituir IF em situações que acontecem regularmente.",
        "O resultado é apresentado como algo geral.",
        "Não confunda um fato geral com uma possibilidade futura específica."
      ]
    },
    {
      title: "First Conditional — Possibilidades reais no futuro",
      explanation: "O First Conditional é utilizado para falar sobre situações futuras que são possíveis ou realistas. Sua estrutura mais comum é IF + Present Simple, WILL + verbo na forma básica. Por exemplo, IF IT RAINS, I WILL STAY HOME. A chuva ainda não aconteceu, mas existe a possibilidade de acontecer, e a frase apresenta o que faremos nessa situação. É importante lembrar que normalmente não colocamos WILL logo depois de IF nesse padrão. Dizemos IF I HAVE TIME, I WILL HELP YOU, e não IF I WILL HAVE TIME. Na parte principal, também podemos utilizar outros modais, como CAN, MAY ou SHOULD, de acordo com o significado. A estrutura permite falar sobre planos condicionais, previsões e consequências futuras.",
      examples: [
        { en: "If it rains, I will stay home.", pt: "Se chover, ficarei em casa." },
        { en: "If I finish my homework, I will play soccer.", pt: "Se eu terminar minha tarefa, vou jogar futebol." },
        { en: "If she studies, she will pass the test.", pt: "Se ela estudar, vai passar na prova." },
        { en: "If we leave now, we will arrive early.", pt: "Se sairmos agora, chegaremos cedo." },
        { en: "If you practice, you can improve.", pt: "Se você praticar, poderá melhorar." },
        { en: "If they invite me, I may go.", pt: "Se eles me convidarem, talvez eu vá." },
        { en: "If you feel tired, you should rest.", pt: "Se você se sentir cansado, deveria descansar." }
      ],
      keyPoints: [
        "Estrutura comum: IF + Present Simple, WILL + verbo.",
        "Utilizado para possibilidades reais no futuro.",
        "Não utilize WILL normalmente depois de IF nesse padrão.",
        "O verbo depois de WILL permanece na forma básica.",
        "CAN pode indicar capacidade ou possibilidade.",
        "MAY pode indicar possibilidade.",
        "SHOULD pode indicar recomendação.",
        "A condição ainda não aconteceu, mas pode acontecer."
      ]
    },
    {
      title: "Second Conditional — Hipóteses imaginárias",
      explanation: "O Second Conditional é utilizado para falar sobre situações hipotéticas, imaginárias ou pouco prováveis no presente ou no futuro. Sua estrutura é IF + Past Simple, WOULD + verbo na forma básica. Por exemplo, IF I WON THE LOTTERY, I WOULD TRAVEL AROUND THE WORLD. A pessoa está imaginando uma situação, e não afirmando que realmente ganhou na loteria. Embora utilizemos o Past Simple na parte da condição, o significado geralmente se refere a uma hipótese presente ou futura. Com o verbo TO BE, a forma WERE é frequentemente utilizada em situações hipotéticas com todos os sujeitos, especialmente em contextos mais formais: IF I WERE YOU. Na conversa informal, WAS também aparece com I, HE, SHE e IT. Essa estrutura é muito útil para imaginar possibilidades, falar sobre sonhos e dar conselhos.",
      examples: [
        { en: "If I won the lottery, I would travel.", pt: "Se eu ganhasse na loteria, viajaria." },
        { en: "If I had more time, I would learn another language.", pt: "Se eu tivesse mais tempo, aprenderia outro idioma." },
        { en: "If she lived closer, we would visit her.", pt: "Se ela morasse mais perto, nós a visitaríamos." },
        { en: "If I were you, I would study more.", pt: "Se eu fosse você, estudaria mais." },
        { en: "If he knew the answer, he would tell us.", pt: "Se ele soubesse a resposta, nos contaria." },
        { en: "If we had a bigger house, we would have more space.", pt: "Se tivéssemos uma casa maior, teríamos mais espaço." },
        { en: "If they could choose, they would travel together.", pt: "Se pudessem escolher, viajariam juntos." }
      ],
      keyPoints: [
        "Estrutura: IF + Past Simple, WOULD + verbo.",
        "Utilizado para hipóteses imaginárias ou pouco prováveis.",
        "O Past Simple não indica necessariamente passado real.",
        "WOULD é seguido pela forma básica do verbo.",
        "IF I WERE YOU é uma estrutura muito comum.",
        "WAS também aparece em situações informais.",
        "É útil para sonhos, hipóteses e conselhos.",
        "Diferencie uma possibilidade real de uma situação imaginária."
      ]
    },
    {
      title: "Comparando Zero, First e Second Conditional",
      explanation: "Os três tipos de condicional possuem estruturas e significados diferentes. O Zero Conditional apresenta fatos gerais: IF YOU HEAT ICE, IT MELTS. O First Conditional apresenta uma possibilidade real no futuro: IF IT RAINS TOMORROW, I WILL STAY HOME. O Second Conditional apresenta uma hipótese imaginária ou pouco provável: IF I LIVED IN JAPAN, I WOULD SPEAK JAPANESE EVERY DAY. A melhor maneira de escolher é observar a intenção da frase. Estamos descrevendo uma regra que geralmente acontece? Zero Conditional. Estamos falando de algo que pode acontecer no futuro? First Conditional. Estamos imaginando uma situação diferente da realidade atual? Second Conditional. Não escolha o tempo verbal apenas pela presença de IF: observe o significado completo.",
      examples: [
        { en: "Zero: If you mix blue and yellow, you get green.", pt: "Zero: Se você mistura azul e amarelo, obtém verde." },
        { en: "First: If I have time tomorrow, I will call you.", pt: "First: Se eu tiver tempo amanhã, vou ligar para você." },
        { en: "Second: If I had more time, I would read more books.", pt: "Second: Se eu tivesse mais tempo, leria mais livros." },
        { en: "Zero: If people don't drink water, they get thirsty.", pt: "Zero: Se as pessoas não bebem água, ficam com sede." },
        { en: "First: If she arrives early, we will start the meeting.", pt: "First: Se ela chegar cedo, começaremos a reunião." },
        { en: "Second: If I were famous, I would travel around the world.", pt: "Second: Se eu fosse famoso, viajaria pelo mundo." },
        { en: "If I study tonight, I will feel more prepared tomorrow.", pt: "Se eu estudar hoje à noite, vou me sentir mais preparado amanhã." }
      ],
      keyPoints: [
        "ZERO: IF + Present Simple, Present Simple.",
        "FIRST: IF + Present Simple, WILL + verbo.",
        "SECOND: IF + Past Simple, WOULD + verbo.",
        "ZERO apresenta fatos gerais.",
        "FIRST apresenta possibilidades reais futuras.",
        "SECOND apresenta hipóteses imaginárias ou pouco prováveis.",
        "O significado determina a estrutura.",
        "Não coloque WILL automaticamente depois de IF."
      ]
    },
    {
      title: "Desafio — Condições, decisões e situações imaginárias",
      explanation: "O desafio final será construir frases condicionais para diferentes situações. O aluno deverá apresentar fatos gerais utilizando Zero Conditional, imaginar possibilidades reais para o futuro utilizando First Conditional e criar hipóteses utilizando Second Conditional. Depois, deverá participar de uma conversa simulada com perguntas como WHAT WILL YOU DO IF IT RAINS? e WHAT WOULD YOU DO IF YOU COULD LIVE ANYWHERE? Também deverá explicar por que escolheu cada estrutura. A atividade final será um pequeno texto que misture os três tipos de condicional, mantendo a coerência entre a situação apresentada e sua consequência.",
      examples: [
        {
          en: "If I have free time this weekend, I will work on my projects. If I finish everything early, I will meet my friends. If I had more free time every week, I would learn even more languages. I know that if I practice regularly, I improve. If I could choose any country to visit, I would go to Japan.",
          pt: "Se eu tiver tempo livre neste fim de semana, trabalharei nos meus projetos. Se terminar tudo cedo, encontrarei meus amigos. Se tivesse mais tempo livre todas as semanas, aprenderia ainda mais idiomas. Sei que, se pratico regularmente, melhoro. Se pudesse escolher qualquer país para visitar, iria ao Japão."
        },
        { en: "What will you do if it rains tomorrow?", pt: "O que você fará se chover amanhã?" },
        { en: "What would you do if you won the lottery?", pt: "O que você faria se ganhasse na loteria?" },
        { en: "What happens if you heat water?", pt: "O que acontece se você aquecer água?" },
        { en: "If you study every day, what will happen?", pt: "Se você estudar todos os dias, o que acontecerá?" },
        { en: "If you could learn any skill, what would you choose?", pt: "Se pudesse aprender qualquer habilidade, qual escolheria?" }
      ],
      keyPoints: [
        "Produza exemplos dos três tipos de condicional.",
        "Explique a diferença entre fato, possibilidade e hipótese.",
        "Responda perguntas sobre situações futuras.",
        "Crie hipóteses imaginárias.",
        "Utilize WILL no First Conditional.",
        "Utilize WOULD no Second Conditional.",
        "Não utilize WILL normalmente depois de IF no First Conditional.",
        "Escreva um texto que combine as três estruturas."
      ]
    }
  ]
},

// ======================================================
// SEMANA 28 — REVISÃO GERAL DA FASE 2
// ======================================================

{
  title: "Revisão Geral — Fase 2: Fluidez Funcional e Conexões",
  goal: "Consolidar os conteúdos das semanas 17 a 27, integrando conectores, phrasal verbs, tempos verbais avançados, voz passiva, discurso indireto, expressões idiomáticas, gerúndio, infinitivo e condicionais em situações reais de comunicação.",
  days: [
    {
      title: "Conectando ideias e construindo parágrafos",
      explanation: "Nesta primeira aula de revisão, o foco está em deixar de produzir apenas frases isoladas e começar a construir ideias conectadas. Vamos revisar AND, BUT, BECAUSE, SO, OR e ALTHOUGH. Cada conector apresenta uma relação diferente: AND adiciona informação, BUT apresenta contraste, BECAUSE explica uma causa, SO apresenta uma consequência, OR apresenta alternativas e ALTHOUGH apresenta contraste ou concessão. Também vamos recuperar o uso de phrasal verbs essenciais, como WAKE UP, GET UP, TURN ON, TURN OFF, LOOK FOR, FIND OUT, GIVE UP, HANG OUT, CATCH UP, RUN OUT OF, FIGURE OUT e DROP OFF. O objetivo é utilizar essas estruturas em um parágrafo natural, e não apenas em frases independentes.",
      examples: [
        { en: "I woke up early because I had an important meeting.", pt: "Acordei cedo porque tinha uma reunião importante." },
        { en: "I wanted to go out, but I had too much work.", pt: "Eu queria sair, mas tinha muito trabalho." },
        { en: "I finished my homework, so I went to play soccer.", pt: "Terminei minha tarefa, então fui jogar futebol." },
        { en: "We can watch a movie or play a game.", pt: "Podemos assistir a um filme ou jogar." },
        { en: "Although I was tired, I continued studying.", pt: "Embora estivesse cansado, continuei estudando." },
        { en: "I was looking for my phone, but I couldn't find it.", pt: "Estava procurando meu celular, mas não conseguia encontrá-lo." },
        { en: "We hung out yesterday and caught up on everything.", pt: "Saímos juntos ontem e colocamos a conversa em dia." },
        { en: "I ran out of time, so I couldn't finish the project.", pt: "Fiquei sem tempo, então não consegui terminar o projeto." }
      ],
      keyPoints: [
        "AND adiciona informações.",
        "BUT apresenta contraste.",
        "BECAUSE apresenta causa.",
        "SO apresenta consequência.",
        "OR apresenta alternativas.",
        "ALTHOUGH apresenta concessão ou contraste.",
        "Revise os phrasal verbs das semanas 18 e 19.",
        "Construa parágrafos com ideias conectadas.",
        "Evite repetir o mesmo conector em todas as frases."
      ]
    },
    {
      title: "Revisando os tempos verbais avançados",
      explanation: "Nesta aula, vamos revisar os tempos verbais trabalhados nas semanas 20, 21 e 22. O Present Perfect destaca experiências, resultados ou situações relacionadas ao presente. O Present Perfect Continuous destaca a duração ou o processo de uma atividade que começou no passado. O Past Perfect indica uma ação que aconteceu antes de outra referência passada. Compare I HAVE VISITED JAPAN, I HAVE BEEN STUDYING ENGLISH FOR TWO YEARS e I HAD FINISHED MY HOMEWORK BEFORE DINNER. Cada frase apresenta uma relação temporal diferente. Também vamos revisar ALREADY, YET, JUST, EVER e NEVER, além de FOR e SINCE. O objetivo é escolher o tempo verbal pela relação entre os acontecimentos, e não apenas pela tradução de uma palavra.",
      examples: [
        { en: "I have already finished my homework.", pt: "Já terminei minha tarefa." },
        { en: "Have you ever visited Japan?", pt: "Você já visitou o Japão alguma vez?" },
        { en: "I haven't finished the project yet.", pt: "Ainda não terminei o projeto." },
        { en: "She has just arrived.", pt: "Ela acabou de chegar." },
        { en: "I have never eaten sushi.", pt: "Nunca comi sushi." },
        { en: "I have been learning English for two years.", pt: "Estou aprendendo inglês há dois anos." },
        { en: "He has been working since Monday.", pt: "Ele está trabalhando desde segunda-feira." },
        { en: "I had left before she arrived.", pt: "Eu tinha saído antes de ela chegar." }
      ],
      keyPoints: [
        "Present Perfect: experiências e resultados relacionados ao presente.",
        "Present Perfect Continuous: duração e processo.",
        "Past Perfect: acontecimento anterior a outro momento passado.",
        "ALREADY indica que algo já aconteceu.",
        "YET é comum em negativas e perguntas.",
        "JUST indica algo que acabou de acontecer.",
        "EVER é utilizado frequentemente em perguntas sobre experiências.",
        "NEVER indica que algo nunca aconteceu.",
        "FOR indica duração; SINCE indica ponto inicial."
      ]
    },
    {
      title: "Voz passiva e discurso indireto",
      explanation: "Nesta aula, vamos revisar duas estruturas que mudam a maneira como apresentamos informações. A Passive Voice destaca o objeto ou elemento que recebe uma ação. Sua estrutura depende do tempo verbal e utiliza uma forma do verbo TO BE acompanhada do past participle. Já o Reported Speech permite transmitir o que outra pessoa disse sem reproduzir exatamente suas palavras. Quando utilizamos um verbo introdutório no passado, frequentemente precisamos ajustar os tempos verbais, os pronomes e as expressões temporais. Também vamos revisar perguntas indiretas e pedidos relatados. O objetivo é conseguir descrever acontecimentos e transmitir informações recebidas em conversas ou notícias.",
      examples: [
        { en: "People speak English in many countries.", pt: "As pessoas falam inglês em muitos países." },
        { en: "English is spoken in many countries.", pt: "O inglês é falado em muitos países." },
        { en: "Someone stole my bicycle yesterday.", pt: "Alguém roubou minha bicicleta ontem." },
        { en: "My bicycle was stolen yesterday.", pt: "Minha bicicleta foi roubada ontem." },
        { en: "He said, 'I am tired.'", pt: "Ele disse: 'Estou cansado.'" },
        { en: "He said that he was tired.", pt: "Ele disse que estava cansado." },
        { en: "She asked, 'Where do you live?'", pt: "Ela perguntou: 'Onde você mora?'" },
        { en: "She asked where I lived.", pt: "Ela perguntou onde eu morava." }
      ],
      keyPoints: [
        "Passive Voice destaca quem ou o que recebe a ação.",
        "Passive Voice utiliza TO BE + past participle.",
        "O tempo verbal é indicado pelo auxiliar.",
        "Reported Speech relata a fala de outra pessoa.",
        "Revise o backshift dos tempos verbais.",
        "Revise as mudanças de pronomes e expressões temporais.",
        "Perguntas indiretas utilizam ordem afirmativa.",
        "Diferencie SAY e TELL."
      ]
    },
    {
      title: "Idioms, Gerund e Infinitive",
      explanation: "Agora vamos revisar como interpretar expressões idiomáticas e escolher entre gerúndio e infinitivo. Idioms precisam ser compreendidos pelo contexto, pois sua tradução literal normalmente não corresponde ao significado real. PIECE OF CAKE significa algo muito fácil, ONCE IN A BLUE MOON significa muito raramente, COST AN ARM AND A LEG significa custar muito caro e HIT THE NAIL ON THE HEAD significa acertar em cheio. Também vamos recuperar os padrões de verbos seguidos por TO + verbo ou verbo + ING. WANT, NEED, PLAN e DECIDE normalmente utilizam infinitivo. ENJOY, FINISH, AVOID e SUGGEST normalmente utilizam gerúndio. Depois de preposições, geralmente utilizamos verbo + ING. O objetivo é reconhecer essas construções em conversas sem depender da tradução palavra por palavra.",
      examples: [
        { en: "The exam was a piece of cake.", pt: "A prova foi muito fácil." },
        { en: "That computer costs an arm and a leg.", pt: "Aquele computador custa uma fortuna." },
        { en: "I see my cousins once in a blue moon.", pt: "Vejo meus primos muito raramente." },
        { en: "You hit the nail on the head.", pt: "Você acertou em cheio." },
        { en: "I want to learn another language.", pt: "Quero aprender outro idioma." },
        { en: "I enjoy learning new things.", pt: "Gosto de aprender coisas novas." },
        { en: "She finished reading the book.", pt: "Ela terminou de ler o livro." },
        { en: "He is interested in learning English.", pt: "Ele tem interesse em aprender inglês." }
      ],
      keyPoints: [
        "Interprete idioms pelo contexto.",
        "PIECE OF CAKE = muito fácil.",
        "ONCE IN A BLUE MOON = muito raramente.",
        "COST AN ARM AND A LEG = custar muito caro.",
        "HIT THE NAIL ON THE HEAD = acertar em cheio.",
        "WANT, NEED e PLAN normalmente exigem infinitivo.",
        "ENJOY, FINISH e AVOID normalmente exigem gerúndio.",
        "Depois de preposições, normalmente utilizamos ING.",
        "STOP DOING e STOP TO DO possuem significados diferentes."
      ]
    },
    {
      title: "Conditionals e situações hipotéticas",
      explanation: "Nesta aula, vamos revisar os três tipos de condicionais estudados na semana 27. O Zero Conditional apresenta fatos gerais e utiliza Present Simple nas duas partes. O First Conditional apresenta possibilidades reais no futuro e utiliza Present Simple depois de IF e WILL na consequência. O Second Conditional apresenta hipóteses imaginárias ou pouco prováveis e utiliza Past Simple depois de IF e WOULD na consequência. Também vamos praticar respostas completas para perguntas sobre situações cotidianas e imaginárias. O objetivo é conseguir explicar o que acontece em determinada condição, o que faremos se algo acontecer e o que faríamos em uma situação diferente da realidade.",
      examples: [
        { en: "If you heat ice, it melts.", pt: "Se você aquece gelo, ele derrete." },
        { en: "If I have time tomorrow, I will study.", pt: "Se eu tiver tempo amanhã, estudarei." },
        { en: "If it rains, we will stay home.", pt: "Se chover, ficaremos em casa." },
        { en: "If I won the lottery, I would travel.", pt: "Se ganhasse na loteria, viajaria." },
        { en: "If I were you, I would accept the invitation.", pt: "Se eu fosse você, aceitaria o convite." },
        { en: "If she practices regularly, she improves.", pt: "Se ela pratica regularmente, melhora." },
        { en: "If they invite me, I may go.", pt: "Se eles me convidarem, talvez eu vá." },
        { en: "What would you do if you could travel anywhere?", pt: "O que você faria se pudesse viajar para qualquer lugar?" }
      ],
      keyPoints: [
        "Zero: IF + Present Simple, Present Simple.",
        "First: IF + Present Simple, WILL + verbo.",
        "Second: IF + Past Simple, WOULD + verbo.",
        "Zero apresenta fatos gerais.",
        "First apresenta possibilidades reais futuras.",
        "Second apresenta hipóteses imaginárias.",
        "Não utilize WILL normalmente depois de IF no First Conditional.",
        "WOULD é seguido pela forma básica do verbo.",
        "Responda às perguntas com frases completas."
      ]
    },
    {
      title: "Simulação final — Comunicação integrada",
      explanation: "Esta aula representa o encerramento da Fase 2. O aluno deverá participar de uma simulação de conversa que reúne os conteúdos estudados desde a semana 17. A atividade começa com uma conversa sobre rotina, estudos, projetos e experiências. Depois, o aluno deverá explicar uma situação passada utilizando Past Perfect, falar sobre atividades que realiza há algum tempo utilizando Present Perfect Continuous, relatar algo que outra pessoa disse utilizando Reported Speech e descrever um acontecimento utilizando Passive Voice. Na sequência, deverá responder perguntas hipotéticas utilizando Conditionals e expressar opiniões com conectores, phrasal verbs e idioms. O objetivo não é produzir frases perfeitas isoladamente, mas manter uma conversa coerente, compreensível e natural. Ao terminar, o aluno deverá escrever um texto que integre os conteúdos da fase.",
      examples: [
        {
          en: "A: What have you been working on recently? B: I have been working on a new project for a few weeks. A: Have you finished it yet? B: Not yet, but I have already completed the main part. A: What happened before you started? B: I had studied similar projects before, so I knew where to begin. A: What will you do if you finish early? B: If I finish early, I will start another project. A: And what would you do if you had unlimited time? B: I would learn more languages and travel around the world.",
          pt: "A: Em que você tem trabalhado recentemente? B: Tenho trabalhado em um projeto novo há algumas semanas. A: Já terminou? B: Ainda não, mas já completei a parte principal. A: O que aconteceu antes de começar? B: Eu tinha estudado projetos semelhantes antes, então sabia por onde começar. A: O que fará se terminar cedo? B: Se terminar cedo, começarei outro projeto. A: E o que faria se tivesse tempo ilimitado? B: Aprenderia mais idiomas e viajaria pelo mundo."
        },
        {
          en: "A: Why wasn't the event organized yesterday? B: It was postponed because the equipment hadn't arrived. A: Who told you that? B: The organizer said that the delivery had been delayed. A: That's unfortunate. B: Yes, but we will try again next week.",
          pt: "A: Por que o evento não foi organizado ontem? B: Ele foi adiado porque o equipamento não tinha chegado. A: Quem contou isso a você? B: O organizador disse que a entrega havia atrasado. A: Que pena. B: Sim, mas tentaremos novamente na próxima semana."
        },
        { en: "What have you been doing recently?", pt: "O que você tem feito recentemente?" },
        { en: "What had happened before the project started?", pt: "O que tinha acontecido antes de o projeto começar?" },
        { en: "What will you do if you have free time tomorrow?", pt: "O que fará se tiver tempo livre amanhã?" },
        { en: "What would you do if you could live anywhere?", pt: "O que faria se pudesse morar em qualquer lugar?" },
        { en: "What did the organizer say?", pt: "O que o organizador disse?" },
        { en: "Why was the event postponed?", pt: "Por que o evento foi adiado?" }
      ],
      keyPoints: [
        "Participe de uma conversa com respostas completas.",
        "Utilize conectores para ligar ideias.",
        "Utilize pelo menos dois phrasal verbs.",
        "Utilize Present Perfect ou Present Perfect Continuous.",
        "Utilize Past Perfect para explicar um acontecimento anterior.",
        "Utilize Passive Voice para descrever um acontecimento.",
        "Utilize Reported Speech para relatar uma informação.",
        "Utilize pelo menos uma expressão idiomática.",
        "Utilize Gerund e Infinitive corretamente.",
        "Responda perguntas com First e Second Conditional.",
        "Produza um texto integrando diferentes estruturas.",
        "Priorize clareza e comunicação, não apenas memorização."
      ]
    }
  ]
},


// ======================================================
// SEMANA 29 — THIRD CONDITIONAL E MIXED CONDITIONALS
// ======================================================

{
  title: "Third Conditional e Mixed Conditionals",
  goal: "Aprender a falar sobre situações hipotéticas do passado, imaginar resultados diferentes para acontecimentos que já ocorreram e relacionar condições passadas a consequências presentes.",
  days: [
    {
      title: "Third Conditional — Hipóteses sobre o passado",
      explanation: "O Third Conditional é utilizado para imaginar um passado diferente daquilo que realmente aconteceu. Ele permite falar sobre situações que não ocorreram e imaginar quais teriam sido suas consequências. Sua estrutura é IF + Past Perfect, WOULD HAVE + Past Participle. Por exemplo, IF I HAD STUDIED, I WOULD HAVE PASSED. A frase significa que eu não estudei o suficiente e não passei, mas estou imaginando um resultado diferente. O Past Perfect apresenta a condição hipotética no passado, enquanto WOULD HAVE + particípio apresenta o resultado imaginário. Essa estrutura é muito utilizada para falar sobre oportunidades perdidas, decisões anteriores, arrependimentos e acontecimentos alternativos.",
      examples: [
        { en: "If I had studied, I would have passed.", pt: "Se eu tivesse estudado, teria passado." },
        { en: "If she had arrived earlier, she would have seen us.", pt: "Se ela tivesse chegado mais cedo, teria nos visto." },
        { en: "If we had left earlier, we would have arrived on time.", pt: "Se tivéssemos saído mais cedo, teríamos chegado a tempo." },
        { en: "If he had listened, he would have understood.", pt: "Se ele tivesse escutado, teria entendido." },
        { en: "If they had practiced, they would have played better.", pt: "Se eles tivessem praticado, teriam jogado melhor." },
        { en: "If I had known about the meeting, I would have gone.", pt: "Se eu soubesse da reunião, teria ido." }
      ],
      keyPoints: [
        "Estrutura: IF + Past Perfect, WOULD HAVE + Past Participle.",
        "HAD é seguido pelo particípio passado.",
        "WOULD HAVE é seguido pelo particípio passado.",
        "Fala sobre hipóteses relacionadas ao passado.",
        "A situação imaginada não aconteceu.",
        "Pode expressar arrependimento ou resultados alternativos.",
        "Não confunda com First ou Second Conditional."
      ]
    },
    {
      title: "Formando frases negativas e perguntas",
      explanation: "O Third Conditional também pode ser utilizado em frases negativas e perguntas. Para negar a condição, utilizamos HAD NOT ou sua forma contraída HADN'T. Para negar o resultado, utilizamos WOULDN'T HAVE + Past Participle. Por exemplo, IF I HADN'T FORGOTTEN THE DOCUMENT, I WOULD HAVE COMPLETED THE REGISTRATION. Para fazer perguntas, podemos começar com WHAT WOULD HAVE HAPPENED IF...? ou WOULD YOU HAVE...? Essas perguntas permitem investigar resultados que poderiam ter acontecido em outras circunstâncias. É importante manter o Past Perfect na parte da condição e WOULD HAVE na parte do resultado, mesmo quando a frase muda de formato.",
      examples: [
        { en: "If I hadn't forgotten my keys, I wouldn't have returned home.", pt: "Se eu não tivesse esquecido minhas chaves, não teria voltado para casa." },
        { en: "If she hadn't missed the bus, she would have arrived earlier.", pt: "Se ela não tivesse perdido o ônibus, teria chegado mais cedo." },
        { en: "I wouldn't have made that mistake if I had checked the information.", pt: "Eu não teria cometido aquele erro se tivesse conferido a informação." },
        { en: "What would have happened if you had won?", pt: "O que teria acontecido se você tivesse vencido?" },
        { en: "Would you have accepted the invitation?", pt: "Você teria aceitado o convite?" },
        { en: "Why would they have changed their plans?", pt: "Por que eles teriam mudado seus planos?" }
      ],
      keyPoints: [
        "HAD NOT pode ser contraído para HADN'T.",
        "WOULD NOT HAVE pode ser contraído para WOULDN'T HAVE.",
        "A negativa pode aparecer na condição ou no resultado.",
        "WHAT WOULD HAVE HAPPENED IF...? pergunta sobre resultados alternativos.",
        "WOULD YOU HAVE...? forma perguntas sobre decisões hipotéticas.",
        "Mantenha o particípio depois de HAVE.",
        "A estrutura continua relacionada a um passado imaginário."
      ]
    },
    {
      title: "Mixed Conditional — Passado com consequência no presente",
      explanation: "Mixed Conditionals permitem combinar uma condição de um tempo com um resultado de outro. Um dos padrões mais importantes é utilizar uma condição hipotética no passado para explicar uma consequência no presente. A estrutura mais comum é IF + Past Perfect, WOULD + verbo na forma básica. Por exemplo, IF I HAD STUDIED MEDICINE, I WOULD BE A DOCTOR NOW. A condição pertence ao passado: eu não estudei medicina. O resultado pertence ao presente: atualmente não sou médico. Essa estrutura mostra como decisões e acontecimentos anteriores podem influenciar a situação atual. A expressão NOW pode ajudar a identificar que a consequência está relacionada ao presente, mas não é obrigatória.",
      examples: [
        { en: "If I had studied medicine, I would be a doctor now.", pt: "Se eu tivesse estudado medicina, seria médico agora." },
        { en: "If she had accepted the job, she would live in London now.", pt: "Se ela tivesse aceitado o emprego, moraria em Londres agora." },
        { en: "If we had bought that house, we would have more space today.", pt: "Se tivéssemos comprado aquela casa, teríamos mais espaço hoje." },
        { en: "If he had learned English, he would understand this conversation.", pt: "Se ele tivesse aprendido inglês, entenderia esta conversa." },
        { en: "If I had gone to bed earlier, I wouldn't be tired now.", pt: "Se eu tivesse ido dormir mais cedo, não estaria cansado agora." },
        { en: "If they had moved abroad, they would speak another language today.", pt: "Se eles tivessem se mudado para outro país, falariam outro idioma hoje." }
      ],
      keyPoints: [
        "Estrutura: IF + Past Perfect, WOULD + verbo.",
        "A condição está relacionada ao passado.",
        "A consequência está relacionada ao presente.",
        "O resultado imaginário não precisa ser um acontecimento passado.",
        "NOW e TODAY podem indicar a consequência presente.",
        "A estrutura explica como o passado influencia a situação atual.",
        "Não confunda com o Third Conditional tradicional."
      ]
    },
    {
      title: "Mixed Conditional — Presente com consequência no passado",
      explanation: "Existe outro padrão de Mixed Conditional que parte de uma característica ou situação geral do presente para imaginar uma consequência no passado. Sua estrutura comum é IF + Past Simple, WOULD HAVE + Past Participle. Por exemplo, IF I WERE MORE ORGANIZED, I WOULD HAVE FINISHED THE PROJECT YESTERDAY. A condição descreve uma característica hipotética atual: eu não sou tão organizado quanto gostaria. O resultado se refere ao passado: não teria terminado o projeto ontem. Essa estrutura pode ser utilizada quando uma característica relativamente estável, uma condição presente ou uma situação geral explica um resultado que não aconteceu anteriormente. É importante compreender o contexto para identificar qual parte da frase está relacionada ao presente e qual está relacionada ao passado.",
      examples: [
        { en: "If I were more organized, I would have finished the project yesterday.", pt: "Se eu fosse mais organizado, teria terminado o projeto ontem." },
        { en: "If she spoke English, she would have understood the presentation.", pt: "Se ela falasse inglês, teria entendido a apresentação." },
        { en: "If he were more careful, he wouldn't have made that mistake.", pt: "Se ele fosse mais cuidadoso, não teria cometido aquele erro." },
        { en: "If I knew how to drive, I would have taken you there.", pt: "Se eu soubesse dirigir, teria levado você até lá." },
        { en: "If they lived closer, they would have visited us last weekend.", pt: "Se eles morassem mais perto, teriam nos visitado no último fim de semana." }
      ],
      keyPoints: [
        "Estrutura: IF + Past Simple, WOULD HAVE + Past Participle.",
        "A condição representa uma situação presente ou geral.",
        "A consequência representa um resultado passado.",
        "WERE é frequentemente utilizado em hipóteses com TO BE.",
        "O contexto ajuda a identificar a relação temporal.",
        "Não confunda com o Second Conditional.",
        "Não confunda com o Third Conditional."
      ]
    },
    {
      title: "Comparando Third e Mixed Conditionals",
      explanation: "Agora vamos comparar as estruturas para entender quando cada uma deve ser utilizada. O Third Conditional apresenta uma condição passada e um resultado também passado. IF I HAD STUDIED, I WOULD HAVE PASSED: estudar e passar pertencem à situação hipotética passada. O Mixed Conditional pode apresentar uma condição passada com resultado presente: IF I HAD STUDIED MEDICINE, I WOULD BE A DOCTOR NOW. Também pode apresentar uma condição presente ou geral com resultado passado: IF I WERE MORE CAREFUL, I WOULDN'T HAVE MADE THAT MISTAKE. Para escolher corretamente, observe a linha do tempo dos acontecimentos. Pergunte a si mesmo: a condição pertence ao passado ou ao presente? E o resultado pertence a qual momento? Essa análise é mais importante do que decorar apenas a estrutura.",
      examples: [
        { en: "Third: If I had trained, I would have won the competition.", pt: "Third: Se eu tivesse treinado, teria vencido a competição." },
        { en: "Mixed: If I had trained, I would be stronger now.", pt: "Mixed: Se eu tivesse treinado, estaria mais forte agora." },
        { en: "Third: If she had called, I would have answered.", pt: "Third: Se ela tivesse ligado, eu teria atendido." },
        { en: "Mixed: If she were more confident, she would have spoken at the meeting.", pt: "Mixed: Se ela fosse mais confiante, teria falado na reunião." },
        { en: "Third: If they had left earlier, they would have caught the train.", pt: "Third: Se eles tivessem saído mais cedo, teriam pegado o trem." },
        { en: "Mixed: If they had left earlier, they would be here now.", pt: "Mixed: Se eles tivessem saído mais cedo, estariam aqui agora." }
      ],
      keyPoints: [
        "Third Conditional: passado + resultado passado.",
        "Mixed Conditional: condição e resultado pertencem a tempos diferentes.",
        "Past Perfect + WOULD HAVE: hipótese passada com resultado passado.",
        "Past Perfect + WOULD: hipótese passada com resultado presente.",
        "Past Simple + WOULD HAVE: condição presente ou geral com resultado passado.",
        "Observe os marcadores temporais.",
        "Entenda o significado antes de escolher a estrutura."
      ]
    },
    {
      title: "Desafio — Reescrevendo possibilidades do passado",
      explanation: "O desafio final consiste em analisar acontecimentos e imaginar resultados diferentes. O aluno receberá situações como perder uma oportunidade, esquecer um compromisso, tomar uma decisão ou não aprender determinada habilidade. Para cada situação, deverá construir uma frase com Third Conditional ou Mixed Conditional, justificando sua escolha. Depois, deverá responder perguntas como WHAT WOULD HAVE HAPPENED IF YOU HAD CHOSEN ANOTHER SCHOOL? e HOW WOULD YOUR LIFE BE DIFFERENT IF YOU HAD STARTED LEARNING ENGLISH EARLIER? A atividade termina com um pequeno texto sobre decisões passadas e como elas poderiam influenciar o presente. O objetivo é utilizar as estruturas de forma coerente e compreender as relações temporais.",
      examples: [
        { en: "If I had started earlier, I would have finished on time.", pt: "Se eu tivesse começado mais cedo, teria terminado a tempo." },
        { en: "If I had started earlier, I would be more experienced now.", pt: "Se eu tivesse começado mais cedo, teria mais experiência agora." },
        { en: "If I were more patient, I wouldn't have given up yesterday.", pt: "Se eu fosse mais paciente, não teria desistido ontem." },
        { en: "What would your life be like if you had chosen a different career?", pt: "Como seria sua vida se tivesse escolhido outra carreira?" },
        { en: "What would you have done if you had received the invitation?", pt: "O que você teria feito se tivesse recebido o convite?" }
      ],
      keyPoints: [
        "Identifique a relação temporal da condição.",
        "Identifique a relação temporal do resultado.",
        "Escolha entre Third e Mixed Conditional.",
        "Construa frases afirmativas e negativas.",
        "Responda perguntas sobre decisões passadas.",
        "Explique como uma escolha poderia influenciar o presente.",
        "Escreva um pequeno texto utilizando as estruturas."
      ]
    }
  ]
},

// ======================================================
// SEMANA 30 — RELATIVE CLAUSES
// ======================================================

{
  title: "Relative Clauses — Pronomes Relativos",
  goal: "Aprender a unir frases utilizando pronomes relativos, acrescentar informações sobre pessoas, objetos, lugares e relações de posse e produzir descrições mais naturais e completas.",
  days: [
    {
      title: "O que são Relative Clauses?",
      explanation: "Relative Clauses são estruturas utilizadas para acrescentar informações sobre uma pessoa, objeto, lugar ou situação sem precisar criar várias frases separadas. Observe: I MET A MAN. HE LIVES IN LONDON. Podemos unir as informações: I MET A MAN WHO LIVES IN LONDON. A palavra WHO conecta as duas ideias e evita a repetição do sujeito. As Relative Clauses podem identificar exatamente de quem ou do que estamos falando, ou apenas acrescentar uma informação complementar. Os pronomes relativos mais importantes são WHO, WHICH, THAT, WHOSE e WHERE. Cada um possui uma função específica. Nesta semana, aprenderemos a identificar essas funções e a construir frases progressivamente mais complexas.",
      examples: [
        { en: "I know a person who speaks Japanese.", pt: "Conheço uma pessoa que fala japonês." },
        { en: "This is the book that I bought yesterday.", pt: "Este é o livro que comprei ontem." },
        { en: "She has a dog which loves playing.", pt: "Ela tem um cachorro que adora brincar." },
        { en: "I visited a city where my grandparents lived.", pt: "Visitei uma cidade onde meus avós moravam." },
        { en: "That's the student whose project won the competition.", pt: "Aquele é o estudante cujo projeto venceu a competição." },
        { en: "The movie that we watched was interesting.", pt: "O filme que assistimos era interessante." }
      ],
      keyPoints: [
        "Relative Clauses acrescentam informações a uma frase.",
        "WHO é utilizado para pessoas.",
        "WHICH é utilizado para coisas e animais.",
        "THAT pode substituir WHO ou WHICH em muitas orações restritivas.",
        "WHOSE indica posse ou relação.",
        "WHERE indica lugar.",
        "As estruturas ajudam a evitar repetições.",
        "O pronome relativo conecta duas ideias."
      ]
    },
    {
      title: "WHO e WHICH — Pessoas e coisas",
      explanation: "WHO é o pronome relativo utilizado para acrescentar informações sobre pessoas. Por exemplo, THE WOMAN WHO WORKS HERE IS MY TEACHER. A oração WHO WORKS HERE explica qual mulher estamos mencionando. WHICH é utilizado para coisas e animais. Por exemplo, THE COMPUTER WHICH I BOUGHT IS VERY FAST. A oração WHICH I BOUGHT acrescenta uma informação sobre o computador. Em muitas situações, WHICH pode aparecer em orações restritivas, mas não é utilizado da mesma maneira que WHO para identificar pessoas. Quando o pronome relativo funciona como objeto da oração, ele pode ser omitido em determinadas estruturas restritivas: THE BOOK I READ WAS INTERESTING. Porém, quando funciona como sujeito, normalmente não pode ser omitido: THE PERSON WHO CALLED ME IS HERE.",
      examples: [
        { en: "The man who helped me was very kind.", pt: "O homem que me ajudou foi muito gentil." },
        { en: "The girl who lives next door is my friend.", pt: "A garota que mora ao lado é minha amiga." },
        { en: "The teacher who explained the lesson was patient.", pt: "O professor que explicou a aula foi paciente." },
        { en: "The phone which I bought is new.", pt: "O celular que comprei é novo." },
        { en: "The game which we played was difficult.", pt: "O jogo que jogamos era difícil." },
        { en: "The book I borrowed is interesting.", pt: "O livro que peguei emprestado é interessante." },
        { en: "The person who called you is waiting.", pt: "A pessoa que ligou para você está esperando." }
      ],
      keyPoints: [
        "WHO se refere a pessoas.",
        "WHICH se refere a coisas e animais.",
        "O pronome relativo pode funcionar como sujeito ou objeto.",
        "Quando funciona como sujeito, normalmente não pode ser omitido.",
        "Quando funciona como objeto em uma oração restritiva, pode ser omitido.",
        "A oração relativa identifica ou descreve o elemento mencionado.",
        "Observe qual função o pronome exerce na oração."
      ]
    },
    {
      title: "THAT — Um pronome relativo versátil",
      explanation: "THAT pode ser utilizado em muitas orações relativas restritivas para falar sobre pessoas, animais e coisas. Por exemplo, THE MOVIE THAT WE WATCHED WAS AMAZING e THE PERSON THAT HELPED ME WAS KIND. Nesses casos, THAT introduz uma informação necessária para identificar o elemento mencionado. Entretanto, THAT não pode ser utilizado em todas as situações. Ele não é utilizado em orações relativas não restritivas, que acrescentam informações extras entre vírgulas. Também não é utilizado imediatamente depois de uma preposição em construções formais como THE PERSON TO WHOM I SPOKE. Para esta etapa, o mais importante é reconhecer quando THAT pode substituir WHO ou WHICH e entender que ele não é uma substituição universal.",
      examples: [
        { en: "The song that I heard was beautiful.", pt: "A música que ouvi era bonita." },
        { en: "The person that called me is my cousin.", pt: "A pessoa que me ligou é meu primo." },
        { en: "The computer that we use is very old.", pt: "O computador que usamos é muito antigo." },
        { en: "This is the restaurant that everyone recommends.", pt: "Este é o restaurante que todos recomendam." },
        { en: "The project that she created was successful.", pt: "O projeto que ela criou foi bem-sucedido." },
        { en: "The dog that lives here is friendly.", pt: "O cachorro que mora aqui é amigável." },
        { en: "The book that changed my opinion is on the table.", pt: "O livro que mudou minha opinião está sobre a mesa." }
      ],
      keyPoints: [
        "THAT pode substituir WHO ou WHICH em muitas orações restritivas.",
        "THAT pode se referir a pessoas, animais e coisas.",
        "THAT não é utilizado em orações relativas não restritivas.",
        "Não utilize THAT imediatamente depois de uma preposição.",
        "A informação introduzida por THAT ajuda a identificar o elemento.",
        "Nem todo WHO ou WHICH pode ser substituído por THAT.",
        "Observe a pontuação e a função da oração."
      ]
    },
    {
      title: "WHOSE — Indicando posse",
      explanation: "WHOSE é utilizado para indicar posse ou uma relação entre uma pessoa e algo associado a ela. Em português, pode ser traduzido como cujo, cuja, cujos, cujas ou de quem, dependendo da frase. Por exemplo, THE STUDENT WHOSE PHONE WAS LOST IS MY FRIEND. A frase identifica o estudante por meio da informação de que seu celular foi perdido. WHOSE normalmente aparece antes do substantivo relacionado à pessoa ou ao elemento mencionado. Embora seja frequentemente utilizado para pessoas, também pode indicar posse relacionada a animais e, em certos contextos, coisas. Não confunda WHOSE com WHO'S: WHOSE indica posse, enquanto WHO'S é a contração de WHO IS ou WHO HAS.",
      examples: [
        { en: "I know a boy whose father is a doctor.", pt: "Conheço um garoto cujo pai é médico." },
        { en: "The woman whose car was stolen called the police.", pt: "A mulher cujo carro foi roubado chamou a polícia." },
        { en: "That's the student whose project won.", pt: "Aquele é o estudante cujo projeto venceu." },
        { en: "We met a writer whose books are famous.", pt: "Conhecemos um escritor cujos livros são famosos." },
        { en: "The dog whose owner lives here is friendly.", pt: "O cachorro cujo dono mora aqui é amigável." },
        { en: "Whose bag is this?", pt: "De quem é esta bolsa?" },
        { en: "Who's coming to the meeting?", pt: "Quem está vindo para a reunião?" }
      ],
      keyPoints: [
        "WHOSE indica posse ou relação.",
        "WHOSE normalmente vem antes de um substantivo.",
        "WHOSE pode se referir a pessoas e, em determinados contextos, animais e coisas.",
        "WHOSE não é igual a WHO'S.",
        "WHO'S significa WHO IS ou WHO HAS.",
        "A tradução depende da relação de posse apresentada.",
        "Observe o substantivo que aparece depois de WHOSE."
      ]
    },
    {
      title: "WHERE e orações relativas explicativas",
      explanation: "WHERE é utilizado para acrescentar informações sobre lugares. Por exemplo, THIS IS THE SCHOOL WHERE I STUDIED. A palavra WHERE introduz uma informação sobre o local. Em muitos casos, também podemos utilizar estruturas com WHICH ou THAT acompanhadas de uma preposição: THE SCHOOL THAT I STUDIED AT. Outra diferença importante está entre orações relativas restritivas e não restritivas. As restritivas identificam exatamente de quem ou do que estamos falando e não são separadas por vírgulas. As não restritivas acrescentam informações extras sobre algo que já está identificado e são separadas por vírgulas. Nesse segundo tipo, podemos utilizar WHO ou WHICH, mas não THAT. Essa distinção é importante para escrever textos mais claros e pontuados corretamente.",
      examples: [
        { en: "This is the city where I was born.", pt: "Esta é a cidade onde nasci." },
        { en: "That's the restaurant where we had dinner.", pt: "Aquele é o restaurante onde jantamos." },
        { en: "I visited the school where my mother studied.", pt: "Visitei a escola onde minha mãe estudou." },
        { en: "My brother, who lives in another city, is visiting us.", pt: "Meu irmão, que mora em outra cidade, está nos visitando." },
        { en: "The book, which was published last year, became popular.", pt: "O livro, que foi publicado no ano passado, tornou-se popular." },
        { en: "The house that has a blue door belongs to my uncle.", pt: "A casa que tem uma porta azul pertence ao meu tio." },
        { en: "The city where I live is growing.", pt: "A cidade onde moro está crescendo." }
      ],
      keyPoints: [
        "WHERE é utilizado para lugares.",
        "WHERE pode ser substituído por estruturas com WHICH ou THAT + preposição em certos contextos.",
        "Orações restritivas identificam o elemento.",
        "Orações não restritivas acrescentam informações extras.",
        "Orações não restritivas são separadas por vírgulas.",
        "WHO e WHICH podem introduzir orações não restritivas.",
        "THAT não é utilizado em orações não restritivas."
      ]
    },
    {
      title: "Desafio — Unindo frases e criando descrições",
      explanation: "Nesta aula, o aluno deverá transformar pares de frases simples em construções com Relative Clauses. Primeiro, identificará o elemento que aparece nas duas frases. Depois, escolherá o pronome relativo adequado e eliminará repetições desnecessárias. Em seguida, deverá descrever pessoas, objetos e lugares utilizando WHO, WHICH, THAT, WHOSE e WHERE. O desafio final será escrever um texto apresentando uma pessoa importante, um lugar especial e um objeto significativo. O texto deverá utilizar diferentes pronomes relativos e apresentar pontuação adequada. O objetivo é produzir frases mais naturais, organizadas e informativas.",
      examples: [
        { en: "I met a teacher. She speaks five languages. → I met a teacher who speaks five languages.", pt: "Conheci uma professora. Ela fala cinco idiomas. → Conheci uma professora que fala cinco idiomas." },
        { en: "I bought a computer. It has a fast processor. → I bought a computer that has a fast processor.", pt: "Comprei um computador. Ele tem um processador rápido. → Comprei um computador que tem um processador rápido." },
        { en: "I visited a city. My grandparents lived there. → I visited the city where my grandparents lived.", pt: "Visitei uma cidade. Meus avós moravam lá. → Visitei a cidade onde meus avós moravam." },
        { en: "I know a girl. Her brother is a musician. → I know a girl whose brother is a musician.", pt: "Conheço uma garota. O irmão dela é músico. → Conheço uma garota cujo irmão é músico." },
        { en: "The movie that we watched was excellent.", pt: "O filme que assistimos foi excelente." }
      ],
      keyPoints: [
        "Identifique informações repetidas nas frases.",
        "Escolha WHO para pessoas.",
        "Escolha WHICH para coisas e animais.",
        "Utilize THAT em orações restritivas apropriadas.",
        "Utilize WHOSE para indicar posse.",
        "Utilize WHERE para lugares.",
        "Diferencie orações restritivas e não restritivas.",
        "Escreva um texto utilizando pelo menos quatro tipos de pronome relativo."
      ]
    }
  ]
},

// ======================================================
// SEMANA 31 — INFORMAL ENGLISH E SLANG
// ======================================================

{
  title: "Informal English — Gírias e Expressões Naturais",
  goal: "Compreender reduções, expressões informais e formas comuns da fala cotidiana em inglês, reconhecendo a diferença entre inglês formal, informal e escrita não padrão.",
  days: [
    {
      title: "Formal English vs. Informal English",
      explanation: "O inglês utilizado em conversas cotidianas pode ser bastante diferente daquele encontrado em documentos, apresentações acadêmicas e e-mails profissionais. Na fala informal, as pessoas frequentemente utilizam contrações, reduções e expressões mais curtas. Por exemplo, WANT TO pode ser pronunciado e representado informalmente como WANNA em determinados contextos. GOING TO pode aparecer como GONNA, e GOT TO pode aparecer como GOTTA. Essas formas são comuns em conversas, músicas, vídeos e séries, mas não são apropriadas para todos os contextos. Em textos acadêmicos, documentos e comunicações profissionais, normalmente devemos preferir as formas completas e a gramática padrão. O objetivo não é abandonar o inglês formal, mas aprender a compreender diferentes registros da língua.",
      examples: [
        { en: "Formal: I am going to leave now.", pt: "Formal: Vou sair agora." },
        { en: "Informal: I'm gonna leave now.", pt: "Informal: Vou sair agora." },
        { en: "Formal: I want to talk to you.", pt: "Formal: Quero conversar com você." },
        { en: "Informal: I wanna talk to you.", pt: "Informal: Quero conversar com você." },
        { en: "Formal: I have got to go.", pt: "Formal: Preciso ir." },
        { en: "Informal: I gotta go.", pt: "Informal: Preciso ir." },
        { en: "Formal: I am very tired.", pt: "Formal: Estou muito cansado." },
        { en: "Informal: I'm really tired.", pt: "Informal: Estou muito cansado." }
      ],
      keyPoints: [
        "A fala informal utiliza reduções e contrações.",
        "GONNA corresponde informalmente a GOING TO em usos comuns de intenção futura.",
        "WANNA corresponde informalmente a WANT TO.",
        "GOTTA pode expressar necessidade ou obrigação informal.",
        "As formas informais não são adequadas para todos os textos.",
        "Aprenda a reconhecer essas formas antes de tentar utilizá-las.",
        "A comunicação profissional geralmente exige linguagem mais padrão."
      ]
    },
    {
      title: "GONNA, WANNA e GOTTA",
      explanation: "GONNA, WANNA e GOTTA estão entre as reduções mais reconhecidas da conversação informal. GONNA é uma forma informal de GOING TO e normalmente aparece antes de um verbo: I'M GONNA STUDY. WANNA representa WANT TO: I WANNA LEARN ENGLISH. GOTTA pode representar GOT TO em expressões de necessidade, como I'VE GOTTA GO. Também é importante perceber que essas formas não substituem automaticamente qualquer ocorrência das expressões originais. Por exemplo, quando GOING TO indica movimento em direção a um lugar, não utilizamos GONNA da mesma maneira: I'M GOING TO SCHOOL. A forma informal também costuma aparecer na pronúncia e em transcrições de diálogos, mas a escrita padrão continua sendo preferível em contextos formais.",
      examples: [
        { en: "I'm gonna call you later.", pt: "Vou ligar para você mais tarde." },
        { en: "We're gonna watch a movie.", pt: "Vamos assistir a um filme." },
        { en: "I wanna learn Japanese.", pt: "Quero aprender japonês." },
        { en: "Do you wanna come with us?", pt: "Você quer vir com a gente?" },
        { en: "I've gotta finish this project.", pt: "Preciso terminar este projeto." },
        { en: "You gotta be careful.", pt: "Você precisa ter cuidado." },
        { en: "I'm going to school now.", pt: "Estou indo para a escola agora." },
        { en: "I'm going to study tonight.", pt: "Vou estudar hoje à noite." }
      ],
      keyPoints: [
        "GONNA é uma redução informal de GOING TO em determinados usos.",
        "WANNA é uma redução informal de WANT TO.",
        "GOTTA aparece frequentemente em expressões de necessidade.",
        "GONNA normalmente aparece antes de um verbo.",
        "GOING TO também pode indicar movimento físico.",
        "Não utilize GONNA automaticamente em todos os contextos.",
        "Prefira as formas completas na escrita formal."
      ]
    },
    {
      title: "KINDA, SORT OF, LEMME e WHATCHA",
      explanation: "Outras expressões informais aparecem frequentemente em conversas rápidas. KINDA é uma redução de KIND OF e pode indicar algo aproximado, moderado ou parcialmente verdadeiro. SORT OF possui significado semelhante em muitos contextos. LEMME representa LET ME e aparece em expressões como LEMME SEE, que significa deixe-me ver. WHATCHA é uma representação informal de combinações como WHAT ARE YOU ou WHAT DO YOU, dependendo da frase e da pronúncia. Essas formas não seguem necessariamente uma única escrita padronizada e podem variar entre falantes e regiões. O mais importante é reconhecer o significado pelo contexto e não confundir essas reduções com a escrita formal.",
      examples: [
        { en: "I'm kinda tired.", pt: "Estou meio cansado." },
        { en: "This is kinda difficult.", pt: "Isso é meio difícil." },
        { en: "I'm sort of interested in that.", pt: "Estou mais ou menos interessado nisso." },
        { en: "Lemme see your project.", pt: "Deixa eu ver seu projeto." },
        { en: "Lemme think about it.", pt: "Deixa eu pensar sobre isso." },
        { en: "Whatcha doing?", pt: "O que você está fazendo?" },
        { en: "Whatcha gonna do tomorrow?", pt: "O que você vai fazer amanhã?" },
        { en: "What are you doing?", pt: "O que você está fazendo?" }
      ],
      keyPoints: [
        "KINDA é uma redução informal de KIND OF.",
        "SORT OF indica algo aproximado ou parcial.",
        "LEMME representa LET ME.",
        "WHATCHA pode representar diferentes combinações de palavras.",
        "O contexto ajuda a identificar o significado.",
        "As grafias informais não possuem padronização universal.",
        "Reconheça as formas reduzidas sem abandonar a escrita padrão."
      ]
    },
    {
      title: "Outras expressões da conversação cotidiana",
      explanation: "Além das reduções, o inglês informal utiliza expressões curtas para reagir, concordar, demonstrar surpresa ou iniciar uma conversa. WHAT'S UP? pode significar O QUE ESTÁ ACONTECENDO? ou funcionar como cumprimento informal. NO WAY! pode expressar surpresa ou incredulidade. MY BAD! é uma maneira informal de reconhecer um erro. FAIR ENOUGH significa que uma explicação ou opinião parece razoável. SOUNDS GOOD indica que algo parece uma boa ideia. A expressão YOU KNOW aparece frequentemente na fala como recurso conversacional, enquanto I MEAN pode introduzir uma explicação ou reformulação. Essas expressões dependem do tom e da situação, portanto é importante observar quem está falando e com quem está conversando.",
      examples: [
        { en: "Hey, what's up?", pt: "E aí, tudo bem?" },
        { en: "No way! That's amazing!", pt: "Não acredito! Isso é incrível!" },
        { en: "My bad! I forgot to call you.", pt: "Foi mal! Esqueci de ligar para você." },
        { en: "Fair enough. I understand your point.", pt: "Justo. Entendo seu ponto de vista." },
        { en: "Sounds good! Let's do it.", pt: "Parece ótimo! Vamos fazer isso." },
        { en: "I mean, we could try another way.", pt: "Quer dizer, poderíamos tentar de outra maneira." },
        { en: "You know, learning takes time.", pt: "Sabe, aprender leva tempo." },
        { en: "That's awesome!", pt: "Isso é incrível!" }
      ],
      keyPoints: [
        "WHAT'S UP? é um cumprimento informal ou pergunta sobre acontecimentos.",
        "NO WAY! expressa surpresa ou incredulidade.",
        "MY BAD! reconhece informalmente um erro.",
        "FAIR ENOUGH demonstra aceitação ou compreensão.",
        "SOUNDS GOOD demonstra aprovação.",
        "I MEAN pode introduzir uma explicação.",
        "YOU KNOW pode funcionar como expressão conversacional.",
        "O tom e o contexto influenciam o significado."
      ]
    },
    {
      title: "Entendendo inglês rápido em séries e vídeos",
      explanation: "Em séries, vídeos e conversas espontâneas, muitas palavras são pronunciadas de maneira conectada. Isso pode dificultar a compreensão mesmo quando o aluno conhece o vocabulário. As palavras não são necessariamente pronunciadas com pausas claras entre elas. Contrações, reduções e mudanças de ritmo fazem parte da fala natural. Para melhorar a compreensão, o aluno deve observar o contexto, identificar palavras importantes, reconhecer expressões recorrentes e perceber a intenção dos personagens. Uma boa atividade consiste em assistir a um trecho curto com áudio original e legendas em inglês, observar uma expressão desconhecida, tentar compreender seu significado pelo contexto e depois conferir a interpretação. Não é necessário compreender absolutamente todas as palavras para entender uma conversa.",
      examples: [
        { en: "What are you going to do?", pt: "O que você vai fazer?" },
        { en: "Whatcha gonna do?", pt: "O que você vai fazer? (fala muito informal)" },
        { en: "Do you want to come?", pt: "Você quer vir?" },
        { en: "D'you wanna come?", pt: "Você quer vir? (pronúncia reduzida)" },
        { en: "I have got to go.", pt: "Preciso ir." },
        { en: "I've gotta go.", pt: "Preciso ir. (forma informal)" },
        { en: "Let me know when you're ready.", pt: "Avise-me quando estiver pronto." },
        { en: "Lemme know when you're ready.", pt: "Me avise quando estiver pronto. (forma informal)" }
      ],
      keyPoints: [
        "A fala natural conecta palavras.",
        "As reduções podem dificultar a identificação das palavras.",
        "O contexto ajuda a compreender expressões desconhecidas.",
        "Observe a intenção e as reações dos personagens.",
        "Utilize trechos curtos para estudar.",
        "Legendas em inglês ajudam a conectar som e escrita.",
        "Não é necessário compreender todas as palavras para entender a mensagem.",
        "Repita trechos para perceber ritmo e pronúncia."
      ]
    },
    {
      title: "Desafio — Conversa informal simulada",
      explanation: "O desafio final será compreender e produzir um diálogo informal. O aluno deverá reconhecer expressões reduzidas, relacioná-las às suas formas completas e interpretar o significado de acordo com o contexto. Depois, participará de uma conversa simulada entre amigos sobre planos, atividades, estudos e acontecimentos recentes. A conversa deverá incluir pelo menos três reduções informais e três expressões conversacionais. Para concluir, o aluno deverá reescrever o diálogo em inglês padrão, demonstrando que consegue alternar entre os registros informal e formal. O objetivo é compreender a língua como ela aparece na vida cotidiana sem utilizar gírias inadequadamente em situações profissionais.",
      examples: [
        {
          en: "A: Hey! Whatcha doing? B: Nothing much. I'm kinda tired. A: Wanna watch a movie later? B: Sounds good! What are we gonna watch? A: I dunno. Lemme check. B: Fair enough. Just let me know.",
          pt: "A: E aí! O que você está fazendo? B: Nada demais. Estou meio cansado. A: Quer assistir a um filme mais tarde? B: Parece ótimo! O que vamos assistir? A: Não sei. Deixa eu conferir. B: Justo. Só me avise."
        },
        { en: "I'm gonna call you later.", pt: "Vou ligar para você mais tarde." },
        { en: "I want to discuss the project.", pt: "Quero discutir o projeto." },
        { en: "I wanna discuss the project.", pt: "Quero discutir o projeto. (informal)" },
        { en: "Let me check the information.", pt: "Deixe-me conferir a informação." },
        { en: "Lemme check the information.", pt: "Deixa eu conferir a informação. (informal)" }
      ],
      keyPoints: [
        "Identifique as formas completas das expressões reduzidas.",
        "Reconheça o significado pelo contexto.",
        "Utilize expressões informais em um diálogo apropriado.",
        "Diferencie linguagem informal e profissional.",
        "Reescreva o diálogo utilizando inglês padrão.",
        "Compreenda que pronúncia e escrita podem variar.",
        "Priorize a compreensão da mensagem."
      ]
    }
  ]
},

// ======================================================
// SEMANA 32 — EXPRESSANDO OPINIÕES E ARGUMENTANDO
// ======================================================

{
  title: "Opinions, Agreement and Disagreement",
  goal: "Aprender a apresentar opiniões, justificar argumentos, concordar e discordar educadamente, participar de discussões e responder a diferentes pontos de vista.",
  days: [
    {
      title: "Apresentando opiniões",
      explanation: "Em conversas, debates e discussões, é importante conseguir apresentar uma opinião de maneira clara. Existem várias expressões utilizadas para introduzir um ponto de vista. IN MY OPINION significa na minha opinião, FROM MY POINT OF VIEW significa do meu ponto de vista e AS FAR AS I'M CONCERNED significa no que me diz respeito. Também podemos utilizar I THINK, I BELIEVE e I FEEL para apresentar pensamentos e percepções. A escolha da expressão depende do nível de formalidade e da intenção da frase. Depois de apresentar a opinião, é importante explicar o motivo utilizando conectores como BECAUSE, SINCE ou AS. Uma opinião bem apresentada não precisa ser longa, mas deve ser compreensível e acompanhada de uma justificativa.",
      examples: [
        { en: "In my opinion, learning English is important.", pt: "Na minha opinião, aprender inglês é importante." },
        { en: "From my point of view, this solution is better.", pt: "Do meu ponto de vista, esta solução é melhor." },
        { en: "I believe technology can help students.", pt: "Acredito que a tecnologia pode ajudar os estudantes." },
        { en: "I think this project needs more time.", pt: "Acho que este projeto precisa de mais tempo." },
        { en: "As far as I'm concerned, education should be accessible to everyone.", pt: "No que me diz respeito, a educação deveria ser acessível a todos." },
        { en: "Personally, I prefer studying in the morning.", pt: "Pessoalmente, prefiro estudar de manhã." },
        { en: "I feel that this idea has potential.", pt: "Sinto que esta ideia tem potencial." }
      ],
      keyPoints: [
        "IN MY OPINION introduz uma opinião.",
        "FROM MY POINT OF VIEW apresenta um ponto de vista.",
        "I BELIEVE expressa uma crença ou opinião.",
        "I THINK apresenta um pensamento.",
        "PERSONALLY destaca uma preferência individual.",
        "Justifique sua opinião utilizando BECAUSE ou outros conectores.",
        "Diferencie opinião pessoal de informação comprovada."
      ]
    },
    {
      title: "Concordando com outras pessoas",
      explanation: "Concordar em inglês envolve mais do que responder YES. Podemos demonstrar concordância de diferentes maneiras, dependendo da intensidade e da formalidade. I AGREE significa concordo. I TOTALLY AGREE significa concordo totalmente. THAT'S A GOOD POINT reconhece que a outra pessoa apresentou um argumento interessante. YOU'RE RIGHT indica que a pessoa está certa. I SEE WHAT YOU MEAN demonstra que compreendemos o raciocínio apresentado. Também podemos acrescentar uma justificativa para mostrar por que concordamos. Em discussões educadas, reconhecer um argumento válido é uma habilidade importante, mesmo quando não concordamos com todas as ideias apresentadas.",
      examples: [
        { en: "I agree with you.", pt: "Concordo com você." },
        { en: "I totally agree with that idea.", pt: "Concordo totalmente com essa ideia." },
        { en: "That's a good point.", pt: "Esse é um bom argumento." },
        { en: "You're absolutely right.", pt: "Você está absolutamente certo." },
        { en: "I see what you mean.", pt: "Entendo o que você quer dizer." },
        { en: "I couldn't agree more.", pt: "Concordo plenamente." },
        { en: "That's exactly what I was thinking.", pt: "Era exatamente isso que eu estava pensando." }
      ],
      keyPoints: [
        "I AGREE expressa concordância.",
        "I TOTALLY AGREE intensifica a concordância.",
        "THAT'S A GOOD POINT reconhece um argumento.",
        "YOU'RE RIGHT indica que alguém está certo.",
        "I SEE WHAT YOU MEAN demonstra compreensão.",
        "I COULDN'T AGREE MORE expressa concordância intensa.",
        "Você pode concordar e acrescentar uma justificativa."
      ]
    },
    {
      title: "Discordando educadamente",
      explanation: "Discordar faz parte de qualquer discussão, mas é importante apresentar a diferença de opinião sem transformar a conversa em um conflito. I DISAGREE significa discordo, mas pode soar bastante direto dependendo do contexto. Para suavizar uma discordância, podemos utilizar I SEE YOUR POINT, BUT..., I'M NOT SURE I AGREE ou I HAVE A DIFFERENT OPINION. THAT'S DEBATABLE indica que determinado assunto pode ser discutido ou questionado. I UNDERSTAND YOUR ARGUMENT, HOWEVER... permite reconhecer a ideia da outra pessoa antes de apresentar uma objeção. A maneira como organizamos a frase ajuda a manter o respeito e a clareza durante uma discussão.",
      examples: [
        { en: "I see your point, but I disagree.", pt: "Entendo seu ponto de vista, mas discordo." },
        { en: "I'm not sure I agree with that.", pt: "Não tenho certeza se concordo com isso." },
        { en: "I have a different opinion.", pt: "Tenho uma opinião diferente." },
        { en: "That's debatable.", pt: "Isso é discutível." },
        { en: "I understand your argument; however, I see it differently.", pt: "Entendo seu argumento; entretanto, vejo a situação de outra maneira." },
        { en: "I respect your opinion, but I think there is another solution.", pt: "Respeito sua opinião, mas acho que existe outra solução." },
        { en: "I wouldn't say that exactly.", pt: "Eu não diria exatamente isso." }
      ],
      keyPoints: [
        "I DISAGREE expressa discordância direta.",
        "I SEE YOUR POINT reconhece o argumento do outro.",
        "I'M NOT SURE I AGREE suaviza a discordância.",
        "THAT'S DEBATABLE indica que algo pode ser questionado.",
        "HOWEVER introduz contraste.",
        "Apresente argumentos sem atacar a pessoa.",
        "Discordar de uma ideia não significa desrespeitar quem a apresentou."
      ]
    },
    {
      title: "Justificando argumentos e apresentando exemplos",
      explanation: "Uma discussão bem construída precisa de justificativas e exemplos. Para explicar uma causa, podemos utilizar BECAUSE, SINCE ou AS. Para acrescentar informações, utilizamos IN ADDITION e FURTHERMORE. Para apresentar consequências, podemos utilizar THEREFORE e AS A RESULT. Para dar exemplos, utilizamos FOR EXAMPLE e FOR INSTANCE. Também podemos apresentar contrastes utilizando HOWEVER e ON THE OTHER HAND. Essas expressões ajudam a organizar o raciocínio e tornam a comunicação mais clara. Em vez de dizer apenas I THINK ONLINE LEARNING IS GOOD, podemos explicar que oferece flexibilidade, apresentar um exemplo e reconhecer uma possível desvantagem.",
      examples: [
        { en: "I support this idea because it helps more people.", pt: "Apoio essa ideia porque ajuda mais pessoas." },
        { en: "Online learning is flexible. For example, students can study at different times.", pt: "O ensino on-line é flexível. Por exemplo, os estudantes podem estudar em horários diferentes." },
        { en: "The project is expensive. However, it could be useful.", pt: "O projeto é caro. Entretanto, poderia ser útil." },
        { en: "The system saves time. Therefore, it improves productivity.", pt: "O sistema economiza tempo. Portanto, melhora a produtividade." },
        { en: "In addition, it provides access to more information.", pt: "Além disso, oferece acesso a mais informações." },
        { en: "On the other hand, some people prefer traditional classes.", pt: "Por outro lado, algumas pessoas preferem aulas tradicionais." },
        { en: "As a result, the team decided to change its plan.", pt: "Como resultado, a equipe decidiu mudar seu plano." }
      ],
      keyPoints: [
        "BECAUSE, SINCE e AS podem apresentar causas.",
        "FOR EXAMPLE e FOR INSTANCE introduzem exemplos.",
        "HOWEVER apresenta contraste.",
        "THEREFORE apresenta consequência.",
        "AS A RESULT indica resultado.",
        "IN ADDITION e FURTHERMORE acrescentam informações.",
        "ON THE OTHER HAND apresenta outro lado de uma discussão.",
        "Organize os argumentos em uma sequência lógica."
      ]
    },
    {
      title: "Discussões, debates e respostas naturais",
      explanation: "Nesta aula, vamos utilizar as expressões estudadas em discussões mais completas. Uma conversa pode começar com uma pergunta sobre determinado assunto, seguida de opiniões diferentes, justificativas e respostas. Também é importante aprender a pedir esclarecimentos: WHAT DO YOU MEAN BY THAT? significa o que você quer dizer com isso? COULD YOU EXPLAIN THAT? significa você poderia explicar isso? WHAT MAKES YOU THINK THAT? pergunta qual é a razão de alguém pensar daquela maneira. Essas expressões ajudam a manter o diálogo e demonstram interesse pelo argumento apresentado. O objetivo é conseguir participar de uma discussão sem depender de respostas curtas e repetitivas.",
      examples: [
        { en: "What do you mean by that?", pt: "O que você quer dizer com isso?" },
        { en: "Could you explain your point?", pt: "Você poderia explicar seu ponto de vista?" },
        { en: "What makes you think that?", pt: "O que faz você pensar isso?" },
        { en: "I understand your argument, but I have another perspective.", pt: "Entendo seu argumento, mas tenho outra perspectiva." },
        { en: "That's an interesting question.", pt: "Essa é uma pergunta interessante." },
        { en: "I hadn't thought about it that way.", pt: "Eu não tinha pensado nisso dessa maneira." },
        { en: "Let's consider both sides of the problem.", pt: "Vamos considerar os dois lados do problema." }
      ],
      keyPoints: [
        "Faça perguntas para compreender melhor os argumentos.",
        "WHAT DO YOU MEAN BY THAT? pede esclarecimento.",
        "COULD YOU EXPLAIN...? solicita explicação.",
        "WHAT MAKES YOU THINK THAT? investiga a justificativa.",
        "Reconheça argumentos interessantes.",
        "Apresente uma perspectiva diferente com educação.",
        "Considere os diferentes lados de um assunto.",
        "Mantenha a conversa organizada."
      ]
    },
    {
      title: "Desafio — Debate simulado",
      explanation: "O desafio final será participar de um debate simulado sobre um tema cotidiano, como tecnologia na educação, jogos eletrônicos, transporte público, leitura ou ensino de idiomas. O aluno deverá apresentar uma opinião, justificar sua posição, concordar com pelo menos um argumento e discordar educadamente de outro. Também deverá utilizar conectores de argumentação e fazer perguntas para esclarecer ideias. Ao final, deverá escrever um pequeno parágrafo apresentando sua posição e reconhecendo pelo menos um argumento contrário. O objetivo é desenvolver autonomia para expressar opiniões em inglês de maneira clara e respeitosa.",
      examples: [
        {
          en: "A: I think technology makes education better because students can access more information. B: I see your point, but I believe technology can also distract students. A: That's true. However, it depends on how people use it. B: I totally agree. In my opinion, the best solution is to combine technology with traditional teaching.",
          pt: "A: Acho que a tecnologia melhora a educação porque os estudantes podem acessar mais informações. B: Entendo seu ponto, mas acredito que a tecnologia também pode distrair os estudantes. A: É verdade. Entretanto, depende de como as pessoas a utilizam. B: Concordo totalmente. Na minha opinião, a melhor solução é combinar tecnologia com ensino tradicional."
        },
        { en: "From my point of view, public transportation should be improved.", pt: "Do meu ponto de vista, o transporte público deveria ser melhorado." },
        { en: "I agree because it could reduce traffic.", pt: "Concordo porque poderia reduzir o trânsito." },
        { en: "I understand your point, but I have a different opinion.", pt: "Entendo seu ponto, mas tenho uma opinião diferente." },
        { en: "That's debatable. We should consider other factors.", pt: "Isso é discutível. Deveríamos considerar outros fatores." }
      ],
      keyPoints: [
        "Apresente uma opinião clara.",
        "Justifique sua posição.",
        "Utilize expressões de concordância.",
        "Utilize expressões de discordância educada.",
        "Apresente exemplos para sustentar argumentos.",
        "Faça perguntas para esclarecer ideias.",
        "Reconheça pelo menos um argumento contrário.",
        "Escreva um parágrafo com sua conclusão."
      ]
    }
  ]
},

// ======================================================
// SEMANA 33 — WORK, BUSINESS AND EMAILS
// ======================================================

{
  title: "English for Work — Negócios, Reuniões e E-mails",
  goal: "Desenvolver vocabulário e habilidades de comunicação em ambientes profissionais, compreender reuniões e chamadas de vídeo e escrever e-mails formais e informais.",
  days: [
    {
      title: "Vocabulário do ambiente profissional",
      explanation: "O inglês profissional utiliza vocabulário específico para falar sobre tarefas, responsabilidades, equipes, prazos e projetos. Algumas palavras essenciais são TASK, DEADLINE, MEETING, TEAM, MANAGER, COLLEAGUE, CLIENT, PROJECT e WORKPLACE. TASK significa tarefa, DEADLINE significa prazo final, MEETING significa reunião e COLLEAGUE significa colega de trabalho. Também é importante conhecer verbos utilizados no ambiente profissional, como MANAGE, ORGANIZE, DEVELOP, DISCUSS, PRESENT e COMPLETE. O objetivo desta aula é compreender esse vocabulário e utilizá-lo em frases relacionadas à organização de atividades e ao funcionamento de uma equipe.",
      examples: [
        { en: "I have an important meeting tomorrow.", pt: "Tenho uma reunião importante amanhã." },
        { en: "The deadline is next Friday.", pt: "O prazo final é na próxima sexta-feira." },
        { en: "Our team is working on a new project.", pt: "Nossa equipe está trabalhando em um novo projeto." },
        { en: "She is the project manager.", pt: "Ela é a gerente do projeto." },
        { en: "I need to complete this task.", pt: "Preciso concluir esta tarefa." },
        { en: "We discussed the new plan.", pt: "Discutimos o novo plano." },
        { en: "He presented the results to the team.", pt: "Ele apresentou os resultados à equipe." },
        { en: "The client requested some changes.", pt: "O cliente solicitou algumas mudanças." }
      ],
      keyPoints: [
        "TASK = tarefa.",
        "DEADLINE = prazo final.",
        "MEETING = reunião.",
        "TEAM = equipe.",
        "MANAGER = gerente.",
        "COLLEAGUE = colega de trabalho.",
        "CLIENT = cliente.",
        "PROJECT = projeto.",
        "WORKPLACE = ambiente de trabalho.",
        "Aprenda verbos utilizados em tarefas profissionais."
      ]
    },
    {
      title: "Reuniões e participação profissional",
      explanation: "Durante reuniões, é importante saber iniciar uma conversa, apresentar uma ideia, pedir a palavra, solicitar esclarecimentos e resumir decisões. Podemos utilizar expressões como LET'S GET STARTED para começar, SHALL WE MOVE ON? para avançar para outro assunto e COULD YOU CLARIFY THAT? para pedir esclarecimentos. Para apresentar uma ideia, podemos dizer I'D LIKE TO SUGGEST... ou I HAVE A PROPOSAL. Também é importante saber indicar concordância, apresentar dúvidas e confirmar decisões. Em reuniões profissionais, a comunicação deve ser objetiva, educada e organizada. O objetivo é participar de uma reunião sem depender apenas de frases decoradas.",
      examples: [
        { en: "Let's get started.", pt: "Vamos começar." },
        { en: "I'd like to suggest another solution.", pt: "Gostaria de sugerir outra solução." },
        { en: "Could you clarify that point?", pt: "Você poderia esclarecer esse ponto?" },
        { en: "I have a question about the deadline.", pt: "Tenho uma pergunta sobre o prazo." },
        { en: "I agree with the proposal.", pt: "Concordo com a proposta." },
        { en: "Let's move on to the next topic.", pt: "Vamos passar para o próximo assunto." },
        { en: "Could you repeat the last part?", pt: "Você poderia repetir a última parte?" },
        { en: "To summarize, we need to finish the project by Friday.", pt: "Resumindo, precisamos terminar o projeto até sexta-feira." }
      ],
      keyPoints: [
        "LET'S GET STARTED inicia uma reunião.",
        "I'D LIKE TO SUGGEST apresenta uma sugestão.",
        "COULD YOU CLARIFY THAT? pede esclarecimento.",
        "I HAVE A QUESTION apresenta uma dúvida.",
        "LET'S MOVE ON permite avançar para outro assunto.",
        "TO SUMMARIZE introduz um resumo.",
        "Utilize linguagem objetiva e educada.",
        "Confirme decisões e responsabilidades."
      ]
    },
    {
      title: "Chamadas de vídeo e comunicação digital",
      explanation: "Em chamadas de vídeo profissionais, podem ocorrer problemas de conexão, áudio, câmera e compartilhamento de tela. Por isso, é importante conhecer expressões específicas para resolver situações rapidamente. YOU'RE ON MUTE significa que seu microfone está desligado. CAN YOU HEAR ME? pergunta se a outra pessoa consegue ouvir. MY CONNECTION IS UNSTABLE indica que a conexão está instável. I'LL SHARE MY SCREEN informa que a pessoa compartilhará a tela. Também precisamos saber pedir para alguém repetir uma informação e avisar quando precisarmos sair da chamada. A comunicação digital exige clareza, educação e capacidade de resolver pequenos problemas sem interromper desnecessariamente a reunião.",
      examples: [
        { en: "Can you hear me clearly?", pt: "Você consegue me ouvir claramente?" },
        { en: "You're on mute.", pt: "Seu microfone está desligado." },
        { en: "My connection is unstable.", pt: "Minha conexão está instável." },
        { en: "I'll share my screen now.", pt: "Vou compartilhar minha tela agora." },
        { en: "Could you turn on your camera?", pt: "Você poderia ligar sua câmera?" },
        { en: "I think your audio is delayed.", pt: "Acho que seu áudio está atrasado." },
        { en: "Sorry, I lost connection for a moment.", pt: "Desculpe, perdi a conexão por um momento." },
        { en: "Could you send me the meeting link again?", pt: "Você poderia me enviar o link da reunião novamente?" }
      ],
      keyPoints: [
        "ON MUTE indica microfone desligado.",
        "CAN YOU HEAR ME? verifica o áudio.",
        "UNSTABLE CONNECTION indica conexão instável.",
        "SHARE MY SCREEN significa compartilhar a tela.",
        "TURN ON YOUR CAMERA significa ligar a câmera.",
        "LOST CONNECTION indica perda de conexão.",
        "Aprenda a solicitar repetição de informações.",
        "Utilize expressões educadas para resolver problemas."
      ]
    },
    {
      title: "E-mails profissionais — Estrutura e formalidade",
      explanation: "Um e-mail profissional precisa apresentar uma saudação apropriada, um objetivo claro, informações organizadas e um encerramento adequado. Em mensagens formais, podemos iniciar com DEAR MR. SMITH ou DEAR MS. BROWN, quando conhecemos o nome e a forma de tratamento apropriada. HELLO ou HI podem ser utilizados em comunicações menos formais, dependendo da relação entre as pessoas. Para apresentar o objetivo, podemos utilizar I AM WRITING TO... ou I WOULD LIKE TO... No encerramento, SINCERELY, KIND REGARDS e BEST REGARDS são opções comuns. Também devemos evitar gírias e abreviações excessivamente informais em mensagens profissionais. A organização é tão importante quanto a gramática.",
      examples: [
        { en: "Dear Ms. Brown,", pt: "Prezada Sra. Brown," },
        { en: "I am writing to ask for more information.", pt: "Estou escrevendo para solicitar mais informações." },
        { en: "I would like to schedule a meeting.", pt: "Gostaria de agendar uma reunião." },
        { en: "Could you please send me the document?", pt: "Você poderia, por favor, me enviar o documento?" },
        { en: "Thank you for your time.", pt: "Obrigado pelo seu tempo." },
        { en: "I look forward to your reply.", pt: "Aguardo sua resposta." },
        { en: "Kind regards,", pt: "Atenciosamente," },
        { en: "Best regards,", pt: "Atenciosamente," }
      ],
      keyPoints: [
        "Comece com uma saudação apropriada.",
        "Apresente o objetivo do e-mail logo no início.",
        "Utilize I AM WRITING TO para explicar o motivo.",
        "Utilize COULD YOU PLEASE para fazer pedidos educados.",
        "Organize as informações em parágrafos.",
        "Evite gírias em mensagens profissionais.",
        "SINCERELY e KIND REGARDS são encerramentos formais.",
        "Revise assunto, destinatário, gramática e clareza."
      ]
    },
    {
      title: "E-mails informais, networking e contatos",
      explanation: "Nem todo e-mail profissional precisa ser extremamente formal. Quando já existe uma relação com o destinatário, podemos utilizar uma linguagem mais direta e amigável. HI, HELLO e HOPE YOU'RE DOING WELL são formas comuns de iniciar mensagens. Para retomar contato, podemos utilizar IT'S BEEN A WHILE ou IT WAS GREAT MEETING YOU. NETWORKING é o processo de estabelecer e manter contatos profissionais, trocar conhecimentos e criar oportunidades de colaboração. Para apresentar alguém ou iniciar uma conversa profissional, podemos explicar nossa área de interesse e fazer perguntas sobre a experiência da outra pessoa. O objetivo é comunicar-se de maneira natural sem perder a educação e a clareza.",
      examples: [
        { en: "Hi Alex, hope you're doing well.", pt: "Oi, Alex. Espero que esteja tudo bem." },
        { en: "It was great meeting you yesterday.", pt: "Foi ótimo conhecer você ontem." },
        { en: "I wanted to follow up on our conversation.", pt: "Queria dar continuidade à nossa conversa." },
        { en: "I'd be happy to work together.", pt: "Ficaria feliz em trabalhar junto." },
        { en: "What kind of projects do you usually work on?", pt: "Com que tipo de projetos você costuma trabalhar?" },
        { en: "I'm interested in learning more about your work.", pt: "Tenho interesse em aprender mais sobre seu trabalho." },
        { en: "Let's keep in touch.", pt: "Vamos manter contato." },
        { en: "Thanks again for your help!", pt: "Obrigado novamente pela ajuda!" }
      ],
      keyPoints: [
        "A formalidade depende da relação com o destinatário.",
        "HOPE YOU'RE DOING WELL é uma abertura amigável.",
        "FOLLOW UP significa dar continuidade a um contato ou assunto.",
        "IT WAS GREAT MEETING YOU retoma um contato recente.",
        "NETWORKING envolve criar e manter contatos profissionais.",
        "Faça perguntas relevantes sobre a experiência das pessoas.",
        "LET'S KEEP IN TOUCH mantém o contato aberto.",
        "Seja amigável sem perder a clareza profissional."
      ]
    },
    {
      title: "Desafio — Reunião e e-mail completo",
      explanation: "O desafio final será simular uma situação profissional envolvendo uma reunião e uma mensagem escrita. Primeiro, o aluno participará de uma reunião simulada, apresentando uma ideia, fazendo uma pergunta e confirmando uma decisão. Depois, deverá escrever um e-mail formal solicitando informações sobre um projeto e outro e-mail mais informal para dar continuidade a um contato. As mensagens deverão possuir assunto, saudação, objetivo, informações principais e encerramento. Para finalizar, o aluno deverá explicar quais expressões utilizou e por que escolheu determinado nível de formalidade. O objetivo é desenvolver comunicação escrita e oral adequada a diferentes ambientes profissionais.",
      examples: [
        {
          en: "Subject: Project Update. Dear Team, I am writing to share an update on our project. We have completed the first stage, but we still need to review the final documents. Could you please send your feedback by Thursday? Thank you for your time. Kind regards, Alex.",
          pt: "Assunto: Atualização do projeto. Prezada equipe, estou escrevendo para compartilhar uma atualização sobre nosso projeto. Concluímos a primeira etapa, mas ainda precisamos revisar os documentos finais. Vocês poderiam enviar suas opiniões até quinta-feira? Obrigado pelo tempo de vocês. Atenciosamente, Alex."
        },
        {
          en: "Hi Jordan, it was great meeting you yesterday. I enjoyed our conversation about technology and education. I'd love to keep in touch and learn more about your projects. Best, Alex.",
          pt: "Oi, Jordan. Foi ótimo conhecer você ontem. Gostei da nossa conversa sobre tecnologia e educação. Gostaria de manter contato e aprender mais sobre seus projetos. Abraços, Alex."
        },
        { en: "Could you please confirm the meeting time?", pt: "Você poderia confirmar o horário da reunião?" },
        { en: "To summarize, we will review the documents tomorrow.", pt: "Resumindo, revisaremos os documentos amanhã." }
      ],
      keyPoints: [
        "Participe de uma reunião simulada.",
        "Apresente uma sugestão profissional.",
        "Faça perguntas e solicite esclarecimentos.",
        "Escreva um e-mail formal completo.",
        "Escreva um e-mail informal de acompanhamento.",
        "Utilize saudações e encerramentos apropriados.",
        "Organize as informações de maneira clara.",
        "Diferencie os níveis de formalidade."
      ]
    }
  ]
},

// ======================================================
// SEMANA 34 — TRAVEL AND EMERGENCY SITUATIONS
// ======================================================

{
  title: "Travel English — Viagens e Situações de Emergência",
  goal: "Desenvolver autonomia para utilizar inglês em aeroportos, hotéis, imigração, transporte e situações inesperadas, sabendo explicar problemas e solicitar assistência.",
  days: [
    {
      title: "Aeroportos e check-in",
      explanation: "Em viagens internacionais, o inglês aparece em diferentes etapas do aeroporto. É importante conhecer palavras como FLIGHT, BOARDING PASS, CHECK-IN, GATE, DEPARTURE, ARRIVAL, LUGGAGE e PASSPORT. FLIGHT significa voo, BOARDING PASS significa cartão de embarque, GATE significa portão de embarque e LUGGAGE significa bagagem. Durante o check-in, podemos precisar confirmar nosso destino, apresentar documentos e perguntar sobre horários. Também devemos compreender anúncios sobre embarque, atrasos e mudanças de portão. O objetivo desta aula é reconhecer o vocabulário essencial e conseguir realizar uma conversa simples no balcão da companhia aérea.",
      examples: [
        { en: "Where is the check-in counter?", pt: "Onde fica o balcão de check-in?" },
        { en: "Here is my passport.", pt: "Aqui está meu passaporte." },
        { en: "What time does boarding start?", pt: "Que horas começa o embarque?" },
        { en: "Where is gate number twelve?", pt: "Onde fica o portão número doze?" },
        { en: "Is this the flight to London?", pt: "Este é o voo para Londres?" },
        { en: "How many bags can I check in?", pt: "Quantas malas posso despachar?" },
        { en: "Has the flight been delayed?", pt: "O voo foi atrasado?" },
        { en: "Where can I collect my luggage?", pt: "Onde posso retirar minha bagagem?" }
      ],
      keyPoints: [
        "FLIGHT = voo.",
        "BOARDING PASS = cartão de embarque.",
        "CHECK-IN = procedimento de registro para o voo.",
        "GATE = portão de embarque.",
        "DEPARTURE = partida.",
        "ARRIVAL = chegada.",
        "LUGGAGE = bagagem.",
        "PASSPORT = passaporte.",
        "Aprenda a perguntar sobre horários e portões."
      ]
    },
    {
      title: "Imigração e alfândega",
      explanation: "Ao entrar em outro país, viajantes podem precisar responder perguntas de autoridades de imigração e alfândega. É importante compreender perguntas sobre o motivo da viagem, duração da estadia, endereço de hospedagem e passagem de retorno. Expressões como I AM HERE FOR TOURISM, I WILL STAY FOR TWO WEEKS e I AM STAYING AT A HOTEL ajudam a explicar os planos. Também é necessário compreender que imigração e alfândega possuem funções diferentes: a imigração verifica questões relacionadas à entrada e permanência de pessoas, enquanto a alfândega trata de bens e itens sujeitos às regras de entrada no país. As respostas devem ser verdadeiras, claras e compatíveis com os documentos apresentados. As regras específicas dependem do país visitado.",
      examples: [
        { en: "What is the purpose of your visit?", pt: "Qual é o motivo da sua visita?" },
        { en: "I'm here for tourism.", pt: "Estou aqui a turismo." },
        { en: "How long are you staying?", pt: "Por quanto tempo você ficará?" },
        { en: "I'm staying for two weeks.", pt: "Ficarei por duas semanas." },
        { en: "Where are you staying?", pt: "Onde você ficará hospedado?" },
        { en: "I'm staying at a hotel near the city center.", pt: "Ficarei em um hotel perto do centro da cidade." },
        { en: "Do you have a return ticket?", pt: "Você tem uma passagem de volta?" },
        { en: "Do you have anything to declare?", pt: "Você tem algo a declarar?" }
      ],
      keyPoints: [
        "PURPOSE OF YOUR VISIT pergunta o motivo da viagem.",
        "HOW LONG pergunta a duração da estadia.",
        "WHERE ARE YOU STAYING pergunta sobre hospedagem.",
        "RETURN TICKET significa passagem de volta.",
        "TOURISM significa turismo.",
        "CUSTOMS significa alfândega.",
        "Responda de maneira verdadeira e objetiva.",
        "As exigências de entrada variam conforme o país."
      ]
    },
    {
      title: "Hotéis, hospedagem e transporte",
      explanation: "Ao chegar ao hotel, precisamos conseguir confirmar uma reserva, perguntar sobre horários, explicar problemas e solicitar serviços. As palavras RESERVATION, ROOM, RECEPTION, CHECK-IN TIME, CHECK-OUT TIME e KEY CARD são bastante comuns. Também é importante saber pedir informações sobre transporte público, táxis, estações e direções. Podemos utilizar COULD YOU CALL A TAXI? para solicitar um táxi e HOW CAN I GET TO THE TRAIN STATION? para perguntar como chegar à estação. A aula também trabalha situações em que a reserva não foi encontrada, o quarto apresenta algum problema ou precisamos solicitar uma informação adicional.",
      examples: [
        { en: "I have a reservation under the name Silva.", pt: "Tenho uma reserva no nome Silva." },
        { en: "What time is check-out?", pt: "Que horas é o check-out?" },
        { en: "Could I have another room key?", pt: "Poderia me dar outra chave do quarto?" },
        { en: "The air conditioning isn't working.", pt: "O ar-condicionado não está funcionando." },
        { en: "Could you recommend a nearby restaurant?", pt: "Você poderia recomendar um restaurante próximo?" },
        { en: "How can I get to the train station?", pt: "Como posso chegar à estação de trem?" },
        { en: "Could you call a taxi for me?", pt: "Você poderia chamar um táxi para mim?" },
        { en: "Is breakfast included?", pt: "O café da manhã está incluído?" }
      ],
      keyPoints: [
        "RESERVATION = reserva.",
        "RECEPTION = recepção.",
        "ROOM = quarto.",
        "CHECK-OUT TIME = horário de saída.",
        "KEY CARD = cartão de acesso.",
        "IS BREAKFAST INCLUDED? pergunta se o café está incluído.",
        "COULD YOU CALL A TAXI? solicita transporte.",
        "Explique problemas de hospedagem de maneira clara."
      ]
    },
    {
      title: "Problemas de viagem e voos cancelados",
      explanation: "Nem toda viagem acontece conforme o planejado. Um voo pode atrasar ou ser cancelado, uma mala pode não aparecer ou uma reserva pode apresentar problemas. Para essas situações, precisamos conhecer palavras como CANCELLED, DELAYED, REFUND, REBOOKING, LOST LUGGAGE e CUSTOMER SERVICE. Podemos perguntar quais são as opções disponíveis, solicitar informações sobre uma nova reserva e pedir esclarecimentos sobre os próximos passos. É importante explicar o problema com informações específicas, como número do voo, horário e destino. Também devemos compreender que direitos e procedimentos de reembolso variam conforme a companhia, o país e as regras aplicáveis.",
      examples: [
        { en: "My flight has been cancelled.", pt: "Meu voo foi cancelado." },
        { en: "Why was the flight cancelled?", pt: "Por que o voo foi cancelado?" },
        { en: "Can I book another flight?", pt: "Posso reservar outro voo?" },
        { en: "What are my options?", pt: "Quais são minhas opções?" },
        { en: "My luggage hasn't arrived.", pt: "Minha bagagem não chegou." },
        { en: "Where can I report missing luggage?", pt: "Onde posso informar o desaparecimento da bagagem?" },
        { en: "Could you explain the refund process?", pt: "Você poderia explicar o processo de reembolso?" },
        { en: "I need assistance with my reservation.", pt: "Preciso de ajuda com minha reserva." }
      ],
      keyPoints: [
        "CANCELLED = cancelado.",
        "DELAYED = atrasado.",
        "REFUND = reembolso.",
        "REBOOKING = nova reserva ou remarcação.",
        "LOST LUGGAGE = bagagem perdida.",
        "CUSTOMER SERVICE = atendimento ao cliente.",
        "Explique o problema com informações específicas.",
        "Pergunte quais opções estão disponíveis.",
        "Os procedimentos dependem das regras aplicáveis."
      ]
    },
    {
      title: "Saúde, consultas e farmácias durante viagens",
      explanation: "Durante uma viagem, pode ser necessário explicar um problema de saúde e solicitar atendimento. É importante conhecer expressões para descrever sintomas de maneira simples, informar alergias e pedir ajuda. Podemos utilizar I HAVE A HEADACHE, I HAVE A FEVER e I FEEL SICK para comunicar sintomas. Em uma consulta, o profissional pode perguntar WHEN DID IT START? ou ARE YOU ALLERGIC TO ANYTHING? Em uma farmácia, podemos explicar o que estamos sentindo e pedir orientação ao farmacêutico. Situações urgentes devem ser comunicadas imediatamente aos serviços locais de emergência ou a um profissional de saúde. O objetivo desta aula é desenvolver vocabulário de comunicação, não ensinar autodiagnóstico ou substituição de atendimento profissional.",
      examples: [
        { en: "I don't feel well.", pt: "Não estou me sentindo bem." },
        { en: "I have a headache.", pt: "Estou com dor de cabeça." },
        { en: "I have a fever.", pt: "Estou com febre." },
        { en: "I need medical assistance.", pt: "Preciso de atendimento médico." },
        { en: "Where is the nearest hospital?", pt: "Onde fica o hospital mais próximo?" },
        { en: "I'm allergic to this substance.", pt: "Sou alérgico a esta substância." },
        { en: "When did the symptoms start?", pt: "Quando os sintomas começaram?" },
        { en: "Could I speak to a pharmacist?", pt: "Poderia falar com um farmacêutico?" }
      ],
      keyPoints: [
        "I DON'T FEEL WELL comunica mal-estar.",
        "HEADACHE = dor de cabeça.",
        "FEVER = febre.",
        "MEDICAL ASSISTANCE = atendimento médico.",
        "HOSPITAL = hospital.",
        "ALLERGIC TO indica alergia a algo.",
        "PHARMACIST = farmacêutico.",
        "Informe sintomas e alergias com clareza.",
        "Procure atendimento profissional quando necessário."
      ]
    },
    {
      title: "Desafio — Simulação de uma viagem internacional",
      explanation: "O desafio final será realizar uma simulação completa de viagem internacional. O aluno deverá passar por uma sequência de situações: check-in, perguntas de imigração, localização do portão, chegada ao hotel, solicitação de transporte e resolução de um problema inesperado. Durante a simulação, deverá compreender perguntas, responder com frases completas, solicitar esclarecimentos e explicar problemas. Uma etapa adicional apresentará uma situação em que o aluno precisa solicitar atendimento médico durante a viagem. O objetivo é utilizar o inglês como ferramenta para resolver situações cotidianas, sem depender de traduções palavra por palavra.",
      examples: [
        {
          en: "Traveler: Excuse me, my flight has been cancelled. Agent: I'm sorry to hear that. Let me check the available options. Traveler: Could you book another flight for me? Agent: Certainly. There is another flight tomorrow morning. Traveler: What time does it depart? Agent: It departs at 9 a.m. Traveler: Thank you for your help.",
          pt: "Viajante: Com licença, meu voo foi cancelado. Atendente: Sinto muito por isso. Deixe-me verificar as opções disponíveis. Viajante: Você poderia reservar outro voo para mim? Atendente: Certamente. Há outro voo amanhã de manhã. Viajante: Que horas ele parte? Atendente: Parte às nove da manhã. Viajante: Obrigado pela ajuda."
        },
        {
          en: "Guest: I have a reservation, but I can't find my confirmation email. Receptionist: That's okay. Could I have your name, please? Guest: Yes, it's Silva. Receptionist: Thank you. Let me check the system.",
          pt: "Hóspede: Tenho uma reserva, mas não consigo encontrar meu e-mail de confirmação. Recepcionista: Tudo bem. Poderia me informar seu nome? Hóspede: Sim, é Silva. Recepcionista: Obrigado. Deixe-me verificar o sistema."
        },
        { en: "I need medical assistance.", pt: "Preciso de atendimento médico." },
        { en: "Where can I find the nearest pharmacy?", pt: "Onde posso encontrar a farmácia mais próxima?" },
        { en: "Could you explain what I should do next?", pt: "Você poderia explicar o que devo fazer em seguida?" }
      ],
      keyPoints: [
        "Simule o check-in de um voo.",
        "Responda perguntas de imigração.",
        "Solicite informações sobre hospedagem.",
        "Explique um problema de transporte ou bagagem.",
        "Solicite esclarecimentos sobre opções disponíveis.",
        "Comunique um problema de saúde com clareza.",
        "Utilize perguntas educadas.",
        "Resolva as situações utilizando frases completas."
      ]
    }
  ]
},

// ======================================================
// SEMANA 35 — READING ARTICLES AND NEWS
// ======================================================

{
  title: "Reading Articles and News — Leitura de Notícias",
  goal: "Desenvolver autonomia na leitura de notícias e artigos em inglês, compreender a estrutura de textos jornalísticos, identificar informações principais e interpretar vocabulário político, econômico e cultural pelo contexto.",
  days: [
    {
      title: "Como ler notícias em inglês",
      explanation: "Ler notícias em inglês exige uma estratégia diferente de traduzir cada palavra individualmente. O primeiro passo é observar o título, o subtítulo, a data e o assunto principal. Em seguida, podemos identificar quem está envolvido, o que aconteceu, onde aconteceu, quando aconteceu e por que o acontecimento é importante. Notícias frequentemente apresentam as informações mais importantes logo no início e depois acrescentam detalhes, explicações e declarações. Essa organização ajuda o leitor a compreender o assunto mesmo quando encontra palavras desconhecidas. Também é importante diferenciar fatos apresentados pelo texto, declarações de pessoas entrevistadas e opiniões de quem escreve. Nesta semana, utilizaremos textos jornalísticos didáticos e aprenderemos estratégias para ler conteúdos reais com mais autonomia.",
      examples: [
        { en: "The government announced a new education program on Monday.", pt: "O governo anunciou um novo programa educacional na segunda-feira." },
        { en: "The city opened a new public library.", pt: "A cidade inaugurou uma nova biblioteca pública." },
        { en: "Thousands of people attended the event.", pt: "Milhares de pessoas participaram do evento." },
        { en: "The report explains how the project works.", pt: "O relatório explica como o projeto funciona." },
        { en: "According to the article, the changes will begin next year.", pt: "De acordo com o artigo, as mudanças começarão no próximo ano." },
        { en: "Local residents expressed concern about the decision.", pt: "Moradores locais expressaram preocupação com a decisão." }
      ],
      keyPoints: [
        "Observe o título e o subtítulo antes de ler o texto.",
        "Identifique o assunto principal.",
        "Procure quem, o quê, onde, quando e por quê.",
        "Leia primeiro para compreender a ideia geral.",
        "Não traduza automaticamente cada palavra desconhecida.",
        "Diferencie fatos, declarações e opiniões.",
        "Observe a organização do texto jornalístico."
      ]
    },
    {
      title: "Vocabulário político e governamental",
      explanation: "Notícias políticas utilizam palavras específicas para descrever governos, eleições, decisões públicas e instituições. GOVERNMENT significa governo, ELECTION significa eleição, VOTE significa voto ou votar, POLICY significa política pública ou diretriz, LAW significa lei e PRESIDENT significa presidente. Também encontramos expressões como PUBLIC SERVICES, que significa serviços públicos, e OFFICIAL STATEMENT, que significa declaração oficial. É importante observar que POLICY e POLITICS não possuem exatamente o mesmo significado. POLITICS está relacionado à política como atividade ou campo de atuação, enquanto POLICY normalmente se refere a uma política, diretriz ou conjunto de medidas. O objetivo é reconhecer essas palavras em textos jornalísticos e compreender o papel que exercem na notícia.",
      examples: [
        { en: "The government announced a new policy.", pt: "O governo anunciou uma nova política pública." },
        { en: "The election will take place next year.", pt: "A eleição acontecerá no próximo ano." },
        { en: "Citizens will vote for their representatives.", pt: "Os cidadãos votarão em seus representantes." },
        { en: "The new law was approved by parliament.", pt: "A nova lei foi aprovada pelo parlamento." },
        { en: "The president gave an official statement.", pt: "O presidente deu uma declaração oficial." },
        { en: "The report discusses public services.", pt: "O relatório discute serviços públicos." },
        { en: "The decision caused a political debate.", pt: "A decisão provocou um debate político." }
      ],
      keyPoints: [
        "GOVERNMENT = governo.",
        "ELECTION = eleição.",
        "VOTE = voto ou votar.",
        "POLICY = política pública ou diretriz.",
        "POLITICS = política como atividade ou campo.",
        "LAW = lei.",
        "PARLIAMENT = parlamento.",
        "OFFICIAL STATEMENT = declaração oficial.",
        "PUBLIC SERVICES = serviços públicos."
      ]
    },
    {
      title: "Vocabulário econômico e financeiro",
      explanation: "Notícias econômicas apresentam informações sobre preços, empregos, comércio, produção e funcionamento dos mercados. Algumas palavras essenciais são ECONOMY, INFLATION, PRICE, MARKET, TRADE, BUSINESS, EMPLOYMENT, UNEMPLOYMENT e INVESTMENT. ECONOMY significa economia, INFLATION significa inflação, PRICE significa preço e EMPLOYMENT significa emprego ou situação de emprego. Também aparecem verbos como INCREASE, DECREASE, GROW e FALL, utilizados para descrever mudanças em números e indicadores. Ao ler uma notícia econômica, é importante observar os valores apresentados, o período de comparação e a fonte da informação. Uma notícia que afirma que os preços aumentaram não necessariamente significa que todos os produtos tiveram o mesmo aumento. O objetivo é compreender o vocabulário e interpretar corretamente as informações.",
      examples: [
        { en: "Inflation increased last month.", pt: "A inflação aumentou no mês passado." },
        { en: "The price of food has decreased.", pt: "O preço dos alimentos diminuiu." },
        { en: "The economy grew during the year.", pt: "A economia cresceu durante o ano." },
        { en: "The company announced new investments.", pt: "A empresa anunciou novos investimentos." },
        { en: "Unemployment remains an important issue.", pt: "O desemprego continua sendo uma questão importante." },
        { en: "International trade increased this year.", pt: "O comércio internacional aumentou neste ano." },
        { en: "The market reacted to the announcement.", pt: "O mercado reagiu ao anúncio." },
        { en: "The report compares prices from different regions.", pt: "O relatório compara preços de diferentes regiões." }
      ],
      keyPoints: [
        "ECONOMY = economia.",
        "INFLATION = inflação.",
        "PRICE = preço.",
        "MARKET = mercado.",
        "TRADE = comércio.",
        "BUSINESS = negócio ou empresa, conforme o contexto.",
        "EMPLOYMENT = emprego ou situação de emprego.",
        "UNEMPLOYMENT = desemprego.",
        "INVESTMENT = investimento.",
        "INCREASE e GROW indicam crescimento.",
        "DECREASE e FALL indicam redução ou queda.",
        "Observe números, datas e períodos de comparação."
      ]
    },
    {
      title: "Vocabulário cultural e social",
      explanation: "Notícias culturais e sociais abordam educação, arte, comportamento, ciência, entretenimento, tradições e acontecimentos da sociedade. Para compreender esses textos, precisamos conhecer palavras como CULTURE, SOCIETY, COMMUNITY, EDUCATION, RESEARCH, TRADITION, EVENT, EXHIBITION e DISCOVERY. Também é importante reconhecer expressões como SOCIAL ISSUE, que significa questão social, e CULTURAL HERITAGE, que significa patrimônio cultural. Os textos podem apresentar opiniões de especialistas, declarações de moradores e resultados de pesquisas. O leitor deve observar quem está fornecendo cada informação e qual é o contexto. O objetivo é ampliar o vocabulário e conseguir compreender notícias sobre diferentes assuntos culturais e sociais.",
      examples: [
        { en: "The museum opened a new exhibition.", pt: "O museu abriu uma nova exposição." },
        { en: "The research focuses on education.", pt: "A pesquisa se concentra na educação." },
        { en: "The festival celebrates local traditions.", pt: "O festival celebra tradições locais." },
        { en: "The community organized a cultural event.", pt: "A comunidade organizou um evento cultural." },
        { en: "The discovery attracted international attention.", pt: "A descoberta atraiu atenção internacional." },
        { en: "The article discusses an important social issue.", pt: "O artigo discute uma questão social importante." },
        { en: "The project aims to protect cultural heritage.", pt: "O projeto pretende proteger o patrimônio cultural." },
        { en: "Researchers interviewed students from different schools.", pt: "Pesquisadores entrevistaram estudantes de diferentes escolas." }
      ],
      keyPoints: [
        "CULTURE = cultura.",
        "SOCIETY = sociedade.",
        "COMMUNITY = comunidade.",
        "EDUCATION = educação.",
        "RESEARCH = pesquisa.",
        "TRADITION = tradição.",
        "EXHIBITION = exposição.",
        "DISCOVERY = descoberta.",
        "SOCIAL ISSUE = questão social.",
        "CULTURAL HERITAGE = patrimônio cultural.",
        "Identifique quem apresenta cada informação."
      ]
    },
    {
      title: "Interpretação, contexto e leitura dinâmica",
      explanation: "Ao ler artigos e notícias, nem sempre precisamos compreender todas as palavras. Podemos utilizar pistas do próprio texto para deduzir significados. O título indica o assunto geral, o parágrafo apresenta informações principais e os conectores mostram relações entre as ideias. Palavras como HOWEVER indicam contraste, THEREFORE indica consequência, ALTHOUGH apresenta concessão e ACCORDING TO introduz uma informação atribuída a determinada fonte. Também devemos observar prefixos, sufixos, palavras semelhantes ao português e a função gramatical de uma palavra desconhecida. A leitura dinâmica não significa ler sem atenção, mas selecionar informações de acordo com o objetivo. Podemos ler rapidamente para descobrir o assunto geral e depois retornar aos trechos importantes para compreender detalhes.",
      examples: [
        { en: "The project was expensive. However, it was successful.", pt: "O projeto foi caro. Entretanto, foi bem-sucedido." },
        { en: "The company increased production. Therefore, it hired more workers.", pt: "A empresa aumentou a produção. Portanto, contratou mais trabalhadores." },
        { en: "Although the weather was difficult, the event continued.", pt: "Embora o clima estivesse difícil, o evento continuou." },
        { en: "According to the report, unemployment decreased.", pt: "De acordo com o relatório, o desemprego diminuiu." },
        { en: "The discovery may change future research.", pt: "A descoberta pode mudar pesquisas futuras." },
        { en: "The new policy could affect several communities.", pt: "A nova política poderia afetar várias comunidades." },
        { en: "Despite the challenges, the project was completed.", pt: "Apesar dos desafios, o projeto foi concluído." }
      ],
      keyPoints: [
        "Utilize o contexto para deduzir palavras desconhecidas.",
        "HOWEVER indica contraste.",
        "THEREFORE indica consequência.",
        "ALTHOUGH apresenta concessão.",
        "ACCORDING TO identifica a fonte de uma informação.",
        "DESPITE também apresenta contraste ou concessão.",
        "Observe prefixos e sufixos.",
        "Faça uma primeira leitura para compreender o assunto geral.",
        "Retorne aos trechos importantes para localizar detalhes.",
        "Não confunda leitura dinâmica com leitura superficial."
      ]
    },
    {
      title: "Desafio — Analisando uma notícia em inglês",
      explanation: "O desafio final será interpretar uma notícia didática em inglês, utilizando as estratégias aprendidas durante a semana. Primeiro, o aluno deverá identificar o assunto, os personagens envolvidos, o local e o acontecimento principal. Depois, deverá localizar informações específicas, interpretar palavras pelo contexto e reconhecer conectores que organizam o texto. Também deverá distinguir informações apresentadas como fatos de opiniões atribuídas a pessoas entrevistadas. Para concluir, deverá produzir um pequeno resumo em inglês com suas próprias palavras. Como atividade complementar, poderá escolher uma notícia atual de um portal jornalístico confiável, como BBC, CNN ou The Guardian, e aplicar o mesmo método de leitura. O objetivo é desenvolver autonomia para ler conteúdo real sem depender de uma tradução completa.",
      examples: [
        {
          en: "A New Community Library Opens in the City. A new public library opened in the city on Monday. The building offers free access to books, computers and study rooms. According to the local government, the project aims to improve access to education. Several residents attended the opening event. One local teacher said that the library would provide students with a better place to study. The project is part of a larger plan to improve public services.",
          pt: "Uma Nova Biblioteca Comunitária Abre na Cidade. Uma nova biblioteca pública abriu na cidade na segunda-feira. O edifício oferece acesso gratuito a livros, computadores e salas de estudo. De acordo com o governo local, o projeto pretende melhorar o acesso à educação. Vários moradores participaram da inauguração. Um professor local disse que a biblioteca ofereceria aos estudantes um lugar melhor para estudar. O projeto faz parte de um plano maior para melhorar os serviços públicos."
        },
        { en: "What opened in the city?", pt: "O que foi inaugurado na cidade?" },
        { en: "When did the opening take place?", pt: "Quando aconteceu a inauguração?" },
        { en: "What does the building offer?", pt: "O que o edifício oferece?" },
        { en: "According to the local government, what is the project's purpose?", pt: "De acordo com o governo local, qual é o objetivo do projeto?" },
        { en: "Who said that the library would help students?", pt: "Quem disse que a biblioteca ajudaria os estudantes?" }
      ],
      keyPoints: [
        "Identifique o título e o assunto da notícia.",
        "Localize as informações principais.",
        "Identifique datas, lugares e pessoas.",
        "Interprete palavras desconhecidas pelo contexto.",
        "Reconheça conectores e relações entre ideias.",
        "Diferencie informações oficiais e declarações de entrevistados.",
        "Responda perguntas de compreensão.",
        "Escreva um resumo em inglês com suas próprias palavras.",
        "Experimente aplicar as estratégias a uma notícia real."
      ]
    }
  ]
},


{
  title: "Semana 36 — Escuta Ativa (Podcasts e Cenas Rápidas)",
  goal: "Desenvolver a capacidade de compreender inglês falado sem depender de legendas, reconhecendo diferentes sotaques, velocidades, pronúncias conectadas e informações implícitas.",
  days: [
    {
      title: "Aula 1 — Aprendendo a escutar sem traduzir",
      explanation: "Escutar em inglês não significa reconhecer individualmente todas as palavras. O objetivo é compreender a mensagem geral, identificar palavras importantes e usar o contexto para interpretar o restante. Na primeira escuta, tente descobrir o assunto. Na segunda, procure informações específicas. Não interrompa a cada palavra desconhecida.",
      examples: [
        { en: "I usually listen to music while I study.", pt: "Eu geralmente escuto música enquanto estudo." },
        { en: "The weather is getting colder this week.", pt: "O tempo está ficando mais frio nesta semana." },
        { en: "We need to leave before it gets dark.", pt: "Precisamos sair antes de escurecer." }
      ],
      keyPoints: [
        "Primeira escuta: identifique o assunto geral.",
        "Segunda escuta: procure informações específicas.",
        "Não tente traduzir absolutamente todas as palavras.",
        "Use o contexto para compreender expressões desconhecidas."
      ]
    },
    {
      title: "Aula 2 — Reconhecendo o inglês americano",
      explanation: "O inglês americano apresenta características próprias de pronúncia. Em muitas regiões, o R é pronunciado claramente em palavras como car e water. O T entre vogais pode soar como um som rápido semelhante ao D em palavras como water e better. Também é comum ouvir reduções e ligações entre palavras. O importante é reconhecer essas características sem confundi-las com erros de pronúncia.",
      examples: [
        { en: "I bought a bottle of water.", pt: "Eu comprei uma garrafa de água." },
        { en: "Could you help me with this?", pt: "Você poderia me ajudar com isso?" },
        { en: "I thought it was a good idea.", pt: "Eu achei que era uma boa ideia." }
      ],
      keyPoints: [
        "O R costuma ser pronunciado claramente no inglês americano.",
        "O T entre vogais pode apresentar o chamado flap T.",
        "Palavras podem se conectar durante a fala.",
        "Reconheça o som da frase inteira, não apenas palavras isoladas."
      ]
    },
    {
      title: "Aula 3 — Reconhecendo o inglês britânico",
      explanation: "O inglês britânico possui diversas variedades regionais. Em muitos sotaques do sul da Inglaterra, o R final não é pronunciado quando não existe uma vogal logo depois. Algumas vogais também apresentam sons diferentes dos americanos. Não existe apenas um sotaque britânico: Londres, Manchester, Liverpool e outras regiões possuem características próprias.",
      examples: [
        { en: "I can't find my keys.", pt: "Não consigo encontrar minhas chaves." },
        { en: "Would you like a cup of tea?", pt: "Você gostaria de uma xícara de chá?" },
        { en: "The train is arriving in ten minutes.", pt: "O trem está chegando em dez minutos." }
      ],
      keyPoints: [
        "Existem vários sotaques britânicos.",
        "Em muitos sotaques do sul da Inglaterra, o R final não é pronunciado.",
        "A pronúncia de algumas vogais muda em relação ao inglês americano.",
        "Não confunda diferenças regionais com erros."
      ]
    },
    {
      title: "Aula 4 — Reconhecendo o inglês australiano",
      explanation: "O inglês australiano apresenta características próprias, especialmente na pronúncia das vogais. Algumas palavras possuem sons bastante diferentes dos americanos e britânicos. Expressões informais também aparecem com frequência na conversação. Durante a escuta, observe o contexto, a pronúncia e o vocabulário para identificar o sentido da mensagem.",
      examples: [
        { en: "I'm going to the shops this afternoon.", pt: "Vou às lojas nesta tarde." },
        { en: "How are you going?", pt: "Como você está? (expressão comum na Austrália)" },
        { en: "We'll meet you near the station.", pt: "Vamos encontrar você perto da estação." }
      ],
      keyPoints: [
        "O inglês australiano possui características próprias nas vogais.",
        "Algumas expressões são mais comuns na Austrália.",
        "O contexto ajuda a identificar expressões regionais.",
        "Não tente imitar um sotaque antes de aprender a reconhecê-lo."
      ]
    },
    {
      title: "Aula 5 — Velocidade, contrações e palavras conectadas",
      explanation: "Na fala natural, os falantes frequentemente reduzem e conectam palavras. Expressões como going to podem aparecer como gonna na linguagem informal, want to pode aparecer como wanna e got to pode aparecer como gotta. Essas formas são comuns na fala casual, mas não devem substituir automaticamente as formas completas na escrita formal.",
      examples: [
        { en: "I'm going to call you later.", pt: "Vou ligar para você mais tarde." },
        { en: "I'm gonna call you later.", pt: "Vou ligar para você mais tarde. (informal)" },
        { en: "Do you want to come with us?", pt: "Você quer vir conosco?" },
        { en: "Wanna come with us?", pt: "Quer vir com a gente? (informal)" }
      ],
      keyPoints: [
        "A fala natural pode reduzir palavras.",
        "Gonna equivale informalmente a going to.",
        "Wanna equivale informalmente a want to.",
        "Gotta pode representar got to ou have got to em determinados contextos.",
        "Reconheça a diferença entre fala informal e escrita formal."
      ]
    },
    {
      title: "Aula 6 — Laboratório de escuta e interpretação",
      explanation: "Nesta aula, você vai aplicar as estratégias anteriores. Escolha um pequeno diálogo ou trecho falado em inglês, preferencialmente sem legendas. Na primeira tentativa, identifique o assunto e os participantes. Na segunda, anote palavras e informações importantes. Na terceira, tente reconstruir o significado geral. Depois, confira sua interpretação com uma transcrição, se disponível.",
      examples: [
        { en: "I was going to call you, but I got really busy.", pt: "Eu ia ligar para você, mas fiquei muito ocupado." },
        { en: "We haven't decided where we're going yet.", pt: "Ainda não decidimos para onde vamos." },
        { en: "If you need anything, just let me know.", pt: "Se precisar de alguma coisa, é só me avisar." }
      ],
      keyPoints: [
        "Faça pelo menos duas escutas antes de consultar a transcrição.",
        "Identifique assunto, participantes e intenção.",
        "Anote expressões que não conseguiu reconhecer.",
        "Compare sua interpretação com a transcrição.",
        "Avalie a compreensão geral, não apenas palavras isoladas."
      ]
    }
  ]
},
{
  title: "Semana 37 — Redação Avançada (Ensaios, Diários e Textos Longos)",
  goal: "Aprender a organizar textos extensos em introdução, desenvolvimento e conclusão, utilizando parágrafos coesos, conectores, argumentos e vocabulário adequado.",
  days: [
    {
      title: "Aula 1 — Estrutura de um texto avançado",
      explanation: "Um texto organizado geralmente apresenta introdução, desenvolvimento e conclusão. A introdução apresenta o tema e a ideia central. O desenvolvimento explica essa ideia por meio de argumentos, exemplos e informações. A conclusão retoma o ponto principal e apresenta um fechamento. Cada parte precisa contribuir para a mensagem geral.",
      examples: [
        { en: "Technology has changed the way people communicate.", pt: "A tecnologia mudou a maneira como as pessoas se comunicam. (introdução)" },
        { en: "For example, people can now talk to someone on the other side of the world.", pt: "Por exemplo, as pessoas agora podem conversar com alguém do outro lado do mundo. (desenvolvimento)" },
        { en: "Therefore, technology has made communication faster and more accessible.", pt: "Portanto, a tecnologia tornou a comunicação mais rápida e acessível. (conclusão)" }
      ],
      keyPoints: [
        "Introdução: apresente o assunto e a ideia central.",
        "Desenvolvimento: explique e sustente suas ideias.",
        "Conclusão: retome o argumento principal.",
        "Evite colocar informações sem relação com o tema."
      ]
    },
    {
      title: "Aula 2 — Construindo parágrafos coesos",
      explanation: "Um bom parágrafo desenvolve uma ideia principal. Comece com uma frase que apresente o assunto, acrescente explicações e exemplos e finalize conectando as informações. Evite mudar de assunto repentinamente. Use conectores para deixar clara a relação entre as frases.",
      examples: [
        { en: "Reading is an important habit. It improves vocabulary and helps people understand different perspectives. For this reason, reading can contribute to personal development.", pt: "Ler é um hábito importante. Isso melhora o vocabulário e ajuda as pessoas a compreender diferentes perspectivas. Por esse motivo, a leitura pode contribuir para o desenvolvimento pessoal." },
        { en: "Exercise can improve physical health. It can also help people feel more energetic throughout the day.", pt: "O exercício pode melhorar a saúde física. Também pode ajudar as pessoas a se sentirem mais dispostas durante o dia." },
        { en: "Learning a language takes time. However, consistent practice makes the process more effective.", pt: "Aprender um idioma leva tempo. Entretanto, a prática constante torna o processo mais eficiente." }
      ],
      keyPoints: [
        "Cada parágrafo deve desenvolver uma ideia central.",
        "Use exemplos para explicar seus argumentos.",
        "Conecte frases com conectores adequados.",
        "Evite repetir a mesma informação sem necessidade."
      ]
    },
    {
      title: "Aula 3 — Introdução e apresentação de uma tese",
      explanation: "Em ensaios argumentativos, a tese é a posição principal que você pretende defender. Uma introdução eficiente apresenta o tema, oferece um contexto e deixa clara a ideia que será desenvolvida. Evite começar com afirmações muito amplas que não ajudam a apresentar seu argumento.",
      examples: [
        { en: "In my opinion, schools should encourage students to develop creative skills.", pt: "Na minha opinião, as escolas deveriam incentivar os estudantes a desenvolver habilidades criativas." },
        { en: "Nowadays, technology plays an important role in education.", pt: "Atualmente, a tecnologia desempenha um papel importante na educação." },
        { en: "This essay will discuss the advantages and disadvantages of online learning.", pt: "Este ensaio discutirá as vantagens e desvantagens do aprendizado online." }
      ],
      keyPoints: [
        "Apresente o tema de maneira clara.",
        "Explique por que o assunto é relevante.",
        "Mostre sua tese ou o objetivo do texto.",
        "Não desenvolva todos os argumentos na introdução."
      ]
    },
    {
      title: "Aula 4 — Desenvolvimento de argumentos e exemplos",
      explanation: "Um argumento precisa ser explicado. Não basta afirmar que algo é bom ou ruim: apresente uma razão e, quando possível, um exemplo que ajude o leitor a compreender sua posição. Você também pode reconhecer uma dificuldade ou uma opinião diferente antes de explicar por que mantém seu ponto de vista.",
      examples: [
        { en: "One important advantage is that online courses offer flexibility. Students can organize their schedules according to their needs.", pt: "Uma vantagem importante é que os cursos online oferecem flexibilidade. Os estudantes podem organizar seus horários de acordo com suas necessidades." },
        { en: "For instance, a student who lives far from a school may save time by studying online.", pt: "Por exemplo, um estudante que mora longe de uma escola pode economizar tempo estudando online." },
        { en: "Although this option is convenient, it may not work equally well for everyone.", pt: "Embora essa opção seja conveniente, ela pode não funcionar igualmente bem para todos." }
      ],
      keyPoints: [
        "Apresente uma afirmação.",
        "Explique a razão por trás dela.",
        "Use exemplos para tornar o argumento concreto.",
        "Considere perspectivas diferentes.",
        "Não confunda opinião com evidência."
      ]
    },
    {
      title: "Aula 5 — Conclusões fortes e naturais",
      explanation: "A conclusão deve fechar o raciocínio sem simplesmente copiar a introdução. Retome a tese com outras palavras, sintetize os principais argumentos e apresente uma reflexão final quando apropriado. Não introduza um argumento completamente novo no último parágrafo.",
      examples: [
        { en: "In conclusion, learning a language requires patience, practice, and consistency.", pt: "Em conclusão, aprender um idioma exige paciência, prática e consistência." },
        { en: "Overall, both options have advantages, but the best choice depends on each person's needs.", pt: "No geral, ambas as opções têm vantagens, mas a melhor escolha depende das necessidades de cada pessoa." },
        { en: "Ultimately, small daily efforts can lead to significant progress.", pt: "Em última análise, pequenos esforços diários podem levar a um progresso significativo." }
      ],
      keyPoints: [
        "Retome a ideia central.",
        "Resuma os argumentos principais.",
        "Use expressões de conclusão naturalmente.",
        "Não acrescente um argumento novo sem desenvolvê-lo."
      ]
    },
    {
      title: "Aula 6 — Escrevendo um ensaio completo",
      explanation: "Agora você vai reunir todas as habilidades da semana. Escolha um tema, defina sua tese, organize dois ou três argumentos e escreva uma introdução, parágrafos de desenvolvimento e uma conclusão. Depois, revise gramática, vocabulário, conectores, repetição de palavras e organização das ideias. O objetivo é produzir um texto coerente, não apenas um texto longo.",
      examples: [
        { en: "Should students learn practical skills at school?", pt: "Os estudantes deveriam aprender habilidades práticas na escola?" },
        { en: "There are several reasons why this subject deserves attention.", pt: "Existem várias razões pelas quais esse assunto merece atenção." },
        { en: "A balanced approach could help students prepare for different situations in life.", pt: "Uma abordagem equilibrada poderia ajudar os estudantes a se prepararem para diferentes situações da vida." }
      ],
      keyPoints: [
        "Escolha um tema específico.",
        "Defina uma tese clara.",
        "Organize os argumentos antes de escrever.",
        "Use exemplos e conectores.",
        "Revise o texto inteiro antes de finalizá-lo."
      ]
    }
  ]
},
{
  title: "Semana 38 — Debates e Expressão de Hipóteses Complexas",
  goal: "Desenvolver a capacidade de defender opiniões, apresentar argumentos, discordar respeitosamente, responder a objeções e discutir situações hipotéticas em inglês.",
  days: [
    {
      title: "Aula 1 — Apresentando e defendendo opiniões",
      explanation: "Em um debate, é importante apresentar sua opinião de maneira clara e explicar os motivos que sustentam sua posição. Expressões como from my perspective, I believe e in my view ajudam a introduzir argumentos. Depois da opinião, apresente razões e exemplos para que o interlocutor compreenda seu raciocínio.",
      examples: [
        { en: "From my perspective, education should include more practical activities.", pt: "Na minha perspectiva, a educação deveria incluir mais atividades práticas." },
        { en: "I strongly believe that teamwork is an important skill.", pt: "Acredito firmemente que o trabalho em equipe é uma habilidade importante." },
        { en: "In my view, technology is useful when people use it responsibly.", pt: "Na minha opinião, a tecnologia é útil quando as pessoas a utilizam com responsabilidade." }
      ],
      keyPoints: [
        "Apresente sua posição claramente.",
        "Explique os motivos da sua opinião.",
        "Use exemplos para sustentar seus argumentos.",
        "Evite apresentar uma opinião como se fosse um fato comprovado."
      ]
    },
    {
      title: "Aula 2 — Concordando e discordando com educação",
      explanation: "Debater não significa concordar com tudo nem atacar quem pensa diferente. Existem diversas maneiras de concordar parcialmente ou discordar respeitosamente. Expressões como I see your point, however e I respectfully disagree permitem manter uma conversa produtiva.",
      examples: [
        { en: "I see your point, and I agree with that idea.", pt: "Entendo seu ponto de vista e concordo com essa ideia." },
        { en: "I understand your argument; however, I have a different opinion.", pt: "Entendo seu argumento; entretanto, tenho uma opinião diferente." },
        { en: "I partly agree, but I think there is another side to consider.", pt: "Concordo em parte, mas acho que existe outro lado a considerar." }
      ],
      keyPoints: [
        "Demonstre que ouviu o argumento do outro.",
        "Discorde da ideia, não ataque a pessoa.",
        "Use however e although para apresentar contrastes.",
        "Reconheça quando existe concordância parcial."
      ]
    },
    {
      title: "Aula 3 — Construindo argumentos lógicos",
      explanation: "Um argumento bem construído apresenta uma afirmação, uma justificativa e uma consequência ou exemplo. Expressões como because, therefore, consequently e as a result mostram a relação entre as ideias. Também é importante distinguir uma relação de causa e consequência de uma simples coincidência.",
      examples: [
        { en: "Public transportation can reduce traffic because fewer people need to drive.", pt: "O transporte público pode reduzir o trânsito porque menos pessoas precisam dirigir." },
        { en: "The team practiced consistently; therefore, its performance improved.", pt: "A equipe treinou consistentemente; portanto, seu desempenho melhorou." },
        { en: "As a result, students had more time to complete their projects.", pt: "Como resultado, os estudantes tiveram mais tempo para concluir seus projetos." }
      ],
      keyPoints: [
        "Organize afirmação, justificativa e exemplo.",
        "Use conectores de causa e consequência.",
        "Explique como suas evidências sustentam sua conclusão.",
        "Não trate coincidência como prova automática de causalidade."
      ]
    },
    {
      title: "Aula 4 — Hipóteses e situações imaginárias",
      explanation: "As condicionais permitem discutir situações possíveis, improváveis ou imaginárias. O Second Conditional é usado para situações hipotéticas no presente ou futuro: if + past simple, would + verbo. O Third Conditional trata de situações passadas que não aconteceram: if + past perfect, would have + particípio. Essas estruturas permitem explorar consequências e imaginar alternativas.",
      examples: [
        { en: "If I had more free time, I would learn another language.", pt: "Se eu tivesse mais tempo livre, aprenderia outro idioma." },
        { en: "If I were in charge, I would change the schedule.", pt: "Se eu estivesse no comando, mudaria o horário." },
        { en: "If we had left earlier, we would have arrived on time.", pt: "Se tivéssemos saído mais cedo, teríamos chegado na hora." }
      ],
      keyPoints: [
        "Second Conditional: hipóteses presentes ou futuras.",
        "Third Conditional: alternativas imaginárias para o passado.",
        "Would é seguido pela forma base do verbo.",
        "Would have é seguido pelo particípio passado.",
        "Não use would normalmente na oração iniciada por if nessas estruturas."
      ]
    },
    {
      title: "Aula 5 — Respondendo a objeções e contra-argumentos",
      explanation: "Um debate avançado exige saber responder a argumentos contrários. Primeiro, identifique o ponto apresentado pela outra pessoa. Depois, reconheça o que pode ser válido, explique sua discordância e apresente uma justificativa. Você também pode mudar de posição quando um argumento contrário for convincente.",
      examples: [
        { en: "That may be true in some situations, but it does not apply to every case.", pt: "Isso pode ser verdade em algumas situações, mas não se aplica a todos os casos." },
        { en: "Although I understand this concern, there is another factor to consider.", pt: "Embora eu entenda essa preocupação, existe outro fator a considerar." },
        { en: "Your argument raises an important question. However, the available evidence suggests a different conclusion.", pt: "Seu argumento levanta uma questão importante. Entretanto, as evidências disponíveis sugerem uma conclusão diferente." }
      ],
      keyPoints: [
        "Identifique corretamente o argumento contrário.",
        "Reconheça pontos válidos quando existirem.",
        "Apresente uma resposta fundamentada.",
        "Evite distorcer a opinião de outra pessoa.",
        "Esteja disposto a reconsiderar sua posição."
      ]
    },
    {
      title: "Aula 6 — Simulação de debate completo",
      explanation: "Nesta aula, você vai participar de um debate estruturado. Escolha uma questão, apresente sua posição, ofereça argumentos, responda a uma objeção e finalize com uma conclusão. Tente utilizar diferentes tempos verbais, condicionais e conectores. Uma boa participação não depende de falar mais alto ou mais rápido, mas de comunicar ideias com clareza.",
      examples: [
        { en: "Should artificial intelligence be used more often in education?", pt: "A inteligência artificial deveria ser utilizada com mais frequência na educação?" },
        { en: "One possible advantage is that students can receive personalized explanations.", pt: "Uma possível vantagem é que os estudantes podem receber explicações personalizadas." },
        { en: "On the other hand, schools must consider privacy and responsible use.", pt: "Por outro lado, as escolas precisam considerar a privacidade e o uso responsável." }
      ],
      keyPoints: [
        "Apresente uma tese.",
        "Defenda sua posição com pelo menos dois argumentos.",
        "Responda a uma objeção.",
        "Utilize condicionais para discutir possibilidades.",
        "Finalize com uma conclusão coerente."
      ]
    }
  ]
},
{
  title: "Semana 39 — Humor, Ironia e Sarcasmo em Inglês",
  goal: "Compreender humor, ironia, sarcasmo, trocadilhos e expressões culturais em conversas e conteúdos em inglês, identificando quando uma frase não deve ser interpretada literalmente.",
  days: [
    {
      title: "Aula 1 — Como o humor funciona em inglês",
      explanation: "O humor depende de contexto, expectativa e interpretação. Algumas piadas funcionam porque apresentam uma situação inesperada, um duplo sentido ou uma palavra com mais de um significado. Para compreender uma piada, observe a situação completa e não apenas a tradução individual das palavras.",
      examples: [
        { en: "I used to be a baker, but I couldn't make enough dough.", pt: "Eu costumava ser padeiro, mas não conseguia ganhar dinheiro suficiente. (Dough significa massa e também pode ser uma gíria para dinheiro.)" },
        { en: "I'm reading a book about anti-gravity. It's impossible to put down.", pt: "Estou lendo um livro sobre antigravidade. É impossível largá-lo. (Put down também pode significar colocar algo no chão.)" },
        { en: "The computer caught a cold because it left its Windows open.", pt: "O computador pegou um resfriado porque deixou suas janelas abertas. (Windows também é o nome de um sistema operacional.)" }
      ],
      keyPoints: [
        "O humor pode depender de duplo sentido.",
        "Uma piada nem sempre funciona quando traduzida literalmente.",
        "Observe a situação e o significado alternativo das palavras.",
        "Algumas piadas dependem de referências culturais."
      ]
    },
    {
      title: "Aula 2 — Entendendo a ironia",
      explanation: "A ironia acontece quando existe uma diferença entre o que alguém diz e o que realmente pretende comunicar. Uma pessoa pode fazer um comentário aparentemente positivo para destacar uma situação negativa. O tom de voz, a expressão facial e o contexto ajudam a identificar a intenção.",
      examples: [
        { en: "Wonderful! Another two hours of homework.", pt: "Maravilha! Mais duas horas de tarefa. (Ironia: a pessoa provavelmente não está feliz.)" },
        { en: "What a perfect day to forget my umbrella.", pt: "Que dia perfeito para esquecer meu guarda-chuva. (Ironia diante de uma situação inconveniente.)" },
        { en: "Great job! You managed to lose the map.", pt: "Muito bem! Você conseguiu perder o mapa. (Comentário irônico dependendo do contexto.)" }
      ],
      keyPoints: [
        "A ironia depende do contexto.",
        "O significado literal pode ser diferente da intenção.",
        "A entonação ajuda a reconhecer a ironia falada.",
        "Não interprete automaticamente todo elogio como ironia."
      ]
    },
    {
      title: "Aula 3 — Sarcasmo e respostas sarcásticas",
      explanation: "O sarcasmo é uma forma de expressão que frequentemente utiliza ironia para fazer uma crítica ou comentário provocativo. Pode aparecer entre amigos, em programas de humor e em conversas informais. Entretanto, o sarcasmo pode soar grosseiro dependendo da relação entre as pessoas e da situação. Reconhecer uma frase sarcástica não significa que seja apropriado utilizá-la em qualquer contexto.",
      examples: [
        { en: "Oh, brilliant idea! What could possibly go wrong?", pt: "Ah, ideia brilhante! O que poderia dar errado? (Sarcasmo diante de uma ideia arriscada.)" },
        { en: "Thanks for the help. I couldn't have done it without you.", pt: "Obrigado pela ajuda. Eu não teria conseguido sem você. (Pode ser sincero ou sarcástico, dependendo do contexto.)" },
        { en: "Well, that went exactly as planned.", pt: "Bem, isso aconteceu exatamente como planejado. (Pode ser sarcástico quando algo deu errado.)" }
      ],
      keyPoints: [
        "Sarcasmo pode envolver crítica ou provocação.",
        "O tom de voz muda a interpretação.",
        "Uma mesma frase pode ser sincera ou sarcástica.",
        "Considere a relação entre os interlocutores."
      ]
    },
    {
      title: "Aula 4 — Trocadilhos e duplos sentidos",
      explanation: "Trocadilhos, chamados de puns, exploram palavras com sons semelhantes ou significados diferentes. Muitas piadas em inglês utilizam esse recurso. Para compreendê-las, é necessário reconhecer os significados envolvidos. Nem sempre existe uma tradução equivalente em português, então o melhor é explicar o mecanismo da piada.",
      examples: [
        { en: "A bicycle can't stand on its own because it is two-tired.", pt: "Uma bicicleta não consegue ficar em pé sozinha porque está muito cansada. (Two-tired soa como too tired; two também significa dois, como as duas rodas.)" },
        { en: "I wondered why the ball was getting bigger. Then it hit me.", pt: "Eu me perguntava por que a bola estava ficando maior. Então ela me atingiu. (Hit me pode significar atingir fisicamente ou fazer alguém perceber algo.)" },
        { en: "I wanted to be a professional fisherman, but I couldn't live on my net income.", pt: "Eu queria ser pescador profissional, mas não conseguia viver da minha renda líquida. (Net pode significar rede e também aparece na expressão net income.)" }
      ],
      keyPoints: [
        "Pun é um trocadilho.",
        "Palavras semelhantes podem produzir duplos sentidos.",
        "O contexto revela qual interpretação está sendo explorada.",
        "Nem todo trocadilho possui equivalente direto em português."
      ]
    },
    {
      title: "Aula 5 — Referências culturais e humor cotidiano",
      explanation: "Algumas piadas dependem de referências culturais, programas, costumes, situações escolares ou acontecimentos conhecidos por determinado público. Para compreender esse humor, procure descobrir a referência e o motivo pelo qual ela é engraçada. Também observe expressões informais e reações comuns em conversas.",
      examples: [
        { en: "That's so awkward!", pt: "Que situação constrangedora!" },
        { en: "You have got to be kidding me!", pt: "Você só pode estar brincando comigo!" },
        { en: "Well, that was unexpected.", pt: "Bem, isso foi inesperado." }
      ],
      keyPoints: [
        "Referências culturais podem ser essenciais para compreender piadas.",
        "Expressões informais aparecem frequentemente em conteúdos de humor.",
        "Observe a reação das pessoas e o contexto.",
        "Não presuma que todas as culturas consideram as mesmas coisas engraçadas."
      ]
    },
    {
      title: "Aula 6 — Interpretando humor em situações reais",
      explanation: "Nesta aula, você vai analisar pequenas cenas, diálogos ou trechos de programas em inglês. Tente identificar se o comentário é literal, irônico, sarcástico ou baseado em trocadilho. Explique qual palavra ou situação produz o humor. Se não entender uma piada, procure os significados alternativos e a referência cultural antes de concluir que a frase não faz sentido.",
      examples: [
        { en: "Nice weather we're having! (said during a heavy storm)", pt: "Que tempo agradável estamos tendo! (dito durante uma tempestade: ironia)" },
        { en: "I told my friend a joke about construction, but I'm still working on it.", pt: "Contei uma piada ao meu amigo sobre construção, mas ainda estou trabalhando nela. (Trocadilho com working on it.)" },
        { en: "Well, at least we learned what not to do.", pt: "Bem, pelo menos aprendemos o que não fazer. (Comentário bem-humorado depois de um erro.)" }
      ],
      keyPoints: [
        "Identifique a intenção da fala.",
        "Diferencie humor literal, ironia, sarcasmo e trocadilho.",
        "Observe entonação e contexto.",
        "Explique por que a situação pode ser engraçada.",
        "Pratique com diálogos e vídeos curtos em inglês."
      ]
    }
  ]
},
{
  title: "Semana 40 — Revisão e Ajuste de Rota",
  goal: "Avaliar o desenvolvimento do inglês, identificar dificuldades específicas em gramática, vocabulário, pronúncia, leitura, escrita e compreensão auditiva, e definir prioridades para melhorar o desempenho.",
  days: [
    {
      title: "Aula 1 — Diagnóstico de gramática",
      explanation: "A gramática precisa ser avaliada dentro de situações reais de comunicação. Revise os principais tempos verbais, condicionais, voz passiva, discurso indireto, modais, comparações e estruturas com gerúndio e infinitivo. O objetivo não é apenas decorar regras, mas reconhecer qual estrutura funciona melhor em cada contexto. Anote os erros recorrentes para saber o que precisa de revisão.",
      examples: [
        { en: "She has been studying English for three years.", pt: "Ela está estudando inglês há três anos." },
        { en: "If I had known about the meeting, I would have attended.", pt: "Se eu soubesse da reunião, teria participado." },
        { en: "The documents were sent yesterday.", pt: "Os documentos foram enviados ontem." },
        { en: "He said that he was tired.", pt: "Ele disse que estava cansado." }
      ],
      keyPoints: [
        "Revise os tempos verbais e suas diferenças.",
        "Pratique condicionais e suas estruturas.",
        "Reconheça voz passiva e discurso indireto.",
        "Revise modais e gerúndio versus infinitivo.",
        "Registre os erros para identificar padrões."
      ]
    },
    {
      title: "Aula 2 — Diagnóstico de vocabulário e expressões",
      explanation: "Ter vocabulário avançado não significa apenas conhecer palavras difíceis. É importante conhecer palavras comuns em diferentes contextos, phrasal verbs, expressões idiomáticas, combinações naturais de palavras e diferentes níveis de formalidade. Avalie se consegue compreender uma palavra em uma frase e utilizá-la corretamente em outra situação.",
      examples: [
        { en: "We need to figure out what happened.", pt: "Precisamos descobrir o que aconteceu." },
        { en: "I ran out of time before finishing the project.", pt: "Fiquei sem tempo antes de terminar o projeto." },
        { en: "She made a difficult decision.", pt: "Ela tomou uma decisão difícil." },
        { en: "The results were quite impressive.", pt: "Os resultados foram bastante impressionantes." }
      ],
      keyPoints: [
        "Revise phrasal verbs.",
        "Reforce expressões idiomáticas.",
        "Estude combinações naturais de palavras.",
        "Observe diferenças entre linguagem formal e informal.",
        "Aprenda vocabulário dentro de frases e contextos."
      ]
    },
    {
      title: "Aula 3 — Diagnóstico de leitura e interpretação",
      explanation: "A leitura avançada exige compreender tanto informações explícitas quanto implícitas. Ao ler um artigo, notícia ou texto longo, identifique o assunto, a ideia central, os argumentos, a intenção do autor e as relações entre os parágrafos. Não dependa da tradução de todas as palavras: utilize o contexto para deduzir significados.",
      examples: [
        { en: "Despite the difficulties, the researchers continued their investigation.", pt: "Apesar das dificuldades, os pesquisadores continuaram sua investigação." },
        { en: "The proposal was rejected because it lacked sufficient evidence.", pt: "A proposta foi rejeitada porque não possuía evidências suficientes." },
        { en: "Although the results were promising, further research is necessary.", pt: "Embora os resultados fossem promissores, mais pesquisas são necessárias." }
      ],
      keyPoints: [
        "Identifique a ideia central de cada texto.",
        "Diferencie fatos, opiniões e argumentos.",
        "Observe conectores e relações entre parágrafos.",
        "Deduzir palavras pelo contexto é uma habilidade importante.",
        "Reconheça informações implícitas."
      ]
    },
    {
      title: "Aula 4 — Diagnóstico de escrita e organização",
      explanation: "Uma escrita avançada deve ser clara, coerente e adequada ao objetivo. Avalie sua capacidade de construir parágrafos, escrever textos argumentativos, organizar introdução e conclusão, utilizar conectores e adaptar a linguagem ao leitor. Revise também erros recorrentes de concordância, tempos verbais, pontuação e escolha de palavras.",
      examples: [
        { en: "First, it is important to understand the problem. Furthermore, we must consider its possible consequences.", pt: "Primeiramente, é importante compreender o problema. Além disso, precisamos considerar suas possíveis consequências." },
        { en: "Although the solution may seem simple, its implementation requires careful planning.", pt: "Embora a solução possa parecer simples, sua implementação exige planejamento cuidadoso." },
        { en: "In conclusion, a successful project depends on preparation and cooperation.", pt: "Em conclusão, um projeto bem-sucedido depende de preparação e cooperação." }
      ],
      keyPoints: [
        "Revise organização e coesão dos parágrafos.",
        "Confira tempos verbais e concordância.",
        "Evite repetições desnecessárias.",
        "Adapte o tom ao objetivo do texto.",
        "Revise antes de considerar a escrita finalizada."
      ]
    },
    {
      title: "Aula 5 — Diagnóstico de pronúncia e compreensão auditiva",
      explanation: "A avaliação oral deve considerar clareza, ritmo, entonação, compreensão e capacidade de responder espontaneamente. Não é necessário eliminar o sotaque brasileiro. O importante é produzir sons compreensíveis, pronunciar adequadamente as terminações, organizar as palavras e conseguir acompanhar diferentes falantes. Na escuta, avalie sua capacidade de reconhecer o assunto e os detalhes de uma conversa sem depender continuamente de legendas.",
      examples: [
        { en: "Could you explain that one more time?", pt: "Você poderia explicar isso mais uma vez?" },
        { en: "I didn't catch the last part of your sentence.", pt: "Não consegui entender a última parte da sua frase." },
        { en: "Let me think about that for a moment.", pt: "Deixe-me pensar sobre isso por um momento." }
      ],
      keyPoints: [
        "Avalie a clareza da pronúncia, não a ausência de sotaque.",
        "Pratique ritmo e entonação.",
        "Observe terminações e sons que costumam gerar dificuldades.",
        "Treine a compreensão de diferentes sotaques.",
        "Pratique responder sem preparar cada frase palavra por palavra."
      ]
    },
    {
      title: "Aula 6 — Plano individual de melhoria",
      explanation: "Depois de revisar as habilidades, organize um plano de melhoria baseado nas dificuldades encontradas. Escolha as duas ou três áreas que mais precisam de atenção. Defina atividades concretas, como leitura de artigos, gravação de pequenas falas, escrita de textos, revisão gramatical e escuta de podcasts. O plano deve permitir acompanhar a evolução e ser ajustado conforme os resultados.",
      examples: [
        { en: "My main weakness is listening comprehension.", pt: "Minha principal dificuldade é a compreensão auditiva." },
        { en: "I need to improve my vocabulary and pronunciation.", pt: "Preciso melhorar meu vocabulário e minha pronúncia." },
        { en: "My goal is to communicate more confidently in English.", pt: "Meu objetivo é me comunicar com mais confiança em inglês." },
        { en: "I will review my mistakes and track my progress.", pt: "Vou revisar meus erros e acompanhar meu progresso." }
      ],
      keyPoints: [
        "Identifique suas principais dificuldades.",
        "Escolha prioridades realistas.",
        "Defina atividades específicas para cada dificuldade.",
        "Registre resultados e erros recorrentes.",
        "Reavalie seu progresso e ajuste o plano."
      ]
    }
  ]
},


{
  title: "Semana 41 — Imersão em Séries e Filmes Sem Legenda",
  goal: "Desenvolver compreensão auditiva avançada por meio de conteúdos audiovisuais autênticos, compreendendo diálogos, emoções, referências culturais e informações implícitas sem depender de legendas.",
  days: [
    {
      title: "Aula 1 — Abandonando as legendas",
      explanation: "Assistir sem legendas exige uma mudança de estratégia. Você não precisa compreender cada palavra para acompanhar uma história. Concentre-se nos personagens, nas ações, no cenário, na entonação e nas palavras que carregam a mensagem principal. Comece com cenas curtas e aumente a duração gradualmente. Se perder uma fala, continue acompanhando em vez de interromper constantemente.",
      examples: [
        { en: "I don't think this is going to work.", pt: "Não acho que isso vá funcionar." },
        { en: "We need to figure out what's happening.", pt: "Precisamos descobrir o que está acontecendo." },
        { en: "There's something you're not telling me.", pt: "Tem alguma coisa que você não está me contando." }
      ],
      keyPoints: [
        "Não dependa de legendas para compreender a história.",
        "Use expressões faciais, ações e contexto.",
        "Aceite não compreender algumas palavras.",
        "Priorize a mensagem geral.",
        "Comece com cenas curtas e avance gradualmente."
      ]
    },
    {
      title: "Aula 2 — Entendendo diálogos rápidos e naturais",
      explanation: "Em filmes e séries, os personagens frequentemente falam de maneira espontânea. Eles interrompem frases, utilizam contrações, omitem informações que já são conhecidas e conectam palavras. Nem sempre a gramática da fala cotidiana segue a estrutura de uma frase escrita formal. Aprenda a reconhecer essas construções sem tentar traduzir cada palavra isoladamente.",
      examples: [
        { en: "What are you talking about?", pt: "Do que você está falando?" },
        { en: "I should've known.", pt: "Eu deveria ter percebido." },
        { en: "You could've told me earlier.", pt: "Você poderia ter me contado antes." }
      ],
      keyPoints: [
        "Reconheça contrações como should've e could've.",
        "A fala espontânea pode conter frases incompletas.",
        "Observe como os personagens conectam palavras.",
        "Use o contexto para recuperar informações omitidas."
      ]
    },
    {
      title: "Aula 3 — Compreendendo emoções e intenções",
      explanation: "Compreender um diálogo avançado significa perceber não apenas o que foi dito, mas também a intenção de quem falou. Uma pergunta pode expressar curiosidade, preocupação, dúvida ou irritação. Observe a entonação, as pausas, o volume da voz e a situação. A mesma frase pode transmitir sentimentos diferentes dependendo da maneira como é pronunciada.",
      examples: [
        { en: "Are you seriously telling me that?", pt: "Você está mesmo me dizendo isso?" },
        { en: "I thought we could trust each other.", pt: "Achei que pudéssemos confiar um no outro." },
        { en: "Fine. Do whatever you want.", pt: "Tudo bem. Faça o que quiser. (Pode expressar irritação dependendo do contexto.)" }
      ],
      keyPoints: [
        "Identifique a intenção por trás das palavras.",
        "Observe entonação e pausas.",
        "Diferencie significado literal e emocional.",
        "Considere a relação entre os personagens.",
        "Não interprete o tom de voz sem considerar a situação."
      ]
    },
    {
      title: "Aula 4 — Filmes, documentários e vocabulário especializado",
      explanation: "Diferentes gêneros apresentam vocabulários e formas de comunicação próprias. Documentários podem utilizar termos científicos, históricos e técnicos. Dramas costumam apresentar diálogos emocionais e expressões indiretas. Comédias exploram informalidade e duplo sentido. Ao assistir, identifique o tipo de conteúdo e adapte sua atenção ao vocabulário e à intenção comunicativa.",
      examples: [
        { en: "The evidence suggests that the situation is more complicated than expected.", pt: "As evidências sugerem que a situação é mais complicada do que o esperado." },
        { en: "The experiment was conducted under controlled conditions.", pt: "O experimento foi realizado em condições controladas." },
        { en: "I never thought things would turn out this way.", pt: "Nunca pensei que as coisas terminariam dessa maneira." }
      ],
      keyPoints: [
        "Cada gênero apresenta características linguísticas próprias.",
        "Documentários podem conter vocabulário técnico.",
        "Dramas apresentam linguagem emocional e indireta.",
        "Comédias podem depender de referências culturais.",
        "Não interrompa a experiência para pesquisar toda palavra desconhecida."
      ]
    },
    {
      title: "Aula 5 — Interpretando cenas inteiras",
      explanation: "Nesta aula, o foco é compreender sequências completas. Escolha uma cena de alguns minutos e acompanhe a evolução da conversa. Identifique o problema inicial, as respostas dos personagens, as mudanças de intenção e o resultado. Depois, reconte mentalmente ou em voz alta o que aconteceu em inglês. Isso combina compreensão auditiva, memória e produção oral.",
      examples: [
        { en: "At first, nobody understood what had happened.", pt: "No início, ninguém entendeu o que tinha acontecido." },
        { en: "After a while, they realized they had made a mistake.", pt: "Depois de algum tempo, perceberam que tinham cometido um erro." },
        { en: "By the end of the conversation, they had reached an agreement.", pt: "Ao final da conversa, eles tinham chegado a um acordo." }
      ],
      keyPoints: [
        "Acompanhe a sequência dos acontecimentos.",
        "Identifique o problema e sua resolução.",
        "Observe as mudanças na conversa.",
        "Reconte o conteúdo utilizando suas próprias palavras.",
        "Avalie se compreendeu a cena sem consultar legendas."
      ]
    },
    {
      title: "Aula 6 — Desafio de imersão audiovisual",
      explanation: "Escolha um episódio, documentário ou filme adequado e assista a um trecho significativo sem legendas. Ao terminar, escreva um resumo em inglês contendo o assunto, os acontecimentos principais, os personagens envolvidos e sua interpretação. Não procure reproduzir todas as falas. O objetivo é demonstrar compreensão real do conteúdo.",
      examples: [
        { en: "The episode focuses on a difficult decision made by the main character.", pt: "O episódio se concentra em uma decisão difícil tomada pelo personagem principal." },
        { en: "The situation becomes more complicated as the story develops.", pt: "A situação fica mais complicada conforme a história se desenvolve." },
        { en: "I understood most of the conversation, even though I missed a few expressions.", pt: "Entendi a maior parte da conversa, embora tenha perdido algumas expressões." }
      ],
      keyPoints: [
        "Escolha conteúdo adequado ao seu nível.",
        "Assista sem legendas.",
        "Identifique os acontecimentos principais.",
        "Produza um resumo em inglês.",
        "Avalie sua compreensão geral e não apenas o número de palavras reconhecidas."
      ]
    }
  ]
},
{
  title: "Semana 42 — Leitura de Livros de Ficção ou Não-Ficção",
  goal: "Desenvolver autonomia na leitura de livros completos em inglês, compreendendo narrativas, argumentos, estilos de escrita e vocabulário pelo contexto.",
  days: [
    {
      title: "Aula 1 — Escolhendo e começando um livro",
      explanation: "Ler um livro inteiro em inglês é diferente de estudar pequenos textos. A escolha da obra influencia diretamente a experiência. Procure um livro cujo tema desperte interesse e cuja linguagem seja desafiadora, mas compreensível. Pode ser ficção, biografia, divulgação científica, aventura ou outro gênero. Não escolha uma obra apenas porque é considerada difícil ou importante.",
      examples: [
        { en: "The story takes place in a small town.", pt: "A história acontece em uma pequena cidade." },
        { en: "The author explores the relationship between science and society.", pt: "O autor explora a relação entre ciência e sociedade." },
        { en: "The main character faces an unexpected challenge.", pt: "O personagem principal enfrenta um desafio inesperado." }
      ],
      keyPoints: [
        "Escolha um assunto que realmente desperte interesse.",
        "Considere o nível de dificuldade do livro.",
        "Ficção e não-ficção desenvolvem habilidades diferentes.",
        "Estabeleça uma rotina de leitura sustentável.",
        "O objetivo é compreender e aproveitar a obra."
      ]
    },
    {
      title: "Aula 2 — Lendo sem traduzir cada frase",
      explanation: "Durante a leitura, procure compreender grupos de palavras e ideias completas. Não transforme cada frase em uma tradução para português. Quando encontrar uma palavra desconhecida, observe as frases próximas, a situação e a função daquela palavra. Continue lendo se ela não for essencial para compreender o trecho.",
      examples: [
        { en: "He glanced at the clock before leaving the room.", pt: "Ele olhou rapidamente para o relógio antes de sair da sala." },
        { en: "The village was surrounded by dense forests.", pt: "A vila era cercada por florestas densas." },
        { en: "She hesitated for a moment, unsure of what to say.", pt: "Ela hesitou por um momento, sem saber o que dizer." }
      ],
      keyPoints: [
        "Leia frases como unidades de significado.",
        "Use o contexto para deduzir vocabulário.",
        "Não interrompa a leitura a cada palavra desconhecida.",
        "Procure no dicionário apenas o que realmente importa.",
        "Priorize a continuidade da compreensão."
      ]
    },
    {
      title: "Aula 3 — Identificando estilo e intenção do autor",
      explanation: "Autores possuem estilos diferentes. Alguns escrevem de maneira direta, enquanto outros utilizam descrições detalhadas, metáforas, ironia ou linguagem técnica. Observe como o autor apresenta ideias, constrói personagens e organiza informações. Em textos de não-ficção, procure identificar a tese, as evidências e as conclusões.",
      examples: [
        { en: "The author argues that creativity is essential for scientific progress.", pt: "O autor argumenta que a criatividade é essencial para o progresso científico." },
        { en: "The description creates a mysterious atmosphere.", pt: "A descrição cria uma atmosfera misteriosa." },
        { en: "The narrator seems unreliable because important details are missing.", pt: "O narrador parece pouco confiável porque faltam informações importantes." }
      ],
      keyPoints: [
        "Observe o estilo de escrita.",
        "Identifique a intenção do autor.",
        "Diferencie narrativa e argumentação.",
        "Reconheça metáforas e descrições.",
        "Observe como o texto influencia a interpretação."
      ]
    },
    {
      title: "Aula 4 — Vocabulário essencial e expressões recorrentes",
      explanation: "Em uma leitura extensa, algumas palavras aparecem repetidamente e merecem atenção. Priorize termos que são importantes para a história, para o argumento ou para compreender acontecimentos. Registre a palavra, seu significado naquele contexto e uma frase própria. Evite criar listas enormes de palavras que talvez nunca utilize.",
      examples: [
        { en: "Eventually, the explorers reached the mountain.", pt: "Finalmente, os exploradores chegaram à montanha." },
        { en: "The discovery had a significant impact on the community.", pt: "A descoberta teve um impacto significativo na comunidade." },
        { en: "Despite the obstacles, she refused to give up.", pt: "Apesar dos obstáculos, ela se recusou a desistir." }
      ],
      keyPoints: [
        "Priorize vocabulário recorrente e importante.",
        "Registre o significado adequado ao contexto.",
        "Aprenda palavras dentro de frases.",
        "Evite interromper excessivamente a leitura.",
        "Revise as palavras que realmente pretende utilizar."
      ]
    },
    {
      title: "Aula 5 — Acompanhando capítulos e argumentos",
      explanation: "Livros maiores exigem acompanhar informações ao longo de vários capítulos. Em ficção, observe personagens, acontecimentos, conflitos e mudanças. Em não-ficção, acompanhe as ideias principais, os argumentos e as evidências. Ao terminar um capítulo, tente explicar o que aconteceu ou o que foi defendido sem consultar o texto.",
      examples: [
        { en: "The chapter introduces the central conflict of the story.", pt: "O capítulo apresenta o conflito central da história." },
        { en: "The author provides several examples to support this argument.", pt: "O autor apresenta vários exemplos para sustentar esse argumento." },
        { en: "This event changes the way the character sees the world.", pt: "Esse acontecimento muda a maneira como o personagem vê o mundo." }
      ],
      keyPoints: [
        "Acompanhe informações entre capítulos.",
        "Identifique acontecimentos e conflitos.",
        "Reconheça argumentos e evidências.",
        "Resuma cada capítulo com suas próprias palavras.",
        "Observe como as ideias evoluem ao longo da obra."
      ]
    },
    {
      title: "Aula 6 — Projeto de leitura em inglês",
      explanation: "Nesta aula, organize um projeto de leitura de um livro completo. Divida a obra em partes, estabeleça metas possíveis e registre breves resumos em inglês. Ao terminar, escreva uma avaliação apresentando o tema, as ideias principais, os pontos mais interessantes e sua opinião. Não é necessário compreender cada palavra para ter uma experiência completa de leitura.",
      examples: [
        { en: "I chose this book because I was interested in its subject.", pt: "Escolhi este livro porque estava interessado em seu assunto." },
        { en: "The most interesting part was the way the author explained the problem.", pt: "A parte mais interessante foi a maneira como o autor explicou o problema." },
        { en: "Overall, the book changed the way I think about this topic.", pt: "No geral, o livro mudou a maneira como penso sobre esse assunto." }
      ],
      keyPoints: [
        "Divida o livro em metas de leitura.",
        "Registre resumos breves em inglês.",
        "Anote apenas vocabulário realmente necessário.",
        "Produza uma avaliação ao terminar.",
        "Valorize a compreensão global da obra."
      ]
    }
  ]
},
{
  title: "Semana 43 — Podcasts Nativos Avançados",
  goal: "Aprimorar a compreensão de conversas espontâneas, entrevistas extensas, debates e explicações especializadas em inglês, reconhecendo argumentos, sotaques e mudanças de assunto.",
  days: [
    {
      title: "Aula 1 — Entrando no mundo dos podcasts",
      explanation: "Podcasts apresentam inglês autêntico, frequentemente com conversas longas e espontâneas. Escolha programas relacionados a assuntos de interesse, como ciência, tecnologia, história, cultura ou esportes. Antes de ouvir, observe o título e o tema do episódio. Isso cria expectativas e ajuda a compreender informações desconhecidas.",
      examples: [
        { en: "Today's episode is about the future of artificial intelligence.", pt: "O episódio de hoje é sobre o futuro da inteligência artificial." },
        { en: "Our guest has spent years researching this subject.", pt: "Nosso convidado passou anos pesquisando esse assunto." },
        { en: "Let's start by discussing the main problem.", pt: "Vamos começar discutindo o problema principal." }
      ],
      keyPoints: [
        "Escolha assuntos interessantes.",
        "Utilize o título para antecipar o tema.",
        "Comece com episódios de duração administrável.",
        "Observe quem está falando e qual é o objetivo da conversa.",
        "A familiaridade com o assunto facilita a compreensão."
      ]
    },
    {
      title: "Aula 2 — Acompanhando entrevistas longas",
      explanation: "Entrevistas podem mudar de assunto várias vezes. O entrevistador faz perguntas, solicita exemplos e pede esclarecimentos. O convidado desenvolve respostas, apresenta experiências e explica opiniões. Durante a escuta, procure identificar a pergunta principal, a resposta, os exemplos e as conclusões de cada parte.",
      examples: [
        { en: "Could you explain what led you to this discovery?", pt: "Você poderia explicar o que levou você a essa descoberta?" },
        { en: "The most challenging part was finding reliable information.", pt: "A parte mais desafiadora foi encontrar informações confiáveis." },
        { en: "Looking back, I would probably make a different decision.", pt: "Olhando para trás, provavelmente tomaria uma decisão diferente." }
      ],
      keyPoints: [
        "Identifique perguntas e respostas.",
        "Acompanhe mudanças de assunto.",
        "Reconheça exemplos e explicações.",
        "Observe opiniões e experiências pessoais.",
        "Resuma os pontos principais da entrevista."
      ]
    },
    {
      title: "Aula 3 — Entendendo debates de especialistas",
      explanation: "Debates especializados podem apresentar termos técnicos, argumentos complexos e opiniões diferentes. Não tente memorizar cada detalhe. Identifique a questão discutida, as posições dos participantes e as evidências utilizadas. Observe quando alguém concorda, discorda, apresenta uma ressalva ou modifica sua opinião.",
      examples: [
        { en: "There is still considerable disagreement among researchers.", pt: "Ainda existe uma discordância considerável entre os pesquisadores." },
        { en: "The evidence appears to support this explanation.", pt: "As evidências parecem sustentar essa explicação." },
        { en: "However, this conclusion does not explain every case.", pt: "Entretanto, essa conclusão não explica todos os casos." }
      ],
      keyPoints: [
        "Identifique a questão central do debate.",
        "Reconheça as posições dos participantes.",
        "Diferencie evidências e opiniões.",
        "Observe ressalvas e contra-argumentos.",
        "Não confunda familiaridade com o assunto e compreensão do inglês."
      ]
    },
    {
      title: "Aula 4 — Reconhecendo diferentes estilos de fala",
      explanation: "Cada apresentador possui um ritmo, sotaque e maneira de organizar as ideias. Alguns falam de maneira pausada e estruturada; outros utilizam interrupções, expressões informais e mudanças rápidas de assunto. Podcasts também podem reunir participantes de diferentes países. Treine sua capacidade de acompanhar o conteúdo sem depender de um único padrão de pronúncia.",
      examples: [
        { en: "To be honest, I hadn't considered that possibility.", pt: "Para ser sincero, eu não tinha considerado essa possibilidade." },
        { en: "That's a fair point, but I would look at it differently.", pt: "Esse é um ponto válido, mas eu analisaria isso de outra maneira." },
        { en: "What we're trying to understand is why this happened.", pt: "O que estamos tentando compreender é por que isso aconteceu." }
      ],
      keyPoints: [
        "Ouça diferentes falantes e sotaques.",
        "Observe ritmo e entonação.",
        "Reconheça expressões informais.",
        "Adapte sua escuta à velocidade de cada participante.",
        "Não dependa de um único apresentador para praticar."
      ]
    },
    {
      title: "Aula 5 — Anotações inteligentes durante a escuta",
      explanation: "Anotar tudo enquanto escuta pode atrapalhar a compreensão. Em vez disso, registre palavras-chave, nomes, números, argumentos e conclusões. Utilize frases curtas ou tópicos. Depois, reconstrua a mensagem com suas próprias palavras. Essa técnica desenvolve memória auditiva e organização de informações.",
      examples: [
        { en: "The main argument is that technology changes human behavior.", pt: "O argumento principal é que a tecnologia muda o comportamento humano." },
        { en: "One important example mentioned during the interview was a recent study.", pt: "Um exemplo importante mencionado durante a entrevista foi um estudo recente." },
        { en: "The speakers disagreed about the possible consequences.", pt: "Os participantes discordaram sobre as possíveis consequências." }
      ],
      keyPoints: [
        "Anote palavras-chave, não transcrições completas.",
        "Registre argumentos e exemplos.",
        "Organize informações por assunto.",
        "Reconstrua o conteúdo depois da escuta.",
        "Priorize a compreensão contínua."
      ]
    },
    {
      title: "Aula 6 — Desafio de podcast avançado",
      explanation: "Escolha um episódio de podcast em inglês com conteúdo adequado ao seu interesse. Ouça um trecho significativo sem transcrição. Identifique o assunto, os participantes, os principais argumentos e uma informação que tenha aprendido. Depois, produza um resumo oral ou escrito em inglês. Se necessário, consulte a transcrição somente depois da primeira tentativa.",
      examples: [
        { en: "The podcast discusses how scientific discoveries influence society.", pt: "O podcast discute como descobertas científicas influenciam a sociedade." },
        { en: "One of the guests presented a different perspective.", pt: "Um dos convidados apresentou uma perspectiva diferente." },
        { en: "I was able to follow most of the discussion without reading a transcript.", pt: "Consegui acompanhar a maior parte da discussão sem ler uma transcrição." }
      ],
      keyPoints: [
        "Escolha um episódio autêntico.",
        "Faça a primeira escuta sem transcrição.",
        "Identifique argumentos e informações importantes.",
        "Produza um resumo em inglês.",
        "Use a transcrição posteriormente para conferir dúvidas."
      ]
    }
  ]
},
{
  title: "Semana 44 — Pensar em Inglês (Técnicas de Monólogo Interno)",
  goal: "Desenvolver a capacidade de formular pensamentos diretamente em inglês, narrar atividades, organizar ideias e resolver situações cotidianas sem depender da tradução mental constante.",
  days: [
    {
      title: "Aula 1 — Começando a pensar em inglês",
      explanation: "Pensar em inglês não significa proibir completamente o português. Significa desenvolver o hábito de associar situações, objetos e ideias diretamente a expressões em inglês. Comece com pensamentos curtos sobre o que está acontecendo ao seu redor. Em vez de construir uma frase em português e traduzi-la, tente produzir uma frase simples diretamente no idioma.",
      examples: [
        { en: "I'm sitting at my desk.", pt: "Estou sentado à minha mesa." },
        { en: "I need to finish this task.", pt: "Preciso terminar esta tarefa." },
        { en: "It's getting late.", pt: "Está ficando tarde." }
      ],
      keyPoints: [
        "Comece com pensamentos simples.",
        "Associe palavras diretamente a situações.",
        "Não tente traduzir frases complexas imediatamente.",
        "Aceite erros durante a prática.",
        "O objetivo é aumentar a naturalidade, não eliminar o português à força."
      ]
    },
    {
      title: "Aula 2 — Narrando atividades cotidianas",
      explanation: "Uma maneira prática de desenvolver o pensamento em inglês é narrar atividades enquanto elas acontecem. Descreva ações, objetos, decisões e mudanças no ambiente. Utilize Present Simple para hábitos e Present Continuous para ações em andamento. Quando não souber uma palavra, tente explicar a ideia com palavras que já conhece.",
      examples: [
        { en: "I'm preparing breakfast.", pt: "Estou preparando o café da manhã." },
        { en: "I usually organize my room in the morning.", pt: "Geralmente organizo meu quarto pela manhã." },
        { en: "I can't find my notebook, so I'm looking for it.", pt: "Não consigo encontrar meu caderno, então estou procurando por ele." }
      ],
      keyPoints: [
        "Descreva o que está fazendo.",
        "Utilize Present Simple para hábitos.",
        "Utilize Present Continuous para ações em andamento.",
        "Aprenda a explicar palavras desconhecidas de outra maneira.",
        "Pratique em pequenos momentos do cotidiano."
      ]
    },
    {
      title: "Aula 3 — Organizando pensamentos e decisões",
      explanation: "Pensamentos também envolvem planejamento, dúvidas e decisões. Pratique formular perguntas internas, comparar possibilidades e explicar motivos. Utilize expressões como I think, I'm not sure, maybe, I should e I need to. Com o tempo, aumente a complexidade das ideias e conecte diferentes frases.",
      examples: [
        { en: "I think I should start with the most important task.", pt: "Acho que deveria começar pela tarefa mais importante." },
        { en: "I'm not sure which option is better.", pt: "Não tenho certeza de qual opção é melhor." },
        { en: "Maybe I should ask someone for advice.", pt: "Talvez eu devesse pedir conselho a alguém." }
      ],
      keyPoints: [
        "Formule perguntas diretamente em inglês.",
        "Pratique expressar dúvidas.",
        "Compare possibilidades.",
        "Explique mentalmente suas decisões.",
        "Utilize conectores para organizar raciocínios."
      ]
    },
    {
      title: "Aula 4 — Pensando sobre passado e futuro",
      explanation: "Para desenvolver pensamentos mais completos, pratique narrar acontecimentos anteriores e imaginar situações futuras. Utilize Past Simple para eventos concluídos, Present Perfect para experiências relacionadas ao presente e estruturas futuras para planos e previsões. Tente construir pequenas narrativas sem preparar uma tradução em português.",
      examples: [
        { en: "I learned something interesting today.", pt: "Aprendi algo interessante hoje." },
        { en: "I've never tried that before.", pt: "Nunca experimentei isso antes." },
        { en: "Tomorrow, I'm going to work on a new project.", pt: "Amanhã, vou trabalhar em um novo projeto." }
      ],
      keyPoints: [
        "Narre acontecimentos passados.",
        "Reflita sobre experiências.",
        "Planeje atividades futuras.",
        "Utilize os tempos verbais adequados.",
        "Conecte passado, presente e futuro."
      ]
    },
    {
      title: "Aula 5 — Monólogos internos mais complexos",
      explanation: "Quando frases simples se tornam naturais, avance para monólogos mais longos. Escolha um assunto e desenvolva uma sequência de ideias: apresente o tema, explique sua opinião, considere alternativas e chegue a uma conclusão. Não é necessário falar sem pausas. O importante é conseguir manter o raciocínio em inglês mesmo quando precisa procurar uma palavra.",
      examples: [
        { en: "I've been thinking about learning a new skill. It would take time, but it could also create interesting opportunities.", pt: "Tenho pensado em aprender uma nova habilidade. Isso levaria tempo, mas também poderia criar oportunidades interessantes." },
        { en: "Although the project seems complicated, I believe I can organize it into smaller steps.", pt: "Embora o projeto pareça complicado, acredito que posso organizá-lo em etapas menores." },
        { en: "If I had more experience, I would probably approach this problem differently.", pt: "Se tivesse mais experiência, provavelmente abordaria esse problema de maneira diferente." }
      ],
      keyPoints: [
        "Escolha um assunto por vez.",
        "Desenvolva ideias em sequência.",
        "Apresente opiniões e justificativas.",
        "Utilize estruturas gramaticais variadas.",
        "Não interrompa o pensamento a cada erro."
      ]
    },
    {
      title: "Aula 6 — Desafio de um dia pensando em inglês",
      explanation: "Durante esta atividade, escolha alguns momentos do dia para pensar e narrar atividades diretamente em inglês. Inclua ações, observações, decisões, lembranças e planos. Ao final, grave ou escreva um monólogo resumindo sua experiência. Identifique situações em que conseguiu formular ideias naturalmente e momentos em que precisou recorrer ao português.",
      examples: [
        { en: "Today, I tried to describe everything I was doing in English.", pt: "Hoje, tentei descrever tudo o que estava fazendo em inglês." },
        { en: "Sometimes I couldn't remember a word, so I explained the idea differently.", pt: "Às vezes não conseguia lembrar uma palavra, então expliquei a ideia de outra maneira." },
        { en: "I noticed that some expressions are becoming more natural to me.", pt: "Percebi que algumas expressões estão se tornando mais naturais para mim." }
      ],
      keyPoints: [
        "Pratique em diferentes momentos do dia.",
        "Inclua passado, presente e futuro.",
        "Experimente narrar decisões e opiniões.",
        "Registre dificuldades sem se cobrar perfeição.",
        "Observe sua evolução na formulação espontânea de ideias."
      ]
    }
  ]
},
{
  title: "Semana 45 — Shadowing (Técnica de Sombra na Pronúncia)",
  goal: "Aprimorar ritmo, entonação, articulação, ligação entre palavras e fluidez oral por meio da repetição simultânea de falas autênticas em inglês.",
  days: [
    {
      title: "Aula 1 — Conhecendo o Shadowing",
      explanation: "Shadowing é uma técnica na qual você escuta uma fala e tenta repeti-la quase simultaneamente, acompanhando o locutor. O objetivo não é apenas copiar palavras, mas observar ritmo, pausas, entonação e ligação entre sons. Comece com trechos curtos e claros. Primeiro escute o trecho, depois acompanhe a fala e, finalmente, tente repetir sem depender tanto do áudio.",
      examples: [
        { en: "It's a beautiful day, isn't it?", pt: "É um dia bonito, não é?" },
        { en: "I was wondering if you could help me.", pt: "Eu estava pensando se você poderia me ajudar." },
        { en: "Let me know when you're ready.", pt: "Me avise quando estiver pronto." }
      ],
      keyPoints: [
        "Shadowing significa acompanhar e repetir a fala.",
        "Comece com trechos curtos.",
        "Observe ritmo, pausas e entonação.",
        "Não tente falar mais rápido do que consegue.",
        "A compreensão do trecho vem antes da imitação."
      ]
    },
    {
      title: "Aula 2 — Ritmo e acentuação das frases",
      explanation: "O inglês possui padrões de ritmo em que palavras importantes costumam receber maior destaque, enquanto palavras gramaticais frequentemente são pronunciadas de maneira mais reduzida. Ao praticar, observe quais palavras carregam a informação principal. Não pronuncie todas as palavras com a mesma intensidade. Acompanhe o ritmo natural do locutor.",
      examples: [
        { en: "I NEED to TALK to YOU.", pt: "Eu PRECISO conversar com VOCÊ." },
        { en: "What are you DOING here?", pt: "O que você está FAZENDO aqui?" },
        { en: "I REALLY want to LEARN this.", pt: "Eu REALMENTE quero APRENDER isso." }
      ],
      keyPoints: [
        "Observe as palavras que recebem destaque.",
        "Palavras importantes costumam carregar o ritmo.",
        "Palavras gramaticais podem ser reduzidas.",
        "Não pronuncie cada palavra com a mesma intensidade.",
        "Imite o ritmo completo da frase."
      ]
    },
    {
      title: "Aula 3 — Linking Sounds: conectando palavras",
      explanation: "Na fala natural, palavras próximas frequentemente se conectam. Quando uma palavra termina em consoante e a seguinte começa com vogal, os sons podem ser pronunciados de maneira contínua. Também existem mudanças e reduções em determinadas combinações. Reconhecer essas ligações ajuda tanto a compreender falantes nativos quanto a falar de maneira mais fluida.",
      examples: [
        { en: "Turn it off.", pt: "Desligue isso." },
        { en: "Pick it up.", pt: "Pegue isso." },
        { en: "An apple a day keeps the doctor away.", pt: "Uma maçã por dia mantém o médico afastado." }
      ],
      keyPoints: [
        "Palavras podem se conectar durante a fala.",
        "Consoantes finais podem ligar-se às vogais seguintes.",
        "A pronúncia natural não apresenta pausas entre todas as palavras.",
        "Observe as ligações no áudio original.",
        "Não elimine sons importantes apenas para falar mais rápido."
      ]
    },
    {
      title: "Aula 4 — Entonação, pausas e intenção",
      explanation: "A entonação transmite informações além das palavras. Uma frase pode soar como pergunta, surpresa, dúvida, entusiasmo ou desaprovação dependendo do movimento da voz. As pausas também organizam o significado. Durante o Shadowing, tente reproduzir a intenção comunicativa do falante, e não apenas os sons individuais.",
      examples: [
        { en: "Really? I had no idea!", pt: "Sério? Eu não fazia ideia!" },
        { en: "I thought you were coming today.", pt: "Achei que você viria hoje." },
        { en: "That's exactly what I wanted to say.", pt: "Era exatamente isso que eu queria dizer." }
      ],
      keyPoints: [
        "A entonação ajuda a transmitir intenção.",
        "Observe subidas e descidas da voz.",
        "Respeite as pausas naturais.",
        "Diferencie perguntas, afirmações e reações.",
        "Imite a expressão comunicativa do trecho."
      ]
    },
    {
      title: "Aula 5 — Shadowing com diferentes sotaques",
      explanation: "Depois de praticar com um falante, experimente materiais de diferentes regiões. O inglês americano, britânico e australiano apresenta diferenças de pronúncia, ritmo e vocabulário. Escolha um sotaque por trecho e concentre-se em reproduzir aquele modelo específico. Não misture características aleatoriamente nem tente eliminar seu sotaque brasileiro: priorize clareza e consistência.",
      examples: [
        { en: "Could you tell me where the nearest station is?", pt: "Você poderia me dizer onde fica a estação mais próxima?" },
        { en: "I've been looking forward to this moment.", pt: "Estive esperando ansiosamente por este momento." },
        { en: "We should probably get going soon.", pt: "Provavelmente deveríamos ir em breve." }
      ],
      keyPoints: [
        "Pratique com diferentes falantes.",
        "Observe diferenças regionais.",
        "Escolha um modelo por atividade.",
        "Priorize clareza e inteligibilidade.",
        "Não existe necessidade de apagar seu sotaque de origem."
      ]
    },
    {
      title: "Aula 6 — Projeto completo de Shadowing",
      explanation: "Escolha um trecho autêntico de aproximadamente 30 a 60 segundos, com áudio claro e conteúdo compreensível. Primeiro, escute sem repetir. Depois, acompanhe o locutor em partes pequenas. Em seguida, repita o trecho completo junto com o áudio. Por último, grave sua própria versão e compare ritmo, clareza, pausas e entonação. Procure identificar melhorias específicas, sem exigir uma imitação perfeita.",
      examples: [
        { en: "The most important thing is to keep practicing consistently.", pt: "A coisa mais importante é continuar praticando consistentemente." },
        { en: "You don't have to be perfect to communicate effectively.", pt: "Você não precisa ser perfeito para se comunicar de maneira eficaz." },
        { en: "With enough practice, speaking becomes more natural.", pt: "Com prática suficiente, falar se torna mais natural." }
      ],
      keyPoints: [
        "Escolha um trecho de áudio claro.",
        "Escute antes de começar a repetir.",
        "Pratique em pequenos segmentos.",
        "Grave sua própria versão.",
        "Compare ritmo, clareza, pausas e entonação."
      ]
    }
  ]
},
{
  title: "Semana 46 — Conversação com Nativos ou Profissionais",
  goal: "Desenvolver fluência comunicativa em interações reais, mantendo conversas espontâneas, fazendo perguntas, explicando opiniões e lidando naturalmente com dificuldades de comunicação.",
  days: [
    {
      title: "Aula 1 — Iniciando conversas naturalmente",
      explanation: "Conversas reais começam com cumprimentos, perguntas e comentários relacionados à situação. Em vez de depender de diálogos decorados, aprenda a reagir ao que a outra pessoa diz. Demonstre interesse, faça perguntas complementares e compartilhe informações próprias. A conversa deve funcionar como uma troca, não como uma sequência de respostas isoladas.",
      examples: [
        { en: "Hi! How has your day been so far?", pt: "Oi! Como foi seu dia até agora?" },
        { en: "What do you usually do in your free time?", pt: "O que você costuma fazer no seu tempo livre?" },
        { en: "That's interesting. How did you get into that?", pt: "Que interessante. Como você começou a se interessar por isso?" }
      ],
      keyPoints: [
        "Inicie conversas com naturalidade.",
        "Faça perguntas relacionadas ao assunto.",
        "Demonstre interesse nas respostas.",
        "Compartilhe experiências próprias.",
        "Evite transformar a conversa em um interrogatório."
      ]
    },
    {
      title: "Aula 2 — Mantendo uma conversa sem pausas excessivas",
      explanation: "A fluência depende da capacidade de manter a comunicação mesmo quando você precisa pensar. Utilize expressões de transição, comentários e perguntas para continuar a conversa. Se esquecer uma palavra, explique a ideia de outra maneira. Pequenas pausas são normais e não significam que a comunicação falhou.",
      examples: [
        { en: "Let me think about that for a second.", pt: "Deixe-me pensar nisso por um segundo." },
        { en: "What I mean is that we need more time.", pt: "O que quero dizer é que precisamos de mais tempo." },
        { en: "That's a good question. I've never thought about it that way.", pt: "Essa é uma boa pergunta. Nunca pensei nisso dessa maneira." }
      ],
      keyPoints: [
        "Utilize expressões para ganhar tempo.",
        "Explique uma ideia de outra maneira quando necessário.",
        "Faça perguntas complementares.",
        "Não tenha medo de pequenas pausas.",
        "Priorize a continuidade da comunicação."
      ]
    },
    {
      title: "Aula 3 — Explicando ideias e experiências pessoais",
      explanation: "Em conversas mais avançadas, você precisa conseguir explicar experiências, opiniões, interesses e projetos com detalhes suficientes. Organize suas respostas com contexto, explicação e exemplos. Utilize diferentes tempos verbais para contar acontecimentos e relacioná-los ao presente. Evite respostas muito curtas quando o assunto permite desenvolver uma ideia.",
      examples: [
        { en: "I've been working on a personal project that combines technology and creativity.", pt: "Tenho trabalhado em um projeto pessoal que combina tecnologia e criatividade." },
        { en: "I started learning English because I wanted to communicate with more people.", pt: "Comecei a aprender inglês porque queria me comunicar com mais pessoas." },
        { en: "One of the most interesting things I've experienced was meeting people from different backgrounds.", pt: "Uma das coisas mais interessantes que vivi foi conhecer pessoas de diferentes origens." }
      ],
      keyPoints: [
        "Desenvolva respostas com contexto e exemplos.",
        "Utilize diferentes tempos verbais.",
        "Explique experiências e interesses.",
        "Organize informações em sequência.",
        "Adapte o nível de detalhe à conversa."
      ]
    },
    {
      title: "Aula 4 — Lidando com dificuldades durante conversas",
      explanation: "Mesmo falantes avançados não compreendem tudo o tempo inteiro. Em conversas reais, você precisa saber pedir esclarecimentos, confirmar informações e corrigir mal-entendidos. Se não compreender uma palavra, peça para a pessoa repetir ou explicar. Se perceber que foi mal interpretado, reformule sua frase com calma.",
      examples: [
        { en: "Could you rephrase that, please?", pt: "Você poderia reformular isso, por favor?" },
        { en: "Just to make sure I understood, are you saying that we should wait?", pt: "Só para ter certeza de que entendi, você está dizendo que devemos esperar?" },
        { en: "I may not have explained that very clearly.", pt: "Talvez eu não tenha explicado isso com muita clareza." }
      ],
      keyPoints: [
        "Peça esclarecimentos quando necessário.",
        "Confirme informações importantes.",
        "Reformule frases que não foram compreendidas.",
        "Não finja entender algo importante.",
        "Trate mal-entendidos como parte normal da comunicação."
      ]
    },
    {
      title: "Aula 5 — Conversas profissionais e intercâmbios",
      explanation: "Conversas com professores, profissionais ou participantes de intercâmbios podem exigir um tom mais formal. Aprenda a apresentar seu objetivo, fazer perguntas educadas e discutir assuntos com clareza. Em ambientes profissionais, evite gírias excessivas e observe as convenções de cortesia. Em intercâmbios, aproveite para conversar sobre experiências, culturas e interesses.",
      examples: [
        { en: "Thank you for taking the time to speak with me.", pt: "Obrigado por reservar um tempo para conversar comigo." },
        { en: "I'd like to learn more about your experience in this field.", pt: "Gostaria de saber mais sobre sua experiência nesta área." },
        { en: "Could you recommend any resources for further study?", pt: "Você poderia recomendar alguns recursos para estudar mais?" }
      ],
      keyPoints: [
        "Adapte a formalidade ao ambiente.",
        "Faça perguntas claras e educadas.",
        "Demonstre interesse pelo conhecimento do interlocutor.",
        "Evite gírias em situações profissionais formais.",
        "Respeite diferenças culturais e comunicativas."
      ]
    },
    {
      title: "Aula 6 — Desafio de conversação real",
      explanation: "Nesta aula, organize uma conversa completa em inglês com um professor, parceiro de intercâmbio ou outro interlocutor adequado. Escolha um assunto e converse sobre ele sem depender de um roteiro completo. Apresente-se, faça perguntas, desenvolva respostas, explique opiniões e lide com eventuais dificuldades. Ao final, registre o que conseguiu comunicar, quais situações foram difíceis e o que deseja melhorar. A avaliação deve considerar comunicação, compreensão, clareza e capacidade de manter a conversa, não a ausência absoluta de erros.",
      examples: [
        { en: "I've really enjoyed this conversation. I learned a lot from your perspective.", pt: "Gostei muito desta conversa. Aprendi bastante com sua perspectiva." },
        { en: "I found it difficult to explain some ideas, but I managed to communicate them.", pt: "Achei difícil explicar algumas ideias, mas consegui comunicá-las." },
        { en: "I'd love to continue discussing this topic another time.", pt: "Gostaria muito de continuar discutindo esse assunto em outra ocasião." }
      ],
      keyPoints: [
        "Participe de uma conversa real ou simulada.",
        "Evite depender de um roteiro decorado.",
        "Apresente opiniões e experiências.",
        "Faça perguntas e responda espontaneamente.",
        "Avalie clareza, compreensão e continuidade.",
        "Identifique objetivos para a próxima etapa."
      ]
    }
  ]
},


{
  title: "Semana 47 — Escrita Criativa e Diário Pessoal",
  goal: "Desenvolver autonomia na escrita criativa em inglês, produzindo reflexões pessoais, diários, resenhas, crônicas e narrativas com vocabulário expressivo e organização avançada.",
  days: [
    {
      title: "Aula 1 — Construindo um diário pessoal em inglês",
      explanation: "Um diário pessoal permite registrar acontecimentos, pensamentos, sentimentos e experiências. Diferentemente de um ensaio acadêmico, ele pode utilizar uma linguagem mais natural e pessoal. Você pode escrever sobre o que aconteceu durante o dia, o que aprendeu, suas expectativas e suas dúvidas. Utilize o passado para contar acontecimentos e o presente para registrar pensamentos atuais.",
      examples: [
        { en: "Today was more interesting than I expected.", pt: "Hoje foi mais interessante do que eu esperava." },
        { en: "I've been thinking about my future a lot lately.", pt: "Tenho pensado bastante sobre meu futuro ultimamente." },
        { en: "I hope tomorrow brings something unexpected.", pt: "Espero que amanhã traga algo inesperado." }
      ],
      keyPoints: [
        "Utilize o diário para registrar experiências reais ou imaginárias.",
        "Combine passado, presente e futuro.",
        "Escreva pensamentos, não apenas acontecimentos.",
        "Use uma linguagem natural e pessoal.",
        "Não transforme cada entrada em um ensaio formal."
      ]
    },
    {
      title: "Aula 2 — Escrevendo reflexões profundas",
      explanation: "Uma reflexão desenvolve uma ideia e investiga seus diferentes significados. Você pode refletir sobre escolhas, amizade, aprendizado, tecnologia, tempo, criatividade ou mudanças pessoais. Apresente uma ideia inicial, explore diferentes perspectivas e termine com uma conclusão ou pergunta. Estruturas como what matters most, looking back e on the other hand ajudam a desenvolver raciocínios mais elaborados.",
      examples: [
        { en: "Sometimes, the most important lessons come from unexpected experiences.", pt: "Às vezes, as lições mais importantes vêm de experiências inesperadas." },
        { en: "Looking back, I realize how much my perspective has changed.", pt: "Olhando para trás, percebo o quanto minha perspectiva mudou." },
        { en: "Perhaps success is not only about reaching a goal, but also about understanding the journey.", pt: "Talvez o sucesso não seja apenas alcançar um objetivo, mas também compreender a jornada." }
      ],
      keyPoints: [
        "Escolha uma ideia central para refletir.",
        "Explore diferentes perspectivas.",
        "Utilize exemplos para desenvolver o pensamento.",
        "Evite conclusões superficiais.",
        "Finalize com uma reflexão ou questionamento."
      ]
    },
    {
      title: "Aula 3 — Criando crônicas e narrativas cotidianas",
      explanation: "Uma crônica transforma acontecimentos comuns em histórias interessantes. Ela pode apresentar uma situação cotidiana, uma observação engraçada, uma surpresa ou uma reflexão. Para construir uma boa narrativa, estabeleça o cenário, apresente os acontecimentos, desenvolva um momento marcante e finalize com uma observação. Utilize descrições, diálogos e diferentes tempos verbais.",
      examples: [
        { en: "It was an ordinary afternoon until something unusual happened.", pt: "Era uma tarde comum até que algo incomum aconteceu." },
        { en: "Nobody noticed the small detail that would change everything.", pt: "Ninguém percebeu o pequeno detalhe que mudaria tudo." },
        { en: "By the time I understood what was happening, everyone was already laughing.", pt: "Quando finalmente entendi o que estava acontecendo, todos já estavam rindo." }
      ],
      keyPoints: [
        "Comece apresentando uma situação.",
        "Desenvolva acontecimentos em sequência.",
        "Utilize descrições e diálogos.",
        "Crie um momento marcante.",
        "Finalize com uma observação interessante."
      ]
    },
    {
      title: "Aula 4 — Escrevendo resenhas de filmes e livros",
      explanation: "Uma resenha apresenta uma obra, explica suas características e oferece uma avaliação fundamentada. Não basta dizer que um filme foi bom ou ruim. Comente a história, os personagens, o desenvolvimento, a fotografia, as ideias ou outros elementos relevantes. Evite revelar acontecimentos importantes sem avisar que existem spoilers.",
      examples: [
        { en: "The film explores the consequences of difficult choices.", pt: "O filme explora as consequências de escolhas difíceis." },
        { en: "Although the beginning is slow, the story becomes increasingly engaging.", pt: "Embora o início seja lento, a história se torna cada vez mais envolvente." },
        { en: "What makes this movie memorable is its complex characters.", pt: "O que torna esse filme memorável são seus personagens complexos." }
      ],
      keyPoints: [
        "Apresente a obra e seu gênero.",
        "Explique os aspectos mais importantes.",
        "Justifique suas opiniões.",
        "Utilize exemplos sem revelar spoilers desnecessários.",
        "Finalize com uma avaliação geral."
      ]
    },
    {
      title: "Aula 5 — Desenvolvendo uma voz autoral",
      explanation: "Uma voz autoral é o estilo próprio que aparece na maneira como você escolhe palavras, organiza ideias, descreve situações e apresenta opiniões. Você pode desenvolver um estilo mais humorístico, reflexivo, objetivo, descritivo ou narrativo. Experimente diferentes recursos, como comparações, metáforas e perguntas retóricas, sem exagerar ou tornar o texto artificial.",
      examples: [
        { en: "The city never seems to sleep, even when the streets are empty.", pt: "A cidade nunca parece dormir, mesmo quando as ruas estão vazias." },
        { en: "Time moves differently when you're waiting for something important.", pt: "O tempo passa de maneira diferente quando você está esperando algo importante." },
        { en: "Perhaps the smallest moments are the ones we remember the longest.", pt: "Talvez os menores momentos sejam aqueles dos quais nos lembramos por mais tempo." }
      ],
      keyPoints: [
        "Experimente diferentes estilos de escrita.",
        "Utilize metáforas e comparações com intenção.",
        "Escolha palavras que representem sua ideia.",
        "Evite exageros que prejudiquem a clareza.",
        "Desenvolva uma maneira própria de escrever."
      ]
    },
    {
      title: "Aula 6 — Projeto de escrita criativa",
      explanation: "Agora você vai produzir um pequeno conjunto de textos em inglês. Escolha entre um diário de três entradas, uma crônica, uma resenha ou uma reflexão. Organize suas ideias, escreva uma primeira versão e depois revise vocabulário, gramática, pontuação, coesão e clareza. A avaliação considera a capacidade de transmitir ideias interessantes e bem desenvolvidas, não apenas a ausência de erros.",
      examples: [
        { en: "This experience taught me something I hadn't understood before.", pt: "Essa experiência me ensinou algo que eu não havia compreendido antes." },
        { en: "If I could describe this moment in one word, it would be unforgettable.", pt: "Se pudesse descrever esse momento em uma palavra, seria inesquecível." },
        { en: "Writing helps me organize thoughts that are sometimes difficult to explain.", pt: "Escrever me ajuda a organizar pensamentos que às vezes são difíceis de explicar." }
      ],
      keyPoints: [
        "Escolha um gênero textual.",
        "Planeje o conteúdo antes de escrever.",
        "Produza uma primeira versão completa.",
        "Revise estrutura, vocabulário e gramática.",
        "Finalize um texto que tenha sua própria identidade."
      ]
    }
  ]
},
{
  title: "Semana 48 — Resolução de Problemas Complexos em Inglês",
  goal: "Utilizar o inglês como ferramenta prática para pesquisar informações, compreender tutoriais, seguir instruções, interpretar manuais e solucionar problemas de maneira independente.",
  days: [
    {
      title: "Aula 1 — Pesquisando soluções em inglês",
      explanation: "Pesquisar em inglês amplia o acesso a tutoriais, documentações, fóruns e materiais especializados. Para encontrar informações relevantes, utilize palavras-chave específicas e descreva o problema com clareza. Observe a data da publicação, a confiabilidade da fonte e se a solução corresponde à sua situação. Nem todo resultado encontrado é correto ou atualizado.",
      examples: [
        { en: "How can I fix this error?", pt: "Como posso corrigir este erro?" },
        { en: "What is the difference between these two methods?", pt: "Qual é a diferença entre esses dois métodos?" },
        { en: "A step-by-step guide to solving common problems.", pt: "Um guia passo a passo para resolver problemas comuns." }
      ],
      keyPoints: [
        "Formule pesquisas específicas.",
        "Utilize palavras-chave relacionadas ao problema.",
        "Confira a confiabilidade das fontes.",
        "Verifique se as informações estão atualizadas.",
        "Compare diferentes explicações antes de concluir."
      ]
    },
    {
      title: "Aula 2 — Interpretando tutoriais e instruções",
      explanation: "Tutoriais apresentam procedimentos organizados em etapas. Identifique os verbos de ação, os materiais necessários, a sequência das instruções e os resultados esperados. Expressões como first, next, afterwards e finally indicam ordem. Verbos no imperativo aparecem frequentemente para orientar ações.",
      examples: [
        { en: "First, open the settings menu.", pt: "Primeiro, abra o menu de configurações." },
        { en: "Next, select the option you want to change.", pt: "Em seguida, selecione a opção que deseja alterar." },
        { en: "Finally, save your changes and restart the application.", pt: "Por fim, salve suas alterações e reinicie o aplicativo." }
      ],
      keyPoints: [
        "Identifique a ordem das etapas.",
        "Reconheça verbos no imperativo.",
        "Observe materiais e condições necessários.",
        "Não pule instruções importantes.",
        "Confirme o resultado de cada etapa."
      ]
    },
    {
      title: "Aula 3 — Compreendendo receitas e procedimentos",
      explanation: "Receitas e procedimentos técnicos utilizam quantidades, unidades, tempos, condições e verbos específicos. É necessário compreender expressões de medida, instruções sequenciais e avisos. Em receitas, observe ingredientes e métodos de preparo. Em procedimentos técnicos, preste atenção às condições necessárias e às instruções de segurança.",
      examples: [
        { en: "Add two tablespoons of olive oil.", pt: "Adicione duas colheres de sopa de azeite." },
        { en: "Stir the mixture until it becomes smooth.", pt: "Mexa a mistura até que fique homogênea." },
        { en: "Allow the device to cool before handling it.", pt: "Deixe o aparelho esfriar antes de manuseá-lo." }
      ],
      keyPoints: [
        "Reconheça medidas e quantidades.",
        "Identifique verbos que indicam procedimentos.",
        "Observe expressões de tempo e condição.",
        "Siga a ordem apresentada.",
        "Leia avisos de segurança com atenção."
      ]
    },
    {
      title: "Aula 4 — Lendo manuais e documentação técnica",
      explanation: "Manuais e documentações costumam apresentar vocabulário específico, definições, requisitos e instruções. Comece identificando títulos, seções e avisos. Procure entender o objetivo de cada etapa e a relação entre os componentes. Quando encontrar um termo técnico, utilize o glossário ou a definição fornecida pelo próprio documento.",
      examples: [
        { en: "Make sure the software meets the minimum system requirements.", pt: "Certifique-se de que o software atende aos requisitos mínimos do sistema." },
        { en: "This feature allows users to customize their preferences.", pt: "Este recurso permite que os usuários personalizem suas preferências." },
        { en: "Refer to the troubleshooting section for additional information.", pt: "Consulte a seção de solução de problemas para obter informações adicionais." }
      ],
      keyPoints: [
        "Utilize títulos e seções para localizar informações.",
        "Reconheça requisitos e condições.",
        "Aprenda vocabulário técnico pelo contexto.",
        "Consulte glossários quando necessário.",
        "Diferencie instruções, avisos e explicações."
      ]
    },
    {
      title: "Aula 5 — Investigando e solucionando um problema",
      explanation: "Resolver um problema exige identificar o que está acontecendo, formular hipóteses, procurar evidências e testar soluções adequadas. Em inglês, pratique explicar o problema, descrever o que já tentou e apresentar os resultados. Utilize estruturas condicionais para discutir possibilidades e conectores para explicar relações de causa e consequência. Em situações técnicas, siga procedimentos confiáveis e não execute instruções desconhecidas que possam comprometer seus dados ou dispositivos.",
      examples: [
        { en: "The application keeps crashing whenever I open this file.", pt: "O aplicativo continua fechando sempre que abro este arquivo." },
        { en: "I have already tried restarting the device, but the problem remains.", pt: "Já tentei reiniciar o dispositivo, mas o problema continua." },
        { en: "If this solution doesn't work, we may need to investigate another cause.", pt: "Se essa solução não funcionar, talvez precisemos investigar outra causa." }
      ],
      keyPoints: [
        "Descreva o problema com precisão.",
        "Informe o que já foi tentado.",
        "Formule hipóteses.",
        "Compare possíveis soluções.",
        "Avalie os resultados com cuidado."
      ]
    },
    {
      title: "Aula 6 — Desafio prático de pesquisa",
      explanation: "Escolha um problema cotidiano ou técnico que possa ser investigado com segurança. Pesquise em inglês, encontre pelo menos duas fontes relevantes, compare as explicações e produza um pequeno relatório. Apresente o problema, as informações encontradas, a solução recomendada e os motivos da escolha. O objetivo é conseguir utilizar o inglês para realizar uma tarefa completa, não apenas traduzir um tutorial.",
      examples: [
        { en: "I found two guides that explain different ways to solve the problem.", pt: "Encontrei dois guias que explicam maneiras diferentes de resolver o problema." },
        { en: "The second source provides more detailed instructions.", pt: "A segunda fonte fornece instruções mais detalhadas." },
        { en: "Based on the available information, this appears to be the most suitable solution.", pt: "Com base nas informações disponíveis, esta parece ser a solução mais adequada." }
      ],
      keyPoints: [
        "Escolha um problema concreto e seguro.",
        "Pesquise utilizando termos em inglês.",
        "Compare fontes e instruções.",
        "Organize as informações encontradas.",
        "Apresente uma conclusão fundamentada."
      ]
    }
  ]
},
{
  title: "Semana 49 — Música e Cultura Pop Analisadas",
  goal: "Compreender referências culturais, expressões geracionais, gírias, metáforas e linguagem informal presentes na música e na cultura pop em inglês.",
  days: [
    {
      title: "Aula 1 — Compreendendo música além das palavras",
      explanation: "Músicas podem apresentar linguagem poética, metáforas, imagens, expressões informais e construções que não aparecem frequentemente em conversas comuns. Para compreender uma composição, observe seu tema, o contexto, o sentimento transmitido e a relação entre as ideias. Não dependa exclusivamente da tradução literal. Analise a obra por meio de comentários, resumos, contexto cultural e pequenos exemplos criados para estudo, sem reproduzir letras protegidas por direitos autorais.",
      examples: [
        { en: "The song explores the feeling of starting over.", pt: "A música explora o sentimento de recomeçar." },
        { en: "The artist uses the storm as a metaphor for personal difficulties.", pt: "O artista utiliza a tempestade como metáfora para dificuldades pessoais." },
        { en: "The repeated melody reinforces the emotional atmosphere.", pt: "A melodia repetida reforça a atmosfera emocional." }
      ],
      keyPoints: [
        "Identifique o tema central da composição.",
        "Observe metáforas e linguagem figurada.",
        "Considere o contexto cultural.",
        "Diferencie sentido literal e poético.",
        "Analise letras sem reproduzir extensos trechos protegidos."
      ]
    },
    {
      title: "Aula 2 — Gírias e expressões geracionais",
      explanation: "A linguagem informal muda conforme a época, a comunidade e a plataforma. Algumas expressões se tornam populares em redes sociais, músicas e conversas entre jovens. Entretanto, uma gíria pode ficar ultrapassada rapidamente ou possuir significados diferentes em determinados grupos. Aprenda seu significado contextual e observe em quais situações ela é apropriada.",
      examples: [
        { en: "That outfit is fire!", pt: "Essa roupa está incrível! (Gíria informal.)" },
        { en: "I'm totally down for that.", pt: "Eu topo totalmente isso." },
        { en: "That was a huge plot twist.", pt: "Aquilo foi uma grande reviravolta na história." }
      ],
      keyPoints: [
        "Gírias dependem do contexto e da comunidade.",
        "Fire pode significar excelente ou incrível informalmente.",
        "Down for something significa estar disposto a participar.",
        "Plot twist é uma reviravolta inesperada.",
        "Evite utilizar gírias em situações formais."
      ]
    },
    {
      title: "Aula 3 — Metáforas, símbolos e interpretações",
      explanation: "A cultura pop frequentemente utiliza símbolos para representar ideias abstratas. Uma estrada pode representar uma jornada, uma porta pode representar uma oportunidade e uma tempestade pode representar dificuldades. A interpretação depende do contexto e não existe necessariamente uma única leitura correta. Apresente sua interpretação e explique quais elementos da obra sustentam sua conclusão.",
      examples: [
        { en: "The open door represents a new opportunity.", pt: "A porta aberta representa uma nova oportunidade." },
        { en: "The journey symbolizes personal growth.", pt: "A jornada simboliza crescimento pessoal." },
        { en: "The darkness may represent uncertainty or fear.", pt: "A escuridão pode representar incerteza ou medo." }
      ],
      keyPoints: [
        "Reconheça símbolos e metáforas.",
        "Considere o contexto da obra.",
        "Diferencie interpretação de informação explícita.",
        "Apresente evidências para sua leitura.",
        "Aceite que uma obra pode permitir diferentes interpretações."
      ]
    },
    {
      title: "Aula 4 — Referências culturais e contexto histórico",
      explanation: "Filmes, músicas, séries e jogos frequentemente fazem referências a acontecimentos históricos, personalidades, costumes e outras obras. Para compreender essas referências, identifique o elemento mencionado e investigue seu significado. Observe também como o contexto histórico influencia o vocabulário, o humor e as ideias apresentadas.",
      examples: [
        { en: "The scene contains a reference to a famous historical event.", pt: "A cena contém uma referência a um acontecimento histórico famoso." },
        { en: "The character's reaction reflects the social expectations of that period.", pt: "A reação do personagem reflete as expectativas sociais daquele período." },
        { en: "This expression became popular through social media.", pt: "Essa expressão se tornou popular por meio das redes sociais." }
      ],
      keyPoints: [
        "Identifique referências a outras obras e acontecimentos.",
        "Pesquise o contexto histórico quando necessário.",
        "Observe mudanças culturais entre gerações.",
        "Não interprete referências sem conhecer seu contexto.",
        "Utilize fontes confiáveis para investigar informações."
      ]
    },
    {
      title: "Aula 5 — Analisando opiniões sobre cultura pop",
      explanation: "Críticas e discussões sobre cultura pop apresentam opiniões, comparações e argumentos. Aprenda a explicar por que gosta ou não de uma obra, comparar diferentes artistas e avaliar elementos de uma produção. Utilize expressões para concordar, discordar e apresentar ressalvas. Uma análise interessante vai além de dizer que algo é bom ou ruim.",
      examples: [
        { en: "What makes this album stand out is its experimental sound.", pt: "O que faz esse álbum se destacar é seu som experimental." },
        { en: "Although the movie received mixed reviews, I found its story compelling.", pt: "Embora o filme tenha recebido avaliações variadas, achei sua história envolvente." },
        { en: "I understand why people enjoy this series, even though it isn't my favorite.", pt: "Entendo por que as pessoas gostam dessa série, embora não seja minha favorita." }
      ],
      keyPoints: [
        "Explique suas opiniões com justificativas.",
        "Compare diferentes produções.",
        "Utilize vocabulário crítico.",
        "Reconheça opiniões diferentes.",
        "Diferencie preferência pessoal e avaliação técnica."
      ]
    },
    {
      title: "Aula 6 — Projeto de análise cultural",
      explanation: "Escolha uma música, filme, série ou jogo de língua inglesa. Pesquise seu contexto, identifique o tema, analise expressões culturais e apresente sua interpretação. Você pode produzir uma apresentação ou um texto em inglês. Inclua informações sobre a obra, referências culturais, linguagem utilizada e sua avaliação. Utilize fontes confiáveis e não reproduza letras ou grandes trechos protegidos.",
      examples: [
        { en: "The main theme of this work is the conflict between identity and belonging.", pt: "O tema principal desta obra é o conflito entre identidade e pertencimento." },
        { en: "Its popularity is partly explained by its connection with contemporary culture.", pt: "Sua popularidade é explicada em parte por sua conexão com a cultura contemporânea." },
        { en: "I believe its strongest feature is the way it communicates emotions.", pt: "Acredito que seu ponto mais forte seja a maneira como comunica emoções." }
      ],
      keyPoints: [
        "Escolha uma obra cultural.",
        "Investigue seu contexto.",
        "Identifique referências e expressões.",
        "Desenvolva uma interpretação própria.",
        "Apresente uma análise completa em inglês."
      ]
    }
  ]
},
{
  title: "Semana 50 — Imersão Total (O Mês de Fogo)",
  goal: "Aumentar significativamente o contato cotidiano com o inglês, utilizando configurações digitais, conteúdos autênticos e atividades diárias para tornar o idioma parte natural da rotina.",
  days: [
    {
      title: "Aula 1 — Preparando seu ambiente em inglês",
      explanation: "A imersão começa pela organização do ambiente. Você pode configurar aplicativos, dispositivos e serviços digitais para utilizar inglês, desde que consiga continuar acessando funções importantes. Antes de alterar configurações, verifique como retornar ao idioma anterior. O objetivo é aumentar o contato com o inglês sem comprometer a acessibilidade, a segurança ou a comunicação necessária.",
      examples: [
        { en: "Open the settings and change the display language.", pt: "Abra as configurações e altere o idioma de exibição." },
        { en: "Your device is now set to English.", pt: "Seu dispositivo agora está configurado em inglês." },
        { en: "You can change the language preferences at any time.", pt: "Você pode alterar as preferências de idioma a qualquer momento." }
      ],
      keyPoints: [
        "Configure dispositivos e aplicativos de maneira gradual.",
        "Aprenda os nomes das opções e configurações.",
        "Saiba como retornar ao idioma anterior.",
        "Mantenha acessíveis funções importantes e de segurança.",
        "Utilize o ambiente digital como fonte de exposição diária."
      ]
    },
    {
      title: "Aula 2 — Criando uma rotina de conteúdo em inglês",
      explanation: "Uma imersão produtiva precisa de variedade. Organize momentos para assistir a vídeos, ler notícias, ouvir podcasts e consultar materiais sobre assuntos interessantes. Escolha conteúdos de diferentes níveis de dificuldade. Não é necessário passar o dia inteiro consumindo inglês: a regularidade e a atenção são mais importantes do que a quantidade exagerada.",
      examples: [
        { en: "I usually watch educational videos in the evening.", pt: "Geralmente assisto a vídeos educativos à noite." },
        { en: "I listen to podcasts while doing simple activities.", pt: "Escuto podcasts enquanto realizo atividades simples." },
        { en: "Reading articles helps me discover new vocabulary.", pt: "Ler artigos me ajuda a descobrir vocabulário novo." }
      ],
      keyPoints: [
        "Combine vídeos, leitura e áudio.",
        "Escolha assuntos de seu interesse.",
        "Mantenha uma rotina realista.",
        "Alterne conteúdos fáceis e desafiadores.",
        "Reserve tempo para descansar e realizar outras atividades."
      ]
    },
    {
      title: "Aula 3 — Utilizando inglês nas atividades digitais",
      explanation: "Durante a imersão, experimente navegar por menus, pesquisar informações, escrever anotações e organizar projetos em inglês. Isso desenvolve vocabulário funcional e familiaridade com instruções reais. Em jogos e aplicativos, observe expressões relacionadas a objetivos, configurações, mensagens e tarefas. Não é necessário alterar todas as ferramentas ao mesmo tempo.",
      examples: [
        { en: "Your progress has been saved successfully.", pt: "Seu progresso foi salvo com sucesso." },
        { en: "You need to complete this task before continuing.", pt: "Você precisa concluir esta tarefa antes de continuar." },
        { en: "The available options depend on your current settings.", pt: "As opções disponíveis dependem das suas configurações atuais." }
      ],
      keyPoints: [
        "Experimente utilizar menus em inglês.",
        "Leia mensagens e instruções.",
        "Escreva anotações no idioma.",
        "Aprenda vocabulário digital pelo contexto.",
        "Priorize ferramentas que você já conhece."
      ]
    },
    {
      title: "Aula 4 — Reduzindo a dependência da tradução",
      explanation: "Durante os dias de imersão, tente compreender mensagens pelo contexto antes de recorrer à tradução. Quando encontrar uma expressão desconhecida, observe a situação e tente deduzir o significado. Se necessário, consulte um dicionário em inglês com definições simples. A tradução continua sendo uma ferramenta válida, mas não precisa ser o primeiro recurso em todas as situações.",
      examples: [
        { en: "The instructions are straightforward once you understand the process.", pt: "As instruções são simples depois que você compreende o processo." },
        { en: "I figured out what the message meant from the context.", pt: "Descobri o que a mensagem significava pelo contexto." },
        { en: "Instead of translating every word, I focused on the main idea.", pt: "Em vez de traduzir cada palavra, concentrei-me na ideia principal." }
      ],
      keyPoints: [
        "Tente deduzir significados pelo contexto.",
        "Utilize definições em inglês quando forem úteis.",
        "Não dependa da tradução automática.",
        "Consulte ferramentas quando a compreensão for importante.",
        "Valorize a interpretação geral."
      ]
    },
    {
      title: "Aula 5 — Desafio de sete dias de imersão",
      explanation: "Organize um desafio de sete dias com contato diário significativo com inglês. Escolha atividades de leitura, escuta, escrita e conversação. Registre o que consumiu, o que compreendeu e quais expressões aprendeu. Você pode utilizar inglês na interface dos dispositivos e nos conteúdos escolhidos, mas mantenha disponíveis recursos essenciais em português quando necessário. O desafio deve ser sustentável e não precisa eliminar outras línguas da sua rotina.",
      examples: [
        { en: "Today, I watched a documentary and read an article in English.", pt: "Hoje, assisti a um documentário e li um artigo em inglês." },
        { en: "I understood more than I expected without using translations.", pt: "Entendi mais do que esperava sem utilizar traduções." },
        { en: "I noticed that I can recognize many expressions automatically.", pt: "Percebi que consigo reconhecer muitas expressões automaticamente." }
      ],
      keyPoints: [
        "Planeje sete dias de contato com o idioma.",
        "Inclua leitura, escuta, escrita e fala.",
        "Registre atividades e descobertas.",
        "Mantenha uma rotina equilibrada.",
        "Observe a evolução da compreensão."
      ]
    },
    {
      title: "Aula 6 — Relatório da imersão",
      explanation: "Depois dos sete dias, produza um relatório em inglês sobre a experiência. Descreva quais atividades realizou, quais conteúdos compreendeu melhor, quais dificuldades encontrou e como pretende continuar praticando. Compare sua experiência com o período anterior à imersão. O objetivo é identificar mudanças concretas na familiaridade com o idioma, sem esperar que uma semana produza fluência perfeita.",
      examples: [
        { en: "During the challenge, I became more comfortable using English every day.", pt: "Durante o desafio, fiquei mais confortável utilizando inglês diariamente." },
        { en: "Listening was easier than I expected, but writing still requires practice.", pt: "Escutar foi mais fácil do que eu esperava, mas escrever ainda exige prática." },
        { en: "I plan to maintain some of these habits in the future.", pt: "Pretendo manter alguns desses hábitos no futuro." }
      ],
      keyPoints: [
        "Registre as atividades realizadas.",
        "Compare suas dificuldades antes e depois.",
        "Identifique habilidades que melhoraram.",
        "Reconheça o que ainda precisa de prática.",
        "Crie uma rotina de continuidade."
      ]
    }
  ]
},
{
  title: "Semana 51 — Revisão Final Completa",
  goal: "Consolidar os conhecimentos desenvolvidos ao longo do curso, avaliando gramática aplicada, vocabulário, leitura, escrita, compreensão auditiva, pronúncia e comunicação espontânea.",
  days: [
    {
      title: "Aula 1 — Revisão geral de estruturas gramaticais",
      explanation: "Nesta aula, revise os principais tempos verbais e estruturas estudados durante o curso. Compare Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect, Present Perfect Continuous e Past Perfect. Revise também futuro, voz passiva, discurso indireto, modais, condicionais, orações relativas e gerúndio versus infinitivo. O foco é escolher a estrutura adequada em situações reais.",
      examples: [
        { en: "I usually work in the morning, but today I'm studying.", pt: "Geralmente trabalho pela manhã, mas hoje estou estudando." },
        { en: "I had already left when you called.", pt: "Eu já tinha saído quando você ligou." },
        { en: "If I had more experience, I would apply for the position.", pt: "Se eu tivesse mais experiência, me candidataria à vaga." }
      ],
      keyPoints: [
        "Diferencie os principais tempos verbais.",
        "Revise formas afirmativas, negativas e interrogativas.",
        "Reconheça voz passiva e discurso indireto.",
        "Pratique condicionais e orações relativas.",
        "Escolha estruturas de acordo com o contexto."
      ]
    },
    {
      title: "Aula 2 — Revisão de vocabulário e comunicação",
      explanation: "Revise vocabulário de diferentes áreas: cotidiano, tecnologia, estudos, viagens, trabalho, cultura, sentimentos e situações sociais. Relembre phrasal verbs, expressões idiomáticas, gírias e combinações naturais de palavras. O importante é conseguir reconhecer e utilizar o vocabulário, não apenas lembrar traduções isoladas.",
      examples: [
        { en: "We need to come up with a better solution.", pt: "Precisamos encontrar uma solução melhor." },
        { en: "She brought up an interesting point during the discussion.", pt: "Ela levantou um ponto interessante durante a discussão." },
        { en: "I'm looking forward to hearing your opinion.", pt: "Estou ansioso para ouvir sua opinião." }
      ],
      keyPoints: [
        "Revise vocabulário de diferentes contextos.",
        "Reforce phrasal verbs.",
        "Pratique expressões idiomáticas.",
        "Aprenda combinações naturais de palavras.",
        "Utilize vocabulário em frases próprias."
      ]
    },
    {
      title: "Aula 3 — Teste de leitura e interpretação",
      explanation: "Leia um texto inédito em inglês com dificuldade compatível com seu nível. Identifique o assunto, a tese, os argumentos, as informações específicas e as conclusões. Observe palavras desconhecidas e tente deduzir seus significados. Depois, responda perguntas que exijam interpretação, comparação e identificação de informações implícitas.",
      examples: [
        { en: "Although the technology was initially expensive, its widespread adoption eventually reduced costs.", pt: "Embora a tecnologia fosse inicialmente cara, sua ampla adoção acabou reduzindo os custos." },
        { en: "The report highlights several challenges that still need to be addressed.", pt: "O relatório destaca vários desafios que ainda precisam ser enfrentados." },
        { en: "The author suggests that long-term results matter more than immediate success.", pt: "O autor sugere que resultados de longo prazo importam mais do que o sucesso imediato." }
      ],
      keyPoints: [
        "Leia um texto que não tenha estudado anteriormente.",
        "Identifique ideias principais e detalhes.",
        "Interprete conectores e relações argumentativas.",
        "Deduzir palavras pelo contexto.",
        "Responda perguntas que exijam interpretação."
      ]
    },
    {
      title: "Aula 4 — Teste de compreensão auditiva rápida",
      explanation: "A compreensão auditiva deve ser avaliada com áudios inéditos, falados em velocidade natural. Escute pequenos trechos de conversas, entrevistas ou explicações. Identifique o assunto, os participantes, as intenções e os detalhes importantes. Alguns trechos podem ser reproduzidos apenas uma vez durante a avaliação para observar sua capacidade de acompanhar a fala sem depender de repetições constantes.",
      examples: [
        { en: "We were supposed to meet at six, but the train was delayed.", pt: "Era para nos encontrarmos às seis, mas o trem atrasou." },
        { en: "Apparently, the company has decided to change its strategy.", pt: "Aparentemente, a empresa decidiu mudar sua estratégia." },
        { en: "I didn't realize how complicated the situation had become.", pt: "Eu não percebi o quanto a situação havia se tornado complicada." }
      ],
      keyPoints: [
        "Utilize áudios que não foram estudados anteriormente.",
        "Pratique compreensão em velocidade natural.",
        "Identifique assunto e informações específicas.",
        "Observe intenção e entonação.",
        "Não dependa exclusivamente da transcrição."
      ]
    },
    {
      title: "Aula 5 — Teste de escrita e comunicação oral",
      explanation: "Nesta aula, produza um texto sobre um tema desconhecido e depois explique sua opinião oralmente. Organize argumentos, utilize exemplos e apresente uma conclusão. Na fala, procure manter o raciocínio sem ler um roteiro completo. Avalie clareza, vocabulário, estrutura gramatical, pronúncia e capacidade de desenvolver ideias.",
      examples: [
        { en: "One of the biggest challenges in modern society is managing information effectively.", pt: "Um dos maiores desafios da sociedade moderna é administrar informações de maneira eficiente." },
        { en: "There are several possible solutions, although each one has limitations.", pt: "Existem várias soluções possíveis, embora cada uma tenha limitações." },
        { en: "Personally, I believe that education plays a central role in addressing this issue.", pt: "Pessoalmente, acredito que a educação desempenha um papel central na resolução dessa questão." }
      ],
      keyPoints: [
        "Produza um texto original.",
        "Organize argumentos e exemplos.",
        "Explique suas ideias oralmente.",
        "Avalie clareza e fluidez.",
        "Identifique dificuldades gramaticais e de pronúncia."
      ]
    },
    {
      title: "Aula 6 — Diagnóstico e preparação para o teste final",
      explanation: "Antes do teste final, reúna os resultados das avaliações anteriores. Identifique os pontos fortes e as dificuldades que ainda aparecem. Revise apenas os assuntos que precisam de atenção, evitando tentar estudar tudo novamente de maneira desorganizada. Prepare-se para utilizar o inglês em tarefas inéditas, nas quais não será possível depender de respostas decoradas.",
      examples: [
        { en: "My strongest skill is reading comprehension.", pt: "Minha habilidade mais forte é a compreensão de leitura." },
        { en: "I still need to improve my listening skills.", pt: "Ainda preciso melhorar minhas habilidades de compreensão auditiva." },
        { en: "I'm ready to demonstrate what I can do in English.", pt: "Estou pronto para demonstrar o que consigo fazer em inglês." }
      ],
      keyPoints: [
        "Analise os resultados das avaliações.",
        "Identifique pontos fortes e dificuldades.",
        "Revise conteúdos específicos.",
        "Prepare-se para situações inéditas.",
        "Priorize comunicação real em vez de memorização."
      ]
    }
  ]
},
{
  title: "Semana 52 — Teste Final",
  goal: "Demonstrar capacidade avançada de utilizar inglês em situações reais e inéditas, integrando compreensão auditiva, leitura complexa, interpretação, escrita, argumentação e conversação espontânea.",
  days: [
    {
      title: "Aula 1 — Desafio de palestra técnica inédita",
      explanation: "Nesta atividade, assista a uma palestra técnica ou apresentação sobre um assunto que não tenha estudado anteriormente. O conteúdo deve estar em inglês e ser apresentado sem legendas. Durante a atividade, identifique o tema, a ideia central, os argumentos, os exemplos e as conclusões. Você não precisa reconhecer todas as palavras técnicas, mas deve compreender a estrutura geral da apresentação e as informações fundamentais.",
      examples: [
        { en: "The speaker argues that technological innovation depends on collaboration.", pt: "O palestrante argumenta que a inovação tecnológica depende de colaboração." },
        { en: "One of the main challenges discussed was the lack of reliable data.", pt: "Um dos principais desafios discutidos foi a falta de dados confiáveis." },
        { en: "The presentation concludes by suggesting several possible improvements.", pt: "A apresentação termina sugerindo várias melhorias possíveis." }
      ],
      keyPoints: [
        "Escolha uma palestra inédita em inglês.",
        "Assista sem legendas.",
        "Identifique tema, argumentos e conclusões.",
        "Registre informações importantes.",
        "Produza um resumo sem consultar uma transcrição inicialmente."
      ]
    },
    {
      title: "Aula 2 — Leitura e interpretação de artigo complexo",
      explanation: "Leia um artigo inédito em inglês sobre ciência, tecnologia, história, sociedade ou outro assunto relevante. Identifique a tese, a estrutura argumentativa, as evidências, as ressalvas e a conclusão. Observe o significado de expressões no contexto e diferencie fatos apresentados pelo autor de interpretações pessoais. O objetivo é compreender o raciocínio desenvolvido no texto, não apenas reconhecer palavras.",
      examples: [
        { en: "The findings challenge several assumptions that had previously been accepted.", pt: "As descobertas questionam várias suposições que haviam sido anteriormente aceitas." },
        { en: "Despite the limitations of the study, the results provide valuable insights.", pt: "Apesar das limitações do estudo, os resultados fornecem informações valiosas." },
        { en: "Further investigation is necessary before drawing definitive conclusions.", pt: "Mais investigações são necessárias antes de chegar a conclusões definitivas." }
      ],
      keyPoints: [
        "Leia um artigo inédito e relativamente complexo.",
        "Identifique tese, argumentos e evidências.",
        "Diferencie fatos e interpretações.",
        "Interprete vocabulário pelo contexto.",
        "Resuma as conclusões do autor."
      ]
    },
    {
      title: "Aula 3 — Preparação para uma entrevista dinâmica",
      explanation: "Uma entrevista em inglês exige compreender perguntas inesperadas e formular respostas coerentes. Prepare-se para falar sobre experiências, interesses, decisões, opiniões, desafios e situações hipotéticas. Não memorize respostas completas. Organize ideias por tópicos e pratique desenvolver respostas com contexto, explicação e exemplos. Quando não entender uma pergunta, peça esclarecimentos educadamente.",
      examples: [
        { en: "Could you tell me about a project you're particularly proud of?", pt: "Você poderia me contar sobre um projeto do qual se orgulha especialmente?" },
        { en: "What would you do if you had to solve an unfamiliar problem?", pt: "O que você faria se precisasse resolver um problema desconhecido?" },
        { en: "What have you learned from your most challenging experience?", pt: "O que você aprendeu com sua experiência mais desafiadora?" }
      ],
      keyPoints: [
        "Pratique perguntas abertas e inesperadas.",
        "Organize respostas com exemplos.",
        "Utilize diferentes tempos verbais.",
        "Explique decisões e experiências.",
        "Peça esclarecimentos quando necessário."
      ]
    },
    {
      title: "Aula 4 — Conversação espontânea e argumentação",
      explanation: "Nesta etapa, participe de uma conversa ou debate sobre um tema que não tenha sido preparado anteriormente. Apresente opiniões, explique argumentos, faça perguntas e responda a objeções. Utilize conectores para organizar o raciocínio e estruturas condicionais para discutir possibilidades. O objetivo é manter a comunicação mesmo quando o assunto muda ou surge uma pergunta inesperada.",
      examples: [
        { en: "I understand your argument, but I would approach the problem differently.", pt: "Entendo seu argumento, mas abordaria o problema de maneira diferente." },
        { en: "If we considered the long-term consequences, we might reach another conclusion.", pt: "Se considerássemos as consequências de longo prazo, poderíamos chegar a outra conclusão." },
        { en: "That's an interesting perspective. What evidence supports that idea?", pt: "Essa é uma perspectiva interessante. Que evidências sustentam essa ideia?" }
      ],
      keyPoints: [
        "Responda sem depender de um roteiro.",
        "Apresente opiniões e justificativas.",
        "Faça perguntas relevantes.",
        "Responda a argumentos contrários.",
        "Mantenha a conversa mesmo diante de imprevistos."
      ]
    },
    {
      title: "Aula 5 — Entrevista final de 15 minutos",
      explanation: "Realize uma entrevista de aproximadamente 15 minutos inteiramente em inglês, com um interlocutor, professor ou sistema de simulação que apresente perguntas variadas. A entrevista deve incluir apresentação pessoal, experiências, interesses, opiniões, resolução de problemas e hipóteses inesperadas. As perguntas devem surgir de acordo com suas respostas, evitando uma sequência totalmente decorada. Avalie compreensão, clareza, fluidez, vocabulário e capacidade de desenvolver ideias. Caso a atividade seja realizada individualmente, grave uma simulação com perguntas previamente preparadas e respostas espontâneas.",
      examples: [
        { en: "What is something you've learned recently that changed your perspective?", pt: "Qual é algo que você aprendeu recentemente e que mudou sua perspectiva?" },
        { en: "How would you explain a difficult concept to someone with no previous experience?", pt: "Como você explicaria um conceito difícil para alguém sem experiência anterior?" },
        { en: "If you could improve one aspect of modern education, what would it be and why?", pt: "Se pudesse melhorar um aspecto da educação moderna, qual seria e por quê?" }
      ],
      keyPoints: [
        "Realize uma entrevista de aproximadamente 15 minutos.",
        "Responda a perguntas dinâmicas.",
        "Apresente experiências e opiniões.",
        "Utilize exemplos e argumentos.",
        "Avalie compreensão e espontaneidade.",
        "Não dependa de respostas previamente decoradas."
      ]
    },
    {
      title: "Aula 6 — Resultado final e avaliação de proficiência",
      explanation: "A última aula reúne as evidências de desempenho de todo o teste. Avalie a compreensão da palestra, a interpretação do artigo, a capacidade de argumentar e a participação na entrevista. O resultado deve apresentar pontos fortes, dificuldades e recomendações de continuidade. A conclusão das 52 semanas demonstra a realização do currículo, mas não significa automaticamente um nível oficial específico do CEFR. Para obter uma certificação, é necessário realizar uma avaliação reconhecida com critérios próprios.",
      examples: [
        { en: "I can understand complex discussions more confidently than before.", pt: "Consigo compreender discussões complexas com mais confiança do que antes." },
        { en: "I still make mistakes, but I can usually communicate my ideas clearly.", pt: "Ainda cometo erros, mas geralmente consigo comunicar minhas ideias com clareza." },
        { en: "Learning a language is an ongoing process, and I intend to keep improving.", pt: "Aprender um idioma é um processo contínuo, e pretendo continuar melhorando." }
      ],
      keyPoints: [
        "Avalie todas as habilidades desenvolvidas.",
        "Considere compreensão, leitura, escrita e conversação.",
        "Identifique pontos fortes e dificuldades.",
        "Não confunda conclusão do curso com certificação oficial.",
        "Defina objetivos para continuar evoluindo."
      ]
    }
  ]
}


  // ==========================================
  // COLE A SEMANA 1 AQUI
  // ==========================================


  // ==========================================
  // COLE A SEMANA 2 AQUI
  // ==========================================


  // ==========================================
  // COLE A SEMANA 3 AQUI
  // ==========================================


  // Continue adicionando as semanas em ordem.
];


// ============================================
// ORGANIZAÇÃO DO CURRÍCULO
// ============================================


function build(lang, weeks) {
  return weeks.map((week, index) => ({
    number: index + 1,
    week: index + 1,
    phase: Math.ceil((index + 1) / 4),
    title: week.title,
    goal: week.goal,
    days: week.days.map((day, dayIndex) => ({
      ...day,
      day: dayIndex + 1
    }))
  }));
}



// ============================================
// EXPORTAÇÕES
// ============================================

export const CURRICULA = {
  ja: build("ja", jp),
  en: build("en", en)
};
