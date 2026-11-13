
// ======================================================
// ELDORIA ACADEMY — BANCO DE QUESTÕES
// ======================================================

function buildQuestions(week, day, rows) {
  return rows.map(([prompt, options, correctAnswer, explanation], i) => ({
    id: `ja-w${week}-d${day}-q${i + 1}`,
    prompt,
    options,
    correctAnswer,
    explanation,
  }));
}

function buildRecovery(week, rows) {
  return rows.map(([prompt, options, correctAnswer, explanation], i) => ({
    id: `ja-w${week}-recovery-q${i + 1}`,
    prompt,
    options,
    correctAnswer,
    explanation,
  }));
}

export const QUESTION_BANK = {
  ja: {

    // ==================================================
    // SEMANA 1 — HIRAGANA + ESTRUTURA BÁSICA
    // ==================================================

    1: {
      days: {

        // AULA 1 — REVISÃO DO HIRAGANA
        1: buildQuestions(1, 1, [
          ["Qual é o som de あ?", ["A", "I", "U", "E"], 0, "あ representa a vogal A."],
          ["Qual hiragana representa KI?", ["け", "き", "か", "こ"], 1, "き representa KI."],
          ["Como se lê ねこ?", ["Neko", "Naka", "Niku", "Niko"], 0, "ねこ é Neko, gato."],
          ["Qual é o som de し?", ["Chi", "Tsu", "Shi", "Su"], 2, "し representa SHI."],
          ["Como se lê さくら?", ["Sakura", "Sakara", "Shakura", "Sakuri"], 0, "さくら é Sakura, cerejeira."],
          ["Qual hiragana representa TSU?", ["ち", "つ", "す", "て"], 1, "つ representa TSU."],
          ["Como se lê ほん?", ["Han", "Hin", "Hon", "Hun"], 2, "ほん é Hon, livro."],
          ["Qual é a ordem das vogais japonesas?", ["あいうえお", "あえいうお", "いうあおえ", "おうえいあ"], 0, "A ordem é A, I, U, E, O."],
          ["Como se lê かわいい?", ["Kirei", "Kawaii", "Kowai", "Kakoi"], 1, "かわいい é Kawaii, fofo."],
          ["Qual alternativa contém apenas hiragana?", ["日本語", "あいうえお", "カキクケコ", "ABCDE"], 1, "あいうえお são caracteres hiragana."]
        ]),

        // AULA 2 — SONS E COMBINAÇÕES
        2: buildQuestions(1, 2, [
          ["Qual combinação forma KYA?", ["きや", "きゃ", "きゅ", "きょ"], 1, "きゃ combina き com ゃ pequeno e forma KYA."],
          ["Como se lê きゅ?", ["Kya", "Kyu", "Kyo", "Kyuu"], 1, "きゅ representa KYU."],
          ["Qual combinação representa SHU?", ["しや", "しゃ", "しゅ", "しょ"], 2, "しゅ representa SHU."],
          ["Qual é a leitura de ちょ?", ["Chya", "Chyu", "Cho", "Chiyo"], 2, "ちょ representa CHO."],
          ["O que o ゃ pequeno faz em きゃ?", ["Duplica a vogal", "Forma o som KYA", "Indica passado", "Separa sílabas"], 1, "O ゃ pequeno combina com o som anterior."],
          ["Qual palavra contém uma combinação com ょ pequeno?", ["きょう", "あさ", "ねこ", "ほん"], 0, "きょう contém きょ, pronunciado KYO."],
          ["Como se lê しゃしん?", ["Shashin", "Sashin", "Chashin", "Shushin"], 0, "しゃしん é Shashin, fotografia."],
          ["Qual é a função do pequeno っ?", ["Alongar toda a palavra", "Indicar uma pausa/consoante dobrada", "Transformar em pergunta", "Indicar plural"], 1, "O pequeno っ marca uma pequena interrupção antes da consoante seguinte."],
          ["Qual é a leitura de がっこう?", ["Gakou", "Gakkou", "Gatsukou", "Gakko"], 1, "がっこう é Gakkou, escola. O pequeno っ duplica o K."],
          ["Qual alternativa apresenta a leitura correta de きゃく?", ["Kyaku", "Kiyaku", "Kaku", "Kyoku"], 0, "きゃく é Kyaku, visitante ou cliente."]
        ]),

        // AULA 3 — ORDEM BÁSICA DAS FRASES
        3: buildQuestions(1, 3, [
          ["Qual é a ordem mais comum de uma frase simples em japonês?", ["Sujeito-verbo-objeto", "Sujeito-objeto-verbo", "Verbo-sujeito-objeto", "Objeto-verbo-sujeito"], 1, "O japonês geralmente coloca o verbo no final."],
          ["Qual é o verbo na frase わたしは がくせいです?", ["わたし", "は", "がくせい", "です"], 3, "です funciona como cópula, ligando o tópico à informação."],
          ["Como se diz 'Eu sou estudante'?", ["がくせい わたし", "わたしは がくせいです", "です わたし", "はです がくせい"], 1, "わたしは がくせいです significa Eu sou estudante."],
          ["Em japonês, onde normalmente fica o verbo?", ["No começo", "No meio", "No final", "Não existe posição"], 2, "O verbo costuma aparecer no final da oração."],
          ["Qual frase significa 'O gato é fofo'?", ["ねこは かわいいです", "かわいいは ねこ", "です ねこ", "ねこですは"], 0, "ねこは かわいいです: quanto ao gato, é fofo."],
          ["Na frase わたしは ほんを よみます, qual ação aparece no final?", ["Eu", "Livro", "Ler", "Partícula"], 2, "よみます é o verbo ler na forma educada."],
          ["Qual elemento apresenta a informação principal da frase?", ["Apenas o primeiro caractere", "O predicado, normalmente no final", "Sempre a partícula は", "A última vogal"], 1, "O predicado completa a informação sobre o tópico."],
          ["Qual frase segue uma ordem natural em japonês?", ["わたしは みずを のみます", "のみます みずを わたしは", "みず わたし のみます はを", "をみず はわたし"], 0, "A frase significa Eu bebo água, com o verbo no final."],
          ["O que significa がくせい?", ["Professor", "Estudante", "Amigo", "Livro"], 1, "がくせい significa estudante."],
          ["Qual é a melhor descrição da estrutura japonesa básica?", ["O verbo geralmente vem antes do sujeito", "O verbo geralmente fecha a frase", "Toda frase precisa começar com は", "Não existe ordem"], 1, "A posição final do verbo é uma característica central da estrutura japonesa."]
        ]),

        // AULA 4 — です
        4: buildQuestions(1, 4, [
          ["Qual é a função básica de です?", ["Indicar plural", "Ligar o tópico a uma descrição ou identificação", "Indicar movimento", "Marcar o objeto"], 1, "です funciona como cópula em frases educadas."],
          ["O que significa わたしは がくせいです?", ["Eu sou estudante", "Eu tenho um livro", "Eu vou à escola", "Eu gosto de gatos"], 0, "A frase identifica o tópico como estudante."],
          ["Qual palavra completa わたしは げんき___?", ["を", "に", "です", "で"], 2, "です completa a afirmação educada."],
          ["Qual frase significa 'Isto é um livro'?", ["これは ほんです", "これは ほんを", "ほんは これを", "です これほん"], 0, "これは ほんです significa Isto é um livro."],
          ["Qual é o tom mais associado a です?", ["Educado", "Agressivo", "Imperativo", "Infantil"], 0, "です é uma forma educada comum em apresentações e descrições."],
          ["Em わたしは がくせいです, o que é がくせい?", ["Uma partícula", "Uma descrição/identificação", "Um verbo de movimento", "Uma pergunta"], 1, "がくせい informa o que o tópico é."],
          ["Qual frase está organizada corretamente?", ["ねこですは かわいい", "ねこは かわいいです", "ですかわいい ねこは", "はです ねこ"], 1, "A descrição vem antes de です."],
          ["Qual tradução corresponde a これは おちゃです?", ["Isto é chá", "Eu bebo chá", "Onde está o chá?", "O chá é quente"], 0, "これは significa isto; おちゃ significa chá."],
          ["O que です acrescenta a uma frase nominal?", ["Uma ligação educada", "Uma negação obrigatória", "Uma pergunta obrigatória", "Uma marca de plural"], 0, "です fecha a afirmação nominal em estilo educado."],
          ["Qual frase apresenta alguém?", ["わたしは カイです", "カイを わたし", "ですを カイ", "カイはを"], 0, "わたしは カイです significa Eu sou Caio."]
        ]),

        // AULA 5 — PARTÍCULA は
        5: buildQuestions(1, 5, [
          ["Qual é a função mais básica de は?", ["Marcar o tópico", "Marcar o objeto direto", "Indicar passado", "Indicar plural"], 0, "は apresenta o tópico sobre o qual a frase fala."],
          ["Como se pronuncia は quando é partícula?", ["Ha", "Wa", "Ba", "Pa"], 1, "A partícula は é pronunciada WA."],
          ["Qual frase usa は corretamente?", ["わたしは がくせいです", "わたしを がくせいです", "わたしに がくせいです", "わたしで がくせいです"], 0, "は marca わたし como tópico."],
          ["Na frase ねこは かわいいです, qual é o tópico?", ["かわいい", "です", "ねこ", "は"], 2, "A frase fala sobre o gato."],
          ["Qual partícula aparece depois do tópico nesta frase: 'Quanto a mim, sou estudante'?", ["を", "は", "で", "に"], 1, "は apresenta o tópico わたし."],
          ["Qual frase significa 'Quanto ao livro, é interessante'?", ["ほんは おもしろいです", "ほんを おもしろいです", "ほんに おもしろいです", "ほんで おもしろいです"], 0, "は apresenta ほん como tópico."],
          ["A partícula は é escrita com qual caractere?", ["わ", "は", "ほ", "へ"], 1, "A escrita é は, embora sua pronúncia como partícula seja WA."],
          ["Qual frase apresenta o tópico 'chá'?", ["おちゃは おいしいです", "おちゃを おいしいです", "おちゃに おいしいです", "おちゃで おいしいです"], 0, "おちゃは apresenta o chá como tópico."],
          ["Em わたしは ねこが すきです, qual elemento apresenta o tópico geral?", ["ねこ", "が", "わたしは", "すき"], 2, "わたしは apresenta a pessoa sobre quem a frase fala."],
          ["Qual afirmação sobre は está correta?", ["Sempre significa 'eu'", "Marca o tópico da frase", "É sempre pronunciada HA", "Só aparece em perguntas"], 1, "は é uma partícula de tópico e sua pronúncia muda para WA nesse uso."]
        ]),

        // AULA 6 — FRASES AFIRMATIVAS E APRESENTAÇÃO
        6: buildQuestions(1, 6, [
          ["Como dizer 'Eu sou estudante'?", ["わたしは がくせいです", "わたしを がくせい", "がくせいは わたしを", "です わたし"], 0, "A frase usa は para o tópico e です para identificação."],
          ["Como dizer 'Eu sou Caio'?", ["わたしは カイです", "カイを わたし", "わたしに カイ", "カイですを"], 0, "わたしは カイです é uma apresentação simples."],
          ["Qual expressão significa 'prazer em conhecer' em uma apresentação?", ["はじめまして", "さようなら", "おやすみ", "いただきます"], 0, "はじめまして é usada ao conhecer alguém pela primeira vez."],
          ["Qual expressão significa 'Eu sou...'?", ["わたしは ... です", "... は わたし", "です ... を", "... に です"], 0, "わたしは ... です permite apresentar sua identidade."],
          ["Qual frase significa 'Eu estou bem'?", ["わたしは げんきです", "わたしを げんき", "げんきに わたし", "ですを げんき"], 0, "げんき significa bem ou saudável."],
          ["Qual expressão pode encerrar educadamente uma apresentação?", ["よろしくおねがいします", "おはよう", "いただきます", "ごちそうさま"], 0, "よろしくおねがいします é uma expressão comum de apresentação e boa convivência."],
          ["Qual frase afirma 'O livro é interessante'?", ["ほんは おもしろいです", "ほんを おもしろい", "おもしろいを ほん", "ほんにです"], 0, "ほん é livro; は marca o tópico."],
          ["Qual é a tradução de わたしは がくせいです?", ["Eu sou estudante", "Eu sou professor", "Eu tenho um gato", "Eu leio um livro"], 0, "A frase identifica o falante como estudante."],
          ["Qual sequência forma uma apresentação simples e educada?", ["はじめまして。わたしは カイです。", "カイを はじめまして です", "です カイ はじめまして", "わたしを カイに"], 0, "A primeira expressão inicia a apresentação; a segunda informa o nome."],
          ["Qual é o principal objetivo de uma frase afirmativa simples?", ["Negar uma informação", "Apresentar uma informação", "Fazer uma ordem", "Indicar dúvida obrigatoriamente"], 1, "Uma afirmação comunica uma informação como verdadeira."]
        ])
      },

      recovery: buildRecovery(1, [
        ["Qual partícula marca o tópico?", ["を", "は", "に", "で"], 1, "は apresenta o tópico da frase."],
        ["Qual é a leitura de きゃ?", ["Kya", "Kyu", "Kyo", "Ka"], 0, "きゃ representa KYA."],
        ["Qual frase significa 'Eu sou estudante'?", ["わたしは がくせいです", "がくせいを わたし", "わたしに です", "ですは がくせい"], 0, "A frase identifica わたし como estudante."],
        ["Como se pronuncia は quando é partícula?", ["Ha", "Wa", "Hi", "Ho"], 1, "A partícula は é pronunciada WA."],
        ["Onde geralmente fica o verbo em japonês?", ["No começo", "No final", "Sempre no meio", "Não existe regra"], 1, "O verbo normalmente aparece no final da oração."]
      ])
    }
  },


// ======================================================
// SEMANA 2 — PARTÍCULAS BÁSICAS
// ======================================================

2: {
  days: {
    1: buildQuestions(2, 1, [
      ["Qual é a função básica de は?", ["Marcar o tópico", "Marcar o passado", "Indicar movimento", "Indicar quantidade"], 0, "は apresenta o tópico sobre o qual a frase fala."],
      ["Como se pronuncia は quando é partícula?", ["Ha", "Wa", "Ba", "Pa"], 1, "A partícula は é pronunciada WA."],
      ["Qual frase usa は corretamente?", ["わたしは がくせいです", "わたしを がくせいです", "わたしに がくせいです", "わたしで がくせいです"], 0, "は marca わたし como tópico."],
      ["Na frase ねこは かわいいです, qual é o tópico?", ["かわいい", "ねこ", "です", "Nenhum"], 1, "A frase fala sobre o gato."],
      ["Qual partícula apresenta o tópico 'livro'?", ["を", "が", "は", "に"], 2, "ほんは apresenta o livro como tópico."],
      ["Qual frase significa 'Quanto a mim, estou bem'?", ["わたしは げんきです", "わたしを げんきです", "げんきに わたし", "わたしで げんき"], 0, "は apresenta わたし como tópico."],
      ["Qual alternativa contém a partícula は?", ["ねこが", "ほんを", "わたしは", "学校に"], 2, "わたしは contém a partícula de tópico."],
      ["Qual é a tradução de おちゃは おいしいです?", ["O chá é gostoso", "Eu bebo chá", "Quero chá", "Onde está o chá?"], 0, "おちゃ é chá; おいしい significa gostoso."],
      ["A partícula は normalmente aparece:", ["Depois do tópico", "Antes do verbo", "Depois de toda frase", "Antes do substantivo"], 0, "Ela vem depois da palavra que apresenta o tópico."],
      ["Qual afirmação sobre は está correta?", ["É sempre pronunciada HA", "Marca o tópico", "Indica somente objetos", "Substitui todos os verbos"], 1, "は é uma partícula de tópico, pronunciada WA nesse uso."]
    ]),
    2: buildQuestions(2, 2, [
      ["Qual é uma função importante de が?", ["Marcar o sujeito ou destacar informação", "Indicar passado", "Marcar companhia", "Indicar destino"], 0, "が pode marcar o sujeito e destacar quem ou o que realiza ou apresenta algo."],
      ["Qual partícula aparece em ねこが います?", ["を", "で", "が", "へ"], 2, "が marca ねこ como sujeito da existência."],
      ["Qual frase significa 'O gato existe'?", ["ねこが います", "ねこを います", "ねこで います", "ねこへ います"], 0, "が marca o gato como aquilo que existe."],
      ["Qual frase destaca quem é estudante?", ["わたしが がくせいです", "わたしを がくせいです", "わたしで がくせいです", "わたしへ がくせいです"], 0, "が pode destacar わたし como a pessoa que é estudante."],
      ["Qual partícula pode marcar o sujeito de uma frase?", ["が", "を", "へ", "から"], 0, "が é uma partícula frequentemente usada para marcar o sujeito."],
      ["Em だれが きますか, o que significa が?", ["Marca quem realiza a ação", "Marca o destino", "Marca o objeto", "Marca o tempo passado"], 0, "A pergunta quer saber quem vem; が marca quem realiza a ação."],
      ["Qual é a tradução de だれが?", ["Quem?", "Onde?", "Quando?", "Quanto?"], 0, "だれ significa quem; が marca essa pessoa como sujeito."],
      ["Qual frase está correta?", ["だれが いますか", "だれを いますか", "だれで いますか", "だれへ いますか"], 0, "だれが いますか pergunta quem está presente."],
      ["Qual é uma diferença entre は e が?", ["は apresenta tópico; が pode marcar sujeito ou destaque", "São sempre idênticas", "が indica passado", "は indica somente lugar"], 0, "As duas têm funções diferentes, embora possam aparecer em contextos semelhantes."],
      ["Em いぬが います, qual é o sujeito?", ["います", "いぬ", "が", "Nenhum"], 1, "いぬ é o cachorro, apresentado como existente."]
    ]),
    3: buildQuestions(2, 3, [
      ["Qual é a função básica de を?", ["Marcar o objeto da ação", "Marcar o tópico", "Indicar companhia", "Indicar tempo"], 0, "を marca o objeto direto de muitos verbos."],
      ["Como se pronuncia を como partícula?", ["Wo", "O", "Wa", "U"], 1, "Na função de partícula, を é normalmente pronunciado O."],
      ["Qual frase significa 'Eu bebo água'?", ["わたしは みずを のみます", "わたしは みずが のみます", "みずは わたしに", "わたしを みずです"], 0, "みずを marca água como objeto de のみます."],
      ["Em ほんを よみます, qual é o objeto?", ["ほん", "よみます", "を", "わたし"], 0, "ほん é o livro que está sendo lido."],
      ["Qual partícula completa りんご___ たべます?", ["は", "を", "に", "へ"], 1, "を marca a maçã como objeto de comer."],
      ["Qual verbo significa beber?", ["たべます", "のみます", "いきます", "みます"], 1, "のみます significa beber."],
      ["Qual frase significa 'Eu como comida'?", ["わたしは たべものを たべます", "わたしは たべものに", "たべものが わたし", "わたしを たべます"], 0, "たべものを marca comida como objeto da ação."],
      ["Qual partícula aparece depois do objeto em uma frase como 'livro ler'?", ["を", "へ", "と", "から"], 0, "O objeto recebe を antes do verbo."],
      ["Em みずを のみます, qual é a ação?", ["Água", "Beber", "Eu", "Partícula"], 1, "のみます é a ação de beber."],
      ["Qual frase está organizada corretamente?", ["わたしは ほんを よみます", "ほんを わたし よみますを", "よみますは ほん", "わたしを ほんは"], 0, "A frase apresenta o tópico, o objeto e o verbo."]
    ]),
    4: buildQuestions(2, 4, [
      ["Qual é a função de も?", ["Também", "Passado", "Destino", "Objeto direto"], 0, "も pode substituir は ou が para indicar também."],
      ["Como dizer 'Eu também sou estudante'?", ["わたしも がくせいです", "わたしを がくせいです", "わたしへ がくせい", "わたしで がくせい"], 0, "も indica que o falante também é estudante."],
      ["Qual partícula significa 'também'?", ["が", "を", "も", "に"], 2, "も expressa a ideia de também."],
      ["Qual frase significa 'Eu também gosto de chá'?", ["わたしも おちゃが すきです", "わたしを おちゃ", "おちゃも わたしを", "わたしに おちゃです"], 0, "も indica que a informação também vale para o falante."],
      ["Em ねこも います, qual é a ideia de も?", ["O gato também existe", "O gato foi embora", "O gato é objeto", "O gato está no passado"], 0, "も acrescenta o gato a algo já mencionado."],
      ["Qual alternativa contém a partícula も?", ["ほんが", "ねこを", "わたしも", "学校へ"], 2, "わたしも significa eu também."],
      ["Qual frase significa 'Também leio livros'?", ["ほんも よみます", "ほんを よみますも", "ほんに よみます", "ほんへ よみます"], 0, "も indica que ler livros também faz parte da informação."],
      ["O que acontece quando も substitui は em um exemplo simples?", ["A ideia de também é acrescentada", "A frase vira passado", "O verbo desaparece", "A frase vira pergunta obrigatoriamente"], 0, "も adiciona o sentido de também ao tópico."],
      ["Qual frase usa も naturalmente?", ["わたしも がくせいです", "わたしもを がくせい", "わたしもへ です", "もわたし です"], 0, "も vem depois de わたし para indicar também."],
      ["Qual tradução corresponde a せんせいも います?", ["O professor também está presente", "O professor foi embora", "O professor lê", "Eu sou professor"], 0, "も acrescenta o professor ao grupo de pessoas presentes."]
    ]),
    5: buildQuestions(2, 5, [
      ["Qual partícula marca o tópico?", ["は", "を", "に", "へ"], 0, "は apresenta o tópico."],
      ["Qual partícula marca frequentemente o objeto direto?", ["が", "を", "も", "で"], 1, "を marca o objeto de uma ação."],
      ["Qual partícula pode marcar o sujeito?", ["が", "を", "から", "まで"], 0, "が pode marcar o sujeito."],
      ["Qual partícula significa também?", ["へ", "と", "も", "を"], 2, "も expressa também."],
      ["Na frase りんごを たべます, o que é りんご?", ["O objeto da ação", "O verbo", "O tópico obrigatório", "O destino"], 0, "A maçã é o objeto que recebe a ação de comer."],
      ["Na frase わたしも がくせいです, o que significa も?", ["Também", "Ontem", "Onde", "Com"], 0, "も acrescenta o falante a uma informação."],
      ["Qual frase destaca o sujeito?", ["だれが きますか", "ほんを よみます", "がっこうへ いきます", "ともだちと はなします"], 0, "が marca quem realiza a ação de vir."],
      ["Qual alternativa está correta para 'Eu também bebo água'?", ["わたしも みずを のみます", "わたしを みずも", "みずに わたし", "わたしで みずです"], 0, "も indica também e を marca a água como objeto."],
      ["Qual partícula completa ねこ___ かわいいです quando o gato é o tópico?", ["を", "は", "から", "まで"], 1, "は apresenta ねこ como tópico."],
      ["Qual associação está correta?", ["は=tópico, が=sujeito, を=objeto, も=também", "は=objeto, が=passado, を=tópico, も=destino", "Todas significam também", "Todas indicam lugar"], 0, "Cada partícula tem uma função distinta."]
    ]),
    6: buildQuestions(2, 6, [
      ["Como dizer 'Eu leio um livro'?", ["わたしは ほんを よみます", "わたしは ほんに よみます", "ほんは わたしを", "わたしが ほんへ"], 0, "を marca o livro como objeto de よみます."],
      ["Como dizer 'Eu também sou estudante'?", ["わたしも がくせいです", "わたしを がくせい", "わたしへ がくせい", "がくせいを わたし"], 0, "も expressa também."],
      ["Qual frase pergunta 'Quem vem?'", ["だれが きますか", "だれを きますか", "だれで きますか", "だれへ きますか"], 0, "だれが pergunta quem realiza a ação."],
      ["Qual frase significa 'O gato também está aqui'?", ["ねこも います", "ねこを います", "ねこへ います", "ねこで います"], 0, "も acrescenta o gato à informação."],
      ["Qual partícula aparece em 'Eu como maçã'?", ["を", "へ", "から", "まで"], 0, "りんごを たべます usa を para o objeto."],
      ["Qual frase apresenta o tópico 'chá'?", ["おちゃは おいしいです", "おちゃを おいしいです", "おちゃへ おいしいです", "おちゃで おいしいです"], 0, "は apresenta o chá como tópico."],
      ["Qual frase está correta para 'Eu também leio'?", ["わたしも よみます", "わたしを よみます", "わたしへ よみます", "わたしで よみます"], 0, "も indica também."],
      ["Qual é a função de が em だれが いますか?", ["Marcar quem está presente", "Marcar o objeto", "Indicar passado", "Indicar companhia"], 0, "が marca o sujeito da existência."],
      ["Qual frase usa corretamente duas partículas?", ["わたしは みずを のみます", "わたしを みずは のみます", "みずに わたしへ", "わたしで みずがを"], 0, "は marca o tópico e を marca o objeto."],
      ["Qual é o objetivo de estudar は, が, を e も?", ["Entender como as palavras se relacionam na frase", "Decorar apenas números", "Aprender somente passado", "Substituir o hiragana"], 0, "As partículas mostram funções gramaticais e relações entre elementos."]
    ])
  },
  recovery: buildRecovery(2, [
    ["Qual partícula marca o tópico?", ["は", "を", "に", "で"], 0, "は apresenta o tópico."],
    ["Qual partícula marca o objeto?", ["が", "を", "も", "へ"], 1, "を marca o objeto direto."],
    ["Qual partícula pode destacar o sujeito?", ["が", "から", "まで", "と"], 0, "が marca frequentemente o sujeito."],
    ["Qual partícula significa também?", ["は", "も", "を", "に"], 1, "も significa também."],
    ["Como dizer 'Eu também leio um livro'?", ["わたしも ほんを よみます", "わたしを ほんも", "ほんに わたし", "わたしへ ほんです"], 0, "も indica também e を marca o livro como objeto."]
  ])
},

// ======================================================
// SEMANA 3 — LOCALIZAÇÃO E DIREÇÃO
// ======================================================

3: {
  days: {
    1: buildQuestions(3, 1, [
      ["Qual é uma função de に?", ["Indicar destino ou momento", "Indicar objeto direto", "Indicar passado", "Indicar negação"], 0, "に pode marcar destino, horário ou ponto de chegada."],
      ["Qual frase significa 'Vou à escola'?", ["がっこうに いきます", "がっこうを いきます", "がっこうと いきます", "がっこうから いきます"], 0, "に marca a escola como destino."],
      ["Qual partícula completa しちじ___ おきます?", ["に", "を", "へ", "と"], 0, "に marca o horário em que a pessoa acorda."],
      ["Em ともだちに あいます, qual é a função de に?", ["Indicar a pessoa com quem se encontra, como alvo do encontro", "Indicar passado", "Marcar objeto de comer", "Indicar origem"], 0, "に pode marcar a pessoa que alguém encontra."],
      ["Qual frase indica que alguém está em casa?", ["いえに います", "いえを います", "いえへ います", "いえから います"], 0, "に pode marcar o local onde alguém ou algo está."],
      ["Qual palavra significa escola?", ["がっこう", "みず", "ともだち", "ほん"], 0, "がっこう significa escola."],
      ["Qual frase indica um horário?", ["ろくじに ねます", "ろくじを ねます", "ろくじへ ねます", "ろくじと ねます"], 0, "に marca seis horas como momento de dormir."],
      ["Qual partícula completa うち___ かえります para indicar destino?", ["に", "を", "で", "と"], 0, "に marca a casa como destino do retorno."],
      ["Qual é a tradução de がっこうに いきます?", ["Vou à escola", "Estou na escola", "Venho da escola", "Estudo com a escola"], 0, "に marca o destino de いきます."],
      ["Qual associação está correta?", ["に=destino ou tempo", "に=objeto direto sempre", "に=passado", "に=companhia sempre"], 0, "に possui usos importantes de destino, localização e tempo."]
    ]),
    2: buildQuestions(3, 2, [
      ["Qual é uma função de で?", ["Marcar o local onde uma ação acontece", "Marcar o tópico", "Indicar passado", "Indicar idade"], 0, "で marca o lugar em que uma ação é realizada."],
      ["Qual frase significa 'Estudo na escola'?", ["がっこうで べんきょうします", "がっこうに べんきょうします", "がっこうを べんきょうします", "がっこうへ べんきょう"], 0, "で indica onde a ação de estudar acontece."],
      ["Qual partícula completa レストラン___ たべます?", ["で", "を", "へ", "から"], 0, "で marca o restaurante como local da ação."],
      ["Em はしで たべます, o que はし pode indicar?", ["Hashi, usando hashi como instrumento", "Destino", "Passado", "Tópico"], 0, "で também pode indicar meio ou instrumento."],
      ["Qual frase significa 'Leio um livro na biblioteca'?", ["としょかんで ほんを よみます", "としょかんを ほんで よみます", "としょかんに ほんが", "としょかんへ ほんを"], 0, "で marca a biblioteca como local da leitura."],
      ["Qual é a diferença básica entre に e で em frases de lugar?", ["に pode indicar existência/destino; で marca local da ação", "São sempre idênticas", "で indica somente tempo", "に indica somente objeto"], 0, "As partículas têm usos diferentes conforme a relação expressa."],
      ["Qual partícula completa こうえん___ あそびます?", ["で", "を", "へ", "から"], 0, "で indica o parque como local da brincadeira."],
      ["Qual palavra significa restaurante?", ["がっこう", "レストラン", "としょかん", "びょういん"], 1, "レストラン significa restaurante."],
      ["Qual frase indica o local de uma ação?", ["うちで べんきょうします", "うちに います", "うちへ いきます", "うちから きます"], 0, "で marca onde estudar acontece."],
      ["Qual associação está correta?", ["で=local da ação ou meio", "で=passado", "で=idade", "で=pergunta de quem"], 0, "で pode indicar lugar da ação ou instrumento utilizado."]
    ]),
    3: buildQuestions(3, 3, [
      ["Qual é uma função de へ?", ["Indicar direção", "Marcar objeto direto", "Indicar companhia", "Indicar passado"], 0, "へ indica a direção para a qual alguém se dirige."],
      ["Como se pronuncia へ quando é partícula?", ["He", "E", "Ha", "Hi"], 1, "A partícula へ é pronunciada E."],
      ["Qual frase significa 'Vou ao Japão'?", ["にほんへ いきます", "にほんを いきます", "にほんで いきます", "にほんと いきます"], 0, "へ marca a direção Japão."],
      ["Qual partícula completa がっこう___ いきます?", ["へ", "を", "と", "まで"], 0, "へ indica a direção da escola."],
      ["Qual frase expressa movimento em direção a casa?", ["いえへ かえります", "いえを かえります", "いえで かえります", "いえと かえります"], 0, "へ indica a direção do retorno para casa."],
      ["Qual é a diferença geral entre へ e を?", ["へ indica direção; を marca objeto em muitos verbos", "Ambas indicam passado", "を indica companhia", "へ indica objeto direto"], 0, "へ e を possuem funções diferentes."],
      ["Qual frase usa へ naturalmente?", ["ともだちの いえへ いきます", "ともだちの いえを います", "ともだちの いえで いきます", "ともだちの いえと です"], 0, "へ marca a direção para a casa do amigo."],
      ["Qual palavra significa Japão?", ["にほん", "がっこう", "いえ", "みず"], 0, "にほん significa Japão."],
      ["Qual partícula indica direção em uma frase de movimento?", ["へ", "も", "が", "を"], 0, "へ apresenta a direção do movimento."],
      ["Qual tradução corresponde a にほんへ いきます?", ["Vou em direção ao Japão", "Estou no Japão", "Venho do Japão", "Como no Japão"], 0, "へ indica a direção para a qual alguém vai."]
    ]),
    4: buildQuestions(3, 4, [
      ["Qual é uma função de と?", ["Indicar companhia ou ligação entre elementos", "Indicar passado", "Indicar destino sempre", "Marcar objeto direto sempre"], 0, "と pode significar com alguém ou ligar substantivos."],
      ["Qual frase significa 'Vou com um amigo'?", ["ともだちと いきます", "ともだちを いきます", "ともだちへ いきます", "ともだちから いきます"], 0, "と indica companhia."],
      ["Qual partícula completa ねこ___ いぬ?", ["と", "を", "へ", "に"], 0, "と liga os substantivos gato e cachorro, com sentido de e."],
      ["Qual é a tradução de かぞくと たべます?", ["Como com a família", "Como a família", "Vou para a família", "Venho da família"], 0, "と indica companhia da família."],
      ["Qual palavra significa amigo?", ["ともだち", "せんせい", "がくせい", "いえ"], 0, "ともだち significa amigo."],
      ["Qual frase usa と como companhia?", ["ともだちと はなします", "ともだちを はなします", "ともだちへ はなします", "ともだちから はなします"], 0, "A frase significa converso com um amigo."],
      ["Qual alternativa usa と para unir substantivos?", ["パンと みず", "パンを みず", "パンへ みず", "パンから みず"], 0, "と liga pão e água."],
      ["Em ちちと はは, o que と faz?", ["Liga pai e mãe", "Indica destino", "Marca passado", "Indica horário"], 0, "と conecta os dois substantivos."],
      ["Qual frase significa 'Estudo com meu amigo'?", ["ともだちと べんきょうします", "ともだちを べんきょうします", "ともだちへ べんきょうします", "ともだちから べんきょうします"], 0, "と expressa companhia."],
      ["Qual associação está correta?", ["と=companhia ou ligação", "と=negação", "と=passado", "と=idade"], 0, "と pode significar com ou conectar substantivos."]
    ]),
    5: buildQuestions(3, 5, [
      ["Qual é uma função de から?", ["Indicar origem ou ponto inicial", "Indicar destino final", "Marcar objeto", "Indicar companhia"], 0, "から marca de onde algo começa ou vem."],
      ["Qual é uma função de まで?", ["Indicar limite ou ponto final", "Indicar origem", "Marcar sujeito", "Indicar companhia"], 0, "まで marca até onde algo vai."],
      ["Qual frase significa 'Venho do Brasil'?", ["ブラジルから きます", "ブラジルまで きます", "ブラジルと きます", "ブラジルを きます"], 0, "から indica o Brasil como origem."],
      ["Qual frase significa 'Estudo até as cinco'?", ["ごじまで べんきょうします", "ごじから べんきょうします", "ごじと べんきょうします", "ごじを べんきょうします"], 0, "まで marca cinco horas como limite final."],
      ["Qual partícula completa げつようび___ きんようび?", ["から", "を", "と", "で"], 0, "から marca segunda-feira como início de um intervalo."],
      ["Qual partícula completa ごじ___ ろくじ para expressar 'das cinco até as seis'?", ["から", "まで", "も", "が"], 1, "まで marca o limite final: até as seis."],
      ["Qual expressão significa 'de... até...'?", ["から...まで", "は...が", "を...に", "と...も"], 0, "から marca o início e まで marca o final."],
      ["Em にほんから きました, qual é a origem?", ["にほん", "きました", "から", "Nenhuma"], 0, "にほん é a origem; から marca esse ponto inicial."],
      ["Qual frase expressa 'Trabalho das nove às cinco'?", ["くじから ごじまで はたらきます", "くじまで ごじから はたらきます", "くじと ごじを はたらきます", "くじに ごじへ はたらきます"], 0, "から indica o começo e まで o encerramento do período."],
      ["Qual associação está correta?", ["から=origem; まで=limite", "から=destino; まで=origem", "As duas significam companhia", "As duas marcam objeto"], 0, "As partículas formam uma relação de início e limite."]
    ]),
    6: buildQuestions(3, 6, [
      ["Qual frase significa 'Vou à escola de manhã'?", ["あさ がっこうに いきます", "あさ がっこうを いきます", "あさ がっこうと いきます", "あさ がっこうから います"], 0, "に marca a escola como destino."],
      ["Qual frase significa 'Estudo na biblioteca'?", ["としょかんで べんきょうします", "としょかんに べんきょうします", "としょかんを べんきょうします", "としょかんへ べんきょうします"], 0, "で marca o local da ação de estudar."],
      ["Qual frase significa 'Vou com minha família'?", ["かぞくと いきます", "かぞくを いきます", "かぞくで いきます", "かぞくから いきます"], 0, "と indica companhia."],
      ["Qual frase significa 'Venho da escola'?", ["がっこうから きます", "がっこうまで きます", "がっこうと きます", "がっこうを きます"], 0, "から indica a origem."],
      ["Qual frase significa 'Trabalho até as seis'?", ["ろくじまで はたらきます", "ろくじから はたらきます", "ろくじと はたらきます", "ろくじを はたらきます"], 0, "まで marca o limite final."],
      ["Qual partícula indica a direção de um movimento?", ["へ", "を", "も", "が"], 0, "へ indica direção."],
      ["Qual frase indica uma hora específica?", ["はちじに おきます", "はちじを おきます", "はちじへ おきます", "はちじと おきます"], 0, "に marca o horário."],
      ["Qual frase usa corretamente に e で?", ["がっこうに いって、がっこうで べんきょうします", "がっこうで いって、がっこうに べんきょうします", "がっこうを に、で べんきょう", "がっこうへを べんきょう"], 0, "に indica destino e で indica o local da ação."],
      ["Qual frase expressa companhia?", ["ともだちと こうえんへ いきます", "ともだちを こうえんへ いきます", "ともだちから こうえんへ", "ともだちまで こうえんへ"], 0, "と indica o amigo como companhia."],
      ["Qual alternativa apresenta origem e limite corretamente?", ["ブラジルから にほんまで", "ブラジルまで にほんから", "ブラジルと にほんを", "ブラジルに にほんで"], 0, "から marca origem; まで marca limite ou destino final do intervalo."]
    ])
  },
  recovery: buildRecovery(3, [
    ["Qual partícula marca o local de uma ação?", ["で", "を", "は", "も"], 0, "で marca onde uma ação acontece."],
    ["Qual partícula indica direção?", ["へ", "が", "を", "も"], 0, "へ indica direção."],
    ["Qual partícula indica companhia?", ["と", "から", "まで", "で"], 0, "と pode significar com alguém."],
    ["Qual partícula indica origem?", ["から", "まで", "へ", "を"], 0, "から marca o ponto inicial."],
    ["Qual frase significa 'Estudo na escola com um amigo'?", ["ともだちと がっこうで べんきょうします", "ともだちを がっこうへ べんきょう", "ともだちから がっこうを", "ともだちまで がっこうに"], 0, "と indica companhia e で marca o local da ação."]
  ])
},

// ======================================================
// SEMANA 4 — VERBOS BÁSICOS
// ======================================================

4: {
  days: {
    1: buildQuestions(4, 1, [
      ["Qual verbo significa comer?", ["たべます", "のみます", "いきます", "ねます"], 0, "たべます significa comer."],
      ["Qual verbo significa beber?", ["みます", "のみます", "かきます", "ききます"], 1, "のみます significa beber."],
      ["Qual verbo significa ir?", ["きます", "します", "いきます", "たべます"], 2, "いきます significa ir."],
      ["Qual verbo significa vir?", ["きます", "かえります", "ねます", "よみます"], 0, "きます significa vir."],
      ["Qual verbo significa ler?", ["かきます", "よみます", "のみます", "はなします"], 1, "よみます significa ler."],
      ["Qual verbo significa escrever?", ["ききます", "かきます", "みます", "いきます"], 1, "かきます significa escrever."],
      ["Qual verbo significa dormir?", ["おきます", "ねます", "します", "きます"], 1, "ねます significa dormir."],
      ["Qual verbo significa acordar?", ["おきます", "ねます", "たべます", "のみます"], 0, "おきます significa acordar ou levantar."],
      ["Qual verbo significa ver?", ["みます", "ききます", "かきます", "よみます"], 0, "みます significa ver ou assistir."],
      ["Qual verbo significa fazer?", ["します", "きます", "いきます", "ねます"], 0, "します significa fazer."]
    ]),
    2: buildQuestions(4, 2, [
      ["Qual é a forma educada afirmativa de 'comer'?", ["たべます", "たべません", "たべました", "たべませんでした"], 0, "たべます é a forma afirmativa não passada."],
      ["Qual forma significa 'vou'?", ["いきます", "いきません", "いきました", "いきませんでした"], 0, "いきます significa vou ou ir, dependendo do contexto."],
      ["Qual frase significa 'Eu leio um livro'?", ["ほんを よみます", "ほんを よみません", "ほんを よみました", "ほんを よみませんでした"], 0, "よみます é a forma afirmativa de ler."],
      ["Qual forma completa わたしは みずを ___?", ["のみます", "のみません", "のみました", "のみませんでした"], 0, "のみます indica beber na forma afirmativa."],
      ["Qual é a forma educada de 'dormir'?", ["ねます", "ねません", "ねました", "ねませんでした"], 0, "ねます é a forma afirmativa educada."],
      ["Qual frase significa 'Eu estudo'?", ["べんきょうします", "べんきょうしません", "べんきょうしました", "べんきょうしませんでした"], 0, "します é o verbo fazer; べんきょうします significa estudar."],
      ["Qual é a forma afirmativa de きく?", ["ききます", "ききません", "ききました", "ききませんでした"], 0, "ききます é a forma educada afirmativa de ouvir/perguntar."],
      ["Qual frase significa 'Vou à escola'?", ["がっこうへ いきます", "がっこうへ いきません", "がっこうへ いきました", "がっこうへ いきませんでした"], 0, "いきます expressa a ação de ir."],
      ["Qual forma expressa uma ação habitual no estilo ます?", ["のみます", "のみました", "のみませんでした", "のまなかった"], 0, "のみます é a forma educada não passada."],
      ["Qual é a característica de ます nesta aula?", ["Forma educada afirmativa não passada", "Forma negativa passada", "Forma de ordem", "Partícula de lugar"], 0, "ます é usado na forma educada afirmativa não passada."]
    ]),
    3: buildQuestions(4, 3, [
      ["Qual é a forma negativa de たべます?", ["たべません", "たべました", "たべませんでした", "たべる"], 0, "たべません significa não como."],
      ["Qual forma significa 'não vou'?", ["いきます", "いきません", "いきました", "いきませんでした"], 1, "いきません é a forma negativa não passada."],
      ["Complete: みずを ___ (não bebo).", ["のみます", "のみません", "のみました", "のみませんでした"], 1, "のみません nega a ação de beber."],
      ["Qual é a forma negativa de よみます?", ["よみません", "よみました", "よみませんでした", "よむ"], 0, "よみません significa não leio."],
      ["Qual frase significa 'Não estudo'?", ["べんきょうしません", "べんきょうします", "べんきょうしました", "べんきょうしませんでした"], 0, "しません é a forma negativa educada de します."],
      ["Qual terminação aparece na forma negativa educada não passada?", ["ません", "ました", "ませんでした", "です"], 0, "ません transforma a forma ます em negativa."],
      ["Qual forma significa 'não durmo'?", ["ねます", "ねません", "ねました", "ねませんでした"], 1, "ねません significa não durmo."],
      ["Qual frase está negativa?", ["ほんを よみます", "ほんを よみません", "ほんを よみました", "ほんを よみますか"], 1, "よみません nega a ação de ler."],
      ["Como dizer 'Não como peixe'?", ["さかなを たべません", "さかなを たべます", "さかなを たべました", "さかなを たべませんでした"], 0, "たべません indica que a ação não acontece."],
      ["Qual é a diferença entre ます e ません?", ["Afirmativo e negativo", "Passado e futuro", "Singular e plural", "Pergunta e resposta"], 0, "ます afirma; ません nega na forma educada não passada."]
    ]),
    4: buildQuestions(4, 4, [
      ["Qual é a forma passada afirmativa de たべます?", ["たべました", "たべません", "たべませんでした", "たべます"], 0, "たべました significa comi."],
      ["Qual forma significa 'Fui'?", ["いきます", "いきません", "いきました", "いきませんでした"], 2, "いきました é a forma passada afirmativa de ir."],
      ["Qual terminação marca o passado afirmativo educado?", ["ました", "ません", "ませんでした", "ますか"], 0, "ました indica uma ação passada afirmativa."],
      ["Como dizer 'Eu li um livro'?", ["ほんを よみました", "ほんを よみます", "ほんを よみません", "ほんを よみませんでした"], 0, "よみました significa li."],
      ["Qual forma significa 'Bebi água'?", ["みずを のみます", "みずを のみました", "みずを のみません", "みずを のみませんでした"], 1, "のみました é a forma passada afirmativa."],
      ["Qual é a forma passada de ねます?", ["ねました", "ねません", "ねませんでした", "ねます"], 0, "ねました significa dormi."],
      ["Qual frase descreve uma ação concluída ontem?", ["きのう べんきょうしました", "あした べんきょうします", "いま べんきょうします", "まいにち べんきょうします"], 0, "きのう significa ontem; しました indica passado."],
      ["Qual forma significa 'Assisti'?", ["みました", "みます", "みません", "みませんでした"], 0, "みました é a forma passada de みます."],
      ["Complete: きのう がっこうへ ___?", ["いきました", "いきません", "いきます", "いきませんでした"], 0, "いきました indica que foi à escola."],
      ["Qual associação está correta?", ["ます=afirmativo não passado; ました=afirmativo passado", "ます=passado; ました=futuro", "Ambos são negativos", "Ambos indicam pergunta"], 0, "A terminação ました indica passado afirmativo."]
    ]),
    5: buildQuestions(4, 5, [
      ["Qual é a forma passada negativa de たべます?", ["たべませんでした", "たべました", "たべません", "たべます"], 0, "たべませんでした significa não comi."],
      ["Qual forma significa 'Não fui'?", ["いきません", "いきました", "いきませんでした", "いきます"], 2, "いきませんでした é a forma passada negativa."],
      ["Qual terminação aparece no passado negativo educado?", ["ませんでした", "ました", "ません", "ます"], 0, "ませんでした expressa uma ação que não ocorreu no passado."],
      ["Como dizer 'Não li o livro'?", ["ほんを よみませんでした", "ほんを よみました", "ほんを よみません", "ほんを よみます"], 0, "よみませんでした nega a leitura no passado."],
      ["Qual frase significa 'Ontem não estudei'?", ["きのう べんきょうしませんでした", "きのう べんきょうしました", "あした べんきょうします", "まいにち べんきょうします"], 0, "きのう indica ontem e しませんでした indica que não estudou."],
      ["Qual é a forma passada negativa de のみます?", ["のみませんでした", "のみました", "のみません", "のみます"], 0, "のみませんでした significa não bebi."],
      ["Qual forma significa 'Não dormi'?", ["ねません", "ねました", "ねませんでした", "ねます"], 2, "ねませんでした é o passado negativo de dormir."],
      ["Qual frase está no passado negativo?", ["みませんでした", "みます", "みました", "みません"], 0, "ませんでした combina negação e passado."],
      ["Qual é a diferença entre ません e ませんでした?", ["A primeira é negativa não passada; a segunda é negativa passada", "A primeira é afirmativa; a segunda é pergunta", "As duas são afirmativas", "A segunda indica futuro"], 0, "ません nega no não passado; ませんでした nega no passado."],
      ["Complete: きのう さかなを ___ (não comi peixe ontem).", ["たべます", "たべません", "たべました", "たべませんでした"], 3, "A frase exige passado negativo."]
    ]),
    6: buildQuestions(4, 6, [
      ["Como dizer 'Eu bebo chá'?", ["おちゃを のみます", "おちゃを のみません", "おちゃを のみました", "おちゃを のみませんでした"], 0, "のみます é a forma afirmativa não passada."],
      ["Como dizer 'Não vou à escola'?", ["がっこうへ いきます", "がっこうへ いきません", "がっこうへ いきました", "がっこうへ いきませんでした"], 1, "いきません é a forma negativa não passada."],
      ["Como dizer 'Ontem li um livro'?", ["きのう ほんを よみました", "きのう ほんを よみます", "きのう ほんを よみません", "きのう ほんを よみませんでした"], 0, "よみました expressa a leitura no passado."],
      ["Como dizer 'Ontem não comi'?", ["きのう たべました", "きのう たべません", "きのう たべませんでした", "きのう たべます"], 2, "ませんでした expressa passado negativo."],
      ["Qual verbo significa escrever?", ["かきます", "のみます", "ねます", "いきます"], 0, "かきます significa escrever."],
      ["Qual frase expressa uma rotina afirmativa?", ["まいにち べんきょうします", "きのう べんきょうしませんでした", "べんきょうしません", "べんきょうしました"], 0, "まいにち significa todos os dias; します afirma a ação."],
      ["Qual frase expressa uma ação passada?", ["きのう こうえんへ いきました", "あした こうえんへ いきます", "まいにち いきます", "いきません"], 0, "きのう e ました indicam uma ação passada."],
      ["Qual forma é negativa não passada?", ["のみません", "のみました", "のみませんでした", "のみます"], 0, "ません indica negação no não passado."],
      ["Qual forma é afirmativa passada?", ["きました", "きません", "きませんでした", "きます"], 0, "きました significa veio."],
      ["Qual sequência contém as quatro formas educadas estudadas?", ["ます, ません, ました, ませんでした", "です, だ, ある, いる", "は, が, を, も", "に, で, へ, と"], 0, "Essas são as formas afirmativa, negativa, passada e passada negativa."]
    ])
  },
  recovery: buildRecovery(4, [
    ["Qual forma significa 'não como'?", ["たべます", "たべません", "たべました", "たべませんでした"], 1, "ません expressa negação não passada."],
    ["Qual forma significa 'comi'?", ["たべます", "たべません", "たべました", "たべませんでした"], 2, "ました marca passado afirmativo."],
    ["Qual forma significa 'não fui'?", ["いきます", "いきません", "いきました", "いきませんでした"], 3, "ませんでした marca passado negativo."],
    ["Qual verbo significa ler?", ["よみます", "のみます", "ねます", "いきます"], 0, "よみます significa ler."],
    ["Qual frase significa 'Ontem estudei'?", ["きのう べんきょうします", "きのう べんきょうしました", "きのう べんきょうしません", "きのう べんきょうしませんでした"], 1, "しました indica que a ação de estudar aconteceu no passado."]
  ])
},

// ======================================================
// SEMANA 5 — ADJETIVOS
// ======================================================

5: {
  days: {
    1: buildQuestions(5, 1, [
      ["Qual palavra é um い-adjetivo?", ["おいしい", "しずか", "せんせい", "がっこう"], 0, "おいしい termina em い e é um い-adjetivo."],
      ["Qual palavra significa bonito ou limpo?", ["きれい", "たかい", "おいしい", "あつい"], 0, "きれい significa bonito ou limpo e é um な-adjetivo, apesar de terminar em い."],
      ["Qual palavra significa caro ou alto?", ["たかい", "しずか", "げんき", "ゆうめい"], 0, "たかい é um い-adjetivo."],
      ["Qual palavra significa quieto?", ["しずか", "おいしい", "さむい", "あつい"], 0, "しずか é um な-adjetivo."],
      ["Qual palavra significa delicioso?", ["おいしい", "べんり", "しずか", "ゆうめい"], 0, "おいしい significa delicioso."],
      ["Qual palavra significa quente, falando do clima ou de algo quente?", ["あつい", "さむい", "やすい", "ひくい"], 0, "あつい é um い-adjetivo que significa quente."],
      ["Qual palavra significa frio?", ["さむい", "あつい", "たかい", "おもしろい"], 0, "さむい significa frio, especialmente sobre o clima."],
      ["Qual palavra significa interessante?", ["おもしろい", "しずか", "げんき", "べんり"], 0, "おもしろい é um い-adjetivo."],
      ["Qual palavra significa famoso?", ["ゆうめい", "おいしい", "たのしい", "さむい"], 0, "ゆうめい é um な-adjetivo."],
      ["Qual é a principal diferença entre い-adjetivos e な-adjetivos?", ["O modo como se conectam ao substantivo e mudam de forma", "Um grupo só existe no passado", "Um grupo só descreve pessoas", "Não existe diferença"], 0, "Os dois grupos seguem regras diferentes para conectar e conjugar."]
    ]),
    2: buildQuestions(5, 2, [
      ["Qual destes é um い-adjetivo?", ["たのしい", "しずか", "べんり", "ゆうめい"], 0, "たのしい significa divertido e é um い-adjetivo."],
      ["Qual destes é um な-adjetivo?", ["げんき", "たかい", "さむい", "おいしい"], 0, "げんき é um な-adjetivo."],
      ["Qual palavra significa conveniente ou prático?", ["べんり", "あつい", "ひくい", "ながい"], 0, "べんり é um な-adjetivo que significa conveniente."],
      ["Qual palavra significa divertido ou agradável?", ["たのしい", "しずか", "きれい", "ゆうめい"], 0, "たのしい é um い-adjetivo."],
      ["Qual palavra significa saudável ou bem?", ["げんき", "たかい", "おもしろい", "あたらしい"], 0, "げんき é um な-adjetivo."],
      ["Qual frase apresenta um な-adjetivo antes de um substantivo?", ["しずかな まち", "しずかい まち", "しずかの まち", "しずかを まち"], 0, "な conecta o な-adjetivo ao substantivo."],
      ["Qual frase apresenta um い-adjetivo antes de um substantivo?", ["おいしい りんご", "おいしな りんご", "おいしの りんご", "おいしくな りんご"], 0, "O い-adjetivo pode vir diretamente antes do substantivo."],
      ["Qual palavra significa novo?", ["あたらしい", "ふるい", "しずか", "べんり"], 0, "あたらしい significa novo."],
      ["Qual palavra significa antigo ou velho?", ["ふるい", "あたらしい", "たのしい", "げんき"], 0, "ふるい significa velho ou antigo."],
      ["Qual palavra é um な-adjetivo?", ["きれい", "おもしろい", "たかい", "あつい"], 0, "きれい é uma exceção importante: termina em い, mas é な-adjetivo."]
    ]),
    3: buildQuestions(5, 3, [
      ["Como dizer 'O gato é fofo'?", ["ねこは かわいいです", "ねこは かわいなです", "ねこを かわいい", "ねこに かわいい"], 0, "かわいい é um い-adjetivo usado diretamente antes de です."],
      ["Qual frase significa 'A comida é deliciosa'?", ["たべものは おいしいです", "たべものは おいしなです", "たべものを おいしい", "たべものへ おいしい"], 0, "おいしい é um い-adjetivo."],
      ["Como dizer 'A cidade é quieta'?", ["まちは しずかです", "まちは しずかいです", "まちを しずか", "まちへ しずか"], 0, "しずか é um な-adjetivo e usa です na afirmação."],
      ["Qual frase significa 'O livro é interessante'?", ["ほんは おもしろいです", "ほんは おもしろなです", "ほんを おもしろい", "ほんに おもしろ"], 0, "おもしろい é um い-adjetivo."],
      ["Como dizer 'A escola é bonita'?", ["がっこうは きれいです", "がっこうは きれいいです", "がっこうを きれい", "がっこうへ きれい"], 0, "きれい é um な-adjetivo e não recebe outro い."],
      ["Qual frase descreve uma pessoa como saudável?", ["ひとは げんきです", "ひとは げんきいです", "ひとを げんき", "ひとへ げんき"], 0, "げんき é um な-adjetivo."],
      ["Qual frase usa corretamente um い-adjetivo?", ["この ほんは あたらしいです", "この ほんは あたらしなです", "この ほんを あたらしい", "この ほんへ あたらしい"], 0, "あたらしい permanece na forma original antes de です."],
      ["Qual frase usa corretamente um な-adjetivo?", ["この へやは べんりです", "この へやは べんりいです", "この へやを べんり", "この へやへ べんり"], 0, "べんり é um な-adjetivo."],
      ["Qual palavra completa ねこは ___ です para dizer 'fofo'?", ["かわいい", "かわいな", "かわいで", "かわいを"], 0, "かわいい é a forma afirmativa do adjetivo."],
      ["Qual frase está correta?", ["この まちは しずかです", "この まちは しずかいです", "この まちを しずか", "この まちに しずかを"], 0, "しずか é um な-adjetivo e a frase está na forma afirmativa."]
    ]),
    4: buildQuestions(5, 4, [
      ["Qual é a forma negativa de たかい?", ["たかくない", "たかいじゃないでした", "たかなない", "たかくでした"], 0, "Para negar um い-adjetivo, troca-se い por くない."],
      ["Qual é a forma negativa de おいしい?", ["おいしくない", "おいしいくない", "おいしない", "おいしかない"], 0, "おいしい torna-se おいしくない."],
      ["Qual frase significa 'Não está frio'?", ["さむくないです", "さむいないです", "さむかったです", "さむくでした"], 0, "さむくないです é a forma negativa educada."],
      ["Qual é a forma negativa de しずか?", ["しずかじゃないです", "しずかくないです", "しずかいないです", "しずかません"], 0, "な-adjetivos usam じゃないです na negativa informal-educada comum."],
      ["Como dizer 'A cidade não é quieta'?", ["まちは しずかじゃないです", "まちは しずかくないです", "まちは しずかました", "まちは しずかを"], 0, "しずか é な-adjetivo, então usa じゃないです."],
      ["Qual é a forma negativa de あたらしい?", ["あたらしくない", "あたらしいない", "あたらしじゃない", "あたらしくました"], 0, "あたらしい perde o い final e recebe くない."],
      ["Qual é a forma negativa de げんき?", ["げんきじゃない", "げんきくない", "げんきいない", "げんきません"], 0, "げんき é な-adjetivo."],
      ["Qual frase significa 'A comida não é deliciosa'?", ["たべものは おいしくないです", "たべものは おいしいないです", "たべものは おいしかったです", "たべものは おいしです"], 0, "おいしくない é a negativa de おいしい."],
      ["Qual adjetivo usa くない para ficar negativo?", ["たのしい", "しずか", "べんり", "げんき"], 0, "たのしい é um い-adjetivo."],
      ["Qual associação está correta?", ["い-adjetivo: くない; な-adjetivo: じゃない", "い-adjetivo: じゃない; な-adjetivo: くない", "Ambos usam ません", "Ambos usam ました"], 0, "Os dois grupos usam construções negativas diferentes."]
    ]),
    5: buildQuestions(5, 5, [
      ["Qual é a forma passada afirmativa de たかい?", ["たかかった", "たかくない", "たかくなかった", "たかいでした"], 0, "O passado afirmativo do い-adjetivo troca い por かった."],
      ["Qual é a forma passada de おいしい?", ["おいしかった", "おいしくない", "おいしくなかった", "おいしいでした"], 0, "おいしい torna-se おいしかった."],
      ["Qual frase significa 'Estava frio'?", ["さむかったです", "さむくないです", "さむくなかったです", "さむいです"], 0, "さむかったです é o passado afirmativo."],
      ["Qual é a forma passada negativa de たかい?", ["たかくなかった", "たかかった", "たかくない", "たかいでした"], 0, "たかくなかった significa não era caro/alto."],
      ["Qual frase significa 'Não estava delicioso'?", ["おいしくなかったです", "おいしかったです", "おいしくないです", "おいしいでした"], 0, "おいしくなかった é passado negativo."],
      ["Qual é o passado afirmativo de しずか?", ["しずかでした", "しずかかった", "しずかくない", "しずかじゃない"], 0, "な-adjetivos usam でした no passado afirmativo."],
      ["Qual é o passado negativo de げんき?", ["げんきじゃなかったです", "げんきかったです", "げんきくなかったです", "げんきでした"], 0, "じゃなかったです expressa passado negativo para な-adjetivos."],
      ["Qual frase significa 'A cidade era quieta'?", ["まちは しずかでした", "まちは しずかかった", "まちは しずかくない", "まちは しずかじゃない"], 0, "しずかでした é o passado afirmativo."],
      ["Qual forma significa 'Não era novo'?", ["あたらしくなかった", "あたらしかった", "あたらしくない", "あたらしいでした"], 0, "あたらしくなかった é o passado negativo."],
      ["Qual associação está correta?", ["い-adjetivo passado: かった; な-adjetivo passado: でした", "い-adjetivo passado: でした; な-adjetivo passado: かった", "Ambos usam ました", "Ambos usam ませんでした"], 0, "Cada grupo possui uma formação própria de passado."]
    ]),
    6: buildQuestions(5, 6, [
      ["Como dizer 'A casa é grande'?", ["いえは おおきいです", "いえは おおきなです", "いえを おおきい", "いえへ おおきい"], 0, "おおきい é um い-adjetivo."],
      ["Como dizer 'O quarto é limpo'?", ["へやは きれいです", "へやは きれいいです", "へやを きれい", "へやへ きれい"], 0, "きれい é um な-adjetivo."],
      ["Como dizer 'O livro não é interessante'?", ["ほんは おもしろくないです", "ほんは おもしろいないです", "ほんは おもしろかったです", "ほんは おもしろでした"], 0, "おもしろくない é a forma negativa."],
      ["Como dizer 'O dia estava quente'?", ["ひは あつかったです", "ひは あつくないです", "ひは あついでした", "ひは あつくでした"], 0, "あつかった é o passado afirmativo de あつい."],
      ["Como dizer 'A cidade não era famosa'?", ["まちは ゆうめいじゃなかったです", "まちは ゆうめいくなかったです", "まちは ゆうめいでした", "まちは ゆうめいかったです"], 0, "ゆうめい é な-adjetivo; o passado negativo usa じゃなかったです."],
      ["Qual adjetivo descreve algo como conveniente?", ["べんり", "さむい", "あつい", "ふるい"], 0, "べんり significa conveniente."],
      ["Qual frase descreve comida deliciosa?", ["おいしい たべもの", "おいしな たべもの", "おいしく たべもの", "おいしの たべもの"], 0, "い-adjetivos vêm diretamente antes do substantivo."],
      ["Qual frase descreve uma cidade quieta?", ["しずかな まち", "しずかい まち", "しずかく まち", "しずかを まち"], 0, "な conecta o な-adjetivo ao substantivo."],
      ["Qual frase está no passado negativo?", ["この へやは きれいじゃなかったです", "この へやは きれいでした", "この へやは きれいです", "この へやは きれいじゃないです"], 0, "じゃなかったです indica que não era bonito/limpo."],
      ["Qual é o objetivo de estudar adjetivos?", ["Descrever características de pessoas, lugares e objetos", "Indicar somente ações", "Contar horas", "Marcar o objeto direto"], 0, "Adjetivos permitem descrever qualidades e estados."]
    ])
  },
  recovery: buildRecovery(5, [
    ["Qual destas palavras é um い-adjetivo?", ["おいしい", "しずか", "げんき", "べんり"], 0, "おいしい é um い-adjetivo."],
    ["Qual destas palavras é um な-adjetivo?", ["きれい", "たかい", "さむい", "あたらしい"], 0, "きれい é な-adjetivo, apesar de terminar em い."],
    ["Qual é a negativa de たかい?", ["たかくない", "たかいじゃない", "たかかった", "たかくでした"], 0, "い-adjetivos usam くない na negativa."],
    ["Qual é o passado afirmativo de しずか?", ["しずかでした", "しずかかった", "しずかくない", "しずかじゃない"], 0, "な-adjetivos usam でした no passado afirmativo."],
    ["Qual frase significa 'O gato era fofo'?", ["ねこは かわいかったです", "ねこは かわいくないです", "ねこは かわいいです", "ねこは かわいじゃないです"], 0, "かわいかったです é o passado afirmativo de かわいい."]
  ])
},


6: {
  days: {
    1: buildQuestions(6, 1, [
      ["Como se escreve o número 1 em japonês?", ["いち", "に", "さん", "よん"], 0, "いち significa um."],
      ["O que significa に?", ["Um", "Dois", "Três", "Quatro"], 1, "に significa dois."],
      ["Como se escreve 3?", ["ご", "ろく", "さん", "なな"], 2, "さん significa três."],
      ["Qual é o número よん?", ["2", "3", "4", "5"], 2, "よん é uma das leituras de quatro."],
      ["O que significa ご?", ["Cinco", "Seis", "Sete", "Oito"], 0, "ご significa cinco."],
      ["Como se escreve 6?", ["よん", "ご", "ろく", "はち"], 2, "ろく significa seis."],
      ["Qual número é なな?", ["5", "6", "7", "8"], 2, "なな significa sete."],
      ["O que significa はち?", ["Seis", "Sete", "Oito", "Nove"], 2, "はち significa oito."],
      ["Como se escreve 9?", ["きゅう", "じゅう", "さん", "ご"], 0, "きゅう significa nove."],
      ["Qual é o número じゅう?", ["8", "9", "10", "11"], 2, "じゅう significa dez."]
    ]),
    2: buildQuestions(6, 2, [
      ["Como se diz 11?", ["じゅういち", "にじゅう", "じゅうに", "いちじゅう"], 0, "じゅういち é dez mais um."],
      ["O que significa にじゅう?", ["12", "20", "2", "22"], 1, "にじゅう significa vinte."],
      ["Como se diz 15?", ["じゅうご", "ごじゅう", "じゅうろく", "いちご"], 0, "じゅうご significa quinze."],
      ["Qual é o número さんじゅう?", ["3", "13", "30", "33"], 2, "さんじゅう significa trinta."],
      ["Como se diz 21?", ["にじゅういち", "じゅうに", "いちに", "にじゅうに"], 0, "にじゅういち significa vinte e um."],
      ["O que significa よんじゅう?", ["4", "14", "40", "44"], 2, "よんじゅう significa quarenta."],
      ["Como se diz 50?", ["ご", "ごじゅう", "じゅうご", "ごひゃく"], 1, "ごじゅう significa cinquenta."],
      ["Qual é o número ろくじゅう?", ["6", "16", "60", "66"], 2, "ろくじゅう significa sessenta."],
      ["Como se diz 70?", ["ななじゅう", "じゅうなな", "なな", "ひゃく"], 0, "ななじゅう significa setenta."],
      ["O que significa ひゃく?", ["10", "50", "100", "1000"], 2, "ひゃく significa cem."]
    ]),
    3: buildQuestions(6, 3, [
      ["Como perguntar a idade de alguém?", ["なんさいですか", "なんじですか", "なんにちですか", "どこですか"], 0, "なんさいですか pergunta quantos anos alguém tem."],
      ["O que significa なんさい?", ["Que horas", "Quantos anos", "Que dia", "Quanto custa"], 1, "なんさい pergunta a idade."],
      ["Como dizer que tenho 10 anos?", ["じゅうさいです", "じゅうじです", "じゅうにちです", "じゅうがつです"], 0, "じゅうさいです significa tenho dez anos."],
      ["Qual partícula aparece em わたしは?", ["を", "は", "で", "に"], 1, "は marca o tópico da frase."],
      ["Complete: わたしは じゅうさい___。", ["を", "に", "です", "で"], 2, "です completa a afirmação educada."],
      ["O que significa さい?", ["Anos de idade", "Horas", "Meses", "Dias da semana"], 0, "さい é o contador usado para idade."],
      ["Como perguntar quantos anos alguém tem?", ["なんさいですか", "なんじですか", "なんようびですか", "なんがつですか"], 0, "なんさいですか é a pergunta de idade."],
      ["O que significa わたし?", ["Você", "Amigo", "Eu", "Professor"], 2, "わたし significa eu."],
      ["Qual frase significa 'Eu tenho 15 anos'?", ["わたしは じゅうごさいです", "わたしは ごじです", "わたしは じゅうごにちです", "わたしは ごがつです"], 0, "じゅうごさい indica quinze anos de idade."],
      ["Qual é a função de です?", ["Indicar passado", "Finalizar uma afirmação educada", "Indicar lugar", "Indicar quantidade"], 1, "です é uma forma educada de concluir uma afirmação."]
    ]),
    4: buildQuestions(6, 4, [
      ["Como se diz 'que horas'?", ["なんじ", "なんさい", "なんにち", "なんがつ"], 0, "なんじ pergunta as horas."],
      ["O que significa いちじ?", ["Uma hora", "Duas horas", "Uma idade", "Um dia"], 0, "いちじ significa uma hora."],
      ["Como se diz duas horas?", ["にじ", "ににち", "にさい", "にがつ"], 0, "にじ significa duas horas."],
      ["Qual é a leitura de 3 horas?", ["さんさい", "さんじ", "さんにち", "さんがつ"], 1, "さんじ significa três horas."],
      ["Como perguntar 'Que horas são?'", ["なんじですか", "なんさいですか", "なんにちですか", "なんようびですか"], 0, "なんじですか pergunta o horário."],
      ["O que significa はん em さんじはん?", ["Meia hora", "Uma hora", "Manhã", "Noite"], 0, "はん indica meia hora."],
      ["O que significa ごぜん?", ["Manhã / antes do meio-dia", "Tarde", "Noite", "Ontem"], 0, "ごぜん indica o período antes do meio-dia."],
      ["O que significa ごご?", ["Manhã", "Tarde / depois do meio-dia", "Madrugada", "Amanhã"], 1, "ごご indica o período depois do meio-dia."],
      ["Como dizer quatro e meia?", ["よじはん", "よんさい", "よんがつ", "よんにち"], 0, "よじはん significa quatro e meia."],
      ["Em しちじ, o que significa じ?", ["Anos", "Horas", "Meses", "Dias"], 1, "じ é usado para indicar horas."]
    ]),
    5: buildQuestions(6, 5, [
      ["Como se diz segunda-feira?", ["げつようび", "かようび", "すいようび", "にちようび"], 0, "げつようび é segunda-feira."],
      ["O que significa かようび?", ["Segunda", "Terça", "Quarta", "Quinta"], 1, "かようび é terça-feira."],
      ["Como se diz quarta-feira?", ["もくようび", "すいようび", "きんようび", "どようび"], 1, "すいようび é quarta-feira."],
      ["Qual dia é もくようび?", ["Quarta", "Quinta", "Sexta", "Sábado"], 1, "もくようび é quinta-feira."],
      ["O que significa きんようび?", ["Sexta-feira", "Sábado", "Domingo", "Segunda-feira"], 0, "きんようび é sexta-feira."],
      ["Como se diz sábado?", ["にちようび", "どようび", "げつようび", "かようび"], 1, "どようび é sábado."],
      ["Qual é o significado de にちようび?", ["Sábado", "Domingo", "Segunda", "Terça"], 1, "にちようび é domingo."],
      ["O que significa なんようび?", ["Que mês?", "Que dia da semana?", "Que horas?", "Que idade?"], 1, "なんようび pergunta o dia da semana."],
      ["Como perguntar 'Que dia é hoje?'", ["きょうは なんようびですか", "きょうは なんさいですか", "きょうは なんじですか", "きょうは なんがつですか"], 0, "A frase pergunta qual é o dia da semana hoje."],
      ["O que significa きょう?", ["Ontem", "Hoje", "Amanhã", "Semana"], 1, "きょう significa hoje."]
    ]),
    6: buildQuestions(6, 6, [
      ["Como se diz janeiro?", ["いちがつ", "にがつ", "さんがつ", "しがつ"], 0, "いちがつ é janeiro."],
      ["O que significa にがつ?", ["Janeiro", "Fevereiro", "Março", "Abril"], 1, "にがつ é fevereiro."],
      ["Como se diz março?", ["さんがつ", "しがつ", "ごがつ", "ろくがつ"], 0, "さんがつ é março."],
      ["Qual mês é ごがつ?", ["Abril", "Maio", "Junho", "Julho"], 1, "ごがつ é maio."],
      ["O que significa なんがつ?", ["Que dia?", "Que mês?", "Que ano?", "Que hora?"], 1, "なんがつ pergunta o mês."],
      ["Como se diz dia 1 do mês?", ["ついたち", "ふつか", "みっか", "よっか"], 0, "ついたち é a leitura especial do primeiro dia do mês."],
      ["O que significa ふつか?", ["Dia 1", "Dia 2", "Dia 3", "Dia 4"], 1, "ふつか significa dia dois."],
      ["Qual é a leitura de dia 3?", ["みっか", "よっか", "いつか", "むいか"], 0, "みっか significa dia três."],
      ["Como perguntar a data?", ["なんにちですか", "なんさいですか", "なんじですか", "なんようびですか"], 0, "なんにち pergunta qual é o dia do mês."],
      ["O que significa きょうは ごがつ いつかです?", ["Hoje é 5 de maio", "Hoje é 5 de junho", "Hoje é 15 de maio", "Hoje é domingo"], 0, "ごがつ é maio e いつか é dia cinco."]
    ])
  },
  recovery: buildRecovery(6, [
    ["Como se diz 8?", ["はち", "なな", "ろく", "きゅう"], 0, "はち significa oito."],
    ["O que significa なんじですか?", ["Quantos anos?", "Que horas?", "Que mês?", "Que dia da semana?"], 1, "なんじ pergunta as horas."],
    ["Qual é a segunda-feira?", ["げつようび", "すいようび", "きんようび", "にちようび"], 0, "げつようび é segunda-feira."],
    ["Como se diz fevereiro?", ["いちがつ", "にがつ", "さんがつ", "しがつ"], 1, "にがつ é fevereiro."],
    ["O que significa じゅうごさい?", ["15 horas", "15 anos de idade", "Dia 15", "15 meses"], 1, "さい indica idade."]
  ])
},

7: {
  days: {
    1: buildQuestions(7, 1, [
      ["O que significa がっこう?", ["Casa", "Escola", "Restaurante", "Parque"], 1, "がっこう significa escola."],
      ["Como se diz professor?", ["せんせい", "がくせい", "ともだち", "かぞく"], 0, "せんせい significa professor."],
      ["O que significa がくせい?", ["Professor", "Estudante", "Amigo", "Irmão"], 1, "がくせい significa estudante."],
      ["Como se diz estudar?", ["たべます", "ねます", "べんきょうします", "のみます"], 2, "べんきょうします significa estudar."],
      ["O que significa ほん?", ["Livro", "Lápis", "Mesa", "Cadeira"], 0, "ほん significa livro."],
      ["Como se diz 'Eu estudo'?", ["わたしは べんきょうします", "わたしは たべます", "わたしは ねます", "わたしは のみます"], 0, "べんきょうします é estudar."],
      ["O que significa ともだち?", ["Professor", "Amigo", "Estudante", "Família"], 1, "ともだち significa amigo."],
      ["Qual palavra significa sala de aula?", ["きょうしつ", "いえ", "みず", "ごはん"], 0, "きょうしつ significa sala de aula."],
      ["Como se diz 'Vou à escola'?", ["がっこうに いきます", "がっこうを たべます", "がっこうで ねます", "がっこうが のみます"], 0, "に indica o destino do movimento."],
      ["Qual frase significa 'Meu professor'?", ["わたしの せんせい", "わたしを せんせい", "わたしで せんせい", "わたしが せんせい"], 0, "の indica relação ou posse."]
    ]),
    2: buildQuestions(7, 2, [
      ["O que significa いえ?", ["Escola", "Casa", "Rua", "Loja"], 1, "いえ significa casa."],
      ["Como se diz quarto?", ["へや", "そと", "みず", "ほん"], 0, "へや significa quarto."],
      ["O que significa まど?", ["Porta", "Janela", "Mesa", "Cama"], 1, "まど significa janela."],
      ["Como se diz porta?", ["つくえ", "いす", "ドア", "へや"], 2, "ドア significa porta."],
      ["O que significa つくえ?", ["Mesa", "Cadeira", "Cama", "Janela"], 0, "つくえ significa mesa."],
      ["Como se diz cadeira?", ["いす", "ほん", "かぎ", "みず"], 0, "いす significa cadeira."],
      ["Qual verbo significa dormir?", ["おきます", "ねます", "いきます", "きます"], 1, "ねます significa dormir."],
      ["O que significa おきます?", ["Dormir", "Acordar", "Comer", "Estudar"], 1, "おきます significa acordar."],
      ["Como dizer 'Eu durmo em casa'?", ["いえで ねます", "いえに たべます", "いえを ねます", "いえが ねます"], 0, "で indica o local onde a ação acontece."],
      ["Complete: へや___ べんきょうします。", ["を", "で", "が", "は"], 1, "で marca o local da ação de estudar."]
    ]),
    3: buildQuestions(7, 3, [
      ["O que significa ごはん?", ["Água", "Comida / arroz", "Chá", "Leite"], 1, "ごはん pode significar arroz ou refeição."],
      ["Como se diz água?", ["みず", "おちゃ", "ごはん", "にく"], 0, "みず significa água."],
      ["O que significa おちゃ?", ["Água", "Chá", "Suco", "Leite"], 1, "おちゃ significa chá."],
      ["Como se diz comer?", ["のみます", "たべます", "ねます", "みます"], 1, "たべます significa comer."],
      ["O que significa のみます?", ["Comer", "Beber", "Dormir", "Correr"], 1, "のみます significa beber."],
      ["Como se diz carne?", ["さかな", "にく", "やさい", "みず"], 1, "にく significa carne."],
      ["O que significa さかな?", ["Peixe", "Carne", "Arroz", "Fruta"], 0, "さかな significa peixe."],
      ["Qual frase significa 'Eu bebo água'?", ["みずを のみます", "みずを たべます", "みずで ねます", "みずに いきます"], 0, "を marca o objeto da ação."],
      ["Complete: ごはん___ たべます。", ["に", "を", "で", "へ"], 1, "を marca aquilo que é comido."],
      ["O que significa おいしい?", ["Bonito", "Delicioso", "Grande", "Pequeno"], 1, "おいしい significa gostoso ou delicioso."]
    ]),
    4: buildQuestions(7, 4, [
      ["O que significa おんがく?", ["Esporte", "Música", "Livro", "Comida"], 1, "おんがく significa música."],
      ["Como se diz ler?", ["よみます", "かきます", "ききます", "はなします"], 0, "よみます significa ler."],
      ["O que significa ききます?", ["Escrever", "Ouvir / perguntar", "Comer", "Dormir"], 1, "ききます pode significar ouvir ou perguntar."],
      ["Como se diz jogar/brincar?", ["あそびます", "ねます", "のみます", "おきます"], 0, "あそびます significa brincar ou se divertir."],
      ["O que significa えいが?", ["Filme", "Música", "Escola", "Família"], 0, "えいが significa filme."],
      ["Qual frase significa 'Eu leio um livro'?", ["ほんを よみます", "ほんを のみます", "ほんで ねます", "ほんに いきます"], 0, "ほんを よみます significa ler um livro."],
      ["Como se diz 'Eu gosto de música'?", ["おんがくが すきです", "おんがくを ねます", "おんがくに いきます", "おんがくで たべます"], 0, "が pode marcar aquilo de que se gosta com すきです."],
      ["O que significa すき?", ["Gostar", "Comer", "Dormir", "Estudar"], 0, "すき significa gostar."],
      ["Como se diz esporte?", ["スポーツ", "がっこう", "かぞく", "ともだち"], 0, "スポーツ significa esporte."],
      ["Qual frase significa 'Eu brinco'?", ["あそびます", "たべます", "のみます", "ねます"], 0, "あそびます é brincar."]
    ]),
    5: buildQuestions(7, 5, [
      ["O que significa かぞく?", ["Amigo", "Família", "Professor", "Estudante"], 1, "かぞく significa família."],
      ["Como se diz mãe?", ["はは", "ちち", "あに", "あね"], 0, "はは é uma forma de dizer minha mãe."],
      ["O que significa ちち?", ["Mãe", "Pai", "Irmão", "Irmã"], 1, "ちち é uma forma de dizer meu pai."],
      ["Como se diz irmão mais velho?", ["あに", "あね", "おとうと", "いもうと"], 0, "あに significa irmão mais velho."],
      ["O que significa あね?", ["Irmão mais velho", "Irmã mais velha", "Irmão mais novo", "Irmã mais nova"], 1, "あね significa irmã mais velha."],
      ["Como se diz amigo?", ["ともだち", "せんせい", "がくせい", "かぞく"], 0, "ともだち significa amigo."],
      ["O que significa いもうと?", ["Irmã mais nova", "Irmã mais velha", "Mãe", "Amiga"], 0, "いもうと significa irmã mais nova."],
      ["Complete: わたしの ___。 (minha família)", ["かぞく", "がっこう", "ごはん", "おんがく"], 0, "かぞく significa família."],
      ["Como dizer 'Meu amigo'?", ["わたしの ともだち", "わたしを ともだち", "わたしで ともだち", "わたしに ともだち"], 0, "の indica relação ou posse."],
      ["O que significa おとうと?", ["Irmão mais novo", "Irmão mais velho", "Pai", "Amigo"], 0, "おとうと significa irmão mais novo."]
    ]),
    6: buildQuestions(7, 6, [
      ["Como dizer 'Eu acordo às sete'?", ["しちじに おきます", "しちじを おきます", "しちじで ねます", "しちじが たべます"], 0, "に marca o horário em que a ação acontece."],
      ["O que significa あさ?", ["Manhã", "Tarde", "Noite", "Ontem"], 0, "あさ significa manhã."],
      ["Como se diz noite?", ["あさ", "ひる", "よる", "きょう"], 2, "よる significa noite."],
      ["O que significa まいにち?", ["Toda semana", "Todos os dias", "Todo mês", "Amanhã"], 1, "まいにち significa todos os dias."],
      ["Qual frase significa 'Eu vou à escola'?", ["がっこうに いきます", "がっこうを のみます", "がっこうで たべます", "がっこうが ねます"], 0, "に marca o destino."],
      ["Como dizer 'Eu estudo em casa'?", ["いえで べんきょうします", "いえを べんきょうします", "いえに べんきょうします", "いえが べんきょうします"], 0, "で indica o local da atividade."],
      ["O que significa ばんごはん?", ["Café da manhã", "Almoço", "Jantar", "Lanche"], 2, "ばんごはん significa jantar."],
      ["Como dizer 'Eu leio um livro à noite'?", ["よるに ほんを よみます", "よるを ほんに よみます", "よるで ほんが よみます", "よるが ほんを ねます"], 0, "に indica o horário e を marca o objeto."],
      ["Qual palavra significa manhã cedo?", ["あさ", "よる", "ばん", "ひる"], 0, "あさ significa manhã."],
      ["Qual frase descreve uma rotina?", ["まいにち がっこうに いきます", "みずは あおいです", "ほんは おもしろいです", "ねこは かわいいです"], 0, "A frase significa 'Vou à escola todos os dias'."]
    ])
  },
  recovery: buildRecovery(7, [
    ["O que significa がっこう?", ["Casa", "Escola", "Amigo", "Comida"], 1, "がっこう significa escola."],
    ["Como se diz dormir?", ["ねます", "おきます", "たべます", "よみます"], 0, "ねます significa dormir."],
    ["Qual partícula marca o objeto de uma ação?", ["に", "を", "で", "へ"], 1, "を marca o objeto direto."],
    ["O que significa かぞく?", ["Família", "Escola", "Música", "Livro"], 0, "かぞく significa família."],
    ["Como dizer 'Eu bebo água'?", ["みずを のみます", "みずを たべます", "みずに ねます", "みずで いきます"], 0, "みずを のみます significa beber água."]
  ])
},

8: {
  days: {
    1: buildQuestions(8, 1, [
      ["O que significa だれ?", ["Quem", "Onde", "Quando", "Como"], 0, "だれ significa quem."],
      ["Como perguntar 'Quem é você?'", ["あなたは だれですか", "あなたは どこですか", "あなたは いつですか", "あなたは なんじですか"], 0, "だれ pergunta quem é a pessoa."],
      ["O que significa ともだち?", ["Professor", "Amigo", "Casa", "Livro"], 1, "ともだち significa amigo."],
      ["Como perguntar 'Quem é aquele professor?'", ["あの せんせいは だれですか", "あの せんせいは どこですか", "あの せんせいは いつですか", "あの せんせいは いくらですか"], 0, "だれ pergunta pela identidade de alguém."],
      ["Qual palavra significa 'quem'?", ["なに", "だれ", "どこ", "いつ"], 1, "だれ significa quem."],
      ["Como responder 'É meu amigo'?", ["わたしの ともだちです", "わたしの いえです", "わたしの ほんです", "わたしの みずです"], 0, "A frase identifica a pessoa como meu amigo."],
      ["O que significa あのひと?", ["Aquela pessoa", "Aquele lugar", "Aquele dia", "Aquela comida"], 0, "あのひと significa aquela pessoa."],
      ["Qual pergunta usa だれ?", ["だれですか", "どこですか", "いつですか", "どうですか"], 0, "だれですか pergunta quem é."],
      ["O que significa ひと?", ["Pessoa", "Casa", "Dia", "Hora"], 0, "ひと significa pessoa."],
      ["Como perguntar quem é o estudante?", ["がくせいは だれですか", "がくせいは どこですか", "がくせいは いつですか", "がくせいは なんじですか"], 0, "だれ pergunta quem é o estudante."]
    ]),
    2: buildQuestions(8, 2, [
      ["O que significa なに?", ["Quem", "O quê", "Onde", "Quando"], 1, "なに significa o quê."],
      ["Como perguntar 'O que é isto?'", ["これは なんですか", "これは だれですか", "これは どこですか", "これは いつですか"], 0, "なんですか pergunta o que é algo."],
      ["O que significa これ?", ["Isto", "Aquilo", "Quem", "Onde"], 0, "これ significa isto."],
      ["Qual palavra significa 'aquilo'?", ["これ", "それ", "あれ", "だれ"], 2, "あれ significa aquilo, longe de quem fala e de quem ouve."],
      ["Como perguntar o que alguém come?", ["なにを たべますか", "どこで たべますか", "だれと たべますか", "いつ ねますか"], 0, "なにを pergunta o que será comido."],
      ["O que significa なん?", ["Quem", "O quê / qual", "Onde", "Por quê"], 1, "なん é uma forma de perguntar o que ou qual."],
      ["Como responder 'É um livro'?", ["ほんです", "みずです", "ねこです", "いえです"], 0, "ほんです significa é um livro."],
      ["Qual pergunta significa 'O que você bebe?'", ["なにを のみますか", "だれを のみますか", "どこを のみますか", "いつを のみますか"], 0, "なにを pergunta o que a pessoa bebe."],
      ["O que significa それ?", ["Isto", "Aquilo perto de quem ouve", "Aquela pessoa", "Onde"], 1, "それ aponta para algo próximo de quem ouve."],
      ["Complete: これは ___ ですか。", ["なん", "だれ", "どこ", "いつ"], 0, "なん pergunta o que é o objeto."]
    ]),
    3: buildQuestions(8, 3, [
      ["O que significa どこ?", ["Quem", "O quê", "Onde", "Quando"], 2, "どこ significa onde."],
      ["Como perguntar 'Onde fica a escola?'", ["がっこうは どこですか", "がっこうは だれですか", "がっこうは いつですか", "がっこうは なにですか"], 0, "どこ pergunta o lugar."],
      ["O que significa ここ?", ["Aqui", "Ali", "Lá longe", "Quando"], 0, "ここ significa aqui."],
      ["Qual palavra significa 'ali'?", ["ここ", "そこ", "あそこ", "だれ"], 1, "そこ indica um lugar perto de quem ouve."],
      ["O que significa あそこ?", ["Aqui", "Ali perto", "Lá, distante", "Quem"], 2, "あそこ indica um lugar distante de ambos."],
      ["Como perguntar onde alguém mora?", ["どこに すんでいますか", "だれに すんでいますか", "いつに すんでいますか", "なにに すんでいますか"], 0, "どこ pergunta o local."],
      ["O que significa いえ?", ["Casa", "Escola", "Rua", "Loja"], 0, "いえ significa casa."],
      ["Qual frase significa 'Estou aqui'?", ["ここです", "そこです", "あそこです", "だれです"], 0, "ここです significa é aqui."],
      ["Como perguntar onde está o livro?", ["ほんは どこですか", "ほんは だれですか", "ほんは いつですか", "ほんは なんさいですか"], 0, "どこ pergunta a localização."],
      ["Qual palavra é usada para perguntar localização?", ["どこ", "だれ", "なに", "いつ"], 0, "どこ significa onde."]
    ]),
    4: buildQuestions(8, 4, [
      ["O que significa いつ?", ["Quem", "Quando", "Onde", "Quanto"], 1, "いつ significa quando."],
      ["Como perguntar 'Quando você vai?'", ["いつ いきますか", "どこ いきますか", "だれ いきますか", "なに いきますか"], 0, "いつ pergunta o momento."],
      ["O que significa あした?", ["Ontem", "Hoje", "Amanhã", "Semana passada"], 2, "あした significa amanhã."],
      ["Como se diz ontem?", ["きのう", "きょう", "あした", "まいにち"], 0, "きのう significa ontem."],
      ["O que significa きょう?", ["Hoje", "Ontem", "Amanhã", "Mês"], 0, "きょう significa hoje."],
      ["Qual pergunta significa 'Quando é a prova?'", ["テストは いつですか", "テストは どこですか", "テストは だれですか", "テストは なにですか"], 0, "いつ pergunta quando acontecerá."],
      ["O que significa まいにち?", ["Todos os dias", "Amanhã", "Ontem", "Às vezes"], 0, "まいにち significa todos os dias."],
      ["Como perguntar o dia da semana?", ["なんようびですか", "なんさいですか", "なんじですか", "なんにんですか"], 0, "なんようび pergunta qual é o dia da semana."],
      ["O que significa らいしゅう?", ["Semana passada", "Esta semana", "Semana que vem", "Hoje"], 2, "らいしゅう significa semana que vem."],
      ["Qual palavra pergunta o momento de uma ação?", ["いつ", "どこ", "だれ", "なに"], 0, "いつ significa quando."]
    ]),
    5: buildQuestions(8, 5, [
      ["O que significa どうして?", ["Por quê", "Quem", "Onde", "Quanto"], 0, "どうして pergunta o motivo."],
      ["Qual palavra também pode perguntar 'por quê'?", ["なぜ", "だれ", "どこ", "いつ"], 0, "なぜ também significa por quê."],
      ["Como perguntar 'Por que você estuda japonês?'", ["どうして にほんごを べんきょうしますか", "だれ にほんごを べんきょうしますか", "どこ にほんごを べんきょうしますか", "いつ にほんごを べんきょうしますか"], 0, "どうして pergunta o motivo."],
      ["O que significa から?", ["Porque / desde", "Quem", "Onde", "Quanto"], 0, "から pode indicar origem ou motivo, dependendo da frase."],
      ["Como dizer 'Porque é interessante'?", ["おもしろいですから", "どこですから", "だれですから", "いつですから"], 0, "から pode apresentar uma justificativa."],
      ["O que significa おもしろい?", ["Interessante", "Difícil", "Pequeno", "Caro"], 0, "おもしろい significa interessante."],
      ["Qual pergunta procura uma explicação?", ["どうしてですか", "どこですか", "だれですか", "なんじですか"], 0, "どうしてですか pergunta por quê."],
      ["Qual palavra significa 'porque' em uma explicação simples?", ["から", "まで", "へ", "を"], 0, "から pode ligar uma razão à afirmação."],
      ["Como responder 'Porque gosto disso'?", ["すきですから", "どこですから", "だれですから", "いつですから"], 0, "すきですから significa porque gosto."],
      ["O que significa なぜ?", ["Por quê", "Como", "Quando", "Quem"], 0, "なぜ pergunta o motivo."]
    ]),
    6: buildQuestions(8, 6, [
      ["O que significa どう?", ["Como", "Quem", "Onde", "Quando"], 0, "どう pergunta como ou de que maneira."],
      ["Como perguntar 'Como você está?'", ["げんきですか", "どこですか", "だれですか", "なんじですか"], 0, "げんきですか pergunta se a pessoa está bem."],
      ["O que significa いくら?", ["Quanto custa", "Quem", "Onde", "Quando"], 0, "いくら pergunta o preço ou valor."],
      ["Como perguntar 'Quanto custa?'", ["いくらですか", "なんさいですか", "どこですか", "いつですか"], 0, "いくらですか pergunta o preço."],
      ["O que significa いくつ?", ["Quantos / quantas", "Onde", "Quem", "Por quê"], 0, "いくつ pergunta quantidade ou idade em certos contextos."],
      ["Como perguntar 'Como você vai à escola?'", ["どうやって がっこうに いきますか", "だれ がっこうに いきますか", "いつ がっこうに いきますか", "なに がっこうに いきますか"], 0, "どうやって pergunta de que maneira."],
      ["Qual palavra pergunta 'quanto' em preço?", ["いくら", "だれ", "どこ", "いつ"], 0, "いくら é usada para perguntar preço."],
      ["O que significa どうやって?", ["De que maneira", "Por qual motivo", "Em que lugar", "Em que dia"], 0, "どうやって pergunta como fazer algo."],
      ["Qual pergunta significa 'Quantos livros?'", ["ほんは いくつですか", "ほんは だれですか", "ほんは どこですか", "ほんは いつですか"], 0, "いくつ pergunta a quantidade."],
      ["Qual pergunta significa 'Como se diz isso em japonês?'", ["これは にほんごで どういいますか", "これは どこですか", "これは だれですか", "これは いつですか"], 0, "どういいますか pergunta como algo é dito."]
    ])
  },
  recovery: buildRecovery(8, [
    ["Qual palavra significa 'quem'?", ["だれ", "なに", "どこ", "いつ"], 0, "だれ significa quem."],
    ["Como perguntar 'Onde?'", ["どこ", "どうして", "いくら", "だれ"], 0, "どこ significa onde."],
    ["O que significa いつ?", ["Quando", "Quem", "Quanto", "Como"], 0, "いつ significa quando."],
    ["Como perguntar o preço?", ["いくらですか", "だれですか", "どこですか", "いつですか"], 0, "いくらですか pergunta quanto custa."],
    ["Qual palavra significa 'por quê'?", ["どうして", "どこ", "なに", "だれ"], 0, "どうして pergunta o motivo."]
  ])
},

9: {
  days: {
    1: buildQuestions(9, 1, [
      ["Qual é a forma て de たべます?", ["たべて", "たべって", "たべいて", "たべんで"], 0, "たべます termina em べ, formando たべて."],
      ["Qual é a forma て de みます?", ["みて", "みって", "みんで", "みいて"], 0, "みます forma みて."],
      ["Qual é a forma て de おきます?", ["おきて", "おきって", "おいて", "おきんで"], 0, "おきます forma おきて."],
      ["Qual é a forma て de ねます?", ["ねて", "ねって", "ねんで", "ねいて"], 0, "ねます forma ねて."],
      ["Qual é a forma て de あけます?", ["あけて", "あけって", "あけんで", "あいて"], 0, "あけます forma あけて."],
      ["Qual verbo significa comer?", ["たべます", "のみます", "みます", "ねます"], 0, "たべます significa comer."],
      ["O que significa たべて?", ["Comendo / coma / e depois comer", "Dormindo", "Bebendo", "Estudando"], 0, "たべて é a forma て de comer e pode ligar ações."],
      ["Qual forma て corresponde a みる?", ["みて", "みって", "みんで", "みいて"], 0, "みる passa para みて."],
      ["A forma て é usada para quê?", ["Ligar ações e formar construções", "Indicar somente idade", "Indicar somente lugar", "Indicar somente preço"], 0, "A forma て tem várias funções gramaticais."],
      ["Qual alternativa está na forma て?", ["たべて", "たべます", "たべない", "たべました"], 0, "たべて é a forma て."]
    ]),
    2: buildQuestions(9, 2, [
      ["Qual é a forma て de かきます?", ["かいて", "かきて", "かきって", "かんで"], 0, "かきます muda き para いて."],
      ["Qual é a forma て de ききます?", ["きいて", "ききて", "ききって", "きんで"], 0, "ききます forma きいて."],
      ["Qual é a forma て de いきます?", ["いって", "いいて", "いきて", "いんで"], 0, "いきます é uma exceção: forma いって."],
      ["Qual é a forma て de のみます?", ["のんで", "のって", "のいて", "のみて"], 0, "み muda para んで."],
      ["Qual é a forma て de よみます?", ["よんで", "よって", "よいて", "よみて"], 0, "み muda para んで."],
      ["Qual é a forma て de あそびます?", ["あそんで", "あそって", "あそいて", "あそびて"], 0, "び muda para んで."],
      ["Qual é a forma て de はなします?", ["はなして", "はなって", "はなんで", "はないて"], 0, "します muda para して."],
      ["Qual é a forma て de まちます?", ["まって", "まちて", "まんで", "まいて"], 0, "ち muda para って."],
      ["Qual é a forma て de かいます?", ["かって", "かいて", "かんで", "かちて"], 0, "い muda para って."],
      ["Qual alternativa contém uma forma て correta?", ["よんで", "よみて", "よみって", "よいて"], 0, "よみます forma よんで."]
    ]),
    3: buildQuestions(9, 3, [
      ["Qual é a forma て de かえります?", ["かえって", "かえいて", "かえんで", "かえりて"], 0, "り muda para って."],
      ["Qual é a forma て de はいります?", ["はいって", "はいりて", "はいんで", "はいして"], 0, "り muda para って."],
      ["Qual é a forma て de すわります?", ["すわって", "すわりて", "すわんで", "すわいて"], 0, "り muda para って."],
      ["Qual é a forma て de とります?", ["とって", "とりて", "とんで", "といて"], 0, "り muda para って."],
      ["Qual é a forma て de しにます?", ["しんで", "しって", "しいて", "しにて"], 0, "に muda para んで."],
      ["Qual é a forma て de およぎます?", ["およいで", "およぎて", "およって", "およんで"], 0, "ぎ muda para いで."],
      ["Qual é a forma て de いそぎます?", ["いそいで", "いそぎて", "いそって", "いそんで"], 0, "ぎ muda para いで."],
      ["Qual é a forma て de はたらきます?", ["はたらいて", "はたらきて", "はたらって", "はたらんで"], 0, "き muda para いて."],
      ["Qual é a forma て de かします?", ["かして", "かって", "かんで", "かいて"], 0, "し muda para して."],
      ["Qual alternativa está correta?", ["およいで", "およぎて", "およって", "およいて"], 0, "およぎます forma およいで."]
    ]),
    4: buildQuestions(9, 4, [
      ["Qual é a forma て de します?", ["して", "しって", "しんで", "しいて"], 0, "します é irregular e forma して."],
      ["Qual é a forma て de きます (vir)?", ["きて", "きって", "きんで", "きいて"], 0, "きます, no sentido de vir, forma きて."],
      ["Qual é a forma て de あります?", ["あって", "あいて", "あんで", "ありて"], 0, "あります forma あって."],
      ["Qual é a forma て de います?", ["いて", "いって", "いんで", "いきて"], 0, "います forma いて."],
      ["Qual é a forma て de べんきょうします?", ["べんきょうして", "べんきょうって", "べんきょうんで", "べんきょういて"], 0, "O verbo termina em します, então forma して."],
      ["Qual é a forma て de そうじします?", ["そうじして", "そうじって", "そうじんで", "そうじいて"], 0, "します forma して."],
      ["Qual é a forma て de うんどうします?", ["うんどうして", "うんどうって", "うんどうんで", "うんどういて"], 0, "します forma して."],
      ["Qual alternativa é irregular?", ["して", "たべて", "みて", "ねて"], 0, "して vem do verbo irregular します."],
      ["Qual forma corresponde ao verbo vir?", ["きて", "して", "いって", "よんで"], 0, "きて é a forma て de きます."],
      ["Qual é a forma て de します?", ["して", "すて", "すって", "すんで"], 0, "A forma correta é して."]
    ]),
    5: buildQuestions(9, 5, [
      ["Qual é a forma て de たべます?", ["たべて", "たべって", "たべんで", "たべいて"], 0, "たべます forma たべて."],
      ["Qual é a forma て de のみます?", ["のんで", "のみて", "のって", "のいて"], 0, "のみます forma のんで."],
      ["Qual é a forma て de かきます?", ["かいて", "かきて", "かって", "かんで"], 0, "かきます forma かいて."],
      ["Qual é a forma て de はなします?", ["はなして", "はなって", "はなんで", "はないて"], 0, "はなします forma はなして."],
      ["Qual é a forma て de まちます?", ["まって", "まちて", "まんで", "まいて"], 0, "まちます forma まって."],
      ["Qual é a forma て de あそびます?", ["あそんで", "あそびて", "あそって", "あそいて"], 0, "あそびます forma あそんで."],
      ["Qual é a forma て de およぎます?", ["およいで", "およぎて", "およって", "およんで"], 0, "およぎます forma およいで."],
      ["Qual é a forma て de します?", ["して", "しって", "しんで", "しいて"], 0, "します forma して."],
      ["Qual é a forma て de いきます?", ["いって", "いきて", "いいて", "いんで"], 0, "いきます é uma exceção e forma いって."],
      ["Qual é a forma て de ねます?", ["ねて", "ねって", "ねんで", "ねいて"], 0, "ねます forma ねて."]
    ]),
    6: buildQuestions(9, 6, [
      ["Em ほんを よんで、ねます, qual é a função de よんで?", ["Ligar duas ações", "Indicar idade", "Perguntar preço", "Indicar lugar"], 0, "よんで conecta ler e dormir."],
      ["O que significa たべて、のみます?", ["Como e bebo", "Durmo e acordo", "Leio e escrevo", "Vou e volto"], 0, "A forma て conecta as duas ações."],
      ["Qual frase diz 'Acordo e estudo'?", ["おきて、べんきょうします", "おきます、べんきて", "おきんで、べんきょう", "おきって、べんきょうします"], 0, "おきて liga acordar a estudar."],
      ["Qual frase apresenta duas ações em sequência?", ["あさごはんを たべて、がっこうに いきます", "あさごはんです", "がっこうは どこですか", "ほんは おもしろいです"], 0, "A forma て conecta comer e ir."],
      ["O que significa かいて?", ["Escrevendo / escreva e...", "Comendo", "Dormindo", "Bebendo"], 0, "かいて é a forma て de escrever."],
      ["Qual frase significa 'Ouço música e estudo'?", ["おんがくを きいて、べんきょうします", "おんがくを たべて、べんきょうします", "おんがくに ねて、べんきょうします", "おんがくが いって、べんきょうします"], 0, "きいて liga ouvir música a estudar."],
      ["A forma て sempre indica passado?", ["Sim", "Não", "Somente com pessoas", "Somente com números"], 1, "A forma て não indica passado por si só."],
      ["Qual frase está na ordem 'Ler e depois dormir'?", ["ほんを よんで、ねます", "ねて、ほんを よみます", "ほんを ねて、よみます", "よみます、ほんを ねて"], 0, "よんで conecta as ações na ordem apresentada."],
      ["Qual é o objetivo da forma て nesta frase: みずを のんで、いきます?", ["Conectar ações", "Indicar idade", "Perguntar quem", "Indicar preço"], 0, "のんで conecta beber e ir."],
      ["Qual alternativa contém uma sequência correta?", ["おきて、あさごはんを たべます", "おきますて、たべます", "おきんで、たべます", "おきって、たべます"], 0, "おきて é a forma correta para conectar as ações."]
    ])
  },
  recovery: buildRecovery(9, [
    ["Qual é a forma て de たべます?", ["たべて", "たべって", "たべんで", "たべいて"], 0, "たべます forma たべて."],
    ["Qual é a forma て de のみます?", ["のんで", "のみて", "のって", "のいて"], 0, "のみます forma のんで."],
    ["Qual é a forma て de します?", ["して", "しって", "しんで", "しいて"], 0, "します forma して."],
    ["Qual é a forma て de いきます?", ["いって", "いきて", "いいて", "いんで"], 0, "いきます é uma exceção: いって."],
    ["Para que serve a forma て em たべて、のみます?", ["Conectar ações", "Indicar idade", "Indicar preço", "Perguntar lugar"], 0, "A forma て conecta ações."]
  ])
},

10: {
  days: {
    1: buildQuestions(10, 1, [
      ["Como pedir educadamente para comer?", ["たべてください", "たべますください", "たべないください", "たべましたください"], 0, "Forma て + ください faz um pedido educado."],
      ["O que significa ください?", ["Por favor / faça", "Obrigado", "Desculpe", "Até amanhã"], 0, "ください é usado em pedidos."],
      ["Como pedir para esperar?", ["まってください", "まちますください", "まんでください", "まいてください"], 0, "まちます forma まって; depois acrescentamos ください."],
      ["Como dizer 'Por favor, leia'?", ["よんでください", "よみますください", "よみてください", "よんますください"], 0, "よみます forma よんで."],
      ["Como pedir para ouvir?", ["きいてください", "ききますください", "きってください", "きんでください"], 0, "ききます forma きいて."],
      ["Qual frase significa 'Por favor, escreva'?", ["かいてください", "かきますください", "かんでください", "かってください"], 0, "かきます forma かいて."],
      ["Qual é a estrutura de um pedido simples?", ["Forma て + ください", "Forma ます + ください", "Forma ない + ください", "Substantivo + ください sempre"], 0, "A estrutura ensinada é verbo na forma て + ください."],
      ["Como pedir para esperar um pouco?", ["ちょっと まってください", "ちょっと まちますください", "ちょっと まんでます", "ちょっと まつください"], 0, "ちょっと significa um pouco; まってください é por favor, espere."],
      ["O que significa みてください?", ["Por favor, olhe", "Por favor, coma", "Por favor, durma", "Por favor, beba"], 0, "みて é a forma て de みます."],
      ["Qual pedido está correto?", ["ここに きてください", "ここに きますください", "ここに きいてください", "ここに きんでください"], 0, "きます forma きて; com ください vira um pedido."]
    ]),
    2: buildQuestions(10, 2, [
      ["Como perguntar se pode entrar?", ["はいってもいいですか", "はいりますもいいですか", "はいってくださいですか", "はいりてもいいですか"], 0, "Forma て + もいいですか pergunta se algo é permitido."],
      ["O que significa もいいですか?", ["Posso?", "Por favor, faça", "Não faça", "Já fiz"], 0, "A estrutura てもいいですか pede permissão."],
      ["Como perguntar 'Posso sentar?'", ["すわってもいいですか", "すわりますもいいですか", "すわってくださいですか", "すわりてもいいですか"], 0, "すわります forma すわって."],
      ["Como perguntar 'Posso beber água?'", ["みずを のんでもいいですか", "みずを のみますもいいですか", "みずを のんでくださいですか", "みずを のみていいですか"], 0, "のみます forma のんで; acrescentamos もいいですか."],
      ["Qual estrutura pede permissão?", ["Forma て + もいいですか", "Forma ます + ください", "Forma ない + です", "Substantivo + でした"], 0, "A estrutura é verbo na forma て + もいいですか."],
      ["O que significa ここで たべてもいいですか?", ["Posso comer aqui?", "Por favor, coma aqui", "Não coma aqui", "Comi aqui"], 0, "A frase pergunta se é permitido comer aqui."],
      ["Como perguntar se pode tirar uma foto?", ["しゃしんを とってもいいですか", "しゃしんを とりますもいいですか", "しゃしんを とってくださいですか", "しゃしんを とりてもいいですか"], 0, "とります forma とって."],
      ["Qual resposta afirma que algo é permitido?", ["はい、いいですよ", "いいえ、だめです", "わかりません", "さようなら"], 0, "はい、いいですよ significa sim, tudo bem."],
      ["O que significa だめです?", ["Não pode / não é permitido", "Pode sim", "Muito bom", "Obrigado"], 0, "だめです indica que algo não é permitido."],
      ["Como perguntar 'Posso ler este livro?'", ["この ほんを よんでもいいですか", "この ほんを よみますもいいですか", "この ほんを よんでくださいですか", "この ほんを よみていいですか"], 0, "よみます forma よんで."]
    ]),
    3: buildQuestions(10, 3, [
      ["Como dizer 'Estou comendo'?", ["たべています", "たべてください", "たべてもいいです", "たべました"], 0, "Forma て + います indica uma ação em andamento."],
      ["O que significa のんでいます?", ["Estou bebendo", "Por favor, beba", "Posso beber?", "Bebi ontem"], 0, "のんでいます indica que a pessoa está bebendo."],
      ["Como dizer 'Estou estudando'?", ["べんきょうしています", "べんきょうしてください", "べんきょうしてもいいですか", "べんきょうしました"], 0, "します forma して; しています indica ação em andamento."],
      ["Qual estrutura indica ação em andamento?", ["Forma て + います", "Forma て + ください", "Forma て + もいいですか", "Forma ます + でした"], 0, "て + います indica uma ação em andamento."],
      ["O que significa ねています?", ["Estou dormindo", "Por favor, durma", "Posso dormir?", "Dormi ontem"], 0, "ねています significa estar dormindo."],
      ["Como dizer 'Estou lendo um livro'?", ["ほんを よんでいます", "ほんを よんでください", "ほんを よんでもいいですか", "ほんを よみました"], 0, "よんでいます indica que a leitura está acontecendo."],
      ["Como dizer 'Estou ouvindo música'?", ["おんがくを きいています", "おんがくを きいてください", "おんがくを きいてもいいですか", "おんがくを ききました"], 0, "きいています indica ação em andamento."],
      ["O que significa あそんでいます?", ["Estou brincando", "Por favor, brinque", "Posso brincar?", "Brinquei ontem"], 0, "あそんでいます indica que a pessoa está brincando."],
      ["Qual frase significa 'Ele está escrevendo'?", ["かいています", "かいてください", "かいてもいいですか", "かきました"], 0, "かいています indica a ação de escrever em andamento."],
      ["Qual é a forma correta de dizer 'Estou vendo'?", ["みています", "みてください", "みてもいいですか", "みました"], 0, "みています indica estar vendo ou assistindo."]
    ]),
    4: buildQuestions(10, 4, [
      ["Como pedir para alguém não comer?", ["たべないでください", "たべてください", "たべています", "たべてもいいですか"], 0, "ないでください é usado para pedir que alguém não faça algo."],
      ["O que significa ないでください?", ["Por favor, não faça", "Por favor, faça", "Posso fazer?", "Estou fazendo"], 0, "A estrutura expressa um pedido negativo."],
      ["Como pedir para não entrar?", ["はいらないでください", "はいってください", "はいっています", "はいってもいいですか"], 0, "はいります tem a forma negativa はいらない."],
      ["Como dizer 'Por favor, não fale'?", ["はなさないでください", "はなしてください", "はなしています", "はなしてもいいですか"], 0, "はなします passa para はなさない na forma negativa."],
      ["Qual frase significa 'Não tire fotos, por favor'?", ["しゃしんを とらないでください", "しゃしんを とってください", "しゃしんを とっています", "しゃしんを とってもいいですか"], 0, "とります tem a forma negativa とらない."],
      ["Qual estrutura expressa um pedido para não fazer algo?", ["Forma ない + でください", "Forma て + います", "Forma て + もいいですか", "Forma ます + ください"], 0, "A estrutura é verbo na forma ない + でください."],
      ["O que significa ここで たばこを すわないでください?", ["Por favor, não fume aqui", "Por favor, fume aqui", "Posso fumar aqui?", "Estou fumando aqui"], 0, "すわないでください é um pedido para não fumar."],
      ["Como pedir para não dormir?", ["ねないでください", "ねてください", "ねています", "ねてもいいですか"], 0, "ねます tem a forma negativa ねない."],
      ["Qual frase pede para não abrir a porta?", ["ドアを あけないでください", "ドアを あけてください", "ドアを あけています", "ドアを あけてもいいですか"], 0, "あけます passa para あけない."],
      ["Qual alternativa é um pedido negativo?", ["ここに こないでください", "ここに きてください", "ここに きています", "ここに きてもいいですか"], 0, "こないでください significa por favor, não venha."]
    ]),
    5: buildQuestions(10, 5, [
      ["Como dizer 'Estou indo para a escola'?", ["がっこうに いっています", "がっこうに いってください", "がっこうに いってもいいですか", "がっこうに いきないでください"], 0, "いっています indica uma ação em andamento ou estado resultante, conforme o contexto."],
      ["Como pedir para um amigo vir?", ["きてください", "きています", "きてもいいですか", "こないでください"], 0, "きてください significa por favor, venha."],
      ["Como perguntar se pode usar um livro?", ["ほんを つかってもいいですか", "ほんを つかっています", "ほんを つかってください", "ほんを つかわないでください"], 0, "つかってもいいですか pede permissão."],
      ["Como dizer 'Estou fazendo a lição'?", ["しゅくだいを しています", "しゅくだいを してください", "しゅくだいを してもいいですか", "しゅくだいを しないでください"], 0, "しています indica uma atividade em andamento."],
      ["Como pedir para alguém esperar?", ["まってください", "まっています", "まってもいいですか", "またないでください"], 0, "まってください é um pedido educado."],
      ["Qual frase pergunta 'Posso entrar?'", ["はいってもいいですか", "はいってください", "はいっています", "はいらないでください"], 0, "A estrutura てもいいですか pede permissão."],
      ["Como dizer 'Estou falando com meu amigo'?", ["ともだちと はなしています", "ともだちと はなしてください", "ともだちと はなしてもいいですか", "ともだちと はなさないでください"], 0, "はなしています indica conversa em andamento."],
      ["Como pedir para não tocar?", ["さわらないでください", "さわってください", "さわっています", "さわってもいいですか"], 0, "ないでください pede para não realizar a ação."],
      ["O que significa つかっています?", ["Estou usando", "Por favor, use", "Posso usar?", "Não use"], 0, "つかっています indica uso em andamento."],
      ["Qual estrutura corresponde a um pedido educado?", ["Forma て + ください", "Forma ます + もいいですか", "Forma て + でした", "Forma ない + います"], 0, "てください é a estrutura de pedido."]
    ]),
    6: buildQuestions(10, 6, [
      ["Qual frase significa 'Por favor, coma'?", ["たべてください", "たべています", "たべてもいいですか", "たべないでください"], 0, "てください expressa um pedido."],
      ["Qual frase significa 'Posso beber água?'", ["みずを のんでもいいですか", "みずを のんでいます", "みずを のんでください", "みずを のまないでください"], 0, "てもいいですか pede permissão."],
      ["Qual frase significa 'Estou estudando japonês'?", ["にほんごを べんきょうしています", "にほんごを べんきょうしてください", "にほんごを べんきょうしてもいいですか", "にほんごを べんきょうしないでください"], 0, "ています indica uma ação em andamento."],
      ["Qual frase significa 'Por favor, não entre'?", ["はいらないでください", "はいってください", "はいっています", "はいってもいいですか"], 0, "ないでください expressa um pedido negativo."],
      ["Qual estrutura é usada para pedir permissão?", ["て + もいいですか", "て + ください", "て + います", "ない + でください"], 0, "てもいいですか pergunta se algo é permitido."],
      ["Qual estrutura indica uma ação em andamento?", ["て + います", "て + ください", "て + もいいですか", "ない + でください"], 0, "ています indica uma ação em andamento."],
      ["Qual frase significa 'Por favor, leia este livro'?", ["この ほんを よんでください", "この ほんを よんでいます", "この ほんを よんでもいいですか", "この ほんを よまないでください"], 0, "よんでください é um pedido para ler."],
      ["Qual frase significa 'Estou esperando'?", ["まっています", "まってください", "まってもいいですか", "またないでください"], 0, "まっています indica que a pessoa está esperando."],
      ["Qual frase significa 'Posso sentar aqui?'", ["ここに すわってもいいですか", "ここに すわっています", "ここに すわってください", "ここに すわらないでください"], 0, "すわってもいいですか pede permissão."],
      ["Qual alternativa relaciona corretamente a estrutura e sua função?", ["てください = pedido", "ています = permissão", "てもいいですか = ação em andamento", "ないでください = pedido para fazer"], 0, "てください é usado para pedidos."]
    ])
  },
  recovery: buildRecovery(10, [
    ["Como pedir 'Por favor, espere'?", ["まってください", "まっています", "まってもいいですか", "またないでください"], 0, "まってください é um pedido."],
    ["Como perguntar 'Posso entrar?'", ["はいってもいいですか", "はいっています", "はいってください", "はいらないでください"], 0, "てもいいですか pede permissão."],
    ["O que significa たべています?", ["Estou comendo", "Por favor, coma", "Posso comer?", "Não coma"], 0, "ています indica ação em andamento."],
    ["Como pedir 'Por favor, não fale'?", ["はなさないでください", "はなしてください", "はなしています", "はなしてもいいですか"], 0, "ないでください pede para não fazer algo."],
    ["Qual estrutura indica uma ação em andamento?", ["て + います", "て + ください", "て + もいいですか", "ない + でください"], 0, "て + います indica ação em andamento."]
  ])
},


11: {
  days: {
    1: buildQuestions(11, 1, [
      ["Qual é a forma ない de たべます?", ["たべない", "たべなく", "たべって", "たべません"], 0, "たべる passa para たべない na forma informal negativa."],
      ["O que significa たべない?", ["Não comer", "Comer", "Comendo", "Comi"], 0, "たべない é a forma negativa informal de comer."],
      ["Qual é a forma ない de みます?", ["みない", "みなく", "みって", "みません"], 0, "みる passa para みない."],
      ["Qual é a forma ない de ねます?", ["ねない", "ねなく", "ねって", "ねません"], 0, "ねる passa para ねない."],
      ["Qual é a forma ない de おきます?", ["おきない", "おかない", "おきなく", "おきません"], 0, "おきる passa para おきない."],
      ["O que significa のまない?", ["Não beber", "Beber", "Bebi", "Estou bebendo"], 0, "のまない significa não beber."],
      ["Qual é a forma ない de かきます?", ["かかない", "かきない", "かかなく", "かきません"], 0, "かく muda く para かない."],
      ["Qual é a forma ない de よみます?", ["よまない", "よみない", "よんない", "よみません"], 0, "よむ muda む para まない."],
      ["Qual alternativa está na forma negativa informal?", ["いかない", "いきます", "いって", "いきました"], 0, "いかない significa não ir."],
      ["Qual é a função da forma ない?", ["Expressar negação informal", "Expressar passado", "Perguntar preço", "Indicar comparação"], 0, "A forma ない expressa que uma ação não acontece ou não será realizada."]
    ]),
    2: buildQuestions(11, 2, [
      ["Qual é a forma ない de いきます?", ["いかない", "いきない", "いってない", "いかなく"], 0, "いく muda く para かない."],
      ["Qual é a forma ない de かいます?", ["かわない", "かいない", "かってない", "かなく"], 0, "う muda para わない na forma negativa."],
      ["Qual é a forma ない de はなします?", ["はなさない", "はなしない", "はなしてない", "はなさなく"], 0, "す muda para さない."],
      ["Qual é a forma ない de まちます?", ["またない", "まちない", "まってない", "まなく"], 0, "つ muda para たない."],
      ["Qual é a forma ない de あそびます?", ["あそばない", "あそびない", "あそんない", "あそばなく"], 0, "ぶ muda para ばない."],
      ["Qual é a forma ない de およぎます?", ["およがない", "およぎない", "およいない", "およがなく"], 0, "ぐ muda para がない."],
      ["Qual é a forma ない de とります?", ["とらない", "とりない", "とってない", "とらなく"], 0, "る de um verbo do grupo correspondente muda para らない."],
      ["Qual é a forma ない de しにます?", ["しなない", "しにない", "しんない", "しななく"], 0, "ぬ muda para なない."],
      ["Qual é a forma ない de します?", ["しない", "さない", "すない", "しなく"], 0, "します é irregular e forma しない."],
      ["Qual é a forma ない de きます, no sentido de vir?", ["こない", "きない", "くない", "きなく"], 0, "きます é irregular e forma こない."]
    ]),
    3: buildQuestions(11, 3, [
      ["O que significa わたしは たべない?", ["Eu não como", "Eu como", "Estou comendo", "Comi"], 0, "たべない expressa negação informal."],
      ["Como dizer 'Eu não bebo água'?", ["みずを のまない", "みずを のみない", "みずを のんで", "みずを のみます"], 0, "のみます passa para のまない."],
      ["Qual frase significa 'Eu não vou à escola'?", ["がっこうに いかない", "がっこうに いきます", "がっこうに いって", "がっこうに きます"], 0, "いきます passa para いかない."],
      ["Como dizer 'Eu não leio livros'?", ["ほんを よまない", "ほんを よみない", "ほんを よんで", "ほんを よみます"], 0, "よみます passa para よまない."],
      ["O que significa きょうは べんきょうしない?", ["Hoje não estudo", "Hoje estudo", "Estudei ontem", "Vou estudar amanhã"], 0, "しない é a forma negativa informal de します."],
      ["Qual frase está negativa?", ["ねこは たべない", "ねこは たべる", "ねこは たべて", "ねこは たべた"], 0, "たべない expressa que o gato não come."],
      ["Como dizer 'Meu amigo não vem'?", ["ともだちは こない", "ともだちは きない", "ともだちは きます", "ともだちは きて"], 0, "こない é a forma negativa de vir."],
      ["Qual frase significa 'Eu não durmo'?", ["ねない", "ねる", "ねて", "ねた"], 0, "ねない é a forma negativa de dormir."],
      ["Complete: わたしは にくを ___。 (não como)", ["たべない", "たべる", "たべて", "たべた"], 0, "A forma negativa de comer é たべない."],
      ["Qual frase apresenta uma negação informal?", ["みずを のまない", "みずを のみます", "みずを のんで", "みずを のんだ"], 0, "のまない significa não beber."]
    ]),
    4: buildQuestions(11, 4, [
      ["Qual expressão significa 'Não faça isso'?", ["しないで", "して", "します", "しました"], 0, "しないで é uma forma de pedir para não fazer algo."],
      ["Qual é a estrutura de um pedido negativo educado?", ["Forma ない + でください", "Forma て + います", "Forma た + です", "Forma ます + ください"], 0, "ないでください é usada para pedir educadamente que alguém não faça algo."],
      ["Como dizer 'Por favor, não coma'?", ["たべないでください", "たべてください", "たべています", "たべました"], 0, "たべないでください significa por favor, não coma."],
      ["Como dizer 'Por favor, não venha'?", ["こないでください", "きてください", "きています", "きました"], 0, "こないでください é o pedido negativo de vir."],
      ["Qual frase significa 'Não fale, por favor'?", ["はなさないでください", "はなしてください", "はなしています", "はなしました"], 0, "はなさないでください pede para não falar."],
      ["O que significa ここで あそばないでください?", ["Por favor, não brinque aqui", "Por favor, brinque aqui", "Estou brincando aqui", "Posso brincar aqui?"], 0, "あそばないでください é um pedido negativo."],
      ["Como pedir para alguém não escrever?", ["かかないでください", "かいてください", "かいています", "かきました"], 0, "かかないでください significa por favor, não escreva."],
      ["Qual forma indica proibição ou pedido para não fazer algo?", ["ないでください", "てください", "ています", "てもいいですか"], 0, "ないでください expressa um pedido negativo."],
      ["Como dizer 'Não entre'?", ["はいらないで", "はいって", "はいります", "はいった"], 0, "はいらないで é a forma negativa de entrar."],
      ["Qual frase está correta?", ["ここで たべないでください", "ここで たべてください", "ここで たべています", "ここで たべました"], 0, "A primeira frase pede para não comer aqui."]
    ]),
    5: buildQuestions(11, 5, [
      ["Qual é a forma negativa informal de あります?", ["ない", "あらない", "ありない", "あってない"], 0, "あります é um verbo irregular nesse uso e sua forma negativa é ない."],
      ["Qual é a forma negativa de います?", ["いない", "あない", "いらない", "いません"], 0, "います passa para いない na forma informal."],
      ["O que significa ねこが いない?", ["Não há gato / o gato não está", "O gato está aqui", "O gato comeu", "O gato está dormindo"], 0, "いない indica ausência de um ser animado."],
      ["O que significa ほんが ない?", ["Não há livro", "Há um livro", "O livro é bonito", "O livro está aberto"], 0, "ない indica ausência de algo."],
      ["Como dizer 'Não tenho água'?", ["みずが ない", "みずが ある", "みずを のむ", "みずを のんだ"], 0, "ない indica que algo não existe ou não está disponível."],
      ["Qual frase significa 'Meu amigo não está em casa'?", ["ともだちは いえに いない", "ともだちは いえに いる", "ともだちは いえを たべる", "ともだちは いえに いった"], 0, "いない é a forma negativa de いる."],
      ["Qual é a forma informal negativa de する?", ["しない", "しません", "して", "した"], 0, "しない é a forma negativa informal."],
      ["Como dizer 'Não faço isso'?", ["それを しない", "それを する", "それを して", "それを した"], 0, "しない significa não fazer."],
      ["Qual frase significa 'Não há ninguém'?", ["だれも いない", "だれも いる", "だれが きた", "だれを みる"], 0, "だれも いない significa que não há ninguém."],
      ["Qual par está correto?", ["ある → ない", "ある → あらない", "いる → いらない", "する → すない"], 0, "ある tem a forma negativa ない."]
    ]),
    6: buildQuestions(11, 6, [
      ["Como dizer 'Hoje não vou à escola porque estou ocupado'?", ["きょうは いそがしいから、がっこうに いかない", "きょうは いそがしいから、がっこうに いく", "きょうは いそがしいから、がっこうに いって", "きょうは いそがしいから、がっこうに きた"], 0, "いかない expressa a decisão de não ir."],
      ["Qual frase significa 'Eu não estudo à noite'?", ["よるは べんきょうしない", "よるは べんきょうする", "よるは べんきょうして", "よるは べんきょうした"], 0, "しない é a forma negativa de estudar."],
      ["Como dizer 'Não quero comer agora' usando a negação da ação?", ["いま たべない", "いま たべる", "いま たべて", "いま たべた"], 0, "たべない significa não comer."],
      ["Qual frase significa 'Meu irmão não bebe chá'?", ["おとうとは おちゃを のまない", "おとうとは おちゃを のむ", "おとうとは おちゃを のんで", "おとうとは おちゃを のんだ"], 0, "のみます passa para のまない."],
      ["Como dizer 'Não leia este livro, por favor'?", ["この ほんを よまないでください", "この ほんを よんでください", "この ほんを よんでいます", "この ほんを よみました"], 0, "よまないでください é um pedido negativo."],
      ["Qual frase significa 'Não há água em casa'?", ["いえに みずが ない", "いえに みずが ある", "いえで みずを のむ", "いえに みずを のんだ"], 0, "ない indica que a água não está disponível."],
      ["Qual frase significa 'Meu amigo não está aqui'?", ["ともだちは ここに いない", "ともだちは ここに いる", "ともだちは ここに きた", "ともだちは ここで たべる"], 0, "いない indica ausência de uma pessoa."],
      ["Qual frase expressa uma proibição educada?", ["ここに はいらないでください", "ここに はいってください", "ここに はいっています", "ここに はいってもいいですか"], 0, "ないでください pede que a pessoa não entre."],
      ["Qual é a forma negativa de かきます?", ["かかない", "かきない", "かいてない", "かきません"], 0, "かく passa para かかない."],
      ["Qual alternativa usa corretamente a forma ない?", ["わたしは きょう いかない", "わたしは きょう いきない", "わたしは きょう いってない", "わたしは きょう いかって"], 0, "いかない é a forma negativa correta de いく."]
    ])
  },
  recovery: buildRecovery(11, [
    ["Qual é a forma ない de たべます?", ["たべない", "たべなく", "たべって", "たべません"], 0, "たべる forma たべない."],
    ["Qual é a forma ない de のみます?", ["のまない", "のみない", "のんない", "のなく"], 0, "のみます forma のまない."],
    ["Qual é a forma negativa de します?", ["しない", "さない", "すない", "して"], 0, "します forma しない."],
    ["O que significa こないでください?", ["Por favor, não venha", "Por favor, venha", "Estou vindo", "Posso vir?"], 0, "こないでください é um pedido negativo."],
    ["Qual é a forma negativa de います?", ["いない", "あない", "いらない", "いません"], 0, "います forma いない."]
  ])
},

12: {
  days: {
    1: buildQuestions(12, 1, [
      ["Qual é a forma た de たべます?", ["たべた", "たべって", "たべんだ", "たべました"], 0, "たべる passa para たべた."],
      ["O que significa たべた?", ["Comeu", "Não come", "Está comendo", "Coma"], 0, "たべた é a forma informal de passado de comer."],
      ["Qual é a forma た de みます?", ["みた", "みって", "みんだ", "みました"], 0, "みる passa para みた."],
      ["Qual é a forma た de ねます?", ["ねた", "ねって", "ねんだ", "ねました"], 0, "ねる passa para ねた."],
      ["Qual é a forma た de おきます?", ["おきた", "おいた", "おきんだ", "おきました"], 0, "おきる passa para おきた."],
      ["O que significa のんだ?", ["Bebeu", "Não bebe", "Está bebendo", "Beba"], 0, "のんだ é o passado informal de beber."],
      ["Qual é a forma た de かきます?", ["かいた", "かきた", "かって", "かんだ"], 0, "かく muda く para いた."],
      ["Qual é a forma た de よみます?", ["よんだ", "よみた", "よった", "よいた"], 0, "よむ muda む para んだ."],
      ["Qual é a função da forma た?", ["Expressar passado informal", "Expressar futuro obrigatório", "Perguntar preço", "Indicar localização"], 0, "A forma た é usada para falar informalmente de ações passadas."],
      ["Qual alternativa está no passado informal?", ["いった", "いく", "いかない", "いって"], 0, "いった é o passado informal de ir."]
    ]),
    2: buildQuestions(12, 2, [
      ["Qual é a forma た de いきます?", ["いった", "いいた", "いきた", "いんだ"], 0, "いく é uma exceção: sua forma た é いった."],
      ["Qual é a forma た de かいます?", ["かった", "かいた", "かんだ", "かきた"], 0, "う muda para った."],
      ["Qual é a forma た de まちます?", ["まった", "まちた", "まんだ", "まいた"], 0, "つ muda para った."],
      ["Qual é a forma た de はなします?", ["はなした", "はなった", "はなんだ", "はないた"], 0, "す muda para した."],
      ["Qual é a forma た de あそびます?", ["あそんだ", "あそびた", "あそった", "あそいた"], 0, "ぶ muda para んだ."],
      ["Qual é a forma た de およぎます?", ["およいだ", "およぎた", "およった", "およんだ"], 0, "ぐ muda para いだ."],
      ["Qual é a forma た de とります?", ["とった", "とりた", "とんだ", "といた"], 0, "る muda para った neste verbo."],
      ["Qual é a forma た de しにます?", ["しんだ", "しにた", "しった", "しいた"], 0, "ぬ muda para んだ."],
      ["Qual é a forma た de します?", ["した", "しった", "しんだ", "しいた"], 0, "します é irregular e forma した."],
      ["Qual é a forma た de きます, no sentido de vir?", ["きた", "きった", "こんだ", "いた"], 0, "きます é irregular e forma きた."]
    ]),
    3: buildQuestions(12, 3, [
      ["O que significa きのう たべた?", ["Comi ontem", "Como hoje", "Vou comer amanhã", "Não como"], 0, "きのう significa ontem e たべた indica passado."],
      ["Como dizer 'Eu fui à escola ontem'?", ["きのう がっこうに いった", "きのう がっこうに いく", "きのう がっこうに いかない", "きのう がっこうに いって"], 0, "いった é o passado informal de ir."],
      ["Qual frase significa 'Eu vi um filme'?", ["えいがを みた", "えいがを みる", "えいがを みない", "えいがを みて"], 0, "みた é o passado informal de ver."],
      ["Como dizer 'Eu li um livro'?", ["ほんを よんだ", "ほんを よむ", "ほんを よまない", "ほんを よんで"], 0, "よんだ é o passado informal de ler."],
      ["O que significa きのう ともだちに あった?", ["Encontrei meu amigo ontem", "Vou encontrar meu amigo", "Não encontro meu amigo", "Estou encontrando meu amigo"], 0, "あった é o passado de あう."],
      ["Qual frase está no passado?", ["ごはんを たべた", "ごはんを たべる", "ごはんを たべない", "ごはんを たべて"], 0, "たべた indica que a ação aconteceu."],
      ["Como dizer 'Eu estudei ontem'?", ["きのう べんきょうした", "きのう べんきょうする", "きのう べんきょうしない", "きのう べんきょうして"], 0, "した é o passado informal de します."],
      ["O que significa あした いく?", ["Vou amanhã", "Fui ontem", "Não vou", "Estou indo"], 0, "いく é a forma informal não passada de ir."],
      ["Qual palavra indica ontem?", ["きのう", "きょう", "あした", "まいにち"], 0, "きのう significa ontem."],
      ["Qual frase significa 'Eu dormi cedo'?", ["はやく ねた", "はやく ねる", "はやく ねない", "はやく ねて"], 0, "ねた é o passado informal de dormir."]
    ]),
    4: buildQuestions(12, 4, [
      ["Como dizer 'Eu não comi'?", ["たべなかった", "たべない", "たべた", "たべて"], 0, "たべない passa para たべなかった no passado negativo."],
      ["Qual é o passado negativo de いく?", ["いかなかった", "いかない", "いった", "いって"], 0, "いかない passa para いかなかった."],
      ["Como dizer 'Eu não fui'?", ["いかなかった", "いった", "いかない", "いって"], 0, "いかなかった significa não fui."],
      ["Qual é o passado negativo de みる?", ["みなかった", "みない", "みた", "みて"], 0, "みない passa para みなかった."],
      ["O que significa のまなかった?", ["Não bebi", "Bebi", "Não bebo", "Estou bebendo"], 0, "のまなかった indica que não bebeu."],
      ["Qual é o passado negativo de する?", ["しなかった", "しない", "した", "して"], 0, "しない passa para しなかった."],
      ["Como dizer 'Ontem não estudei'?", ["きのう べんきょうしなかった", "きのう べんきょうした", "きのう べんきょうする", "きのう べんきょうして"], 0, "しなかった é o passado negativo de estudar."],
      ["Qual frase significa 'Não dormi ontem'?", ["きのう ねなかった", "きのう ねた", "きのう ねない", "きのう ねて"], 0, "ねなかった indica que não dormiu."],
      ["Qual alternativa está no passado negativo?", ["よまなかった", "よまない", "よんだ", "よんで"], 0, "よまなかった significa não leu."],
      ["Qual é a diferença entre たべない e たべなかった?", ["Presente/futuro negativo e passado negativo", "Passado e futuro afirmativo", "Duas formas de pedido", "Duas formas de permissão"], 0, "たべない nega no presente/futuro; たべなかった nega no passado."]
    ]),
    5: buildQuestions(12, 5, [
      ["Como dizer 'Já comi sushi' usando experiência?", ["すしを たべたことがある", "すしを たべないことがある", "すしを たべてください", "すしを たべるつもり"], 0, "たことがある expressa que já teve a experiência de fazer algo."],
      ["Qual estrutura expressa experiência passada?", ["Forma た + ことがある", "Forma ない + ください", "Forma ます + もいい", "Forma て + います"], 0, "たことがある é usada para falar de experiências."],
      ["O que significa にほんに いったことがある?", ["Já fui ao Japão", "Vou ao Japão", "Não vou ao Japão", "Estou indo ao Japão"], 0, "いったことがある significa já ter ido."],
      ["Como dizer 'Nunca comi natto'?", ["なっとうを たべたことがない", "なっとうを たべたことがある", "なっとうを たべる", "なっとうを たべている"], 0, "たことがない indica que nunca teve aquela experiência."],
      ["O que significa こと?", ["Coisa / fato / experiência", "Pessoa", "Lugar", "Hora"], 0, "こと transforma a ação em uma experiência ou fato."],
      ["Qual frase pergunta se alguém já viu um filme?", ["えいがを みたことがある?", "えいがを みない?", "えいがを みてください?", "えいがを みるつもり?"], 0, "みたことがある pergunta sobre experiência."],
      ["Como dizer 'Já li esse livro'?", ["この ほんを よんだことがある", "この ほんを よまない", "この ほんを よんでいる", "この ほんを よむつもり"], 0, "よんだことがある expressa experiência de leitura."],
      ["Qual frase significa 'Nunca fui lá'?", ["そこに いったことがない", "そこに いったことがある", "そこに いく", "そこに いっている"], 0, "ことがない nega a experiência."],
      ["O que significa ことがある nesta estrutura?", ["Já ter feito algo alguma vez", "Estar fazendo agora", "Pedir permissão", "Dar uma ordem"], 0, "A estrutura fala de uma experiência que aconteceu em algum momento."],
      ["Qual frase está correta para 'Já bebi chá'?", ["おちゃを のんだことがある", "おちゃを のまないことがある", "おちゃを のんでください", "おちゃを のむつもり"], 0, "のんだことがある expressa experiência de beber chá."]
    ]),
    6: buildQuestions(12, 6, [
      ["Qual frase significa 'Ontem fui à escola e estudei'?", ["きのう がっこうに いって、べんきょうした", "きのう がっこうに いく、べんきょうする", "きのう がっこうに いかない、べんきょうしない", "きのう がっこうに いって、べんきょうする"], 0, "A forma て conecta as ações; した coloca a segunda ação no passado."],
      ["Como dizer 'Comi, bebi chá e dormi'?", ["たべて、おちゃを のんで、ねた", "たべる、おちゃを のむ、ねる", "たべない、おちゃを のまない、ねない", "たべて、おちゃを のんで、ねる"], 0, "As formas て conectam as ações e ねた indica passado."],
      ["Qual frase conta uma experiência?", ["にほんに いったことがある", "にほんに いく", "にほんに いかない", "にほんに いってください"], 0, "たことがある apresenta uma experiência."],
      ["O que significa きのう ともだちと あそんだ?", ["Brinquei com meu amigo ontem", "Vou brincar com meu amigo", "Não brinco com meu amigo", "Estou brincando com meu amigo"], 0, "あそんだ é o passado informal de brincar."],
      ["Qual frase significa 'Nunca vi neve'?", ["ゆきを みたことがない", "ゆきを みたことがある", "ゆきを みる", "ゆきを みている"], 0, "たことがない expressa ausência de experiência."],
      ["Como dizer 'No domingo, assisti a um filme'?", ["にちようびに えいがを みた", "にちようびに えいがを みる", "にちようびに えいがを みない", "にちようびに えいがを みて"], 0, "みた é o passado informal de assistir/ver."],
      ["Qual frase significa 'Não comi ontem'?", ["きのう たべなかった", "きのう たべた", "きのう たべない", "きのう たべて"], 0, "たべなかった é o passado negativo."],
      ["Qual frase apresenta uma pequena narrativa?", ["あさ おきて、ごはんを たべて、がっこうに いった", "あさ おきる、ごはんを たべる、がっこうに いく", "あさ おきない、ごはんを たべない", "あさ おきてください"], 0, "A frase conta uma sequência de ações passadas."],
      ["Qual frase significa 'Já comi ramen'?", ["ラーメンを たべたことがある", "ラーメンを たべない", "ラーメンを たべてください", "ラーメンを たべるつもり"], 0, "たべたことがある expressa experiência."],
      ["Qual alternativa combina passado negativo e experiência corretamente?", ["いったことがない", "いくことがない", "いってことがある", "いかないことがある"], 0, "いったことがない significa nunca ter ido."]
    ])
  },
  recovery: buildRecovery(12, [
    ["Qual é a forma た de たべます?", ["たべた", "たべて", "たべない", "たべます"], 0, "たべた é o passado informal."],
    ["Qual é a forma た de いきます?", ["いった", "いきた", "いって", "いかない"], 0, "いく é uma exceção e forma いった."],
    ["O que significa たべなかった?", ["Não comi", "Comi", "Não como", "Estou comendo"], 0, "たべなかった é o passado negativo."],
    ["Qual estrutura indica uma experiência?", ["たことがある", "てください", "ないでください", "てもいいですか"], 0, "たことがある fala de experiências."],
    ["Como dizer 'Nunca fui ao Japão'?", ["にほんに いったことがない", "にほんに いったことがある", "にほんに いく", "にほんに いって"], 0, "いったことがない indica que nunca foi."]
  ])
},


13: {
  days: {
    1: buildQuestions(13, 1, [
      ["O que significa o padrão たい?", ["Querer fazer algo", "Não poder fazer", "Já ter feito", "Ser obrigado"], 0, "たい expressa o desejo de realizar uma ação."],
      ["Como dizer 'quero comer'?", ["たべたい", "たべない", "たべた", "たべて"], 0, "たべる transforma-se em たべたい para expressar vontade de comer."],
      ["Como dizer 'quero beber água'?", ["みずを のみたい", "みずを のまない", "みずを のんだ", "みずを のんで"], 0, "のみたい significa quero beber."],
      ["O que significa べんきょうしたい?", ["Quero estudar", "Estudei", "Não estudo", "Vou dormir"], 0, "べんきょうする transforma-se em べんきょうしたい."],
      ["Qual é a forma correta de 'quero ir'?", ["いきたい", "いくたい", "いったい", "いかたい"], 0, "いく é irregular nessa transformação: いきたい."],
      ["Como dizer 'quero assistir'?", ["みたい", "みるたい", "みたたい", "みないたい"], 0, "みる transforma-se em みたい."],
      ["O que significa にほんに いきたい?", ["Quero ir ao Japão", "Fui ao Japão", "Não vou ao Japão", "Estou no Japão"], 0, "にほんに indica destino e いきたい expressa desejo."],
      ["Qual frase significa 'quero aprender japonês'?", ["にほんごを ならいたい", "にほんごを ならった", "にほんごを ならわない", "にほんごを ならって"], 0, "ならいたい significa quero aprender."],
      ["Qual é a função de たい em かいたい?", ["Expressar vontade de comprar", "Expressar passado", "Expressar proibição", "Expressar comparação"], 0, "かいたい significa quero comprar."],
      ["Complete: わたしは ほんを ____。 (Quero ler um livro)", ["よみたいです", "よみました", "よみません", "よんで"], 0, "よみたいです é a forma educada de dizer que quer ler."]
    ]),
    2: buildQuestions(13, 2, [
      ["O que significa ほしい?", ["Querer possuir algo", "Querer fazer uma ação", "Não gostar", "Ter feito algo"], 0, "ほしい expressa desejo de ter ou possuir alguma coisa."],
      ["Como dizer 'quero um livro'?", ["ほんが ほしいです", "ほんを たべたいです", "ほんが ありました", "ほんを よみました"], 0, "ほんが ほしいです significa quero um livro."],
      ["Qual partícula aparece normalmente com ほしい?", ["が", "へ", "で", "から"], 0, "O objeto desejado normalmente recebe が."],
      ["O que significa あたらしい くつが ほしい?", ["Quero sapatos novos", "Comprei sapatos novos", "Não gosto de sapatos", "Quero caminhar"], 0, "あたらしい significa novo e くつ significa sapatos."],
      ["Como dizer 'quero água'?", ["みずが ほしいです", "みずを ほしいです", "みずに ほしいです", "みずで ほしいです"], 0, "A construção mais comum é みずが ほしいです."],
      ["Qual frase significa 'quero um gato'?", ["ねこが ほしいです", "ねこを ねたいです", "ねこに ほしいです", "ねこが たべたいです"], 0, "ねこが ほしいです expressa o desejo de ter um gato."],
      ["Qual é a diferença entre たべたい e たべものが ほしい?", ["Quero comer / quero comida", "Comi / quero dormir", "Não como / não quero", "Gosto / não gosto"], 0, "たい expressa desejo de fazer uma ação; ほしい expressa desejo de possuir algo."],
      ["Complete: わたしは あたらしい ほんが ____。", ["ほしいです", "のみたいです", "いきたいです", "たべました"], 0, "ほしいです completa a expressão de querer um livro."],
      ["O que significa じかんが ほしいです?", ["Quero tempo", "Quero estudar", "Estou atrasado", "Não tenho relógio"], 0, "じかん significa tempo."],
      ["Qual expressão está correta para 'quero um cachorro'?", ["いぬが ほしいです", "いぬを ほしいです", "いぬに ほしいです", "いぬで ほしいです"], 0, "いぬが ほしいです é a construção adequada."]
    ]),
    3: buildQuestions(13, 3, [
      ["O que significa つもり?", ["Intenção ou plano", "Passado", "Comparação", "Pedido"], 0, "つもり expressa uma intenção ou plano."],
      ["O que significa いく つもりです?", ["Pretendo ir", "Fui", "Quero possuir", "Não posso ir"], 0, "Verbo na forma simples + つもりです indica intenção."],
      ["Como dizer 'pretendo estudar'?", ["べんきょうする つもりです", "べんきょうした つもりです", "べんきょうたいです", "べんきょうが ほしいです"], 0, "べんきょうする つもりです expressa um plano de estudar."],
      ["Qual frase significa 'pretendo comprar um livro'?", ["ほんを かう つもりです", "ほんを かったです", "ほんが ほしいです", "ほんを かいたいでした"], 0, "かう つもりです significa pretendo comprar."],
      ["Qual forma verbal aparece antes de つもりです?", ["Forma simples do verbo", "Forma て", "Forma ます obrigatoriamente", "Forma た obrigatoriamente"], 0, "A construção usa a forma simples, como いく つもりです."],
      ["O que significa あした いく つもりです?", ["Pretendo ir amanhã", "Fui ontem", "Quero um amanhã", "Não vou nunca"], 0, "あした significa amanhã."],
      ["Como expressar 'pretendo aprender japonês'?", ["にほんごを ならう つもりです", "にほんごを ならいた つもりです", "にほんごが ほしいです", "にほんごを ならってです"], 0, "ならう つもりです expressa a intenção de aprender."],
      ["Qual frase expressa um plano futuro?", ["らいしゅう べんきょうする つもりです", "きのう べんきょうしました", "いま べんきょうしています", "ほんが ほしいです"], 0, "らいしゅう significa semana que vem e つもり expressa intenção."],
      ["O que significa きょうは でかけない つもりです?", ["Pretendo não sair hoje", "Saí hoje", "Quero sair hoje", "Estou saindo agora"], 0, "A forma negativa antes de つもり expressa a intenção de não fazer algo."],
      ["Complete: わたしは あした ほんを よむ ____。", ["つもりです", "ほしいです", "よりです", "でしたです"], 0, "よむ つもりです significa pretendo ler."]
    ]),
    4: buildQuestions(13, 4, [
      ["Como dizer 'amanhã'?", ["あした", "きのう", "きょう", "まいにち"], 0, "あした significa amanhã."],
      ["Como dizer 'semana que vem'?", ["らいしゅう", "せんしゅう", "こんしゅう", "まいしゅう"], 0, "らいしゅう significa semana que vem."],
      ["O que significa らいねん?", ["Ano que vem", "Ano passado", "Este ano", "Todo dia"], 0, "らいねん significa ano que vem."],
      ["Qual frase significa 'vou estudar amanhã'?", ["あした べんきょうする つもりです", "きのう べんきょうしました", "あした ほんが ほしいです", "まいにち ねました"], 0, "A primeira frase apresenta uma intenção para amanhã."],
      ["Qual expressão significa 'no próximo mês'?", ["らいげつ", "せんげつ", "こんげつ", "まいげつ"], 0, "らいげつ significa mês que vem."],
      ["O que significa しゅうまつ?", ["Fim de semana", "Manhã", "Mês passado", "Ano novo"], 0, "しゅうまつ é fim de semana."],
      ["Complete: しゅうまつに ともだちに ____。 (Pretendo encontrar um amigo)", ["あう つもりです", "あった ほしいです", "あい たいです", "あって でした"], 0, "あう つもりです expressa a intenção de encontrar alguém."],
      ["Qual expressão significa 'quero viajar'?", ["りょこうしたいです", "りょこうしました", "りょこうしません", "りょこうして"], 0, "したい expressa desejo de realizar a ação."],
      ["Qual frase significa 'pretendo jogar futebol no sábado'?", ["どようびに サッカーを する つもりです", "どようびに サッカーを したいでした", "どようびに サッカーが ほしいです", "どようびに サッカーを しましたか"], 0, "する つもりです indica um plano."],
      ["Qual palavra significa 'plano' ou 'intenção' nesta construção?", ["つもり", "ほしい", "より", "いちばん"], 0, "つもり é usado para expressar intenção."]
    ]),
    5: buildQuestions(13, 5, [
      ["Como dizer 'vamos juntos?' de forma simples?", ["いっしょに いきませんか", "いっしょに いきました", "いっしょに ほしいです", "いっしょに いくでした"], 0, "いきませんか pode funcionar como convite: que tal irmos?" ],
      ["O que significa いっしょに?", ["Juntos", "Sozinho", "Ontem", "Amanhã"], 0, "いっしょに significa juntos."],
      ["Qual frase é um convite para comer?", ["いっしょに たべませんか", "いっしょに たべました", "たべたい ほしいです", "たべる つもりでした"], 0, "たべませんか é uma maneira educada de convidar alguém para comer."],
      ["Como responder positivamente a um convite?", ["はい、いきましょう", "いいえ、いきました", "ほんが ほしいです", "きのう いきます"], 0, "いきましょう significa vamos."],
      ["O que significa えいがを みませんか?", ["Que tal assistir a um filme?", "Assisti a um filme", "Não gosto de filmes", "Quero um filme"], 0, "みませんか pode ser usado para fazer um convite."],
      ["Qual expressão significa 'vamos estudar juntos'?", ["いっしょに べんきょうしましょう", "いっしょに べんきょうしました", "いっしょに べんきょうが ほしい", "いっしょに べんきょうたい"], 0, "しましょう é uma forma de sugerir fazer algo juntos."],
      ["Qual resposta significa 'desculpe, não posso'?", ["すみません、できません", "はい、できます", "いきましょう", "ほしいです"], 0, "できません significa não posso ou não consigo."],
      ["O que significa あした あそびませんか?", ["Que tal brincar ou sair amanhã?", "Brinquei ontem", "Não quero amigos", "Estou brincando agora"], 0, "あした indica amanhã e あそびませんか faz um convite."],
      ["Qual frase sugere fazer algo juntos?", ["いっしょに いきましょう", "ひとりで いきました", "いきたい ほしいです", "いった つもりです"], 0, "いきましょう é uma sugestão para irem juntos."],
      ["Qual expressão é mais adequada para convidar educadamente?", ["いっしょに おちゃを のみませんか", "おちゃを のみました", "おちゃが ほしいでした", "おちゃを のむ つもりでした"], 0, "A construção ませんか pode ser usada para convidar alguém."]
    ]),
    6: buildQuestions(13, 6, [
      ["Qual frase significa 'quero aprender japonês'?", ["にほんごを ならいたいです", "にほんごを ならう つもりでした", "にほんごが ほしいです", "にほんごを ならいました"], 0, "ならいたいです expressa desejo de aprender."],
      ["Qual frase significa 'pretendo ir à escola amanhã'?", ["あした がっこうに いく つもりです", "きのう がっこうに いきました", "あした がっこうが ほしいです", "がっこうに いきたいでした"], 0, "いく つもりです expressa intenção."],
      ["Qual frase significa 'quero um cachorro'?", ["いぬが ほしいです", "いぬを いきたいです", "いぬが いきます", "いぬを ほしいでした"], 0, "ほしい é usado para desejar possuir algo."],
      ["Qual frase é um convite?", ["いっしょに べんきょうしませんか", "べんきょうしました", "べんきょうしたいです", "べんきょうする つもりです"], 0, "しませんか pode convidar alguém para estudar junto."],
      ["O que significa らいしゅう りょこうしたいです?", ["Quero viajar semana que vem", "Viajei semana passada", "Não quero viajar", "Quero uma semana"], 0, "らいしゅう significa semana que vem e したい expressa desejo."],
      ["Qual frase expressa intenção de não comer?", ["たべない つもりです", "たべたいです", "たべました", "たべてください"], 0, "たべない つもりです significa pretendo não comer."],
      ["Complete: わたしは あたらしい くつが ____。", ["ほしいです", "いきたいです", "のみたいです", "しました"], 0, "ほしい expressa o desejo de possuir sapatos."],
      ["Qual frase significa 'vamos assistir juntos?'?", ["いっしょに みませんか", "いっしょに みました", "いっしょに みたいでした", "いっしょに みる ほしい"], 0, "みませんか é uma forma de convite."],
      ["Qual alternativa apresenta um plano?", ["あした ほんを よむ つもりです", "ほんが ほしいです", "ほんを よみました", "ほんを よんでください"], 0, "つもりです expressa intenção."],
      ["Qual associação está correta?", ["たい = querer fazer; ほしい = querer algo; つもり = intenção", "たい = passado; ほしい = convite; つもり = comparação", "たい = posse; ほしい = passado; つもり = negação", "たい = pergunta; ほしい = ordem; つもり = saudação"], 0, "Essas três construções expressam desejo de ação, desejo de possuir e intenção."]
    ])
  },
  recovery: buildRecovery(13, [
    ["Como dizer 'quero comer'?", ["たべたい", "たべた", "たべない", "たべて"], 0, "たい expressa vontade de realizar uma ação."],
    ["Como dizer 'quero um livro'?", ["ほんが ほしいです", "ほんを たべたいです", "ほんを よみました", "ほんに いきます"], 0, "ほしい expressa desejo de possuir algo."],
    ["O que significa いく つもりです?", ["Pretendo ir", "Fui", "Quero um lugar", "Não posso ir"], 0, "つもり expressa intenção."],
    ["Qual frase é um convite?", ["いっしょに いきませんか", "いきました", "いきたいです", "いく つもりです"], 0, "ませんか pode ser usado para convidar."],
    ["Qual associação está correta?", ["たい = desejo de ação; ほしい = desejo de algo; つもり = plano", "たい = passado; ほしい = negação; つもり = pergunta", "たい = posse; ほしい = convite; つもり = comparação", "たい = ordem; ほしい = passado; つもり = saudação"], 0, "Cada expressão tem uma função diferente."]
  ])
},

14: {
  days: {
    1: buildQuestions(14, 1, [
      ["O que significa より?", ["Do que / em comparação com", "Muito", "Nunca", "Porque"], 0, "より marca o elemento usado como referência de comparação."],
      ["O que significa ねこは いぬより ちいさいです?", ["O gato é menor que o cachorro", "O gato é maior que o cachorro", "O gato é um cachorro", "O cachorro é pequeno"], 0, "いぬより estabelece o cachorro como referência da comparação."],
      ["Qual palavra significa 'grande'?", ["おおきい", "ちいさい", "あたらしい", "たかい"], 0, "おおきい significa grande."],
      ["Qual palavra significa 'pequeno'?", ["ちいさい", "おおきい", "おいしい", "はやい"], 0, "ちいさい significa pequeno."],
      ["Como dizer 'A é mais rápido que B'?", ["Aは Bより はやいです", "Aは Bより おそいです", "Aは Bが ほしいです", "Aは Bを たべます"], 0, "より introduz aquilo que serve de comparação."],
      ["Qual frase significa 'este livro é mais interessante que aquele'?", ["この ほんは あの ほんより おもしろいです", "この ほんは あの ほんを よみました", "この ほんが あの ほんです", "この ほんは あの ほんに いきます"], 0, "おもしろい significa interessante."],
      ["Qual é a função de より em uma comparação?", ["Indicar o ponto de referência", "Indicar o passado", "Indicar posse", "Indicar um convite"], 0, "より apresenta o elemento com o qual algo está sendo comparado."],
      ["O que significa はやい?", ["Rápido ou cedo", "Lento", "Grande", "Delicioso"], 0, "はやい pode significar rápido ou cedo, dependendo do contexto."],
      ["Complete: でんしゃは バスより ____。 (O trem é mais rápido que o ônibus)", ["はやいです", "おそいです", "ちいさいです", "まずいです"], 0, "はやい significa rápido."],
      ["Qual frase compara corretamente duas coisas?", ["Aは Bより おおきいです", "Aは Bを おおきいです", "Aは Bに おおきいです", "Aは Bで おおきいです"], 0, "A construção Aは Bより + adjetivo compara A com B."]
    ]),
    2: buildQuestions(14, 2, [
      ["O que significa ほうが em uma comparação?", ["É mais ... / é a opção ...", "Ontem", "Porque", "Quero possuir"], 0, "ほうが destaca um dos elementos da comparação."],
      ["O que significa ねこより いぬの ほうが おおきいです?", ["O cachorro é maior que o gato", "O gato é maior que o cachorro", "Os dois são gatos", "O cachorro é pequeno"], 0, "いぬのほうが destaca o cachorro como maior."],
      ["Qual construção significa 'A é melhor que B'?", ["Aの ほうが Bより いいです", "Aが Bを いいです", "Aに Bより いいです", "Aの ほうが Bを いいです"], 0, "Aのほうが Bより いいです indica que A é melhor que B."],
      ["O que significa どちらの ほうが?", ["Qual dos dois é mais...?", "Onde fica?", "Quem chegou?", "Quanto custa?"], 0, "どちら é usado para perguntar qual entre duas opções."],
      ["Como perguntar 'qual é mais gostoso?' entre duas comidas?", ["どちらの ほうが おいしいですか", "だれが おいしいですか", "いつ おいしいですか", "どこが おいしいですか"], 0, "どちら pergunta qual das duas opções."],
      ["Qual frase significa 'prefiro chá a café'?", ["コーヒーより おちゃの ほうが すきです", "コーヒーが おちゃを すきです", "おちゃより コーヒーを すきでした", "コーヒーに おちゃが あります"], 0, "A construção destaca o chá como preferência em relação ao café."],
      ["Qual é a função de の em Aのほうが?", ["Ligar o elemento destacado à expressão ほう", "Indicar passado", "Indicar direção", "Indicar negação"], 0, "の conecta o elemento comparado à expressão ほう."],
      ["Complete: バスより でんしゃの ____ はやいです。", ["ほうが", "つもり", "ほしい", "たい"], 0, "でんしゃのほうが destaca o trem na comparação."],
      ["Qual pergunta compara duas opções?", ["どちらの ほうが すきですか", "なにを しましたか", "どこに いきますか", "いつ ねますか"], 0, "どちらのほうが pergunta qual opção é preferida ou tem determinada característica."],
      ["O que significa Aより Bのほうが たかいです?", ["B é mais caro ou alto que A", "A é mais caro que B", "A e B são iguais", "B é barato"], 0, "たかい pode significar caro ou alto, conforme o contexto."]
    ]),
    3: buildQuestions(14, 3, [
      ["O que significa いちばん?", ["O mais / o número um", "Um pouco", "Nunca", "Ontem"], 0, "いちばん indica o grau máximo dentro de um grupo."],
      ["Como dizer 'o mais gostoso'?", ["いちばん おいしい", "より おいしい", "ほしい おいしい", "つもり おいしい"], 0, "いちばん intensifica o adjetivo indicando o mais gostoso."],
      ["O que significa この なかで?", ["Entre estes / dentro deste grupo", "Amanhã", "Na escola", "Depois de comer"], 0, "このなかで introduz um grupo de comparação."],
      ["Qual frase significa 'qual é o mais interessante?'?", ["どれが いちばん おもしろいですか", "だれが おもしろいですか", "いつが おもしろいですか", "どこが おもしろいですか"], 0, "どれ pergunta qual item e いちばん indica o mais."],
      ["Como dizer 'o Japão é o mais interessante'?", ["にほんが いちばん おもしろいです", "にほんより おもしろいです", "にほんの ほしいです", "にほんを いちばんです"], 0, "いちばん indica o grau máximo."],
      ["Qual palavra significa 'melhor'?", ["いちばん いい", "いちばん まずい", "いちばん ちいさい", "いちばん おそい"], 0, "いい significa bom; com いちばん, o melhor."],
      ["Qual pergunta significa 'qual é o maior?'?", ["どれが いちばん おおきいですか", "どこが おおきいですか", "だれが おおきいですか", "いつが おおきいですか"], 0, "どれ pergunta qual item e おおきい significa grande."],
      ["Complete: この みせの ケーキが ____ おいしいです。", ["いちばん", "つもり", "ほしい", "きのう"], 0, "いちばん indica que o bolo é o mais gostoso."],
      ["O que significa いちばん すきです?", ["Gosto mais / é meu favorito", "Não gosto", "Gostei ontem", "Quero comprar"], 0, "いちばん すき expressa a maior preferência."],
      ["Qual construção é adequada para comparar três ou mais opções?", ["この なかで どれが いちばん いいですか", "Aより Bですか", "Aを Bに しますか", "どこに いきますか"], 0, "このなかで + いちばん permite escolher o destaque dentro de um grupo."]
    ]),
    4: buildQuestions(14, 4, [
      ["O que significa すき?", ["Gostar", "Comer", "Dormir", "Comprar"], 0, "すき expressa gostar ou ter preferência."],
      ["O que significa きらい?", ["Não gostar", "Gostar muito", "Querer", "Ser rápido"], 0, "きらい expressa não gostar."],
      ["Como dizer 'gosto de gatos'?", ["ねこが すきです", "ねこを すきです", "ねこに すきです", "ねこで すきです"], 0, "O objeto de preferência normalmente recebe が com すき."],
      ["Como dizer 'não gosto de peixe'?", ["さかなが きらいです", "さかなを きらいです", "さかなに きらいです", "さかなで きらいです"], 0, "さかなが きらいです significa não gosto de peixe."],
      ["O que significa どんな?", ["Que tipo de...?", "Quanto?", "Quando?", "Quem?"], 0, "どんな pergunta sobre o tipo ou característica de algo."],
      ["Como perguntar 'que tipo de música você gosta?'?", ["どんな おんがくが すきですか", "どこに おんがくですか", "いつ おんがくを すきですか", "だれが おんがくですか"], 0, "どんな pergunta o tipo de música."],
      ["Qual frase significa 'gosto mais de futebol que de tênis'?", ["テニスより サッカーの ほうが すきです", "サッカーより テニスが すきです", "サッカーを テニスに すきです", "テニスが サッカーを すきです"], 0, "A frase destaca futebol como preferência em relação ao tênis."],
      ["O que significa あまり すきではありません?", ["Não gosto muito", "Gosto muito", "Gosto mais", "Quero comprar"], 0, "あまり com uma expressão negativa significa não muito."],
      ["Qual palavra significa 'muito'?", ["とても", "きのう", "あした", "どこ"], 0, "とても intensifica uma característica ou preferência."],
      ["Complete: わたしは にほんごが ____。", ["とても すきです", "より つもりです", "いちばん ほしいです", "きのう たいです"], 0, "とても すきです significa gosto muito."]
    ]),
    5: buildQuestions(14, 5, [
      ["Qual frase compara corretamente dois animais?", ["ねこは いぬより ちいさいです", "ねこは いぬを ちいさいです", "ねこは いぬに ちいさいです", "ねこは いぬで ちいさいです"], 0, "より introduz o animal usado como referência."],
      ["Como dizer 'entre os esportes, futebol é o mais divertido'?", ["スポーツの なかで サッカーが いちばん たのしいです", "サッカーより スポーツを たのしいです", "スポーツが サッカーに たのしいです", "サッカーの ほしいです"], 0, "のなかで apresenta o grupo e いちばん destaca o favorito."],
      ["Qual pergunta significa 'qual é mais barato?'?", ["どちらの ほうが やすいですか", "どこが やすいですか", "だれが やすいですか", "いつが やすいですか"], 0, "どちら compara duas opções e やすい significa barato."],
      ["O que significa やすい?", ["Barato", "Caro", "Grande", "Difícil"], 0, "やすい significa barato."],
      ["Qual frase significa 'este é o melhor'?", ["これが いちばん いいです", "これより いいですか", "これを いいです", "これが ほしいでした"], 0, "いちばん いい significa o melhor."],
      ["Como dizer 'prefiro maçãs a bananas'?", ["バナナより りんごの ほうが すきです", "りんごより バナナの ほうが すきです", "りんごを バナナが すきです", "バナナに りんごを すきです"], 0, "A primeira frase destaca maçãs como preferência."],
      ["Qual palavra significa 'divertido'?", ["たのしい", "むずかしい", "おそい", "まずい"], 0, "たのしい significa divertido."],
      ["Qual palavra significa 'difícil'?", ["むずかしい", "たのしい", "やすい", "はやい"], 0, "むずかしい significa difícil."],
      ["Complete: この ほんは あの ほんより ____。 (mais fácil)", ["やさしいです", "むずかしいです", "たかいです", "おそいです"], 0, "やさしい significa fácil ou gentil, conforme o contexto."],
      ["Qual frase apresenta uma preferência pessoal?", ["わたしは おちゃの ほうが すきです", "おちゃを のみました", "おちゃに いきます", "おちゃが ありました"], 0, "すきです expressa preferência."]
    ]),
    6: buildQuestions(14, 6, [
      ["Qual construção compara A e B?", ["Aは Bより ...", "Aは Bに ...", "Aは Bを ...", "Aは Bで ..."], 0, "より introduz o ponto de referência."],
      ["Qual construção destaca uma opção?", ["Aの ほうが ...", "Aの つもり ...", "Aの ほしい ...", "Aの たい ..."], 0, "ほうが destaca um dos elementos comparados."],
      ["Qual palavra indica 'o mais'?", ["いちばん", "きのう", "ほしい", "つもり"], 0, "いちばん expressa o grau máximo."],
      ["O que significa どちらの ほうが いいですか?", ["Qual dos dois é melhor?", "Onde está o livro?", "Quem chegou ontem?", "Quando vamos comer?"], 0, "É uma pergunta para comparar duas opções."],
      ["Qual frase significa 'gosto mais de chá que de água'?", ["みずより おちゃの ほうが すきです", "おちゃより みずの ほうが すきです", "みずを おちゃが すきです", "おちゃに みずを すきです"], 0, "A primeira frase destaca o chá."],
      ["Qual frase significa 'este é o mais barato'?", ["これが いちばん やすいです", "これより やすいです", "これが ほしいです", "これを やすいです"], 0, "いちばん やすい significa o mais barato."],
      ["Qual palavra significa 'gostar'?", ["すき", "きらい", "より", "ほう"], 0, "すき expressa gostar."],
      ["Qual pergunta pede uma descrição do tipo de música?", ["どんな おんがくが すきですか", "どちらが いきますか", "いつが すきですか", "だれを おんがくですか"], 0, "どんな pergunta sobre o tipo de música."],
      ["Qual frase está correta?", ["この りんごは あの りんごより おおきいです", "この りんごは あの りんごを おおきいです", "この りんごは あの りんごに おおきいです", "この りんごは あの りんごで おおきいです"], 0, "より é a estrutura adequada para essa comparação."],
      ["Qual associação está correta?", ["より = referência; ほうが = opção destacada; いちばん = o mais", "より = passado; ほうが = convite; いちばん = negação", "より = posse; ほうが = pergunta; いちばん = futuro", "より = desejo; ほうが = ordem; いちばん = passado"], 0, "Essas são as três funções principais estudadas na semana."]
    ])
  },
  recovery: buildRecovery(14, [
    ["O que significa より?", ["Do que / em comparação com", "Ontem", "Muito", "Quero"], 0, "より marca a referência da comparação."],
    ["O que significa ほうが?", ["Destaca uma opção", "Indica passado", "Indica desejo", "Indica convite"], 0, "ほうが destaca o elemento escolhido na comparação."],
    ["O que significa いちばん?", ["O mais", "Um pouco", "Nunca", "Amanhã"], 0, "いちばん indica o grau máximo."],
    ["Como dizer 'gosto de gatos'?", ["ねこが すきです", "ねこを すきです", "ねこに すきです", "ねこで すきです"], 0, "Com すき, o objeto da preferência normalmente recebe が."],
    ["Qual pergunta compara duas opções?", ["どちらの ほうが いいですか", "どこに いきますか", "いつ ねますか", "だれが きましたか"], 0, "どちら pergunta qual entre duas opções."]
  ])
},

15: {
  days: {
    1: buildQuestions(15, 1, [
      ["Como iniciar uma apresentação dizendo 'meu nome é...'?", ["わたしの なまえは ... です", "わたしを なまえです", "わたしに なまえが", "わたしの なまえを"], 0, "わたしの なまえは ... です significa meu nome é..." ],
      ["O que significa はじめまして?", ["Prazer em conhecer", "Até amanhã", "Boa noite", "Obrigado"], 0, "はじめまして é usado ao conhecer alguém pela primeira vez."],
      ["Como dizer 'sou estudante'?", ["がくせいです", "がくせいを", "がくせいに", "がくせいでしたか"], 0, "がくせいです significa sou estudante."],
      ["O que significa よろしく おねがいします?", ["Uma expressão educada usada ao se apresentar", "Estou com fome", "Quero dormir", "Até ontem"], 0, "É uma expressão comum para encerrar uma apresentação inicial."],
      ["Como perguntar o nome de alguém?", ["なまえは なんですか", "どこに いきますか", "なにを たべますか", "いつ ねますか"], 0, "なんですか pergunta o que é; aqui, qual é o nome."],
      ["Como dizer 'sou do Brasil'?", ["ブラジルから きました", "ブラジルを たべました", "ブラジルが ほしいです", "ブラジルに ねました"], 0, "から indica origem: vim do Brasil."],
      ["O que significa しゅみ?", ["Hobby", "Escola", "Família", "Comida"], 0, "しゅみ significa hobby."],
      ["Como dizer 'meu hobby é futebol'?", ["しゅみは サッカーです", "しゅみを サッカーです", "しゅみが サッカーに", "しゅみで サッカーを"], 0, "しゅみは サッカーです significa meu hobby é futebol."],
      ["Qual expressão significa 'prazer em conhecê-lo'?", ["はじめまして", "おやすみなさい", "いただきます", "いってきます"], 0, "はじめまして é usada na primeira apresentação."],
      ["Qual sequência forma uma apresentação simples?", ["Saudação, nome, origem e hobby", "Somente verbos no passado", "Somente comparações", "Somente números"], 0, "Uma apresentação básica pode reunir saudação, nome, origem e interesses."]
    ]),
    2: buildQuestions(15, 2, [
      ["Qual palavra significa 'onde'?", ["どこ", "だれ", "なに", "いつ"], 0, "どこ pergunta sobre lugar."],
      ["Qual palavra significa 'quem'?", ["だれ", "どこ", "なに", "どうして"], 0, "だれ pergunta sobre pessoas."],
      ["Qual palavra significa 'quando'?", ["いつ", "どこ", "だれ", "なに"], 0, "いつ pergunta sobre tempo."],
      ["Qual palavra significa 'o quê'?", ["なに", "だれ", "どこ", "いつ"], 0, "なに pergunta sobre coisas ou ações."],
      ["Como perguntar 'onde você mora?'", ["どこに すんでいますか", "だれに すんでいますか", "いつを すんでいますか", "なにが すんでいますか"], 0, "どこ pergunta o lugar e すんでいますか pergunta onde mora."],
      ["Como perguntar 'o que você comeu?'?", ["なにを たべましたか", "どこを たべましたか", "だれが たべましたか", "いつに たべましたか"], 0, "なにを pergunta o que foi comido."],
      ["Como perguntar 'com quem você foi?'", ["だれと いきましたか", "どこを いきましたか", "なにが いきましたか", "いつが いきましたか"], 0, "だれと pergunta com quem."],
      ["O que significa どうして?", ["Por quê?", "Onde?", "Quem?", "Quanto?"], 0, "どうして pergunta o motivo."],
      ["Qual resposta combina com どこに いきましたか?", ["がっこうに いきました", "ともだちです", "きのうです", "りんごです"], 0, "A pergunta pede um lugar; がっこうに いきました responde que fui à escola."],
      ["Qual resposta combina com なにが すきですか?", ["ねこが すきです", "がっこうに いきます", "きのうです", "ともだちと"], 0, "A pergunta pede algo de que a pessoa gosta."]
    ]),
    3: buildQuestions(15, 3, [
      ["Como dizer 'todos os dias'?", ["まいにち", "きのう", "あした", "らいしゅう"], 0, "まいにち significa todos os dias."],
      ["Como dizer 'acordo às sete'?", ["しちじに おきます", "しちじを おきます", "しちじで おきます", "しちじが おきます"], 0, "に indica o horário em que a ação acontece."],
      ["O que significa がっこうに いきます?", ["Vou à escola", "Voltei da escola", "Quero uma escola", "Estudo ontem"], 0, "いきます significa vou."],
      ["Como dizer 'depois estudo'?", ["そのあと べんきょうします", "そのあと べんきょうでした", "そのあと べんきょうが", "そのあと べんきょうたい"], 0, "そのあと significa depois disso."],
      ["O que significa よる?", ["Noite", "Manhã", "Tarde", "Semana"], 0, "よる significa noite."],
      ["Como dizer 'durmo às dez'?", ["じゅうじに ねます", "じゅうじを ねます", "じゅうじが ねます", "じゅうじで ねます"], 0, "に marca o horário da ação."],
      ["Qual frase significa 'todos os dias estudo japonês'?", ["まいにち にほんごを べんきょうします", "きのう にほんごが ほしいです", "あした にほんごを ねました", "まいにち にほんごに たべます"], 0, "まいにち indica frequência diária."],
      ["O que significa あさごはん?", ["Café da manhã", "Jantar", "Almoço", "Lanche da noite"], 0, "あさごはん significa café da manhã."],
      ["Qual frase significa 'de manhã tomo chá'?", ["あさ おちゃを のみます", "あさ おちゃを ねます", "あさ おちゃに いきます", "あさ おちゃが しました"], 0, "のみます significa beber."],
      ["Qual sequência representa uma rotina?", ["Acordar, estudar, comer e dormir", "Comparar, desejar, convidar e possuir", "Somente perguntas", "Somente frases no passado"], 0, "Uma rotina reúne ações habituais em sequência."]
    ]),
    4: buildQuestions(15, 4, [
      ["Como dizer 'gosto de música'?", ["おんがくが すきです", "おんがくを すきです", "おんがくに すきです", "おんがくで すきです"], 0, "すき normalmente usa が para indicar aquilo de que se gosta."],
      ["Como dizer 'gosto de jogar futebol'?", ["サッカーを することが すきです", "サッカーが したことです", "サッカーに すきます", "サッカーを すきでした"], 0, "すること transforma a ação em uma atividade: gosto de jogar futebol."],
      ["O que significa とても?", ["Muito", "Pouco", "Nunca", "Ontem"], 0, "とても intensifica uma característica."],
      ["Como dizer 'não gosto muito de peixe'?", ["さかなが あまり すきではありません", "さかなが とても すきです", "さかなを たべたいです", "さかなが ほしいです"], 0, "あまり com uma expressão negativa significa não muito."],
      ["O que significa いちばん すき?", ["O que mais gosto", "O que menos gosto", "O que comi ontem", "O que quero comprar"], 0, "いちばん すき expressa a maior preferência."],
      ["Como perguntar 'do que você gosta?'", ["なにが すきですか", "どこに すきですか", "いつを すきですか", "だれで すきですか"], 0, "なに pergunta o que e すきですか pergunta do que gosta."],
      ["Qual frase significa 'gosto mais de gatos que de cachorros'?", ["いぬより ねこの ほうが すきです", "ねこより いぬの ほうが すきです", "ねこを いぬに すきです", "いぬが ねこを すきです"], 0, "A primeira frase destaca gatos como preferência."],
      ["O que significa たのしい?", ["Divertido", "Difícil", "Caro", "Pequeno"], 0, "たのしい significa divertido."],
      ["Como dizer 'meu hobby é ler livros'?", ["しゅみは ほんを よむことです", "しゅみは ほんが よみました", "しゅみを ほんに します", "しゅみが ほんを ほしい"], 0, "よむこと transforma ler em uma atividade ou hobby."],
      ["Qual resposta combina com どんな たべものが すきですか?", ["あまい たべものが すきです", "がっこうに いきます", "きのう でした", "ともだちと ねます"], 0, "A pergunta pede o tipo de comida de que a pessoa gosta."]
    ]),
    5: buildQuestions(15, 5, [
      ["Como dizer 'ontem fui à escola'?", ["きのう がっこうに いきました", "あした がっこうに いきます", "きのう がっこうが ほしいです", "まいにち がっこうに いきたいです"], 0, "きのう significa ontem e いきました é o passado educado de いきます."],
      ["O que significa たべました?", ["Comi", "Vou comer", "Quero comer", "Não como"], 0, "たべました é o passado educado de たべます."],
      ["Como perguntar 'o que você fez ontem?'?", ["きのう なにを しましたか", "あした なにを しますか", "どこに すきですか", "だれが たべたいですか"], 0, "きのう なにを しましたか pergunta o que a pessoa fez ontem."],
      ["Qual resposta combina com きのう なにを しましたか?", ["ほんを よみました", "あした いきます", "ねこが ほしいです", "どこですか"], 0, "よみました está no passado: li um livro."],
      ["Como dizer 'encontrei meu amigo'?", ["ともだちに あいました", "ともだちを あいます", "ともだちが あいたいです", "ともだちに あう つもりでした"], 0, "あいました é o passado educado de あいます."],
      ["O que significa えいがを みました?", ["Assisti a um filme", "Quero um filme", "Vou assistir a um filme", "Não assisto a filmes"], 0, "みました é a forma passada de みます."],
      ["Qual expressão significa 'semana passada'?", ["せんしゅう", "らいしゅう", "こんしゅう", "まいしゅう"], 0, "せんしゅう significa semana passada."],
      ["Qual frase fala de uma experiência passada?", ["にほんごを べんきょうしました", "にほんごを べんきょうする つもりです", "にほんごが ほしいです", "にほんごを べんきょうしたいです"], 0, "べんきょうしました descreve uma ação concluída no passado."],
      ["Como dizer 'não fui à escola ontem'?", ["きのう がっこうに いきませんでした", "きのう がっこうに いきました", "あした がっこうに いきません", "きのう がっこうが ほしいです"], 0, "いきませんでした é a forma negativa passada de いきます."],
      ["Qual pergunta pede uma experiência passada?", ["なにを しましたか", "なにを しますか", "なにが ほしいですか", "どちらの ほうが いいですか"], 0, "しました está no passado e pergunta o que foi feito."]
    ]),
    6: buildQuestions(15, 6, [
      ["Qual frase significa 'amanhã pretendo estudar'?", ["あした べんきょうする つもりです", "きのう べんきょうしました", "あした べんきょうが ほしいです", "あした べんきょうしたでした"], 0, "つもりです expressa intenção futura."],
      ["Como dizer 'quero aprender japonês'?", ["にほんごを ならいたいです", "にほんごを ならいました", "にほんごが ほしいです", "にほんごを ならいませんでした"], 0, "たい expressa desejo de realizar uma ação."],
      ["Qual frase significa 'quero um livro'?", ["ほんが ほしいです", "ほんを よみたいです", "ほんを よみました", "ほんに いきます"], 0, "ほしい expressa desejo de possuir algo."],
      ["Qual frase é um pedido educado?", ["みずを ください", "みずを ほしいでした", "みずが いきます", "みずを しました"], 0, "ください é usado para pedir algo: água, por favor."],
      ["Como pedir para alguém esperar?", ["まってください", "まちました", "まちたいです", "まつ ほしいです"], 0, "まってください é um pedido para esperar."],
      ["Qual frase significa 'vamos juntos?'?", ["いっしょに いきませんか", "いっしょに いきました", "いっしょに いく ほしい", "いっしょに いったです"], 0, "いきませんか pode ser usado como convite."],
      ["Qual pergunta significa 'o que você fez ontem?'?", ["きのう なにを しましたか", "あした なにを しますか", "なにが ほしいですか", "どちらが すきですか"], 0, "A pergunta usa o passado しました."],
      ["Qual frase compara preferências?", ["おちゃより みずの ほうが すきです", "おちゃを みずに すきです", "おちゃが みずを すきです", "おちゃに みずが いきます"], 0, "より e ほうが formam uma comparação de preferência."],
      ["Qual sequência é um diálogo natural?", ["Saudação, apresentação, pergunta, resposta e despedida", "Somente respostas sem perguntas", "Somente verbos no passado", "Somente listas de palavras"], 0, "Um diálogo natural alterna falas e mantém uma sequência de comunicação."],
      ["Qual alternativa reúne corretamente desejo, intenção, passado e pedido?", ["たべたいです / いく つもりです / たべました / ください", "たべました / ほしい / より / きのう", "いちばん / だれ / どこ / いつ", "ねこ / ほん / がっこう / みず"], 0, "As quatro expressões representam desejo de ação, plano, passado e pedido."]
    ])
  },
  recovery: buildRecovery(15, [
    ["Como dizer 'meu nome é...'?", ["わたしの なまえは ... です", "わたしを なまえです", "わたしに なまえを", "わたしが なまえに"], 0, "わたしの なまえは ... です é uma apresentação básica."],
    ["Qual palavra significa 'onde'?", ["どこ", "だれ", "なに", "いつ"], 0, "どこ pergunta sobre lugar."],
    ["Como dizer 'ontem estudei'?", ["きのう べんきょうしました", "あした べんきょうします", "きのう べんきょうしたいです", "きのう べんきょうが ほしいです"], 0, "しました indica passado."],
    ["Como pedir água?", ["みずを ください", "みずを しました", "みずが いきます", "みずに くださいです"], 0, "ください é uma forma educada de pedir algo."],
    ["Qual frase significa 'pretendo ir amanhã'?", ["あした いく つもりです", "きのう いきました", "あした いきたいでした", "あした いぬが ほしいです"], 0, "つもりです expressa intenção."]
  ])
},


16: {
  days: {
    1: buildQuestions(16, 1, [
      ["Como começar uma apresentação em japonês?", ["はじめまして", "さようなら", "おやすみなさい", "いただきます"], 0, "はじめまして é usado ao conhecer alguém pela primeira vez."],
      ["Como dizer 'meu nome é Caio'?", ["わたしの なまえは カイオです", "わたしを なまえです", "わたしに カイオです", "わたしが なまえを"], 0, "わたしの なまえは ... です significa meu nome é..."],
      ["O que significa がくせいです?", ["Sou estudante", "Sou professor", "Quero estudar", "Estudei ontem"], 0, "がくせい significa estudante."],
      ["Como perguntar o nome de alguém?", ["なまえは なんですか", "どこに いきますか", "なにを たべますか", "いつ ねますか"], 0, "なんですか pergunta qual é o nome."],
      ["Como dizer 'sou do Brasil'?", ["ブラジルから きました", "ブラジルを たべました", "ブラジルが ほしいです", "ブラジルに ねました"], 0, "から indica origem."],
      ["O que significa よろしく おねがいします?", ["Expressão educada usada em apresentações", "Boa noite", "Até amanhã", "Estou com fome"], 0, "É uma expressão comum ao terminar uma apresentação inicial."],
      ["Qual palavra significa hobby?", ["しゅみ", "がっこう", "ともだち", "じかん"], 0, "しゅみ significa hobby."],
      ["Como dizer 'gosto de gatos'?", ["ねこが すきです", "ねこを すきです", "ねこに すきです", "ねこで すきです"], 0, "Com すき, normalmente usamos が para indicar aquilo de que gostamos."],
      ["Como perguntar 'onde você mora?'", ["どこに すんでいますか", "だれに すんでいますか", "いつを すんでいますか", "なにが すんでいますか"], 0, "どこ pergunta sobre lugar."],
      ["Qual sequência forma uma apresentação básica?", ["Saudação, nome, origem e hobby", "Somente verbos no passado", "Somente comparações", "Somente números"], 0, "Uma apresentação pode reunir essas quatro informações."]
    ]),
    2: buildQuestions(16, 2, [
      ["Como perguntar 'o que você gosta?'?", ["なにが すきですか", "どこが すきですか", "いつが すきですか", "だれを すきですか"], 0, "なに pergunta o que."],
      ["Como dizer 'gosto de futebol'?", ["サッカーが すきです", "サッカーを すきです", "サッカーに すきです", "サッカーで すきです"], 0, "サッカーが すきです significa gosto de futebol."],
      ["O que significa きらい?", ["Não gostar", "Gostar muito", "Querer", "Estudar"], 0, "きらい expressa não gostar."],
      ["Como dizer 'quero comer'?", ["たべたいです", "たべました", "たべません", "たべてください"], 0, "たい expressa desejo de realizar uma ação."],
      ["Como dizer 'quero um livro'?", ["ほんが ほしいです", "ほんを たべたいです", "ほんに いきます", "ほんを ねました"], 0, "ほしい expressa desejo de possuir alguma coisa."],
      ["O que significa いちばん?", ["O mais", "Um pouco", "Ontem", "Nunca"], 0, "いちばん indica o grau máximo."],
      ["Qual frase significa 'prefiro chá a café'?", ["コーヒーより おちゃの ほうが すきです", "おちゃより コーヒーの ほうが すきです", "コーヒーを おちゃに すきです", "おちゃが コーヒーを すきです"], 0, "より apresenta a referência e ほうが destaca a preferência."],
      ["Como perguntar 'que tipo de música você gosta?'", ["どんな おんがくが すきですか", "どこに おんがくですか", "いつ おんがくですか", "だれが おんがくですか"], 0, "どんな pergunta sobre o tipo de alguma coisa."],
      ["O que significa とても?", ["Muito", "Pouco", "Ontem", "Amanhã"], 0, "とても intensifica uma característica ou preferência."],
      ["Qual resposta combina com どんな たべものが すきですか?", ["あまい たべものが すきです", "がっこうに いきます", "きのう でした", "ともだちと ねます"], 0, "A pergunta quer saber de que tipo de comida a pessoa gosta."]
    ]),
    3: buildQuestions(16, 3, [
      ["Como dizer 'todos os dias estudo japonês'?", ["まいにち にほんごを べんきょうします", "きのう にほんごが ほしいです", "あした にほんごを ねました", "まいにち にほんごに たべます"], 0, "まいにち significa todos os dias."],
      ["O que significa あさ?", ["Manhã", "Noite", "Ontem", "Semana"], 0, "あさ significa manhã."],
      ["Como dizer 'acordo às sete horas'?", ["しちじに おきます", "しちじを おきます", "しちじで おきます", "しちじが おきます"], 0, "に marca o horário em que a ação acontece."],
      ["Como dizer 'vou à escola'?", ["がっこうに いきます", "がっこうを いきます", "がっこうが いきます", "がっこうで いきます"], 0, "に marca o destino."],
      ["O que significa そのあと?", ["Depois disso", "Antes disso", "Ontem", "Todos os dias"], 0, "そのあと indica a sequência de acontecimentos."],
      ["Como dizer 'durmo às dez'?", ["じゅうじに ねます", "じゅうじを ねます", "じゅうじが ねます", "じゅうじで ねます"], 0, "に indica o horário."],
      ["Qual frase significa 'de manhã tomo chá'?", ["あさ おちゃを のみます", "あさ おちゃを ねます", "あさ おちゃに いきます", "あさ おちゃが しました"], 0, "のみます significa beber."],
      ["O que significa まいにち?", ["Todos os dias", "Toda semana", "Ontem", "Amanhã"], 0, "まいにち indica frequência diária."],
      ["Como perguntar 'que horas você acorda?'", ["なんじに おきますか", "どこに おきますか", "だれが おきますか", "なにを おきますか"], 0, "なんじ pergunta a que horas."],
      ["Qual alternativa apresenta uma rotina coerente?", ["Acordar, tomar café, estudar e dormir", "Dormir, ontem, comparar e possuir", "Somente perguntas sem respostas", "Somente palavras isoladas"], 0, "Uma rotina apresenta ações habituais em sequência."]
    ]),
    4: buildQuestions(16, 4, [
      ["O que significa きのう?", ["Ontem", "Hoje", "Amanhã", "Semana que vem"], 0, "きのう significa ontem."],
      ["Como dizer 'ontem estudei'?", ["きのう べんきょうしました", "あした べんきょうします", "きのう べんきょうしたいです", "きのう べんきょうが ほしいです"], 0, "しました indica passado."],
      ["O que significa たべました?", ["Comi", "Vou comer", "Quero comer", "Não como"], 0, "たべました é o passado educado de たべます."],
      ["Como perguntar 'o que você fez ontem?'", ["きのう なにを しましたか", "あした なにを しますか", "なにが ほしいですか", "どこが すきですか"], 0, "A pergunta usa しました, que está no passado."],
      ["Qual resposta combina com きのう なにを しましたか?", ["ほんを よみました", "あした いきます", "ねこが ほしいです", "どこですか"], 0, "よみました significa li."],
      ["Como dizer 'não fui à escola ontem'?", ["きのう がっこうに いきませんでした", "きのう がっこうに いきました", "あした がっこうに いきません", "きのう がっこうが ほしいです"], 0, "いきませんでした é a forma negativa passada."],
      ["O que significa みました?", ["Vi ou assisti", "Comi", "Bebi", "Fui"], 0, "みました é o passado de みます."],
      ["Qual expressão significa 'semana passada'?", ["せんしゅう", "らいしゅう", "こんしゅう", "まいしゅう"], 0, "せんしゅう significa semana passada."],
      ["Como dizer 'encontrei um amigo'?", ["ともだちに あいました", "ともだちを あいます", "ともだちが あいたいです", "ともだちに あう つもりです"], 0, "あいました é o passado de あいます."],
      ["Qual frase descreve uma ação concluída?", ["きのう ほんを よみました", "あした ほんを よみます", "ほんを よみたいです", "ほんを よむ つもりです"], 0, "よみました indica uma leitura que já aconteceu."]
    ]),
    5: buildQuestions(16, 5, [
      ["O que significa つもりです?", ["Intenção ou plano", "Passado", "Comparação", "Negação"], 0, "つもりです expressa uma intenção."],
      ["Como dizer 'pretendo estudar amanhã'?", ["あした べんきょうする つもりです", "きのう べんきょうしました", "あした べんきょうが ほしいです", "あした べんきょうしたでした"], 0, "Verbo na forma simples + つもりです expressa intenção."],
      ["Como dizer 'quero aprender japonês'?", ["にほんごを ならいたいです", "にほんごを ならいました", "にほんごが ほしいです", "にほんごを ならいませんでした"], 0, "たい expressa desejo de realizar uma ação."],
      ["Como dizer 'quero um cachorro'?", ["いぬが ほしいです", "いぬを いきたいです", "いぬが いきます", "いぬを ほしいでした"], 0, "ほしい expressa desejo de possuir algo."],
      ["Qual frase é um convite?", ["いっしょに いきませんか", "いきました", "いきたいです", "いく つもりです"], 0, "ませんか pode ser usado para convidar alguém."],
      ["Como dizer 'vamos estudar juntos'?", ["いっしょに べんきょうしましょう", "いっしょに べんきょうしました", "いっしょに べんきょうが ほしい", "いっしょに べんきょうたい"], 0, "しましょう sugere realizar uma ação juntos."],
      ["Como pedir água educadamente?", ["みずを ください", "みずを しました", "みずが いきます", "みずに くださいです"], 0, "ください é usado para fazer pedidos."],
      ["Como pedir para alguém esperar?", ["まってください", "まちました", "まちたいです", "まつ ほしいです"], 0, "まってください significa espere, por favor."],
      ["Qual frase expressa uma intenção negativa?", ["たべない つもりです", "たべたいです", "たべました", "たべてください"], 0, "たべない つもりです significa pretendo não comer."],
      ["Qual associação está correta?", ["たい = desejo de ação; ほしい = desejo de algo; つもり = intenção", "たい = passado; ほしい = comparação; つもり = convite", "たい = posse; ほしい = negação; つもり = saudação", "たい = ordem; ほしい = passado; つもり = pergunta"], 0, "As três construções têm funções diferentes."]
    ]),
    6: buildQuestions(16, 6, [
      ["Qual frase significa 'prazer em conhecer você, meu nome é Ana'?", ["はじめまして。わたしの なまえは アナです", "さようなら。わたしを アナです", "おやすみなさい。アナを たべます", "いただきます。アナに いきます"], 0, "A primeira frase combina apresentação e nome."],
      ["Qual pergunta significa 'onde você mora?'", ["どこに すんでいますか", "なにを たべますか", "いつ ねますか", "だれが きましたか"], 0, "どこ pergunta sobre lugar."],
      ["Qual frase significa 'gosto de estudar japonês'?", ["にほんごを べんきょうすることが すきです", "にほんごを べんきょうしました", "にほんごが ほしいです", "にほんごに いきます"], 0, "すること transforma a ação em uma atividade."],
      ["Qual frase descreve uma rotina?", ["まいにち がっこうに いきます", "きのう がっこうに いきました", "あした がっこうに いく つもりです", "がっこうが ほしいです"], 0, "まいにち indica uma ação habitual."],
      ["Qual frase descreve algo que aconteceu ontem?", ["きのう えいがを みました", "あした えいがを みます", "えいがを みたいです", "えいがを みる つもりです"], 0, "みました indica passado."],
      ["Qual frase expressa um plano?", ["らいしゅう りょこうする つもりです", "きのう りょこうしました", "りょこうが ほしいです", "りょこうしたいでした"], 0, "つもりです expressa intenção."],
      ["Qual frase é um pedido?", ["もういちど いってください", "もういちど いいました", "もういちど いいたいです", "もういちど いく つもりです"], 0, "いってください pede que alguém diga novamente."],
      ["Qual pergunta compara duas opções?", ["どちらの ほうが いいですか", "どこに いきますか", "なにを しましたか", "いつ ねますか"], 0, "どちら pergunta qual das duas opções."],
      ["Qual resposta combina com なにが すきですか?", ["ねこが すきです", "きのうです", "がっこうに いきます", "しちじです"], 0, "A pergunta pede algo de que a pessoa gosta."],
      ["Qual é o objetivo principal desta avaliação?", ["Verificar se consigo me comunicar em situações básicas", "Exigir fluência completa", "Decorar somente números", "Aprender apenas katakana"], 0, "O objetivo é verificar a comunicação básica, não exigir fluência."]
    ])
  },
  recovery: buildRecovery(16, [
    ["Como dizer 'meu nome é...'?", ["わたしの なまえは ... です", "わたしを なまえです", "わたしに なまえを", "わたしが なまえに"], 0, "É uma estrutura básica de apresentação."],
    ["Como dizer 'gosto de gatos'?", ["ねこが すきです", "ねこを すきです", "ねこに すきです", "ねこで すきです"], 0, "すき normalmente utiliza が."],
    ["Como dizer 'ontem estudei'?", ["きのう べんきょうしました", "あした べんきょうします", "きのう べんきょうしたいです", "きのう べんきょうが ほしいです"], 0, "しました indica passado."],
    ["Qual frase expressa um plano?", ["あした いく つもりです", "きのう いきました", "いぬが ほしいです", "いきたいです"], 0, "つもりです expressa intenção."],
    ["Como pedir para alguém esperar?", ["まってください", "まちました", "まちたいです", "まつ つもりです"], 0, "まってください é um pedido educado."]
  ])
},


17: {
  days: {
    1: buildQuestions(17, 1, [
      ["Qual é a leitura de ア?", ["A", "I", "U", "E"], 0, "ア representa o som A."],
      ["Qual é a leitura de イ?", ["I", "A", "E", "O"], 0, "イ representa o som I."],
      ["Qual é a leitura de ウ?", ["U", "O", "A", "I"], 0, "ウ representa o som U."],
      ["Qual é a leitura de エ?", ["E", "I", "U", "O"], 0, "エ representa o som E."],
      ["Qual é a leitura de オ?", ["O", "A", "U", "E"], 0, "オ representa o som O."],
      ["Qual katakana representa o som A?", ["ア", "イ", "ウ", "エ"], 0, "ア é a primeira vogal do katakana."],
      ["Qual katakana representa o som I?", ["オ", "イ", "ア", "ウ"], 1, "イ representa I."],
      ["Qual katakana representa o som U?", ["エ", "オ", "ウ", "ア"], 2, "ウ representa U."],
      ["Qual sequência está correta?", ["ア イ ウ エ オ", "ア ウ イ オ エ", "イ ア エ ウ オ", "オ エ ウ イ ア"], 0, "A ordem das vogais é A, I, U, E, O."],
      ["Quantos caracteres existem no primeiro grupo?", ["5", "3", "4", "6"], 0, "O primeiro grupo possui cinco vogais."]
    ]),
    2: buildQuestions(17, 2, [
      ["Qual é a leitura de カ?", ["KA", "KI", "KU", "KE"], 0, "カ representa KA."],
      ["Qual é a leitura de キ?", ["KI", "KA", "KO", "KU"], 0, "キ representa KI."],
      ["Qual é a leitura de ク?", ["KU", "KE", "KA", "KI"], 0, "ク representa KU."],
      ["Qual é a leitura de ケ?", ["KE", "KO", "KI", "KU"], 0, "ケ representa KE."],
      ["Qual é a leitura de コ?", ["KO", "KA", "KE", "KI"], 0, "コ representa KO."],
      ["Qual katakana representa KA?", ["カ", "キ", "ク", "ケ"], 0, "カ representa KA."],
      ["Qual katakana representa KI?", ["コ", "ク", "キ", "カ"], 2, "キ representa KI."],
      ["Qual katakana representa KU?", ["ケ", "カ", "ク", "コ"], 2, "ク representa KU."],
      ["Qual sequência está correta?", ["カ キ ク ケ コ", "カ ク キ コ ケ", "キ カ ケ ク コ", "コ ケ ク キ カ"], 0, "A sequência é KA, KI, KU, KE, KO."],
      ["Qual vogal aparece no final de コ?", ["O", "A", "U", "I"], 0, "コ representa KO."]
    ]),
    3: buildQuestions(17, 3, [
      ["Qual é a leitura de サ?", ["SA", "SHI", "SU", "SE"], 0, "サ representa SA."],
      ["Qual é a leitura de シ?", ["SHI", "SA", "SU", "SO"], 0, "シ representa SHI."],
      ["Qual é a leitura de ス?", ["SU", "SE", "SA", "SHI"], 0, "ス representa SU."],
      ["Qual é a leitura de セ?", ["SE", "SO", "SHI", "SA"], 0, "セ representa SE."],
      ["Qual é a leitura de ソ?", ["SO", "SU", "SA", "SE"], 0, "ソ representa SO."],
      ["Qual katakana representa SHI?", ["サ", "シ", "ス", "セ"], 1, "シ representa SHI."],
      ["Qual katakana representa SO?", ["ソ", "サ", "シ", "ス"], 0, "ソ representa SO."],
      ["Qual sequência está correta?", ["サ シ ス セ ソ", "サ ス シ ソ セ", "シ サ セ ス ソ", "ソ セ ス シ サ"], 0, "A sequência é SA, SHI, SU, SE, SO."],
      ["Qual destes caracteres representa SU?", ["ス", "シ", "ソ", "サ"], 0, "ス representa SU."],
      ["Qual destes caracteres representa SE?", ["セ", "ソ", "サ", "シ"], 0, "セ representa SE."]
    ]),
    4: buildQuestions(17, 4, [
      ["Como se lê アイス?", ["AISU", "AISE", "AISO", "AKISU"], 0, "ア é A, イ é I e ス é SU. Juntos, formam AISU."],
      ["Como se lê カキ?", ["KAKI", "KAKU", "KIKI", "KOKI"], 0, "カ é KA e キ é KI."],
      ["Como se lê ココ?", ["KOKO", "KAKA", "KUKU", "KIKO"], 0, "コ representa KO."],
      ["Como se lê スシ?", ["SUSHI", "SUSA", "SUSO", "SHISA"], 0, "ス é SU e シ é SHI."],
      ["Qual palavra pode ser lida como アイス?", ["Sorvete", "Escola", "Gato", "Livro"], 0, "アイス é uma palavra de origem estrangeira usada para sorvete."],
      ["Qual é a leitura de カサ?", ["KASA", "KASI", "KUSA", "KESO"], 0, "カ é KA e サ é SA."],
      ["Qual é a leitura de アオ?", ["AO", "AI", "AU", "EO"], 0, "ア é A e オ é O."],
      ["Qual é a leitura de イカ?", ["IKA", "AKA", "UKA", "EKA"], 0, "イ é I e カ é KA."],
      ["Qual destes caracteres NÃO pertence ao grupo estudado?", ["タ", "ア", "カ", "ソ"], 0, "タ será estudado no grupo seguinte."],
      ["O que é importante fazer ao ler katakana?", ["Reconhecer cada símbolo e associá-lo ao som", "Ignorar a ordem dos caracteres", "Ler todos como vogais", "Transformar tudo em hiragana"], 0, "Cada caractere representa um som ou combinação de sons."]
    ]),
    5: buildQuestions(17, 5, [
      ["Qual caractere representa A?", ["ア", "カ", "サ", "コ"], 0, "ア representa A."],
      ["Qual caractere representa KI?", ["キ", "ク", "ケ", "カ"], 0, "キ representa KI."],
      ["Qual caractere representa SHI?", ["シ", "サ", "ス", "ソ"], 0, "シ representa SHI."],
      ["Qual caractere representa KO?", ["コ", "カ", "キ", "ク"], 0, "コ representa KO."],
      ["Qual caractere representa SU?", ["ス", "セ", "ソ", "シ"], 0, "ス representa SU."],
      ["Como se lê カキ?", ["KAKI", "KUKU", "KOKO", "KIKI"], 0, "カキ é KA + KI."],
      ["Como se lê アオ?", ["AO", "AI", "EO", "AU"], 0, "アオ é A + O."],
      ["Como se lê セキ?", ["SEKI", "SAKI", "SOKU", "SHIKI"], 0, "セ representa SE e キ representa KI."],
      ["Qual caractere representa SO?", ["ソ", "ス", "シ", "セ"], 0, "ソ representa SO."],
      ["Qual grupo contém somente katakana da semana?", ["ア カ サ", "タ ナ ハ", "マ ヤ ラ", "ワ ン ツ"], 0, "ア, カ e サ pertencem aos grupos estudados."]
    ]),
    6: buildQuestions(17, 6, [
      ["Qual sequência representa A, I, U, E, O?", ["ア イ ウ エ オ", "カ キ ク ケ コ", "サ シ ス セ ソ", "ア カ サ シ ソ"], 0, "Essa é a sequência das cinco vogais."],
      ["Qual sequência representa KA, KI, KU, KE, KO?", ["カ キ ク ケ コ", "ア イ ウ エ オ", "サ シ ス セ ソ", "カ ク キ コ ケ"], 0, "Essa é a sequência da linha K."],
      ["Qual sequência representa SA, SHI, SU, SE, SO?", ["サ シ ス セ ソ", "カ キ ク ケ コ", "ア イ ウ エ オ", "サ ス シ ソ セ"], 0, "Essa é a sequência da linha S."],
      ["Qual palavra significa sorvete?", ["アイス", "カキ", "ココ", "アオ"], 0, "アイス é uma palavra usada para sorvete."],
      ["Como se lê シ?", ["SHI", "SA", "SU", "SO"], 0, "シ representa SHI."],
      ["Como se lê ケ?", ["KE", "KA", "KI", "KO"], 0, "ケ representa KE."],
      ["Qual caractere representa U?", ["ウ", "ア", "エ", "オ"], 0, "ウ representa U."],
      ["Qual destes caracteres pertence à linha S?", ["セ", "キ", "オ", "カ"], 0, "セ pertence à linha S."],
      ["Qual destes caracteres pertence à linha K?", ["ク", "ス", "ア", "ソ"], 0, "ク pertence à linha K."],
      ["Qual é o objetivo desta semana?", ["Reconhecer, ler e escrever os primeiros katakana", "Aprender todos os kanji", "Dominar toda a gramática avançada", "Abandonar o hiragana"], 0, "A semana introduz as vogais e as linhas K e S."]
    ])
  },
  recovery: buildRecovery(17, [
    ["Qual é a leitura de ア?", ["A", "I", "U", "E"], 0, "ア representa A."],
    ["Qual é a leitura de キ?", ["KI", "KA", "KU", "KO"], 0, "キ representa KI."],
    ["Qual é a leitura de シ?", ["SHI", "SA", "SU", "SO"], 0, "シ representa SHI."],
    ["Como se lê アイス?", ["AISU", "AISE", "AISO", "AKISU"], 0, "ア + イ + ス formam AISU."],
    ["Qual sequência está correta?", ["サ シ ス セ ソ", "サ ス シ ソ セ", "シ サ セ ス ソ", "ソ セ ス シ サ"], 0, "Essa é a sequência correta da linha S."]
  ])
},


18: {
  days: {
    1: buildQuestions(18, 1, [
      ["Qual é a leitura de タ?", ["TA", "CHI", "TSU", "TE"], 0, "タ representa TA."],
      ["Qual é a leitura de チ?", ["CHI", "TA", "TO", "TSU"], 0, "チ representa CHI."],
      ["Qual é a leitura de ツ?", ["TSU", "SU", "SHI", "TE"], 0, "ツ representa TSU."],
      ["Qual é a leitura de テ?", ["TE", "TO", "TA", "CHI"], 0, "テ representa TE."],
      ["Qual é a leitura de ト?", ["TO", "TA", "TE", "TSU"], 0, "ト representa TO."],
      ["Qual caractere representa CHI?", ["チ", "タ", "ツ", "テ"], 0, "チ representa CHI."],
      ["Qual caractere representa TSU?", ["ツ", "シ", "ス", "ソ"], 0, "ツ representa TSU."],
      ["Qual sequência está correta?", ["タ チ ツ テ ト", "タ ツ チ ト テ", "チ タ テ ツ ト", "ト テ ツ チ タ"], 0, "A linha T segue TA, CHI, TSU, TE, TO."],
      ["Qual destes caracteres pertence à linha T?", ["テ", "ケ", "セ", "ネ"], 0, "テ pertence à linha T."],
      ["Qual é a diferença entre シ e ツ?", ["São caracteres diferentes e possuem traços em posições diferentes", "Representam exatamente o mesmo som", "Ambos representam TA", "Um é hiragana e o outro é kanji"], 0, "シ representa SHI e ツ representa TSU. É importante observar a direção e a posição dos traços."]
    ]),
    2: buildQuestions(18, 2, [
      ["Qual é a leitura de ナ?", ["NA", "NI", "NU", "NE"], 0, "ナ representa NA."],
      ["Qual é a leitura de ニ?", ["NI", "NA", "NO", "NU"], 0, "ニ representa NI."],
      ["Qual é a leitura de ヌ?", ["NU", "NE", "NA", "NI"], 0, "ヌ representa NU."],
      ["Qual é a leitura de ネ?", ["NE", "NO", "NI", "NA"], 0, "ネ representa NE."],
      ["Qual é a leitura de ノ?", ["NO", "NU", "NE", "NA"], 0, "ノ representa NO."],
      ["Qual caractere representa NI?", ["ニ", "ナ", "ヌ", "ネ"], 0, "ニ representa NI."],
      ["Qual caractere representa NE?", ["ネ", "ノ", "ナ", "ニ"], 0, "ネ representa NE."],
      ["Qual sequência está correta?", ["ナ ニ ヌ ネ ノ", "ナ ヌ ニ ノ ネ", "ニ ナ ネ ヌ ノ", "ノ ネ ヌ ニ ナ"], 0, "A linha N segue NA, NI, NU, NE, NO."],
      ["Qual destes caracteres representa NO?", ["ノ", "ネ", "ヌ", "ニ"], 0, "ノ representa NO."],
      ["Qual caractere NÃO pertence à linha N?", ["タ", "ナ", "ニ", "ヌ"], 0, "タ pertence à linha T."]
    ]),
    3: buildQuestions(18, 3, [
      ["Qual é a leitura de ハ?", ["HA", "HI", "FU", "HE"], 0, "ハ representa HA."],
      ["Qual é a leitura de ヒ?", ["HI", "HA", "HO", "FU"], 0, "ヒ representa HI."],
      ["Qual é a leitura de フ?", ["FU", "HU", "HA", "HE"], 0, "フ representa FU, uma pronúncia especial da linha H."],
      ["Qual é a leitura de ヘ?", ["HE", "HA", "HI", "HO"], 0, "ヘ representa HE."],
      ["Qual é a leitura de ホ?", ["HO", "FU", "HI", "HA"], 0, "ホ representa HO."],
      ["Qual caractere representa FU?", ["フ", "ヒ", "ハ", "ヘ"], 0, "フ representa FU."],
      ["Qual sequência está correta?", ["ハ ヒ フ ヘ ホ", "ハ フ ヒ ホ ヘ", "ヒ ハ ヘ フ ホ", "ホ ヘ フ ヒ ハ"], 0, "A linha H segue HA, HI, FU, HE, HO."],
      ["Qual destes caracteres representa HO?", ["ホ", "ヘ", "ヒ", "ハ"], 0, "ホ representa HO."],
      ["Qual destes caracteres pertence à linha H?", ["フ", "ヌ", "テ", "ソ"], 0, "フ pertence à linha H."],
      ["Qual caractere representa HE?", ["ヘ", "ハ", "ホ", "ヒ"], 0, "ヘ representa HE."]
    ]),
    4: buildQuestions(18, 4, [
      ["Qual é a leitura de マ?", ["MA", "MI", "MU", "ME"], 0, "マ representa MA."],
      ["Qual é a leitura de ミ?", ["MI", "MA", "MO", "MU"], 0, "ミ representa MI."],
      ["Qual é a leitura de ム?", ["MU", "ME", "MA", "MI"], 0, "ム representa MU."],
      ["Qual é a leitura de メ?", ["ME", "MO", "MI", "MA"], 0, "メ representa ME."],
      ["Qual é a leitura de モ?", ["MO", "MU", "ME", "MA"], 0, "モ representa MO."],
      ["Qual é a leitura de ヤ?", ["YA", "YU", "YO", "WA"], 0, "ヤ representa YA."],
      ["Qual é a leitura de ユ?", ["YU", "YA", "YO", "WA"], 0, "ユ representa YU."],
      ["Qual é a leitura de ヨ?", ["YO", "YU", "YA", "RA"], 0, "ヨ representa YO."],
      ["Qual sequência representa YA, YU, YO?", ["ヤ ユ ヨ", "ヤ ヨ ユ", "ユ ヤ ヨ", "ヨ ユ ヤ"], 0, "A linha Y possui três caracteres."],
      ["Qual caractere representa MI?", ["ミ", "マ", "ム", "メ"], 0, "ミ representa MI."]
    ]),
    5: buildQuestions(18, 5, [
      ["Qual é a leitura de ラ?", ["RA", "RI", "RU", "RE"], 0, "ラ representa RA."],
      ["Qual é a leitura de リ?", ["RI", "RA", "RO", "RU"], 0, "リ representa RI."],
      ["Qual é a leitura de ル?", ["RU", "RE", "RA", "RI"], 0, "ル representa RU."],
      ["Qual é a leitura de レ?", ["RE", "RO", "RI", "RA"], 0, "レ representa RE."],
      ["Qual é a leitura de ロ?", ["RO", "RU", "RE", "RA"], 0, "ロ representa RO."],
      ["Qual é a leitura de ワ?", ["WA", "WO", "N", "RA"], 0, "ワ representa WA."],
      ["Qual é a leitura de ヲ?", ["WO", "WA", "N", "YO"], 0, "ヲ é tradicionalmente lido como WO e aparece principalmente como partícula."],
      ["Qual é a leitura de ン?", ["N", "WA", "WO", "RA"], 0, "ン representa o som nasal N."],
      ["Qual sequência está correta?", ["ラ リ ル レ ロ", "ラ ル リ ロ レ", "リ ラ レ ル ロ", "ロ レ ル リ ラ"], 0, "A linha R segue RA, RI, RU, RE, RO."],
      ["Qual destes é o último caractere básico do katakana?", ["ン", "ワ", "ヲ", "ロ"], 0, "ン é o caractere usado para representar o som nasal N."]
    ]),
    6: buildQuestions(18, 6, [
      ["O que acontece quando adicionamos dakuten a カ?", ["Vira ガ", "Vira パ", "Vira サ", "Vira タ"], 0, "Dakuten transforma KA em GA."],
      ["Qual é a leitura de ギ?", ["GI", "KI", "JI", "PI"], 0, "ギ representa GI."],
      ["Qual é a leitura de ズ?", ["ZU", "SU", "TSU", "SHI"], 0, "ズ representa ZU."],
      ["Qual é a leitura de デ?", ["DE", "TE", "BE", "PE"], 0, "デ representa DE."],
      ["Qual é a leitura de ボ?", ["BO", "HO", "PO", "MO"], 0, "ボ representa BO."],
      ["O que acontece quando adicionamos handakuten a ハ?", ["Vira パ", "Vira バ", "Vira ガ", "Vira ダ"], 0, "Handakuten transforma HA em PA."],
      ["Qual é a leitura de ピ?", ["PI", "BI", "HI", "KI"], 0, "ピ representa PI."],
      ["Qual é a leitura de プ?", ["PU", "BU", "FU", "MU"], 0, "プ representa PU."],
      ["Qual é a leitura de キャ?", ["KYA", "KA", "KAI", "KYO"], 0, "キャ combina キ com ャ pequeno, formando KYA."],
      ["Qual associação está correta?", ["ガ = GA; パ = PA; ジャ = JA", "ガ = KA; パ = BA; ジャ = SA", "ガ = PA; パ = GA; ジャ = KI", "ガ = ZA; パ = HA; ジャ = TA"], 0, "Dakuten e handakuten alteram os sons, e combinações especiais formam sons como JA."]
    ])
  },
  recovery: buildRecovery(18, [
    ["Qual é a leitura de チ?", ["CHI", "TA", "TSU", "TE"], 0, "チ representa CHI."],
    ["Qual é a leitura de ネ?", ["NE", "NA", "NI", "NO"], 0, "ネ representa NE."],
    ["Qual é a leitura de フ?", ["FU", "HA", "HI", "HE"], 0, "フ representa FU."],
    ["O que ガ representa?", ["GA", "KA", "PA", "BA"], 0, "カ com dakuten vira ガ."],
    ["O que パ representa?", ["PA", "BA", "HA", "FA"], 0, "ハ com handakuten vira パ."]
  ])
},


19: {
  days: {
    1: buildQuestions(19, 1, [
      ["Qual é a função do pequeno ッ?", ["Indicar uma pausa e duplicação da consoante seguinte", "Representar sempre o som A", "Indicar uma vogal longa", "Substituir o caractere ン"], 0, "O pequeno ッ marca uma consoante geminada, criando uma breve interrupção antes dela."],
      ["Como se lê corretamente キッテ?", ["KITTE", "KITE", "KITEI", "KITSU"], 0, "ッ duplica o T: KI-T-TE."],
      ["Qual palavra apresenta pequeno ッ?", ["ベッド", "ネコ", "アオ", "カサ"], 0, "ベッド contém ッ antes de ド."],
      ["O que acontece em サッカー?", ["O K fica duplicado", "O A desaparece", "O R fica duplicado", "A palavra vira hiragana"], 0, "サッカー é lido SAKKAA."],
      ["Qual leitura corresponde a カップ?", ["KAPPU", "KAPU", "KAKU", "KAPPO"], 0, "ッ duplica o P."],
      ["Qual é a leitura de チケット?", ["CHIKETTO", "CHIKETO", "CHIKATTO", "CHIKETSU"], 0, "チケット contém a duplicação do T."],
      ["Em qual posição aparece o pequeno ッ em ベッド?", ["Antes do ド", "Antes do ベ", "No final", "Entre ベ e ッ"], 0, "O pequeno ッ aparece antes da consoante duplicada."],
      ["Qual alternativa apresenta uma leitura sem duplicação?", ["KITE para キッテ", "KITTE para キッテ", "SAKKAA para サッカー", "KAPPU para カップ"], 0, "KITE não representa a duplicação do T em キッテ."],
      ["O pequeno ッ é igual ao つ normal?", ["Não, o pequeno ッ tem função especial", "Sim, são sempre iguais", "O pequeno ッ representa N", "O pequeno ッ representa A"], 0, "O tamanho pequeno muda a função do caractere."],
      ["Qual é o objetivo de aprender ッ?", ["Ler corretamente palavras com consoantes duplicadas", "Aprender somente vogais", "Substituir todas as partículas", "Escrever kanji"], 0, "O pequeno ッ é essencial para pronunciar muitas palavras."]
    ]),
    2: buildQuestions(19, 2, [
      ["Qual é a função do símbolo ー?", ["Alongar a vogal anterior", "Duplicar a consoante", "Representar sempre N", "Separar frases"], 0, "O traço indica uma vogal longa em katakana."],
      ["Como se lê ケーキ?", ["KEEKI", "KEKI", "KAKI", "KOKI"], 0, "O ー alonga o som E."],
      ["Qual palavra significa café?", ["コーヒー", "コヒ", "カヒ", "コハ"], 0, "コーヒー é a palavra usada para café."],
      ["O que o ー faz em スーパー?", ["Alongar o som A", "Duplicar o S", "Criar um som N", "Apagar o U"], 0, "スーパー é lido SUUPAA, com vogais longas."],
      ["Qual símbolo indica a vogal longa?", ["ー", "ッ", "ン", "。"], 0, "O traço longo ー indica prolongamento da vogal."],
      ["Qual é a leitura de タクシー?", ["TAKUSHII", "TAKUSHI", "TAKASU", "TAKUSHU"], 0, "O ー prolonga o som I no final."],
      ["Qual palavra contém uma vogal longa?", ["ゲーム", "ネコ", "イヌ", "カサ"], 0, "ゲーム possui ー depois de ゲ."],
      ["Qual é a leitura aproximada de メール?", ["MEERU", "MERU", "MAIRU", "MORU"], 0, "メー alonga o som E."],
      ["O ー deve ser lido como uma vogal independente?", ["Não, ele prolonga a vogal anterior", "Sim, sempre representa A", "Sim, sempre representa U", "Não, ele duplica a consoante"], 0, "O traço não é uma sílaba independente."],
      ["Qual alternativa apresenta a função correta?", ["ッ = consoante duplicada; ー = vogal longa", "ッ = vogal longa; ー = consoante duplicada", "ッ = som N; ー = som A", "ッ = pausa entre frases; ー = pergunta"], 0, "São dois sinais diferentes, com funções diferentes."]
    ]),
    3: buildQuestions(19, 3, [
      ["Qual é a leitura de キャ?", ["KYA", "KA", "KAI", "KYU"], 0, "キ + ャ pequeno formam KYA."],
      ["Qual é a leitura de キュ?", ["KYU", "KIYU", "KYA", "KYO"], 0, "キ + ュ pequeno formam KYU."],
      ["Qual é a leitura de キョ?", ["KYO", "KYU", "KYA", "KIO"], 0, "キ + ョ pequeno formam KYO."],
      ["Qual é a leitura de シャ?", ["SHA", "SA", "SHIYA", "SHU"], 0, "シ + ャ pequeno formam SHA."],
      ["Qual é a leitura de チュ?", ["CHU", "TSU", "CHYA", "CHIYU"], 0, "チ + ュ pequeno formam CHU."],
      ["Qual é a leitura de ニョ?", ["NYO", "NYA", "NYU", "NOYO"], 0, "ニ + ョ pequeno formam NYO."],
      ["Qual alternativa representa KYO?", ["キョ", "キャ", "キュ", "キイ"], 0, "キョ representa KYO."],
      ["Qual alternativa representa SHA?", ["シャ", "シュ", "ショ", "サヤ"], 0, "シャ representa SHA."],
      ["O que acontece com o segundo caractere de uma combinação como キャ?", ["Ele fica pequeno", "Ele é retirado", "Ele vira kanji", "Ele é duplicado"], 0, "O segundo caractere pequeno modifica a leitura do primeiro."],
      ["Qual é a leitura de リョ?", ["RYO", "RYA", "RYU", "RIO"], 0, "リ + ョ pequeno formam RYO."]
    ]),
    4: buildQuestions(19, 4, [
      ["Como se escreve o som FA em uma combinação especial?", ["ファ", "フア", "ハ", "パ"], 0, "ファ combina フ com ァ pequeno."],
      ["Qual é a leitura de ティ?", ["TI", "TE", "CHI", "TSI"], 0, "ティ é usado para representar TI em palavras estrangeiras."],
      ["Qual é a leitura de ウィ?", ["WI", "WA", "WE", "WU"], 0, "ウィ é uma combinação usada para representar WI."],
      ["Qual é a leitura de ディ?", ["DI", "DE", "JI", "GI"], 0, "ディ representa DI."],
      ["Qual combinação representa VA?", ["ヴァ", "バ", "ワ", "ファ"], 0, "ヴァ é formado com ヴ e ァ pequeno."],
      ["Qual combinação representa CHE?", ["チェ", "チエ", "シェ", "テ"], 0, "チェ é uma combinação usada em palavras estrangeiras."],
      ["Qual é a leitura de フォ?", ["FO", "FU", "HO", "PO"], 0, "フォ representa FO."],
      ["Qual alternativa representa WO?", ["ウォ", "ウオ", "ワ", "ヲ"], 0, "ウォ pode representar o som WO em palavras estrangeiras."],
      ["Por que existem combinações como ティ e ファ?", ["Para representar sons de palavras estrangeiras que não aparecem da mesma forma no japonês tradicional", "Para substituir todas as vogais", "Para escrever somente nomes japoneses", "Para transformar katakana em kanji"], 0, "Essas combinações ampliam os sons que podem ser representados."],
      ["Qual combinação representa CHE?", ["チェ", "チャ", "チュ", "チョ"], 0, "チェ representa CHE."]
    ]),
    5: buildQuestions(19, 5, [
      ["O que significa パン?", ["Pão", "Água", "Gato", "Livro"], 0, "パン é uma palavra de origem portuguesa incorporada ao japonês."],
      ["O que significa テレビ?", ["Televisão", "Telefone", "Computador", "Câmera"], 0, "テレビ vem da palavra television."],
      ["O que significa コンピューター?", ["Computador", "Carro", "Escola", "Caderno"], 0, "コンピューター significa computador."],
      ["O que significa バス?", ["Ônibus", "Trem", "Avião", "Bicicleta"], 0, "バス significa ônibus."],
      ["O que significa ホテル?", ["Hotel", "Hospital", "Mercado", "Biblioteca"], 0, "ホテル vem da palavra hotel."],
      ["O que significa カメラ?", ["Câmera", "Caneta", "Livro", "Relógio"], 0, "カメラ significa câmera."],
      ["O que significa アイスクリーム?", ["Sorvete", "Bolo", "Pão", "Leite"], 0, "アイスクリーム vem de ice cream."],
      ["O que significa スマートフォン?", ["Smartphone", "Televisão", "Computador", "Rádio"], 0, "スマートフォン representa smartphone."],
      ["Por que muitas palavras estrangeiras são escritas em katakana?", ["Porque o katakana é usado frequentemente para palavras de origem estrangeira", "Porque o hiragana não existe", "Porque todas as palavras japonesas usam katakana", "Porque o katakana só representa números"], 0, "Katakana é muito usado para empréstimos linguísticos."],
      ["Qual palavra representa ônibus?", ["バス", "パン", "ホテル", "カメラ"], 0, "バス é a palavra japonesa para ônibus."]
    ]),
    6: buildQuestions(19, 6, [
      ["Qual sinal duplica a consoante?", ["ッ", "ー", "ン", "ア"], 0, "O pequeno ッ marca a duplicação da consoante seguinte."],
      ["Qual sinal prolonga a vogal?", ["ー", "ッ", "ン", "ク"], 0, "O traço prolonga a vogal anterior."],
      ["Como se lê キッテ?", ["KITTE", "KITE", "KETTE", "KITSU"], 0, "O pequeno ッ duplica o T."],
      ["Como se lê ケーキ?", ["KEEKI", "KEKI", "KAKI", "KOKI"], 0, "O traço prolonga o E."],
      ["Qual é a leitura de キャ?", ["KYA", "KYU", "KYO", "KA"], 0, "キャ representa KYA."],
      ["Qual é a leitura de ファ?", ["FA", "FU", "HA", "PA"], 0, "ファ representa FA."],
      ["Qual palavra significa televisão?", ["テレビ", "バス", "パン", "カメラ"], 0, "テレビ significa televisão."],
      ["Qual palavra significa pão?", ["パン", "ホテル", "ゲーム", "メール"], 0, "パン significa pão."],
      ["Qual palavra contém vogal longa?", ["コーヒー", "ネコ", "イヌ", "カサ"], 0, "コーヒー possui dois sinais de vogal longa."],
      ["Qual é o objetivo desta semana?", ["Ler palavras com ッ, vogais longas e combinações especiais", "Aprender somente as cinco vogais", "Abandonar o katakana", "Estudar apenas hiragana"], 0, "A semana aprofunda a leitura de katakana."]
    ])
  },
  recovery: buildRecovery(19, [
    ["Qual é a função de ッ?", ["Duplicar a consoante seguinte", "Alongar a vogal", "Representar N", "Indicar uma pergunta"], 0, "ッ marca uma consoante geminada."],
    ["Qual é a função de ー?", ["Alongar a vogal anterior", "Duplicar a consoante", "Representar N", "Separar palavras"], 0, "ー prolonga a vogal."],
    ["Como se lê キャ?", ["KYA", "KA", "KYU", "KYO"], 0, "キャ representa KYA."],
    ["O que significa テレビ?", ["Televisão", "Ônibus", "Pão", "Hotel"], 0, "テレビ significa televisão."],
    ["Como se lê ファ?", ["FA", "FU", "HA", "PA"], 0, "ファ representa FA."]
  ])
},


20: {
  days: {
    1: buildQuestions(20, 1, [
      ["Qual palavra está escrita em hiragana?", ["ねこ", "ネコ", "パン", "テレビ"], 0, "ねこ está em hiragana."],
      ["Qual palavra está escrita em katakana?", ["ネコ", "ねこ", "いぬ", "みず"], 0, "ネコ está em katakana."],
      ["Qual é a leitura de ねこ?", ["NEKO", "NIKO", "NEKU", "NOKO"], 0, "ねこ significa gato."],
      ["Qual é a leitura de イヌ?", ["INU", "INE", "INUO", "ANO"], 0, "イヌ significa cachorro."],
      ["Qual palavra significa água?", ["みず", "ネコ", "パン", "テレビ"], 0, "みず significa água e está em hiragana."],
      ["Qual palavra significa pão?", ["パン", "ねこ", "みず", "がっこう"], 0, "パン significa pão e está em katakana."],
      ["Em qual sistema está escrita a palavra がっこう?", ["Hiragana", "Katakana", "Kanji", "Romaji"], 0, "がっこう está escrita em hiragana."],
      ["Em qual sistema está escrita a palavra テレビ?", ["Katakana", "Hiragana", "Kanji", "Romaji"], 0, "テレビ está escrita em katakana."],
      ["Qual frase mistura hiragana e katakana?", ["パンを たべます", "ねこを みます", "みずを のみます", "ほんを よみます"], 0, "パン está em katakana e を たべます está em hiragana."],
      ["Por que é importante reconhecer os dois sistemas?", ["Porque eles aparecem juntos em textos e frases reais", "Porque um deles não é mais utilizado", "Porque são alfabetos idênticos", "Porque todas as palavras usam apenas katakana"], 0, "Textos japoneses misturam diferentes sistemas de escrita."]
    ]),
    2: buildQuestions(20, 2, [
      ["O que significa パンを たべます?", ["Como pão", "Bebo água", "Leio um livro", "Vou à escola"], 0, "パン significa pão, を marca o objeto e たべます significa comer."],
      ["O que significa テレビを みます?", ["Assisto televisão", "Leio um livro", "Como pão", "Vou dormir"], 0, "テレビ é televisão e みます significa ver ou assistir."],
      ["O que significa コーヒーを のみます?", ["Bebo café", "Como café", "Compro café", "Quero café"], 0, "コーヒー significa café e のみます significa beber."],
      ["Qual frase significa 'quero comer pão'?", ["パンを たべたいです", "パンを たべました", "パンが みます", "パンに いきます"], 0, "たべたいです expressa o desejo de comer."],
      ["Qual frase significa 'assisti televisão ontem'?", ["きのう テレビを みました", "あした テレビを みます", "テレビを みたいです", "テレビが ほしいです"], 0, "きのう indica ontem e みました indica passado."],
      ["Qual frase significa 'quero tomar café'?", ["コーヒーを のみたいです", "コーヒーを のみました", "コーヒーが いきます", "コーヒーを ねます"], 0, "のみたいです expressa o desejo de beber."],
      ["Qual frase está corretamente escrita?", ["パンを たべます", "パンが たべますを", "パンに たべます", "パンで たべますを"], 0, "A partícula を marca o objeto da ação."],
      ["Qual palavra está em katakana na frase コーヒーを のみます?", ["コーヒー", "を", "のみます", "Nenhuma"], 0, "コーヒー está em katakana."],
      ["Qual parte está em hiragana na frase テレビを みます?", ["を みます", "テレビ", "A frase inteira", "Nenhuma"], 0, "を e みます estão em hiragana."],
      ["Qual é a tradução de アイスを たべました?", ["Comi sorvete", "Quero sorvete", "Vou comprar sorvete", "Bebi água"], 0, "アイス é sorvete e たべました está no passado."]
    ]),
    3: buildQuestions(20, 3, [
      ["Qual frase significa 'vou à escola'?", ["がっこうに いきます", "がっこうを たべます", "がっこうが のみます", "がっこうで ねます"], 0, "がっこう significa escola e いきます significa ir."],
      ["Qual frase significa 'vou assistir televisão'?", ["テレビを みる つもりです", "テレビを みました", "テレビが ほしいです", "テレビに ねます"], 0, "つもりです expressa intenção."],
      ["Qual frase significa 'todos os dias estudo japonês'?", ["まいにち にほんごを べんきょうします", "きのう にほんごを べんきょうしました", "あした にほんごが ほしいです", "まいにち にほんごを ねます"], 0, "まいにち significa todos os dias."],
      ["Qual frase significa 'ontem comi pão'?", ["きのう パンを たべました", "あした パンを たべます", "パンを たべたいです", "パンが ほしいです"], 0, "きのう indica passado e たべました indica que comeu."],
      ["Qual frase significa 'quero comprar um computador'?", ["コンピューターを かいたいです", "コンピューターを かいました", "コンピューターが ねます", "コンピューターに いきます"], 0, "かいたいです expressa o desejo de comprar."],
      ["Qual palavra significa amigo?", ["ともだち", "テレビ", "ホテル", "パン"], 0, "ともだち significa amigo."],
      ["Qual frase significa 'vou encontrar um amigo amanhã'?", ["あした ともだちに あう つもりです", "きのう ともだちに あいました", "ともだちが ほしいです", "ともだちを たべたいです"], 0, "あした indica amanhã e つもりです expressa intenção."],
      ["Qual frase significa 'gosto de jogos'?", ["ゲームが すきです", "ゲームを ねます", "ゲームに いきます", "ゲームが たべます"], 0, "ゲーム significa jogo e が すきです expressa gostar."],
      ["Qual frase contém uma palavra em katakana e uma partícula em hiragana?", ["ゲームが すきです", "ねこが すきです", "ほんを よみます", "みずを のみます"], 0, "ゲーム está em katakana e が está em hiragana."],
      ["O que significa あした?", ["Amanhã", "Ontem", "Hoje", "Semana passada"], 0, "あした significa amanhã."]
    ]),
    4: buildQuestions(20, 4, [
      ["Qual pergunta significa 'o que você comeu ontem?'", ["きのう なにを たべましたか", "あした なにを たべますか", "どこに いきますか", "なにが ほしいですか"], 0, "なにを pergunta o que foi comido."],
      ["Qual resposta significa 'comi pão'?", ["パンを たべました", "パンを たべたいです", "パンを たべます", "パンが ほしいです"], 0, "たべました indica passado."],
      ["Como perguntar 'você gosta de café?'", ["コーヒーが すきですか", "コーヒーを ねますか", "コーヒーに いきますか", "コーヒーが しましたか"], 0, "すきですか pergunta se alguém gosta."],
      ["Qual resposta significa 'sim, gosto'?", ["はい、すきです", "いいえ、いきます", "きのう でした", "あした ねます"], 0, "はい significa sim."],
      ["Como perguntar 'o que você pretende fazer amanhã?'", ["あした なにを する つもりですか", "きのう なにを しましたか", "どこに すんでいますか", "なにが すきですか"], 0, "A construção する つもりです pergunta sobre intenção."],
      ["Qual resposta significa 'pretendo assistir a um filme'?", ["えいがを みる つもりです", "えいがを みました", "えいがが ほしいです", "えいがを たべます"], 0, "みる つもりです expressa intenção de assistir."],
      ["Como perguntar 'onde você mora?'", ["どこに すんでいますか", "なにを すんでいますか", "いつを すんでいますか", "だれが すんでいますか"], 0, "どこ pergunta sobre lugar."],
      ["Qual resposta significa 'moro no Brasil'?", ["ブラジルに すんでいます", "ブラジルを たべます", "ブラジルが ねます", "ブラジルを みました"], 0, "ブラジル é Brasil e すんでいます significa morar."],
      ["Qual expressão pode iniciar um convite?", ["いっしょに", "きのう", "まいにち", "ほしい"], 0, "いっしょに significa juntos e aparece frequentemente em convites."],
      ["Qual frase significa 'vamos assistir a um filme juntos?'", ["いっしょに えいがを みませんか", "きのう えいがを みました", "えいがを みたいです", "えいがが ほしいです"], 0, "みませんか pode ser usado para fazer um convite."]
    ]),
    5: buildQuestions(20, 5, [
      ["Qual frase significa 'por favor, espere'?", ["まってください", "まちました", "まちたいです", "まつ つもりです"], 0, "まってください é um pedido educado."],
      ["Qual frase significa 'por favor, diga novamente'?", ["もういちど いってください", "もういちど いいました", "もういちど いいたいです", "もういちど いく つもりです"], 0, "いってください pede que alguém fale novamente."],
      ["Qual frase significa 'por favor, escreva'?", ["かいてください", "かきました", "かきたいです", "かく つもりです"], 0, "かいてください é a forma de pedido de かく."],
      ["Qual frase significa 'não entendo japonês'?", ["にほんごが わかりません", "にほんごを たべません", "にほんごに いきません", "にほんごが ほしいです"], 0, "わかりません significa não entender."],
      ["Como pedir para alguém falar devagar?", ["ゆっくり はなしてください", "ゆっくり たべました", "ゆっくり ねたいです", "ゆっくり いく つもりです"], 0, "はなしてください significa fale, por favor."],
      ["Qual frase significa 'quero aprender japonês'?", ["にほんごを ならいたいです", "にほんごを ならいました", "にほんごが ねます", "にほんごを たべます"], 0, "ならいたいです expressa o desejo de aprender."],
      ["Qual frase significa 'pretendo estudar amanhã'?", ["あした べんきょうする つもりです", "きのう べんきょうしました", "あした べんきょうが ほしいです", "べんきょうを たべます"], 0, "つもりです expressa intenção."],
      ["Qual frase significa 'assisti a um filme ontem'?", ["きのう えいがを みました", "あした えいがを みます", "えいがを みたいです", "えいがを みる つもりです"], 0, "きのう e みました indicam passado."],
      ["Qual frase mistura corretamente katakana e hiragana?", ["ホテルに とまりました", "ホテルを たべましたです", "ホテルが いきますを", "ホテルに みましたかです"], 0, "ホテル está em katakana; に e とまりました estão em hiragana."],
      ["Qual frase está correta?", ["パンを たべて、コーヒーを のみました", "パンが たべて、コーヒーに のみました", "パンを たべますを、コーヒー", "パンに たべましたが、コーヒー"], 0, "A primeira frase usa corretamente を e a forma て para conectar ações."]
    ]),
    6: buildQuestions(20, 6, [
      ["Qual palavra está em hiragana?", ["さくら", "サクラ", "パン", "テレビ"], 0, "さくら está em hiragana."],
      ["Qual palavra está em katakana?", ["カメラ", "ねこ", "いぬ", "みず"], 0, "カメラ está em katakana."],
      ["Qual frase significa 'hoje vou à escola'?", ["きょう がっこうに いきます", "きのう がっこうに いきました", "あした がっこうを たべます", "きょう がっこうが ほしいです"], 0, "きょう significa hoje."],
      ["Qual frase significa 'ontem assisti televisão'?", ["きのう テレビを みました", "あした テレビを みます", "テレビを みたいです", "テレビが ほしいです"], 0, "きのう indica ontem e みました indica passado."],
      ["Qual frase significa 'quero comer sorvete'?", ["アイスを たべたいです", "アイスを たべました", "アイスが ねます", "アイスに いきます"], 0, "アイス está em katakana e たべたいです expressa desejo."],
      ["Qual frase significa 'gosto de música japonesa'?", ["にほんの おんがくが すきです", "にほんの おんがくを ねます", "にほんの おんがくに いきます", "にほんの おんがくが たべます"], 0, "すきです expressa gostar."],
      ["Qual frase significa 'pretendo comprar um livro amanhã'?", ["あした ほんを かう つもりです", "きのう ほんを かいました", "ほんを かいたいでした", "ほんが かいます"], 0, "かう つもりです expressa intenção de comprar."],
      ["Qual frase significa 'por favor, espere um pouco'?", ["ちょっと まってください", "ちょっと まちました", "ちょっと まちたいです", "ちょっと まつ つもりです"], 0, "ちょっと significa um pouco e まってください é um pedido."],
      ["Qual frase está escrita com os dois sistemas?", ["わたしは パンを たべます", "わたしは ほんを よみます", "ねこが います", "みずを のみます"], 0, "パン está em katakana e o restante está em hiragana."],
      ["O que o aluno deve conseguir fazer ao terminar a semana 20?", ["Ler frases básicas que misturam hiragana e katakana", "Dominar todos os kanji existentes", "Falar japonês fluentemente", "Escrever somente em katakana"], 0, "O objetivo é reconhecer e compreender os dois sistemas em frases básicas."]
    ])
  },
  recovery: buildRecovery(20, [
    ["Qual palavra está em katakana?", ["テレビ", "ねこ", "いぬ", "みず"], 0, "テレビ está em katakana."],
    ["Qual frase significa 'comi pão'?", ["パンを たべました", "パンを たべたいです", "パンを たべます", "パンが ほしいです"], 0, "たべました indica passado."],
    ["Qual frase significa 'gosto de jogos'?", ["ゲームが すきです", "ゲームを ねます", "ゲームに いきます", "ゲームが たべます"], 0, "ゲーム está em katakana e すきです expressa gostar."],
    ["Qual frase significa 'pretendo estudar amanhã'?", ["あした べんきょうする つもりです", "きのう べんきょうしました", "あした べんきょうが ほしいです", "べんきょうを たべます"], 0, "つもりです expressa intenção."],
    ["Qual frase mistura hiragana e katakana?", ["わたしは パンを たべます", "ねこが います", "みずを のみます", "ほんを よみます"], 0, "パン está em katakana e o restante está em hiragana."]
  ])
},


21: {
  days: {
    1: buildQuestions(21, 1, [
      ["O que são kanji?", ["Caracteres de origem chinesa usados na escrita japonesa", "Símbolos usados somente para números", "Letras do alfabeto romano", "Uma forma de escrever apenas palavras estrangeiras"], 0, "Kanji são caracteres incorporados ao japonês a partir da escrita chinesa."],
      ["Qual é uma das funções dos kanji?", ["Representar ideias, significados e partes de palavras", "Substituir todas as partículas", "Representar somente sons estrangeiros", "Substituir exclusivamente o katakana"], 0, "Kanji frequentemente representam conceitos e aparecem dentro de palavras."],
      ["Qual sistema costuma acompanhar os kanji para formar palavras e frases?", ["Hiragana", "Somente romaji", "Somente números", "Alfabeto cirílico"], 0, "O hiragana aparece frequentemente em terminações e elementos gramaticais."],
      ["Qual destas palavras contém kanji?", ["日本", "ねこ", "テレビ", "パン"], 0, "日本 contém dois kanji: 日 e 本."],
      ["Qual é o significado de 人?", ["Pessoa", "Água", "Fogo", "Montanha"], 0, "人 representa pessoa ou ser humano."],
      ["Qual é o significado de 山?", ["Montanha", "Rio", "Árvore", "Sol"], 0, "山 representa montanha."],
      ["Qual é o significado de 水?", ["Água", "Fogo", "Terra", "Lua"], 0, "水 representa água."],
      ["Qual é o significado de 火?", ["Fogo", "Água", "Madeira", "Pessoa"], 0, "火 representa fogo."],
      ["Qual alternativa contém somente kanji?", ["山川", "ねこ", "パン", "テレビ"], 0, "山 e 川 são caracteres kanji."],
      ["Por que aprender kanji é importante?", ["Porque eles aparecem constantemente em textos japoneses", "Porque substituem a necessidade de aprender gramática", "Porque são usados apenas em livros antigos", "Porque o hiragana deixa de existir depois deles"], 0, "Kanji são fundamentais para ler textos japoneses cotidianos."]
    ]),
    2: buildQuestions(21, 2, [
      ["O que são radicais em kanji?", ["Componentes que ajudam a classificar e analisar caracteres", "Partículas usadas no final das frases", "Sons exclusivos do katakana", "Palavras estrangeiras"], 0, "Radicais são componentes dos kanji e podem oferecer pistas sobre significado ou classificação."],
      ["Qual componente aparece no kanji 休?", ["亻", "氵", "火", "口"], 0, "休 é composto por 亻, uma forma relacionada a 人, e 木."],
      ["O que o componente 氵 costuma indicar?", ["Relação com água ou líquidos", "Relação com fogo", "Relação com pessoas", "Relação com árvores"], 0, "氵 é uma forma lateral do radical 水."],
      ["Qual componente está relacionado a fogo?", ["火", "水", "木", "人"], 0, "火 é o radical associado ao fogo."],
      ["Qual componente está relacionado a árvore ou madeira?", ["木", "水", "日", "口"], 0, "木 significa árvore ou madeira."],
      ["Qual é o radical presente em 海?", ["氵", "火", "木", "人"], 0, "海, que significa mar, contém o radical 氵."],
      ["Qual é o significado de 口?", ["Boca", "Olho", "Mão", "Pé"], 0, "口 representa boca e também aparece em palavras relacionadas."],
      ["Qual componente está presente em 林?", ["木", "火", "水", "月"], 0, "林 é formado por dois componentes 木."],
      ["Qual afirmação sobre radicais está correta?", ["Eles podem ajudar a memorizar e reconhecer kanji", "Todos os kanji possuem apenas um radical visível", "Eles sempre indicam exatamente a pronúncia", "Eles são usados somente no hiragana"], 0, "Radicais são pistas úteis, mas nem sempre revelam a leitura completa."],
      ["Qual kanji possui o componente relacionado à água?", ["海", "炎", "林", "休"], 0, "海 contém 氵, relacionado à água."]
    ]),
    3: buildQuestions(21, 3, [
      ["Qual é uma boa estratégia para memorizar kanji?", ["Associar forma, significado, leitura e exemplos", "Decorar apenas o desenho sem entender", "Ignorar palavras em que ele aparece", "Aprender somente pelo romaji"], 0, "Associar diferentes informações torna a memorização mais útil."],
      ["O que significa 日?", ["Sol ou dia", "Lua", "Água", "Pessoa"], 0, "日 pode representar sol ou dia, dependendo da palavra."],
      ["O que significa 月?", ["Lua ou mês", "Fogo", "Montanha", "Árvore"], 0, "月 pode representar lua ou mês."],
      ["O que significa 木?", ["Árvore ou madeira", "Rio", "Pessoa", "Boca"], 0, "木 representa árvore ou madeira."],
      ["O que significa 川?", ["Rio", "Montanha", "Sol", "Fogo"], 0, "川 representa rio."],
      ["Qual par apresenta dois kanji da natureza?", ["山 e 川", "人 e 大", "学 e 生", "口 e 目"], 0, "山 significa montanha e 川 significa rio."],
      ["Qual kanji representa uma pessoa?", ["人", "日", "月", "木"], 0, "人 significa pessoa."],
      ["Qual kanji representa o fogo?", ["火", "水", "川", "山"], 0, "火 significa fogo."],
      ["Qual é o significado de 大?", ["Grande", "Pequeno", "Novo", "Antigo"], 0, "大 representa grande."],
      ["Qual é o significado de 小?", ["Pequeno", "Grande", "Alto", "Rápido"], 0, "小 representa pequeno."]
    ]),
    4: buildQuestions(21, 4, [
      ["O que é On'yomi?", ["Leitura de origem chinesa adaptada ao japonês", "Leitura exclusiva do hiragana", "Leitura de palavras estrangeiras em katakana", "Nome de um radical"], 0, "On'yomi é uma leitura de origem chinesa adaptada à língua japonesa."],
      ["O que é Kun'yomi?", ["Leitura japonesa associada ao significado do kanji", "Leitura exclusiva de números", "Uma forma de escrever katakana", "Um tipo de pontuação"], 0, "Kun'yomi é a leitura japonesa nativa associada ao significado do caractere."],
      ["Qual é uma leitura On'yomi comum de 日?", ["ニチ", "ひ", "やま", "みず"], 0, "ニチ é uma leitura On'yomi de 日."],
      ["Qual é uma leitura Kun'yomi de 日?", ["ひ", "ニチ", "ホン", "ジン"], 0, "ひ é uma leitura Kun'yomi de 日."],
      ["Qual é uma leitura On'yomi comum de 人?", ["ジン", "ひと", "やま", "かわ"], 0, "ジン é uma leitura On'yomi de 人."],
      ["Qual é uma leitura Kun'yomi de 人?", ["ひと", "ジン", "ニチ", "ゲツ"], 0, "ひと significa pessoa e é uma leitura Kun'yomi de 人."],
      ["Um mesmo kanji pode ter mais de uma leitura?", ["Sim, dependendo da palavra e do contexto", "Não, cada kanji tem sempre uma única leitura", "Somente quando está em katakana", "Somente em nomes estrangeiros"], 0, "Muitos kanji possuem diversas leituras."],
      ["Qual afirmação sobre On'yomi está correta?", ["É frequentemente encontrada em palavras compostas de kanji", "É sempre a única leitura possível", "É usada apenas em frases interrogativas", "É o nome do radical"], 0, "Leituras On'yomi são comuns em compostos de kanji."],
      ["Qual afirmação sobre Kun'yomi está correta?", ["Pode aparecer em palavras japonesas nativas", "É sempre escrita em katakana", "Nunca aparece com hiragana", "É usada somente para números"], 0, "Kun'yomi aparece frequentemente em palavras japonesas nativas."],
      ["Por que é importante estudar as leituras dentro de palavras?", ["Porque a leitura de um kanji pode mudar conforme a palavra", "Porque todos os kanji são pronunciados da mesma maneira", "Porque as leituras não possuem relação com o significado", "Porque palavras não usam kanji"], 0, "Aprender exemplos concretos evita decorar leituras sem saber quando utilizá-las."]
    ]),
    5: buildQuestions(21, 5, [
      ["Qual é a leitura de 山 em やま?", ["YAMA", "SAN", "KAWA", "HITO"], 0, "やま é uma leitura Kun'yomi de 山."],
      ["Qual é uma leitura On'yomi de 山?", ["サン", "やま", "かわ", "みず"], 0, "サン é uma leitura On'yomi comum de 山."],
      ["Qual é a leitura de 川?", ["かわ", "やま", "ひと", "みず"], 0, "かわ é uma leitura Kun'yomi de 川."],
      ["Qual é uma leitura de 水?", ["みず", "やま", "ひと", "き"], 0, "みず é uma leitura Kun'yomi de 水."],
      ["Qual é uma leitura Kun'yomi de 木?", ["き", "もく", "にち", "じん"], 0, "き significa árvore ou madeira."],
      ["Qual é o significado de 学?", ["Estudo ou aprendizagem", "Pessoa", "Fogo", "Rio"], 0, "学 está relacionado a estudar e aprender."],
      ["Qual é o significado de 生?", ["Vida, nascimento ou viver", "Montanha", "Boca", "Água"], 0, "生 possui diversos significados relacionados à vida e ao nascimento."],
      ["Qual é o significado de 先生?", ["Professor", "Estudante", "Amigo", "Médico"], 0, "先生 é uma palavra composta que significa professor."],
      ["Qual é a leitura de 学生?", ["がくせい", "せんせい", "にほん", "やまかわ"], 0, "学生 é lido がくせい e significa estudante."],
      ["Qual é a leitura de 日本?", ["にほん", "がくせい", "せんせい", "ひと"], 0, "日本 é uma forma comum de escrever Japão."]
    ]),
    6: buildQuestions(21, 6, [
      ["Qual é o significado de 日本?", ["Japão", "China", "Brasil", "Escola"], 0, "日本 significa Japão."],
      ["Qual é o significado de 学生?", ["Estudante", "Professor", "Pessoa", "Montanha"], 0, "学生 significa estudante."],
      ["Qual é o significado de 先生?", ["Professor", "Estudante", "Amigo", "Criança"], 0, "先生 significa professor."],
      ["Qual leitura corresponde a 人?", ["ひと", "やま", "かわ", "き"], 0, "ひと significa pessoa."],
      ["Qual leitura corresponde a 山?", ["やま", "ひと", "みず", "ひ"], 0, "やま significa montanha."],
      ["Qual leitura corresponde a 日?", ["ひ", "き", "みず", "かわ"], 0, "ひ é uma leitura de 日."],
      ["Qual é o objetivo de conhecer On'yomi e Kun'yomi?", ["Entender como um kanji pode ser lido em palavras diferentes", "Eliminar a necessidade de aprender vocabulário", "Substituir o hiragana", "Aprender somente nomes próprios"], 0, "As leituras ajudam a interpretar kanji em diferentes palavras."],
      ["Qual grupo contém somente kanji?", ["人 山 川 水", "ねこ いぬ みず", "パン テレビ カメラ", "あ い う え"], 0, "Todos os quatro caracteres são kanji."],
      ["Qual estratégia combina melhor com o estudo de kanji?", ["Estudar caracteres dentro de palavras e frases", "Memorizar somente a aparência", "Ignorar a pronúncia", "Estudar sem revisar"], 0, "O contexto ajuda a fixar significado, leitura e uso."],
      ["O que a semana 21 introduz?", ["Conceitos, radicais, leituras e primeiros kanji", "Somente katakana", "Somente verbos no passado", "A escrita em romaji"], 0, "A semana apresenta os fundamentos do sistema de kanji."]
    ])
  },
  recovery: buildRecovery(21, [
    ["O que são kanji?", ["Caracteres que representam ideias e partes de palavras", "Letras romanas", "Sinais de pontuação", "Somente números"], 0, "Kanji são caracteres usados na escrita japonesa."],
    ["O que é On'yomi?", ["Leitura de origem chinesa adaptada", "Leitura japonesa nativa", "Radical de água", "Forma de katakana"], 0, "On'yomi é uma leitura de origem chinesa."],
    ["O que é Kun'yomi?", ["Leitura japonesa associada ao significado", "Leitura chinesa exclusivamente", "Sinal de vogal longa", "Partícula gramatical"], 0, "Kun'yomi é a leitura japonesa nativa."],
    ["Qual é o significado de 山?", ["Montanha", "Água", "Pessoa", "Fogo"], 0, "山 significa montanha."],
    ["Qual é a leitura de 学生?", ["がくせい", "せんせい", "にほん", "やま"], 0, "学生 significa estudante e é lido がくせい."]
  ])
},

22: {
  days: {
    1: buildQuestions(22, 1, [
      ["Qual kanji representa o número um?", ["一", "二", "三", "四"], 0, "一 representa o número um."],
      ["Qual kanji representa o número dois?", ["二", "一", "三", "五"], 0, "二 representa o número dois."],
      ["Qual kanji representa o número três?", ["三", "二", "四", "六"], 0, "三 representa o número três."],
      ["Qual kanji representa o número quatro?", ["四", "五", "六", "七"], 0, "四 representa o número quatro."],
      ["Qual kanji representa o número cinco?", ["五", "四", "三", "二"], 0, "五 representa o número cinco."],
      ["Qual kanji representa o número seis?", ["六", "七", "八", "九"], 0, "六 representa o número seis."],
      ["Qual kanji representa o número sete?", ["七", "六", "八", "九"], 0, "七 representa o número sete."],
      ["Qual kanji representa o número oito?", ["八", "九", "十", "七"], 0, "八 representa o número oito."],
      ["Qual kanji representa o número nove?", ["九", "八", "十", "六"], 0, "九 representa o número nove."],
      ["Qual kanji representa o número dez?", ["十", "九", "八", "七"], 0, "十 representa o número dez."]
    ]),
    2: buildQuestions(22, 2, [
      ["Qual é a leitura de 一 em いち?", ["いち", "に", "さん", "ご"], 0, "いち é uma leitura comum de 一."],
      ["Qual é a leitura de 二 em に?", ["に", "いち", "よん", "ろく"], 0, "に é uma leitura comum de 二."],
      ["Qual é a leitura de 三 em さん?", ["さん", "し", "ご", "なな"], 0, "さん é uma leitura comum de 三."],
      ["Qual é a leitura de 四 em よん?", ["よん", "ご", "ろく", "はち"], 0, "よん é uma leitura comum de 四."],
      ["Qual é a leitura de 五 em ご?", ["ご", "ろく", "なな", "きゅう"], 0, "ご é uma leitura comum de 五."],
      ["Qual é a leitura de 六 em ろく?", ["ろく", "はち", "じゅう", "さん"], 0, "ろく é uma leitura comum de 六."],
      ["Qual é a leitura de 七 em なな?", ["なな", "きゅう", "ご", "よん"], 0, "なな é uma leitura comum de 七."],
      ["Qual é a leitura de 八 em はち?", ["はち", "ろく", "じゅう", "に"], 0, "はち é uma leitura comum de 八."],
      ["Qual é a leitura de 九 em きゅう?", ["きゅう", "なな", "はち", "ご"], 0, "きゅう é uma leitura comum de 九."],
      ["Qual é a leitura de 十 em じゅう?", ["じゅう", "きゅう", "はち", "ろく"], 0, "じゅう é uma leitura comum de 十."]
    ]),
    3: buildQuestions(22, 3, [
      ["Qual kanji significa pessoa?", ["人", "子", "女", "男"], 0, "人 significa pessoa."],
      ["Qual kanji significa criança?", ["子", "人", "男", "女"], 0, "子 significa criança ou filho."],
      ["Qual kanji significa mulher?", ["女", "男", "子", "人"], 0, "女 significa mulher."],
      ["Qual kanji significa homem?", ["男", "女", "子", "人"], 0, "男 significa homem."],
      ["Qual palavra significa pessoa?", ["人", "山", "水", "火"], 0, "人 é o kanji de pessoa."],
      ["Qual é a leitura de 人 em ひと?", ["ひと", "こ", "おんな", "おとこ"], 0, "ひと é uma leitura de 人."],
      ["Qual palavra significa criança?", ["子ども", "大人", "先生", "学生"], 0, "子ども significa criança."],
      ["Qual palavra significa adulto?", ["大人", "子ども", "学生", "先生"], 0, "大人 significa adulto."],
      ["Qual é o significado de 女の人?", ["Mulher", "Homem", "Criança", "Professor"], 0, "女の人 significa mulher."],
      ["Qual é o significado de 男の人?", ["Homem", "Mulher", "Criança", "Estudante"], 0, "男の人 significa homem."]
    ]),
    4: buildQuestions(22, 4, [
      ["Qual kanji significa sol ou dia?", ["日", "月", "火", "水"], 0, "日 significa sol ou dia."],
      ["Qual kanji significa lua ou mês?", ["月", "日", "木", "金"], 0, "月 significa lua ou mês."],
      ["Qual kanji significa fogo?", ["火", "水", "土", "木"], 0, "火 significa fogo."],
      ["Qual kanji significa água?", ["水", "火", "金", "土"], 0, "水 significa água."],
      ["Qual kanji significa árvore?", ["木", "金", "土", "日"], 0, "木 significa árvore ou madeira."],
      ["Qual kanji significa montanha?", ["山", "川", "田", "石"], 0, "山 significa montanha."],
      ["Qual kanji significa rio?", ["川", "山", "木", "月"], 0, "川 significa rio."],
      ["Qual kanji significa terra ou solo?", ["土", "火", "水", "金"], 0, "土 significa terra ou solo."],
      ["Qual kanji significa ouro ou metal?", ["金", "木", "水", "火"], 0, "金 significa ouro ou metal e também aparece em palavras relacionadas a dinheiro."],
      ["Qual grupo contém apenas elementos da natureza?", ["山 川 水 火", "人 子 女 男", "一 二 三 四", "学 校 先 生"], 0, "Montanha, rio, água e fogo são elementos ou aspectos da natureza."]
    ]),
    5: buildQuestions(22, 5, [
      ["Qual kanji aparece em 月曜日?", ["月", "火", "水", "木"], 0, "月曜日 significa segunda-feira."],
      ["Qual kanji aparece em 火曜日?", ["火", "水", "木", "金"], 0, "火曜日 significa terça-feira."],
      ["Qual kanji aparece em 水曜日?", ["水", "木", "金", "土"], 0, "水曜日 significa quarta-feira."],
      ["Qual kanji aparece em 木曜日?", ["木", "金", "土", "日"], 0, "木曜日 significa quinta-feira."],
      ["Qual kanji aparece em 金曜日?", ["金", "土", "日", "月"], 0, "金曜日 significa sexta-feira."],
      ["Qual kanji aparece em 土曜日?", ["土", "日", "月", "火"], 0, "土曜日 significa sábado."],
      ["Qual kanji aparece em 日曜日?", ["日", "月", "火", "水"], 0, "日曜日 significa domingo."],
      ["O que significa 年?", ["Ano", "Mês", "Dia", "Hora"], 0, "年 significa ano."],
      ["O que significa 時?", ["Hora", "Ano", "Pessoa", "Água"], 0, "時 aparece em expressões de horário."],
      ["O que significa 分 em expressões de tempo?", ["Minuto ou parte", "Ano", "Mês", "Semana"], 0, "分 pode indicar minutos em expressões de horário."]
    ]),
    6: buildQuestions(22, 6, [
      ["Qual é a leitura de 日本語?", ["にほんご", "がくせい", "せんせい", "にちよう"], 0, "日本語 significa língua japonesa."],
      ["Qual é o significado de 今日?", ["Hoje", "Ontem", "Amanhã", "Ano passado"], 0, "今日 significa hoje."],
      ["Qual é o significado de 明日?", ["Amanhã", "Hoje", "Ontem", "Mês passado"], 0, "明日 significa amanhã."],
      ["Qual é o significado de 昨日?", ["Ontem", "Hoje", "Amanhã", "Semana que vem"], 0, "昨日 significa ontem."],
      ["Qual é o significado de 毎日?", ["Todos os dias", "Todos os meses", "Amanhã", "Ontem"], 0, "毎日 significa todos os dias."],
      ["Qual é o significado de 時間?", ["Tempo ou duração", "Pessoa", "Escola", "Árvore"], 0, "時間 significa tempo ou período de tempo."],
      ["Qual kanji representa o ano?", ["年", "月", "日", "時"], 0, "年 significa ano."],
      ["Qual kanji representa o mês?", ["月", "年", "日", "人"], 0, "月 significa mês."],
      ["Qual palavra significa segunda-feira?", ["月曜日", "日曜日", "金曜日", "水曜日"], 0, "月曜日 é segunda-feira."],
      ["Qual é o objetivo da semana 22?", ["Aprender kanji de números, pessoas, natureza e tempo", "Aprender somente katakana", "Estudar apenas adjetivos", "Aprender somente nomes de animais"], 0, "A semana reúne kanji fundamentais do cotidiano."]
    ])
  },
  recovery: buildRecovery(22, [
    ["Qual kanji representa três?", ["三", "二", "四", "五"], 0, "三 representa três."],
    ["Qual kanji significa pessoa?", ["人", "山", "水", "日"], 0, "人 significa pessoa."],
    ["Qual kanji significa água?", ["水", "火", "木", "土"], 0, "水 significa água."],
    ["Qual palavra significa hoje?", ["今日", "明日", "昨日", "毎日"], 0, "今日 significa hoje."],
    ["Qual palavra significa domingo?", ["日曜日", "月曜日", "火曜日", "水曜日"], 0, "日曜日 significa domingo."]
  ])
},

23: {
  days: {
    1: buildQuestions(23, 1, [
      ["Qual kanji significa escola?", ["校", "山", "川", "水"], 0, "校 aparece em palavras relacionadas à escola."],
      ["Qual kanji significa estudo ou aprendizagem?", ["学", "人", "火", "月"], 0, "学 está relacionado a aprender e estudar."],
      ["Qual palavra significa escola?", ["学校", "学生", "先生", "日本"], 0, "学校 é lido がっこう e significa escola."],
      ["Qual palavra significa estudante?", ["学生", "学校", "先生", "時間"], 0, "学生 é lido がくせい e significa estudante."],
      ["Qual palavra significa professor?", ["先生", "学生", "学校", "子ども"], 0, "先生 é lido せんせい e significa professor."],
      ["Qual palavra significa universidade?", ["大学", "学校", "先生", "学生"], 0, "大学 é lido だいがく e significa universidade."],
      ["Qual é o significado de 本?", ["Livro", "Água", "Pessoa", "Fogo"], 0, "本 significa livro ou origem, dependendo do contexto."],
      ["Qual palavra significa livro?", ["本", "木", "日", "月"], 0, "本 pode ser lido ほん e significa livro."],
      ["Qual palavra significa biblioteca?", ["図書館", "学校", "大学", "家"], 0, "図書館 significa biblioteca."],
      ["Qual kanji está presente em 学校?", ["学", "水", "火", "山"], 0, "学校 contém 学 e 校."]
    ]),
    2: buildQuestions(23, 2, [
      ["Qual kanji significa casa ou lar?", ["家", "校", "本", "山"], 0, "家 significa casa ou família."],
      ["Qual é uma leitura de 家?", ["いえ", "やま", "かわ", "みず"], 0, "いえ é uma leitura de 家."],
      ["Qual palavra significa família?", ["家族", "学校", "学生", "時間"], 0, "家族 significa família."],
      ["Qual kanji significa dentro?", ["中", "外", "上", "下"], 0, "中 significa dentro, meio ou centro."],
      ["Qual kanji significa fora?", ["外", "中", "上", "下"], 0, "外 significa fora ou exterior."],
      ["Qual kanji significa cima?", ["上", "下", "中", "外"], 0, "上 significa cima ou acima."],
      ["Qual kanji significa baixo?", ["下", "上", "中", "外"], 0, "下 significa baixo ou abaixo."],
      ["Qual palavra significa quarto ou cômodo?", ["部屋", "家族", "学校", "本"], 0, "部屋 significa quarto ou cômodo."],
      ["Qual palavra significa casa como edifício ou lar?", ["家", "人", "日", "水"], 0, "家 pode ser lido いえ e significa casa."],
      ["Qual palavra significa dentro da casa?", ["家の中", "家の外", "学校の上", "本の下"], 0, "家の中 significa dentro de casa."]
    ]),
    3: buildQuestions(23, 3, [
      ["Qual kanji significa comer?", ["食", "飲", "見", "行"], 0, "食 está relacionado a comer e comida."],
      ["Qual kanji significa beber?", ["飲", "食", "読", "書"], 0, "飲 está relacionado a beber."],
      ["Qual palavra significa comida ou alimento?", ["食べ物", "飲み物", "学校", "家族"], 0, "食べ物 significa comida ou alimento."],
      ["Qual palavra significa bebida?", ["飲み物", "食べ物", "本", "先生"], 0, "飲み物 significa bebida."],
      ["Qual é a leitura de 食べる?", ["たべる", "のむ", "みる", "よむ"], 0, "食べる significa comer."],
      ["Qual é a leitura de 飲む?", ["のむ", "たべる", "かく", "いく"], 0, "飲む significa beber."],
      ["Qual kanji significa arroz cozido ou refeição?", ["飯", "水", "火", "木"], 0, "飯 aparece em palavras relacionadas a arroz cozido e refeições."],
      ["Qual palavra significa café da manhã?", ["朝ご飯", "晩ご飯", "飲み物", "食べ物"], 0, "朝ご飯 significa café da manhã."],
      ["Qual palavra significa jantar?", ["晩ご飯", "朝ご飯", "昼", "水"], 0, "晩ご飯 significa jantar."],
      ["Qual frase significa 'comer comida'?", ["食べ物を食べる", "飲み物を飲む", "本を読む", "学校へ行く"], 0, "食べ物を食べる significa comer comida."]
    ]),
    4: buildQuestions(23, 4, [
      ["Qual kanji significa país?", ["国", "店", "駅", "道"], 0, "国 significa país."],
      ["Qual palavra significa Japão?", ["日本", "学校", "家族", "時間"], 0, "日本 significa Japão."],
      ["Qual palavra significa país estrangeiro?", ["外国", "学校", "家", "本"], 0, "外国 significa país estrangeiro."],
      ["Qual kanji significa loja?", ["店", "国", "駅", "道"], 0, "店 significa loja."],
      ["Qual kanji significa estação?", ["駅", "店", "国", "山"], 0, "駅 aparece em palavras relacionadas a estações de trem."],
      ["Qual kanji significa caminho ou estrada?", ["道", "店", "国", "本"], 0, "道 significa caminho ou estrada."],
      ["Qual palavra significa hospital?", ["病院", "学校", "図書館", "駅"], 0, "病院 significa hospital."],
      ["Qual palavra significa parque?", ["公園", "病院", "学校", "店"], 0, "公園 significa parque."],
      ["Qual palavra significa estação de trem?", ["駅", "家", "本", "国"], 0, "駅 significa estação."],
      ["Qual palavra significa loja de livros?", ["本屋", "病院", "公園", "学校"], 0, "本屋 significa livraria."]
    ]),
    5: buildQuestions(23, 5, [
      ["Qual kanji significa ver?", ["見", "聞", "読", "書"], 0, "見 está relacionado a ver."],
      ["Qual kanji significa ouvir?", ["聞", "見", "食", "飲"], 0, "聞 está relacionado a ouvir."],
      ["Qual kanji significa ler?", ["読", "書", "見", "行"], 0, "読 está relacionado a ler."],
      ["Qual kanji significa escrever?", ["書", "読", "聞", "見"], 0, "書 está relacionado a escrever."],
      ["Qual palavra significa jornal?", ["新聞", "本屋", "学校", "家族"], 0, "新聞 significa jornal."],
      ["Qual palavra significa relógio?", ["時計", "学校", "病院", "本"], 0, "時計 significa relógio."],
      ["Qual kanji significa carro?", ["車", "駅", "店", "道"], 0, "車 significa veículo ou carro."],
      ["Qual palavra significa telefone?", ["電話", "時計", "新聞", "学校"], 0, "電話 significa telefone."],
      ["Qual palavra significa computador?", ["コンピューター", "学校", "家族", "本"], 0, "コンピューター é escrito em katakana."],
      ["Qual palavra significa dinheiro?", ["お金", "時計", "新聞", "車"], 0, "お金 significa dinheiro."]
    ]),
    6: buildQuestions(23, 6, [
      ["Qual palavra significa biblioteca?", ["図書館", "病院", "公園", "駅"], 0, "図書館 significa biblioteca."],
      ["Qual palavra significa hospital?", ["病院", "図書館", "本屋", "学校"], 0, "病院 significa hospital."],
      ["Qual palavra significa família?", ["家族", "学生", "先生", "外国"], 0, "家族 significa família."],
      ["Qual palavra significa bebida?", ["飲み物", "食べ物", "新聞", "時計"], 0, "飲み物 significa bebida."],
      ["Qual palavra significa telefone?", ["電話", "本", "家", "道"], 0, "電話 significa telefone."],
      ["Qual frase significa 'vou à escola'?", ["学校へ行きます", "学校を食べます", "学校を飲みます", "学校が読みます"], 0, "学校へ行きます significa ir à escola."],
      ["Qual frase significa 'leio um livro'?", ["本を読みます", "本を飲みます", "本へ行きます", "本を食べます"], 0, "本を読みます significa ler um livro."],
      ["Qual frase significa 'bebo água'?", ["水を飲みます", "水を読みます", "水へ行きます", "水を書きます"], 0, "水を飲みます significa beber água."],
      ["Qual frase significa 'vejo um filme'?", ["映画を見ます", "映画を飲みます", "映画を食べます", "映画へ行きます"], 0, "映画を見ます significa assistir a um filme."],
      ["Qual é o objetivo da semana 23?", ["Reconhecer kanji ligados à escola, casa, comida, lugares e objetos", "Estudar somente números", "Aprender apenas hiragana", "Estudar somente verbos no futuro"], 0, "A semana amplia o vocabulário de kanji do cotidiano."]
    ])
  },
  recovery: buildRecovery(23, [
    ["Qual palavra significa escola?", ["学校", "家族", "日本", "時間"], 0, "学校 significa escola."],
    ["Qual palavra significa família?", ["家族", "学生", "先生", "本"], 0, "家族 significa família."],
    ["Qual kanji significa comer?", ["食", "飲", "見", "書"], 0, "食 está relacionado a comer."],
    ["Qual palavra significa hospital?", ["病院", "図書館", "本屋", "公園"], 0, "病院 significa hospital."],
    ["Qual frase significa 'leio um livro'?", ["本を読みます", "本を飲みます", "本を食べます", "本へ行きます"], 0, "本を読みます significa ler um livro."]
  ])
},

24: {
  days: {
    1: buildQuestions(24, 1, [
      ["O que significa 日本語?", ["Língua japonesa", "Pessoa japonesa", "Escola japonesa", "Livro japonês"], 0, "日本語 significa língua japonesa."],
      ["Qual é a leitura de 日本語?", ["にほんご", "にほんじん", "にちようび", "がくせい"], 0, "日本語 é lido にほんご."],
      ["O que significa 日本人?", ["Pessoa japonesa", "Língua japonesa", "Professor", "Estudante"], 0, "日本人 significa pessoa japonesa."],
      ["Qual é a leitura de 日本人?", ["にほんじん", "にほんご", "がくせい", "せんせい"], 0, "日本人 é lido にほんじん."],
      ["O que significa 外国語?", ["Língua estrangeira", "País estrangeiro", "Professor", "Escola"], 0, "外国語 significa língua estrangeira."],
      ["Qual kanji representa língua ou idioma?", ["語", "人", "山", "水"], 0, "語 aparece em palavras relacionadas a idiomas e linguagem."],
      ["O que significa 英語?", ["Língua inglesa", "Língua japonesa", "Pessoa inglesa", "Escola"], 0, "英語 significa inglês como idioma."],
      ["O que significa 中国語?", ["Língua chinesa", "Pessoa chinesa", "País japonês", "Língua inglesa"], 0, "中国語 significa idioma chinês."],
      ["Qual palavra significa estudante japonês?", ["日本人の学生", "日本語の本", "外国語の学校", "日本の水"], 0, "日本人の学生 significa estudante japonês."],
      ["Por que estudar palavras compostas de kanji?", ["Porque os kanji aparecem juntos formando vocabulário", "Porque cada kanji sempre aparece sozinho", "Porque compostos não possuem significado", "Porque substituem todas as frases"], 0, "Muitas palavras japonesas são formadas pela combinação de kanji."]
    ]),
    2: buildQuestions(24, 2, [
      ["O que significa 大学?", ["Universidade", "Escola primária", "Hospital", "Biblioteca"], 0, "大学 significa universidade."],
      ["Qual é a leitura de 大学?", ["だいがく", "がくせい", "せんせい", "にほんご"], 0, "大学 é lido だいがく."],
      ["O que significa 小学校?", ["Escola primária", "Universidade", "Hospital", "Biblioteca"], 0, "小学校 significa escola primária."],
      ["O que significa 中学校?", ["Escola de nível fundamental intermediário", "Universidade", "Casa", "Estação"], 0, "中学校 é uma etapa escolar japonesa."],
      ["O que significa 高校?", ["Ensino médio", "Universidade", "Biblioteca", "Hospital"], 0, "高校 é uma forma abreviada de 高等学校, ensino médio."],
      ["O que significa 先生?", ["Professor", "Estudante", "Criança", "Amigo"], 0, "先生 significa professor."],
      ["O que significa 学生?", ["Estudante", "Professor", "Escola", "Livro"], 0, "学生 significa estudante."],
      ["O que significa 友達?", ["Amigo", "Professor", "Estudante", "Família"], 0, "友達 significa amigo."],
      ["Qual palavra significa família?", ["家族", "学校", "大学", "外国"], 0, "家族 significa família."],
      ["Qual frase significa 'sou estudante'?", ["学生です", "先生です", "学校です", "大学です"], 0, "学生です significa sou estudante ou é estudante, conforme o contexto."]
    ]),
    3: buildQuestions(24, 3, [
      ["O que significa 火山?", ["Vulcão", "Rio", "Floresta", "Mar"], 0, "火山 combina fogo e montanha, significando vulcão."],
      ["Qual é a leitura de 火山?", ["かざん", "やまび", "みずやま", "かわ"], 0, "火山 é lido かざん."],
      ["O que significa 海?", ["Mar", "Montanha", "Fogo", "Árvore"], 0, "海 significa mar."],
      ["O que significa 森?", ["Floresta", "Rio", "Pessoa", "Sol"], 0, "森 significa floresta."],
      ["O que significa 林?", ["Bosque", "Mar", "Fogo", "Lua"], 0, "林 significa bosque ou pequeno conjunto de árvores."],
      ["O que significa 花?", ["Flor", "Árvore", "Água", "Montanha"], 0, "花 significa flor."],
      ["O que significa 天気?", ["Clima ou tempo atmosférico", "Horário", "Comida", "Escola"], 0, "天気 significa clima ou condições do tempo."],
      ["Qual palavra significa chuva?", ["雨", "雪", "花", "森"], 0, "雨 significa chuva."],
      ["Qual palavra significa neve?", ["雪", "雨", "海", "火"], 0, "雪 significa neve."],
      ["Qual frase significa 'o clima está bom'?", ["天気がいいです", "天気を食べます", "天気に読みます", "天気が行きます"], 0, "天気がいいです significa o clima está bom."]
    ]),
    4: buildQuestions(24, 4, [
      ["O que significa 毎日?", ["Todos os dias", "Toda semana", "Todo mês", "Todo ano"], 0, "毎日 significa todos os dias."],
      ["O que significa 毎週?", ["Toda semana", "Todos os dias", "Todo mês", "Todo ano"], 0, "毎週 significa toda semana."],
      ["O que significa 毎月?", ["Todo mês", "Todo dia", "Toda semana", "Todo ano"], 0, "毎月 significa todo mês."],
      ["O que significa 毎年?", ["Todo ano", "Todo mês", "Toda semana", "Todo dia"], 0, "毎年 significa todo ano."],
      ["O que significa 今年?", ["Este ano", "Ano passado", "Próximo ano", "Todo ano"], 0, "今年 significa este ano."],
      ["O que significa 去年?", ["Ano passado", "Este ano", "Próximo ano", "Todo ano"], 0, "去年 significa ano passado."],
      ["O que significa 来年?", ["Próximo ano", "Ano passado", "Este ano", "Todo mês"], 0, "来年 significa próximo ano."],
      ["O que significa 今月?", ["Este mês", "Mês passado", "Próximo mês", "Todo mês"], 0, "今月 significa este mês."],
      ["O que significa 先週?", ["Semana passada", "Esta semana", "Próxima semana", "Todo dia"], 0, "先週 significa semana passada."],
      ["Qual frase significa 'estudo japonês todos os dias'?", ["毎日日本語を勉強します", "去年日本語を食べます", "来年学校を飲みます", "毎月日本語へ寝ます"], 0, "毎日日本語を勉強します significa estudar japonês todos os dias."]
    ]),
    5: buildQuestions(24, 5, [
      ["O que significa 読書?", ["Leitura de livros", "Escrita de cartas", "Comida", "Viagem"], 0, "読書 significa leitura ou hábito de ler."],
      ["O que significa 電車?", ["Trem elétrico", "Carro", "Bicicleta", "Avião"], 0, "電車 significa trem elétrico."],
      ["O que significa 自転車?", ["Bicicleta", "Trem", "Ônibus", "Telefone"], 0, "自転車 significa bicicleta."],
      ["O que significa 自動車?", ["Automóvel", "Bicicleta", "Trem", "Livro"], 0, "自動車 significa automóvel."],
      ["O que significa 新聞?", ["Jornal", "Livro", "Revista", "Carta"], 0, "新聞 significa jornal."],
      ["O que significa 電話?", ["Telefone", "Relógio", "Computador", "Câmera"], 0, "電話 significa telefone."],
      ["O que significa 時計?", ["Relógio", "Telefone", "Jornal", "Carro"], 0, "時計 significa relógio."],
      ["O que significa 映画?", ["Filme", "Música", "Livro", "Jogo"], 0, "映画 significa filme."],
      ["O que significa 音楽?", ["Música", "Filme", "Livro", "Escola"], 0, "音楽 significa música."],
      ["O que significa 写真?", ["Fotografia", "Filme", "Música", "Carta"], 0, "写真 significa fotografia."]
    ]),
    6: buildQuestions(24, 6, [
      ["Qual é a leitura de 電車?", ["でんしゃ", "じてんしゃ", "じどうしゃ", "でんわ"], 0, "電車 é lido でんしゃ."],
      ["Qual é a leitura de 自転車?", ["じてんしゃ", "でんしゃ", "でんわ", "しんぶん"], 0, "自転車 é lido じてんしゃ."],
      ["Qual é a leitura de 映画?", ["えいが", "おんがく", "しゃしん", "どくしょ"], 0, "映画 é lido えいが."],
      ["Qual é a leitura de 音楽?", ["おんがく", "えいが", "しんぶん", "でんしゃ"], 0, "音楽 é lido おんがく."],
      ["Qual é a leitura de 写真?", ["しゃしん", "おんがく", "えいが", "じてんしゃ"], 0, "写真 é lido しゃしん."],
      ["Qual é a leitura de 毎日?", ["まいにち", "まいしゅう", "まいつき", "まいとし"], 0, "毎日 é lido まいにち."],
      ["Qual palavra significa 'todo ano'?", ["毎年", "毎日", "毎週", "毎月"], 0, "毎年 significa todo ano."],
      ["Qual palavra significa 'telefone'?", ["電話", "電車", "自転車", "新聞"], 0, "電話 significa telefone."],
      ["Qual frase significa 'vou de trem'?", ["電車で行きます", "電車を食べます", "電車を読みます", "電車が飲みます"], 0, "電車で行きます significa ir de trem."],
      ["Qual é o objetivo da semana 24?", ["Aprender vocabulário formado por combinações de kanji", "Decorar kanji sem palavras", "Estudar somente números", "Abandonar a leitura de frases"], 0, "A semana prioriza palavras completas, não apenas caracteres isolados."]
    ])
  },
  recovery: buildRecovery(24, [
    ["O que significa 日本語?", ["Língua japonesa", "Pessoa japonesa", "Universidade", "Livro"], 0, "日本語 significa língua japonesa."],
    ["O que significa 火山?", ["Vulcão", "Rio", "Floresta", "Mar"], 0, "火山 significa vulcão."],
    ["O que significa 毎週?", ["Toda semana", "Todo dia", "Todo mês", "Todo ano"], 0, "毎週 significa toda semana."],
    ["O que significa 電車?", ["Trem elétrico", "Telefone", "Automóvel", "Bicicleta"], 0, "電車 significa trem elétrico."],
    ["Qual é a leitura de 映画?", ["えいが", "おんがく", "しゃしん", "しんぶん"], 0, "映画 é lido えいが."]
  ])
},

25: {
  days: {
    1: buildQuestions(25, 1, [
      ["Qual frase significa 'eu leio um livro'?", ["私は本を読みます", "私は本を飲みます", "私は本を食べます", "私は本へ行きます"], 0, "私 significa eu, 本 significa livro e 読みます significa ler."],
      ["Qual parte significa 'eu' em 私は本を読みます?", ["私", "本", "読みます", "を"], 0, "私 é uma forma de dizer eu."],
      ["Qual parte significa 'livro'?", ["本", "私", "読みます", "は"], 0, "本 significa livro."],
      ["Qual parte indica a ação de ler?", ["読みます", "私", "本", "は"], 0, "読みます significa ler."],
      ["Qual é a função de は nessa frase?", ["Marcar o tópico da frase", "Indicar o objeto direto", "Indicar passado", "Indicar plural"], 0, "は marca o tópico sobre o qual a frase fala."],
      ["Qual é a função de を?", ["Marcar o objeto da ação", "Marcar o tópico", "Indicar lugar", "Indicar tempo"], 0, "を marca o objeto do verbo 読みます."],
      ["Qual frase significa 'o estudante estuda japonês'?", ["学生は日本語を勉強します", "学生は日本語を飲みます", "学生は日本語を食べます", "学生は日本語へ寝ます"], 0, "学生 significa estudante e 日本語 significa língua japonesa."],
      ["Qual palavra está em katakana na frase 私はテレビを見ます?", ["テレビ", "私", "見ます", "は"], 0, "テレビ está escrito em katakana."],
      ["Qual parte está em kanji na frase 私はテレビを見ます?", ["私 e 見", "テレビ e を", "は e を", "Somente ます"], 0, "私 e 見 são kanji."],
      ["Qual sistema aparece em ます na frase?", ["Hiragana", "Katakana", "Kanji", "Romaji"], 0, "ます está escrito em hiragana."]
    ]),
    2: buildQuestions(25, 2, [
      ["Qual frase significa 'hoje vou à escola'?", ["今日は学校へ行きます", "昨日は学校へ行きました", "明日は学校を食べます", "今日は学校を飲みます"], 0, "今日 significa hoje, 学校 significa escola e 行きます significa ir."],
      ["Qual é o significado de 今日?", ["Hoje", "Ontem", "Amanhã", "Semana passada"], 0, "今日 significa hoje."],
      ["Qual é o significado de 学校?", ["Escola", "Casa", "Hospital", "Biblioteca"], 0, "学校 significa escola."],
      ["Qual é o significado de 行きます?", ["Vou ou vai", "Como ou come", "Leio ou lê", "Bebo ou bebe"], 0, "行きます é a forma educada de ir."],
      ["Qual frase significa 'ontem fui à biblioteca'?", ["昨日は図書館へ行きました", "今日は学校へ行きます", "明日は家にいます", "毎日は本を読みます"], 0, "昨日 significa ontem, 図書館 significa biblioteca e 行きました indica passado."],
      ["Qual palavra significa ontem?", ["昨日", "今日", "明日", "毎日"], 0, "昨日 significa ontem."],
      ["Qual palavra significa biblioteca?", ["図書館", "学校", "病院", "公園"], 0, "図書館 significa biblioteca."],
      ["Qual frase significa 'amanhã vou ao parque'?", ["明日は公園へ行きます", "昨日は公園へ行きました", "今日の本を読みます", "明日は水を飲みました"], 0, "明日 significa amanhã e 公園 significa parque."],
      ["Qual sistema está presente em 明日は公園へ行きます?", ["Kanji e hiragana", "Somente katakana", "Somente kanji", "Somente hiragana"], 0, "A frase mistura kanji com partículas e terminações em hiragana."],
      ["Por que o hiragana aparece depois de alguns kanji?", ["Para formar terminações gramaticais e completar palavras", "Para transformar kanji em katakana", "Para representar somente números", "Para eliminar a pronúncia"], 0, "Terminações em hiragana ajudam a indicar gramática e flexões."]
    ]),
    3: buildQuestions(25, 3, [
      ["Qual frase significa 'como pão'?", ["パンを食べます", "パンを読みます", "パンを見ます", "パンへ行きます"], 0, "パン significa pão e 食べます significa comer."],
      ["Qual frase significa 'bebo água'?", ["水を飲みます", "水を食べます", "水を読みます", "水を見ます"], 0, "水 significa água e 飲みます significa beber."],
      ["Qual frase significa 'assisto a um filme'?", ["映画を見ます", "映画を飲みます", "映画を食べます", "映画を読みます"], 0, "映画 significa filme e 見ます significa ver ou assistir."],
      ["Qual frase significa 'ouço música'?", ["音楽を聞きます", "音楽を食べます", "音楽を飲みます", "音楽へ行きます"], 0, "音楽 significa música e 聞きます significa ouvir."],
      ["Qual palavra está em katakana na frase パンを食べます?", ["パン", "を", "食べます", "Nenhuma"], 0, "パン está em katakana."],
      ["Qual palavra está em kanji na frase パンを食べます?", ["食", "パン", "を", "Nenhuma"], 0, "食 é o kanji presente em 食べます."],
      ["Qual frase significa 'quero beber café'?", ["コーヒーを飲みたいです", "コーヒーを食べました", "コーヒーを読みます", "コーヒーへ行きます"], 0, "コーヒー significa café e 飲みたいです expressa desejo de beber."],
      ["Qual frase significa 'comi sorvete ontem'?", ["昨日アイスを食べました", "明日アイスを食べます", "アイスを飲みたいです", "今日アイスを見ます"], 0, "昨日 indica ontem e 食べました indica passado."],
      ["Qual é a função de を em 水を飲みます?", ["Indicar que água é o objeto da ação", "Indicar que água é o tópico", "Indicar passado", "Indicar uma pergunta"], 0, "を marca o objeto direto do verbo."],
      ["Qual frase combina corretamente kanji, hiragana e katakana?", ["私はパンを食べます", "私パン食べますを", "私はパン食べますを", "私をパンは食べます"], 0, "A frase mistura kanji, katakana e hiragana de maneira correta."]
    ]),
    4: buildQuestions(25, 4, [
      ["Qual frase significa 'o professor lê um livro'?", ["先生は本を読みます", "先生は本を飲みます", "先生は本を食べます", "先生は本へ行きます"], 0, "先生 significa professor e 本を読みます significa ler um livro."],
      ["Qual frase significa 'o estudante escreve uma carta'?", ["学生は手紙を書きます", "学生は手紙を飲みます", "学生は手紙を食べます", "学生は手紙へ寝ます"], 0, "学生 significa estudante e 書きます significa escrever."],
      ["Qual é o significado de 手紙?", ["Carta", "Livro", "Jornal", "Telefone"], 0, "手紙 significa carta."],
      ["Qual é o significado de 書きます?", ["Escreve", "Lê", "Come", "Bebe"], 0, "書きます significa escrever."],
      ["Qual frase significa 'minha família mora no Japão'?", ["私の家族は日本に住んでいます", "私の家族は日本を食べます", "私の家族は日本を読みます", "私の家族は日本で飲みます"], 0, "家族 significa família, 日本 significa Japão e 住んでいます significa morar."],
      ["Qual é o significado de 住んでいます?", ["Mora ou está morando", "Está comendo", "Está lendo", "Está escrevendo"], 0, "住んでいます é uma forma de expressar residência."],
      ["Qual frase significa 'meu amigo gosta de música'?", ["友達は音楽が好きです", "友達は音楽を食べます", "友達は音楽に寝ます", "友達は音楽を読みます"], 0, "友達 significa amigo e 音楽が好きです significa gostar de música."],
      ["Qual é o significado de 好き?", ["Gostar", "Comer", "Escrever", "Ir"], 0, "好き expressa gostar ou preferência."],
      ["Qual palavra está em katakana na frase 私はゲームが好きです?", ["ゲーム", "私", "好き", "です"], 0, "ゲーム está em katakana."],
      ["Qual frase apresenta kanji, hiragana e katakana?", ["友達はゲームが好きです", "ねこがいます", "水をのみます", "ほんをよみます"], 0, "友達 e 好き são kanji, は e が e です são hiragana, e ゲーム é katakana."]
    ]),
    5: buildQuestions(25, 5, [
      ["Qual frase significa 'ontem estudei japonês'?", ["昨日日本語を勉強しました", "今日日本語を勉強します", "明日日本語を勉強します", "昨日日本語を飲みます"], 0, "昨日 indica ontem e 勉強しました indica que estudou."],
      ["Qual frase significa 'amanhã vou assistir a um filme'?", ["明日映画を見ます", "昨日映画を見ました", "今日映画を食べます", "明日映画を読みます"], 0, "明日 significa amanhã e 映画を見ます significa assistir a um filme."],
      ["Qual frase significa 'quero comprar um livro'?", ["本を買いたいです", "本を読みました", "本を飲みます", "本へ行きます"], 0, "買いたいです expressa desejo de comprar."],
      ["Qual frase significa 'comprei um telefone'?", ["電話を買いました", "電話を飲みました", "電話を食べました", "電話へ行きました"], 0, "買いました é a forma passada de comprar."],
      ["Qual é o significado de 買います?", ["Comprar", "Vender", "Escrever", "Ouvir"], 0, "買います significa comprar."],
      ["Qual é o significado de 昨日?", ["Ontem", "Hoje", "Amanhã", "Todos os dias"], 0, "昨日 significa ontem."],
      ["Qual frase significa 'hoje não vou à escola'?", ["今日は学校へ行きません", "今日は学校へ行きます", "昨日は学校へ行きました", "明日は学校へ行きます"], 0, "行きません é a forma negativa educada de ir."],
      ["Qual frase significa 'estou lendo um livro'?", ["本を読んでいます", "本を読みました", "本を読みたいです", "本を買いました"], 0, "読んでいます expressa uma ação em andamento."],
      ["Qual frase significa 'estou estudando japonês'?", ["日本語を勉強しています", "日本語を勉強しました", "日本語を勉強したいです", "日本語を買いました"], 0, "勉強しています expressa estudo em andamento."],
      ["Qual é a importância de reconhecer kanji em frases?", ["Permite compreender o significado das palavras e a estrutura do texto", "Elimina a necessidade de conhecer hiragana", "Faz todas as palavras terem a mesma leitura", "Substitui o estudo de vocabulário"], 0, "A leitura depende do reconhecimento dos caracteres e de seu contexto."]
    ]),
    6: buildQuestions(25, 6, [
      ["Leia: 私は学生です。 Qual é o significado?", ["Eu sou estudante", "Eu sou professor", "Eu vou à escola", "Eu leio um livro"], 0, "私 significa eu e 学生 significa estudante."],
      ["Leia: 先生は本を読みます。 Quem lê o livro?", ["O professor", "O estudante", "O amigo", "A criança"], 0, "先生 é o sujeito da frase."],
      ["Leia: 私はパンを食べます。 O que a pessoa come?", ["Pão", "Água", "Livro", "Sorvete"], 0, "パン significa pão."],
      ["Leia: 毎日日本語を勉強します。 O que a pessoa estuda?", ["Japonês", "Inglês", "Matemática", "Música"], 0, "日本語 significa língua japonesa."],
      ["Leia: 昨日映画を見ました。 Quando a pessoa assistiu ao filme?", ["Ontem", "Hoje", "Amanhã", "Todos os dias"], 0, "昨日 significa ontem."],
      ["Leia: 明日学校へ行きます。 Para onde a pessoa vai?", ["À escola", "Ao hospital", "À biblioteca", "Ao parque"], 0, "学校 significa escola."],
      ["Leia: 私はコーヒーを飲みたいです。 O que a pessoa deseja beber?", ["Café", "Água", "Leite", "Suco"], 0, "コーヒー significa café."],
      ["Leia: 友達はゲームが好きです。 Do que o amigo gosta?", ["Jogos", "Livros", "Comida", "Escola"], 0, "ゲーム significa jogo e 好き expressa gostar."],
      ["Qual frase está corretamente escrita?", ["私は日本語を勉強します", "私は日本語を勉強をします", "私日本語はを勉強します", "私はを日本語勉強します"], 0, "A frase usa corretamente は e を."],
      ["Qual é o objetivo da semana 25?", ["Ler frases que misturam kanji, hiragana e katakana", "Aprender somente kanji isolados", "Estudar apenas romaji", "Deixar de usar hiragana"], 0, "A semana começa a aplicar os três sistemas em frases completas."]
    ])
  },
  recovery: buildRecovery(25, [
    ["Qual frase significa 'eu leio um livro'?", ["私は本を読みます", "私は本を飲みます", "私は本を食べます", "私は本へ行きます"], 0, "本 significa livro e 読みます significa ler."],
    ["Qual frase significa 'hoje vou à escola'?", ["今日は学校へ行きます", "昨日は学校へ行きました", "明日は学校を食べます", "今日は学校を飲みます"], 0, "今日 significa hoje e 学校へ行きます significa ir à escola."],
    ["Qual frase significa 'como pão'?", ["パンを食べます", "パンを読みます", "パンを見ます", "パンへ行きます"], 0, "パン significa pão e 食べます significa comer."],
    ["Qual frase significa 'ontem estudei japonês'?", ["昨日日本語を勉強しました", "今日日本語を勉強します", "明日日本語を勉強します", "昨日日本語を飲みます"], 0, "昨日 indica ontem e 勉強しました indica passado."],
    ["Quais sistemas aparecem em 私はパンを食べます?", ["Kanji, hiragana e katakana", "Somente hiragana", "Somente katakana", "Kanji e romaji"], 0, "私 e 食 são kanji, は e を e べます são hiragana, e パン é katakana."]
  ])
},


26: {
  days: {
    1: buildQuestions(26, 1, [
      ["O que significa 東?", ["Leste", "Oeste", "Norte", "Sul"], 0, "東 significa leste."],
      ["O que significa 西?", ["Oeste", "Leste", "Norte", "Sul"], 0, "西 significa oeste."],
      ["O que significa 南?", ["Sul", "Norte", "Leste", "Oeste"], 0, "南 significa sul."],
      ["O que significa 北?", ["Norte", "Sul", "Leste", "Oeste"], 0, "北 significa norte."],
      ["Qual é a leitura de 東 em ひがし?", ["ひがし", "にし", "みなみ", "きた"], 0, "ひがし é uma leitura de 東."],
      ["Qual é a leitura de 西 em にし?", ["にし", "ひがし", "きた", "みなみ"], 0, "にし é uma leitura de 西."],
      ["Qual palavra significa Tóquio?", ["東京", "大阪", "日本", "京都"], 0, "東京 é lido とうきょう e significa Tóquio."],
      ["Qual kanji aparece em 東京 para representar leste?", ["東", "京", "西", "北"], 0, "東 significa leste."],
      ["Qual palavra significa cidade grande?", ["大都市", "小学校", "学生", "毎日"], 0, "大都市 significa grande cidade ou metrópole."],
      ["Qual é o significado de 京 em palavras como 東京?", ["Capital", "Rio", "Montanha", "Pessoa"], 0, "京 está relacionado a capital."]
    ]),
    2: buildQuestions(26, 2, [
      ["O que significa 先?", ["Anterior ou antes", "Depois", "Pequeno", "Distante"], 0, "先 pode indicar algo anterior ou que vem antes."],
      ["O que significa 後?", ["Depois ou atrás", "Antes", "Dentro", "Acima"], 0, "後 pode indicar depois ou atrás."],
      ["O que significa 前?", ["Antes ou frente", "Depois", "Fora", "Abaixo"], 0, "前 significa antes ou frente."],
      ["O que significa 今?", ["Agora", "Ontem", "Amanhã", "Ano passado"], 0, "今 significa agora."],
      ["Qual palavra significa antes ou anteriormente?", ["前", "後", "今", "外"], 0, "前 significa antes ou frente."],
      ["Qual palavra significa depois?", ["後", "前", "中", "上"], 0, "後 significa depois ou atrás."],
      ["Qual é o significado de 午前?", ["Manhã ou antes do meio-dia", "Tarde", "Noite", "Meia-noite"], 0, "午前 significa período antes do meio-dia."],
      ["Qual é o significado de 午後?", ["Tarde ou depois do meio-dia", "Manhã", "Ontem", "Amanhã"], 0, "午後 significa período depois do meio-dia."],
      ["Qual palavra significa agora?", ["今", "前", "後", "先"], 0, "今 significa agora."],
      ["Qual frase significa 'agora estudo'?", ["今、勉強します", "昨日、勉強します", "明日、勉強しました", "今、学校を食べます"], 0, "今 significa agora e 勉強します significa estudar."]
    ]),
    3: buildQuestions(26, 3, [
      ["O que significa 高?", ["Alto", "Baixo", "Novo", "Antigo"], 0, "高 significa alto ou elevado."],
      ["O que significa 安?", ["Barato ou tranquilo", "Caro", "Grande", "Pequeno"], 0, "安 pode significar barato ou tranquilo, conforme o contexto."],
      ["O que significa 新?", ["Novo", "Antigo", "Pequeno", "Escuro"], 0, "新 significa novo."],
      ["O que significa 古?", ["Antigo", "Novo", "Rápido", "Alto"], 0, "古 significa antigo."],
      ["Qual palavra significa preço alto?", ["高い", "安い", "新しい", "古い"], 0, "高い significa alto ou caro."],
      ["Qual palavra significa barato?", ["安い", "高い", "古い", "新しい"], 0, "安い significa barato."],
      ["Qual palavra significa novo?", ["新しい", "古い", "高い", "安い"], 0, "新しい significa novo."],
      ["Qual palavra significa antigo?", ["古い", "新しい", "安い", "高い"], 0, "古い significa antigo."],
      ["Qual kanji aparece em 新聞?", ["新", "古", "高", "安"], 0, "新聞 significa jornal e começa com 新."],
      ["Qual frase significa 'este livro é novo'?", ["この本は新しいです", "この本は古いです", "この本は高いです", "この本は安いです"], 0, "新しい significa novo."]
    ]),
    4: buildQuestions(26, 4, [
      ["O que significa 多?", ["Muitos", "Poucos", "Um", "Nenhum"], 0, "多 significa muitos ou bastante."],
      ["O que significa 少?", ["Poucos", "Muitos", "Grande", "Pequeno"], 0, "少 significa pouco ou poucos."],
      ["O que significa 長?", ["Longo", "Curto", "Novo", "Antigo"], 0, "長 significa longo ou comprido."],
      ["O que significa 短?", ["Curto", "Longo", "Alto", "Baixo"], 0, "短 significa curto."],
      ["Qual palavra significa muitos?", ["多い", "少ない", "長い", "短い"], 0, "多い significa muitos ou bastante."],
      ["Qual palavra significa poucos?", ["少ない", "多い", "長い", "短い"], 0, "少ない significa poucos ou pouco."],
      ["Qual palavra significa longo?", ["長い", "短い", "多い", "少ない"], 0, "長い significa longo."],
      ["Qual palavra significa curto?", ["短い", "長い", "少ない", "多い"], 0, "短い significa curto."],
      ["Qual kanji representa uma grande quantidade?", ["多", "少", "短", "古"], 0, "多 representa muitos ou uma grande quantidade."],
      ["Qual frase significa 'o caminho é longo'?", ["道は長いです", "道は短いです", "道は新しいです", "道は安いです"], 0, "道 significa caminho e 長い significa longo."]
    ]),
    5: buildQuestions(26, 5, [
      ["O que significa 白?", ["Branco", "Preto", "Vermelho", "Azul"], 0, "白 significa branco."],
      ["O que significa 黒?", ["Preto", "Branco", "Verde", "Amarelo"], 0, "黒 significa preto."],
      ["O que significa 赤?", ["Vermelho", "Azul", "Branco", "Preto"], 0, "赤 significa vermelho."],
      ["O que significa 青?", ["Azul", "Vermelho", "Amarelo", "Preto"], 0, "青 significa azul."],
      ["O que significa 色?", ["Cor", "Forma", "Tamanho", "Tempo"], 0, "色 significa cor."],
      ["Qual palavra significa branco?", ["白い", "黒い", "赤い", "青い"], 0, "白い significa branco."],
      ["Qual palavra significa preto?", ["黒い", "白い", "赤い", "青い"], 0, "黒い significa preto."],
      ["Qual kanji aparece em 赤い?", ["赤", "青", "白", "黒"], 0, "赤 é o kanji de vermelho."],
      ["Qual frase significa 'a cor é azul'?", ["色は青です", "色は赤です", "色は白です", "色は黒です"], 0, "青 significa azul."],
      ["Qual palavra significa semáforo?", ["信号", "新聞", "電話", "電車"], 0, "信号 significa sinal ou semáforo."]
    ]),
    6: buildQuestions(26, 6, [
      ["Qual palavra significa Tóquio?", ["東京", "日本", "大阪", "京都"], 0, "東京 é a capital do Japão."],
      ["Qual palavra significa manhã?", ["午前", "午後", "昨日", "来年"], 0, "午前 é o período antes do meio-dia."],
      ["Qual palavra significa tarde?", ["午後", "午前", "毎日", "今年"], 0, "午後 é o período depois do meio-dia."],
      ["Qual palavra significa novo?", ["新しい", "古い", "高い", "短い"], 0, "新しい significa novo."],
      ["Qual palavra significa muitos?", ["多い", "少ない", "長い", "短い"], 0, "多い significa muitos."],
      ["Qual palavra significa branco?", ["白い", "黒い", "赤い", "青い"], 0, "白い significa branco."],
      ["Leia: 東京は日本にあります。 O que 東京 representa?", ["Tóquio", "Osaka", "Uma escola", "Uma montanha"], 0, "東京 é o nome da cidade de Tóquio."],
      ["Leia: 午後に勉強します。 Quando a pessoa estuda?", ["À tarde", "De manhã", "Ontem", "Amanhã"], 0, "午後 significa período da tarde."],
      ["Leia: この本は新しいです。 Como é o livro?", ["Novo", "Antigo", "Curto", "Preto"], 0, "新しい significa novo."],
      ["Qual é o objetivo da semana 26?", ["Aprender novos kanji e ampliar o vocabulário", "Estudar somente hiragana", "Aprender apenas números", "Abandonar palavras compostas"], 0, "A semana amplia o repertório de kanji e palavras."]
    ])
  },
  recovery: buildRecovery(26, [
    ["Qual kanji significa leste?", ["東", "西", "南", "北"], 0, "東 significa leste."],
    ["Qual palavra significa agora?", ["今", "前", "後", "先"], 0, "今 significa agora."],
    ["Qual palavra significa novo?", ["新しい", "古い", "短い", "少ない"], 0, "新しい significa novo."],
    ["Qual kanji significa vermelho?", ["赤", "青", "白", "黒"], 0, "赤 significa vermelho."],
    ["Qual palavra significa tarde?", ["午後", "午前", "昨日", "毎日"], 0, "午後 significa período depois do meio-dia."]
  ])
},

27: {
  days: {
    1: buildQuestions(27, 1, [
      ["O que significa 電?", ["Eletricidade", "Água", "Fogo", "Madeira"], 0, "電 está relacionado à eletricidade."],
      ["O que significa 車?", ["Veículo ou carro", "Livro", "Casa", "Pessoa"], 0, "車 significa veículo ou carro."],
      ["O que significa 電車?", ["Trem elétrico", "Telefone", "Automóvel", "Bicicleta"], 0, "電車 combina eletricidade e veículo."],
      ["O que significa 電話?", ["Telefone", "Trem", "Relógio", "Jornal"], 0, "電話 significa telefone."],
      ["O que significa 自?", ["Próprio ou si mesmo", "Pessoa", "Água", "Escola"], 0, "自 pode representar a ideia de si mesmo."],
      ["O que significa 自転車?", ["Bicicleta", "Trem", "Telefone", "Carro"], 0, "自転車 significa bicicleta."],
      ["O que significa 動?", ["Mover ou movimento", "Ler", "Comer", "Dormir"], 0, "動 está relacionado a movimento."],
      ["O que significa 自動車?", ["Automóvel", "Bicicleta", "Trem", "Telefone"], 0, "自動車 significa automóvel."],
      ["Qual é a leitura de 電車?", ["でんしゃ", "でんわ", "じてんしゃ", "しんぶん"], 0, "電車 é lido でんしゃ."],
      ["Qual é a leitura de 電話?", ["でんわ", "でんしゃ", "じてんしゃ", "えいが"], 0, "電話 é lido でんわ."]
    ]),
    2: buildQuestions(27, 2, [
      ["O que significa 会?", ["Encontrar ou reunião", "Comer", "Escrever", "Dormir"], 0, "会 aparece em palavras relacionadas a encontros e reuniões."],
      ["O que significa 社?", ["Empresa ou sociedade", "Escola", "Casa", "Montanha"], 0, "社 aparece em palavras relacionadas a empresas e organizações."],
      ["O que significa 会社?", ["Empresa", "Hospital", "Biblioteca", "Estação"], 0, "会社 significa empresa."],
      ["O que significa 会話?", ["Conversa", "Escrita", "Leitura", "Viagem"], 0, "会話 significa conversa."],
      ["O que significa 社会?", ["Sociedade", "Família", "Escola", "Natureza"], 0, "社会 significa sociedade."],
      ["Qual é a leitura de 会社?", ["かいしゃ", "かいわ", "しゃかい", "がっこう"], 0, "会社 é lido かいしゃ."],
      ["Qual é a leitura de 会話?", ["かいわ", "かいしゃ", "しゃかい", "せんせい"], 0, "会話 é lido かいわ."],
      ["Qual kanji representa conversa em 会話?", ["話", "会", "社", "電"], 0, "話 está relacionado a falar ou conversar."],
      ["Qual palavra significa falar?", ["話す", "読む", "書く", "食べる"], 0, "話す significa falar."],
      ["Qual frase significa 'converso com um amigo'?", ["友達と話します", "友達を食べます", "友達を読みます", "友達へ飲みます"], 0, "友達と話します significa conversar com um amigo."]
    ]),
    3: buildQuestions(27, 3, [
      ["O que significa 仕?", ["Serviço ou trabalho", "Água", "Montanha", "Livro"], 0, "仕 aparece em palavras relacionadas a trabalho e serviço."],
      ["O que significa 事?", ["Coisa ou assunto", "Pessoa", "Árvore", "Fogo"], 0, "事 pode significar coisa, assunto ou acontecimento."],
      ["O que significa 仕事?", ["Trabalho", "Escola", "Casa", "Comida"], 0, "仕事 significa trabalho."],
      ["Qual é a leitura de 仕事?", ["しごと", "べんきょう", "でんしゃ", "かいしゃ"], 0, "仕事 é lido しごと."],
      ["O que significa 勉強?", ["Estudo", "Trabalho", "Viagem", "Conversa"], 0, "勉強 significa estudo."],
      ["Qual é a leitura de 勉強?", ["べんきょう", "しごと", "かいしゃ", "にほん"], 0, "勉強 é lido べんきょう."],
      ["O que significa 強?", ["Forte", "Fraco", "Pequeno", "Antigo"], 0, "強 significa forte."],
      ["Qual palavra significa estudar?", ["勉強する", "仕事する", "旅行する", "電話する"], 0, "勉強する significa estudar."],
      ["Qual frase significa 'tenho trabalho'?", ["仕事があります", "学校を食べます", "本を飲みます", "水を読みます"], 0, "仕事があります significa há trabalho ou tenho trabalho."],
      ["Qual frase significa 'estudo japonês'?", ["日本語を勉強します", "日本語を食べます", "日本語を飲みます", "日本語を寝ます"], 0, "日本語を勉強します significa estudar japonês."]
    ]),
    4: buildQuestions(27, 4, [
      ["O que significa 旅?", ["Viagem", "Comida", "Escola", "Trabalho"], 0, "旅 está relacionado a viagem."],
      ["O que significa 行?", ["Ir", "Comer", "Ler", "Escrever"], 0, "行 aparece em verbos e palavras relacionadas a ir."],
      ["O que significa 旅行?", ["Viagem", "Estudo", "Conversa", "Trabalho"], 0, "旅行 significa viagem."],
      ["Qual é a leitura de 旅行?", ["りょこう", "しごと", "でんしゃ", "かいわ"], 0, "旅行 é lido りょこう."],
      ["O que significa 空?", ["Céu ou vazio", "Mar", "Terra", "Fogo"], 0, "空 pode significar céu ou vazio."],
      ["O que significa 港?", ["Porto", "Estação", "Escola", "Casa"], 0, "港 significa porto."],
      ["O que significa 空港?", ["Aeroporto", "Estação de trem", "Hospital", "Biblioteca"], 0, "空港 combina céu e porto, significando aeroporto."],
      ["Qual é a leitura de 空港?", ["くうこう", "りょこう", "でんしゃ", "かいしゃ"], 0, "空港 é lido くうこう."],
      ["Qual frase significa 'vou viajar'?", ["旅行します", "勉強します", "食べます", "読みます"], 0, "旅行します significa viajar."],
      ["Qual frase significa 'vou ao aeroporto'?", ["空港へ行きます", "空港を食べます", "空港を読みます", "空港を飲みます"], 0, "空港へ行きます significa ir ao aeroporto."]
    ]),
    5: buildQuestions(27, 5, [
      ["O que significa 病?", ["Doença", "Saúde", "Escola", "Viagem"], 0, "病 está relacionado a doença."],
      ["O que significa 院?", ["Instituição ou estabelecimento", "Pessoa", "Água", "Montanha"], 0, "院 aparece em palavras de instituições."],
      ["O que significa 病院?", ["Hospital", "Escola", "Biblioteca", "Empresa"], 0, "病院 significa hospital."],
      ["Qual é a leitura de 病院?", ["びょういん", "がっこう", "としょかん", "かいしゃ"], 0, "病院 é lido びょういん."],
      ["O que significa 医?", ["Medicina", "Eletricidade", "Trabalho", "Viagem"], 0, "医 está relacionado à medicina."],
      ["O que significa 医者?", ["Médico", "Professor", "Estudante", "Motorista"], 0, "医者 significa médico."],
      ["Qual é a leitura de 医者?", ["いしゃ", "びょういん", "せんせい", "がくせい"], 0, "医者 é lido いしゃ."],
      ["O que significa 薬?", ["Remédio", "Livro", "Comida", "Carro"], 0, "薬 significa remédio ou medicamento."],
      ["Qual palavra significa farmácia?", ["薬局", "病院", "学校", "駅"], 0, "薬局 significa farmácia."],
      ["Qual frase significa 'vou ao hospital'?", ["病院へ行きます", "病院を食べます", "病院を読みます", "病院を飲みます"], 0, "病院へ行きます significa ir ao hospital."]
    ]),
    6: buildQuestions(27, 6, [
      ["Qual palavra significa empresa?", ["会社", "病院", "空港", "学校"], 0, "会社 significa empresa."],
      ["Qual palavra significa trabalho?", ["仕事", "旅行", "会話", "電車"], 0, "仕事 significa trabalho."],
      ["Qual palavra significa viagem?", ["旅行", "勉強", "仕事", "会社"], 0, "旅行 significa viagem."],
      ["Qual palavra significa aeroporto?", ["空港", "病院", "駅", "図書館"], 0, "空港 significa aeroporto."],
      ["Qual palavra significa médico?", ["医者", "先生", "学生", "友達"], 0, "医者 significa médico."],
      ["Qual palavra significa remédio?", ["薬", "本", "車", "水"], 0, "薬 significa remédio."],
      ["Leia: 父は会社で働きます。 Onde o pai trabalha?", ["Na empresa", "No hospital", "Na escola", "No aeroporto"], 0, "会社 significa empresa."],
      ["Leia: 来月、日本へ旅行します。 Quando acontecerá a viagem?", ["No próximo mês", "Ontem", "Hoje", "No ano passado"], 0, "来月 significa próximo mês."],
      ["Leia: 友達と会話します。 O que a pessoa faz?", ["Conversa com um amigo", "Viaja com um amigo", "Come com um amigo", "Estuda com um amigo"], 0, "会話 significa conversa e 友達 significa amigo."],
      ["Qual é o objetivo da semana 27?", ["Aprender novos kanji e palavras compostas", "Estudar somente cores", "Aprender somente números", "Abandonar a leitura de vocabulário"], 0, "A semana amplia o vocabulário por meio de combinações de kanji."]
    ])
  },
  recovery: buildRecovery(27, [
    ["O que significa 電車?", ["Trem elétrico", "Telefone", "Bicicleta", "Carro"], 0, "電車 significa trem elétrico."],
    ["O que significa 会社?", ["Empresa", "Hospital", "Biblioteca", "Escola"], 0, "会社 significa empresa."],
    ["O que significa 仕事?", ["Trabalho", "Viagem", "Conversa", "Estudo"], 0, "仕事 significa trabalho."],
    ["O que significa 旅行?", ["Viagem", "Trabalho", "Escola", "Comida"], 0, "旅行 significa viagem."],
    ["O que significa 病院?", ["Hospital", "Empresa", "Aeroporto", "Biblioteca"], 0, "病院 significa hospital."]
  ])
},

28: {
  days: {
    1: buildQuestions(28, 1, [
      ["Qual é a leitura de 電車?", ["でんしゃ", "でんわ", "しんぶん", "じてんしゃ"], 0, "電車 é lido でんしゃ."],
      ["Qual é a leitura de 学校?", ["がっこう", "がくせい", "せんせい", "としょかん"], 0, "学校 é lido がっこう."],
      ["Qual é a leitura de 先生?", ["せんせい", "がくせい", "にほんご", "でんしゃ"], 0, "先生 é lido せんせい."],
      ["Qual é a leitura de 日本語?", ["にほんご", "にほんじん", "がっこう", "せんせい"], 0, "日本語 é lido にほんご."],
      ["Qual é a leitura de 時間?", ["じかん", "まいにち", "きょう", "あした"], 0, "時間 é lido じかん."],
      ["Qual é a leitura de 毎日?", ["まいにち", "まいしゅう", "まいつき", "まいとし"], 0, "毎日 é lido まいにち."],
      ["Qual é a leitura de 電話?", ["でんわ", "でんしゃ", "じてんしゃ", "しんぶん"], 0, "電話 é lido でんわ."],
      ["Qual é a leitura de 病院?", ["びょういん", "がっこう", "かいしゃ", "としょかん"], 0, "病院 é lido びょういん."],
      ["Qual é a leitura de 旅行?", ["りょこう", "しごと", "でんしゃ", "かいわ"], 0, "旅行 é lido りょこう."],
      ["Qual é a leitura de 図書館?", ["としょかん", "びょういん", "がっこう", "かいしゃ"], 0, "図書館 é lido としょかん."]
    ]),
    2: buildQuestions(28, 2, [
      ["Qual palavra significa biblioteca?", ["図書館", "病院", "会社", "空港"], 0, "図書館 significa biblioteca."],
      ["Qual palavra significa aeroporto?", ["空港", "病院", "学校", "駅"], 0, "空港 significa aeroporto."],
      ["Qual palavra significa conversa?", ["会話", "仕事", "旅行", "電車"], 0, "会話 significa conversa."],
      ["Qual palavra significa sociedade?", ["社会", "家族", "学校", "日本"], 0, "社会 significa sociedade."],
      ["Qual palavra significa bicicleta?", ["自転車", "電車", "電話", "自動車"], 0, "自転車 significa bicicleta."],
      ["Qual palavra significa automóvel?", ["自動車", "自転車", "電車", "電話"], 0, "自動車 significa automóvel."],
      ["Qual palavra significa fotografia?", ["写真", "新聞", "映画", "音楽"], 0, "写真 significa fotografia."],
      ["Qual palavra significa música?", ["音楽", "映画", "写真", "新聞"], 0, "音楽 significa música."],
      ["Qual palavra significa filme?", ["映画", "音楽", "写真", "新聞"], 0, "映画 significa filme."],
      ["Qual palavra significa jornal?", ["新聞", "写真", "映画", "音楽"], 0, "新聞 significa jornal."]
    ]),
    3: buildQuestions(28, 3, [
      ["Qual kanji significa água?", ["水", "火", "木", "金"], 0, "水 significa água."],
      ["Qual kanji significa fogo?", ["火", "水", "土", "木"], 0, "火 significa fogo."],
      ["Qual kanji significa árvore?", ["木", "金", "土", "山"], 0, "木 significa árvore."],
      ["Qual kanji significa montanha?", ["山", "川", "田", "石"], 0, "山 significa montanha."],
      ["Qual kanji significa rio?", ["川", "山", "水", "木"], 0, "川 significa rio."],
      ["Qual kanji significa pessoa?", ["人", "子", "女", "男"], 0, "人 significa pessoa."],
      ["Qual kanji significa país?", ["国", "店", "駅", "道"], 0, "国 significa país."],
      ["Qual kanji significa livro?", ["本", "木", "日", "月"], 0, "本 significa livro."],
      ["Qual kanji significa tempo ou hora?", ["時", "年", "月", "日"], 0, "時 está relacionado a horas e tempo."],
      ["Qual kanji significa aprender?", ["学", "校", "先", "生"], 0, "学 está relacionado a estudo e aprendizagem."]
    ]),
    4: buildQuestions(28, 4, [
      ["Leia: 私は毎日学校へ行きます。 O que a pessoa faz?", ["Vai à escola todos os dias", "Vai ao hospital ontem", "Lê um livro amanhã", "Viaja todos os meses"], 0, "毎日 significa todos os dias e 学校へ行きます significa ir à escola."],
      ["Leia: 友達と映画を見ます。 O que a pessoa assiste?", ["Um filme", "Um jornal", "Um livro", "Uma fotografia"], 0, "映画 significa filme."],
      ["Leia: 母は病院で働きます。 Onde a mãe trabalha?", ["No hospital", "Na escola", "Na empresa", "Na biblioteca"], 0, "病院 significa hospital."],
      ["Leia: 父は車を買いました。 O que o pai comprou?", ["Um carro", "Um livro", "Um telefone", "Uma bicicleta"], 0, "車 significa carro ou veículo."],
      ["Leia: 日本語の本を読みます。 O que a pessoa lê?", ["Um livro de japonês", "Um jornal inglês", "Uma carta", "Uma revista de música"], 0, "日本語 significa japonês e 本 significa livro."],
      ["Leia: 午後に友達と会います。 Quando a pessoa encontra o amigo?", ["À tarde", "De manhã", "Ontem", "No próximo ano"], 0, "午後 significa período depois do meio-dia."],
      ["Leia: この店は安いです。 Como é a loja ou seus preços?", ["Baratos", "Caros", "Antigos", "Longos"], 0, "安い significa barato."],
      ["Leia: 東京は大きい町です。 Como é Tóquio?", ["Uma cidade grande", "Uma cidade pequena", "Uma montanha", "Um rio"], 0, "大きい significa grande e 町 significa cidade ou bairro."],
      ["Leia: 白い猫がいます。 Qual é a cor do gato?", ["Branco", "Preto", "Vermelho", "Azul"], 0, "白い significa branco."],
      ["Leia: 昨日、映画を見ました。 Quando a pessoa assistiu ao filme?", ["Ontem", "Hoje", "Amanhã", "Todos os dias"], 0, "昨日 significa ontem."]
    ]),
    5: buildQuestions(28, 5, [
      ["Qual palavra está corretamente associada à leitura しごと?", ["仕事", "旅行", "会社", "会話"], 0, "仕事 é lido しごと."],
      ["Qual palavra está corretamente associada à leitura くうこう?", ["空港", "病院", "学校", "駅"], 0, "空港 é lido くうこう."],
      ["Qual palavra está corretamente associada à leitura いしゃ?", ["医者", "先生", "学生", "友達"], 0, "医者 é lido いしゃ."],
      ["Qual palavra está corretamente associada à leitura でんわ?", ["電話", "電車", "自転車", "新聞"], 0, "電話 é lido でんわ."],
      ["Qual palavra está corretamente associada à leitura かいしゃ?", ["会社", "会話", "社会", "学校"], 0, "会社 é lido かいしゃ."],
      ["Qual palavra está corretamente associada à leitura りょこう?", ["旅行", "仕事", "勉強", "電話"], 0, "旅行 é lido りょこう."],
      ["Qual kanji está presente em 電話?", ["電", "車", "学", "校"], 0, "電話 contém 電."],
      ["Qual kanji está presente em 病院?", ["病", "電", "車", "本"], 0, "病院 contém 病."],
      ["Qual kanji está presente em 図書館?", ["書", "電", "車", "火"], 0, "図書館 contém 書."],
      ["Qual kanji está presente em 自転車?", ["車", "病", "院", "学"], 0, "自転車 contém 車."]
    ]),
    6: buildQuestions(28, 6, [
      ["Leia: 今日は学校で日本語を勉強します。 O que a pessoa estuda?", ["Japonês", "Inglês", "Matemática", "Música"], 0, "日本語 significa língua japonesa."],
      ["Leia: 兄は電車で会社へ行きます。 Como o irmão vai ao trabalho?", ["De trem", "De bicicleta", "A pé", "De carro"], 0, "電車 significa trem."],
      ["Leia: 妹は図書館で本を読みます。 Onde a irmã lê?", ["Na biblioteca", "No hospital", "Na escola", "No aeroporto"], 0, "図書館 significa biblioteca."],
      ["Leia: 毎朝、水を飲みます。 O que a pessoa bebe?", ["Água", "Café", "Leite", "Suco"], 0, "水 significa água."],
      ["Leia: 来年、日本へ旅行します。 Para onde a pessoa viajará?", ["Japão", "China", "Brasil", "Estados Unidos"], 0, "日本 significa Japão."],
      ["Leia: 父は医者です。 Qual é a profissão do pai?", ["Médico", "Professor", "Estudante", "Motorista"], 0, "医者 significa médico."],
      ["Leia: この車は新しいです。 Como é o carro?", ["Novo", "Antigo", "Pequeno", "Barato"], 0, "新しい significa novo."],
      ["Leia: あの山は高いです。 Como é a montanha?", ["Alta", "Baixa", "Curta", "Pequena"], 0, "高い significa alto."],
      ["Qual estratégia ajuda a reconhecer kanji em textos?", ["Observar o caractere dentro da palavra e usar o contexto", "Ignorar o restante da frase", "Ler tudo em romaji", "Adivinhar sem observar os caracteres"], 0, "O contexto e o vocabulário ajudam a identificar o significado."],
      ["Qual é o objetivo da semana 28?", ["Reconhecer e ler kanji em palavras e frases", "Aprender somente os traços", "Estudar apenas katakana", "Evitar textos japoneses"], 0, "A semana prioriza reconhecimento e leitura."]
    ])
  },
  recovery: buildRecovery(28, [
    ["Qual é a leitura de 電車?", ["でんしゃ", "でんわ", "しごと", "りょこう"], 0, "電車 é lido でんしゃ."],
    ["Qual palavra significa aeroporto?", ["空港", "病院", "学校", "会社"], 0, "空港 significa aeroporto."],
    ["Qual palavra significa médico?", ["医者", "先生", "学生", "友達"], 0, "医者 significa médico."],
    ["Leia: 毎日学校へ行きます。 O que a pessoa faz?", ["Vai à escola todos os dias", "Vai ao hospital ontem", "Viaja amanhã", "Lê um livro"], 0, "毎日 significa todos os dias."],
    ["Qual estratégia é melhor para reconhecer kanji?", ["Ler o kanji dentro de palavras e frases", "Ignorar o contexto", "Memorizar apenas o formato", "Usar somente romaji"], 0, "O contexto ajuda a reconhecer e compreender os kanji."]
  ])
},

29: {
  days: {
    1: buildQuestions(29, 1, [
      ["Qual é o primeiro passo para escrever um kanji corretamente?", ["Aprender sua estrutura e ordem dos traços", "Desenhar sem observar", "Escrever sempre da direita para a esquerda", "Ignorar os componentes"], 0, "Conhecer a estrutura e a ordem dos traços ajuda a escrever corretamente."],
      ["Qual é a ordem geral mais comum dos traços?", ["De cima para baixo", "Sempre de baixo para cima", "Sempre da direita para a esquerda", "Sem nenhuma ordem"], 0, "Muitos kanji seguem uma ordem geral de cima para baixo."],
      ["Qual é a ordem geral de escrita em caracteres com partes laterais?", ["Frequentemente da esquerda para a direita", "Sempre da direita para a esquerda", "Sempre de baixo para cima", "Sem ordem definida"], 0, "Em muitos kanji, os componentes da esquerda são escritos antes dos da direita."],
      ["Quantos traços tem o kanji 一?", ["Um", "Dois", "Três", "Quatro"], 0, "一 é escrito com um único traço horizontal."],
      ["Quantos traços tem o kanji 二?", ["Dois", "Um", "Três", "Quatro"], 0, "二 é formado por dois traços."],
      ["Quantos traços tem o kanji 三?", ["Três", "Dois", "Um", "Quatro"], 0, "三 é formado por três traços horizontais."],
      ["Qual é o significado de 大?", ["Grande", "Pequeno", "Água", "Pessoa"], 0, "大 significa grande."],
      ["Qual é o significado de 小?", ["Pequeno", "Grande", "Fogo", "Árvore"], 0, "小 significa pequeno."],
      ["Qual é a leitura de 大きい?", ["おおきい", "ちいさい", "ながい", "みじかい"], 0, "大きい significa grande."],
      ["Qual é a leitura de 小さい?", ["ちいさい", "おおきい", "たかい", "やすい"], 0, "小さい significa pequeno."]
    ]),
    2: buildQuestions(29, 2, [
      ["Qual é a leitura de 高い?", ["たかい", "やすい", "あたらしい", "ふるい"], 0, "高い significa alto ou caro."],
      ["Qual é a leitura de 安い?", ["やすい", "たかい", "ながい", "みじかい"], 0, "安い significa barato."],
      ["Qual é a leitura de 新しい?", ["あたらしい", "ふるい", "たかい", "やすい"], 0, "新しい significa novo."],
      ["Qual é a leitura de 古い?", ["ふるい", "あたらしい", "おおきい", "ちいさい"], 0, "古い significa antigo."],
      ["Qual é a leitura de 長い?", ["ながい", "みじかい", "たかい", "やすい"], 0, "長い significa longo."],
      ["Qual é a leitura de 短い?", ["みじかい", "ながい", "ふるい", "あたらしい"], 0, "短い significa curto."],
      ["Qual kanji significa alto?", ["高", "安", "新", "古"], 0, "高 significa alto."],
      ["Qual kanji significa barato?", ["安", "高", "長", "短"], 0, "安 significa barato ou tranquilo."],
      ["Qual kanji significa longo?", ["長", "短", "古", "新"], 0, "長 significa longo."],
      ["Qual frase significa 'a estrada é curta'?", ["道は短いです", "道は長いです", "道は新しいです", "道は高いです"], 0, "短い significa curto."]
    ]),
    3: buildQuestions(29, 3, [
      ["Qual kanji significa falar?", ["話", "読", "書", "聞"], 0, "話 está relacionado à fala e conversa."],
      ["Qual kanji significa ler?", ["読", "書", "話", "聞"], 0, "読 está relacionado à leitura."],
      ["Qual kanji significa escrever?", ["書", "読", "話", "聞"], 0, "書 está relacionado à escrita."],
      ["Qual kanji significa ouvir?", ["聞", "読", "書", "話"], 0, "聞 está relacionado a ouvir."],
      ["Qual é a leitura de 話す?", ["はなす", "よむ", "かく", "きく"], 0, "話す significa falar."],
      ["Qual é a leitura de 読む?", ["よむ", "はなす", "かく", "きく"], 0, "読む significa ler."],
      ["Qual é a leitura de 書く?", ["かく", "よむ", "きく", "はなす"], 0, "書く significa escrever."],
      ["Qual é a leitura de 聞く?", ["きく", "かく", "よむ", "はなす"], 0, "聞く significa ouvir ou perguntar."],
      ["Qual frase significa 'escrevo uma carta'?", ["手紙を書きます", "手紙を読みます", "手紙を聞きます", "手紙を話します"], 0, "書きます significa escrever."],
      ["Qual frase significa 'leio um jornal'?", ["新聞を読みます", "新聞を書きます", "新聞を聞きます", "新聞を話します"], 0, "読みます significa ler."]
    ]),
    4: buildQuestions(29, 4, [
      ["Qual kanji significa comprar?", ["買", "売", "行", "来"], 0, "買 significa comprar."],
      ["Qual kanji significa vender?", ["売", "買", "見", "食"], 0, "売 significa vender."],
      ["Qual é a leitura de 買う?", ["かう", "うる", "いく", "くる"], 0, "買う significa comprar."],
      ["Qual é a leitura de 売る?", ["うる", "かう", "みる", "たべる"], 0, "売る significa vender."],
      ["Qual palavra significa dinheiro?", ["お金", "本", "水", "車"], 0, "お金 significa dinheiro."],
      ["Qual palavra significa loja?", ["店", "駅", "山", "川"], 0, "店 significa loja."],
      ["Qual frase significa 'compro um livro'?", ["本を買います", "本を売ります", "本を飲みます", "本を食べます"], 0, "買います significa comprar."],
      ["Qual frase significa 'vendo um carro'?", ["車を売ります", "車を買います", "車を読みます", "車を飲みます"], 0, "売ります significa vender."],
      ["Qual palavra significa preço?", ["値段", "時間", "学校", "家族"], 0, "値段 significa preço."],
      ["Qual frase significa 'o preço é alto'?", ["値段が高いです", "値段が安いです", "値段が短いです", "値段が古いです"], 0, "高い significa alto ou caro."]
    ]),
    5: buildQuestions(29, 5, [
      ["Qual kanji significa entrar?", ["入", "出", "立", "休"], 0, "入 significa entrar."],
      ["Qual kanji significa sair?", ["出", "入", "休", "立"], 0, "出 significa sair ou aparecer."],
      ["Qual kanji significa ficar em pé?", ["立", "休", "入", "出"], 0, "立 significa ficar em pé."],
      ["Qual kanji significa descansar?", ["休", "立", "出", "入"], 0, "休 significa descansar."],
      ["Qual é a leitura de 入る?", ["はいる", "でる", "たつ", "やすむ"], 0, "入る significa entrar."],
      ["Qual é a leitura de 出る?", ["でる", "はいる", "たつ", "やすむ"], 0, "出る significa sair."],
      ["Qual é a leitura de 休む?", ["やすむ", "たつ", "でる", "はいる"], 0, "休む significa descansar."],
      ["Qual palavra significa entrada?", ["入口", "出口", "休み", "学校"], 0, "入口 significa entrada."],
      ["Qual palavra significa saída?", ["出口", "入口", "休み", "会社"], 0, "出口 significa saída."],
      ["Qual frase significa 'entro na escola'?", ["学校に入ります", "学校に出ます", "学校を休みます", "学校を読みます"], 0, "入ります significa entrar."]
    ]),
    6: buildQuestions(29, 6, [
      ["Qual frase significa 'leio um livro novo'?", ["新しい本を読みます", "古い本を書きます", "高い本を飲みます", "短い本を食べます"], 0, "新しい significa novo e 読みます significa ler."],
      ["Qual frase significa 'compro uma bicicleta'?", ["自転車を買います", "自転車を読みます", "自転車を聞きます", "自転車を食べます"], 0, "買います significa comprar."],
      ["Qual frase significa 'escrevo uma carta'?", ["手紙を書きます", "手紙を飲みます", "手紙を食べます", "手紙を見ます"], 0, "書きます significa escrever."],
      ["Qual frase significa 'ouço música'?", ["音楽を聞きます", "音楽を書きます", "音楽を食べます", "音楽を買います"], 0, "聞きます significa ouvir."],
      ["Qual frase significa 'descanso em casa'?", ["家で休みます", "家で働きます", "家を買います", "家を読みます"], 0, "休みます significa descansar."],
      ["Qual frase significa 'entro na loja'?", ["店に入ります", "店に出ます", "店を読みます", "店を食べます"], 0, "入ります significa entrar."],
      ["Qual frase significa 'saio da escola'?", ["学校を出ます", "学校に入ります", "学校を読みます", "学校を飲みます"], 0, "出ます significa sair."],
      ["Qual palavra significa descanso ou folga?", ["休み", "入口", "出口", "値段"], 0, "休み significa descanso ou folga."],
      ["Qual é a importância de praticar a escrita dos kanji?", ["Reconhecer a estrutura, os traços e os componentes", "Decorar somente a tradução", "Evitar aprender vocabulário", "Substituir a leitura"], 0, "A escrita ajuda a reconhecer e memorizar os caracteres."],
      ["Qual é o objetivo da semana 29?", ["Praticar escrita, leitura e vocabulário", "Estudar somente números", "Aprender apenas katakana", "Evitar palavras compostas"], 0, "A semana integra diferentes habilidades de kanji."]
    ])
  },
  recovery: buildRecovery(29, [
    ["Qual é a leitura de 読む?", ["よむ", "かく", "きく", "はなす"], 0, "読む significa ler."],
    ["Qual kanji significa comprar?", ["買", "売", "休", "出"], 0, "買 significa comprar."],
    ["Qual kanji significa entrar?", ["入", "出", "立", "休"], 0, "入 significa entrar."],
    ["Qual frase significa 'compro um livro'?", ["本を買います", "本を売ります", "本を食べます", "本を飲みます"], 0, "買います significa comprar."],
    ["Qual palavra significa saída?", ["出口", "入口", "休み", "学校"], 0, "出口 significa saída."]
  ])
},

30: {
  days: {
    1: buildQuestions(30, 1, [
      ["Leia: 私は毎朝六時に起きます。 A que horas a pessoa acorda?", ["Às seis horas", "Às sete horas", "Às oito horas", "Às nove horas"], 0, "六時 significa seis horas."],
      ["Qual é o significado de 毎朝?", ["Todas as manhãs", "Todas as noites", "Toda semana", "Todo mês"], 0, "毎朝 significa todas as manhãs."],
      ["Qual é o significado de 起きます?", ["Acordar ou levantar", "Dormir", "Comer", "Estudar"], 0, "起きます significa acordar ou levantar."],
      ["Leia: 朝ご飯を食べます。 O que a pessoa come?", ["Café da manhã", "Jantar", "Almoço", "Lanche da noite"], 0, "朝ご飯 significa café da manhã."],
      ["Qual é o significado de 朝?", ["Manhã", "Noite", "Tarde", "Ontem"], 0, "朝 significa manhã."],
      ["Qual é o significado de 夜?", ["Noite", "Manhã", "Tarde", "Meio-dia"], 0, "夜 significa noite."],
      ["Leia: 夜に本を読みます。 O que a pessoa faz à noite?", ["Lê um livro", "Compra um carro", "Vai ao hospital", "Come pão"], 0, "夜 significa noite e 本を読みます significa ler um livro."],
      ["Qual palavra significa dormir?", ["寝ます", "起きます", "行きます", "読みます"], 0, "寝ます significa dormir ou deitar-se."],
      ["Leia: 毎晩十時に寝ます。 A que horas a pessoa dorme?", ["Às dez horas", "Às seis horas", "Às oito horas", "Às doze horas"], 0, "十時 significa dez horas."],
      ["Qual é o objetivo deste texto curto?", ["Descrever uma rotina diária", "Contar uma viagem", "Descrever uma loja", "Explicar uma receita"], 0, "As expressões de manhã, noite e horários descrevem rotina."]
    ]),
    2: buildQuestions(30, 2, [
      ["Leia: 日曜日に家族と公園へ行きます。 Para onde a pessoa vai?", ["Ao parque", "À escola", "Ao hospital", "À empresa"], 0, "公園 significa parque."],
      ["Com quem a pessoa vai ao parque?", ["Com a família", "Com o professor", "Com o médico", "Sozinha"], 0, "家族 significa família."],
      ["Qual é o significado de 日曜日?", ["Domingo", "Segunda-feira", "Sábado", "Sexta-feira"], 0, "日曜日 significa domingo."],
      ["Qual é o significado de 公園?", ["Parque", "Hospital", "Biblioteca", "Loja"], 0, "公園 significa parque."],
      ["Leia: 公園で友達に会いました。 Quem a pessoa encontrou?", ["Um amigo", "Um professor", "Um médico", "Um estudante"], 0, "友達 significa amigo."],
      ["Qual é o significado de 会いました?", ["Encontrei", "Comerei", "Lerei", "Escreverei"], 0, "会いました é a forma passada de encontrar."],
      ["Leia: 友達と写真を撮りました。 O que fizeram?", ["Tiraram fotografias", "Leram livros", "Compraram carros", "Estudaram japonês"], 0, "写真 significa fotografia e 撮りました significa tiraram."],
      ["Qual é o significado de 写真?", ["Fotografia", "Filme", "Música", "Jornal"], 0, "写真 significa fotografia."],
      ["Qual é o significado de 楽しい?", ["Divertido ou agradável", "Triste", "Caro", "Antigo"], 0, "楽しい significa divertido ou agradável."],
      ["Qual frase significa 'foi divertido'?", ["楽しかったです", "高かったです", "古かったです", "短かったです"], 0, "楽しかったです é o passado de 楽しいです."]
    ]),
    3: buildQuestions(30, 3, [
      ["Leia: 私の父は病院で働いています。 Onde o pai trabalha?", ["No hospital", "Na escola", "No parque", "Na biblioteca"], 0, "病院 significa hospital."],
      ["Qual é o significado de 父?", ["Pai", "Mãe", "Irmão", "Irmã"], 0, "父 significa pai."],
      ["Qual é o significado de 母?", ["Mãe", "Pai", "Irmão", "Amigo"], 0, "母 significa mãe."],
      ["Qual é o significado de 働く?", ["Trabalhar", "Dormir", "Ler", "Comer"], 0, "働く significa trabalhar."],
      ["Leia: 母は家で料理をします。 Onde a mãe cozinha?", ["Em casa", "No hospital", "Na escola", "No aeroporto"], 0, "家 significa casa."],
      ["Qual é o significado de 料理?", ["Culinária ou comida preparada", "Viagem", "Trabalho", "Conversa"], 0, "料理 significa culinária ou prato preparado."],
      ["Qual é a leitura de 料理?", ["りょうり", "りょこう", "しごと", "かいわ"], 0, "料理 é lido りょうり."],
      ["Leia: 兄は会社へ行きます。 Para onde o irmão vai?", ["À empresa", "Ao parque", "À biblioteca", "Ao hospital"], 0, "会社 significa empresa."],
      ["Qual é o significado de 兄?", ["Irmão mais velho", "Irmão mais novo", "Pai", "Avô"], 0, "兄 significa irmão mais velho."],
      ["Qual é o significado de 姉?", ["Irmã mais velha", "Irmã mais nova", "Mãe", "Amiga"], 0, "姉 significa irmã mais velha."]
    ]),
    4: buildQuestions(30, 4, [
      ["Leia: 日本の食べ物が好きです。 Do que a pessoa gosta?", ["Comida japonesa", "Música japonesa", "Filmes japoneses", "Livros japoneses"], 0, "食べ物 significa comida."],
      ["Qual é o significado de 食べ物?", ["Comida", "Bebida", "Livro", "Roupa"], 0, "食べ物 significa alimento ou comida."],
      ["Qual é o significado de 飲み物?", ["Bebida", "Comida", "Casa", "Escola"], 0, "飲み物 significa bebida."],
      ["Leia: 水を飲んで、パンを食べます。 O que a pessoa bebe?", ["Água", "Café", "Leite", "Suco"], 0, "水 significa água."],
      ["O que a pessoa come na frase anterior?", ["Pão", "Arroz", "Peixe", "Fruta"], 0, "パン significa pão."],
      ["Qual é o significado de 魚?", ["Peixe", "Carne", "Fruta", "Arroz"], 0, "魚 significa peixe."],
      ["Qual é o significado de 肉?", ["Carne", "Peixe", "Água", "Pão"], 0, "肉 significa carne."],
      ["Qual é o significado de 野菜?", ["Vegetais", "Carne", "Peixe", "Bebida"], 0, "野菜 significa vegetais."],
      ["Leia: 野菜と魚を食べます。 O que a pessoa come?", ["Vegetais e peixe", "Carne e pão", "Fruta e água", "Arroz e café"], 0, "野菜 significa vegetais e 魚 significa peixe."],
      ["Qual é o significado de 果物?", ["Frutas", "Vegetais", "Carne", "Peixe"], 0, "果物 significa frutas."]
    ]),
    5: buildQuestions(30, 5, [
      ["Leia: 来年、日本へ旅行したいです。 O que a pessoa deseja fazer?", ["Viajar para o Japão", "Estudar na escola", "Comprar um carro", "Trabalhar no hospital"], 0, "旅行したいです significa desejar viajar."],
      ["Qual é o significado de 来年?", ["Próximo ano", "Ano passado", "Este mês", "Ontem"], 0, "来年 significa próximo ano."],
      ["Qual é o significado de 日本へ?", ["Para o Japão", "Do Japão", "Dentro da escola", "Na biblioteca"], 0, "へ indica direção ou destino."],
      ["Leia: 日本語の本を買いました。 O que a pessoa comprou?", ["Um livro de japonês", "Um telefone", "Uma bicicleta", "Uma fotografia"], 0, "本 significa livro e 日本語 significa língua japonesa."],
      ["Qual é o significado de 買いました?", ["Comprei", "Vendi", "Li", "Escrevi"], 0, "買いました é o passado de comprar."],
      ["Leia: 友達と映画を見たいです。 O que a pessoa quer fazer?", ["Assistir a um filme com um amigo", "Ler um livro sozinho", "Viajar de trem", "Comer no hospital"], 0, "映画を見たいです significa querer assistir a um filme."],
      ["Qual é o significado de 見たいです?", ["Quero ver", "Quero comer", "Quero dormir", "Quero escrever"], 0, "見たいです expressa desejo de ver."],
      ["Leia: 毎日、日本語を勉強しています。 O que a pessoa está fazendo?", ["Estudando japonês todos os dias", "Trabalhando no hospital", "Viajando ao Japão", "Comprando livros"], 0, "勉強しています expressa estudo em andamento."],
      ["Qual é o significado de 毎日?", ["Todos os dias", "Toda semana", "Todo mês", "Todo ano"], 0, "毎日 significa todos os dias."],
      ["Qual é a importância de ler textos com kanji?", ["Compreender palavras e informações em contexto", "Aprender somente o formato dos caracteres", "Eliminar a necessidade de gramática", "Substituir o vocabulário"], 0, "A leitura contextual permite compreender como os kanji funcionam em textos reais."]
    ]),
    6: buildQuestions(30, 6, [
      ["Leia: 私は毎朝七時に起きます。 O que a pessoa faz às sete?", ["Acorda", "Dorme", "Trabalha", "Viaja"], 0, "起きます significa acordar."],
      ["Leia: 朝ご飯を食べて、学校へ行きます。 O que acontece primeiro?", ["A pessoa toma café da manhã", "A pessoa vai à escola", "A pessoa dorme", "A pessoa viaja"], 0, "朝ご飯を食べて indica comer o café da manhã antes de ir à escola."],
      ["Leia: 学校で日本語を勉強します。 Onde a pessoa estuda japonês?", ["Na escola", "No hospital", "Em casa", "No aeroporto"], 0, "学校 significa escola."],
      ["Leia: 午後、友達と公園へ行きます。 Para onde a pessoa vai à tarde?", ["Ao parque", "À biblioteca", "À empresa", "Ao hospital"], 0, "午後 significa tarde e 公園 significa parque."],
      ["Leia: 夜、家で本を読みます。 Onde a pessoa lê à noite?", ["Em casa", "Na escola", "No parque", "Na empresa"], 0, "家 significa casa."],
      ["Leia: 毎晩十時に寝ます。 Qual é o horário de dormir?", ["Dez horas", "Sete horas", "Oito horas", "Nove horas"], 0, "十時 significa dez horas."],
      ["Leia: 日曜日に家族と旅行しました。 Com quem a pessoa viajou?", ["Com a família", "Com o professor", "Com o médico", "Com o chefe"], 0, "家族 significa família."],
      ["Leia: 日本の料理はおいしいです。 Como é a comida japonesa?", ["Deliciosa", "Cara", "Pequena", "Antiga"], 0, "おいしい significa delicioso."],
      ["Leia: 私は日本語を勉強することが好きです。 Do que a pessoa gosta?", ["De estudar japonês", "De viajar de carro", "De trabalhar no hospital", "De dormir cedo"], 0, "日本語を勉強することが好きです expressa gostar de estudar japonês."],
      ["Qual é o objetivo da semana 30?", ["Aplicar kanji na leitura de textos e situações cotidianas", "Aprender somente traços isolados", "Estudar apenas números", "Parar de usar hiragana e katakana"], 0, "A semana integra leitura, vocabulário e compreensão de textos."]
    ])
  },
  recovery: buildRecovery(30, [
    ["Leia: 毎朝六時に起きます。 A que horas a pessoa acorda?", ["Às seis horas", "Às sete horas", "Às oito horas", "Às nove horas"], 0, "六時 significa seis horas."],
    ["Leia: 日曜日に家族と公園へ行きます。 Com quem a pessoa vai?", ["Com a família", "Com o professor", "Com o médico", "Sozinha"], 0, "家族 significa família."],
    ["Leia: 父は病院で働きます。 Onde o pai trabalha?", ["No hospital", "Na escola", "Na biblioteca", "No parque"], 0, "病院 significa hospital."],
    ["Leia: 日本の食べ物が好きです。 Do que a pessoa gosta?", ["Comida japonesa", "Música japonesa", "Filmes japoneses", "Livros japoneses"], 0, "食べ物 significa comida."],
    ["Qual é o objetivo de aplicar kanji em textos?", ["Compreender palavras e informações em contexto", "Decorar caracteres sem significado", "Ler somente em romaji", "Ignorar a gramática"], 0, "O contexto ajuda a interpretar o significado dos kanji."]
  ])
},


31: {
  days: {
    1: buildQuestions(31, 1, [
      ["Leia: 私は毎朝六時に起きて、朝ご飯を食べます。 O que a pessoa faz depois de acordar?", ["Toma café da manhã", "Vai dormir", "Vai ao hospital", "Compra um livro"], 0, "朝ご飯を食べます significa tomar ou comer o café da manhã."],
      ["Qual é o significado de 毎朝?", ["Todas as manhãs", "Todas as noites", "Todo mês", "Todo ano"], 0, "毎朝 significa todas as manhãs."],
      ["Qual é o significado de 起きて?", ["Acordar e...", "Dormir e...", "Comer e...", "Escrever e..."], 0, "起きて é a forma て de 起きる, acordar."],
      ["Leia: それから、学校へ行きます。 O que それから indica?", ["Depois disso", "Antes disso", "Ontem", "Nunca"], 0, "それから significa depois disso ou em seguida."],
      ["Qual é o significado de 学校へ行きます?", ["Vai à escola", "Sai da escola", "Lê na escola", "Trabalha na escola"], 0, "学校 significa escola e 行きます significa ir."],
      ["Qual palavra significa café da manhã?", ["朝ご飯", "昼ご飯", "晩ご飯", "飲み物"], 0, "朝ご飯 significa café da manhã."],
      ["Qual palavra significa almoço?", ["昼ご飯", "朝ご飯", "晩ご飯", "毎朝"], 0, "昼ご飯 significa almoço."],
      ["Qual palavra significa jantar?", ["晩ご飯", "朝ご飯", "昼ご飯", "毎日"], 0, "晩ご飯 significa jantar."],
      ["Qual é o significado de それから?", ["Em seguida", "Porém", "Porque", "Talvez"], 0, "それから conecta acontecimentos em sequência."],
      ["Qual é a melhor estratégia para entender esse texto?", ["Identificar as ações e a ordem em que acontecem", "Traduzir somente o primeiro kanji", "Ignorar os verbos", "Ler apenas os números"], 0, "Observar as ações e conectores ajuda a compreender a sequência."]
    ]),
    2: buildQuestions(31, 2, [
      ["Leia: 学校の後で、図書館へ行きました。 Para onde a pessoa foi depois da escola?", ["À biblioteca", "Ao hospital", "Ao aeroporto", "Ao parque"], 0, "図書館 significa biblioteca."],
      ["Qual é o significado de 後で?", ["Depois", "Antes", "Agora", "Amanhã"], 0, "後で significa depois."],
      ["Qual é a leitura de 図書館?", ["としょかん", "びょういん", "がっこう", "かいしゃ"], 0, "図書館 é lido としょかん."],
      ["Leia: 図書館で日本語の本を読みました。 O que a pessoa leu?", ["Um livro de japonês", "Um jornal de inglês", "Uma revista de música", "Uma carta"], 0, "日本語 significa língua japonesa e 本 significa livro."],
      ["Qual é o significado de 読みました?", ["Leu", "Escreveu", "Comprou", "Vendeu"], 0, "読みました é a forma passada de 読む, ler."],
      ["Qual palavra significa biblioteca?", ["図書館", "病院", "空港", "会社"], 0, "図書館 significa biblioteca."],
      ["Qual palavra significa livro?", ["本", "車", "水", "店"], 0, "本 significa livro."],
      ["Qual palavra significa língua japonesa?", ["日本語", "日本人", "日本", "学校"], 0, "日本語 significa língua japonesa."],
      ["O que indica で em 図書館で?", ["O local onde a ação acontece", "O destino de uma viagem", "O dono de um objeto", "O passado do verbo"], 0, "で indica o local onde uma ação acontece."],
      ["Qual é o assunto principal do texto?", ["Uma visita à biblioteca e uma leitura", "Uma viagem de avião", "Uma compra no mercado", "Uma consulta médica"], 0, "O texto menciona a biblioteca e a leitura de um livro."]
    ]),
    3: buildQuestions(31, 3, [
      ["Leia: 日曜日に家族と公園へ行きました。 Quando a pessoa foi ao parque?", ["Domingo", "Segunda-feira", "Sexta-feira", "Sábado"], 0, "日曜日 significa domingo."],
      ["Com quem a pessoa foi?", ["Com a família", "Com o professor", "Com o médico", "Com o chefe"], 0, "家族 significa família."],
      ["Qual é o significado de 公園?", ["Parque", "Hospital", "Biblioteca", "Estação"], 0, "公園 significa parque."],
      ["Leia: 公園で写真を撮って、友達と話しました。 O que a pessoa fez primeiro?", ["Tirou fotografias", "Conversou com amigos", "Foi para casa", "Comprou comida"], 0, "写真を撮って indica tirar fotografias antes da próxima ação."],
      ["Qual é o significado de 友達?", ["Amigo", "Professor", "Médico", "Irmão"], 0, "友達 significa amigo."],
      ["Qual é o significado de 話しました?", ["Conversou", "Leu", "Escreveu", "Dormiu"], 0, "話しました é o passado de 話す, conversar."],
      ["Qual é o significado de 撮って?", ["Tirar e...", "Ler e...", "Comer e...", "Comprar e..."], 0, "撮って é a forma て de 撮る, tirar uma foto."],
      ["Qual palavra significa fotografia?", ["写真", "映画", "音楽", "新聞"], 0, "写真 significa fotografia."],
      ["Qual expressão indica o dia da semana?", ["日曜日", "家族", "写真", "友達"], 0, "日曜日 é o nome de um dia da semana."],
      ["Qual é a melhor interpretação do texto?", ["A pessoa passou o domingo no parque com a família", "A pessoa trabalhou no hospital", "A pessoa estudou na biblioteca", "A pessoa viajou sozinha"], 0, "O texto informa que ela foi ao parque com a família no domingo."]
    ]),
    4: buildQuestions(31, 4, [
      ["Leia: 私の兄は会社で働いています。 Qual é a profissão ou atividade do irmão?", ["Ele trabalha", "Ele estuda", "Ele viaja", "Ele cozinha"], 0, "働いています indica que está trabalhando."],
      ["Onde ele trabalha?", ["Na empresa", "No hospital", "Na escola", "No parque"], 0, "会社 significa empresa."],
      ["Qual é o significado de 兄?", ["Irmão mais velho", "Irmão mais novo", "Pai", "Avô"], 0, "兄 significa irmão mais velho."],
      ["Qual é o significado de 働く?", ["Trabalhar", "Estudar", "Dormir", "Viajar"], 0, "働く significa trabalhar."],
      ["Leia: 母は病院で働いています。 Onde a mãe trabalha?", ["No hospital", "Na empresa", "Na biblioteca", "Na estação"], 0, "病院 significa hospital."],
      ["Qual é o significado de 母?", ["Mãe", "Pai", "Irmã", "Amiga"], 0, "母 significa mãe."],
      ["Qual é a leitura de 病院?", ["びょういん", "としょかん", "かいしゃ", "がっこう"], 0, "病院 é lido びょういん."],
      ["Qual é o significado de ています em 働いています?", ["Indica uma ação em andamento ou estado", "Indica uma pergunta", "Indica o futuro obrigatório", "Indica uma negação"], 0, "～ています pode indicar uma ação em andamento ou um estado."],
      ["Qual palavra significa empresa?", ["会社", "病院", "公園", "図書館"], 0, "会社 significa empresa."],
      ["Qual é a ideia principal dos dois exemplos?", ["Descrever onde familiares trabalham", "Descrever uma viagem", "Contar uma refeição", "Explicar um esporte"], 0, "As frases apresentam familiares e seus locais de trabalho."]
    ]),
    5: buildQuestions(31, 5, [
      ["Leia: 来年、日本へ旅行したいです。 O que a pessoa deseja fazer?", ["Viajar para o Japão", "Trabalhar no Japão", "Comprar uma casa", "Estudar medicina"], 0, "旅行したいです significa querer viajar."],
      ["Quando a pessoa pretende viajar?", ["No próximo ano", "No ano passado", "Hoje", "Ontem"], 0, "来年 significa próximo ano."],
      ["Qual é o significado de 旅行?", ["Viagem", "Trabalho", "Estudo", "Conversa"], 0, "旅行 significa viagem."],
      ["Leia: 日本で友達に会って、日本語を話したいです。 O que a pessoa quer fazer no Japão?", ["Encontrar amigos e falar japonês", "Comprar um carro e trabalhar", "Dormir e comer", "Ler um jornal e escrever uma carta"], 0, "会って significa encontrar e 話したい significa querer falar."],
      ["Qual é o significado de 会う?", ["Encontrar", "Comer", "Dormir", "Escrever"], 0, "会う significa encontrar ou reunir-se."],
      ["Qual é o significado de 話したい?", ["Quero conversar", "Quero dormir", "Quero comprar", "Quero viajar"], 0, "話したい expressa o desejo de conversar."],
      ["Qual palavra significa próximo ano?", ["来年", "去年", "今年", "毎日"], 0, "来年 significa próximo ano."],
      ["O que indica たい em 旅行したい?", ["Desejo", "Passado", "Negação", "Proibição"], 0, "たい expressa vontade ou desejo de fazer algo."],
      ["Qual palavra significa Japão?", ["日本", "日本語", "日本人", "東京"], 0, "日本 significa Japão."],
      ["Qual habilidade está sendo praticada nesses textos?", ["Compreender desejos e planos em contexto", "Contar apenas números", "Reconhecer somente cores", "Escrever apenas hiragana"], 0, "Os textos combinam vocabulário, kanji e expressão de desejos."]
    ]),
    6: buildQuestions(31, 6, [
      ["Leia: 毎朝、父は新聞を読みます。 O que o pai lê?", ["Jornal", "Livro", "Carta", "Revista de música"], 0, "新聞 significa jornal."],
      ["Leia: 母は台所で料理をしています。 Onde a mãe está?", ["Na cozinha", "No parque", "Na escola", "No hospital"], 0, "台所 significa cozinha."],
      ["Qual é o significado de 料理?", ["Culinária ou comida preparada", "Viagem", "Trabalho", "Conversa"], 0, "料理 significa culinária ou prato preparado."],
      ["Leia: 弟は部屋で勉強しています。 Onde o irmão mais novo estuda?", ["No quarto", "No parque", "Na empresa", "No aeroporto"], 0, "部屋 significa quarto."],
      ["Qual é o significado de 弟?", ["Irmão mais novo", "Irmão mais velho", "Pai", "Avô"], 0, "弟 significa irmão mais novo."],
      ["Qual é o significado de 勉強しています?", ["Está estudando", "Está viajando", "Está dormindo", "Está comprando"], 0, "勉強しています indica que está estudando."],
      ["Leia: 夕方、家族と晩ご飯を食べます。 O que a pessoa faz à tarde ou no começo da noite?", ["Janta com a família", "Toma café da manhã", "Vai à escola", "Lê um jornal"], 0, "晩ご飯 significa jantar e 家族 significa família."],
      ["Qual é o significado de 夕方?", ["Fim da tarde", "Manhã", "Meio-dia", "Madrugada"], 0, "夕方 significa fim da tarde."],
      ["Qual estratégia ajuda a compreender textos maiores?", ["Relacionar palavras, verbos, conectores e contexto", "Traduzir somente os kanji", "Ignorar as partículas", "Ler cada símbolo sem observar a frase"], 0, "A compreensão depende da relação entre os elementos do texto."],
      ["Qual é o objetivo da semana 31?", ["Ler textos maiores e acompanhar suas informações", "Aprender apenas números", "Estudar somente katakana", "Memorizar símbolos sem contexto"], 0, "A semana trabalha compreensão de textos mais longos."]
    ])
  },
  recovery: buildRecovery(31, [
    ["O que significa 毎朝?", ["Todas as manhãs", "Todas as noites", "Todo mês", "Todo ano"], 0, "毎朝 significa todas as manhãs."],
    ["Qual palavra significa biblioteca?", ["図書館", "病院", "会社", "空港"], 0, "図書館 significa biblioteca."],
    ["Qual palavra significa família?", ["家族", "友達", "先生", "学生"], 0, "家族 significa família."],
    ["Qual palavra significa próximo ano?", ["来年", "去年", "今年", "昨日"], 0, "来年 significa próximo ano."],
    ["Qual estratégia é adequada para textos maiores?", ["Relacionar as informações e a sequência das ações", "Ler somente a primeira palavra", "Ignorar os verbos", "Traduzir apenas os números"], 0, "A compreensão de textos depende de relacionar as informações."]
  ])
},

32: {
  days: {
    1: buildQuestions(32, 1, [
      ["O que significa 経験?", ["Experiência", "Viagem", "Comida", "Escola"], 0, "経験 significa experiência."],
      ["Qual é a leitura de 経験?", ["けいけん", "けんきゅう", "せいかつ", "しゅみ"], 0, "経験 é lido けいけん."],
      ["O que significa 研究?", ["Pesquisa ou estudo aprofundado", "Experiência", "Viagem", "Refeição"], 0, "研究 significa pesquisa ou estudo aprofundado."],
      ["Qual é a leitura de 研究?", ["けんきゅう", "けいけん", "せいかつ", "しゅみ"], 0, "研究 é lido けんきゅう."],
      ["O que significa 生活?", ["Vida cotidiana", "Experiência", "Trabalho", "Viagem"], 0, "生活 significa vida ou cotidiano."],
      ["Qual é a leitura de 生活?", ["せいかつ", "けいけん", "けんきゅう", "しゅみ"], 0, "生活 é lido せいかつ."],
      ["Qual palavra significa hobby?", ["趣味", "経験", "研究", "生活"], 0, "趣味 significa hobby ou interesse pessoal."],
      ["Qual é a leitura de 趣味?", ["しゅみ", "せいかつ", "けいけん", "けんきゅう"], 0, "趣味 é lido しゅみ."],
      ["Qual frase significa 'meu hobby é ler'?", ["趣味は本を読むことです", "趣味は水を飲むことです", "趣味は学校です", "趣味は昨日です"], 0, "本を読むこと significa ler livros."],
      ["Qual é o objetivo de aprender palavras como 経験 e 趣味?", ["Ampliar o vocabulário para falar sobre a própria vida", "Aprender somente números", "Substituir todos os verbos", "Evitar conversas"], 0, "Esse vocabulário permite falar sobre experiências e interesses."]
    ]),
    2: buildQuestions(32, 2, [
      ["O que significa 必要?", ["Necessário", "Desnecessário", "Distante", "Antigo"], 0, "必要 significa necessário."],
      ["Qual é a leitura de 必要?", ["ひつよう", "たいせつ", "あんぜん", "しんぱい"], 0, "必要 é lido ひつよう."],
      ["O que significa 大切?", ["Importante ou precioso", "Perigoso", "Barato", "Pequeno"], 0, "大切 significa importante ou precioso."],
      ["Qual é a leitura de 大切?", ["たいせつ", "ひつよう", "あんぜん", "しんぱい"], 0, "大切 é lido たいせつ."],
      ["O que significa 安全?", ["Segurança", "Perigo", "Experiência", "Pesquisa"], 0, "安全 significa segurança."],
      ["Qual é a leitura de 安全?", ["あんぜん", "しんぱい", "たいせつ", "ひつよう"], 0, "安全 é lido あんぜん."],
      ["O que significa 心配?", ["Preocupação", "Alegria", "Viagem", "Hobby"], 0, "心配 significa preocupação."],
      ["Qual é a leitura de 心配?", ["しんぱい", "あんぜん", "ひつよう", "たいせつ"], 0, "心配 é lido しんぱい."],
      ["Qual frase significa 'isso é importante'?", ["これは大切です", "これは安全です", "これは経験です", "これは趣味です"], 0, "大切 significa importante."],
      ["Qual frase significa 'água é necessária'?", ["水が必要です", "水が心配です", "水が趣味です", "水が研究です"], 0, "必要 significa necessário."]
    ]),
    3: buildQuestions(32, 3, [
      ["O que significa 文化?", ["Cultura", "Natureza", "Economia", "Experiência"], 0, "文化 significa cultura."],
      ["Qual é a leitura de 文化?", ["ぶんか", "しぜん", "けいざい", "しゃかい"], 0, "文化 é lido ぶんか."],
      ["O que significa 自然?", ["Natureza", "Cultura", "Sociedade", "Empresa"], 0, "自然 significa natureza."],
      ["Qual é a leitura de 自然?", ["しぜん", "ぶんか", "しゃかい", "けいざい"], 0, "自然 é lido しぜん."],
      ["O que significa 社会?", ["Sociedade", "Natureza", "Cultura", "Família"], 0, "社会 significa sociedade."],
      ["Qual é a leitura de 社会?", ["しゃかい", "しぜん", "ぶんか", "けいざい"], 0, "社会 é lido しゃかい."],
      ["O que significa 世界?", ["Mundo", "País", "Cidade", "Escola"], 0, "世界 significa mundo."],
      ["Qual é a leitura de 世界?", ["せかい", "にほん", "しゃかい", "ぶんか"], 0, "世界 é lido せかい."],
      ["Qual palavra significa economia?", ["経済", "文化", "自然", "社会"], 0, "経済 significa economia."],
      ["Qual frase significa 'o mundo é grande'?", ["世界は大きいです", "世界は短いです", "世界は安いです", "世界は古いです"], 0, "世界 significa mundo e 大きい significa grande."]
    ]),
    4: buildQuestions(32, 4, [
      ["O que significa 問題?", ["Problema ou questão", "Resposta", "Pergunta de horário", "Experiência"], 0, "問題 significa problema ou questão."],
      ["Qual é a leitura de 問題?", ["もんだい", "こたえ", "しつもん", "せつめい"], 0, "問題 é lido もんだい."],
      ["O que significa 答え?", ["Resposta", "Pergunta", "Problema", "Explicação"], 0, "答え significa resposta."],
      ["Qual é a leitura de 答え?", ["こたえ", "もんだい", "しつもん", "せつめい"], 0, "答え é lido こたえ."],
      ["O que significa 質問?", ["Pergunta", "Resposta", "Problema", "Experiência"], 0, "質問 significa pergunta."],
      ["Qual é a leitura de 質問?", ["しつもん", "こたえ", "もんだい", "せつめい"], 0, "質問 é lido しつもん."],
      ["O que significa 説明?", ["Explicação", "Resposta", "Pergunta", "Problema"], 0, "説明 significa explicação."],
      ["Qual é a leitura de 説明?", ["せつめい", "もんだい", "しつもん", "こたえ"], 0, "説明 é lido せつめい."],
      ["Qual frase significa 'tenho uma pergunta'?", ["質問があります", "答えがあります", "世界があります", "文化があります"], 0, "質問があります significa tenho uma pergunta."],
      ["Qual frase significa 'a resposta está correta'?", ["答えは正しいです", "答えは長いです", "答えは高いです", "答えは古いです"], 0, "正しい significa correto."]
    ]),
    5: buildQuestions(32, 5, [
      ["O que significa 場所?", ["Lugar", "Horário", "Pessoa", "Objeto"], 0, "場所 significa lugar."],
      ["Qual é a leitura de 場所?", ["ばしょ", "じかん", "ひと", "もの"], 0, "場所 é lido ばしょ."],
      ["O que significa 方法?", ["Método ou maneira", "Lugar", "Experiência", "Problema"], 0, "方法 significa método ou maneira."],
      ["Qual é a leitura de 方法?", ["ほうほう", "ばしょ", "もんだい", "けいけん"], 0, "方法 é lido ほうほう."],
      ["O que significa 理由?", ["Motivo ou razão", "Resposta", "Lugar", "Horário"], 0, "理由 significa motivo ou razão."],
      ["Qual é a leitura de 理由?", ["りゆう", "ほうほう", "ばしょ", "もんだい"], 0, "理由 é lido りゆう."],
      ["O que significa 自分?", ["A si mesmo", "Outra pessoa", "Família", "Sociedade"], 0, "自分 significa a própria pessoa ou si mesmo."],
      ["Qual é a leitura de 自分?", ["じぶん", "ひとり", "せかい", "しゃかい"], 0, "自分 é lido じぶん."],
      ["Qual frase significa 'quero saber o motivo'?", ["理由を知りたいです", "場所を食べたいです", "方法を飲みたいです", "自分を読みたいです"], 0, "理由を知りたいです significa quero saber o motivo."],
      ["Qual é a utilidade de aprender vocabulário intermediário?", ["Expressar ideias mais variadas e específicas", "Evitar aprender kanji", "Usar somente frases de uma palavra", "Eliminar a leitura"], 0, "Esse vocabulário amplia a capacidade de comunicação."]
    ]),
    6: buildQuestions(32, 6, [
      ["Qual palavra significa experiência?", ["経験", "趣味", "文化", "場所"], 0, "経験 significa experiência."],
      ["Qual palavra significa necessário?", ["必要", "大切", "安全", "心配"], 0, "必要 significa necessário."],
      ["Qual palavra significa natureza?", ["自然", "文化", "社会", "世界"], 0, "自然 significa natureza."],
      ["Qual palavra significa pergunta?", ["質問", "答え", "問題", "説明"], 0, "質問 significa pergunta."],
      ["Qual palavra significa explicação?", ["説明", "質問", "答え", "問題"], 0, "説明 significa explicação."],
      ["Qual palavra significa motivo?", ["理由", "場所", "方法", "経験"], 0, "理由 significa motivo."],
      ["Leia: 日本の文化に興味があります。 O que desperta interesse?", ["A cultura japonesa", "A economia japonesa", "A natureza brasileira", "A escola japonesa"], 0, "文化 significa cultura."],
      ["Leia: この問題の答えを説明します。 O que será explicado?", ["A resposta do problema", "O lugar da viagem", "O horário da escola", "O hobby do amigo"], 0, "問題 significa problema e 答え significa resposta."],
      ["Leia: 安全のために、この方法を使います。 Por que a pessoa usa esse método?", ["Por segurança", "Por diversão", "Por preocupação", "Por experiência"], 0, "安全 significa segurança e ために indica finalidade."],
      ["Qual é o objetivo da semana 32?", ["Ampliar o vocabulário intermediário", "Aprender somente os números", "Repetir apenas hiragana", "Evitar palavras compostas"], 0, "A semana apresenta vocabulário mais amplo e abstrato."]
    ])
  },
  recovery: buildRecovery(32, [
    ["Qual palavra significa experiência?", ["経験", "趣味", "文化", "場所"], 0, "経験 significa experiência."],
    ["Qual palavra significa importante?", ["大切", "必要", "安全", "心配"], 0, "大切 significa importante ou precioso."],
    ["Qual palavra significa sociedade?", ["社会", "自然", "文化", "世界"], 0, "社会 significa sociedade."],
    ["Qual palavra significa resposta?", ["答え", "質問", "問題", "説明"], 0, "答え significa resposta."],
    ["Qual palavra significa motivo?", ["理由", "方法", "場所", "経験"], 0, "理由 significa motivo ou razão."]
  ])
},

33: {
  days: {
    1: buildQuestions(33, 1, [
      ["Leia: 田中さんは毎朝六時に起きます。朝ご飯を食べてから、学校へ行きます。 O que Tanaka faz primeiro?", ["Acorda às seis", "Vai à escola", "Janta", "Lê um livro"], 0, "A primeira informação é 毎朝六時に起きます, acorda às seis todas as manhãs."],
      ["Qual é o significado de 食べてから?", ["Depois de comer", "Antes de comer", "Enquanto dorme", "Sem comer"], 0, "～てから indica que uma ação acontece depois de outra."],
      ["Para onde Tanaka vai?", ["À escola", "Ao hospital", "Ao aeroporto", "À empresa"], 0, "学校へ行きます significa vai à escola."],
      ["Qual palavra indica café da manhã?", ["朝ご飯", "昼ご飯", "晩ご飯", "夕方"], 0, "朝ご飯 significa café da manhã."],
      ["Qual é o significado de 毎朝?", ["Todas as manhãs", "Todas as noites", "Todo domingo", "Todo ano"], 0, "毎朝 significa todas as manhãs."],
      ["O texto apresenta principalmente...", ["Uma rotina matinal", "Uma viagem", "Uma compra", "Uma festa"], 0, "As ações de acordar, comer e ir à escola descrevem uma rotina."],
      ["Qual informação aparece no texto?", ["O horário em que Tanaka acorda", "O nome do professor", "O preço do café da manhã", "A cidade onde mora"], 0, "O texto informa que ele acorda às seis."],
      ["Qual é a função de から em 食べてから?", ["Indicar que algo acontece depois de uma ação", "Indicar posse", "Indicar pergunta", "Indicar localização"], 0, "～てから expressa sequência de ações."],
      ["Qual é a melhor forma de compreender o texto?", ["Identificar as ações e a sequência", "Traduzir somente os kanji", "Ignorar os verbos", "Adivinhar pelo primeiro caractere"], 0, "A sequência das ações revela a rotina descrita."],
      ["O que significa 学校?", ["Escola", "Hospital", "Empresa", "Biblioteca"], 0, "学校 significa escola."]
    ]),
    2: buildQuestions(33, 2, [
      ["Leia: 山田さんは日本語を勉強しています。毎日、新しい言葉をノートに書きます。 O que Yamada está estudando?", ["Japonês", "Inglês", "Matemática", "Música"], 0, "日本語 significa língua japonesa."],
      ["O que ele escreve no caderno?", ["Palavras novas", "Números de telefone", "Receitas", "Endereços de hospitais"], 0, "新しい言葉 significa palavras novas."],
      ["Qual é o significado de 毎日?", ["Todos os dias", "Toda semana", "Todo mês", "Todo ano"], 0, "毎日 significa todos os dias."],
      ["Qual é o significado de 言葉?", ["Palavra ou linguagem", "Livro", "Caderno", "Escola"], 0, "言葉 significa palavra ou linguagem."],
      ["Qual é a leitura de 新しい?", ["あたらしい", "ふるい", "たかい", "やすい"], 0, "新しい significa novo."],
      ["Qual é a leitura de 書きます?", ["かきます", "よみます", "ききます", "はなします"], 0, "書きます significa escrever."],
      ["Qual é o significado de ノート?", ["Caderno", "Livro", "Jornal", "Telefone"], 0, "ノート é uma palavra escrita em katakana e significa caderno."],
      ["Qual hábito o texto descreve?", ["Anotar palavras novas diariamente", "Viajar todos os dias", "Comprar livros semanalmente", "Trabalhar à noite"], 0, "A pessoa escreve palavras novas no caderno todos os dias."],
      ["O que significa 勉強しています?", ["Está estudando", "Está dormindo", "Está viajando", "Está trabalhando"], 0, "勉強しています indica estudo em andamento."],
      ["Qual estratégia ajuda a entender a ideia geral?", ["Relacionar a ação de estudar com a de anotar palavras", "Ignorar as palavras conhecidas", "Traduzir somente ノート", "Ler apenas os números"], 0, "As duas ações formam uma rotina de estudo."]
    ]),
    3: buildQuestions(33, 3, [
      ["Leia: 日曜日、私は友達と映画を見に行きました。映画の後で、レストランで昼ご飯を食べました。 O que a pessoa fez primeiro?", ["Assistiu a um filme", "Almoçou", "Foi à escola", "Comprou um livro"], 0, "映画を見に行きました aparece antes da refeição."],
      ["Onde a pessoa almoçou?", ["Em um restaurante", "Na escola", "No hospital", "Em casa"], 0, "レストラン significa restaurante."],
      ["Quando aconteceu?", ["Domingo", "Segunda-feira", "Sexta-feira", "Quarta-feira"], 0, "日曜日 significa domingo."],
      ["Qual é o significado de 映画?", ["Filme", "Fotografia", "Música", "Jornal"], 0, "映画 significa filme."],
      ["Qual é o significado de 映画の後で?", ["Depois do filme", "Antes do filme", "Durante a manhã", "No próximo ano"], 0, "後で significa depois."],
      ["Qual é o significado de 昼ご飯?", ["Almoço", "Café da manhã", "Jantar", "Lanche noturno"], 0, "昼ご飯 significa almoço."],
      ["Qual é a leitura de 友達?", ["ともだち", "せんせい", "がくせい", "かぞく"], 0, "友達 é lido ともだち."],
      ["Qual é a sequência correta?", ["Filme e depois almoço", "Almoço e depois filme", "Escola e depois hospital", "Viagem e depois trabalho"], 0, "O texto apresenta o filme primeiro e o almoço depois."],
      ["Qual informação não aparece no texto?", ["O nome do filme", "O dia da semana", "A companhia", "O local do almoço"], 0, "O título do filme não é informado."],
      ["Qual é o objetivo da leitura?", ["Compreender uma sequência de acontecimentos", "Memorizar somente nomes de kanji", "Aprender a escrever um endereço", "Contar objetos"], 0, "O texto permite identificar eventos e sua ordem."]
    ]),
    4: buildQuestions(33, 4, [
      ["Leia: 私の趣味は写真を撮ることです。週末によく公園へ行きます。 Qual é o hobby da pessoa?", ["Tirar fotografias", "Ler jornais", "Cozinhar", "Viajar de trem"], 0, "写真を撮ること significa tirar fotografias."],
      ["Onde ela costuma ir nos fins de semana?", ["Ao parque", "Ao hospital", "À empresa", "À escola"], 0, "公園 significa parque."],
      ["Qual é o significado de 趣味?", ["Hobby", "Trabalho", "Problema", "Resposta"], 0, "趣味 significa hobby."],
      ["Qual é o significado de 週末?", ["Fim de semana", "Dia de semana", "Próximo ano", "Ontem"], 0, "週末 significa fim de semana."],
      ["O que significa よく nesse contexto?", ["Frequentemente", "Nunca", "Ontem", "Talvez"], 0, "よく pode significar frequentemente."],
      ["Qual é a leitura de 写真?", ["しゃしん", "えいが", "おんがく", "しんぶん"], 0, "写真 é lido しゃしん."],
      ["Qual é a leitura de 公園?", ["こうえん", "びょういん", "としょかん", "がっこう"], 0, "公園 é lido こうえん."],
      ["O texto apresenta...", ["Um hobby e um hábito de fim de semana", "Uma rotina de trabalho", "Uma consulta médica", "Uma viagem internacional"], 0, "A pessoa apresenta seu hobby e o local que visita."],
      ["Qual frase significa 'meu hobby é tirar fotos'?", ["趣味は写真を撮ることです", "趣味は本を食べることです", "趣味は学校へ行くことです", "趣味は水を飲むことです"], 0, "A frase relaciona 趣味 com a atividade de tirar fotos."],
      ["Como interpretar uma frase sem traduzir palavra por palavra?", ["Usar o contexto, as palavras conhecidas e a estrutura", "Ignorar todos os verbos", "Ler somente o primeiro kanji", "Substituir tudo por romaji"], 0, "O contexto e a estrutura ajudam a compreender o sentido geral."]
    ]),
    5: buildQuestions(33, 5, [
      ["Leia: 日本の春は暖かいです。桜がたくさん咲きます。 O que acontece na primavera japonesa?", ["As cerejeiras florescem", "Neva todos os dias", "As escolas desaparecem", "Os rios ficam vazios"], 0, "桜が咲きます significa que as cerejeiras florescem."],
      ["Qual é o significado de 春?", ["Primavera", "Verão", "Outono", "Inverno"], 0, "春 significa primavera."],
      ["Qual é o significado de 暖かい?", ["Ameno ou quente de maneira agradável", "Muito frio", "Escuro", "Barulhento"], 0, "暖かい descreve uma temperatura agradável e amena."],
      ["Qual é o significado de 桜?", ["Flor de cerejeira", "Pinheiro", "Montanha", "Rio"], 0, "桜 significa cerejeira ou flor de cerejeira."],
      ["Qual é o significado de 咲きます?", ["Floresce", "Cai", "Cresce para baixo", "Desaparece"], 0, "咲きます significa florescer."],
      ["Qual é o assunto principal do texto?", ["A primavera no Japão", "O inverno no Brasil", "Uma viagem de trem", "Uma refeição"], 0, "O texto descreve características da primavera japonesa."],
      ["Qual é a leitura de 春?", ["はる", "なつ", "あき", "ふゆ"], 0, "春 é lido はる."],
      ["Qual é a leitura de 桜?", ["さくら", "やま", "かわ", "はなび"], 0, "桜 é lido さくら."],
      ["Qual informação está presente?", ["A primavera é amena", "O verão é muito frio", "O outono tem neve", "O inverno não existe"], 0, "暖かい indica temperatura amena."],
      ["Qual habilidade está sendo praticada?", ["Inferir o tema e compreender vocabulário pelo contexto", "Traduzir cada símbolo isoladamente", "Contar objetos", "Escrever apenas hiragana"], 0, "O texto permite entender o assunto geral por meio do contexto."]
    ]),
    6: buildQuestions(33, 6, [
      ["Leia: 田中さんは去年、京都へ行きました。古いお寺を見て、日本の歴史を勉強しました。 Para onde Tanaka foi?", ["Kyoto", "Tóquio", "Osaka", "Hokkaido"], 0, "京都 é Kyoto."],
      ["Quando ele foi?", ["No ano passado", "No próximo ano", "Hoje", "Amanhã"], 0, "去年 significa ano passado."],
      ["O que ele viu?", ["Templos antigos", "Carros novos", "Filmes modernos", "Animais no parque"], 0, "古いお寺 significa templos antigos."],
      ["O que ele estudou?", ["História japonesa", "Matemática", "Música brasileira", "Economia inglesa"], 0, "日本の歴史 significa história do Japão."],
      ["Qual é o significado de 歴史?", ["História", "Natureza", "Cultura", "Sociedade"], 0, "歴史 significa história."],
      ["Qual é a leitura de 去年?", ["きょねん", "らいねん", "ことし", "まいにち"], 0, "去年 é lido きょねん."],
      ["Qual é o significado de お寺?", ["Templo", "Hospital", "Escola", "Biblioteca"], 0, "お寺 significa templo budista."],
      ["Qual é a leitura de 京都?", ["きょうと", "とうきょう", "おおさか", "なら"], 0, "京都 é lido きょうと."],
      ["Qual é a sequência de acontecimentos?", ["Foi a Kyoto, viu templos e estudou história", "Estudou história, foi à escola e trabalhou", "Comprou um carro e viajou", "Comeu e depois dormiu"], 0, "A ordem das informações está apresentada no texto."],
      ["Qual é o objetivo da semana 33?", ["Ler textos simples compreendendo a ideia geral sem traduzir tudo", "Traduzir obrigatoriamente cada caractere", "Estudar somente romaji", "Evitar textos com kanji"], 0, "A semana desenvolve leitura contextual e compreensão global."]
    ])
  },
  recovery: buildRecovery(33, [
    ["Qual expressão significa depois de comer?", ["食べてから", "食べたい", "食べません", "食べました"], 0, "～てから indica que uma ação ocorre depois de outra."],
    ["Qual palavra significa filme?", ["映画", "写真", "音楽", "新聞"], 0, "映画 significa filme."],
    ["Qual palavra significa hobby?", ["趣味", "経験", "問題", "理由"], 0, "趣味 significa hobby."],
    ["Qual palavra significa primavera?", ["春", "夏", "秋", "冬"], 0, "春 significa primavera."],
    ["Qual é a melhor estratégia para ler sem traduzir palavra por palavra?", ["Usar contexto, estrutura e palavras conhecidas", "Ignorar as frases", "Ler apenas os kanji isolados", "Adivinhar sem observar"], 0, "A compreensão global depende do contexto e da estrutura."]
  ])
},

34: {
  days: {
    1: buildQuestions(34, 1, [
      ["Qual sistema de escrita é usado principalmente para palavras japonesas nativas e terminações gramaticais?", ["Hiragana", "Katakana", "Kanji", "Romaji"], 0, "Hiragana é muito usado em palavras japonesas e elementos gramaticais."],
      ["Qual sistema é frequentemente usado para palavras estrangeiras e empréstimos?", ["Katakana", "Hiragana", "Kanji", "Romaji"], 0, "Katakana é usado frequentemente para palavras estrangeiras."],
      ["Qual sistema representa muitos caracteres de origem chinesa usados na escrita japonesa?", ["Kanji", "Hiragana", "Katakana", "Romaji"], 0, "Kanji são caracteres usados para representar significados e palavras."],
      ["Qual sistema aparece em こんにちは?", ["Hiragana", "Katakana", "Kanji", "Romaji"], 0, "こんにちは é escrito em hiragana."],
      ["Qual sistema aparece em テレビ?", ["Katakana", "Hiragana", "Kanji", "Romaji"], 0, "テレビ está escrito em katakana."],
      ["Qual sistema aparece em 日本?", ["Kanji", "Hiragana", "Katakana", "Romaji"], 0, "日本 é formado por kanji."],
      ["Qual escrita mistura kanji e hiragana?", ["日本語を勉強します", "ニホンゴ", "にほんご", "nihongo"], 0, "A frase combina kanji com hiragana."],
      ["Qual escrita mistura katakana e hiragana?", ["テレビを見ます", "日本語を勉強します", "学校へ行きます", "本を読みます"], 0, "テレビ está em katakana e を見ます em hiragana."],
      ["Qual é a função das partículas como は, を e に?", ["Indicar relações gramaticais na frase", "Representar somente cores", "Substituir todos os verbos", "Indicar apenas números"], 0, "As partículas mostram relações entre os elementos da frase."],
      ["Qual é o objetivo desta revisão?", ["Distinguir os sistemas de escrita e entender como trabalham juntos", "Usar somente romaji", "Abandonar os kanji", "Misturar caracteres sem significado"], 0, "A revisão integra os três sistemas de escrita."]
    ]),
    2: buildQuestions(34, 2, [
      ["Qual é o significado de 私は学生です?", ["Eu sou estudante", "Eu sou professor", "Eu vou à escola", "Eu leio um livro"], 0, "私は学生です significa eu sou estudante."],
      ["Qual é o significado de 猫がいます?", ["Há um gato", "Há um cachorro", "Eu como um gato", "Eu leio um livro"], 0, "猫 significa gato e います indica existência de seres vivos."],
      ["Qual é o significado de 水を飲みます?", ["Bebo água", "Como água", "Leio água", "Escrevo água"], 0, "水 significa água e 飲みます significa beber."],
      ["Qual é o significado de 本を読みます?", ["Leio um livro", "Escrevo um livro", "Compro água", "Bebo chá"], 0, "本 significa livro e 読みます significa ler."],
      ["Qual partícula marca frequentemente o objeto direto?", ["を", "は", "に", "で"], 0, "を marca frequentemente o objeto direto da ação."],
      ["Qual partícula pode marcar o tópico da frase?", ["は", "を", "で", "へ"], 0, "は marca o tópico da frase."],
      ["Qual partícula pode indicar destino?", ["へ", "を", "が", "の"], 0, "へ pode indicar direção ou destino."],
      ["Qual partícula pode indicar o local onde uma ação acontece?", ["で", "の", "は", "を"], 0, "で indica frequentemente o local de uma ação."],
      ["Qual frase significa 'vou à escola'?", ["学校へ行きます", "学校を飲みます", "学校が食べます", "学校の読みます"], 0, "学校へ行きます significa ir à escola."],
      ["Qual é a habilidade principal desta aula?", ["Reconhecer estruturas gramaticais em frases", "Memorizar somente katakana", "Escrever somente números", "Ignorar partículas"], 0, "A aula revisa partículas e estruturas básicas."]
    ]),
    3: buildQuestions(34, 3, [
      ["Qual frase está no passado?", ["昨日、学校へ行きました", "毎日、学校へ行きます", "明日、学校へ行きます", "学校へ行きたいです"], 0, "行きました é a forma passada de 行きます."],
      ["Qual frase expressa desejo?", ["日本へ行きたいです", "日本へ行きました", "日本へ行きません", "日本へ行きます"], 0, "たい expressa desejo."],
      ["Qual frase expressa negação?", ["水を飲みません", "水を飲みました", "水を飲みたいです", "水を飲んでいます"], 0, "飲みません é a forma negativa educada."],
      ["Qual frase indica uma ação em andamento?", ["本を読んでいます", "本を読みました", "本を読みません", "本を読みたいです"], 0, "読んでいます indica uma ação em andamento."],
      ["Qual frase expressa intenção?", ["日本へ行くつもりです", "日本へ行きました", "日本へ行きません", "日本へ行っています"], 0, "つもりです expressa intenção ou plano."],
      ["Qual frase expressa uma habilidade?", ["日本語を話すことができます", "日本語を話しました", "日本語を話しません", "日本語を話したいです"], 0, "ことができます expressa capacidade."],
      ["Qual forma é usada para conectar ações?", ["Forma て", "Forma ない", "Forma た", "Forma do passado"], 0, "A forma て pode conectar ações e estruturas gramaticais."],
      ["Qual é a forma negativa de 食べます?", ["食べません", "食べました", "食べたいです", "食べています"], 0, "食べません é a forma negativa educada."],
      ["Qual é a forma passada de 読みます?", ["読みました", "読みません", "読みたいです", "読んでいます"], 0, "読みました indica que a ação aconteceu no passado."],
      ["Qual é o objetivo desta aula?", ["Revisar tempos, negação, desejos e intenções", "Estudar apenas cores", "Aprender somente números", "Abandonar a gramática"], 0, "A aula reúne estruturas gramaticais estudadas anteriormente."]
    ]),
    4: buildQuestions(34, 4, [
      ["Qual é a leitura de 学校?", ["がっこう", "せんせい", "がくせい", "としょかん"], 0, "学校 é lido がっこう."],
      ["Qual é a leitura de 電車?", ["でんしゃ", "でんわ", "じてんしゃ", "しんぶん"], 0, "電車 é lido でんしゃ."],
      ["Qual é a leitura de 日本語?", ["にほんご", "にほんじん", "とうきょう", "おおさか"], 0, "日本語 é lido にほんご."],
      ["Qual é a leitura de 先生?", ["せんせい", "がくせい", "ともだち", "かぞく"], 0, "先生 é lido せんせい."],
      ["Qual é a leitura de 旅行?", ["りょこう", "しごと", "かいしゃ", "でんわ"], 0, "旅行 é lido りょこう."],
      ["Qual é a leitura de 図書館?", ["としょかん", "びょういん", "がっこう", "くうこう"], 0, "図書館 é lido としょかん."],
      ["Qual é a leitura de 趣味?", ["しゅみ", "けいけん", "せいかつ", "ぶんか"], 0, "趣味 é lido しゅみ."],
      ["Qual é a leitura de 経験?", ["けいけん", "けんきゅう", "しゅみ", "せかい"], 0, "経験 é lido けいけん."],
      ["Qual é a leitura de 春?", ["はる", "なつ", "あき", "ふゆ"], 0, "春 é lido はる."],
      ["Qual é a leitura de 世界?", ["せかい", "しゃかい", "しぜん", "ぶんか"], 0, "世界 é lido せかい."]
    ]),
    5: buildQuestions(34, 5, [
      ["Leia: 私は毎日、日本語を勉強します。 O que a pessoa estuda?", ["Japonês", "Inglês", "Matemática", "Música"], 0, "日本語 significa língua japonesa."],
      ["Leia: 昨日、友達と映画を見ました。 O que a pessoa fez ontem?", ["Assistiu a um filme com um amigo", "Foi ao hospital", "Comprou um livro", "Trabalhou na escola"], 0, "映画を見ました significa assistiu a um filme."],
      ["Leia: 明日、学校へ行きません。 O que a pessoa fará amanhã?", ["Não irá à escola", "Irá à escola", "Foi à escola", "Quer ir à escola"], 0, "行きません é a forma negativa de ir."],
      ["Leia: 私の趣味は本を読むことです。 Qual é o hobby?", ["Ler livros", "Assistir a filmes", "Viajar", "Cozinhar"], 0, "本を読むこと significa ler livros."],
      ["Leia: 来年、日本へ旅行するつもりです。 Qual é o plano?", ["Viajar para o Japão no próximo ano", "Trabalhar no Japão ontem", "Estudar no Brasil amanhã", "Comprar uma casa hoje"], 0, "来年 significa próximo ano e つもりです indica intenção."],
      ["Leia: 母は病院で働いています。 Onde a mãe trabalha?", ["No hospital", "Na escola", "Na biblioteca", "No parque"], 0, "病院 significa hospital."],
      ["Leia: この本は新しくて、おもしろいです。 Como é o livro?", ["Novo e interessante", "Antigo e caro", "Pequeno e perigoso", "Longo e difícil"], 0, "新しい significa novo e おもしろい significa interessante."],
      ["Leia: 日曜日に家族と公園へ行きました。 Para onde a pessoa foi?", ["Ao parque", "À empresa", "Ao hospital", "À biblioteca"], 0, "公園 significa parque."],
      ["Leia: 水を飲んでから、薬を飲みます。 O que a pessoa faz primeiro?", ["Bebe água", "Toma o remédio", "Vai à escola", "Lê um livro"], 0, "飲んでから indica que a primeira ação acontece antes da seguinte."],
      ["Qual é a melhor maneira de interpretar essas frases?", ["Combinar vocabulário, kanji, partículas e gramática", "Ignorar as partículas", "Ler somente em romaji", "Traduzir apenas o primeiro caractere"], 0, "A compreensão depende da integração de todos os elementos."]
    ]),
    6: buildQuestions(34, 6, [
      ["Qual sistema é usado em ねこ?", ["Hiragana", "Katakana", "Kanji", "Romaji"], 0, "ねこ está escrito em hiragana."],
      ["Qual sistema é usado em コーヒー?", ["Katakana", "Hiragana", "Kanji", "Romaji"], 0, "コーヒー está escrito em katakana."],
      ["Qual sistema é usado em 山?", ["Kanji", "Hiragana", "Katakana", "Romaji"], 0, "山 é um kanji que significa montanha."],
      ["Qual palavra significa montanha?", ["山", "川", "水", "木"], 0, "山 significa montanha."],
      ["Qual palavra significa rio?", ["川", "山", "火", "空"], 0, "川 significa rio."],
      ["Qual frase significa 'ontem estudei japonês'?", ["昨日、日本語を勉強しました", "明日、日本語を勉強します", "毎日、日本語を勉強します", "昨日、日本語を勉強したいです"], 0, "昨日 significa ontem e 勉強しました indica estudo no passado."],
      ["Qual frase significa 'quero ler este livro'?", ["この本を読みたいです", "この本を読みました", "この本を読みません", "この本を読んでいます"], 0, "読みたいです expressa o desejo de ler."],
      ["Qual frase significa 'estou estudando'?", ["勉強しています", "勉強しました", "勉強しません", "勉強したいです"], 0, "しています indica uma ação em andamento."],
      ["O que significa いちばん?", ["O mais ou o número um", "O último", "O menor", "O antigo"], 0, "いちばん pode indicar o mais ou o primeiro, conforme o contexto."],
      ["Qual é a meta final desta fase?", ["Ler e compreender textos básicos que misturam kanji, hiragana e katakana", "Usar somente romaji", "Memorizar kanji sem vocabulário", "Abandonar a leitura de frases"], 0, "A fase termina integrando os sistemas de escrita e a gramática."]
    ])
  },
  recovery: buildRecovery(34, [
    ["Qual sistema é usado principalmente para palavras estrangeiras?", ["Katakana", "Hiragana", "Kanji", "Romaji"], 0, "Katakana é usado frequentemente para palavras estrangeiras."],
    ["Qual frase está no passado?", ["昨日、学校へ行きました", "毎日、学校へ行きます", "明日、学校へ行きます", "学校へ行きたいです"], 0, "行きました indica passado."],
    ["Qual palavra significa biblioteca?", ["図書館", "病院", "会社", "空港"], 0, "図書館 significa biblioteca."],
    ["Qual frase expressa desejo?", ["本を読みたいです", "本を読みました", "本を読みません", "本を読んでいます"], 0, "読みたいです expressa o desejo de ler."],
    ["Qual é a meta da revisão geral?", ["Integrar kanji, katakana, hiragana e gramática", "Estudar somente romaji", "Abandonar os kanji", "Aprender apenas números"], 0, "A revisão reúne os principais conteúdos estudados na fase."]
  ])
},


35: {
  days: {
    1: buildQuestions(35, 1, [
      ["Qual frase significa 'eu estudo japonês todos os dias'?", ["毎日、日本語を勉強します", "昨日、日本語を勉強しました", "日本語を勉強したいです", "日本語を勉強しません"], 0, "毎日 significa todos os dias e 勉強します significa estudar."],
      ["Qual é a função de は em 私は学生です?", ["Marcar o tópico da frase", "Indicar o objeto direto", "Indicar o passado", "Indicar o destino"], 0, "は apresenta o tópico sobre o qual a frase fala."],
      ["Qual frase está na forma negativa educada?", ["本を読みません", "本を読みました", "本を読みたいです", "本を読んでいます"], 0, "読みません é a forma negativa educada de 読みます."],
      ["Qual frase está no passado?", ["昨日、映画を見ました", "毎日、映画を見ます", "明日、映画を見ます", "映画を見たいです"], 0, "見ました é a forma passada de 見ます."],
      ["Qual frase expressa desejo?", ["日本へ行きたいです", "日本へ行きました", "日本へ行きません", "日本へ行っています"], 0, "たい expressa vontade ou desejo de realizar uma ação."],
      ["Qual frase indica uma ação em andamento?", ["本を読んでいます", "本を読みました", "本を読みません", "本を読みたいです"], 0, "読んでいます indica que a leitura está acontecendo."],
      ["Qual frase indica intenção?", ["日本へ行くつもりです", "日本へ行きました", "日本へ行きません", "日本へ行っています"], 0, "つもりです expressa intenção ou plano."],
      ["Qual expressão indica capacidade?", ["話すことができます", "話したいです", "話しません", "話しました"], 0, "ことができます expressa capacidade de fazer algo."],
      ["Qual é a função da forma て?", ["Conectar ações e participar de várias construções gramaticais", "Indicar somente o passado", "Transformar todas as frases em perguntas", "Indicar apenas posse"], 0, "A forma て conecta ações e aparece em estruturas como ～ています."],
      ["Qual é o objetivo desta aula?", ["Revisar estruturas gramaticais fundamentais", "Aprender somente números", "Estudar apenas katakana", "Abandonar as partículas"], 0, "A aula consolida estruturas já estudadas."]
    ]),
    2: buildQuestions(35, 2, [
      ["Qual frase usa corretamente a partícula を?", ["水を飲みます", "水は飲みますを", "水に飲みます", "水で飲みますを"], 0, "を marca o objeto da ação de beber."],
      ["Qual frase usa corretamente a partícula で para indicar local de ação?", ["図書館で本を読みます", "図書館を本に読みます", "図書館は本をに読みます", "図書館へ本で読みます"], 0, "で indica o local onde a ação de ler acontece."],
      ["Qual frase indica destino?", ["学校へ行きます", "学校を行きます", "学校が行きます", "学校の行きます"], 0, "へ indica direção ou destino."],
      ["Qual frase indica posse ou relação entre substantivos?", ["私の本です", "私を本です", "私で本です", "私へ本です"], 0, "の conecta substantivos e pode indicar posse."],
      ["Qual frase apresenta corretamente uma existência usando あります?", ["机の上に本があります", "机の上を本があります", "机の上で本ですあります", "机の上へ本をあります"], 0, "あります é usado para existência de objetos e coisas inanimadas."],
      ["Qual frase apresenta corretamente uma existência usando います?", ["公園に猫がいます", "公園を猫がいます", "公園で猫をいます", "公園へ猫のいます"], 0, "います é usado para existência de seres vivos."],
      ["Qual frase significa 'a comida é deliciosa'?", ["食べ物はおいしいです", "食べ物をおいしいです", "食べ物でおいしいです", "食べ物へおいしいです"], 0, "は marca o tópico e おいしい descreve a comida."],
      ["Qual frase significa 'estudo japonês na escola'?", ["学校で日本語を勉強します", "学校へ日本語が勉強します", "学校を日本語に勉強します", "学校の日本語で勉強します"], 0, "学校で indica o local e 日本語を indica o objeto do estudo."],
      ["Qual frase está organizada corretamente?", ["私は毎日、本を読みます", "私を毎日本は読みます", "私は毎日を本に読みます", "私で毎日、本が読みます"], 0, "A primeira frase usa tópico, expressão de frequência e objeto corretamente."],
      ["O que a revisão das partículas ajuda a desenvolver?", ["A compreensão das relações entre as palavras", "A memorização de cores", "A escrita de números romanos", "A eliminação dos verbos"], 0, "As partículas ajudam a entender a função de cada elemento na frase."]
    ]),
    3: buildQuestions(35, 3, [
      ["Qual frase significa 'este livro é maior que aquele'?", ["この本はあの本より大きいです", "この本はあの本を大きいです", "この本があの本で大きいです", "この本はあの本に大きいです"], 0, "より introduz o elemento usado na comparação."],
      ["Qual estrutura expressa 'o mais'?", ["いちばん", "あまり", "まだ", "もう"], 0, "いちばん indica o grau máximo em uma comparação."],
      ["Qual frase significa 'gosto mais de chá do que de café'?", ["コーヒーよりお茶のほうが好きです", "コーヒーをお茶が好きです", "コーヒーでお茶を好きです", "コーヒーにお茶より好きです"], 0, "より apresenta café como referência e のほうが destaca o chá."],
      ["Qual expressão significa 'mais do que' em uma comparação?", ["より", "から", "まで", "だけ"], 0, "より é usado para estabelecer comparação."],
      ["Qual frase significa 'qual é o mais interessante?'", ["どれがいちばんおもしろいですか", "どれをおもしろいですか", "どれでおもしろいですか", "どれにおもしろいですか"], 0, "いちばん indica o grau máximo e どれ pergunta qual."],
      ["Qual é a função de ほう em のほうが?", ["Destacar um lado da comparação", "Indicar passado", "Indicar negação", "Indicar posse obrigatoriamente"], 0, "～のほうが destaca o elemento preferido ou comparado."],
      ["Qual frase expressa preferência corretamente?", ["私は犬より猫のほうが好きです", "私は犬を猫が好きです", "私は犬で猫を好きです", "私は犬に猫の好きです"], 0, "A estrutura compara cães e gatos e destaca a preferência por gatos."],
      ["O que significa あまり em uma frase negativa como あまり好きではありません?", ["Não gostar muito", "Gostar muito", "Gostar de tudo", "Gostar mais"], 0, "あまり com negação indica que algo não acontece ou não é verdadeiro em grande intensidade."],
      ["Qual frase significa 'este é o mais barato'?", ["これがいちばん安いです", "これをいちばん安いです", "これでいちばん安いです", "これにいちばん安いです"], 0, "いちばん安い significa o mais barato."],
      ["Qual é o objetivo desta revisão?", ["Compreender comparações e preferências", "Aprender somente o passado", "Estudar apenas cumprimentos", "Eliminar adjetivos"], 0, "Comparações permitem expressar diferenças e preferências."]
    ]),
    4: buildQuestions(35, 4, [
      ["Qual frase significa 'quando cheguei em casa, comi'?", ["家に帰ってから、食べました", "家に帰りたいから、食べました", "家に帰りませんから、食べました", "家に帰るつもりから、食べました"], 0, "帰ってから indica que comer aconteceu depois de voltar para casa."],
      ["Qual expressão indica uma sequência: primeiro uma ação, depois outra?", ["～てから", "～たい", "～ません", "～でしょう"], 0, "～てから conecta ações em sequência temporal."],
      ["Qual frase significa 'estou estudando e ouvindo música'?", ["勉強しながら音楽を聞いています", "勉強したい音楽を聞きます", "勉強しません音楽を聞きます", "勉強しました音楽を聞きます"], 0, "ながら indica duas ações realizadas simultaneamente pelo mesmo sujeito."],
      ["Qual é a função de から em 暑いから?", ["Indicar motivo ou causa", "Indicar posse", "Indicar destino", "Indicar comparação"], 0, "から pode indicar a razão de alguma coisa."],
      ["Qual frase significa 'estou ocupado, então não posso ir'?", ["忙しいですから、行けません", "忙しいですより、行けません", "忙しいですの、行けません", "忙しいですへ、行けません"], 0, "から apresenta a razão para não poder ir."],
      ["Qual frase significa 'antes de dormir, leio um livro'?", ["寝る前に本を読みます", "寝た後に本を読みます", "寝てから本を読みません", "寝たい本を読みます"], 0, "前に significa antes e é usado com a forma de dicionário do verbo."],
      ["Qual frase significa 'depois de estudar, descanso'?", ["勉強した後で、休みます", "勉強する前に、休みます", "勉強したいので、休みます", "勉強しながら、休みません"], 0, "後で indica que descansar acontece depois de estudar."],
      ["Qual expressão significa 'enquanto' ou 'ao mesmo tempo que'?", ["ながら", "から", "まで", "より"], 0, "ながら conecta duas ações simultâneas."],
      ["Qual frase está correta para indicar que a pessoa lê enquanto come?", ["食べながら本を読みます", "食べてから本を読みながらません", "食べたい本を読みます", "食べましたから本を読みます"], 0, "食べながら indica que a leitura acontece durante a refeição."],
      ["Qual habilidade está sendo revisada?", ["Relacionar ações, causas e sequências", "Reconhecer apenas substantivos", "Escrever somente katakana", "Contar objetos"], 0, "Essas estruturas ajudam a explicar quando e por que as ações acontecem."]
    ]),
    5: buildQuestions(35, 5, [
      ["Qual frase significa 'acho que amanhã vai chover'?", ["明日は雨が降ると思います", "明日は雨を降ると思います", "明日は雨で降ると思います", "明日は雨に降ると思います"], 0, "と思います introduz uma opinião ou pensamento."],
      ["Qual é a função de と思います?", ["Expressar o que alguém pensa ou acredita", "Indicar posse", "Indicar passado obrigatoriamente", "Indicar destino"], 0, "と思います significa penso que ou acho que."],
      ["Qual frase significa 'acho que ele é estudante'?", ["彼は学生だと思います", "彼は学生をと思います", "彼は学生でと思います", "彼は学生にと思います"], 0, "Antes de と思います, um substantivo ou adjetivo な usa だ na forma informal."],
      ["Qual frase significa 'não acho que seja difícil'?", ["難しくないと思います", "難しいと思いませんでした", "難しくてと思います", "難しいからと思います"], 0, "難しくない é a forma negativa do adjetivo 難しい."],
      ["Qual frase significa 'talvez ele venha'?", ["彼は来るかもしれません", "彼は来るたいです", "彼は来るません", "彼は来るながらです"], 0, "かもしれません expressa possibilidade ou incerteza."],
      ["Qual é a função de でしょう?", ["Expressar uma suposição ou expectativa", "Indicar objeto direto", "Indicar posse", "Indicar uma ação passada"], 0, "でしょう pode expressar uma suposição ou expectativa."],
      ["Qual frase significa 'provavelmente está tudo bem'?", ["大丈夫でしょう", "大丈夫をでしょう", "大丈夫にでしょう", "大丈夫ででしょう"], 0, "でしょう expressa uma previsão ou suposição."],
      ["Qual frase apresenta uma opinião?", ["日本語はおもしろいと思います", "日本語をおもしろいです", "日本語におもしろいです", "日本語でおもしろいです"], 0, "と思います transforma a afirmação em uma opinião pessoal."],
      ["Qual expressão demonstra incerteza?", ["かもしれません", "絶対に", "必ず", "いつも"], 0, "かもしれません indica que algo talvez aconteça."],
      ["Qual é o objetivo desta aula?", ["Expressar opiniões, expectativas e possibilidades", "Aprender somente cores", "Revisar apenas hiragana", "Eliminar expressões de opinião"], 0, "A aula trabalha maneiras de expressar pensamentos e incerteza."]
    ]),
    6: buildQuestions(35, 6, [
      ["Leia: 私は日本語を勉強しています。毎日、本を読んで、新しい言葉を書きます。 O que a pessoa faz todos os dias?", ["Lê livros e escreve palavras novas", "Viaja e trabalha", "Cozinha e dorme", "Assiste a filmes e nada"], 0, "本を読んで e 言葉を書きます descrevem as duas atividades."],
      ["Leia: 昨日は忙しかったですが、友達に会いました。 O que aconteceu apesar de a pessoa estar ocupada?", ["Encontrou um amigo", "Foi dormir cedo", "Não saiu de casa", "Estudou no hospital"], 0, "ですが introduz um contraste: estava ocupada, mas encontrou um amigo."],
      ["Qual é a função de ですが?", ["Apresentar contraste", "Indicar posse", "Indicar destino", "Indicar existência"], 0, "ですが significa mas ou porém."],
      ["Leia: 雨が降っていますから、家にいます。 Por que a pessoa está em casa?", ["Porque está chovendo", "Porque está estudando", "Porque está trabalhando", "Porque está viajando"], 0, "から apresenta a causa: está chovendo."],
      ["Qual frase significa 'não tenho tempo'?", ["時間がありません", "時間があります", "時間を読みます", "時間へ行きます"], 0, "ありません é a forma negativa de あります."],
      ["Qual frase expressa uma possibilidade?", ["明日、雨が降るかもしれません", "明日、雨を飲みます", "明日、雨を読みます", "明日、雨が食べます"], 0, "かもしれません expressa possibilidade."],
      ["Qual frase expressa uma opinião?", ["この本はおもしろいと思います", "この本をおもしろいです", "この本におもしろいです", "この本でおもしろいです"], 0, "と思います indica a opinião do falante."],
      ["Qual frase indica duas ações simultâneas?", ["音楽を聞きながら勉強します", "音楽を聞いてから勉強します", "音楽を聞きたいです", "音楽を聞きません"], 0, "ながら conecta ações realizadas ao mesmo tempo."],
      ["Qual é a melhor estratégia para revisar gramática?", ["Identificar a função de cada estrutura dentro da frase", "Memorizar somente a tradução de uma palavra", "Ignorar o contexto", "Substituir todas as partículas"], 0, "Entender a função das estruturas permite interpretar frases novas."],
      ["Qual é o objetivo da semana 35?", ["Consolidar a gramática estudada antes de avançar", "Aprender apenas kanji novos", "Abandonar as formas verbais", "Estudar somente romaji"], 0, "A semana revisa e integra a gramática anterior."]
    ])
  },
  recovery: buildRecovery(35, [
    ["Qual estrutura expressa desejo?", ["～たい", "～ました", "～ません", "～ながら"], 0, "たい expressa vontade ou desejo."],
    ["Qual estrutura indica ações simultâneas?", ["～ながら", "～てから", "～ません", "～ました"], 0, "ながら conecta duas ações simultâneas."],
    ["Qual expressão apresenta uma opinião?", ["～と思います", "～へ行きます", "～があります", "～を飲みます"], 0, "と思います significa penso que ou acho que."],
    ["Qual expressão indica possibilidade?", ["～かもしれません", "～たいです", "～ました", "～ません"], 0, "かもしれません indica que algo talvez aconteça."],
    ["Qual é a função de から em 忙しいから?", ["Indicar causa ou motivo", "Indicar comparação", "Indicar posse", "Indicar destino"], 0, "から apresenta a razão de alguma coisa."]
  ])
},

36: {
  days: {
    1: buildQuestions(36, 1, [
      ["Qual é a forma condicional de 食べる usando たら?", ["食べたら", "食べれば", "食べると", "食べない"], 0, "食べたら é a forma condicional たら de 食べる."],
      ["Qual frase significa 'se chover, ficarei em casa'?", ["雨が降ったら、家にいます", "雨が降るながら、家にいます", "雨が降りたい、家にいます", "雨が降りました、家にいます"], 0, "降ったら apresenta a condição para ficar em casa."],
      ["Qual é a forma たら de 行く?", ["行ったら", "行けば", "行くと", "行きながら"], 0, "行く é uma exceção importante: sua forma たら é 行ったら."],
      ["Qual é a forma たら de 飲む?", ["飲んだら", "飲みたら", "飲むたら", "飲んでら"], 0, "飲む passa a 飲んだ na forma passada informal e 飲んだら na condicional."],
      ["Qual frase significa 'se tiver tempo, vou ler'?", ["時間があったら、読みます", "時間があるながら、読みます", "時間がありたい、読みます", "時間があってから、読みます"], 0, "あったら apresenta a condição de ter tempo."],
      ["O que たら expressa?", ["Uma condição ou situação que precisa acontecer primeiro", "Somente posse", "Somente comparação", "Somente uma ação contínua"], 0, "たら pode apresentar uma condição para a próxima ação."],
      ["Qual frase significa 'quando chegar em casa, vou descansar'?", ["家に帰ったら、休みます", "家に帰りながら、休みます", "家に帰りたい、休みます", "家に帰りません、休みます"], 0, "帰ったら indica a situação de chegar em casa antes de descansar."],
      ["Qual é a forma たら de 見る?", ["見たら", "見れば", "見ると", "見てら"], 0, "見る torna-se 見たら na forma condicional."],
      ["Qual frase está correta?", ["宿題が終わったら、ゲームをします", "宿題が終わるたら、ゲームをします", "宿題が終わりたら、ゲームをします", "宿題が終わってら、ゲームをします"], 0, "終わったら é a forma condicional correta de 終わる."],
      ["Qual é a principal característica de たら?", ["Pode indicar uma condição ou algo que acontece depois de outro evento", "Indica somente o passado", "Indica somente comparação", "Indica apenas uma pergunta"], 0, "たら é versátil e pode expressar condições e sequências."]
    ]),
    2: buildQuestions(36, 2, [
      ["Qual é a forma condicional たら de 書く?", ["書いたら", "書きたら", "書くたら", "書いてら"], 0, "書く torna-se 書いた na forma passada informal e 書いたら na condicional."],
      ["Qual é a forma condicional たら de 話す?", ["話したら", "話すたら", "話したり", "話してら"], 0, "話す torna-se 話した e depois 話したら."],
      ["Qual é a forma condicional たら de 買う?", ["買ったら", "買いたら", "買うたら", "買ってら"], 0, "買う é um verbo do grupo う e sua forma é 買ったら."],
      ["Qual é a forma condicional たら de 待つ?", ["待ったら", "待ちたら", "待つたら", "待てら"], 0, "待つ torna-se 待った e depois 待ったら."],
      ["Qual frase significa 'se estudar, entenderá'?", ["勉強したら、分かります", "勉強するたら、分かります", "勉強しながら、分かります", "勉強したい、分かります"], 0, "勉強したら apresenta estudar como condição."],
      ["Qual frase significa 'se encontrar meu amigo, conversarei'?", ["友達に会ったら、話します", "友達に会うたら、話します", "友達に会いながら、話します", "友達に会いたい、話します"], 0, "会う torna-se 会ったら."],
      ["Qual é a forma たら de 読む?", ["読んだら", "読みたら", "読むたら", "読んでら"], 0, "読む torna-se 読んだら."],
      ["Qual é a forma たら de 来る?", ["来たら", "来るたら", "来たり", "来てら"], 0, "来る é irregular e sua forma condicional たら é 来たら."],
      ["Qual é a forma たら de する?", ["したら", "するたら", "しったら", "してら"], 0, "する é irregular e se transforma em したら."],
      ["Qual é a importância de aprender as formas dos verbos?", ["Construir condicionais corretamente", "Eliminar os verbos", "Substituir os kanji", "Evitar frases completas"], 0, "É necessário transformar o verbo antes de acrescentar ら."]
    ]),
    3: buildQuestions(36, 3, [
      ["Qual é a forma condicional なら de 日本語?", ["日本語なら", "日本語たら", "日本語れば", "日本語と"], 0, "なら pode ser colocado depois de substantivos."],
      ["Qual frase significa 'se for japonês, quero aprender'?", ["日本語なら、勉強したいです", "日本語たら、勉強したいです", "日本語れば、勉強したいです", "日本語と、勉強したいです"], 0, "なら apresenta japonês como condição ou assunto considerado."],
      ["Qual frase usa なら corretamente?", ["暇なら、映画を見ましょう", "暇たら、映画を見ましょう", "暇れば、映画を見ましょう", "暇と、映画を見ましょう"], 0, "暇なら significa se estiver livre."],
      ["Qual é a função de なら?", ["Apresentar uma condição ou reagir a um assunto mencionado", "Indicar somente passado", "Indicar posse", "Indicar objeto direto"], 0, "なら é usado para condições e para falar sobre algo que foi apresentado como assunto."],
      ["Qual frase significa 'se você gosta de livros, leia este'?", ["本が好きなら、これを読んでください", "本が好きたら、これを読んでください", "本が好きれば、これを読んでください", "本が好きと、これを読んでください"], 0, "好きなら é a construção correta com o adjetivo な 好き."],
      ["Qual frase significa 'se for amanhã, posso ir'?", ["明日なら、行けます", "明日たら、行けます", "明日れば、行けます", "明日と、行けます"], 0, "明日なら apresenta amanhã como condição ou alternativa."],
      ["Qual estrutura aparece depois de um substantivo para criar essa condição?", ["なら", "たら", "ました", "ません"], 0, "なら pode seguir diretamente um substantivo."],
      ["Qual frase significa 'se você vai ao Japão, esta cidade é interessante'?", ["日本へ行くなら、この町はおもしろいです", "日本へ行くたら、この町はおもしろいです", "日本へ行くれば、この町はおもしろいです", "日本へ行くました、この町はおもしろいです"], 0, "なら pode seguir uma oração informal para apresentar uma condição."],
      ["Qual frase é uma resposta natural ao assunto 'quero aprender japonês'?", ["日本語なら、この本がいいですよ", "日本語たら、この本がいいですよ", "日本語れば、この本がいいですよ", "日本語ました、この本がいいですよ"], 0, "なら permite responder considerando o tema japonês."],
      ["Qual é a diferença importante entre たら e なら?", ["なら pode partir de um assunto ou condição considerada; たら apresenta uma condição ou evento", "São sempre partículas de objeto", "たら só aparece com substantivos", "なら só indica passado"], 0, "As duas estruturas são condicionais, mas não têm exatamente o mesmo uso."]
    ]),
    4: buildQuestions(36, 4, [
      ["Qual frase usa と para indicar uma consequência natural?", ["春になると、桜が咲きます", "春になりたいと、桜が咲きます", "春になりましたと、桜が咲きます", "春になりませんと、桜が咲きます"], 0, "と pode indicar uma consequência que ocorre naturalmente quando uma condição acontece."],
      ["Qual frase significa 'quando aperto este botão, a porta abre'?", ["このボタンを押すと、ドアが開きます", "このボタンを押したいと、ドアが開きます", "このボタンを押しましたと、ドアが開きます", "このボタンを押しませんと、ドアが開きます"], 0, "押すと indica que apertar o botão provoca a abertura."],
      ["Qual é a função de と nesse uso?", ["Apresentar uma consequência automática ou habitual", "Expressar desejo", "Indicar posse", "Marcar o passado"], 0, "と pode ligar uma condição a um resultado natural ou regular."],
      ["Qual frase significa 'se você vai reto, encontra a estação'?", ["まっすぐ行くと、駅があります", "まっすぐ行きたいと、駅があります", "まっすぐ行きましたと、駅があります", "まっすぐ行きませんと、駅があります"], 0, "行くと apresenta o resultado esperado de seguir em frente."],
      ["Qual frase descreve um hábito?", ["冬になると、雪が降ります", "昨日、雪が降りました", "雪を食べたいです", "雪を読みません"], 0, "A frase descreve algo que costuma acontecer quando chega o inverno."],
      ["Qual estrutura está correta?", ["ボタンを押すと、音が出ます", "ボタンを押したらと、音が出ます", "ボタンを押すたいと、音が出ます", "ボタンを押しませんと、音が出ます"], 0, "A forma de dicionário do verbo pode ser seguida por と."],
      ["Qual é uma tradução possível de 春になると?", ["Quando chega a primavera", "Antes da primavera", "Depois do verão", "Apesar da primavera"], 0, "と apresenta a consequência que acontece quando chega a primavera."],
      ["Qual estrutura é frequentemente usada para instruções e resultados automáticos?", ["と", "たい", "ました", "ながら"], 0, "と é comum em explicações de funcionamento e resultados previsíveis."],
      ["Qual frase apresenta uma consequência natural?", ["夜になると、暗くなります", "夜になりたいです", "夜を飲みます", "夜を読みました"], 0, "Quando chega a noite, escurecer é uma consequência natural."],
      ["Qual é o cuidado importante ao usar と?", ["Nem toda consequência desejada ou ordem pessoal combina com esse uso", "Ele só pode aparecer em perguntas", "Ele sempre indica posse", "Ele transforma substantivos em kanji"], 0, "と tem restrições de uso, especialmente em pedidos e ordens do falante."]
    ]),
    5: buildQuestions(36, 5, [
      ["Qual frase significa 'se chover, não irei' usando たら?", ["雨が降ったら、行きません", "雨が降ると、行きません", "雨が降るなら、行きません", "雨が降りたい、行きません"], 0, "降ったら apresenta a condição de chover."],
      ["Qual frase significa 'se você gosta de música, ouça esta' usando なら?", ["音楽が好きなら、これを聞いてください", "音楽が好きたら、これを聞いてください", "音楽が好きと、これを聞いてください", "音楽が好きました、これを聞いてください"], 0, "なら pode seguir 好き para apresentar a condição."],
      ["Qual frase descreve uma consequência natural usando と?", ["春になると、暖かくなります", "春になったいと、暖かくなります", "春になりましたたい、暖かくなります", "春になりませんと、暖かくなります"], 0, "と conecta a chegada da primavera a uma consequência habitual."],
      ["Qual condicional é usada em 'se terminar a tarefa, vou brincar'?", ["宿題が終わったら、遊びます", "宿題が終わると、遊びます", "宿題が終わりながら、遊びます", "宿題が終わりたい、遊びます"], 0, "たら apresenta uma condição que deve ser cumprida antes de brincar."],
      ["Qual condicional é adequada para 'se você está falando de comida, este restaurante é bom'?", ["食べ物の話なら、このレストランがいいです", "食べ物の話たら、このレストランがいいです", "食べ物の話と、このレストランがいいです", "食べ物の話ました、このレストランがいいです"], 0, "なら pode retomar o assunto mencionado."],
      ["Qual condicional é adequada para explicar que ao abrir a janela entra vento?", ["窓を開けると、風が入ります", "窓を開けたいと、風が入ります", "窓を開けましたと、風が入ります", "窓を開けませんと、風が入ります"], 0, "と apresenta o resultado que ocorre ao abrir a janela."],
      ["Qual é a forma たら de 帰る?", ["帰ったら", "帰りたら", "帰るたら", "帰ってら"], 0, "帰る é um verbo do grupo う e sua forma é 帰ったら."],
      ["Qual frase significa 'se estiver livre, vamos conversar'?", ["暇なら、話しましょう", "暇たら、話しましょう", "暇れば、話しましょう", "暇ました、話しましょう"], 0, "暇なら é a forma correta."],
      ["Qual frase descreve uma regra ou resultado previsível?", ["この道を右に曲がると、駅があります", "この道を右に曲がりたいです", "この道を右に曲がりました", "この道を右に曲がりません"], 0, "と apresenta o resultado de seguir a instrução."],
      ["Qual é a diferença geral entre as três estruturas?", ["たら apresenta condição/evento, なら considera um assunto ou condição, と destaca resultados naturais", "Todas significam somente passado", "Todas indicam posse", "Todas são formas de negação"], 0, "Cada condicional possui usos e nuances próprios."]
    ]),
    6: buildQuestions(36, 6, [
      ["Leia: 雨が降ったら、家で映画を見ます。 O que a pessoa fará se chover?", ["Assistirá a um filme em casa", "Irá à escola", "Viajará para o Japão", "Trabalhará no parque"], 0, "A primeira oração apresenta a condição e a segunda a ação."],
      ["Leia: 日本へ行くなら、京都もおすすめです。 O que está sendo recomendado?", ["Kyoto", "Tóquio", "Osaka", "Hokkaido"], 0, "京都 é o lugar recomendado."],
      ["Leia: このボタンを押すと、電気がつきます。 O que acontece ao apertar o botão?", ["A luz acende", "A porta desaparece", "A água congela", "O telefone toca"], 0, "電気がつきます significa que a luz acende."],
      ["Qual estrutura expressa a condição de chover?", ["雨が降ったら", "雨が降ります", "雨を降ります", "雨が降りたい"], 0, "降ったら é a forma condicional."],
      ["Qual estrutura pode retomar o assunto de uma conversa?", ["なら", "ました", "ません", "ながら"], 0, "なら pode ser usado para responder considerando o assunto apresentado."],
      ["Qual estrutura costuma indicar uma consequência automática?", ["と", "たい", "だけ", "の"], 0, "と pode apresentar resultados previsíveis."],
      ["Qual frase está corretamente construída?", ["時間があったら、友達に電話します", "時間があるたら、友達に電話します", "時間がありたら、友達に電話します", "時間があってら、友達に電話します"], 0, "あったら é a forma correta de ある."],
      ["Qual frase está corretamente construída?", ["学生なら、この説明が分かると思います", "学生たら、この説明が分かると思います", "学生と、この説明が分かると思います", "学生ました、この説明が分かると思います"], 0, "なら pode seguir diretamente o substantivo 学生."],
      ["Qual frase apresenta uma consequência natural?", ["水を熱くすると、蒸気が出ます", "水を熱くしたいです", "水を熱くしました", "水を熱くしません"], 0, "と apresenta o resultado do aquecimento da água."],
      ["Qual é o objetivo da semana 36?", ["Aprender a diferenciar たら, なら e と", "Estudar somente kanji", "Aprender apenas o passado", "Revisar somente hiragana"], 0, "A semana trabalha três formas condicionais e seus usos."]
    ])
  },
  recovery: buildRecovery(36, [
    ["Qual é a forma たら de 食べる?", ["食べたら", "食べれば", "食べると", "食べない"], 0, "食べたら é a forma condicional de 食べる."],
    ["Qual estrutura pode seguir um substantivo diretamente?", ["なら", "ました", "ません", "ながら"], 0, "なら pode seguir substantivos."],
    ["Qual estrutura pode indicar um resultado natural?", ["と", "たい", "の", "を"], 0, "と conecta uma condição a uma consequência previsível."],
    ["Qual frase está correta?", ["雨が降ったら、家にいます", "雨が降るたら、家にいます", "雨が降りたら、家にいます", "雨が降ってら、家にいます"], 0, "降ったら é a forma correta."],
    ["Qual é a diferença principal entre たら, なら e と?", ["Possuem usos diferentes para condições, assuntos e resultados", "São três formas de passado", "São partículas de posse", "Todas indicam desejo"], 0, "As três estruturas são condicionais, mas não são intercambiáveis em todos os contextos."]
  ])
},

37: {
  days: {
    1: buildQuestions(37, 1, [
      ["Qual é a forma potencial de 食べる?", ["食べられる", "食べたい", "食べない", "食べました"], 0, "食べられる significa poder comer."],
      ["Qual é a forma potencial de 見る?", ["見られる", "見たい", "見ない", "見ました"], 0, "見られる significa poder ver."],
      ["Qual é a forma potencial de 起きる?", ["起きられる", "起きたい", "起きない", "起きました"], 0, "起きられる expressa a capacidade ou possibilidade de acordar."],
      ["Qual é a forma potencial de 寝る?", ["寝られる", "寝たい", "寝ない", "寝ました"], 0, "寝られる significa poder dormir."],
      ["Qual frase significa 'posso ler este livro'?", ["この本を読めます", "この本を読みたいです", "この本を読みません", "この本を読みました"], 0, "読めます é a forma potencial educada de 読む."],
      ["O que a forma potencial expressa?", ["Capacidade ou possibilidade de realizar uma ação", "Somente desejo", "Somente passado", "Somente negação"], 0, "A forma potencial indica que alguém consegue ou pode fazer algo."],
      ["Qual frase significa 'não consigo dormir'?", ["寝られません", "寝ませんでした", "寝たいです", "寝ています"], 0, "寝られません é a forma potencial negativa."],
      ["Qual frase significa 'ele consegue falar japonês'?", ["彼は日本語を話せます", "彼は日本語を話したいです", "彼は日本語を話しません", "彼は日本語を話しました"], 0, "話せます é a forma potencial de 話す."],
      ["Qual é a forma potencial de する?", ["できる", "したい", "しない", "しました"], 0, "する é irregular e sua forma potencial é できる."],
      ["Qual é a forma potencial de 来る?", ["来られる", "来たい", "来ない", "来ました"], 0, "来る tem a forma potencial 来られる."]
    ]),
    2: buildQuestions(37, 2, [
      ["Qual é a forma potencial de 書く?", ["書ける", "書きられる", "書きたい", "書かない"], 0, "書く torna-se 書ける na forma potencial."],
      ["Qual é a forma potencial de 読む?", ["読める", "読みられる", "読みたい", "読まない"], 0, "読む torna-se 読める."],
      ["Qual é a forma potencial de 話す?", ["話せる", "話さられる", "話したい", "話さない"], 0, "話す torna-se 話せる."],
      ["Qual é a forma potencial de 行く?", ["行ける", "行くられる", "行きたい", "行かない"], 0, "行く torna-se 行ける."],
      ["Qual é a forma potencial de 買う?", ["買える", "買わられる", "買いたい", "買わない"], 0, "買う torna-se 買える."],
      ["Qual é a forma potencial de 待つ?", ["待てる", "待ちられる", "待ちたい", "待たない"], 0, "待つ torna-se 待てる."],
      ["Qual é a forma potencial de 泳ぐ?", ["泳げる", "泳ぎられる", "泳ぎたい", "泳がない"], 0, "泳ぐ torna-se 泳げる."],
      ["Qual é a forma potencial de 遊ぶ?", ["遊べる", "遊びられる", "遊びたい", "遊ばない"], 0, "遊ぶ torna-se 遊べる."],
      ["Qual é a forma potencial de 取る?", ["取れる", "取りられる", "取りたい", "取らない"], 0, "取る torna-se 取れる."],
      ["Qual é a regra geral dos verbos do grupo 1 na forma potencial?", ["Trocar o som final da coluna う para a coluna え e acrescentar る", "Acrescentar たい", "Retirar o verbo inteiro", "Acrescentar ました"], 0, "Os verbos do grupo 1 passam para o som da coluna え e recebem る."]
    ]),
    3: buildQuestions(37, 3, [
      ["Qual frase significa 'consigo cozinhar'?", ["料理ができます", "料理をしたいです", "料理をしません", "料理をしました"], 0, "できます expressa capacidade."],
      ["Qual frase significa 'não consigo dirigir'?", ["車を運転できません", "車を運転したいです", "車を運転しました", "車を運転しています"], 0, "できません é a forma potencial negativa de できます."],
      ["Qual frase significa 'posso nadar'?", ["泳げます", "泳ぎますたい", "泳ぎません", "泳ぎました"], 0, "泳げます é a forma potencial educada de 泳ぐ."],
      ["Qual frase significa 'posso falar inglês'?", ["英語が話せます", "英語が話したいです", "英語が話しません", "英語が話しました"], 0, "話せます expressa capacidade de falar."],
      ["Qual partícula frequentemente aparece com a forma potencial no japonês moderno?", ["が", "を obrigatoriamente em todos os casos", "へ", "から"], 0, "A partícula が é frequentemente usada para marcar aquilo que se consegue fazer."],
      ["Qual frase significa 'não posso comer carne'?", ["肉が食べられません", "肉が食べたいです", "肉を食べました", "肉を食べています"], 0, "食べられません expressa incapacidade ou impossibilidade de comer."],
      ["Qual frase expressa uma capacidade aprendida?", ["私は日本語が話せます", "私は日本語を話したいです", "私は日本語を話しました", "私は日本語を話しません"], 0, "A forma potencial apresenta uma habilidade."],
      ["Qual frase indica possibilidade de entrar?", ["ここに入れます", "ここに入りたいです", "ここに入りました", "ここに入りません"], 0, "入れます é a forma potencial de 入る."],
      ["Qual é a diferença entre 話したい e 話せる?", ["Desejar falar e conseguir falar", "Falar no passado e falar no futuro", "Falar e não falar", "Falar rapidamente e lentamente"], 0, "たい expressa desejo; potencial expressa capacidade ou possibilidade."],
      ["Qual é o objetivo desta aula?", ["Usar a forma potencial para falar de habilidades", "Aprender apenas o passado", "Estudar somente comparações", "Eliminar os verbos"], 0, "A aula trabalha capacidade e possibilidade."]
    ]),
    4: buildQuestions(37, 4, [
      ["Qual frase significa 'não posso ir hoje'?", ["今日は行けません", "今日は行きたいです", "今日は行きました", "今日は行っています"], 0, "行けません é a forma potencial negativa de 行く."],
      ["Qual frase significa 'posso comprar este livro'?", ["この本が買えます", "この本が買いたいです", "この本が買いません", "この本が買いました"], 0, "買えます expressa possibilidade de comprar."],
      ["Qual frase significa 'consigo entender japonês'?", ["日本語が分かります", "日本語を分かりたいです", "日本語を分かりませんでした", "日本語で分かりました"], 0, "分かります já expressa entender; não precisa de uma transformação potencial adicional."],
      ["Qual frase significa 'não consigo encontrar meu amigo'?", ["友達に会えません", "友達に会いたいです", "友達に会いました", "友達に会っています"], 0, "会えません é a forma potencial negativa de 会う."],
      ["Qual frase expressa uma possibilidade física?", ["この部屋で泳げます", "この部屋で泳ぎたいです", "この部屋で泳ぎました", "この部屋で泳ぎません"], 0, "泳げます expressa a possibilidade de nadar."],
      ["Qual é a forma potencial de 話す?", ["話せる", "話される", "話した", "話そう"], 0, "話せる é a forma potencial de 話す."],
      ["Qual é a forma potencial de 飲む?", ["飲める", "飲まれる", "飲みたい", "飲んだ"], 0, "飲む torna-se 飲める."],
      ["Qual é a forma potencial de 帰る?", ["帰れる", "帰られる", "帰りたい", "帰った"], 0, "帰る torna-se 帰れる."],
      ["Qual é a forma potencial de 急ぐ?", ["急げる", "急がれる", "急ぎたい", "急いだ"], 0, "急ぐ torna-se 急げる."],
      ["Qual é a diferença entre possibilidade e desejo?", ["Possibilidade indica que algo pode ser feito; desejo indica vontade", "São sempre a mesma coisa", "Possibilidade indica somente passado", "Desejo indica capacidade física"], 0, "A forma potencial e ～たい têm funções diferentes."]
    ]),
    5: buildQuestions(37, 5, [
      ["Leia: 私は日本語が少し話せます。 O que a pessoa consegue fazer?", ["Falar um pouco de japonês", "Escrever muitos livros", "Ler todos os kanji", "Viajar para o Japão"], 0, "少し significa um pouco e 話せます significa conseguir falar."],
      ["Leia: この図書館では本を借りられます。 O que é possível fazer na biblioteca?", ["Pegar livros emprestados", "Comprar carros", "Cozinhar comida", "Assistir a filmes"], 0, "借りられます é a forma potencial de 借りる, pegar emprestado."],
      ["Qual é o significado de 少し?", ["Um pouco", "Muito", "Nunca", "Sempre"], 0, "少し significa um pouco."],
      ["Qual é a forma potencial de 借りる?", ["借りられる", "借りたい", "借りない", "借りました"], 0, "借りられる significa poder pegar emprestado."],
      ["Leia: 子供は一人で泳げます。 O que a criança consegue fazer?", ["Nadar sozinha", "Dirigir sozinha", "Cozinhar sozinha", "Trabalhar sozinha"], 0, "泳げます significa conseguir nadar."],
      ["Qual é o significado de 一人で?", ["Sozinho ou sozinha", "Com a família", "Com os amigos", "Na escola"], 0, "一人で significa sozinho ou sozinha."],
      ["Leia: ここでは写真を撮れません。 O que não é permitido ou possível?", ["Tirar fotografias", "Ler livros", "Beber água", "Conversar"], 0, "撮れません é a forma potencial negativa de 撮る."],
      ["Qual é a forma potencial de 待つ?", ["待てる", "待たれる", "待ちたい", "待った"], 0, "待つ torna-se 待てる."],
      ["Qual frase indica habilidade?", ["ピアノが弾けます", "ピアノを弾きたいです", "ピアノを弾きました", "ピアノを弾きません"], 0, "弾けます significa conseguir tocar um instrumento de cordas ou teclado."],
      ["Qual habilidade é desenvolvida nesta aula?", ["Interpretar a forma potencial em contextos reais", "Memorizar somente números", "Estudar apenas o passado", "Evitar frases com verbos"], 0, "A leitura contextual mostra como a capacidade é expressa."]
    ]),
    6: buildQuestions(37, 6, [
      ["Qual é a forma potencial de 食べる?", ["食べられる", "食べたい", "食べない", "食べた"], 0, "食べられる significa poder comer."],
      ["Qual é a forma potencial de 書く?", ["書ける", "書きたい", "書かない", "書いた"], 0, "書ける significa conseguir escrever."],
      ["Qual é a forma potencial de する?", ["できる", "したい", "しない", "した"], 0, "する é irregular e sua forma potencial é できる."],
      ["Qual frase significa 'consigo ler kanji'?", ["漢字が読めます", "漢字を読みたいです", "漢字を読みません", "漢字を読みました"], 0, "読めます expressa capacidade de ler."],
      ["Qual frase significa 'não consigo falar agora'?", ["今、話せません", "今、話したいです", "今、話しました", "今、話しています"], 0, "話せません indica que não é possível falar."],
      ["Qual expressão indica desejo?", ["行きたいです", "行けます", "行けません", "行かれます"], 0, "行きたい expressa vontade de ir."],
      ["Qual expressão indica capacidade?", ["行けます", "行きたいです", "行きました", "行きません"], 0, "行けます significa conseguir ou poder ir."],
      ["Qual é a forma potencial de 買う?", ["買える", "買いたい", "買わない", "買った"], 0, "買う torna-se 買える."],
      ["Qual é a forma potencial de 見る?", ["見られる", "見たい", "見ない", "見た"], 0, "見られる significa conseguir ver."],
      ["Qual é o objetivo da semana 37?", ["Expressar habilidades, capacidades e possibilidades", "Aprender condicionais", "Estudar somente katakana", "Aprender a falar sobre posse"], 0, "A semana apresenta a forma potencial."]
    ])
  },
  recovery: buildRecovery(37, [
    ["Qual é a forma potencial de 食べる?", ["食べられる", "食べたい", "食べない", "食べました"], 0, "食べられる significa poder comer."],
    ["Qual é a forma potencial de 書く?", ["書ける", "書きたい", "書かない", "書いた"], 0, "書ける significa conseguir escrever."],
    ["Qual é a forma potencial de する?", ["できる", "したい", "しない", "しました"], 0, "する é irregular e sua forma potencial é できる."],
    ["Qual frase expressa desejo?", ["日本語を話したいです", "日本語が話せます", "日本語が話せません", "日本語を話しました"], 0, "話したい expressa vontade de falar."],
    ["Qual frase expressa capacidade?", ["日本語が話せます", "日本語を話したいです", "日本語を話しません", "日本語を話しました"], 0, "話せます expressa capacidade de falar."]
  ])
},

38: {
  days: {
    1: buildQuestions(38, 1, [
      ["Qual estrutura expressa que alguém já teve determinada experiência?", ["～たことがある", "～たい", "～ながら", "～ません"], 0, "たことがある indica experiência vivida anteriormente."],
      ["Qual frase significa 'já fui ao Japão'?", ["日本へ行ったことがあります", "日本へ行きたいです", "日本へ行きません", "日本へ行っています"], 0, "行ったことがあります significa já ter ido ao Japão."],
      ["Qual é a forma passada informal de 食べる?", ["食べた", "食べる", "食べない", "食べて"], 0, "食べた é a forma passada informal de 食べる."],
      ["Qual frase significa 'já comi sushi'?", ["寿司を食べたことがあります", "寿司を食べたいです", "寿司を食べません", "寿司を食べています"], 0, "食べたことがあります expressa a experiência de já ter comido."],
      ["Qual é a estrutura completa da experiência?", ["Verbo na forma た + ことがある", "Verbo na forma ない + たい", "Verbo na forma て + ません", "Substantivo + へ行く"], 0, "A construção utiliza a forma passada informal antes de ことがある."],
      ["Qual frase pergunta 'você já viu esse filme?'", ["この映画を見たことがありますか", "この映画を見たいですか", "この映画を見ませんか", "この映画を見ていますか"], 0, "見たことがありますか pergunta sobre experiência anterior."],
      ["Qual frase significa 'nunca fui ao Japão'?", ["日本へ行ったことがありません", "日本へ行きたいです", "日本へ行きました", "日本へ行っています"], 0, "A forma negativa de ことがある expressa ausência daquela experiência."],
      ["Qual é a diferença entre 行きました e 行ったことがあります?", ["Uma relata uma ida específica; a outra relata uma experiência", "As duas sempre significam exatamente a mesma coisa", "A primeira expressa desejo", "A segunda indica futuro"], 0, "A construção com ことがあります destaca a experiência vivida."],
      ["Qual é a forma た de 読む?", ["読んだ", "読みた", "読むた", "読んで"], 0, "読む torna-se 読んだ na forma passada informal."],
      ["Qual é o objetivo da aula?", ["Aprender a falar sobre experiências anteriores", "Aprender somente o futuro", "Estudar comparações", "Aprender posse"], 0, "A aula introduz a construção de experiência."]
    ]),
    2: buildQuestions(38, 2, [
      ["Qual frase significa 'já assisti a esse filme'?", ["この映画を見たことがあります", "この映画を見たいです", "この映画を見ません", "この映画を見ています"], 0, "見たことがあります indica uma experiência anterior."],
      ["Qual é a forma た de 行く?", ["行った", "行いた", "行いて", "行くた"], 0, "行く é uma exceção: sua forma passada informal é 行った."],
      ["Qual é a forma た de 飲む?", ["飲んだ", "飲みた", "飲むた", "飲んで"], 0, "飲む torna-se 飲んだ."],
      ["Qual é a forma た de 話す?", ["話した", "話いた", "話んだ", "話して"], 0, "話す torna-se 話した."],
      ["Qual é a forma た de 買う?", ["買った", "買いた", "買うた", "買って"], 0, "買う torna-se 買った."],
      ["Qual é a forma た de 来る?", ["来た", "来るた", "来いて", "来んだ"], 0, "来る é irregular e sua forma passada informal é 来た."],
      ["Qual é a forma た de する?", ["した", "すた", "してた", "しんだ"], 0, "する é irregular e sua forma passada informal é した."],
      ["Qual frase pergunta se alguém já leu um livro?", ["本を読んだことがありますか", "本を読みたいですか", "本を読みませんか", "本を読んでいますか"], 0, "読んだことがありますか pergunta sobre experiência de leitura."],
      ["Qual frase significa 'nunca comi natto'?", ["納豆を食べたことがありません", "納豆を食べたいです", "納豆を食べました", "納豆を食べています"], 0, "A forma negativa de ことがあります indica que a experiência nunca aconteceu."],
      ["Qual é a importância de dominar a forma た?", ["Ela é necessária para formar a construção de experiência", "Ela substitui todos os substantivos", "Ela indica somente desejo", "Ela é usada apenas em perguntas"], 0, "A forma た é a base da construção たことがある."]
    ]),
    3: buildQuestions(38, 3, [
      ["Qual expressão significa 'uma vez'?", ["一度", "毎日", "何度も", "いつも"], 0, "一度 significa uma vez."],
      ["Qual expressão significa 'muitas vezes'?", ["何度も", "一度", "昨日", "来年"], 0, "何度も significa muitas vezes ou repetidamente."],
      ["Qual frase significa 'já fui a Kyoto uma vez'?", ["京都へ一度行ったことがあります", "京都へ一度行きたいです", "京都へ一度行きません", "京都へ一度行っています"], 0, "一度 indica que a experiência aconteceu uma vez."],
      ["Qual frase significa 'já pratiquei esse esporte muitas vezes'?", ["このスポーツを何度もしたことがあります", "このスポーツを何度もしたいです", "このスポーツを何度もしません", "このスポーツを何度もしています"], 0, "何度も destaca a repetição de experiências anteriores."],
      ["Qual é o significado de 初めて?", ["Pela primeira vez", "Pela última vez", "Todos os dias", "Nunca"], 0, "初めて significa pela primeira vez."],
      ["Qual frase significa 'foi a primeira vez que comi sushi'?", ["初めて寿司を食べました", "毎日寿司を食べます", "寿司を食べません", "寿司を食べたいです"], 0, "初めて indica que a experiência aconteceu pela primeira vez."],
      ["Qual pergunta significa 'quantas vezes você foi ao Japão?'", ["何回日本へ行きましたか", "いつ日本を食べましたか", "どこ日本を読みますか", "誰日本へ行きますか"], 0, "何回 pergunta quantas vezes."],
      ["Qual é o significado de 回 em 何回?", ["Contador de vezes", "Contador de pessoas", "Contador de livros", "Contador de animais"], 0, "回 é usado para contar ocorrências ou vezes."],
      ["Qual frase indica uma experiência repetida?", ["何度も日本語を話したことがあります", "日本語を話したいです", "日本語を話しません", "日本語を話しています"], 0, "何度も indica que a experiência aconteceu várias vezes."],
      ["Qual é a habilidade trabalhada?", ["Descrever frequência e quantidade de experiências", "Expressar apenas o futuro", "Descrever objetos", "Indicar posse"], 0, "As expressões de frequência ajudam a detalhar experiências."]
    ]),
    4: buildQuestions(38, 4, [
      ["Qual frase significa 'já visitei um museu'?", ["博物館を訪れたことがあります", "博物館を訪れたいです", "博物館を訪れません", "博物館を訪れています"], 0, "訪れたことがあります indica experiência de visita."],
      ["Qual é o significado de 博物館?", ["Museu", "Biblioteca", "Hospital", "Estação"], 0, "博物館 significa museu."],
      ["Qual frase significa 'nunca viajei sozinho'?", ["一人で旅行したことがありません", "一人で旅行したいです", "一人で旅行しました", "一人で旅行しています"], 0, "したことがありません indica que a experiência não aconteceu."],
      ["Qual é o significado de 一人で?", ["Sozinho", "Com amigos", "Com a família", "Na escola"], 0, "一人で significa sozinho ou sozinha."],
      ["Qual frase pergunta 'você já falou com um japonês?'", ["日本人と話したことがありますか", "日本人と話したいですか", "日本人と話しませんか", "日本人と話していますか"], 0, "話したことがありますか pergunta sobre uma experiência anterior."],
      ["Qual é a forma た de 会う?", ["会った", "会いた", "会うた", "会んだ"], 0, "会う torna-se 会った."],
      ["Qual frase significa 'já usei esse computador'?", ["このコンピューターを使ったことがあります", "このコンピューターを使いたいです", "このコンピューターを使いません", "このコンピューターを使っています"], 0, "使ったことがあります expressa experiência de uso."],
      ["Qual expressão significa 'ainda não'?", ["まだ", "もう", "いつも", "全部"], 0, "まだ significa ainda e pode aparecer em frases negativas."],
      ["Qual frase significa 'ainda não fui ao Japão'?", ["まだ日本へ行ったことがありません", "もう日本へ行きました", "日本へ行きたいです", "日本へ行っています"], 0, "まだ com a negativa expressa que a experiência ainda não aconteceu."],
      ["Qual é o cuidado ao falar de experiências?", ["Diferenciar uma experiência geral de um acontecimento específico", "Usar sempre o futuro", "Evitar a forma た", "Usar apenas substantivos"], 0, "A construção たことがある destaca experiência, não necessariamente uma data específica."]
    ]),
    5: buildQuestions(38, 5, [
      ["Leia: 私は日本へ行ったことがあります。 O que a pessoa está dizendo?", ["Já foi ao Japão", "Quer ir ao Japão", "Nunca irá ao Japão", "Está indo ao Japão agora"], 0, "行ったことがあります indica experiência anterior."],
      ["Leia: 田中さんは馬に乗ったことがありません。 O que Tanaka nunca fez?", ["Andar a cavalo", "Viajar de trem", "Ler um livro", "Comer sushi"], 0, "馬に乗る significa montar a cavalo."],
      ["Qual é o significado de 馬?", ["Cavalo", "Gato", "Cachorro", "Pássaro"], 0, "馬 significa cavalo."],
      ["Leia: 子供の時、海で泳いだことがあります。 Onde aconteceu a experiência?", ["No mar", "Na escola", "No hospital", "Na biblioteca"], 0, "海で indica que a ação aconteceu no mar."],
      ["Qual é o significado de 子供の時?", ["Quando era criança", "No próximo ano", "Todas as manhãs", "Ontem à noite"], 0, "子供の時 significa quando era criança."],
      ["Leia: 私は外国へ行ったことがありません。 O que a pessoa nunca fez?", ["Viajar para o exterior", "Estudar japonês", "Ler livros", "Conversar com amigos"], 0, "外国へ行く significa ir para o exterior."],
      ["Qual é o significado de 外国?", ["País estrangeiro", "Cidade natal", "Escola", "Biblioteca"], 0, "外国 significa país estrangeiro ou exterior."],
      ["Qual frase significa 'já experimentei comida japonesa'?", ["日本料理を食べたことがあります", "日本料理を食べたいです", "日本料理を食べません", "日本料理を食べています"], 0, "食べたことがあります indica a experiência de já ter comido."],
      ["Qual pergunta combina com uma resposta sobre experiências?", ["日本へ行ったことがありますか", "日本へ行きたいですか", "日本へ行きませんか", "日本へ行っていますか"], 0, "A estrutura たことがありますか pergunta se alguém já viveu uma experiência."],
      ["Qual é a habilidade desta aula?", ["Interpretar relatos de experiências em textos", "Memorizar apenas kanji isolados", "Estudar somente o futuro", "Usar somente romaji"], 0, "A leitura contextual ajuda a compreender relatos de experiências."]
    ]),
    6: buildQuestions(38, 6, [
      ["Qual frase significa 'já li esse livro'?", ["この本を読んだことがあります", "この本を読みたいです", "この本を読みません", "この本を読んでいます"], 0, "読んだことがあります indica experiência de leitura."],
      ["Qual frase significa 'nunca fui àquele país'?", ["あの国へ行ったことがありません", "あの国へ行きたいです", "あの国へ行きました", "あの国へ行っています"], 0, "行ったことがありません indica que nunca foi."],
      ["Qual expressão significa 'pela primeira vez'?", ["初めて", "何度も", "毎日", "一度も"], 0, "初めて significa pela primeira vez."],
      ["Qual expressão significa 'uma vez'?", ["一度", "何度も", "毎日", "いつも"], 0, "一度 significa uma vez."],
      ["Qual expressão significa 'muitas vezes'?", ["何度も", "一度", "初めて", "まだ"], 0, "何度も significa muitas vezes."],
      ["Qual é a forma た de 行く?", ["行った", "行いた", "行いて", "行くた"], 0, "行く é uma exceção e forma 行った."],
      ["Qual é a forma た de 話す?", ["話した", "話いた", "話んだ", "話して"], 0, "話す forma 話した."],
      ["Qual é a forma た de 飲む?", ["飲んだ", "飲みた", "飲むた", "飲んで"], 0, "飲む forma 飲んだ."],
      ["Qual frase indica ausência de experiência?", ["行ったことがありません", "行ったことがあります", "行きたいです", "行っています"], 0, "ありません nega a existência da experiência."],
      ["Qual é o objetivo da semana 38?", ["Falar sobre experiências que já aconteceram ou ainda não aconteceram", "Aprender condicionais", "Estudar apenas comparações", "Aprender somente katakana"], 0, "A semana desenvolve a expressão de experiências."]
    ])
  },
  recovery: buildRecovery(38, [
    ["Qual estrutura expressa experiência?", ["～たことがある", "～たい", "～ながら", "～ません"], 0, "たことがある expressa experiências anteriores."],
    ["Qual frase significa 'já fui ao Japão'?", ["日本へ行ったことがあります", "日本へ行きたいです", "日本へ行きません", "日本へ行っています"], 0, "行ったことがあります indica experiência anterior."],
    ["Qual é a forma た de 読む?", ["読んだ", "読みた", "読むた", "読んで"], 0, "読む torna-se 読んだ."],
    ["Qual expressão significa 'pela primeira vez'?", ["初めて", "何度も", "毎日", "まだ"], 0, "初めて significa pela primeira vez."],
    ["Qual frase indica que alguém nunca teve uma experiência?", ["日本へ行ったことがありません", "日本へ行ったことがあります", "日本へ行きたいです", "日本へ行きました"], 0, "A forma negativa de ことがある indica ausência de experiência."]
  ])
},

39: {
  days: {
    1: buildQuestions(39, 1, [
      ["O que significa あげる em uma situação de dar algo?", ["Dar algo a outra pessoa", "Receber algo", "Comprar algo", "Perder algo"], 0, "あげる expressa dar algo a outra pessoa."],
      ["Qual frase significa 'dei um livro ao meu amigo'?", ["友達に本をあげました", "友達に本をもらいました", "友達に本をくれました", "友達が本を読みました"], 0, "あげました indica que o sujeito deu o livro ao amigo."],
      ["Qual é a estrutura básica de あげる?", ["Quem dá + に + objeto + を + あげる", "Quem recebe + を + あげる", "Objeto + が + あげる", "Local + で + あげる"], 0, "A pessoa que recebe normalmente é marcada por に."],
      ["Qual frase significa 'dei flores à minha mãe'?", ["母に花をあげました", "母から花をもらいました", "母が花をくれました", "母で花を見ました"], 0, "母に indica a pessoa que recebeu as flores."],
      ["Qual é o significado de 花?", ["Flor", "Livro", "Água", "Carro"], 0, "花 significa flor."],
      ["Qual frase significa 'vou dar um presente ao professor'?", ["先生にプレゼントをあげます", "先生からプレゼントをもらいます", "先生がプレゼントをくれます", "先生でプレゼントを読みます"], 0, "あげます indica que o sujeito dará o presente ao professor."],
      ["Qual é o significado de プレゼント?", ["Presente", "Livro", "Carta", "Comida"], 0, "プレゼント é uma palavra em katakana que significa presente."],
      ["Qual é a diferença entre あげる e もらう?", ["あげる é dar; もらう é receber", "Os dois significam comprar", "あげる é receber; もらう é dar", "Os dois significam emprestar"], 0, "Os verbos representam perspectivas diferentes da transferência."],
      ["Qual é a perspectiva de あげる?", ["A perspectiva de quem dá", "A perspectiva de quem recebe", "A perspectiva de quem observa o tempo", "A perspectiva do objeto"], 0, "あげる descreve a ação de dar a partir do doador."],
      ["Qual é o objetivo desta aula?", ["Aprender a expressar ações de dar", "Aprender condicionais", "Estudar somente o passado", "Aprender comparações"], 0, "A aula introduz a primeira das três estruturas de dar e receber."]
    ]),
    2: buildQuestions(39, 2, [
      ["O que significa くれる?", ["Alguém dá algo ao falante ou ao seu grupo", "O falante dá algo a qualquer pessoa", "O falante compra algo", "Alguém recebe algo do falante"], 0, "くれる apresenta a ação de dar algo ao falante ou a alguém do seu grupo."],
      ["Qual frase significa 'meu amigo me deu um livro'?", ["友達が本をくれました", "友達に本をあげました", "友達から本をあげました", "友達を本にくれました"], 0, "友達が identifica quem deu e くれました indica que o presente veio para o falante."],
      ["Qual frase significa 'minha mãe me deu um presente'?", ["母がプレゼントをくれました", "母にプレゼントをあげました", "母をプレゼントにしました", "母からプレゼントをあげました"], 0, "くれました é usado quando alguém dá algo ao falante."],
      ["Qual é a perspectiva de くれる?", ["A pessoa que recebe é o falante ou alguém próximo dele", "O falante sempre é o doador", "O objeto é sempre o doador", "A ação acontece no passado obrigatoriamente"], 0, "くれる destaca um presente recebido pelo falante ou seu grupo."],
      ["Qual é a diferença entre あげる e くれる?", ["あげる descreve dar; くれる descreve alguém dando ao falante ou seu grupo", "Ambos significam receber", "あげる indica passado; くれる indica futuro", "Ambos indicam posse"], 0, "A perspectiva de quem recebe muda a escolha do verbo."],
      ["Qual frase está correta para 'meu irmão me deu água'?", ["兄が水をくれました", "兄に水をあげました", "兄を水にくれました", "兄で水をくれました"], 0, "兄が indica o doador e くれました indica que a água foi dada ao falante."],
      ["Qual frase significa 'a professora me deu um livro'?", ["先生が本をくれました", "先生に本をあげました", "先生を本にしました", "先生で本をくれました"], 0, "A professora é quem dá o livro ao falante."],
      ["Qual partícula normalmente marca quem dá na construção com くれる?", ["が", "を", "へ", "で"], 0, "O doador normalmente aparece marcado com が."],
      ["Qual é a função de くれる em 友達が手紙をくれた?", ["Indicar que o amigo deu uma carta ao falante", "Indicar que o falante deu uma carta ao amigo", "Indicar que o amigo comprou uma carta", "Indicar que a carta foi perdida"], 0, "くれた apresenta a transferência em direção ao falante."],
      ["Qual habilidade é trabalhada?", ["Reconhecer a perspectiva de quem recebe", "Memorizar somente kanji", "Indicar locais", "Formar comparações"], 0, "O uso de くれる depende de quem recebe o benefício ou objeto."]
    ]),
    3: buildQuestions(39, 3, [
      ["O que significa もらう?", ["Receber algo de alguém", "Dar algo a alguém", "Comprar algo", "Emprestar algo"], 0, "もらう significa receber."],
      ["Qual frase significa 'recebi um livro do meu amigo'?", ["友達から本をもらいました", "友達に本をあげました", "友達が本をくれました", "友達で本を読みました"], 0, "から identifica a origem e もらいました indica receber."],
      ["Qual frase significa 'recebi flores da minha mãe'?", ["母から花をもらいました", "母に花をあげました", "母が花をくれました", "母で花を見ました"], 0, "母から indica de quem vieram as flores."],
      ["Qual é a estrutura básica de もらう?", ["Quem recebe + に/から + doador + objetoを + もらう", "Quem dá + を + もらう", "Objeto + へ + もらう", "Local + で + もらう"], 0, "A pessoa que recebe é o sujeito; o doador pode ser marcado por に ou から."],
      ["Qual é a diferença entre くれる e もらう?", ["くれる destaca quem dá ao falante; もらう destaca quem recebe", "Os dois significam dar", "くれる significa comprar; もらう significa vender", "Os dois significam emprestar"], 0, "Ambos podem descrever a mesma transferência, mas de perspectivas diferentes."],
      ["Qual frase significa 'recebi uma carta do professor'?", ["先生から手紙をもらいました", "先生に手紙をあげました", "先生が手紙をくれました", "先生で手紙を読みました"], 0, "もらいました apresenta o falante como receptor."],
      ["Qual frase significa 'ganhei um presente da minha família'?", ["家族からプレゼントをもらいました", "家族にプレゼントをあげました", "家族をプレゼントにしました", "家族でプレゼントを読みました"], 0, "家族から indica a origem do presente."],
      ["Qual é a função de から em 友達から本をもらいました?", ["Indicar de quem o objeto foi recebido", "Indicar o destino", "Indicar o objeto direto", "Indicar comparação"], 0, "から marca a origem ou fonte do recebimento."],
      ["Qual frase apresenta corretamente a ideia de receber?", ["私は先生から本をもらいました", "私は先生に本をあげました", "私は先生が本をくれました", "私は先生で本を読みました"], 0, "O sujeito 私 recebe o livro do professor."],
      ["Qual é o objetivo desta aula?", ["Expressar recebimento de objetos e presentes", "Aprender somente condicionais", "Estudar kanji de números", "Formar frases de comparação"], 0, "A aula trabalha a perspectiva de quem recebe."]
    ]),
    4: buildQuestions(39, 4, [
      ["Qual frase significa 'dei um livro ao meu amigo'?", ["私は友達に本をあげました", "私は友達から本をもらいました", "友達が私に本をくれました", "私は友達で本を読みました"], 0, "O sujeito 私 dá o livro ao amigo."],
      ["Qual frase significa 'meu amigo me deu um livro'?", ["友達が私に本をくれました", "私は友達に本をあげました", "私は友達から本をあげました", "友達に私が本をもらいました"], 0, "O amigo é o doador e o falante é o receptor."],
      ["Qual frase significa 'recebi um livro do meu amigo'?", ["私は友達から本をもらいました", "私は友達に本をあげました", "友達が私に本をあげました", "私は友達を本にしました"], 0, "もらいました destaca o falante como receptor."],
      ["Qual verbo é adequado quando você dá algo a outra pessoa?", ["あげる", "くれる", "もらう", "いる"], 0, "あげる descreve dar algo a outra pessoa."],
      ["Qual verbo é adequado quando alguém dá algo a você?", ["くれる", "あげる", "もらう", "ある"], 0, "くれる descreve alguém dando algo ao falante ou seu grupo."],
      ["Qual verbo destaca você recebendo algo?", ["もらう", "あげる", "くれる", "する"], 0, "もらう apresenta a perspectiva de quem recebe."],
      ["Qual partícula pode indicar o doador em uma frase com もらう?", ["から", "を", "で", "へ"], 0, "から pode marcar a origem do objeto recebido."],
      ["Qual partícula marca frequentemente quem recebe na construção com あげる?", ["に", "を", "が", "で"], 0, "に marca a pessoa que recebe algo."],
      ["Qual frase está correta?", ["妹に花をあげました", "妹を花にあげました", "妹で花があげました", "妹へ花があげました"], 0, "妹に marca a pessoa que recebeu as flores."],
      ["Qual habilidade é essencial nesta aula?", ["Identificar quem dá, quem recebe e de qual perspectiva se fala", "Memorizar somente as leituras dos kanji", "Identificar apenas o tempo verbal", "Eliminar as partículas"], 0, "O significado depende da relação entre doador e receptor."]
    ]),
    5: buildQuestions(39, 5, [
      ["Qual frase significa 'meu pai me comprou um livro'?", ["父が本を買ってくれました", "父に本を買ってあげました", "父から本を買ってもらいました", "父が本を買いたいです"], 0, "買ってくれました indica que o pai fez a ação em benefício do falante."],
      ["Qual frase significa 'fiz um bolo para minha mãe'?", ["母にケーキを作ってあげました", "母からケーキを作ってもらいました", "母がケーキを作ってくれました", "母をケーキにしました"], 0, "作ってあげました indica que o sujeito fez algo para outra pessoa."],
      ["Qual frase significa 'meu amigo me ajudou'?", ["友達が手伝ってくれました", "友達に手伝ってあげました", "友達から手伝ってもらいました", "友達を手伝ってくれました"], 0, "手伝ってくれました indica que o amigo ajudou o falante."],
      ["Qual frase significa 'recebi ajuda do professor'?", ["先生に手伝ってもらいました", "先生を手伝ってあげました", "先生が手伝ってあげました", "先生で手伝いました"], 0, "手伝ってもらいました apresenta o falante como beneficiário da ajuda."],
      ["Qual é a função de ～てあげる?", ["Fazer algo para outra pessoa", "Receber um objeto", "Fazer algo para si obrigatoriamente", "Indicar passado sem benefício"], 0, "～てあげる indica uma ação realizada em benefício de outra pessoa."],
      ["Qual é a função de ～てくれる?", ["Alguém faz algo pelo falante ou seu grupo", "O falante faz algo para outra pessoa", "O falante recebe um objeto sem ação", "Indicar uma comparação"], 0, "～てくれる destaca uma ação feita em benefício do falante."],
      ["Qual é a função de ～てもらう?", ["Receber o benefício de uma ação realizada por alguém", "Dar um objeto a alguém", "Indicar uma condição", "Indicar uma possibilidade"], 0, "～てもらう apresenta o falante como beneficiário da ação."],
      ["Qual frase significa 'meu irmão escreveu uma carta para mim'?", ["兄が手紙を書いてくれました", "兄に手紙を書いてあげました", "兄から手紙を書いてもらいました", "兄を手紙にしました"], 0, "書いてくれました indica que o irmão escreveu a carta para o falante."],
      ["Qual frase significa 'ajudei meu amigo a estudar'?", ["友達に勉強を手伝ってあげました", "友達が勉強を手伝ってくれました", "友達から勉強を手伝ってもらいました", "友達で勉強をしました"], 0, "手伝ってあげました indica que o sujeito ajudou o amigo."],
      ["Qual é a importância de ～てあげる, ～てくれる e ～てもらう?", ["Expressar quem beneficia quem por meio de uma ação", "Indicar somente o futuro", "Formar palavras estrangeiras", "Substituir todas as partículas"], 0, "As estruturas mostram a direção do benefício."]
    ]),
    6: buildQuestions(39, 6, [
      ["Leia: 友達が誕生日に本をくれました。 O que aconteceu?", ["Um amigo deu um livro ao falante no aniversário", "O falante deu um livro ao amigo", "O amigo vendeu um livro", "O falante perdeu um livro"], 0, "くれました indica que o amigo deu algo ao falante."],
      ["Leia: 私は妹にお菓子をあげました。 O que a pessoa fez?", ["Deu doces à irmã mais nova", "Recebeu doces da irmã", "Comprou doces para si", "Perdeu os doces"], 0, "妹に marca quem recebeu os doces."],
      ["Leia: 先生に日本語を教えてもらいました。 O que a pessoa recebeu?", ["Ajuda para aprender japonês", "Um livro de matemática", "Um presente", "Uma viagem"], 0, "教えてもらいました indica que recebeu o benefício de ser ensinado."],
      ["Qual expressão indica que alguém fez algo por você?", ["～てくれる", "～てあげる", "～たい", "～たら"], 0, "～てくれる mostra uma ação em benefício do falante."],
      ["Qual expressão indica que você fez algo por outra pessoa?", ["～てあげる", "～てくれる", "～てもらう", "～なら"], 0, "～てあげる indica que o sujeito fez algo por outra pessoa."],
      ["Qual expressão indica que você recebeu o benefício de uma ação?", ["～てもらう", "～てあげる", "～てくれる", "～と"], 0, "～てもらう destaca o beneficiário."],
      ["Qual é a perspectiva de もらう?", ["A pessoa que recebe", "A pessoa que dá", "A pessoa que observa", "O objeto recebido"], 0, "もらう descreve a transferência a partir do receptor."],
      ["Qual é a perspectiva de くれる?", ["Alguém dá algo ao falante ou a alguém próximo", "O falante dá algo a qualquer pessoa", "O falante compra algo", "O falante empresta algo"], 0, "くれる apresenta a transferência em direção ao falante."],
      ["Qual frase significa 'minha mãe fez comida para mim'?", ["母が料理を作ってくれました", "母に料理を作ってあげました", "母から料理を作ってもらいました", "母を料理にしました"], 0, "作ってくれました indica que a mãe fez comida em benefício do falante."],
      ["Qual é o objetivo da semana 39?", ["Entender as perspectivas de dar, receber e fazer algo por alguém", "Aprender somente condicionais", "Estudar apenas kanji", "Revisar números"], 0, "A semana trabalha あげる, くれる e もらう e suas formas com て."]
    ])
  },
  recovery: buildRecovery(39, [
    ["Qual verbo significa dar algo a outra pessoa?", ["あげる", "くれる", "もらう", "いる"], 0, "あげる significa dar."],
    ["Qual verbo indica que alguém deu algo ao falante?", ["くれる", "あげる", "もらう", "ある"], 0, "くれる indica que algo foi dado ao falante ou seu grupo."],
    ["Qual verbo significa receber?", ["もらう", "あげる", "くれる", "する"], 0, "もらう significa receber."],
    ["Qual estrutura indica fazer algo por outra pessoa?", ["～てあげる", "～てくれる", "～てもらう", "～たら"], 0, "～てあげる apresenta uma ação feita em benefício de outra pessoa."],
    ["Qual estrutura indica receber o benefício de uma ação?", ["～てもらう", "～てあげる", "～てくれる", "～なら"], 0, "～てもらう destaca quem recebe o benefício."]
  ])
},

40: {
  days: {
    1: buildQuestions(40, 1, [
      ["O que é uma oração relativa?", ["Uma oração que descreve ou identifica um substantivo", "Uma frase que só apresenta perguntas", "Uma forma exclusiva do passado", "Uma palavra estrangeira"], 0, "A oração relativa fornece informações sobre um substantivo."],
      ["Em japonês, onde normalmente fica a oração relativa?", ["Antes do substantivo que ela modifica", "Depois do ponto final", "Sempre no início do texto", "Depois de uma partícula obrigatória の"], 0, "A oração relativa aparece antes do substantivo descrito."],
      ["Qual expressão significa 'a pessoa que estuda japonês'?", ["日本語を勉強する人", "人を日本語する勉強", "日本語人を勉強する", "勉強するを日本語人"], 0, "日本語を勉強する descreve a pessoa 人."],
      ["Qual é o substantivo descrito em 日本語を勉強する人?", ["人", "日本語", "勉強", "を"], 0, "人 é o substantivo que recebe a descrição."],
      ["Qual expressão significa 'o livro que eu comprei'?", ["私が買った本", "本を私が買うた", "私を本が買った", "買ったが私の本を"], 0, "私が買った descreve o livro 本."],
      ["Qual expressão significa 'a comida que minha mãe fez'?", ["母が作った料理", "料理を母が作るた", "母を料理が作った", "作った母を料理"], 0, "母が作った é a oração que descreve 料理."],
      ["Qual é a ordem correta da oração relativa?", ["Descrição + substantivo", "Substantivo + descrição obrigatoriamente", "Partícula + substantivo + verbo", "Verbo + partícula + descrição"], 0, "Em japonês, a descrição vem antes do substantivo."],
      ["Qual expressão significa 'o amigo que mora em Tóquio'?", ["東京に住んでいる友達", "友達を東京に住んでいる", "東京を友達が住む", "住んでいる東京を友達"], 0, "東京に住んでいる descreve 友達."],
      ["Qual é o papel de 住んでいる em 東京に住んでいる人?", ["Descrever a pessoa que mora em Tóquio", "Indicar uma pergunta", "Indicar posse", "Indicar comparação"], 0, "住んでいる modifica 人 e informa onde a pessoa mora."],
      ["Qual é o objetivo da aula?", ["Entender como uma oração pode descrever um substantivo", "Aprender somente o passado", "Estudar partículas isoladas", "Memorizar números"], 0, "A aula introduz a estrutura das orações relativas."]
    ]),
    2: buildQuestions(40, 2, [
      ["Qual expressão significa 'o homem que está lendo um livro'?", ["本を読んでいる男の人", "男の人を本が読んでいる", "本に男の人を読んでいる", "読んでいる本を男の人"], 0, "本を読んでいる descreve 男の人."],
      ["Qual expressão significa 'a mulher que trabalha no hospital'?", ["病院で働いている女の人", "女の人を病院で働く", "病院が女の人を働く", "働いている病院の女"], 0, "病院で働いている modifica 女の人."],
      ["Qual expressão significa 'o estudante que fala japonês'?", ["日本語を話す学生", "学生を日本語が話す", "日本語に学生を話す", "話すを日本語学生"], 0, "日本語を話す descreve 学生."],
      ["Qual expressão significa 'o cachorro que está dormindo'?", ["寝ている犬", "犬を寝ている", "寝るを犬", "犬が寝ての"], 0, "寝ている modifica 犬."],
      ["Qual substantivo é descrito em 昨日買った服?", ["服", "昨日", "買った", "A partícula"], 0, "服 é a roupa que foi comprada ontem."],
      ["Qual expressão significa 'o filme que assisti ontem'?", ["昨日見た映画", "映画を昨日が見た", "見たを昨日映画", "昨日の見たを映画"], 0, "昨日見た descreve 映画."],
      ["Qual expressão significa 'a pessoa que encontrei ontem'?", ["昨日会った人", "人を昨日が会った", "会ったを昨日人", "昨日の人を会った"], 0, "昨日会った modifica 人."],
      ["Qual é a forma verbal usada em 本を読んでいる人?", ["Forma informal do verbo", "Forma ます obrigatoriamente", "Forma potencial obrigatoriamente", "Forma condicional たら"], 0, "As orações relativas usam formas simples dos verbos antes do substantivo."],
      ["Qual frase está correta?", ["私が作ったケーキです", "私を作ったケーキです", "私に作ったがケーキです", "作った私をケーキです"], 0, "私が作った descreve ケーキ."],
      ["Qual é a principal regra desta aula?", ["A oração que descreve vem antes do substantivo", "O substantivo sempre vem primeiro", "Toda oração precisa de の", "O verbo deve sempre estar em ます"], 0, "A ordem descrição + substantivo é fundamental."]
    ]),
    3: buildQuestions(40, 3, [
      ["Qual expressão significa 'o lugar onde trabalho'?", ["私が働いている場所", "場所を私が働く", "私を場所で働く", "働いているを場所"], 0, "私が働いている modifica 場所."],
      ["Qual expressão significa 'a cidade onde moro'?", ["私が住んでいる町", "町を私が住む", "住んでいる私を町", "私の町が住む"], 0, "私が住んでいる descreve 町."],
      ["Qual expressão significa 'o restaurante onde comi ontem'?", ["昨日食べたレストラン", "レストランを昨日が食べた", "昨日をレストランが食べた", "食べたを昨日レストラン"], 0, "昨日食べた modifica レストラン."],
      ["Qual é o significado de 場所?", ["Lugar", "Pessoa", "Comida", "Experiência"], 0, "場所 significa lugar."],
      ["Qual é o significado de 町?", ["Cidade ou bairro", "Pessoa", "Livro", "Hospital"], 0, "町 significa cidade ou bairro."],
      ["Qual expressão significa 'a escola que meu irmão frequenta'?", ["弟が通っている学校", "学校を弟が通う", "弟を学校が通っている", "通っているを弟学校"], 0, "弟が通っている descreve 学校."],
      ["Qual é o significado de 通う?", ["Frequentar ou ir regularmente", "Comer", "Comprar", "Dormir"], 0, "通う significa frequentar ou ir regularmente a um lugar."],
      ["Qual expressão significa 'o livro que está sobre a mesa'?", ["机の上にある本", "本の上にある机", "机を本がある", "本を机にある"], 0, "机の上にある descreve onde o livro está."],
      ["Qual expressão significa 'o amigo que conheci na escola'?", ["学校で知り合った友達", "友達を学校で知り合った", "学校が友達を知り合った", "知り合ったを学校友達"], 0, "学校で知り合った modifica 友達."],
      ["Qual é a habilidade trabalhada?", ["Usar orações relativas para acrescentar detalhes", "Aprender somente números", "Formar perguntas com か", "Usar apenas hiragana"], 0, "As orações relativas permitem acrescentar informações aos substantivos."]
    ]),
    4: buildQuestions(40, 4, [
      ["Qual expressão significa 'o livro que meu amigo comprou'?", ["友達が買った本", "友達を買った本", "本が友達を買った", "買ったを友達本"], 0, "友達が買った descreve 本."],
      ["Qual expressão significa 'a pessoa que me ajudou'?", ["私を手伝ってくれた人", "人を私が手伝ってくれた", "私に人を手伝った", "手伝ったを私の人"], 0, "私を手伝ってくれた modifica 人."],
      ["Qual expressão significa 'o presente que recebi'?", ["もらったプレゼント", "プレゼントをもらうた", "もらうプレゼントを", "プレゼントがもらった"], 0, "もらった descreve o presente recebido."],
      ["Qual expressão significa 'a comida que comi no Japão'?", ["日本で食べた料理", "料理を日本が食べた", "日本を料理で食べた", "食べたを日本料理"], 0, "日本で食べた modifica 料理."],
      ["Qual expressão significa 'a pessoa que me deu um livro'?", ["本をくれた人", "人を本がくれた", "本に人をくれた", "くれたを本の人"], 0, "本をくれた descreve a pessoa que deu o livro."],
      ["Qual expressão significa 'o amigo a quem dei um presente'?", ["プレゼントをあげた友達", "友達をプレゼントがあげた", "プレゼントに友達をあげた", "あげたをプレゼント友達"], 0, "プレゼントをあげた descreve 友達."],
      ["Qual expressão significa 'o professor que me ensinou japonês'?", ["日本語を教えてくれた先生", "先生を日本語が教えた", "日本語に先生を教えた", "教えたを日本語先生"], 0, "日本語を教えてくれた modifica 先生."],
      ["Qual é a forma usada para modificar um substantivo com um verbo?", ["Forma simples do verbo", "Somente forma ます", "Somente forma potencial", "Somente forma negativa"], 0, "A oração relativa utiliza a forma simples antes do substantivo."],
      ["Qual frase significa 'o bolo que minha irmã fez'?", ["妹が作ったケーキ", "ケーキを妹が作った", "妹をケーキが作った", "作ったを妹のケーキ"], 0, "妹が作った descreve ケーキ."],
      ["Qual é a função de uma oração relativa?", ["Adicionar informações para identificar ou descrever um substantivo", "Indicar somente tempo", "Substituir o sujeito", "Transformar substantivos em perguntas"], 0, "A oração relativa acrescenta detalhes sobre o substantivo."]
    ]),
    5: buildQuestions(40, 5, [
      ["Qual expressão significa 'o livro que estou lendo agora'?", ["今読んでいる本", "今本を読むた", "本が今を読んでいる", "読んでいるを今本"], 0, "今読んでいる modifica 本."],
      ["Qual expressão significa 'o filme que quero assistir'?", ["見たい映画", "映画を見たいた", "映画が見たいを", "見ました映画"], 0, "見たい pode modificar diretamente o substantivo 映画."],
      ["Qual expressão significa 'a comida que consigo comer'?", ["食べられる料理", "料理を食べられた", "料理が食べるられる", "食べたい料理を"], 0, "食べられる modifica 料理 e indica possibilidade."],
      ["Qual expressão significa 'a pessoa que já foi ao Japão'?", ["日本へ行ったことがある人", "人が日本へ行ったこと", "日本へ人を行った", "行った人が日本をこと"], 0, "A construção de experiência modifica 人."],
      ["Qual expressão significa 'a pessoa que sabe falar japonês'?", ["日本語が話せる人", "人を日本語が話す", "日本語を人が話せるの", "話せるを日本語人"], 0, "日本語が話せる descreve a pessoa."],
      ["Qual expressão significa 'o livro que não li'?", ["読まなかった本", "本を読まないた", "読んだ本ではない", "本が読まなかった"], 0, "読まなかった é a forma negativa passada simples que modifica 本."],
      ["Qual expressão significa 'a pessoa que não veio'?", ["来なかった人", "人を来なかった", "来るない人", "来ました人"], 0, "来なかった é a forma negativa passada de 来る."],
      ["Qual frase significa 'o restaurante que quero visitar'?", ["行きたいレストラン", "レストランを行きたい", "行ったレストランたい", "レストランが行きたい"], 0, "行きたい modifica レストラン e expressa o desejo de visitá-lo."],
      ["Qual é a vantagem de usar orações relativas?", ["Construir descrições mais completas sem separar tudo em frases curtas", "Eliminar os substantivos", "Evitar verbos", "Usar apenas romaji"], 0, "As orações relativas permitem incorporar informações a uma frase."],
      ["Qual é o objetivo desta aula?", ["Combinar orações relativas com desejo, capacidade e experiência", "Estudar somente números", "Aprender apenas hiragana", "Abandonar a gramática"], 0, "A aula integra estruturas anteriores às orações relativas."]
    ]),
    6: buildQuestions(40, 6, [
      ["Leia: 私が昨日買った本はおもしろいです。 Qual é o livro descrito?", ["O livro que comprei ontem", "O livro que vou comprar amanhã", "O livro que meu amigo perdeu", "O livro que está na escola"], 0, "私が昨日買った modifica 本."],
      ["Leia: 日本語を話せる人と話しました。 Com quem a pessoa conversou?", ["Com uma pessoa que consegue falar japonês", "Com uma pessoa que não gosta de japonês", "Com um professor de matemática", "Com uma pessoa que está dormindo"], 0, "日本語を話せる descreve 人."],
      ["Leia: 母が作ってくれた料理を食べました。 O que a pessoa comeu?", ["A comida que a mãe preparou para ela", "A comida que ela preparou para a mãe", "A comida comprada no restaurante", "A comida que o amigo perdeu"], 0, "作ってくれた descreve 料理 e indica uma ação feita em benefício do falante."],
      ["Leia: 日本へ行ったことがある友達が来ました。 Quem chegou?", ["Um amigo que já foi ao Japão", "Um amigo que nunca estudou", "Um professor que mora no Japão", "Um amigo que quer viajar amanhã"], 0, "行ったことがある modifica 友達."],
      ["Qual é o substantivo descrito em 昨日読んだ新聞?", ["新聞", "昨日", "読んだ", "A partícula"], 0, "新聞 é o substantivo que recebeu a descrição."],
      ["Qual é a posição da oração relativa?", ["Antes do substantivo", "Sempre depois do substantivo", "Depois da frase inteira", "Sempre entre duas partículas"], 0, "A oração relativa japonesa vem antes do substantivo que modifica."],
      ["Qual frase significa 'a pessoa que mora perto da escola'?", ["学校の近くに住んでいる人", "人を学校の近くに住んでいる", "学校を人が近くに住む", "住んでいる学校を近く人"], 0, "学校の近くに住んでいる descreve 人."],
      ["Qual expressão significa 'o computador que comprei no ano passado'?", ["去年買ったコンピューター", "コンピューターを去年買いたい", "去年コンピューターを買うた", "買ったを去年コンピューター"], 0, "去年買った modifica コンピューター."],
      ["Qual frase está correta?", ["私が作ったケーキを食べました", "私を作ったケーキが食べました", "私がケーキを作ったを食べました", "作った私をケーキ食べました"], 0, "A oração 私が作った descreve ケーキ, que é o objeto de 食べました."],
      ["Qual é o objetivo da semana 40?", ["Construir frases com informações incorporadas antes dos substantivos", "Aprender somente o futuro", "Revisar apenas katakana", "Estudar exclusivamente contadores"], 0, "A semana desenvolve o uso de orações relativas."]
    ])
  },
  recovery: buildRecovery(40, [
    ["Onde fica a oração relativa em japonês?", ["Antes do substantivo que ela descreve", "Sempre depois do substantivo", "Depois do ponto final", "Antes de toda a frase"], 0, "A descrição vem antes do substantivo."],
    ["Qual expressão significa 'a pessoa que estuda japonês'?", ["日本語を勉強する人", "人を日本語する勉強", "日本語人を勉強する", "勉強するを日本語人"], 0, "日本語を勉強する modifica 人."],
    ["Qual expressão significa 'o livro que comprei'?", ["買った本", "本を買った", "本が買った", "買う本を"], 0, "買った descreve o substantivo 本."],
    ["Qual expressão significa 'o amigo que já foi ao Japão'?", ["日本へ行ったことがある友達", "友達が日本へ行ったこと", "日本へ友達を行った", "行った友達が日本をこと"], 0, "A construção de experiência modifica 友達."],
    ["Qual é a função das orações relativas?", ["Acrescentar informações e descrições aos substantivos", "Indicar apenas o passado", "Substituir todos os verbos", "Formar somente perguntas"], 0, "Elas permitem criar descrições mais completas."]
  ])
},


41: {
  days: {
    1: buildQuestions(41, 1, [
      ["O que significa そして?", ["E então / além disso", "Porém", "Porque", "Embora"], 0, "そして acrescenta uma informação ou ação."],
      ["O que significa しかし?", ["Portanto", "Porém", "Depois", "Por exemplo"], 1, "しかし apresenta contraste."],
      ["O que significa だから?", ["Apesar disso", "Enquanto", "Por isso", "Antes"], 2, "だから apresenta uma consequência."],
      ["Como se diz 'por exemplo'?", ["例えば", "しかし", "それから", "だから"], 0, "例えば introduz exemplos."],
      ["Complete: 雨です。____、出かけません。", ["しかし", "だから", "例えば", "そして"], 1, "だから conecta a chuva à consequência de não sair."],
      ["Como dizer 'Estudei e depois dormi'?", ["勉強しました。しかし寝ました。", "勉強して、それから寝ました。", "寝ました。だから勉強しました。", "勉強するために寝ました。"], 1, "それから indica a próxima ação."],
      ["O que significa まず?", ["Finalmente", "Por exemplo", "Primeiro", "Porém"], 2, "まず apresenta a primeira etapa."],
      ["O que significa 最後に?", ["Finalmente", "Porque", "Depois", "Enquanto"], 0, "最後に apresenta a última etapa."],
      ["Complete: まず宿題をします。____、ゲームをします。", ["しかし", "それから", "なぜ", "どこ"], 1, "それから indica o que acontece depois."],
      ["Qual frase usa contraste corretamente?", ["雨です。だから傘を使います。", "雨です。しかし出かけます。", "雨です。それから雨です。", "雨です。例えば雨です。"], 1, "しかし conecta duas ideias contrastantes."]
    ]),
    2: buildQuestions(41, 2, [
      ["Qual expressão significa 'porque'?", ["から", "まで", "より", "だけ"], 0, "から pode indicar a razão de uma ação."],
      ["Complete: 忙しい____、行きません。", ["まで", "から", "より", "だけ"], 1, "忙しいから significa 'porque estou ocupado'."],
      ["Como dizer 'Não fui porque estava doente'?", ["病気だから行きません。", "病気だったから行きませんでした。", "病気まで行きました。", "病気より行きました。"], 1, "だったから apresenta uma razão no passado."],
      ["Qual expressão pode significar 'embora'?", ["けれども", "だから", "それから", "まず"], 0, "けれども conecta ideias contrastantes."],
      ["Complete: 日本語は難しいです____、おもしろいです。", ["から", "けれども", "まで", "だけ"], 1, "A frase diz que japonês é difícil, mas interessante."],
      ["Como dizer 'Estou cansado, então vou descansar'?", ["疲れています。だから休みます。", "疲れています。しかし休みます。", "休みます。例えば疲れています。", "疲れています。それからなぜ。"], 0, "だから apresenta a consequência."],
      ["O que significa なぜ?", ["Onde", "Quando", "Por quê", "Quem"], 2, "なぜ pergunta o motivo."],
      ["Qual resposta combina com なぜ学校へ行きますか。?", ["学校です。", "勉強したいからです。", "月曜日です。", "友達です。"], 1, "勉強したいからです significa 'porque quero estudar'."],
      ["Complete: お金がありません____、買えません。", ["しかし", "ので", "そして", "例えば"], 1, "ので apresenta uma razão."],
      ["Qual frase expressa uma razão?", ["友達と話します。", "雨なので、家にいます。", "本を読みました。", "学校へ行きます。"], 1, "雨なので explica por que a pessoa fica em casa."]
    ]),
    3: buildQuestions(41, 3, [
      ["O que significa 間?", ["Durante / enquanto", "Antes", "Depois", "Sempre"], 0, "間 indica um período de tempo."],
      ["Como dizer 'Enquanto estudo, escuto música'?", ["勉強する前に音楽を聞きます。", "勉強している間、音楽を聞きます。", "勉強した後、音楽を聞きます。", "勉強だから音楽です。"], 1, "している間 indica ações durante o mesmo período."],
      ["O que significa 前に?", ["Depois de", "Enquanto", "Antes de", "Por causa de"], 2, "前に indica que algo acontece antes."],
      ["O que significa 後で?", ["Depois", "Antes", "Durante", "Porque"], 0, "後で indica algo que acontece posteriormente."],
      ["Complete: 寝る____、歯を磨きます。", ["後で", "前に", "間", "から"], 1, "寝る前に significa antes de dormir."],
      ["Como dizer 'Depois de comer, estudo'?", ["食べる前に勉強します。", "食べた後で勉強します。", "食べている間に寝ます。", "食べるから勉強します。"], 1, "後で indica a ordem das ações."],
      ["O que significa 時?", ["Lugar", "Momento / quando", "Pessoa", "Objeto"], 1, "時 indica um momento ou ocasião."],
      ["Complete: 日本へ行った____、写真を撮りました。", ["時", "前", "間", "まで"], 0, "時 indica o momento em que algo aconteceu."],
      ["Como dizer 'Quando era criança, gostava de jogos'?", ["子供の時、ゲームが好きでした。", "子供の後、ゲームです。", "子供の前、ゲームをします。", "子供の間、ゲームから。"], 0, "子供の時 significa quando era criança."],
      ["Qual expressão indica duas ações durante o mesmo período?", ["する前", "した後", "している間", "したから"], 2, "している間 indica uma ação acontecendo durante outra."]
    ]),
    4: buildQuestions(41, 4, [
      ["O que significa と思います?", ["Acho que / penso que", "Quero comprar", "Preciso ir", "Não posso"], 0, "と思います expressa opinião."],
      ["Como dizer 'Acho que ele é estudante'?", ["彼は学生だと思います。", "彼は学生を思います。", "彼は学生に行きます。", "彼は学生からです。"], 0, "だと思います expressa uma opinião sobre algo."],
      ["Complete: この本はおもしろい____。", ["と思います", "をします", "にいます", "へあります"], 0, "おもしろいと思います significa acho interessante."],
      ["O que significa と言いました?", ["Disse que", "Penso que", "Talvez", "Preciso"], 0, "と言いました relata algo que alguém falou."],
      ["Como dizer 'Meu amigo disse que virá amanhã'?", ["友達は明日来ると言いました。", "友達は明日来たいです。", "友達は明日来ませんでした。", "友達は明日です。"], 0, "来ると言いました relata a fala do amigo."],
      ["O que significa かもしれません?", ["Com certeza", "Talvez", "Nunca", "Sempre"], 1, "かもしれません expressa possibilidade."],
      ["Complete: 明日は雨が降る____。", ["かもしれません", "をします", "にいます", "ください"], 0, "降るかもしれません significa talvez chova."],
      ["Qual frase apresenta uma opinião?", ["日本語は楽しいと思います。", "日本語を飲みます。", "日本語に寝ます。", "日本語から学校。"], 0, "と思います apresenta o pensamento de alguém."],
      ["Qual frase expressa possibilidade?", ["彼は来るかもしれません。", "彼は来ました。", "彼は来ませんでした。", "彼は来たいです。"], 0, "かもしれません indica que talvez ele venha."],
      ["Qual é a diferença entre と思います e かもしれません?", ["São idênticos", "Opinião e possibilidade", "Ontem e amanhã", "Lugar e pessoa"], 1, "Um expressa pensamento; o outro, possibilidade."]
    ]),
    5: buildQuestions(41, 5, [
      ["O que significa そのため?", ["Por esse motivo", "Antes disso", "Essa pessoa", "Nesse lugar"], 0, "そのため apresenta consequência."],
      ["O que significa さらに?", ["Além disso", "Porém", "Nunca", "Ontem"], 0, "さらに acrescenta uma informação."],
      ["Complete: この町は静かです。____、安全です。", ["さらに", "しかし", "なぜ", "どこ"], 0, "さらに acrescenta outra característica."],
      ["O que significa つまり?", ["Em outras palavras", "Por exemplo", "Depois", "Primeiro"], 0, "つまり reformula ou resume uma ideia."],
      ["Qual frase usa つまり corretamente?", ["つまり、別の言葉で説明します。", "つまり、昨日へ行きます。", "つまり、水を食べます。", "つまり、学校に寝ます。"], 0, "つまり introduz uma reformulação."],
      ["O que significa 一方?", ["Por outro lado", "Uma pessoa", "Um dia", "Uma vez"], 0, "一方 apresenta outra perspectiva."],
      ["Complete: 電車は便利です。____、バスは安いです。", ["一方", "だから", "まず", "なぜ"], 0, "一方 contrasta duas perspectivas."],
      ["O que significa 結論として?", ["Em conclusão", "Por exemplo", "Depois", "Nesse momento"], 0, "結論として introduz uma conclusão."],
      ["Qual frase apresenta uma conclusão?", ["結論として、毎日勉強することが大切です。", "例えば、学校へ行きます。", "しかし、昨日です。", "なぜ、友達です。"], 0, "A expressão indica que a ideia é uma conclusão."],
      ["Por que usamos conectores?", ["Para conectar e organizar ideias", "Para eliminar verbos", "Para trocar todos os substantivos", "Para escrever sem sentido"], 0, "Conectores mostram a relação entre as ideias."]
    ]),
    6: buildQuestions(41, 6, [
      ["Complete: 朝ご飯を食べました。____、学校へ行きました。", ["それから", "しかし", "なぜ", "けれども"], 0, "それから organiza ações em sequência."],
      ["Complete: 雨が降っています。____、試合は続きます。", ["だから", "しかし", "そのため", "まず"], 1, "しかし apresenta contraste."],
      ["Complete: 疲れています。____、早く寝ます。", ["だから", "しかし", "例えば", "一方"], 0, "だから introduz a consequência."],
      ["Qual frase apresenta opinião?", ["この映画はおもしろいと思います。", "この映画を食べます。", "この映画に寝ます。", "この映画から行きます。"], 0, "と思います expressa opinião."],
      ["Qual frase apresenta possibilidade?", ["明日は晴れるかもしれません。", "明日は晴れました。", "明日は晴れませんでした。", "明日は晴れたいです。"], 0, "かもしれません expressa possibilidade."],
      ["Complete: 学校へ行く____、かばんを準備します。", ["前に", "後で", "間", "から"], 0, "前に indica uma ação anterior."],
      ["Como dizer 'Enquanto trabalho, escuto rádio'?", ["仕事をしている間、ラジオを聞きます。", "仕事をした後、ラジオを聞きます。", "仕事をする前、ラジオを聞きます。", "仕事だからラジオです。"], 0, "している間 indica simultaneidade."],
      ["Qual expressão introduz exemplo?", ["例えば", "つまり", "結論として", "一方"], 0, "例えば significa por exemplo."],
      ["Qual expressão introduz conclusão?", ["結論として", "しかし", "それから", "まず"], 0, "結論として apresenta a conclusão."],
      ["Qual frase organiza melhor as ideias?", ["昨日、学校。友達。", "昨日は学校へ行きました。それから友達と話しました。", "昨日、しかし、なぜ。", "学校だから友達を食べます。"], 1, "A frase conecta duas ações com それから."]
    ])
  },
  recovery: buildRecovery(41, [
    ["Qual conector indica contraste?", ["しかし", "だから", "それから", "まず"], 0, "しかし significa porém."],
    ["Qual expressão significa enquanto?", ["間", "前", "後", "最後"], 0, "間 indica um período."],
    ["Qual expressão apresenta opinião?", ["と思います", "かもしれません", "そのため", "例えば"], 0, "と思います significa acho que."],
    ["Qual expressão indica possibilidade?", ["かもしれません", "と言いました", "結論として", "まず"], 0, "かもしれません significa talvez."],
    ["Qual conector apresenta consequência?", ["だから", "しかし", "一方", "例えば"], 0, "だから significa por isso."]
  ])
},

42: {
  days: {
    1: buildQuestions(42, 1, [
      ["Qual sistema é usado principalmente para palavras japonesas nativas e terminações gramaticais?", ["Hiragana", "Katakana", "Alfabeto latino", "Números"], 0, "Hiragana aparece em palavras japonesas e terminações gramaticais."],
      ["Qual sistema é usado frequentemente para palavras estrangeiras?", ["Hiragana", "Katakana", "Kanji apenas", "Romaji"], 1, "Katakana é usado frequentemente em empréstimos estrangeiros."],
      ["Qual é a função dos kanji?", ["Representar significados e partes de palavras", "Substituir todos os verbos", "Indicar somente perguntas", "Representar números romanos"], 0, "Kanji representam ideias e significados dentro das palavras."],
      ["O que significa 猫?", ["Cachorro", "Gato", "Pássaro", "Peixe"], 1, "猫 é o kanji de gato."],
      ["O que significa 水?", ["Fogo", "Água", "Terra", "Vento"], 1, "水 significa água."],
      ["Qual é a leitura de 山?", ["かわ", "やま", "そら", "みず"], 1, "山 pode ser lido como やま, montanha."],
      ["Qual frase significa 'Eu bebo água'?", ["水を飲みます。", "水を食べます。", "水へ読みます。", "水が話します。"], 0, "飲みます significa beber."],
      ["Qual partícula marca frequentemente o objeto direto?", ["を", "に", "で", "が"], 0, "を marca o objeto da ação."],
      ["Qual frase significa 'Há um gato'?", ["猫がいます。", "猫を飲みます。", "猫へ行きます。", "猫が読みます。"], 0, "います é usado para existência de seres vivos."],
      ["Qual frase está correta?", ["私は本を読みます。", "私は本を飲みます。", "私は本に食べます。", "私は本が走ります。"], 0, "読みます significa ler e combina com 本."]
    ]),
    2: buildQuestions(42, 2, [
      ["Qual é o passado informal de 食べます?", ["食べた", "食べる", "食べない", "食べて"], 0, "食べた é a forma passada informal."],
      ["Qual é a forma negativa de 行く?", ["行った", "行かない", "行って", "行けば"], 1, "行かない significa não ir."],
      ["Qual é a forma て de 書く?", ["書いて", "書いた", "書かない", "書けば"], 0, "書く transforma-se em 書いて."],
      ["Qual frase significa 'Estou estudando'?", ["勉強しています。", "勉強しました。", "勉強しませんでした。", "勉強したいです。"], 0, "しています indica ação em andamento."],
      ["Qual expressão significa 'quero fazer'?", ["たい", "ない", "た", "て"], 0, "たい expressa desejo de realizar uma ação."],
      ["Qual forma expressa habilidade?", ["可能形", "過去形", "否定形", "命令形"], 0, "A forma potencial expressa capacidade ou possibilidade."],
      ["Qual frase significa 'Consigo falar japonês'?", ["日本語を話すことができます。", "日本語を食べることができます。", "日本語に寝ます。", "日本語を忘れたいです。"], 0, "話すことができます expressa capacidade de falar."],
      ["Qual partícula indica o local onde uma ação acontece?", ["で", "を", "の", "も"], 0, "で marca frequentemente o local de uma ação."],
      ["Qual partícula indica direção ou destino?", ["へ", "を", "が", "と"], 0, "へ indica direção ou destino."],
      ["Qual frase significa 'Fui à escola ontem'?", ["昨日、学校へ行きました。", "明日、学校へ行きます。", "昨日、学校を食べました。", "昨日、学校に読みます。"], 0, "昨日 indica ontem e 行きました está no passado."]
    ]),
    3: buildQuestions(42, 3, [
      ["O que significa もし?", ["Se / caso", "Sempre", "Ontem", "Talvez"], 0, "もし aparece em construções condicionais."],
      ["Qual expressão significa 'se chover'?", ["雨が降ったら", "雨が降る前", "雨が降った後", "雨が降る時だけ"], 0, "たら pode apresentar uma condição."],
      ["Qual frase significa 'Se tiver tempo, vou estudar'?", ["時間があったら、勉強します。", "時間がないから、勉強しました。", "時間を食べます。", "時間が好きです。"], 0, "あったら apresenta a condição de ter tempo."],
      ["O que significa なら?", ["Se tratando de / se for", "Depois", "Enquanto", "Antes"], 0, "なら apresenta uma condição ou assunto como ponto de partida."],
      ["O que significa と em uma condição como 春になると?", ["Quando / sempre que", "Porque", "Embora", "Talvez"], 0, "と pode indicar um resultado natural ou recorrente."],
      ["Qual frase significa 'Se apertar este botão, a luz acende'?", ["このボタンを押すと、電気がつきます。", "このボタンを食べると、電気です。", "このボタンが寝ます。", "このボタンを読みます。"], 0, "押すと apresenta uma condição e seu resultado."],
      ["Qual expressão significa 'se for sobre japonês'?", ["日本語なら", "日本語から", "日本語まで", "日本語だけ"], 0, "なら introduz um assunto ou condição."],
      ["Qual forma pode indicar uma condição específica?", ["たら", "ました", "ません", "です"], 0, "たら é uma forma comum de expressar 'se/quando'."],
      ["Qual frase apresenta uma condição?", ["雨が降ったら、家にいます。", "雨を食べます。", "家が読みます。", "昨日は学校でした。"], 0, "A primeira parte apresenta a condição para ficar em casa."],
      ["Qual é a ideia principal das formas condicionais?", ["Apresentar condições e resultados", "Falar somente do passado", "Contar números", "Indicar posse"], 0, "Condicionais conectam uma situação a um resultado."]
    ]),
    4: buildQuestions(42, 4, [
      ["Qual expressão significa 'já fiz'?", ["もうしました", "まだしません", "しませんでした", "したいです"], 0, "もう indica que algo já aconteceu."],
      ["O que significa まだ?", ["Ainda", "Sempre", "Ontem", "Muito"], 0, "まだ indica que algo continua ou ainda não aconteceu."],
      ["Qual frase significa 'Ainda não comi'?", ["まだ食べていません。", "もう食べました。", "食べたいです。", "食べています。"], 0, "まだ食べていません indica que a ação ainda não ocorreu."],
      ["Qual expressão significa 'alguma vez'?", ["ことがあります", "ことがありません", "ことができます", "ことにします"], 0, "たことがあります expressa experiência."],
      ["Como dizer 'Já fui ao Japão alguma vez'?", ["日本へ行ったことがあります。", "日本へ行くことです。", "日本へ行きません。", "日本を食べました。"], 0, "行ったことがあります indica experiência de ter ido."],
      ["Qual frase significa 'Nunca comi sushi'?", ["寿司を食べたことがありません。", "寿司を食べたことがあります。", "寿司を食べています。", "寿司を食べたいです。"], 0, "ことがありません nega a experiência."],
      ["O que significa 経験?", ["Experiência", "Escola", "Comida", "Viagem"], 0, "経験 significa experiência."],
      ["Qual frase fala de uma experiência passada?", ["富士山に登ったことがあります。", "富士山に登りたいです。", "富士山に登ります。", "富士山に登りません。"], 0, "登ったことがあります indica experiência."],
      ["Qual expressão significa 'nunca' em uma pergunta de experiência negativa?", ["一度もありません", "いつもあります", "もうあります", "たくさんあります"], 0, "一度もありません reforça que nunca aconteceu."],
      ["Qual frase está correta?", ["日本の映画を見たことがあります。", "日本の映画を見ることあります昨日。", "日本の映画を飲みました。", "日本の映画が寝ました。"], 0, "見たことがあります expressa experiência de assistir."]
    ]),
    5: buildQuestions(42, 5, [
      ["Qual verbo significa dar a alguém?", ["あげる", "くれる", "もらう", "いる"], 0, "あげる é usado quando alguém dá algo a outra pessoa."],
      ["Qual verbo indica que alguém dá algo a mim ou ao meu grupo?", ["あげる", "くれる", "もらう", "する"], 1, "くれる apresenta algo recebido pelo falante ou seu grupo."],
      ["Qual verbo significa receber?", ["あげる", "くれる", "もらう", "行く"], 2, "もらう significa receber."],
      ["Qual frase significa 'Dei um livro ao amigo'?", ["友達に本をあげました。", "友達に本をもらいました。", "友達が本をくれました。", "友達は本を食べました。"], 0, "あげました indica que eu dei o livro ao amigo."],
      ["Qual frase significa 'Meu amigo me deu um livro'?", ["友達が本をくれました。", "友達に本をあげました。", "友達から本を買いました。", "友達が本を読みました。"], 0, "くれました indica que o amigo deu algo ao falante."],
      ["Qual frase significa 'Recebi um presente da minha mãe'?", ["母にプレゼントをもらいました。", "母にプレゼントをあげました。", "母がプレゼントを食べました。", "母へプレゼントを読みました。"], 0, "もらいました expressa recebimento."],
      ["Qual partícula aparece frequentemente com a pessoa de quem recebemos algo?", ["に", "を", "で", "へ"], 0, "に pode marcar a pessoa de quem recebemos algo."],
      ["Qual é a diferença entre あげる e もらう?", ["Dar e receber", "Ir e vir", "Comer e beber", "Ler e escrever"], 0, "あげる é dar; もらう é receber."],
      ["Complete: 先生が私に本を____。", ["あげました", "くれました", "もらいました", "しました"], 1, "くれました indica que o professor deu o livro ao falante."],
      ["Qual frase está correta?", ["妹にお菓子をあげました。", "妹をお菓子にあげました。", "妹でお菓子をくれます。", "妹が私を食べました。"], 0, "に marca a pessoa que recebe o presente."]
    ]),
    6: buildQuestions(42, 6, [
      ["Qual expressão significa 'antes de fazer'?", ["する前に", "した後で", "している間", "したこと"], 0, "前に indica anterioridade."],
      ["Qual expressão significa 'depois de fazer'?", ["する前に", "した後で", "するなら", "しながら"], 1, "後で indica que algo acontece depois."],
      ["Qual forma expressa capacidade?", ["話せる", "話した", "話さない", "話して"], 0, "話せる é a forma potencial de 話す."],
      ["Qual frase significa 'Se chover, não sairei'?", ["雨が降ったら、出かけません。", "雨が降る前に、出かけました。", "雨を飲みます。", "雨が好きです。"], 0, "たら apresenta a condição."],
      ["Qual expressão relata uma experiência?", ["行ったことがあります", "行きたいです", "行きません", "行っています"], 0, "たことがあります expressa experiência."],
      ["Qual verbo significa receber?", ["あげる", "くれる", "もらう", "する"], 2, "もらう significa receber."],
      ["Qual frase significa 'Minha irmã me deu chocolate'?", ["姉がチョコレートをくれました。", "姉にチョコレートをあげました。", "姉からチョコレートを食べました。", "姉をチョコレートにしました。"], 0, "くれました indica que a irmã deu algo ao falante."],
      ["Qual expressão significa 'talvez'?", ["かもしれません", "と思います", "と言いました", "前に"], 0, "かもしれません indica possibilidade."],
      ["Qual conector significa 'porém'?", ["しかし", "だから", "それから", "まず"], 0, "しかし apresenta contraste."],
      ["Qual é o objetivo desta revisão?", ["Integrar gramática, leitura e vocabulário", "Aprender somente números", "Eliminar os kanji", "Usar apenas romaji"], 0, "A revisão combina diferentes conteúdos estudados."]
    ])
  },
  recovery: buildRecovery(42, [
    ["Qual forma expressa experiência?", ["たことがあります", "たいです", "ません", "てください"], 0, "たことがあります indica algo que já vivenciamos."],
    ["Qual verbo significa receber?", ["あげる", "くれる", "もらう", "行く"], 2, "もらう significa receber."],
    ["Qual forma significa 'se chover'?", ["雨が降ったら", "雨が降る前", "雨が降った後", "雨が降るだけ"], 0, "たら apresenta uma condição."],
    ["Qual forma expressa capacidade?", ["話せる", "話した", "話さない", "話して"], 0, "話せる significa conseguir falar."],
    ["Qual expressão significa 'ainda não'?", ["まだ", "もう", "いつも", "全部"], 0, "まだ indica que algo ainda não aconteceu ou continua."]
  ])
},

43: {
  days: {
    1: buildQuestions(43, 1, [
      ["Qual é a melhor estratégia para começar a ler um texto japonês?", ["Identificar o assunto geral", "Traduzir cada símbolo sem contexto", "Ignorar os verbos", "Ler somente o final"], 0, "Primeiro tente compreender o tema geral."],
      ["O que significa 毎朝?", ["Toda manhã", "Toda noite", "Todo mês", "Toda semana"], 0, "毎朝 significa todas as manhãs."],
      ["Leia: 毎朝、私は六時に起きます。 Qual é a informação principal?", ["A pessoa acorda às seis", "A pessoa dorme às seis", "A pessoa estuda à noite", "A pessoa viaja"], 0, "起きます significa acordar."],
      ["O que significa 朝ご飯?", ["Café da manhã", "Almoço", "Jantar", "Lanche da noite"], 0, "朝ご飯 é a refeição da manhã."],
      ["Leia: 学校へ行く前に、朝ご飯を食べます。 O que acontece primeiro?", ["A pessoa come", "A pessoa vai à escola", "A pessoa dorme", "A pessoa volta para casa"], 0, "前に indica que comer acontece antes de ir à escola."],
      ["O que significa 友達?", ["Amigo", "Professor", "Irmão", "Vizinho"], 0, "友達 significa amigo."],
      ["Leia: 放課後、友達とサッカーをします。 Quando a pessoa joga futebol?", ["Depois da aula", "Antes de acordar", "Durante o café", "À meia-noite"], 0, "放課後 significa depois das aulas."],
      ["O que significa 週末?", ["Fim de semana", "Dia de aula", "Manhã", "Ano novo"], 0, "週末 significa fim de semana."],
      ["Leia: 週末は家族と公園へ行きます。 Com quem a pessoa vai ao parque?", ["Família", "Professor", "Colegas", "Sozinha"], 0, "家族 significa família."],
      ["Por que observar palavras conhecidas ajuda na leitura?", ["Elas dão pistas sobre o sentido", "Elas substituem o texto inteiro", "Elas sempre indicam o passado", "Elas eliminam a gramática"], 0, "Palavras familiares ajudam a descobrir o assunto."]
    ]),
    2: buildQuestions(43, 2, [
      ["O que significa 図書館?", ["Biblioteca", "Hospital", "Estação", "Restaurante"], 0, "図書館 significa biblioteca."],
      ["Leia: 図書館で本を三冊借りました。 O que a pessoa pegou emprestado?", ["Três livros", "Três cadernos", "Três comidas", "Três roupas"], 0, "本 significa livro e 三冊 indica três unidades de livros."],
      ["O que significa 静か?", ["Silencioso", "Barulhento", "Quente", "Pequeno"], 0, "静か significa tranquilo ou silencioso."],
      ["Leia: 図書館は静かなので、勉強しやすいです。 Por que é fácil estudar lá?", ["Porque é silenciosa", "Porque é muito barulhenta", "Porque não tem livros", "Porque fica fechada"], 0, "静かなので explica a razão."],
      ["O que significa 借ります?", ["Pegar emprestado", "Comprar", "Vender", "Esquecer"], 0, "借ります significa pegar emprestado."],
      ["O que significa 返します?", ["Devolver", "Comprar", "Ler", "Escrever"], 0, "返します significa devolver."],
      ["Leia: 本を借りて、来週返します。 Quando a pessoa devolverá o livro?", ["Na próxima semana", "Ontem", "Hoje de manhã", "No próximo ano"], 0, "来週 significa próxima semana."],
      ["O que significa 難しい?", ["Difícil", "Fácil", "Bonito", "Novo"], 0, "難しい significa difícil."],
      ["Leia: この本は少し難しいですが、おもしろいです。 Como é o livro?", ["Um pouco difícil, mas interessante", "Fácil e chato", "Novo e caro", "Pequeno e antigo"], 0, "少し難しいですが indica que é um pouco difícil, mas interessante."],
      ["Qual atitude ajuda a entender textos maiores?", ["Usar o contexto das frases", "Ignorar todas as palavras conhecidas", "Ler somente partículas", "Desistir ao encontrar um kanji"], 0, "O contexto ajuda a interpretar palavras desconhecidas."]
    ]),
    3: buildQuestions(43, 3, [
      ["O que significa 旅行?", ["Viagem", "Trabalho", "Estudo", "Comida"], 0, "旅行 significa viagem."],
      ["Leia: 夏休みに京都へ旅行しました。 Para onde a pessoa viajou?", ["Kyoto", "Tokyo", "Osaka", "Hokkaido"], 0, "京都 é Kyoto."],
      ["O que significa 古い?", ["Antigo", "Novo", "Grande", "Rápido"], 0, "古い significa antigo."],
      ["Leia: 京都には古いお寺がたくさんあります。 O que existe em Kyoto?", ["Muitos templos antigos", "Muitas praias", "Muitas escolas novas", "Muitos aeroportos"], 0, "古いお寺 significa templos antigos."],
      ["O que significa 写真?", ["Fotografia", "Música", "Carta", "Mapa"], 0, "写真 significa fotografia."],
      ["Leia: 友達と写真を撮りました。 O que a pessoa fez?", ["Tirou fotos com um amigo", "Comprou uma câmera", "Escreveu uma carta", "Leu um livro"], 0, "写真を撮りました significa tirou fotografias."],
      ["O que significa お土産?", ["Lembrança / presente de viagem", "Passagem", "Mapa", "Refeição"], 0, "お土産 é uma lembrança ou presente trazido de uma viagem."],
      ["Leia: 家族にお土産を買いました。 Para quem a pessoa comprou uma lembrança?", ["Família", "Professor", "Médico", "Vizinho"], 0, "家族に indica a família como destinatária."],
      ["O que significa 楽しかった?", ["Foi divertido", "Foi perigoso", "Foi difícil", "Foi caro"], 0, "楽しかった é o passado de 楽しい."],
      ["Qual frase resume uma experiência de viagem?", ["京都へ行って、写真を撮りました。", "京都を飲みました。", "写真が寝ました。", "旅行を読みます。"], 0, "A frase descreve duas ações de uma viagem."]
    ]),
    4: buildQuestions(43, 4, [
      ["O que significa 健康?", ["Saúde", "Dinheiro", "Viagem", "Escola"], 0, "健康 significa saúde."],
      ["Leia: 毎日運動すると、健康にいいです。 O que é bom para a saúde?", ["Fazer exercícios diariamente", "Dormir muito tarde", "Não beber água", "Nunca sair de casa"], 0, "運動する significa fazer exercícios."],
      ["O que significa 野菜?", ["Vegetais", "Carne", "Peixe", "Doce"], 0, "野菜 significa vegetais."],
      ["Leia: 野菜をたくさん食べるようにしています。 O que a pessoa tenta fazer?", ["Comer muitos vegetais", "Evitar toda comida", "Comprar roupas", "Dormir durante o dia"], 0, "ようにしています expressa esforço ou hábito."],
      ["O que significa 十分?", ["Suficiente", "Pouco", "Antigo", "Rápido"], 0, "十分 significa suficiente."],
      ["Leia: 水を十分に飲んでください。 O que a frase recomenda?", ["Beber água suficiente", "Parar de beber água", "Comer frutas", "Dormir cedo"], 0, "十分に indica quantidade suficiente."],
      ["O que significa 疲れます?", ["Ficar cansado", "Ficar feliz", "Correr", "Aprender"], 0, "疲れます significa cansar-se."],
      ["Leia: 疲れた時は、少し休みます。 O que a pessoa faz quando está cansada?", ["Descansa um pouco", "Corre mais", "Vai trabalhar", "Come rapidamente"], 0, "休みます significa descansar."],
      ["O que significa 習慣?", ["Hábito", "Problema", "Resposta", "Pergunta"], 0, "習慣 significa hábito."],
      ["Qual é a ideia central de um texto sobre 健康?", ["Saúde e hábitos", "Viagens e turismo", "Tecnologia e jogos", "História e guerras"], 0, "健康 é a palavra que indica o tema da saúde."]
    ]),
    5: buildQuestions(43, 5, [
      ["O que significa 文化?", ["Cultura", "Natureza", "Economia", "Experiência"], 0, "文化 significa cultura."],
      ["Leia: 日本の文化について勉強しています。 Sobre o que a pessoa estuda?", ["Cultura japonesa", "Comida brasileira", "Esportes americanos", "Matemática"], 0, "について significa sobre ou a respeito de."],
      ["O que significa 祭り?", ["Festival", "Biblioteca", "Hospital", "Estação"], 0, "祭り significa festival."],
      ["Leia: 夏に町のお祭りがあります。 Quando acontece o festival?", ["No verão", "No inverno", "Na primavera", "No outono"], 0, "夏 significa verão."],
      ["O que significa 音楽?", ["Música", "Pintura", "Livro", "Filme"], 0, "音楽 significa música."],
      ["Leia: 日本の音楽を聞くのが好きです。 Do que a pessoa gosta?", ["Ouvir música japonesa", "Comer comida japonesa", "Escrever livros", "Viajar de trem"], 0, "聞く significa ouvir."],
      ["O que significa 歴史?", ["História", "Geografia", "Ciência", "Esporte"], 0, "歴史 significa história."],
      ["Leia: この町の歴史はとても長いです。 Como é a história da cidade?", ["Muito longa", "Muito curta", "Desconhecida", "Recente"], 0, "長い significa longo."],
      ["O que significa 伝統?", ["Tradição", "Tecnologia", "Problema", "Pergunta"], 0, "伝統 significa tradição."],
      ["Qual estratégia ajuda a descobrir o tema de um texto cultural?", ["Identificar palavras repetidas e o contexto", "Ignorar o título", "Traduzir somente números", "Ler apenas a última palavra"], 0, "Palavras recorrentes e contexto revelam o tema."]
    ]),
    6: buildQuestions(43, 6, [
      ["Leia: 私は毎朝早く起きます。 Qual é o hábito?", ["Acordar cedo", "Dormir cedo", "Comer à noite", "Viajar de manhã"], 0, "早く起きます significa acordar cedo."],
      ["Leia: 朝ご飯を食べてから学校へ行きます。 O que acontece primeiro?", ["Comer o café da manhã", "Ir à escola", "Voltar para casa", "Dormir"], 0, "てから indica que a primeira ação acontece antes da segunda."],
      ["Leia: 放課後、図書館で宿題をします。 Onde a pessoa faz a lição?", ["Na biblioteca", "No parque", "No restaurante", "No hospital"], 0, "図書館で indica o local da ação."],
      ["Leia: 週末は家族と買い物に行きます。 O que a pessoa faz no fim de semana?", ["Vai às compras com a família", "Estuda sozinha", "Vai à escola", "Trabalha no hospital"], 0, "買い物に行きます significa ir às compras."],
      ["Leia: 雨が降ったので、家で映画を見ました。 Por que a pessoa ficou em casa?", ["Porque choveu", "Porque estava calor", "Porque era feriado", "Porque perdeu o ônibus"], 0, "ので apresenta a razão."],
      ["Leia: 日本語は難しいですが、毎日勉強しています。 O que a pessoa faz?", ["Estuda japonês todos os dias", "Parou de estudar", "Ensina matemática", "Viaja ao Japão"], 0, "毎日勉強しています indica estudo diário."],
      ["Leia: 来年、日本へ行きたいです。 O que a pessoa deseja?", ["Ir ao Japão no próximo ano", "Voltar ontem", "Morar na escola", "Comprar um livro"], 0, "行きたい expressa desejo de ir."],
      ["Leia: 友達からプレゼントをもらいました。 O que a pessoa recebeu?", ["Um presente", "Uma carta de cobrança", "Uma passagem", "Uma refeição"], 0, "プレゼント significa presente."],
      ["Leia: この町は静かで、自然がきれいです。 Como é a cidade?", ["Silenciosa e com natureza bonita", "Barulhenta e perigosa", "Grande e industrial", "Pequena e escura"], 0, "静か e きれい descrevem a cidade positivamente."],
      ["Qual habilidade é mais importante ao ler textos longos?", ["Compreender a ideia geral e os detalhes", "Memorizar somente a primeira palavra", "Ignorar o contexto", "Traduzir tudo sem interpretar"], 0, "A leitura combina compreensão global e informações específicas."]
    ])
  },
  recovery: buildRecovery(43, [
    ["O que significa 図書館?", ["Biblioteca", "Hospital", "Restaurante", "Estação"], 0, "図書館 significa biblioteca."],
    ["O que significa 旅行?", ["Viagem", "Trabalho", "Saúde", "Cultura"], 0, "旅行 significa viagem."],
    ["O que significa 健康?", ["Saúde", "Dinheiro", "Escola", "Música"], 0, "健康 significa saúde."],
    ["Em uma leitura, por que o contexto é importante?", ["Ajuda a compreender palavras e ideias", "Apaga os kanji", "Substitui todos os verbos", "Indica sempre o passado"], 0, "O contexto ajuda a interpretar o texto como um todo."],
    ["O que significa 週末?", ["Fim de semana", "Toda manhã", "Próximo ano", "Meio-dia"], 0, "週末 significa fim de semana."]
  ])
},

44: {
  days: {
    1: buildQuestions(44, 1, [
      ["Qual deve ser o primeiro objetivo ao ouvir um diálogo?", ["Identificar o assunto geral", "Entender cada sílaba perfeitamente", "Anotar todas as partículas", "Traduzir palavra por palavra"], 0, "Primeiro procure entender o tema da conversa."],
      ["Se ouvir おはようございます, qual situação é provável?", ["Cumprimento pela manhã", "Despedida noturna", "Pedido de desculpas", "Agradecimento"], 0, "É um cumprimento formal usado pela manhã."],
      ["Se ouvir ありがとうございます, o que a pessoa está fazendo?", ["Agradecendo", "Perguntando", "Negando", "Convidando"], 0, "ありがとうございます significa muito obrigado."],
      ["O que significa すみません?", ["Com licença / desculpe", "Até amanhã", "Bom apetite", "Parabéns"], 0, "すみません pode ser usado para pedir desculpas ou chamar atenção."],
      ["O que significa はい?", ["Sim", "Não", "Talvez", "Quando"], 0, "はい é uma resposta afirmativa."],
      ["O que significa いいえ?", ["Não", "Sim", "Obrigado", "Olá"], 0, "いいえ é uma resposta negativa."],
      ["Se ouvir どこですか, qual informação está sendo pedida?", ["Lugar", "Horário", "Pessoa", "Preço"], 0, "どこ pergunta onde."],
      ["Se ouvir 何時ですか, o que a pessoa quer saber?", ["Que horas são", "Onde fica", "Quem chegou", "Quanto custa"], 0, "何時 pergunta o horário."],
      ["Qual expressão significa 'entendi'?", ["分かりました", "知りません", "行きません", "食べました"], 0, "分かりました indica compreensão."],
      ["O que fazer quando não entender uma fala?", ["Pedir para repetir", "Fingir que entendeu", "Encerrar sempre a conversa", "Ignorar a pessoa"], 0, "Pedir repetição é uma estratégia natural de comunicação."]
    ]),
    2: buildQuestions(44, 2, [
      ["O que significa もう一度?", ["Mais uma vez", "Muito rápido", "Ontem", "Nunca"], 0, "もう一度 significa mais uma vez."],
      ["Qual frase pede para repetir?", ["もう一度お願いします。", "おはようございます。", "いただきます。", "おやすみなさい。"], 0, "A frase pede educadamente que algo seja repetido."],
      ["O que significa ゆっくり?", ["Devagar", "Rapidamente", "Alto", "Longe"], 0, "ゆっくり significa devagar ou tranquilamente."],
      ["Qual frase pede para falar devagar?", ["ゆっくり話してください。", "早く食べてください。", "ここに来てください。", "水を飲んでください。"], 0, "ゆっくり話してください pede que a pessoa fale devagar."],
      ["O que significa 聞こえます?", ["Consigo ouvir / é audível", "Consigo escrever", "Quero comer", "Vou embora"], 0, "聞こえます está relacionado a conseguir ouvir."],
      ["Qual expressão significa 'não sei'?", ["分かりません", "分かりました", "知っています", "聞きました"], 0, "分かりません significa não entendo ou não sei."],
      ["Qual frase significa 'Pode repetir?'?", ["もう一度言ってください。", "もう食べました。", "明日行きます。", "本を読みます。"], 0, "言ってください é um pedido para dizer algo."],
      ["O que significa 速い?", ["Rápido", "Devagar", "Silencioso", "Antigo"], 0, "速い significa rápido."],
      ["O que significa 大きい声?", ["Voz alta", "Voz baixa", "Voz triste", "Voz distante"], 0, "大きい声 significa voz alta."],
      ["Qual é uma boa estratégia quando a fala é rápida?", ["Pedir para falar mais devagar", "Parar de ouvir", "Ignorar o assunto", "Responder aleatoriamente"], 0, "Pedir uma fala mais lenta facilita a compreensão."]
    ]),
    3: buildQuestions(44, 3, [
      ["O que significa 電車?", ["Trem", "Carro", "Avião", "Bicicleta"], 0, "電車 significa trem."],
      ["O que significa 駅?", ["Estação", "Escola", "Casa", "Loja"], 0, "駅 significa estação."],
      ["Se ouvir 次の駅, a que se refere?", ["Próxima estação", "Última semana", "Próxima escola", "Primeiro trem"], 0, "次 significa próximo ou seguinte."],
      ["O que significa 何番線?", ["Qual plataforma/linha", "Que dia", "Qual pessoa", "Quanto dinheiro"], 0, "何番線 pergunta qual plataforma ou linha."],
      ["O que significa 乗ります?", ["Embarcar / pegar transporte", "Descer", "Comprar", "Esperar"], 0, "乗ります significa embarcar ou subir em um transporte."],
      ["O que significa 降ります?", ["Descer de um transporte", "Embarcar", "Dirigir", "Comprar"], 0, "降ります pode significar descer de um veículo."],
      ["Qual frase significa 'Onde fica a estação?'?", ["駅はどこですか。", "駅は何時ですか。", "駅を食べますか。", "駅が好きでしたか。"], 0, "どこ pergunta localização."],
      ["O que significa 切符?", ["Bilhete", "Mala", "Mapa", "Relógio"], 0, "切符 significa bilhete ou passagem."],
      ["Se ouvir 片道, qual tipo de passagem é mencionado?", ["Só ida", "Ida e volta", "Passe mensal", "Bilhete infantil"], 0, "片道 significa somente ida."],
      ["Qual vocabulário é mais importante em um diálogo de estação?", ["駅、電車、切符", "猫、犬、鳥", "野菜、果物、料理", "海、山、川"], 0, "Essas palavras estão relacionadas ao transporte ferroviário."]
    ]),
    4: buildQuestions(44, 4, [
      ["O que significa 注文?", ["Pedido", "Viagem", "Estação", "Biblioteca"], 0, "注文 significa pedido, especialmente em restaurante."],
      ["O que significa メニュー?", ["Cardápio", "Conta", "Cadeira", "Cozinha"], 0, "メニュー é a palavra usada para cardápio."],
      ["Qual frase significa 'Quero água'?", ["水をください。", "水を読みます。", "水へ行きます。", "水が話します。"], 0, "ください é usado para pedir algo."],
      ["O que significa お会計?", ["Conta / pagamento", "Reserva", "Cozinha", "Entrada"], 0, "お会計 refere-se à conta ou pagamento."],
      ["O que significa いくらですか?", ["Quanto custa?", "Onde fica?", "Que horas são?", "Quem é?"], 0, "いくら pergunta o preço ou quantidade."],
      ["Qual frase significa 'Isso, por favor'?", ["これをお願いします。", "どこへ行きますか。", "何時に来ますか。", "誰と話しますか。"], 0, "これをお願いします é uma forma educada de pedir o item."],
      ["O que significa おいしい?", ["Delicioso", "Difícil", "Caríssimo", "Silencioso"], 0, "おいしい descreve algo gostoso."],
      ["O que significa 辛い?", ["Picante", "Doce", "Frio", "Pequeno"], 0, "辛い significa picante ou apimentado."],
      ["Qual expressão significa 'sem carne'?", ["肉なし", "肉入り", "肉好き", "肉料理"], 0, "なし indica ausência de algo."],
      ["Qual habilidade é importante em um diálogo de restaurante?", ["Reconhecer pedidos, preços e alimentos", "Identificar somente nomes de países", "Ignorar números", "Usar apenas cumprimentos"], 0, "O vocabulário de pedidos e preços ajuda a acompanhar a conversa."]
    ]),
    5: buildQuestions(44, 5, [
      ["O que significa 明日?", ["Amanhã", "Ontem", "Hoje", "Semana passada"], 0, "明日 significa amanhã."],
      ["O que significa 昨日?", ["Ontem", "Amanhã", "Hoje", "Próximo mês"], 0, "昨日 significa ontem."],
      ["O que significa 今?", ["Agora", "Depois", "Antes", "Nunca"], 0, "今 significa agora."],
      ["O que significa 約束?", ["Compromisso / combinado", "Comida", "Viagem", "Estação"], 0, "約束 significa compromisso ou promessa."],
      ["Qual frase significa 'Vamos nos encontrar amanhã'?", ["明日会いましょう。", "昨日会いました。", "今食べます。", "来週寝ます。"], 0, "会いましょう é uma forma de convite."],
      ["O que significa 遅れます?", ["Atrasar-se", "Chegar cedo", "Desaparecer", "Esquecer"], 0, "遅れます significa atrasar-se."],
      ["Qual frase significa 'Vou me atrasar'?", ["遅れます。", "早く来ます。", "もう帰りました。", "寝たいです。"], 0, "遅れます comunica que haverá atraso."],
      ["O que significa 待ってください?", ["Espere, por favor", "Venha amanhã", "Coma agora", "Leia isso"], 0, "待ってください é um pedido para esperar."],
      ["O que significa 楽しみです?", ["Estou ansioso / será divertido", "Estou perdido", "Estou atrasado", "Estou com fome"], 0, "楽しみです expressa expectativa positiva."],
      ["Qual resposta combina com 明日会いましょう。?", ["はい、楽しみです。", "水を飲みます。", "駅はどこですか。", "昨日でした。"], 0, "A resposta demonstra que a pessoa está animada para o encontro."]
    ]),
    6: buildQuestions(44, 6, [
      ["Em um diálogo, o que いらっしゃいませ indica?", ["Boas-vindas de um estabelecimento", "Despedida", "Pedido de desculpas", "Pergunta de horário"], 0, "É uma saudação comum em lojas e restaurantes."],
      ["O que significa 少々お待ちください?", ["Aguarde um momento, por favor", "Vá embora agora", "Compre este produto", "Fale mais alto"], 0, "É uma maneira educada de pedir que alguém espere."],
      ["O que significa こちら?", ["Este lado / aqui", "Ontem", "Amanhã", "Quanto"], 0, "こちら é uma forma educada de indicar este lado ou aqui."],
      ["O que significa あちら?", ["Aquele lado / ali", "Aqui", "Agora", "Sempre"], 0, "あちら indica um lugar ou direção mais distante."],
      ["Qual expressão significa 'Pode me ajudar?'?", ["手伝ってもらえますか。", "食べてもいいですか。", "どこへ行きますか。", "何時ですか。"], 0, "手伝ってもらえますか pede ajuda educadamente."],
      ["Qual frase significa 'Posso entrar?'?", ["入ってもいいですか。", "入ってはいけません。", "入りたいでした。", "入るからです。"], 0, "てもいいですか pede permissão."],
      ["O que significa どうしましたか?", ["O que aconteceu?", "Quanto custa?", "Onde fica?", "Que horas são?"], 0, "どうしましたか pergunta o que aconteceu."],
      ["O que significa 大丈夫です?", ["Está tudo bem / não tem problema", "Está muito caro", "Estou atrasado", "Não conheço"], 0, "大丈夫です indica que está tudo bem ou que não há problema."],
      ["Qual é a melhor estratégia para ouvir vídeos em japonês?", ["Ouvir mais de uma vez e observar o contexto", "Tentar decorar tudo imediatamente", "Ignorar imagens e situação", "Parar sempre que surgir palavra nova"], 0, "Repetição e contexto ajudam a desenvolver compreensão auditiva."],
      ["Qual habilidade a semana desenvolve?", ["Compreender diálogos e falas cotidianas", "Escrever somente kanji", "Aprender apenas números", "Memorizar nomes de animais"], 0, "O objetivo é reconhecer expressões em conversas reais."]
    ])
  },
  recovery: buildRecovery(44, [
    ["O que significa もう一度?", ["Mais uma vez", "Amanhã", "Nunca", "Rapidamente"], 0, "もう一度 significa mais uma vez."],
    ["O que significa 駅?", ["Estação", "Restaurante", "Biblioteca", "Hospital"], 0, "駅 significa estação."],
    ["O que significa いくらですか?", ["Quanto custa?", "Onde fica?", "Quem é?", "Que horas são?"], 0, "いくら pergunta o preço."],
    ["Qual frase pede para falar devagar?", ["ゆっくり話してください。", "早く来てください。", "水をください。", "本を読んでください。"], 0, "ゆっくり話してください pede uma fala mais lenta."],
    ["O que significa 大丈夫です?", ["Está tudo bem", "Estou perdido", "Está caro", "Não entendi"], 0, "大丈夫です indica que não há problema."]
  ])
},

45: {
  days: {
    1: buildQuestions(45, 1, [
      ["O que significa お疲れ様です?", ["Expressão de reconhecimento pelo esforço", "Bom dia", "Boa viagem", "Até nunca"], 0, "お疲れ様です é uma expressão cotidiana usada para reconhecer o trabalho ou esforço de alguém."],
      ["O que significa よろしくお願いします?", ["Conto com você / prazer em trabalhar com você", "Estou com fome", "Até amanhã", "Não sei"], 0, "É uma expressão usada ao iniciar uma relação ou pedir colaboração."],
      ["O que significa お久しぶりです?", ["Quanto tempo!", "Bom apetite", "Boa noite", "Com licença"], 0, "É usada ao reencontrar alguém depois de bastante tempo."],
      ["O que significa もちろん?", ["Claro / naturalmente", "Talvez", "Nunca", "Porém"], 0, "もちろん expressa concordância ou certeza."],
      ["O que significa たぶん?", ["Provavelmente", "Com certeza absoluta", "Nunca", "Ontem"], 0, "たぶん indica probabilidade."],
      ["Complete: 明日は____雨です。", ["たぶん", "昨日", "どこ", "誰"], 0, "たぶん indica que provavelmente choverá amanhã."],
      ["O que significa 本当に?", ["Realmente / de verdade", "Mais ou menos", "Nunca", "Depois"], 0, "本当に reforça que algo é verdadeiro ou surpreendente."],
      ["O que significa すごい?", ["Incrível / impressionante", "Pequeno", "Triste", "Lento"], 0, "すごい expressa admiração ou intensidade."],
      ["Qual expressão significa 'Que legal!'?", ["いいですね！", "だめですね。", "知りません。", "遅れます。"], 0, "いいですね expressa aprovação ou entusiasmo."],
      ["Qual expressão é mais natural para reagir a uma boa notícia?", ["それはよかったですね！", "水を飲みます。", "駅はどこですか。", "昨日でした。"], 0, "A expressão significa algo como 'Que bom!'."]
    ]),
    2: buildQuestions(45, 2, [
      ["O que significa ちょっと?", ["Um pouco", "Muito", "Nunca", "Sempre"], 0, "ちょっと significa um pouco e também pode suavizar uma fala."],
      ["O que significa ちょっと待って?", ["Espera um pouco", "Venha amanhã", "Vá embora", "Compre agora"], 0, "待って é o imperativo informal de esperar."],
      ["O que significa まあまあ?", ["Mais ou menos", "Excelente", "Terrível", "Nunca"], 0, "まあまあ pode indicar algo mediano."],
      ["O que significa 大体?", ["Mais ou menos / aproximadamente", "Exatamente", "Nunca", "Ontem"], 0, "大体 indica uma aproximação ou visão geral."],
      ["O que significa 全然?", ["De jeito nenhum / nada", "Sempre", "Muito", "Amanhã"], 0, "全然 aparece frequentemente com negativas para indicar nada ou de jeito nenhum."],
      ["Qual frase significa 'Não entendo nada'?", ["全然分かりません。", "とても分かります。", "少し分かりました。", "全部読みました。"], 0, "全然 com a negativa 分かりません indica que não entende nada."],
      ["O que significa なるほど?", ["Entendi / agora faz sentido", "Até amanhã", "Boa noite", "Com licença"], 0, "なるほど demonstra compreensão de uma explicação."],
      ["O que significa そうですね?", ["É verdade / pois é", "Nunca", "Não sei onde", "Estou com fome"], 0, "そうですね pode indicar concordância ou reflexão."],
      ["Qual expressão significa 'É mesmo?'?", ["そうなんですか。", "いただきます。", "おやすみなさい。", "行ってきます。"], 0, "そうなんですか expressa surpresa ou interesse."],
      ["Por que expressões como ちょっと são úteis?", ["Tornam a comunicação mais natural", "Substituem todos os verbos", "Servem apenas para contar", "Eliminam a necessidade de partículas"], 0, "Expressões cotidianas ajudam a falar de forma mais natural."]
    ]),
    3: buildQuestions(45, 3, [
      ["O que significa やっぱり?", ["Como eu esperava / afinal", "Nunca", "Talvez", "Antes"], 0, "やっぱり expressa uma conclusão ou expectativa confirmada."],
      ["O que significa せっかく?", ["Com tanto esforço / já que teve a oportunidade", "Muito rápido", "Nunca", "Por acaso"], 0, "せっかく destaca uma oportunidade ou esforço especial."],
      ["O que significa なるべく?", ["O máximo possível", "De qualquer jeito", "Nunca", "Ontem"], 0, "なるべく indica que algo deve ser feito tanto quanto possível."],
      ["Complete: ____早く来てください。", ["なるべく", "昨日", "どこ", "誰"], 0, "なるべく早く significa o mais cedo possível."],
      ["O que significa とりあえず?", ["Por enquanto / primeiro", "Para sempre", "Nunca", "Exatamente"], 0, "とりあえず indica uma ação inicial ou provisória."],
      ["O que significa 例えば?", ["Por exemplo", "Porém", "Portanto", "Finalmente"], 0, "例えば introduz um exemplo."],
      ["O que significa 実は?", ["Na verdade", "Amanhã", "Talvez", "Depois"], 0, "実は introduz uma informação que pode ser inesperada."],
      ["Qual frase significa 'Na verdade, gosto de música'?", ["実は、音楽が好きです。", "昨日、音楽でした。", "音楽を寝ます。", "音楽へ食べます。"], 0, "実は introduz uma informação verdadeira ou reveladora."],
      ["O que significa ちなみに?", ["A propósito / por sinal", "Por isso", "Apesar disso", "Antes"], 0, "ちなみに acrescenta uma informação relacionada."],
      ["Qual expressão é útil para acrescentar um detalhe?", ["ちなみに", "さようなら", "いただきます", "おやすみ"], 0, "ちなみに introduz uma observação adicional."]
    ]),
    4: buildQuestions(45, 4, [
      ["O que significa 面倒くさい?", ["Que trabalhoso / que preguiça", "Muito bonito", "Delicioso", "Muito rápido"], 0, "面倒くさい expressa que algo parece trabalhoso ou inconveniente."],
      ["O que significa 大変?", ["Difícil / trabalhoso / sério", "Pequeno", "Barato", "Silencioso"], 0, "大変 descreve uma situação difícil ou exigente."],
      ["O que significa 無理?", ["Impossível / exagerado", "Fácil", "Bonito", "Novo"], 0, "無理 indica algo impossível ou além do possível."],
      ["O que significa 頑張って?", ["Esforce-se / boa sorte", "Descanse para sempre", "Vá embora", "Não entendi"], 0, "頑張って é uma expressão de incentivo."],
      ["O que significa おかげで?", ["Graças a", "Apesar de", "Antes de", "Em vez de"], 0, "おかげで indica que algo positivo aconteceu graças a alguém ou algo."],
      ["O que significa せいで?", ["Por culpa de / devido a", "Graças a", "Por exemplo", "Depois"], 0, "せいで costuma indicar uma causa negativa."],
      ["Qual frase significa 'Graças a você, consegui'?", ["あなたのおかげで、できました。", "あなたのせいで、できました。", "あなたを飲みました。", "あなたへ読みました。"], 0, "おかげで expressa uma causa positiva."],
      ["Qual frase expressa incentivo?", ["頑張ってください。", "分かりません。", "遅れました。", "忘れました。"], 0, "頑張ってください é um incentivo educado."],
      ["O que significa 仕方がない?", ["Não tem jeito", "É muito fácil", "Está delicioso", "Está perto"], 0, "仕方がない expressa que não há alternativa."],
      ["Qual expressão demonstra que algo é inevitável?", ["仕方がない", "もちろん", "すごい", "いいですね"], 0, "仕方がない indica que não há muito o que fazer."]
    ]),
    5: buildQuestions(45, 5, [
      ["O que significa お願い?", ["Pedido / favor", "Viagem", "Comida", "Estação"], 0, "お願い significa pedido ou favor."],
      ["O que significa ちょっといいですか?", ["Tem um momento?", "Quanto custa?", "Onde fica?", "Que horas são?"], 0, "É uma forma educada de chamar alguém para pedir algo."],
      ["O que significa どういう意味ですか?", ["O que significa?", "Onde fica?", "Quem chegou?", "Quanto custa?"], 0, "A expressão pergunta o significado de algo."],
      ["O que significa どうしたらいいですか?", ["O que devo fazer?", "Onde devo morar?", "Quanto devo pagar?", "Quando devo dormir?"], 0, "A expressão pede orientação sobre o que fazer."],
      ["O que significa おすすめ?", ["Recomendação", "Problema", "Resposta", "Horário"], 0, "おすすめ significa recomendação."],
      ["Como perguntar 'O que você recomenda?'?", ["おすすめは何ですか。", "何時ですか。", "どこですか。", "誰ですか。"], 0, "A pergunta pede uma recomendação."],
      ["O que significa 気に入る?", ["Gostar / apreciar", "Esquecer", "Perder", "Atrasar"], 0, "気に入る significa gostar ou ficar satisfeito com algo."],
      ["O que significa 久しぶりに?", ["Depois de muito tempo", "Todos os dias", "Muito cedo", "Nunca mais"], 0, "久しぶりに indica que algo acontece após um longo intervalo."],
      ["Qual frase significa 'Faz tempo que não nos vemos'?", ["久しぶりですね。", "初めまして。", "おやすみなさい。", "いただきます。"], 0, "久しぶりですね é usado ao reencontrar alguém."],
      ["Qual expressão pergunta educadamente o significado de uma palavra?", ["この言葉はどういう意味ですか。", "この言葉はいくらですか。", "この言葉は何時ですか。", "この言葉はどこですか。"], 0, "どういう意味ですか pergunta o significado."]
    ]),
    6: buildQuestions(45, 6, [
      ["Qual expressão significa 'Claro!'?", ["もちろん！", "全然！", "無理！", "面倒！"], 0, "もちろん expressa concordância."],
      ["Qual expressão significa 'Provavelmente'?", ["たぶん", "絶対", "全然", "昨日"], 0, "たぶん indica probabilidade."],
      ["Qual expressão significa 'Na verdade'?", ["実は", "それから", "しかし", "だから"], 0, "実は introduz uma informação verdadeira ou inesperada."],
      ["Qual expressão significa 'A propósito'?", ["ちなみに", "そのため", "けれども", "まず"], 0, "ちなみに acrescenta uma observação."],
      ["Qual expressão significa 'Não tem jeito'?", ["仕方がない", "頑張って", "もちろん", "いいですね"], 0, "仕方がない indica que não há alternativa."],
      ["Qual expressão significa 'Que trabalhoso!'?", ["面倒くさい", "おいしい", "すごい", "楽しい"], 0, "面倒くさい expressa inconveniência ou trabalho excessivo."],
      ["Qual expressão significa 'O que devo fazer?'?", ["どうしたらいいですか。", "どういう意味ですか。", "どこですか。", "何時ですか。"], 0, "A expressão pede orientação."],
      ["Qual expressão significa 'Faz tempo!'?", ["久しぶり！", "おはよう！", "いただきます！", "おやすみ！"], 0, "久しぶり é usada após muito tempo sem se encontrar."],
      ["Qual frase soa mais natural ao pedir uma recomendação?", ["おすすめは何ですか。", "昨日は何ですか。", "水は誰ですか。", "学校はいくらですか。"], 0, "A frase pergunta qual é a recomendação."],
      ["Qual é o objetivo de aprender expressões cotidianas?", ["Compreender e participar de conversas mais naturais", "Substituir toda a gramática", "Parar de estudar kanji", "Usar apenas palavras formais"], 0, "Expressões cotidianas ajudam a entender como as pessoas realmente conversam."]
    ])
  },
  recovery: buildRecovery(45, [
    ["O que significa もちろん?", ["Claro", "Talvez", "Nunca", "Porém"], 0, "もちろん expressa certeza ou concordância."],
    ["O que significa 実は?", ["Na verdade", "Amanhã", "Depois", "Nunca"], 0, "実は introduz uma informação verdadeira ou inesperada."],
    ["O que significa 頑張って?", ["Esforce-se / boa sorte", "Vá embora", "Não entendi", "Estou cansado"], 0, "頑張って é uma expressão de incentivo."],
    ["O que significa 久しぶり?", ["Quanto tempo!", "Bom dia", "Boa noite", "Até amanhã"], 0, "久しぶり é usado ao reencontrar alguém depois de muito tempo."],
    ["Como perguntar 'O que significa?'?", ["どういう意味ですか。", "いくらですか。", "何時ですか。", "どこですか。"], 0, "どういう意味ですか pergunta o significado de algo."]
  ])
},


// ======================================================
// SEMANA 46 — INTERPRETAÇÃO
// Entender pelo contexto
// ======================================================

46: {
  days: {
    1: buildQuestions(46, 1, [
      ["田中さんは毎朝コーヒーを飲みます。今日もコーヒーを飲みました。田中さんが飲んだものは？", ["お茶", "コーヒー", "水", "牛乳"], 1, "O texto informa diretamente que Tanaka bebeu café."],
      ["雨が降っています。私は傘を持って出かけました。なぜ傘を持ちましたか？", ["暑いから", "雨が降っているから", "寒いから", "風がないから"], 1, "O contexto indica que o guarda-chuva foi levado porque estava chovendo."],
      ["昨日はとても疲れていました。だから、早く寝ました。なぜ早く寝ましたか？", ["疲れていたから", "元気だったから", "旅行したから", "勉強したから"], 0, "だから apresenta uma consequência: estava cansado, então dormiu cedo."],
      ["今日は日曜日です。学校はありません。今日は何曜日ですか？", ["月曜日", "金曜日", "日曜日", "土曜日"], 2, "A primeira frase informa que hoje é domingo."],
      ["ミカさんはパンを買いました。朝ご飯にパンを食べます。ミカさんが買ったものは？", ["パン", "ご飯", "魚", "肉"], 0, "パン significa pão."],
      ["外は寒いです。私はコートを着ました。何を着ましたか？", ["シャツ", "コート", "帽子", "靴"], 1, "コート significa casaco."],
      ["弟はまだ五歳です。毎日、母と一緒に学校へ行きます。この子は誰ですか？", ["兄", "父", "弟", "先生"], 2, "弟 significa irmão mais novo."],
      ["私は日本語を勉強しています。毎日、新しい言葉を覚えます。何を覚えますか？", ["新しい言葉", "新しい友達", "新しい学校", "新しい料理"], 0, "新しい言葉 significa palavras novas."],
      ["駅に着きました。でも、電車はもうありません。次の電車を待ちます。どこにいますか？", ["病院", "駅", "学校", "公園"], 1, "駅 significa estação."],
      ["今日は誕生日です。友達からプレゼントをもらいました。何をもらいましたか？", ["宿題", "プレゼント", "切符", "手紙"], 1, "プレゼント significa presente."]
    ]),
    2: buildQuestions(46, 2, [
      ["アキさんは朝ご飯を食べませんでした。学校でお腹がすきました。なぜお腹がすきましたか？", ["朝ご飯を食べなかったから", "たくさん食べたから", "寝たから", "水を飲んだから"], 0, "O contexto relaciona a fome ao fato de não ter tomado café da manhã."],
      ["店は午後九時に閉まります。今は午後十時です。店は開いていますか？", ["はい", "いいえ", "分かりません", "明日です"], 1, "Às dez, o estabelecimento já fechou, pois fecha às nove."],
      ["ケンさんは日本へ行きたいです。日本の文化に興味があります。ケンさんは何に興味がありますか？", ["日本の文化", "アメリカの文化", "スポーツ", "料理だけ"], 0, "日本の文化 significa cultura japonesa."],
      ["私は財布を探しています。でも、机の上にはありません。何を探していますか？", ["鍵", "本", "財布", "時計"], 2, "財布 significa carteira."],
      ["電気がついていません。部屋は暗いです。部屋はどうですか？", ["明るい", "暗い", "暑い", "広い"], 1, "暗い significa escuro."],
      ["今日は忙しいです。宿題も仕事もあります。今日はどんな日ですか？", ["暇な日", "忙しい日", "休みの日", "楽しい旅行の日"], 1, "忙しい significa ocupado."],
      ["ユキさんは毎週日曜日に祖母を訪ねます。今日も祖母の家へ行きます。誰を訪ねますか？", ["先生", "友達", "祖母", "弟"], 2, "祖母 significa avó."],
      ["この料理は辛いです。水をたくさん飲みました。料理の味は？", ["甘い", "辛い", "苦い", "酸っぱい"], 1, "辛い significa picante."],
      ["バスが遅れています。だから、学校に遅れそうです。何が遅れていますか？", ["電車", "バス", "先生", "授業"], 1, "A primeira frase informa que o ônibus está atrasado."],
      ["窓を開けました。部屋に新しい空気が入りました。何を開けましたか？", ["ドア", "箱", "窓", "本"], 2, "窓 significa janela."]
    ]),
    3: buildQuestions(46, 3, [
      ["「もう食べました」と言いました。食べることは終わっていますか？", ["はい", "いいえ", "まだ始めていません", "分かりません"], 0, "もう indica que algo já aconteceu."],
      ["「まだ宿題をしていません」と言いました。宿題は終わりましたか？", ["はい", "いいえ", "二回しました", "忘れました"], 1, "まだ～ていません indica que algo ainda não foi feito."],
      ["「少し待ってください」と言われました。何をするべきですか？", ["帰る", "待つ", "走る", "食べる"], 1, "待ってください é um pedido para esperar."],
      ["「ここに座ってもいいですか」と聞きました。何をしたいですか？", ["Sentar", "Comer", "Dormir", "Sair"], 0, "座る significa sentar."],
      ["「写真を撮らないでください」と言われました。何をしてはいけませんか？", ["写真を撮る", "話す", "歩く", "読む"], 0, "撮らないでください é um pedido para não tirar fotos."],
      ["「もう一度お願いします」と言いました。何を求めていますか？", ["Repetição", "Silêncio", "Comida", "Ajuda financeira"], 0, "もう一度 significa mais uma vez."],
      ["「ゆっくり話してください」と言いました。相手に何を求めていますか？", ["Falar devagar", "Falar alto", "走る", "帰る"], 0, "ゆっくり significa devagar."],
      ["「気をつけてください」と言われました。どんな意味ですか？", ["Tenha cuidado", "Coma agora", "Durma bem", "Venha amanhã"], 0, "気をつける significa tomar cuidado."],
      ["「お先に失礼します」と言いました。どんな場面で使いますか？", ["Sair antes dos outros", "Chegar atrasado", "Pedir comida", "Comprar roupa"], 0, "É uma expressão usada ao sair antes de outras pessoas."],
      ["「大丈夫です」と答えました。一般的にどんな意味ですか？", ["Está tudo bem", "Estou perdido", "Não entendi", "Estou com fome"], 0, "大丈夫 pode indicar que está tudo bem ou que não há problema."]
    ]),
    4: buildQuestions(46, 4, [
      ["マリアさんは本を読みながら、コーヒーを飲んでいます。何をしながらコーヒーを飲んでいますか？", ["本を読む", "テレビを見る", "料理する", "寝る"], 0, "ながら conecta duas ações simultâneas."],
      ["雨がやんだので、公園へ行きました。なぜ公園へ行きましたか？", ["雨がやんだから", "雨が降ったから", "疲れたから", "夜だから"], 0, "ので indica motivo ou causa."],
      ["私は日本語が好きですが、漢字は難しいです。何が難しいですか？", ["日本語全部", "漢字", "ひらがな", "会話"], 1, "A frase afirma diretamente que kanji é difícil."],
      ["電車に乗る前に、切符を買いました。いつ切符を買いましたか？", ["電車に乗る前", "電車を降りた後", "家に帰った後", "明日"], 0, "前に indica que a compra aconteceu antes de entrar no trem."],
      ["宿題をした後で、ゲームをしました。何を先にしましたか？", ["ゲーム", "宿題", "買い物", "料理"], 1, "後で indica que jogar aconteceu depois da lição."],
      ["この店は安いし、おいしいです。店の特徴は？", ["安くておいしい", "高くてまずい", "遠くて小さい", "新しくて暗い"], 0, "A frase apresenta duas características positivas."],
      ["今日は昨日より暖かいです。どちらの日が暖かいですか？", ["今日", "昨日", "同じ", "分からない"], 0, "より estabelece comparação; hoje está mais quente que ontem."],
      ["兄は私ほど背が高くありません。誰のほうが背が高いですか？", ["私", "兄", "同じ", "分からない"], 0, "ほど～ない indica que o irmão não é tão alto quanto o falante."],
      ["毎日練習したので、上手になりました。どうして上手になりましたか？", ["毎日練習したから", "休んだから", "忘れたから", "旅行したから"], 0, "O texto apresenta a prática diária como causa da melhora."],
      ["道が分からなかったので、駅員に聞きました。誰に聞きましたか？", ["友達", "駅員", "先生", "店員"], 1, "駅員 significa funcionário da estação."]
    ]),
    5: buildQuestions(46, 5, [
      ["A: 今日はどうでしたか。B: とても楽しかったです。Bさんの感想は？", ["Foi muito divertido", "Foi muito difícil", "Foi muito caro", "Foi muito longo"], 0, "楽しかった é o passado de divertido."],
      ["A: どうして来ませんでしたか。B: 熱があったからです。Bさんはなぜ来ませんでしたか？", ["Estava com febre", "Estava viajando", "Estava estudando", "Estava trabalhando"], 0, "熱があった significa que estava com febre."],
      ["A: どこで買いましたか。B: 駅の近くの店です。どこで買いましたか？", ["Perto da estação", "Na escola", "Em casa", "No hospital"], 0, "駅の近く significa perto da estação."],
      ["A: 何時に始まりますか。B: 三時からです。何時に始まりますか？", ["Às duas", "Às três", "Às quatro", "Às cinco"], 1, "三時 significa três horas."],
      ["A: 誰と行きますか。B: 妹と行きます。誰と行きますか？", ["Com a irmã mais nova", "Com o irmão mais velho", "Com a mãe", "Sozinho"], 0, "妹 significa irmã mais nova."],
      ["A: 何を注文しますか。B: ラーメンにします。何を注文しますか？", ["寿司", "ラーメン", "カレー", "水"], 1, "ラーメン é o prato escolhido."],
      ["A: 週末は何をしましたか。B: 家で映画を見ました。何をしましたか？", ["Viu um filme em casa", "Foi à escola", "Jogou futebol", "Comprou um livro"], 0, "映画を見ました significa assistiu a um filme."],
      ["A: 日本語はどうですか。B: 少し難しいですが、おもしろいです。日本語についてどう思いますか？", ["É difícil, mas interessante", "É fácil e chato", "É impossível", "É muito caro"], 0, "A resposta combina uma dificuldade com uma avaliação positiva."],
      ["A: もう昼ご飯を食べましたか。B: いいえ、まだです。Bさんは昼ご飯を食べましたか？", ["Sim", "Não, ainda não", "Duas vezes", "Não gosta de comida"], 1, "まだ indica que ainda não comeu."],
      ["A: この言葉はどういう意味ですか。B: 「ありがとう」という意味です。何を説明していますか？", ["Uma palavra", "Uma pessoa", "Um lugar", "Uma comida"], 0, "言葉 significa palavra."]
    ]),
    6: buildQuestions(46, 6, [
      ["昨日、私は友達と図書館へ行きました。二時間勉強してから、近くのカフェで昼ご飯を食べました。最初に行った場所は？", ["カフェ", "図書館", "学校", "病院"], 1, "O texto diz que foram primeiro à biblioteca."],
      ["昨日、私は友達と図書館へ行きました。二時間勉強してから、近くのカフェで昼ご飯を食べました。何時間勉強しましたか？", ["一時間", "二時間", "三時間", "四時間"], 1, "二時間 significa duas horas."],
      ["昨日、私は友達と図書館へ行きました。二時間勉強してから、近くのカフェで昼ご飯を食べました。勉強の後で何をしましたか？", ["家に帰った", "昼ご飯を食べた", "映画を見た", "買い物をした"], 1, "Depois de estudar, foram comer em um café."],
      ["サトシさんは犬を飼っています。毎朝、犬と公園を散歩します。サトシさんは何を飼っていますか？", ["猫", "犬", "鳥", "魚"], 1, "犬 significa cachorro."],
      ["サトシさんは犬を飼っています。毎朝、犬と公園を散歩します。いつ散歩しますか？", ["毎晩", "毎朝", "毎週", "毎月"], 1, "毎朝 significa todas as manhãs."],
      ["今日は試験があります。私は昨日、遅くまで勉強しました。でも、少し心配です。今日は何がありますか？", ["旅行", "試験", "誕生日", "休み"], 1, "試験 significa prova."],
      ["今日は試験があります。私は昨日、遅くまで勉強しました。でも、少し心配です。話し手はどんな気持ちですか？", ["少し心配", "とても怒っている", "とても眠くない", "完全に安心"], 0, "心配 significa preocupação."],
      ["駅の前で友達を待っています。約束は三時ですが、今は二時五十分です。友達を待っている場所は？", ["駅の前", "学校の中", "家の中", "店の後ろ"], 0, "駅の前 significa em frente à estação."],
      ["駅の前で友達を待っています。約束は三時ですが、今は二時五十分です。約束の時間まで何分ありますか？", ["五分", "十分", "十五分", "二十分"], 1, "De 2h50 até 3h faltam dez minutos."],
      ["明日は雨かもしれません。だから、旅行に行くかどうかまだ決めていません。旅行について何が分かりますか？", ["もう決めた", "まだ決めていない", "必ず行く", "絶対に行かない"], 1, "まだ決めていない significa que ainda não decidiu."]
    ])
  },
  recovery: buildRecovery(46, [
    ["文の意味を理解するために役立つものは？", ["前後の文脈", "文字の色だけ", "ページの番号", "文の長さだけ"], 0, "O contexto das frases ao redor ajuda a compreender o significado."],
    ["「まだ食べていません」の意味は？", ["Já comi", "Ainda não comi", "Estou comendo agora", "Não quero comer nunca"], 1, "まだ～ていません indica que a ação ainda não aconteceu."],
    ["「雨が降ったので、家にいました」家にいた理由は？", ["雨が降ったから", "暑かったから", "友達が来たから", "学校があったから"], 0, "ので apresenta a razão."],
    ["「もう終わりました」の意味は？", ["Ainda não terminou", "Já terminou", "Vai começar", "Está começando"], 1, "もう indica que algo já aconteceu ou foi concluído."],
    ["知らない言葉があっても、意味を考える方法は？", ["文脈から推測する", "すぐに読むのをやめる", "全部忘れる", "何も考えない"], 0, "É possível inferir palavras desconhecidas usando o contexto."]
  ])
},

// ======================================================
// SEMANA 47 — ESCRITA
// Pequenos textos e diário
// ======================================================

47: {
  days: {
    1: buildQuestions(47, 1, [
      ["「今日は月曜日です。学校へ行きました。」この文で説明していることは？", ["今日の曜日と行動", "明日の天気", "昨日の旅行", "好きな食べ物"], 0, "O texto informa o dia e uma ação realizada."],
      ["日記の最初に日付を書くとき、正しい表現は？", ["十一月十三日", "十三月十一日", "日曜日十三", "十一日月"], 0, "A data japonesa segue mês + dia: 十一月十三日."],
      ["「今日はとても暑かったです。」何について書いていますか？", ["天気や気温", "家族", "学校の科目", "買い物"], 0, "暑い descreve calor."],
      ["「朝七時に起きました。」何時に起きましたか？", ["六時", "七時", "八時", "九時"], 1, "七時 significa sete horas."],
      ["「友達と公園で遊びました。」誰と遊びましたか？", ["先生", "友達", "家族", "一人"], 1, "友達と significa com um amigo."],
      ["日記で昨日の出来事を書くとき、よく使う形は？", ["過去形", "未来形だけ", "命令形だけ", "疑問詞だけ"], 0, "Um diário sobre ontem normalmente usa formas do passado."],
      ["「昼ご飯を食べて、それから勉強しました。」最初にしたことは？", ["勉強", "昼ご飯を食べる", "寝る", "走る"], 1, "それから indica a sequência; primeiro comeu."],
      ["「今日は楽しかったです。」この文は何を表していますか？", ["感想", "住所", "値段", "質問"], 0, "楽しかった expressa uma avaliação ou sentimento."],
      ["「明日は友達に会うつもりです。」いつ友達に会いますか？", ["今日", "昨日", "明日", "先週"], 2, "明日 significa amanhã."],
      ["短い日記に入れるとよい情報は？", ["日付・出来事・感想", "知らない単語だけ", "数字だけ", "同じ文の繰り返し"], 0, "Data, acontecimentos e impressões tornam o diário compreensível."]
    ]),
    2: buildQuestions(47, 2, [
      ["「私はブラジルに住んでいます。」何を説明していますか？", ["住んでいる場所", "年齢", "趣味", "天気"], 0, "住んでいます significa morar."],
      ["「趣味はサッカーです。」何について書いていますか？", ["趣味", "仕事", "家族", "住所"], 0, "趣味 significa hobby."],
      ["「週末に映画を見ました。」いつ映画を見ましたか？", ["週末", "毎朝", "来年", "昨日の朝と決まっている"], 0, "週末 significa fim de semana."],
      ["「私は日本語を勉強しています。毎日少しずつ練習します。」何を練習しますか？", ["日本語", "英語だけ", "数学", "料理"], 0, "O texto fala sobre estudar e praticar japonês."],
      ["「でも」は文章の中でどんな働きをしますか？", ["反対や対比を示す", "理由だけを示す", "時間だけを示す", "場所だけを示す"], 0, "でも pode introduzir contraste: mas."],
      ["「だから」は文章の中でどんな働きをしますか？", ["結果や結論を示す", "名前を示す", "質問を示す", "場所を示す"], 0, "だから apresenta uma consequência ou conclusão."],
      ["「そして」は文章の中でどんな働きをしますか？", ["情報を追加する", "情報を否定する", "質問する", "比較する"], 0, "そして conecta informações: e então."],
      ["「私は犬が好きです。猫も好きです。」何が好きですか？", ["犬だけ", "猫だけ", "犬と猫", "どちらも嫌い"], 2, "も adiciona o gato à preferência."],
      ["「昨日は雨でした。しかし、散歩しました。」散歩しましたか？", ["はい", "いいえ", "明日します", "分かりません"], 0, "しかし indica contraste; mesmo com chuva, caminhou."],
      ["文章を読みやすくするために大切なことは？", ["文を順番につなぐ", "同じ言葉だけ使う", "句読点を全部なくす", "話題を突然変える"], 0, "Uma sequência lógica ajuda o leitor a acompanhar o texto."]
    ]),
    3: buildQuestions(47, 3, [
      ["「私は昨日、学校へ行きました。」正しい時間の表現は？", ["昨日", "明日", "来週", "毎年"], 0, "昨日 significa ontem e combina com o passado."],
      ["「明日、友達と遊びます。」この文は何についてですか？", ["未来の予定", "過去の経験", "昨日の出来事", "昔の習慣だけ"], 0, "明日 indica uma ação planejada para o futuro."],
      ["「日曜日に家で本を読みました。」どこで読みましたか？", ["学校", "家", "駅", "公園"], 1, "家で significa em casa."],
      ["「母は料理を作って、私は皿を洗いました。」誰が皿を洗いましたか？", ["母", "私", "友達", "先生"], 1, "A segunda parte informa que o falante lavou os pratos."],
      ["「今日は忙しかったので、テレビを見ませんでした。」テレビを見なかった理由は？", ["忙しかったから", "暇だったから", "旅行したから", "楽しかったから"], 0, "ので apresenta a causa."],
      ["「私は新しい本を買いました。それはとてもおもしろいです。」それは何ですか？", ["新しい本", "新しい学校", "友達", "料理"], 0, "それ retoma o livro mencionado antes."],
      ["「雨が降っていましたが、試合はありました。」試合はありましたか？", ["はい", "いいえ", "来週です", "分かりません"], 0, "が indica contraste; a partida aconteceu apesar da chuva."],
      ["「毎朝、顔を洗ってから朝ご飯を食べます。」何を先にしますか？", ["朝ご飯を食べる", "顔を洗う", "学校へ行く", "寝る"], 1, "てから indica que lavar o rosto acontece primeiro."],
      ["「今日は疲れています。早く寝たいです。」何をしたいですか？", ["早く寝る", "遅く起きる", "買い物する", "勉強を始める"], 0, "寝たい significa querer dormir."],
      ["「先週、家族と旅行しました。」いつ旅行しましたか？", ["来週", "先週", "明日", "毎日"], 1, "先週 significa semana passada."]
    ]),
    4: buildQuestions(47, 4, [
      ["短い自己紹介に入れると自然な情報は？", ["名前・住んでいる場所・趣味", "秘密のパスワード", "知らない人の住所", "関係のない数字"], 0, "Nome, local onde mora e hobbies são informações comuns em uma apresentação."],
      ["「私の町には大きい公園があります。」何がありますか？", ["大きい公園", "大きい駅だけ", "海", "学校がありません"], 0, "あります indica a existência de um parque."],
      ["「私の部屋は小さいですが、きれいです。」部屋はどうですか？", ["小さくてきれい", "大きくて汚い", "暗くて危ない", "広くて古い"], 0, "A frase apresenta duas características: pequeno e limpo."],
      ["「一番好きな食べ物は寿司です。」一番好きな食べ物は？", ["ラーメン", "寿司", "パン", "カレー"], 1, "一番好き significa o favorito."],
      ["「私の友達は親切です。いつも手伝ってくれます。」友達はどんな人ですか？", ["親切", "意地悪", "怖い", "静かすぎる"], 0, "親切 significa gentil ou prestativo."],
      ["「将来、先生になりたいです。」将来何になりたいですか？", ["先生", "医者", "学生", "店員"], 0, "なりたい expressa o desejo de se tornar professor."],
      ["「私の家族は四人です。」家族は何人ですか？", ["二人", "三人", "四人", "五人"], 2, "四人 significa quatro pessoas."],
      ["「町の近くに川があります。」町の近くに何がありますか？", ["川", "山だけ", "空港", "海"], 0, "川 significa rio."],
      ["「私の学校は家から遠いです。」学校はどこにありますか？", ["家の近く", "家から遠い", "家の中", "町の外と決まっている"], 1, "遠い significa longe."],
      ["「休みの日は音楽を聞いたり、本を読んだりします。」休みの日に何をしますか？", ["音楽を聞くことや本を読むこと", "毎日仕事をすることだけ", "学校へ行くことだけ", "何もしないこと"], 0, "たり～たり apresenta exemplos de atividades."]
    ]),
    5: buildQuestions(47, 5, [
      ["日記の文章で「その後」は何を示しますか？", ["次の出来事", "名前", "場所の大きさ", "値段"], 0, "その後 significa depois disso."],
      ["「最後に、友達と写真を撮りました。」何を示していますか？", ["最後の出来事", "最初の出来事", "昨日の天気", "理由"], 0, "最後に indica o último acontecimento."],
      ["「実は、少し緊張していました。」実はは何を表しますか？", ["Na verdade", "Por exemplo", "Amanhã", "Por isso"], 0, "実は introduz uma informação que o falante deseja revelar."],
      ["「例えば、サッカーやバスケットボールが好きです。」例えばの意味は？", ["Por exemplo", "Por isso", "Mesmo assim", "Depois"], 0, "例えば significa por exemplo."],
      ["「特に日本の映画が好きです。」何が好きですか？", ["日本の映画", "全部のスポーツ", "料理", "旅行だけ"], 0, "特に destaca algo em particular."],
      ["「とても疲れましたが、楽しかったです。」どんな気持ちを表していますか？", ["疲れたが楽しかった", "怒っていた", "何も感じなかった", "怖かっただけ"], 0, "A frase apresenta duas impressões ao mesmo tempo."],
      ["「また行きたいです。」話し手はどう思っていますか？", ["もう一度行きたい", "二度と行きたくない", "まだ行ったことがない", "行くことを忘れた"], 0, "また significa novamente."],
      ["「忘れられない一日でした。」どんな一日でしたか？", ["印象に残る一日", "普通で何もない一日", "短すぎる一日", "嫌いな一日"], 0, "忘れられない significa inesquecível."],
      ["「本当にうれしかったです。」どんな気持ちですか？", ["とてもうれしい", "とても悲しい", "とても怒っている", "とても眠い"], 0, "うれしい significa feliz ou contente."],
      ["文章の最後に感想を書く目的は？", ["自分の考えや気持ちを伝える", "日付を消す", "話題を隠す", "文字数だけ増やす"], 0, "A conclusão pode transmitir a opinião ou sentimento do autor."]
    ]),
    6: buildQuestions(47, 6, [
      ["次の文章に合うタイトルは？「毎朝六時に起きます。朝ご飯を食べて、学校へ行きます。午後は友達とサッカーをします。」", ["私の一日", "日本の歴史", "冬の旅行", "好きな料理"], 0, "O texto descreve a rotina diária."],
      ["次の文章に合うタイトルは？「先週、家族と海へ行きました。泳いだり、写真を撮ったりしました。」", ["家族との旅行", "学校の宿題", "毎日の勉強", "買い物の方法"], 0, "O texto relata um passeio com a família."],
      ["「朝ご飯を食べてから、歯を磨きます。」何を先にしますか？", ["歯を磨く", "朝ご飯を食べる", "学校へ行く", "寝る"], 1, "てから estabelece a ordem das ações."],
      ["「私は本を読むのが好きです。特に冒険の話が好きです。」どんな話が好きですか？", ["冒険の話", "怖い話だけ", "料理の話", "スポーツの話"], 0, "特に destaca histórias de aventura."],
      ["「昨日は雨でした。外で遊べなかったので、家でゲームをしました。」なぜ家でゲームをしましたか？", ["外で遊べなかったから", "天気がよかったから", "友達が来たから", "学校があったから"], 0, "O motivo é que não pôde brincar do lado de fora."],
      ["「来年、日本語の試験を受けるつもりです。」何をする予定ですか？", ["日本語の試験を受ける", "日本へ引っ越す", "学校をやめる", "旅行をキャンセルする"], 0, "つもり expressa intenção ou plano."],
      ["「今日は忙しかったです。でも、日記を書く時間がありました。」日記を書きましたか？", ["はい", "いいえ", "明日だけ", "分かりません"], 0, "A frase afirma que encontrou tempo para escrever o diário."],
      ["「友達が誕生日のプレゼントをくれました。とてもうれしかったです。」なぜうれしかったですか？", ["友達がプレゼントをくれたから", "試験があったから", "雨が降ったから", "宿題が多かったから"], 0, "O presente do amigo é a razão apresentada."],
      ["「この町は静かで、自然が多いです。」町の特徴は？", ["静かで自然が多い", "騒がしくて自然がない", "大きくて危険", "暑くて人がいない"], 0, "静か e 自然が多い são as características descritas."],
      ["日記を書くとき、最も大切なことは？", ["自分の出来事を分かりやすく伝える", "難しい漢字だけを使う", "同じ文を何度も書く", "意味のない言葉を並べる"], 0, "O objetivo é comunicar acontecimentos e ideias de maneira clara."]
    ])
  },
  recovery: buildRecovery(47, [
    ["日記によく使う時制は？", ["過去形", "命令形だけ", "疑問形だけ", "禁止形だけ"], 0, "Diários frequentemente relatam acontecimentos passados."],
    ["「その後」の意味は？", ["Depois disso", "Antes disso", "Ao mesmo tempo", "Nunca"], 0, "その後 indica uma sequência posterior."],
    ["「例えば」の意味は？", ["Por exemplo", "Por isso", "Apesar disso", "Finalmente"], 0, "例えば introduz exemplos."],
    ["「私は昨日、映画を見ました」の時間は？", ["Ontem", "Amanhã", "Hoje", "No próximo mês"], 0, "昨日 significa ontem."],
    ["文章を organizar melhor, o que ajuda?", ["順番や接続詞を使う", "全部の文を混ぜる", "句読点を消す", "同じ情報を繰り返す"], 0, "Organização e conectivos tornam o texto mais claro."]
  ])
},


  // ======================================================
  // SEMANA 48 — CONVERSAÇÃO
  // Perguntas, respostas e situações
  // ======================================================

  48: {
    days: {
      1: buildQuestions(48, 1, [
        ["A: お名前は何ですか。B: カイオです。Bさんの名前は？", ["カイオ", "タナカ", "ユキ", "サトシ"], 0, "お名前は何ですか pergunta o nome da pessoa."],
        ["A: どこから来ましたか。B: ブラジルから来ました。Bさんはどこから来ましたか？", ["日本", "ブラジル", "中国", "韓国"], 1, "ブラジルから significa do Brasil."],
        ["A: 何歳ですか。B: 十五歳です。Bさんは何歳ですか？", ["十三歳", "十四歳", "十五歳", "十六歳"], 2, "十五歳 significa quinze anos."],
        ["A: 趣味は何ですか。B: サッカーです。Bさんの趣味は？", ["料理", "サッカー", "読書", "音楽"], 1, "趣味 significa hobby."],
        ["A: 日本語を勉強していますか。B: はい、毎日勉強しています。Bさんは日本語を勉強していますか？", ["はい", "いいえ", "昨日だけ", "分かりません"], 0, "はい confirma a pergunta."],
        ["A: どこに住んでいますか。B: ブラジルに住んでいます。どこに住んでいますか？", ["ブラジル", "日本", "東京", "大阪"], 0, "住んでいます significa morar."],
        ["A: 好きな食べ物は何ですか。B: 寿司です。何が好きですか？", ["寿司", "ラーメン", "パン", "カレー"], 0, "好きな食べ物 pergunta sobre comida favorita."],
        ["A: 兄弟がいますか。B: はい、弟が一人います。弟は何人いますか？", ["一人", "二人", "三人", "いません"], 0, "一人 significa uma pessoa."],
        ["A: 何語を話しますか。B: ポルトガル語を話します。何語を話しますか？", ["日本語", "英語", "ポルトガル語", "中国語"], 2, "ポルトガル語 significa português."],
        ["A: はじめまして。B: はじめまして。よろしくお願いします。これはどんな場面ですか？", ["初めて会うとき", "別れるとき", "食事するとき", "寝るとき"], 0, "はじめまして é usado em apresentações iniciais."]
      ]),
      2: buildQuestions(48, 2, [
        ["A: 今、何時ですか。B: 午後三時です。今は何時ですか？", ["午前三時", "午後三時", "午後五時", "午前九時"], 1, "午後三時 significa três da tarde."],
        ["A: 今日は何曜日ですか。B: 金曜日です。今日は何曜日ですか？", ["月曜日", "水曜日", "金曜日", "日曜日"], 2, "金曜日 significa sexta-feira."],
        ["A: 週末は何をしますか。B: 友達と映画を見ます。週末に何をしますか？", ["映画を見る", "勉強する", "寝る", "料理する"], 0, "A resposta informa que verá um filme com amigos."],
        ["A: 昨日は何をしましたか。B: サッカーをしました。昨日何をしましたか？", ["サッカーをした", "本を読んだ", "料理した", "泳いだ"], 0, "しました é a forma passada de します."],
        ["A: 明日はどこへ行きますか。B: 図書館へ行きます。明日はどこへ行きますか？", ["学校", "図書館", "病院", "公園"], 1, "図書館 significa biblioteca."],
        ["A: どうして日本語を勉強していますか。B: 日本の文化が好きだからです。理由は？", ["日本の文化が好き", "日本語が嫌い", "仕事がない", "旅行が嫌い"], 0, "だから apresenta a razão."],
        ["A: 何時に起きますか。B: 毎朝六時に起きます。何時に起きますか？", ["五時", "六時", "七時", "八時"], 1, "六時 significa seis horas."],
        ["A: どのくらい勉強しますか。B: 毎日一時間です。毎日どのくらい勉強しますか？", ["三十分", "一時間", "二時間", "三時間"], 1, "一時間 significa uma hora."],
        ["A: どこで昼ご飯を食べますか。B: 学校で食べます。どこで食べますか？", ["家", "学校", "駅", "公園"], 1, "学校で significa na escola."],
        ["A: 今週は忙しいですか。B: はい、試験があります。忙しい理由は？", ["試験があるから", "旅行するから", "休みだから", "友達が来るから"], 0, "A prova é a razão da ocupação."]
      ]),
      3: buildQuestions(48, 3, [
        ["A: これを食べてもいいですか。B: はい、どうぞ。何が許可されていますか？", ["食べること", "帰ること", "写真を撮ること", "寝ること"], 0, "食べてもいいですか pede permissão para comer."],
        ["A: ここで写真を撮ってもいいですか。B: すみません、だめです。写真を撮れますか？", ["はい", "いいえ", "明日だけ", "分かりません"], 1, "だめです indica que não é permitido."],
        ["A: 手伝いましょうか。B: はい、お願いします。Bさんは何を求めていますか？", ["助け", "食べ物", "お金", "時間"], 0, "手伝う significa ajudar."],
        ["A: 荷物を持ちましょうか。B: ありがとうございます。何を持つことを提案していますか？", ["荷物", "本", "水", "椅子"], 0, "荷物 significa bagagem ou pacote."],
        ["A: もう一度言ってください。何を求めていますか？", ["もう一度話すこと", "帰ること", "食べること", "待つこと"], 0, "もう一度 significa mais uma vez."],
        ["A: ゆっくり話してもらえますか。何をお願いしていますか？", ["Devagar", "Mais alto", "Mais rápido", "Em inglês"], 0, "ゆっくり significa devagar."],
        ["A: ちょっと待ってください。何をしてくださいと言っていますか？", ["Esperar", "Correr", "Comprar", "Dormir"], 0, "待ってください é um pedido para esperar."],
        ["A: 窓を開けてくれませんか。何をお願いしていますか？", ["Abrir a janela", "Fechar a porta", "Ler o livro", "Acender a luz"], 0, "窓を開ける significa abrir a janela."],
        ["A: これを見せてください。何を求めていますか？", ["Mostrar algo", "Comprar algo", "Escrever algo", "Jogar algo"], 0, "見せてください significa mostre, por favor."],
        ["A: ここに座ってください。どこに座りますか？", ["ここ", "外", "学校", "駅"], 0, "ここ significa aqui."]
      ]),
      4: buildQuestions(48, 4, [
        ["A: どちらが好きですか。犬ですか、猫ですか。B: 猫のほうが好きです。何が好きですか？", ["犬", "猫", "両方嫌い", "どちらも同じ"], 1, "猫のほう significa o gato, entre as opções."],
        ["A: コーヒーとお茶、どちらにしますか。B: お茶にします。何を選びましたか？", ["コーヒー", "お茶", "水", "牛乳"], 1, "お茶にします indica a escolha pelo chá."],
        ["A: どんな音楽が好きですか。B: ロックが好きです。好きな音楽は？", ["ロック", "クラシック", "ジャズ", "ポップ"], 0, "ロック significa rock."],
        ["A: 日本料理を食べたことがありますか。B: はい、あります。食べた経験がありますか？", ["はい", "いいえ", "まだです", "分かりません"], 0, "あります confirma a experiência."],
        ["A: 富士山を見たことがありますか。B: いいえ、ありません。富士山を見た経験は？", ["あります", "ありません", "毎日見ます", "今見ています"], 1, "ありません indica ausência dessa experiência."],
        ["A: 将来、何になりたいですか。B: エンジニアになりたいです。何になりたいですか？", ["先生", "医者", "エンジニア", "学生"], 2, "エンジニア significa engenheiro."],
        ["A: いつ日本へ行くつもりですか。B: 来年行くつもりです。いつ行く予定ですか？", ["今年", "来年", "昨日", "先週"], 1, "来年 significa ano que vem."],
        ["A: 何か飲みますか。B: 水をお願いします。何を飲みますか？", ["水", "お茶", "コーヒー", "ジュース"], 0, "水をお願いします é um pedido de água."],
        ["A: もう食べましたか。B: まだです。Bさんは食べましたか？", ["Sim", "Ainda não", "Duas vezes", "Não gosta"], 1, "まだ indica que ainda não comeu."],
        ["A: どう思いますか。B: とてもいいと思います。Bさんの意見は？", ["Muito bom", "Muito ruim", "Muito caro", "Muito difícil"], 0, "いいと思います significa acho que é bom."]
      ]),
      5: buildQuestions(48, 5, [
        ["A: すみません、駅はどこですか。B: あそこです。何を探していますか？", ["駅", "学校", "病院", "銀行"], 0, "A pergunta pede a localização da estação."],
        ["A: この近くにコンビニがありますか。何を探していますか？", ["Uma loja de conveniência", "Uma escola", "Um parque", "Um hospital"], 0, "コンビニ é uma loja de conveniência."],
        ["A: 右に曲がってください。どちらへ曲がりますか？", ["右", "左", "まっすぐ", "後ろ"], 0, "右 significa direita."],
        ["A: まっすぐ行ってください。どう進みますか？", ["Em frente", "À esquerda", "À direita", "Para trás"], 0, "まっすぐ significa em linha reta."],
        ["A: 駅までどのくらいですか。B: 徒歩で五分です。Quanto tempo leva a pé?", ["五分", "十分", "十五分", "二十分"], 0, "徒歩で五分 significa cinco minutos caminhando."],
        ["A: 予約したいです。何をしたいですか？", ["Fazer uma reserva", "Cancelar uma viagem", "Comprar um livro", "Pedir informação"], 0, "予約 significa reserva."],
        ["A: いくらですか。B: 千円です。値段はいくらですか？", ["百円", "五百円", "千円", "二千円"], 2, "千円 significa mil ienes."],
        ["A: クレジットカードは使えますか。何について聞いていますか？", ["Pagamento com cartão", "Horário", "Endereço", "Comida"], 0, "クレジットカード é cartão de crédito."],
        ["A: もう少し安くなりますか。何を求めていますか？", ["Preço menor", "Preço maior", "Mais comida", "Mais tempo"], 0, "安く significa mais barato."],
        ["A: お会計をお願いします。何をしたいですか？", ["Pagar a conta", "Pedir água", "Reservar mesa", "Fazer uma pergunta"], 0, "お会計 é a conta ou pagamento."]
      ]),
      6: buildQuestions(48, 6, [
        ["A: こんにちは。今日はいい天気ですね。B: そうですね。どんな話題から会話が始まりましたか？", ["天気", "学校", "料理", "仕事"], 0, "A conversa começa comentando o tempo."],
        ["A: 昨日の映画はどうでしたか。B: おもしろかったです。映画の感想は？", ["Interessante", "Chato", "Assustador", "Caro"], 0, "おもしろかった significa interessante."],
        ["A: 週末、一緒に出かけませんか。B: いいですね。Bさんはどう答えましたか？", ["Aceitou a ideia", "Recusou", "Ficou bravo", "Não entendeu"], 0, "いいですね demonstra uma reação positiva."],
        ["A: すみません、今日はちょっと…。これは一般的に何を表しますか？", ["Uma recusa indireta", "Uma confirmação", "Uma ordem", "Uma apresentação"], 0, "Essa expressão pode ser usada para recusar educadamente."],
        ["A: お久しぶりです。どんな場面ですか？", ["Encontrar alguém depois de muito tempo", "Conhecer alguém pela primeira vez", "Pedir comida", "Despedir-se para sempre"], 0, "お久しぶりです significa quanto tempo!"],
        ["A: お疲れ様です。どんな場面でよく使いますか？", ["No ambiente de trabalho ou atividades", "Ao comprar comida", "Ao pedir direções", "Ao apresentar um animal"], 0, "É uma expressão comum de reconhecimento ou cumprimento."],
        ["A: また明日。B: はい、また明日。いつ会う予定ですか？", ["明日", "今日", "来週", "昨日"], 0, "また明日 significa até amanhã."],
        ["A: 気をつけて帰ってください。何を願っていますか？", ["Que a pessoa volte com cuidado", "Que a pessoa coma", "Que a pessoa estude", "Que a pessoa espere"], 0, "気をつけて significa com cuidado."],
        ["A: ありがとう。B: どういたしまして。Bさんは何をしていますか？", ["Respondendo a um agradecimento", "Pedindo desculpas", "Fazendo uma pergunta", "Recusando um convite"], 0, "どういたしまして é uma resposta a obrigado."],
        ["A: また会いましょう。どんな意味ですか？", ["Vamos nos encontrar novamente", "Nunca mais nos veremos", "Venha agora", "Espere aqui"], 0, "また会いましょう significa vamos nos ver novamente."]
      ])
    },
    recovery: buildRecovery(48, [
      ["「どこに住んでいますか」は何を聞いていますか？", ["住所や居住地", "年齢", "趣味", "天気"], 0, "Pergunta onde a pessoa mora."],
      ["「手伝いましょうか」は何を申し出ていますか？", ["Ajuda", "食事", "旅行", "買い物"], 0, "É uma oferta de ajuda."],
      ["「まだです」は何を意味しますか？", ["Ainda não", "Já terminou", "Com certeza", "Nunca"], 0, "まだ pode indicar que algo ainda não aconteceu."],
      ["「右に曲がってください」はどんな指示ですか？", ["Virar à direita", "Virar à esquerda", "Seguir reto", "Voltar"], 0, "右 significa direita."],
      ["会話を続けるために大切なことは？", ["相手の話を聞いて答える", "相手を無視する", "同じ質問だけ繰り返す", "突然帰る"], 0, "Conversar envolve ouvir e responder de forma adequada."]
    ])
  },

  // ======================================================
  // SEMANA 49 — CONTEÚDO REAL
  // Anime, vídeos, histórias e outros materiais
  // ======================================================

  49: {
    days: {
      1: buildQuestions(49, 1, [
        ["アニメの登場人物が「逃げて！」と言いました。何をするように言っていますか？", ["Fugir", "Esperar", "Comer", "Dormir"], 0, "逃げて é a forma te de 逃げる, fugir."],
        ["「助けて！」という言葉はどんな状況で使われますか？", ["Pedir ajuda", "Agradecer", "Apresentar-se", "Despedir-se"], 0, "助けて significa me ajude."],
        ["「待って！」と言われました。何をするべきですか？", ["Esperar", "Correr", "Comprar", "Dormir"], 0, "待って significa espere."],
        ["「信じているよ」と言いました。何を表していますか？", ["Confiança", "怒り", "空腹", "疲れ"], 0, "信じる significa acreditar ou confiar."],
        ["「絶対に負けない！」という言葉から分かる気持ちは？", ["決意", "退屈", "眠気", "悲しみだけ"], 0, "絶対に負けない expressa determinação de não perder."],
        ["「もう大丈夫だよ」と言いました。一般的な意味は？", ["Agora está tudo bem", "Estou perdido", "Não quero", "Está muito caro"], 0, "大丈夫 indica que está tudo bem ou não há problema."],
        ["「危ない！」と言われました。何を伝えていますか？", ["Perigo", "Alegria", "Comida", "約束"], 0, "危ない significa perigoso."],
        ["「本当なの？」という質問は何を expressa?", ["Dúvida ou surpresa", "Uma ordem", "Um agradecimento", "Uma despedida"], 0, "本当なの pergunta se algo é verdade."],
        ["「やった！」という expressão pode indicar?", ["Alegria ou comemoração", "Medo apenas", "Sono", "Desculpa"], 0, "やった é uma exclamação de comemoração."],
        ["「もう行かなきゃ」と言いました。何を意味しますか？", ["Preciso ir agora", "Quero ficar", "Não posso andar", "Vou dormir aqui"], 0, "行かなきゃ é uma forma informal de dizer que precisa ir."]
      ]),
      2: buildQuestions(49, 2, [
        ["「彼は毎日練習している。だから強くなった。」強くなった理由は？", ["毎日練習したから", "毎日寝たから", "何もしなかったから", "旅行したから"], 0, "だから apresenta a consequência da prática diária."],
        ["「彼女は笑っているけど、目は悲しそうだ。」何が対照的ですか？", ["笑顔と悲しそうな目", "服と靴", "朝と夜", "学校と家"], 0, "A frase apresenta contraste entre sorrir e parecer triste."],
        ["「彼は何も言わずに帰った。」どうやって帰りましたか？", ["何も言わずに", "大声で話して", "歌いながら", "走りながら"], 0, "何も言わずに significa sem dizer nada."],
        ["「彼女は少し疲れているようです。」どんな状態に見えますか？", ["少し疲れている", "とても元気", "怒っている", "眠っている"], 0, "ようです indica aparência ou impressão."],
        ["「もし時間があれば、映画を見ます。」映画を見る条件は？", ["時間があること", "雨が降ること", "友達が帰ること", "学校が始まること"], 0, "時間があれば significa se houver tempo."],
        ["「彼は強い。しかし、優しい。」彼の性格は？", ["強くて優しい", "弱くて怖い", "冷たくて怒りっぽい", "静かで悲しい"], 0, "しかし conecta duas características contrastantes."],
        ["「彼女は約束を守った。」何をしましたか？", ["約束を守った", "約束を忘れた", "約束を変えた", "約束を断った"], 0, "約束を守る significa cumprir uma promessa."],
        ["「彼は仲間を信じている。」誰を信じていますか？", ["仲間", "敵", "先生だけ", "知らない人"], 0, "仲間 significa companheiros ou aliados."],
        ["「彼はまだ帰っていない。」帰りましたか？", ["いいえ", "はい", "二回帰った", "分からない"], 0, "まだ～ていない indica que ainda não aconteceu."],
        ["「最後まであきらめなかった。」何をしませんでしたか？", ["Desistir", "Estudar", "Comer", "Dormir"], 0, "あきらめる significa desistir."]
      ]),
      3: buildQuestions(49, 3, [
        ["短い動画を見て内容を理解するとき、最初に考えるとよいことは？", ["誰が何について話しているか", "字幕の色", "動画の長さだけ", "画面の明るさ"], 0, "Identificar quem fala e o assunto ajuda a compreender o vídeo."],
        ["聞き取れない言葉があったとき、役立つ方法は？", ["前後の内容から意味を考える", "すぐに動画を閉じる", "全部を無視する", "意味を決めつける"], 0, "O contexto pode ajudar a inferir palavras desconhecidas."],
        ["同じ短い場面を何度も聞く目的は？", ["聞き取れる部分を増やす", "動画を長くする", "字幕を消すだけ", "音を小さくする"], 0, "Repetir um trecho permite perceber palavras e expressões."],
        ["字幕なしで一度聞く練習の目的は？", ["耳で理解する力を確認する", "漢字を書く", "発音を忘れる", "動画を速くする"], 0, "A primeira escuta ajuda a avaliar a compreensão auditiva."],
        ["字幕を使うとき、よい学習方法は？", ["日本語の音と文字を結びつける", "ポルトガル語だけ読む", "音声を聞かない", "内容を考えない"], 0, "Relacionar som e texto japonês é mais útil que depender apenas da tradução."],
        ["動画の中で何度も出る言葉を記録する理由は？", ["重要な語彙を覚えるため", "動画を短くするため", "話者を変えるため", "意味を隠すため"], 0, "Palavras recorrentes são úteis para ampliar vocabulário."],
        ["「この場面では誰が怒っていますか」と聞かれたら、何を確認しますか？", ["登場人物の様子や言葉", "背景の色だけ", "動画のタイトルだけ", "音楽の長さ"], 0, "Expressões e comportamento dos personagens ajudam a identificar emoções."],
        ["場面の前後を見ることが役立つ理由は？", ["状況が分かるから", "文字が大きくなるから", "音が消えるから", "話が変わらないから"], 0, "O contexto anterior e posterior esclarece o que está acontecendo."],
        ["聞いた内容を自分の言葉で説明する練習は何に役立ちますか？", ["理解度を確認する", "字幕を作るだけ", "発音を避ける", "動画を保存する"], 0, "Recontar o conteúdo permite verificar se você realmente compreendeu."],
        ["知らない言葉を全部辞書で調べるより、先に文脈を考える利点は？", ["全体の意味を推測できる", "勉強しなくてよくなる", "言葉が消える", "文法が不要になる"], 0, "Primeiro tentar inferir o sentido desenvolve autonomia na leitura e escuta."]
      ]),
      4: buildQuestions(49, 4, [
        ["物語の「主人公」は誰ですか？", ["中心となる人物", "物語の作者だけ", "背景の場所", "最後のページ"], 0, "主人公 significa protagonista."],
        ["物語の「敵」はどんな人物ですか？", ["主人公と対立する人物", "主人公の先生だけ", "語り手", "通行人"], 0, "敵 significa inimigo."],
        ["「彼は村を守るために戦った。」戦った目的は？", ["村を守るため", "村を壊すため", "旅行するため", "食事するため"], 0, "ために indica finalidade."],
        ["「その知らせを聞いて、彼は驚いた。」どんな気持ちですか？", ["驚き", "眠気", "空腹", "退屈"], 0, "驚く significa surpreender-se."],
        ["「彼女は涙を流した。」何が起きましたか？", ["Ela chorou", "Ela riu", "Ela dormiu", "Ela correu"], 0, "涙を流す é uma expressão para chorar."],
        ["「二人は長い間、友達だった。」二人の関係は？", ["長い友情", "敵同士", "初対面", "家族ではないと決まっている"], 0, "友達だった indica que eram amigos."],
        ["「その後、町に平和が戻った。」最後に町はどうなりましたか？", ["平和になった", "破壊された", "暗くなった", "なくなった"], 0, "平和が戻った significa que a paz voltou."],
        ["「彼は秘密を誰にも話さなかった。」秘密を話しましたか？", ["いいえ", "はい", "友達だけに話した", "先生に話した"], 0, "誰にも～ない significa a ninguém."],
        ["物語で「しかし」が出てきたら、何に注意しますか？", ["対比や展開の変化", "人物の年齢だけ", "数字だけ", "場所の名前だけ"], 0, "しかし costuma introduzir contraste ou mudança."],
        ["物語を理解したか確認するために最もよい方法は？", ["出来事を順番に説明する", "単語を一つだけ読む", "最後のページだけ見る", "題名だけ覚える"], 0, "Explicar os acontecimentos em ordem verifica a compreensão global."]
      ]),
      5: buildQuestions(49, 5, [
        ["歌の一部を聞いて、同じ言葉が繰り返されていることに気づきました。何を調べるとよいですか？", ["繰り返される言葉の意味", "歌手の靴", "画面の色", "動画の長さだけ"], 0, "Repetições podem revelar vocabulário importante."],
        ["歌詞を学習するとき、最初に確認するとよいことは？", ["短い部分の意味と語彙", "全部を一度に暗記する", "意味を考えない", "音声を聞かない"], 0, "Estudar trechos pequenos facilita a compreensão."],
        ["「会いたい」という表現の意味は？", ["Quero encontrar alguém", "Quero comer", "Quero dormir", "Quero correr"], 0, "会いたい expressa vontade de encontrar alguém."],
        ["「忘れない」という表現の意味は？", ["Não esquecer", "Não ouvir", "Não falar", "Não andar"], 0, "忘れない é a forma negativa de 忘れる."],
        ["「夢をかなえる」という表現は何を意味しますか？", ["Realizar um sonho", "Esquecer um sonho", "Comprar uma casa", "Dormir cedo"], 0, "夢をかなえる significa realizar um sonho."],
        ["歌の内容を理解するために、誰が何を感じているか考えることは？", ["役に立つ", "意味がない", "禁止されている", "文法と関係ない"], 0, "Identificar sentimentos ajuda a interpretar o tema."],
        ["動画のタイトルと内容を比べる目的は？", ["話題を予測し、確認する", "音を消す", "字幕を隠す", "人物を数えるだけ"], 0, "O título ajuda a prever o assunto, mas é preciso conferir no conteúdo."],
        ["聞いた内容と字幕が違うように感じたら、何をするべきですか？", ["音声をもう一度確認する", "すぐに決めつける", "学習をやめる", "意味を作る"], 0, "Reouvir ajuda a verificar o que realmente foi dito."],
        ["短い場面の要約で大切なことは？", ["重要な出来事を自分の言葉で伝える", "すべての単語をコピーする", "関係ない情報を加える", "同じ文を繰り返す"], 0, "Um resumo deve transmitir as informações centrais."],
        ["アニメや動画を学習に使うとき、最も大切な姿勢は？", ["内容を聞き、読み、考える", "ポルトガル語字幕だけ読む", "何も理解せず再生する", "音声を切る"], 0, "O objetivo é compreender ativamente, não apenas assistir."]
      ]),
      6: buildQuestions(49, 6, [
        ["「少年は森に入りました。そこには大きな城がありました。」森の中に何がありましたか？", ["大きな城", "小さな学校", "駅", "海"], 0, "O texto informa que havia um grande castelo na floresta."],
        ["「少年は森に入りました。そこには大きな城がありました。」誰が森に入りましたか？", ["少年", "先生", "王様", "友達"], 0, "少年 significa menino."],
        ["「城の門は閉まっていました。しかし、窓は開いていました。」何が開いていましたか？", ["窓", "門", "ドア", "本"], 0, "窓 significa janela."],
        ["「彼は窓から中に入りました。」どうやって入りましたか？", ["窓から", "門から", "地下から", "屋根から"], 0, "窓から significa pela janela."],
        ["「中には誰もいませんでした。」中に人はいましたか？", ["いいえ", "はい", "一人だけ", "たくさん"], 0, "誰も～ない significa ninguém."],
        ["「突然、後ろから声が聞こえました。」何が聞こえましたか？", ["声", "音楽", "雨", "車"], 0, "声 significa voz."],
        ["「彼は驚いて振り返りました。」どんな気持ちでしたか？", ["驚いた", "眠かった", "嬉しかった", "退屈だった"], 0, "驚いて significa surpreso."],
        ["「そこには小さな猫がいました。」何がいましたか？", ["猫", "犬", "鳥", "馬"], 0, "猫 significa gato."],
        ["「猫は彼の足元に座りました。」猫はどこに座りましたか？", ["足元", "窓の上", "門の外", "屋根"], 0, "足元 significa perto dos pés."],
        ["この短い物語の中心となる出来事は？", ["少年が森の城で猫を見つけた", "少年が学校へ行った", "猫が海で泳いだ", "王様が町を出た"], 0, "Essa alternativa resume os acontecimentos principais."]
      ])
    },
    recovery: buildRecovery(49, [
      ["「逃げて！」の意味は？", ["Fuja", "Espere", "Coma", "Durma"], 0, "逃げる significa fugir."],
      ["「しかし」は何を表しますか？", ["Contraste", "Tempo", "Quantidade", "Localização"], 0, "しかし indica contraste."],
      ["知らない言葉を理解するために役立つものは？", ["文脈", "文字の色", "動画の長さ", "画面の大きさ"], 0, "O contexto ajuda a inferir significados."],
      ["動画を学習に使うとき、よい方法は？", ["短い場面を聞いて内容を説明する", "字幕だけ読む", "音を消す", "何も考えず見る"], 0, "A compreensão ativa é o objetivo."],
      ["「主人公」は何ですか？", ["中心となる人物", "敵だけ", "場所", "物語の題名"], 0, "主人公 significa protagonista."]
    ])
  },

  // ======================================================
  // SEMANA 50 — IMERSÃO
  // Leitura + escuta + escrita + vocabulário
  // ======================================================

  50: {
    days: {
      1: buildQuestions(50, 1, [
        ["「毎朝、窓を開けて新しい空気を入れます。」毎朝何をしますか？", ["窓を開ける", "窓を閉める", "料理する", "掃除する"], 0, "窓を開ける significa abrir a janela."],
        ["「仕事の後で、駅の近くの店に寄りました。」いつ店に寄りましたか？", ["仕事の後", "仕事の前", "朝ご飯の前", "来週"], 0, "後で indica que foi depois do trabalho."],
        ["「今日は忙しいので、昼ご飯を簡単に食べました。」なぜ簡単に食べましたか？", ["忙しかったから", "暇だったから", "旅行したから", "料理が嫌いだから"], 0, "ので apresenta a razão."],
        ["「私は毎日、日本語の本を少しずつ読んでいます。」何を読んでいますか？", ["日本語の本", "英語の新聞", "漫画だけ", "手紙"], 0, "日本語の本 significa livro em japonês."],
        ["「昨日買った服はとても便利です。」どんな服ですか？", ["昨日買った服", "明日買う服", "友達の服", "古い制服"], 0, "A frase descreve a roupa comprada ontem."],
        ["「電車が来るまで、ここで待ちます。」いつまで待ちますか？", ["電車が来るまで", "明日まで", "一週間", "昼ご飯まで"], 0, "まで indica o limite da espera."],
        ["「彼は日本語を勉強しながら、音楽を聞きます。」同時に何をしますか？", ["勉強と音楽を聞くこと", "寝ることと食べること", "走ることと泳ぐこと", "料理と掃除"], 0, "ながら conecta duas ações simultâneas."],
        ["「雨が降りそうなので、傘を持って行きます。」何を持って行きますか？", ["傘", "本", "水", "財布だけ"], 0, "傘 significa guarda-chuva."],
        ["「この道をまっすぐ進むと、右に銀行があります。」銀行はどこですか？", ["右", "左", "後ろ", "地下"], 0, "右に significa à direita."],
        ["「最近、少しずつ漢字が読めるようになりました。」何ができるようになりましたか？", ["漢字を読むこと", "漢字を忘れること", "英語を話すこと", "料理すること"], 0, "読めるようになった indica desenvolvimento da capacidade de ler."]
      ]),
      2: buildQuestions(50, 2, [
        ["「彼女は毎朝、鳥の声を聞きながら散歩します。」何を聞きながら歩きますか？", ["鳥の声", "車の音", "音楽", "人の話"], 0, "鳥の声 significa som dos pássaros."],
        ["「今日は風が強いので、外で遊びません。」なぜ外で遊びませんか？", ["風が強いから", "暑いから", "雪がないから", "暇だから"], 0, "O vento forte é o motivo apresentado."],
        ["「駅に着いたとき、友達はもう待っていました。」友達はいつ待っていましたか？", ["駅に着いたとき", "昨日", "来週", "家に帰った後"], 0, "着いたとき indica o momento em que chegou."],
        ["「この店は安いだけでなく、料理もおいしいです。」店の特徴は？", ["安くて料理もおいしい", "高くてまずい", "遠くて暗い", "小さくて危ない"], 0, "だけでなく adiciona outra característica."],
        ["「電車の音が聞こえます。」何が聞こえますか？", ["電車の音", "鳥の声", "雨の音", "音楽"], 0, "聞こえる significa ser audível."],
        ["「雨が降ってきました。」何が始まりましたか？", ["雨が降ること", "雪が止むこと", "風が止むこと", "晴れること"], 0, "降ってきました indica que começou a chover."],
        ["「彼は疲れているのに、勉強を続けました。」彼はどうしましたか？", ["疲れていても勉強した", "すぐ寝た", "勉強をやめた", "遊びに行った"], 0, "のに indica contraste com a expectativa."],
        ["「この説明を聞けば、使い方が分かります。」何を聞けば分かりますか？", ["説明", "音楽", "ニュース", "歌"], 0, "説明 significa explicação."],
        ["「彼女は日本語で自分の考えを説明しました。」何を説明しましたか？", ["自分の考え", "友達の住所", "天気", "値段"], 0, "自分の考え significa suas próprias ideias."],
        ["「毎日聞いているので、少しずつ分かるようになりました。」何をすると理解が進みましたか？", ["毎日聞くこと", "毎日休むこと", "一度だけ読むこと", "何もしないこと"], 0, "A prática diária de escuta ajudou na compreensão."]
      ]),
      3: buildQuestions(50, 3, [
        ["「今日は何も予定がありません。家でゆっくりします。」今日はどんな予定ですか？", ["予定がない", "旅行する", "学校へ行く", "仕事をする"], 0, "何も予定がありません significa não ter planos."],
        ["「朝ご飯を食べ終わってから、学校へ行きました。」何を先に終えましたか？", ["朝ご飯", "学校", "宿題", "仕事"], 0, "食べ終わる significa terminar de comer."],
        ["「この本は難しいですが、読む価値があります。」本についてどう思っていますか？", ["難しいが読む価値がある", "簡単でつまらない", "読む必要がない", "短すぎる"], 0, "価値がある significa ter valor ou valer a pena."],
        ["「私は日本語をもっと自然に話せるようになりたいです。」何ができるようになりたいですか？", ["自然に話すこと", "漢字を忘れること", "日本語をやめること", "速く走ること"], 0, "自然に話す significa falar naturalmente."],
        ["「分からないところをノートに書いて、後で調べます。」何をノートに書きますか？", ["分からないところ", "全部の答えだけ", "友達の名前", "天気"], 0, "O texto descreve registrar dúvidas para pesquisar depois."],
        ["「昨日の復習をしてから、新しい文法を勉強しました。」何を先にしましたか？", ["復習", "新しい文法", "試験", "旅行"], 0, "復習をしてから indica que revisou primeiro."],
        ["「この言葉は文の中で使うと、意味が分かりやすくなります。」何をすると理解しやすいですか？", ["文の中で使う", "単語だけ見る", "何度も書かない", "意味を考えない"], 0, "Usar uma palavra em frases ajuda a entender seu uso."],
        ["「聞き取れなかった部分をもう一度聞きました。」何をしましたか？", ["もう一度聞いた", "すぐに忘れた", "動画を消した", "別の本を読んだ"], 0, "もう一度聞く significa escutar novamente."],
        ["「毎日少しずつ続けることが大切です。」何が大切ですか？", ["毎日続けること", "一日だけ勉強すること", "全部を急ぐこと", "何もしないこと"], 0, "続ける significa continuar."],
        ["「新しい表現を使って、自分の文章を作りました。」何を作りましたか？", ["自分の文章", "友達の動画", "新しい店", "試験の答えだけ"], 0, "文章 significa texto."]
      ]),
      4: buildQuestions(50, 4, [
        ["「彼は日本に住んでいたことがあります。」どんな経験がありますか？", ["日本に住んだ経験", "日本で働いた経験だけ", "日本へ行ったことがない", "日本語を教えた経験"], 0, "住んでいたことがある indica experiência de ter morado."],
        ["「この町には古い建物がたくさん残っています。」町には何がありますか？", ["古い建物", "新しい空港だけ", "海", "大きな森だけ"], 0, "古い建物 significa construções antigas."],
        ["「彼女は話を聞いて、すぐに答えました。」何をしてから答えましたか？", ["話を聞いた", "帰った", "寝た", "食べた"], 0, "聞いてから答えた sequência de ações."],
        ["「この道は夜になると暗くなります。」いつ暗くなりますか？", ["夜", "朝", "昼", "春"], 0, "夜になると significa quando chega a noite."],
        ["「彼は忙しいにもかかわらず、手伝ってくれました。」彼はどうしましたか？", ["忙しくても手伝った", "忙しいので帰った", "何もしなかった", "助けを求めた"], 0, "にもかかわらず expressa apesar de."],
        ["「この問題について、もう少し考えてみます。」何をしますか？", ["Mais reflexão", "すぐに忘れる", "帰る", "買い物する"], 0, "考えてみる significa tentar pensar ou refletir."],
        ["「彼女は説明を聞いて、使い方を理解しました。」何を理解しましたか？", ["使い方", "値段", "住所", "名前"], 0, "使い方 significa modo de usar."],
        ["「日本語を勉強する目的は、会話を楽しむことです。」勉強する目的は？", ["会話を楽しむこと", "漢字を全部忘れること", "旅行をやめること", "試験を避けること"], 0, "目的 significa objetivo."],
        ["「分からない言葉があっても、文章全体を読んでみます。」何を読むことが大切ですか？", ["文章全体", "一文字だけ", "題名だけ", "最後の単語だけ"], 0, "O texto inteiro oferece contexto."],
        ["「今日は昨日より集中できました。」いつのほうが集中できましたか？", ["今日", "昨日", "同じ", "分からない"], 0, "より estabelece comparação; hoje foi melhor."]
      ]),
      5: buildQuestions(50, 5, [
        ["「朝は単語を復習し、午後は会話を練習しました。」午後に何をしましたか？", ["会話を練習した", "単語を復習した", "映画を見た", "料理した"], 0, "午後は会話の練習です."],
        ["「夜は短い文章を書いて、一日を振り返りました。」夜に何を書きましたか？", ["短い文章", "長い手紙", "試験", "買い物リストだけ"], 0, "短い文章 significa texto curto."],
        ["「聞く練習の後で、聞いた内容を日本語で説明しました。」何を説明しましたか？", ["聞いた内容", "明日の予定だけ", "友達の住所", "天気"], 0, "O conteúdo escutado foi explicado em japonês."],
        ["「今日は新しい単語を十個覚えました。」何個覚えましたか？", ["五個", "八個", "十個", "十五個"], 2, "十個 significa dez unidades."],
        ["「同じ表現を違う場面で使ってみました。」何を練習しましたか？", ["表現の使い方", "漢字の形だけ", "数字だけ", "発音を避けること"], 0, "Usar a mesma expressão em contextos diferentes ajuda a dominar seu uso."],
        ["「昨日より長い文章を読めました。」何ができましたか？", ["より長い文章を読んだ", "文章を忘れた", "本を買った", "日本語をやめた"], 0, "読めました indica que conseguiu ler."],
        ["「聞き取れない言葉があっても、話の大切な部分は分かりました。」何が分かりましたか？", ["話の大切な部分", "全部の単語", "何も分からなかった", "話者の住所"], 0, "Mesmo sem entender tudo, compreendeu a ideia principal."],
        ["「勉強したことを使って、自分の意見を書きました。」何を書きましたか？", ["自分の意見", "友達の名前", "天気予報", "店の値段"], 0, "意見 significa opinião."],
        ["「毎日、読む・聞く・書く練習をしています。」何を練習していますか？", ["Leitura, escuta e escrita", "Apenas desenho", "Apenas matemática", "Apenas corrida"], 0, "読む, 聞く e 書く são ler, ouvir e escrever."],
        ["「少し難しくても、毎日続けています。」何を続けていますか？", ["勉強", "旅行", "買い物", "料理だけ"], 0, "文脈から勉強を続けていると分かります."]
      ]),
      6: buildQuestions(50, 6, [
        ["「朝、駅まで歩きました。電車に乗ってから、本を読みました。」本を読んだのはいつですか？", ["電車に乗ってから", "駅へ歩く前", "昨日", "夜寝る前だけ"], 0, "乗ってから indica depois de entrar no trem."],
        ["「駅に着くと、友達が待っていました。誰が待っていましたか？", ["友達", "先生", "母", "店員"], 0, "友達が待っていました informa quem esperava."],
        ["「二人は近くの店で昼ご飯を食べました。その後、公園を散歩しました。」食事の後に何をしましたか？", ["公園を散歩した", "駅へ帰った", "映画を見た", "学校へ行った"], 0, "その後 indica a atividade posterior."],
        ["「公園にはたくさんの花が咲いていました。」公園には何がありましたか？", ["たくさんの花", "大きな店", "駅", "車"], 0, "花が咲く significa florescer."],
        ["「友達は写真を撮り、私は景色を見ていました。」誰が写真を撮りましたか？", ["友達", "私", "先生", "母"], 0, "A frase identifica o amigo como quem tirou as fotos."],
        ["「帰る前に、カフェでお茶を飲みました。」いつお茶を飲みましたか？", ["帰る前", "帰った後", "朝起きる前", "昨日"], 0, "前に indica antes de voltar."],
        ["「今日はとても充実した一日でした。」どんな一日でしたか？", ["充実した一日", "何もしなかった一日", "危険な一日", "退屈な一日と決まっている"], 0, "充実した significa proveitoso ou satisfatório."],
        ["「家に帰ってから、今日の出来事を日記に書きました。」何を書きましたか？", ["今日の出来事", "明日の天気だけ", "友達の秘密", "買い物の値段"], 0, "出来事 significa acontecimentos."],
        ["「新しい言葉を三つ使って文章を書きました。」何個の新しい言葉を使いましたか？", ["一つ", "二つ", "三つ", "四つ"], 2, "三つ significa três."],
        ["この一日の活動で行った学習は？", ["読書・会話・日記・語彙", "買い物だけ", "運動だけ", "映画を見るだけ"], 0, "O conjunto de atividades inclui leitura, interação, escrita e vocabulário."]
      ])
    },
    recovery: buildRecovery(50, [
      ["「少しずつ」の意味は？", ["Aos poucos", "De repente", "Nunca", "Muito rápido"], 0, "少しずつ significa gradualmente."],
      ["「聞き取れない」の意味は？", ["Não conseguir entender pelo ouvido", "Não conseguir escrever", "Não conseguir comer", "Não conseguir dormir"], 0, "聞き取る significa captar ou compreender o que se ouve."],
      ["「目的」の意味は？", ["Objetivo", "Problema", "Pessoa", "Lugar"], 0, "目的 significa objetivo."],
      ["「その後」の意味は？", ["Depois disso", "Antes disso", "Ao mesmo tempo", "Nunca"], 0, "その後 indica o que aconteceu depois."],
      ["日本語に慣れるために役立つ学習方法は？", ["読む・聞く・書く・話す", "一つの単語だけ覚える", "勉強を避ける", "翻訳だけ読む"], 0, "Combinar habilidades diferentes fortalece a aprendizagem."]
    ])
  },

  // ======================================================
  // SEMANA 51 — REVISÃO FINAL
  // Revisão geral de japonês
  // ======================================================

  51: {
    days: {
      1: buildQuestions(51, 1, [
        ["「私は学生です。」私は何ですか？", ["学生", "先生", "医者", "店員"], 0, "学生 significa estudante."],
        ["「猫がいます。」何がいますか？", ["猫", "犬", "鳥", "魚"], 0, "猫 significa gato."],
        ["「水を飲みます。」何を飲みますか？", ["水", "本", "学校", "音楽"], 0, "水を飲む significa beber água."],
        ["「学校へ行きます。」どこへ行きますか？", ["学校", "病院", "駅", "公園"], 0, "学校 significa escola."],
        ["「昨日、映画を見ました。」いつ映画を見ましたか？", ["昨日", "明日", "来週", "毎年"], 0, "昨日 significa ontem."],
        ["「毎朝、六時に起きます。」何時に起きますか？", ["五時", "六時", "七時", "八時"], 1, "六時 significa seis horas."],
        ["「日本語を勉強しています。」何を勉強していますか？", ["日本語", "英語", "数学", "歴史"], 0, "日本語 significa japonês."],
        ["「この本はおもしろいです。」本はどうですか？", ["おもしろい", "つまらない", "高い", "古い"], 0, "おもしろい significa interessante."],
        ["「友達と話しました。」誰と話しましたか？", ["友達", "先生", "母", "一人"], 0, "友達と significa com um amigo."],
        ["「明日、旅行するつもりです。」いつ旅行しますか？", ["明日", "昨日", "先週", "去年"], 0, "明日 significa amanhã."]
      ]),
      2: buildQuestions(51, 2, [
        ["「食べる」のない形は？", ["食べない", "食べた", "食べて", "食べます"], 0, "食べない é a forma negativa informal."],
        ["「行く」のた形は？", ["行った", "行かない", "行って", "行きます"], 0, "行く tem a forma passada irregular 行った."],
        ["「読む」のて形は？", ["読んで", "読みて", "読んだ", "読まない"], 0, "読む pertence ao grupo que forma んで."],
        ["「書く」の可能形は？", ["書ける", "書かない", "書いた", "書いて"], 0, "書ける significa conseguir escrever."],
        ["「行くつもりです」は何を表しますか？", ["Intenção ou plano", "Passado", "Proibição", "Experiência"], 0, "つもり expressa intenção."],
        ["「食べたいです」は何を表しますか？", ["Desejo de comer", "Proibição de comer", "Passado", "Capacidade de comer"], 0, "たい expressa vontade."],
        ["「雨が降ったら、家にいます。」家にいる条件は？", ["雨が降ること", "晴れること", "友達が来ること", "学校が休みになること"], 0, "たら introduz uma condição."],
        ["「日本へ行ったことがあります。」何を表しますか？", ["Experiência", "Proibição", "Pedido", "Comparação"], 0, "たことがある indica experiência."],
        ["「友達が本をくれました。」誰が本をくれましたか？", ["友達", "私", "先生と決まっている", "母と決まっている"], 0, "くれる indica que alguém deu algo ao falante ou ao seu grupo."],
        ["「日本語を勉強することが好きです。」何が好きですか？", ["日本語を勉強すること", "走ること", "料理すること", "寝ること"], 0, "こと transforma a ação em um conceito nominal."]
      ]),
      3: buildQuestions(51, 3, [
        ["「私は猫が好きです。」何が好きですか？", ["猫", "犬", "鳥", "魚"], 0, "猫が好き significa gostar de gatos."],
        ["「犬より猫のほうが好きです。」どちらが好きですか？", ["猫", "犬", "同じ", "どちらも嫌い"], 0, "猫のほうが indica preferência pelo gato."],
        ["「兄は私ほど背が高くありません。」誰のほうが背が高いですか？", ["私", "兄", "同じ", "分からない"], 0, "ほど～ない indica que o irmão não é tão alto quanto o falante."],
        ["「今日は昨日より寒いです。」いつのほうが寒いですか？", ["今日", "昨日", "同じ", "分からない"], 0, "より estabelece comparação."],
        ["「一番好きな季節は春です。」一番好きな季節は？", ["春", "夏", "秋", "冬"], 0, "一番好き significa o favorito."],
        ["「雨が降っているので、出かけません。」なぜ出かけませんか？", ["雨が降っているから", "晴れているから", "暇だから", "旅行中だから"], 0, "ので indica a causa."],
        ["「勉強してから、ゲームをします。」何を先にしますか？", ["勉強", "ゲーム", "寝ること", "食事"], 0, "てから indica a sequência."],
        ["「本を読みながら、音楽を聞きます。」何を同時にしますか？", ["読むことと聞くこと", "寝ることと食べること", "走ることと泳ぐこと", "料理と掃除"], 0, "ながら conecta ações simultâneas."],
        ["「静かな町に住みたいです。」どんな町に住みたいですか？", ["静かな町", "騒がしい町", "危険な町", "遠い町だけ"], 0, "静かな significa tranquilo."],
        ["「日本語が話せるようになりました。」何ができるようになりましたか？", ["日本語を話す", "日本語を忘れる", "漢字を消す", "英語を教える"], 0, "話せるようになった indica desenvolvimento da capacidade de falar."]
      ]),
      4: buildQuestions(51, 4, [
        ["「私の趣味は読書です。」趣味は何ですか？", ["読書", "料理", "旅行", "スポーツ"], 0, "読書 significa leitura."],
        ["「昨日は雨だったので、家にいました。」昨日の天気は？", ["雨", "晴れ", "雪", "風だけ"], 0, "雨だった significa que estava chovendo."],
        ["「母は料理を作ってくれました。」誰が料理を作りましたか？", ["母", "私", "友達", "先生"], 0, "母 significa mãe."],
        ["「私は友達にプレゼントをあげました。」誰にプレゼントをあげましたか？", ["友達", "母", "先生", "自分"], 0, "友達に indica a pessoa que recebeu."],
        ["「日本へ行く前に、日本語を勉強します。」何を先にしますか？", ["日本語を勉強する", "日本へ行く", "帰国する", "旅行を終える"], 0, "前に indica que estudar acontece antes da viagem."],
        ["「駅に着いたら、電話してください。」いつ電話してくださいと言っていますか？", ["駅に着いたら", "家を出る前", "昨日", "来年"], 0, "着いたら significa quando chegar."],
        ["「もし暇なら、一緒に映画を見ませんか。」何を提案していますか？", ["Ver um filme juntos", "Estudar sozinho", "Viajar amanhã", "Comprar comida"], 0, "A frase faz um convite condicionado a estar livre."],
        ["「彼は歌うことができます。」何ができますか？", ["歌う", "泳ぐ", "料理する", "走る"], 0, "ことができる expressa capacidade."],
        ["「この町は便利で、安全です。」町はどうですか？", ["便利で安全", "危険で不便", "古くて暗い", "遠くて静か"], 0, "A frase descreve duas características positivas."],
        ["「分からない言葉を辞書で調べました。」何を使いましたか？", ["辞書", "地図", "時計", "写真"], 0, "辞書 significa dicionário."]
      ]),
      5: buildQuestions(51, 5, [
        ["「朝、駅へ行きました。それから電車に乗りました。」最初にしたことは？", ["駅へ行った", "電車に乗った", "家に帰った", "昼ご飯を食べた"], 0, "それから indica que entrar no trem veio depois."],
        ["「彼女は忙しいのに、手伝ってくれました。」彼女はどうしましたか？", ["忙しくても手伝った", "帰った", "何もしなかった", "怒った"], 0, "のに indica contraste."],
        ["「この本は難しいけれど、おもしろいです。」本についてどう思っていますか？", ["難しいが面白い", "簡単でつまらない", "高くて古い", "短くて退屈"], 0, "けれど indica contraste."],
        ["「彼は来ると言いましたが、まだ来ていません。」彼は来ましたか？", ["まだ来ていない", "もう来た", "昨日帰った", "毎日来る"], 0, "まだ～ていません indica que ainda não veio."],
        ["「日本語を勉強すれば、もっと分かるようになります。」何をすれば理解が進みますか？", ["日本語を勉強する", "日本語を忘れる", "勉強をやめる", "何もしない"], 0, "すれば apresenta uma condição."],
        ["「彼女は私に新しい本をくれました。」誰が本をくれましたか？", ["彼女", "私", "先生", "母"], 0, "彼女が本を与えた側です."],
        ["「友達から手紙をもらいました。」何をもらいましたか？", ["手紙", "本", "時計", "写真"], 0, "手紙 significa carta."],
        ["「毎日練習したおかげで、上手になりました。」上手になった理由は？", ["毎日練習したこと", "休んだこと", "忘れたこと", "旅行したこと"], 0, "おかげで indica uma causa positiva."],
        ["「彼は遅れたせいで、電車に乗れませんでした。」電車に乗れなかった理由は？", ["遅れたこと", "早く来たこと", "切符を買ったこと", "駅が近いこと"], 0, "せいで indica uma causa negativa."],
        ["「なるべく日本語で話すようにしています。」何を心がけていますか？", ["できるだけ日本語で話す", "日本語を避ける", "英語だけ話す", "何も話さない"], 0, "なるべく significa tanto quanto possível."]
      ]),
      6: buildQuestions(51, 6, [
        ["「私は毎朝六時に起きます。朝ご飯を食べてから学校へ行きます。」何時に起きますか？", ["五時", "六時", "七時", "八時"], 1, "六時に起きます significa acordar às seis."],
        ["同じ文章で、学校へ行く前に何をしますか？", ["朝ご飯を食べる", "寝る", "買い物する", "映画を見る"], 0, "O texto diz que toma café antes de ir à escola."],
        ["「昨日は友達と図書館へ行きました。二時間勉強してから、カフェに行きました。」最初に行った場所は？", ["図書館", "カフェ", "公園", "学校"], 0, "A biblioteca aparece primeiro."],
        ["同じ文章で、何時間勉強しましたか？", ["一時間", "二時間", "三時間", "四時間"], 1, "二時間 significa duas horas."],
        ["「日本語は難しいですが、毎日勉強するのが楽しいです。」日本語についてどう思っていますか？", ["難しいが楽しい", "簡単でつまらない", "嫌い", "興味がない"], 0, "A frase apresenta dificuldade e satisfação."],
        ["「来年、日本へ旅行したいです。日本の文化を見てみたいです。」何をしたいですか？", ["日本へ旅行する", "ブラジルへ帰る", "学校をやめる", "仕事を探す"], 0, "旅行したい expressa desejo de viajar."],
        ["「分からない言葉はノートに書いて、後で調べます。」何をしますか？", ["言葉を記録して調べる", "言葉を忘れる", "本を捨てる", "勉強をやめる"], 0, "O texto descreve uma estratégia de estudo."],
        ["「友達が日本語を教えてくれました。」誰が教えましたか？", ["友達", "私", "先生と決まっている", "母と決まっている"], 0, "友達が教えてくれた significa que o amigo ensinou."],
        ["「昨日より今日のほうが漢字をよく読めます。」いつ読めますか？", ["今日", "昨日", "同じ", "分からない"], 0, "今日のほうが indica que hoje está melhor."],
        ["日本語の学習を続けるために大切なことは？", ["毎日少しずつ練習する", "一日だけ勉強する", "間違いを恐れて何もしない", "復習を避ける"], 0, "A prática constante ajuda a consolidar o aprendizado."]
      ])
    },
    recovery: buildRecovery(51, [
      ["「食べない」は何形ですか？", ["ない形", "た形", "て形", "可能形"], 0, "食べない é a forma negativa informal."],
      ["「行ったことがあります」は何を表しますか？", ["Experiência", "Proibição", "Pedido", "Comparação"], 0, "たことがある indica experiência."],
      ["「猫のほうが好きです」は何を expressa?", ["Preferência", "Obrigação", "Proibição", "Passado"], 0, "ほうが ajuda a indicar preferência em uma comparação."],
      ["「雨が降ったら、帰ります」は何を表しますか？", ["Condição", "Experiência", "Desejo", "Pedido"], 0, "たら pode introduzir uma condição."],
      ["日本語を総合的に復習するために必要なことは？", ["文法・語彙・読解・会話を練習する", "単語だけ覚える", "会話を避ける", "読解をしない"], 0, "A revisão geral deve integrar várias habilidades."]
    ])
  },

  // ======================================================
  // SEMANA 52 — TESTE FINAL
  // Texto novo, escuta, diálogo e escrita
  // ======================================================

  52: {
    days: {
      1: buildQuestions(52, 1, [
        ["次の文章を読んでください。「ミナさんは去年、日本語の勉強を始めました。最初はひらがなを読むことも難しかったですが、毎日練習しました。今では簡単な本を読めます。」ミナさんはいつ勉強を始めましたか？", ["去年", "昨日", "来年", "先週"], 0, "去年 significa ano passado."],
        ["同じ文章で、最初に難しかったことは？", ["ひらがなを読むこと", "料理すること", "旅行すること", "友達を作ること"], 0, "O texto informa que até ler hiragana era difícil no início."],
        ["同じ文章で、ミナさんはどのように練習しましたか？", ["毎日", "毎月", "一度だけ", "練習しなかった"], 0, "毎日 significa todos os dias."],
        ["同じ文章で、今できることは？", ["簡単な本を読む", "難しい小説を書く", "日本語を教える", "何も読めない"], 0, "今では簡単な本を読めます indica que agora consegue ler livros simples."],
        ["次の文章を読んでください。「土曜日、ケンさんは友達と山へ行きました。朝早く出発し、昼ごろ山の上に着きました。景色はとても美しかったです。」どこへ行きましたか？", ["山", "海", "学校", "図書館"], 0, "山 significa montanha."],
        ["同じ文章で、誰と行きましたか？", ["友達", "家族", "先生", "一人"], 0, "友達と significa com um amigo."],
        ["同じ文章で、何時ごろ山の上に着きましたか？", ["朝早く", "昼ごろ", "夜", "夕方遅く"], 1, "昼ごろ significa por volta do meio-dia."],
        ["同じ文章で、景色はどうでしたか？", ["美しかった", "怖かった", "汚かった", "暗かった"], 0, "美しかった significa bonito."],
        ["次の文章を読んでください。「帰る途中、雨が降り始めました。二人は近くの店で雨が止むのを待ちました。」何が始まりましたか？", ["雨", "雪", "風", "祭り"], 0, "雨が降り始めた significa que começou a chover."],
        ["同じ文章で、二人はどこで待ちましたか？", ["近くの店", "駅", "学校", "山の上"], 0, "近くの店 significa loja próxima."]
      ]),
      2: buildQuestions(52, 2, [
        ["次の文章を読んでください。「私は最近、毎朝日本語のニュースを聞いています。最初はほとんど分かりませんでしたが、よく出る言葉をノートに書くようにしました。今は話の大切な部分が分かります。」最近何を聞いていますか？", ["日本語のニュース", "英語の歌", "映画", "ラジオの音楽だけ"], 0, "日本語のニュース significa notícias em japonês."],
        ["最初はどうでしたか？", ["ほとんど分からなかった", "全部分かった", "簡単だった", "聞かなかった"], 0, "ほとんど分かりませんでした indica que quase não entendia."],
        ["分からない言葉に対して何をしましたか？", ["ノートに書いた", "全部忘れた", "勉強をやめた", "友達に売った"], 0, "O texto diz que anotava palavras frequentes."],
        ["今は何が分かりますか？", ["話の大切な部分", "全部の言葉", "何も分からない", "ニュースの値段"], 0, "O texto afirma que agora compreende as partes importantes."],
        ["次の文章を読んでください。「ユウタさんは料理が好きです。先週、初めてカレーを作りました。少し辛すぎましたが、家族はおいしいと言ってくれました。」何が好きですか？", ["料理", "サッカー", "読書", "旅行"], 0, "料理 significa cozinhar ou culinária."],
        ["いつカレーを作りましたか？", ["先週", "去年", "明日", "毎朝"], 0, "先週 significa semana passada."],
        ["カレーはどんな味でしたか？", ["少し辛すぎた", "甘すぎた", "味がなかった", "冷たかった"], 0, "辛すぎた significa picante demais."],
        ["家族は何と言いましたか？", ["おいしい", "まずい", "高い", "難しい"], 0, "A família disse que estava gostoso."],
        ["「初めて」の意味は？", ["Pela primeira vez", "Mais uma vez", "Todos os dias", "Nunca"], 0, "初めて significa pela primeira vez."],
        ["「言ってくれました」の「くれました」は何を表しますか？", ["Alguém fez algo favorável ao falante", "Uma ordem", "Uma proibição", "Uma comparação"], 0, "くれる indica uma ação dada em benefício do falante ou de seu grupo."]
      ]),
      3: buildQuestions(52, 3, [
        ["A: 週末、何をするつもりですか。B: 友達と新しい映画を見るつもりです。何をする予定ですか？", ["映画を見る", "山へ行く", "勉強する", "買い物する"], 0, "つもり expressa plano ou intenção."],
        ["A: どんな映画ですか。B: 日本のアニメ映画です。どんな映画ですか？", ["日本のアニメ映画", "外国のニュース", "ドキュメンタリー", "スポーツ映画"], 0, "日本のアニメ映画 significa filme de animação japonês."],
        ["A: 何時に会いますか。B: 午後二時に駅で会いましょう。何時に会いますか？", ["午後二時", "午前三時", "午後五時", "午前七時"], 0, "午後二時 significa duas da tarde."],
        ["A: 駅までどうやって行きますか。B: バスで行きます。どうやって行きますか？", ["バス", "電車", "自転車", "歩いて"], 0, "バスで significa de ônibus."],
        ["A: チケットは買いましたか。B: いいえ、まだです。チケットを買いましたか？", ["まだ買っていない", "もう買った", "二枚買った", "買う必要がない"], 0, "まだです indica que ainda não comprou."],
        ["A: じゃあ、私が買いましょうか。B: お願いします。Bさんは何を頼みましたか？", ["チケットを買うこと", "映画を選ぶこと", "バスを運転すること", "駅へ行くこと"], 0, "A pessoa aceitou a oferta de comprar os ingressos."],
        ["A: 映画の後で何か食べませんか。B: いいですね。何を提案していますか？", ["Comer depois do filme", "Estudar antes do filme", "Voltar para casa agora", "Comprar roupas"], 0, "映画の後で indica depois do filme."],
        ["A: 何が食べたいですか。B: ラーメンが食べたいです。何が食べたいですか？", ["ラーメン", "寿司", "パン", "カレー"], 0, "食べたい expressa desejo de comer."],
        ["A: いいですね。楽しみです。どんな気持ちですか？", ["期待している", "怒っている", "悲しんでいる", "眠っている"], 0, "楽しみです expressa expectativa positiva."],
        ["A: では、土曜日に会いましょう。いつ会いますか？", ["土曜日", "日曜日", "月曜日", "金曜日"], 0, "土曜日 significa sábado."]
      ]),
      4: buildQuestions(52, 4, [
        ["次の文章を読んでください。「町の図書館は先月、新しい建物に移りました。前の建物より広くなり、勉強する部屋も増えました。毎日、多くの学生が利用しています。」図書館はいつ移りましたか？", ["先月", "昨日", "来年", "十年前"], 0, "先月 significa mês passado."],
        ["新しい建物はどうなりましたか？", ["前より広くなった", "前より小さくなった", "なくなった", "遠くなったと決まっている"], 0, "広くなった significa ficou mais amplo."],
        ["何が増えましたか？", ["勉強する部屋", "店", "駅", "駐車場だけ"], 0, "O texto diz que aumentaram as salas de estudo."],
        ["誰が図書館を利用していますか？", ["多くの学生", "観光客だけ", "先生だけ", "子供だけ"], 0, "多くの学生 significa muitos estudantes."],
        ["次の文章を読んでください。「ナオさんは健康のために、毎晩三十分歩いています。雨の日は家でストレッチをします。無理をせず、長く続けることを大切にしています。」何のために歩いていますか？", ["健康のため", "試験のため", "旅行のため", "仕事のため"], 0, "健康のために significa pela saúde."],
        ["毎晩どのくらい歩きますか？", ["三十分", "一時間", "二時間", "十分"], 0, "三十分 significa trinta minutos."],
        ["雨の日は何をしますか？", ["家でストレッチ", "外で走る", "山へ行く", "何もしない"], 0, "O texto informa que faz alongamento em casa."],
        ["ナオさんが大切にしていることは？", ["無理せず長く続けること", "一日だけ頑張ること", "毎日休まないこと", "すぐに結果を出すこと"], 0, "A frase valoriza a continuidade sem exageros."],
        ["「無理をせず」の意味に近いものは？", ["無理をしないで", "急いで", "怒って", "忘れて"], 0, "無理をせず significa sem se forçar além do necessário."],
        ["二つの文章に共通する話題は？", ["日常生活の変化や習慣", "日本の歴史", "宇宙旅行", "料理の作り方"], 0, "Os dois textos falam de situações e hábitos cotidianos."]
      ]),
      5: buildQuestions(52, 5, [
        ["次の場面を読んでください。「店員: いらっしゃいませ。客: このかばんを見せてください。」客は何を求めていますか？", ["かばんを見せてもらう", "水を飲む", "店を閉める", "道を聞く"], 0, "見せてください é um pedido para mostrar algo."],
        ["店員: 「こちらでよろしいですか。」この質問は何を確認していますか？", ["Esta opção está boa?", "何時ですか?", "どこですか?", "誰ですか?"], 0, "よろしいですか confirma se está adequado."],
        ["客: 「もう少し大きいものはありますか。」何を探していますか？", ["Maior", "Menor", "Mais barato", "Mais antigo"], 0, "大きいもの significa algo maior."],
        ["店員: 「はい、こちらはいかがですか。」店員は何をしていますか？", ["別の商品を提案している", "店を閉めている", "質問を無視している", "値段を隠している"], 0, "こちらはいかがですか apresenta outra opção."],
        ["客: 「これにします。」客は何をしましたか？", ["Escolheu este", "Recusou tudo", "Foi embora", "Pediu desconto"], 0, "これにします indica escolha."],
        ["店員: 「お支払いは現金ですか、カードですか。」何について聞いていますか？", ["Pagamento", "Endereço", "Tamanho", "Horário"], 0, "お支払い significa pagamento."],
        ["客: 「カードでお願いします。」どうやって払いますか？", ["カード", "現金", "銀行振込", "まだ決めていない"], 0, "カードで significa com cartão."],
        ["店員: 「ありがとうございます。またお越しください。」何を表していますか？", ["Agradecimento e despedida", "Pedido de ajuda", "Reclamação", "Pergunta de preço"], 0, "É uma despedida educada de um estabelecimento."],
        ["「これにします」と「これをください」の共通点は？", ["Uma escolha ou pedido", "Uma recusa", "Uma desculpa", "Uma pergunta sobre horário"], 0, "As duas expressões podem ser usadas ao escolher um item."],
        ["この会話はどこで行われていますか？", ["店", "学校", "病院", "駅"], 0, "店員 e 客 indicam uma conversa entre funcionário e cliente."]
      ]),
      6: buildQuestions(52, 6, [
        ["最終読解:「アキラさんは日本語を勉強して三年になります。初めは簡単な挨拶しかできませんでしたが、毎日短い文章を読み、動画を聞き、日記を書きました。分からない言葉は文脈から考えて、それでも分からないときは辞書で調べました。最近は日本語で友達と会話できるようになり、日本の小説も少しずつ読めるようになりました。」アキラさんは何年間日本語を勉強していますか？", ["一年", "二年", "三年", "五年"], 2, "三年になります indica três anos."],
        ["最初にできたことは？", ["簡単な挨拶", "小説を読むこと", "長い会話", "ニュースを全部理解すること"], 0, "O texto diz que inicialmente só conseguia fazer cumprimentos simples."],
        ["毎日何をしていましたか？", ["文章を読む・動画を聞く・日記を書く", "旅行だけ", "ゲームだけ", "何もしなかった"], 0, "As três atividades são mencionadas diretamente."],
        ["分からない言葉を最初にどうしましたか？", ["文脈から考えた", "すぐに忘れた", "全部翻訳した", "勉強をやめた"], 0, "文脈から考える significa tentar entender pelo contexto."],
        ["文脈でも分からないとき、何を使いましたか？", ["辞書", "地図", "時計", "写真"], 0, "辞書 significa dicionário."],
        ["最近できるようになったことは？", ["日本語で友達と会話する", "日本語を忘れる", "日本へ引っ越す", "先生になる"], 0, "O texto informa que agora consegue conversar com amigos em japonês."],
        ["最近、何を少しずつ読めるようになりましたか？", ["日本の小説", "英語の新聞", "料理の本だけ", "漫画だけ"], 0, "日本の小説 significa romances japoneses."],
        ["この文章の中心的なテーマは？", ["継続的な学習と成長", "旅行の計画", "買い物の方法", "料理の作り方"], 0, "O texto descreve o progresso de Akira através de prática constante."],
        ["この文章から分かる、効果的な学習方法は？", ["読む・聞く・書く・会話する", "単語だけ暗記する", "翻訳だけ読む", "一度だけ勉強する"], 0, "A história apresenta prática integrada de várias habilidades."],
        ["この文章に最も合うタイトルは？", ["三年間の日本語学習", "日本の旅行", "新しい料理", "友達との買い物"], 0, "O título resume o tema central do texto."]
      ])
    },
    recovery: buildRecovery(52, [
      ["文章の中心的な意味を理解するために大切なことは？", ["全体の文脈を読む", "一つの漢字だけ見る", "題名だけ読む", "最後の単語だけ見る"], 0, "O contexto geral ajuda a entender o texto."],
      ["「文脈から考える」の意味は？", ["Usar o contexto para inferir", "Ignorar a frase", "Traduzir tudo sem pensar", "Ler apenas o título"], 0, "文脈 significa contexto."],
      ["会話で相手に何かを見せてもらいたいとき、使える表現は？", ["見せてください", "帰ってください", "寝てください", "忘れてください"], 0, "見せてください pede para mostrar algo."],
      ["「三年間勉強しています」は何を表しますか？", ["Duração de três anos", "Três dias", "Três pessoas", "Três livros"], 0, "年間 indica duração em anos."],
      ["日本語の学習で総合的に必要な能力は？", ["読解・聴解・会話・作文", "読解だけ", "漢字だけ", "翻訳だけ"], 0, "As habilidades são leitura, compreensão auditiva, conversação e escrita."]
    ])
  },



  en: {


// ==========================================
// INGLÊS — SEMANAS 1 A 10
// 5 questões por dia + 5 de recuperação
// ==========================================


  1: {
    days: {
      1: buildQuestions(1, 1, [
        ["Qual pronome significa 'eu'?", ["You", "I", "He", "We"], 1, "I significa eu."],
        ["Qual pronome significa 'ela'?", ["He", "It", "She", "They"], 2, "She é o pronome usado para ela."],
        ["Complete: ___ am Caio.", ["He", "I", "They", "She"], 1, "Com I, usamos am."],
        ["Qual pronome significa 'nós'?", ["We", "They", "You", "It"], 0, "We significa nós."],
        ["Qual pronome usamos normalmente para um objeto ou animal quando não especificamos o sexo?", ["He", "She", "It", "We"], 2, "It é usado para objetos, animais e situações."]
      ]),
      2: buildQuestions(1, 2, [
        ["Complete: She ___ my friend.", ["am", "are", "is", "be"], 2, "Com she, usamos is."],
        ["Complete: They ___ students.", ["is", "are", "am", "be"], 1, "Com they, usamos are."],
        ["Qual é a forma correta?", ["I is happy.", "I am happy.", "I are happy.", "I be happy."], 1, "I am é a combinação correta."],
        ["Complete: He ___ from Brazil.", ["are", "am", "is", "be"], 2, "He combina com is."],
        ["Qual pronome significa 'vocês' ou 'você'?", ["I", "You", "He", "It"], 1, "You pode significar você ou vocês."]
      ]),
      3: buildQuestions(1, 3, [
        ["Como dizer 'Eu sou estudante'?", ["I is a student.", "I am a student.", "I are student.", "I be student."], 1, "A estrutura é I am + profissão ou condição."],
        ["Complete: We ___ happy.", ["am", "is", "are", "be"], 2, "We usa are."],
        ["Qual frase está no negativo corretamente?", ["She not is tired.", "She isn't tired.", "She aren't tired.", "She am not tired."], 1, "She isn't é a contração de she is not."],
        ["Complete: It ___ cold today.", ["am", "are", "is", "be"], 2, "It usa is."],
        ["Qual é a contração de 'you are'?", ["You're", "You's", "You am", "Your"], 0, "You're é a contração de you are."]
      ]),
      4: buildQuestions(1, 4, [
        ["Transforme em negativo: I am tired.", ["I not am tired.", "I amn't tired.", "I am not tired.", "I isn't tired."], 2, "I am not é a forma negativa correta."],
        ["Complete: He ___ not my brother.", ["are", "am", "is", "be"], 2, "He is not pode ser escrito como he isn't."],
        ["Qual frase significa 'Eles não estão aqui'?", ["They isn't here.", "They aren't here.", "They am not here.", "They not are here."], 1, "They aren't here é a forma negativa correta."],
        ["Qual é a forma negativa de 'She is happy'?", ["She don't happy.", "She isn't happy.", "She aren't happy.", "She not happy."], 1, "O verbo to be usa not para formar a negação."],
        ["Complete: We ___ ready.", ["isn't", "aren't", "am not", "not"], 1, "We aren't significa nós não estamos."]
      ]),
      5: buildQuestions(1, 5, [
        ["Como perguntar 'Você está bem?'?", ["You are okay?", "Are you okay?", "Is you okay?", "Am you okay?"], 1, "Em perguntas com to be, o verbo vem antes do sujeito."],
        ["Complete: ___ she your sister?", ["Are", "Am", "Is", "Be"], 2, "She usa is: Is she...?" ],
        ["Qual pergunta está correta?", ["They are students?", "Are they students?", "Is they students?", "Am they students?"], 1, "Are vem antes de they."],
        ["Como responder 'Yes, I am'?", ["Sim, eu sou/estou.", "Não, eu não sou.", "Sim, eles são.", "Não, ela está."], 0, "Yes, I am é uma resposta afirmativa com I."],
        ["Complete: Where ___ you from?", ["is", "am", "are", "be"], 2, "You combina com are."]
      ]),
      6: buildQuestions(1, 6, [
        ["Qual apresentação está correta?", ["Hello, I am Caio.", "Hello, I is Caio.", "Hello, I are Caio.", "Hello, me am Caio."], 0, "I am Caio é uma apresentação correta."],
        ["Como dizer 'Eu tenho 15 anos' em inglês?", ["I have 15 years.", "I am 15 years old.", "I has 15 years old.", "I are 15."], 1, "Em inglês, usamos be + idade + years old."],
        ["Complete: My name ___ Ana.", ["are", "am", "is", "be"], 2, "My name é singular, então usamos is."],
        ["Qual frase apresenta uma origem?", ["I am from Brazil.", "I am hungry.", "I am tired.", "I am ready."], 0, "I am from Brazil significa eu sou do Brasil."],
        ["Qual alternativa é uma apresentação pessoal completa?", ["I Caio Brazil.", "My name is Caio. I am from Brazil.", "Me is Caio.", "I are student."], 1, "A frase apresenta nome e origem com estruturas corretas."]
      ])
    },
    recovery: buildRecovery(1, [
      ["Complete: I ___ Brazilian.", ["is", "are", "am", "be"], 2, "I usa am."],
      ["Qual é o negativo de 'They are happy'?", ["They isn't happy.", "They aren't happy.", "They am not happy.", "They not happy."], 1, "They aren't é a forma negativa."],
      ["Qual pergunta está correta?", ["Is he your friend?", "Are he your friend?", "Am he your friend?", "He is your friend?"], 0, "He usa is, que vem antes do sujeito na pergunta."],
      ["Qual pronome substitui 'Maria'?", ["He", "She", "It", "We"], 1, "She substitui um nome feminino."],
      ["Complete: ___ are my friends.", ["She", "He", "It", "They"], 3, "They significa eles ou elas."]
    ])
  },

  2: {
    days: {
      1: buildQuestions(2, 1, [
        ["Complete: I ___ football every day.", ["plays", "play", "playing", "am play"], 1, "Com I, usamos o verbo na forma base no presente simples."],
        ["Qual frase significa 'Eu moro no Brasil'?", ["I lives in Brazil.", "I live in Brazil.", "I living Brazil.", "I am live in Brazil."], 1, "Com I, usamos live sem alteração."],
        ["Complete: They ___ English.", ["study", "studies", "studying", "studys"], 0, "They usa a forma base study."],
        ["Qual verbo significa 'gostar'?", ["Work", "Like", "Live", "Play"], 1, "Like significa gostar."],
        ["Complete: We ___ music.", ["likes", "liking", "like", "is like"], 2, "We usa like, sem s."]
      ]),
      2: buildQuestions(2, 2, [
        ["Complete: He ___ soccer.", ["play", "plays", "playing", "plaies"], 1, "Na terceira pessoa do singular, normalmente acrescentamos s."],
        ["Complete: She ___ English.", ["study", "studys", "studies", "studying"], 2, "Verbos terminados em consoante + y geralmente trocam y por ies."],
        ["Qual frase está correta?", ["He work every day.", "He works every day.", "He working every day.", "He are work every day."], 1, "He é terceira pessoa do singular: works."],
        ["Complete: My brother ___ TV.", ["watch", "watchs", "watches", "watching"], 2, "Verbos terminados em ch recebem es."],
        ["Complete: Ana ___ in a big house.", ["live", "lives", "living", "are live"], 1, "Ana pode ser substituída por she, então usamos lives."]
      ]),
      3: buildQuestions(2, 3, [
        ["Complete: I ___ like coffee.", ["doesn't", "don't", "isn't", "am not"], 1, "Com I, a negação do presente simples usa don't."],
        ["Complete: He ___ play tennis.", ["don't", "isn't", "doesn't", "aren't"], 2, "Com he, usamos doesn't."],
        ["Qual frase está correta?", ["She don't work.", "She doesn't work.", "She doesn't works.", "She not work."], 1, "Depois de doesn't, o verbo principal fica na forma base."],
        ["Como dizer 'Nós não estudamos à noite'?", ["We doesn't study at night.", "We don't study at night.", "We aren't study at night.", "We not studies at night."], 1, "We usa don't + verbo base."],
        ["Complete: My dog ___ eat vegetables.", ["don't", "doesn't", "isn't", "aren't"], 1, "My dog equivale a it, então usamos doesn't."]
      ]),
      4: buildQuestions(2, 4, [
        ["Qual pergunta significa 'Você trabalha aqui?'?", ["Does you work here?", "Do you work here?", "Are you work here?", "You do works here?"], 1, "Com you, usamos Do + sujeito + verbo base."],
        ["Complete: ___ she live here?", ["Do", "Does", "Is", "Are"], 1, "She usa Does nas perguntas do presente simples."],
        ["Qual pergunta está correta?", ["Does he likes pizza?", "Do he like pizza?", "Does he like pizza?", "Is he like pizza?"], 2, "Depois de does, usamos like, sem s."],
        ["Complete: Where ___ they study?", ["does", "do", "are", "is"], 1, "They usa do."],
        ["Como responder afirmativamente a 'Do you speak English?'?", ["Yes, I do.", "Yes, I am.", "Yes, I does.", "Yes, I speak do."], 0, "A resposta curta usa o auxiliar da pergunta."]
      ]),
      5: buildQuestions(2, 5, [
        ["Qual frase descreve uma rotina?", ["I am eating now.", "I eat breakfast every morning.", "I ate yesterday.", "I will eat tomorrow."], 1, "Every morning indica um hábito."],
        ["Complete: My father ___ coffee every morning.", ["drink", "drinks", "drinking", "is drink"], 1, "My father equivale a he: drinks."],
        ["Qual frase está correta?", ["She go to school.", "She goes to school.", "She going school.", "She does goes to school."], 1, "Go recebe es na terceira pessoa: goes."],
        ["Complete: We ___ our homework after school.", ["do", "does", "doing", "is do"], 0, "We usa do na forma base."],
        ["Qual expressão indica frequência habitual?", ["Right now", "Yesterday", "Every weekend", "At the moment"], 2, "Every weekend indica algo que acontece regularmente."]
      ]),
      6: buildQuestions(2, 6, [
        ["Qual frase significa 'Ela gosta de livros'?", ["She like books.", "She likes books.", "She liking books.", "She does likes books."], 1, "She usa likes em frases afirmativas."],
        ["Complete: ___ your friends play games?", ["Does", "Do", "Is", "Are"], 1, "Your friends equivale a they, então usamos Do."],
        ["Qual é a forma negativa de 'He works here'?", ["He don't work here.", "He doesn't works here.", "He doesn't work here.", "He isn't work here."], 2, "Doesn't é seguido pelo verbo na forma base."],
        ["Complete: My mother ___ dinner every day.", ["cook", "cooks", "cooking", "does cooks"], 1, "My mother equivale a she: cooks."],
        ["Qual frase descreve corretamente uma atividade diária?", ["They studies every day.", "They study every day.", "They studying every day.", "They does study every day."], 1, "They usa o verbo na forma base."]
      ])
    },
    recovery: buildRecovery(2, [
      ["Complete: He ___ video games.", ["play", "plays", "playing", "do play"], 1, "He recebe a forma plays."],
      ["Qual é a pergunta correta?", ["Do she work?", "Does she work?", "Is she works?", "Does she works?"], 1, "Does + she + verbo base."],
      ["Complete: I ___ watch TV in the morning.", ["doesn't", "don't", "am not", "isn't"], 1, "I usa don't."],
      ["Qual frase está correta?", ["My sister study English.", "My sister studies English.", "My sister studying English.", "My sister do studies English."], 1, "Study muda para studies na terceira pessoa."],
      ["O que significa 'They live near the school'?", ["Eles moram perto da escola.", "Eles estudaram na escola.", "Eles estão na escola agora.", "Eles vão morar na escola."], 0, "Live significa morar; near significa perto."]
    ])
  },

  3: {
    days: {
      1: buildQuestions(3, 1, [
        ["Qual palavra significa 'sempre'?", ["Never", "Sometimes", "Always", "Rarely"], 2, "Always significa sempre."],
        ["Qual palavra significa 'nunca'?", ["Usually", "Never", "Often", "Always"], 1, "Never significa nunca."],
        ["Complete: I ___ brush my teeth before bed. (sempre)", ["never", "always", "rarely", "sometimes"], 1, "Always expressa uma frequência de 100%."],
        ["Qual expressão significa 'às vezes'?", ["Every day", "Sometimes", "Never", "Always"], 1, "Sometimes significa às vezes."],
        ["Qual palavra significa 'geralmente'?", ["Usually", "Never", "Rarely", "Hardly"], 0, "Usually significa geralmente."]
      ]),
      2: buildQuestions(3, 2, [
        ["Onde normalmente colocamos 'always' em uma frase com verbo comum?", ["Depois do sujeito e antes do verbo.", "Sempre no final.", "Antes do sujeito.", "Depois do verbo principal."], 0, "Com verbos comuns, o advérbio geralmente vem antes do verbo principal."],
        ["Complete: She ___ goes to school by bus.", ["usually", "is usually", "does usually", "usually is"], 0, "Usually vem antes do verbo principal goes."],
        ["Complete: I am ___ late.", ["never", "do never", "never am", "not never"], 0, "Com to be, o advérbio de frequência costuma vir depois do verbo."],
        ["Qual frase está correta?", ["He always is happy.", "He is always happy.", "He always happy is.", "Always he is happy."], 1, "Com is, always vem depois do verbo."],
        ["Qual frase significa 'Eu raramente como fast food'?", ["I rarely eat fast food.", "I eat rarely fast food.", "I rarely am eat fast food.", "I don't rarely eating fast food."], 0, "Rarely vem antes do verbo eat."]
      ]),
      3: buildQuestions(3, 3, [
        ["Complete: ___ you usually wake up early?", ["Does", "Do", "Are", "Is"], 1, "Do inicia perguntas no presente simples com you."],
        ["Complete: How often ___ he exercise?", ["do", "is", "does", "are"], 2, "He usa does."],
        ["Qual pergunta significa 'Com que frequência você estuda?'?", ["How much do you study?", "How often do you study?", "When often you study?", "How many do you study?"], 1, "How often pergunta a frequência."],
        ["Qual resposta indica frequência?", ["At school.", "Because I like it.", "Three times a week.", "My brother."], 2, "Three times a week significa três vezes por semana."],
        ["Complete: Does she ___ coffee every day?", ["drinks", "drinking", "drink", "drank"], 2, "Depois de does, usamos o verbo base."]
      ]),
      4: buildQuestions(3, 4, [
        ["Qual é a pergunta correta para descobrir onde alguém mora?", ["Where do you live?", "Where you do live?", "Where does you live?", "Where are you live?"], 0, "Where + do + sujeito + verbo."],
        ["Complete: What time ___ your class start?", ["do", "does", "is", "are"], 1, "Your class é singular, então usamos does."],
        ["Como perguntar 'Por que você gosta de inglês?'?", ["What you like English?", "Why do you like English?", "Why does you like English?", "How do you likes English?"], 1, "Why pergunta o motivo; do auxilia com you."],
        ["Qual pergunta significa 'O que ele faz?'?", ["What do he do?", "What does he do?", "What is he do?", "What he does?"], 1, "Does é usado com he."],
        ["Complete: ___ does the movie begin?", ["What time", "How many", "Who", "How much"], 0, "What time pergunta o horário."]
      ]),
      5: buildQuestions(3, 5, [
        ["Qual resposta combina com 'How often do you play football?'?", ["At the park.", "Twice a week.", "Because it is fun.", "With my brother."], 1, "Twice a week responde à frequência."],
        ["Qual resposta combina com 'Where does Anna work?'?", ["Every day.", "At a hospital.", "She is 20.", "Because she likes it."], 1, "Where pergunta o lugar."],
        ["Qual resposta combina com 'Why do you study English?'?", ["At night.", "With my friend.", "Because I want to learn.", "Three days."], 2, "Because introduz uma razão."],
        ["Complete: I study English ___ night.", ["on", "at", "in", "to"], 1, "Usamos at night para dizer à noite."],
        ["Qual frase está correta?", ["She never is late.", "She is never late.", "She never late is.", "Never she late is."], 1, "Com to be, never normalmente vem depois do verbo."]
      ]),
      6: buildQuestions(3, 6, [
        ["A: How often do you read? B: ___", ["In my room.", "Every night.", "Because I like books.", "My sister."], 1, "Every night responde à frequência."],
        ["A: Where do you study? B: ___", ["At home.", "Sometimes.", "Because I have a test.", "At seven."], 0, "At home responde ao lugar."],
        ["A: Why does he run? B: ___", ["In the park.", "Every morning.", "Because he likes exercise.", "With his friend."], 2, "Because apresenta o motivo."],
        ["Qual pergunta está correta?", ["How often she plays?", "How often does she play?", "How often do she plays?", "How she often play?"], 1, "Does + she + play."],
        ["Complete: My friends ___ visit me on weekends.", ["usually", "is usually", "does usually", "usually are"], 0, "Usually vem antes do verbo principal visit."]
      ])
    },
    recovery: buildRecovery(3, [
      ["Qual palavra significa 'frequentemente'?", ["Often", "Never", "Rarely", "Hardly"], 0, "Often significa frequentemente."],
      ["Complete: ___ your brother play basketball?", ["Do", "Does", "Is", "Are"], 1, "Brother equivale a he, então usamos does."],
      ["Qual frase está correta?", ["I am usually busy.", "I usually am busy.", "I usually busy am.", "Usually I busy am."], 0, "Com to be, usually vem depois de am."],
      ["O que significa 'How often'?", ["Onde", "Por quê", "Com que frequência", "Que horas"], 2, "How often pergunta a frequência."],
      ["Qual resposta combina com 'Why are you happy?'?", ["At school.", "Because it is my birthday.", "Every day.", "At five o'clock."], 1, "Because apresenta a razão."]
    ])
  },

  4: {
    days: {
      1: buildQuestions(4, 1, [
        ["Qual é a terminação mais comum dos verbos regulares no passado?", ["-ing", "-ed", "-s", "-ly"], 1, "A maioria dos verbos regulares recebe -ed."],
        ["Qual é o passado de 'work'?", ["Workt", "Worked", "Working", "Works"], 1, "Work vira worked."],
        ["Complete: I ___ football yesterday.", ["play", "plays", "played", "playing"], 2, "Played é o passado de play."],
        ["Qual é o passado de 'watch'?", ["Watched", "Watchd", "Watching", "Watches"], 0, "Watch recebe -ed: watched."],
        ["Qual palavra significa 'ontem'?", ["Tomorrow", "Today", "Yesterday", "Tonight"], 2, "Yesterday significa ontem."]
      ]),
      2: buildQuestions(4, 2, [
        ["Qual é o passado de 'study'?", ["Studyed", "Studied", "Studys", "Studying"], 1, "Consoante + y muda para ied: studied."],
        ["Qual é o passado de 'live'?", ["Liveed", "Lived", "Living", "Lives"], 1, "Verbos terminados em e recebem apenas d."],
        ["Complete: She ___ her room yesterday.", ["clean", "cleans", "cleaned", "cleaning"], 2, "Cleaned é o passado regular de clean."],
        ["Qual é o passado de 'dance'?", ["Danceed", "Danced", "Dancing", "Dances"], 1, "Dance termina em e, então recebe apenas d."],
        ["Complete: We ___ English last night.", ["studied", "study", "studies", "studying"], 0, "Last night indica passado; studied é a forma correta."]
      ]),
      3: buildQuestions(4, 3, [
        ["Qual frase está no passado?", ["I play games.", "I played games.", "I am playing games.", "I will play games."], 1, "Played é a forma passada de play."],
        ["Complete: They ___ the movie last weekend.", ["watch", "watched", "watches", "watching"], 1, "Watched é o passado de watch."],
        ["O que significa 'I visited my grandmother'?", ["Eu visito minha avó.", "Eu visitei minha avó.", "Eu visitarei minha avó.", "Eu estou visitando minha avó."], 1, "Visited indica uma ação concluída no passado."],
        ["Qual expressão indica passado?", ["Next week", "Every day", "Last weekend", "Right now"], 2, "Last weekend significa fim de semana passado."],
        ["Complete: He ___ soccer yesterday afternoon.", ["practice", "practices", "practiced", "practicing"], 2, "Practiced é o passado regular de practice."]
      ]),
      4: buildQuestions(4, 4, [
        ["Como formar a negativa no passado simples?", ["Don't + verbo", "Didn't + verbo base", "Doesn't + verbo", "Wasn't + verbo-ing"], 1, "Didn't é seguido pelo verbo na forma base."],
        ["Complete: I ___ watch TV yesterday.", ["didn't", "don't", "doesn't", "wasn't"], 0, "Didn't forma a negativa no passado simples."],
        ["Qual frase está correta?", ["She didn't studied.", "She didn't study.", "She doesn't studied.", "She not study."], 1, "Depois de didn't, usamos study, sem -ed."],
        ["Como dizer 'Eles não trabalharam ontem'?", ["They didn't worked yesterday.", "They don't worked yesterday.", "They didn't work yesterday.", "They weren't work yesterday."], 2, "Didn't + work é a estrutura correta."],
        ["Complete: He didn't ___ breakfast.", ["ate", "eats", "eating", "eat"], 3, "Depois de didn't, o verbo fica na forma base: eat."]
      ]),
      5: buildQuestions(4, 5, [
        ["Qual auxiliar usamos em perguntas no passado simples?", ["Do", "Does", "Did", "Are"], 2, "Did é o auxiliar de perguntas no passado simples."],
        ["Complete: ___ you play yesterday?", ["Do", "Does", "Did", "Were"], 2, "Did inicia a pergunta no passado."],
        ["Qual pergunta está correta?", ["Did she visited you?", "Did she visit you?", "Does she visited you?", "Was she visit you?"], 1, "Depois de did, usamos o verbo base visit."],
        ["Como responder 'Did you study?' negativamente?", ["No, I don't.", "No, I didn't.", "No, I wasn't.", "No, I doesn't."], 1, "A resposta curta negativa usa didn't."],
        ["Complete: Where ___ they travel last year?", ["do", "does", "did", "are"], 2, "Did é usado com todos os sujeitos no passado simples."]
      ]),
      6: buildQuestions(4, 6, [
        ["Qual frase significa 'Eu assisti a um filme ontem'?", ["I watch a movie yesterday.", "I watched a movie yesterday.", "I watching a movie yesterday.", "I did watched a movie yesterday."], 1, "Watched é o passado de watch."],
        ["Qual alternativa está correta?", ["Did you went home?", "Did you go home?", "Do you went home?", "Were you go home?"], 1, "Após did, usamos go, não went."],
        ["Complete: We ___ our homework last night.", ["finished", "finish", "finishes", "finishing"], 0, "Finished é o passado regular de finish."],
        ["Qual pergunta combina com 'Yes, I did'?", ["Are you tired?", "Did you call me?", "Do you call me?", "Does he call me?"], 1, "Yes, I did responde a uma pergunta com Did."],
        ["Qual expressão significa 'semana passada'?", ["Next week", "Last week", "Every week", "This week"], 1, "Last week significa semana passada."]
      ])
    },
    recovery: buildRecovery(4, [
      ["Qual é o passado de 'open'?", ["Opened", "Openned", "Open", "Opening"], 0, "Open recebe -ed: opened."],
      ["Complete: She didn't ___ yesterday.", ["worked", "works", "work", "working"], 2, "Didn't é seguido pela forma base."],
      ["Qual pergunta está correta?", ["Did he call you?", "Did he called you?", "Does he called you?", "He did called you?"], 0, "Did + sujeito + verbo base."],
      ["O que significa 'They studied yesterday'?", ["Eles estudam ontem.", "Eles estudaram ontem.", "Eles estudarão amanhã.", "Eles estão estudando."], 1, "Studied indica passado."],
      ["Complete: ___ you clean your room last night?", ["Do", "Does", "Did", "Are"], 2, "Did é o auxiliar do passado simples."]
    ])
  },

  5: {
    days: {
      1: buildQuestions(5, 1, [
        ["Qual é o passado de 'go'?", ["Goed", "Gone", "Went", "Going"], 2, "Go é irregular; seu passado simples é went."],
        ["Qual é o passado de 'have'?", ["Haved", "Had", "Has", "Having"], 1, "Had é o passado de have."],
        ["Complete: I ___ to school yesterday.", ["go", "gone", "went", "going"], 2, "Went é o passado de go."],
        ["Qual é o passado de 'see'?", ["Seed", "Saw", "Seen", "Seeing"], 1, "Saw é o passado simples de see."],
        ["O que significa 'ate'?", ["Bebeu", "Comeu", "Dormiu", "Foi"], 1, "Ate é o passado de eat."]
      ]),
      2: buildQuestions(5, 2, [
        ["Complete: She ___ pizza last night.", ["eat", "eats", "ate", "eating"], 2, "Ate é o passado irregular de eat."],
        ["Qual é o passado de 'make'?", ["Maked", "Made", "Makes", "Making"], 1, "Made é o passado de make."],
        ["Complete: We ___ a cake yesterday.", ["make", "made", "makes", "making"], 1, "Made indica que fizemos algo no passado."],
        ["Qual é o passado de 'get'?", ["Getted", "Got", "Gets", "Getting"], 1, "Got é o passado simples de get."],
        ["Complete: He ___ a new phone last week.", ["get", "gets", "got", "getting"], 2, "Got é a forma passada de get."]
      ]),
      3: buildQuestions(5, 3, [
        ["Qual é o passado de 'come'?", ["Comed", "Came", "Come", "Coming"], 1, "Came é o passado de come."],
        ["Qual é o passado de 'buy'?", ["Buyed", "Bought", "Buying", "Buys"], 1, "Bought é o passado de buy."],
        ["Complete: They ___ home late.", ["come", "came", "comes", "coming"], 1, "Came é o passado de come."],
        ["Qual é o passado de 'take'?", ["Taked", "Took", "Taken", "Taking"], 1, "Took é o passado simples de take."],
        ["Complete: I ___ the bus this morning.", ["take", "takes", "took", "taking"], 2, "Took é a forma passada de take."]
      ]),
      4: buildQuestions(5, 4, [
        ["Qual frase está correta?", ["I goed to the park.", "I went to the park.", "I gone to the park.", "I going to the park."], 1, "Went é o passado simples correto de go."],
        ["Complete: He ___ breakfast at seven.", ["have", "had", "has", "having"], 1, "Had é o passado de have."],
        ["Qual frase significa 'Nós vimos um cachorro'?", ["We see a dog.", "We saw a dog.", "We seen a dog.", "We seeing a dog."], 1, "Saw é o passado simples de see."],
        ["Complete: My friend ___ me a gift.", ["give", "gives", "gave", "giving"], 2, "Gave é o passado de give."],
        ["Qual é o passado de 'write'?", ["Writed", "Wrote", "Written", "Writing"], 1, "Wrote é o passado simples de write."]
      ]),
      5: buildQuestions(5, 5, [
        ["Qual frase está correta?", ["Did you ate?", "Did you eat?", "Do you ate?", "Did you eaten?"], 1, "Depois de did, usamos eat."],
        ["Complete: She didn't ___ to school.", ["went", "go", "gone", "goes"], 1, "Didn't + go é a negativa correta."],
        ["Qual pergunta está correta?", ["Did he bought a book?", "Did he buy a book?", "Does he bought a book?", "He did buyed a book?"], 1, "Did é seguido por buy."],
        ["Como responder negativamente a 'Did they come?'?", ["No, they don't.", "No, they didn't.", "No, they aren't.", "No, they wasn't."], 1, "A resposta curta é No, they didn't."],
        ["Complete: What ___ you see yesterday?", ["do", "does", "did", "are"], 2, "Did introduz perguntas no passado."]
      ]),
      6: buildQuestions(5, 6, [
        ["Leia: 'Yesterday, I went to the zoo. I saw a lion and took many pictures.' O que a pessoa fez?", ["Foi ao cinema.", "Foi ao zoológico.", "Foi à escola.", "Foi ao mercado."], 1, "Went to the zoo significa foi ao zoológico."],
        ["No texto anterior, qual animal a pessoa viu?", ["A tiger", "A dog", "A lion", "A bear"], 2, "O texto diz saw a lion."],
        ["Complete: Last weekend, we ___ a delicious meal.", ["eat", "ate", "eaten", "eating"], 1, "Ate é o passado de eat."],
        ["Qual frase conta uma sequência de acontecimentos passados?", ["I wake up and eat.", "I will wake up and eat.", "I woke up, ate breakfast and left home.", "I am waking up."], 2, "Woke, ate e left são formas de passado."],
        ["Qual é o passado de 'drink'?", ["Drinked", "Drank", "Drunk", "Drinking"], 1, "Drank é o passado simples de drink."]
      ])
    },
    recovery: buildRecovery(5, [
      ["Qual é o passado de 'run'?", ["Runned", "Ran", "Running", "Runs"], 1, "Ran é o passado de run."],
      ["Complete: I ___ a sandwich yesterday.", ["eat", "eats", "ate", "eating"], 2, "Ate é o passado de eat."],
      ["Qual frase está correta?", ["She didn't went.", "She didn't go.", "She doesn't went.", "She not go."], 1, "Didn't exige o verbo na forma base."],
      ["Qual é o passado de 'think'?", ["Thinked", "Thought", "Thinks", "Thinking"], 1, "Thought é o passado de think."],
      ["Complete: Did you ___ the movie?", ["saw", "seen", "see", "seeing"], 2, "Depois de did, usamos see."]
    ])
  },

  6: {
    days: {
      1: buildQuestions(6, 1, [
        ["Qual auxiliar é usado para falar de decisões rápidas e previsões?", ["Did", "Will", "Does", "Was"], 1, "Will é usado para decisões espontâneas e previsões."],
        ["Complete: I ___ help you.", ["will", "did", "am", "does"], 0, "Will é seguido pelo verbo na forma base."],
        ["Qual frase significa 'Eu estudarei amanhã'?", ["I studied tomorrow.", "I will study tomorrow.", "I am study tomorrow.", "I does study tomorrow."], 1, "Will study expressa uma ação futura."],
        ["Complete: She will ___ later.", ["comes", "coming", "come", "came"], 2, "Depois de will, o verbo fica na forma base."],
        ["Qual contração significa 'I will'?", ["I'll", "I'm", "I've", "I'd"], 0, "I'll é a contração de I will."]
      ]),
      2: buildQuestions(6, 2, [
        ["Qual estrutura é comum para planos já decididos?", ["Will + verbo", "Am/is/are + going to + verbo", "Did + verbo", "Was + verbo"], 1, "Going to é muito usado para planos e intenções."],
        ["Complete: I am going to ___ English.", ["studies", "studied", "study", "studying"], 2, "Depois de going to, usamos o verbo base."],
        ["Complete: They ___ going to travel.", ["is", "am", "are", "be"], 2, "They combina com are."],
        ["Qual frase está correta?", ["She are going to cook.", "She is going to cook.", "She going to cooks.", "She is go to cook."], 1, "She is + going to + verbo base."],
        ["O que significa 'We are going to visit our grandparents'?", ["Visitamos nossos avós.", "Visitaremos nossos avós como plano.", "Visitamos nossos avós ontem.", "Estamos visitando agora."], 1, "Going to expressa uma intenção ou plano."]
      ]),
      3: buildQuestions(6, 3, [
        ["Qual frase expressa uma previsão?", ["I think it will rain.", "I ate lunch.", "I am at home.", "I study every day."], 0, "Will pode expressar previsões."],
        ["Qual frase expressa um plano?", ["I am going to learn Japanese.", "I learned Japanese yesterday.", "I learn Japanese every day.", "I was learning Japanese."], 0, "Going to indica uma intenção planejada."],
        ["Complete: Look at those clouds! It ___ rain.", ["will", "is going to", "did", "does"], 1, "Going to pode expressar uma previsão baseada em evidências presentes."],
        ["Complete: I promise I ___ call you.", ["am", "will", "did", "was"], 1, "Will é comum em promessas."],
        ["Qual é a forma correta?", ["He will goes.", "He will go.", "He will going.", "He wills go."], 1, "Will não muda e é seguido pelo verbo base."]
      ]),
      4: buildQuestions(6, 4, [
        ["Como formar a negativa com will?", ["Will not + verbo", "Don't + will", "Doesn't + verbo", "Not + going"], 0, "Will not ou won't formam a negativa."],
        ["Complete: I ___ forget your birthday.", ["won't", "don't will", "amn't", "didn't will"], 0, "Won't é a contração de will not."],
        ["Qual frase está correta?", ["She won't comes.", "She won't come.", "She don't will come.", "She isn't will come."], 1, "Won't é seguido pelo verbo base."],
        ["Como dizer 'Eles não viajarão amanhã'?", ["They won't travel tomorrow.", "They doesn't travel tomorrow.", "They not will travel tomorrow.", "They didn't traveled tomorrow."], 0, "Won't + travel forma a negativa."],
        ["Complete: He is not going to ___ today.", ["works", "worked", "work", "working"], 2, "Going to é seguido pelo verbo base."]
      ]),
      5: buildQuestions(6, 5, [
        ["Qual pergunta está correta?", ["Will you help me?", "You will help me?", "Do will you help me?", "Will you helps me?"], 0, "Will vem antes do sujeito em perguntas."],
        ["Complete: ___ they going to study?", ["Is", "Am", "Are", "Do"], 2, "They usa are."],
        ["Como perguntar 'Você vai viajar nas férias?'?", ["Do you going to travel?", "Are you going to travel?", "Will you going travel?", "Are you go travel?"], 1, "Are + sujeito + going to + verbo."],
        ["Qual resposta curta combina com 'Will she come?'?", ["Yes, she will.", "Yes, she does.", "Yes, she is will.", "Yes, she came."], 0, "A resposta curta repete will."],
        ["Complete: What ___ you going to do tomorrow?", ["is", "are", "do", "will"], 1, "You combina com are na estrutura going to."]
      ]),
      6: buildQuestions(6, 6, [
        ["Qual frase fala de uma intenção para o próximo fim de semana?", ["I went to the beach last weekend.", "I am going to visit my cousin next weekend.", "I visit my cousin every weekend.", "I was visiting my cousin."], 1, "Going to e next weekend indicam plano futuro."],
        ["Qual frase é uma promessa?", ["I will help you.", "I helped you yesterday.", "I help you every day.", "I am helping you now."], 0, "Will pode expressar uma promessa."],
        ["Complete: Maybe we ___ watch a movie tonight.", ["will", "did", "does", "are"], 0, "Will pode expressar uma possibilidade ou previsão."],
        ["Qual frase está correta?", ["They will to travel.", "They will travel.", "They will traveling.", "They will travels."], 1, "Will é seguido diretamente pelo verbo base."],
        ["Qual é a diferença mais comum entre will e going to?", ["Will só é usado no passado.", "Going to é comum para planos; will para decisões rápidas e previsões.", "Will exige -ing.", "Não existe diferença de uso."], 1, "Essa é uma distinção prática importante, embora os usos possam se sobrepor."]
      ])
    },
    recovery: buildRecovery(6, [
      ["Complete: I think she ___ win.", ["will", "did", "does", "is"], 0, "Will pode indicar previsão."],
      ["Complete: We are going to ___ dinner.", ["cooks", "cooked", "cook", "cooking"], 2, "Going to é seguido pelo verbo base."],
      ["Qual é a negativa de 'I will go'?", ["I don't will go.", "I won't go.", "I didn't go tomorrow.", "I amn't go."], 1, "Won't é a forma negativa de will."],
      ["Qual pergunta está correta?", ["Will they come?", "Do will they come?", "Will they comes?", "They will come?"], 0, "Will vem antes do sujeito."],
      ["Qual frase expressa um plano?", ["I am going to study tonight.", "I studied last night.", "I study every night.", "I was studying."], 0, "Going to expressa uma intenção planejada."]
    ])
  },

  7: {
    days: {
      1: buildQuestions(7, 1, [
        ["Qual palavra significa 'cozinha'?", ["Bedroom", "Kitchen", "Bathroom", "Garden"], 1, "Kitchen significa cozinha."],
        ["Qual palavra significa 'quarto'?", ["Bedroom", "Kitchen", "Garage", "Living room"], 0, "Bedroom significa quarto."],
        ["Complete: I sleep in my ___.", ["kitchen", "bathroom", "bedroom", "garden"], 2, "Bedroom é o cômodo onde normalmente dormimos."],
        ["O que significa 'living room'?", ["Sala de estar", "Banheiro", "Garagem", "Quintal"], 0, "Living room significa sala de estar."],
        ["Qual palavra significa 'janela'?", ["Door", "Window", "Floor", "Wall"], 1, "Window significa janela."]
      ]),
      2: buildQuestions(7, 2, [
        ["Qual palavra significa 'maçã'?", ["Bread", "Apple", "Milk", "Rice"], 1, "Apple significa maçã."],
        ["Qual palavra significa 'leite'?", ["Water", "Juice", "Milk", "Cheese"], 2, "Milk significa leite."],
        ["Complete: I need to buy some ___. (pão)", ["bread", "chair", "phone", "shoes"], 0, "Bread significa pão."],
        ["Onde normalmente compramos alimentos?", ["Library", "Supermarket", "Hospital", "Airport"], 1, "Supermarket significa supermercado."],
        ["O que significa 'How much is this?'?", ["Quantos são estes?", "Quanto custa isto?", "Onde está isto?", "Quem comprou isto?"], 1, "How much pergunta o preço ou quantidade incontável."]
      ]),
      3: buildQuestions(7, 3, [
        ["Qual palavra significa 'celular'?", ["Keyboard", "Phone", "Screen", "Mouse"], 1, "Phone pode significar telefone ou celular."],
        ["Qual palavra significa 'teclado'?", ["Keyboard", "Speaker", "Camera", "Battery"], 0, "Keyboard significa teclado."],
        ["Complete: My computer has a big ___.", ["screen", "spoon", "window", "plate"], 0, "Screen significa tela."],
        ["O que significa 'headphones'?", ["Fones de ouvido", "Carregador", "Teclado", "Controle"], 0, "Headphones são fones de ouvido."],
        ["Qual palavra significa 'carregador'?", ["Charger", "Printer", "Mouse", "Speaker"], 0, "Charger significa carregador."]
      ]),
      4: buildQuestions(7, 4, [
        ["Qual palavra significa 'estudante'?", ["Teacher", "Student", "Doctor", "Driver"], 1, "Student significa estudante."],
        ["Qual palavra significa 'professor'?", ["Teacher", "Student", "Engineer", "Farmer"], 0, "Teacher significa professor ou professora."],
        ["Complete: I do my ___ after school.", ["homework", "breakfast", "shower", "shopping"], 0, "Homework significa tarefa de casa."],
        ["O que significa 'classroom'?", ["Biblioteca", "Sala de aula", "Escritório", "Cozinha"], 1, "Classroom é sala de aula."],
        ["Qual palavra significa 'trabalho' como atividade profissional?", ["Work", "House", "Food", "Game"], 0, "Work pode significar trabalho."]
      ]),
      5: buildQuestions(7, 5, [
        ["Qual frase significa 'Há uma mesa na cozinha'?", ["There is a table in the kitchen.", "There are table in kitchen.", "It is table kitchen.", "There have a table."], 0, "There is é usado para indicar a existência de algo singular."],
        ["Complete: There ___ two chairs in the room.", ["is", "are", "am", "be"], 1, "There are é usado com substantivos plurais."],
        ["Qual frase está correta?", ["My house have three rooms.", "My house has three rooms.", "My house haves three rooms.", "My house having three rooms."], 1, "My house é singular, então usamos has."],
        ["Como dizer 'Meu computador está sobre a mesa'?", ["My computer is on the desk.", "My computer are in desk.", "My computer on is desk.", "My computer does on the desk."], 0, "On indica sobre ou em cima de."],
        ["Qual preposição indica que algo está dentro de um lugar?", ["On", "Under", "In", "Behind"], 2, "In significa dentro de ou em."]
      ]),
      6: buildQuestions(7, 6, [
        ["Leia: 'My bedroom is small, but it has a desk, a computer and two windows.' O que existe no quarto?", ["Uma cama e três portas.", "Uma mesa, um computador e duas janelas.", "Dois computadores e uma mesa.", "Uma cozinha e duas janelas."], 1, "O texto menciona desk, computer e two windows."],
        ["No texto anterior, como é o quarto?", ["Grande", "Pequeno", "Escuro", "Novo"], 1, "Small significa pequeno."],
        ["Qual frase descreve corretamente uma casa?", ["There are a kitchen.", "There is a kitchen.", "There am a kitchen.", "There be kitchen."], 1, "Kitchen é singular, então usamos there is."],
        ["Complete: The supermarket is ___ my house. (perto de)", ["near", "under", "inside", "between"], 0, "Near significa perto de."],
        ["Qual frase reúne vocabulário de tecnologia e estudo?", ["I use my laptop to study English.", "I eat my keyboard every day.", "My bedroom drinks water.", "The teacher is a computer."], 0, "Laptop significa notebook e a frase está semanticamente correta."]
      ])
    },
    recovery: buildRecovery(7, [
      ["O que significa 'bathroom'?", ["Quarto", "Banheiro", "Cozinha", "Sala"], 1, "Bathroom significa banheiro."],
      ["Complete: There ___ a computer on the desk.", ["are", "is", "am", "be"], 1, "Um computador é singular: there is."],
      ["Qual palavra significa 'arroz'?", ["Rice", "Bread", "Meat", "Apple"], 0, "Rice significa arroz."],
      ["Qual é a tradução de 'I study in my bedroom'?", ["Eu trabalho na cozinha.", "Eu estudo no meu quarto.", "Eu durmo na sala.", "Eu estudo no mercado."], 1, "Study significa estudar; bedroom significa quarto."],
      ["Qual frase está correta?", ["There are two phones.", "There is two phones.", "There am two phones.", "There be two phones."], 0, "Two phones está no plural, então usamos there are."]
    ])
  },

  8: {
    days: {
      1: buildQuestions(8, 1, [
        ["Qual pergunta significa 'Quem é você?'?", ["What are you?", "Who are you?", "Where are you?", "When are you?"], 1, "Who pergunta quem."],
        ["Qual palavra usamos para perguntar sobre uma coisa ou informação?", ["Who", "What", "Where", "When"], 1, "What significa o quê ou qual."],
        ["Complete: ___ is your best friend?", ["Where", "When", "Who", "Why"], 2, "Who pergunta sobre uma pessoa."],
        ["Qual pergunta significa 'O que você quer?'?", ["What do you want?", "Who do you want?", "Where do you want?", "When do you want?"], 0, "What pergunta o que a pessoa quer."],
        ["Complete: ___ is your favorite color?", ["Who", "What", "Where", "How"], 1, "What é usado para perguntar qual é a cor favorita."]
      ]),
      2: buildQuestions(8, 2, [
        ["Qual palavra significa 'onde'?", ["When", "Why", "Where", "Who"], 2, "Where pergunta o lugar."],
        ["Qual palavra significa 'quando'?", ["When", "Where", "What", "Who"], 0, "When pergunta o tempo ou momento."],
        ["Complete: ___ do you live?", ["Who", "Where", "When", "How much"], 1, "Where pergunta onde alguém mora."],
        ["Qual pergunta significa 'Quando começa o filme?'?", ["Where does the movie start?", "When does the movie start?", "Why does the movie start?", "Who does the movie start?"], 1, "When pergunta quando algo acontece."],
        ["Complete: ___ is your birthday?", ["When", "Who", "Where", "What"], 0, "When é usado para perguntar a data ou momento."]
      ]),
      3: buildQuestions(8, 3, [
        ["Qual palavra significa 'por quê'?", ["Because", "Why", "How", "What"], 1, "Why pergunta o motivo."],
        ["Qual palavra usamos para introduzir uma razão?", ["Where", "Because", "Who", "When"], 1, "Because significa porque."],
        ["Complete: Why are you tired? — ___ I worked all day.", ["Where", "Because", "Who", "How"], 1, "Because introduz a explicação."],
        ["Qual pergunta está correta?", ["Why you study English?", "Why do you study English?", "Why does you study English?", "Why are you study English?"], 1, "Why + do + sujeito + verbo base."],
        ["Qual resposta combina com 'Why do you like music?'?", ["At home.", "Because it makes me happy.", "At seven.", "My brother."], 1, "A resposta explica o motivo."]
      ]),
      4: buildQuestions(8, 4, [
        ["Qual palavra significa 'como'?", ["How", "Who", "Where", "When"], 0, "How pergunta como ou de que maneira."],
        ["Complete: ___ are you today?", ["What", "How", "Who", "Where"], 1, "How are you? significa como você está?"],
        ["Qual pergunta significa 'Como você vai para a escola?'?", ["What do you go to school?", "How do you go to school?", "Who do you go to school?", "Where do you go to school?"], 1, "How pergunta o meio ou maneira."],
        ["Qual resposta combina com 'How do you feel?'?", ["I'm happy.", "At school.", "Because it's Monday.", "My teacher."], 0, "How do you feel pergunta como você se sente."],
        ["Complete: How ___ you spell your name?", ["are", "do", "does", "is"], 1, "How do you spell...? pergunta como soletrar."]
      ]),
      5: buildQuestions(8, 5, [
        ["Qual expressão usamos para perguntar preço?", ["How many", "How much", "How often", "How long"], 1, "How much é usado para preço e substantivos incontáveis."],
        ["Qual expressão é usada para perguntar quantidade de itens contáveis?", ["How much", "How many", "How often", "How old"], 1, "How many é usado com substantivos contáveis no plural."],
        ["Complete: ___ apples do you need?", ["How much", "How many", "How old", "How long"], 1, "Apples é contável e está no plural."],
        ["Complete: ___ is this T-shirt?", ["How many", "How much", "How often", "How far"], 1, "How much pergunta o preço."],
        ["Qual pergunta significa 'Quantos irmãos você tem?'?", ["How much brothers do you have?", "How many brothers do you have?", "How old brothers do you have?", "How often brothers do you have?"], 1, "How many é usado com brothers."]
      ]),
      6: buildQuestions(8, 6, [
        ["A: Where do you live? B: ___", ["I'm 15.", "I live in Brazil.", "Because I like it.", "At seven."], 1, "Where pergunta o lugar."],
        ["A: Why are you studying? B: ___", ["In my room.", "Because I have a test.", "At six.", "My brother."], 1, "Because apresenta o motivo."],
        ["A: How many books do you have? B: ___", ["Five books.", "At home.", "Very happy.", "Because I read."], 0, "How many pede uma quantidade contável."],
        ["A: When do you play football? B: ___", ["With my friends.", "At the park.", "On Saturdays.", "Because it is fun."], 2, "When pergunta o momento."],
        ["Qual pergunta reúne corretamente a palavra interrogativa e o auxiliar?", ["Where does she live?", "Where do she live?", "Where she does live?", "Where is she lives?"], 0, "She usa does; o verbo principal fica na forma base."]
      ])
    },
    recovery: buildRecovery(8, [
      ["Qual palavra pergunta sobre uma pessoa?", ["What", "Who", "Where", "When"], 1, "Who significa quem."],
      ["Complete: ___ do you go to school? — By bus.", ["How", "Who", "Why", "How many"], 0, "How pergunta como; by bus é de ônibus."],
      ["Qual pergunta busca uma razão?", ["Where are you?", "Why are you here?", "When is it?", "Who is there?"], 1, "Why pergunta o motivo."],
      ["Complete: ___ water do you drink every day?", ["How many", "How much", "How often", "How old"], 1, "Water é incontável, então usamos how much."],
      ["Qual resposta combina com 'When is your English class?'?", ["At 3 p.m.", "At school.", "Because I like it.", "With my friend."], 0, "When pergunta o horário ou momento."]
    ])
  },

  9: {
    days: {
      1: buildQuestions(9, 1, [
        ["Qual é a estrutura do passado contínuo?", ["Have + particípio", "Was/were + verbo-ing", "Did + verbo-ing", "Will + verbo"], 1, "O past continuous usa was ou were + verbo com -ing."],
        ["Complete: I ___ sleeping.", ["were", "was", "am", "did"], 1, "I combina com was."],
        ["Complete: They ___ playing football.", ["was", "is", "were", "are"], 2, "They combina com were."],
        ["Qual frase está no passado contínuo?", ["She studies.", "She studied.", "She was studying.", "She will study."], 2, "Was studying descreve uma ação em andamento no passado."],
        ["Qual é o significado de 'I was reading'?", ["Eu leio.", "Eu estava lendo.", "Eu lerei.", "Eu li todos os dias."], 1, "Was reading indica uma ação que estava acontecendo."]
      ]),
      2: buildQuestions(9, 2, [
        ["Complete: He ___ watching TV at 8 p.m.", ["were", "was", "are", "did"], 1, "He usa was."],
        ["Complete: We ___ studying yesterday evening.", ["was", "were", "is", "am"], 1, "We usa were."],
        ["Qual frase está correta?", ["She were cooking.", "She was cooking.", "She did cooking.", "She was cook."], 1, "She was + verbo-ing."],
        ["Como dizer 'Eles estavam conversando'?", ["They was talking.", "They were talking.", "They are talked.", "They did talking."], 1, "They were talking é a estrutura correta."],
        ["Complete: My parents ___ working.", ["was", "were", "is", "am"], 1, "My parents é plural, então usamos were."]
      ]),
      3: buildQuestions(9, 3, [
        ["Qual expressão indica um horário específico no passado?", ["Right now", "At 9 p.m. yesterday", "Tomorrow morning", "Every day"], 1, "At 9 p.m. yesterday localiza a ação no passado."],
        ["Complete: At midnight, I was ___.", ["sleep", "slept", "sleeping", "sleeps"], 2, "Depois de was, usamos verbo com -ing."],
        ["Qual frase descreve uma ação em andamento às 7 horas?", ["I ate at seven.", "I was eating at seven.", "I eat every day.", "I will eat at seven."], 1, "Was eating mostra que a ação estava acontecendo naquele horário."],
        ["O que significa 'They were playing when I arrived'?", ["Eles jogaram depois que cheguei.", "Eles estavam jogando quando cheguei.", "Eles jogarão quando eu chegar.", "Eles jogam quando chego."], 1, "Were playing indica uma ação em andamento quando outra aconteceu."],
        ["Complete: She was ___ a book.", ["read", "reads", "reading", "readed"], 2, "Reading é a forma -ing de read."]
      ]),
      4: buildQuestions(9, 4, [
        ["Qual palavra é frequentemente usada para introduzir uma ação que interrompe outra?", ["Because", "When", "Always", "Tomorrow"], 1, "When pode ligar a ação em andamento ao acontecimento."],
        ["Complete: I was sleeping when you ___.", ["call", "called", "calling", "calls"], 1, "Called é o passado simples da ação que aconteceu."],
        ["Qual frase está correta?", ["I was walk when it rained.", "I was walking when it rained.", "I walking when it was rain.", "I did walking when it rained."], 1, "Was walking é a ação em andamento; rained é o evento."],
        ["Em 'While I was studying, my brother was playing', quais ações aconteciam ao mesmo tempo?", ["Estudar e brincar.", "Dormir e comer.", "Chegar e sair.", "Comprar e vender."], 0, "As duas estruturas no passado contínuo mostram ações simultâneas."],
        ["Complete: While they ___ dinner, the phone rang.", ["ate", "were eating", "eat", "eats"], 1, "Were eating mostra a ação em andamento."]
      ]),
      5: buildQuestions(9, 5, [
        ["Qual auxiliar usamos para formar a negativa com was?", ["Don't", "Didn't", "Wasn't", "Doesn't"], 2, "Was not pode ser contraído para wasn't."],
        ["Complete: We ___ watching TV.", ["wasn't", "weren't", "didn't", "doesn't"], 1, "Were not é contraído para weren't."],
        ["Qual pergunta está correta?", ["Was you sleeping?", "Were you sleeping?", "Did you sleeping?", "Are you slept?"], 1, "You usa were."],
        ["Complete: ___ she working at 6 p.m.?", ["Were", "Was", "Did", "Does"], 1, "She usa was."],
        ["Como responder 'Were they studying?' afirmativamente?", ["Yes, they were.", "Yes, they was.", "Yes, they did.", "Yes, they are."], 0, "A resposta curta repete were."]
      ]),
      6: buildQuestions(9, 6, [
        ["Leia: 'At 9 p.m., Lucas was doing his homework. His sister was listening to music.' O que Lucas estava fazendo?", ["Dormindo.", "Fazendo a tarefa.", "Assistindo a um filme.", "Jogando futebol."], 1, "Was doing his homework significa estava fazendo a tarefa."],
        ["O que a irmã de Lucas estava fazendo?", ["Ouvindo música.", "Lendo um livro.", "Cozinhando.", "Estudando matemática."], 0, "Was listening to music significa estava ouvindo música."],
        ["Qual frase descreve duas ações simultâneas no passado?", ["I was reading while she was cooking.", "I read tomorrow.", "She cooks every day.", "We will play later."], 0, "As duas ações usam was + verbo-ing."],
        ["Complete: What ___ you doing when I called?", ["was", "were", "did", "are"], 1, "You usa were."],
        ["Qual frase combina passado contínuo e passado simples corretamente?", ["I was running when I fell.", "I ran when I was fall.", "I was run when I falling.", "I running when I fell."], 0, "Was running é a ação em andamento; fell é o acontecimento."]
      ])
    },
    recovery: buildRecovery(9, [
      ["Complete: She ___ sleeping at 10 p.m.", ["were", "was", "did", "are"], 1, "She usa was."],
      ["Qual é a negativa de 'They were playing'?", ["They wasn't playing.", "They weren't playing.", "They didn't playing.", "They don't were playing."], 1, "They usa weren't."],
      ["Qual pergunta está correta?", ["Was he working?", "Were he working?", "Did he working?", "Does he worked?"], 0, "He usa was."],
      ["O que significa 'I was studying when you arrived'?", ["Eu estudo quando você chega.", "Eu estava estudando quando você chegou.", "Eu estudarei quando você chegar.", "Eu estudei antes de você chegar."], 1, "Was studying indica a ação em andamento."],
      ["Complete: While we ___, it started to rain.", ["walk", "were walking", "walked", "are walking"], 1, "Were walking descreve a ação que estava acontecendo."]
    ])
  },

  10: {
    days: {
      1: buildQuestions(10, 1, [
        ["Qual é a estrutura do presente contínuo?", ["Do/does + verbo", "Am/is/are + verbo-ing", "Was/were + verbo", "Will + verbo"], 1, "O present continuous usa am, is ou are + verbo-ing."],
        ["Complete: I ___ studying now.", ["is", "are", "am", "be"], 2, "I combina com am."],
        ["Complete: She is ___ a book.", ["read", "reads", "reading", "readed"], 2, "Depois de is, usamos reading."],
        ["Qual expressão indica uma ação acontecendo agora?", ["Yesterday", "Last week", "Right now", "Every Monday"], 2, "Right now significa agora."],
        ["Qual frase está no presente contínuo?", ["They play games.", "They played games.", "They are playing games.", "They will play games."], 2, "Are playing indica uma ação em andamento."]
      ]),
      2: buildQuestions(10, 2, [
        ["Complete: He ___ watching a movie.", ["am", "are", "is", "be"], 2, "He usa is."],
        ["Complete: We are ___ dinner.", ["cook", "cooks", "cooking", "cooked"], 2, "Cooking é a forma -ing de cook."],
        ["Qual frase está correta?", ["They is running.", "They are running.", "They am running.", "They running are."], 1, "They combina com are."],
        ["Como dizer 'Eu estou aprendendo inglês'?", ["I learning English.", "I am learning English.", "I is learning English.", "I do learning English."], 1, "I am + learning."],
        ["Complete: The baby is ___.", ["sleep", "sleeps", "sleeping", "slept"], 2, "Sleeping é a forma -ing de sleep."]
      ]),
      3: buildQuestions(10, 3, [
        ["Qual é a negativa de 'I am working'?", ["I don't working.", "I am not working.", "I isn't working.", "I not am working."], 1, "A negativa é formada com not depois de am."],
        ["Complete: She ___ not listening.", ["are", "am", "is", "do"], 2, "She is not pode ser contraído para she isn't."],
        ["Qual frase está correta?", ["We aren't studying.", "We isn't studying.", "We don't studying.", "We not studying."], 0, "We usa are not ou aren't."],
        ["Como dizer 'Eles não estão dormindo'?", ["They isn't sleeping.", "They aren't sleeping.", "They don't sleeping.", "They not are sleeping."], 1, "They aren't + sleeping."],
        ["Complete: I am ___ TV right now.", ["watch", "watches", "watching", "watched"], 2, "Watching é a forma -ing de watch."]
      ]),
      4: buildQuestions(10, 4, [
        ["Qual pergunta está correta?", ["Are you studying?", "Do you studying?", "Is you studying?", "You are studying?"], 0, "Are vem antes do sujeito you."],
        ["Complete: ___ he sleeping?", ["Am", "Are", "Is", "Do"], 2, "He usa is."],
        ["Qual pergunta significa 'O que você está fazendo?'?", ["What do you do?", "What are you doing?", "What you are do?", "What is you doing?"], 1, "What are you doing? pergunta sobre a atividade atual."],
        ["Como responder 'Are they coming?' negativamente?", ["No, they don't.", "No, they aren't.", "No, they isn't.", "No, they weren't."], 1, "A resposta curta usa aren't."],
        ["Complete: Why ___ you laughing?", ["is", "am", "are", "do"], 2, "You combina com are."]
      ]),
      5: buildQuestions(10, 5, [
        ["Qual frase descreve um hábito?", ["I am eating now.", "I eat breakfast every day.", "I was eating yesterday.", "I will eat later."], 1, "Every day indica um hábito, então usamos presente simples."],
        ["Qual frase descreve uma ação acontecendo neste momento?", ["She works every day.", "She is working now.", "She worked yesterday.", "She will work tomorrow."], 1, "Is working now indica uma ação em andamento."],
        ["Complete: He usually ___ football, but today he is ___ basketball.", ["plays / playing", "play / plays", "playing / play", "played / plays"], 0, "Usually indica hábito; today he is playing indica ação atual."],
        ["Qual frase diferencia corretamente rotina e ação atual?", ["I study every day, but I am watching TV now.", "I studying every day, but I watch now.", "I am study every day, but I watching now.", "I studied every day, but I am watch now."], 0, "Present simple descreve rotina; present continuous descreve o momento atual."],
        ["Complete: My father ___ coffee every morning, but now he ___ tea.", ["drinks / is drinking", "is drinking / drinks", "drink / drinking", "drank / drink"], 0, "Drinks é hábito; is drinking é ação atual."]
      ]),
      6: buildQuestions(10, 6, [
        ["Leia: 'Emma usually walks to school, but today she is taking the bus.' Como Emma normalmente vai à escola?", ["De ônibus.", "A pé.", "De carro.", "De bicicleta."], 1, "Usually walks indica o hábito: ela vai a pé."],
        ["No texto anterior, como Emma está indo hoje?", ["A pé.", "De trem.", "De ônibus.", "De carro."], 2, "Today she is taking the bus indica que hoje está indo de ônibus."],
        ["Qual frase está correta?", ["I am knowing the answer.", "I know the answer.", "I knowing the answer.", "I does know the answer."], 1, "Know normalmente é um verbo de estado e costuma ser usado no presente simples."],
        ["Complete: Listen! Someone ___ at the door.", ["knocks", "is knocking", "knocked", "knock"], 1, "Listen! indica algo acontecendo agora."],
        ["Qual alternativa explica melhor a diferença entre present simple e present continuous?", ["Os dois sempre indicam passado.", "Present simple indica hábitos e fatos; present continuous indica ações em andamento.", "Present continuous só é usado para o futuro.", "Present simple sempre precisa de -ing."], 1, "Essa é a diferença central entre os dois tempos."]
      ])
    },
    recovery: buildRecovery(10, [
      ["Complete: They ___ playing now.", ["is", "am", "are", "be"], 2, "They usa are."],
      ["Qual frase está correta?", ["She is cook dinner.", "She is cooking dinner.", "She cooking dinner.", "She are cooking dinner."], 1, "Is + verbo-ing forma o presente contínuo."],
      ["Qual frase descreve um hábito?", ["I am reading now.", "I read every night.", "I was reading.", "I will read later."], 1, "Every night indica uma rotina."],
      ["Qual pergunta está correta?", ["What are you doing?", "What do you doing?", "What is you doing?", "What you are doing?"], 0, "Are vem antes de you."],
      ["Complete: He usually ___ to school, but today he is ___ at home.", ["walks / studying", "is walking / studies", "walk / study", "walked / studies"], 0, "Usually walks é hábito; is studying é ação acontecendo hoje."]
    ])
  }
},


// ==========================================
// INGLÊS — SEMANAS 11 A 15
// 5 questões por dia + 5 de recuperação
// ==========================================

  11: {
    days: {
      1: buildQuestions(11, 1, [
        ["Choose the correct sentence to express ability.", ["I can swim.", "I cans swim.", "I can to swim.", "I am can swim."], 0, "Can é um verbo modal. Ele é seguido pelo verbo principal sem 'to' e não recebe -s."],
        ["Complete: She ___ speak three languages.", ["cans", "can", "canning", "is can"], 1, "Can não muda com he, she ou it."],
        ["What does 'I can't drive' mean?", ["Eu não gosto de dirigir.", "Eu não estou dirigindo.", "Eu não consigo dirigir.", "Eu não dirigi."], 2, "Can't é a forma negativa de can e indica incapacidade ou falta de habilidade."],
        ["Choose the correct question.", ["Can you help me?", "Do you can help me?", "Can you to help me?", "Are you can help me?"], 0, "Para perguntas com can, basta colocar can antes do sujeito."],
        ["Complete: My brother can ___ very fast.", ["runs", "running", "to run", "run"], 3, "Depois de can, usamos o verbo na forma base: run."]
      ]),
      2: buildQuestions(11, 2, [
        ["Which sentence expresses inability?", ["He can cook.", "He can't cook.", "He could cook.", "He may cook."], 1, "Can't expressa que alguém não consegue ou não sabe fazer algo."],
        ["Complete: ___ your sister play the piano?", ["Does can", "Is can", "Can", "Do can"], 2, "Can vem diretamente antes do sujeito nas perguntas."],
        ["Choose the correct translation of 'Nós conseguimos terminar'.", ["We can finish.", "We cans finish.", "We can to finish.", "We are can finish."], 0, "We can finish significa que nós conseguimos terminar."],
        ["Which sentence is grammatically correct?", ["She can sings.", "She can singing.", "She can to sing.", "She can sing."], 3, "O verbo após can fica na forma base, sem -s, -ing ou to."],
        ["Complete: I ___ understand this question.", ["can", "cans", "am can", "can to"], 0, "Can é usado para falar de capacidade ou habilidade."]
      ]),
      3: buildQuestions(11, 3, [
        ["Which modal is commonly used to make a more polite request?", ["Must", "Could", "Should", "Have"], 1, "Could pode deixar um pedido mais educado do que can."],
        ["Choose the polite request.", ["Could you open the window, please?", "You could open window?", "Do could you open it?", "Could to open the window?"], 0, "Could you...? é uma estrutura comum para pedidos educados."],
        ["Complete: When I was younger, I ___ run very fast.", ["can", "may", "could", "must"], 2, "Could pode expressar uma habilidade que existia no passado."],
        ["What does 'Could you repeat that?' mean?", ["Você pode repetir isso?", "Você repetiu aquilo?", "Você deveria repetir?", "Você vai repetir aquilo?"], 0, "Could you...? pode ser usado para pedir algo educadamente."],
        ["Choose the correct sentence.", ["He could to swim.", "He could swims.", "He could swimming.", "He could swim."], 3, "Depois de could, o verbo também fica na forma base."]
      ]),
      4: buildQuestions(11, 4, [
        ["Which modal expresses possibility?", ["May", "Must", "Should", "Have to"], 0, "May pode indicar possibilidade, dependendo do contexto."],
        ["Complete: It ___ rain tomorrow.", ["must to", "may", "should to", "cans"], 1, "May indica que algo talvez aconteça."],
        ["What does 'She might be at home' mean?", ["Ela está definitivamente em casa.", "Ela precisa estar em casa.", "Ela talvez esteja em casa.", "Ela esteve em casa."], 2, "Might expressa possibilidade, geralmente com um grau de certeza menor."],
        ["Choose the correct sentence.", ["They might come later.", "They might comes later.", "They might to come later.", "They are might come later."], 0, "Might é seguido pelo verbo na forma base."],
        ["Complete: I ___ visit my cousin this weekend, but I'm not sure.", ["must", "have to", "should", "might"], 3, "Might combina com situações incertas ou possíveis."]
      ]),
      5: buildQuestions(11, 5, [
        ["Which sentence asks for permission?", ["May I come in?", "I may came in.", "May I to come in?", "Do may I come in?"], 0, "May I...? é uma maneira educada de pedir permissão."],
        ["Complete: ___ I use your phone, please?", ["Must", "May", "Should", "Have"], 1, "May pode ser usado para pedir autorização."],
        ["Which sentence expresses a possibility, not a certainty?", ["He is here.", "He must be here.", "He might be here.", "He was here."], 2, "Might indica que existe a possibilidade, mas não há certeza."],
        ["Choose the correct sentence.", ["May she to leave?", "Does may she leave?", "May she leaves?", "May she leave?"], 3, "Em perguntas com may, o modal vem antes do sujeito."],
        ["What is the difference between 'can' and 'may' in a permission request?", ["May is often more formal or polite.", "Can is always past tense.", "May means inability.", "There is no possible difference."], 0, "Can também pede permissão, mas may costuma soar mais formal."]
      ]),
      6: buildQuestions(11, 6, [
        ["Complete: I ___ speak English, but I still need practice.", ["might", "can", "may", "could to"], 1, "Can expressa uma habilidade que a pessoa possui."],
        ["Choose the most polite request.", ["Give me your notebook.", "You give me your notebook?", "Could you lend me your notebook, please?", "Must you lend notebook."], 2, "Could you...? com please é uma forma educada de pedir um favor."],
        ["Complete: When he was five, he ___ read simple books.", ["can", "may", "must", "could"], 3, "Could expressa habilidade no passado."],
        ["Which sentence expresses uncertainty?", ["It might snow tonight.", "It snows every winter.", "It is snowing now.", "It snowed yesterday."], 0, "Might indica que algo talvez aconteça."],
        ["Choose the correct sentence.", ["She may to join us.", "She may joins us.", "She may join us.", "She does may join us."], 2, "May é seguido pelo verbo na forma base."]
      ])
    },
    recovery: buildRecovery(11, [
      ["Complete: ___ you help me with this exercise?", ["Do", "Can", "Are", "Have"], 1, "Can you...? é uma estrutura correta para pedir ajuda."],
      ["Choose the correct sentence about past ability.", ["I could swim when I was six.", "I can swam when I was six.", "I could to swim when I was six.", "I could swimming when I was six."], 0, "Could é usado para falar de habilidades no passado."],
      ["What does 'You might be right' mean?", ["Você está sempre certo.", "Você precisa estar certo.", "Você talvez esteja certo.", "Você estava certo."], 2, "Might expressa possibilidade."],
      ["Choose the correct permission question.", ["May I to sit here?", "Do may I sit here?", "May I sitting here?", "May I sit here?"], 3, "May I...? é uma forma correta de pedir permissão."],
      ["Complete: He ___ play the guitar very well.", ["can", "cans", "can to", "is can"], 0, "Can não recebe -s e é seguido pelo verbo na forma base."]
    ])
  },

  12: {
    days: {
      1: buildQuestions(12, 1, [
        ["What does 'must' usually express?", ["Possibility", "Obligation or strong necessity", "Past ability", "Comparison"], 1, "Must expressa obrigação forte ou necessidade."],
        ["Complete: You ___ wear a seat belt.", ["must", "must to", "musts", "are must"], 0, "Must é seguido pelo verbo na forma base, sem to."],
        ["Choose the correct sentence.", ["She must studies.", "She must to study.", "She must study.", "She is must study."], 2, "Depois de must, o verbo fica na forma base."],
        ["What does 'I must finish my homework' mean?", ["Eu talvez termine minha tarefa.", "Eu terminei minha tarefa.", "Eu gosto da minha tarefa.", "Eu preciso terminar minha tarefa."], 3, "Must indica uma obrigação ou necessidade."],
        ["Complete: Students ___ follow the school rules.", ["must", "must to", "musts", "are must"], 0, "Must não varia de acordo com o sujeito."]
      ]),
      2: buildQuestions(12, 2, [
        ["Choose the correct negative form.", ["You don't must go.", "You mustn't go.", "You mustn't to go.", "You aren't must go."], 1, "Mustn't expressa proibição: algo que não deve ser feito."],
        ["What does 'You mustn't use your phone here' mean?", ["Você não precisa usar o celular.", "Você pode usar o celular.", "Você não pode usar o celular aqui.", "Você usou o celular."], 2, "Mustn't indica que uma ação é proibida."],
        ["Complete: Visitors ___ touch the paintings.", ["must", "should", "mustn't", "can"], 2, "Mustn't é usado para proibir uma ação."],
        ["Which sentence expresses a rule?", ["You might sit here.", "You could sit here.", "You should sit here.", "You must wear a helmet."], 3, "Must pode expressar regras e obrigações."],
        ["Choose the correct sentence.", ["He mustn't drive so fast.", "He mustn't drives so fast.", "He doesn't must drive so fast.", "He mustn't to drive so fast."], 0, "Mustn't é seguido pelo verbo na forma base."]
      ]),
      3: buildQuestions(12, 3, [
        ["Which expression means 'ter que'?", ["Might", "Have to", "Could", "May"], 1, "Have to expressa obrigação ou necessidade."],
        ["Complete: I ___ wake up early tomorrow.", ["has to", "have to", "having to", "am have to"], 1, "Com I, usamos have to."],
        ["Complete: She ___ wear a uniform at work.", ["have to", "having to", "has to", "must to"], 2, "Com he, she e it, usamos has to."],
        ["Choose the correct sentence.", ["They has to study.", "They have to studies.", "They are have to study.", "They have to study."], 3, "Com they, usamos have to + verbo base."],
        ["What does 'He has to leave now' mean?", ["Ele tem que sair agora.", "Ele saiu ontem.", "Ele talvez saia agora.", "Ele deveria ter saído."], 0, "Has to indica uma obrigação para he."]
      ]),
      4: buildQuestions(12, 4, [
        ["Choose the correct negative form of 'have to'.", ["I haven't to work.", "I don't have to work.", "I doesn't have to work.", "I not have to work."], 1, "No presente, usamos don't have to com I, you, we e they."],
        ["Complete: She ___ have to cook today.", ["don't", "isn't", "doesn't", "not"], 2, "Com she, a forma negativa é doesn't have to."],
        ["What does 'You don't have to come early' mean?", ["Você está proibido de chegar cedo.", "Você precisa chegar cedo.", "Você chegou cedo.", "Você não precisa chegar cedo."], 3, "Don't have to indica ausência de obrigação, não proibição."],
        ["Which sentence means that something is prohibited?", ["You mustn't park here.", "You don't have to park here.", "You might park here.", "You should park here."], 0, "Mustn't significa que não é permitido. Don't have to significa que não é necessário."],
        ["Complete: We ___ have to buy food today.", ["doesn't", "don't", "aren't", "hasn't"], 1, "Com we, usamos don't have to."]
      ]),
      5: buildQuestions(12, 5, [
        ["What does 'should' usually express?", ["A past event", "A strong prohibition", "Advice or recommendation", "A possibility in the past"], 2, "Should é usado principalmente para dar conselhos e recomendações."],
        ["Complete: You ___ drink more water.", ["should", "should to", "shoulds", "are should"], 0, "Should é seguido pelo verbo na forma base."],
        ["Choose the best advice for someone who is tired.", ["You mustn't sleep.", "You should get some rest.", "You might tired.", "You have to being awake."], 1, "Should get some rest significa que a pessoa deveria descansar."],
        ["What does 'You shouldn't worry so much' mean?", ["Você não pode se preocupar.", "Você não precisa se preocupar.", "Você deveria se preocupar.", "Você não deveria se preocupar tanto."], 3, "Shouldn't é a forma negativa usada para aconselhar contra algo."],
        ["Choose the correct sentence.", ["He should studies more.", "He should to study more.", "He should study more.", "He is should study more."], 2, "O verbo depois de should permanece na forma base."]
      ]),
      6: buildQuestions(12, 6, [
        ["Which sentence gives advice?", ["You should talk to your teacher.", "You mustn't talk to your teacher.", "You talked to your teacher.", "You might talk yesterday."], 0, "Should talk é uma recomendação."],
        ["Complete: You ___ eat so much candy.", ["should", "shouldn't", "has to", "must to"], 1, "Shouldn't é usado para recomendar que alguém não faça algo."],
        ["Which sentence expresses a legal or formal obligation?", ["You might wear a uniform.", "You could wear a uniform.", "You have to wear a uniform.", "You should wearing a uniform."], 2, "Have to expressa uma obrigação ou regra."],
        ["Choose the correct meaning: 'You don't have to stay'.", ["Você não pode ficar.", "Você deve ficar.", "Você ficou.", "Você não precisa ficar."], 3, "Don't have to significa que ficar não é obrigatório."],
        ["Choose the correct sentence.", ["We must respect other people.", "We must to respect other people.", "We must respects other people.", "We are must respect other people."], 0, "Must + verbo na forma base é a construção correta."]
      ])
    },
    recovery: buildRecovery(12, [
      ["Complete: You ___ see a doctor if you feel sick.", ["should", "should to", "shoulds", "are should"], 0, "Should é usado para dar conselhos."],
      ["Which sentence expresses prohibition?", ["You don't have to enter.", "You mustn't enter.", "You should enter.", "You might enter."], 1, "Mustn't indica proibição."],
      ["Complete: My father ___ work on Saturdays.", ["have to", "having to", "has to", "musts to"], 2, "Com my father, usamos has to."],
      ["What does 'We don't have to hurry' mean?", ["Não podemos correr.", "Precisamos correr.", "Corremos ontem.", "Não precisamos ter pressa."], 3, "Don't have to indica que não existe obrigação."],
      ["Choose the correct sentence.", ["You must follow the instructions.", "You must to follow the instructions.", "You must follows the instructions.", "You are must follow the instructions."], 0, "Must é seguido pelo verbo na forma base."]
    ])
  },

  13: {
    days: {
      1: buildQuestions(13, 1, [
        ["What is the comparative form of 'small'?", ["Smallest", "Smaller", "More small", "The small"], 1, "Adjetivos curtos geralmente recebem -er no comparativo."],
        ["Complete: My house is ___ than yours.", ["big", "biggest", "bigger", "more big"], 2, "Big dobra o g antes de receber -er: bigger."],
        ["Choose the correct sentence.", ["This car is more fast than that one.", "This car is fastest than that one.", "This car is fast than that one.", "This car is faster than that one."], 3, "Fast é um adjetivo curto: faster than."],
        ["What does 'older than' mean?", ["Mais velho que", "O mais velho", "Tão velho quanto", "Muito velho"], 0, "Older than é a forma comparativa de old."],
        ["Complete: A train is usually ___ than a bicycle.", ["slow", "faster", "fastest", "more fast"], 1, "Faster than compara a velocidade de duas coisas."]
      ]),
      2: buildQuestions(13, 2, [
        ["What is the comparative form of 'beautiful'?", ["Beautifuler", "Beautifullest", "More beautiful", "Most beautiful"], 2, "Adjetivos longos geralmente usam more no comparativo."],
        ["Complete: This book is ___ interesting than that one.", ["more", "most", "interestinger", "the most"], 0, "More interesting significa mais interessante."],
        ["Choose the correct comparison.", ["My bag is expensiver than yours.", "My bag is more expensive than yours.", "My bag is most expensive than yours.", "My bag is expensive than yours."], 1, "Expensive é longo e usa more no comparativo."],
        ["What does 'more difficult than' mean?", ["O mais difícil", "Tão difícil quanto", "Menos difícil que", "Mais difícil que"], 3, "More difficult than compara duas coisas."],
        ["Complete: English is ___ difficult than I expected.", ["more", "most", "difficultest", "the"], 0, "More difficult é a forma comparativa correta."]
      ]),
      3: buildQuestions(13, 3, [
        ["What is the superlative form of 'tall'?", ["Taller", "The tallest", "Most tall", "The more tall"], 1, "Adjetivos curtos usam the + adjetivo + -est."],
        ["Complete: Mount Everest is ___ highest mountain in the world.", ["a", "an", "the", "more"], 2, "O superlativo normalmente usa the antes do adjetivo."],
        ["Choose the correct superlative.", ["The most small", "The more small", "The smaller", "The smallest"], 3, "Smallest é o superlativo de small."],
        ["What does 'the fastest' mean?", ["O mais rápido", "Mais rápido que", "Muito rápido", "Tão rápido quanto"], 0, "The fastest é o superlativo de fast."],
        ["Complete: She is ___ student in the class.", ["the taller", "the tallest", "tallest than", "more tall"], 1, "The tallest indica que ela é a mais alta do grupo."]
      ]),
      4: buildQuestions(13, 4, [
        ["What is the superlative form of 'interesting'?", ["Interestingest", "More interesting", "The most interesting", "The interestinger"], 2, "Adjetivos longos usam the most no superlativo."],
        ["Complete: This is ___ movie I've ever watched.", ["the most exciting", "more exciting", "excitinger", "most exciting than"], 0, "The most exciting é o superlativo de exciting."],
        ["Choose the correct sentence.", ["It is the expensivest hotel.", "It is the most expensive hotel.", "It is more expensive hotel.", "It is the expensiver hotel."], 1, "Expensive é um adjetivo longo e usa the most."],
        ["What does 'the most popular' mean?", ["Mais popular que", "Pouco popular", "Tão popular quanto", "O mais popular"], 3, "The most popular expressa o grau máximo dentro de um grupo."],
        ["Complete: This is ___ difficult question on the test.", ["the most", "more", "most than", "difficulter"], 0, "The most difficult é o superlativo correto."]
      ]),
      5: buildQuestions(13, 5, [
        ["What is the comparative form of 'good'?", ["Gooder", "Better", "Best", "More good"], 1, "Good é irregular: seu comparativo é better."],
        ["What is the superlative form of 'bad'?", ["Badder", "More bad", "The worst", "The worse"], 2, "Bad é irregular: o superlativo é the worst."],
        ["Complete: Today is ___ than yesterday.", ["good", "best", "more good", "better"], 3, "Better é o comparativo irregular de good."],
        ["Complete: That was ___ day of my life.", ["the best", "better", "goodest", "the good"], 0, "The best é o superlativo irregular de good."],
        ["Choose the correct comparison.", ["This result is badder than before.", "This result is worse than before.", "This result is worst than before.", "This result is more worse than before."], 1, "Worse é o comparativo irregular de bad."]
      ]),
      6: buildQuestions(13, 6, [
        ["Complete: My phone is ___ than yours, but yours is newer.", ["expensive", "most expensive", "more expensive", "the most expensive"], 2, "More expensive compara o preço de dois celulares."],
        ["Choose the correct sentence.", ["She is the more intelligent person here.", "She is intelligentest person here.", "She is more intelligent person here.", "She is the most intelligent person here."], 3, "The most intelligent é o superlativo de intelligent."],
        ["Complete: This street is ___ than the main avenue.", ["narrower", "narrowest", "the most narrow", "more narrowest"], 0, "Narrow é curto e forma o comparativo com -er."],
        ["Which sentence compares two places?", ["Paris is the most beautiful city.", "This park is quieter than that park.", "This is the best place.", "It is very beautiful."], 1, "Quieter than compara diretamente dois parques."],
        ["Choose the correct sentence.", ["My room is the clean than yours.", "My room is more cleanest than yours.", "My room is cleaner than yours.", "My room is cleanest than yours."], 2, "Cleaner than é o comparativo de clean."]
      ])
    },
    recovery: buildRecovery(13, [
      ["Complete: A lion is ___ than a cat.", ["big", "bigger", "biggest", "the biggest"], 1, "Bigger é o comparativo de big."],
      ["Choose the correct superlative.", ["The more beautiful", "Beautifuler", "The most beautiful", "More beautiful than"], 2, "The most beautiful é o superlativo de beautiful."],
      ["What is the comparative of 'bad'?", ["Badder", "The worst", "More bad", "Worse"], 3, "Worse é o comparativo irregular de bad."],
      ["Complete: This is ___ restaurant in town.", ["the best", "better", "gooder", "the better"], 0, "The best é o superlativo irregular de good."],
      ["Choose the correct sentence.", ["This test is difficulter than the last one.", "This test is more difficult than the last one.", "This test is most difficult than the last one.", "This test is the difficult than the last one."], 1, "More difficult than é a forma comparativa correta."]
    ])
  },

  14: {
    days: {
      1: buildQuestions(14, 1, [
        ["Which adjective describes someone's appearance?", ["Friendly", "Honest", "Tall", "Generous"], 2, "Tall descreve uma característica física: altura."],
        ["What does 'curly hair' mean?", ["Cabelo cacheado", "Cabelo curto", "Cabelo loiro", "Cabelo liso"], 0, "Curly hair significa cabelo cacheado."],
        ["Complete: My grandfather has ___ hair.", ["young", "gray", "friendly", "kind"], 1, "Gray hair significa cabelo grisalho ou cinza."],
        ["Which word describes someone's personality?", ["Blue", "Short", "Brown", "Generous"], 3, "Generous descreve uma característica de personalidade: generoso."],
        ["What does 'slim' describe?", ["A person's build", "A person's age", "A person's mood", "A person's job"], 0, "Slim pode descrever a constituição física de uma pessoa."]
      ]),
      2: buildQuestions(14, 2, [
        ["What does 'kind' mean when describing a person?", ["Alto", "Gentil", "Cansado", "Barulhento"], 1, "Kind descreve alguém gentil ou bondoso."],
        ["Choose the adjective for someone who tells the truth.", ["Lazy", "Shy", "Honest", "Rude"], 2, "Honest significa honesto."],
        ["Complete: He always helps people. He is very ___.", ["selfish", "rude", "lazy", "helpful"], 3, "Helpful descreve alguém prestativo, que ajuda os outros."],
        ["What does 'shy' mean?", ["Tímido", "Corajoso", "Engraçado", "Impaciente"], 0, "Shy significa tímido."],
        ["Which word describes someone who enjoys meeting people?", ["Lazy", "Outgoing", "Boring", "Angry"], 1, "Outgoing descreve uma pessoa sociável e extrovertida."]
      ]),
      3: buildQuestions(14, 3, [
        ["What does 'tired' mean?", ["Animado", "Interessante", "Cansado", "Entediante"], 2, "Tired descreve como alguém se sente: cansado."],
        ["Complete: I'm ___ because I slept only four hours.", ["exciting", "boring", "interesting", "tired"], 3, "Tired é o adjetivo que descreve o sentimento de cansaço."],
        ["What does 'excited' mean?", ["Animado ou empolgado", "Entediante", "Assustador", "Sonolento"], 0, "Excited descreve alguém que está empolgado ou animado."],
        ["Choose the correct sentence.", ["She is exciting about the trip.", "She is excited about the trip.", "She is excite about the trip.", "She is excitement about the trip."], 1, "Excited descreve como a pessoa se sente."],
        ["Complete: After the long walk, we were ___.", ["exciting", "boring", "exhausted", "interesting"], 2, "Exhausted significa extremamente cansado."]
      ]),
      4: buildQuestions(14, 4, [
        ["What is the difference between 'bored' and 'boring'?", ["They mean exactly the same thing.", "Bored describes a thing; boring describes a person.", "Bored is a verb.", "Bored describes a feeling; boring describes something that causes it."], 3, "Bored é como alguém se sente; boring é algo que provoca tédio."],
        ["Complete: The movie was so ___. I almost fell asleep.", ["boring", "bored", "bore", "boredom"], 0, "Boring descreve o filme, que provoca tédio."],
        ["Complete: I am ___ because this class is too long.", ["boring", "bored", "bore", "boredom"], 1, "Bored descreve como a pessoa se sente."],
        ["Choose the correct sentence.", ["The lesson was bored.", "I was boring during the lesson.", "The lesson was boring.", "I was bore during the lesson."], 2, "A aula é entediante: boring. A pessoa fica entediada: bored."],
        ["Which sentence is correct?", ["The game is interested.", "I am interesting in music.", "I am interest in music.", "I am interested in music."], 3, "Interested descreve o sentimento de interesse de uma pessoa."]
      ]),
      5: buildQuestions(14, 5, [
        ["Complete: The news was surprising. I was ___.", ["surprised", "surprising", "surprise", "surprises"], 0, "Surprised descreve a reação da pessoa."],
        ["Choose the correct adjective: The horror movie was ___.", ["frightened", "frightening", "frighten", "frightens"], 1, "Frightening descreve algo que causa medo."],
        ["Complete: The children were ___ by the loud noise.", ["frightening", "frighten", "frightened", "frightens"], 2, "Frightened descreve como as crianças se sentiram."],
        ["What does 'confused' mean?", ["Confuso", "Confundindo", "Confusão", "Confundir"], 0, "Confused descreve alguém que não entendeu algo."],
        ["Choose the correct sentence.", ["The instructions were confused.", "I was confusing by the instructions.", "The instructions were confuse.", "I was confused by the instructions."], 3, "A pessoa fica confused; as instruções podem ser confusing."]
      ]),
      6: buildQuestions(14, 6, [
        ["Which word describes a feeling?", ["Interesting", "Interested", "Boring", "Frightening"], 1, "Interested descreve o sentimento de interesse."],
        ["Complete: My little brother is very ___. He never stops talking.", ["quiet", "serious", "energetic", "lazy"], 2, "Energetic descreve alguém cheio de energia."],
        ["Choose the correct sentence.", ["The book was excited.", "I was exciting by the book.", "The book was excite.", "I was excited by the book."], 3, "Excited descreve a reação de quem leu o livro."],
        ["What does 'reliable' mean?", ["Confiável", "Impaciente", "Tímido", "Preguiçoso"], 0, "Reliable descreve alguém em quem se pode confiar."],
        ["Complete: She felt ___ after hearing the good news.", ["surprising", "surprised", "surprise", "surprises"], 1, "Surprised descreve a emoção sentida por ela."]
      ])
    },
    recovery: buildRecovery(14, [
      ["Choose the correct adjective: The story was ___.", ["bored", "bore", "boring", "boredom"], 2, "Boring descreve algo que causa tédio."],
      ["Complete: I am ___ in learning languages.", ["interesting", "interested", "interest", "interests"], 1, "Interested é usado para descrever o interesse de uma pessoa."],
      ["What does 'honest' mean?", ["Preguiçoso", "Tímido", "Engraçado", "Honesto"], 3, "Honest significa honesto."],
      ["Complete: We were ___ after the long journey.", ["tired", "tiring", "tire", "tires"], 0, "Tired descreve o sentimento de cansaço."],
      ["Choose the correct sentence.", ["The children were exciting.", "The children were excited.", "The children was excited.", "The children were excite."], 1, "Excited descreve como as crianças estavam se sentindo."]
    ])
  },

  15: {
    days: {
      1: buildQuestions(15, 1, [
        ["Choose the best way to introduce yourself.", ["I name Caio.", "My name Caio.", "My name is Caio.", "I am name Caio."], 2, "My name is... é uma estrutura natural para dizer seu nome."],
        ["Complete: Hello! I'm Alex. ___ are you?", ["What", "Who", "Where", "How"], 3, "How are you? é uma pergunta comum para saber como alguém está."],
        ["Choose the correct answer to 'Where are you from?'.", ["I'm from Brazil.", "I'm Brazil.", "I from Brazil.", "I am from is Brazil."], 0, "I'm from Brazil significa sou do Brasil."],
        ["Complete: I ___ a student and I ___ English.", ["am / study", "is / studies", "are / studying", "be / studies"], 0, "I am é a forma correta de to be com I; study expressa uma atividade habitual."],
        ["Which question asks about someone's job or occupation?", ["Where do you live?", "What do you do?", "How old are you?", "What time is it?"], 1, "What do you do? é uma pergunta comum sobre profissão ou ocupação."]
      ]),
      2: buildQuestions(15, 2, [
        ["Complete: What time ___ you wake up?", ["does", "are", "do", "is"], 2, "Do é o auxiliar usado em perguntas no presente simples com you."],
        ["Choose the correct answer: 'Do you like music?'", ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], 0, "Respostas curtas com do usam Yes, I do ou No, I don't."],
        ["Complete: She ___ to school every day.", ["go", "going", "is go", "goes"], 3, "Com she no presente simples, o verbo go vira goes."],
        ["Choose the correct question about hobbies.", ["What you like doing?", "What do you like doing?", "What does you like doing?", "What are you like doing?"], 1, "What do you like doing? pergunta sobre atividades de que a pessoa gosta."],
        ["Complete: I usually ___ football after school.", ["plays", "playing", "play", "am play"], 2, "Com I, o verbo no presente simples fica na forma base."]
      ]),
      3: buildQuestions(15, 3, [
        ["Choose the correct sentence about yesterday.", ["I visit my friend yesterday.", "I visited my friend yesterday.", "I visits my friend yesterday.", "I visiting my friend yesterday."], 1, "Visited é o passado regular de visit."],
        ["Complete: ___ you watch the movie last night?", ["Do", "Does", "Are", "Did"], 3, "Did é usado para formar perguntas no passado simples."],
        ["Choose the correct negative sentence.", ["I didn't went to school.", "I don't went to school.", "I didn't go to school.", "I wasn't go to school."], 2, "Depois de didn't, usamos o verbo na forma base: go."],
        ["What does 'I saw a bird' mean?", ["Eu vejo um pássaro.", "Eu vou ver um pássaro.", "Eu tenho um pássaro.", "Eu vi um pássaro."], 3, "Saw é o passado irregular de see."],
        ["Complete: Last weekend, we ___ a new game.", ["played", "play", "plays", "playing"], 0, "Played é o passado regular de play."]
      ]),
      4: buildQuestions(15, 4, [
        ["Complete: Tomorrow, I ___ visit my grandparents.", ["visited", "am going to", "visiting", "did"], 1, "Am going to expressa um plano ou intenção futura."],
        ["Choose the correct sentence with will.", ["She will goes home.", "She will to go home.", "She will go home.", "She is will go home."], 2, "Will é seguido pelo verbo na forma base."],
        ["What does 'I'm going to study tonight' mean?", ["Estou estudando agora.", "Estudei ontem à noite.", "Talvez eu estude.", "Vou estudar hoje à noite."], 3, "Going to indica um plano futuro."],
        ["Complete: I think it ___ rain later.", ["will", "did", "was", "has"], 0, "Will pode ser usado para previsões."],
        ["Choose the correct question about future plans.", ["What you are going to do?", "What are you going to do?", "What do you going to do?", "What did you going to do?"], 1, "Are you going to...? é a estrutura correta para perguntar sobre planos."]
      ]),
      5: buildQuestions(15, 5, [
        ["Choose the correct sentence expressing an opinion.", ["I think this game is interesting.", "I think this game are interesting.", "I thinking this game interesting.", "I think this game be interesting."], 0, "I think... é uma estrutura comum para expressar opinião."],
        ["Complete: I like football ___ I don't like basketball.", ["because", "so", "but", "or"], 2, "But conecta ideias contrastantes."],
        ["Choose the correct question to ask about someone's preference.", ["What do you prefer?", "What you prefer?", "What are you prefer?", "What does you prefer?"], 0, "What do you prefer? pergunta qual opção alguém prefere."],
        ["Complete: I stayed home ___ I was tired.", ["but", "because", "or", "so"], 1, "Because introduz a razão de uma ação."],
        ["What does 'I agree with you' mean?", ["Eu discordo de você.", "Eu não entendo você.", "Eu concordo com você.", "Eu estou esperando você."], 2, "I agree with you significa concordo com você."]
      ]),
      6: buildQuestions(15, 6, [
        ["Choose the best response: 'What did you do yesterday?'", ["I go to the park.", "I am going to the park.", "I will go to the park.", "I went to the park."], 3, "Went é o passado irregular de go."],
        ["Complete: 'Do you have any plans for tomorrow?' — 'Yes, I ___ visit my aunt.'", ["am going to", "did", "was", "have"], 0, "Am going to expressa um plano futuro."],
        ["Choose the correct sentence about a routine.", ["He go to school every day.", "He goes to school every day.", "He going to school every day.", "He is go to school every day."], 1, "Com he no presente simples, usamos goes."],
        ["Which question asks for someone's opinion?", ["Where do you live?", "When did you arrive?", "What do you think about this movie?", "How old are you?"], 2, "What do you think...? pergunta a opinião de alguém."],
        ["Complete: I ___ English every day, and yesterday I ___ a short story.", ["study / read", "studies / reads", "studying / reading", "study / readed"], 0, "Study está no presente simples; read tem a mesma grafia no passado, mas pronúncia diferente."]
      ])
    },
    recovery: buildRecovery(15, [
      ["Choose the correct introduction.", ["I am name Ana.", "My name is Ana.", "My name Ana.", "I name is Ana."], 1, "My name is... é a forma correta de apresentar seu nome."],
      ["Complete: ___ you like video games?", ["Does", "Are", "Do", "Did"], 2, "Do é usado com you para perguntas no presente simples."],
      ["Choose the correct past sentence.", ["I go yesterday.", "I goed yesterday.", "I going yesterday.", "I went yesterday."], 3, "Went é o passado irregular de go."],
      ["Complete: Next weekend, we ___ travel.", ["are going to", "did", "was", "does"], 0, "Are going to expressa planos futuros com we."],
      ["Choose the correct sentence.", ["She don't like coffee.", "She doesn't like coffee.", "She doesn't likes coffee.", "She not like coffee."], 1, "Com she, usamos doesn't + verbo na forma base."]
    ])
},


  // ==========================================
  // SEMANA 16 — TESTE DE BASE
  // Comunicação prática: apresentação, rotina,
  // gostos, passado, futuro e compreensão.
  // ==========================================
  16: {
    days: {
      1: buildQuestions(16, 1, [
        ["You meet someone for the first time. What do you say?", ["My name is Lucas. Nice to meet you.", "I name Lucas.", "I am Lucas name.", "Me Lucas."], 0, "My name is... e Nice to meet you são expressões naturais para se apresentar."],
        ["Complete: Where ___ you from?", ["is", "are", "do", "does"], 1, "Where are you from? pergunta de onde alguém é. Com you, usamos are."],
        ["Choose the correct answer: 'How old are you?'", ["I am Brazil.", "I have 15 years.", "I'm fifteen years old.", "I fifteen."], 2, "Em inglês, idade é expressa com o verbo to be: I'm fifteen years old."],
        ["Someone asks: 'What do you do?' What are they asking?", ["Where do you live?", "What do you like?", "How old are you?", "What is your job or occupation?"], 3, "What do you do? é uma maneira comum de perguntar sobre profissão ou ocupação."],
        ["Complete: I ___ a student, and I ___ English.", ["am / study", "is / studies", "are / studies", "be / studying"], 0, "I am é a forma correta do verbo to be; study expressa uma atividade habitual."]
      ]),
      2: buildQuestions(16, 2, [
        ["Complete: She ___ to school every morning.", ["go", "goes", "going", "is go"], 1, "No Present Simple, he, she e it recebem -s ou -es no verbo."],
        ["Choose the correct question about habits.", ["Are you play football?", "Does you play football?", "Do you play football?", "You do play football?"], 2, "Do you...? é a estrutura correta para perguntar sobre hábitos com you."],
        ["Complete: I usually ___ breakfast at 7 AM.", ["has", "having", "am have", "have"], 3, "Com I, usamos have no Present Simple."],
        ["Someone asks: 'What do you do in your free time?' Choose the best answer.", ["I usually play video games or read.", "Yesterday at home.", "I am fifteen.", "My name is Ana."], 0, "A pergunta quer saber o que você costuma fazer no tempo livre."],
        ["Choose the correct negative sentence.", ["He don't like coffee.", "He doesn't like coffee.", "He doesn't likes coffee.", "He not likes coffee."], 1, "Com he, usamos doesn't + verbo na forma base."]
      ]),
      3: buildQuestions(16, 3, [
        ["Complete: ___ you watch the movie yesterday?", ["Do", "Does", "Did", "Are"], 2, "Did é o auxiliar usado em perguntas no passado simples."],
        ["Choose the correct past sentence.", ["I go to the park yesterday.", "I goed to the park yesterday.", "I going to the park yesterday.", "I went to the park yesterday."], 3, "Went é o passado irregular de go."],
        ["Complete: She didn't ___ the message.", ["see", "saw", "seen", "seeing"], 0, "Depois de didn't, usamos o verbo na forma base: see."],
        ["What does 'We had dinner at home last night' mean?", ["Vamos jantar em casa hoje.", "Jantamos em casa ontem à noite.", "Estamos jantando em casa.", "Nunca jantamos em casa."], 1, "Had é o passado de have; last night indica ontem à noite."],
        ["Choose the correct question.", ["Did she went home?", "Does she went home?", "Did she go home?", "Was she go home?"], 2, "Em perguntas com did, o verbo principal fica na forma base."]
      ]),
      4: buildQuestions(16, 4, [
        ["Complete: I ___ going to visit my grandmother tomorrow.", ["is", "are", "be", "am"], 3, "Com I, usamos am going to para falar de planos futuros."],
        ["Choose the correct sentence with will.", ["I will help you.", "I will helps you.", "I will to help you.", "I am will help you."], 0, "Will é seguido pelo verbo na forma base."],
        ["Your friend asks: 'What are you going to do this weekend?' Choose the best answer.", ["I went yesterday.", "I'm going to visit my cousins.", "I visit every day yesterday.", "I am fifteen years old."], 1, "A pergunta é sobre planos para o fim de semana."],
        ["Complete: I think our team ___ win the game.", ["is", "does", "will", "did"], 2, "Will pode expressar previsões e opiniões sobre o futuro."],
        ["Which sentence describes a planned action?", ["I was sleeping.", "I slept yesterday.", "I sleep every day.", "I'm going to study tonight."], 3, "Going to é usado para planos e intenções."]
      ]),
      5: buildQuestions(16, 5, [
        ["Choose the correct question to ask about preferences.", ["What kind of music do you like?", "What music you like?", "What are you like music?", "What does you like music?"], 0, "What kind of music do you like? é uma pergunta natural sobre preferências."],
        ["Complete: I like football, ___ I don't like basketball.", ["because", "but", "so", "or"], 1, "But conecta duas ideias contrastantes."],
        ["Someone says: 'I'm exhausted.' What does it mean?", ["Estou animado.", "Estou com fome.", "Estou extremamente cansado.", "Estou entediado."], 2, "Exhausted significa muito cansado."],
        ["Choose the best response: 'Would you like some water?'", ["Yesterday, please.", "I am water.", "Where is water?", "Yes, please. Thank you."], 3, "Yes, please. Thank you. é uma resposta educada para uma oferta."],
        ["Complete: I stayed home ___ I was feeling sick.", ["because", "but", "or", "although"], 0, "Because introduz a razão pela qual alguém ficou em casa."]
      ]),
      6: buildQuestions(16, 6, [
        ["Read: 'Tom usually walks to school, but today he is taking the bus because it is raining.' Why is Tom taking the bus today?", ["He always takes the bus.", "Because it is raining.", "Because he doesn't like school.", "Because he is walking."], 1, "O texto informa que hoje ele pega o ônibus porque está chovendo."],
        ["Choose the correct instruction.", ["You must to turn left.", "Turned left, please.", "Turn left at the next street.", "You turning left."], 2, "Turn left at the next street é uma instrução correta para virar à esquerda."],
        ["Complete: 'Have you ever visited another country?' — 'No, I ___.'", ["haven't never", "didn't", "am not", "haven't"], 3, "A resposta curta negativa no Present Perfect é No, I haven't."],
        ["Someone asks: 'Could you help me, please?' Choose the most natural response.", ["Of course! What do you need?", "I am fifteen years old.", "Yesterday I could.", "No, I am help."], 0, "Of course! What do you need? é uma resposta natural e educada a um pedido."],
        ["Read: 'Anna has studied English for three years. She is going to travel next month.' Which statement is correct?", ["Anna started studying next month.", "Anna has studied English for three years and plans to travel next month.", "Anna traveled three years ago.", "Anna never studies English."], 1, "O texto combina uma duração que começou no passado com um plano futuro."]
      ])
    },
    recovery: buildRecovery(16, [
      ["Choose the correct introduction.", ["I name is Peter.", "Me Peter.", "My name is Peter.", "I Peter name."], 2, "My name is Peter é a construção correta para dizer seu nome."],
      ["Complete: He ___ football every Saturday.", ["play", "playing", "is play", "plays"], 3, "Com he no Present Simple, usamos plays."],
      ["Choose the correct past sentence.", ["We saw a movie last night.", "We see a movie last night.", "We seed a movie last night.", "We seeing a movie last night."], 0, "Saw é o passado irregular de see."],
      ["Complete: They ___ going to travel next week.", ["is", "are", "am", "be"], 1, "Com they, usamos are going to."],
      ["What does 'I have never eaten sushi' mean?", ["Eu comi sushi ontem.", "Vou comer sushi amanhã.", "Nunca comi sushi.", "Estou comendo sushi."], 2, "Have never eaten expressa uma experiência que nunca aconteceu até o presente."]
    ])
  },

  // ==========================================
  // SEMANA 17 — CONECTORES BÁSICOS
  // And, but, because, so, or, although
  // ==========================================
  17: {
    days: {
      1: buildQuestions(17, 1, [
        ["Which connector adds information?", ["But", "Because", "And", "Although"], 2, "And conecta ideias e adiciona informações."],
        ["Complete: I like reading ___ I like writing.", ["and", "but", "because", "although"], 0, "And liga duas atividades de que a pessoa gosta."],
        ["Choose the correct sentence.", ["She is kind because funny.", "She is kind and funny.", "She is kind so funny.", "She is kind although funny."], 1, "And conecta dois adjetivos que descrevem a mesma pessoa."],
        ["What does 'and' mean?", ["Mas", "Porque", "Ou", "E"], 3, "And significa e."],
        ["Complete: We bought bread ___ milk.", ["and", "although", "because", "but"], 0, "And conecta dois itens de uma lista."]
      ]),
      2: buildQuestions(17, 2, [
        ["Which connector expresses contrast?", ["Because", "But", "So", "And"], 1, "But significa mas e introduz uma ideia contrastante."],
        ["Complete: I wanted to go out, ___ it was raining.", ["because", "so", "but", "and"], 2, "But apresenta o contraste entre querer sair e estar chovendo."],
        ["Choose the correct sentence.", ["He is tired, because he keeps working.", "He is tired and he doesn't slept.", "He tired but working.", "He is tired, but he keeps working."], 3, "But conecta duas ideias que contrastam: cansaço e continuar trabalhando."],
        ["What does 'I like tea, but I prefer coffee' mean?", ["Gosto de chá, mas prefiro café.", "Gosto de chá porque prefiro café.", "Gosto de chá ou prefiro café.", "Gosto de chá, então prefiro café."], 0, "But introduz a preferência que contrasta com a primeira informação."],
        ["Complete: The test was difficult, ___ I finished it.", ["because", "but", "so", "or"], 1, "But mostra contraste entre a dificuldade e a conclusão da prova."]
      ]),
      3: buildQuestions(17, 3, [
        ["Which connector introduces a reason?", ["So", "But", "Because", "Or"], 2, "Because significa porque e introduz uma razão."],
        ["Complete: I'm studying English ___ I want to travel.", ["so", "although", "but", "because"], 3, "Because explica o motivo de estudar inglês."],
        ["Choose the correct sentence.", ["She stayed home because she was sick.", "She stayed home so she was sick.", "She stayed home but she was sick because.", "She stayed home or she was sick."], 0, "Because introduz a causa de ela ter ficado em casa."],
        ["What does 'because' mean?", ["Portanto", "Porque", "Mas", "Ou"], 1, "Because é usado para explicar motivos."],
        ["Complete: He is happy ___ he passed the exam.", ["but", "so", "because", "although"], 2, "Because apresenta a razão de ele estar feliz."]
      ]),
      4: buildQuestions(17, 4, [
        ["Which connector introduces a result?", ["Because", "Although", "But", "So"], 3, "So pode introduzir uma consequência ou resultado."],
        ["Complete: It was late, ___ we went home.", ["so", "because", "although", "but"], 0, "So conecta a situação à sua consequência."],
        ["Choose the correct sentence.", ["I was hungry because I made a sandwich.", "I was hungry, so I made a sandwich.", "I was hungry but I made a sandwich because.", "I was hungry or I made a sandwich."], 1, "So mostra que fazer um sanduíche foi consequência da fome."],
        ["What does 'so' mean in 'I was tired, so I went to bed'?", ["Embora", "Porque", "Então / por isso", "Ou"], 2, "So indica a consequência: estava cansado, por isso foi dormir."],
        ["Complete: She forgot her umbrella, ___ she got wet.", ["because", "but", "although", "so"], 3, "So conecta o esquecimento do guarda-chuva à consequência."]
      ]),
      5: buildQuestions(17, 5, [
        ["Which connector presents alternatives?", ["Or", "And", "Because", "Although"], 0, "Or significa ou e apresenta alternativas."],
        ["Complete: Would you like tea ___ coffee?", ["but", "or", "so", "because"], 1, "Or oferece duas opções."],
        ["What does 'You can walk or take the bus' mean?", ["Você precisa caminhar.", "Você não pode pegar o ônibus.", "Você pode caminhar ou pegar o ônibus.", "Você caminhou e pegou o ônibus."], 2, "Or indica uma escolha entre caminhar e pegar o ônibus."],
        ["Choose the correct sentence.", ["Do you want pizza but pasta?", "Do you want pizza because pasta?", "Do you want pizza so pasta?", "Do you want pizza or pasta?"], 3, "Or é usado para oferecer opções."],
        ["Complete: We can watch a movie ___ play a game.", ["or", "although", "because", "but"], 0, "Or apresenta duas possibilidades."]
      ]),
      6: buildQuestions(17, 6, [
        ["What does 'although' express?", ["Addition", "Contrast or concession", "Result", "Choice"], 1, "Although significa embora e introduz uma ideia contrastante."],
        ["Complete: ___ it was cold, we went swimming.", ["Because", "So", "Although", "And"], 2, "Although mostra que fomos nadar apesar do frio."],
        ["Choose the correct sentence.", ["Although he was tired, but he continued.", "Although he tired, he continued.", "Although he was tired because he continued.", "Although he was tired, he continued working."], 3, "Although já introduz o contraste, então não precisamos adicionar but na mesma estrutura."],
        ["Complete: ___ she is young, she is very responsible.", ["Although", "So", "Or", "Because"], 0, "Although apresenta o contraste entre ser jovem e ser responsável."],
        ["Choose the best connector: 'I was nervous, ___ I gave the presentation.'", ["because", "but", "or", "so"], 1, "But conecta o nervosismo à ação de apresentar, criando contraste."]
      ])
    },
    recovery: buildRecovery(17, [
      ["Complete: I stayed home ___ I was sick.", ["so", "but", "because", "or"], 2, "Because introduz o motivo de ficar em casa."],
      ["Complete: It was raining, ___ we took a taxi.", ["although", "but", "because", "so"], 3, "So introduz a consequência da chuva."],
      ["Choose the connector for contrast.", ["but", "and", "because", "or"], 0, "But é usado para conectar ideias contrastantes."],
      ["Complete: Do you want water ___ juice?", ["and", "or", "so", "although"], 1, "Or apresenta duas alternativas."],
      ["Choose the correct sentence.", ["Although I was tired, but I studied.", "Although tired, because I studied.", "Although I was tired, I studied.", "Although I was tired so I studied."], 2, "Although introduz contraste e não precisa ser acompanhado por but."]
    ])
  },

  // ==========================================
  // SEMANA 18 — PHRASAL VERBS ESSENCIAIS 1
  // Wake up, get up, turn on/off, look for,
  // find out, give up
  // ==========================================
  18: {
    days: {
      1: buildQuestions(18, 1, [
        ["What does 'wake up' mean?", ["Dormir", "Acordar", "Levantar da cama", "Deitar"], 1, "Wake up significa acordar, sair do estado de sono."],
        ["Complete: I usually ___ at 6:30 AM.", ["wake up", "give up", "turn off", "find out"], 0, "Wake up é usado para falar do momento em que acordamos."],
        ["Choose the correct sentence.", ["She wake up early.", "She waking up early.", "She wakes up early.", "She wakes up early yesterday."], 2, "Com she no presente simples, usamos wakes up."],
        ["What does 'I woke up late' mean?", ["Fui dormir tarde.", "Levantei cedo.", "Estou acordando.", "Acordei tarde."], 3, "Woke up é o passado de wake up."],
        ["Complete: My alarm rings at 7, so I ___ immediately.", ["wake up", "turn on", "look for", "give up"], 0, "Wake up indica acordar quando o despertador toca."]
      ]),
      2: buildQuestions(18, 2, [
        ["What does 'get up' mean?", ["Acordar", "Levantar da cama", "Dormir", "Procurar"], 1, "Get up significa levantar, geralmente sair da cama."],
        ["What is the difference between 'wake up' and 'get up'?", ["They always mean opposite things.", "Get up means sleep.", "Wake up is becoming awake; get up is leaving the bed.", "Wake up means leave the house."], 2, "Wake up é acordar; get up é efetivamente levantar da cama."],
        ["Complete: I wake up at 6, but I ___ at 6:15.", ["wake up", "turn off", "give up", "get up"], 3, "A frase diferencia o horário de acordar do horário de levantar."],
        ["Choose the correct sentence.", ["He gets up at seven every day.", "He get up at seven every day.", "He getting up at seven every day.", "He gets up yesterday."], 0, "Com he, usamos gets up no presente simples."],
        ["What does 'Get up! We're late!' mean?", ["Vá dormir!", "Levante! Estamos atrasados!", "Acorde amanhã!", "Procure alguma coisa!"], 1, "Get up é uma ordem para levantar."]
      ]),
      3: buildQuestions(18, 3, [
        ["What does 'turn on' mean?", ["Desligar", "Procurar", "Ligar um aparelho", "Desistir"], 2, "Turn on significa ligar um aparelho ou dispositivo."],
        ["Complete: It's dark. Please ___ the lights.", ["turn off", "give up", "find out", "turn on"], 3, "Se está escuro, faz sentido ligar as luzes."],
        ["What does 'turn off' mean?", ["Desligar", "Ligar", "Acordar", "Descobrir"], 0, "Turn off significa desligar um aparelho ou equipamento."],
        ["Choose the correct sentence.", ["Please turn on the TV off.", "Please turn off the TV.", "Please turning off the TV.", "Please turned off the TV tomorrow."], 1, "Turn off the TV significa desligar a televisão."],
        ["Complete: Before sleeping, I ___ my computer.", ["turn on", "wake up", "turn off", "look for"], 2, "Turn off é usado para desligar o computador."]
      ]),
      4: buildQuestions(18, 4, [
        ["What does 'look for' mean?", ["Encontrar", "Descobrir", "Desistir", "Procurar"], 3, "Look for significa procurar algo que ainda não foi encontrado."],
        ["Complete: I can't find my keys. I'm ___ them.", ["looking for", "turning on", "giving up", "waking up"], 0, "Looking for significa procurando."],
        ["Choose the correct sentence.", ["She look for her phone.", "She is looking for her phone.", "She looking her phone for.", "She looks for yesterday."], 1, "A estrutura Present Continuous é is looking for."],
        ["What is the difference between 'look for' and 'find'?", ["They always mean exactly the same thing.", "Find means search without success.", "Look for means search; find means discover or locate.", "Look for means turn off."], 2, "Look for é procurar; find é encontrar."],
        ["Complete: The detective is ___ clues.", ["turning off", "giving up", "getting up", "looking for"], 3, "Looking for clues significa procurando pistas."]
      ]),
      5: buildQuestions(18, 5, [
        ["What does 'find out' mean?", ["Descobrir ou descobrir uma informação", "Desligar", "Levantar", "Desistir"], 0, "Find out significa descobrir ou obter uma informação."],
        ["Complete: I need to ___ what time the train leaves.", ["wake up", "find out", "turn off", "get up"], 1, "Find out é usado para descobrir uma informação."],
        ["Choose the correct sentence.", ["I want find out the answer.", "I want finding out the answer.", "I want to find out the answer.", "I want found out the answer."], 2, "Want é seguido de infinitivo com to: want to find out."],
        ["What does 'I found out the truth' mean?", ["Esqueci a verdade.", "Procurei a verdade.", "Escondi a verdade.", "Descobri a verdade."], 3, "Found out é o passado de find out."],
        ["Complete: We finally ___ why the computer wasn't working.", ["found out", "turned on", "got up", "gave up"], 0, "Found out indica que finalmente descobrimos o motivo."]
      ]),
      6: buildQuestions(18, 6, [
        ["What does 'give up' mean?", ["Continuar", "Desistir", "Acordar", "Descobrir"], 1, "Give up significa desistir de algo."],
        ["Complete: Don't ___! You can solve this problem.", ["turn off", "look for", "give up", "wake up"], 2, "Don't give up significa não desista."],
        ["Choose the correct sentence.", ["He give up easily.", "He giving up easily.", "He gives up yesterday.", "He gives up easily."], 3, "Com he no presente simples, usamos gives up."],
        ["What does 'She gave up smoking' mean?", ["Ela parou de fumar.", "Ela começou a fumar.", "Ela procurou um cigarro.", "Ela ligou o cigarro."], 0, "Gave up é o passado de give up e significa desistiu ou abandonou o hábito."],
        ["Complete: After several attempts, he didn't ___ and finally succeeded.", ["turn off", "give up", "wake up", "look for"], 1, "Give up é desistir; a frase diz que ele não desistiu."]
      ])
    },
    recovery: buildRecovery(18, [
      ["What does 'wake up' mean?", ["Levantar", "Dormir", "Acordar", "Desistir"], 2, "Wake up significa acordar."],
      ["Complete: Please ___ the computer before leaving.", ["turn on", "look for", "find out", "turn off"], 3, "Turn off significa desligar o computador."],
      ["What does 'look for' mean?", ["Procurar", "Encontrar", "Desligar", "Acordar"], 0, "Look for significa procurar."],
      ["Complete: I need to ___ who called me.", ["give up", "find out", "get up", "turn off"], 1, "Find out significa descobrir uma informação."],
      ["Choose the correct sentence.", ["Don't gives up!", "Don't giving up!", "Don't give up!", "Don't to give up!"], 2, "Depois de don't, usamos give na forma base."]
    ])
  },

  // ==========================================
  // SEMANA 19 — PHRASAL VERBS ESSENCIAIS 2
  // Hang out, catch up, run out of,
  // figure out, drop off
  // ==========================================
  19: {
    days: {
      1: buildQuestions(19, 1, [
        ["What does 'hang out' mean?", ["Trabalhar", "Sair ou passar tempo com alguém", "Desistir", "Entregar algo"], 1, "Hang out significa passar tempo com amigos ou outras pessoas, geralmente de maneira informal."],
        ["Complete: We usually ___ at the park after school.", ["hang out", "run out of", "drop off", "figure out"], 0, "Hang out é usado para falar de passar tempo junto."],
        ["Choose the correct sentence.", ["She hang out with friends.", "She hanging out with friends.", "She hangs out with friends.", "She hangs out yesterday."], 2, "Com she, usamos hangs out no presente simples."],
        ["What does 'Do you want to hang out this weekend?' mean?", ["Você quer estudar agora?", "Você quer ir embora?", "Você quer trabalhar no fim de semana?", "Você quer passar um tempo comigo neste fim de semana?"], 3, "Hang out é um convite informal para passar tempo junto."],
        ["Complete: I love to ___ with my cousins.", ["hang out", "drop off", "run out of", "figure out"], 0, "Hang out combina com passar tempo com familiares e amigos."]
      ]),
      2: buildQuestions(19, 2, [
        ["What does 'catch up with someone' mean?", ["Correr atrás de alguém", "Conversar e saber das novidades de alguém", "Deixar alguém em algum lugar", "Ficar sem alguma coisa"], 1, "Catch up with someone pode significar conversar para atualizar as novidades."],
        ["Complete: We haven't talked in months. Let's meet and ___.", ["drop off", "run out of", "catch up", "give up"], 2, "Catch up é apropriado para colocar a conversa em dia."],
        ["Choose the correct sentence.", ["I want catch up with you.", "I want catching up with you.", "I want caught up with you.", "I want to catch up with you."], 3, "Want é seguido por to + verbo na forma base."],
        ["What does 'I need to catch up on my homework' mean?", ["Preciso colocar minhas tarefas em dia.", "Preciso abandonar minhas tarefas.", "Preciso entregar minhas tarefas a alguém.", "Preciso procurar minhas tarefas."], 0, "Catch up on algo significa recuperar o que ficou atrasado."],
        ["Complete: After the vacation, she had to ___ on her work.", ["hang out", "catch up", "drop off", "turn off"], 1, "Catch up on work significa colocar o trabalho em dia."]
      ]),
      3: buildQuestions(19, 3, [
        ["What does 'run out of' mean?", ["Correr rapidamente", "Encontrar alguma coisa", "Ficar sem algo", "Entregar algo"], 2, "Run out of significa ficar sem um recurso ou produto."],
        ["Complete: We have ___ milk. Can you buy some?", ["run out", "run out of", "ran out", "ran out of"], 1, "Na frase com have, usamos have run out of."],
        ["Choose the correct sentence.", ["They ran out sugar.", "They runned out of sugar.", "They running out of sugar.", "They ran out of sugar."], 3, "Ran é o passado de run; ran out of sugar significa ficaram sem açúcar."],
        ["What does 'My phone ran out of battery' mean?", ["Meu celular ficou sem bateria.", "Meu celular ganhou bateria.", "Meu celular foi encontrado.", "Meu celular foi desligado por outra pessoa."], 0, "Ran out of battery significa ficou sem bateria."],
        ["Complete: We need to hurry. We're ___ time.", ["running", "running out of", "catching up", "dropping off"], 1, "Running out of time significa ficando sem tempo."]
      ]),
      4: buildQuestions(19, 4, [
        ["What does 'figure out' mean?", ["Desistir", "Entregar", "Entender ou encontrar uma solução", "Sair com amigos"], 2, "Figure out significa entender algo ou descobrir como resolver um problema."],
        ["Complete: I can't ___ this math problem.", ["hang out", "drop off", "run out of", "figure out"], 3, "Figure out é usado para descobrir a solução de um problema."],
        ["Choose the correct sentence.", ["She figured out the answer.", "She figure out the answer yesterday.", "She figuring out the answer.", "She figures out yesterday."], 0, "Figured out é o passado de figure out."],
        ["What does 'We'll figure it out' mean?", ["Vamos desistir.", "Vamos descobrir como resolver isso.", "Vamos entregar isso.", "Vamos sair juntos."], 1, "Figure it out significa encontrar uma maneira de resolver a situação."],
        ["Complete: He finally ___ how to fix the computer.", ["hang out", "drop off", "figured out", "ran out"], 2, "Figured out indica que ele finalmente descobriu como consertar o computador."]
      ]),
      5: buildQuestions(19, 5, [
        ["What does 'drop off' commonly mean?", ["Acordar", "Desistir", "Descobrir", "Deixar alguém ou algo em determinado lugar"], 3, "Drop off pode significar levar e deixar alguém ou alguma coisa em um local."],
        ["Complete: Can you ___ me ___ at the station?", ["drop / off", "hang / out", "run / out", "figure / out"], 0, "Drop me off significa me deixar em algum lugar."],
        ["Choose the correct sentence.", ["I'll drop off you at school.", "I'll drop you off at school.", "I'll drop you at off school.", "I'll dropping you off at school."], 1, "Com pronome, drop you off é a ordem natural quando o objeto vem no meio."],
        ["What does 'My dad dropped me off at school' mean?", ["Meu pai me buscou na escola.", "Meu pai estudou comigo.", "Meu pai me deixou na escola.", "Meu pai saiu da escola."], 2, "Dropped me off significa me deixou em determinado lugar."],
        ["Complete: I need to ___ this package ___ at the post office.", ["hang / out", "figure / out", "run / out", "drop / off"], 3, "Drop this package off significa deixar ou entregar o pacote em algum local."]
      ]),
      6: buildQuestions(19, 6, [
        ["Your friend says: 'Let's hang out tomorrow.' What are they suggesting?", ["Passar um tempo juntos amanhã.", "Desistir amanhã.", "Entregar alguma coisa amanhã.", "Ficar sem alguma coisa amanhã."], 0, "Hang out é uma expressão informal para passar tempo junto."],
        ["Complete: I haven't seen Maria in a long time. I want to ___ with her.", ["run out", "catch up", "drop off", "turn off"], 1, "Catch up com alguém significa conversar e saber das novidades."],
        ["The printer stopped because it ___ paper.", ["figured out", "dropped off", "ran out of", "hung out"], 2, "Ran out of paper significa ficou sem papel."],
        ["Choose the correct sentence.", ["I can't figured out the answer.", "I can't figuring out the answer.", "I can't to figure out the answer.", "I can't figure out the answer."], 3, "Depois de can, usamos o verbo na forma base: figure."],
        ["Complete: My mother will ___ me ___ at the airport.", ["drop / off", "hang / out", "catch / up", "run / out"], 0, "Drop me off significa me deixar no aeroporto."]
      ])
    },
    recovery: buildRecovery(19, [
      ["What does 'hang out' mean?", ["Ficar sem algo", "Passar tempo junto", "Entender um problema", "Deixar alguém em um local"], 1, "Hang out significa passar tempo junto, geralmente de maneira informal."],
      ["Complete: We ___ out of food yesterday.", ["run", "running", "ran", "runs"], 2, "Ran é o passado de run."],
      ["What does 'figure out' mean?", ["Entregar", "Desistir", "Sair com amigos", "Descobrir ou entender"], 3, "Figure out significa entender ou encontrar uma solução."],
      ["Choose the correct sentence.", ["Can you drop me off here?", "Can you drop off me here?", "Can you dropping me off here?", "Can you dropped me off here?"], 0, "Drop me off é a estrutura natural com o pronome no meio."],
      ["Complete: Let's meet this weekend and ___ up.", ["run", "catch", "drop", "figure"], 1, "Catch up significa colocar a conversa em dia."]
    ])
  },

  // ==========================================
  // SEMANA 20 — PRESENT PERFECT
  // Experiências e ações com relação ao presente.
  // Already, yet, just, ever, never.
  // ==========================================
  20: {
    days: {
      1: buildQuestions(20, 1, [
        ["Choose the correct structure of the Present Perfect.", ["Subject + did + verb", "Subject + have/has + past participle", "Subject + was + verb-ing", "Subject + will + verb"], 1, "O Present Perfect é formado por have ou has + particípio passado."],
        ["Complete: I ___ visited Japan.", ["has", "am", "have", "did"], 2, "Com I, usamos have: I have visited."],
        ["Complete: She ___ finished her homework.", ["have", "is", "did", "has"], 3, "Com she, usamos has."],
        ["Choose the correct sentence.", ["They have seen this movie.", "They has seen this movie.", "They have saw this movie.", "They are seen this movie."], 0, "Have seen é a estrutura correta: have + particípio de see."],
        ["What is the past participle of 'eat'?", ["Ate", "Eaten", "Eating", "Eats"], 1, "Eat é o infinitivo, ate é o passado simples e eaten é o particípio."]
      ]),
      2: buildQuestions(20, 2, [
        ["What does 'Have you ever traveled abroad?' ask?", ["Você viajou ontem?", "Você está viajando agora?", "Você já viajou para outro país alguma vez?", "Você vai viajar amanhã?"], 2, "Ever é usado em perguntas sobre experiências em algum momento da vida."],
        ["Complete: Have you ___ eaten sushi?", ["never", "yet", "already", "ever"], 3, "Ever é muito comum em perguntas sobre experiências."],
        ["Choose the correct answer: 'Have you ever ridden a horse?' — 'Yes, I ___.'", ["have", "did", "am", "has"], 0, "A resposta curta afirmativa usa have: Yes, I have."],
        ["Complete: I have never ___ to Canada.", ["went", "been", "go", "going"], 1, "Been é o particípio de be e é usado para falar de experiências em lugares."],
        ["What does 'I've never tried that food' mean?", ["Já experimentei essa comida.", "Vou experimentar essa comida.", "Nunca experimentei essa comida.", "Estou experimentando essa comida."], 2, "Never indica que a experiência não aconteceu até agora."]
      ]),
      3: buildQuestions(20, 3, [
        ["What does 'already' commonly express?", ["Uma ação que talvez aconteça.", "Uma ação que nunca aconteceu.", "Uma pergunta sobre o passado.", "Algo que já aconteceu."], 3, "Already indica que algo já aconteceu, muitas vezes antes do esperado."],
        ["Complete: She has ___ finished the project.", ["already", "yet", "ever", "never"], 0, "Already é comum em frases afirmativas para indicar que algo já foi concluído."],
        ["Choose the correct sentence.", ["I already have ate.", "I have already eaten.", "I have already eat.", "I has already eaten."], 1, "A estrutura correta é have + already + particípio."],
        ["What does 'I've already seen that movie' mean?", ["Ainda não vi esse filme.", "Nunca vi esse filme.", "Já vi esse filme.", "Vou ver esse filme."], 2, "Already indica que a pessoa já teve essa experiência."],
        ["Complete: We have ___ booked the tickets, so we don't need to do it again.", ["yet", "ever", "never", "already"], 3, "Already indica que a compra das passagens já foi feita."]
      ]),
      4: buildQuestions(20, 4, [
        ["What does 'yet' commonly express in Present Perfect questions and negatives?", ["Ainda / já, dependendo da frase", "Ontem", "Sempre", "Há dois anos"], 0, "Yet é comum em perguntas e negativas, geralmente no final da frase."],
        ["Complete: I haven't finished my homework ___.", ["already", "yet", "ever", "just"], 1, "Yet no final da negativa significa ainda não."],
        ["Choose the correct question.", ["You have finished yet?", "Do you have finished yet?", "Have you finished yet?", "Did you finished yet?"], 2, "A pergunta no Present Perfect começa com Have, seguido do sujeito e particípio."],
        ["What does 'Has the bus arrived yet?' mean?", ["O ônibus chegou ontem?", "O ônibus está chegando agora?", "O ônibus vai chegar amanhã?", "O ônibus já chegou?"], 3, "Yet em perguntas pergunta se algo já aconteceu até agora."],
        ["Complete: They haven't called me ___.", ["yet", "already", "ever", "just"], 0, "Yet é colocado no final da frase negativa."]
      ]),
      5: buildQuestions(20, 5, [
        ["What does 'just' mean in 'I've just arrived'?", ["Ainda", "Acabei de", "Nunca", "Alguma vez"], 1, "Just indica que a ação aconteceu há pouco tempo."],
        ["Complete: He has ___ left the office.", ["yet", "ever", "just", "never"], 2, "Just indica que ele acabou de sair do escritório."],
        ["Choose the correct sentence.", ["I just have ate.", "I have just eat.", "I has just eaten.", "I have just eaten."], 3, "Have just eaten é a construção correta."],
        ["What does 'We've just finished dinner' mean?", ["Acabamos de terminar o jantar.", "Ainda não jantamos.", "Nunca jantamos.", "Vamos jantar amanhã."], 0, "Just finished indica uma ação concluída há pouco tempo."],
        ["Complete: My brother has ___ arrived home. He came in two minutes ago.", ["yet", "just", "ever", "never"], 1, "Just combina com uma ação muito recente."]
      ]),
      6: buildQuestions(20, 6, [
        ["Choose the correct sentence.", ["She have never traveled abroad.", "She has never travel abroad.", "She has never traveled abroad.", "She never has traveled abroad yesterday."], 2, "Has + never + particípio é a estrutura correta."],
        ["Complete: ___ you ever ___ a famous person?", ["Did / met", "Have / meet", "Has / met", "Have / met"], 3, "Have you ever met...? pergunta se alguém já teve essa experiência."],
        ["What is the difference between 'I went to London' and 'I have been to London'?", ["Went apresenta um evento passado; have been destaca a experiência.", "Os dois sempre indicam exatamente o mesmo contexto.", "Have been é futuro.", "Went é particípio de go."], 0, "O Past Simple apresenta um acontecimento passado; o Present Perfect pode destacar a experiência de vida."],
        ["Choose the correct negative sentence.", ["He hasn't went there.", "He hasn't been there.", "He haven't been there.", "He doesn't been there."], 1, "Hasn't been é a forma negativa correta com he."],
        ["Complete: I ___ my keys. I can't find them anywhere.", ["have lose", "has lost", "have lost", "did lost"], 2, "Have lost usa have + particípio de lose: lost. O resultado importa no presente."],
      ])
    },
    recovery: buildRecovery(20, [
      ["Complete: I ___ never seen snow.", ["has", "am", "did", "have"], 3, "Com I, usamos have no Present Perfect."],
      ["What does 'already' mean?", ["Já", "Ainda não", "Nunca", "Alguma vez"], 0, "Already indica que algo já aconteceu."],
      ["Complete: Have you finished your homework ___?", ["already", "yet", "just", "never"], 1, "Yet é comum no final de perguntas sobre algo que já aconteceu."],
      ["Choose the correct sentence.", ["She have just arrived.", "She has just arrive.", "She has just arrived.", "She just has arrive."], 2, "Has just arrived é a estrutura correta."],
      ["What does 'Have you ever eaten sushi?' mean?", ["Você come sushi todos os dias?", "Você comeu sushi ontem?", "Você vai comer sushi?", "Você já comeu sushi alguma vez?"], 3, "Ever pergunta sobre uma experiência em algum momento da vida."]
    ])
},


  // ==========================================
  // SEMANA 21 — PRESENT PERFECT CONTINUOUS
  // ==========================================
  21: {
    days: {
      1: buildQuestions(21, 1, [
        ["Complete: I ___ been learning English for two years.", ["has", "have", "am", "was"], 1, "Com I, usamos have been."],
        ["Choose the correct sentence.", ["She have been working.", "She has been working.", "She is been working.", "She has working."], 1, "Com she, usamos has been + verbo com -ing."],
        ["What does 'I have been waiting' express?", ["Uma ação futura.", "Uma ação habitual.", "Uma ação que começou antes e continua ou tem efeito agora.", "Uma ação que nunca aconteceu."], 2, "O Present Perfect Continuous destaca a duração ou continuidade de uma ação."],
        ["Complete: They ___ been playing since noon.", ["has", "are", "was", "have"], 3, "Com they, usamos have been."],
        ["Choose the correct structure.", ["Have/has + been + verb-ing", "Have/has + past participle", "Was/were + verb-ing", "Will + verb"], 0, "A estrutura é have/has + been + verbo terminado em -ing."]
      ]),
      2: buildQuestions(21, 2, [
        ["Complete: He has been ___ all morning.", ["work", "working", "worked", "works"], 1, "Depois de been, usamos o verbo com -ing."],
        ["Choose the correct sentence.", ["We has been learning.", "We have been learn.", "We have been learning.", "We are been learning."], 2, "We acompanha have been."],
        ["What does 'She has been living here since 2020' emphasize?", ["Uma ação futura.", "Uma ação que terminou antes de 2020.", "Uma ação que acontece só amanhã.", "A duração de uma situação iniciada em 2020."], 3, "Since 2020 indica o início da situação."],
        ["Complete: I have been ___ for my keys.", ["looking", "look", "looked", "looks"], 0, "Have been é seguido por looking."],
        ["Choose the correct sentence.", ["He have been sleeping.", "He has been sleeping.", "He has sleeping.", "He is been sleep."], 1, "Com he, usamos has been sleeping."]
      ]),
      3: buildQuestions(21, 3, [
        ["Which word indicates a starting point?", ["For", "During", "Since", "Ago"], 2, "Since indica o ponto em que a ação começou."],
        ["Complete: I have been studying ___ three hours.", ["since", "during", "ago", "for"], 3, "For indica duração."],
        ["Choose the correct sentence.", ["They have been waiting since noon.", "They have been waiting for noon.", "They has been waiting since noon.", "They are been waiting since noon."], 0, "Since noon indica o momento inicial da espera."],
        ["What is the difference between for and since?", ["For indica início; since indica duração.", "For indica duração; since indica ponto inicial.", "Ambos indicam futuro.", "Since só aparece no passado simples."], 1, "For acompanha períodos; since acompanha pontos de início."],
        ["Complete: She has been practicing ___ Monday.", ["for", "during", "since", "ago"], 2, "Monday é um ponto de início."]
      ]),
      4: buildQuestions(21, 4, [
        ["Choose the correct question.", ["Have you been studying?", "Do you have been studying?", "Have you been study?", "Has you been studying?"], 0, "A pergunta começa com Have, seguido do sujeito e been + -ing."],
        ["Complete: How long ___ he been working here?", ["have", "has", "is", "does"], 1, "Com he, usamos has."],
        ["Choose the correct negative sentence.", ["I haven't been study.", "I hasn't been studying.", "I haven't been studying.", "I don't been studying."], 2, "A negativa é haven't/hasn't been + verbo com -ing."],
        ["What does 'How long have you been learning English?' ask?", ["Onde você estuda?", "Quem ensina inglês?", "Quando vai estudar?", "Há quanto tempo você aprende inglês?"], 3, "How long pergunta sobre duração."],
        ["Complete: ___ they been working all day?", ["Have", "Has", "Are", "Do"], 0, "Com they, usamos Have."]
      ]),
      5: buildQuestions(21, 5, [
        ["Which sentence emphasizes duration?", ["I studied yesterday.", "I have been studying all afternoon.", "I will study tomorrow.", "I study every Monday."], 1, "Have been studying destaca uma atividade ao longo de um período."],
        ["Complete: It ___ been raining for hours.", ["have", "is", "has", "was"], 2, "Com it, usamos has been."],
        ["Choose the correct spelling.", ["runing", "runned", "runs", "running"], 3, "Run dobra o n antes de receber -ing."],
        ["What does 'He has been feeling tired lately' mean?", ["Ele tem se sentido cansado ultimamente.", "Ele ficou cansado apenas ontem.", "Ele ficará cansado amanhã.", "Ele nunca fica cansado."], 0, "Has been feeling descreve uma situação recente e contínua."],
        ["Complete: We ___ been talking for an hour.", ["has", "have", "are", "was"], 1, "Com we, usamos have been."]
      ]),
      6: buildQuestions(21, 6, [
        ["Choose the correct sentence.", ["I has been reading.", "I have been read.", "I have been reading.", "I am been reading."], 2, "Have been reading é a estrutura correta."],
        ["Which question is correct?", ["How long you have been waiting?", "How long has you been waiting?", "How long do you been waiting?", "How long have you been waiting?"], 3, "A ordem correta é How long + have + sujeito + been + -ing."],
        ["Complete: My parents have been ___ here for years.", ["living", "live", "lived", "lives"], 0, "Have been living destaca a duração da moradia."],
        ["Complete: She ___ been studying since breakfast.", ["have", "has", "is", "does"], 1, "Com she, usamos has been."],
        ["Which sentence is about an activity continuing until now?", ["I played yesterday.", "I will play tomorrow.", "I have been playing for two hours.", "I play every weekend."], 2, "For two hours destaca a duração da atividade."]
      ])
    },
    recovery: buildRecovery(21, [
      ["Complete: He ___ been working all day.", ["have", "is", "are", "has"], 3, "Com he, usamos has been."],
      ["Complete: I have been studying ___ 2024.", ["since", "for", "during", "ago"], 0, "Since acompanha um ponto inicial."],
      ["Complete: They have been ___ football.", ["play", "playing", "played", "plays"], 1, "Been é seguido pelo verbo com -ing."],
      ["Which question is correct?", ["How long you have been here?", "How long has you been here?", "How long have you been here?", "How long are you been here?"], 2, "Have you been é a estrutura correta com you."],
      ["What does for three hours indicate?", ["Um momento exato.", "Uma data futura.", "Uma ação habitual.", "A duração de três horas."], 3, "For indica a duração de uma ação."]
    ])
  },

  // ==========================================
  // SEMANA 22 — PAST PERFECT
  // ==========================================
  22: {
    days: {
      1: buildQuestions(22, 1, [
        ["Choose the correct structure of the Past Perfect.", ["Have + participle", "Had + past participle", "Was + verb-ing", "Will + verb"], 1, "O Past Perfect é formado por had + particípio passado."],
        ["Complete: She ___ already left when I arrived.", ["has", "have", "had", "was"], 2, "Had already left indica uma ação anterior a outra no passado."],
        ["What does 'I had eaten before the meeting' mean?", ["Comerei depois da reunião.", "Estou comendo durante a reunião.", "Comi depois da reunião.", "Eu tinha comido antes da reunião."], 3, "Had eaten aconteceu antes da reunião, que também está no passado."],
        ["Choose the correct sentence.", ["They had finished before we arrived.", "They have finish before we arrived.", "They had finish before we arrived.", "They has finished before we arrived."], 0, "Had finished é a forma correta do Past Perfect."],
        ["What is the past participle of 'go'?", ["Went", "Gone", "Going", "Goes"], 1, "Went é o passado simples; gone é o particípio."]
      ]),
      2: buildQuestions(22, 2, [
        ["Complete: When we got there, the movie ___.", ["has started", "have started", "had started", "was start"], 2, "Had started mostra que o filme começou antes de chegarmos."],
        ["Choose the correct sentence.", ["He had went home.", "He have gone home.", "He has gone home before.", "He had gone home."], 3, "Had gone usa had + particípio gone."],
        ["What happened first? 'I had locked the door before I left.'", ["I locked the door.", "I left.", "I arrived home.", "I opened the door."], 0, "Trancar a porta aconteceu antes de sair."],
        ["Complete: They ___ never seen snow before that trip.", ["has", "had", "have", "were"], 1, "Had never seen descreve uma experiência anterior à viagem passada."],
        ["Choose the correct past participle of 'write'.", ["Wrote", "Writing", "Written", "Writes"], 2, "Written é o particípio de write."]
      ]),
      3: buildQuestions(22, 3, [
        ["Complete: By the time the teacher arrived, we ___ the exercise.", ["finish", "have finished", "finishing", "had finished"], 3, "Had finished indica que terminamos antes da chegada do professor."],
        ["Which word often introduces the later past event?", ["When", "Tomorrow", "Usually", "Next"], 0, "When pode conectar a ação anterior à ação posterior no passado."],
        ["Choose the correct sentence.", ["After she had ate, she left.", "After she had eaten, she left.", "After she has eaten, she left.", "After she eating, she left."], 1, "Had eaten é a forma correta do Past Perfect."],
        ["What does 'The train had left when we arrived' mean?", ["O trem chegou depois de nós.", "O trem ainda estava chegando.", "O trem já tinha partido quando chegamos.", "O trem partirá amanhã."], 2, "Had left mostra que a partida aconteceu antes da nossa chegada."],
        ["Complete: I couldn't enter because I ___ my key.", ["lose", "have lost", "losing", "had lost"], 3, "Had lost indica que perder a chave aconteceu antes de tentar entrar."]
      ]),
      4: buildQuestions(22, 4, [
        ["Choose the correct negative form.", ["Hadn't finished", "Didn't had finished", "Hadn't finish", "Hasn't finished"], 0, "A negativa é had not ou hadn't + particípio."],
        ["Complete: She ___ studied French before moving to Paris.", ["hadn't", "hasn't", "don't", "isn't"], 0, "Hadn't studied indica que ela não havia estudado antes da mudança."],
        ["Choose the correct question.", ["Had you ever visited London before 2020?", "Did you had visited London?", "Have you visited London before 2020?", "Had you ever visit London?"], 0, "A pergunta começa com had e usa o particípio visited."],
        ["Complete: ___ they finished before the deadline?", ["Have", "Had", "Did", "Were"], 1, "Had forma perguntas no Past Perfect."],
        ["What does 'He hadn't called me before I left' mean?", ["Ele me ligou depois que saí.", "Ele estava me ligando.", "Ele não tinha me ligado antes de eu sair.", "Ele nunca terá ligado."], 2, "Hadn't called indica uma ação que não tinha acontecido até aquele momento passado."]
      ]),
      5: buildQuestions(22, 5, [
        ["Choose the best order: 'First, I finished dinner. Then, my friend arrived.'", ["My friend arrived after I had finished dinner.", "My friend had arrived before dinner.", "I had arrived after dinner.", "Dinner had finished my friend."], 0, "Had finished deixa claro que o jantar terminou antes da chegada."],
        ["Complete: By 8 PM, they ___ already gone.", ["has", "had", "have", "are"], 1, "Had already gone indica uma ação concluída antes de um horário passado."],
        ["What is the past participle of 'break'?", ["Broke", "Breaking", "Broken", "Breaks"], 2, "Broken é o particípio de break."],
        ["Choose the correct sentence.", ["I had saw him before.", "I had see him before.", "I have saw him before.", "I had seen him before."], 3, "Had seen usa o particípio seen."],
        ["Complete: She was sad because she ___ her phone.", ["had lost", "has lose", "have lost", "losing"], 0, "Had lost indica que perder o telefone aconteceu antes de ela ficar triste."]
      ]),
      6: buildQuestions(22, 6, [
        ["Choose the correct sentence.", ["After I had finished, I went home.", "After I have finish, I went home.", "After I had finish, I go home.", "After I finishing, I went home."], 0, "Had finished expressa a ação anterior à ida para casa."],
        ["Complete: The guests ___ left before the storm started.", ["has", "had", "have", "are"], 1, "Had left indica que os convidados saíram antes da tempestade."],
        ["What does 'She had never flown before that day' emphasize?", ["Uma rotina atual.", "Um plano futuro.", "A falta de experiência até aquele momento passado.", "Uma ação acontecendo agora."], 2, "Had never flown indica que ela nunca tinha voado até aquele dia."],
        ["Choose the correct question.", ["Had he ate?", "Did he had eaten?", "Has he eaten before yesterday?", "Had he eaten before the trip?"], 3, "Had he eaten usa had + sujeito + particípio."],
        ["Complete: I recognized her because I ___ her before.", ["had met", "have meet", "has met", "meeting"], 0, "Had met indica que o encontro aconteceu antes do reconhecimento."]
      ])
    },
    recovery: buildRecovery(22, [
      ["Complete: We ___ already eaten when he arrived.", ["has", "had", "have", "are"], 1, "Had eaten é Past Perfect."],
      ["What is the past participle of 'see'?", ["Saw", "Seeing", "Seen", "Sees"], 2, "Seen é o particípio de see."],
      ["Choose the correct negative.", ["I didn't had finished.", "I hadn't finish.", "I haven't finished yesterday.", "I hadn't finished."], 3, "Hadn't finished é a negativa correta."],
      ["Which action happened first? 'She had called before I woke up.'", ["She called.", "I woke up.", "I went out.", "I went to sleep."], 0, "A ligação aconteceu antes de acordar."],
      ["Complete: ___ you studied English before you moved?", ["Have", "Had", "Did", "Were"], 1, "Had é o auxiliar usado nessa pergunta."]
    ])
  },

  // ==========================================
  // SEMANA 23 — PASSIVE VOICE
  // ==========================================
  23: {
    days: {
      1: buildQuestions(23, 1, [
        ["What is the main structure of the passive voice?", ["Subject + have + verb", "Subject + be + past participle", "Subject + do + verb", "Subject + will + verb-ing"], 1, "A voz passiva usa uma forma do verbo be + particípio passado."],
        ["Choose the correct passive sentence.", ["People speak English everywhere.", "English speaks everywhere.", "English is spoken all over the world.", "English spoken all over the world."], 2, "Is spoken é a forma passiva no presente simples."],
        ["Complete: The car ___ stolen yesterday.", ["is", "has", "were", "was"], 3, "Was stolen é a voz passiva no passado simples."],
        ["What does the passive voice emphasize?", ["The action or the object receiving it.", "Only the person doing the action.", "The future.", "The speaker's opinion."], 0, "A voz passiva destaca a ação ou quem recebe a ação."],
        ["Choose the past participle of 'write'.", ["Wrote", "Written", "Writing", "Writes"], 1, "Written é o particípio usado na voz passiva."]
      ]),
      2: buildQuestions(23, 2, [
        ["Complete: This house ___ built in 1990.", ["are", "were", "was", "be"], 2, "House é singular e a frase está no passado: was built."],
        ["Choose the correct passive sentence.", ["The windows cleaned every day.", "The windows is cleaned every day.", "The windows was cleaned every day.", "The windows are cleaned every day."], 3, "Windows é plural, então usamos are cleaned."],
        ["Complete: These books ___ written by a famous author.", ["were", "was", "is", "be"], 0, "Books é plural e a frase está no passado: were written."],
        ["What is the passive form of 'They make cars here'?", ["Cars make here.", "Cars are made here.", "Cars is made here.", "Cars were make here."], 1, "Cars are made here é a transformação correta."],
        ["Choose the correct sentence.", ["The cake bake by my mother.", "The cake is bake by my mother.", "The cake was baked by my mother.", "The cake were baked by my mother."], 2, "Was baked é passado passivo para o sujeito singular cake."]
      ]),
      3: buildQuestions(23, 3, [
        ["Complete: The emails ___ sent every morning.", ["is", "was", "be", "are"], 3, "Emails é plural; no presente passivo usamos are sent."],
        ["What is the passive form of 'Someone stole my bike'?", ["My bike was stolen.", "My bike stole someone.", "My bike is steal.", "My bike has stole."], 0, "Was stolen é a forma passiva no passado."],
        ["Choose the correct sentence.", ["The room clean every day.", "The room is cleaned every day.", "The room are cleaned every day.", "The room cleaning every day."], 1, "Room é singular; usamos is cleaned."],
        ["Complete: The museum ___ visited by thousands of people every year.", ["are", "were", "is", "be"], 2, "Museum é singular e a frase está no presente."],
        ["What does 'The bridge was built in 2005' mean?", ["A ponte será construída em 2005.", "A ponte construiu alguém.", "A ponte está construindo.", "A ponte foi construída em 2005."], 3, "Was built indica que a ponte recebeu a ação no passado."]
      ]),
      4: buildQuestions(23, 4, [
        ["How do we introduce the agent in a passive sentence?", ["By", "For", "With", "From"], 0, "By pode indicar quem realizou a ação."],
        ["Complete: The novel was written ___ George Orwell.", ["from", "by", "with", "at"], 1, "By George Orwell identifica o autor da ação."],
        ["Choose the passive form of 'The chef prepared the meal'.", ["The meal prepared the chef.", "The meal is prepare by the chef.", "The meal was prepared by the chef.", "The meal were prepared by the chef."], 2, "Was prepared é o passado passivo de prepare."],
        ["Which sentence does not need to mention the agent?", ["The letter was sent yesterday.", "The letter was sent by Ana yesterday.", "The letter was sent by the manager.", "The letter was sent by my brother."], 0, "Se quem realizou a ação não é importante ou conhecido, podemos omitir o agente."],
        ["Complete: The song was ___ by millions of people.", ["sing", "sang", "singing", "sung"], 3, "Sung é o particípio de sing."]
      ]),
      5: buildQuestions(23, 5, [
        ["Choose the correct present passive form.", ["The food is prepared here.", "The food are prepared here.", "The food prepared here.", "The food is prepare here."], 0, "Food é tratado como singular nessa frase: is prepared."],
        ["Complete: The documents ___ checked yesterday.", ["is", "were", "was", "be"], 1, "Documents é plural; no passado usamos were checked."],
        ["What is the passive form of 'They clean the streets'?", ["The streets cleans.", "The streets is clean.", "The streets are cleaned.", "The streets were cleaning."], 2, "Are cleaned é a forma passiva no presente."],
        ["Choose the correct sentence.", ["The thief was catch.", "The thief were caught.", "The thief caught was.", "The thief was caught."], 3, "Was caught é o passado passivo de catch."],
        ["Complete: A new hospital ___ being built in our city.", ["is", "are", "were", "have"], 0, "Is being built é o presente contínuo passivo."]
      ]),
      6: buildQuestions(23, 6, [
        ["Choose the correct passive sentence.", ["The invitations was sent.", "The invitations were sent.", "The invitations is sent yesterday.", "The invitations sent were."], 1, "Invitations é plural; no passado usamos were sent."],
        ["What is the passive form of 'People use smartphones everywhere'?", ["Smartphones use everywhere.", "Smartphones is used everywhere.", "Smartphones are used everywhere.", "Smartphones were use everywhere."], 2, "Are used é a forma passiva no presente."],
        ["Complete: The problem ___ solved yesterday.", ["are", "were", "is", "was"], 3, "Problem é singular; no passado usamos was solved."],
        ["Why might a writer use the passive voice?", ["When the action is more important than the person doing it.", "Only to talk about the future.", "To avoid using verbs.", "Only in questions."], 0, "A passiva é útil quando a ação ou o resultado é mais importante que o agente."],
        ["Choose the correct sentence.", ["The picture painted by an artist.", "The picture was painted by an artist.", "The picture were painted by an artist.", "The picture is paint by an artist."], 1, "Was painted é a forma passiva correta no passado."]
      ])
    },
    recovery: buildRecovery(23, [
      ["Complete: English ___ spoken here.", ["are", "were", "is", "be"], 2, "English é singular; usamos is spoken."],
      ["Complete: The cars ___ repaired yesterday.", ["was", "is", "be", "were"], 3, "Cars é plural; no passado usamos were repaired."],
      ["What is the past participle of 'make'?", ["Made", "Make", "Making", "Makes"], 0, "Made é passado simples e particípio de make."],
      ["Choose the correct passive sentence.", ["The cake baked my sister.", "The cake was baked by my sister.", "The cake were baked by my sister.", "The cake is bake by my sister."], 1, "Was baked é a forma passiva correta."],
      ["What does the passive voice emphasize?", ["Only the person.", "Only the future.", "The action or the receiver of the action.", "The question word."], 2, "A passiva destaca a ação ou quem a recebe."]
    ])
  },

  // ==========================================
  // SEMANA 24 — REPORTED SPEECH
  // ==========================================
  24: {
    days: {
      1: buildQuestions(24, 1, [
        ["What is reported speech used for?", ["To give commands only.", "To repeat a sentence with quotation marks.", "To ask questions about the future.", "To report what someone said without quoting their exact words."], 3, "Reported Speech relata o que alguém disse sem repetir necessariamente as palavras exatas."],
        ["Change to reported speech: He said, 'I am tired.'", ["He said that he was tired.", "He said that I am tired.", "He said that he tired.", "He says that he were tired."], 0, "Em uma situação passada, am geralmente muda para was."],
        ["Complete: She said that she ___ happy.", ["is", "was", "were", "be"], 1, "Was é o recuo comum de is no discurso indireto."],
        ["What does 'Tom said that he was busy' mean?", ["Tom está ocupado agora.", "Tom perguntou se estava ocupado.", "Tom disse que estava ocupado.", "Tom mandou alguém trabalhar."], 2, "A frase relata o que Tom disse."],
        ["Choose the correct reporting verb.", ["Said", "Saying", "Say", "Says"], 0, "Said é o passado de say."]
      ]),
      2: buildQuestions(24, 2, [
        ["Change: She said, 'I like music.'", ["She said she likes music yesterday.", "She said that she liked music.", "She said that I liked music.", "She says that she liking music."], 1, "Like geralmente muda para liked no discurso indireto passado."],
        ["Complete: He said that he ___ a student.", ["am", "are", "was", "be"], 2, "Am muda normalmente para was."],
        ["Change: 'We are ready,' they said.", ["They said we is ready.", "They said they are ready yesterday.", "They said they be ready.", "They said that they were ready."], 3, "Are muda normalmente para were."],
        ["What does 'She told me that she needed help' mean?", ["Ela me disse que precisava de ajuda.", "Ela me perguntou se eu precisava de ajuda.", "Ela me mandou ajudar.", "Ela disse que nunca precisava de ajuda."], 0, "Told me that introduz a informação relatada."],
        ["Choose the correct sentence.", ["He told that he was late.", "He told me that he was late.", "He said me that he late.", "He told me he is late yesterday."], 1, "Tell normalmente precisa de um objeto: told me."]
      ]),
      3: buildQuestions(24, 3, [
        ["Change: He said, 'I will call you.'", ["He said he calls me.", "He said he would calls me.", "He said that he would call me.", "He said that he will called me."], 2, "Will geralmente muda para would no discurso indireto passado."],
        ["Complete: She said she ___ help us.", ["will", "can", "must", "would"], 3, "Would é a forma indireta comum de will."],
        ["Change: 'I can swim,' Anna said.", ["Anna said that she could swim.", "Anna said that she can swims.", "Anna said she swim.", "Anna said that I could swim."], 0, "Can normalmente muda para could."],
        ["What does 'He said he would arrive later' report?", ["Uma ordem.", "Uma declaração sobre uma chegada futura em relação ao momento da fala.", "Uma pergunta sobre o passado.", "Uma experiência de vida."], 1, "Would arrive relata uma previsão ou intenção futura vista de um momento passado."],
        ["Complete: They said they ___ come the next day.", ["will", "can", "would", "are"], 2, "Would é o recuo de will."]
      ]),
      4: buildQuestions(24, 4, [
        ["Change: She said, 'I have finished.'", ["She said she has finish.", "She said she had finish.", "She said I had finished.", "She said that she had finished."], 3, "Have finished geralmente muda para had finished."],
        ["Complete: He said he ___ seen that movie before.", ["had", "has", "have", "was"], 0, "Had seen é o recuo comum de have seen."],
        ["Change: 'I am studying,' he said.", ["He said that he is study.", "He said that he was studying.", "He said he had studying.", "He said that I was studying."], 1, "Am studying muda normalmente para was studying."],
        ["Choose the correct reported sentence.", ["She said that she will go.", "She said she go.", "She said that she would go.", "She said she going."], 2, "Would go é a forma indireta comum de will go."],
        ["What is the reported form of 'today' when the reporting moment is later?", ["Tomorrow", "Yesterday", "Next week", "That day"], 3, "Today geralmente muda para that day."]
      ]),
      5: buildQuestions(24, 5, [
        ["Change: He said, 'I am here.'", ["He said that he was there.", "He said that I was here.", "He said he is there yesterday.", "He said that he were here."], 0, "Here geralmente muda para there quando o ponto de referência muda."],
        ["What can 'tomorrow' become in reported speech?", ["Yesterday", "The next day", "Last day", "That morning"], 1, "Tomorrow pode mudar para the next day."],
        ["Change: 'I saw her yesterday,' Maria said.", ["Maria said she sees her yesterday.", "Maria said she had seen her the day before.", "Maria said she see her.", "Maria said she has seen her tomorrow."], 2, "Saw pode mudar para had seen; yesterday pode mudar para the day before."],
        ["Choose the correct reporting structure.", ["He said me that he was busy.", "He told that he busy.", "He said that he busy.", "He told me that he was busy."], 3, "Told me that é uma estrutura correta."],
        ["Complete: 'Last week' can become ___ in reported speech.", ["The week before", "Next week", "Tomorrow", "Today"], 0, "Last week pode mudar para the week before."]
      ]),
      6: buildQuestions(24, 6, [
        ["Change: 'I don't like coffee,' he said.", ["He said he doesn't likes coffee.", "He said that he didn't like coffee.", "He said that I didn't liked coffee.", "He said he not like coffee."], 1, "Don't like geralmente muda para didn't like."],
        ["Change: 'We are going to travel,' they said.", ["They said they are go travel.", "They said they were travel.", "They said that they were going to travel.", "They said they had go travel."], 2, "Are going to normalmente muda para were going to."],
        ["Choose the correct reported speech.", ["She said that she has lost her phone yesterday.", "She said that she lose her phone.", "She said she losing her phone.", "She said that she had lost her phone."], 3, "Has lost pode mudar para had lost no relato passado."],
        ["What does reported speech help us do?", ["Tell someone what another person said.", "Only repeat exact words.", "Describe physical appearance.", "Give directions only."], 0, "O discurso indireto permite relatar falas de outras pessoas."],
        ["Complete: He said that he ___ tired.", ["is", "was", "were", "be"], 1, "Was é o recuo comum de is."]
      ])
    },
    recovery: buildRecovery(24, [
      ["Change: 'I am happy,' she said.", ["She said I am happy.", "She said she happy.", "She said that she was happy.", "She said she were happy."], 2, "Am muda normalmente para was."],
      ["Complete: He said he ___ call later.", ["will", "can", "is", "would"], 3, "Would é o recuo de will."],
      ["Choose the correct sentence.", ["She told me that she was busy.", "She told that she busy.", "She said me she busy.", "She told me she is busy yesterday."], 0, "Told me that é uma estrutura correta."],
      ["What can 'tomorrow' become?", ["Yesterday", "The next day", "Last week", "That day"], 1, "Tomorrow pode virar the next day."],
      ["Change: 'I can swim,' he said.", ["He said I can swim.", "He said he can swims.", "He said that he could swim.", "He said he swimming."], 2, "Can normalmente muda para could."]
    ])
  },

  // ==========================================
  // SEMANA 25 — PRACTICAL IDIOMS
  // ==========================================
  25: {
    days: {
      1: buildQuestions(25, 1, [
        ["What does 'piece of cake' mean?", ["A literal piece of dessert only.", "Something impossible.", "A difficult decision.", "Something very easy."], 3, "Piece of cake é uma expressão para algo muito fácil."],
        ["Complete: The exam was a ___. I finished it in ten minutes.", ["piece of cake", "blue moon", "cost an arm", "nail on the head"], 0, "Piece of cake indica que a prova foi muito fácil."],
        ["Your friend says: 'Don't worry. This task is a piece of cake.' What do they mean?", ["The task is expensive.", "The task is easy.", "The task is rare.", "The task is dangerous."], 1, "A expressão transmite que a tarefa é simples."],
        ["Choose the correct use.", ["Fixing this is a blue moon.", "Fixing this costs a nail.", "Don't worry, fixing this is a piece of cake.", "Fixing this is an arm."], 2, "Piece of cake funciona para descrever uma tarefa fácil."],
        ["Which expression means 'very easy'?", ["Once in a blue moon", "Cost an arm and a leg", "Hit the nail on the head", "Piece of cake"], 3, "Piece of cake significa muito fácil."]
      ]),
      2: buildQuestions(25, 2, [
        ["What does 'once in a blue moon' mean?", ["Very rarely.", "Every day.", "Very quickly.", "Very easily."], 0, "Once in a blue moon significa muito raramente."],
        ["Complete: I only eat fast food ___; I prefer cooking at home.", ["piece of cake", "once in a blue moon", "hit the nail", "cost an arm"], 1, "A expressão indica que a pessoa come fast food raramente."],
        ["Your friend says: 'We see each other once in a blue moon.' What does that mean?", ["We meet every morning.", "We never talk.", "We meet very rarely.", "We live together."], 2, "A expressão descreve algo que acontece com pouca frequência."],
        ["Choose the correct sentence.", ["I brush my teeth once in a blue moon.", "The sun rises once in a blue moon.", "I go to school once in a blue moon every day.", "I visit that town once in a blue moon."], 3, "A expressão é adequada para uma visita rara."],
        ["Which phrase means 'rarely'?", ["Once in a blue moon", "Piece of cake", "Cost an arm and a leg", "Hit the nail on the head"], 0, "Once in a blue moon equivale a muito raramente."]
      ]),
      3: buildQuestions(25, 3, [
        ["What does 'cost an arm and a leg' mean?", ["Be free.", "Be extremely expensive.", "Be very easy.", "Happen rarely."], 1, "Cost an arm and a leg significa custar muito caro."],
        ["Complete: That sports car costs an arm and a ___.", ["cake", "moon", "leg", "nail"], 2, "A expressão completa é cost an arm and a leg."],
        ["Choose the correct use.", ["This sandwich costs a blue moon.", "My homework costs a nail.", "The test costs a cake.", "That hotel costs an arm and a leg."], 3, "A expressão descreve algo muito caro."],
        ["Your friend says: 'I love that laptop, but it costs an arm and a leg.' What do they mean?", ["The laptop is very expensive.", "The laptop is free.", "The laptop is easy to use.", "The laptop is broken."], 0, "A expressão indica um preço muito alto."],
        ["Which idiom describes something expensive?", ["Piece of cake", "Cost an arm and a leg", "Once in a blue moon", "Hit the nail on the head"], 1, "Cost an arm and a leg significa custar uma fortuna."]
      ]),
      4: buildQuestions(25, 4, [
        ["What does 'hit the nail on the head' mean?", ["Make a mistake.", "Build a house.", "Say or identify exactly the right thing.", "Spend too much money."], 2, "Hit the nail on the head significa acertar exatamente o ponto."],
        ["Complete: Your explanation really ___ the nail on the head.", ["cost", "made", "put", "hit"], 3, "A expressão usa o verbo hit."],
        ["Choose the correct use.", ["You hit the nail on the head with that answer.", "You cost the nail on the head.", "You blue moon the answer.", "You piece of cake the answer."], 0, "A frase significa que a pessoa acertou exatamente."],
        ["Someone says: 'That's exactly the problem!' You can reply:", ["It costs an arm.", "You hit the nail on the head.", "Once in a blue moon.", "It's a piece of leg."], 1, "A expressão confirma que alguém identificou o ponto central."],
        ["Which idiom means 'get something exactly right'?", ["Piece of cake", "Once in a blue moon", "Hit the nail on the head", "Cost an arm and a leg"], 2, "Hit the nail on the head significa acertar em cheio."]
      ]),
      5: buildQuestions(25, 5, [
        ["Your friend says: 'The new phone costs an arm and a leg.' What is the best interpretation?", ["The phone is easy to buy.", "The phone is very cheap.", "The phone is rarely used.", "The phone is extremely expensive."], 3, "A expressão descreve um preço muito alto."],
        ["Complete: I don't eat candy often. I have it ___.", ["once in a blue moon", "piece of cake", "hit the nail", "cost an arm"], 0, "Once in a blue moon indica baixa frequência."],
        ["Choose the correct idiom: 'The quiz was very easy. It was a ___.'", ["blue moon", "piece of cake", "nail on the head", "cost of a leg"], 1, "Piece of cake significa muito fácil."],
        ["What does 'You hit the nail on the head' communicate?", ["You made a mess.", "You spent too much.", "You got exactly the right idea.", "You rarely do something."], 2, "A expressão indica que a pessoa acertou exatamente."],
        ["Which idiom would describe a very expensive vacation?", ["Piece of cake", "Once in a blue moon", "Hit the nail on the head", "Cost an arm and a leg"], 3, "Cost an arm and a leg descreve algo muito caro."]
      ]),
      6: buildQuestions(25, 6, [
        ["Choose the correct meaning of 'piece of cake'.", ["Very easy.", "Very rare.", "Very expensive.", "Exactly correct."], 0, "Piece of cake significa muito fácil."],
        ["Choose the correct meaning of 'once in a blue moon'.", ["Every week.", "Very rarely.", "Very cheaply.", "Very accurately."], 1, "Once in a blue moon significa muito raramente."],
        ["Choose the correct meaning of 'cost an arm and a leg'.", ["Be simple.", "Be unusual.", "Be extremely expensive.", "Be exactly right."], 2, "A expressão descreve algo extremamente caro."],
        ["Choose the correct meaning of 'hit the nail on the head'.", ["Make something expensive.", "Do something rarely.", "Eat a piece of cake.", "Identify the exact point."], 3, "Hit the nail on the head significa acertar exatamente."],
        ["Complete: 'Your answer is exactly right. You ___.'", ["hit the nail on the head", "cost an arm and a leg", "once in a blue moon", "piece of a moon"], 0, "A expressão adequada para acertar exatamente é hit the nail on the head."]
      ])
    },
    recovery: buildRecovery(25, [
      ["What does 'piece of cake' mean?", ["Very expensive.", "Very easy.", "Very rare.", "Very confusing."], 1, "Piece of cake significa muito fácil."],
      ["What does 'once in a blue moon' mean?", ["Every day.", "Very expensive.", "Very rarely.", "Exactly right."], 2, "Once in a blue moon significa raramente."],
      ["Complete: That designer bag costs an arm and a ___.", ["moon", "cake", "nail", "leg"], 3, "A expressão completa é cost an arm and a leg."],
      ["Someone gives the perfect explanation. You say:", ["You hit the nail on the head.", "It costs a blue moon.", "It's a piece of leg.", "Once in a cake."], 0, "Hit the nail on the head significa acertar exatamente."],
      ["Which idiom describes something extremely expensive?", ["Piece of cake", "Cost an arm and a leg", "Once in a blue moon", "Hit the nail on the head"], 1, "Cost an arm and a leg significa custar muito caro."]
    ])
},


  // ==========================================
  // SEMANA 26 — GERUND VS. INFINITIVE
  // ==========================================
  26: {
    days: {
      1: buildQuestions(26, 1, [
        ["Complete: I enjoy ___ books.", ["read", "reading", "to reading", "reads"], 1, "Depois de enjoy, usamos o gerúndio: verbo + -ing."],
        ["Complete: She wants ___ a doctor.", ["becoming", "become", "to become", "became"], 2, "Want é normalmente seguido de to + verbo."],
        ["Choose the correct sentence.", ["He avoids to drive at night.", "He avoid driving at night.", "He avoids drive at night.", "He avoids driving at night."], 3, "Avoid é seguido por um verbo com -ing."],
        ["Complete: They decided ___ home.", ["to stay", "staying", "stay", "stayed"], 0, "Decide é seguido por to + verbo."],
        ["Which verb is normally followed by a gerund?", ["Want", "Enjoy", "Decide", "Hope"], 1, "Enjoy é seguido por gerúndio: enjoy doing something."]
      ]),
      2: buildQuestions(26, 2, [
        ["Complete: I finished ___ my homework.", ["to do", "do", "doing", "did"], 2, "Finish é seguido por verbo com -ing."],
        ["Complete: He hopes ___ abroad.", ["traveling", "travel", "traveled", "to travel"], 3, "Hope é seguido por to + verbo."],
        ["Choose the correct sentence.", ["She suggested going to the park.", "She suggested to go to the park.", "She suggested go to the park.", "She suggesting to go to the park."], 0, "Suggest é normalmente seguido por gerúndio."],
        ["Complete: We plan ___ a new language.", ["learning", "to learn", "learn", "learned"], 1, "Plan é seguido por to + verbo."],
        ["Which sentence is correct?", ["I avoid to eat late.", "I avoid eat late.", "I avoid eating late.", "I avoiding eat late."], 2, "Avoid eating é a construção correta."]
      ]),
      3: buildQuestions(26, 3, [
        ["Complete: She is interested in ___ Japanese.", ["learn", "to learn", "learned", "learning"], 3, "Depois de uma preposição, usamos normalmente o gerúndio."],
        ["Complete: He is good at ___.", ["cooking", "to cook", "cook", "cooked"], 0, "At é uma preposição; por isso usamos cooking."],
        ["Choose the correct sentence.", ["I'm looking forward to see you.", "I'm looking forward to seeing you.", "I'm looking forward seeing you.", "I'm looking forward saw you."], 1, "Na expressão look forward to, o to é preposição e vem seguido de -ing."],
        ["Complete: She left without ___ goodbye.", ["say", "to say", "saying", "said"], 2, "Without é uma preposição e pede o gerúndio."],
        ["What follows a preposition in these examples?", ["Usually an infinitive without to.", "Always the past tense.", "Always a noun only.", "Usually a gerund when followed by a verb."], 3, "Quando uma preposição é seguida por um verbo, normalmente usamos -ing."]
      ]),
      4: buildQuestions(26, 4, [
        ["Complete: Remember ___ the door before leaving.", ["to lock", "locking", "lock", "locked"], 0, "Remember to do significa lembrar de realizar uma tarefa."],
        ["Complete: I remember ___ that movie as a child.", ["to watch", "watching", "watch", "watched"], 1, "Remember doing significa lembrar de algo que já aconteceu."],
        ["What is the difference between 'stop smoking' and 'stop to smoke'?", ["They mean exactly the same thing.", "Both refer only to future plans.", "'Stop smoking' means quit; 'stop to smoke' means pause another activity to smoke.", "The first is always incorrect."], 2, "Stop + -ing indica abandonar uma atividade; stop + to indica parar para fazer outra coisa."],
        ["Complete: He stopped ___ some water on his way home.", ["drinking", "drink", "drank", "to buy"], 3, "Stopped to buy indica que ele interrompeu o caminho para comprar água."],
        ["Choose the correct sentence.", ["I forgot to call my grandmother.", "I forgot calling my grandmother tomorrow.", "I forgot call my grandmother.", "I forgetting to called my grandmother."], 0, "Forget to do significa esquecer de realizar uma tarefa."]
      ]),
      5: buildQuestions(26, 5, [
        ["Complete: She wants ___ abroad, but she enjoys ___ at home too.", ["traveling / to relax", "to travel / relaxing", "travel / relax", "to traveling / relax"], 1, "Want pede infinitivo; enjoy pede gerúndio."],
        ["Choose the correct sentence.", ["He decided studying.", "He enjoys to swim.", "They finished working.", "She avoids to drive."], 2, "Finish é seguido por gerúndio: finished working."],
        ["Complete: I'm thinking about ___ a new computer.", ["buy", "to buy", "bought", "buying"], 3, "About é preposição e pede buying."],
        ["Complete: My brother promised ___ me.", ["to help", "helping", "help", "helped"], 0, "Promise é seguido por to + verbo."],
        ["Which pair is correct?", ["Enjoy to read / want reading", "Enjoy reading / want to read", "Enjoy read / want reads", "Enjoy reads / want to reading"], 1, "Enjoy + -ing e want + to + verbo."]
      ]),
      6: buildQuestions(26, 6, [
        ["Choose the correct sentence.", ["I hope getting better.", "I enjoy to play chess.", "I hope to get better.", "I avoid to make mistakes."], 2, "Hope é seguido por infinitivo com to."],
        ["Complete: He admitted ___ the mistake.", ["make", "to make", "made", "making"], 3, "Admit é seguido por gerúndio."],
        ["Complete: We agreed ___ together.", ["to work", "working", "work", "worked"], 0, "Agree é seguido por to + verbo."],
        ["What does 'I stopped reading' mean?", ["I paused another activity to read.", "I quit reading.", "I started reading.", "I will read later."], 1, "Stop reading significa interromper ou abandonar a leitura."],
        ["What does 'I stopped to read' mean?", ["I quit reading forever.", "I finished reading.", "I paused another activity in order to read.", "I avoided reading."], 2, "Stop to read significa parar outra atividade para ler."]
      ])
    },
    recovery: buildRecovery(26, [
      ["Complete: I enjoy ___ music.", ["to listen", "listen", "listened", "listening"], 3, "Enjoy é seguido por gerúndio."],
      ["Complete: She decided ___ early.", ["to leave", "leaving", "leave", "left"], 0, "Decide é seguido por to + verbo."],
      ["Complete: He is interested in ___ English.", ["study", "studying", "to study", "studied"], 1, "In é uma preposição; usamos studying."],
      ["Choose the correct sentence.", ["They avoid to fight.", "They avoid fight.", "They avoid fighting.", "They avoiding to fight."], 2, "Avoid é seguido por gerúndio."],
      ["What does 'stop to rest' mean?", ["Quit resting forever.", "Finish resting.", "Avoid resting.", "Pause another activity in order to rest."], 3, "Stop to rest significa parar outra atividade para descansar."]
    ])
  },

  // ==========================================
  // SEMANA 27 — ZERO, FIRST AND SECOND CONDITIONALS
  // ==========================================
  27: {
    days: {
      1: buildQuestions(27, 1, [
        ["Complete: If you heat ice, it ___.", ["melts", "melted", "will melting", "would melt"], 0, "Zero Conditional descreve fatos gerais: if + presente, presente."],
        ["What is the Zero Conditional mainly used for?", ["Imaginary situations.", "General truths and facts.", "Unreal past situations.", "Future predictions only."], 1, "O Zero Conditional expressa verdades gerais, regras e resultados habituais."],
        ["Complete: If water reaches 100°C, it ___.", ["boiled", "will boiling", "boils", "would boil"], 2, "O resultado de uma verdade científica fica no presente simples."],
        ["Choose the correct Zero Conditional sentence.", ["If it will rain, the ground gets wet.", "If it rained, the ground gets wet.", "If it raining, the ground gets wet.", "If it rains, the ground gets wet."], 3, "If + presente simples, presente simples."],
        ["Complete: If people don't drink water, they ___.", ["get thirsty", "got thirsty", "will got thirsty", "would getting thirsty"], 0, "O Zero Conditional descreve uma consequência geral."]
      ]),
      2: buildQuestions(27, 2, [
        ["Complete: If it rains tomorrow, I ___ at home.", ["stayed", "will stay", "would stayed", "staying"], 1, "First Conditional: if + presente, will + verbo."],
        ["What does the First Conditional describe?", ["Impossible past events.", "Scientific facts only.", "Realistic future possibilities.", "Imaginary situations in the present only."], 2, "O First Conditional fala de possibilidades futuras reais."],
        ["Choose the correct sentence.", ["If I will see him, I tell him.", "If I saw him, I will tell him.", "If I seeing him, I will tell him.", "If I see him, I will tell him."], 3, "Na oração com if, usamos presente simples, não will."],
        ["Complete: If she studies, she ___ the test.", ["will pass", "passed", "would passed", "passing"], 0, "Will pass expressa o resultado futuro possível."],
        ["Complete: We will miss the bus if we ___ now.", ["won't leave", "don't leave", "didn't leave", "wouldn't leave"], 1, "Na oração com if, usamos don't leave."]
      ]),
      3: buildQuestions(27, 3, [
        ["Complete: If I had more free time, I ___ another language.", ["will learn", "learned", "would learn", "am learning"], 2, "Second Conditional: if + passado simples, would + verbo."],
        ["What does the Second Conditional express?", ["A guaranteed future fact.", "A scientific truth.", "A completed past event.", "An imaginary or unlikely present/future situation."], 3, "O Second Conditional fala de situações hipotéticas ou improváveis."],
        ["Choose the correct sentence.", ["If I were rich, I would travel the world.", "If I will be rich, I travel the world.", "If I am rich, I would traveled the world.", "If I was rich, I will travel the world."], 0, "If I were é uma forma tradicional usada em hipóteses."],
        ["Complete: If he knew the answer, he ___ us.", ["will tell", "would tell", "tells", "telling"], 1, "Would tell é a consequência hipotética."],
        ["Which structure is correct for the Second Conditional?", ["If + will, would + past.", "If + present, will + past.", "If + past simple, would + base verb.", "If + past perfect, will + verb."], 2, "A estrutura é if + passado simples, would + verbo base."]
      ]),
      4: buildQuestions(27, 4, [
        ["Which conditional describes a general fact?", ["First", "Second", "Third", "Zero"], 3, "Zero Conditional descreve fatos e verdades gerais."],
        ["Which conditional is best for a realistic future possibility?", ["First", "Second", "Third", "Mixed"], 0, "First Conditional é usado para possibilidades futuras reais."],
        ["Which conditional is best for an imaginary situation?", ["Zero", "Second", "First", "Third"], 1, "Second Conditional apresenta uma hipótese imaginária ou improvável."],
        ["Complete: If I ___ you, I would apologize.", ["am", "will be", "were", "would be"], 2, "Were é usado nessa estrutura hipotética tradicional."],
        ["Complete: If you press this button, the machine ___.", ["will started", "would start", "starting", "starts"], 3, "É uma consequência geral: Zero Conditional."]
      ]),
      5: buildQuestions(27, 5, [
        ["Complete: If we leave now, we ___ on time.", ["will arrive", "would arrived", "arrived", "arriving"], 0, "First Conditional descreve uma possibilidade futura."],
        ["Complete: If I lived near the beach, I ___ swimming every day.", ["will go", "would go", "go", "went"], 1, "A situação é hipotética; usamos would go."],
        ["Choose the correct Zero Conditional sentence.", ["If you mix red and blue, you will got purple.", "If you mixed red and blue, you get purple.", "If you mix red and blue, you get purple.", "If you mixing red and blue, you got purple."], 2, "Uma verdade geral usa presente nas duas orações."],
        ["Complete: If she doesn't hurry, she ___ the train.", ["would miss", "missed", "missing", "will miss"], 3, "Will miss é o resultado futuro provável."],
        ["Complete: If I were taller, I ___ basketball professionally.", ["would play", "will play", "played yesterday", "play tomorrow"], 0, "Would play expressa uma situação hipotética."]
      ]),
      6: buildQuestions(27, 6, [
        ["Identify the conditional: 'If you freeze water, it becomes ice.'", ["First", "Zero", "Second", "Third"], 1, "É uma verdade geral, então é Zero Conditional."],
        ["Identify the conditional: 'If I win the competition, I'll celebrate.'", ["Zero", "Second", "First", "Third"], 2, "É uma possibilidade futura real."],
        ["Identify the conditional: 'If I had wings, I would fly.'", ["Zero", "First", "Third", "Second"], 3, "É uma situação imaginária."],
        ["Choose the correct sentence.", ["If I had a car, I would drive to school.", "If I will have a car, I would drive to school.", "If I have a car, I would drove to school.", "If I had a car, I will drove to school."], 0, "If + passado simples e would + verbo base."],
        ["Complete: If you don't water plants, they ___.", ["will died", "die", "would died", "dying"], 1, "O Zero Conditional descreve essa consequência geral."]
      ])
    },
    recovery: buildRecovery(27, [
      ["Complete: If you heat water, it ___.", ["boiled", "will boiling", "boils", "would boiled"], 2, "Zero Conditional usa presente nas duas partes."],
      ["Complete: If I see her, I ___ hello.", ["would say", "said", "saying", "will say"], 3, "First Conditional: if + presente, will + verbo."],
      ["Complete: If I were you, I ___ the truth.", ["would tell", "will told", "tell yesterday", "telling"], 0, "Second Conditional usa would + verbo base."],
      ["Which conditional describes a hypothetical present?", ["Zero", "Second", "First", "Only future"], 1, "Second Conditional é usado para hipóteses."],
      ["Choose the correct First Conditional.", ["If it will rain, I stay.", "If it rained, I will stay.", "If it rains, I will stay.", "If it raining, I stayed."], 2, "A oração com if fica no presente simples."]
    ])
  },

  // ==========================================
  // SEMANA 28 — PHASE 2 REVIEW
  // ==========================================
  28: {
    days: {
      1: buildQuestions(28, 1, [
        ["Complete: She ___ speak three languages.", ["can", "cans", "canning", "to can"], 0, "Can expressa habilidade e não recebe -s na terceira pessoa."],
        ["Choose the correct sentence.", ["He should to study more.", "He should study more.", "He should studies more.", "He should studying more."], 1, "Depois de should, usamos o verbo base sem to."],
        ["Complete: This book is ___ than that one.", ["interesting", "most interesting", "more interesting", "the more interesting"], 2, "More interesting forma o comparativo de adjetivos longos."],
        ["Complete: I was ___ because the movie was boring.", ["bored", "boring", "bore", "bores"], 0, "Bored descreve como a pessoa se sente."],
        ["Which sentence is in the Past Continuous?", ["I study every day.", "I was studying when you called.", "I will study tomorrow.", "I have studied before."], 1, "Was studying é a estrutura do Past Continuous."]
      ]),
      2: buildQuestions(28, 2, [
        ["Complete: You ___ wear a seat belt in a car.", ["might", "could", "must", "may"], 2, "Must expressa obrigação forte."],
        ["Choose the correct comparative.", ["This is the most cheap option.", "This is more cheaper.", "This is cheapier.", "This is cheaper."], 3, "Cheaper é o comparativo de cheap."],
        ["Complete: I ___ my homework before dinner yesterday.", ["finished", "finish", "have finish", "finishing"], 0, "Finished é o passado simples de finish."],
        ["What does 'You should rest' express?", ["Permission.", "Advice.", "Ability.", "A past event."], 1, "Should é usado para dar conselhos."],
        ["Complete: They ___ watching TV when I arrived.", ["is", "was", "were", "be"], 2, "Com they, usamos were."]
      ]),
      3: buildQuestions(28, 3, [
        ["Complete: I ___ never been to Japan.", ["has", "hadn't", "am", "have"], 3, "Present Perfect usa have/has + particípio."],
        ["Choose the correct sentence.", ["She has already eaten.", "She have already ate.", "She has already eat.", "She already eating."], 0, "Has eaten é a forma correta do Present Perfect."],
        ["Complete: You ___ finish this today; it's not urgent.", ["must", "don't have to", "shouldn't to", "couldn't"], 1, "Don't have to significa que não é necessário."],
        ["What does 'yet' commonly indicate in Present Perfect questions and negatives?", ["A habitual action.", "A past time with a specific date.", "Something expected that has not happened or is being asked about.", "A future plan with going to."], 2, "Yet aparece frequentemente em perguntas e negativas sobre algo esperado."],
        ["Choose the correct sentence.", ["He is more tall than me.", "He is tallest than me.", "He is most tall than me.", "He is taller than me."], 3, "Taller é o comparativo de tall."]
      ]),
      4: buildQuestions(28, 4, [
        ["Complete: If I have time tomorrow, I ___ you.", ["will call", "would called", "called", "calling"], 0, "First Conditional: if + presente, will + verbo."],
        ["Complete: If I were a bird, I ___ everywhere.", ["will fly", "would fly", "flew yesterday", "am flying"], 1, "Second Conditional expressa uma situação imaginária."],
        ["Choose the correct sentence.", ["I have saw that film.", "I has seen that film.", "I have seen that film.", "I seeing that film."], 2, "Have seen é Present Perfect."],
        ["Complete: She ___ be at home; I'm not sure.", ["must", "has to", "should", "might"], 3, "Might expressa possibilidade ou incerteza."],
        ["Which sentence gives advice?", ["You should talk to your teacher.", "You must be at the door now.", "She can swim.", "They were playing."], 0, "Should talk é um conselho."]
      ]),
      5: buildQuestions(28, 5, [
        ["Complete: We have lived here ___ 2021.", ["for", "since", "during", "ago"], 1, "Since acompanha o ponto inicial da situação."],
        ["Choose the correct sentence.", ["I have been study for hours.", "I has been studying for hours.", "I have been studying for hours.", "I am been studying for hours."], 2, "Present Perfect Continuous: have been + verbo com -ing."],
        ["Complete: The letters ___ sent yesterday.", ["is", "was", "be", "were"], 3, "Letters é plural; no passado passivo usamos were sent."],
        ["Choose the correct reported speech: 'I am tired,' he said.", ["He said he was tired.", "He said I am tired.", "He said he tired.", "He said he were tired."], 0, "Am muda normalmente para was no discurso indireto."],
        ["What does 'once in a blue moon' mean?", ["Very easily.", "Very rarely.", "Very expensively.", "Exactly correctly."], 1, "Once in a blue moon significa muito raramente."]
      ]),
      6: buildQuestions(28, 6, [
        ["Complete: She enjoys ___ novels.", ["to read", "read", "reading", "reads"], 2, "Enjoy é seguido por gerúndio."],
        ["Choose the correct sentence.", ["If I will be rich, I travel.", "If I am rich, I would traveled.", "If I were rich, I will travel.", "If I were rich, I would travel."], 3, "Second Conditional: if + passado, would + verbo base."],
        ["Complete: The bridge ___ built in 1980.", ["was", "were", "are", "be"], 0, "Bridge é singular; no passado passivo usamos was built."],
        ["Choose the correct sentence.", ["He told that he was sick.", "He told me that he was sick.", "He said me that he sick.", "He told me he is sick yesterday."], 1, "Told precisa de um objeto como me, us ou them."],
        ["What does 'hit the nail on the head' mean?", ["Be very expensive.", "Be very easy.", "Identify exactly the right point.", "Happen very rarely."], 2, "A expressão significa acertar exatamente."]
      ])
    },
    recovery: buildRecovery(28, [
      ["Choose the correct modal sentence.", ["She can to swim.", "She cans swim.", "She can swimming.", "She can swim."], 3, "Can é seguido pelo verbo base."],
      ["Complete: This test is ___ than the last one.", ["easier", "more easy", "easiest", "most easy"], 0, "Easier é o comparativo de easy."],
      ["Complete: If it rains, we ___ inside.", ["would stayed", "will stay", "stayed", "staying"], 1, "First Conditional descreve uma possibilidade futura."],
      ["Choose the correct Present Perfect sentence.", ["He have finished.", "He has finish.", "He has finished.", "He finishing."], 2, "Has finished é a estrutura correta."],
      ["What does 'piece of cake' mean?", ["Very expensive.", "Very rare.", "Exactly right.", "Very easy."], 3, "Piece of cake significa algo muito fácil."]
    ])
  },

  // ==========================================
  // SEMANA 29 — THIRD AND MIXED CONDITIONALS
  // ==========================================
  29: {
    days: {
      1: buildQuestions(29, 1, [
        ["Choose the correct structure of the Third Conditional.", ["If + past perfect, would have + past participle.", "If + present, will + verb.", "If + past, would + verb.", "If + present, present."], 0, "Third Conditional: if + had + particípio, would have + particípio."],
        ["Complete: If I had studied, I ___ the exam.", ["will pass", "would have passed", "would pass", "passed"], 1, "Would have passed expressa um resultado hipotético no passado."],
        ["What does the Third Conditional describe?", ["General truths.", "Real future plans.", "Imaginary past situations and their results.", "Habits in the present."], 2, "Ele fala de situações passadas que não aconteceram e de resultados imaginados."],
        ["Complete: If she had left earlier, she ___ the train.", ["would catch", "will catch", "caught", "would have caught"], 3, "Would have caught é a consequência hipotética passada."],
        ["Choose the correct sentence.", ["If they had invited me, I would have gone.", "If they invited me, I would have went.", "If they had invite me, I went.", "If they would have invited me, I had gone."], 0, "Had invited + would have gone forma o Third Conditional."]
      ]),
      2: buildQuestions(29, 2, [
        ["Complete: If we ___ the map, we wouldn't have gotten lost.", ["hadn't forgotten", "didn't forget", "don't forget", "wouldn't forget"], 0, "A oração com if usa past perfect."],
        ["Choose the correct sentence.", ["If he had trained, he would win yesterday.", "If he had trained, he would have won.", "If he trained, he would have won.", "If he would train, he won."], 1, "O resultado passado hipotético usa would have + particípio."],
        ["What does 'If I had known, I would have helped' mean?", ["I knew and helped.", "I will help tomorrow.", "I didn't know, so I didn't help.", "I always help."], 2, "A frase imagina uma situação diferente no passado."],
        ["Complete: She would have arrived on time if she ___ earlier.", ["leaves", "would leave", "left", "had left"], 3, "Had left é o past perfect necessário."],
        ["Which word completes: 'If they had ___ the warning...'", ["seen", "saw", "see", "seeing"], 0, "Seen é o particípio de see."]
      ]),
      3: buildQuestions(29, 3, [
        ["What is a Mixed Conditional?", ["A sentence with no condition.", "A conditional combining different time references.", "A sentence only about scientific facts.", "A sentence without a main clause."], 1, "Mixed Conditional combina tempos diferentes, como uma condição passada e um resultado presente."],
        ["Complete: If I had gone to bed earlier, I ___ less tired now.", ["will be", "would have been", "would be", "am"], 2, "A condição é passada; o resultado é presente: would be."],
        ["Choose the correct sentence.", ["If she had studied medicine, she would have a different job now.", "If she studies medicine, she would have a different job yesterday.", "If she had study medicine, she has a different job now.", "If she would study medicine, she had a different job."], 0, "A condição passada influencia uma situação presente."],
        ["Complete: If he weren't so careless, he ___ his phone yesterday.", ["wouldn't lose", "won't lose", "doesn't lose", "wouldn't have lost"], 3, "A condição é presente/geral; o resultado imaginado é passado."],
        ["Which sentence has a past condition and a present result?", ["If I had saved money, I would be rich now.", "If I save money, I will be rich.", "If I were rich, I would travel.", "If water freezes, it becomes ice."], 0, "Had saved é a condição passada; would be é o resultado presente."]
      ]),
      4: buildQuestions(29, 4, [
        ["Complete: If she had accepted the offer, she ___ in London now.", ["will live", "would live", "would have lived", "lives"], 1, "A condição é passada e o resultado é presente."],
        ["Complete: If I weren't afraid of heights, I ___ on that plane last year.", ["would fly", "will fly", "would have flown", "flew"], 2, "A condição atual explica um resultado hipotético no passado."],
        ["Choose the correct Third Conditional.", ["If I had known, I would have called.", "If I know, I would have called.", "If I had knew, I called.", "If I would know, I had called."], 0, "Had known + would have called é a estrutura correta."],
        ["What does 'If he had practiced, he would have played better' express?", ["A guaranteed future result.", "A general truth.", "A current ability.", "A different possible outcome in the past."], 3, "A frase imagina um resultado diferente para uma situação passada."],
        ["Complete: If they had taken a taxi, they ___ late.", ["wouldn't be", "wouldn't have been", "won't be", "aren't"], 1, "Wouldn't have been é o resultado hipotético no passado."]
      ]),
      5: buildQuestions(29, 5, [
        ["Identify the conditional: 'If I had studied harder, I would have passed.'", ["Zero", "First", "Third", "Second"], 2, "É Third Conditional: condição e resultado imaginários no passado."],
        ["Identify the conditional: 'If I had slept more, I would feel better now.'", ["Third only", "First", "Zero", "Mixed"], 3, "A condição é passada e o resultado é presente."],
        ["Complete: If she ___ more careful, she wouldn't have made that mistake.", ["had been", "is", "will be", "would be"], 0, "Had been é a forma past perfect da condição."],
        ["Choose the correct Mixed Conditional.", ["If I had studied, I would have passed yesterday.", "If I had taken that job, I would live abroad now.", "If I study, I would travel.", "If I had study, I live abroad."], 1, "Uma escolha passada teria uma consequência na vida atual."],
        ["Complete: I wouldn't have missed the bus if I ___ earlier.", ["wake up", "would wake up", "had woken up", "woke up tomorrow"], 2, "Had woken up é o past perfect da condição."]
      ]),
      6: buildQuestions(29, 6, [
        ["Choose the correct Third Conditional sentence.", ["If we had left earlier, we would have arrived on time.", "If we leave earlier, we would arrive yesterday.", "If we had leave earlier, we arrived on time.", "If we would leave earlier, we had arrived."], 0, "Had left + would have arrived forma o Third Conditional."],
        ["Choose the correct Mixed Conditional sentence.", ["If I had saved money, I would have bought it yesterday.", "If I had saved money, I could afford it now.", "If I save money, I could afford it yesterday.", "If I had save money, I afford it now."], 1, "A condição passada tem consequência no presente."],
        ["Complete: If he hadn't missed the class, he ___ the topic now.", ["understands", "will understand", "would understand", "would have understood"], 2, "A condição passada influencia o entendimento presente."],
        ["What does the Third Conditional often express?", ["A daily routine.", "A scientific law.", "A future promise.", "Regret or an imagined alternative past."], 3, "Ele é frequentemente usado para falar de arrependimentos ou alternativas passadas."],
        ["Complete: If I had brought my umbrella, I ___ wet.", ["wouldn't have gotten", "won't get", "don't get", "wouldn't get tomorrow"], 0, "Wouldn't have gotten é o resultado hipotético passado."]
      ])
    },
    recovery: buildRecovery(29, [
      ["Complete: If I had studied, I ___ the test.", ["will pass", "would have passed", "would pass", "pass"], 1, "Third Conditional usa would have + particípio."],
      ["Complete: If she had slept earlier, she ___ better now.", ["will feel", "would have felt", "would feel", "feels yesterday"], 2, "A condição passada tem resultado presente."],
      ["Choose the correct Third Conditional.", ["If he had knew, he would help.", "If he knows, he would have helped.", "If he would know, he helped.", "If he had known, he would have helped."], 3, "Had known + would have helped é a estrutura correta."],
      ["What is a Mixed Conditional?", ["A conditional connecting different time references.", "A conditional used only for facts.", "A sentence without a verb.", "A sentence about commands."], 0, "Mixed Conditional conecta condições e resultados em tempos diferentes."],
      ["Complete: If they had left earlier, they ___ the flight.", ["would catch", "would have caught", "will catch", "catch"], 1, "Would have caught expressa um resultado passado imaginário."]
    ])
  },

  // ==========================================
  // SEMANA 30 — RELATIVE CLAUSES
  // ==========================================
  30: {
    days: {
      1: buildQuestions(30, 1, [
        ["Which relative pronoun is commonly used for people?", ["Which", "Where", "Who", "When"], 2, "Who é usado para se referir a pessoas."],
        ["Complete: The woman ___ lives next door is a teacher.", ["which", "where", "whose", "who"], 3, "Who se refere à mulher, uma pessoa."],
        ["Which relative pronoun is commonly used for things?", ["Which", "Who", "Whose", "Where"], 0, "Which é usado para coisas e animais."],
        ["Complete: This is the book ___ I bought yesterday.", ["who", "which", "where", "whose"], 1, "Which se refere ao livro."],
        ["Choose the correct sentence.", ["The boy which called me is here.", "The boy where called me is here.", "The boy who called me is here.", "The boy whose called me is here."], 2, "Who conecta a informação adicional à pessoa."]
      ]),
      2: buildQuestions(30, 2, [
        ["Which relative pronoun indicates possession?", ["Who", "Which", "Where", "Whose"], 3, "Whose indica posse."],
        ["Complete: That's the girl ___ brother plays football.", ["whose", "who", "which", "where"], 0, "Whose brother indica que o irmão pertence àquela pessoa."],
        ["Choose the correct sentence.", ["I know a man which car is red.", "I know a man whose car is red.", "I know a man where car is red.", "I know a man who car is red."], 1, "Whose conecta a pessoa ao objeto que ela possui."],
        ["Complete: The student ___ project won is very happy.", ["which", "where", "whose", "who"], 2, "Whose project indica posse."],
        ["What does 'whose' usually express?", ["Location.", "Time.", "A physical action.", "Possession or relationship."], 3, "Whose indica a quem algo pertence ou com quem algo está relacionado."]
      ]),
      3: buildQuestions(30, 3, [
        ["Which relative word indicates a place?", ["Where", "Who", "Whose", "Which"], 0, "Where é usado para lugares."],
        ["Complete: This is the restaurant ___ we had dinner.", ["who", "where", "whose", "which"], 1, "Where conecta a informação ao lugar."],
        ["Choose the correct sentence.", ["That's the city who I was born.", "That's the city whose I was born.", "That's the city where I was born.", "That's the city which I was born."], 2, "Where é apropriado para indicar o local de nascimento."],
        ["Which word can introduce information about a time?", ["Where", "Whose", "Who", "When"], 3, "When pode se referir a um momento ou período."],
        ["Complete: I remember the day ___ we first met.", ["when", "where", "whose", "who"], 0, "When se refere ao dia em que algo aconteceu."]
      ]),
      4: buildQuestions(30, 4, [
        ["Complete: The movie ___ we watched was amazing.", ["who", "which", "where", "whose"], 1, "Which se refere ao filme."],
        ["Complete: The teacher ___ helped me was very patient.", ["which", "where", "who", "whose"], 2, "Who se refere à professora."],
        ["Choose the correct sentence.", ["The house who has a blue door is mine.", "The house where has a blue door is mine.", "The house whose has a blue door is mine.", "The house which has a blue door is mine."], 3, "Which é usado para retomar house."],
        ["Complete: The boy ___ dog is very friendly lives here.", ["whose", "who", "where", "which"], 0, "Whose dog indica posse."],
        ["Complete: The park ___ we play football is nearby.", ["who", "where", "whose", "when"], 1, "Where indica o local da atividade."]
      ]),
      5: buildQuestions(30, 5, [
        ["Which sentence correctly uses a relative clause?", ["The woman which lives here is kind.", "The woman where lives here is kind.", "The woman who lives here is kind.", "The woman whose lives here is kind."], 2, "Who é o pronome relativo adequado para a pessoa."],
        ["Complete: The laptop ___ I bought is already broken.", ["who", "where", "whose", "which"], 3, "Which retoma o objeto laptop."],
        ["Complete: That's the village ___ my grandfather grew up.", ["where", "who", "whose", "when"], 0, "Where introduz o lugar."],
        ["Complete: I met a writer ___ books are famous.", ["who", "whose", "which", "where"], 1, "Whose indica que os livros pertencem ao escritor."],
        ["What does a relative clause do?", ["Changes a verb into the past.", "Creates a question.", "Adds information about a noun.", "Always describes the future."], 2, "Relative Clauses acrescentam informações sobre pessoas, lugares ou coisas."]
      ]),
      6: buildQuestions(30, 6, [
        ["Complete: The person ___ called you is outside.", ["which", "where", "whose", "who"], 3, "Who se refere a uma pessoa."],
        ["Complete: This is the school ___ my mother studied.", ["where", "who", "whose", "when"], 0, "Where indica o lugar."],
        ["Complete: I remember the year ___ we moved here.", ["where", "when", "who", "whose"], 1, "When indica o momento ou período."],
        ["Choose the correct sentence.", ["The girl which father is a doctor is here.", "The girl where father is a doctor is here.", "The girl whose father is a doctor is here.", "The girl who father is a doctor is here."], 2, "Whose father indica posse ou relação familiar."],
        ["Choose the correct sentence.", ["The phone who I bought is new.", "The phone where I bought is new.", "The phone whose I bought is new.", "The phone which I bought is new."], 3, "Which se refere ao objeto phone."]
      ])
    },
    recovery: buildRecovery(30, [
      ["Which word is commonly used for people?", ["Who", "Which", "Where", "When"], 0, "Who se refere a pessoas."],
      ["Complete: The book ___ I read was interesting.", ["who", "which", "where", "whose"], 1, "Which se refere ao livro."],
      ["Complete: The man ___ daughter is a singer is my neighbor.", ["who", "where", "whose", "which"], 2, "Whose indica a relação entre o homem e a filha."],
      ["Complete: This is the place ___ we met.", ["who", "whose", "which", "where"], 3, "Where indica o lugar."],
      ["What is the purpose of a relative clause?", ["To add information about a noun.", "To form every question.", "To change all verbs into the past.", "To express only future plans."], 0, "Relative Clauses acrescentam informações sobre um substantivo."]
    ])
},

  // ==========================================
  // SEMANA 31 — GÍRIAS E EXPRESSÕES INFORMAIS
  // ==========================================
  31: {
    days: {
      1: buildQuestions(31, 1, [
        ["What does 'gonna' mean?", ["Going to", "Got to", "Want to", "Have to"], 0, "Gonna é a forma informal de going to, usada para falar de planos ou futuro."],
        ["Complete: I'm ___ watch a movie tonight.", ["wanna", "gonna", "gotta", "kinda"], 1, "Gonna watch significa going to watch."],
        ["What does 'wanna' mean?", ["Would not", "Going to", "Want to", "Have got"], 2, "Wanna é a pronúncia informal de want to."],
        ["Complete: I ___ buy some food. I'm hungry.", ["gonna", "kinda", "sort of", "wanna"], 3, "Wanna buy significa want to buy."],
        ["Which expression is informal?", ["Gonna", "Nevertheless", "Furthermore", "Consequently"], 0, "Gonna é uma contração informal muito comum na fala."]
      ]),
      2: buildQuestions(31, 2, [
        ["What does 'gotta' usually mean?", ["Want to", "Got to / have to", "Going to", "Kind of"], 1, "Gotta expressa necessidade ou obrigação: got to."],
        ["Complete: I ___ go now. It's getting late.", ["wanna", "kinda", "gotta", "lemme"], 2, "Gotta go significa preciso ir."],
        ["What does 'kinda' mean?", ["Kind of", "Going to", "Have to", "Let me"], 0, "Kinda é uma forma informal de kind of."],
        ["Complete: I'm ___ tired today.", ["gonna", "kinda", "gotta", "whatcha"], 1, "Kinda tired significa meio cansado."],
        ["What does 'sort of' express?", ["A strong certainty", "A command", "A partial or approximate idea", "A past action"], 2, "Sort of significa algo como meio que ou de certa forma."]
      ]),
      3: buildQuestions(31, 3, [
        ["What does 'lemme' mean?", ["Let me", "Leave me", "Look at me", "Tell me"], 0, "Lemme é uma forma informal de let me."],
        ["Complete: ___ see what happened.", ["Gotta", "Lemme", "Wanna", "Kinda"], 1, "Lemme see significa deixe-me ver."],
        ["What does 'whatcha' commonly mean in conversation?", ["What are you / what do you", "Where are you", "Who are they", "Why did you"], 0, "Whatcha representa uma pronúncia informal de expressões como what are you ou what do you, dependendo do contexto."],
        ["Complete: Whatcha ___?", ["doing", "do", "does", "didn't"], 0, "Whatcha doing? é uma forma informal de What are you doing?."],
        ["Which expression means 'deixe-me tentar'?", ["Gonna try", "Lemme try", "Kinda try", "Whatcha try"], 1, "Lemme try significa let me try."]
      ]),
      4: buildQuestions(31, 4, [
        ["In a conversation, what does 'I'm gonna head out' mean?", ["Vou começar a estudar.", "Vou sair / estou indo embora.", "Quero voltar amanhã.", "Preciso comprar algo."], 1, "Head out significa sair ou ir embora."],
        ["What does 'I gotta go' mean?", ["Quero ir.", "Talvez eu vá.", "Preciso ir.", "Eu fui."], 2, "Gotta go expressa necessidade de ir."],
        ["Choose the informal equivalent of 'Do you want to come?'", ["Whatcha come?", "Gotta come?", "Kinda come?", "Wanna come?"], 3, "Wanna come? é a forma informal de perguntar se alguém quer vir."],
        ["What does 'It's kinda weird' mean?", ["É meio estranho.", "É extremamente perigoso.", "É muito caro.", "É completamente normal."], 0, "Kinda indica uma característica aproximada ou moderada."],
        ["Which sentence is most appropriate for a formal business email?", ["I gotta send it.", "I have to send it.", "I wanna send it.", "I'm gonna send it, dude."], 1, "Em comunicação profissional, prefira formas completas e claras."]
      ]),
      5: buildQuestions(31, 5, [
        ["You hear: 'Whatcha gonna do?' What is being asked?", ["What did you do yesterday?", "Where are you going?", "What are you going to do?", "Who are you talking to?"], 2, "Whatcha gonna do? equivale informalmente a What are you going to do?."],
        ["Complete: I ___ ask him, but I'm not sure.", ["gotta", "wanna", "lemme", "might"], 1, "Wanna ask significa querer perguntar."],
        ["Which phrase means 'mais ou menos'?", ["Gonna", "Gotta", "Lemme", "Sort of"], 3, "Sort of pode significar mais ou menos ou de certa forma."],
        ["Why are informal expressions useful when watching series?", ["They help recognize natural spoken English.", "They replace all grammar rules.", "They are always used in formal writing.", "They have exactly the same pronunciation everywhere."], 0, "Reconhecer reduções informais ajuda a compreender diálogos naturais."],
        ["Which statement is correct?", ["Gonna is always formal.", "Informal reductions depend on context.", "Wanna is the past tense of want.", "Gotta always means going to."], 1, "O contexto determina como interpretar essas expressões."]
      ]),
      6: buildQuestions(31, 6, [
        ["Choose the correct meaning: 'Lemme know.'", ["Leave me alone.", "Let me know.", "Look at me.", "Let me go."], 1, "Lemme know significa me avise."],
        ["What does 'I'm gonna call you later' mean?", ["Liguei para você.", "Talvez eu ligue.", "Vou ligar para você mais tarde.", "Preciso que você ligue."], 2, "Gonna indica uma intenção ou plano futuro."],
        ["Choose the correct informal equivalent of 'I have to leave.'", ["I wanna leave.", "I kinda leave.", "I lemme leave.", "I gotta leave."], 3, "Gotta leave significa preciso sair."],
        ["What should you do when you don't understand a reduced expression in a series?", ["Use the surrounding context to infer its meaning.", "Assume every word is a new verb.", "Ignore the entire dialogue.", "Translate only the final word."], 0, "Contexto, situação e palavras próximas ajudam a identificar expressões reduzidas."],
        ["Which expression means 'O que você está fazendo?'", ["Where you gonna?", "Whatcha doing?", "Gotta doing?", "Lemme doing?"], 1, "Whatcha doing? equivale a What are you doing?."]
      ])
    },
    recovery: buildRecovery(31, [
      ["Gonna is an informal form of:", ["Got to", "Want to", "Going to", "Let me"], 2, "Gonna significa going to."],
      ["Wanna means:", ["Have to", "Kind of", "Let me", "Want to"], 3, "Wanna significa want to."],
      ["Complete: I ___ finish this today.", ["gotta", "whatcha", "kinda", "lemme"], 0, "Gotta expressa obrigação ou necessidade."],
      ["Lemme means:", ["Leave me", "Let me", "Look me", "Tell me"], 1, "Lemme é a redução de let me."],
      ["Why learn informal English?", ["To avoid learning grammar.", "To speak formally in every situation.", "To understand natural conversations.", "To replace vocabulary study."], 2, "As reduções aparecem frequentemente na fala cotidiana."]
    ])
  },

  // ==========================================
  // SEMANA 32 — OPINIÕES, ACORDOS E DESACORDOS
  // ==========================================
  32: {
    days: {
      1: buildQuestions(32, 1, [
        ["What does 'From my point of view' mean?", ["Na minha opinião / do meu ponto de vista.", "Eu não sei.", "Concordo completamente.", "Não importa."], 0, "A expressão apresenta a perspectiva pessoal de alguém."],
        ["Complete: ___, technology makes learning easier.", ["On the other hand", "From my point of view", "I disagree", "Never mind"], 1, "A expressão introduz uma opinião."],
        ["What does 'In my opinion' introduce?", ["A question", "A command", "A personal viewpoint", "A past event"], 2, "In my opinion significa na minha opinião."],
        ["Which phrase is suitable for presenting an argument?", ["I don't care.", "Whatever.", "That's nonsense.", "I believe that education is essential."], 3, "I believe that apresenta uma opinião de maneira clara."],
        ["Choose the most polite way to express an opinion.", ["I see it differently.", "You're stupid.", "That's ridiculous.", "Only an idiot thinks that."], 0, "I see it differently apresenta discordância sem atacar a pessoa."]
      ]),
      2: buildQuestions(32, 2, [
        ["What does 'I totally agree' mean?", ["Discordo completamente.", "Concordo totalmente.", "Não tenho certeza.", "Quero mudar de assunto."], 1, "Totally agree expressa concordância completa."],
        ["Complete: I ___ agree with your suggestion.", ["strongly", "never", "hardly", "rarely"], 0, "Strongly agree é uma expressão comum para concordância forte."],
        ["What does 'I see your point' mean?", ["Não entendi nada.", "Você está errado.", "Entendo seu argumento.", "Não quero ouvir."], 2, "A expressão reconhece que você compreendeu o raciocínio de outra pessoa."],
        ["Which expression shows partial agreement?", ["I completely reject that.", "That's impossible.", "I disagree with everything.", "I agree up to a point."], 3, "I agree up to a point indica concordância limitada."],
        ["Complete: That's a good ___, but I have another idea.", ["point", "viewed", "opinioned", "argue"], 0, "Good point significa bom argumento ou boa observação."]
      ]),
      3: buildQuestions(32, 3, [
        ["What does 'I respectfully disagree' communicate?", ["I completely agree.", "I disagree politely.", "I have no opinion.", "I am asking a question."], 1, "A expressão demonstra discordância com respeito."],
        ["Choose a polite disagreement.", ["You're completely wrong.", "That makes no sense.", "I understand, but I have a different perspective.", "Stop talking."], 2, "A frase reconhece o outro ponto de vista e apresenta uma alternativa."],
        ["What does 'That's debatable' mean?", ["Isso é indiscutível.", "Isso é obrigatório.", "Isso já aconteceu.", "Isso pode ser discutido ou questionado."], 3, "Debatable indica que algo pode ser discutido."],
        ["Complete: I understand your argument; ___, I disagree.", ["however", "because", "therefore", "for example"], 0, "However introduz contraste."],
        ["Which expression is too aggressive for a respectful debate?", ["I see your point.", "You're an idiot.", "I understand your concern.", "I have another perspective."], 1, "Ataques pessoais não são argumentos respeitosos."]
      ]),
      4: buildQuestions(32, 4, [
        ["What does 'On the other hand' introduce?", ["A repetition", "A conclusion only", "A contrasting idea", "A greeting"], 2, "On the other hand apresenta outro lado de uma questão."],
        ["Complete: Online learning is flexible. ___, it can be difficult to stay focused.", ["Therefore", "Because", "For example", "On the other hand"], 3, "On the other hand introduz uma desvantagem ou contraste."],
        ["Which phrase introduces an example?", ["For instance", "I disagree", "In conclusion", "I suppose"], 0, "For instance significa por exemplo."],
        ["Complete: ___, public transport should be improved.", ["On the contrary", "In my view", "Never mind", "By the way"], 1, "In my view apresenta uma opinião."],
        ["What is the purpose of 'because' in an argument?", ["To introduce a greeting.", "To express disagreement only.", "To give a reason.", "To change the subject."], 2, "Because introduz a razão que sustenta uma afirmação."]
      ]),
      5: buildQuestions(32, 5, [
        ["What is a counterargument?", ["A repeated introduction.", "A personal insult.", "A random example.", "An argument that challenges another position."], 3, "Um contra-argumento apresenta uma perspectiva contrária."],
        ["Complete: Some people prefer cars. ___, public transport is more affordable.", ["However", "Because", "For example", "Similarly"], 0, "However apresenta uma ideia contrastante."],
        ["Which phrase asks someone to explain their opinion?", ["I totally agree.", "Could you explain why you think that?", "That's debatable.", "I disagree completely."], 1, "A pergunta solicita justificativa para a opinião."],
        ["What does 'I couldn't agree more' mean?", ["I don't understand.", "I disagree slightly.", "I completely agree.", "I have no opinion."], 2, "É uma expressão de concordância total."],
        ["Which is the strongest debate habit?", ["Interrupting constantly.", "Ignoring evidence.", "Attacking the speaker.", "Supporting ideas with reasons and examples."], 3, "Argumentos bem construídos precisam de justificativas e evidências."]
      ]),
      6: buildQuestions(32, 6, [
        ["Complete: ___, the advantages outweigh the disadvantages.", ["In my opinion", "By the way", "At first", "Never mind"], 0, "In my opinion apresenta uma avaliação pessoal."],
        ["Choose the best response: 'I think reading is important.'", ["You're ridiculous.", "I see your point, and I agree.", "No one cares.", "That's stupid."], 1, "A resposta demonstra compreensão e concordância."],
        ["What does 'Nevertheless' mean?", ["For example", "As a result", "Nevertheless / mesmo assim", "In my opinion"], 2, "Nevertheless introduz contraste, apesar do que foi dito."],
        ["Which phrase is appropriate for a debate conclusion?", ["I don't care.", "Whatever you say.", "You're wrong.", "To sum up, I believe that..."], 3, "To sum up introduz uma síntese final."],
        ["What makes an argument convincing?", ["Clear reasoning, relevant examples and evidence.", "Speaking louder than everyone.", "Repeating the same sentence.", "Using personal attacks."], 0, "Um argumento convincente combina lógica, exemplos e evidências."]
      ])
    },
    recovery: buildRecovery(32, [
      ["From my point of view means:", ["I disagree.", "In my opinion.", "I don't know.", "I agree completely."], 1, "A expressão apresenta seu ponto de vista."],
      ["I totally agree means:", ["I am confused.", "I disagree.", "I completely agree.", "I want to leave."], 2, "Totally agree é concordância completa."],
      ["Which phrase expresses polite disagreement?", ["You're stupid.", "That's nonsense.", "Stop talking.", "I see it differently."], 3, "A expressão comunica discordância sem ofender."],
      ["What does 'That's debatable' mean?", ["It can be discussed.", "It is definitely true.", "It is impossible.", "It is already finished."], 0, "Debatable significa discutível."],
      ["Which connector introduces contrast?", ["Because", "However", "Therefore", "For example"], 1, "However introduz uma ideia contrastante."]
    ])
  },

  // ==========================================
  // SEMANA 33 — TRABALHO, NEGÓCIOS E E-MAILS
  // ==========================================
  33: {
    days: {
      1: buildQuestions(33, 1, [
        ["What does 'meeting' mean?", ["Viagem", "Reunião", "Pagamento", "Entrevista"], 1, "Meeting significa reunião."],
        ["Complete: We have a team ___ at 10 a.m.", ["deadline", "salary", "meeting", "invoice"], 2, "Team meeting é uma reunião da equipe."],
        ["What is a 'deadline'?", ["A data-limite para concluir algo.", "O endereço do escritório.", "O salário mensal.", "O nome de um colega."], 0, "Deadline é o prazo final."],
        ["What does 'colleague' mean?", ["Cliente", "Chefe", "Fornecedor", "Colega de trabalho"], 3, "Colleague significa colega de trabalho."],
        ["Complete: Please send me the project ___ before Friday.", ["holiday", "report", "lunch", "office"], 1, "Report significa relatório."]
      ]),
      2: buildQuestions(33, 2, [
        ["What does 'schedule a meeting' mean?", ["Cancelar uma reunião.", "Participar de uma reunião.", "Agendar uma reunião.", "Esquecer uma reunião."], 2, "Schedule é agendar ou programar."],
        ["What is a 'video call'?", ["Uma ligação por vídeo.", "Um documento impresso.", "Uma reunião presencial.", "Um relatório financeiro."], 0, "Video call é uma chamada de vídeo."],
        ["Complete: Could you ___ your screen?", ["open", "share", "close", "delete"], 1, "Share your screen significa compartilhar sua tela."],
        ["What does 'mute your microphone' mean?", ["Aumentar o volume.", "Encerrar a reunião.", "Compartilhar o áudio.", "Silenciar o microfone."], 3, "Mute significa silenciar."],
        ["Which phrase is useful when joining a meeting?", ["I am joining the meeting now.", "I am eating yesterday.", "I was meeting tomorrow.", "I meeting every."], 0, "A frase comunica que você está entrando na reunião."]
      ]),
      3: buildQuestions(33, 3, [
        ["Which greeting is appropriate for a formal email?", ["Hey dude!", "Dear Mr. Smith,", "What's up?", "Yo!"], 1, "Dear Mr. Smith é uma saudação formal."],
        ["What does 'Best regards' mean in an email?", ["Uma reclamação.", "Uma pergunta.", "Uma despedida cordial.", "Uma data-limite."], 2, "Best regards é uma despedida profissional."],
        ["Complete: I am writing to ___ about the meeting.", ["inform", "information", "informing", "informed"], 0, "I am writing to inform é uma construção formal comum."],
        ["What does 'I look forward to hearing from you' express?", ["Uma ameaça.", "Uma reclamação.", "Uma despedida informal.", "Expectativa de receber uma resposta."], 3, "A frase demonstra que você espera uma resposta."],
        ["Which subject line is clearest?", ["Hello", "Meeting confirmation — Friday", "Important thing", "Read this now!!!"], 1, "Um assunto específico facilita identificar o objetivo do e-mail."]
      ]),
      4: buildQuestions(33, 4, [
        ["What does 'Could you please...' express?", ["A rude command.", "A past event.", "A polite request.", "A final decision."], 2, "Could you please é uma maneira educada de fazer pedidos."],
        ["Choose the best informal work message.", ["Hey, can you send me the file when you have a moment?", "Dear Sir or Madam, I hereby request...", "To whom it may concern...", "Respectfully submitted..."], 0, "A primeira opção é cordial e natural em mensagens informais de trabalho."],
        ["What does 'attached' mean in an email?", ["Cancelado", "Anexado", "Atrasado", "Confirmado"], 1, "Attached indica um arquivo anexado."],
        ["Complete: Please find the document ___ to this email.", ["writing", "sharing", "attaching", "attached"], 3, "Attached é usado para informar que o documento está anexado."],
        ["What is the purpose of an email subject?", ["To hide the message.", "To identify the main topic.", "To replace the greeting.", "To provide a password."], 1, "O assunto resume o tema da mensagem."]
      ]),
      5: buildQuestions(33, 5, [
        ["What does 'networking' mean professionally?", ["Building professional relationships.", "Repairing computers.", "Writing code only.", "Working without colleagues."], 0, "Networking é desenvolver contatos e relações profissionais."],
        ["What is a 'job interview'?", ["Uma reunião de vendas.", "Uma entrevista de emprego.", "Uma apresentação escolar.", "Uma chamada informal."], 1, "Job interview significa entrevista de emprego."],
        ["Complete: She applied ___ a position at the company.", ["on", "at", "for", "by"], 2, "Apply for significa candidatar-se a uma vaga."],
        ["What does 'promotion' mean at work?", ["Uma pausa.", "Uma demissão.", "Uma entrevista.", "Uma promoção profissional."], 3, "Promotion é uma promoção para um cargo superior."],
        ["What is a 'resume' or 'CV'?", ["A document describing education and work experience.", "A meeting invitation.", "A payment receipt.", "A video conference."], 0, "Resume/CV apresenta formação, experiência e qualificações."]
      ]),
      6: buildQuestions(33, 6, [
        ["Which sentence is most professional?", ["Send it now!", "Could you please send the report by Friday?", "I want that thing.", "Give me the file."], 1, "O pedido é claro, educado e apresenta um prazo."],
        ["What does 'follow up' mean in a professional context?", ["Ignore a message.", "Cancel a project.", "Contact again to check progress.", "Leave a meeting."], 2, "Follow up é retomar contato ou acompanhar algo."],
        ["Complete: Thank you for your ___ regarding this matter.", ["helping", "helpfully", "helped", "assistance"], 3, "Assistance é um substantivo formal que significa assistência."],
        ["Which expression politely ends a formal email?", ["Kind regards,", "What's up,", "See ya dude,", "Whatever,"], 0, "Kind regards é uma despedida profissional."],
        ["What is a good practice during a video meeting?", ["Interrupt everyone.", "Mute your microphone when not speaking.", "Ignore the agenda.", "Share unrelated files."], 1, "Silenciar o microfone evita ruídos desnecessários."]
      ])
    },
    recovery: buildRecovery(33, [
      ["A deadline is:", ["A colleague.", "A meeting room.", "A final date or time limit.", "A salary."], 2, "Deadline é o prazo final."],
      ["Which is a formal greeting?", ["Yo!", "What's up?", "Hey dude!", "Dear Ms. Brown,"], 3, "Dear Ms. Brown é uma saudação formal."],
      ["What does 'attached' mean?", ["Anexado.", "Atrasado.", "Cancelado.", "Compartilhado verbalmente."], 0, "Attached indica um arquivo incluído no e-mail."],
      ["Networking is about:", ["Deleting contacts.", "Building professional relationships.", "Avoiding communication.", "Scheduling holidays."], 1, "Networking desenvolve relações profissionais."],
      ["Which phrase is a polite request?", ["Do it now.", "Give it to me.", "Could you please send the file?", "You must send it immediately."], 2, "Could you please é uma construção educada."]
    ])
  },

  // ==========================================
  // SEMANA 34 — VIAGEM E EMERGÊNCIAS
  // ==========================================
  34: {
    days: {
      1: buildQuestions(34, 1, [
        ["What does 'boarding pass' mean?", ["Cartão de embarque.", "Passaporte.", "Mala de viagem.", "Reserva de hotel."], 0, "Boarding pass é o cartão de embarque."],
        ["Where do you collect your checked luggage?", ["At the gate.", "At baggage claim.", "At customs.", "At the check-in desk."], 1, "Baggage claim é a área de retirada de bagagem."],
        ["What does 'departure' mean?", ["Chegada.", "Atraso.", "Partida.", "Conexão."], 2, "Departure é partida ou saída."],
        ["Complete: My flight has been ___.", ["arrive", "depart", "board", "cancelled"], 3, "Cancelled significa cancelado."],
        ["What is a 'connecting flight'?", ["Um voo com escala ou conexão.", "Um voo sem destino.", "Um voo de emergência.", "Um voo particular."], 0, "Connecting flight é um voo de conexão."]
      ]),
      2: buildQuestions(34, 2, [
        ["What does 'reservation' mean?", ["Reclamação.", "Reserva.", "Passagem.", "Documento."], 1, "Reservation significa reserva."],
        ["Complete: I have a ___ for two nights.", ["boarding pass", "passport", "hotel reservation", "customs form"], 2, "Hotel reservation é reserva de hotel."],
        ["What does 'check out' mean at a hotel?", ["Fazer uma reclamação.", "Reservar um quarto.", "Entrar no hotel.", "Encerrar a hospedagem e sair."], 3, "Check out é o procedimento de saída do hotel."],
        ["How can you politely ask for an extra towel?", ["Could I have an extra towel, please?", "Give towel now!", "Where towel yesterday?", "I towel."], 0, "Could I have...? é uma forma educada de pedir algo."],
        ["What does 'single room' mean?", ["Quarto compartilhado.", "Quarto individual.", "Quarto com três camas.", "Quarto de emergência."], 1, "Single room é um quarto individual."]
      ]),
      3: buildQuestions(34, 3, [
        ["What is 'customs' at an airport?", ["A área de alimentação.", "O portão de embarque.", "A alfândega.", "A retirada de bagagem."], 2, "Customs é o setor responsável pelo controle alfandegário."],
        ["What does 'declare' mean at customs?", ["Esconder algo.", "Perder a bagagem.", "Cancelar o voo.", "Informar oficialmente algo às autoridades."], 3, "Declare significa declarar ou informar oficialmente."],
        ["Complete: What is the purpose of your ___?", ["visit", "visited", "visiting", "visitor"], 0, "Purpose of your visit é uma pergunta comum sobre o motivo da viagem."],
        ["What does 'passport' mean?", ["Passagem aérea.", "Passaporte.", "Reserva.", "Carteira de motorista."], 1, "Passport é o documento de viagem chamado passaporte."],
        ["Which answer is appropriate when asked about the reason for your trip?", ["I don't know anything.", "Maybe tomorrow.", "I'm here for tourism.", "I am the airport."], 2, "I'm here for tourism informa claramente o motivo da viagem."]
      ]),
      4: buildQuestions(34, 4, [
        ["Your flight is cancelled. What could you ask?", ["Can you help me find another flight?", "Where is my breakfast?", "Can I check out?", "How much is this room?"], 0, "A pergunta solicita ajuda para encontrar outro voo."],
        ["What does 'delayed' mean?", ["Adiantado.", "Atrasado.", "Confirmado.", "Cancelado permanentemente."], 1, "Delayed significa atrasado."],
        ["Complete: My luggage hasn't ___ yet.", ["arriving", "arrived", "arrive", "arrival"], 2, "Hasn't arrived é Present Perfect na negativa."],
        ["What does 'lost luggage' mean?", ["Bagagem extra.", "Bagagem pesada.", "Bagagem despachada.", "Bagagem perdida."], 3, "Lost luggage é bagagem perdida."],
        ["Which phrase is useful when asking about a new departure time?", ["Could you tell me the updated departure time?", "I am a departure yesterday.", "Where is my hotel room?", "I have a passport problem tomorrow."], 0, "A frase solicita o novo horário de partida."]
      ]),
      5: buildQuestions(34, 5, [
        ["What does 'pharmacy' mean?", ["Hospital.", "Farmácia.", "Aeroporto.", "Recepção."], 1, "Pharmacy significa farmácia."],
        ["How do you ask where the nearest hospital is?", ["How much is the hospital?", "I need hospital yesterday.", "Where is the nearest hospital?", "Hospital is my passport."], 2, "A pergunta procura o hospital mais próximo."],
        ["What does 'appointment' mean in a medical context?", ["Medicamento.", "Sintoma.", "Receita.", "Consulta agendada."], 3, "Appointment é um horário marcado para uma consulta ou compromisso."],
        ["Complete: I have a headache. Could you recommend something for the ___?", ["pain", "airport", "luggage", "ticket"], 0, "Pain significa dor."],
        ["Which phrase clearly communicates a medical allergy?", ["I have a reservation.", "I'm allergic to penicillin.", "My flight is delayed.", "I need a boarding pass."], 1, "A frase informa uma alergia. Em situações reais, seja específico e procure atendimento adequado."]
      ]),
      6: buildQuestions(34, 6, [
        ["What does 'emergency' mean?", ["Reserva.", "Reunião.", "Emergência.", "Atraso."], 2, "Emergency significa emergência."],
        ["Which phrase is useful when asking for urgent assistance?", ["Could you help me, please? It's urgent.", "I want a hotel menu.", "Where is the boarding gate?", "I need another towel."], 0, "A frase comunica que a situação exige ajuda urgente."],
        ["What does 'symptom' mean?", ["Medicamento.", "Sintoma.", "Consulta.", "Farmácia."], 1, "Symptom significa sintoma."],
        ["Complete: I need to speak ___ a doctor.", ["at", "on", "for", "to"], 3, "Speak to a doctor é a construção correta."],
        ["What is important when explaining a problem abroad?", ["Use clear details and explain what happened.", "Speak as fast as possible.", "Avoid answering questions.", "Use only slang."], 0, "Informações claras ajudam outras pessoas a compreender e prestar assistência."]
      ])
    },
    recovery: buildRecovery(34, [
      ["A boarding pass is:", ["A hotel receipt.", "An airport meal.", "A document used to board a flight.", "A passport replacement."], 2, "Boarding pass é o cartão de embarque."],
      ["Baggage claim is where you:", ["Check in.", "Board the plane.", "Show your passport.", "Collect your luggage."], 3, "Baggage claim é onde você retira a bagagem."],
      ["What does 'delayed' mean?", ["Late.", "Early.", "Cancelled forever.", "Confirmed."], 0, "Delayed significa atrasado."],
      ["What does 'pharmacy' mean?", ["Hotel.", "Farmácia.", "Airport.", "Restaurant."], 1, "Pharmacy significa farmácia."],
      ["Which phrase is useful in an emergency?", ["I want a larger room.", "Where is the restaurant?", "I need urgent assistance.", "Can I check out tomorrow?"], 2, "Urgent assistance significa assistência urgente."]
    ])
  },

  // ==========================================
  // SEMANA 35 — LEITURA DE ARTIGOS E NOTÍCIAS
  // ==========================================
  35: {
    days: {
      1: buildQuestions(35, 1, [
        ["What does 'headline' mean?", ["Título da notícia.", "Legenda da foto.", "Entrevista.", "Conclusão."], 0, "Headline é o título principal de uma notícia."],
        ["What is a 'journalist'?", ["Um político.", "Um jornalista.", "Um economista.", "Um leitor."], 1, "Journalist é a pessoa que trabalha produzindo notícias."],
        ["What does 'according to' mean?", ["Contra.", "Apesar de.", "De acordo com.", "Antes de."], 2, "According to introduz a fonte de uma informação."],
        ["What is the 'source' of a news story?", ["O título.", "O parágrafo final.", "A opinião do leitor.", "A origem da informação."], 3, "Source é a fonte de onde a informação veio."],
        ["What should you do when reading a news headline?", ["Identify the main topic before reading details.", "Assume every detail is explained.", "Ignore the article.", "Translate every word immediately."], 0, "O título ajuda a identificar o assunto central."]
      ]),
      2: buildQuestions(35, 2, [
        ["What does 'government' mean?", ["Empresa.", "Governo.", "Universidade.", "Tribunal."], 1, "Government significa governo."],
        ["What does 'election' mean?", ["Protesto.", "Reunião.", "Eleição.", "Acordo."], 2, "Election é uma eleição."],
        ["Complete: The government announced a new ___ yesterday.", ["citizen", "voter", "candidate", "policy"], 3, "Policy significa política ou diretriz pública."],
        ["What does 'citizen' mean?", ["Cidadão.", "Candidato.", "Jornalista.", "Investidor."], 0, "Citizen significa cidadão."],
        ["What is a 'candidate'?", ["Um eleitor.", "Uma pessoa concorrendo a um cargo.", "Uma lei.", "Uma instituição."], 1, "Candidate é alguém que concorre a uma posição ou cargo."]
      ]),
      3: buildQuestions(35, 3, [
        ["What does 'economy' mean?", ["Cultura.", "Política.", "Economia.", "Geografia."], 2, "Economy significa economia."],
        ["What is 'inflation'?", ["Aumento geral dos preços.", "Redução da população.", "Uma eleição.", "Uma reunião internacional."], 0, "Inflation é o aumento geral dos preços de bens e serviços."],
        ["What does 'unemployment' mean?", ["Emprego.", "Desemprego.", "Investimento.", "Comércio."], 1, "Unemployment significa desemprego."],
        ["Complete: The company reported higher ___ this year.", ["unemployed", "economical", "inflation", "profits"], 3, "Profits significa lucros."],
        ["What does 'investment' mean?", ["Investimento.", "Imposto.", "Salário.", "Dívida."], 0, "Investment é o ato de investir recursos."]
      ]),
      4: buildQuestions(35, 4, [
        ["What does 'cultural heritage' mean?", ["Notícia urgente.", "Patrimônio cultural.", "Política econômica.", "Relatório financeiro."], 1, "Cultural heritage é o patrimônio cultural."],
        ["What does 'tradition' mean?", ["Tecnologia.", "Economia.", "Tradição.", "Debate."], 2, "Tradition significa tradição."],
        ["Complete: The festival celebrates the country's cultural ___.", ["budget", "election", "inflation", "heritage"], 3, "Heritage é patrimônio ou legado cultural."],
        ["What does 'community' mean?", ["Comunidade.", "Governo.", "Mercado.", "Empresa."], 0, "Community significa comunidade."],
        ["What is a 'survey'?", ["Uma opinião isolada.", "Uma pesquisa ou levantamento.", "Uma lei.", "Um título de notícia."], 1, "Survey é uma pesquisa usada para coletar informações."]
      ]),
      5: buildQuestions(35, 5, [
        ["What does 'increase' mean?", ["Diminuir.", "Cancelar.", "Aumentar.", "Esconder."], 2, "Increase significa aumentar."],
        ["What is the opposite of 'decline'?", ["Fall.", "Decrease.", "Drop.", "Rise."], 3, "Rise significa subir ou aumentar."],
        ["Complete: The report ___ that prices may rise.", ["suggests", "suggestion", "suggestedly", "suggesting"], 0, "Suggests significa sugere ou indica."],
        ["What does 'controversial' mean?", ["Muito simples.", "Polêmico.", "Comprovado.", "Antigo."], 1, "Controversial descreve algo que gera debate ou discordância."],
        ["What is the difference between a fact and an opinion?", ["They are always identical.", "An opinion is always false.", "A fact can be verified; an opinion expresses a viewpoint.", "A fact is only a headline."], 2, "Fatos podem ser verificados; opiniões expressam perspectivas."]
      ]),
      6: buildQuestions(35, 6, [
        ["What does 'despite' mean?", ["Because of.", "As a result.", "For example.", "Apesar de."], 3, "Despite introduz uma ideia de contraste."],
        ["What does 'evidence' mean in journalism?", ["Evidência ou prova.", "Título.", "Opinião.", "Entrevista."], 0, "Evidence é informação ou prova que sustenta uma afirmação."],
        ["What is the main idea of an article?", ["Every word in the article.", "The central message or topic.", "Only the final sentence.", "The author's name."], 1, "A ideia principal resume o assunto central."],
        ["What should you compare when checking a news claim?", ["Only the headline.", "Only social media comments.", "Multiple reliable sources.", "Only anonymous messages."], 2, "Comparar fontes confiáveis ajuda a verificar informações."],
        ["Which reading strategy is useful for a long article?", ["Translate every word before continuing.", "Read without looking at headings.", "Ignore unfamiliar vocabulary.", "Skim for the main idea, then scan for details."], 3, "Skimming identifica a ideia geral; scanning procura informações específicas."]
      ])
    },
    recovery: buildRecovery(35, [
      ["A headline is:", ["The main title of a news story.", "The author's home.", "A newspaper subscription.", "A photo credit."], 0, "Headline é o título principal."],
      ["Inflation refers to:", ["A political election.", "A general rise in prices.", "A cultural festival.", "A decrease in population."], 1, "Inflação é o aumento geral dos preços."],
      ["A journalist is:", ["A candidate.", "An investor.", "A person who reports news.", "A government policy."], 2, "Journalist significa jornalista."],
      ["What does 'according to' mean?", ["Despite.", "Before.", "Instead of.", "De acordo com."], 3, "According to apresenta a fonte da informação."],
      ["What is the difference between fact and opinion?", ["Facts can be checked; opinions express viewpoints.", "Opinions are always facts.", "Facts cannot be checked.", "They mean exactly the same thing."], 0, "Fatos podem ser verificados; opiniões expressam pontos de vista."]
    ])
  },

  // ==========================================
  // SEMANA 36 — ESCUTA ATIVA E SOTAQUES
  // ==========================================
  36: {
    days: {
      1: buildQuestions(36, 1, [
        ["What is active listening?", ["Listening carefully to understand meaning and details.", "Listening while ignoring the speaker.", "Reading without listening.", "Memorizing only individual words."], 0, "Escuta ativa envolve atenção ao sentido, detalhes e contexto."],
        ["What is an accent?", ["A grammar mistake.", "A way of pronouncing a language associated with a region or group.", "A type of punctuation.", "A writing style."], 1, "Accent é uma maneira regional ou social de pronunciar uma língua."],
        ["Why can accents make listening difficult?", ["They change every grammar rule.", "They remove all vocabulary.", "Pronunciation, rhythm and vowel sounds can vary.", "They always use different languages."], 2, "Variações de pronúncia e ritmo podem dificultar a compreensão."],
        ["What should you focus on when listening to a podcast?", ["Only the speaker's name.", "Only the first sentence.", "Every single sound equally.", "Main ideas, repeated words and context."], 3, "Ideias principais e contexto ajudam a compreender o áudio."],
        ["What does 'Could you repeat that?' mean?", ["Você poderia repetir?", "Você pode sair?", "Você está atrasado?", "Você entendeu?"], 0, "É uma pergunta útil quando você não compreendeu algo."]
      ]),
      2: buildQuestions(36, 2, [
        ["Which country is strongly associated with a common American English accent?", ["Australia", "United States", "Ireland", "New Zealand"], 1, "O inglês americano é associado aos Estados Unidos."],
        ["Which pronunciation feature is common in many American accents?", ["The letter R is always silent.", "Every vowel is identical to British English.", "The R sound is often pronounced in words like 'car'.", "Words never connect in speech."], 2, "Muitos sotaques americanos são róticos: o R é pronunciado em car."],
        ["Which spelling is commonly American English?", ["Colour", "Centre", "Travelling", "Color"], 3, "Color é a grafia americana; colour é comum no inglês britânico."],
        ["What does 'elevator' mean in American English?", ["Elevador.", "Escada.", "Corredor.", "Estacionamento."], 0, "Elevator é a palavra americana para elevador."],
        ["Which word is commonly used in American English for a car's trunk?", ["Boot", "Trunk", "Bonnet", "Lorry"], 1, "Trunk é o porta-malas em inglês americano."]
      ]),
      3: buildQuestions(36, 3, [
        ["Which country is associated with British English?", ["Canada", "Australia", "United Kingdom", "United States"], 2, "British English é associado ao Reino Unido."],
        ["Which spelling is commonly British?", ["Color", "Center", "Favorite", "Colour"], 3, "Colour é uma grafia britânica comum."],
        ["What does 'lift' mean in British English?", ["Elevator.", "Truck.", "Apartment.", "Vacation."], 0, "Lift é a palavra britânica para elevador."],
        ["Which word is commonly used in British English for a truck?", ["Trunk", "Lorry", "Hood", "Sidewalk"], 1, "Lorry significa caminhão no inglês britânico."],
        ["What does 'flat' commonly mean in British English?", ["A flat tire only.", "A single room.", "An apartment.", "A house key."], 2, "Flat é uma palavra britânica comum para apartamento."]
      ]),
      4: buildQuestions(36, 4, [
        ["Which country is associated with Australian English?", ["United States", "Canada", "United Kingdom", "Australia"], 3, "Australian English é associado à Austrália."],
        ["What is an informal Australian greeting?", ["G'day", "Good morrow", "Greetings, sir", "Farewell"], 0, "G'day é uma saudação informal australiana."],
        ["What does 'arvo' mean in Australian informal English?", ["Morning.", "Afternoon.", "Evening.", "Midnight."], 1, "Arvo é uma forma informal de afternoon."],
        ["Why might Australian English sound different to learners?", ["It uses no vowels.", "It has no informal words.", "Its vowel sounds and intonation can differ.", "It is a completely separate language."], 2, "Sotaques australianos apresentam diferenças de vogais, ritmo e entonação."],
        ["What is the best way to learn an unfamiliar accent?", ["Avoid listening to it.", "Memorize one isolated word.", "Assume all speakers sound identical.", "Listen repeatedly to varied speakers and contexts."], 3, "Exposição a diferentes falantes ajuda a reconhecer padrões."]
      ]),
      5: buildQuestions(36, 5, [
        ["What is a podcast?", ["A digital audio program or series.", "A printed newspaper.", "A formal letter.", "A type of airport."], 0, "Podcast é um programa de áudio, frequentemente publicado em episódios."],
        ["What does 'transcript' mean?", ["A sound effect.", "A written version of spoken audio.", "A type of accent.", "A microphone."], 1, "Transcript é a transcrição escrita do áudio."],
        ["Which is a useful listening exercise?", ["Play audio once and stop.", "Ignore unknown words.", "Listen first without text, then check a transcript.", "Translate every sound."], 2, "Ouvir antes e conferir a transcrição depois ajuda a desenvolver compreensão auditiva."],
        ["What does 'background noise' mean?", ["The main speaker.", "A podcast title.", "A written note.", "Unwanted sounds behind the main audio."], 3, "Background noise são sons de fundo."],
        ["What does 'intonation' refer to?", ["The rise and fall of the voice.", "The spelling of a word.", "The number of paragraphs.", "The length of an email."], 0, "Intonation é a variação de altura e entonação da voz."]
      ]),
      6: buildQuestions(36, 6, [
        ["What should you do if you understand the topic but miss some words?", ["Give up immediately.", "Use context to infer the missing information.", "Assume the speaker is wrong.", "Stop learning new vocabulary."], 1, "O contexto permite recuperar parte do sentido mesmo sem entender todas as palavras."],
        ["What does 'Could you speak a little more slowly?' mean?", ["Can you speak louder?", "Can you leave?", "Could you speak more slowly?", "Could you repeat tomorrow?"], 2, "É uma forma educada de pedir que alguém fale mais devagar."],
        ["What is the purpose of shadowing in language learning?", ["Copying pronunciation and rhythm while listening.", "Reading silently.", "Translating every sentence.", "Avoiding spoken language."], 0, "Shadowing consiste em acompanhar a fala para praticar ritmo e pronúncia."],
        ["Which approach improves accent comprehension?", ["Listening to only one speaker forever.", "Avoiding unfamiliar sounds.", "Using only written exercises.", "Listening to different speakers and regions."], 3, "A variedade de falantes aumenta a familiaridade com diferentes pronúncias."],
        ["What does 'I didn't catch that' mean?", ["I didn't understand or hear that.", "I caught a bus.", "I finished the podcast.", "I agree completely."], 0, "A expressão significa que você não conseguiu entender ou ouvir algo."]
      ])
    },
    recovery: buildRecovery(36, [
      ["Active listening means:", ["Ignoring details.", "Listening carefully for meaning.", "Reading without audio.", "Memorizing only spelling."], 1, "Escuta ativa exige atenção ao conteúdo."],
      ["An accent is:", ["A type of punctuation.", "A grammar tense.", "A way of pronouncing a language.", "A written paragraph."], 2, "Accent é uma forma de pronúncia."],
      ["'Lift' is commonly used in British English for:", ["Truck", "Apartment", "Vacation", "Elevator"], 3, "Lift significa elevador."],
      ["'G'day' is associated with:", ["Australian English", "Formal American emails", "Academic writing", "British legal documents"], 0, "G'day é uma saudação informal australiana."],
      ["A transcript is:", ["A sound effect.", "A written version of spoken audio.", "A microphone.", "An accent."], 1, "Transcript é a transcrição do áudio."]
    ])
  },

  // ==========================================
  // SEMANA 37 — REDAÇÃO AVANÇADA
  // ==========================================
  37: {
    days: {
      1: buildQuestions(37, 1, [
        ["What is the purpose of an introduction in an essay?", ["Present the topic and main direction of the text.", "Repeat the conclusion.", "List every source.", "Introduce unrelated information."], 0, "A introdução apresenta o assunto e prepara o leitor."],
        ["What is a thesis statement?", ["A greeting.", "A sentence expressing the central argument or position.", "A list of vocabulary.", "A random example."], 1, "A thesis statement apresenta a ideia central defendida no texto."],
        ["What does a body paragraph usually contain?", ["Only a title.", "Only a question.", "A main idea supported by explanations or examples.", "Only the final conclusion."], 2, "O desenvolvimento apresenta argumentos e evidências."],
        ["What is the purpose of a conclusion?", ["Introduce a completely new topic.", "Start a new story.", "Repeat every sentence word for word.", "Summarize the main points and close the discussion."], 3, "A conclusão retoma as ideias principais e encerra o texto."],
        ["Which structure is common in an essay?", ["Introduction, body and conclusion.", "Conclusion, title and greeting only.", "Questions without paragraphs.", "Only one sentence."], 0, "A estrutura básica é introdução, desenvolvimento e conclusão."]
      ]),
      2: buildQuestions(37, 2, [
        ["What does 'firstly' indicate?", ["A final conclusion.", "The first point in a sequence.", "A contrast.", "An example from the past."], 1, "Firstly introduz o primeiro argumento."],
        ["Which connector introduces an additional idea?", ["However", "Although", "Furthermore", "Despite"], 2, "Furthermore acrescenta uma informação."],
        ["Complete: ___, education can create more opportunities.", ["Nevertheless", "On the contrary", "In contrast", "Furthermore"], 3, "Furthermore acrescenta outro argumento favorável."],
        ["What does 'therefore' express?", ["A result or conclusion.", "A greeting.", "A question.", "A comparison only."], 0, "Therefore significa portanto e introduz uma consequência."],
        ["Which connector introduces contrast?", ["Moreover", "Nevertheless", "Additionally", "For instance"], 1, "Nevertheless introduz uma ideia de contraste."]
      ]),
      3: buildQuestions(37, 3, [
        ["What is coherence in writing?", ["Using the longest words possible.", "Avoiding paragraph breaks.", "Ideas following a clear and logical order.", "Repeating the same sentence."], 2, "Coerência é a organização lógica das ideias."],
        ["What is cohesion?", ["The use of random examples.", "The absence of connectors.", "The number of words.", "The linguistic connections between sentences and ideas."], 3, "Coesão conecta frases e parágrafos por meio de recursos linguísticos."],
        ["Which word can replace a repeated noun?", ["A suitable pronoun.", "An unrelated adjective.", "A random verb.", "A punctuation mark."], 0, "Pronomes podem evitar repetições desnecessárias."],
        ["Choose the best connector: 'The task was difficult. ___, we completed it.'", ["Because", "However", "For example", "Similarly"], 1, "However apresenta contraste entre dificuldade e conclusão."],
        ["What makes a paragraph easier to follow?", ["Unrelated sentences.", "No punctuation.", "One clear central idea.", "Constant changes of topic."], 2, "Um parágrafo organizado desenvolve uma ideia central."]
      ]),
      4: buildQuestions(37, 4, [
        ["Which opening is suitable for a diary entry?", ["Dear Hiring Manager,", "To whom it may concern,", "Best regards,", "Today was an unforgettable day."], 3, "Um diário pessoal pode começar com uma referência ao dia ou à experiência."],
        ["What is a personal diary usually written in?", ["A personal and reflective style.", "Only legal language.", "Only business terminology.", "A list of citations."], 0, "O diário normalmente utiliza voz pessoal e reflexões."],
        ["What does 'I realized that...' express?", ["A command.", "A discovery or understanding.", "A greeting.", "A future obligation."], 1, "Realized indica que alguém percebeu ou compreendeu algo."],
        ["Which sentence is more reflective?", ["The sky is blue.", "I went to school.", "I learned that patience is important.", "The book is on the table."], 2, "A frase expressa uma aprendizagem pessoal."],
        ["What should you include in a narrative paragraph?", ["Only unrelated facts.", "Only a title.", "No sequence of events.", "Events organized in a meaningful sequence."], 3, "Narrativas precisam de uma sequência compreensível de acontecimentos."]
      ]),
      5: buildQuestions(37, 5, [
        ["What does 'in contrast' mean?", ["Em contraste.", "Por exemplo.", "Como resultado.", "Em primeiro lugar."], 0, "In contrast introduz uma diferença entre ideias."],
        ["Which sentence is grammatically correct?", ["Despite it was raining, we went out.", "Although it was raining, we went out.", "Although the rain, we went out.", "Despite was raining, we went out."], 1, "Although é seguido por uma oração com sujeito e verbo."],
        ["Complete: ___ the high cost, many people chose the service.", ["Although", "However", "Despite", "Because"], 2, "Despite é seguido por substantivo ou expressão nominal."],
        ["What does 'as a result' introduce?", ["A greeting.", "An unrelated example.", "A contrast only.", "A consequence."], 3, "As a result apresenta uma consequência."],
        ["Which is the strongest way to support an essay argument?", ["Use relevant examples and evidence.", "Repeat the opinion many times.", "Attack opposing viewpoints.", "Avoid explaining the idea."], 0, "Evidências e exemplos sustentam os argumentos."]
      ]),
      6: buildQuestions(37, 6, [
        ["What is proofreading?", ["Writing the first draft.", "Checking a text for errors and clarity.", "Choosing a topic.", "Reading only the title."], 1, "Proofreading é revisar o texto para encontrar erros."],
        ["What should you check during revision?", ["Only the font.", "Only the number of pages.", "Grammar, clarity, organization and word choice.", "Only the title."], 2, "A revisão deve avaliar linguagem e organização."],
        ["Which sentence has correct punctuation?", ["However I disagree.", "However I, disagree.", "However; I disagree because.", "However, I disagree."], 3, "A vírgula após However é adequada nessa construção."],
        ["What does 'in conclusion' signal?", ["The final section of an argument.", "The first example.", "A new unrelated topic.", "A question."], 0, "In conclusion introduz a conclusão."],
        ["What is a good final step before submitting an essay?", ["Delete the introduction.", "Read the complete text again and correct errors.", "Remove every connector.", "Replace all verbs."], 1, "Uma leitura final ajuda a encontrar erros e melhorar a clareza."]
      ])
    },
    recovery: buildRecovery(37, [
      ["An essay introduction should:", ["Present the topic and direction.", "Contain only the conclusion.", "Avoid mentioning the topic.", "List unrelated facts."], 0, "A introdução apresenta o assunto."],
      ["Furthermore introduces:", ["A contradiction.", "An additional idea.", "A question.", "A greeting."], 1, "Furthermore acrescenta informação."],
      ["Coherence refers to:", ["Random vocabulary.", "Punctuation only.", "Logical organization of ideas.", "The number of words."], 2, "Coerência é a organização lógica."],
      ["Proofreading means:", ["Choosing a topic.", "Writing a title.", "Adding unrelated examples.", "Checking a text for errors."], 3, "Proofreading é revisão de erros."],
      ["A thesis statement expresses:", ["The central argument or position.", "The author's address.", "The final word count.", "A random detail."], 0, "A thesis statement apresenta a ideia central."]
    ])
  },

  // ==========================================
  // SEMANA 38 — DEBATES E HIPÓTESES COMPLEXAS
  // ==========================================
  38: {
    days: {
      1: buildQuestions(38, 1, [
        ["What does 'I would argue that...' introduce?", ["A greeting.", "A position or argument.", "A past memory.", "A direct command."], 1, "I would argue that apresenta uma tese ou posição."],
        ["Complete: I would argue ___ public libraries remain important.", ["what", "which", "that", "where"], 2, "That introduz a ideia defendida."],
        ["What does 'evidence suggests that...' mean?", ["The evidence proves nothing.", "Someone is asking a question.", "An opinion has no support.", "Available evidence indicates a possibility or conclusion."], 3, "A expressão apresenta uma conclusão apoiada por evidências."],
        ["Which phrase introduces a limitation to an argument?", ["This argument has one important limitation.", "I completely ignore the issue.", "There is nothing to discuss.", "Everyone is wrong."], 0, "Limitation indica um limite ou ponto fraco de um argumento."],
        ["What is the purpose of a structured argument?", ["To speak for as long as possible.", "To present a clear claim supported by reasoning.", "To avoid giving examples.", "To confuse the audience."], 1, "Um argumento estruturado apresenta uma afirmação e suas justificativas."]
      ]),
      2: buildQuestions(38, 2, [
        ["What does 'provided that' mean?", ["Despite.", "Because.", "On the condition that.", "As a result."], 2, "Provided that significa desde que ou contanto que."],
        ["Complete: We can finish the project, ___ everyone contributes.", ["although", "unless", "despite", "provided that"], 3, "Provided that introduz uma condição."],
        ["What does 'unless' mean?", ["If not.", "Because.", "Even though.", "As a result."], 0, "Unless significa a menos que ou se não."],
        ["Complete: You won't improve ___ you practice regularly.", ["although", "unless", "because", "therefore"], 1, "Unless you practice significa se você não praticar."],
        ["What does 'as long as' express?", ["A contrast.", "A conclusion.", "A condition.", "A comparison."], 2, "As long as introduz uma condição."]
      ]),
      3: buildQuestions(38, 3, [
        ["What does 'It is highly unlikely that...' express?", ["Strong certainty.", "A direct command.", "A past habit.", "A very low probability."], 3, "Highly unlikely indica algo muito improvável."],
        ["Which phrase expresses a strong possibility?", ["There is a strong possibility that...", "It is impossible that...", "I refuse to consider...", "It never happened."], 0, "Strong possibility indica uma possibilidade significativa."],
        ["Complete: The results ___ indicate a significant improvement.", ["must have", "may", "would have been", "had"], 1, "May indica possibilidade."],
        ["What does 'assuming that' mean?", ["Despite the fact that.", "For example.", "If we accept that something is true.", "As a final result."], 2, "Assuming that significa supondo que."],
        ["Which sentence expresses uncertainty?", ["This is definitely true.", "There is no doubt.", "It is absolutely certain.", "It might be possible that the plan will work."], 3, "Might be possible indica incerteza ou possibilidade."]
      ]),
      4: buildQuestions(38, 4, [
        ["What is a logical consequence?", ["A result that follows from previous reasoning.", "An unrelated opinion.", "A random sentence.", "A greeting."], 0, "Uma consequência lógica decorre do raciocínio apresentado."],
        ["Which connector introduces a consequence?", ["Although", "Consequently", "Despite", "Whereas"], 1, "Consequently significa consequentemente."],
        ["Complete: The evidence was incomplete; ___, the conclusion was uncertain.", ["however", "although", "therefore", "for instance"], 2, "Therefore introduz uma consequência lógica."],
        ["What does 'whereas' express?", ["A result.", "A greeting.", "A condition.", "A contrast between two things."], 3, "Whereas é usado para contrastar duas ideias."],
        ["Which is a logical argument?", ["The data shows a trend; therefore, further research is needed.", "I dislike it, so everyone is wrong.", "It is true because I said so.", "No evidence is necessary."], 0, "A conclusão decorre de uma observação apresentada."]
      ]),
      5: buildQuestions(38, 5, [
        ["What does 'from a broader perspective' mean?", ["From a narrow detail.", "Considering the issue more widely.", "Without considering context.", "Only from the past."], 1, "A expressão indica uma visão mais ampla."],
        ["What is a rebuttal?", ["A greeting.", "A summary of vocabulary.", "A response challenging an opposing argument.", "A list of unrelated facts."], 2, "Rebuttal é uma resposta que contesta um argumento contrário."],
        ["Complete: While this argument is convincing, it fails to ___ one key issue.", ["consideration", "considered", "considering", "consider"], 3, "Fail to consider significa deixar de considerar."],
        ["What does 'to a certain extent' mean?", ["Até certo ponto.", "Completamente.", "De forma impossível.", "Sem qualquer dúvida."], 0, "To a certain extent indica concordância ou validade parcial."],
        ["Which response is best when challenging an argument?", ["You're wrong because you're silly.", "Could you provide evidence for that claim?", "Stop talking immediately.", "That is stupid."], 1, "Pedir evidências questiona o argumento de maneira respeitosa."]
      ]),
      6: buildQuestions(38, 6, [
        ["What does 'had it not been for...' mean?", ["If something had not existed or happened.", "Because something always happens.", "Although something is true.", "When something happens regularly."], 0, "Had it not been for é uma forma invertida de expressar uma condição passada."],
        ["Complete: Had I known about the problem, I ___ differently.", ["will act", "would have acted", "act", "am acting"], 1, "Would have acted expressa um resultado hipotético no passado."],
        ["What does 'were it not for...' express?", ["A past habit.", "A direct order.", "A hypothetical condition.", "A question about location."], 2, "Were it not for é uma forma formal de expressar uma condição hipotética."],
        ["Which phrase is suitable for presenting a balanced conclusion?", ["Everyone else is wrong.", "There is only one possible answer.", "No evidence matters.", "Although both sides have valid points, I believe..."], 3, "A frase reconhece diferentes perspectivas antes de apresentar uma conclusão."],
        ["What is the best way to defend a complex hypothesis?", ["Define the claim, explain assumptions and support it with evidence.", "Repeat the hypothesis without explanation.", "Avoid questions.", "Use complicated words without reasoning."], 0, "Uma hipótese bem defendida precisa de definição, pressupostos e evidências."]
      ])
    },
    recovery: buildRecovery(38, [
      ["'Provided that' means:", ["Despite.", "On the condition that.", "For example.", "As a result."], 1, "Provided that introduz uma condição."],
      ["'Unless' means:", ["Because.", "Although.", "If not.", "Therefore."], 2, "Unless significa a menos que."],
      ["A rebuttal is:", ["A greeting.", "A random example.", "A final title.", "A response challenging an opposing argument."], 3, "Rebuttal é uma resposta a um argumento contrário."],
      ["'Consequently' introduces:", ["A consequence.", "A greeting.", "A contrast only.", "A question."], 0, "Consequently significa consequentemente."],
      ["A strong argument should include:", ["Personal attacks.", "Clear reasoning and supporting evidence.", "Only complex vocabulary.", "Unrelated information."], 1, "Evidências e raciocínio sustentam um argumento."]
    ])
  },

  // ==========================================
  // SEMANA 39 — HUMOR, IRONIA E SARCASMO
  // ==========================================
  39: {
    days: {
      1: buildQuestions(39, 1, [
        ["What is irony?", ["When the intended meaning contrasts with the literal or expected meaning.", "A type of formal greeting.", "A verb tense.", "A way to list instructions."], 0, "Ironia envolve contraste entre o sentido literal e o sentido pretendido."],
        ["Someone arrives two hours late and says, 'Right on time!' What is this?", ["A literal compliment.", "Irony.", "A formal apology.", "A question."], 1, "A frase é irônica porque a pessoa chegou atrasada."],
        ["What is sarcasm often used for?", ["Only expressing happiness.", "Giving scientific definitions.", "Making a sharp or mocking comment.", "Writing formal reports."], 2, "Sarcasmo frequentemente utiliza comentários irônicos ou provocativos."],
        ["Why is tone important when interpreting sarcasm?", ["It changes the spelling.", "It removes context.", "It makes every sentence literal.", "It can reveal that the speaker means something different from the words."], 3, "Entonação e contexto ajudam a identificar sarcasmo."],
        ["What does 'Oh, great!' mean when said after a computer crashes?", ["The speaker may be expressing frustration sarcastically.", "The computer is excellent.", "The speaker is celebrating.", "The problem is solved."], 0, "O contexto pode indicar que great está sendo usado ironicamente."]
      ]),
      2: buildQuestions(39, 2, [
        ["What is a pun?", ["A formal argument.", "A joke based on multiple meanings or similar sounds of words.", "A type of news article.", "A business meeting."], 1, "Pun é um trocadilho baseado em palavras com sentidos ou sons semelhantes."],
        ["Why can puns be difficult for language learners?", ["They never use vocabulary.", "They are always written in another language.", "They depend on word meanings and sound similarities.", "They have no cultural context."], 2, "Trocadilhos dependem de nuances linguísticas."],
        ["What is a double meaning?", ["A word with no meaning.", "A repeated sentence.", "A direct translation.", "An expression that can be interpreted in two ways."], 3, "Double meaning indica dois sentidos possíveis."],
        ["Which skill helps understand a pun?", ["Recognizing vocabulary and context.", "Ignoring word sounds.", "Reading only the final word.", "Avoiding idioms."], 0, "É necessário perceber os sentidos e sons envolvidos."],
        ["What does 'That joke went over my head' mean?", ["I loved the joke.", "I didn't understand the joke.", "I told the joke.", "I repeated the joke."], 1, "A expressão significa que a piada não foi compreendida."]
      ]),
      3: buildQuestions(39, 3, [
        ["What does 'just kidding' mean?", ["Estou falando sério.", "Não entendi.", "Estou brincando.", "Estou atrasado."], 2, "Just kidding indica que a pessoa estava brincando."],
        ["Complete: Don't take it seriously. I'm just ___.", ["serious", "angry", "busy", "kidding"], 3, "Kidding significa brincando."],
        ["What does 'You're killing me!' sometimes mean in a humorous context?", ["Something is extremely funny or frustrating.", "Someone is giving medical instructions.", "Someone is asking for directions.", "Someone is making a reservation."], 0, "Em contexto informal, pode ser uma reação exagerada a algo engraçado ou frustrante."],
        ["What does 'That was hilarious' mean?", ["Foi muito triste.", "Foi hilário.", "Foi perigoso.", "Foi complicado."], 1, "Hilarious significa extremamente engraçado."],
        ["What is a 'punchline'?", ["The introduction of an essay.", "The name of a character.", "The final part of a joke that creates the humorous effect.", "A formal conclusion."], 2, "Punchline é a parte final da piada, que normalmente produz o efeito humorístico."]
      ]),
      4: buildQuestions(39, 4, [
        ["What does 'deadpan humor' mean?", ["Humor expressed with a serious face or tone.", "A loud musical performance.", "A formal debate.", "A type of news report."], 0, "Deadpan humor apresenta uma piada com expressão ou tom sério."],
        ["Why can cultural references make jokes difficult?", ["They always use simple grammar.", "They depend on knowledge of a culture or shared experience.", "They have no meaning.", "They are always translated literally."], 1, "Referências culturais exigem conhecimento do contexto."],
        ["What does 'inside joke' mean?", ["A joke everyone knows.", "A joke about a building.", "A joke understood by a particular group.", "A formal speech."], 2, "Inside joke é uma piada compreendida por um grupo específico."],
        ["What does 'sarcastic tone' suggest?", ["A neutral scientific statement.", "A literal instruction.", "A formal greeting.", "A possible mocking or ironic intention."], 3, "O tom sarcástico pode indicar ironia ou provocação."],
        ["What should you consider before interpreting a humorous comment?", ["Context, tone and relationship between speakers.", "Only the dictionary definition.", "Only the first word.", "Nothing beyond spelling."], 0, "Contexto, entonação e relação entre os falantes ajudam a interpretar humor."]
      ]),
      5: buildQuestions(39, 5, [
        ["What does 'break a leg' mean when said to a performer?", ["Get injured.", "Good luck.", "Leave the stage.", "Stop performing."], 1, "Break a leg é uma expressão idiomática usada para desejar boa sorte."],
        ["What does 'I'm all ears' mean?", ["I am tired.", "I am confused.", "I'm listening carefully.", "I want to leave."], 2, "I'm all ears significa estou ouvindo com atenção."],
        ["What does 'not my cup of tea' mean?", ["My favorite drink.", "Something very expensive.", "Something impossible.", "Something I don't particularly like."], 3, "A expressão indica algo de que a pessoa não gosta muito."],
        ["What does 'spill the beans' mean?", ["Reveal a secret.", "Cook dinner.", "Make a mess.", "Go shopping."], 0, "Spill the beans significa revelar um segredo."],
        ["What does 'piece of cake' mean?", ["A difficult problem.", "Something very easy.", "A secret.", "A sarcastic insult."], 1, "Piece of cake significa algo muito fácil."]
      ]),
      6: buildQuestions(39, 6, [
        ["What does 'break the ice' mean?", ["Destroy something.", "End a friendship.", "Make people feel more comfortable in a social situation.", "Start an argument."], 2, "Break the ice significa diminuir a tensão inicial e facilitar a interação."],
        ["What does 'I'm on cloud nine' mean?", ["I'm lost.", "I'm confused.", "I'm exhausted.", "I'm extremely happy."], 3, "On cloud nine significa estar extremamente feliz."],
        ["What is the best way to learn humor in another language?", ["Study expressions in context and observe how people use them.", "Memorize translations only.", "Assume every joke is literal.", "Ignore cultural differences."], 0, "Humor depende de contexto, cultura e uso real."],
        ["What does 'sarcasm' often communicate?", ["Only neutral information.", "A meaning that may contrast with the literal words.", "A scientific measurement.", "A formal request."], 1, "Sarcasmo pode comunicar algo diferente do sentido literal."],
        ["Why shouldn't you assume every ironic phrase is an insult?", ["Because sarcasm is always positive.", "Because words never have context.", "Tone, relationship and situation affect interpretation.", "Because irony has no meaning."], 2, "A intenção depende da situação e da relação entre as pessoas."]
      ])
    },
    recovery: buildRecovery(39, [
      ["Irony often involves:", ["A contrast between literal and intended meaning.", "A formal email.", "A scientific formula.", "A direct command."], 0, "Ironia envolve contraste entre sentidos."],
      ["A pun is:", ["A serious warning.", "A joke involving word meanings or sounds.", "A type of meeting.", "A grammar tense."], 1, "Pun significa trocadilho."],
      ["'Just kidding' means:", ["I'm angry.", "I'm serious.", "I'm joking.", "I'm leaving."], 2, "Just kidding significa estou brincando."],
      ["An inside joke is:", ["A public announcement.", "A formal debate.", "A news headline.", "A joke understood by a particular group."], 3, "Inside joke é uma piada interna."],
      ["What helps you understand sarcasm?", ["Tone and context.", "Spelling only.", "Word count.", "The alphabet."], 0, "Entonação e contexto ajudam a reconhecer sarcasmo."]
    ])
  },

  // ==========================================
  // SEMANA 40 — REVISÃO E AJUSTE DE ROTA
  // ==========================================
  40: {
    days: {
      1: buildQuestions(40, 1, [
        ["Choose the correct informal expression: 'I am going to study.'", ["I gotta study.", "I'm gonna study.", "I'm lemme study.", "I'm whatcha study."], 1, "Gonna é a redução informal de going to."],
        ["Complete: I ___ finish this task before tomorrow.", ["wanna", "kinda", "gotta", "sort of"], 2, "Gotta expressa necessidade ou obrigação."],
        ["Choose the correct conditional: If I study, I ___ improve.", ["would have", "improved yesterday", "improving", "will"], 3, "First Conditional usa will + verbo base."],
        ["Complete: If I had known, I ___ you.", ["would have helped", "will help", "help", "would helping"], 0, "Third Conditional usa would have + particípio."],
        ["Choose the correct relative pronoun: The person ___ called me is my teacher.", ["which", "who", "where", "whose"], 1, "Who é usado para pessoas."]
      ]),
      2: buildQuestions(40, 2, [
        ["Which expression introduces an opinion?", ["Nevertheless", "For example", "From my point of view", "As a result"], 2, "From my point of view apresenta uma opinião."],
        ["Which response expresses polite disagreement?", ["You're ridiculous.", "That's stupid.", "Stop talking.", "I understand, but I see it differently."], 3, "A frase reconhece a outra perspectiva e discorda educadamente."],
        ["What does 'deadline' mean?", ["Final deadline or time limit.", "Meeting invitation.", "Salary.", "Job interview."], 0, "Deadline é o prazo final."],
        ["Which sentence is appropriate for a formal email?", ["Hey, what's up?", "Dear Mr. Brown, I am writing to...", "Yo, send it.", "Gotta tell you something."], 1, "A saudação e a estrutura são adequadas à comunicação formal."],
        ["What does 'attached' mean in an email?", ["Cancelled.", "Delayed.", "Included as an attachment.", "Deleted."], 2, "Attached indica que um arquivo foi anexado."]
      ]),
      3: buildQuestions(40, 3, [
        ["What does 'boarding pass' mean?", ["Passport.", "Hotel reservation.", "Flight delay.", "Boarding document."], 3, "Boarding pass é o cartão de embarque."],
        ["What does 'delayed flight' mean?", ["A flight that is late.", "A flight that is early.", "A flight that is private.", "A flight that is full."], 0, "Delayed significa atrasado."],
        ["What is 'inflation'?", ["A cultural tradition.", "A general increase in prices.", "A political candidate.", "A news headline."], 1, "Inflação é o aumento geral dos preços."],
        ["What does 'according to the report' mean?", ["Despite the report.", "Before the report.", "As stated by the report.", "Without reading the report."], 2, "According to apresenta a fonte da informação."],
        ["What is the best strategy for reading a long article?", ["Translate every word first.", "Read only the final paragraph.", "Ignore the headline.", "Identify the main idea and then look for details."], 3, "Primeiro identifique o assunto geral; depois procure informações específicas."]
      ]),
      4: buildQuestions(40, 4, [
        ["What is active listening?", ["Listening carefully to understand the message.", "Ignoring the speaker.", "Reading silently.", "Memorizing only spelling."], 0, "Escuta ativa exige atenção ao significado."],
        ["What does 'transcript' mean?", ["Accent.", "Written version of spoken audio.", "Sound effect.", "Microphone."], 1, "Transcript é a transcrição escrita."],
        ["What does 'deadpan humor' mean?", ["A loud joke.", "A political debate.", "Humor delivered with a serious expression.", "A formal speech."], 2, "Deadpan é um estilo de humor com expressão séria."],
        ["What does 'spill the beans' mean?", ["Cook something.", "Clean a room.", "Go shopping.", "Reveal a secret."], 3, "Spill the beans significa revelar um segredo."],
        ["What does 'I didn't catch that' mean?", ["I didn't understand or hear that.", "I caught a train.", "I agree.", "I finished the task."], 0, "A expressão indica que você não conseguiu compreender ou ouvir."]
      ]),
      5: buildQuestions(40, 5, [
        ["Which part of an essay presents the main argument?", ["The bibliography.", "The thesis statement.", "The signature.", "The page number."], 1, "A thesis statement apresenta o argumento central."],
        ["What does 'furthermore' do?", ["Introduces a contradiction.", "Ends the text.", "Adds another point.", "Introduces a question."], 2, "Furthermore acrescenta uma informação."],
        ["What does 'provided that' express?", ["A result.", "A contrast.", "A greeting.", "A condition."], 3, "Provided that significa desde que."],
        ["What is a rebuttal?", ["A response challenging an opposing argument.", "A final greeting.", "A type of headline.", "A travel document."], 0, "Rebuttal é uma resposta a um argumento contrário."],
        ["What does proofreading involve?", ["Writing without reviewing.", "Checking grammar, spelling and clarity.", "Removing all paragraphs.", "Changing every verb to the past."], 1, "Proofreading é a revisão final do texto."]
      ]),
      6: buildQuestions(40, 6, [
        ["Choose the correct sentence.", ["If I will see him, I tell him.", "If I saw him, I will tell him.", "If I see him, I will tell him.", "If I seeing him, I told him."], 2, "First Conditional usa presente na oração com if e will na principal."],
        ["Choose the correct relative clause.", ["The woman which lives here is kind.", "The woman where lives here is kind.", "The woman whose lives here is kind.", "The woman who lives here is kind."], 3, "Who é o pronome relativo adequado para pessoas."],
        ["Which expression is most suitable for a professional request?", ["Could you please send the document?", "Send it now, dude.", "Gimme that.", "Whatcha doing with it?"], 0, "Could you please é educado e profissional."],
        ["What is the best response when you don't understand a speaker?", ["Pretend you understood.", "Could you repeat that, please?", "Change the subject immediately.", "Ignore the person."], 1, "Pedir repetição é uma estratégia natural de comunicação."],
        ["What should you do after identifying a weakness in your English?", ["Ignore it permanently.", "Stop practicing.", "Practice that specific skill and review your progress.", "Study only what you already know."], 2, "O ajuste de rota deve transformar uma dificuldade identificada em prática direcionada."]
      ])
    },
    recovery: buildRecovery(40, [
      ["Choose the correct First Conditional.", ["If I will study, I improve.", "If I studied, I will improve.", "If I studying, I improve.", "If I study, I will improve."], 3, "First Conditional: if + presente, will + verbo."],
      ["Which word refers to people in a relative clause?", ["Who", "Which", "Where", "When"], 0, "Who é usado para pessoas."],
      ["What does 'I see your point' mean?", ["I disagree completely.", "I understand your argument.", "I don't hear you.", "I want to leave."], 1, "A expressão reconhece que você compreendeu o argumento."],
      ["What does 'deadline' mean?", ["Meeting.", "Salary.", "Final time limit.", "Promotion."], 2, "Deadline é o prazo final."],
      ["What is the purpose of a conclusion in an essay?", ["Introduce unrelated ideas.", "Repeat the introduction word for word.", "Start a new argument.", "Summarize the main points and close the text."], 3, "A conclusão sintetiza o texto e encerra o argumento."]
    ])
},


// ============================================================
// FASE 4 — IMERSÃO TOTAL E FLUIDEZ REAL
// SEMANAS 41–52
// 6 dias por semana | 5 questões por dia | 5 de recuperação
// ============================================================

41: {
  days: {
    1: buildQuestions(41, 1, [
      ["What is the main purpose of watching a movie without subtitles?", ["To memorize every line", "To understand meaning through context", "To learn spelling only", "To avoid listening"], 1, "Context, tone, visuals and actions help you understand speech."],
      ["What should you do when you miss a sentence?", ["Stop the movie", "Translate every word", "Continue and use context", "Restart immediately"], 2, "Fluent comprehension includes continuing when you miss something."],
      ["In 'I can't believe he did that!', what expresses emotion?", ["The sentence only", "The speaker's tone", "The article", "The tense"], 1, "Tone communicates feelings beyond literal meaning."],
      ["What does 'plot' mean?", ["The story of a movie", "The movie's soundtrack", "The actors' clothes", "The filming location"], 0, "Plot means the sequence of events in a story."],
      ["What is a useful strategy for understanding a difficult scene?", ["Focus on the general situation", "Translate every word", "Ignore the characters", "Read a dictionary"], 0, "Understanding the overall situation is often more useful than translating each word."]
    ]),
    2: buildQuestions(41, 2, [
      ["A character says 'You have got to be kidding me!' What does it express?", ["Extreme surprise or disbelief", "A formal invitation", "A promise", "A greeting"], 0, "The expression communicates disbelief or frustration."],
      ["What does 'subtle' mean?", ["Very obvious", "Not immediately obvious", "Extremely loud", "Completely false"], 1, "Subtle things are delicate or difficult to notice."],
      ["What is a documentary mainly intended to do?", ["Present information about real subjects", "Tell only fictional stories", "Teach grammar rules", "Show music videos"], 0, "Documentaries explore real people, events or subjects."],
      ["In a comedy, a 'punchline' is...", ["The final part of a joke", "The opening credits", "A serious warning", "A movie review"], 0, "The punchline delivers the humorous result of a joke."],
      ["What does 'I didn't see that coming' mean?", ["I expected it", "It surprised me", "I watched it twice", "I ignored it"], 1, "The expression means something happened unexpectedly."]
    ]),
    3: buildQuestions(41, 3, [
      ["What does 'to binge-watch' mean?", ["Watch many episodes in one session", "Watch without sound", "Skip every episode", "Watch only trailers"], 0, "Binge-watching means watching multiple episodes consecutively."],
      ["What is an 'episode'?", ["One installment of a series", "A movie genre", "A camera", "A soundtrack"], 0, "An episode is one part of a television series."],
      ["'The evidence points to him.' What does this suggest?", ["The evidence indicates he may be responsible", "He is definitely innocent", "There is no evidence", "The evidence disappeared"], 0, "The phrase means the evidence suggests a conclusion."],
      ["What does 'meanwhile' indicate?", ["Something happening at the same time", "A distant future", "A completed action", "A contradiction"], 0, "Meanwhile connects events happening simultaneously."],
      ["A character whispers. What is the most likely reason?", ["To speak very quietly", "To sing loudly", "To interrupt music", "To speak formally"], 0, "Whispering is speaking in a very low voice."]
    ]),
    4: buildQuestions(41, 4, [
      ["What does 'to figure something out' mean?", ["Understand or solve it", "Forget it", "Hide it", "Repeat it"], 0, "Figure out means to understand or find a solution."],
      ["'It turns out that she was right.' means...", ["Eventually, it became clear she was right", "She changed her mind", "Nobody listened", "She was never right"], 0, "It turns out introduces a discovered fact."],
      ["What is a 'flashback' in a movie?", ["A scene showing an earlier event", "The final scene", "A musical performance", "A movie advertisement"], 0, "A flashback takes the story back to an earlier time."],
      ["What does 'I owe you one' mean?", ["I am grateful and will return the favor", "I lost your money", "I disagree with you", "I forgot your name"], 0, "It expresses gratitude and a willingness to repay a favor."],
      ["What should you focus on when watching a complex scene?", ["Main ideas and relationships", "Every unknown word", "Only the background", "The subtitles"], 0, "Following the main ideas keeps comprehension moving."]
    ]),
    5: buildQuestions(41, 5, [
      ["What does 'underlying tension' mean?", ["Hidden or developing conflict", "A loud soundtrack", "A happy ending", "A simple explanation"], 0, "Underlying tension is conflict or pressure beneath the surface."],
      ["'That was close!' usually means...", ["Something almost went wrong", "Something is far away", "The task is finished", "The speaker is bored"], 0, "That was close describes a narrow escape or near mistake."],
      ["What does 'to bring something up' mean in conversation?", ["Mention a subject", "Carry an object upstairs", "End a conversation", "Forget a topic"], 0, "Bring up means introduce or mention a topic."],
      ["Which clue can reveal sarcasm?", ["Tone and context", "Word length only", "Punctuation only", "The speaker's age"], 0, "Sarcasm often depends on tone and the situation."],
      ["What is the best response to an unfamiliar expression?", ["Infer its meaning from context", "Assume it is meaningless", "Stop listening forever", "Translate the entire scene"], 0, "Context helps you infer unfamiliar expressions."]
    ]),
    6: buildQuestions(41, 6, [
      ["What is the best goal for a full episode without subtitles?", ["Understand the main story and important details", "Understand every syllable perfectly", "Memorize the script", "Translate every sentence"], 0, "The goal is meaningful comprehension, not perfect word recognition."],
      ["What does 'character development' describe?", ["How a character changes", "How a camera moves", "How a movie is advertised", "How music is recorded"], 0, "Character development refers to changes in personality or behavior."],
      ["'I have a feeling something is wrong.' expresses...", ["A suspicion or intuition", "A confirmed scientific fact", "A direct order", "A greeting"], 0, "The speaker has an intuition, not necessarily proof."],
      ["What does 'to get away with something' mean?", ["Avoid punishment for something", "Escape from a building", "Travel abroad", "Receive a reward"], 0, "Get away with means avoid consequences."],
      ["Which skill is most important in this week's practice?", ["Understanding connected speech in context", "Translating isolated words", "Memorizing spelling rules", "Writing formal emails"], 0, "The focus is understanding natural dialogue without subtitles."]
    ])
  },
  recovery: buildRecovery(41, [
    ["What does 'plot' mean?", ["The story of a movie", "The soundtrack", "The cast", "The camera"], 0, "Plot means the story and its events."],
    ["'I didn't see that coming' means...", ["It surprised me", "I expected it", "I ignored it", "I forgot it"], 0, "It describes an unexpected event."],
    ["What is a flashback?", ["A scene from the past", "The opening credits", "A trailer", "The final song"], 0, "A flashback shows an earlier event."],
    ["What does 'figure out' mean?", ["Understand or solve", "Forget", "Hide", "Repeat"], 0, "Figure out means solve or understand."],
    ["What should you do after missing a line?", ["Continue using context", "Stop immediately", "Translate everything", "Give up"], 0, "Keep following the main meaning."]
  ])
},

42: {
  days: {
    1: buildQuestions(42, 1, [
      ["What is the main goal of reading a full book in English?", ["Enjoy and understand an extended text", "Translate every sentence", "Memorize every page", "Avoid unfamiliar words"], 0, "Extensive reading builds comprehension and reading fluency."],
      ["What does 'fiction' mean?", ["Invented stories", "Scientific instructions", "Real news only", "Dictionary entries"], 0, "Fiction is literature based on imagined events or characters."],
      ["What does 'non-fiction' mean?", ["Writing about real subjects", "A fantasy novel", "An imaginary kingdom", "A fictional character"], 0, "Non-fiction deals with real information and subjects."],
      ["What is a 'chapter'?", ["A section of a book", "A character", "A book cover", "A type of dictionary"], 0, "A chapter is one major division of a book."],
      ["What is the best approach to unknown vocabulary?", ["Look up only essential words", "Look up every word", "Stop reading", "Translate the whole chapter"], 0, "Selective vocabulary research preserves reading flow."]
    ]),
    2: buildQuestions(42, 2, [
      ["What does 'narrator' mean?", ["The voice telling the story", "The book's publisher", "The main setting", "The chapter title"], 0, "The narrator is the voice or perspective telling the story."],
      ["What is the 'setting' of a story?", ["Its time and place", "Its vocabulary list", "Its author biography", "Its ending only"], 0, "Setting describes where and when events happen."],
      ["'She hesitated before answering.' means she...", ["Paused because she was uncertain", "Answered immediately", "Shouted angrily", "Forgot the question"], 0, "Hesitate means pause before acting or speaking."],
      ["What does 'eventually' mean?", ["In the end, after some time", "Immediately", "Never", "At the same moment"], 0, "Eventually describes something that happens after a period of time."],
      ["What is an 'excerpt'?", ["A short passage taken from a larger text", "The entire book", "A book review", "A character list"], 0, "An excerpt is a selected part of a longer work."]
    ]),
    3: buildQuestions(42, 3, [
      ["What does 'implied meaning' refer to?", ["Meaning suggested but not directly stated", "A dictionary definition", "A spelling mistake", "A chapter number"], 0, "Authors can communicate ideas indirectly."],
      ["'He reluctantly agreed.' means he agreed...", ["Without enthusiasm", "With great excitement", "Immediately and happily", "Without understanding"], 0, "Reluctantly means unwillingly or with hesitation."],
      ["What is a 'theme' in literature?", ["A central idea", "The author's address", "The page number", "The book's price"], 0, "A theme is a central idea explored in a work."],
      ["What does 'despite' express?", ["Contrast", "Addition", "Purpose", "Time"], 0, "Despite introduces a contrast or unexpected result."],
      ["'Despite the rain, they continued.' means...", ["They continued even though it was raining", "They stopped because of rain", "It did not rain", "They waited for summer"], 0, "Despite signals that the rain did not prevent the action."]
    ]),
    4: buildQuestions(42, 4, [
      ["What is a 'character arc'?", ["The development of a character", "The book's index", "A chapter summary", "A writing tool"], 0, "A character arc is the character's development through a story."],
      ["What does 'to overlook a detail' mean?", ["Fail to notice it", "Explain it clearly", "Write it down", "Research it deeply"], 0, "Overlook means fail to notice or consider."],
      ["'The room was dimly lit.' means it was...", ["Not very bright", "Extremely bright", "Completely outdoors", "Very noisy"], 0, "Dimly lit means illuminated with little light."],
      ["What is a 'conclusion'?", ["The ending or final judgment", "The opening scene", "A character's name", "A footnote"], 0, "A conclusion closes a text or presents its final judgment."],
      ["Why keep a vocabulary notebook?", ["To record useful words and examples", "To copy every page", "To avoid reading", "To translate the whole book"], 0, "A selective notebook helps retain useful vocabulary."]
    ]),
    5: buildQuestions(42, 5, [
      ["What does 'foreshadowing' mean?", ["Hints about future events", "A detailed character list", "A book's publication date", "A description of grammar"], 0, "Foreshadowing gives clues about what may happen later."],
      ["'Her claim was supported by evidence.' means...", ["Evidence backed up what she said", "Evidence contradicted everything", "She had no argument", "The claim was forgotten"], 0, "Supported by evidence means backed up by facts or proof."],
      ["What does 'ambiguous' mean?", ["Having more than one possible meaning", "Very simple", "Completely certain", "Unrelated"], 0, "Ambiguous language can be interpreted in different ways."],
      ["What is a 'review' of a book?", ["An evaluation of the book", "A list of random words", "The original manuscript", "A chapter title"], 0, "A review discusses and evaluates a work."],
      ["What should a good book summary include?", ["Main events and central ideas", "Every sentence", "Only minor details", "Every unknown word"], 0, "A summary focuses on the most important information."]
    ]),
    6: buildQuestions(42, 6, [
      ["What does 'to skim' a text mean?", ["Read quickly to get the general idea", "Read every word slowly", "Translate every paragraph", "Read only the final word"], 0, "Skimming is fast reading for general meaning."],
      ["What does 'to scan' a text mean?", ["Search for specific information", "Read for pleasure only", "Rewrite the whole book", "Ignore headings"], 0, "Scanning means looking quickly for a specific detail."],
      ["What is the best sign of reading progress?", ["Understanding longer passages with less translation", "Looking up more words", "Reading only titles", "Avoiding difficult chapters"], 0, "Greater independence indicates stronger reading fluency."],
      ["What does 'in contrast' introduce?", ["A difference", "A consequence", "An example", "A time sequence"], 0, "In contrast introduces an opposing point or difference."],
      ["What should you write after finishing a book?", ["A short review with your own interpretation", "A copy of every chapter", "Only a vocabulary list", "Nothing about the story"], 0, "A review checks understanding and encourages independent expression."]
    ])
  },
  recovery: buildRecovery(42, [
    ["What is fiction?", ["Imagined stories", "Real news", "Instructions", "A dictionary"], 0, "Fiction is based on imagined events."],
    ["What is the setting?", ["Time and place", "The narrator", "The ending", "The theme"], 0, "Setting establishes when and where the story happens."],
    ["What does 'reluctantly' mean?", ["Without enthusiasm", "Happily", "Immediately", "Loudly"], 0, "Reluctantly means unwillingly."],
    ["What is foreshadowing?", ["Hints about future events", "A book review", "A chapter title", "A summary"], 0, "Foreshadowing prepares the reader for later events."],
    ["What does 'skim' mean?", ["Read quickly for the general idea", "Translate every word", "Search for one number", "Rewrite a text"], 0, "Skimming gives an overview quickly."]
  ])
},

43: {
  days: {
    1: buildQuestions(43, 1, [
      ["What is a podcast?", ["A digital audio program", "A printed novel", "A grammar test", "A movie subtitle"], 0, "Podcasts are audio programs, often released in episodes."],
      ["What is an interview?", ["A conversation with questions and answers", "A fictional monologue", "A dictionary entry", "A music playlist"], 0, "Interviews involve asking someone questions."],
      ["What does 'host' mean in a podcast?", ["The person presenting the program", "The person downloading it", "The microphone", "The listener's headphones"], 0, "The host leads or presents the podcast."],
      ["What is an 'episode'?", ["One installment of a podcast", "The entire internet", "A transcript error", "A sound effect"], 0, "An episode is one published part of a series."],
      ["What is active listening?", ["Listening carefully to understand and evaluate", "Hearing sound without attention", "Reading subtitles", "Repeating random words"], 0, "Active listening requires attention and engagement."]
    ]),
    2: buildQuestions(43, 2, [
      ["What does 'to interrupt' mean?", ["Speak while someone else is speaking", "Listen carefully", "Summarize a topic", "Ask permission"], 0, "Interrupt means break into someone else's speech."],
      ["'As far as I know...' expresses...", ["The speaker's current knowledge", "Absolute certainty about everything", "A command", "A past habit"], 0, "This phrase limits a statement to what the speaker knows."],
      ["What does 'roughly' mean?", ["Approximately", "Exactly", "Never", "Secretly"], 0, "Roughly means approximately, not precisely."],
      ["What does 'to elaborate' mean?", ["Give more details", "End the discussion", "Change the subject", "Speak more quietly"], 0, "Elaborate means explain in greater detail."],
      ["What is a transcript?", ["A written version of spoken words", "A sound recording", "A microphone", "A podcast cover"], 0, "A transcript represents spoken language in writing."]
    ]),
    3: buildQuestions(43, 3, [
      ["What does 'in the long run' mean?", ["Over a long period of time", "Immediately", "Yesterday", "For one minute"], 0, "The phrase refers to the long-term perspective."],
      ["'That raises an interesting question.' means...", ["That creates an interesting issue to discuss", "The question is already answered", "The topic is irrelevant", "The speaker wants to leave"], 0, "Raise a question means bring up an issue."],
      ["What does 'to point out' mean?", ["Draw attention to something", "Hide information", "Forget a detail", "Change a recording"], 0, "Point out means indicate or mention something important."],
      ["What is a 'viewpoint'?", ["A perspective or opinion", "A recording device", "A sound effect", "A transcript"], 0, "A viewpoint is the way someone sees an issue."],
      ["What does 'nevertheless' express?", ["Contrast despite what was said", "Simple addition", "A time sequence", "A location"], 0, "Nevertheless introduces a contrasting point."]
    ]),
    4: buildQuestions(43, 4, [
      ["What is an 'accent'?", ["A way of pronouncing a language", "A grammar tense", "A writing style only", "A type of podcast"], 0, "Accent refers to pronunciation features associated with a speaker or region."],
      ["What is a key difference between accent and vocabulary?", ["Accent concerns pronunciation; vocabulary concerns words", "They mean exactly the same thing", "Vocabulary is only sound", "Accent is only spelling"], 0, "Pronunciation and word choice are different language features."],
      ["What does 'to keep up with' mean?", ["Follow something at its current pace", "Stop listening", "Translate backwards", "Forget a topic"], 0, "Keep up with means stay at the same pace or remain informed."],
      ["What does 'to make a point' mean?", ["Express an important idea", "Draw a map", "Change the microphone", "Avoid an answer"], 0, "Make a point means communicate an argument or idea."],
      ["Why listen to different accents?", ["To improve comprehension across speakers", "To eliminate all accents", "To learn only spelling", "To avoid conversation"], 0, "Exposure to different accents improves listening flexibility."]
    ]),
    5: buildQuestions(43, 5, [
      ["What does 'to come across as' mean?", ["Seem or appear to others", "Arrive at a place", "Read aloud", "Change a subject"], 0, "Come across as describes the impression someone gives."],
      ["'The data seems to suggest...' expresses...", ["A cautious interpretation", "Absolute certainty", "A direct order", "A joke"], 0, "Seems to suggest signals a tentative conclusion."],
      ["What is a 'counterargument'?", ["An argument against another argument", "A repeated example", "A podcast introduction", "A personal greeting"], 0, "A counterargument challenges an existing claim."],
      ["What does 'to draw a distinction' mean?", ["Show a difference between things", "Combine two ideas", "Avoid a topic", "Repeat a sentence"], 0, "Draw a distinction means identify a meaningful difference."],
      ["What is the best way to handle an unfamiliar accent?", ["Use context and listen for key ideas", "Assume the speaker is wrong", "Stop listening", "Focus only on spelling"], 0, "Context and key information support comprehension."]
    ]),
    6: buildQuestions(43, 6, [
      ["What is the purpose of summarizing a podcast episode?", ["Check understanding of its main ideas", "Copy every word", "Avoid listening", "Replace the speaker"], 0, "A summary demonstrates comprehension of the central points."],
      ["What does 'to challenge an assumption' mean?", ["Question something accepted as true", "Agree without thinking", "Change the recording", "Repeat a fact"], 0, "Challenge an assumption means examine whether it is justified."],
      ["What does 'to put it another way' introduce?", ["A rephrasing", "A contradiction", "A conclusion from data", "A new speaker"], 0, "The phrase introduces the same idea in different words."],
      ["What does 'on the other hand' signal?", ["An alternative or contrasting point", "A repeated phrase", "A location", "A greeting"], 0, "It introduces another side of an issue."],
      ["What should you do after listening to a long interview?", ["Explain its central arguments in your own words", "Memorize every pause", "Translate every sentence", "Ignore the conclusion"], 0, "Retelling the arguments checks deeper comprehension."]
    ])
  },
  recovery: buildRecovery(43, [
    ["What is a podcast transcript?", ["Written version of spoken words", "Audio equipment", "A movie", "A dictionary"], 0, "A transcript represents spoken language in writing."],
    ["What does 'elaborate' mean?", ["Give more details", "End a discussion", "Interrupt", "Forget"], 0, "Elaborate means explain further."],
    ["What is a counterargument?", ["Argument against another argument", "A greeting", "A sound effect", "A summary"], 0, "It presents an opposing argument."],
    ["What does 'roughly' mean?", ["Approximately", "Exactly", "Never", "Secretly"], 0, "Roughly means approximately."],
    ["Why listen to different accents?", ["Improve listening flexibility", "Remove accents", "Avoid speaking", "Learn spelling only"], 0, "Different accents prepare you for real-world speech."]
  ])
},

44: {
  days: {
    1: buildQuestions(44, 1, [
      ["What does 'internal monologue' mean?", ["The thoughts and words in your mind", "A public speech", "A written exam", "A phone call"], 0, "An internal monologue is the voice of thought."],
      ["What is the main goal of thinking in English?", ["Reduce dependence on translating from Portuguese", "Forget all grammar", "Speak as fast as possible", "Memorize a dictionary"], 0, "Direct thinking helps make English more automatic."],
      ["How can you begin narrating your day?", ["Describe simple actions in English", "Translate an entire book", "Use only advanced vocabulary", "Avoid familiar words"], 0, "Simple daily narration is an accessible starting point."],
      ["'I'm getting ready for school.' describes...", ["An action happening now", "A distant memory", "A permanent fact", "A completed future event"], 0, "Present continuous describes an action in progress."],
      ["What should you do when you don't know a word?", ["Explain the idea using words you know", "Stop thinking", "Switch languages immediately", "Remain silent forever"], 0, "Paraphrasing keeps communication moving."]
    ]),
    2: buildQuestions(44, 2, [
      ["Which sentence is a natural thought about the weather?", ["It looks like it's going to rain.", "Rain is yesterday blue.", "Weather have a.", "It raining will yesterday."], 0, "This is a natural way to predict rain from current signs."],
      ["What does 'I need to figure this out' express?", ["A need to solve something", "A completed celebration", "A greeting", "A refusal to think"], 0, "Figure this out means understand or solve this."],
      ["What is paraphrasing?", ["Expressing the same idea in different words", "Repeating a sound exactly", "Translating every word", "Changing the subject"], 0, "Paraphrasing preserves meaning while changing wording."],
      ["Which phrase is useful when you forget a word?", ["It's a thing you use for...", "I have no language.", "The word is disappeared.", "Never mind everything."], 0, "Describing an object's function can replace an unknown word."],
      ["What is a realistic daily monologue goal?", ["Describe a few activities clearly", "Speak perfectly for an hour immediately", "Use only rare words", "Avoid mistakes completely"], 0, "Short, consistent practice is more sustainable."]
    ]),
    3: buildQuestions(44, 3, [
      ["'First, I'll finish my homework. Then, I'll relax.' uses...", ["Sequencing", "Comparison", "Reported speech", "Passive voice"], 0, "First and then organize events in sequence."],
      ["What does 'I wonder whether...' express?", ["Curiosity or uncertainty", "A command", "A completed action", "A strong prohibition"], 0, "Wonder expresses curiosity or uncertainty."],
      ["Which is a natural self-question?", ["What should I do next?", "What I should next do yesterday?", "What do next I?", "What next should yesterday?"], 0, "The question uses correct modal and word order."],
      ["What does 'to get distracted' mean?", ["Lose focus", "Become fluent instantly", "Remember everything", "Speak louder"], 0, "Getting distracted means losing attention."],
      ["Why describe your surroundings in English?", ["Connect language with real situations", "Avoid learning vocabulary", "Practice only past tense", "Stop observing"], 0, "Naming real objects and actions builds direct associations."]
    ]),
    4: buildQuestions(44, 4, [
      ["'I can't remember the exact word, but it's used to...' is an example of...", ["Paraphrasing", "A conditional", "A passive sentence", "A direct quotation"], 0, "The speaker explains the meaning without knowing the word."],
      ["What does 'eventually' mean?", ["In the end", "Immediately", "Never", "At the same time"], 0, "Eventually describes a result after some time."],
      ["Which sentence describes a routine?", ["I usually check my messages in the morning.", "I am checking them right now.", "I checked them yesterday.", "I will check them tomorrow."], 0, "Usually signals a habitual action."],
      ["Which phrase helps organize thoughts?", ["Let me think for a second.", "I yesterday thinking.", "Never the idea.", "Question finished now."], 0, "This phrase gives the speaker time to organize an answer."],
      ["What is the benefit of speaking aloud to yourself?", ["Practice producing sentences independently", "Avoid forming sentences", "Replace all conversations", "Eliminate the need to listen"], 0, "Speaking aloud provides active production practice."]
    ]),
    5: buildQuestions(44, 5, [
      ["'If I have time, I'll read tonight.' is...", ["A first conditional", "A past perfect sentence", "A passive sentence", "A reported question"], 0, "First conditional describes a real possible future condition."],
      ["What does 'on my way' mean?", ["Traveling toward a destination", "Already at home", "Completely lost", "Finished studying"], 0, "On my way means heading toward a place."],
      ["Which phrase expresses a change of plan?", ["Actually, I've changed my mind.", "I always yesterday.", "The idea is a chair.", "Never the plan now."], 0, "The phrase naturally introduces a revised decision."],
      ["What does 'to run out of time' mean?", ["Have no time left", "Have extra time", "Arrive early", "Cancel a clock"], 0, "Run out of time means time is exhausted."],
      ["What should you do if your inner monologue becomes repetitive?", ["Introduce new situations and topics", "Stop practicing forever", "Use only one sentence", "Translate the same phrase"], 0, "Varied situations expand your ability to think in English."]
    ]),
    6: buildQuestions(44, 6, [
      ["What is the best sign of progress in thinking directly in English?", ["Forming simple thoughts without translating each word", "Knowing every dictionary entry", "Never making mistakes", "Speaking only in complex sentences"], 0, "Automatic simple thought is a meaningful milestone."],
      ["What does 'to make up your mind' mean?", ["Make a decision", "Invent a word", "Forget a plan", "Change languages"], 0, "Make up your mind means decide."],
      ["Which is a natural reaction to a problem?", ["That's something I need to work on.", "That something I work yesterday.", "I problem am.", "Need yesterday it."], 0, "The phrase naturally identifies something requiring improvement."],
      ["What is the best response to a vocabulary gap?", ["Use a simpler expression", "Stop communicating", "Invent random grammar", "Ignore the meaning"], 0, "Simplifying is a practical communication strategy."],
      ["What should your daily monologue include?", ["Actions, plans, observations and opinions", "Only memorized definitions", "Only questions", "Only difficult idioms"], 0, "Different types of thoughts build flexible language use."]
    ])
  },
  recovery: buildRecovery(44, [
    ["What is an internal monologue?", ["Thoughts in your mind", "A public speech", "A podcast", "A written exam"], 0, "It is the voice of thought."],
    ["What is paraphrasing?", ["Expressing an idea differently", "Repeating exactly", "Changing the topic", "Avoiding speech"], 0, "Paraphrasing keeps the meaning while changing the words."],
    ["What does 'make up your mind' mean?", ["Decide", "Forget", "Invent a word", "Travel"], 0, "It means make a decision."],
    ["Which word signals a routine?", ["Usually", "Right now", "Yesterday", "Tomorrow"], 0, "Usually is a frequency adverb."],
    ["What should you do when you forget a word?", ["Describe it using known words", "Stop speaking", "Give up", "Change the subject immediately"], 0, "Description and paraphrasing keep communication flowing."]
  ])
},

45: {
  days: {
    1: buildQuestions(45, 1, [
      ["What is shadowing in language learning?", ["Repeating speech along with a recording", "Reading silently", "Translating a book", "Writing from memory"], 0, "Shadowing imitates a speaker in real time or with a slight delay."],
      ["What is intonation?", ["The rise and fall of the voice", "The spelling of a word", "The number of paragraphs", "The speed of reading only"], 0, "Intonation is the movement of pitch in speech."],
      ["What is rhythm in pronunciation?", ["The pattern of stressed and unstressed parts", "The number of letters", "The order of paragraphs", "The meaning of a phrase"], 0, "English rhythm depends on stress patterns."],
      ["What does 'to imitate' mean?", ["Copy someone's way of doing something", "Avoid listening", "Translate literally", "Write a summary"], 0, "Imitate means copy a model or example."],
      ["What is the main goal of shadowing?", ["Improve timing, rhythm and pronunciation", "Memorize grammar tables", "Learn spelling only", "Avoid speaking"], 0, "Shadowing develops spoken fluency through imitation."]
    ]),
    2: buildQuestions(45, 2, [
      ["What are linking sounds?", ["Connections between words in natural speech", "Words written together", "Silent paragraphs", "Grammar exceptions only"], 0, "In connected speech, word boundaries may sound less distinct."],
      ["Why do native speakers seem to speak quickly?", ["Words connect and unstressed sounds are reduced", "They never pause", "They use no grammar", "They pronounce every letter"], 0, "Connected speech and reductions make speech sound faster."],
      ["What is a stressed syllable?", ["A syllable pronounced with greater prominence", "A silent syllable", "The final letter", "A written accent mark only"], 0, "Stress makes one syllable more prominent."],
      ["What should you imitate during shadowing?", ["Stress, rhythm and intonation", "Only the speaker's vocabulary", "Only punctuation", "The background music"], 0, "Good shadowing copies prosody as well as sounds."],
      ["What is a useful first shadowing clip?", ["A short, clear recording", "A two-hour debate", "A noisy recording", "A song with unclear audio"], 0, "Short clear clips make accurate imitation easier."]
    ]),
    3: buildQuestions(45, 3, [
      ["What does 'gonna' represent in informal speech?", ["Going to", "Gone to", "Got to", "Going on"], 0, "Gonna is a common informal reduction of going to."],
      ["What does 'wanna' represent?", ["Want to", "Went to", "Will not", "Would have"], 0, "Wanna is an informal reduction of want to."],
      ["What is the best way to practice a difficult sentence?", ["Listen, repeat and compare", "Read it once silently", "Skip it permanently", "Translate every letter"], 0, "Repeated comparison helps identify differences."],
      ["What does 'gonna' usually signal?", ["Informal spoken language", "Formal academic writing", "A spelling rule for essays", "A past tense"], 0, "Gonna is informal and generally unsuitable for formal writing."],
      ["What is a good shadowing sequence?", ["Listen, imitate, record and review", "Write, translate and stop", "Guess, skip and forget", "Speak without listening"], 0, "A repeatable sequence helps you notice pronunciation patterns."]
    ]),
    4: buildQuestions(45, 4, [
      ["What is a voiced sound?", ["A sound produced with vocal-fold vibration", "A sound written in capital letters", "A silent sound", "A sound with no airflow"], 0, "Voiced sounds involve vibration of the vocal folds."],
      ["What is a minimal pair?", ["Two words differing by one sound", "Two identical paragraphs", "Two rhyming sentences", "Two grammar rules"], 0, "Minimal pairs help distinguish similar sounds."],
      ["Why record your own voice?", ["Compare your speech with the model", "Change your natural voice", "Avoid listening", "Replace every conversation"], 0, "Recording makes pronunciation differences easier to notice."],
      ["What does 'pace' mean in speaking?", ["Speed of speech", "Volume only", "Word meaning", "Sentence length"], 0, "Pace is the speed at which someone speaks."],
      ["What is the purpose of a pause?", ["Create separation or emphasis", "Change spelling", "Remove grammar", "Make every word stressed"], 0, "Pauses help organize speech and communicate emphasis."]
    ]),
    5: buildQuestions(45, 5, [
      ["What is a reduced form in connected speech?", ["A shortened spoken form", "A longer written paragraph", "A new tense", "A silent letter in every word"], 0, "Reduced forms are common in natural conversation."],
      ["What does 'could've' represent?", ["Could have", "Could of", "Could be", "Could do"], 0, "Could've is the spoken contraction of could have."],
      ["Why should you choose material with a clear speaker?", ["To hear pronunciation details accurately", "To avoid understanding", "To memorize subtitles", "To practice only spelling"], 0, "Clear audio makes sound patterns easier to identify."],
      ["What is 'word stress'?", ["Emphasis on a syllable within a word", "Emphasis on a paragraph", "A spelling error", "A type of punctuation"], 0, "Word stress identifies the prominent syllable."],
      ["What should you avoid during shadowing?", ["Trying to speak faster than you can manage", "Listening carefully", "Repeating short sections", "Noticing intonation"], 0, "Accuracy and rhythm matter more than speed."]
    ]),
    6: buildQuestions(45, 6, [
      ["What does 'intonation' help communicate?", ["Questions, emphasis and attitudes", "Spelling only", "Paragraph length", "Verb endings only"], 0, "Pitch movement can communicate meaning and attitude."],
      ["What is the best way to evaluate shadowing progress?", ["Compare recordings over time", "Count words in a dictionary", "Avoid listening to yourself", "Memorize the transcript"], 0, "Comparing recordings reveals changes in rhythm and clarity."],
      ["What does 'natural speech' often include?", ["Connected sounds and reductions", "A pause after every word", "Only formal vocabulary", "No contractions"], 0, "Natural speech uses connected pronunciation and reductions."],
      ["What is the role of a transcript in shadowing?", ["Help check the words being spoken", "Replace the audio completely", "Measure volume", "Change the speaker's accent"], 0, "A transcript can clarify what you hear."],
      ["What is the main lesson of this week?", ["Imitate speech patterns, not just individual words", "Speak as fast as possible", "Avoid listening", "Memorize written accents"], 0, "Fluency depends on connected speech, rhythm and intonation."]
    ])
  },
  recovery: buildRecovery(45, [
    ["What is shadowing?", ["Repeating along with a recording", "Silent reading", "Translation", "Essay writing"], 0, "Shadowing imitates spoken language."],
    ["What is intonation?", ["Rise and fall of the voice", "Spelling", "Paragraph length", "Word count"], 0, "Intonation is pitch movement."],
    ["What does 'wanna' mean?", ["Want to", "Went to", "Will not", "Would have"], 0, "Wanna is an informal form of want to."],
    ["What is word stress?", ["Emphasis on a syllable", "A punctuation mark", "A paragraph", "A silent letter"], 0, "Stress makes a syllable prominent."],
    ["Why record your voice?", ["Compare your pronunciation over time", "Avoid speaking", "Change your accent instantly", "Replace listening"], 0, "Recordings help you notice progress."]
  ])
},

46: {
  days: {
    1: buildQuestions(46, 1, [
      ["What is the main goal of a conversation exchange?", ["Communicate and learn through interaction", "Speak without listening", "Avoid mistakes at all costs", "Memorize a script"], 0, "Conversation practice develops real-time communication."],
      ["What does 'Could you clarify that?' mean?", ["Can you explain that more clearly?", "Can you repeat your name?", "Can you leave now?", "Can you speak Portuguese?"], 0, "Clarify asks someone to make an idea clearer."],
      ["What is a follow-up question?", ["A question connected to a previous answer", "A question unrelated to the topic", "The first question only", "A written correction"], 0, "Follow-up questions keep a conversation developing."],
      ["What does 'I see what you mean' express?", ["Understanding", "Disagreement", "Confusion", "A refusal"], 0, "The phrase acknowledges another person's point."],
      ["What should you do if you make a mistake while speaking?", ["Correct yourself if needed and continue", "End the conversation", "Apologize after every word", "Stop learning"], 0, "Communication matters more than perfect sentences."]
    ]),
    2: buildQuestions(46, 2, [
      ["What does 'Could you give me an example?' request?", ["A specific illustration", "A translation of every word", "A different speaker", "An immediate goodbye"], 0, "Examples make explanations more concrete."],
      ["What does 'Let me rephrase that' mean?", ["I will express the idea differently", "I will end the conversation", "I will repeat the same mistake", "I will change languages"], 0, "Rephrase means say something in different words."],
      ["What is active participation?", ["Contributing ideas and asking questions", "Only waiting silently", "Interrupting constantly", "Reading a script"], 0, "Participation includes speaking and listening."],
      ["Which phrase politely interrupts?", ["Sorry to interrupt, but...", "Be quiet now!", "You are wrong!", "Stop talking!"], 0, "This phrase softens an interruption."],
      ["What does 'I hadn't thought of it that way' express?", ["A new perspective", "Complete refusal", "A greeting", "A command"], 0, "The speaker recognizes a different way of seeing something."]
    ]),
    3: buildQuestions(46, 3, [
      ["What does 'to elaborate on a point' mean?", ["Explain it in more detail", "Ignore it", "Change the topic", "End the meeting"], 0, "Elaborate means develop an explanation."],
      ["What is a 'misunderstanding'?", ["A failure to understand correctly", "A perfect agreement", "A formal introduction", "A pronunciation test"], 0, "A misunderstanding happens when meaning is interpreted incorrectly."],
      ["Which response checks understanding?", ["So, if I understand correctly...", "I never listen.", "That's not a sentence.", "Goodbye forever."], 0, "This phrase checks whether your interpretation is accurate."],
      ["What does 'That's a fair point' express?", ["Recognition that an argument is reasonable", "Anger", "Confusion", "A refusal to listen"], 0, "It acknowledges a reasonable argument."],
      ["What should you do when you don't understand a question?", ["Ask the speaker to repeat or rephrase it", "Guess randomly", "Ignore the speaker", "Change the topic immediately"], 0, "Asking for clarification is a normal communication strategy."]
    ]),
    4: buildQuestions(46, 4, [
      ["What is 'turn-taking'?", ["Sharing speaking time in a conversation", "Changing seats", "Changing languages", "Repeating a sentence"], 0, "Turn-taking organizes who speaks and when."],
      ["What does 'to get straight to the point' mean?", ["Speak directly about the main issue", "Avoid the topic", "Tell a long unrelated story", "Ask for directions"], 0, "The expression means focus on the central subject."],
      ["Which phrase politely disagrees?", ["I understand your point, but I see it differently.", "You're completely stupid.", "Stop making sense.", "No, because no."], 0, "It acknowledges the other person before disagreeing."],
      ["What is a conversation filler?", ["A phrase used to gain thinking time", "A false answer", "A grammar mistake", "A written title"], 0, "Fillers such as 'well' can help manage pauses."],
      ["What does 'by the way' introduce?", ["An additional or related topic", "A past perfect action", "A direct refusal", "A conclusion only"], 0, "By the way introduces extra information or a side topic."]
    ]),
    5: buildQuestions(46, 5, [
      ["What does 'I couldn't agree more' mean?", ["I completely agree", "I strongly disagree", "I am uncertain", "I did not hear you"], 0, "It is a strong expression of agreement."],
      ["What does 'to clarify a misunderstanding' mean?", ["Make the situation clear after confusion", "Create more confusion", "Avoid explaining", "Change the subject"], 0, "Clarify resolves uncertainty or incorrect understanding."],
      ["What is a natural way to ask someone to speak more slowly?", ["Could you speak a little more slowly?", "Speak slow now!", "You are too fast forever.", "No more words."], 0, "This is a polite request."],
      ["What does 'I hadn't considered that' mean?", ["That idea was not part of my previous thinking", "I already knew everything", "I refuse to listen", "I forgot the language"], 0, "The speaker recognizes a new consideration."],
      ["What is the best way to keep a conversation going?", ["Ask relevant follow-up questions", "Give only one-word answers", "Ignore the other person", "Repeat the same question"], 0, "Follow-up questions show interest and develop the topic."]
    ]),
    6: buildQuestions(46, 6, [
      ["What is fluency in conversation?", ["Communicating ideas smoothly and effectively", "Never making grammatical mistakes", "Speaking at maximum speed", "Using only advanced vocabulary"], 0, "Fluency is effective communication, not perfection."],
      ["What does 'to make oneself understood' mean?", ["Communicate clearly enough for others to understand", "Speak without meaning", "Avoid questions", "Memorize a speech"], 0, "The expression focuses on successful communication."],
      ["Which phrase helps you gain time?", ["Let me think about that for a moment.", "I have no language.", "Question is finished.", "Never speak again."], 0, "This gives you time without ending the conversation."],
      ["What is the best response to unexpected questions?", ["Listen, organize your idea and answer", "Panic and stop", "Repeat the question forever", "Give an unrelated answer"], 0, "A brief pause helps organize a relevant response."],
      ["What should you evaluate after a conversation?", ["Clarity, confidence and ability to maintain interaction", "Only the number of mistakes", "Only speaking speed", "Only vocabulary difficulty"], 0, "A broad evaluation is more useful than focusing only on errors."]
    ])
  },
  recovery: buildRecovery(46, [
    ["What does 'clarify' mean?", ["Make something clearer", "Make it louder", "Forget it", "Translate it automatically"], 0, "Clarify means make an idea easier to understand."],
    ["What is a follow-up question?", ["A question related to a previous answer", "A random question", "A final goodbye", "A grammar rule"], 0, "Follow-up questions continue the discussion."],
    ["What does 'turn-taking' mean?", ["Sharing speaking time", "Changing seats", "Repeating words", "Ending a call"], 0, "It is the organization of speaking turns."],
    ["How do you politely ask someone to repeat?", ["Could you say that again, please?", "What is wrong with you?", "Stop talking.", "Never mind."], 0, "This is a polite clarification request."],
    ["What is conversational fluency?", ["Communicating smoothly and effectively", "Speaking perfectly", "Speaking as fast as possible", "Never pausing"], 0, "Fluency is effective communication, not perfection."]
  ])
},

47: {
  days: {
    1: buildQuestions(47, 1, [
      ["What is a personal diary?", ["A record of personal experiences and thoughts", "A formal business contract", "A news broadcast", "A dictionary"], 0, "A diary records experiences, observations and reflections."],
      ["What is a film review?", ["An evaluation of a movie", "A movie script", "A list of actors only", "A ticket"], 0, "A review evaluates a film and explains an opinion."],
      ["What does 'in my opinion' introduce?", ["A personal viewpoint", "A confirmed statistic", "A direct command", "A quotation only"], 0, "It signals that the following statement is an opinion."],
      ["What is a reflection?", ["Careful thought about an experience or idea", "A random list of words", "A fictional character", "A sound recording"], 0, "Reflection involves thinking deeply about something."],
      ["What is the purpose of a first draft?", ["Develop ideas before revising", "Produce a perfect final text", "Avoid planning", "Replace reading"], 0, "A first draft is a starting version that can be improved."]
    ]),
    2: buildQuestions(47, 2, [
      ["What is a thesis statement?", ["The central claim of an essay", "The final punctuation mark", "A character description", "A list of sources only"], 0, "A thesis states the main argument or position."],
      ["What should an introduction do?", ["Introduce the topic and central idea", "Present every detail", "Repeat the conclusion", "List unrelated facts"], 0, "An introduction prepares the reader for the text."],
      ["What is a topic sentence?", ["A sentence presenting a paragraph's main idea", "The essay title", "A source citation", "The final sentence of a book"], 0, "A topic sentence guides the paragraph."],
      ["What does 'furthermore' express?", ["Addition", "Contrast", "Time", "Condition"], 0, "Furthermore adds another supporting point."],
      ["What is a conclusion supposed to do?", ["Bring the main ideas together", "Introduce an unrelated topic", "Start a new argument", "Copy the introduction exactly"], 0, "A conclusion reinforces the central message."]
    ]),
    3: buildQuestions(47, 3, [
      ["What does 'nevertheless' signal?", ["Contrast", "Addition", "Sequence", "Purpose"], 0, "Nevertheless introduces a contrasting idea."],
      ["What does 'consequently' mean?", ["As a result", "In contrast", "For example", "At first"], 0, "Consequently introduces a consequence."],
      ["What does 'in addition' mean?", ["Also; furthermore", "However", "Instead", "Previously"], 0, "In addition introduces extra information."],
      ["What is cohesion in writing?", ["The way ideas connect smoothly", "The number of pages", "The handwriting style", "The font size"], 0, "Cohesion connects sentences and paragraphs."],
      ["What is coherence?", ["Logical organization and clear meaning", "Perfect spelling only", "A long vocabulary list", "A specific font"], 0, "Coherence means the ideas make sense together."]
    ]),
    4: buildQuestions(47, 4, [
      ["What does 'to convey an idea' mean?", ["Communicate an idea", "Hide an idea", "Forget an idea", "Repeat a title"], 0, "Convey means communicate or express."],
      ["What is a 'nuanced' opinion?", ["An opinion recognizing complexity", "An opinion with no reasoning", "A random guess", "A simple spelling correction"], 0, "Nuanced opinions recognize distinctions and complexity."],
      ["What does 'from a broader perspective' mean?", ["Considering the larger situation", "Focusing on one letter", "Ignoring context", "Looking only at the past"], 0, "A broader perspective considers more factors."],
      ["What is an effective example in an essay?", ["A specific case supporting an idea", "An unrelated detail", "A repeated title", "A random sentence"], 0, "Examples make arguments clearer and more concrete."],
      ["Why revise a text?", ["Improve clarity, organization and accuracy", "Make it longer without reason", "Remove every example", "Avoid checking meaning"], 0, "Revision improves how effectively the text communicates."]
    ]),
    5: buildQuestions(47, 5, [
      ["What does 'on the contrary' introduce?", ["A direct opposing idea", "An additional example", "A time sequence", "A summary"], 0, "On the contrary introduces an opposing statement."],
      ["What is a 'counterpoint'?", ["An opposing or alternative point", "A book title", "A paragraph number", "A spelling rule"], 0, "A counterpoint presents another side of an argument."],
      ["What does 'to put something into perspective' mean?", ["Help understand its relative importance", "Remove all details", "Change its spelling", "Repeat it exactly"], 0, "The phrase helps evaluate importance in a wider context."],
      ["What is a strong film review likely to include?", ["Opinion supported by specific observations", "Only the movie title", "A complete plot transcript", "Unrelated personal details"], 0, "A review should explain and support its judgment."],
      ["What does 'ultimately' mean?", ["In the end", "At the beginning", "At the same time", "By accident"], 0, "Ultimately introduces a final result or conclusion."]
    ]),
    6: buildQuestions(47, 6, [
      ["What should a reflective diary entry include?", ["Experience, thoughts and interpretation", "Only copied definitions", "Only unrelated facts", "A list of grammar rules"], 0, "Reflection connects what happened with what it means to you."],
      ["What is the best way to avoid repetition in writing?", ["Use clear references and varied sentence structures", "Repeat every noun", "Remove all connectors", "Use random synonyms"], 0, "Variation improves flow when it preserves clarity."],
      ["What does 'to elaborate on' mean?", ["Explain in more detail", "Delete", "Contradict", "Summarize in one word"], 0, "Elaborate means develop an explanation."],
      ["What is an effective final editing check?", ["Check clarity, grammar and paragraph flow", "Count only the commas", "Change every adjective", "Remove the conclusion"], 0, "A final check should consider the whole text."],
      ["What is the goal of creative writing practice?", ["Express ideas clearly in your own voice", "Copy a model word for word", "Avoid personal opinions", "Use the longest words possible"], 0, "Creative writing develops independent expression."]
    ])
  },
  recovery: buildRecovery(47, [
    ["What is a thesis statement?", ["The essay's central claim", "The title", "A source list", "A punctuation mark"], 0, "A thesis states the main argument."],
    ["What does 'furthermore' mean?", ["In addition", "However", "Instead", "Previously"], 0, "Furthermore adds another point."],
    ["What is cohesion?", ["Connections between ideas", "Page count", "Font size", "Spelling only"], 0, "Cohesion links sentences and paragraphs."],
    ["What is a counterpoint?", ["An opposing or alternative idea", "A conclusion", "A title", "A grammar tense"], 0, "A counterpoint presents another perspective."],
    ["Why revise a text?", ["Improve clarity and organization", "Make it longer", "Remove all examples", "Avoid checking"], 0, "Revision improves communication."]
  ])
},

48: {
  days: {
    1: buildQuestions(48, 1, [
      ["What does 'troubleshooting' mean?", ["Finding and solving problems", "Creating advertisements", "Writing fiction", "Translating poetry"], 0, "Troubleshooting is the process of diagnosing and resolving problems."],
      ["What is a tutorial?", ["A guide that teaches how to do something", "A fictional story", "A news headline", "A personal diary"], 0, "A tutorial provides instructions or demonstrations."],
      ["What does 'step-by-step' mean?", ["Following one stage after another", "Doing everything randomly", "Skipping instructions", "Working without a plan"], 0, "Step-by-step instructions present an ordered process."],
      ["What is a manual?", ["A document explaining how to use or operate something", "A movie review", "A novel", "A podcast"], 0, "A manual provides practical instructions."],
      ["What does 'requirement' mean?", ["Something necessary or demanded", "An optional joke", "A completed task", "An unrelated opinion"], 0, "A requirement is something that must be met."]
    ]),
    2: buildQuestions(48, 2, [
      ["What does 'Make sure the device is switched off' mean?", ["Check that the device is off", "Turn it on immediately", "Remove its screen", "Ignore its power"], 0, "Make sure asks you to verify a condition."],
      ["What does 'prior to installation' mean?", ["Before installation", "After installation", "During a failure", "Without installation"], 0, "Prior to means before."],
      ["What does 'otherwise' mean in instructions?", ["If not; or else", "For example", "At the same time", "In addition"], 0, "Otherwise introduces what happens if a condition is not met."],
      ["What is a warning in a manual?", ["Information about a possible risk or problem", "A product review", "A fictional dialogue", "A greeting"], 0, "Warnings highlight important precautions."],
      ["What does 'ensure' mean?", ["Make certain", "Forget", "Replace", "Delay"], 0, "Ensure means make sure something happens."]
    ]),
    3: buildQuestions(48, 3, [
      ["What does 'compatible with' mean?", ["Able to work or function together", "Completely unrelated", "More expensive than", "Located above"], 0, "Compatible items can work together."],
      ["What is a 'feature' of a product?", ["A characteristic or function", "A shipping address", "A grammar mistake", "A fictional character"], 0, "A feature is a particular characteristic or function."],
      ["What does 'in order to' express?", ["Purpose", "Contrast", "Time in the past", "Comparison"], 0, "In order to introduces the purpose of an action."],
      ["'The software failed to load.' means...", ["The software did not start loading successfully", "The software was installed perfectly", "The computer was sold", "The file was printed"], 0, "Failed to means did not succeed in doing something."],
      ["What does 'to carry out a task' mean?", ["Perform or complete it", "Cancel it", "Forget it", "Describe it"], 0, "Carry out means perform or execute."]
    ]),
    4: buildQuestions(48, 4, [
      ["What does 'ingredient' mean in a recipe?", ["One of the foods used to prepare a dish", "A kitchen appliance", "A cooking temperature", "A restaurant review"], 0, "Ingredients are the components of a recipe."],
      ["What does 'simmer' mean?", ["Cook gently just below boiling", "Freeze quickly", "Fry at maximum heat", "Serve immediately"], 0, "Simmer means cook gently in liquid."],
      ["What does 'stir occasionally' mean?", ["Mix from time to time", "Mix constantly without stopping", "Never mix", "Remove all liquid"], 0, "Occasionally means sometimes, not continuously."],
      ["What does 'preheat the oven' mean?", ["Heat it before putting food inside", "Turn it off", "Clean it after cooking", "Open its door permanently"], 0, "Preheat means bring the oven to the required temperature beforehand."],
      ["What does 'until golden brown' describe?", ["A desired cooked color", "A type of ingredient", "A cooking tool", "A serving size"], 0, "The phrase describes a visual cooking result."]
    ]),
    5: buildQuestions(48, 5, [
      ["What does 'according to the instructions' mean?", ["Following what the instructions say", "Ignoring the instructions", "Changing the subject", "Using a random method"], 0, "According to means in agreement with the information given."],
      ["What does 'unless' mean?", ["Except if", "Because", "Although", "As soon as"], 0, "Unless introduces an exception or negative condition."],
      ["What is a 'backup'?", ["An extra copy or alternative", "A deleted file", "A broken screen", "A cooking ingredient"], 0, "A backup provides a copy or fallback option."],
      ["What does 'restore the settings' mean?", ["Return settings to a previous or default state", "Delete the device", "Increase the volume only", "Install a new keyboard"], 0, "Restore means bring something back to an earlier state."],
      ["What does 'the issue persists' mean?", ["The problem continues", "The problem is solved", "The device is new", "The instructions are complete"], 0, "Persist means continue to exist or happen."]
    ]),
    6: buildQuestions(48, 6, [
      ["What is the best approach to an unfamiliar technical task?", ["Identify the goal and follow reliable instructions", "Guess every step", "Ignore warnings", "Skip the requirements"], 0, "A clear goal and reliable instructions reduce confusion."],
      ["What does 'refer to the diagram' mean?", ["Look at the diagram for information", "Delete the diagram", "Draw a new alphabet", "Ignore the image"], 0, "Refer to means consult something for information."],
      ["What does 'in case of an error' mean?", ["If an error happens", "After success", "Before opening the manual", "Without any possibility"], 0, "In case of introduces a possible situation."],
      ["What does 'proceed to the next step' mean?", ["Continue to the following stage", "Return to the beginning", "Stop permanently", "Delete the previous step"], 0, "Proceed means continue."],
      ["What is the purpose of solving problems in English?", ["Use the language to achieve real tasks", "Memorize isolated vocabulary only", "Avoid practical communication", "Translate every instruction"], 0, "Practical tasks connect language with real-world action."]
    ])
  },
  recovery: buildRecovery(48, [
    ["What is troubleshooting?", ["Finding and solving problems", "Writing fiction", "Advertising", "Translating poetry"], 0, "Troubleshooting diagnoses and resolves problems."],
    ["What does 'prior to' mean?", ["Before", "After", "During", "Instead of"], 0, "Prior to means before."],
    ["What does 'compatible' mean?", ["Able to work together", "Unrelated", "Broken", "Expensive"], 0, "Compatible things can function together."],
    ["What does 'simmer' mean?", ["Cook gently", "Freeze", "Fry quickly", "Serve cold"], 0, "Simmer means cook gently in liquid."],
    ["What does 'the issue persists' mean?", ["The problem continues", "The problem ended", "The task is complete", "The device is new"], 0, "Persists means continues."]
  ])
},

49: {
  days: {
    1: buildQuestions(49, 1, [
      ["What does 'cultural reference' mean?", ["A reference to a shared cultural element", "A grammar tense", "A sound recording", "A book chapter"], 0, "Cultural references rely on shared knowledge."],
      ["What is a 'slang' expression?", ["Informal language used by particular groups", "Formal academic terminology", "A punctuation mark", "A scientific formula"], 0, "Slang is informal vocabulary associated with communities or contexts."],
      ["What is a 'pun'?", ["A joke based on word meanings or sounds", "A formal report", "A news article", "A pronunciation exam"], 0, "Puns play with multiple meanings or similar sounds."],
      ["What does 'lyrics' mean?", ["The words of a song", "The melody only", "The album cover", "The music video"], 0, "Lyrics are the words sung in a song."],
      ["Why can a song be difficult to understand?", ["Pronunciation, rhythm, slang and references", "Songs never use grammar", "All songs use the same accent", "Words have no meaning"], 0, "Songs often contain reductions, figurative language and cultural references."]
    ]),
    2: buildQuestions(49, 2, [
      ["What is a metaphor?", ["A comparison made without 'like' or 'as'", "A direct factual statistic", "A grammar tense", "A type of rhyme only"], 0, "Metaphors describe one thing in terms of another."],
      ["What does 'break the ice' mean?", ["Make people feel more comfortable socially", "Destroy frozen water only", "End a friendship", "Stop a conversation"], 0, "Break the ice means reduce social tension."],
      ["What does 'under the weather' mean?", ["Feeling slightly ill", "Being outdoors", "Feeling extremely excited", "Being lost"], 0, "Under the weather is an idiom meaning unwell."],
      ["What is an allusion?", ["An indirect reference to something known", "A direct translation", "A spelling error", "A repeated chorus"], 0, "Allusions refer indirectly to people, works or events."],
      ["What does 'to catch a reference' mean?", ["Recognize its cultural or contextual meaning", "Hear a sound only", "Repeat the words", "Translate the title"], 0, "Catching a reference means recognizing what it points to."]
    ]),
    3: buildQuestions(49, 3, [
      ["What is irony?", ["A contrast between expectation and reality or intended meaning", "A direct synonym", "A spelling rule", "A musical instrument"], 0, "Irony involves a meaningful contrast or discrepancy."],
      ["What is sarcasm often used for?", ["Express criticism or humor indirectly", "Give neutral instructions only", "Describe exact measurements", "Introduce a formal email"], 0, "Sarcasm often uses ironic language to criticize or joke."],
      ["What does 'That went well...' potentially mean after a disaster?", ["It may be sarcastic", "Everything was certainly perfect", "The speaker is giving directions", "The event is fictional"], 0, "Context can reverse the literal meaning and signal sarcasm."],
      ["What does 'to be on the same page' mean?", ["Share the same understanding", "Read the same book literally", "Disagree strongly", "Finish a song"], 0, "The idiom means understand or agree about a situation."],
      ["Why is tone important in humor?", ["It can reveal whether words are serious or ironic", "It changes spelling", "It removes context", "It replaces vocabulary"], 0, "Tone helps identify the speaker's intention."]
    ]),
    4: buildQuestions(49, 4, [
      ["What does 'throwback' often refer to?", ["Something that reminds people of the past", "A future prediction", "A cooking instruction", "A formal warning"], 0, "Throwback refers to a return or reference to an earlier time."],
      ["What is a 'trend'?", ["A popular direction or pattern", "A single grammar mistake", "A private diary", "A type of punctuation"], 0, "A trend is a pattern that becomes popular or widespread."],
      ["What does 'iconic' mean in pop culture?", ["Widely recognized and strongly associated with something", "Completely unknown", "Temporarily broken", "Difficult to pronounce"], 0, "Iconic describes something widely recognized and memorable."],
      ["What is a 'meme'?", ["A cultural idea or joke shared and adapted online", "A formal contract", "A dictionary entry", "A movie subtitle"], 0, "Memes spread through imitation and variation."],
      ["What does 'outdated' mean?", ["No longer current or modern", "Brand new", "Extremely popular", "Very expensive"], 0, "Outdated means old-fashioned or no longer current."]
    ]),
    5: buildQuestions(49, 5, [
      ["What does 'to resonate with someone' mean?", ["Connect with them emotionally or personally", "Make a loud noise only", "Confuse them completely", "Translate their words"], 0, "Resonate means have a meaningful emotional connection."],
      ["What does 'relatable' mean?", ["Easy to identify with", "Impossible to understand", "Very formal", "Completely fictional"], 0, "Relatable describes something people recognize in their own experience."],
      ["What is a 'double meaning'?", ["An expression with two possible interpretations", "A repeated word", "A spelling mistake", "A single definition"], 0, "Double meaning allows two interpretations."],
      ["What does 'to take something literally' mean?", ["Understand the exact words without figurative interpretation", "Recognize a metaphor", "Make a joke", "Ignore the sentence"], 0, "Literal interpretation follows the direct meaning of the words."],
      ["Why analyze a song's context?", ["Understand references and intended meaning", "Change its melody", "Remove its vocabulary", "Avoid cultural information"], 0, "Context helps explain references and figurative language."]
    ]),
    6: buildQuestions(49, 6, [
      ["What should you consider when interpreting humor?", ["Words, context, tone and cultural knowledge", "Words alone in every case", "Only punctuation", "Only the speaker's volume"], 0, "Humor often depends on several contextual clues."],
      ["What does 'a blast from the past' mean?", ["Something that brings back memories", "A future plan", "A new invention", "A formal complaint"], 0, "The expression describes a nostalgic reminder."],
      ["What does 'to go viral' mean?", ["Spread rapidly online", "Disappear from the internet", "Become a printed book", "Lose popularity immediately"], 0, "Going viral means content spreads quickly."],
      ["What is the best way to learn a cultural idiom?", ["Study its meaning and an authentic context", "Translate each word literally", "Memorize spelling only", "Ignore who uses it"], 0, "Context reveals how idioms are actually used."],
      ["What is the goal of analyzing pop culture in English?", ["Understand language, humor and cultural context", "Memorize celebrity names only", "Translate every song word for word", "Avoid informal language"], 0, "Pop culture provides real examples of language and cultural references."]
    ])
  },
  recovery: buildRecovery(49, [
    ["What are lyrics?", ["Words of a song", "Melody only", "Album cover", "Music video"], 0, "Lyrics are the words sung."],
    ["What is a pun?", ["A joke using word meanings or sounds", "A formal email", "A grammar tense", "A news report"], 0, "Puns play with language."],
    ["What does 'under the weather' mean?", ["Feeling ill", "Being outside", "Feeling excited", "Being lost"], 0, "It is an idiom meaning unwell."],
    ["What does 'iconic' mean?", ["Widely recognized and memorable", "Unknown", "Broken", "Outdated"], 0, "Iconic things are strongly recognized."],
    ["What is irony?", ["A meaningful contrast between expectation and reality or meaning", "A synonym", "A spelling rule", "A rhyme"], 0, "Irony depends on a contrast or discrepancy."]
  ])
},

50: {
  days: {
    1: buildQuestions(50, 1, [
      ["What is the main purpose of a week of immersion?", ["Increase daily contact with English", "Avoid all communication", "Memorize a dictionary", "Stop using technology"], 0, "Immersion increases meaningful exposure to the language."],
      ["What is a practical first immersion change?", ["Set one device interface to English", "Delete every application", "Stop using the internet", "Change every password"], 0, "Changing interface language creates regular exposure."],
      ["What does 'default language' mean?", ["The language selected automatically", "A language used only in games", "A language no one understands", "A temporary subtitle"], 0, "Default refers to the preset option."],
      ["What should you do if an app setting becomes confusing?", ["Use context or a reliable guide", "Change random settings", "Delete the account", "Ignore every warning"], 0, "Practical problem-solving helps maintain safe use."],
      ["What is a realistic immersion goal?", ["Use English in several daily activities", "Understand every word immediately", "Never use Portuguese again", "Speak perfectly from day one"], 0, "Consistent exposure is more realistic than demanding instant perfection."]
    ]),
    2: buildQuestions(50, 2, [
      ["What does 'exposure' mean in language learning?", ["Contact with the language", "A grammar mistake", "A translation exercise", "A written exam"], 0, "Exposure means encountering the language through use."],
      ["What is a useful English-language phone activity?", ["Read a short article or interface message", "Change settings randomly", "Ignore notifications", "Memorize every icon"], 0, "Everyday reading creates practical exposure."],
      ["What does 'to get used to' mean?", ["Become familiar with something", "Avoid something forever", "Forget something", "Explain something formally"], 0, "Get used to means become accustomed to."],
      ["'I'm getting used to the new interface.' means...", ["The interface is becoming familiar", "The interface is broken", "The interface is unavailable", "The interface is being deleted"], 0, "Getting used to describes gradual familiarity."],
      ["Why should you keep important safety information understandable?", ["To avoid mistakes when using devices", "To make settings harder", "To ignore warnings", "To prevent learning"], 0, "Understanding critical information matters more than forcing immersion."]
    ]),
    3: buildQuestions(50, 3, [
      ["What does 'to consume content' mean?", ["Watch, read or listen to material", "Delete a document", "Change a password", "Write a device manual"], 0, "Consume content means engage with media or information."],
      ["What is a balanced immersion routine?", ["Mix reading, listening and practical use", "Watch only one video repeatedly", "Avoid all speaking", "Read only dictionaries"], 0, "Different activities develop different language skills."],
      ["What does 'consistent' mean?", ["Regular and steady", "Random", "Impossible", "Unrelated"], 0, "Consistent practice happens regularly."],
      ["What should you do when content is too difficult?", ["Choose a more accessible source and build up", "Quit the entire week", "Assume you learned nothing", "Translate every second"], 0, "Adjusting difficulty keeps learning productive."],
      ["What does 'gradually' mean?", ["Little by little", "All at once", "Never", "By accident"], 0, "Gradually describes slow progress over time."]
    ]),
    4: buildQuestions(50, 4, [
      ["What is an English-language environment?", ["A setting where much of the information is in English", "A room with no books", "A grammar exam", "A translation app only"], 0, "An English environment surrounds you with the language."],
      ["What does 'to navigate a menu' mean?", ["Move through its options", "Delete the whole device", "Translate its name", "Turn off the screen"], 0, "Navigate means move through an interface or system."],
      ["What does 'notification' mean?", ["A message or alert from an app or system", "A book chapter", "A spoken accent", "A cooking instruction"], 0, "Notifications provide updates or alerts."],
      ["What does 'privacy settings' refer to?", ["Options controlling personal information and visibility", "The phone's wallpaper", "The keyboard language only", "A music playlist"], 0, "Privacy settings control how information is shared or used."],
      ["What should you never sacrifice for immersion?", ["Understanding important safety and privacy information", "Daily vocabulary practice", "Listening to podcasts", "Reading articles"], 0, "Language practice should never compromise safety or privacy."]
    ]),
    5: buildQuestions(50, 5, [
      ["What does 'to switch over to English' mean?", ["Change to using English", "Turn off the internet", "Delete a language", "Stop reading"], 0, "Switch over means change from one option to another."],
      ["What is a 'language habit'?", ["A repeated behavior involving language use", "A one-time translation", "A random mistake", "A dictionary definition"], 0, "Habits are repeated actions."],
      ["What does 'to stay immersed' mean?", ["Continue surrounding yourself with the language", "Stop using it", "Study only once", "Avoid all content"], 0, "Stay immersed means maintain regular contact."],
      ["What is a useful way to measure immersion progress?", ["Notice how much you understand in everyday situations", "Count every unknown word", "Measure screen time only", "Avoid reviewing"], 0, "Practical comprehension is a useful indicator."],
      ["What should you do if you need Portuguese for an important task?", ["Use the language that ensures you understand the task", "Refuse to understand it", "Guess the instructions", "Ignore the task"], 0, "Immersion is a learning strategy, not a reason to risk misunderstanding."]
    ]),
    6: buildQuestions(50, 6, [
      ["What is the best result of a seven-day immersion challenge?", ["More familiarity and confidence using English", "Perfect fluency overnight", "Never needing practice again", "Knowing every word"], 0, "A week can build habits and familiarity, not instant perfection."],
      ["What does 'to adapt' mean?", ["Adjust to a new situation", "Refuse every change", "Forget a routine", "Translate literally"], 0, "Adapt means adjust to new conditions."],
      ["What is the best long-term approach after immersion week?", ["Keep useful English habits in daily life", "Stop using English completely", "Repeat only difficult tests", "Avoid native content"], 0, "Sustainable habits preserve progress."],
      ["What does 'to make progress' mean?", ["Improve or move forward", "Remain exactly the same", "Lose all knowledge", "Avoid practice"], 0, "Make progress means advance or improve."],
      ["What is the main lesson of immersion?", ["Use English as part of real activities", "Study only grammar tables", "Avoid communication", "Translate every thought"], 0, "Immersion connects English with everyday life."]
    ])
  },
  recovery: buildRecovery(50, [
    ["What is exposure?", ["Contact with a language", "A grammar mistake", "A password", "A book cover"], 0, "Exposure means encountering the language."],
    ["What does 'get used to' mean?", ["Become familiar with", "Forget", "Avoid", "Delete"], 0, "It means become accustomed to something."],
    ["What does 'consistent' mean?", ["Regular and steady", "Random", "Impossible", "Unrelated"], 0, "Consistent practice is regular."],
    ["What does 'navigate a menu' mean?", ["Move through its options", "Delete it", "Turn off the phone", "Translate a book"], 0, "Navigate means move through a system."],
    ["What should immersion never compromise?", ["Safety and understanding", "Vocabulary", "Listening", "Reading"], 0, "Learning should not create avoidable risks."]
  ])
},

51: {
  days: {
    1: buildQuestions(51, 1, [
      ["Choose the correct sentence.", ["She has lived here for five years.", "She have lived here since five years.", "She living here five years.", "She live here for five years."], 0, "Present Perfect with for describes a duration continuing to the present."],
      ["Choose the correct past perfect sentence.", ["They had left before I arrived.", "They have left before I arrive yesterday.", "They had leave before I arrived.", "They leaving before I arrived."], 0, "Past Perfect describes an action completed before another past event."],
      ["Choose the correct passive sentence.", ["The report was written yesterday.", "The report wrote yesterday.", "The report is write yesterday.", "The report writing yesterday."], 0, "Passive voice uses be plus the past participle."],
      ["Choose the correct conditional.", ["If I had more time, I would travel.", "If I have more time, I would traveled.", "If I had more time, I will traveled.", "If I more time, travel."], 0, "Second conditional uses past simple plus would and the base verb."],
      ["Choose the correct relative pronoun.", ["The woman who called you is my teacher.", "The woman where called you is my teacher.", "The woman whose called you is my teacher.", "The woman which called you is my teacher."], 0, "Who refers to a person acting as the subject."]
    ]),
    2: buildQuestions(51, 2, [
      ["Choose the natural reported speech form: He said, 'I am tired.'", ["He said that he was tired.", "He said that I am tired.", "He said he tired.", "He said that he is tiring."], 0, "Reported speech commonly shifts present to past when the reporting verb is past."],
      ["Choose the correct Present Perfect question.", ["Have you ever visited Canada?", "Did you ever visited Canada?", "Have you ever visit Canada?", "You have ever visited Canada?"], 0, "Have plus subject plus past participle forms the question."],
      ["Choose the correct phrasal verb: I need to ___ what happened.", ["find out", "turn off", "give up", "drop off"], 0, "Find out means discover information."],
      ["Choose the correct modal: You ___ wear a helmet; it's required.", ["must", "might", "could", "would"], 0, "Must expresses strong obligation."],
      ["Choose the correct comparison.", ["This is the most useful tool.", "This is more useful tool.", "This is the usefulest tool.", "This is most usefuller tool."], 0, "Most useful is the correct superlative form."]
    ]),
    3: buildQuestions(51, 3, [
      ["Choose the correct Present Perfect Continuous sentence.", ["I've been studying since morning.", "I am study since morning.", "I have studying since morning.", "I studied been since morning."], 0, "Have been plus -ing describes an ongoing activity."],
      ["Choose the correct first conditional.", ["If it rains, we'll stay home.", "If it will rain, we stay home.", "If it rained, we will stayed home.", "If rain, we stayed home."], 0, "First conditional uses present simple in the if-clause and will in the result."],
      ["Choose the correct connector: I was tired, ___ I finished the work.", ["but", "because", "so", "or"], 0, "But introduces contrast."],
      ["Choose the correct gerund.", ["I enjoy reading.", "I enjoy to read.", "I enjoying read.", "I enjoy readed."], 0, "Enjoy is followed by a gerund."],
      ["Choose the correct infinitive.", ["She decided to leave.", "She decided leaving.", "She decide to leaving.", "She deciding leave."], 0, "Decide is followed by a to-infinitive."]
    ]),
    4: buildQuestions(51, 4, [
      ["Choose the natural informal expression.", ["I'm gonna call you later.", "I'm go to calling you later.", "I gonna called you later.", "I am going calling later."], 0, "Gonna is an informal spoken form of going to."],
      ["Choose the polite disagreement.", ["I see your point, but I disagree.", "You're wrong and that's it.", "Stop talking now.", "Your idea is stupid."], 0, "The sentence acknowledges the other view before disagreeing."],
      ["Choose the professional email opening.", ["Dear Ms. Taylor,", "Hey you!!!", "Yo, Taylor!", "What's up, stranger?"], 0, "Dear is a standard formal email greeting."],
      ["Choose the correct travel question.", ["Where can I collect my luggage?", "Where I can collecting my luggage?", "Where can collect I luggage?", "Where luggage I can?"], 0, "Modal questions use can plus subject plus base verb."],
      ["Choose the correct news phrase.", ["According to the report, prices increased.", "According the report, prices increase yesterday.", "According to report prices increasing.", "The report according prices."], 0, "According to introduces the source of information."]
    ]),
    5: buildQuestions(51, 5, [
      ["What is the best way to understand an unfamiliar spoken phrase?", ["Use context, tone and surrounding ideas", "Translate each sound separately", "Ignore the speaker", "Assume it is incorrect"], 0, "Context supports real-time listening comprehension."],
      ["What is the best way to improve a written essay?", ["Revise structure, clarity and cohesion", "Add random long words", "Remove all connectors", "Repeat the introduction"], 0, "Revision improves the logic and flow of writing."],
      ["What does 'to get the hang of it' mean?", ["Become able to do something through practice", "Forget how to do it", "Avoid trying", "Explain it formally"], 0, "The idiom means gradually learn how to do something."],
      ["Choose the correct sentence.", ["By the time we arrived, the movie had started.", "By the time we arrived, the movie has start.", "By the time we arrive, the movie had starting.", "By time arrived, movie start."], 0, "Past Perfect shows the movie started before our arrival."],
      ["What is the best response when you do not know an answer in conversation?", ["Let me think about that for a moment.", "I refuse to speak.", "The question is impossible.", "I know everything."], 0, "This phrase gives you time to organize your thoughts."]
    ]),
    6: buildQuestions(51, 6, [
      ["Which skill combines listening, vocabulary and context?", ["Understanding a native conversation", "Copying a word list", "Memorizing punctuation", "Reading isolated letters"], 0, "Listening comprehension integrates several language skills."],
      ["What should a final review identify?", ["Strengths and areas needing more practice", "Only the highest score", "Only spelling mistakes", "Only difficult words"], 0, "A useful review identifies both strengths and gaps."],
      ["What is the best way to assess speaking fluency?", ["Explain ideas and respond to follow-up questions", "Complete a spelling test", "Read a word list silently", "Translate a paragraph"], 0, "Spontaneous interaction reveals practical speaking ability."],
      ["What does 'to refine a skill' mean?", ["Improve it through focused practice", "Forget it", "Replace it randomly", "Avoid using it"], 0, "Refine means make a skill more precise or effective."],
      ["What is the purpose of this review week?", ["Prepare to use English independently", "Learn only one new tense", "Repeat the first lesson exactly", "Avoid practical tasks"], 0, "The review integrates skills from the entire course."]
    ])
  },
  recovery: buildRecovery(51, [
    ["Choose the correct sentence.", ["She has worked here for years.", "She have worked here years.", "She working here for years.", "She work here years."], 0, "Present Perfect connects past experience with the present."],
    ["Choose the correct passive form.", ["The window was broken.", "The window broke by someone.", "The window was break.", "The window breaking."], 0, "Was plus past participle forms the passive."],
    ["Choose the correct conditional.", ["If I were you, I'd ask.", "If I am you, I'd asked.", "If I was you, I will asked.", "If I you, ask."], 0, "Second conditional gives hypothetical advice."],
    ["What does 'find out' mean?", ["Discover", "Switch off", "Give up", "Drop off"], 0, "Find out means discover information."],
    ["What is the best speaking assessment?", ["Answer questions and explain ideas spontaneously", "Copy a paragraph", "Read silently", "Memorize a word list"], 0, "Spontaneous speaking tests practical communication."]
  ])
},

52: {
  days: {
    1: buildQuestions(52, 1, [
      ["What is the main goal of the final challenge?", ["Use English independently in demanding situations", "Translate every word into Portuguese", "Memorize a speech", "Complete a beginner vocabulary list"], 0, "The final challenge integrates independent comprehension and communication."],
      ["What should you do before watching an unfamiliar technical talk?", ["Identify the topic and listen for its central argument", "Read a complete translation", "Memorize every technical term", "Ignore the speaker"], 0, "Knowing the topic helps organize what you hear."],
      ["What does 'key takeaway' mean?", ["The most important lesson or conclusion", "A minor detail", "The opening greeting", "A speaker's accent"], 0, "Key takeaway is the central point to remember."],
      ["What does 'to substantiate a claim' mean?", ["Support it with evidence", "Ignore it", "Repeat it loudly", "Change its wording"], 0, "Substantiate means support a claim with evidence."],
      ["What should you do if you miss a detail in a lecture?", ["Continue following the main argument", "Stop understanding the whole talk", "Assume the speaker is wrong", "Translate every previous sentence"], 0, "Following the main argument prevents one missed detail from disrupting comprehension."]
    ]),
    2: buildQuestions(52, 2, [
      ["What is a complex article likely to contain?", ["Specialized vocabulary and developed arguments", "Only greetings", "No connectors", "Only basic questions"], 0, "Complex articles often develop ideas with precise language and evidence."],
      ["What does 'to address an issue' mean?", ["Deal with or discuss it", "Avoid it forever", "Change its spelling", "Forget it"], 0, "Address means deal with a topic or problem."],
      ["What does 'the findings indicate' mean?", ["The results suggest", "The results disappeared", "The author disagrees", "The study was never done"], 0, "Findings are results; indicate means suggest or show."],
      ["What is a 'limitation' in a research article?", ["A factor restricting the study", "The main title", "A personal greeting", "A grammar tense"], 0, "Limitations describe constraints affecting a study."],
      ["What should a good article summary include?", ["Central claim, supporting evidence and conclusion", "Every sentence copied", "Only the title", "Only unfamiliar vocabulary"], 0, "A summary captures the argument and its support."]
    ]),
    3: buildQuestions(52, 3, [
      ["What is an interview question designed to test?", ["Your ability to understand and respond appropriately", "Your ability to repeat a script only", "Your spelling speed", "Your knowledge of subtitles"], 0, "An interview tests communication and relevant responses."],
      ["What does 'Could you walk me through your reasoning?' ask for?", ["An explanation of how you reached your conclusion", "A summary of your weekend", "A translation of the question", "A yes-or-no answer only"], 0, "Walk me through asks for a step-by-step explanation."],
      ["What does 'What would you do if...?' usually invite?", ["A hypothetical response", "A past routine", "A spelling correction", "A direct quotation"], 0, "The question invites a response to an imagined situation."],
      ["What is a strong interview answer?", ["Clear, relevant and supported with an example", "Very long and unrelated", "Only one memorized word", "A repeated question"], 0, "Relevant examples make answers clearer and more convincing."],
      ["What should you do when a question is unexpected?", ["Pause briefly, organize your thoughts and respond", "Give up immediately", "Repeat the same phrase", "Change the subject without explanation"], 0, "A short pause helps produce a relevant response."]
    ]),
    4: buildQuestions(52, 4, [
      ["What does 'to think on your feet' mean?", ["Respond effectively in the moment", "Stand while studying", "Memorize a script", "Avoid making decisions"], 0, "The idiom means react quickly and intelligently."],
      ["What does 'to weigh the pros and cons' mean?", ["Consider advantages and disadvantages", "Measure an object", "Avoid a decision", "Repeat an opinion"], 0, "The expression means evaluate both sides."],
      ["What does 'from my perspective' introduce?", ["A personal viewpoint", "A confirmed measurement", "A direct order", "A quotation"], 0, "It introduces the speaker's point of view."],
      ["What is a good way to defend an argument?", ["Present reasons and relevant evidence", "Repeat the claim without support", "Attack the other person", "Avoid questions"], 0, "Evidence and reasoning make an argument stronger."],
      ["What does 'to acknowledge a limitation' mean?", ["Recognize a weakness or constraint", "Hide a problem", "Reject all evidence", "Change the subject"], 0, "Acknowledge means recognize or admit something."]
    ]),
    5: buildQuestions(52, 5, [
      ["What does 'to elaborate' mean in an interview?", ["Develop an answer with more detail", "End the interview", "Avoid the question", "Repeat the title"], 0, "Elaborate means explain further."],
      ["What is a useful clarification phrase?", ["Could you clarify what you mean by that?", "Your question makes no sense.", "I will not answer.", "That's all the words."], 0, "This politely requests a clearer question."],
      ["What does 'to put forward a proposal' mean?", ["Present an idea for consideration", "Reject every suggestion", "Finish a meeting", "Repeat an old answer"], 0, "Put forward means present an idea or proposal."],
      ["What does 'in light of the evidence' mean?", ["Considering the available evidence", "Ignoring the evidence", "Before any information exists", "Without a reason"], 0, "The phrase means taking the evidence into account."],
      ["What is the best way to handle a difficult follow-up question?", ["Connect it to your main point and explain your reasoning", "Give an unrelated answer", "Stop speaking", "Repeat the previous answer exactly"], 0, "Connecting the response to your argument keeps it coherent."]
    ]),
    6: buildQuestions(52, 6, [
      ["What does successful independent English use involve?", ["Understanding, responding and expressing ideas in context", "Knowing every word in the language", "Never making mistakes", "Using only formal expressions"], 0, "Independent use means communicating effectively across real situations."],
      ["What is the purpose of the final assessment?", ["Measure practical skills developed across the course", "Test only spelling", "Repeat one beginner lesson", "Evaluate typing speed"], 0, "The assessment checks integrated language ability."],
      ["What should you do after completing the course?", ["Continue using English and identify new goals", "Stop practicing completely", "Forget previous material", "Avoid unfamiliar content"], 0, "Continued use helps maintain and develop fluency."],
      ["What does 'to communicate effectively' mean?", ["Make your meaning clear and respond appropriately", "Use the longest words possible", "Speak without pauses", "Avoid listening"], 0, "Effective communication prioritizes clarity and interaction."],
      ["What is the most important sign of progress?", ["Using English to accomplish real tasks independently", "Memorizing a large list without using it", "Never asking for clarification", "Avoiding difficult conversations"], 0, "Practical independence is the central goal of this course."]
    ])
  },
  recovery: buildRecovery(52, [
    ["What does 'key takeaway' mean?", ["Main lesson or conclusion", "Minor detail", "Greeting", "Accent"], 0, "It is the most important point to remember."],
    ["What does 'substantiate' mean?", ["Support with evidence", "Ignore", "Repeat loudly", "Change spelling"], 0, "Substantiate means provide evidence for a claim."],
    ["What does 'walk me through your reasoning' ask?", ["Explain your thinking step by step", "Tell a joke", "Translate a title", "Give only yes or no"], 0, "It requests a step-by-step explanation."],
    ["What does 'think on your feet' mean?", ["Respond effectively in the moment", "Stand while reading", "Memorize a speech", "Avoid decisions"], 0, "It means react quickly and intelligently."],
    ["What is the goal of the final assessment?", ["Measure practical independent English use", "Test spelling only", "Repeat beginner vocabulary", "Measure typing speed"], 0, "The final assessment evaluates integrated practical skills."]
  ])
}


};
