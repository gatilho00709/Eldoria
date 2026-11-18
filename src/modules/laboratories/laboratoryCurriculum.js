
// laboratoryCurriculum.js

// =====================================================
// ELDORIA — LABORATÓRIO
// CURRÍCULOS DE MATÉRIAS E ENGENHARIA
// =====================================================

// Atalho para construir as aulas.
function lesson(title, explanation, examples = [], keyPoints = []) {
  return {
    title,
    explanation,
    examples,
    keyPoints
  };
}


// =====================================================
// LABORATÓRIO DE MATÉRIAS
// SEMANAS 1 A 10
// =====================================================

export const MATTERS_WEEKS = {

  // ---------------------------------------------------
  // SEMANA 1 — MATEMÁTICA 1
  // ---------------------------------------------------

  1: {
    title: "Matemática 1 — Fundamentos numéricos",
    goal: "Compreender as operações fundamentais, os conjuntos numéricos, frações, razões, proporções e regra de três.",

    days: [
      lesson(
        "Operações fundamentais",
        "As quatro operações fundamentais são adição, subtração, multiplicação e divisão. Elas permitem resolver cálculos e problemas cotidianos. Em expressões com várias operações, devemos respeitar a ordem de resolução: parênteses, potências, multiplicações e divisões, adições e subtrações.",
        ["8 + 4 = 12", "15 - 7 = 8", "6 × 3 = 18", "20 ÷ 5 = 4"],
        ["Conhecer as quatro operações.", "Respeitar a ordem das operações.", "Interpretar expressões numéricas."]
      ),
      lesson(
        "Números naturais e inteiros",
        "Os números naturais são utilizados principalmente para contagens. Os números inteiros incluem os naturais, o zero e os números negativos. Na reta numérica, os valores aumentam para a direita e diminuem para a esquerda.",
        ["Naturais: 0, 1, 2, 3...", "Inteiros: ..., -3, -2, -1, 0, 1, 2..."],
        ["Reconhecer números naturais e inteiros.", "Comparar números negativos e positivos.", "Localizar números na reta numérica."]
      ),
      lesson(
        "Números racionais e reais",
        "Os números racionais podem ser representados por uma fração de inteiros com denominador diferente de zero. Os números reais incluem os racionais e os irracionais, como certas raízes e o número π.",
        ["1/2 = 0,5", "0,75 = 3/4", "√2 é irracional", "π é irracional"],
        ["Diferenciar racionais e irracionais.", "Reconhecer representações decimais.", "Compreender os conjuntos numéricos."]
      ),
      lesson(
        "Frações e operações",
        "Uma fração representa partes de um todo ou uma divisão. Para somar frações com denominadores diferentes, é necessário encontrar um denominador comum. Na multiplicação, multiplicamos numeradores e denominadores.",
        ["1/2 + 1/4 = 3/4", "2/3 × 3/4 = 1/2", "3/5 ÷ 2/5 = 3/2"],
        ["Identificar numerador e denominador.", "Somar e subtrair frações.", "Multiplicar e dividir frações."]
      ),
      lesson(
        "Razão e comparação",
        "Razão é uma comparação entre duas grandezas por meio de uma divisão. Ela pode ser apresentada como fração, divisão ou comparação entre valores.",
        ["A razão entre 10 e 5 é 10/5 = 2.", "Uma turma com 12 meninos e 18 meninas tem razão 12/18 = 2/3."],
        ["Compreender o conceito de razão.", "Simplificar razões.", "Interpretar comparações."]
      ),
      lesson(
        "Proporção e regra de três",
        "Uma proporção é uma igualdade entre duas razões. A regra de três permite encontrar um valor desconhecido quando existe uma relação proporcional entre grandezas.",
        ["2/4 = 3/6", "Se 2 cadernos custam R$ 10, 4 cadernos custam R$ 20, mantendo o mesmo preço unitário."],
        ["Reconhecer proporções.", "Identificar grandezas proporcionais.", "Resolver problemas simples de regra de três."]
      )
    ]
  },

  // ---------------------------------------------------
  // SEMANA 2 — MATEMÁTICA 1
  // ---------------------------------------------------

  2: {
    title: "Matemática 1 — Porcentagem e operações avançadas",
    goal: "Trabalhar porcentagem, unidades, notação científica, potenciação e radiciação.",

    days: [
      lesson(
        "Introdução à porcentagem",
        "Porcentagem representa uma parte de cem. O símbolo % indica uma razão cujo denominador é 100. Ela pode ser convertida em fração ou número decimal.",
        ["25% = 25/100 = 0,25", "50% de 200 = 100"],
        ["Entender o significado de porcentagem.", "Converter porcentagens em decimais.", "Calcular porcentagens simples."]
      ),
      lesson(
        "Aumentos e descontos percentuais",
        "A porcentagem permite calcular aumentos e descontos. Para encontrar o valor final, podemos calcular a parte percentual e somá-la ou subtraí-la do valor inicial.",
        ["Desconto de 10% em R$ 100: R$ 90.", "Aumento de 20% em R$ 50: R$ 60."],
        ["Calcular descontos.", "Calcular aumentos.", "Interpretar preços e variações."]
      ),
      lesson(
        "Unidades de medida",
        "As unidades de medida permitem expressar grandezas como comprimento, massa, tempo e volume. No sistema métrico, cada mudança de unidade utiliza fatores de conversão.",
        ["1 km = 1.000 m", "1 m = 100 cm", "1 kg = 1.000 g", "1 hora = 60 minutos"],
        ["Reconhecer unidades.", "Converter medidas.", "Utilizar unidades adequadas."]
      ),
      lesson(
        "Potenciação",
        "Potenciação representa uma multiplicação de fatores iguais. A base indica o número que será multiplicado e o expoente indica quantas vezes isso ocorre.",
        ["2³ = 2 × 2 × 2 = 8", "5² = 25", "10⁰ = 1"],
        ["Identificar base e expoente.", "Calcular potências.", "Conhecer propriedades básicas."]
      ),
      lesson(
        "Radiciação",
        "A radiciação é a operação inversa da potenciação. A raiz quadrada procura um número que, multiplicado por ele mesmo, produz o radicando.",
        ["√25 = 5", "√81 = 9", "∛27 = 3"],
        ["Reconhecer radicando e índice.", "Calcular raízes exatas.", "Relacionar raízes e potências."]
      ),
      lesson(
        "Notação científica",
        "A notação científica facilita a representação de números muito grandes ou muito pequenos. Ela utiliza um número entre 1 e 10 multiplicado por uma potência de dez.",
        ["300.000 = 3 × 10⁵", "0,0004 = 4 × 10⁻⁴"],
        ["Converter números para notação científica.", "Interpretar expoentes positivos e negativos.", "Compreender sua utilidade científica."]
      )
    ]
  },

  // ---------------------------------------------------
  // SEMANA 3 — MATEMÁTICA 1
  // ---------------------------------------------------

  3: {
    title: "Matemática 1 — Introdução à álgebra",
    goal: "Compreender expressões algébricas, produtos notáveis, fatoração e polinômios.",

    days: [
      lesson(
        "Introdução às expressões algébricas",
        "Uma expressão algébrica utiliza letras para representar números desconhecidos ou variáveis. As letras permitem escrever relações matemáticas de maneira geral.",
        ["x + 5", "2a - 3", "3x + 2y"],
        ["Identificar variáveis.", "Reconhecer coeficientes.", "Interpretar expressões."]
      ),
      lesson(
        "Monômios e termos semelhantes",
        "Monômios são expressões formadas por um número e variáveis elevadas a expoentes inteiros não negativos. Termos semelhantes possuem a mesma parte literal e podem ser somados ou subtraídos.",
        ["3x + 5x = 8x", "4a² - a² = 3a²"],
        ["Reconhecer monômios.", "Identificar termos semelhantes.", "Simplificar expressões."]
      ),
      lesson(
        "Polinômios",
        "Polinômios são expressões formadas pela soma ou subtração de monômios. Seu grau é determinado pelo maior expoente dos termos, considerando uma variável.",
        ["x² + 3x + 2", "2x³ - 4x + 1"],
        ["Identificar polinômios.", "Determinar o grau.", "Realizar operações básicas."]
      ),
      lesson(
        "Multiplicação de expressões algébricas",
        "A propriedade distributiva permite multiplicar expressões algébricas. Cada termo de uma expressão deve ser multiplicado pelos termos da outra.",
        ["2(x + 3) = 2x + 6", "(x + 2)(x + 3) = x² + 5x + 6"],
        ["Aplicar a distributiva.", "Multiplicar monômios e polinômios.", "Organizar os resultados."]
      ),
      lesson(
        "Produtos notáveis",
        "Produtos notáveis são multiplicações algébricas que seguem padrões conhecidos. Reconhecer esses padrões facilita a resolução de expressões.",
        ["(a + b)² = a² + 2ab + b²", "(a - b)² = a² - 2ab + b²"],
        ["Reconhecer quadrado da soma.", "Reconhecer quadrado da diferença.", "Aplicar os padrões."]
      ),
      lesson(
        "Introdução à fatoração",
        "Fatorar significa transformar uma expressão em um produto de fatores. É possível colocar um fator comum em evidência ou reconhecer padrões de produtos notáveis.",
        ["3x + 6 = 3(x + 2)", "x² - 9 = (x - 3)(x + 3)"],
        ["Identificar fator comum.", "Fatorar expressões simples.", "Relacionar fatoração e multiplicação."]
      )
    ]
  },

  // ---------------------------------------------------
  // SEMANA 4 — MATEMÁTICA 1
  // ---------------------------------------------------

  4: {
    title: "Matemática 1 — Equações e sistemas",
    goal: "Resolver equações de primeiro grau, inequações, intervalos e sistemas.",

    days: [
      lesson(
        "Equações de primeiro grau",
        "Uma equação é uma igualdade que contém uma ou mais incógnitas. Resolver uma equação significa encontrar o valor que torna a igualdade verdadeira.",
        ["x + 5 = 12 → x = 7", "2x = 18 → x = 9"],
        ["Identificar incógnitas.", "Isolar a variável.", "Verificar soluções."]
      ),
      lesson(
        "Equações com parênteses e frações",
        "Equações podem conter parênteses e frações. A propriedade distributiva e a multiplicação pelo mínimo múltiplo comum ajudam a simplificar essas expressões.",
        ["2(x + 3) = 14", "x/3 + 2 = 5"],
        ["Aplicar a distributiva.", "Eliminar denominadores quando necessário.", "Organizar os termos."]
      ),
      lesson(
        "Problemas com equações",
        "Muitos problemas podem ser traduzidos para equações. O primeiro passo é identificar a incógnita e representar matematicamente as informações do enunciado.",
        ["O dobro de um número mais 4 é 18: 2x + 4 = 18.", "A soma de dois números consecutivos é 21: x + (x + 1) = 21."],
        ["Interpretar enunciados.", "Montar equações.", "Conferir a resposta no problema."]
      ),
      lesson(
        "Inequações",
        "Inequações expressam desigualdades. Ao multiplicar ou dividir os dois lados por um número negativo, o sentido do sinal de desigualdade deve ser invertido.",
        ["x + 2 > 5 → x > 3", "-2x < 8 → x > -4"],
        ["Reconhecer sinais de desigualdade.", "Resolver inequações.", "Observar a inversão do sinal."]
      ),
      lesson(
        "Intervalos reais",
        "Intervalos representam conjuntos de números reais. Podem incluir ou excluir suas extremidades e são frequentemente representados por símbolos e pela reta numérica.",
        ["[2, 5] inclui 2 e 5.", "(2, 5) exclui 2 e 5.", "[2, 5) inclui 2, mas exclui 5."],
        ["Interpretar intervalos.", "Diferenciar extremos abertos e fechados.", "Representar conjuntos na reta."]
      ),
      lesson(
        "Sistemas de equações",
        "Um sistema reúne duas ou mais equações que precisam ser verdadeiras simultaneamente. Os métodos da substituição e da adição ajudam a encontrar suas soluções.",
        ["x + y = 10", "x - y = 2", "Solução: x = 6 e y = 4."],
        ["Resolver sistemas simples.", "Utilizar substituição.", "Utilizar o método da adição."]
      )
    ]
  },

  // ---------------------------------------------------
  // SEMANA 5 — MATEMÁTICA 1
  // ---------------------------------------------------

  5: {
    title: "Matemática 1 — Equações de segundo grau",
    goal: "Compreender equações quadráticas, discriminante, raízes e relações entre raízes e coeficientes.",

    days: [
      lesson(
        "Introdução às equações quadráticas",
        "Uma equação de segundo grau possui a forma ax² + bx + c = 0, com a diferente de zero. O maior expoente da incógnita é dois.",
        ["x² - 5x + 6 = 0", "2x² + 3x - 2 = 0"],
        ["Reconhecer equações quadráticas.", "Identificar os coeficientes a, b e c.", "Diferenciar primeiro e segundo grau."]
      ),
      lesson(
        "Discriminante",
        "O discriminante, representado pela letra grega delta, permite analisar a quantidade de raízes reais de uma equação quadrática.",
        ["Δ = b² - 4ac", "Δ positivo: duas raízes reais distintas.", "Δ zero: duas raízes reais iguais.", "Δ negativo: não há raízes reais."],
        ["Calcular o delta.", "Interpretar seu sinal.", "Relacionar delta e raízes."]
      ),
      lesson(
        "Fórmula de Bhaskara",
        "A fórmula de Bhaskara permite encontrar as raízes reais de uma equação de segundo grau a partir de seus coeficientes e do discriminante.",
        ["x = (-b ± √Δ) / 2a", "x² - 5x + 6 = 0 possui raízes 2 e 3."],
        ["Aplicar a fórmula.", "Substituir corretamente os coeficientes.", "Encontrar as soluções."]
      ),
      lesson(
        "Soma e produto das raízes",
        "As raízes de uma equação quadrática possuem relações com seus coeficientes. Essas relações permitem resolver alguns problemas sem utilizar diretamente Bhaskara.",
        ["Soma: -b/a.", "Produto: c/a.", "Em x² - 5x + 6, a soma é 5 e o produto é 6."],
        ["Calcular soma das raízes.", "Calcular produto das raízes.", "Relacionar raízes e coeficientes."]
      ),
      lesson(
        "Equações incompletas",
        "Equações de segundo grau podem não apresentar o termo linear ou o termo independente. Algumas podem ser resolvidas isolando a incógnita e extraindo raízes.",
        ["x² - 9 = 0 → x = ±3", "2x² + 6x = 0 → 2x(x + 3) = 0"],
        ["Reconhecer equações incompletas.", "Utilizar fatoração.", "Resolver casos simples."]
      ),
      lesson(
        "Problemas com equações quadráticas",
        "Equações de segundo grau aparecem em situações envolvendo áreas, dimensões, trajetórias e relações entre grandezas. É necessário transformar o enunciado em uma expressão quadrática.",
        ["Um retângulo com lados x e x + 2 possui área x(x + 2).", "A área de um quadrado de lado x é x²."],
        ["Modelar problemas.", "Interpretar raízes no contexto.", "Verificar se as soluções fazem sentido."]
      )
    ]
  },

  // ---------------------------------------------------
  // SEMANA 6 — MATEMÁTICA 1
  // ---------------------------------------------------

  6: {
    title: "Matemática 1 — Introdução às funções",
    goal: "Compreender o conceito de função, domínio, contradomínio, imagem, gráficos e função afim.",

    days: [
      lesson(
        "O conceito de função",
        "Uma função relaciona elementos de dois conjuntos, associando cada elemento do domínio a exatamente um elemento do contradomínio.",
        ["f(x) = x + 2", "Para x = 3, f(3) = 5."],
        ["Compreender relações entre conjuntos.", "Identificar entradas e saídas.", "Reconhecer funções."]
      ),
      lesson(
        "Domínio, contradomínio e imagem",
        "Domínio é o conjunto de entradas permitidas. Contradomínio é o conjunto de possíveis saídas declarado na função. Imagem é o conjunto dos valores que realmente são obtidos.",
        ["f(x) = x², com domínio {-2, -1, 0, 1, 2}, possui imagem {0, 1, 4}."],
        ["Identificar domínio.", "Diferenciar contradomínio e imagem.", "Calcular valores da função."]
      ),
      lesson(
        "Lei de formação",
        "A lei de formação descreve a regra utilizada para transformar uma entrada em uma saída. Ela pode ser representada por uma expressão algébrica.",
        ["f(x) = 2x + 1", "f(4) = 2 × 4 + 1 = 9"],
        ["Interpretar a lei de formação.", "Substituir valores.", "Calcular imagens."]
      ),
      lesson(
        "Plano cartesiano e gráficos",
        "O plano cartesiano possui dois eixos perpendiculares: x, horizontal, e y, vertical. Cada ponto é identificado por um par ordenado.",
        ["O ponto (2, 3) possui x = 2 e y = 3.", "O gráfico de uma função representa visualmente seus pares ordenados."],
        ["Identificar os eixos.", "Localizar pontos.", "Relacionar tabelas e gráficos."]
      ),
      lesson(
        "Função afim",
        "A função afim possui a forma f(x) = ax + b. O coeficiente a determina a inclinação da reta e b indica o ponto em que ela intercepta o eixo vertical.",
        ["f(x) = 2x + 3", "f(x) = -x + 4"],
        ["Reconhecer a forma da função.", "Interpretar coeficientes.", "Calcular valores."]
      ),
      lesson(
        "Gráfico da função afim",
        "O gráfico de uma função afim é uma reta. Duas coordenadas distintas permitem determinar uma reta, e o sinal do coeficiente angular indica se ela cresce ou decresce.",
        ["f(x) = 2x + 1 é crescente.", "f(x) = -3x + 2 é decrescente."],
        ["Construir gráficos simples.", "Identificar crescimento e decrescimento.", "Encontrar a raiz da função."]
      )
    ]
  },

  // ---------------------------------------------------
  // SEMANA 7 — MATEMÁTICA 1
  // ---------------------------------------------------

  7: {
    title: "Matemática 1 — Função quadrática",
    goal: "Estudar parábolas, vértices, raízes e aplicações da função quadrática.",

    days: [
      lesson(
        "Introdução à função quadrática",
        "A função quadrática possui a forma f(x) = ax² + bx + c, com a diferente de zero. Seu gráfico é uma parábola.",
        ["f(x) = x² - 4x + 3", "f(x) = -2x² + 5x"],
        ["Reconhecer funções quadráticas.", "Identificar coeficientes.", "Relacionar função e parábola."]
      ),
      lesson(
        "Concavidade da parábola",
        "O sinal do coeficiente a determina a concavidade da parábola. Quando a é positivo, ela fica voltada para cima. Quando a é negativo, fica voltada para baixo.",
        ["a = 2: concavidade para cima.", "a = -1: concavidade para baixo."],
        ["Identificar o sinal de a.", "Interpretar a concavidade.", "Relacionar concavidade e comportamento."]
      ),
      lesson(
        "Raízes da função quadrática",
        "As raízes são os valores de x para os quais a função é igual a zero. Graficamente, representam os pontos em que a parábola cruza ou toca o eixo horizontal.",
        ["x² - 5x + 6 = 0 possui raízes 2 e 3."],
        ["Calcular raízes.", "Relacionar raízes e eixo x.", "Interpretar o discriminante."]
      ),
      lesson(
        "Vértice da parábola",
        "O vértice é o ponto de máximo ou mínimo da parábola. Suas coordenadas podem ser calculadas utilizando os coeficientes da função.",
        ["xv = -b/2a", "yv = -Δ/4a"],
        ["Calcular xv.", "Calcular yv.", "Identificar máximo e mínimo."]
      ),
      lesson(
        "Construção e interpretação de gráficos",
        "Para construir uma parábola, podemos identificar sua concavidade, raízes, vértice e interceptação no eixo vertical.",
        ["f(x) = x² - 4 possui raízes -2 e 2 e vértice (0, -4)."],
        ["Organizar pontos importantes.", "Esboçar parábolas.", "Interpretar gráficos."]
      ),
      lesson(
        "Aplicações da função quadrática",
        "Funções quadráticas modelam situações nas quais uma grandeza varia de maneira quadrática, como determinadas trajetórias e problemas de área.",
        ["A altura de um objeto pode ser modelada por h(t) = -5t² + 20t + 1 em um modelo simplificado."],
        ["Traduzir problemas em funções.", "Interpretar o vértice no contexto.", "Analisar resultados."]
      )
    ]
  },

  // ---------------------------------------------------
  // SEMANA 8 — MATEMÁTICA 1
  // ---------------------------------------------------

  8: {
    title: "Matemática 1 — Módulo e transformações",
    goal: "Estudar módulo, função modular, composição e transformações básicas de gráficos.",

    days: [
      lesson(
        "Valor absoluto ou módulo",
        "O módulo de um número representa sua distância até o zero na reta numérica. Por isso, seu resultado nunca é negativo.",
        ["|5| = 5", "|-5| = 5", "|0| = 0"],
        ["Compreender distância até zero.", "Calcular módulos.", "Reconhecer resultados não negativos."]
      ),
      lesson(
        "Equações modulares",
        "Equações modulares possuem expressões com valor absoluto. Para resolver, é necessário considerar os casos em que a expressão interna é positiva ou negativa.",
        ["|x| = 4 → x = 4 ou x = -4", "|x - 2| = 3 → x = 5 ou x = -1"],
        ["Interpretar equações modulares.", "Separar casos.", "Verificar soluções."]
      ),
      lesson(
        "Função modular",
        "A função modular utiliza o valor absoluto de uma expressão. Seu gráfico pode apresentar mudanças de direção, formando um aspecto semelhante à letra V em casos simples.",
        ["f(x) = |x|", "f(x) = |x - 2|"],
        ["Reconhecer funções modulares.", "Calcular imagens.", "Interpretar gráficos."]
      ),
      lesson(
        "Composição de funções",
        "A composição consiste em aplicar uma função sobre o resultado de outra. A ordem da composição importa e pode alterar o resultado.",
        ["f(x) = x + 1 e g(x) = 2x.", "f(g(3)) = f(6) = 7."],
        ["Compreender composição.", "Substituir funções.", "Respeitar a ordem."]
      ),
      lesson(
        "Translações de gráficos",
        "Uma função pode sofrer deslocamentos horizontais e verticais. Alterações na expressão permitem identificar como o gráfico se movimenta no plano cartesiano.",
        ["f(x) + 2 desloca o gráfico duas unidades para cima.", "f(x - 3) desloca o gráfico três unidades para a direita."],
        ["Identificar deslocamentos.", "Diferenciar movimentos horizontais e verticais.", "Interpretar transformações."]
      ),
      lesson(
        "Revisão de funções e gráficos",
        "Esta aula integra os conceitos de funções afins, quadráticas, modulares e composição. O foco é interpretar expressões, tabelas e gráficos.",
        ["Comparar f(x) = 2x + 1 e g(x) = x².", "Identificar raízes e vértices."],
        ["Reconhecer diferentes funções.", "Interpretar gráficos.", "Resolver problemas integrados."]
      )
    ]
  },

  // ---------------------------------------------------
  // SEMANA 9 — REVISÃO GERAL DE MATEMÁTICA 1
  // ---------------------------------------------------

  9: {
    title: "Revisão Geral — Matemática 1",
    goal: "Consolidar os conteúdos de Matemática das semanas 1 a 8 antes de iniciar Física.",

    days: [
      lesson(
        "Revisão de operações e conjuntos numéricos",
        "Revisão das quatro operações, conjuntos numéricos, frações e propriedades fundamentais.",
        ["-4 + 9 = 5", "3/4 + 1/4 = 1"],
        ["Operações fundamentais.", "Conjuntos numéricos.", "Frações."]
      ),
      lesson(
        "Revisão de razão, proporção e porcentagem",
        "Revisão das relações proporcionais, regra de três, porcentagens, aumentos e descontos.",
        ["20% de 150 = 30", "3/5 = 6/10"],
        ["Razões.", "Proporções.", "Porcentagem."]
      ),
      lesson(
        "Revisão de potências, raízes e notação científica",
        "Revisão de propriedades de potências, radiciação e representação científica de números.",
        ["2⁴ = 16", "√49 = 7", "5.000 = 5 × 10³"],
        ["Potenciação.", "Radiciação.", "Notação científica."]
      ),
      lesson(
        "Revisão de álgebra e equações",
        "Revisão de expressões algébricas, produtos notáveis, fatoração e equações de primeiro e segundo grau.",
        ["3x + 6 = 3(x + 2)", "x² - 5x + 6 = 0"],
        ["Simplificação algébrica.", "Equações.", "Sistemas."]
      ),
      lesson(
        "Revisão de funções",
        "Revisão de domínio, imagem, função afim, função quadrática, módulo e composição.",
        ["f(x) = 2x + 1", "g(x) = x² - 4"],
        ["Funções.", "Gráficos.", "Raízes e vértices."]
      ),
      lesson(
        "Integração e preparação para Física",
        "A Matemática é uma ferramenta fundamental para a Física. Esta aula integra cálculos, unidades, proporções, gráficos e interpretação de problemas.",
        ["Converter 2 km em 2.000 m.", "Calcular uma razão entre distância e tempo."],
        ["Resolver problemas integrados.", "Interpretar unidades.", "Preparar a base matemática para Física."]
      )
    ]
  },

  // ---------------------------------------------------
  // SEMANA 10 — FÍSICA 1
  // ---------------------------------------------------

  10: {
    title: "Física 1 — Grandezas e fundamentos da cinemática",
    goal: "Compreender grandezas físicas, unidades, análise dimensional, vetores, posição, deslocamento e velocidade.",

    days: [
      lesson(
        "Grandezas físicas",
        "Grandezas físicas são propriedades que podem ser medidas e expressas por valores numéricos e unidades. Comprimento, massa, tempo e temperatura são exemplos de grandezas.",
        ["Comprimento: 5 m.", "Massa: 2 kg.", "Tempo: 10 s."],
        ["Reconhecer grandezas físicas.", "Diferenciar valor e unidade.", "Identificar grandezas fundamentais."]
      ),
      lesson(
        "Sistema Internacional de Unidades",
        "O Sistema Internacional estabelece unidades padronizadas para medidas físicas. Entre suas unidades fundamentais estão metro, quilograma e segundo.",
        ["Comprimento: metro (m).", "Massa: quilograma (kg).", "Tempo: segundo (s)."],
        ["Conhecer o SI.", "Identificar unidades fundamentais.", "Utilizar unidades corretamente."]
      ),
      lesson(
        "Análise dimensional",
        "A análise dimensional permite verificar a compatibilidade das unidades em uma expressão física. Ela ajuda a identificar relações matemáticas inadequadas.",
        ["Velocidade: m/s.", "Aceleração: m/s².", "Força: kg·m/s²."],
        ["Analisar unidades.", "Reconhecer dimensões.", "Verificar coerência física."]
      ),
      lesson(
        "Escalares e vetores",
        "Grandezas escalares são descritas por valor e unidade. Grandezas vetoriais também precisam de direção e sentido. Deslocamento e força são exemplos de vetores.",
        ["Massa: 5 kg, escalar.", "Deslocamento: 10 m para leste, vetorial."],
        ["Diferenciar escalares e vetores.", "Reconhecer direção e sentido.", "Interpretar representações vetoriais."]
      ),
      lesson(
        "Posição e deslocamento",
        "Posição indica onde um corpo está em relação a uma referência. Deslocamento representa a variação entre posição final e inicial, não necessariamente o caminho percorrido.",
        ["Δs = sf - si.", "De 2 m para 9 m: deslocamento de 7 m."],
        ["Identificar posição inicial e final.", "Calcular deslocamento.", "Diferenciar distância percorrida e deslocamento."]
      ),
      lesson(
        "Velocidade média",
        "Velocidade média relaciona o deslocamento de um corpo ao intervalo de tempo. O sinal pode indicar o sentido do movimento em uma trajetória orientada.",
        ["vm = Δs/Δt.", "100 m em 20 s: velocidade escalar média de 5 m/s, considerando o percurso e o sentido indicados."],
        ["Calcular velocidade média.", "Interpretar unidades.", "Relacionar deslocamento e tempo."]
      )
    ]
  },


  // SEMANA 11 — FÍSICA 1
  11: {
    title: "Física 1 — Movimento uniforme",
    goal: "Compreender o movimento uniforme, suas equações e representações gráficas.",
    days: [
      lesson("Introdução ao movimento uniforme", "No movimento uniforme, a velocidade permanece constante e o móvel percorre deslocamentos iguais em intervalos de tempo iguais.", ["Velocidade constante: 5 m/s."], ["Velocidade constante.", "Ausência de aceleração no modelo.", "Deslocamentos proporcionais ao tempo."]),
      lesson("Equação horária da posição", "A posição de um móvel em movimento uniforme pode ser calculada usando a posição inicial, a velocidade e o tempo.", ["s = s₀ + vt", "s = 10 + 5 × 3 = 25 m."], ["Identificar posição inicial.", "Utilizar velocidade.", "Calcular posição."]),
      lesson("Movimento progressivo e retrógrado", "O sinal da velocidade indica o sentido do movimento em relação à orientação escolhida para a trajetória.", ["v positiva: progressivo.", "v negativa: retrógrado."], ["Interpretar sinais.", "Definir referencial.", "Diferenciar sentidos."]),
      lesson("Gráfico posição × tempo", "No movimento uniforme, o gráfico da posição em função do tempo é uma reta. Sua inclinação representa a velocidade.", ["Reta crescente: velocidade positiva.", "Reta decrescente: velocidade negativa."], ["Interpretar inclinação.", "Identificar posição inicial.", "Relacionar gráfico e velocidade."]),
      lesson("Gráfico velocidade × tempo", "Como a velocidade é constante, seu gráfico em função do tempo é uma linha horizontal. A área algébrica sob o gráfico representa o deslocamento.", ["v = 4 m/s durante 5 s: deslocamento de 20 m."], ["Interpretar velocidade constante.", "Calcular deslocamento pela área.", "Analisar sinais."]),
      lesson("Problemas de movimento uniforme", "Aplicação das equações e gráficos em situações de deslocamento, encontros e ultrapassagens.", ["Dois móveis podem ser comparados igualando suas posições."], ["Resolver problemas.", "Interpretar encontros.", "Conferir unidades."])
    ]
  },

  // SEMANA 12 — FÍSICA 1
  12: {
    title: "Física 1 — Movimento uniformemente variado",
    goal: "Compreender aceleração, equações e gráficos do movimento uniformemente variado.",
    days: [
      lesson("Introdução à aceleração", "A aceleração mede a variação da velocidade por unidade de tempo.", ["a = Δv/Δt", "De 2 m/s para 8 m/s em 3 s: 2 m/s²."], ["Definir aceleração.", "Calcular variação de velocidade.", "Interpretar m/s²."]),
      lesson("Movimento uniformemente variado", "No MUV, a aceleração é constante. A velocidade varia de maneira uniforme ao longo do tempo.", ["a = 2 m/s²."], ["Reconhecer aceleração constante.", "Diferenciar MU e MUV.", "Interpretar a variação da velocidade."]),
      lesson("Equação da velocidade", "A equação da velocidade permite descobrir a velocidade em determinado instante.", ["v = v₀ + at"], ["Identificar velocidade inicial.", "Utilizar aceleração.", "Calcular velocidade final."]),
      lesson("Equação horária da posição", "A posição no MUV depende da posição inicial, velocidade inicial, aceleração e tempo.", ["s = s₀ + v₀t + at²/2"], ["Identificar variáveis.", "Aplicar a equação.", "Resolver problemas."]),
      lesson("Equação de Torricelli", "A equação de Torricelli relaciona velocidades, aceleração e deslocamento sem exigir o conhecimento do intervalo de tempo.", ["v² = v₀² + 2aΔs"], ["Reconhecer quando usar Torricelli.", "Calcular deslocamentos.", "Interpretar resultados."]),
      lesson("Gráficos do MUV", "Os gráficos do MUV apresentam relações características: velocidade pelo tempo é uma reta e posição pelo tempo é uma parábola.", ["A inclinação do gráfico v × t representa a aceleração."], ["Interpretar gráficos.", "Relacionar inclinação e aceleração.", "Relacionar área e deslocamento."])
    ]
  },

  // SEMANA 13 — FÍSICA 1
  13: {
    title: "Física 1 — Queda livre e lançamentos",
    goal: "Estudar movimentos verticais e horizontais sob a ação da gravidade.",
    days: [
      lesson("Aceleração da gravidade", "Próximo à superfície da Terra, corpos em queda livre apresentam aceleração gravitacional aproximadamente constante, desprezando a resistência do ar.", ["g ≈ 9,8 m/s²."], ["Compreender gravidade.", "Identificar aceleração.", "Conhecer aproximações."]),
      lesson("Queda livre", "Na queda livre ideal, o corpo é abandonado e passa a se movimentar sob a ação da gravidade.", ["v₀ = 0 em um corpo abandonado."], ["Identificar condições iniciais.", "Aplicar equações do MUV.", "Interpretar o sentido positivo."]),
      lesson("Lançamento vertical para cima", "Um corpo lançado verticalmente para cima desacelera durante a subida, atinge velocidade instantânea nula no ponto mais alto e depois inicia a descida.", ["No ponto mais alto, v = 0."], ["Analisar subida e descida.", "Identificar altura máxima.", "Considerar a gravidade."]),
      lesson("Tempo de subida e altura máxima", "Em um lançamento vertical ideal, as equações do MUV permitem calcular o tempo até o ponto mais alto e a altura atingida.", ["No ponto mais alto, a velocidade é zero."], ["Calcular tempo.", "Calcular altura.", "Interpretar condições do movimento."]),
      lesson("Lançamento horizontal", "No lançamento horizontal, o movimento pode ser analisado como a combinação de um movimento uniforme na horizontal e uma queda livre na vertical.", ["A velocidade horizontal permanece constante no modelo ideal."], ["Separar os movimentos.", "Analisar o eixo horizontal.", "Analisar o eixo vertical."]),
      lesson("Problemas de lançamentos", "Aplicação das equações da cinemática em situações de queda livre e lançamentos verticais e horizontais.", ["Comparar tempo de queda e deslocamento horizontal."], ["Organizar dados.", "Escolher equações.", "Interpretar resultados."])
    ]
  },

  // SEMANA 14 — FÍSICA 1
  14: {
    title: "Física 1 — Lançamento oblíquo e revisão de cinemática",
    goal: "Compreender a decomposição do lançamento oblíquo e integrar os conteúdos de cinemática.",
    days: [
      lesson("Introdução ao lançamento oblíquo", "O lançamento oblíquo ocorre quando um corpo é lançado com velocidade inicial inclinada em relação à horizontal.", ["A velocidade inicial possui componentes horizontal e vertical."], ["Reconhecer trajetória parabólica.", "Identificar ângulo de lançamento.", "Decompor movimentos."]),
      lesson("Componentes da velocidade", "A velocidade inicial pode ser decomposta em componentes horizontal e vertical utilizando relações trigonométricas.", ["vₓ = v₀ cos θ", "vᵧ = v₀ sen θ"], ["Utilizar seno e cosseno.", "Calcular componentes.", "Interpretar direções."]),
      lesson("Movimento horizontal", "Desprezando a resistência do ar, a componente horizontal da velocidade permanece constante durante o lançamento.", ["x = x₀ + vₓt"], ["Aplicar movimento uniforme.", "Calcular alcance horizontal.", "Interpretar tempo."]),
      lesson("Movimento vertical", "A componente vertical segue as equações do movimento uniformemente variado, sob a aceleração da gravidade.", ["vᵧ = v₀ᵧ - gt"], ["Aplicar equações verticais.", "Calcular altura.", "Analisar o ponto mais alto."]),
      lesson("Alcance e trajetória", "O alcance horizontal depende da velocidade inicial, do ângulo e das condições de lançamento e chegada.", ["Para mesma altura inicial e final, o alcance ideal é máximo em 45°."], ["Interpretar alcance.", "Relacionar ângulo e trajetória.", "Reconhecer hipóteses do modelo."]),
      lesson("Revisão integrada de cinemática", "Revisão de posição, deslocamento, velocidade, aceleração, MU, MUV e lançamentos.", ["Comparar gráficos e equações dos movimentos."], ["Integrar conceitos.", "Escolher equações.", "Resolver problemas."])
    ]
  },

  // SEMANA 15 — FÍSICA 1
  15: {
    title: "Física 1 — Leis de Newton",
    goal: "Compreender força, massa, inércia e as três leis de Newton.",
    days: [
      lesson("O conceito de força", "Força é uma interação capaz de alterar o movimento de um corpo ou produzir deformações. É uma grandeza vetorial.", ["Unidade: newton (N)."], ["Reconhecer forças.", "Identificar unidade.", "Representar vetores."]),
      lesson("Primeira lei de Newton", "A lei da inércia afirma que um corpo mantém seu estado de repouso ou movimento retilíneo uniforme quando a força resultante é nula.", ["ΣF = 0."], ["Compreender inércia.", "Identificar equilíbrio.", "Relacionar força resultante e movimento."]),
      lesson("Segunda lei de Newton", "A força resultante sobre um corpo é igual ao produto de sua massa pela aceleração.", ["ΣF = ma"], ["Aplicar a segunda lei.", "Relacionar força, massa e aceleração.", "Utilizar unidades."]),
      lesson("Terceira lei de Newton", "A toda força de ação corresponde uma força de reação de mesma intensidade e direção, mas sentido oposto, atuando em outro corpo.", ["Forças de ação e reação atuam em corpos diferentes."], ["Identificar pares de forças.", "Diferenciar ação e reação.", "Evitar confusão com equilíbrio."]),
      lesson("Peso e força normal", "O peso é a força gravitacional exercida sobre um corpo. A força normal é uma força de contato perpendicular à superfície.", ["P = mg."], ["Calcular peso.", "Identificar normal.", "Representar forças."]),
      lesson("Diagramas de forças", "Diagramas de corpo livre representam as forças que atuam em um objeto isolado. Eles ajudam a aplicar corretamente as leis de Newton.", ["Representar peso, normal e força aplicada."], ["Isolar o corpo.", "Desenhar forças.", "Aplicar ΣF = ma."])
    ]
  },

  // SEMANA 16 — FÍSICA 1
  16: {
    title: "Física 1 — Atrito e força elástica",
    goal: "Estudar atrito, força elástica e aplicações das leis de Newton.",
    days: [
      lesson("Atrito estático", "O atrito estático atua entre superfícies sem deslizamento relativo e se ajusta até um valor máximo.", ["fₑ ≤ μₑN."], ["Compreender atrito estático.", "Identificar força normal.", "Interpretar coeficiente."]),
      lesson("Atrito cinético", "O atrito cinético atua quando duas superfícies deslizam uma em relação à outra.", ["f꜀ = μ꜀N."], ["Calcular atrito cinético.", "Diferenciar atritos.", "Analisar superfícies."]),
      lesson("Força elástica", "Uma mola deformada pode exercer uma força restauradora, proporcional à deformação dentro do regime elástico ideal.", ["F = -kx."], ["Compreender deformação.", "Identificar constante elástica.", "Interpretar sinal."]),
      lesson("Lei de Hooke", "A lei de Hooke relaciona a força elástica à deformação de uma mola, dentro de seu limite de proporcionalidade.", ["Uma mola com k = 100 N/m deformada 0,1 m exerce força de módulo 10 N."], ["Aplicar a lei.", "Calcular deformações.", "Reconhecer limites do modelo."]),
      lesson("Planos inclinados", "Em planos inclinados, o peso pode ser decomposto em componentes paralela e perpendicular à superfície.", ["P∥ = mg sen θ.", "P⊥ = mg cos θ."], ["Decompor forças.", "Analisar ângulos.", "Incluir atrito."]),
      lesson("Aplicações das leis de Newton", "Resolução de problemas envolvendo atrito, molas, planos inclinados e forças resultantes.", ["Construir diagramas de corpo livre."], ["Integrar forças.", "Calcular aceleração.", "Interpretar situações."])
    ]
  },

  // SEMANA 17 — FÍSICA 1
  17: {
    title: "Física 1 — Movimento circular e força centrípeta",
    goal: "Compreender movimento circular, período, frequência e aceleração centrípeta.",
    days: [
      lesson("Introdução ao movimento circular", "O movimento circular ocorre quando a trajetória de um corpo é uma circunferência ou parte dela.", ["Uma roda girando em torno de seu eixo."], ["Reconhecer trajetórias circulares.", "Identificar raio.", "Diferenciar movimento linear e circular."]),
      lesson("Período e frequência", "O período é o tempo necessário para uma volta completa. A frequência indica quantas voltas ocorrem por unidade de tempo.", ["f = 1/T.", "Unidade de frequência: hertz (Hz)."], ["Calcular período.", "Calcular frequência.", "Relacionar grandezas."]),
      lesson("Velocidade angular", "A velocidade angular mede a variação do ângulo por unidade de tempo.", ["ω = Δθ/Δt.", "Em movimento uniforme, ω = 2π/T."], ["Compreender radianos.", "Calcular velocidade angular.", "Relacionar período e frequência."]),
      lesson("Velocidade linear", "A velocidade linear tangencial relaciona a velocidade angular ao raio da trajetória.", ["v = ωr."], ["Relacionar velocidade linear e angular.", "Utilizar raio.", "Interpretar tangência."]),
      lesson("Aceleração e força centrípeta", "No movimento circular, a direção da velocidade muda continuamente. A aceleração centrípeta aponta para o centro da trajetória.", ["a꜀ = v²/r.", "F꜀ = mv²/r."], ["Calcular aceleração centrípeta.", "Calcular força resultante radial.", "Identificar direção."]),
      lesson("Problemas de dinâmica circular", "Aplicação das relações de movimento circular em curvas, rodas e sistemas giratórios.", ["Analisar a força resultante voltada ao centro."], ["Integrar cinemática e dinâmica.", "Identificar forças reais.", "Resolver problemas."])
    ]
  },

  // SEMANA 18 — REVISÃO
  18: {
    title: "Revisão Geral — Matemática 1 e Física 1",
    goal: "Consolidar Matemática 1 e Física 1 por meio de revisão acumulativa e resolução de problemas.",
    days: [
      lesson("Revisão de matemática fundamental", "Revisão de operações, frações, porcentagem, proporções e equações.", ["Resolver expressões e equações."], ["Operações.", "Frações.", "Equações."]),
      lesson("Revisão de funções e gráficos", "Revisão de funções afins e quadráticas, domínio, imagem e interpretação gráfica.", ["Interpretar uma reta e uma parábola."], ["Função afim.", "Função quadrática.", "Gráficos."]),
      lesson("Revisão de grandezas e cinemática", "Revisão de unidades, vetores, posição, deslocamento, velocidade e aceleração.", ["Converter km/h em m/s."], ["Grandezas.", "Unidades.", "Cinemática."]),
      lesson("Revisão de MU, MUV e lançamentos", "Comparação entre movimentos uniforme, uniformemente variado, queda livre e lançamentos.", ["Selecionar equações adequadas."], ["Equações.", "Gráficos.", "Lançamentos."]),
      lesson("Revisão das leis de Newton", "Revisão de força, inércia, aceleração, peso, normal, atrito e força elástica.", ["Aplicar ΣF = ma."], ["Leis de Newton.", "Diagramas.", "Atrito."]),
      lesson("Simulado e análise dos erros", "Resolução de problemas acumulativos e análise das dificuldades identificadas.", ["Registrar erros de cálculo e interpretação."], ["Consolidar conteúdos.", "Identificar lacunas.", "Preparar Biologia 1."])
    ]
  },

  // SEMANA 19 — BIOLOGIA 1
  19: {
    title: "Biologia 1 — Características da vida e células",
    goal: "Compreender as características dos seres vivos, os tipos celulares e a membrana plasmática.",
    days: [
      lesson("Características da vida", "Os seres vivos apresentam organização celular, metabolismo, reprodução, crescimento, resposta a estímulos e capacidade de evolução.", ["Bactérias, plantas e animais são seres vivos."], ["Reconhecer características da vida.", "Compreender organização biológica.", "Diferenciar seres vivos de estruturas não vivas."]),
      lesson("Organização celular", "A célula é a unidade estrutural e funcional dos seres vivos. Organismos podem ser unicelulares ou multicelulares.", ["Bactérias são unicelulares.", "Humanos são multicelulares."], ["Definir célula.", "Diferenciar unicelular e multicelular.", "Reconhecer níveis de organização."]),
      lesson("Células procarióticas", "Células procarióticas não possuem núcleo delimitado por membrana. Seu material genético fica em uma região chamada nucleoide.", ["Bactérias são procariontes."], ["Reconhecer procariontes.", "Identificar nucleoide.", "Conhecer estruturas básicas."]),
      lesson("Células eucarióticas", "Células eucarióticas possuem núcleo delimitado por membrana e diversas organelas especializadas.", ["Células animais e vegetais são eucarióticas."], ["Reconhecer eucariontes.", "Identificar núcleo.", "Comparar tipos celulares."]),
      lesson("Membrana plasmática", "A membrana plasmática delimita a célula e controla a entrada e saída de substâncias. Sua estrutura é formada principalmente por uma bicamada de fosfolipídios e proteínas.", ["Modelo do mosaico fluido."], ["Compreender permeabilidade seletiva.", "Identificar componentes.", "Conhecer funções."]),
      lesson("Comparação entre células", "Comparação das características de células procarióticas e eucarióticas, além de diferenças gerais entre células animais e vegetais.", ["Células vegetais possuem parede celular e cloroplastos."], ["Comparar estruturas.", "Identificar diferenças.", "Relacionar estrutura e função."])
    ]
  },

  // SEMANA 20 — BIOLOGIA 1
  20: {
    title: "Biologia 1 — Organelas e estrutura celular",
    goal: "Compreender núcleo, citoplasma, ribossomos, organelas e citoesqueleto.",
    days: [
      lesson("Citoplasma e citosol", "O citoplasma corresponde à região interna da célula, excluindo o núcleo nas células eucarióticas. O citosol é a parte fluida onde ocorrem diversas reações.", ["O citosol contém água, íons e moléculas."], ["Diferenciar citoplasma e citosol.", "Reconhecer funções.", "Relacionar estrutura e metabolismo."]),
      lesson("Núcleo celular", "O núcleo armazena a maior parte do material genético das células eucarióticas e participa do controle das atividades celulares.", ["DNA organizado em cromatina."], ["Identificar núcleo.", "Compreender DNA.", "Reconhecer envoltório nuclear."]),
      lesson("Ribossomos e síntese de proteínas", "Ribossomos são estruturas responsáveis pela síntese de proteínas, utilizando informações do RNA mensageiro.", ["Ribossomos podem estar livres ou associados ao retículo endoplasmático."], ["Compreender síntese proteica.", "Identificar ribossomos.", "Relacionar RNA e proteínas."]),
      lesson("Retículo endoplasmático e complexo golgiense", "O retículo endoplasmático participa da produção e do processamento de moléculas. O complexo golgiense modifica, organiza e direciona substâncias.", ["Retículo rugoso: associado à produção de proteínas.", "Retículo liso: participa da síntese de lipídios."], ["Diferenciar retículos.", "Compreender o Golgi.", "Relacionar transporte e secreção."]),
      lesson("Mitocôndrias e outras organelas", "Mitocôndrias participam da respiração celular e produção de ATP. Lisossomos atuam na digestão intracelular, e peroxissomos participam de reações metabólicas.", ["Mitocôndrias possuem material genético próprio."], ["Identificar organelas.", "Relacionar estrutura e função.", "Compreender metabolismo celular."]),
      lesson("Citoesqueleto e revisão celular", "O citoesqueleto é uma rede de filamentos que contribui para sustentação, organização e movimentação celular. A aula integra as principais organelas.", ["Microtúbulos, microfilamentos e filamentos intermediários."], ["Reconhecer componentes.", "Compreender funções.", "Integrar conhecimentos celulares."])
    ]
  },


  21: {
    title: "Transporte pela membrana, água e sais minerais",
    goal: "Compreender como as células controlam a entrada e a saída de substâncias.",
    days: [
      lesson("Membrana plasmática", "A membrana plasmática envolve a célula e controla a passagem de substâncias entre o meio interno e externo. Sua estrutura é formada principalmente por uma bicamada de fosfolipídios e proteínas.", ["Bicamada lipídica", "Proteínas de membrana"], ["A membrana delimita a célula.", "Possui permeabilidade seletiva.", "Proteínas auxiliam no transporte."]),
      lesson("Difusão simples e facilitada", "Na difusão, substâncias se deslocam de regiões de maior concentração para regiões de menor concentração. Na difusão facilitada, proteínas da membrana ajudam a passagem.", ["Oxigênio atravessando a membrana.", "Glicose utilizando proteínas transportadoras."], ["Não exige gasto direto de ATP.", "Ocorre a favor do gradiente de concentração.", "Pode utilizar proteínas."]),
      lesson("Osmose", "A osmose é a passagem de água através de uma membrana semipermeável. A água se desloca em resposta à diferença de concentração de solutos entre os meios.", ["Célula em meio hipotônico.", "Célula em meio hipertônico."], ["É um transporte passivo.", "Envolve a movimentação de água.", "O meio pode ser isotônico, hipotônico ou hipertônico."]),
      lesson("Transporte ativo", "O transporte ativo movimenta substâncias contra seu gradiente de concentração e exige energia. Um exemplo é a bomba de sódio e potássio.", ["Bomba de sódio e potássio.", "Transporte de íons contra o gradiente."], ["Exige energia.", "Pode utilizar ATP.", "Ocorre contra o gradiente."]),
      lesson("Água e sais minerais", "A água participa de reações químicas, transporte de substâncias e regulação térmica. Os sais minerais exercem funções estruturais e reguladoras no organismo.", ["Cálcio nos ossos.", "Ferro na hemoglobina.", "Sódio e potássio na atividade nervosa."], ["Água é essencial ao metabolismo.", "Sais minerais têm funções específicas.", "A alimentação fornece esses nutrientes."]),
      lesson("Integração e revisão", "Nesta aula, conectamos membrana plasmática, transportes celulares, osmose e funções da água e dos sais minerais.", ["Comparação entre difusão e transporte ativo.", "Análise de uma célula em diferentes meios."], ["Diferencie transporte passivo e ativo.", "Explique a osmose.", "Relacione sais minerais às suas funções."])
    ]
  },

  22: {
    title: "Carboidratos, lipídios, proteínas, vitaminas e enzimas",
    goal: "Identificar os principais componentes químicos dos seres vivos e suas funções.",
    days: [
      lesson("Introdução às biomoléculas", "Os seres vivos possuem moléculas orgânicas e inorgânicas que participam da estrutura e do funcionamento celular. Entre as orgânicas estão carboidratos, lipídios, proteínas e ácidos nucleicos.", ["Água e sais minerais.", "Glicose e proteínas."], ["Biomoléculas formam os organismos.", "Cada grupo possui funções próprias.", "A alimentação fornece muitos desses componentes."]),
      lesson("Carboidratos", "Os carboidratos são importantes fontes de energia e também podem desempenhar funções estruturais. Podem ser classificados em monossacarídeos, dissacarídeos e polissacarídeos.", ["Glicose.", "Sacarose.", "Amido e glicogênio."], ["Glicose é um monossacarídeo.", "Amido é uma reserva vegetal.", "Glicogênio é uma reserva animal."]),
      lesson("Lipídios", "Os lipídios incluem gorduras, óleos, ceras e fosfolipídios. Participam da reserva energética, do isolamento térmico e da composição das membranas celulares.", ["Óleos vegetais.", "Gorduras.", "Fosfolipídios."], ["São importantes reservas energéticas.", "Compõem membranas celulares.", "Alguns atuam na produção de hormônios."]),
      lesson("Proteínas e aminoácidos", "As proteínas são formadas por cadeias de aminoácidos. Elas participam da estrutura dos tecidos, do transporte de substâncias, da defesa e de diversas reações celulares.", ["Hemoglobina.", "Colágeno.", "Anticorpos."], ["Aminoácidos formam proteínas.", "A sequência de aminoácidos influencia a estrutura.", "Proteínas desempenham várias funções."]),
      lesson("Vitaminas e enzimas", "Vitaminas são substâncias necessárias em pequenas quantidades para o funcionamento do organismo. Enzimas são catalisadores biológicos que aceleram reações químicas.", ["Vitamina C.", "Vitamina D.", "Enzimas digestivas."], ["Vitaminas possuem funções reguladoras.", "Enzimas diminuem a energia de ativação.", "Temperatura e pH podem afetar enzimas."]),
      lesson("Revisão das biomoléculas", "A revisão compara os grupos de biomoléculas e suas funções no organismo, relacionando alimentação, metabolismo e funcionamento celular.", ["Carboidratos como fonte energética.", "Lipídios como reserva.", "Proteínas como estruturas e enzimas."], ["Diferencie os grupos.", "Associe moléculas às funções.", "Explique o papel das enzimas."])
    ]
  },

  23: {
    title: "Ácidos nucleicos, DNA, RNA e ATP",
    goal: "Entender a estrutura e as funções das moléculas relacionadas à informação genética e à energia celular.",
    days: [
      lesson("Nucleotídeos", "Os ácidos nucleicos são formados por unidades chamadas nucleotídeos. Cada nucleotídeo possui um açúcar, um grupo fosfato e uma base nitrogenada.", ["Adenina.", "Guanina.", "Citosina."], ["Nucleotídeos formam DNA e RNA.", "Possuem açúcar e fosfato.", "As bases variam."]),
      lesson("Estrutura do DNA", "O DNA armazena informações genéticas. Sua estrutura apresenta duas cadeias complementares organizadas em dupla hélice.", ["Adenina pareia com timina.", "Citosina pareia com guanina."], ["DNA possui dupla hélice.", "Contém desoxirribose.", "Armazena informação genética."]),
      lesson("Estrutura do RNA", "O RNA participa da expressão da informação genética e apresenta, geralmente, uma cadeia simples. Utiliza uracila no lugar da timina.", ["RNA mensageiro.", "RNA transportador.", "RNA ribossômico."], ["RNA possui ribose.", "Utiliza uracila.", "Existem diferentes tipos de RNA."]),
      lesson("Replicação do DNA", "A replicação é o processo de duplicação do DNA antes da divisão celular. Cada molécula nova conserva uma fita original e produz uma fita complementar.", ["Duplicação antes da divisão celular."], ["É semiconservativa.", "Utiliza a complementaridade das bases.", "Permite transmitir informações genéticas."]),
      lesson("ATP e energia celular", "O ATP é uma molécula que participa da transferência de energia nas células. Sua hidrólise libera energia utilizável em diferentes processos celulares.", ["Transporte ativo.", "Contração muscular.", "Síntese de moléculas."], ["ATP é uma moeda energética celular.", "Participa de processos metabólicos.", "Pode ser regenerado."]),
      lesson("Revisão de DNA, RNA e ATP", "A aula integra a informação genética armazenada no DNA, a participação do RNA e a função energética do ATP.", ["DNA → RNA → proteína.", "ATP fornecendo energia para processos celulares."], ["Diferencie DNA e RNA.", "Explique a replicação.", "Identifique a função do ATP."])
    ]
  },

  24: {
    title: "Respiração celular, fermentação, fotossíntese e quimiossíntese",
    goal: "Compreender os principais processos de obtenção e transformação de energia nos seres vivos.",
    days: [
      lesson("Metabolismo energético", "O metabolismo reúne as reações químicas que acontecem nos organismos. Algumas reações constroem moléculas, enquanto outras degradam substâncias e liberam energia.", ["Anabolismo.", "Catabolismo."], ["Metabolismo envolve várias reações.", "Anabolismo constrói moléculas.", "Catabolismo degrada moléculas."]),
      lesson("Respiração celular", "A respiração celular aeróbica utiliza oxigênio para extrair energia de moléculas orgânicas. O processo envolve glicólise, ciclo de Krebs e cadeia transportadora de elétrons.", ["Glicose e oxigênio participam do processo."], ["Ocorre em etapas.", "Produz ATP.", "Envolve a mitocôndria nas células eucarióticas."]),
      lesson("Fermentação", "A fermentação permite obter energia sem utilizar a cadeia respiratória aeróbica. Pode ocorrer em microrganismos e em células musculares em determinadas condições.", ["Fermentação alcoólica.", "Fermentação lática."], ["Não utiliza oxigênio como a respiração aeróbica.", "Produz menos ATP.", "Possui diferentes produtos finais."]),
      lesson("Fotossíntese", "A fotossíntese transforma energia luminosa em energia química. Organismos fotossintetizantes utilizam água e dióxido de carbono para produzir compostos orgânicos e liberar oxigênio.", ["Plantas.", "Algas.", "Cianobactérias."], ["Depende de energia luminosa.", "Utiliza CO₂ e água.", "Produz matéria orgânica."]),
      lesson("Quimiossíntese", "A quimiossíntese produz matéria orgânica utilizando energia obtida de reações químicas inorgânicas. É realizada por determinados microrganismos.", ["Bactérias nitrificantes.", "Microrganismos de ambientes sem luz."], ["Não depende diretamente da luz.", "Utiliza energia de reações químicas.", "Produz compostos orgânicos."]),
      lesson("Comparação dos processos", "A revisão compara respiração, fermentação, fotossíntese e quimiossíntese, observando fontes de energia, reagentes e produtos.", ["Respiração e fermentação.", "Fotossíntese e quimiossíntese."], ["Diferencie os processos.", "Identifique as fontes de energia.", "Relacione os processos ao metabolismo."])
    ]
  },

  25: {
    title: "Metabolismo, ciclo celular, mitose e meiose",
    goal: "Compreender a organização do ciclo celular e os processos de divisão celular.",
    days: [
      lesson("Ciclo celular", "O ciclo celular compreende o período entre uma divisão celular e outra. Ele inclui a intérfase e a fase de divisão.", ["G1, S e G2.", "Mitose e citocinese."], ["A intérfase prepara a célula.", "O DNA é duplicado na fase S.", "A divisão ocorre depois da preparação."]),
      lesson("Intérfase", "A intérfase é composta pelas fases G1, S e G2. Nesse período, a célula cresce, realiza suas atividades e duplica o DNA.", ["G1: crescimento.", "S: duplicação do DNA.", "G2: preparação para divisão."], ["A intérfase não é um período de inatividade.", "O DNA duplica na fase S.", "A célula se prepara para dividir."]),
      lesson("Mitose", "A mitose é uma divisão celular que normalmente origina duas células-filhas geneticamente semelhantes à célula inicial, mantendo o número de cromossomos.", ["Crescimento dos tecidos.", "Renovação celular."], ["Envolve prófase, metáfase, anáfase e telófase.", "Mantém o número de cromossomos.", "É importante para crescimento e reparação."]),
      lesson("Etapas da mitose", "Durante a mitose, os cromossomos se condensam, alinham-se no centro da célula e as cromátides-irmãs são separadas. Ao final, formam-se dois núcleos.", ["Metáfase: alinhamento.", "Anáfase: separação."], ["Observe a posição dos cromossomos.", "A separação ocorre na anáfase.", "A citocinese divide o citoplasma."]),
      lesson("Meiose", "A meiose envolve duas divisões celulares após uma única duplicação do DNA. Ela reduz o número de cromossomos e contribui para a variabilidade genética.", ["Formação de gametas em animais.", "Crossing-over."], ["Produz células haploides.", "Possui meiose I e meiose II.", "Contribui para diversidade genética."]),
      lesson("Mitose e meiose: comparação", "A aula compara os resultados e as funções dos dois tipos de divisão celular, destacando quantidade de células, número de cromossomos e variabilidade genética.", ["Mitose: duas células.", "Meiose: quatro células haploides, em condições típicas."], ["Mitose mantém a ploidia.", "Meiose reduz a ploidia.", "Os processos possuem funções diferentes."])
    ]
  },

  26: {
    title: "Reprodução celular e introdução à genética",
    goal: "Relacionar divisão celular à transmissão das características hereditárias.",
    days: [
      lesson("Reprodução celular", "A divisão celular permite crescimento, renovação e reprodução em diferentes organismos. Sua função varia conforme o tipo de célula e organismo.", ["Bactérias se dividindo.", "Células de tecidos se renovando."], ["A divisão celular tem diferentes funções.", "Pode participar da reprodução.", "É essencial à continuidade da vida."]),
      lesson("Cromossomos e cromatina", "O DNA associa-se a proteínas e forma a cromatina. Durante a divisão celular, essa estrutura se condensa e forma cromossomos visíveis.", ["Cromatina.", "Cromossomo duplicado."], ["Cromossomos contêm DNA.", "A cromatina pode se condensar.", "A duplicação gera cromátides-irmãs."]),
      lesson("Genes e alelos", "Genes são segmentos de DNA associados a características ou funções. Alelos são versões alternativas de um mesmo gene.", ["Alelos A e a.", "Genes relacionados a características hereditárias."], ["Genes fazem parte do DNA.", "Alelos são variantes de genes.", "A expressão depende de diversos fatores."]),
      lesson("Conceitos básicos de genética", "A genética estuda a hereditariedade e a variação. Conceitos como genótipo, fenótipo, homozigoto e heterozigoto ajudam a descrever características hereditárias.", ["AA: homozigoto.", "Aa: heterozigoto."], ["Genótipo corresponde à constituição genética.", "Fenótipo envolve características observáveis.", "Homozigoto possui alelos iguais."]),
      lesson("Cromossomos e hereditariedade", "Os cromossomos carregam genes e são transmitidos durante a reprodução. A combinação de material genético dos progenitores contribui para as características dos descendentes.", ["Cromossomos homólogos.", "Herança genética."], ["Genes estão nos cromossomos.", "A meiose participa da formação de gametas.", "A fecundação combina materiais genéticos."]),
      lesson("Revisão e introdução à genética", "A revisão conecta divisão celular, cromossomos, genes e transmissão hereditária, preparando o estudo de genética.", ["DNA → genes → cromossomos.", "Meiose e fecundação."], ["Diferencie gene e cromossomo.", "Explique genótipo e fenótipo.", "Relacione meiose à hereditariedade."])
    ]
  },

  27: {
    title: "Revisão geral — Biologia 1",
    goal: "Consolidar os conteúdos de Biologia estudados entre as semanas 19 e 26.",
    days: [
      lesson("Características da vida e células", "Revise as características dos seres vivos, os tipos celulares e a organização da membrana plasmática.", ["Células procarióticas e eucarióticas."], ["Identifique estruturas celulares.", "Compare os tipos de célula."]),
      lesson("Organelas e funções celulares", "Retome as organelas, o núcleo, o citoplasma, os ribossomos e o citoesqueleto, relacionando estrutura e função.", ["Mitocôndria.", "Ribossomos.", "Núcleo."], ["Associe organelas às funções.", "Diferencie estruturas celulares."]),
      lesson("Membrana e biomoléculas", "Revise transportes pela membrana, osmose, água, sais minerais e os principais grupos de biomoléculas.", ["Difusão.", "Osmose.", "Proteínas e lipídios."], ["Diferencie transportes.", "Reconheça biomoléculas."]),
      lesson("DNA, RNA e metabolismo", "Retome os ácidos nucleicos, o ATP e os processos de transformação de energia nos organismos.", ["DNA e RNA.", "Respiração e fotossíntese."], ["Explique a função do DNA.", "Compare processos energéticos."]),
      lesson("Divisão celular e genética", "Revise ciclo celular, mitose, meiose, cromossomos, genes e conceitos fundamentais de genética.", ["Mitose e meiose.", "Genótipo e fenótipo."], ["Compare divisões celulares.", "Identifique conceitos genéticos."]),
      lesson("Revisão integrada de Biologia", "Utilize os conhecimentos das semanas anteriores para interpretar situações envolvendo células, metabolismo e hereditariedade.", ["Interpretação de esquemas celulares.", "Questões integradas."], ["Conecte os assuntos.", "Identifique dificuldades.", "Prepare-se para a próxima etapa."])
    ]
  },

  28: {
    title: "Matéria, propriedades, estados físicos, substâncias e misturas",
    goal: "Compreender a matéria, suas propriedades e suas classificações.",
    days: [
      lesson("O que é matéria?", "Matéria é tudo aquilo que possui massa e ocupa lugar no espaço. Ela pode se apresentar em diferentes estados físicos e composições.", ["Água.", "Ar.", "Metais."], ["Matéria possui massa.", "Ocupa espaço.", "Pode sofrer transformações."]),
      lesson("Propriedades gerais e específicas", "As propriedades gerais são comuns à matéria, enquanto propriedades específicas ajudam a identificar e diferenciar materiais.", ["Massa e volume.", "Densidade e ponto de ebulição."], ["Massa e volume são propriedades gerais.", "Densidade é uma propriedade específica.", "Propriedades ajudam a caracterizar materiais."]),
      lesson("Estados físicos da matéria", "A matéria pode ser encontrada principalmente nos estados sólido, líquido e gasoso. A organização e movimentação das partículas ajudam a explicar suas diferenças.", ["Gelo.", "Água líquida.", "Vapor de água."], ["Sólidos possuem forma definida.", "Líquidos assumem a forma do recipiente.", "Gases ocupam o recipiente."]),
      lesson("Mudanças de estado físico", "As mudanças de estado físico acontecem quando a matéria recebe ou perde energia térmica. Fusão, vaporização, condensação e solidificação são exemplos.", ["Gelo derretendo.", "Água evaporando.", "Vapor condensando."], ["Fusão: sólido para líquido.", "Vaporização: líquido para gás.", "Condensação: gás para líquido."]),
      lesson("Substâncias puras e misturas", "Substâncias puras possuem composição química definida. Misturas são formadas pela união de duas ou mais substâncias.", ["Água destilada.", "Água com sal.", "Ar atmosférico."], ["Substância pura tem composição definida.", "Mistura pode ser homogênea ou heterogênea.", "Componentes podem ser separados por métodos físicos."]),
      lesson("Revisão de matéria e propriedades", "A aula integra as classificações da matéria, seus estados físicos, mudanças de estado e diferenças entre substâncias e misturas.", ["Classificação de materiais do cotidiano."], ["Diferencie substância e mistura.", "Identifique estados físicos.", "Explique mudanças de estado."])
    ]
  },

  29: {
    title: "Separação de misturas e fenômenos físicos/químicos",
    goal: "Identificar métodos de separação e diferenciar transformações físicas e químicas.",
    days: [
      lesson("Misturas homogêneas e heterogêneas", "Misturas homogêneas apresentam uma única fase visível, enquanto misturas heterogêneas apresentam duas ou mais fases.", ["Água com sal.", "Água e óleo."], ["Fase é cada porção visualmente distinta.", "Homogênea possui uma fase.", "Heterogênea possui mais de uma fase."]),
      lesson("Filtração, decantação e centrifugação", "Esses métodos permitem separar componentes de misturas utilizando diferenças de tamanho de partículas ou densidade.", ["Filtro de café.", "Água e óleo.", "Centrifugação."], ["Filtração utiliza um filtro.", "Decantação depende da diferença de densidade.", "Centrifugação acelera a separação."]),
      lesson("Destilação", "A destilação utiliza diferenças nos pontos de ebulição para separar componentes. Pode ser simples ou fracionada, conforme a mistura.", ["Separação de água e sal.", "Separação de líquidos miscíveis."], ["A destilação envolve vaporização e condensação.", "A simples separa líquido de sólido dissolvido.", "A fracionada pode separar líquidos."]),
      lesson("Outros métodos de separação", "Peneiração, imantação, ventilação e dissolução fracionada são métodos usados conforme as propriedades dos componentes.", ["Areia e pedras.", "Areia e limalha de ferro."], ["Escolha o método pela propriedade física.", "Imantação utiliza magnetismo.", "Peneiração utiliza tamanho das partículas."]),
      lesson("Fenômenos físicos e químicos", "Fenômenos físicos alteram características como forma ou estado sem formar uma nova substância. Fenômenos químicos produzem novas substâncias.", ["Gelo derretendo.", "Ferro enferrujando."], ["Mudança de estado é física.", "Combustão é química.", "Observe se novas substâncias são formadas."]),
      lesson("Revisão de separação e transformações", "A revisão aplica os métodos de separação e a classificação de fenômenos a situações cotidianas.", ["Separação de água e óleo.", "Queima de papel.", "Filtração de uma mistura."], ["Identifique as fases.", "Escolha o método adequado.", "Diferencie fenômenos físicos e químicos."])
    ]
  },

  30: {
    title: "Modelos atômicos, partículas, número atômico, massa e isótopos",
    goal: "Compreender a estrutura do átomo e a evolução dos modelos atômicos.",
    days: [
      lesson("Ideia de átomo", "O átomo é uma unidade fundamental da matéria. Sua estrutura possui um núcleo com prótons e nêutrons e uma região ao redor ocupada por elétrons.", ["Átomo de hidrogênio.", "Átomo de carbono."], ["O núcleo contém prótons e nêutrons.", "Elétrons ocupam a eletrosfera.", "Átomos formam elementos químicos."]),
      lesson("Modelo de Dalton", "Dalton propôs um modelo em que o átomo era representado como uma esfera maciça e indivisível. Sua teoria ajudou a explicar leis das combinações químicas.", ["Modelo da bola de bilhar."], ["Modelo histórico inicial.", "Representava o átomo como esfera maciça.", "Foi posteriormente aprimorado."]),
      lesson("Modelos de Thomson e Rutherford", "Thomson identificou o elétron e propôs um modelo com cargas negativas distribuídas em uma região positiva. Rutherford demonstrou a existência de um núcleo pequeno e positivo.", ["Modelo do pudim de passas.", "Experimento da lâmina de ouro."], ["Thomson identificou o elétron.", "Rutherford propôs o núcleo.", "A maior parte do átomo é espaço vazio."]),
      lesson("Modelo de Bohr", "Bohr propôs níveis de energia quantizados para os elétrons. Ao mudar de nível, o elétron pode absorver ou emitir energia.", ["Transições entre níveis de energia."], ["Elétrons ocupam níveis de energia.", "A energia é absorvida ou emitida em transições.", "O modelo aprimorou a descrição do átomo."]),
      lesson("Prótons, nêutrons, elétrons e isótopos", "O número atômico corresponde à quantidade de prótons. A massa do átomo está relacionada principalmente a prótons e nêutrons; isótopos possuem o mesmo número de prótons e diferentes números de nêutrons.", ["Carbono-12 e carbono-14.", "Número atômico do carbono: 6."], ["Z representa número atômico.", "A representa número de massa.", "Isótopos pertencem ao mesmo elemento."]),
      lesson("Revisão da estrutura atômica", "A aula integra a evolução dos modelos atômicos e os conceitos de partículas subatômicas, número atômico, número de massa e isótopos.", ["Comparação entre modelos.", "Cálculo de nêutrons a partir de A e Z."], ["Diferencie os modelos.", "Identifique as partículas.", "Relacione Z, A e isótopos."])
    ]
  },


  31: {
    title: "Íons, distribuição eletrônica e tabela periódica",
    goal: "Compreender a formação dos íons e a organização eletrônica dos átomos.",
    days: [
      lesson("Formação de íons", "Átomos podem perder ou ganhar elétrons e formar íons. Cátions possuem carga positiva e ânions possuem carga negativa.", ["Na → Na⁺", "Cl → Cl⁻"], ["Cátion: perde elétrons.", "Ânion: ganha elétrons."]),
      lesson("Número de elétrons", "Em átomos neutros, o número de elétrons é igual ao número de prótons. Nos íons, é necessário considerar a carga elétrica.", ["Na⁺: 11 prótons e 10 elétrons.", "Cl⁻: 17 prótons e 18 elétrons."], ["Considere a carga do íon.", "Não confunda prótons com elétrons."]),
      lesson("Camadas eletrônicas", "Os elétrons ocupam níveis de energia ao redor do núcleo. Cada nível possui uma capacidade máxima de elétrons.", ["Distribuição por camadas: 2, 8, 1."], ["Camadas representam níveis de energia.", "A distribuição depende do número de elétrons."]),
      lesson("Distribuição eletrônica", "A distribuição eletrônica descreve como os elétrons ocupam os subníveis de energia, seguindo uma ordem de preenchimento.", ["1s² 2s² 2p⁶ 3s¹."], ["Conheça s, p, d e f.", "Observe a ordem de preenchimento."]),
      lesson("Introdução à tabela periódica", "A tabela periódica organiza os elementos químicos de acordo com seus números atômicos e propriedades.", ["Sódio: número atômico 11.", "Cloro: número atômico 17."], ["Os elementos são organizados por número atômico.", "Observe linhas e colunas."]),
      lesson("Exercícios de íons e distribuição", "Resolva exercícios envolvendo formação de íons, quantidade de partículas e distribuição eletrônica.", ["Compare Na, Na⁺ e Na⁻."], ["Identifique a carga.", "Calcule os elétrons.", "Confira a distribuição."])
    ]
  },

  32: {
    title: "Famílias, períodos e propriedades periódicas",
    goal: "Interpretar a organização da tabela periódica e reconhecer tendências entre os elementos.",
    days: [
      lesson("Famílias e grupos", "As colunas da tabela periódica são chamadas de grupos ou famílias. Elementos de uma mesma família apresentam características químicas semelhantes.", ["Grupo 1: metais alcalinos.", "Grupo 18: gases nobres."], ["Grupos são colunas.", "Elementos de uma família compartilham propriedades."]),
      lesson("Períodos", "As linhas horizontais são chamadas de períodos. A posição de um elemento ajuda a compreender sua estrutura eletrônica.", ["O sódio está no terceiro período."], ["Períodos são linhas.", "A tabela possui sete períodos."]),
      lesson("Metais, ametais e gases nobres", "Os elementos podem ser classificados conforme suas propriedades físicas e químicas.", ["Ferro: metal.", "Oxigênio: ametal.", "Neônio: gás nobre."], ["Metais geralmente conduzem eletricidade.", "Ametais possuem propriedades variadas."]),
      lesson("Raio atômico", "O raio atômico representa uma medida do tamanho do átomo. Ele apresenta tendências ao longo dos períodos e grupos.", ["Compare lítio e sódio."], ["O raio tende a diminuir da esquerda para a direita.", "Tende a aumentar de cima para baixo."]),
      lesson("Eletronegatividade e energia de ionização", "Eletronegatividade indica a tendência de atrair elétrons em uma ligação. Energia de ionização é a energia necessária para retirar um elétron.", ["O flúor apresenta alta eletronegatividade."], ["As propriedades apresentam tendências periódicas.", "Observe a posição dos elementos."]),
      lesson("Revisão das propriedades periódicas", "Resolva comparações entre elementos utilizando famílias, períodos, raio atômico e propriedades periódicas.", ["Compare elementos de um mesmo grupo."], ["Leia a posição na tabela.", "Identifique a propriedade solicitada.", "Justifique a comparação."])
    ]
  },

  33: {
    title: "Ligações iônicas, covalentes e metálicas",
    goal: "Entender como os átomos se unem para formar substâncias.",
    days: [
      lesson("Por que os átomos fazem ligações?", "As ligações químicas envolvem interações entre elétrons e núcleos. Elas ajudam a explicar a formação de substâncias estáveis.", ["Formação do NaCl."], ["Ligações envolvem elétrons.", "A estrutura influencia as propriedades."]),
      lesson("Ligação iônica", "A ligação iônica ocorre pela atração entre íons de cargas opostas, geralmente após transferência de elétrons.", ["NaCl: cloreto de sódio.", "MgO: óxido de magnésio."], ["Envolve cátions e ânions.", "A atração eletrostática mantém os íons unidos."]),
      lesson("Ligação covalente", "Na ligação covalente, átomos compartilham pares de elétrons.", ["H₂O.", "O₂.", "CO₂."], ["Compartilhamento de elétrons.", "Pode envolver ligações simples, duplas ou triplas."]),
      lesson("Ligação metálica", "A ligação metálica envolve átomos metálicos organizados em uma estrutura na qual elétrons podem se movimentar.", ["Cobre, ferro e alumínio."], ["Ajuda a explicar a condução elétrica.", "Relaciona-se à maleabilidade dos metais."]),
      lesson("Representações das ligações", "Diagramas e fórmulas ajudam a representar como os átomos se ligam e como os elétrons participam dessas interações.", ["H–H.", "O=C=O."], ["Identifique os átomos.", "Observe os pares compartilhados.", "Diferencie transferência e compartilhamento."]),
      lesson("Comparação das ligações químicas", "Compare ligações iônicas, covalentes e metálicas e relacione cada uma às propriedades dos materiais.", ["NaCl, H₂O e Cu."], ["Iônica: atração entre íons.", "Covalente: compartilhamento.", "Metálica: estrutura de metais."])
    ]
  },

  34: {
    title: "Polaridade, geometria molecular e forças intermoleculares",
    goal: "Relacionar a estrutura das moléculas às suas propriedades.",
    days: [
      lesson("Geometria molecular", "A geometria molecular descreve a disposição espacial dos átomos em uma molécula. Os pares de elétrons influenciam essa organização.", ["CO₂: linear.", "H₂O: angular."], ["Observe a disposição dos átomos.", "Pares de elétrons influenciam a geometria."]),
      lesson("Geometrias mais comuns", "Moléculas podem apresentar geometrias como linear, angular, trigonal plana e tetraédrica.", ["CH₄: tetraédrica.", "BF₃: trigonal plana."], ["Identifique o átomo central.", "Conte as regiões eletrônicas."]),
      lesson("Polaridade das ligações", "Uma ligação pode ser polar quando os elétrons são atraídos de maneira desigual pelos átomos.", ["H–Cl."], ["Considere a diferença de eletronegatividade.", "Observe a distribuição de cargas."]),
      lesson("Polaridade molecular", "A polaridade de uma molécula depende das ligações e da geometria molecular.", ["H₂O é polar.", "CO₂ é apolar."], ["Considere os dipolos.", "A geometria pode provocar cancelamento."]),
      lesson("Forças intermoleculares", "As forças intermoleculares são atrações entre moléculas e influenciam propriedades como temperatura de ebulição.", ["Forças de dispersão.", "Dipolo-dipolo.", "Ligação de hidrogênio."], ["Diferencie forças intermoleculares de ligações químicas.", "Observe as características das moléculas."]),
      lesson("Aplicações e exercícios", "Relacione geometria, polaridade e forças intermoleculares a propriedades observáveis das substâncias.", ["Compare água e dióxido de carbono."], ["Identifique a geometria.", "Determine a polaridade.", "Relacione as forças às propriedades."])
    ]
  },

  35: {
    title: "Ácidos, bases, sais e óxidos",
    goal: "Reconhecer funções inorgânicas e suas características fundamentais.",
    days: [
      lesson("Introdução às funções inorgânicas", "As funções inorgânicas agrupam substâncias com características químicas semelhantes. Vamos estudar ácidos, bases, sais e óxidos.", ["HCl, NaOH, NaCl e CO₂."], ["Reconheça as quatro funções.", "Observe as fórmulas químicas."]),
      lesson("Ácidos", "Pela definição de Arrhenius, ácidos são substâncias que, em água, aumentam a concentração de íons H⁺.", ["HCl.", "H₂SO₄."], ["Conheça a definição de Arrhenius.", "Observe a ionização em água."]),
      lesson("Bases", "Pela definição de Arrhenius, bases são substâncias que, em água, liberam íons OH⁻.", ["NaOH.", "Ca(OH)₂."], ["Reconheça o grupo OH.", "Observe a dissociação em água."]),
      lesson("Sais", "Sais são compostos iônicos que podem ser formados em reações de neutralização entre ácidos e bases.", ["NaCl.", "CaCO₃."], ["Sais são compostos iônicos.", "Estude sua formação."]),
      lesson("Óxidos", "Óxidos são compostos binários nos quais o oxigênio está ligado a outro elemento químico.", ["CO₂.", "CaO.", "Fe₂O₃."], ["Identifique o oxigênio.", "Diferencie óxidos de outras funções."]),
      lesson("Neutralização e revisão", "A neutralização ocorre quando um ácido reage com uma base, formando geralmente sal e água.", ["HCl + NaOH → NaCl + H₂O."], ["Reconheça ácido e base.", "Identifique sal e água.", "Revise as quatro funções."])
    ]
  },

  36: {
    title: "Revisão geral — Química 1",
    goal: "Consolidar os conteúdos de Química estudados entre as semanas 28 e 35.",
    days: [
      lesson("Matéria e misturas", "Revise propriedades da matéria, estados físicos, mudanças de estado, substâncias puras e misturas.", ["Água pura e água com sal."], ["Diferencie substância e mistura.", "Reconheça mudanças físicas."]),
      lesson("Separação de misturas", "Revise métodos de separação e escolha o procedimento adequado para cada mistura.", ["Filtração.", "Decantação.", "Destilação."], ["Considere as propriedades dos componentes.", "Escolha o método adequado."]),
      lesson("Estrutura atômica e tabela periódica", "Revise modelos atômicos, partículas subatômicas, íons, distribuição eletrônica e propriedades periódicas.", ["Compare Na e Na⁺."], ["Número atômico.", "Número de massa.", "Distribuição eletrônica."]),
      lesson("Ligações e moléculas", "Revise ligações iônicas, covalentes e metálicas, além de geometria e polaridade molecular.", ["NaCl, H₂O e CO₂."], ["Diferencie os tipos de ligação.", "Analise a geometria molecular."]),
      lesson("Funções inorgânicas", "Revise ácidos, bases, sais e óxidos, reconhecendo suas fórmulas e características.", ["HCl, NaOH, NaCl e CaO."], ["Identifique cada função.", "Revise neutralização."]),
      lesson("Avaliação e análise de erros", "Resolva questões integradas de Química 1 e analise os erros para identificar os conteúdos que precisam de reforço.", ["Questões de classificação e interpretação."], ["Registre os erros.", "Revise os conceitos mais difíceis.", "Prepare-se para História 1."])
    ]
  },

  37: {
    title: "Mesopotâmia, Egito, Hebreus, Fenícios e Persas",
    goal: "Compreender as primeiras civilizações da Antiguidade Oriental e suas contribuições históricas.",
    days: [
      lesson("O surgimento das primeiras civilizações", "A formação de sociedades complexas esteve relacionada à agricultura, ao crescimento populacional e à organização do trabalho. Rios tiveram papel importante nesse processo.", ["Tigres e Eufrates.", "Rio Nilo."], ["Agricultura e sedentarização.", "Organização política e social."]),
      lesson("Mesopotâmia", "A Mesopotâmia abrigou diferentes povos, como sumérios, acádios, babilônios e assírios. A região desenvolveu cidades, escrita e códigos jurídicos.", ["Escrita cuneiforme.", "Código de Hamurábi."], ["Localização entre rios.", "Cidades-Estado.", "Diversidade de povos."]),
      lesson("Egito Antigo", "A civilização egípcia desenvolveu-se às margens do Nilo, com uma organização política centralizada e forte presença religiosa.", ["Faraó.", "Pirâmides.", "Hieróglifos."], ["Importância do Nilo.", "Sociedade hierarquizada.", "Religião e poder."]),
      lesson("Hebreus", "Os hebreus desenvolveram uma tradição religiosa monoteísta que influenciou profundamente a história de outras religiões.", ["Monoteísmo.", "Tradições bíblicas."], ["Organização dos antigos hebreus.", "Religião e identidade cultural."]),
      lesson("Fenícios e Persas", "Fenícios destacaram-se pelo comércio marítimo e pela difusão de um alfabeto. Persas organizaram um vasto império com administração territorial.", ["Alfabeto fenício.", "Estradas e satrapias persas."], ["Comércio e navegação.", "Administração imperial."]),
      lesson("Comparação das civilizações", "Compare as civilizações estudadas considerando território, economia, política, religião e contribuições culturais.", ["Quadro comparativo entre Egito e Mesopotâmia."], ["Localize cada civilização.", "Identifique suas características.", "Relacione suas contribuições."])
    ]
  },

  38: {
    title: "Grécia, Roma, escravidão antiga e cultura clássica",
    goal: "Analisar as sociedades grega e romana e compreender suas contribuições e desigualdades.",
    days: [
      lesson("Grécia Antiga: território e organização", "A Grécia Antiga era formada por diferentes comunidades e cidades-Estado, com características políticas e sociais próprias.", ["Atenas e Esparta."], ["Pólis.", "Diversidade regional.", "Organização social."]),
      lesson("Atenas e Esparta", "Atenas desenvolveu experiências de democracia direta restrita aos cidadãos. Esparta organizou-se em torno de uma sociedade militarizada.", ["Assembleia ateniense.", "Educação espartana."], ["Compare os sistemas políticos.", "Observe quem tinha direitos."]),
      lesson("Cultura grega", "A cultura grega deixou contribuições importantes para a filosofia, o teatro, a arquitetura, a ciência e os esportes.", ["Sócrates, Platão e Aristóteles.", "Jogos Olímpicos antigos."], ["Filosofia.", "Teatro.", "Arte e pensamento."]),
      lesson("Roma: Monarquia e República", "Roma passou por diferentes formas de governo, incluindo a Monarquia e a República, período marcado por conflitos sociais e expansão territorial.", ["Senado romano.", "Conflitos entre patrícios e plebeus."], ["Instituições políticas.", "Expansão de Roma."]),
      lesson("Império Romano e escravidão antiga", "O Império Romano expandiu-se pelo Mediterrâneo e utilizou amplamente o trabalho escravizado. Sua sociedade apresentava profundas desigualdades.", ["Expansão territorial.", "Trabalho escravizado."], ["Economia e conquistas.", "Hierarquias sociais.", "Crises do Império."]),
      lesson("Legado clássico e revisão", "Analise as heranças culturais de gregos e romanos e as diferenças entre suas instituições e sociedades.", ["Direito romano.", "Filosofia grega."], ["Compare Grécia e Roma.", "Reconheça permanências históricas.", "Questione as desigualdades."])
    ]
  },

  39: {
    title: "Cristianismo, Império Bizantino e formação do mundo medieval",
    goal: "Entender transformações do mundo romano e a formação de sociedades medievais.",
    days: [
      lesson("Crise do Império Romano", "O Império Romano enfrentou dificuldades políticas, econômicas e militares que contribuíram para sua divisão e transformação.", ["Divisão do Império em Ocidente e Oriente."], ["Crise política.", "Transformações econômicas.", "Pressões externas."]),
      lesson("Origem do cristianismo", "O cristianismo surgiu no contexto do domínio romano na Judeia e se difundiu por diferentes regiões do Império.", ["Primeiras comunidades cristãs."], ["Contexto histórico.", "Difusão religiosa.", "Relações com o poder romano."]),
      lesson("Cristianismo e Império Romano", "A relação entre cristianismo e poder imperial mudou ao longo do tempo, passando de períodos de perseguição à adoção da religião pelo Estado.", ["Edito de Milão.", "Cristianismo como religião oficial."], ["Mudanças na política religiosa.", "Influência institucional."]),
      lesson("Império Bizantino", "O Império Bizantino, com capital em Constantinopla, preservou tradições romanas e desenvolveu uma cultura própria.", ["Justiniano.", "Código de Justiniano."], ["Constantinopla.", "Comércio e administração.", "Herança romana."]),
      lesson("Transformações no Ocidente", "A fragmentação do poder romano no Ocidente e a formação de reinos germânicos contribuíram para novas estruturas políticas e sociais.", ["Reinos germânicos."], ["Migrações e invasões.", "Ruralização.", "Mudanças políticas."]),
      lesson("Formação do mundo medieval", "Revise os processos que contribuíram para a formação da sociedade medieval, considerando continuidades e mudanças.", ["Comparação entre mundo romano e medieval."], ["Não trate a história como uma ruptura instantânea.", "Observe continuidades culturais.", "Relacione política e economia."])
    ]
  },

  40: {
    title: "Islamismo, feudalismo, Igreja e sociedade medieval",
    goal: "Compreender a expansão do islamismo e as estruturas sociais, políticas e religiosas do mundo medieval.",
    days: [
      lesson("Arábia antes do islamismo", "Antes do surgimento do islamismo, a Península Arábica reunia diferentes comunidades, rotas comerciais e práticas religiosas.", ["Meca.", "Rotas comerciais."], ["Localização geográfica.", "Comércio e organização social."]),
      lesson("Origem do islamismo", "O islamismo surgiu no século VII, associado à pregação de Maomé. O Alcorão é seu livro sagrado.", ["Maomé.", "Alcorão.", "Meca e Medina."], ["Monoteísmo.", "Contexto de surgimento.", "Práticas religiosas."]),
      lesson("Expansão islâmica", "Após o surgimento do islamismo, diferentes califados expandiram seus territórios e contribuíram para intercâmbios culturais e científicos.", ["Califados.", "Centros de conhecimento."], ["Expansão territorial.", "Diversidade cultural.", "Produção científica."]),
      lesson("Feudalismo", "O feudalismo foi um conjunto de relações sociais, econômicas e políticas desenvolvido em partes da Europa medieval, marcado pela importância da terra e de vínculos de dependência.", ["Senhorio.", "Servidão."], ["Economia agrária.", "Poder descentralizado.", "Relações de dependência."]),
      lesson("Igreja e sociedade medieval", "A Igreja Católica exerceu influência religiosa, cultural, política e educacional na Europa medieval.", ["Mosteiros.", "Clero.", "Cultura escrita."], ["Influência religiosa.", "Organização social.", "Educação e cultura."]),
      lesson("Revisão da sociedade medieval", "Relacione islamismo, feudalismo e Igreja, evitando tratar o mundo medieval como uma sociedade única e sem transformações.", ["Compare Europa feudal e sociedades islâmicas."], ["Reconheça diferenças regionais.", "Identifique relações de poder.", "Revise economia, religião e cultura."])
    ]
  },


  41: {
    title: "Cruzadas, comércio e crise do feudalismo",
    goal: "Compreender as transformações econômicas, sociais e religiosas da Europa medieval.",
    days: [
      lesson("A Europa medieval antes das Cruzadas", "A sociedade europeia medieval era marcada pela importância da agricultura, das relações feudais e da influência da Igreja.", ["Feudos e senhorios."], ["Organização social.", "Economia agrária.", "Influência religiosa."]),
      lesson("As Cruzadas", "As Cruzadas foram expedições militares organizadas por cristãos da Europa ocidental, com objetivos religiosos, políticos e econômicos.", ["Primeira Cruzada."], ["Contexto religioso.", "Interesses políticos.", "Consequências das expedições."]),
      lesson("Consequências das Cruzadas", "As Cruzadas contribuíram para intensificar contatos entre diferentes regiões, embora seus resultados tenham sido variados e complexos.", ["Contato entre europeus e sociedades do Oriente."], ["Intercâmbios culturais.", "Conflitos.", "Consequências econômicas."]),
      lesson("Renascimento comercial e urbano", "O crescimento das atividades comerciais e das cidades transformou a economia europeia e ampliou a importância dos grupos ligados ao comércio.", ["Feiras medievais.", "Rotas comerciais."], ["Crescimento urbano.", "Comércio de longa distância.", "Burguesia."]),
      lesson("Crise do feudalismo", "Mudanças econômicas, conflitos, epidemias e transformações sociais contribuíram para enfraquecer estruturas feudais em diversas regiões europeias.", ["Peste Negra.", "Revoltas camponesas."], ["Crises demográficas.", "Mudanças no trabalho.", "Transformações sociais."]),
      lesson("Revisão das transformações medievais", "Relacione Cruzadas, comércio, crescimento urbano e crise do feudalismo.", ["Linha do tempo das transformações medievais."], ["Identifique causas e consequências.", "Evite explicações simplistas.", "Relacione os processos históricos."])
    ]
  },

  42: {
    title: "Renascimento, Reforma Protestante, Contrarreforma e formação dos Estados nacionais",
    goal: "Analisar as transformações culturais, religiosas e políticas da Europa na transição para a Idade Moderna.",
    days: [
      lesson("Contexto do Renascimento", "O Renascimento desenvolveu-se em diferentes regiões europeias, valorizando novas formas de investigação, produção artística e reflexão sobre o ser humano.", ["Cidades italianas."], ["Contexto urbano e comercial.", "Mecenato.", "Transformações culturais."]),
      lesson("Humanismo renascentista", "O Humanismo valorizou o estudo dos textos clássicos, a investigação e a capacidade humana de produzir conhecimento.", ["Estudos da Antiguidade clássica."], ["Valorização do conhecimento.", "Pensamento crítico.", "Retomada de referências clássicas."]),
      lesson("Arte e ciência no Renascimento", "Artistas e estudiosos desenvolveram novas técnicas e métodos de observação, transformando a produção artística e científica.", ["Leonardo da Vinci.", "Michelangelo."], ["Perspectiva.", "Observação da natureza.", "Inovações artísticas."]),
      lesson("Reforma Protestante", "A Reforma Protestante reuniu movimentos religiosos que questionaram práticas e estruturas da Igreja Católica no século XVI.", ["Martinho Lutero."], ["Contexto religioso e político.", "Críticas à Igreja.", "Diversidade de movimentos reformistas."]),
      lesson("Contrarreforma", "A Igreja Católica promoveu reformas internas e ações de reação à expansão protestante, buscando reafirmar sua influência.", ["Concílio de Trento.", "Companhia de Jesus."], ["Reformas católicas.", "Educação religiosa.", "Conflitos confessionais."]),
      lesson("Formação dos Estados nacionais", "A centralização política fortaleceu monarquias em diferentes regiões europeias, contribuindo para a formação dos Estados nacionais.", ["Centralização do poder monárquico."], ["Declínio de poderes locais em algumas regiões.", "Alianças entre monarquia e grupos sociais.", "Formação dos Estados modernos."])
    ]
  },

  43: {
    title: "Absolutismo, mercantilismo, expansão marítima e colonização",
    goal: "Compreender a centralização monárquica e a expansão europeia entre os séculos XV e XVIII.",
    days: [
      lesson("Absolutismo monárquico", "O absolutismo foi uma forma de organização política em que monarcas concentravam amplos poderes, embora existissem limites e diferenças entre os reinos.", ["Monarquia francesa."], ["Centralização política.", "Legitimação do poder.", "Diferenças entre monarquias."]),
      lesson("Pensadores do absolutismo", "Pensadores políticos discutiram a origem, os limites e a organização do poder dos governantes.", ["Thomas Hobbes.", "Jacques Bossuet."], ["Direito divino.", "Contrato social em Hobbes.", "Justificativas do poder monárquico."]),
      lesson("Mercantilismo", "O mercantilismo reuniu práticas econômicas adotadas por Estados europeus, associadas à intervenção estatal e à acumulação de riquezas.", ["Metalismo.", "Protecionismo.", "Balança comercial."], ["Intervenção do Estado.", "Acumulação de metais.", "Controle comercial."]),
      lesson("Expansão marítima europeia", "A expansão marítima envolveu interesses comerciais, políticos, religiosos e tecnológicos, conectando regiões antes menos integradas.", ["Portugal e Espanha."], ["Navegação.", "Rotas comerciais.", "Interesses europeus."]),
      lesson("Colonização e exploração", "A expansão europeia levou à conquista e à colonização de territórios, com exploração de recursos e imposição de relações de poder.", ["Colonização das Américas."], ["Dominação territorial.", "Exploração econômica.", "Violência e resistência."]),
      lesson("Revisão da expansão europeia", "Relacione absolutismo, mercantilismo, expansão marítima e colonização.", ["Mapa das rotas marítimas europeias."], ["Identifique interesses envolvidos.", "Relacione economia e política.", "Reconheça consequências para diferentes povos."])
    ]
  },

  44: {
    title: "Povos indígenas americanos, Maias, Astecas, Incas e Brasil Colônia — início",
    goal: "Reconhecer a diversidade das sociedades americanas e compreender o início da colonização portuguesa.",
    days: [
      lesson("Diversidade dos povos indígenas americanos", "Antes da chegada dos europeus, as Américas eram habitadas por numerosos povos com diferentes línguas, organizações sociais e formas de vida.", ["Diversidade cultural indígena."], ["Não existia uma única sociedade indígena.", "Observe diferenças regionais.", "Reconheça conhecimentos próprios."]),
      lesson("Civilização Maia", "Os maias desenvolveram cidades, sistemas de escrita, conhecimentos matemáticos e astronômicos em diferentes períodos históricos.", ["Calendários maias.", "Cidades-Estado."], ["Organização política.", "Conhecimentos científicos.", "Produção cultural."]),
      lesson("Civilização Asteca", "Os astecas organizaram um poderoso domínio político na região central do atual México, com capital em Tenochtitlán.", ["Tenochtitlán."], ["Tributos.", "Agricultura.", "Organização política e militar."]),
      lesson("Civilização Inca", "Os incas construíram um vasto império na região andina, com sistemas de administração, estradas e agricultura adaptada ao relevo.", ["Estradas incas.", "Terraços agrícolas."], ["Administração imperial.", "Adaptação ambiental.", "Organização do trabalho."]),
      lesson("Chegada portuguesa ao território brasileiro", "A chegada dos portugueses em 1500 marcou o início de um processo de conquista e colonização que transformou profundamente as sociedades existentes.", ["Expedição de Pedro Álvares Cabral."], ["Presença indígena anterior.", "Interesses portugueses.", "Início da colonização."]),
      lesson("Primeiros contatos e colonização", "Os primeiros contatos envolveram relações de troca, conflitos e processos de dominação, com consequências profundas para os povos indígenas.", ["Exploração do pau-brasil."], ["Resistência indígena.", "Exploração econômica.", "Transformações sociais e culturais."])
    ]
  },

  45: {
    title: "Revisão geral — História 1",
    goal: "Consolidar os conteúdos de História estudados entre as semanas 37 e 44.",
    days: [
      lesson("Civilizações da Antiguidade Oriental", "Revise Mesopotâmia, Egito, hebreus, fenícios e persas, considerando organização política, economia e cultura.", ["Quadro comparativo das civilizações."], ["Localização.", "Religião.", "Contribuições culturais."]),
      lesson("Grécia e Roma", "Revise a organização política e social das sociedades grega e romana, além de suas contribuições culturais.", ["Atenas, Esparta e República Romana."], ["Democracia antiga.", "Instituições romanas.", "Escravidão antiga."]),
      lesson("Cristianismo e mundo medieval", "Revise a crise do Império Romano, a expansão do cristianismo, o Império Bizantino e a formação da sociedade medieval.", ["Linha do tempo histórica."], ["Continuidades e rupturas.", "Religião e política.", "Transformações sociais."]),
      lesson("Islamismo e feudalismo", "Revise o surgimento e a expansão do islamismo, as relações feudais e a influência da Igreja.", ["Sociedades islâmicas e Europa feudal."], ["Diversidade histórica.", "Economia medieval.", "Influência religiosa."]),
      lesson("Transformações da Idade Média à Idade Moderna", "Revise Cruzadas, comércio, crise do feudalismo, Renascimento, Reformas religiosas e formação dos Estados nacionais.", ["Linha do tempo dos séculos medievais e modernos."], ["Causas e consequências.", "Transformações econômicas.", "Mudanças culturais e políticas."]),
      lesson("Avaliação integrada de História 1", "Resolva questões integradas sobre as civilizações antigas, o mundo medieval e a transição para a Idade Moderna.", ["Questões de interpretação histórica."], ["Analise fontes.", "Identifique contextos.", "Revise os erros."])
    ]
  },

  46: {
    title: "Cartografia, mapas, escalas, orientação e coordenadas",
    goal: "Interpretar mapas e utilizar os principais instrumentos de localização geográfica.",
    days: [
      lesson("O que é cartografia?", "A cartografia é o conjunto de conhecimentos e técnicas utilizados para representar espaços geográficos.", ["Mapa político e mapa físico."], ["Representação do espaço.", "Finalidades dos mapas.", "Leitura cartográfica."]),
      lesson("Elementos dos mapas", "Mapas utilizam elementos como título, legenda, escala, orientação e fonte para comunicar informações.", ["Mapa com legenda e escala."], ["Identifique os elementos.", "Interprete símbolos.", "Observe a fonte."]),
      lesson("Orientação e pontos cardeais", "A orientação permite identificar direções e localizar lugares na superfície terrestre.", ["Norte, sul, leste e oeste."], ["Pontos cardeais.", "Pontos colaterais.", "Rosa dos ventos."]),
      lesson("Escala cartográfica", "A escala representa a relação entre uma distância no mapa e a distância correspondente na realidade.", ["Escala 1:100.000."], ["Escala numérica.", "Escala gráfica.", "Conversão de unidades."]),
      lesson("Coordenadas geográficas", "Latitude e longitude permitem localizar pontos na superfície terrestre por meio de linhas imaginárias.", ["Equador e meridiano de Greenwich."], ["Latitude é medida a partir do Equador.", "Longitude é medida a partir de Greenwich."]),
      lesson("Exercícios de localização", "Interprete mapas, calcule distâncias simples e localize pontos utilizando coordenadas geográficas.", ["Localização por latitude e longitude."], ["Leia a escala.", "Observe hemisférios.", "Confira as coordenadas."])
    ]
  },

  47: {
    title: "Projeções cartográficas, fusos horários e sensoriamento remoto",
    goal: "Compreender as formas de representação da Terra e os instrumentos de observação geográfica.",
    days: [
      lesson("Por que existem projeções cartográficas?", "Representar a superfície curva da Terra em uma superfície plana exige transformações que provocam diferentes tipos de distorção.", ["Globo terrestre e mapa-múndi."], ["Toda projeção apresenta distorções.", "Observe o objetivo do mapa."]),
      lesson("Projeção cilíndrica", "A projeção cilíndrica utiliza uma superfície imaginária cilíndrica para representar a Terra.", ["Projeção de Mercator."], ["Observe as distorções nas áreas próximas aos polos.", "Analise a finalidade da representação."]),
      lesson("Projeções cônicas e azimutais", "Projeções cônicas e azimutais são utilizadas em diferentes situações de representação, dependendo da região e do objetivo.", ["Projeção cônica.", "Projeção azimutal."], ["Compare as formas de projeção.", "Identifique suas aplicações."]),
      lesson("Fusos horários", "A divisão em fusos horários organiza a contagem das horas de acordo com a longitude e a rotação terrestre.", ["Referência do meridiano de Greenwich."], ["A Terra gira de oeste para leste.", "Diferenças de longitude influenciam os horários."]),
      lesson("Sensoriamento remoto", "O sensoriamento remoto permite obter informações sobre a superfície terrestre sem contato direto com o objeto observado.", ["Imagens de satélite."], ["Sensores.", "Satélites.", "Aplicações ambientais e urbanas."]),
      lesson("Cartografia digital e revisão", "Mapas digitais e sistemas de informação geográfica ajudam a analisar dados espaciais e representar fenômenos.", ["Mapas digitais e imagens de satélite."], ["Interprete camadas de informação.", "Compare projeções.", "Revise fusos horários."])
    ]
  },

  48: {
    title: "Estrutura da Terra, rochas e placas tectônicas",
    goal: "Compreender a estrutura interna da Terra e os processos geológicos fundamentais.",
    days: [
      lesson("A estrutura interna da Terra", "A Terra possui camadas internas com diferentes composições e características físicas.", ["Crosta, manto e núcleo."], ["Diferencie as camadas.", "Observe composição e estado físico."]),
      lesson("Crosta e litosfera", "A crosta terrestre e a parte superior rígida do manto formam a litosfera, dividida em placas tectônicas.", ["Placas da litosfera."], ["Litosfera não é sinônimo de crosta.", "Observe a divisão em placas."]),
      lesson("Minerais e rochas", "Minerais são materiais naturais com composição e estrutura características. Rochas são formadas por um ou mais minerais.", ["Quartzo e granito."], ["Diferencie mineral e rocha.", "Observe composição."]),
      lesson("Tipos de rochas", "As rochas são classificadas em ígneas, sedimentares e metamórficas conforme sua formação.", ["Granito.", "Arenito.", "Mármore."], ["Processos de formação.", "Ciclo das rochas."]),
      lesson("Placas tectônicas", "A litosfera é dividida em placas que se movimentam lentamente sobre materiais mais deformáveis do manto superior.", ["Placa Sul-Americana."], ["Movimento das placas.", "Limites tectônicos.", "Dinâmica interna da Terra."]),
      lesson("Limites das placas", "Os limites entre placas podem ser convergentes, divergentes ou transformantes, produzindo diferentes fenômenos geológicos.", ["Colisão, afastamento e deslizamento lateral."], ["Convergente.", "Divergente.", "Transformante."])
    ]
  },

  49: {
    title: "Terremotos, vulcanismo, relevo e formação do relevo",
    goal: "Explicar fenômenos geológicos e compreender os processos que transformam a superfície terrestre.",
    days: [
      lesson("Terremotos", "Terremotos são vibrações da superfície terrestre relacionadas à liberação de energia acumulada no interior da Terra.", ["Movimento ao longo de falhas geológicas."], ["Hipocentro.", "Epicentro.", "Ondas sísmicas."]),
      lesson("Vulcanismo", "O vulcanismo envolve a ascensão e a saída de magma, gases e outros materiais do interior terrestre.", ["Vulcões e derrames de lava."], ["Magma e lava.", "Atividade vulcânica.", "Relação com placas tectônicas."]),
      lesson("Formas de relevo", "O relevo apresenta diferentes formas, como planaltos, planícies, depressões e montanhas.", ["Planaltos e planícies."], ["Reconheça as formas.", "Observe altitude e processos de formação."]),
      lesson("Agentes internos do relevo", "Processos internos da Terra, como tectonismo e vulcanismo, contribuem para a formação e transformação do relevo.", ["Formação de cadeias montanhosas."], ["Forças internas.", "Movimentos tectônicos."]),
      lesson("Agentes externos do relevo", "Intemperismo, erosão, transporte e sedimentação transformam a superfície terrestre.", ["Erosão fluvial."], ["Intemperismo.", "Erosão.", "Sedimentação."]),
      lesson("Revisão dos processos geológicos", "Relacione terremotos, vulcanismo, tectonismo e agentes externos à formação do relevo.", ["Comparação entre processos internos e externos."], ["Identifique os agentes.", "Explique os processos.", "Use exemplos geográficos."])
    ]
  },

  50: {
    title: "Clima, elementos climáticos e massas de ar",
    goal: "Diferenciar tempo e clima e compreender os fatores que influenciam as condições atmosféricas.",
    days: [
      lesson("Tempo atmosférico e clima", "Tempo atmosférico descreve as condições momentâneas da atmosfera. Clima representa padrões observados ao longo de períodos prolongados.", ["Previsão do tempo e médias climáticas."], ["Diferencie tempo e clima.", "Considere escalas temporais."]),
      lesson("Elementos do clima", "Temperatura, umidade, pressão atmosférica, ventos e precipitação são elementos utilizados para caracterizar o clima.", ["Temperatura e umidade do ar."], ["Identifique cada elemento.", "Observe como podem variar."]),
      lesson("Fatores climáticos", "Latitude, altitude, relevo, maritimidade, continentalidade e vegetação influenciam as características climáticas.", ["Diferenças de temperatura entre regiões."], ["Diferencie elementos e fatores.", "Relacione localização e clima."]),
      lesson("Massas de ar", "Massas de ar são grandes porções da atmosfera com características de temperatura e umidade adquiridas em suas regiões de origem.", ["Massas de ar equatoriais e polares."], ["Observe origem e características.", "Entenda seus deslocamentos."]),
      lesson("Frentes e fenômenos atmosféricos", "O encontro de massas de ar pode formar frentes e provocar mudanças nas condições do tempo.", ["Frente fria."], ["Observe o encontro das massas.", "Relacione frentes e mudanças meteorológicas."]),
      lesson("Climas do Brasil e revisão", "Analise características climáticas do Brasil e relacione temperatura, chuvas, massas de ar e fatores geográficos.", ["Climas equatorial, tropical e subtropical."], ["Identifique padrões regionais.", "Relacione clima e localização.", "Interprete mapas climáticos."])
    ]
  },


// =====================================================
// SEMANAS 51–65 — MATÉRIAS
// =====================================================

51: {
  title: "Vegetação, biomas, solos e hidrografia",
  goal: "Compreender a distribuição da vegetação e dos biomas, as características dos solos e a importância dos recursos hídricos.",
  days: [
    lesson("O que é vegetação e como ela se distribui",
      "A vegetação é o conjunto de plantas que ocupa determinada região. Sua distribuição depende de fatores como clima, disponibilidade de água, tipo de solo, relevo e luminosidade. Regiões quentes e úmidas podem apresentar vegetação densa, enquanto áreas secas apresentam plantas adaptadas à falta de água.",
      ["Florestas tropicais possuem vegetação geralmente densa.", "Vegetações desérticas apresentam adaptações à escassez de água."],
      ["A vegetação depende de fatores naturais.", "Clima e disponibilidade de água são fundamentais."]),
    lesson("Biomas brasileiros",
      "Biomas são grandes conjuntos de ecossistemas com características semelhantes de clima, vegetação e fauna. O Brasil possui seis grandes biomas terrestres: Amazônia, Cerrado, Caatinga, Mata Atlântica, Pantanal e Pampa. Cada um apresenta biodiversidade e condições ambientais próprias.",
      ["A Amazônia apresenta extensas florestas tropicais.", "A Caatinga possui espécies adaptadas à seca.", "O Cerrado apresenta vegetação variada e árvores frequentemente retorcidas."],
      ["Bioma não é sinônimo de vegetação.", "O Brasil possui seis grandes biomas terrestres."]),
    lesson("Características dos solos",
      "O solo é formado pela transformação das rochas e pela decomposição de matéria orgânica ao longo do tempo. Sua composição pode incluir minerais, água, ar e organismos vivos. A fertilidade depende de características físicas, químicas e biológicas.",
      ["Solos argilosos apresentam partículas menores.", "Solos arenosos possuem partículas maiores e geralmente permitem maior infiltração de água."],
      ["O solo é um recurso natural essencial.", "A formação do solo é um processo lento."]),
    lesson("Degradação e conservação dos solos",
      "A erosão é o desgaste e transporte de partículas do solo pela água ou pelo vento. O desmatamento, o uso inadequado da terra e determinadas práticas agrícolas podem intensificar esse processo. Técnicas de conservação ajudam a manter a fertilidade e reduzir perdas.",
      ["O plantio em curvas de nível reduz o escoamento superficial.", "A cobertura vegetal protege o solo contra a erosão."],
      ["Erosão pode remover a camada superficial fértil.", "Conservação exige manejo adequado."]),
    lesson("Hidrografia e ciclo da água",
      "A hidrografia estuda as águas de uma região. Rios, lagos, aquíferos e oceanos fazem parte dos recursos hídricos. O ciclo da água envolve evaporação, condensação, precipitação, infiltração e escoamento, mantendo a circulação da água no planeta.",
      ["A evaporação transforma água líquida em vapor.", "A precipitação pode ocorrer como chuva, neve ou granizo."],
      ["O ciclo da água é contínuo.", "Águas superficiais e subterrâneas são importantes."]),
    lesson("Bacias hidrográficas e gestão da água",
      "Uma bacia hidrográfica é uma área drenada por um rio principal e seus afluentes. A gestão dos recursos hídricos procura equilibrar abastecimento, agricultura, indústria, geração de energia e conservação ambiental.",
      ["O rio principal recebe água de seus afluentes.", "O desmatamento de margens pode prejudicar os cursos d'água."],
      ["Bacias organizam a drenagem de uma região.", "Água potável exige proteção e tratamento."])
  ]
},

52: {
  title: "População, natalidade, mortalidade, crescimento populacional e pirâmides etárias",
  goal: "Interpretar os principais indicadores demográficos e compreender a composição e a evolução da população.",
  days: [
    lesson("Introdução à demografia",
      "Demografia é o estudo das populações humanas. Analisa tamanho, distribuição, composição, crescimento e mudanças populacionais. Os dados demográficos ajudam governos e pesquisadores a compreender necessidades sociais e planejar serviços.",
      ["Um censo coleta informações sobre a população.", "Dados demográficos ajudam a planejar escolas e hospitais."],
      ["Demografia estuda populações humanas.", "Censos são fontes importantes de informação."]),
    lesson("Natalidade e fecundidade",
      "A taxa de natalidade relaciona o número de nascimentos à população de uma área em determinado período. A fecundidade considera o número médio de filhos por mulher. Esses indicadores ajudam a compreender mudanças na composição populacional.",
      ["Uma queda na fecundidade pode reduzir o ritmo de crescimento populacional.", "A taxa de natalidade costuma ser expressa por mil habitantes."],
      ["Natalidade e fecundidade são indicadores diferentes.", "Condições sociais e econômicas influenciam esses indicadores."]),
    lesson("Mortalidade e expectativa de vida",
      "A taxa de mortalidade relaciona o número de mortes à população em determinado período. A mortalidade infantil considera os óbitos de crianças menores de um ano. A expectativa de vida representa uma estimativa de quantos anos uma pessoa pode viver, considerando padrões de mortalidade.",
      ["Saneamento e vacinação podem contribuir para reduzir a mortalidade.", "A expectativa de vida é influenciada pelas condições de saúde e de vida."],
      ["Mortalidade infantil é um indicador social importante.", "Expectativa de vida não prevê exatamente quanto cada pessoa viverá."]),
    lesson("Crescimento vegetativo e crescimento populacional",
      "O crescimento vegetativo corresponde à diferença entre nascimentos e mortes. O crescimento populacional também considera os movimentos migratórios. Uma população pode crescer mesmo quando o número de nascimentos não supera muito o de mortes, caso receba muitos imigrantes.",
      ["Crescimento vegetativo = natalidade menos mortalidade.", "Migração pode aumentar ou diminuir a população de um território."],
      ["Migração interfere no crescimento populacional.", "Crescimento vegetativo não inclui migração."]),
    lesson("Pirâmides etárias",
      "A pirâmide etária representa a distribuição da população por idade e sexo. A base mostra os grupos mais jovens, o meio representa as faixas adultas e o topo apresenta os grupos mais idosos. Seu formato ajuda a identificar tendências demográficas.",
      ["Uma base larga pode indicar elevada proporção de jovens.", "Um topo mais largo pode indicar maior participação de idosos."],
      ["Pirâmides etárias representam estrutura populacional.", "O formato muda conforme a história demográfica."]),
    lesson("Transição demográfica",
      "A transição demográfica descreve mudanças nas taxas de natalidade e mortalidade ao longo do desenvolvimento de uma sociedade. Em diferentes etapas, a população pode passar de crescimento acelerado para crescimento mais lento e envelhecimento.",
      ["A redução da mortalidade pode ocorrer antes da redução da natalidade.", "O envelhecimento populacional aumenta a importância de políticas para idosos."],
      ["A transição demográfica ocorre ao longo do tempo.", "Não acontece exatamente da mesma maneira em todos os países."])
  ]
},

53: {
  title: "Migrações, urbanização e estrutura etária",
  goal: "Entender os deslocamentos populacionais, o crescimento das cidades e seus efeitos sociais e territoriais.",
  days: [
    lesson("O que são migrações",
      "Migração é o deslocamento de pessoas entre lugares, podendo ocorrer dentro de um país ou entre países. A pessoa que sai de um local é emigrante em relação à origem e imigrante em relação ao destino.",
      ["Uma pessoa que sai do Brasil para morar em Portugal emigra do Brasil.", "A mesma pessoa imigra em Portugal."],
      ["Migração pode ser interna ou internacional.", "Emigração e imigração dependem do ponto de referência."]),
    lesson("Tipos e motivos das migrações",
      "Os deslocamentos podem ocorrer por motivos econômicos, familiares, ambientais, políticos ou relacionados a conflitos. Também podem ser temporários ou permanentes, voluntários ou forçados.",
      ["A busca por trabalho pode motivar uma migração.", "Desastres ambientais podem provocar deslocamentos forçados."],
      ["Existem diferentes motivos migratórios.", "Nem toda migração é voluntária."]),
    lesson("Migrações no Brasil",
      "A história brasileira apresenta movimentos populacionais internos importantes, como deslocamentos do campo para a cidade e migrações entre regiões. Esses movimentos estão relacionados a oportunidades de trabalho, mudanças econômicas e condições de vida.",
      ["O êxodo rural é a migração do campo para a cidade.", "A industrialização contribuiu para mudanças na distribuição populacional."],
      ["Migrações transformam regiões de origem e destino.", "O êxodo rural é um tipo de migração interna."]),
    lesson("Urbanização e crescimento das cidades",
      "Urbanização é o aumento da proporção da população que vive em áreas urbanas. Pode ocorrer por crescimento natural da população urbana e por migrações. A industrialização e a expansão dos serviços contribuíram para a urbanização brasileira.",
      ["Uma cidade pode crescer por receber novos moradores.", "A urbanização envolve mudanças econômicas e sociais."],
      ["Urbanização não significa apenas crescimento físico das cidades.", "A proporção urbana da população é um indicador importante."]),
    lesson("Problemas e desafios urbanos",
      "O crescimento urbano rápido e sem planejamento pode ampliar problemas relacionados à moradia, mobilidade, saneamento, poluição e desigualdade. O planejamento urbano procura organizar o uso do espaço e melhorar a qualidade de vida.",
      ["Transporte público eficiente pode reduzir problemas de mobilidade.", "Saneamento básico é essencial à saúde pública."],
      ["Problemas urbanos possuem causas interligadas.", "Planejamento deve considerar diferentes grupos sociais."]),
    lesson("Estrutura etária e desafios sociais",
      "A estrutura etária influencia as necessidades de uma sociedade. Uma população com grande proporção de crianças demanda escolas e serviços infantis. Uma população envelhecida exige atenção à saúde, previdência, acessibilidade e participação social.",
      ["O envelhecimento populacional exige adaptação dos serviços públicos.", "A distribuição por idade ajuda no planejamento de políticas."],
      ["A estrutura etária muda as necessidades coletivas.", "Políticas públicas devem acompanhar as transformações demográficas."])
  ]
},

54: {
  title: "Revisão geral — Geografia 1",
  goal: "Consolidar os conteúdos de Geografia estudados nas semanas 46 a 53.",
  days: [
    lesson("Revisão de cartografia",
      "Revise mapas, escalas, orientação e coordenadas geográficas. A escala relaciona distâncias representadas no mapa às distâncias reais. Latitude e longitude permitem localizar pontos na superfície terrestre.",
      ["Uma escala 1:100.000 indica que 1 unidade no mapa equivale a 100.000 unidades reais."],
      ["Revise orientação e pontos cardeais.", "Diferencie latitude de longitude."]),
    lesson("Revisão de projeções e fusos horários",
      "Projeções cartográficas representam a superfície curva da Terra em um plano e sempre apresentam algum tipo de distorção. Fusos horários organizam diferenças de horário relacionadas à longitude.",
      ["Projeções podem preservar áreas, formas ou outras propriedades, mas não todas ao mesmo tempo."],
      ["Toda projeção apresenta distorções.", "Fusos horários estão relacionados à rotação terrestre."]),
    lesson("Revisão da estrutura terrestre e do relevo",
      "A Terra possui camadas internas com características distintas. A dinâmica das placas tectônicas está relacionada à formação de montanhas, terremotos e vulcões. O relevo também é transformado por processos de erosão e sedimentação.",
      ["A crosta terrestre é dividida em placas tectônicas.", "A erosão desgasta e transporta materiais."],
      ["Diferencie processos internos e externos.", "Relacione placas tectônicas e relevo."]),
    lesson("Revisão do clima e da vegetação",
      "O clima corresponde aos padrões atmosféricos observados ao longo de períodos extensos. Temperatura, umidade, pressão e circulação atmosférica influenciam os tipos climáticos e a distribuição da vegetação.",
      ["Clima e tempo atmosférico são conceitos diferentes.", "A vegetação responde às condições ambientais."],
      ["Revise elementos e fatores climáticos.", "Relacione clima, vegetação e biomas."]),
    lesson("Revisão de solos e hidrografia",
      "Solos sustentam ecossistemas e atividades humanas. Rios, lagos e aquíferos compõem os recursos hídricos. A conservação do solo e das águas é importante para a agricultura, o abastecimento e a biodiversidade.",
      ["Erosão pode comprometer a fertilidade do solo.", "Bacias hidrográficas organizam a drenagem."],
      ["Revise formação e conservação dos solos.", "Explique o ciclo da água."]),
    lesson("Desafio integrado de Geografia",
      "Resolva questões que relacionem cartografia, estrutura terrestre, clima, biomas, hidrografia e população. Procure explicar as relações entre fenômenos naturais e atividades humanas, utilizando conceitos geográficos.",
      ["Explique como o clima influencia a vegetação.", "Relacione urbanização, população e recursos hídricos."],
      ["Utilize mapas, gráficos e conceitos.", "Justifique suas respostas com evidências."])
  ]
},

55: {
  title: "Primeiro checkpoint — Matemática e Física",
  goal: "Revisar de forma acumulativa os conteúdos de Matemática 1 e Física 1.",
  days: [
    lesson("Revisão de operações e conjuntos numéricos",
      "Revise operações fundamentais, frações, números inteiros, racionais, reais, razão, proporção e regra de três. Observe a ordem das operações e os sinais.",
      ["3/4 + 1/4 = 1.", "Se 2 cadernos custam R$ 20, 4 cadernos custam R$ 40, mantendo o preço unitário."],
      ["Respeite a ordem das operações.", "Simplifique frações quando possível."]),
    lesson("Revisão de porcentagem e álgebra",
      "Retome porcentagem, potenciação, radiciação, notação científica, expressões algébricas, produtos notáveis e fatoração. Identifique qual operação ou propriedade é adequada a cada problema.",
      ["20% de 150 é 30.", "(a+b)² = a² + 2ab + b²."],
      ["Porcentagem é uma razão de denominador 100.", "Revise propriedades das potências."]),
    lesson("Revisão de equações e funções",
      "Revise equações de primeiro e segundo graus, sistemas, inequações e funções. Interprete domínio, imagem, raízes e gráficos, relacionando expressões algébricas a situações.",
      ["2x + 4 = 10 resulta em x = 3.", "Uma função afim possui gráfico em forma de reta."],
      ["Confira soluções substituindo na equação.", "Interprete gráficos com atenção."]),
    lesson("Revisão de grandezas e cinemática",
      "Revise unidades, análise dimensional, vetores, posição, deslocamento, velocidade e movimento uniforme. Diferencie distância percorrida de deslocamento e observe o sinal das grandezas.",
      ["Velocidade média = deslocamento / intervalo de tempo.", "No movimento uniforme, a velocidade permanece constante."],
      ["Utilize unidades compatíveis.", "Interprete gráficos de posição e velocidade."]),
    lesson("Revisão de aceleração e dinâmica",
      "Retome movimento uniformemente variado, queda livre, lançamentos, leis de Newton, peso, força normal, tração, atrito e força elástica. Identifique as forças que atuam em cada situação.",
      ["A aceleração mede a variação da velocidade por tempo.", "A segunda lei de Newton relaciona força resultante e aceleração."],
      ["Diferencie massa e peso.", "Desenhe as forças antes de resolver problemas."]),
    lesson("Revisão de movimento circular e integração",
      "Revise movimento circular, força centrípeta e problemas de dinâmica. Finalize relacionando os conteúdos matemáticos às situações físicas e identificando quais ferramentas são necessárias em cada problema.",
      ["Movimento circular envolve aceleração centrípeta.", "A força resultante aponta para o centro da trajetória circular."],
      ["Explique o raciocínio utilizado.", "Confira unidades, sinais e resultados."])
  ]
},

56: {
  title: "Primeiro checkpoint — Biologia e Química",
  goal: "Revisar de forma acumulativa os conteúdos de Biologia 1 e Química 1.",
  days: [
    lesson("Revisão da organização celular",
      "Revise características dos seres vivos, células procarióticas e eucarióticas, membrana plasmática, núcleo, citoplasma, organelas, ribossomos e citoesqueleto.",
      ["Células procarióticas não possuem núcleo delimitado por membrana.", "Mitocôndrias participam da respiração celular."],
      ["Diferencie células procarióticas e eucarióticas.", "Relacione organelas às suas funções."]),
    lesson("Revisão de membrana e biomoléculas",
      "Retome transporte pela membrana, água, sais minerais, carboidratos, lipídios, proteínas, vitaminas e enzimas. Relacione as propriedades das moléculas às funções biológicas.",
      ["A osmose envolve o movimento de água através de uma membrana semipermeável.", "Enzimas atuam como catalisadores biológicos."],
      ["Diferencie transporte passivo e ativo.", "Conheça as funções das biomoléculas."]),
    lesson("Revisão de genética e metabolismo",
      "Revise DNA, RNA, ATP, respiração celular, fermentação, fotossíntese, quimiossíntese, ciclo celular, mitose, meiose, genes e cromossomos.",
      ["O DNA armazena informações genéticas.", "A fotossíntese converte energia luminosa em energia química."],
      ["Diferencie mitose e meiose.", "Relacione metabolismo e obtenção de energia."]),
    lesson("Revisão da matéria e dos modelos atômicos",
      "Retome matéria, propriedades, estados físicos, mudanças de estado, substâncias, misturas, separação de misturas e fenômenos físicos e químicos. Revise também os modelos atômicos.",
      ["Filtração pode separar sólido de líquido.", "O número atômico corresponde à quantidade de prótons."],
      ["Diferencie substância pura e mistura.", "Reconheça fenômenos físicos e químicos."]),
    lesson("Revisão da tabela periódica e ligações",
      "Revise íons, distribuição eletrônica, famílias, períodos, propriedades periódicas e ligações iônicas, covalentes e metálicas.",
      ["Cátions possuem carga positiva.", "Ligações covalentes envolvem compartilhamento de elétrons."],
      ["Localize elementos na tabela periódica.", "Relacione ligações às propriedades das substâncias."]),
    lesson("Revisão de funções inorgânicas",
      "Retome polaridade, geometria molecular, forças intermoleculares, ácidos, bases, sais e óxidos. Relacione as propriedades das substâncias às suas estruturas e interações.",
      ["Ácidos e bases apresentam comportamentos químicos distintos.", "A polaridade depende da distribuição de cargas na molécula."],
      ["Reconheça as principais funções inorgânicas.", "Explique relações entre estrutura e propriedades."])
  ]
},

57: {
  title: "Primeiro checkpoint — História e Geografia",
  goal: "Revisar de forma acumulativa os conteúdos de História 1 e Geografia 1.",
  days: [
    lesson("Revisão das civilizações antigas",
      "Revise Mesopotâmia, Egito, Hebreus, Fenícios, Persas, Grécia e Roma. Observe organização política, economia, religião, cultura e relações sociais.",
      ["A agricultura foi importante para diversas civilizações antigas.", "A democracia ateniense possuía participação política restrita."],
      ["Compare as sociedades estudadas.", "Relacione geografia e desenvolvimento histórico."]),
    lesson("Revisão da Antiguidade tardia e do mundo medieval",
      "Retome cristianismo, Império Bizantino, islamismo, feudalismo, Igreja, Cruzadas, comércio e crise do feudalismo. Identifique mudanças políticas, religiosas e econômicas.",
      ["O feudalismo possuía relações sociais e econômicas específicas.", "As Cruzadas envolveram diferentes interesses religiosos e políticos."],
      ["Compreenda transformações medievais.", "Evite tratar a Idade Média como um período homogêneo."]),
    lesson("Revisão da transição para a Idade Moderna",
      "Revise Renascimento, Reforma Protestante, Contrarreforma, formação dos Estados nacionais, absolutismo, mercantilismo, expansão marítima e colonização.",
      ["O Renascimento valorizou referências culturais da Antiguidade clássica.", "A expansão marítima europeia transformou relações entre continentes."],
      ["Relacione mudanças culturais e políticas.", "Analise os interesses econômicos da expansão marítima."]),
    lesson("Revisão de cartografia e estrutura terrestre",
      "Revise mapas, escalas, coordenadas, projeções, fusos horários, sensoriamento remoto, estrutura interna da Terra, rochas e placas tectônicas.",
      ["Latitude e longitude permitem localizar pontos.", "O movimento das placas pode provocar terremotos."],
      ["Interprete mapas e coordenadas.", "Relacione processos internos e externos da Terra."]),
    lesson("Revisão de clima, biomas e população",
      "Retome clima, massas de ar, vegetação, biomas, solos, hidrografia, natalidade, mortalidade, crescimento populacional, migrações e urbanização.",
      ["O clima influencia a distribuição dos biomas.", "Migrações modificam a distribuição da população."],
      ["Interprete indicadores demográficos.", "Relacione natureza e sociedade."]),
    lesson("Desafio integrado de História e Geografia",
      "Analise questões que relacionem acontecimentos históricos, transformações territoriais, mapas, população e recursos naturais. Utilize cronologias, gráficos e mapas como fontes de informação.",
      ["Explique como a expansão marítima alterou relações entre regiões.", "Relacione urbanização e mudanças econômicas."],
      ["Construa explicações com contexto histórico.", "Utilize informações geográficas para sustentar respostas."])
  ]
},

58: {
  title: "Primeiro checkpoint — Simulado acumulado e análise dos erros",
  goal: "Avaliar os conteúdos das semanas 1 a 57, corrigir dificuldades e atualizar o acompanhamento de aprendizagem.",
  days: [
    lesson("Preparação para o simulado",
      "Organize os conteúdos estudados e revise os principais conceitos, fórmulas, acontecimentos e relações. A preparação deve priorizar os pontos que ainda apresentam dúvidas, sem tentar decorar respostas isoladas.",
      ["Separe fórmulas e conceitos importantes.", "Identifique assuntos que precisam de revisão."],
      ["Organize o material por disciplina.", "Priorize compreensão em vez de memorização."]),
    lesson("Estratégias de resolução de questões",
      "Leia cada enunciado com atenção, identifique o que está sendo solicitado e destaque informações relevantes. Em questões com gráficos ou textos, observe títulos, unidades, escalas e contexto.",
      ["Uma questão pode exigir interpretação antes do cálculo.", "Unidades incorretas podem comprometer uma resposta."],
      ["Leia o comando antes de responder.", "Não ignore informações presentes em gráficos."]),
    lesson("Revisão dos erros de Matemática e Física",
      "Analise erros relacionados a operações, equações, funções, unidades, cinemática e dinâmica. Classifique cada erro como falta de conhecimento, interpretação, cálculo ou distração.",
      ["Refaça uma questão sem olhar a resolução.", "Explique por que a resposta anterior estava incorreta."],
      ["Identifique a causa do erro.", "Pratique novamente o conteúdo com dificuldade."]),
    lesson("Revisão dos erros de Biologia e Química",
      "Analise dificuldades relacionadas a células, metabolismo, genética, matéria, modelos atômicos, tabela periódica e ligações químicas. Diferencie conceitos próximos e revise as relações entre eles.",
      ["Compare mitose e meiose.", "Diferencie ligação iônica e covalente."],
      ["Evite confundir termos semelhantes.", "Explique conceitos com suas próprias palavras."]),
    lesson("Revisão dos erros de História e Geografia",
      "Analise dificuldades de cronologia, contexto histórico, interpretação de mapas, fenômenos naturais e indicadores populacionais. Procure relacionar causas, consequências e transformações.",
      ["Organize acontecimentos em uma linha do tempo.", "Interprete mapas e gráficos antes de concluir."],
      ["Contextualize acontecimentos históricos.", "Justifique interpretações geográficas."]),
    lesson("Análise final e atualização do progresso",
      "Após realizar o simulado acumulado, registre os resultados e organize os conteúdos em três categorias: dominados, em desenvolvimento e com dificuldade. Utilize os dados para orientar as próximas revisões.",
      ["Registre acertos e erros por disciplina.", "Defina quais conteúdos precisam voltar ao estudo."],
      ["Atualize os indicadores de progresso.", "Planeje revisões a partir das dificuldades encontradas."])
  ]
},

59: {
  title: "Classes gramaticais — substantivo, adjetivo, artigo, numeral, pronome e verbo",
  goal: "Identificar e compreender as principais classes gramaticais e suas funções na construção das frases.",
  days: [
    lesson("Substantivos",
      "Substantivos são palavras utilizadas para nomear seres, objetos, lugares, sentimentos, ideias e fenômenos. Podem ser classificados como comuns, próprios, concretos, abstratos, simples, compostos, primitivos e derivados.",
      ["cidade: substantivo comum.", "Brasil: substantivo próprio.", "alegria: substantivo abstrato."],
      ["Substantivos nomeiam elementos.", "A classificação depende do uso e do significado."]),
    lesson("Adjetivos",
      "Adjetivos caracterizam ou atribuem propriedades aos substantivos. Podem indicar qualidade, estado, aparência, origem ou relação. Também variam em gênero e número e podem apresentar graus comparativo e superlativo.",
      ["A casa antiga foi reformada.", "O aluno está muito atento."],
      ["Adjetivos caracterizam substantivos.", "Observe a concordância nominal."]),
    lesson("Artigos e numerais",
      "Artigos acompanham substantivos e podem ser definidos ou indefinidos. Numerais indicam quantidade, ordem, multiplicação ou fração, podendo ser cardinais, ordinais, multiplicativos e fracionários.",
      ["O livro está na mesa.", "Uma pessoa chegou.", "Três alunos participaram.", "Ela ficou em primeiro lugar."],
      ["Artigos definidos e indefinidos apresentam usos diferentes.", "Numerais podem indicar quantidade ou posição."]),
    lesson("Pronomes pessoais e possessivos",
      "Pronomes podem substituir ou acompanhar nomes. Pronomes pessoais indicam as pessoas do discurso. Possessivos indicam relação de posse ou pertencimento.",
      ["Eu estudo todos os dias.", "Meu caderno está organizado.", "Nós chegamos cedo."],
      ["Identifique a pessoa do discurso.", "Observe a relação entre pronome e referente."]),
    lesson("Pronomes demonstrativos, indefinidos e relativos",
      "Pronomes demonstrativos situam elementos no espaço, no tempo ou no próprio texto. Indefinidos expressam referência imprecisa. Relativos retomam um termo anterior e conectam orações.",
      ["Este livro é interessante.", "Alguém chamou você.", "O aluno que estudou foi aprovado."],
      ["Pronomes ajudam na coesão textual.", "O pronome relativo retoma um antecedente."]),
    lesson("Verbos — estrutura e identificação",
      "Verbos expressam ações, estados, fenômenos e processos. Podem variar em pessoa, número, tempo, modo e voz. Identificar o verbo ajuda a compreender a estrutura da oração.",
      ["Os estudantes pesquisaram o tema.", "A chuva começou.", "Ela parece cansada."],
      ["Verbos são núcleos do predicado verbal.", "Observe tempo, modo, pessoa e número."])
  ]
},

60: {
  title: "Advérbio, preposição, conjunção, interjeição, tempos e modos verbais",
  goal: "Compreender classes gramaticais invariáveis e revisar as relações de tempo e modo dos verbos.",
  days: [
    lesson("Advérbios",
      "Advérbios modificam verbos, adjetivos ou outros advérbios, acrescentando circunstâncias como tempo, lugar, modo, intensidade, negação e afirmação. Em geral, são invariáveis.",
      ["Ela chegou cedo.", "O aluno respondeu calmamente.", "O filme é muito interessante."],
      ["Advérbios acrescentam circunstâncias.", "Identifique qual termo está sendo modificado."]),
    lesson("Preposições",
      "Preposições estabelecem relações entre palavras, conectando termos e indicando relações como lugar, tempo, origem, destino, causa e companhia.",
      ["O livro está sobre a mesa.", "Viajei com meus amigos.", "Cheguei depois do almoço."],
      ["Preposições conectam termos.", "O contexto determina a relação expressa."]),
    lesson("Conjunções",
      "Conjunções conectam palavras ou orações. Podem estabelecer relações de adição, oposição, alternância, explicação, conclusão, causa, condição, concessão e outras.",
      ["Estudei e pratiquei.", "Queria sair, mas estava chovendo.", "Fiquei em casa porque estava cansado."],
      ["Conjunções estabelecem relações de sentido.", "Observe a relação lógica entre as orações."]),
    lesson("Interjeições e expressividade",
      "Interjeições expressam emoções, reações, chamamentos e estados do falante. Seu sentido depende bastante do contexto e da entonação.",
      ["Nossa! Que surpresa!", "Ufa! Terminamos a atividade.", "Ei! Espere um momento."],
      ["Interjeições expressam reações.", "Pontuação e contexto ajudam a interpretar o sentido."]),
    lesson("Tempos verbais",
      "Os tempos verbais situam acontecimentos em relação ao momento da fala. O presente pode indicar ações atuais ou habituais; o passado apresenta acontecimentos anteriores; o futuro indica acontecimentos posteriores ou projeções.",
      ["Eu estudo agora.", "Ontem, eu estudei.", "Amanhã, estudarei novamente."],
      ["Tempo verbal organiza a referência temporal.", "O contexto pode alterar o valor de um tempo verbal."]),
    lesson("Modos verbais",
      "Os modos verbais expressam diferentes atitudes diante do que é dito. O indicativo apresenta fatos ou situações como reais; o subjuntivo expressa hipótese, desejo ou possibilidade; o imperativo apresenta ordens, pedidos e orientações.",
      ["Ele chegou cedo. (indicativo)", "Talvez ele chegue cedo. (subjuntivo)", "Chegue cedo! (imperativo)"],
      ["Indicativo, subjuntivo e imperativo possuem funções diferentes.", "Modo verbal expressa a atitude do falante."])
  ]
},

61: {
  title: "Sujeito, predicado, objeto e complementos",
  goal: "Analisar a estrutura das orações e identificar os termos essenciais e integrantes.",
  days: [
    lesson("Oração e estrutura básica",
      "Oração é uma estrutura organizada em torno de um verbo ou locução verbal. Em muitas orações, podemos identificar sujeito e predicado. A análise sintática investiga a função dos termos dentro da estrutura.",
      ["Os alunos estudaram.", "A professora explicou o conteúdo."],
      ["A oração possui verbo ou locução verbal.", "A função sintática depende da relação entre os termos."]),
    lesson("Sujeito e núcleo do sujeito",
      "Sujeito é o termo sobre o qual se declara algo ou que participa da estrutura verbal. Seu núcleo é a palavra principal do grupo nominal. O sujeito pode ser simples, composto, oculto, indeterminado ou inexistente.",
      ["O cachorro latiu. (simples)", "Pedro e Ana chegaram. (composto)", "Estudamos bastante. (oculto)"],
      ["Localize o verbo antes de identificar o sujeito.", "Nem toda oração possui sujeito."]),
    lesson("Predicado e seus tipos",
      "Predicado é aquilo que se declara sobre o sujeito. Pode ser verbal, quando o núcleo é um verbo significativo; nominal, quando apresenta verbo de ligação e predicativo; ou verbo-nominal, quando reúne duas informações centrais.",
      ["O atleta correu. (verbal)", "O atleta está cansado. (nominal)", "O atleta chegou cansado. (verbo-nominal)"],
      ["Observe o núcleo do predicado.", "Verbo de ligação conecta o sujeito a uma característica."]),
    lesson("Objeto direto e objeto indireto",
      "Objetos completam o sentido de verbos transitivos. O objeto direto normalmente não é introduzido por preposição obrigatória; o indireto é ligado ao verbo por preposição exigida pela regência.",
      ["Comprei um livro. (objeto direto)", "Gosto de música. (objeto indireto)"],
      ["Verbos transitivos exigem complementos.", "A regência ajuda a identificar o tipo de objeto."]),
    lesson("Complemento nominal e agente da passiva",
      "O complemento nominal completa o sentido de um nome, adjetivo ou advérbio e é introduzido por preposição. O agente da passiva indica quem pratica a ação em uma construção na voz passiva.",
      ["Tenho confiança em você. (complemento nominal)", "O texto foi escrito pelo aluno. (agente da passiva)"],
      ["Complemento nominal completa um nome.", "Agente da passiva aparece em estruturas passivas."]),
    lesson("Análise sintática integrada",
      "Analise orações completas identificando sujeito, predicado, objetos e complementos. Observe a relação entre os termos e diferencie funções que podem parecer semelhantes.",
      ["A professora entregou as provas aos estudantes.", "O projeto foi desenvolvido pela equipe."],
      ["Analise a oração como uma estrutura.", "Não confunda complemento nominal com objeto indireto."])
  ]
},

62: {
  title: "Adjuntos, aposto, vocativo, oração e período",
  goal: "Reconhecer termos acessórios, elementos de explicação e chamamento e a organização dos períodos.",
  days: [
    lesson("Adjunto adnominal",
      "Adjunto adnominal acompanha um substantivo e contribui para caracterizá-lo, determiná-lo ou quantificá-lo. Pode ser representado por artigos, adjetivos, pronomes, numerais ou locuções adjetivas.",
      ["Os três alunos dedicados chegaram.", "A casa de madeira foi reformada."],
      ["Adjunto adnominal acompanha substantivos.", "Pode indicar característica, quantidade ou determinação."]),
    lesson("Adjunto adverbial",
      "Adjunto adverbial acrescenta circunstâncias à oração, como tempo, lugar, modo, causa, finalidade, intensidade e companhia. Pode modificar um verbo, adjetivo ou outro advérbio.",
      ["Ontem, viajamos.", "Ela falou com calma.", "Estudamos na biblioteca."],
      ["Adjunto adverbial indica circunstâncias.", "A interpretação depende do contexto."]),
    lesson("Aposto",
      "Aposto explica, especifica, resume ou enumera um termo anterior. Frequentemente aparece separado por vírgulas, dois-pontos ou travessões, conforme a construção.",
      ["Machado de Assis, grande escritor brasileiro, nasceu no Rio de Janeiro.", "Comprei três itens: lápis, caderno e borracha."],
      ["Aposto acrescenta informação sobre outro termo.", "A pontuação ajuda a reconhecer sua função."]),
    lesson("Vocativo",
      "Vocativo é utilizado para chamar ou interpelar alguém. Não exerce função de sujeito e costuma ser separado por vírgula.",
      ["Caio, venha aqui.", "Pessoal, vamos começar.", "Muito obrigado, professor."],
      ["Vocativo é um chamamento.", "Não confunda vocativo com sujeito."]),
    lesson("Período simples e período composto",
      "Período é uma frase organizada em uma ou mais orações. O período simples possui uma oração; o composto apresenta duas ou mais. A quantidade de verbos ou locuções verbais ajuda a identificar as orações.",
      ["O aluno estudou. (simples)", "O aluno estudou e passou. (composto)"],
      ["Período simples possui uma oração.", "Período composto possui mais de uma oração."]),
    lesson("Identificação dos termos na prática",
      "Analise frases e períodos identificando adjuntos, aposto, vocativo, sujeito, predicado e número de orações. Considere a função de cada termo no contexto, e não apenas sua posição.",
      ["Pedro, meu vizinho, chegou cedo.", "Maria, feche a janela agora."],
      ["A mesma palavra pode exercer funções diferentes em contextos distintos.", "Utilize a relação sintática para classificar os termos."])
  ]
},

63: {
  title: "Coordenação e subordinação",
  goal: "Distinguir orações coordenadas e subordinadas e compreender as relações de sentido entre elas.",
  days: [
    lesson("Orações coordenadas",
      "Orações coordenadas possuem independência sintática entre si, embora possam estabelecer relações de sentido. Podem aparecer ligadas por conjunções ou simplesmente justapostas.",
      ["Estudei, mas não terminei.", "Cheguei, sentei, comecei a atividade."],
      ["Coordenação envolve orações sintaticamente independentes.", "A relação de sentido continua importante."]),
    lesson("Coordenação sindética e assindética",
      "Orações coordenadas assindéticas não apresentam conjunção ligando-as. As sindéticas são introduzidas por conjunções e podem ser classificadas como aditivas, adversativas, alternativas, conclusivas e explicativas.",
      ["Estudei e pratiquei. (aditiva)", "Queria sair, porém choveu. (adversativa)", "Estava cansado, portanto fui dormir. (conclusiva)"],
      ["Identifique a conjunção.", "Observe a relação de sentido estabelecida."]),
    lesson("Orações subordinadas substantivas",
      "Orações subordinadas substantivas exercem funções semelhantes às de substantivos, podendo atuar como sujeito, objeto direto, objeto indireto, complemento nominal, predicativo ou aposto.",
      ["É importante que você estude.", "Espero que todos participem."],
      ["A oração subordinada exerce função sintática.", "Pode ser substituída por um termo substantivo em muitos contextos."]),
    lesson("Orações subordinadas adjetivas",
      "Orações subordinadas adjetivas caracterizam um termo anterior, funcionando de maneira semelhante a um adjetivo. Podem ser restritivas, quando limitam o sentido do antecedente, ou explicativas, quando acrescentam informação.",
      ["Os alunos que estudaram passaram. (restritiva)", "Os alunos, que estudaram bastante, passaram. (explicativa)"],
      ["Restritivas delimitam o antecedente.", "Explicativas acrescentam informação e são isoladas por vírgulas."]),
    lesson("Orações subordinadas adverbiais",
      "Orações subordinadas adverbiais expressam circunstâncias como causa, consequência, condição, concessão, finalidade, tempo, comparação e conformidade.",
      ["Fiquei em casa porque choveu. (causal)", "Se estudar, aprenderá. (condicional)", "Embora estivesse cansado, continuou. (concessiva)"],
      ["Identifique a circunstância expressa.", "Conjunções ajudam a reconhecer a relação."]),
    lesson("Comparação entre coordenação e subordinação",
      "Na coordenação, as orações apresentam independência sintática. Na subordinação, uma oração exerce função em relação à outra. A classificação depende da estrutura e da relação estabelecida.",
      ["Estudei e passei. (coordenação)", "Espero que você passe. (subordinação)"],
      ["Diferencie independência e dependência sintática.", "Explique a função da oração subordinada."])
  ]
},

64: {
  title: "Concordância, regência, crase e colocação pronominal",
  goal: "Aplicar as regras de concordância e regência e compreender os principais usos da crase e dos pronomes átonos.",
  days: [
    lesson("Concordância verbal",
      "A concordância verbal estabelece relação entre o verbo e o sujeito. Em regra, o verbo concorda em pessoa e número com o núcleo do sujeito. Algumas estruturas exigem atenção especial.",
      ["Os alunos chegaram cedo.", "A professora e os estudantes participaram."],
      ["Identifique o núcleo do sujeito.", "Confira pessoa e número do verbo."]),
    lesson("Concordância nominal",
      "A concordância nominal estabelece relações de gênero e número entre substantivos e seus determinantes ou caracterizadores. Artigos, adjetivos, numerais e pronomes podem precisar concordar com o substantivo.",
      ["As meninas estudiosas chegaram.", "Os livros novos estão na mesa."],
      ["Observe gênero e número.", "A concordância depende da estrutura da expressão."]),
    lesson("Regência verbal e nominal",
      "Regência estuda a relação entre palavras e seus complementos, especialmente o uso ou não de preposições. Verbos e nomes podem exigir preposições específicas, e a regência pode alterar a construção da frase.",
      ["Gosto de música.", "Obedeço às regras.", "Tenho necessidade de ajuda."],
      ["Consulte a regência quando houver dúvida.", "Não escolha preposições apenas pela tradução."]),
    lesson("Crase",
      "A crase representa, em muitos casos, a fusão da preposição a com o artigo feminino a ou as. O acento grave marca essa ocorrência. É necessário verificar se o termo anterior exige preposição e se o termo seguinte admite artigo.",
      ["Vou à escola.", "Entreguei o documento à professora."],
      ["Verifique a regência do termo anterior.", "Observe se o termo seguinte admite artigo feminino."]),
    lesson("Colocação pronominal",
      "A colocação pronominal estuda a posição dos pronomes oblíquos átonos em relação ao verbo. As posições são próclise, quando o pronome vem antes; ênclise, quando vem depois; e mesóclise, quando aparece no meio do verbo em construções específicas.",
      ["Não me disseram a verdade. (próclise)", "Entregaram-me o documento. (ênclise)"],
      ["Próclise ocorre com elementos atrativos.", "Observe o registro e a estrutura da frase."]),
    lesson("Revisão integrada de concordância e regência",
      "Analise construções que envolvam concordância verbal e nominal, regência, crase e colocação pronominal. Reescreva frases inadequadas e explique as regras aplicadas.",
      ["Os estudantes chegaram preparados.", "Refiro-me àquela situação."],
      ["Justifique cada correção.", "Considere a norma-padrão e o contexto de uso."])
  ]
},

65: {
  title: "Pontuação, semântica, polissemia, sinonímia, antonímia e ambiguidade",
  goal: "Compreender os efeitos de sentido da pontuação e as relações semânticas entre palavras e expressões.",
  days: [
    lesson("Pontuação — vírgula",
      "A vírgula organiza a estrutura da frase, separa elementos coordenados, isola vocativos e apostos e marca determinadas orações e expressões deslocadas. Não deve separar sujeito e verbo ou verbo e complemento apenas por uma pausa na fala.",
      ["Comprei livros, cadernos e lápis.", "Pedro, venha aqui.", "Os alunos, cansados, foram embora."],
      ["Não separe sujeito e verbo por vírgula.", "Identifique a função sintática antes de pontuar."]),
    lesson("Ponto, dois-pontos, ponto e vírgula e travessão",
      "Os sinais de pontuação organizam períodos e ajudam a orientar a leitura. O ponto encerra uma declaração; os dois-pontos introduzem explicações ou enumerações; o ponto e vírgula separa estruturas relacionadas; o travessão pode marcar falas ou destacar informações.",
      ["Ela tinha um objetivo: vencer.", "Trouxe tudo — livros, cadernos e canetas."],
      ["A pontuação influencia o ritmo e a organização.", "Escolha o sinal conforme a estrutura e o sentido."]),
    lesson("Semântica e contexto",
      "Semântica é o estudo dos significados. O sentido de uma palavra ou expressão pode variar conforme o contexto, a situação comunicativa e a relação com os demais elementos do texto.",
      ["A palavra banco pode indicar instituição financeira ou assento.", "A expressão pode adquirir sentido figurado."],
      ["O contexto ajuda a determinar o significado.", "Uma palavra pode apresentar mais de um sentido."]),
    lesson("Polissemia e sinonímia",
      "Polissemia ocorre quando uma mesma palavra apresenta diferentes sentidos relacionados. Sinonímia é a relação entre palavras de sentidos semelhantes, embora raramente sejam perfeitamente equivalentes em todos os contextos.",
      ["Cabeça pode indicar parte do corpo ou liderança.", "Feliz e contente podem funcionar como sinônimos em certos contextos."],
      ["Polissemia depende do contexto.", "Sinônimos podem apresentar diferenças de uso."]),
    lesson("Antonímia e ambiguidade",
      "Antonímia relaciona palavras de sentidos opostos. Ambiguidade ocorre quando uma construção permite mais de uma interpretação. Ela pode ser intencional, como em recursos literários, ou prejudicar a clareza da comunicação.",
      ["Claro e escuro podem ser antônimos.", "Vi o homem com o telescópio pode apresentar mais de uma interpretação."],
      ["Antônimos expressam oposição de sentido.", "Reescreva frases ambíguas quando a clareza for necessária."]),
    lesson("Desafio de pontuação e interpretação semântica",
      "Analise frases e pequenos textos, observando como a pontuação modifica a organização e como as escolhas vocabulares produzem sentidos. Reescreva construções ambíguas e explique as diferenças de interpretação.",
      ["Compare: Vamos comer, crianças! e Vamos comer crianças!", "Explique os sentidos possíveis de uma palavra polissêmica."],
      ["A pontuação pode alterar o sentido.", "Interprete palavras e expressões no contexto."])
  ]
},


66: {
  title: "Interpretação, inferência, tese, argumento, pressuposto, implícito e gêneros textuais",
  goal: "Desenvolver leitura crítica, identificar informações explícitas e implícitas e compreender a organização dos textos.",
  days: [
    lesson("Compreensão e interpretação textual",
      "Compreender um texto exige identificar informações explícitas, reconhecer o assunto principal e entender como as partes se relacionam. A interpretação considera o texto completo e seu contexto.",
      ["Identificar o tema de uma notícia.", "Reconhecer a ideia central de um parágrafo."],
      ["Diferencie assunto e ideia principal.", "Utilize informações presentes no texto."]),
    lesson("Inferência textual",
      "Inferir é chegar a uma conclusão a partir de pistas fornecidas pelo texto e de conhecimentos pertinentes. Uma inferência precisa ser sustentada por evidências, não por suposições sem fundamento.",
      ["Se alguém entrou com um guarda-chuva molhado, pode-se inferir que esteve exposto à chuva."],
      ["Inferências dependem de pistas.", "Não confunda inferência com informação explícita."]),
    lesson("Tese e ponto de vista",
      "A tese é a ideia central defendida em um texto argumentativo. O autor apresenta um posicionamento sobre determinado assunto e desenvolve razões para sustentá-lo.",
      ["Uma redação pode defender que a leitura deve ser incentivada nas escolas."],
      ["Identifique o posicionamento do autor.", "Diferencie tema e tese."]),
    lesson("Argumentos e estratégias argumentativas",
      "Argumentos são razões utilizadas para sustentar uma tese. Podem utilizar exemplos, dados, comparações, relações de causa e consequência, fatos históricos e citações.",
      ["Dados de pesquisas podem apoiar uma argumentação.", "Exemplos concretos ajudam a esclarecer uma ideia."],
      ["Um argumento deve apoiar a tese.", "Avalie a relevância e a confiabilidade das evidências."]),
    lesson("Pressupostos e informações implícitas",
      "Pressupostos são informações que uma construção linguística apresenta como já existentes ou aceitas. Informações implícitas também podem ser percebidas por pistas contextuais e escolhas de palavras.",
      ["Ele voltou a estudar pressupõe que já estudava anteriormente."],
      ["Observe expressões que indicam pressuposição.", "Explique quais pistas sustentam sua interpretação."]),
    lesson("Gêneros textuais e leitura crítica",
      "Gêneros textuais são formas de comunicação que apresentam finalidades e características próprias. Notícias, reportagens, crônicas, artigos de opinião, cartas e propagandas possuem estruturas e objetivos diferentes.",
      ["Uma notícia informa acontecimentos.", "Um artigo de opinião apresenta e defende um posicionamento."],
      ["Identifique finalidade e público-alvo.", "Observe linguagem, estrutura e contexto."])
  ]
},

67: {
  title: "Revisão geral — Português 1",
  goal: "Consolidar os conteúdos de gramática, sintaxe, semântica e interpretação estudados nas semanas 59 a 66.",
  days: [
    lesson("Revisão das classes gramaticais",
      "Revise substantivos, adjetivos, artigos, numerais, pronomes, verbos, advérbios, preposições, conjunções e interjeições. Identifique a função das palavras em diferentes contextos.",
      ["Em 'A menina chegou cedo', menina é substantivo e cedo é advérbio."],
      ["Classifique as palavras pelo contexto.", "Diferencie classes variáveis e invariáveis."]),
    lesson("Revisão de verbos e tempos verbais",
      "Retome estrutura verbal, pessoa, número, tempo e modo. Revise indicativo, subjuntivo e imperativo, observando como cada modo expressa diferentes atitudes do falante.",
      ["Talvez ele venha amanhã.", "Venha imediatamente!"],
      ["Reconheça os modos verbais.", "Observe a relação entre tempo e contexto."]),
    lesson("Revisão de análise sintática",
      "Revise sujeito, predicado, objetos, complementos, adjuntos, aposto e vocativo. Identifique a função sintática dos termos dentro da oração.",
      ["O professor explicou a matéria aos alunos.", "Pedro, meu amigo, chegou cedo."],
      ["Não confunda sujeito e vocativo.", "Diferencie complementos e adjuntos."]),
    lesson("Revisão de coordenação e subordinação",
      "Retome períodos simples e compostos, orações coordenadas e subordinadas e suas relações de sentido. Identifique conjunções e funções das orações.",
      ["Estudei, mas não terminei.", "Espero que você consiga."],
      ["Diferencie independência e dependência sintática.", "Classifique as relações entre orações."]),
    lesson("Revisão de concordância, regência e pontuação",
      "Revise concordância verbal e nominal, regência verbal e nominal, crase, colocação pronominal e regras de pontuação. Observe como essas regras contribuem para a clareza.",
      ["Os alunos chegaram preparados.", "Vou à escola."],
      ["Identifique o núcleo dos termos.", "Não separe sujeito e verbo por vírgula."]),
    lesson("Desafio integrado de Português",
      "Resolva atividades que combinem interpretação, gramática, análise sintática e semântica. Justifique as respostas e explique como os elementos linguísticos contribuem para o sentido do texto.",
      ["Identifique a tese de um artigo.", "Explique uma ambiguidade e proponha uma reescrita."],
      ["Interprete antes de classificar.", "Justifique suas respostas com elementos do texto."])
  ]
},

68: {
  title: "Estrutura de frases, pronomes, artigos e vocabulário básico",
  goal: "Conhecer a estrutura básica do inglês e construir frases afirmativas, negativas e interrogativas.",
  days: [
    lesson("Ordem básica das palavras em inglês",
      "No inglês, a ordem mais comum de uma frase afirmativa é sujeito, verbo e complemento. Essa organização é importante para construir frases claras.",
      ["I study English.", "She likes music.", "They play football."],
      ["Identifique sujeito e verbo.", "Observe a ordem das palavras."]),
    lesson("Pronomes pessoais",
      "Os pronomes pessoais sujeitos indicam quem realiza a ação. Em inglês, são I, you, he, she, it, we e they.",
      ["I am a student.", "He plays football.", "They study together."],
      ["He e she são usados para pessoas no singular.", "It é utilizado em diversos contextos para coisas e animais."]),
    lesson("Verbo to be",
      "O verbo to be pode expressar identidade, estado e características. Suas formas no presente são am, is e are, escolhidas de acordo com o sujeito.",
      ["I am happy.", "She is a student.", "We are ready."],
      ["I usa am.", "He, she e it usam is.", "You, we e they usam are."]),
    lesson("Artigos a, an e the",
      "A e an são artigos indefinidos utilizados com substantivos contáveis no singular. The é o artigo definido, utilizado quando o referente é específico ou conhecido no contexto.",
      ["A book.", "An apple.", "The teacher."],
      ["A precede sons consonantais.", "An precede sons vocálicos.", "The identifica algo específico."]),
    lesson("Vocabulário básico e substantivos",
      "Amplie o vocabulário relacionado a pessoas, objetos, lugares, animais, alimentos e atividades cotidianas. Aprenda a reconhecer substantivos em frases simples.",
      ["House = casa.", "Book = livro.", "Dog = cachorro.", "School = escola."],
      ["Aprenda palavras em contexto.", "Observe como os substantivos aparecem nas frases."]),
    lesson("Construção de frases e perguntas simples",
      "Combine pronomes, verbo to be, artigos e vocabulário para formar frases. Pratique perguntas e respostas curtas, observando a posição do verbo.",
      ["Are you a student? Yes, I am.", "Is she happy? No, she isn't."],
      ["Use a estrutura correta nas perguntas.", "Pratique respostas afirmativas e negativas."])
  ]
},

69: {
  title: "Simple Present, Present Continuous e rotina",
  goal: "Descrever hábitos, rotinas e ações que estão acontecendo no momento da fala.",
  days: [
    lesson("Simple Present — frases afirmativas",
      "O Simple Present é utilizado principalmente para hábitos, rotinas, fatos gerais e situações regulares. Na terceira pessoa do singular, o verbo geralmente recebe s ou es.",
      ["I study every day.", "She studies every day.", "They play football."],
      ["Utilize a forma básica do verbo com I, you, we e they.", "Observe a terminação da terceira pessoa do singular."]),
    lesson("Simple Present — negativas e perguntas",
      "As negativas e perguntas do Simple Present utilizam do ou does como auxiliares. Depois de does, o verbo principal volta à forma básica.",
      ["I don't play tennis.", "Does he study English?", "She doesn't work here."],
      ["Does acompanha he, she e it.", "Não acrescente s ao verbo principal depois de does."]),
    lesson("Advérbios de frequência e rotina",
      "Advérbios de frequência indicam com que regularidade algo acontece. Entre os mais comuns estão always, usually, often, sometimes, rarely e never.",
      ["I always study at night.", "She sometimes plays football."],
      ["Observe a posição do advérbio.", "Relacione o vocabulário aos hábitos cotidianos."]),
    lesson("Present Continuous — formação",
      "O Present Continuous descreve ações que estão acontecendo no momento ou situações temporárias. É formado por am, is ou are seguido do verbo com terminação ing.",
      ["I am studying now.", "She is reading.", "They are playing."],
      ["Utilize o verbo to be como auxiliar.", "Acrescente ing ao verbo principal."]),
    lesson("Simple Present x Present Continuous",
      "O Simple Present costuma indicar hábitos e fatos gerais. O Present Continuous destaca ações em andamento ou situações temporárias.",
      ["I play football every Saturday.", "I am playing football now."],
      ["Diferencie hábito e ação em andamento.", "Observe expressões de tempo."]),
    lesson("Descrição de uma rotina completa",
      "Utilize Simple Present, advérbios de frequência e vocabulário cotidiano para descrever uma rotina. Compare hábitos regulares com atividades que estão acontecendo agora.",
      ["I usually wake up early.", "Today, I am studying at home."],
      ["Organize as ações em sequência.", "Combine vocabulário e estruturas corretamente."])
  ]
},

70: {
  title: "Simple Past, Past Continuous e narrativas",
  goal: "Relatar acontecimentos passados e diferenciar ações concluídas de ações em andamento no passado.",
  days: [
    lesson("Simple Past — verbos regulares",
      "O Simple Past descreve ações concluídas no passado. Verbos regulares geralmente recebem a terminação ed, com algumas alterações ortográficas.",
      ["I watched a movie yesterday.", "She studied last night."],
      ["Reconheça a terminação ed.", "Observe expressões de tempo passado."]),
    lesson("Simple Past — verbos irregulares",
      "Verbos irregulares possuem formas próprias no passado e precisam ser aprendidos pelo uso. Alguns dos mais frequentes são go/went, see/saw, eat/ate e have/had.",
      ["I went to school.", "She saw a bird.", "They ate lunch."],
      ["Memorize os verbos frequentes em contexto.", "Não acrescente ed a verbos irregulares."]),
    lesson("Negativas e perguntas no Simple Past",
      "As negativas e perguntas do Simple Past utilizam did como auxiliar. Depois de did ou didn't, o verbo principal fica na forma básica.",
      ["I didn't go.", "Did you study?", "She didn't see the movie."],
      ["Did é utilizado com todos os sujeitos.", "O verbo principal não fica no passado depois de did."]),
    lesson("Past Continuous",
      "O Past Continuous descreve ações que estavam em andamento em determinado momento do passado. É formado por was ou were seguido do verbo com ing.",
      ["I was studying.", "They were playing football."],
      ["Was acompanha I, he, she e it.", "Were acompanha you, we e they."]),
    lesson("Simple Past x Past Continuous",
      "O Simple Past pode indicar uma ação que interrompe outra que estava em andamento. O Past Continuous destaca a ação em progresso, enquanto o Simple Past pode indicar o acontecimento que ocorreu.",
      ["I was studying when the phone rang.", "She was sleeping when I arrived."],
      ["Observe a relação temporal entre as ações.", "When e while aparecem frequentemente nessas estruturas."]),
    lesson("Narrativas no passado",
      "Construa narrativas curtas utilizando marcadores temporais, verbos regulares e irregulares e Past Continuous. Organize os acontecimentos em uma sequência compreensível.",
      ["Yesterday, I went to the park. While I was walking, it started to rain."],
      ["Organize começo, desenvolvimento e conclusão.", "Mantenha a coerência dos tempos verbais."])
  ]
},

71: {
  title: "Future, modal verbs e expressões de possibilidade e obrigação",
  goal: "Expressar planos, previsões, possibilidades, capacidades, conselhos e obrigações em inglês.",
  days: [
    lesson("Futuro com will",
      "Will é utilizado para falar de previsões, decisões tomadas no momento da fala, promessas e outras situações futuras.",
      ["I will study tomorrow.", "She will help you."],
      ["Will é seguido da forma básica do verbo.", "A forma negativa é will not ou won't."]),
    lesson("Futuro com going to",
      "Going to é utilizado frequentemente para expressar planos e intenções já estabelecidos e previsões baseadas em evidências presentes.",
      ["I am going to travel.", "Look at the clouds! It is going to rain."],
      ["Going to é acompanhado do verbo to be.", "Diferencie plano e previsão contextual."]),
    lesson("Will x going to",
      "Will e going to podem falar sobre o futuro, mas frequentemente destacam situações diferentes. O contexto ajuda a escolher a construção mais adequada.",
      ["I think it will be a good day.", "I am going to study tonight."],
      ["Observe intenção e contexto.", "Não escolha apenas pela tradução literal."]),
    lesson("Modal verb — can e could",
      "Can expressa capacidade, possibilidade ou permissão. Could pode expressar capacidade no passado, pedidos mais educados e possibilidades.",
      ["I can swim.", "Could you help me?", "She could run very fast when she was young."],
      ["Modais são seguidos pela forma básica do verbo.", "Não acrescente to depois de can ou could."]),
    lesson("Modal verbs — must, should e have to",
      "Must pode indicar obrigação forte ou necessidade. Should costuma expressar conselho. Have to indica obrigação ou necessidade, frequentemente relacionada a circunstâncias externas.",
      ["You should study.", "You must wear a seat belt.", "I have to work tomorrow."],
      ["Diferencie obrigação e conselho.", "Observe a força da recomendação."]),
    lesson("Possibilidade, obrigação e planos",
      "Combine estruturas de futuro e verbos modais para expressar intenções, previsões, capacidade, conselhos e obrigações em situações reais.",
      ["I might travel next week.", "You should practice more.", "We are going to study tomorrow."],
      ["Escolha a estrutura de acordo com o sentido.", "Pratique frases afirmativas, negativas e interrogativas."])
  ]
},

72: {
  title: "Present Perfect e contraste com Past Simple",
  goal: "Compreender o Present Perfect e diferenciá-lo do Simple Past em diferentes contextos.",
  days: [
    lesson("Formação do Present Perfect",
      "O Present Perfect é formado por have ou has seguido do particípio passado do verbo. Pode relacionar experiências ou acontecimentos passados ao presente.",
      ["I have studied English.", "She has visited Brazil."],
      ["Have acompanha I, you, we e they.", "Has acompanha he, she e it."]),
    lesson("Particípios e verbos irregulares",
      "O particípio passado é utilizado na formação do Present Perfect. Em verbos regulares, costuma terminar em ed; em irregulares, pode apresentar formas diferentes.",
      ["go/went/gone.", "see/saw/seen.", "study/studied/studied."],
      ["Diferencie passado simples e particípio.", "Estude os verbos irregulares mais frequentes."]),
    lesson("Usos do Present Perfect",
      "O Present Perfect pode expressar experiências de vida, ações iniciadas no passado que continuam no presente e acontecimentos passados com relevância atual.",
      ["I have never traveled abroad.", "She has lived here for five years."],
      ["Observe a relação com o presente.", "Contexto e marcadores temporais ajudam a interpretar."]),
    lesson("Ever, never, already, yet, for e since",
      "Essas expressões aparecem frequentemente com o Present Perfect. Ever pode perguntar sobre experiências; never indica ausência de experiência; already e yet indicam realização ou expectativa; for e since relacionam duração e início.",
      ["Have you ever traveled?", "I have never seen it.", "She has lived here since 2020."],
      ["For indica duração.", "Since indica o ponto de início."]),
    lesson("Present Perfect x Simple Past",
      "O Present Perfect geralmente conecta passado e presente, enquanto o Simple Past apresenta acontecimentos em um período passado definido ou encerrado.",
      ["I have visited London.", "I visited London in 2024."],
      ["Observe se o período passado está definido.", "Não use Present Perfect com marcadores de tempo passado encerrado em construções padrão."]),
    lesson("Experiências e acontecimentos",
      "Produza frases e pequenos relatos utilizando Present Perfect e Simple Past. Identifique quando uma experiência é apresentada de forma geral e quando um acontecimento específico é situado no passado.",
      ["Have you ever played tennis?", "Yes, I have. I played last weekend."],
      ["Use cada tempo conforme o contexto.", "Pratique perguntas e respostas completas."])
  ]
},

73: {
  title: "Preposições, conectivos, advérbios e formação de palavras",
  goal: "Ampliar a capacidade de conectar ideias, compreender relações gramaticais e reconhecer a formação do vocabulário.",
  days: [
    lesson("Preposições de lugar",
      "Preposições de lugar indicam a posição ou relação espacial entre elementos. In, on, at, under, behind, between e next to são exemplos frequentes.",
      ["The book is on the table.", "The cat is under the chair."],
      ["Observe a relação espacial.", "Aprenda preposições em frases completas."]),
    lesson("Preposições de tempo",
      "In, on e at são muito utilizadas para expressar tempo. In aparece frequentemente com meses e anos; on com dias e datas; at com horários e momentos específicos.",
      ["In July.", "On Monday.", "At 8 o'clock."],
      ["In, on e at possuem usos diferentes.", "Observe o tipo de referência temporal."]),
    lesson("Conectivos e relações de sentido",
      "Conectivos organizam a relação entre ideias. And adiciona informações; but apresenta contraste; because indica causa; so pode indicar consequência; although expressa concessão.",
      ["I was tired, but I continued.", "I stayed home because it was raining."],
      ["Identifique a relação entre as ideias.", "Escolha conectivos adequados ao contexto."]),
    lesson("Advérbios em inglês",
      "Advérbios podem indicar modo, frequência, tempo, lugar e intensidade. Muitos advérbios de modo são formados pelo acréscimo de ly ao adjetivo, embora existam exceções.",
      ["She speaks slowly.", "I always study.", "He is very happy."],
      ["Diferencie adjetivos e advérbios.", "Observe a posição do advérbio na frase."]),
    lesson("Formação de palavras",
      "O vocabulário pode ser ampliado por prefixos, sufixos e mudanças na classe gramatical. Reconhecer partes das palavras ajuda a inferir significados.",
      ["Happy → unhappy.", "Teach → teacher.", "Care → careful."],
      ["Prefixos podem modificar o sentido.", "Sufixos podem alterar a classe gramatical."]),
    lesson("Construção de textos conectados",
      "Utilize preposições, advérbios e conectivos para escrever pequenos textos com sequência lógica. Observe a ligação entre frases e a clareza das relações de sentido.",
      ["First, I study. Then, I practice. Finally, I rest."],
      ["Organize ideias em sequência.", "Evite conectivos que não correspondam ao sentido."])
  ]
},

74: {
  title: "Voz passiva e condicionais",
  goal: "Reconhecer a voz passiva e construir frases condicionais para expressar hipóteses e consequências.",
  days: [
    lesson("Voz ativa e voz passiva",
      "Na voz ativa, o sujeito realiza a ação. Na voz passiva, o sujeito recebe ou sofre a ação. A mudança de voz altera a organização da frase e o foco da informação.",
      ["The student wrote the text.", "The text was written by the student."],
      ["Identifique quem pratica e quem recebe a ação.", "Observe o foco da informação."]),
    lesson("Formação da voz passiva",
      "A voz passiva em inglês é formada pelo verbo to be no tempo adequado seguido do particípio passado do verbo principal.",
      ["The house is cleaned every day.", "The car was repaired yesterday."],
      ["A forma de to be muda conforme o tempo.", "O verbo principal aparece no particípio."]),
    lesson("First Conditional",
      "O First Conditional expressa situações futuras possíveis e suas consequências. Sua estrutura mais comum utiliza if seguido do Simple Present e uma oração principal com will.",
      ["If it rains, I will stay home.", "If you study, you will improve."],
      ["A condição aparece com if.", "O resultado apresenta uma consequência possível."]),
    lesson("Second Conditional",
      "O Second Conditional expressa situações hipotéticas ou pouco prováveis no presente ou futuro. Sua estrutura comum utiliza if com Simple Past e would na oração principal.",
      ["If I had more time, I would travel.", "If she studied more, she would improve."],
      ["A estrutura apresenta hipótese.", "Would é seguido da forma básica do verbo."]),
    lesson("Zero Conditional",
      "O Zero Conditional é utilizado para expressar fatos gerais, regras e relações que são consideradas verdadeiras. Sua estrutura mais comum utiliza Simple Present nas duas partes.",
      ["If you heat water to a suitable temperature, it boils.", "If plants don't receive water, they may dry out."],
      ["Relacione condição e resultado geral.", "Observe o uso do Simple Present."]),
    lesson("Comparação entre condicionais",
      "Compare Zero, First e Second Conditional. Observe se a frase apresenta um fato geral, uma possibilidade real futura ou uma hipótese.",
      ["If you mix red and blue, you get purple.", "If I study, I will pass.", "If I were rich, I would travel."],
      ["Identifique o grau de realidade da situação.", "Escolha a estrutura conforme o contexto."])
  ]
},

75: {
  title: "Interpretação, cognatos, falsos cognatos e vocabulário contextual",
  goal: "Desenvolver estratégias de leitura em inglês e compreender palavras pelo contexto.",
  days: [
    lesson("Estratégias de leitura",
      "A leitura em inglês pode começar pela identificação do tema, do título, das palavras conhecidas e da estrutura geral. Não é necessário traduzir cada palavra para compreender a ideia principal.",
      ["Observe títulos, subtítulos e imagens.", "Procure palavras repetidas e termos centrais."],
      ["Leia primeiro para identificar o assunto.", "Utilize pistas textuais."]),
    lesson("Cognatos",
      "Cognatos são palavras semelhantes em duas línguas que possuem origem relacionada e significado semelhante. Eles podem facilitar a compreensão de textos.",
      ["Important = importante.", "Different = diferente.", "Information = informação."],
      ["Cognatos ajudam na leitura.", "Confirme o sentido pelo contexto."]),
    lesson("Falsos cognatos",
      "Falsos cognatos são palavras que se parecem com palavras de outra língua, mas apresentam significados diferentes. Reconhecê-los evita erros de interpretação.",
      ["Actually significa na verdade.", "Pretend significa fingir.", "Library significa biblioteca."],
      ["Não traduza apenas pela semelhança.", "Aprenda falsos cognatos em contexto."]),
    lesson("Vocabulário contextual",
      "O significado de uma palavra desconhecida pode ser inferido por definições, exemplos, contrastes e informações ao redor. O contexto ajuda a compreender o sentido mais provável.",
      ["Uma frase pode explicar uma palavra desconhecida por meio de um exemplo."],
      ["Observe as palavras próximas.", "Confirme se o significado combina com o texto."]),
    lesson("Ideia principal e detalhes",
      "Textos apresentam ideias centrais e informações de apoio. Identificar a ideia principal permite compreender o objetivo geral, enquanto detalhes fornecem exemplos, dados e explicações.",
      ["Uma reportagem pode apresentar um tema central e vários dados de apoio."],
      ["Diferencie informação principal e secundária.", "Não confunda um exemplo com a tese do texto."]),
    lesson("Interpretação de textos curtos",
      "Pratique a leitura de pequenos textos narrativos, informativos e opinativos. Identifique tema, finalidade, informações explícitas, inferências e vocabulário contextual.",
      ["Leia um parágrafo e resuma sua ideia principal em uma frase."],
      ["Responda com base no texto.", "Justifique inferências com pistas."])
  ]
},

76: {
  title: "Revisão mais pesada — Inglês 1 e interpretação",
  goal: "Consolidar estruturas gramaticais, vocabulário e leitura em inglês estudados nas semanas 68 a 75.",
  days: [
    lesson("Revisão de estrutura e pronomes",
      "Revise ordem das palavras, pronomes pessoais, verbo to be, artigos e vocabulário básico. Construa frases afirmativas, negativas e interrogativas.",
      ["She is a student.", "Are they ready?"],
      ["Revise a ordem das palavras.", "Confira a concordância do verbo to be."]),
    lesson("Revisão de presente e passado",
      "Retome Simple Present, Present Continuous, Simple Past e Past Continuous. Diferencie hábitos, ações em andamento e acontecimentos passados.",
      ["I study every day.", "I am studying now.", "I studied yesterday."],
      ["Observe os marcadores temporais.", "Escolha o tempo verbal adequado."]),
    lesson("Revisão de futuro e modais",
      "Revise will, going to, can, could, must, should e have to. Identifique como cada estrutura expressa planos, previsões, capacidade, possibilidade e obrigação.",
      ["I will help you.", "You should rest.", "She can swim."],
      ["Diferencie conselho e obrigação.", "Revise a estrutura dos verbos modais."]),
    lesson("Revisão de Present Perfect",
      "Retome a formação com have ou has e particípio passado. Compare experiências relacionadas ao presente com acontecimentos situados em um período passado definido.",
      ["I have visited Brazil.", "I visited Brazil last year."],
      ["Revise os particípios.", "Diferencie Present Perfect e Simple Past."]),
    lesson("Revisão de preposições, conectivos e condicionais",
      "Revise preposições, advérbios, conectivos, formação de palavras, voz passiva e condicionais. Observe as relações gramaticais e os efeitos de sentido.",
      ["The book is on the table.", "If it rains, I will stay home."],
      ["Reconheça as estruturas.", "Analise a relação entre as orações."]),
    lesson("Simulado de interpretação e revisão",
      "Leia textos em inglês e responda questões de compreensão, vocabulário contextual, cognatos, falsos cognatos e estruturas gramaticais. Registre os erros e revise os assuntos mais difíceis.",
      ["Identifique a ideia principal.", "Explique o sentido de uma expressão pelo contexto."],
      ["Não dependa de tradução palavra por palavra.", "Justifique as respostas com evidências do texto."])
  ]
},

77: {
  title: "Função exponencial, equações exponenciais e transformações de gráficos",
  goal: "Compreender funções exponenciais, resolver equações e interpretar seus gráficos.",
  days: [
    lesson("Potências e propriedades",
      "A potenciação representa multiplicações repetidas. Suas propriedades permitem simplificar expressões e resolver problemas envolvendo expoentes inteiros e racionais.",
      ["2³ = 8.", "2² × 2³ = 2⁵.", "5⁰ = 1."],
      ["Revise produto e divisão de potências.", "Observe as condições das propriedades."]),
    lesson("Introdução à função exponencial",
      "Uma função exponencial possui a variável no expoente e pode ser escrita na forma f(x) = aˣ, com base positiva e diferente de 1. Seu comportamento depende do valor da base.",
      ["f(x) = 2ˣ.", "f(0) = 1.", "f(3) = 8."],
      ["A variável aparece no expoente.", "A base deve ser positiva e diferente de 1."]),
    lesson("Crescimento e decrescimento exponencial",
      "Quando a base é maior que 1, a função exponencial é crescente. Quando a base está entre 0 e 1, ela é decrescente. O gráfico se aproxima do eixo horizontal sem tocá-lo.",
      ["2ˣ é crescente.", "(1/2)ˣ é decrescente."],
      ["Compare a base com 1.", "Observe o comportamento do gráfico."]),
    lesson("Equações exponenciais",
      "Equações exponenciais apresentam incógnitas no expoente. Quando possível, escreva os dois lados com a mesma base para comparar os expoentes.",
      ["2ˣ = 8.", "Como 8 = 2³, então x = 3."],
      ["Procure bases equivalentes.", "Confira a solução na equação original."]),
    lesson("Transformações de gráficos",
      "Alterações na expressão de uma função podem deslocar ou modificar seu gráfico. Adições, multiplicações e mudanças na variável podem alterar posição, crescimento e escala.",
      ["f(x) = 2ˣ.", "g(x) = 2ˣ + 3 desloca o gráfico para cima."],
      ["Observe as transformações na expressão.", "Compare pontos antes e depois da mudança."]),
    lesson("Aplicações da função exponencial",
      "Funções exponenciais podem representar crescimento populacional, juros compostos, multiplicação de microrganismos e decaimento de determinadas grandezas.",
      ["Uma quantidade que dobra a cada período pode ser modelada por uma função exponencial."],
      ["Identifique a taxa de crescimento ou decaimento.", "Interprete o período utilizado no modelo."])
  ]
},

78: {
  title: "Função logarítmica, equações logarítmicas e função inversa",
  goal: "Compreender logaritmos como operações inversas da potenciação e resolver problemas logarítmicos.",
  days: [
    lesson("Definição de logaritmo",
      "O logaritmo responde à pergunta: a que expoente uma base deve ser elevada para produzir determinado resultado? É definido para base positiva diferente de 1 e argumento positivo.",
      ["log₂ 8 = 3, pois 2³ = 8.", "log₁₀ 100 = 2."],
      ["Logaritmo é inverso da potenciação.", "O argumento deve ser positivo."]),
    lesson("Propriedades dos logaritmos",
      "As propriedades dos logaritmos permitem transformar produtos em somas, divisões em subtrações e potências em multiplicações por expoentes.",
      ["log(ab) = log(a) + log(b), nas condições adequadas.", "log(a²) = 2log(a), para a positivo."],
      ["Confira as condições de existência.", "Utilize propriedades sem alterar a base."]),
    lesson("Função logarítmica",
      "A função logarítmica pode ser escrita como f(x) = logₐ(x), com base positiva diferente de 1. Seu domínio é formado pelos números reais positivos.",
      ["f(x) = log₂(x).", "f(1) = 0.", "f(8) = 3."],
      ["O domínio exige x positivo.", "O gráfico passa pelo ponto (1,0)."]),
    lesson("Equações logarítmicas",
      "Equações logarítmicas podem ser resolvidas utilizando propriedades dos logaritmos e relações entre logaritmos e potências. É fundamental verificar as condições de existência.",
      ["log₂(x) = 3 resulta em x = 8."],
      ["Verifique se os argumentos são positivos.", "Confira a solução na equação original."]),
    lesson("Função inversa",
      "Uma função inversa desfaz a operação realizada pela função original. A função exponencial e a logarítmica, com a mesma base, são funções inversas.",
      ["Se f(x) = 2ˣ, sua inversa é f⁻¹(x) = log₂(x)."],
      ["Funções inversas trocam domínio e imagem.", "Exponencial e logaritmo são operações inversas."]),
    lesson("Aplicações dos logaritmos",
      "Logaritmos são utilizados em escalas, modelos científicos, análise de crescimento e resolução de equações. A escala de pH e a escala de magnitude sísmica são exemplos de aplicações.",
      ["A escala de pH utiliza uma relação logarítmica.", "Logaritmos podem ajudar a encontrar o tempo necessário para um crescimento exponencial."],
      ["Identifique a base e o significado da escala.", "Interprete o resultado no contexto."])
  ]
},

79: {
  title: "PA, PG, sequências, recorrências e introdução aos somatórios",
  goal: "Identificar padrões numéricos, compreender progressões e representar sequências por fórmulas.",
  days: [
    lesson("Sequências numéricas",
      "Uma sequência é uma lista ordenada de números que segue uma regra de formação. Cada elemento ocupa uma posição chamada termo.",
      ["2, 4, 6, 8, 10...", "1, 2, 4, 8, 16..."],
      ["Identifique a regra de formação.", "Observe a posição de cada termo."]),
    lesson("Progressão aritmética",
      "Uma progressão aritmética é uma sequência em que a diferença entre termos consecutivos é constante. Essa diferença é chamada razão da PA.",
      ["2, 5, 8, 11... possui razão 3.", "10, 7, 4, 1... possui razão -3."],
      ["Calcule a diferença entre termos consecutivos.", "A razão pode ser positiva, negativa ou zero."]),
    lesson("Termo geral e soma da PA",
      "O termo geral permite encontrar qualquer posição da progressão sem escrever todos os termos anteriores. A soma dos termos pode ser calculada por uma fórmula que utiliza primeiro e último termos.",
      ["Em uma PA, a diferença entre termos consecutivos permanece constante."],
      ["Identifique primeiro termo e razão.", "Confira se o termo solicitado corresponde à posição correta."]),
    lesson("Progressão geométrica",
      "Uma progressão geométrica é uma sequência em que cada termo, a partir do segundo, é obtido multiplicando o anterior por uma razão constante.",
      ["2, 6, 18, 54... possui razão 3.", "80, 40, 20, 10... possui razão 1/2."],
      ["Calcule a divisão entre termos consecutivos.", "A razão da PG deve ser constante."]),
    lesson("Termo geral e soma da PG",
      "A fórmula do termo geral permite determinar posições de uma PG. A soma dos termos depende da quantidade de termos e da razão, com atenção aos casos especiais.",
      ["Em uma PG, os termos são relacionados por multiplicação constante."],
      ["Identifique o primeiro termo e a razão.", "Observe se a sequência é finita ou infinita."]),
    lesson("Recorrências e introdução aos somatórios",
      "Uma sequência recorrente define cada termo a partir de um ou mais termos anteriores. Somatórios utilizam o símbolo sigma para representar a soma organizada de vários termos.",
      ["Uma sequência pode ser definida por aₙ = aₙ₋₁ + 2.", "1 + 2 + 3 + 4 pode ser representado por um somatório."],
      ["Diferencie fórmula explícita e recorrente.", "Reconheça os limites e o termo geral de um somatório."])
  ]
},

80: {
  title: "Somatórios, polinômios, teorema do resto e relações entre raízes",
  goal: "Ampliar o domínio de expressões algébricas, somatórios e propriedades de polinômios.",
  days: [
    lesson("Notação sigma e propriedades",
      "A notação sigma representa somas de termos seguindo uma regra e limites definidos. Suas propriedades permitem separar somas, colocar constantes em evidência e simplificar expressões.",
      ["Σ de 1 até 4 de k = 1 + 2 + 3 + 4."],
      ["Identifique o índice e os limites.", "Observe a expressão que está sendo somada."]),
    lesson("Polinômios e operações",
      "Polinômios são expressões algébricas formadas por termos com coeficientes e potências inteiras não negativas da variável. Podem ser somados, subtraídos, multiplicados e divididos.",
      ["P(x) = 2x² + 3x + 1.", "O grau do polinômio é 2."],
      ["Identifique coeficientes e grau.", "Agrupe termos semelhantes."]),
    lesson("Valor numérico e raízes de polinômios",
      "O valor numérico é obtido substituindo a variável por um número. Uma raiz ou zero de um polinômio é um valor que torna a expressão igual a zero.",
      ["Se P(x) = x - 3, então P(3) = 0."],
      ["Substitua o valor com atenção.", "Verifique se o resultado é zero."]),
    lesson("Divisão de polinômios",
      "A divisão de polinômios organiza o processo de encontrar quociente e resto. O grau do resto deve ser menor que o grau do divisor, quando o resto não é nulo.",
      ["Um polinômio pode ser dividido por x - a."],
      ["Organize os termos por grau.", "Confira a identidade dividendo = divisor × quociente + resto."]),
    lesson("Teorema do resto e fator",
      "O teorema do resto afirma que o resto da divisão de um polinômio P(x) por x - a é P(a). Se P(a) = 0, então x - a é um fator do polinômio.",
      ["Se P(2) = 0, então x - 2 é um fator de P(x)."],
      ["Substitua a raiz no polinômio.", "Relacione resto zero e fator."]),
    lesson("Relações entre raízes e coeficientes",
      "As relações entre raízes e coeficientes permitem obter informações sobre as soluções de polinômios sem necessariamente calcular cada raiz. Nas equações quadráticas, a soma e o produto das raízes podem ser relacionados aos coeficientes.",
      ["Para ax² + bx + c = 0, a soma das raízes é -b/a e o produto é c/a, quando a é diferente de zero."],
      ["Identifique corretamente os coeficientes.", "Confira as relações com as raízes encontradas."])
  ]
},


81: {
  title: "Trigonometria: seno, cosseno, tangente, relações fundamentais e ciclo trigonométrico",
  goal: "Compreender as razões trigonométricas, suas relações e aplicações em triângulos e no ciclo trigonométrico.",
  days: [
    lesson("Ângulos e medidas",
      "Ângulos podem ser medidos em graus ou radianos. O radiano relaciona a medida do ângulo ao comprimento do arco de uma circunferência.",
      ["180° = π radianos.", "90° = π/2 radianos."],
      ["Diferencie graus e radianos.", "Reconheça ângulos notáveis."]),
    lesson("Seno, cosseno e tangente no triângulo retângulo",
      "As razões trigonométricas relacionam os lados de um triângulo retângulo. O seno relaciona cateto oposto e hipotenusa; o cosseno relaciona cateto adjacente e hipotenusa; a tangente relaciona cateto oposto e adjacente.",
      ["sen(θ) = cateto oposto / hipotenusa.", "cos(θ) = cateto adjacente / hipotenusa.", "tg(θ) = cateto oposto / cateto adjacente."],
      ["Identifique os lados em relação ao ângulo.", "Escolha a razão adequada."]),
    lesson("Ângulos notáveis",
      "Alguns ângulos possuem valores trigonométricos frequentemente utilizados em cálculos: 30°, 45° e 60°. Memorizar e compreender esses valores facilita a resolução de problemas.",
      ["sen(30°) = 1/2.", "cos(60°) = 1/2.", "tg(45°) = 1."],
      ["Revise os valores notáveis.", "Relacione seno, cosseno e tangente."]),
    lesson("Relações trigonométricas fundamentais",
      "As razões trigonométricas obedecem a relações algébricas importantes. A principal identidade relaciona seno e cosseno de um mesmo ângulo.",
      ["sen²(θ) + cos²(θ) = 1.", "tg(θ) = sen(θ) / cos(θ), quando cos(θ) é diferente de zero."],
      ["Utilize identidades para simplificar expressões.", "Observe as condições de existência."]),
    lesson("Ciclo trigonométrico",
      "O ciclo trigonométrico é uma circunferência de raio unitário utilizada para representar ângulos e valores de seno e cosseno. Ele permite trabalhar com ângulos maiores que 90° e também negativos.",
      ["O seno corresponde à coordenada vertical.", "O cosseno corresponde à coordenada horizontal."],
      ["Identifique os quadrantes.", "Observe os sinais das razões em cada quadrante."]),
    lesson("Aplicações da trigonometria",
      "A trigonometria permite calcular alturas, distâncias e inclinações sem realizar medições diretas. Também aparece em problemas de navegação, construção e física.",
      ["Uma altura pode ser estimada utilizando a distância até um objeto e o ângulo de elevação."],
      ["Represente o problema com um triângulo.", "Escolha a razão trigonométrica adequada."])
  ]
},

82: {
  title: "Funções trigonométricas, equações trigonométricas, leis dos senos e cossenos",
  goal: "Analisar funções trigonométricas, resolver equações e aplicar relações trigonométricas em triângulos quaisquer.",
  days: [
    lesson("Função seno e função cosseno",
      "As funções seno e cosseno associam números reais a valores entre -1 e 1. Seus gráficos apresentam comportamento periódico e repetem seus valores em intervalos regulares.",
      ["f(x) = sen(x).", "g(x) = cos(x)."],
      ["Reconheça amplitude e período.", "Observe os valores máximos e mínimos."]),
    lesson("Função tangente",
      "A função tangente é definida pela razão entre seno e cosseno quando o cosseno não é zero. Seu gráfico apresenta descontinuidades e períodos próprios.",
      ["tg(x) = sen(x) / cos(x)."],
      ["Identifique os pontos em que a tangente não está definida.", "Observe o comportamento periódico."]),
    lesson("Equações trigonométricas",
      "Equações trigonométricas envolvem razões como seno, cosseno e tangente. A resolução exige reconhecer valores notáveis, quadrantes e periodicidade.",
      ["sen(x) = 1/2 possui soluções em diferentes quadrantes.", "As soluções dependem do intervalo solicitado."],
      ["Considere todas as soluções do intervalo.", "Utilize o ciclo trigonométrico."]),
    lesson("Lei dos senos",
      "A lei dos senos relaciona os lados de um triângulo qualquer aos senos dos ângulos opostos. Ela pode ser utilizada quando se conhecem combinações adequadas de lados e ângulos.",
      ["a/sen(A) = b/sen(B) = c/sen(C)."],
      ["Associe cada lado ao ângulo oposto.", "Confira se os dados permitem aplicar a lei."]),
    lesson("Lei dos cossenos",
      "A lei dos cossenos relaciona os três lados de um triângulo e o cosseno de um de seus ângulos. É uma generalização do teorema de Pitágoras.",
      ["a² = b² + c² - 2bc cos(A)."],
      ["Identifique os lados adjacentes ao ângulo.", "Use a lei para encontrar lados ou ângulos."]),
    lesson("Problemas integrados de trigonometria",
      "Resolva situações que envolvam funções trigonométricas, equações, ciclo trigonométrico, lei dos senos e lei dos cossenos. Escolha a ferramenta matemática conforme os dados disponíveis.",
      ["Calcular a distância entre dois pontos a partir de um triângulo com ângulo conhecido."],
      ["Desenhe a situação.", "Justifique a escolha da relação trigonométrica."])
  ]
},

83: {
  title: "Geometria plana, ângulos, triângulos, congruência, semelhança e Pitágoras",
  goal: "Compreender propriedades geométricas e resolver problemas envolvendo figuras planas e triângulos.",
  days: [
    lesson("Pontos, retas, segmentos e ângulos",
      "A geometria plana estuda figuras em duas dimensões. Pontos, retas, segmentos e ângulos são elementos fundamentais para descrever e analisar essas figuras.",
      ["Retas paralelas não se cruzam no plano.", "Um ângulo reto mede 90°."],
      ["Reconheça os elementos geométricos.", "Classifique os ângulos."]),
    lesson("Classificação e propriedades dos triângulos",
      "Os triângulos podem ser classificados pelos lados e pelos ângulos. A soma dos ângulos internos de qualquer triângulo plano é 180°.",
      ["Equilátero: três lados iguais.", "Isósceles: dois lados iguais.", "Escaleno: lados diferentes."],
      ["Classifique lados e ângulos.", "Utilize a soma dos ângulos internos."]),
    lesson("Congruência de triângulos",
      "Dois triângulos são congruentes quando possuem a mesma forma e o mesmo tamanho. Critérios como LLL, LAL e ALA permitem verificar a congruência sem comparar todos os elementos individualmente.",
      ["LLL: três lados correspondentes iguais.", "LAL: dois lados e o ângulo entre eles iguais."],
      ["Identifique elementos correspondentes.", "Reconheça os critérios de congruência."]),
    lesson("Semelhança de triângulos",
      "Triângulos semelhantes possuem ângulos correspondentes iguais e lados correspondentes proporcionais. A semelhança permite calcular medidas desconhecidas utilizando proporções.",
      ["Dois triângulos podem ter a mesma forma e tamanhos diferentes."],
      ["Identifique ângulos correspondentes.", "Monte proporções entre os lados."]),
    lesson("Teorema de Pitágoras",
      "Em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos. Essa relação permite calcular lados desconhecidos.",
      ["a² = b² + c², com a como hipotenusa."],
      ["Identifique a hipotenusa.", "Aplique a relação somente em triângulos retângulos."]),
    lesson("Aplicações da geometria dos triângulos",
      "Utilize propriedades de ângulos, congruência, semelhança e Pitágoras para resolver problemas de medidas, distâncias e construções geométricas.",
      ["Calcular a diagonal de um retângulo utilizando seus lados."],
      ["Faça um desenho da situação.", "Verifique se os triângulos são retângulos ou semelhantes."])
  ]
},

84: {
  title: "Circunferência, polígonos, áreas, perímetros e introdução à geometria analítica",
  goal: "Calcular medidas de figuras planas e compreender a representação de pontos e figuras no plano cartesiano.",
  days: [
    lesson("Circunferência e círculo",
      "A circunferência é a linha formada pelos pontos que estão a uma mesma distância do centro. O círculo é a região plana delimitada por essa circunferência.",
      ["Diâmetro = 2 × raio.", "Comprimento da circunferência = 2πr."],
      ["Diferencie círculo e circunferência.", "Identifique raio e diâmetro."]),
    lesson("Polígonos e ângulos internos",
      "Polígonos são figuras planas fechadas formadas por segmentos de reta. A soma dos ângulos internos depende da quantidade de lados.",
      ["Soma dos ângulos internos = (n - 2) × 180°."],
      ["Conte os lados do polígono.", "Diferencie polígonos regulares e irregulares."]),
    lesson("Perímetros e áreas",
      "O perímetro representa o comprimento do contorno de uma figura. A área mede a superfície ocupada por ela. Cada figura possui fórmulas específicas para o cálculo.",
      ["Retângulo: A = base × altura.", "Triângulo: A = base × altura / 2.", "Círculo: A = πr²."],
      ["Diferencie área e perímetro.", "Confira as unidades utilizadas."]),
    lesson("Áreas de figuras compostas",
      "Figuras compostas podem ser divididas em formas geométricas conhecidas. A área total pode ser calculada somando ou subtraindo áreas parciais.",
      ["Uma figura em formato de L pode ser dividida em dois retângulos."],
      ["Divida a figura em partes simples.", "Evite contar regiões duas vezes."]),
    lesson("Plano cartesiano e localização de pontos",
      "O plano cartesiano é formado por dois eixos perpendiculares: o eixo horizontal x e o vertical y. Um ponto é representado por um par ordenado.",
      ["O ponto (3, 2) possui x = 3 e y = 2."],
      ["Observe a ordem das coordenadas.", "Identifique os quatro quadrantes."]),
    lesson("Introdução à geometria analítica",
      "A geometria analítica utiliza coordenadas e expressões algébricas para estudar pontos, retas e figuras geométricas. Ela conecta a geometria à álgebra.",
      ["Pontos podem ser representados por pares ordenados.", "Retas podem ser descritas por equações."],
      ["Relacione desenho e expressão algébrica.", "Interprete coordenadas no plano."])
  ]
},

85: {
  title: "Revisão geral — Matemática 1 + 2",
  goal: "Consolidar os conteúdos matemáticos estudados nas semanas 1 a 84 e identificar dificuldades para os próximos blocos.",
  days: [
    lesson("Revisão de álgebra, equações e funções",
      "Revise conjuntos numéricos, operações, expressões algébricas, equações, inequações, sistemas e funções. Reforce interpretação de gráficos e propriedades algébricas.",
      ["Resolva equações e interprete seus resultados."],
      ["Organize os cálculos.", "Confira as condições de cada operação."]),
    lesson("Revisão de funções exponenciais e logarítmicas",
      "Retome crescimento e decrescimento exponencial, propriedades dos logaritmos, equações e relação entre funções inversas.",
      ["Compare f(x) = 2ˣ com sua função inversa."],
      ["Revise domínio e imagem.", "Confira as condições dos logaritmos."]),
    lesson("Revisão de PA, PG e polinômios",
      "Revise sequências, progressões, recorrências, somatórios, operações com polinômios, raízes e teorema do resto.",
      ["Identifique a razão de uma PA e de uma PG."],
      ["Diferencie progressões aritméticas e geométricas.", "Revise relações entre raízes e coeficientes."]),
    lesson("Revisão de trigonometria",
      "Retome seno, cosseno, tangente, ângulos notáveis, ciclo trigonométrico, funções e equações trigonométricas, além das leis dos senos e cossenos.",
      ["Resolva um problema de triângulo utilizando uma razão trigonométrica."],
      ["Revise os sinais por quadrante.", "Escolha a relação adequada."]),
    lesson("Revisão de geometria plana",
      "Revise ângulos, triângulos, congruência, semelhança, Pitágoras, circunferência, polígonos, áreas e perímetros.",
      ["Calcule a área de uma figura composta."],
      ["Desenhe e identifique as medidas.", "Confira unidades e fórmulas."]),
    lesson("Simulado integrado de Matemática 1 + 2",
      "Resolva problemas que combinem álgebra, funções, progressões, polinômios, trigonometria e geometria. Analise os erros e registre os conteúdos que precisam de reforço.",
      ["Questões com interpretação de gráficos, equações e figuras geométricas."],
      ["Leia os enunciados com atenção.", "Registre erros de cálculo e de interpretação."])
  ]
},

86: {
  title: "Trabalho, energia cinética, energia potencial e energia mecânica",
  goal: "Compreender o trabalho realizado por forças e as diferentes formas de energia mecânica.",
  days: [
    lesson("Conceito de trabalho na Física",
      "O trabalho de uma força está relacionado à transferência de energia durante um deslocamento. Para uma força constante na mesma direção do deslocamento, o trabalho é o produto da força pela distância.",
      ["W = F × d, quando força e deslocamento possuem a mesma direção."],
      ["Trabalho é uma grandeza escalar.", "Observe a direção da força e do deslocamento."]),
    lesson("Trabalho de forças em diferentes direções",
      "Quando uma força forma um ângulo com o deslocamento, somente sua componente na direção do movimento realiza trabalho. O sinal do trabalho depende da relação entre força e deslocamento.",
      ["W = F × d × cos(θ)."],
      ["Trabalho positivo favorece o deslocamento.", "Trabalho negativo se opõe ao deslocamento."]),
    lesson("Energia cinética",
      "A energia cinética está associada ao movimento de um corpo. Ela depende da massa e do quadrado da velocidade.",
      ["Ec = mv²/2."],
      ["A velocidade influencia quadraticamente a energia.", "Utilize unidades do Sistema Internacional."]),
    lesson("Energia potencial gravitacional",
      "A energia potencial gravitacional está relacionada à posição de um corpo em um campo gravitacional. Próximo à superfície terrestre, depende da massa, gravidade e altura em relação a uma referência.",
      ["Epg = mgh."],
      ["Defina a referência de altura.", "Observe a influência da massa e da gravidade."]),
    lesson("Energia potencial elástica",
      "A energia potencial elástica é armazenada em sistemas deformados, como molas ideais. Ela depende da constante elástica e da deformação.",
      ["Epe = kx²/2."],
      ["Identifique a constante elástica.", "A deformação é medida em relação ao equilíbrio."]),
    lesson("Energia mecânica",
      "A energia mecânica é a soma das energias cinética e potencial. Ela permite analisar transformações entre movimento e posição em diferentes situações.",
      ["Em = Ec + Ep."],
      ["Identifique as formas de energia presentes.", "Observe como a energia se transforma."])
  ]
},

87: {
  title: "Conservação da energia, potência e rendimento",
  goal: "Analisar transformações e conservação de energia, além de calcular potência e rendimento de sistemas.",
  days: [
    lesson("Princípio da conservação da energia",
      "A energia não é criada nem destruída em um sistema isolado: ela pode ser transferida ou transformada. Em situações mecânicas ideais, a energia mecânica total permanece constante.",
      ["Energia potencial pode se transformar em energia cinética."],
      ["Diferencie conservação e transformação.", "Identifique o sistema analisado."]),
    lesson("Conservação da energia mecânica",
      "Quando apenas forças conservativas realizam trabalho, a soma das energias cinética e potencial permanece constante. A análise permite comparar diferentes posições de um movimento.",
      ["Ec inicial + Ep inicial = Ec final + Ep final."],
      ["Compare estados inicial e final.", "Verifique se há forças dissipativas."]),
    lesson("Forças dissipativas e energia",
      "Forças como o atrito podem transformar parte da energia mecânica em energia térmica. A energia total continua conservada, mas a energia mecânica pode diminuir.",
      ["O atrito transforma parte da energia mecânica em energia interna."],
      ["Não confunda perda de energia mecânica com desaparecimento de energia.", "Considere o ambiente."]),
    lesson("Potência",
      "Potência é a rapidez com que o trabalho é realizado ou a energia é transferida. Ela relaciona trabalho ou energia ao intervalo de tempo.",
      ["P = W/Δt.", "P = ΔE/Δt."],
      ["A unidade de potência é o watt.", "Compare sistemas que realizam o mesmo trabalho em tempos diferentes."]),
    lesson("Rendimento",
      "O rendimento compara a energia útil obtida com a energia total fornecida. Em sistemas reais, parte da energia pode ser dissipada em processos não aproveitados.",
      ["η = energia útil / energia fornecida."],
      ["O rendimento é geralmente expresso em porcentagem.", "Diferencie entrada e saída de energia."]),
    lesson("Aplicações de conservação, potência e rendimento",
      "Analise máquinas e situações físicas utilizando conservação de energia, potência e rendimento. Interprete resultados e identifique perdas energéticas.",
      ["Comparar a potência de dois motores.", "Calcular o rendimento de uma máquina."],
      ["Organize os dados do problema.", "Interprete o resultado no contexto físico."])
  ]
},

88: {
  title: "Quantidade de movimento, impulso, colisões e conservação",
  goal: "Compreender o movimento de corpos por meio da quantidade de movimento e analisar interações e colisões.",
  days: [
    lesson("Quantidade de movimento",
      "A quantidade de movimento, também chamada de momento linear, é uma grandeza vetorial que depende da massa e da velocidade de um corpo.",
      ["p = mv."],
      ["Considere direção e sentido da velocidade.", "A unidade no SI é kg·m/s."]),
    lesson("Impulso de uma força",
      "O impulso representa o efeito de uma força aplicada durante determinado intervalo de tempo. Para uma força constante, é calculado pelo produto da força pelo tempo de aplicação.",
      ["I = F × Δt."],
      ["Considere intensidade e duração da força.", "A unidade é N·s."]),
    lesson("Teorema do impulso",
      "O impulso resultante sobre um corpo é igual à variação de sua quantidade de movimento. Essa relação conecta força, tempo e mudança no movimento.",
      ["I = Δp."],
      ["Compare os estados inicial e final.", "Considere a quantidade de movimento vetorial."]),
    lesson("Sistemas e conservação da quantidade de movimento",
      "Em um sistema isolado, a quantidade de movimento total permanece constante. Interações internas podem modificar os movimentos individuais sem alterar a soma vetorial total.",
      ["p total inicial = p total final."],
      ["Defina os corpos que pertencem ao sistema.", "Observe forças externas e internas."]),
    lesson("Colisões",
      "Colisões são interações em que corpos exercem forças uns sobre os outros durante um intervalo relativamente curto. Podem ser classificadas conforme a conservação da energia cinética.",
      ["Colisão elástica conserva energia cinética.", "Colisão perfeitamente inelástica mantém os corpos unidos após o choque."],
      ["A quantidade de movimento é conservada em sistema isolado.", "Diferencie os tipos de colisão."]),
    lesson("Problemas de impulso e colisões",
      "Resolva problemas envolvendo força, tempo, velocidade, massa e colisões. Utilize conservação da quantidade de movimento e identifique quando a energia cinética também é conservada.",
      ["Comparar velocidades antes e depois de uma colisão."],
      ["Escolha o sistema corretamente.", "Confira sinais e direções."])
  ]
},

89: {
  title: "Gravitação universal, campo gravitacional, órbitas e leis de Kepler",
  goal: "Compreender a interação gravitacional e explicar movimentos orbitais e regularidades do Sistema Solar.",
  days: [
    lesson("Lei da gravitação universal",
      "A gravitação universal descreve a atração entre corpos que possuem massa. A intensidade da força depende das massas e da distância entre seus centros.",
      ["F = G × m1 × m2 / r²."],
      ["A força aumenta com as massas.", "A força diminui com o quadrado da distância."]),
    lesson("Campo gravitacional",
      "O campo gravitacional descreve a influência que uma massa exerce sobre o espaço ao seu redor. Ele permite analisar a força gravitacional sobre outros corpos.",
      ["Próximo à superfície terrestre, g representa a aceleração da gravidade."],
      ["Diferencie campo e força gravitacional.", "Observe a relação com a massa geradora."]),
    lesson("Gravidade e peso",
      "O peso é a força gravitacional exercida sobre um corpo. Sua intensidade próxima à superfície terrestre é calculada multiplicando massa pela aceleração da gravidade.",
      ["P = mg."],
      ["Massa e peso são grandezas diferentes.", "O peso pode variar conforme o campo gravitacional."]),
    lesson("Órbitas e movimento dos satélites",
      "Um satélite permanece em órbita quando sua velocidade e a atração gravitacional produzem uma trajetória ao redor de outro corpo. A gravidade fornece a força centrípeta necessária.",
      ["A Lua orbita a Terra.", "Satélites artificiais podem permanecer em diferentes órbitas."],
      ["Relacione gravidade e movimento circular.", "Observe a altitude e a velocidade orbital."]),
    lesson("Leis de Kepler",
      "As leis de Kepler descrevem regularidades do movimento dos planetas: órbitas elípticas, áreas iguais em tempos iguais e relação entre período orbital e tamanho da órbita.",
      ["A segunda lei relaciona áreas varridas e intervalos de tempo.", "A terceira lei relaciona período orbital e semieixo maior."],
      ["Diferencie as três leis.", "Relacione período e distância orbital."]),
    lesson("Aplicações da gravitação",
      "Utilize a gravitação universal e as leis de Kepler para interpretar órbitas, satélites, movimentos planetários e fenômenos astronômicos.",
      ["Comparar períodos orbitais de planetas."],
      ["Identifique as grandezas envolvidas.", "Explique o papel da gravidade nas órbitas."])
  ]
},

90: {
  title: "Densidade, pressão, pressão atmosférica, Pascal, Arquimedes e empuxo",
  goal: "Compreender propriedades dos fluidos e analisar situações de pressão, equilíbrio e flutuação.",
  days: [
    lesson("Densidade",
      "A densidade relaciona a massa de uma substância ao volume ocupado. É uma propriedade importante para comparar materiais e compreender o comportamento de corpos em fluidos.",
      ["d = m/V."],
      ["Utilize unidades compatíveis.", "Diferencie massa, volume e densidade."]),
    lesson("Pressão",
      "Pressão é a razão entre a força perpendicular aplicada e a área sobre a qual ela atua. A mesma força pode produzir pressões diferentes conforme a área de contato.",
      ["p = F/A."],
      ["A unidade no SI é o pascal.", "Observe a área de aplicação."]),
    lesson("Pressão hidrostática e pressão atmosférica",
      "Em um fluido em repouso, a pressão aumenta com a profundidade. A pressão atmosférica resulta do peso da coluna de ar sobre uma superfície.",
      ["A pressão hidrostática depende da densidade do fluido, da gravidade e da profundidade."],
      ["Compare pontos em diferentes profundidades.", "Diferencie pressão absoluta e manométrica."]),
    lesson("Princípio de Pascal",
      "Uma variação de pressão aplicada a um fluido confinado é transmitida integralmente a todos os pontos do fluido e às paredes do recipiente.",
      ["Prensas hidráulicas utilizam esse princípio."],
      ["Relacione força e área nos êmbolos.", "Observe a transmissão da pressão."]),
    lesson("Princípio de Arquimedes e empuxo",
      "Um corpo imerso em um fluido recebe uma força vertical para cima chamada empuxo. Sua intensidade corresponde ao peso do fluido deslocado.",
      ["E = ρ × g × V deslocado."],
      ["Identifique o volume de fluido deslocado.", "Diferencie peso e empuxo."]),
    lesson("Flutuação e aplicações dos fluidos",
      "O comportamento de um corpo em um fluido depende da relação entre peso, empuxo e densidades. Esses princípios explicam a flutuação de embarcações e o funcionamento de instrumentos.",
      ["Um corpo pode flutuar quando o empuxo equilibra seu peso."],
      ["Compare densidades médias.", "Analise as forças no equilíbrio."])
  ]
},

91: {
  title: "Temperatura, escalas, calor, calor específico, mudanças de estado e dilatação",
  goal: "Diferenciar temperatura e calor e compreender as trocas térmicas e as mudanças de estado físico.",
  days: [
    lesson("Temperatura e equilíbrio térmico",
      "A temperatura está relacionada ao estado térmico de um sistema. Quando dois corpos em contato atingem a mesma temperatura, estão em equilíbrio térmico.",
      ["Um termômetro mede a temperatura de um corpo."],
      ["Diferencie temperatura e energia térmica.", "Compreenda o equilíbrio térmico."]),
    lesson("Escalas termométricas",
      "As escalas Celsius, Fahrenheit e Kelvin representam temperaturas com pontos de referência e divisões diferentes. Conversões permitem comparar medidas.",
      ["K = °C + 273,15.", "°F = (9/5) × °C + 32."],
      ["Reconheça as escalas.", "Utilize a fórmula de conversão adequada."]),
    lesson("Calor e transferência de energia",
      "Calor é a energia transferida entre corpos devido à diferença de temperatura. A transferência pode ocorrer por condução, convecção ou radiação.",
      ["Uma colher metálica pode aquecer por condução.", "O Sol transfere energia por radiação."],
      ["Diferencie os três mecanismos.", "Calor é energia em trânsito."]),
    lesson("Calor específico e capacidade térmica",
      "O calor específico indica a quantidade de energia necessária para variar a temperatura de uma unidade de massa de uma substância. A capacidade térmica relaciona energia e variação de temperatura de um corpo.",
      ["Q = m × c × ΔT."],
      ["Identifique massa, calor específico e variação térmica.", "Utilize unidades consistentes."]),
    lesson("Mudanças de estado físico",
      "A matéria pode passar entre os estados sólido, líquido e gasoso. Durante uma mudança de estado de uma substância pura, a temperatura pode permanecer constante enquanto ocorre a transformação.",
      ["Fusão: sólido para líquido.", "Vaporização: líquido para gasoso.", "Condensação: gasoso para líquido."],
      ["Reconheça os processos.", "Diferencie calor sensível e calor latente."]),
    lesson("Dilatação térmica",
      "A maioria dos materiais varia suas dimensões quando sofre alteração de temperatura. A dilatação pode ser linear, superficial ou volumétrica.",
      ["A dilatação linear depende do comprimento inicial, do coeficiente e da variação de temperatura."],
      ["Identifique o tipo de dilatação.", "Considere o material e a variação térmica."])
  ]
},

92: {
  title: "Gases, transformações gasosas, trabalho de um gás e primeira lei da Termodinâmica",
  goal: "Analisar o comportamento dos gases e relacionar calor, trabalho e energia interna.",
  days: [
    lesson("Modelo de gás ideal",
      "O modelo de gás ideal simplifica o comportamento dos gases considerando partículas em movimento aleatório e interações desprezíveis, exceto durante colisões. É uma aproximação útil em muitas situações.",
      ["PV = nRT."],
      ["Identifique pressão, volume, quantidade de matéria e temperatura.", "Utilize temperatura absoluta."]),
    lesson("Transformações isotérmicas",
      "Em uma transformação isotérmica, a temperatura permanece constante. Para uma quantidade fixa de gás ideal, pressão e volume variam de forma inversamente proporcional.",
      ["P1V1 = P2V2."],
      ["Mantenha a temperatura constante.", "Observe a relação entre pressão e volume."]),
    lesson("Transformações isobáricas e isovolumétricas",
      "Na transformação isobárica, a pressão permanece constante. Na transformação isovolumétrica, o volume permanece constante. Cada processo apresenta relações específicas entre as grandezas.",
      ["Isobárica: V/T constante.", "Isovolumétrica: P/T constante."],
      ["Identifique a grandeza constante.", "Utilize temperatura em kelvin."]),
    lesson("Trabalho realizado por um gás",
      "Um gás pode realizar trabalho ao expandir ou receber trabalho ao ser comprimido. Em um processo com pressão constante, o trabalho depende da pressão e da variação do volume.",
      ["W = P × ΔV, em pressão constante."],
      ["Expansão e compressão possuem sinais diferentes conforme a convenção adotada.", "Observe o gráfico pressão-volume."]),
    lesson("Energia interna e primeira lei da Termodinâmica",
      "A primeira lei da Termodinâmica expressa a conservação da energia em processos térmicos. A variação da energia interna depende do calor recebido e do trabalho realizado, conforme a convenção escolhida.",
      ["ΔU = Q - W, quando W representa o trabalho realizado pelo gás."],
      ["Defina a convenção de sinais.", "Diferencie calor, trabalho e energia interna."]),
    lesson("Aplicações da Termodinâmica",
      "Analise processos envolvendo aquecimento, resfriamento, expansão e compressão de gases. Utilize as leis dos gases e a primeira lei da Termodinâmica para interpretar as transformações.",
      ["Comparar estados inicial e final de um gás ideal."],
      ["Organize as grandezas em cada estado.", "Confira sinais e unidades."])
  ]
},

93: {
  title: "Máquinas térmicas + ondas: frequência, período, comprimento de onda, reflexão, refração, interferência, difração e som",
  goal: "Compreender o funcionamento básico das máquinas térmicas e as propriedades fundamentais das ondas.",
  days: [
    lesson("Máquinas térmicas",
      "Máquinas térmicas são sistemas que operam com trocas de energia térmica e trabalho. Elas recebem energia de uma fonte quente, transformam parte em trabalho e transferem o restante para uma fonte fria.",
      ["Motores térmicos convertem parte da energia térmica em trabalho."],
      ["Identifique fonte quente e fonte fria.", "Observe a energia recebida, o trabalho e o calor rejeitado."]),
    lesson("Rendimento e segunda lei da Termodinâmica",
      "O rendimento de uma máquina térmica indica a fração da energia recebida que é convertida em trabalho útil. A segunda lei estabelece limitações para essas transformações e para o fluxo espontâneo de calor.",
      ["η = W/Q recebido."],
      ["Nenhuma máquina térmica real converte todo o calor recebido em trabalho.", "Diferencie eficiência e conservação de energia."]),
    lesson("Conceito e classificação das ondas",
      "Ondas são perturbações que transportam energia sem transportar matéria de forma líquida. Podem ser classificadas como mecânicas ou eletromagnéticas e como transversais ou longitudinais.",
      ["O som é uma onda mecânica.", "A luz é uma onda eletromagnética."],
      ["Diferencie ondas mecânicas e eletromagnéticas.", "Observe a direção da vibração."]),
    lesson("Frequência, período e comprimento de onda",
      "A frequência indica o número de oscilações por segundo. O período é o tempo de uma oscilação completa. O comprimento de onda representa a distância entre pontos equivalentes consecutivos.",
      ["f = 1/T.", "v = λf."],
      ["Frequência é medida em hertz.", "Relacione velocidade, frequência e comprimento de onda."]),
    lesson("Reflexão, refração, interferência e difração",
      "Ondas podem sofrer reflexão ao encontrar uma superfície, refração ao mudar de meio, interferência ao se superpor e difração ao contornar obstáculos ou atravessar aberturas.",
      ["O eco é um exemplo de reflexão sonora.", "A mudança de meio pode alterar a velocidade da onda."],
      ["Reconheça cada fenômeno.", "Observe o que muda e o que permanece."]),
    lesson("Som e fenômenos acústicos",
      "O som é uma onda mecânica que se propaga em meios materiais. Altura está relacionada à frequência, intensidade à amplitude e timbre às características da fonte sonora.",
      ["Sons agudos possuem frequências maiores que sons graves."],
      ["Diferencie altura, intensidade e timbre.", "Relacione o som ao meio de propagação."])
  ]
},

94: {
  title: "Revisão geral — Física 1 + 2",
  goal: "Consolidar os conteúdos de mecânica, gravitação, fluidos, termologia, termodinâmica e ondas.",
  days: [
    lesson("Revisão de cinemática e dinâmica",
      "Revise movimento uniforme, movimento uniformemente variado, lançamentos, leis de Newton, atrito, força elástica e movimento circular.",
      ["Interprete gráficos de posição, velocidade e aceleração."],
      ["Diferencie grandezas escalares e vetoriais.", "Revise as leis de Newton."]),
    lesson("Revisão de trabalho, energia e quantidade de movimento",
      "Retome trabalho, energia cinética e potencial, conservação da energia, potência, rendimento, impulso e colisões.",
      ["Compare energia mecânica e quantidade de movimento."],
      ["Identifique o sistema.", "Escolha a lei de conservação adequada."]),
    lesson("Revisão de gravitação e órbitas",
      "Revise gravitação universal, campo gravitacional, peso, satélites e leis de Kepler.",
      ["Explique como a gravidade mantém satélites em órbita."],
      ["Relacione força e movimento circular.", "Revise as leis de Kepler."]),
    lesson("Revisão de densidade, pressão e empuxo",
      "Retome densidade, pressão, pressão hidrostática, pressão atmosférica, princípio de Pascal, princípio de Arquimedes e flutuação.",
      ["Analise um corpo parcialmente imerso em um fluido."],
      ["Diferencie pressão e densidade.", "Compare peso e empuxo."]),
    lesson("Revisão de calor e Termodinâmica",
      "Revise temperatura, escalas, calor, calor específico, mudanças de estado, dilatação, gases e primeira lei da Termodinâmica.",
      ["Interprete uma transformação gasosa."],
      ["Diferencie calor e temperatura.", "Confira a convenção de sinais."]),
    lesson("Revisão de máquinas térmicas e ondas",
      "Consolide máquinas térmicas, rendimento, propriedades das ondas, frequência, período, comprimento de onda, fenômenos ondulatórios e som.",
      ["Resolva questões envolvendo v = λf."],
      ["Identifique fenômenos ondulatórios.", "Revise os conceitos de acústica."])
  ]
},

95: {
  title: "Genética mendeliana, leis de Mendel, dominância e heredogramas",
  goal: "Compreender os princípios básicos da hereditariedade e analisar cruzamentos genéticos e heredogramas.",
  days: [
    lesson("Conceitos fundamentais de genética",
      "A genética estuda a hereditariedade e a variação dos organismos. Genes são segmentos de DNA associados a características, e alelos são versões de um mesmo gene.",
      ["Um indivíduo pode apresentar dois alelos para determinado gene em organismos diploides."],
      ["Diferencie gene, alelo, cromossomo e característica.", "Compreenda o papel do DNA."]),
    lesson("Genótipo e fenótipo",
      "Genótipo é a constituição genética de um indivíduo para determinada característica. Fenótipo é o conjunto de características observáveis, influenciado pela interação entre genes e ambiente.",
      ["AA e Aa podem apresentar o mesmo fenótipo em dominância completa."],
      ["Diferencie constituição genética e característica observável.", "Considere a influência ambiental."]),
    lesson("Primeira lei de Mendel",
      "A primeira lei de Mendel, também chamada lei da segregação dos fatores, afirma que os dois alelos de um indivíduo se separam durante a formação dos gametas, de modo que cada gameta recebe apenas um deles.",
      ["Um indivíduo Aa pode formar gametas A e a."],
      ["Compreenda a segregação dos alelos.", "Identifique os gametas possíveis."]),
    lesson("Cruzamentos e quadro de Punnett",
      "O quadro de Punnett organiza as combinações possíveis entre gametas dos genitores. Ele permite estimar proporções genotípicas e fenotípicas em cruzamentos simples.",
      ["Aa × Aa pode produzir AA, Aa, Aa e aa."],
      ["Liste os gametas de cada genitor.", "Diferencie proporção genotípica e fenotípica."]),
    lesson("Dominância completa e cruzamentos",
      "Na dominância completa, um alelo dominante determina o fenótipo mesmo quando está acompanhado de um alelo recessivo. O fenótipo recessivo aparece quando os dois alelos são recessivos.",
      ["Em Aa, A pode determinar o fenótipo dominante.", "Em aa, manifesta-se o fenótipo recessivo."],
      ["Diferencie homozigoto e heterozigoto.", "Não confunda alelo dominante com alelo mais frequente."]),
    lesson("Heredogramas e análise familiar",
      "Heredogramas representam relações familiares e a transmissão de características ao longo das gerações. Símbolos convencionais indicam indivíduos e características, permitindo formular hipóteses sobre padrões de herança.",
      ["Quadrados representam tradicionalmente indivíduos do sexo masculino e círculos indivíduos do sexo feminino."],
      ["Leia as gerações e relações familiares.", "Utilize os padrões observados para inferir genótipos possíveis."])
  ]
},


96: {
  title: "Codominância, alelos múltiplos, ligação gênica e crossing-over",
  goal: "Compreender padrões de herança que vão além da dominância completa e analisar a transmissão de genes.",
  days: [
    lesson("Dominância incompleta",
      "Na dominância incompleta, o heterozigoto apresenta um fenótipo intermediário entre os dois homozigotos. Nenhum alelo determina sozinho o fenótipo completo.",
      ["Uma flor vermelha cruzada com uma branca pode gerar flores rosas."],
      ["Diferencie dominância incompleta de dominância completa.", "Observe o fenótipo dos heterozigotos."]),
    lesson("Codominância",
      "Na codominância, os dois alelos se manifestam simultaneamente no fenótipo do heterozigoto. Não ocorre uma simples mistura intermediária.",
      ["O sistema sanguíneo ABO apresenta codominância entre os alelos IA e IB."],
      ["Diferencie codominância e dominância incompleta.", "Reconheça a expressão simultânea dos alelos."]),
    lesson("Alelos múltiplos",
      "Uma característica pode ser determinada por mais de dois alelos possíveis na população, embora cada indivíduo diploide possua apenas dois alelos para aquele gene.",
      ["O sistema ABO possui os alelos IA, IB e i."],
      ["Diferencie alelos existentes na população e alelos de um indivíduo.", "Analise as combinações possíveis."]),
    lesson("Sistema sanguíneo ABO e fator Rh",
      "Os grupos sanguíneos ABO dependem de combinações de alelos. O fator Rh é outra característica hereditária, frequentemente estudada em conjunto com o sistema ABO.",
      ["IAIB corresponde ao grupo AB.", "ii corresponde ao grupo O."],
      ["Identifique genótipos possíveis.", "Diferencie sistema ABO e fator Rh."]),
    lesson("Ligação gênica",
      "Genes localizados no mesmo cromossomo podem apresentar tendência a serem herdados juntos. Esse fenômeno é chamado ligação gênica e pode alterar as proporções esperadas em cruzamentos independentes.",
      ["Genes próximos no mesmo cromossomo tendem a apresentar maior ligação."],
      ["Diferencie genes ligados e segregação independente.", "Relacione posição cromossômica e herança."]),
    lesson("Crossing-over e recombinação genética",
      "Durante a meiose, cromossomos homólogos podem trocar segmentos, processo chamado crossing-over. Essa troca produz novas combinações de alelos e contribui para a variabilidade genética.",
      ["O crossing-over ocorre durante a prófase I da meiose."],
      ["Reconheça o papel da recombinação.", "Relacione crossing-over e variabilidade genética."])
  ]
},

97: {
  title: "DNA, replicação, transcrição, tradução e código genético",
  goal: "Compreender como a informação genética é armazenada, copiada e utilizada na produção de proteínas.",
  days: [
    lesson("Estrutura do DNA",
      "O DNA é uma molécula formada por nucleotídeos organizados em duas cadeias complementares. Sua estrutura de dupla hélice permite armazenar informações hereditárias.",
      ["Adenina se emparelha com timina.", "Citosina se emparelha com guanina."],
      ["Identifique os componentes dos nucleotídeos.", "Compreenda a complementaridade das bases."]),
    lesson("Replicação do DNA",
      "A replicação é o processo pelo qual uma molécula de DNA origina duas moléculas com a mesma informação genética. É considerada semiconservativa porque cada molécula formada mantém uma fita original.",
      ["Cada molécula nova contém uma fita antiga e uma fita recém-sintetizada."],
      ["Entenda o caráter semiconservativo.", "Reconheça a importância da complementaridade."]),
    lesson("RNA e transcrição",
      "O RNA participa da expressão da informação genética. Na transcrição, uma sequência de DNA serve de molde para a produção de uma molécula de RNA.",
      ["O RNA utiliza uracila no lugar da timina.", "O RNA mensageiro transporta a informação para a síntese proteica."],
      ["Diferencie DNA e RNA.", "Compreenda o papel da transcrição."]),
    lesson("Tipos de RNA",
      "Diferentes tipos de RNA participam da produção de proteínas. O RNA mensageiro leva a informação, o transportador carrega aminoácidos e o ribossômico integra os ribossomos.",
      ["RNAm: mensageiro.", "RNAt: transportador.", "RNAr: ribossômico."],
      ["Identifique a função de cada tipo.", "Relacione os RNAs à síntese proteica."]),
    lesson("Tradução e síntese de proteínas",
      "Na tradução, os ribossomos leem os códons do RNA mensageiro. Os RNAs transportadores fornecem aminoácidos que são unidos para formar uma cadeia polipeptídica.",
      ["A sequência de códons orienta a sequência de aminoácidos."],
      ["Identifique o papel dos ribossomos.", "Relacione códons e aminoácidos."]),
    lesson("Código genético",
      "O código genético estabelece a correspondência entre códons do RNA mensageiro e aminoácidos. Ele é organizado em trincas e apresenta características como degeneração e quase universalidade.",
      ["Um códon é formado por três bases nitrogenadas.", "Existem códons de início e de parada."],
      ["Interprete sequências de códons.", "Compreenda a redundância do código genético."])
  ]
},

98: {
  title: "Mutações, genética de populações, engenharia genética, transgênicos, clonagem e biotecnologia",
  goal: "Analisar alterações genéticas e compreender aplicações da genética na ciência e na sociedade.",
  days: [
    lesson("Mutações genéticas",
      "Mutações são alterações no material genético. Podem ocorrer espontaneamente ou ser favorecidas por agentes mutagênicos. Seus efeitos variam conforme a região afetada e o contexto biológico.",
      ["Substituições, inserções e deleções são exemplos de alterações na sequência de DNA."],
      ["Diferencie tipos de mutação.", "Não considere toda mutação necessariamente prejudicial."]),
    lesson("Consequências das mutações",
      "Uma mutação pode não alterar a proteína produzida, modificar um aminoácido ou afetar a estrutura e o funcionamento de uma proteína. Alterações em células reprodutivas podem ser transmitidas aos descendentes.",
      ["Uma mutação pode ser silenciosa, alterar uma proteína ou modificar sua produção."],
      ["Relacione mutação e expressão gênica.", "Diferencie alterações somáticas e germinativas."]),
    lesson("Genética de populações",
      "A genética de populações estuda a frequência dos alelos e genótipos em grupos de indivíduos. Ela permite compreender como a composição genética de uma população se modifica ao longo das gerações.",
      ["Frequência alélica representa a proporção de determinado alelo na população."],
      ["Diferencie frequência alélica e genotípica.", "Observe a população como unidade de análise."]),
    lesson("Equilíbrio de Hardy-Weinberg",
      "O princípio de Hardy-Weinberg descreve condições teóricas em que as frequências alélicas e genotípicas permanecem constantes ao longo das gerações, na ausência de fatores evolutivos que as alterem.",
      ["p + q = 1.", "p² + 2pq + q² = 1."],
      ["Reconheça as condições do modelo.", "Interprete as frequências genotípicas."]),
    lesson("Engenharia genética e transgênicos",
      "A engenharia genética reúne técnicas que permitem analisar e modificar material genético. Organismos transgênicos possuem material genético introduzido por técnicas de engenharia genética.",
      ["Algumas plantas geneticamente modificadas apresentam características de interesse agrícola."],
      ["Diferencie organismo transgênico e melhoramento convencional.", "Analise aplicações e questões éticas."]),
    lesson("Clonagem e biotecnologia",
      "A clonagem produz cópias geneticamente muito semelhantes de material biológico. A biotecnologia utiliza organismos, células ou componentes biológicos em aplicações científicas e tecnológicas.",
      ["A clonagem pode ser utilizada em pesquisas e conservação.", "A biotecnologia também aparece na produção de medicamentos."],
      ["Diferencie clonagem reprodutiva e terapêutica.", "Avalie aplicações, limites e questões éticas."])
  ]
},

99: {
  title: "Evolução: Lamarck, Darwin, seleção natural, seleção sexual e evidências evolutivas",
  goal: "Compreender as principais explicações científicas para a evolução e reconhecer evidências da ancestralidade comum.",
  days: [
    lesson("Ideia de evolução biológica",
      "Evolução biológica é a mudança das características hereditárias das populações ao longo das gerações. Ela explica a diversidade dos seres vivos e as relações de ancestralidade.",
      ["Populações evoluem ao longo das gerações.", "Indivíduos não evoluem geneticamente durante sua vida."],
      ["Diferencie evolução individual e populacional.", "Compreenda a hereditariedade."]),
    lesson("Lamarck e o transformismo",
      "Lamarck propôs uma explicação histórica para a transformação das espécies, destacando o uso e desuso de estruturas e a herança de características adquiridas. Suas propostas foram importantes historicamente, embora não correspondam à explicação genética atual.",
      ["Uso e desuso.", "Herança dos caracteres adquiridos."],
      ["Identifique as ideias de Lamarck.", "Compreenda o contexto histórico de sua proposta."]),
    lesson("Darwin e a seleção natural",
      "Darwin propôs que indivíduos de uma população apresentam variações hereditárias e que algumas características favorecem a sobrevivência e a reprodução em determinado ambiente. Ao longo das gerações, essas características podem se tornar mais frequentes.",
      ["A seleção natural atua sobre variações hereditárias."],
      ["Diferencie variação, seleção e reprodução.", "Entenda a adaptação como resultado populacional."]),
    lesson("Seleção sexual",
      "A seleção sexual é um processo evolutivo relacionado às diferenças no sucesso de obtenção de parceiros e reprodução. Pode favorecer características que aumentam oportunidades reprodutivas.",
      ["Diferenças de ornamentação ou comportamento podem estar relacionadas à seleção sexual."],
      ["Diferencie seleção sexual e seleção natural em sentido mais amplo.", "Relacione características e sucesso reprodutivo."]),
    lesson("Evidências da evolução",
      "A evolução é sustentada por diferentes evidências, como registros fósseis, anatomia comparada, embriologia, biogeografia e semelhanças moleculares entre organismos.",
      ["Estruturas homólogas podem indicar ancestralidade comum.", "O registro fóssil documenta mudanças ao longo do tempo."],
      ["Reconheça diferentes linhas de evidência.", "Diferencie estruturas homólogas e análogas."]),
    lesson("Síntese evolutiva",
      "A síntese moderna integra seleção natural, genética mendeliana, mutações, recombinação e genética de populações para explicar a evolução. A diversidade genética fornece a matéria-prima sobre a qual atuam processos evolutivos.",
      ["Mutações e recombinação geram variabilidade.", "Seleção natural altera frequências ao longo das gerações."],
      ["Relacione genética e evolução.", "Explique como populações mudam ao longo do tempo."])
  ]
},

100: {
  title: "Deriva genética, fluxo gênico, especiação e evolução humana",
  goal: "Compreender mecanismos evolutivos populacionais, formação de espécies e aspectos gerais da evolução humana.",
  days: [
    lesson("Deriva genética",
      "A deriva genética é a alteração aleatória das frequências alélicas de uma população. Seus efeitos podem ser especialmente intensos em populações pequenas.",
      ["A frequência de um alelo pode mudar por acaso, mesmo sem vantagem adaptativa."],
      ["Diferencie deriva genética e seleção natural.", "Observe o tamanho da população."]),
    lesson("Efeito fundador e gargalo populacional",
      "O efeito fundador ocorre quando poucos indivíduos estabelecem uma nova população. O gargalo populacional acontece quando uma população sofre redução acentuada. Ambos podem alterar a diversidade genética por acaso.",
      ["Uma pequena população fundadora pode apresentar frequências alélicas diferentes da população original."],
      ["Diferencie os dois fenômenos.", "Relacione tamanho populacional e diversidade genética."]),
    lesson("Fluxo gênico",
      "O fluxo gênico acontece quando alelos são transferidos entre populações por migração e reprodução. Ele pode aumentar a diversidade de uma população e reduzir diferenças genéticas entre grupos.",
      ["A migração de indivíduos reprodutivos pode introduzir alelos em outra população."],
      ["Identifique a transferência de alelos.", "Relacione fluxo gênico e estrutura populacional."]),
    lesson("Especiação",
      "Especiação é o processo de formação de novas espécies. Pode ocorrer quando populações acumulam diferenças genéticas e desenvolvem isolamento reprodutivo.",
      ["O isolamento geográfico pode favorecer a divergência entre populações."],
      ["Diferencie isolamento geográfico e reprodutivo.", "Compreenda a formação de novas espécies."]),
    lesson("Evolução humana",
      "A evolução humana envolve uma história extensa de mudanças em diferentes linhagens de primatas. A história evolutiva humana é ramificada, e não uma sequência linear simples.",
      ["Humanos atuais e outros primatas atuais compartilham ancestrais comuns."],
      ["Compreenda a ancestralidade comum.", "Evite representar a evolução como uma escada linear."]),
    lesson("Evidências e diversidade da evolução humana",
      "Fósseis, ferramentas, anatomia e estudos genéticos ajudam a reconstruir a história evolutiva humana. Diferentes espécies e populações humanas antigas apresentaram características e trajetórias próprias.",
      ["O estudo do DNA antigo contribui para compreender relações entre populações humanas."],
      ["Reconheça diferentes tipos de evidência.", "Interprete a evolução humana como processo ramificado."])
  ]
},

101: {
  title: "Ecologia: população, comunidade, ecossistema, biosfera, cadeias, teias, níveis tróficos e relações ecológicas",
  goal: "Compreender os níveis de organização ecológica e analisar as relações alimentares e ecológicas nos ambientes.",
  days: [
    lesson("Níveis de organização ecológica",
      "A ecologia estuda as relações dos seres vivos entre si e com o ambiente. Seus níveis de organização incluem organismo, população, comunidade, ecossistema e biosfera.",
      ["População: indivíduos da mesma espécie em uma área.", "Comunidade: conjunto de populações."],
      ["Diferencie os níveis ecológicos.", "Identifique a escala de análise."]),
    lesson("Habitat e nicho ecológico",
      "Habitat é o local onde um organismo vive. Nicho ecológico envolve seu modo de vida, recursos utilizados, condições toleradas e relações com outros organismos.",
      ["Duas espécies podem compartilhar habitat e ocupar nichos diferentes."],
      ["Diferencie local de vida e papel ecológico.", "Relacione nicho e recursos."]),
    lesson("Cadeias alimentares e níveis tróficos",
      "Cadeias alimentares representam relações de alimentação e transferência de matéria e energia. Produtores formam a base de muitas cadeias, seguidos por consumidores e decompositores.",
      ["Produtor → consumidor primário → consumidor secundário."],
      ["Identifique os níveis tróficos.", "Observe o sentido das setas."]),
    lesson("Teias alimentares e fluxo de energia",
      "Teias alimentares integram várias cadeias que se conectam em um ecossistema. A energia flui entre os níveis tróficos e parte dela é dissipada como calor em cada transferência.",
      ["Um organismo pode participar de diferentes cadeias alimentares."],
      ["Diferencie cadeia e teia alimentar.", "Compreenda a redução de energia disponível nos níveis superiores."]),
    lesson("Relações ecológicas",
      "As relações ecológicas podem ocorrer entre indivíduos da mesma espécie ou de espécies diferentes. Podem beneficiar, prejudicar ou não afetar significativamente os participantes.",
      ["Mutualismo, competição, predação e parasitismo são exemplos."],
      ["Diferencie relações intraespecíficas e interespecíficas.", "Identifique os efeitos para cada participante."]),
    lesson("Dinâmica das relações ecológicas",
      "As interações entre organismos influenciam o tamanho das populações, a distribuição das espécies e o equilíbrio dos ecossistemas. Alterações em uma população podem repercutir em outras.",
      ["A redução de predadores pode alterar a abundância de presas."],
      ["Analise consequências em uma teia alimentar.", "Relacione interações e dinâmica populacional."])
  ]
},

102: {
  title: "Ciclos biogeoquímicos, sucessão ecológica, dinâmica populacional, impactos ambientais, conservação e sustentabilidade",
  goal: "Analisar a circulação de matéria nos ecossistemas, mudanças ambientais e estratégias de conservação.",
  days: [
    lesson("Ciclo da água",
      "A água circula entre atmosfera, superfície e subsolo por processos como evaporação, transpiração, condensação, precipitação e infiltração.",
      ["A evapotranspiração reúne evaporação e transpiração."],
      ["Reconheça as etapas do ciclo.", "Relacione água e clima."]),
    lesson("Ciclos do carbono e do oxigênio",
      "O carbono circula entre seres vivos, atmosfera, oceanos e solo. A fotossíntese retira dióxido de carbono do ambiente, enquanto respiração e decomposição devolvem carbono à atmosfera. O oxigênio também participa de processos biológicos e químicos.",
      ["Fotossíntese e respiração participam da circulação desses elementos."],
      ["Identifique reservatórios e processos.", "Relacione atividades humanas ao ciclo do carbono."]),
    lesson("Ciclos do nitrogênio e do fósforo",
      "O nitrogênio passa por processos como fixação, nitrificação, assimilação e desnitrificação. O fósforo circula principalmente entre rochas, solo, água e organismos, sem uma fase atmosférica importante em seu ciclo.",
      ["Bactérias desempenham papéis importantes no ciclo do nitrogênio."],
      ["Diferencie os processos do ciclo do nitrogênio.", "Reconheça a importância dos nutrientes."]),
    lesson("Sucessão ecológica",
      "Sucessão ecológica é o processo de mudanças na composição de comunidades ao longo do tempo. Pode ocorrer em ambientes recém-formados ou em áreas anteriormente ocupadas por comunidades.",
      ["Sucessão primária ocorre em locais sem solo previamente desenvolvido.", "Sucessão secundária ocorre em ambientes anteriormente ocupados."],
      ["Diferencie os tipos de sucessão.", "Observe mudanças na comunidade."]),
    lesson("Dinâmica populacional e impactos ambientais",
      "O tamanho das populações varia conforme natalidade, mortalidade, imigração e emigração. Impactos ambientais, como poluição e destruição de habitats, podem alterar essas taxas e comprometer ecossistemas.",
      ["Crescimento populacional depende das entradas e saídas de indivíduos."],
      ["Interprete mudanças populacionais.", "Relacione impactos e biodiversidade."]),
    lesson("Conservação e sustentabilidade",
      "Conservação ambiental envolve proteger espécies, habitats e processos ecológicos. Sustentabilidade busca conciliar necessidades humanas, preservação ambiental e uso responsável dos recursos.",
      ["Unidades de conservação ajudam a proteger ambientes naturais."],
      ["Diferencie preservação e conservação.", "Analise medidas de sustentabilidade."])
  ]
},

103: {
  title: "Revisão geral — Biologia 1 + 2",
  goal: "Consolidar os conteúdos de biologia celular, genética, evolução e ecologia.",
  days: [
    lesson("Revisão de biologia celular e metabolismo",
      "Revise características da vida, tipos celulares, organelas, membrana, biomoléculas, DNA, RNA, metabolismo, respiração celular, fermentação e fotossíntese.",
      ["Relacione organelas às suas funções."],
      ["Diferencie células procarióticas e eucarióticas.", "Revise os processos metabólicos."]),
    lesson("Revisão de divisão celular e genética básica",
      "Retome ciclo celular, mitose, meiose, genes, cromossomos, alelos, genótipo, fenótipo e leis de Mendel.",
      ["Compare mitose e meiose."],
      ["Revise segregação dos alelos.", "Resolva cruzamentos simples."]),
    lesson("Revisão de genética avançada e biotecnologia",
      "Revise codominância, alelos múltiplos, ligação gênica, crossing-over, replicação, transcrição, tradução, mutações e aplicações biotecnológicas.",
      ["Explique o caminho da informação genética."],
      ["Diferencie os padrões de herança.", "Revise a expressão gênica."]),
    lesson("Revisão de evolução",
      "Retome Lamarck, Darwin, seleção natural, seleção sexual, evidências evolutivas, deriva genética, fluxo gênico e especiação.",
      ["Compare seleção natural e deriva genética."],
      ["Relacione variabilidade e evolução.", "Explique a formação de espécies."]),
    lesson("Revisão de ecologia",
      "Revise níveis de organização, habitat, nicho, cadeias e teias alimentares, relações ecológicas, ciclos biogeoquímicos e sucessão ecológica.",
      ["Interprete uma teia alimentar e seus níveis tróficos."],
      ["Relacione matéria e energia.", "Reconheça relações ecológicas."]),
    lesson("Simulado integrado de Biologia 1 + 2",
      "Resolva questões que integrem citologia, metabolismo, genética, biotecnologia, evolução e ecologia. Analise os erros e identifique os assuntos que precisam de reforço.",
      ["Questões com interpretação de heredogramas, gráficos populacionais e cadeias alimentares."],
      ["Justifique suas respostas.", "Registre dificuldades por assunto."])
  ]
},

104: {
  title: "Reações químicas, balanceamento e tipos de reação",
  goal: "Interpretar equações químicas, conservar átomos e reconhecer diferentes tipos de reação.",
  days: [
    lesson("Transformações e reações químicas",
      "Reações químicas são processos em que substâncias iniciais, chamadas reagentes, transformam-se em novas substâncias, chamadas produtos. Essas transformações envolvem reorganização dos átomos.",
      ["Reagentes → produtos."],
      ["Diferencie transformação física e química.", "Identifique reagentes e produtos."]),
    lesson("Equações químicas",
      "Equações químicas representam simbolicamente as reações. Fórmulas indicam as substâncias, enquanto coeficientes representam as proporções entre as partículas envolvidas.",
      ["2H₂ + O₂ → 2H₂O."],
      ["Interprete fórmulas e coeficientes.", "Diferencie coeficiente e índice."]),
    lesson("Conservação da massa",
      "Em uma reação química realizada em sistema fechado, a massa total dos reagentes é igual à massa total dos produtos. Isso ocorre porque os átomos são reorganizados, não criados ou destruídos.",
      ["A quantidade de cada tipo de átomo deve ser conservada."],
      ["Conte os átomos nos dois lados.", "Relacione conservação da massa e balanceamento."]),
    lesson("Balanceamento por tentativa",
      "Balancear uma equação significa ajustar os coeficientes para igualar a quantidade de átomos de cada elemento nos reagentes e produtos. Os índices das fórmulas não devem ser alterados.",
      ["H₂ + O₂ → H₂O.", "2H₂ + O₂ → 2H₂O."],
      ["Ajuste somente os coeficientes.", "Confira cada elemento ao final."]),
    lesson("Tipos de reações químicas",
      "As reações podem ser classificadas em categorias como síntese, decomposição, simples troca e dupla troca. Essas classificações ajudam a reconhecer padrões de transformação.",
      ["Síntese: A + B → AB.", "Decomposição: AB → A + B."],
      ["Reconheça os padrões das equações.", "Observe os reagentes e produtos."]),
    lesson("Classificação e balanceamento de reações",
      "Pratique a classificação e o balanceamento de equações químicas. Relacione a conservação dos átomos ao tipo de transformação representado.",
      ["Balancear e classificar diferentes equações."],
      ["Confira todos os elementos.", "Justifique a classificação."])
  ]
},

105: {
  title: "Mol, massa molar e estequiometria",
  goal: "Relacionar quantidade de matéria, massa e proporções entre reagentes e produtos.",
  days: [
    lesson("Conceito de mol",
      "O mol é a unidade de quantidade de matéria do Sistema Internacional. Um mol contém aproximadamente 6,022 × 10²³ entidades elementares.",
      ["Constante de Avogadro ≈ 6,022 × 10²³ mol⁻¹."],
      ["Diferencie mol e massa.", "Identifique a entidade contada."]),
    lesson("Massa molar",
      "A massa molar representa a massa correspondente a um mol de determinada substância. É expressa geralmente em gramas por mol.",
      ["A massa molar da água é aproximadamente 18 g/mol."],
      ["Some as massas atômicas da fórmula.", "Utilize a unidade g/mol."]),
    lesson("Relação entre massa e quantidade de matéria",
      "A quantidade de matéria pode ser calculada dividindo a massa disponível pela massa molar da substância.",
      ["n = m/M."],
      ["Identifique massa e massa molar.", "Confira as unidades."]),
    lesson("Interpretação das proporções químicas",
      "Os coeficientes de uma equação balanceada indicam as proporções em mol entre reagentes e produtos. Essas relações formam a base dos cálculos estequiométricos.",
      ["2H₂ + O₂ → 2H₂O indica proporção 2:1:2."],
      ["Utilize sempre a equação balanceada.", "Relacione coeficientes e quantidade de matéria."]),
    lesson("Cálculos estequiométricos",
      "A estequiometria permite calcular quanto de uma substância participa ou é produzido em uma reação. O cálculo utiliza a proporção entre os coeficientes da equação balanceada.",
      ["Converta a massa em mol, utilize a proporção e retorne à unidade solicitada."],
      ["Organize os dados.", "Siga a proporção molar corretamente."]),
    lesson("Problemas de mol e estequiometria",
      "Resolva problemas envolvendo massa, quantidade de matéria, número de partículas e proporções entre reagentes e produtos.",
      ["Calcular a massa de produto formada a partir de uma quantidade conhecida de reagente."],
      ["Identifique o que é fornecido e solicitado.", "Revise a equação e as unidades."])
  ]
},

106: {
  title: "Reagente limitante, rendimento e soluções",
  goal: "Identificar limitações de reagentes, calcular rendimento e compreender a formação de soluções.",
  days: [
    lesson("Reagente limitante e reagente em excesso",
      "Em uma reação com quantidades diferentes de reagentes, um deles pode acabar primeiro. Esse é o reagente limitante, responsável por determinar a quantidade máxima de produto que pode ser formada.",
      ["O reagente em excesso permanece parcialmente sem reagir."],
      ["Identifique qual reagente termina primeiro.", "Utilize a proporção da equação balanceada."]),
    lesson("Cálculos com reagente limitante",
      "Para determinar o reagente limitante, compare as quantidades disponíveis com as proporções indicadas pela equação balanceada. Depois, utilize o limitante para calcular a quantidade de produto.",
      ["Compare a quantidade disponível de cada reagente com a proporção estequiométrica."],
      ["Converta as quantidades para mol.", "Não utilize o reagente em excesso como base do produto máximo."]),
    lesson("Rendimento de uma reação",
      "O rendimento compara a quantidade de produto realmente obtida com a quantidade teórica prevista pelos cálculos. Reações reais podem apresentar perdas e limitações.",
      ["Rendimento (%) = quantidade real / quantidade teórica × 100."],
      ["Diferencie produto teórico e real.", "Interprete o resultado percentual."]),
    lesson("Introdução às soluções",
      "Uma solução é uma mistura homogênea formada por um ou mais solutos dissolvidos em um solvente. Sua composição pode ser descrita por diferentes formas de concentração.",
      ["Água com sal dissolvido é um exemplo de solução."],
      ["Diferencie soluto e solvente.", "Reconheça misturas homogêneas."]),
    lesson("Solubilidade",
      "Solubilidade representa a quantidade máxima de soluto que pode se dissolver em determinada quantidade de solvente sob condições específicas. Temperatura e natureza das substâncias influenciam esse comportamento.",
      ["Uma solução pode ser insaturada, saturada ou supersaturada."],
      ["Diferencie os estados de saturação.", "Interprete curvas de solubilidade."]),
    lesson("Aplicações de estequiometria e soluções",
      "Integre cálculos de reagente limitante e rendimento com a interpretação de soluções e quantidades de substâncias em processos químicos.",
      ["Calcular o produto obtido em uma reação e analisar sua dissolução."],
      ["Organize os cálculos em etapas.", "Confira as unidades e condições."])
  ]
},

107: {
  title: "Concentração, diluição, misturas e solubilidade",
  goal: "Calcular concentrações e compreender como elas variam em diluições e misturas de soluções.",
  days: [
    lesson("Concentração comum",
      "A concentração comum relaciona a massa de soluto ao volume total da solução. É frequentemente expressa em gramas por litro.",
      ["C = m/V."],
      ["Identifique massa de soluto e volume da solução.", "Utilize unidades compatíveis."]),
    lesson("Concentração em quantidade de matéria",
      "A concentração molar relaciona a quantidade de matéria do soluto ao volume da solução em litros.",
      ["M = n/V."],
      ["Converta o volume para litros.", "Diferencie molaridade e massa molar."]),
    lesson("Diluição de soluções",
      "Na diluição, adiciona-se solvente sem alterar a quantidade de soluto. A concentração diminui porque o volume total aumenta.",
      ["C1V1 = C2V2, para a mesma quantidade de soluto."],
      ["Identifique as condições inicial e final.", "Não confunda volume de solvente com volume final."]),
    lesson("Mistura de soluções",
      "Ao misturar soluções, a quantidade total de soluto pode ser somada quando não ocorre reação química entre os componentes. A concentração final depende da quantidade total de soluto e do volume final.",
      ["Considere a soma dos volumes quando a aproximação for adequada."],
      ["Some as quantidades de soluto.", "Observe se existe reação química."]),
    lesson("Solubilidade e temperatura",
      "A solubilidade varia com a temperatura e depende da substância. Curvas de solubilidade permitem analisar quanto soluto pode permanecer dissolvido em diferentes condições.",
      ["Uma curva pode indicar regiões de solução insaturada e saturada."],
      ["Interprete eixos e unidades.", "Compare diferentes temperaturas."]),
    lesson("Exercícios integrados de soluções",
      "Resolva problemas envolvendo concentração comum, concentração molar, diluição, misturas e curvas de solubilidade.",
      ["Calcular a concentração final após uma diluição."],
      ["Identifique a fórmula adequada.", "Confira volume, massa e quantidade de matéria."])
  ]
},

108: {
  title: "Termoquímica, entalpia, calor, Lei de Hess e energia de ligação",
  goal: "Compreender as trocas de energia nas reações químicas e calcular variações de entalpia.",
  days: [
    lesson("Introdução à termoquímica",
      "A termoquímica estuda as trocas de energia, especialmente na forma de calor, que acompanham as transformações químicas e físicas.",
      ["Uma reação pode liberar ou absorver calor."],
      ["Diferencie sistema e ambiente.", "Reconheça trocas de energia."]),
    lesson("Reações exotérmicas e endotérmicas",
      "Reações exotérmicas liberam calor para o ambiente e apresentam variação de entalpia negativa. Reações endotérmicas absorvem calor e apresentam variação positiva.",
      ["Exotérmica: ΔH menor que zero.", "Endotérmica: ΔH maior que zero."],
      ["Observe o sinal de ΔH.", "Diferencie energia absorvida e liberada."]),
    lesson("Entalpia e diagramas energéticos",
      "A entalpia é uma função de estado utilizada para analisar o conteúdo energético de sistemas. Diagramas energéticos representam a diferença entre os níveis de energia dos reagentes e produtos.",
      ["ΔH = H produtos - H reagentes."],
      ["Interprete os níveis energéticos.", "Relacione o diagrama ao sinal da variação de entalpia."]),
    lesson("Entalpia de formação e combustão",
      "A entalpia de formação corresponde à variação de entalpia na formação de um composto a partir de seus elementos em condições de referência. A entalpia de combustão está relacionada à queima completa de uma substância.",
      ["Valores tabelados podem ser utilizados para calcular variações de entalpia."],
      ["Diferencie formação e combustão.", "Observe as condições de referência."]),
    lesson("Lei de Hess",
      "A Lei de Hess afirma que a variação de entalpia de uma reação depende apenas dos estados inicial e final. Por isso, equações químicas podem ser somadas para determinar a variação total de entalpia.",
      ["ΔH total = soma das variações de entalpia das etapas."],
      ["Inverta o sinal de ΔH ao inverter uma reação.", "Multiplique ΔH quando multiplicar a equação."]),
    lesson("Energia de ligação",
      "A energia de ligação está relacionada à energia necessária para romper ligações químicas. Uma estimativa da variação de entalpia pode ser obtida comparando a energia absorvida na quebra de ligações com a energia liberada na formação de novas ligações.",
      ["ΔH ≈ energia das ligações rompidas - energia das ligações formadas."],
      ["Identifique ligações quebradas e formadas.", "Interprete o sinal do resultado."])
  ]
},

109: {
  title: "Cinética química, energia de ativação, catalisadores e fatores que alteram a velocidade",
  goal: "Compreender a velocidade das reações químicas e os fatores que influenciam sua ocorrência.",
  days: [
    lesson("Velocidade das reações",
      "A cinética química estuda a velocidade das reações e os fatores que a influenciam. A velocidade pode ser analisada pela variação da concentração de reagentes ou produtos ao longo do tempo.",
      ["Uma reação mais rápida apresenta maior variação de concentração por intervalo de tempo."],
      ["Diferencie velocidade e quantidade de produto.", "Observe as unidades."]),
    lesson("Teoria das colisões",
      "Para ocorrer uma reação, partículas precisam colidir com orientação adequada e energia suficiente. Nem toda colisão resulta em transformação química.",
      ["Colisões efetivas levam à formação de produtos."],
      ["Reconheça orientação e energia adequadas.", "Relacione colisões e velocidade."]),
    lesson("Energia de ativação",
      "A energia de ativação é a energia mínima necessária para que uma colisão possa levar à reação. Ela representa uma barreira energética entre reagentes e produtos.",
      ["Uma barreira energética maior pode dificultar a ocorrência da reação."],
      ["Interprete diagramas de energia.", "Diferencie energia de ativação e variação de entalpia."]),
    lesson("Temperatura e concentração",
      "O aumento da temperatura geralmente eleva a energia cinética das partículas e a frequência de colisões efetivas. A concentração maior também pode aumentar a frequência de encontros entre reagentes.",
      ["A velocidade frequentemente aumenta com a temperatura."],
      ["Relacione temperatura e energia cinética.", "Analise o efeito da concentração."]),
    lesson("Superfície de contato e catalisadores",
      "Maior superfície de contato pode facilitar colisões entre reagentes. Catalisadores aumentam a velocidade ao oferecer um caminho reacional com menor energia de ativação, sem serem consumidos globalmente na reação.",
      ["Um catalisador não altera a variação total de entalpia da reação."],
      ["Diferencie catalisador e reagente.", "Observe a energia de ativação."]),
    lesson("Aplicações da cinética química",
      "Analise situações cotidianas e industriais que envolvam velocidade de reação, temperatura, concentração, superfície de contato e catalisadores.",
      ["Comparar a velocidade de dissolução de materiais em condições diferentes."],
      ["Identifique o fator alterado.", "Explique como ele influencia a velocidade."])
  ]
},

110: {
  title: "Equilíbrio químico, constantes e princípio de Le Chatelier",
  goal: "Compreender o equilíbrio dinâmico e prever como alterações nas condições afetam sistemas químicos em equilíbrio.",
  days: [
    lesson("Reações reversíveis",
      "Reações reversíveis podem ocorrer nos dois sentidos: reagentes formam produtos e produtos podem voltar a formar reagentes. Em determinadas condições, o sistema pode atingir equilíbrio químico.",
      ["A + B ⇌ C + D."],
      ["Reconheça a seta dupla.", "Diferencie reações reversíveis e irreversíveis."]),
    lesson("Equilíbrio químico dinâmico",
      "No equilíbrio químico, as velocidades das reações direta e inversa são iguais. As concentrações permanecem constantes ao longo do tempo, embora as reações continuem ocorrendo.",
      ["Velocidade direta = velocidade inversa."],
      ["Diferencie equilíbrio dinâmico e reação parada.", "Observe as concentrações constantes."]),
    lesson("Constante de equilíbrio",
      "A constante de equilíbrio relaciona as concentrações de produtos e reagentes no equilíbrio, elevadas aos coeficientes estequiométricos. Seu valor depende da temperatura.",
      ["Para aA + bB ⇌ cC + dD, Kc = [C]^c[D]^d / [A]^a[B]^b."],
      ["Utilize os coeficientes como expoentes.", "Não inclua sólidos puros e líquidos puros na expressão usual de Kc."]),
    lesson("Interpretação da constante de equilíbrio",
      "O valor da constante de equilíbrio permite avaliar se produtos ou reagentes são favorecidos na composição do sistema. Uma constante maior que 1 indica predominância relativa dos produtos, enquanto uma menor que 1 indica predominância relativa dos reagentes.",
      ["Kc alto: produtos favorecidos.", "Kc baixo: reagentes favorecidos."],
      ["Compare o valor de Kc.", "Não confunda constante e velocidade de reação."]),
    lesson("Princípio de Le Chatelier",
      "Quando um sistema em equilíbrio sofre uma perturbação, ele tende a se deslocar no sentido que reduz o efeito dessa alteração. Mudanças de concentração, pressão e temperatura podem modificar a posição do equilíbrio.",
      ["Adicionar reagente pode favorecer o sentido de formação de produtos."],
      ["Identifique a perturbação.", "Preveja o sentido do deslocamento."]),
    lesson("Fatores que deslocam o equilíbrio",
      "Concentração, pressão e temperatura podem alterar a composição de um sistema em equilíbrio. Catalisadores aceleram a chegada ao equilíbrio, mas não alteram sua constante nem deslocam sua posição.",
      ["Aumentar a pressão favorece o lado com menor quantidade de mols gasosos, quando aplicável.", "A temperatura favorece o sentido endotérmico quando aumentada."],
      ["Analise cada perturbação separadamente.", "Diferencie deslocamento e alteração da constante."])
  ]
},


111: {
  title: "Ácidos, bases, pH, pOH, soluções tampão e eletroquímica",
  goal: "Compreender o comportamento ácido-base das substâncias e introduzir os fundamentos da eletroquímica.",
  days: [
    lesson("Ácidos e bases",
      "Ácidos e bases podem ser estudados por diferentes teorias. Pela teoria de Arrhenius, ácidos liberam H+ em água e bases liberam OH-. Outras teorias ampliam essas definições.",
      ["HCl é um exemplo de ácido de Arrhenius.", "NaOH é um exemplo de base de Arrhenius."],
      ["Diferencie ácidos e bases.", "Reconheça as limitações de cada teoria."]),
    lesson("Força de ácidos e bases",
      "A força de um ácido ou de uma base está relacionada ao grau de ionização ou dissociação em solução. Não deve ser confundida com a concentração da solução.",
      ["Ácidos fortes apresentam elevado grau de ionização em água."],
      ["Diferencie força e concentração.", "Reconheça ionização e dissociação."]),
    lesson("pH e pOH",
      "O pH indica a acidez de uma solução, enquanto o pOH está relacionado à concentração de íons hidróxido. Em condições usuais a 25 °C, pH + pOH = 14.",
      ["pH = -log[H+].", "pOH = -log[OH-]."],
      ["Interprete a escala de pH.", "Relacione pH e pOH."]),
    lesson("Neutralização e soluções tampão",
      "A neutralização ocorre quando um ácido reage com uma base. Soluções tampão resistem a variações significativas de pH quando pequenas quantidades de ácido ou base são adicionadas.",
      ["Ácido + base podem formar sal e água.", "Tampões são importantes em sistemas biológicos."],
      ["Identifique uma reação de neutralização.", "Compreenda a função de um tampão."]),
    lesson("Introdução à eletroquímica",
      "A eletroquímica estuda relações entre reações químicas e energia elétrica. Reações de oxidação e redução envolvem transferência de elétrons.",
      ["Oxidação: perda de elétrons.", "Redução: ganho de elétrons."],
      ["Identifique oxidação e redução.", "Reconheça agentes oxidantes e redutores."]),
    lesson("Pilhas, eletrólise e aplicações",
      "Pilhas convertem energia química em energia elétrica por meio de reações espontâneas. Na eletrólise, energia elétrica é utilizada para provocar uma transformação química não espontânea.",
      ["Pilhas são exemplos de células galvânicas.", "Eletrólise é utilizada em processos industriais."],
      ["Diferencie pilha e eletrólise.", "Relacione eletroquímica e aplicações cotidianas."])
  ]
},

112: {
  title: "Revisão geral — Química 1 + 2",
  goal: "Consolidar os conteúdos de química geral, estrutura da matéria, ligações, reações, cálculos e eletroquímica.",
  days: [
    lesson("Revisão de matéria e estrutura atômica",
      "Retome propriedades da matéria, estados físicos, substâncias, misturas, separação de misturas, modelos atômicos, partículas subatômicas, isótopos e distribuição eletrônica.",
      ["Revise número atômico e número de massa."],
      ["Diferencie substâncias e misturas.", "Interprete a estrutura dos átomos."]),
    lesson("Revisão de tabela periódica e ligações",
      "Revise organização da tabela periódica, famílias, períodos, propriedades periódicas, ligações iônicas, covalentes e metálicas, polaridade e geometria molecular.",
      ["Relacione posição na tabela e propriedades dos elementos."],
      ["Identifique tipos de ligação.", "Analise polaridade e geometria."]),
    lesson("Revisão de funções inorgânicas",
      "Retome ácidos, bases, sais e óxidos, incluindo nomenclatura, propriedades e reações de neutralização.",
      ["Reconheça as principais funções inorgânicas."],
      ["Classifique substâncias.", "Revise reações de neutralização."]),
    lesson("Revisão de reações e estequiometria",
      "Revise equações químicas, balanceamento, mol, massa molar, reagente limitante, rendimento e cálculos estequiométricos.",
      ["Utilize uma equação balanceada para relacionar quantidades."],
      ["Confira a conservação dos átomos.", "Resolva cálculos em etapas."]),
    lesson("Revisão de soluções e energia",
      "Retome concentração, diluição, misturas, solubilidade, termoquímica, entalpia, Lei de Hess e cinética química.",
      ["Compare reações exotérmicas e endotérmicas."],
      ["Interprete concentrações.", "Analise fatores que alteram a velocidade."]),
    lesson("Simulado geral de Química",
      "Resolva questões integradas de Química 1 e 2, identificando os assuntos dominados e os que precisam de reforço.",
      ["Questões de interpretação, cálculos e análise de reações."],
      ["Registre erros conceituais e matemáticos.", "Revise os conteúdos com maior dificuldade."])
  ]
},

113: {
  title: "Matemática + Física — revisão de todos os conteúdos estudados",
  goal: "Revisar os fundamentos matemáticos e físicos estudados até a Semana 112, identificando dificuldades e consolidando habilidades.",
  days: [
    lesson("Matemática: operações, álgebra e equações",
      "Revise conjuntos numéricos, frações, porcentagem, razão, proporção, regra de três, expressões algébricas, fatoração, equações e sistemas.",
      ["Resolva problemas com diferentes operações."],
      ["Atenção aos sinais.", "Confira os resultados substituindo nas equações."]),
    lesson("Matemática: funções e gráficos",
      "Retome conceito de função, domínio, imagem, função afim, função quadrática, função modular, exponenciais e logaritmos.",
      ["Interprete gráficos e identifique características das funções."],
      ["Reconheça raízes e vértices.", "Relacione equações e representações gráficas."]),
    lesson("Matemática: sequências, trigonometria e geometria",
      "Revise PA, PG, sequências, somatórios, polinômios, trigonometria, triângulos, circunferências, polígonos e áreas.",
      ["Utilize relações matemáticas em problemas geométricos."],
      ["Escolha fórmulas adequadas.", "Interprete figuras e medidas."]),
    lesson("Física: grandezas, cinemática e gráficos",
      "Revise unidades, análise dimensional, vetores, deslocamento, velocidade, aceleração, movimento uniforme, MUV e lançamentos.",
      ["Interprete gráficos de posição, velocidade e aceleração."],
      ["Diferencie deslocamento e distância.", "Confira sinais e unidades."]),
    lesson("Física: dinâmica, energia e gravitação",
      "Retome leis de Newton, forças, atrito, movimento circular, trabalho, energia, potência, impulso, colisões e gravitação.",
      ["Relacione força, movimento e energia."],
      ["Identifique as forças envolvidas.", "Aplique princípios de conservação."]),
    lesson("Física: fluidos, calor e ondas",
      "Revise densidade, pressão, empuxo, temperatura, calor, mudanças de estado, gases, termodinâmica, máquinas térmicas e ondas.",
      ["Resolva questões conceituais e quantitativas."],
      ["Utilize unidades corretas.", "Interprete fenômenos físicos."])
  ]
},

114: {
  title: "Biologia + Química — revisão de todos os conteúdos estudados",
  goal: "Consolidar os conhecimentos de biologia e química por meio de revisão conceitual, interpretação e resolução de questões.",
  days: [
    lesson("Biologia: células e organelas",
      "Revise características da vida, células procarióticas e eucarióticas, membrana plasmática, organelas, núcleo e citoplasma.",
      ["Relacione cada organela à sua função."],
      ["Compare tipos celulares.", "Interprete estruturas e funções."]),
    lesson("Biologia: metabolismo e divisão celular",
      "Retome biomoléculas, enzimas, respiração celular, fermentação, fotossíntese, ciclo celular, mitose e meiose.",
      ["Compare processos de obtenção e utilização de energia."],
      ["Diferencie mitose e meiose.", "Relacione metabolismo e energia."]),
    lesson("Biologia: genética e evolução",
      "Revise genes, cromossomos, leis de Mendel, heredogramas, DNA, RNA, síntese de proteínas, mutações e mecanismos evolutivos.",
      ["Relacione hereditariedade, variabilidade e evolução."],
      ["Interprete cruzamentos.", "Diferencie seleção natural e deriva genética."]),
    lesson("Biologia: ecologia",
      "Retome níveis ecológicos, cadeias alimentares, teias, relações ecológicas, ciclos biogeoquímicos, sucessão e conservação ambiental.",
      ["Interprete relações entre organismos e ambiente."],
      ["Reconheça níveis tróficos.", "Analise impactos ambientais."]),
    lesson("Química: matéria, átomos e ligações",
      "Revise propriedades da matéria, misturas, modelos atômicos, tabela periódica, distribuição eletrônica, ligações e funções inorgânicas.",
      ["Relacione estrutura atômica e propriedades químicas."],
      ["Classifique substâncias.", "Reconheça ligações químicas."]),
    lesson("Química: reações, cálculos e eletroquímica",
      "Revise balanceamento, estequiometria, soluções, termoquímica, cinética, equilíbrio, ácidos, bases, pH e eletroquímica.",
      ["Resolva questões integradas de química."],
      ["Organize os cálculos.", "Explique os fenômenos químicos."])
  ]
},

115: {
  title: "História + Geografia — revisão de todos os conteúdos estudados",
  goal: "Consolidar os principais processos históricos e conceitos geográficos estudados até esta etapa.",
  days: [
    lesson("História: Antiguidade e mundo medieval",
      "Revise civilizações da Antiguidade, Grécia, Roma, cristianismo, Império Bizantino, islamismo, feudalismo e sociedade medieval.",
      ["Relacione organização política, economia, religião e sociedade."],
      ["Reconheça características de cada período.", "Organize os acontecimentos cronologicamente."]),
    lesson("História: transição para a modernidade",
      "Retome Cruzadas, crise do feudalismo, Renascimento, Reforma Protestante, Contrarreforma, absolutismo, mercantilismo e expansão marítima.",
      ["Analise transformações políticas, culturais e econômicas."],
      ["Relacione causas e consequências.", "Compare diferentes processos históricos."]),
    lesson("Geografia: cartografia e estrutura terrestre",
      "Revise mapas, escalas, coordenadas, projeções, fusos horários, sensoriamento remoto, estrutura da Terra, rochas e placas tectônicas.",
      ["Interprete mapas e representações espaciais."],
      ["Utilize escalas e coordenadas.", "Reconheça processos geológicos."]),
    lesson("Geografia: clima, relevo e natureza",
      "Retome clima, massas de ar, vegetação, biomas, solos, hidrografia, vulcanismo, terremotos e formação do relevo.",
      ["Relacione elementos naturais e paisagens."],
      ["Diferencie clima e tempo.", "Analise fatores ambientais."]),
    lesson("Geografia: população e espaço urbano",
      "Revise natalidade, mortalidade, crescimento populacional, pirâmides etárias, migrações, urbanização e estrutura etária.",
      ["Interprete indicadores demográficos."],
      ["Analise gráficos populacionais.", "Relacione migração e urbanização."]),
    lesson("Questões integradas de História e Geografia",
      "Resolva questões que relacionem processos históricos, transformações territoriais, população, economia e organização das sociedades.",
      ["Interprete mapas, textos históricos e gráficos."],
      ["Justifique respostas com evidências.", "Identifique relações de causa e consequência."])
  ]
},

116: {
  title: "Português + Inglês + simulado acumulado + atualização 🟢🟡🔴",
  goal: "Revisar os conteúdos de linguagens, realizar um simulado acumulado e atualizar o diagnóstico de aprendizagem.",
  days: [
    lesson("Português: classes gramaticais e verbos",
      "Revise substantivos, adjetivos, artigos, numerais, pronomes, verbos, advérbios, preposições, conjunções e interjeições.",
      ["Classifique palavras conforme sua função no contexto."],
      ["Observe a classe gramatical.", "Revise tempos e modos verbais."]),
    lesson("Português: sintaxe e período",
      "Retome sujeito, predicado, objetos, complementos, adjuntos, aposto, vocativo, orações, períodos e relações de coordenação e subordinação.",
      ["Analise a organização sintática de frases."],
      ["Identifique funções sintáticas.", "Diferencie coordenação e subordinação."]),
    lesson("Português: concordância, regência e interpretação",
      "Revise concordância, regência, crase, colocação pronominal, pontuação, semântica, ambiguidade, tese e argumentação.",
      ["Interprete textos e analise construções linguísticas."],
      ["Justifique o uso da pontuação.", "Reconheça implícitos e argumentos."]),
    lesson("Inglês: tempos verbais e estruturas",
      "Revise Simple Present, Present Continuous, Simple Past, Past Continuous, formas de futuro, modal verbs, Present Perfect, voz passiva e condicionais.",
      ["Compare tempos verbais em diferentes contextos."],
      ["Observe marcadores temporais.", "Analise a estrutura das frases."]),
    lesson("Inglês: vocabulário e interpretação",
      "Retome preposições, conectivos, advérbios, formação de palavras, cognatos, falsos cognatos e interpretação de textos.",
      ["Utilize o contexto para compreender palavras desconhecidas."],
      ["Identifique a ideia principal.", "Reconheça relações entre frases."]),
    lesson("Simulado acumulado e diagnóstico",
      "Realize um simulado envolvendo os conteúdos estudados até agora. Depois, corrija as respostas e classifique os assuntos conforme o domínio demonstrado.",
      ["Registrar acertos, erros e conteúdos que precisam de reforço."],
      ["🟢 Conteúdo dominado.", "🟡 Conteúdo em desenvolvimento.", "🔴 Conteúdo que precisa de reforço."])
  ]
},

117: {
  title: "Revolução Inglesa, Iluminismo, Independência dos EUA e Revolução Francesa",
  goal: "Compreender transformações políticas e intelectuais que contribuíram para a formação do mundo contemporâneo.",
  days: [
    lesson("Revolução Inglesa",
      "As Revoluções Inglesas do século XVII envolveram conflitos entre a monarquia e o Parlamento. Esses acontecimentos contribuíram para transformações na organização política inglesa.",
      ["Revolução Puritana e Revolução Gloriosa."],
      ["Identifique os conflitos entre rei e Parlamento.", "Compreenda mudanças na monarquia inglesa."]),
    lesson("Iluminismo",
      "O Iluminismo foi um movimento intelectual que valorizou a razão, a crítica ao absolutismo e a discussão sobre direitos, liberdade e organização política.",
      ["John Locke, Montesquieu, Voltaire e Rousseau."],
      ["Reconheça ideias iluministas.", "Relacione razão e crítica ao absolutismo."]),
    lesson("Independência dos Estados Unidos",
      "As Treze Colônias inglesas da América do Norte romperam com a metrópole em um processo influenciado por conflitos econômicos, políticos e ideias iluministas.",
      ["Declaração de Independência de 1776."],
      ["Identifique causas da independência.", "Compreenda a formação dos Estados Unidos."]),
    lesson("Revolução Francesa: causas e início",
      "A Revolução Francesa começou em 1789 em meio a uma crise econômica, desigualdades sociais e questionamentos ao absolutismo. A sociedade francesa estava organizada em ordens com privilégios diferentes.",
      ["Queda da Bastilha em 14 de julho de 1789."],
      ["Reconheça as causas sociais e econômicas.", "Compreenda a organização dos Estados Gerais."]),
    lesson("Fases da Revolução Francesa",
      "A Revolução Francesa passou por diferentes fases políticas, incluindo Assembleia Nacional, Convenção Nacional, período do Terror e Diretório.",
      ["A Convenção e o Diretório apresentaram diferentes disputas políticas."],
      ["Organize as fases cronologicamente.", "Identifique grupos e interesses políticos."]),
    lesson("Consequências da Revolução Francesa",
      "A Revolução Francesa transformou instituições políticas e sociais, difundiu ideias de cidadania e igualdade jurídica e influenciou movimentos em diferentes regiões.",
      ["A Declaração dos Direitos do Homem e do Cidadão foi um marco do processo."],
      ["Analise consequências políticas.", "Relacione a Revolução Francesa ao mundo contemporâneo."])
  ]
},

118: {
  title: "Revolução Haitiana, Revolução Industrial e consequências sociais/econômicas",
  goal: "Analisar processos revolucionários e transformações econômicas e sociais relacionadas à formação do mundo contemporâneo.",
  days: [
    lesson("Sociedade colonial de Saint-Domingue",
      "Saint-Domingue, colônia francesa no Caribe, possuía uma economia baseada na produção agrícola e na escravidão. A sociedade era marcada por profundas desigualdades.",
      ["A produção açucareira dependia intensamente do trabalho escravizado."],
      ["Compreenda a estrutura social colonial.", "Relacione economia e escravidão."]),
    lesson("Revolução Haitiana",
      "A Revolução Haitiana foi um processo revolucionário protagonizado por pessoas escravizadas e libertas que levou à independência do Haiti em 1804.",
      ["A independência do Haiti ocorreu em 1804."],
      ["Reconheça a participação dos escravizados.", "Compreenda o caráter antiescravista do processo."]),
    lesson("Primeira Revolução Industrial",
      "A Primeira Revolução Industrial começou na Inglaterra e transformou a produção por meio da mecanização, do uso de máquinas e da expansão das fábricas.",
      ["A máquina a vapor foi importante para a industrialização."],
      ["Identifique fatores da industrialização inglesa.", "Compreenda a mudança na produção."]),
    lesson("Transformações no trabalho e na sociedade",
      "A industrialização alterou as relações de trabalho, ampliou o crescimento urbano e fortaleceu grupos sociais como a burguesia industrial e o proletariado.",
      ["As fábricas modificaram ritmos e condições de trabalho."],
      ["Diferencie burguesia e proletariado.", "Analise a urbanização industrial."]),
    lesson("Consequências econômicas e sociais",
      "A Revolução Industrial ampliou a produção e os mercados, mas também esteve associada a desigualdades, jornadas extensas e conflitos entre trabalhadores e proprietários.",
      ["Movimentos operários surgiram em resposta às condições de trabalho."],
      ["Relacione industrialização e desigualdade.", "Reconheça reivindicações trabalhistas."]),
    lesson("Revolução Industrial e mundo contemporâneo",
      "As transformações industriais influenciaram a economia mundial, o desenvolvimento tecnológico, as relações comerciais e a organização das sociedades modernas.",
      ["A industrialização se expandiu para outras regiões ao longo do tempo."],
      ["Relacione indústria e capitalismo.", "Analise mudanças de longo prazo."])
  ]
},

119: {
  title: "Independências latino-americanas e formação dos novos Estados",
  goal: "Compreender os processos de independência na América Latina e os desafios de organização dos novos países.",
  days: [
    lesson("América espanhola antes das independências",
      "A América espanhola era organizada em vice-reinos e capitanias. A sociedade colonial apresentava hierarquias, privilégios e tensões entre grupos sociais.",
      ["Criollos eram descendentes de espanhóis nascidos na América."],
      ["Identifique grupos sociais coloniais.", "Compreenda a administração espanhola."]),
    lesson("Crise do sistema colonial espanhol",
      "A crise da monarquia espanhola, as reformas administrativas e a circulação de ideias iluministas contribuíram para o enfraquecimento do domínio colonial.",
      ["A invasão napoleônica da Espanha em 1808 foi um fator importante."],
      ["Relacione crise europeia e independências americanas.", "Reconheça fatores internos e externos."]),
    lesson("Lideranças e movimentos de independência",
      "Diferentes lideranças participaram dos movimentos de independência, como Simón Bolívar e José de San Martín. Os processos ocorreram em ritmos e condições variados.",
      ["Bolívar atuou em movimentos de independência no norte da América do Sul."],
      ["Identifique lideranças e regiões.", "Compare processos de independência."]),
    lesson("Independência do México e da América Central",
      "Os movimentos de independência no México e na América Central envolveram diferentes grupos sociais, disputas políticas e projetos de organização dos novos Estados.",
      ["A independência do México foi proclamada em 1821."],
      ["Reconheça as etapas do processo mexicano.", "Analise as particularidades regionais."]),
    lesson("Formação dos novos Estados latino-americanos",
      "Após a independência, os novos países enfrentaram desafios como disputas territoriais, instabilidade política, desigualdades sociais e dependência econômica.",
      ["A independência política não eliminou automaticamente as desigualdades coloniais."],
      ["Diferencie independência política e transformação social.", "Analise os desafios dos novos Estados."]),
    lesson("Comparação das independências americanas",
      "Compare os processos de independência dos Estados Unidos, Haiti e América espanhola, observando suas causas, participantes, objetivos e consequências.",
      ["Os processos tiveram características e resultados distintos."],
      ["Identifique semelhanças e diferenças.", "Construa uma análise comparativa."])
  ]
},

120: {
  title: "Brasil Colônia: chegada portuguesa, capitanias, governo-geral, açúcar e escravidão",
  goal: "Compreender a colonização portuguesa na América e a organização política, econômica e social do Brasil Colônia.",
  days: [
    lesson("Chegada portuguesa e início da colonização",
      "A chegada dos portugueses à América ocorreu em 1500. Nas primeiras décadas, a exploração do território envolveu o pau-brasil, relações com povos indígenas e a expansão do domínio português.",
      ["A exploração inicial do pau-brasil utilizou o escambo em diferentes regiões."],
      ["Diferencie chegada portuguesa e colonização efetiva.", "Reconheça a presença dos povos indígenas."]),
    lesson("Capitanias hereditárias",
      "Em 1534, a Coroa portuguesa organizou o território em capitanias hereditárias, concedidas a donatários responsáveis por promover a ocupação e a exploração econômica.",
      ["O sistema apresentou resultados desiguais entre as capitanias."],
      ["Compreenda a função dos donatários.", "Identifique limites do sistema."]),
    lesson("Governo-geral",
      "O governo-geral foi criado em 1549 para fortalecer a administração colonial e coordenar a ocupação portuguesa. Salvador tornou-se a primeira capital do Brasil colonial.",
      ["Tomé de Sousa foi o primeiro governador-geral."],
      ["Diferencie capitanias e governo-geral.", "Compreenda a centralização administrativa."]),
    lesson("Economia açucareira",
      "A produção de açúcar ganhou importância na colonização, especialmente no Nordeste. Os engenhos reuniam estruturas de produção e estavam ligados ao comércio atlântico.",
      ["A produção açucareira utilizava grandes propriedades e trabalho escravizado."],
      ["Reconheça a organização do engenho.", "Relacione açúcar e comércio colonial."]),
    lesson("Escravidão indígena e africana",
      "A colonização portuguesa envolveu a escravização de povos indígenas e a expansão do tráfico transatlântico de africanos escravizados. A escravidão foi uma estrutura central da sociedade colonial.",
      ["Africanos foram trazidos à força para trabalhar em diferentes atividades."],
      ["Reconheça a violência do sistema escravista.", "Compreenda a resistência dos povos escravizados."]),
    lesson("Sociedade e administração colonial",
      "A sociedade colonial era marcada por hierarquias, concentração de terras e poder, influência religiosa e desigualdades. A administração portuguesa buscava controlar a economia e o território.",
      ["A Igreja Católica teve papel importante na colonização."],
      ["Analise a organização social.", "Relacione poder, economia e religião."])
  ]
},

121: {
  title: "Bandeirantes, mineração, revoltas coloniais e movimentos de independência",
  goal: "Analisar a expansão territorial, a mineração e os conflitos políticos e sociais do período colonial.",
  days: [
    lesson("Entradas e bandeiras",
      "Expedições pelo interior da América portuguesa contribuíram para a exploração territorial. As bandeiras também estiveram associadas à captura de indígenas e à busca por metais preciosos.",
      ["As expedições tiveram objetivos variados."],
      ["Diferencie entradas e bandeiras.", "Analise seus impactos sobre povos indígenas."]),
    lesson("Expansão territorial",
      "A ocupação de áreas além dos limites inicialmente estabelecidos pelo Tratado de Tordesilhas contribuiu para a expansão territorial portuguesa na América.",
      ["A interiorização esteve ligada a atividades econômicas e expedições."],
      ["Relacione ocupação e formação territorial.", "Compreenda disputas coloniais."]),
    lesson("Mineração no Brasil Colônia",
      "A descoberta de ouro e diamantes no interior, especialmente na região de Minas Gerais, provocou mudanças econômicas, demográficas e administrativas.",
      ["A mineração ganhou destaque a partir do final do século XVII."],
      ["Identifique áreas mineradoras.", "Analise mudanças na economia colonial."]),
    lesson("Administração e sociedade mineradora",
      "A Coroa portuguesa criou mecanismos de fiscalização e cobrança de tributos sobre a mineração. A atividade contribuiu para o crescimento de vilas e a circulação interna de mercadorias.",
      ["O quinto correspondia a uma forma de tributação sobre o ouro."],
      ["Compreenda a fiscalização colonial.", "Relacione mineração e urbanização."]),
    lesson("Revoltas coloniais",
      "Diferentes revoltas expressaram conflitos entre interesses locais e a administração portuguesa. Algumas questionavam impostos e restrições econômicas; outras apresentavam projetos políticos mais amplos.",
      ["Revolta de Beckman, Guerra dos Emboabas e Revolta de Vila Rica."],
      ["Compare causas e participantes.", "Diferencie conflitos locais e movimentos emancipacionistas."]),
    lesson("Movimentos de independência no Brasil",
      "Movimentos como a Inconfidência Mineira e a Conjuração Baiana expressaram críticas à ordem colonial e apresentaram projetos distintos de transformação política e social.",
      ["A Inconfidência Mineira ocorreu em 1789.", "A Conjuração Baiana ocorreu em 1798."],
      ["Compare os objetivos dos movimentos.", "Reconheça a influência de ideias iluministas."])
  ]
},

122: {
  title: "Brasil Império: Primeiro Reinado, Regências, Segundo Reinado, café, escravidão e imigração",
  goal: "Compreender a formação do Estado brasileiro independente e as transformações políticas, econômicas e sociais do Império.",
  days: [
    lesson("Independência do Brasil",
      "A independência foi proclamada em 1822, em um processo ligado à crise do sistema colonial e às disputas políticas entre Portugal e Brasil. O novo país manteve a monarquia.",
      ["A independência foi proclamada por Dom Pedro em 7 de setembro de 1822."],
      ["Analise o processo de independência.", "Compreenda as permanências sociais e econômicas."]),
    lesson("Primeiro Reinado",
      "O Primeiro Reinado foi marcado por conflitos políticos, centralização do poder e tensões entre o imperador e diferentes grupos. A Constituição de 1824 organizou o Estado imperial.",
      ["O Poder Moderador foi uma característica da Constituição de 1824."],
      ["Reconheça características do governo.", "Analise a Constituição de 1824."]),
    lesson("Período Regencial",
      "O Período Regencial ocorreu entre a abdicação de Dom Pedro I e o início do governo de Dom Pedro II. Foi marcado por disputas políticas e revoltas em diferentes regiões.",
      ["Cabanagem, Farroupilha, Balaiada e Sabinada."],
      ["Identifique as principais revoltas.", "Compreenda os conflitos regionais."]),
    lesson("Segundo Reinado e política",
      "O Segundo Reinado foi marcado pelo governo de Dom Pedro II, pela alternância entre grupos políticos e por transformações na organização do Estado e da sociedade.",
      ["O parlamentarismo brasileiro apresentava características próprias."],
      ["Analise a organização política imperial.", "Relacione disputas políticas e estabilidade do regime."]),
    lesson("Café, escravidão e imigração",
      "A produção cafeeira ganhou importância econômica e contribuiu para mudanças na infraestrutura e nas relações de trabalho. A escravidão permaneceu central durante grande parte do período, enquanto a imigração cresceu em diferentes regiões.",
      ["O café teve grande importância na economia do Segundo Reinado."],
      ["Relacione café e expansão econômica.", "Analise a transição nas relações de trabalho."]),
    lesson("Crise do Império",
      "O Império enfrentou tensões relacionadas à escravidão, ao Exército, à Igreja e às disputas políticas. Esses conflitos contribuíram para o enfraquecimento da monarquia.",
      ["A crise imperial antecedeu a Proclamação da República em 1889."],
      ["Identifique os fatores da crise.", "Relacione mudanças sociais e políticas."])
  ]
},

123: {
  title: "Abolição, Proclamação da República, República Velha, Era Vargas e Estado Novo",
  goal: "Analisar a transição do Império para a República e as principais transformações políticas e sociais do Brasil até 1945.",
  days: [
    lesson("Movimento abolicionista",
      "O movimento abolicionista reuniu diferentes grupos e formas de resistência contra a escravidão. Pessoas escravizadas também protagonizaram ações fundamentais para o enfraquecimento do sistema.",
      ["A Lei Áurea foi assinada em 13 de maio de 1888."],
      ["Reconheça a participação de diferentes grupos.", "Compreenda os limites da abolição."]),
    lesson("Proclamação da República",
      "A República foi proclamada em 15 de novembro de 1889, encerrando a monarquia. O novo regime alterou a organização política, mas manteve profundas desigualdades sociais.",
      ["Marechal Deodoro da Fonseca participou da proclamação."],
      ["Compreenda a mudança de regime.", "Analise permanências sociais."]),
    lesson("República Velha",
      "A Primeira República foi marcada pelo poder das oligarquias, pelo coronelismo, por disputas regionais e por mecanismos políticos que limitavam a participação democrática.",
      ["Política dos governadores e coronelismo."],
      ["Reconheça práticas políticas da época.", "Analise o poder das oligarquias."]),
    lesson("Conflitos e movimentos sociais na República Velha",
      "A República Velha foi marcada por movimentos sociais e conflitos relacionados à desigualdade, à terra, às condições de trabalho e às transformações urbanas.",
      ["Canudos, Contestado, Revolta da Vacina e movimento operário."],
      ["Compare causas e características dos movimentos.", "Relacione conflitos e contexto social."]),
    lesson("Era Vargas",
      "A Revolução de 1930 levou Getúlio Vargas ao poder. Seu governo promoveu mudanças na organização do Estado, na legislação trabalhista e na economia brasileira.",
      ["Governo Provisório, Governo Constitucional e Estado Novo."],
      ["Organize as fases do governo.", "Analise as transformações políticas e trabalhistas."]),
    lesson("Estado Novo",
      "O Estado Novo foi uma ditadura instaurada por Getúlio Vargas em 1937. O período apresentou centralização política, censura, propaganda oficial e controle sobre diferentes instituições.",
      ["O Estado Novo terminou em 1945."],
      ["Reconheça características autoritárias.", "Analise o papel da propaganda e da censura."])
  ]
},

124: {
  title: "Revisão geral — História 1 + 2 + Brasil",
  goal: "Consolidar os processos históricos da Antiguidade ao Estado Novo e desenvolver interpretação histórica.",
  days: [
    lesson("Revisão: Antiguidade e mundo medieval",
      "Revise civilizações antigas, Grécia, Roma, cristianismo, Bizâncio, islamismo, feudalismo, Igreja medieval e transformações da sociedade europeia.",
      ["Organize os períodos e suas características."],
      ["Compare sociedades antigas e medievais.", "Relacione política, economia e cultura."]),
    lesson("Revisão: Renascimento e formação do mundo moderno",
      "Retome Renascimento, Reforma, Contrarreforma, absolutismo, mercantilismo, expansão marítima e colonização.",
      ["Relacione transformações culturais, religiosas e políticas."],
      ["Reconheça mudanças na organização dos Estados.", "Analise a expansão colonial."]),
    lesson("Revisão: revoluções e independências",
      "Revise Revoluções Inglesas, Iluminismo, independência dos Estados Unidos, Revolução Francesa, Revolução Haitiana e independências latino-americanas.",
      ["Compare diferentes movimentos revolucionários."],
      ["Identifique causas e consequências.", "Relacione ideias políticas e transformações sociais."]),
    lesson("Revisão: Brasil Colônia",
      "Retome chegada portuguesa, capitanias, governo-geral, açúcar, escravidão, bandeiras, mineração, revoltas coloniais e movimentos emancipacionistas.",
      ["Analise a formação da sociedade colonial."],
      ["Relacione economia e administração.", "Reconheça resistências e conflitos."]),
    lesson("Revisão: Brasil Império e República",
      "Revise independência, Primeiro Reinado, Regências, Segundo Reinado, café, abolição, Proclamação da República, República Velha e Era Vargas.",
      ["Organize os acontecimentos em uma linha do tempo."],
      ["Diferencie Império e República.", "Analise permanências e mudanças."]),
    lesson("Simulado geral de História",
      "Resolva questões sobre todos os períodos estudados, interpretando documentos, textos, imagens e linhas do tempo.",
      ["Questões de cronologia, interpretação e relações de causa e consequência."],
      ["Justifique as respostas.", "Registre os assuntos que precisam de reforço."])
  ]
},

125: {
  title: "Agricultura, sistemas produtivos, indústria e cadeias produtivas",
  goal: "Compreender a organização das atividades agropecuárias e industriais e suas relações com a economia e o território.",
  days: [
    lesson("Espaço agrário e agricultura",
      "O espaço agrário é organizado por diferentes atividades de produção de alimentos e matérias-primas. A agricultura varia conforme clima, solo, tecnologia, estrutura fundiária e mercado.",
      ["A agricultura pode ser voltada ao consumo interno ou à comercialização."],
      ["Reconheça fatores que influenciam a produção.", "Relacione agricultura e território."]),
    lesson("Sistemas agrícolas",
      "Os sistemas agrícolas apresentam diferentes formas de organização, tecnologia, produtividade e uso da terra. Podem envolver produção familiar, comercial, intensiva ou extensiva.",
      ["Sistemas intensivos utilizam maior quantidade de recursos e tecnologia por área."],
      ["Compare sistemas agrícolas.", "Analise o uso de tecnologia e terra."]),
    lesson("Pecuária e produção agropecuária",
      "A pecuária envolve a criação de animais para obtenção de alimentos e matérias-primas. Sua organização varia conforme finalidade, tecnologia, área utilizada e condições ambientais.",
      ["A pecuária pode apresentar sistemas extensivos e intensivos."],
      ["Diferencie sistemas de criação.", "Relacione produção e impactos ambientais."]),
    lesson("Indústria e transformação da matéria-prima",
      "A indústria transforma matérias-primas em produtos por meio de processos produtivos que envolvem trabalho, energia, tecnologia, máquinas e organização empresarial.",
      ["Indústrias de base fornecem materiais para outras atividades industriais."],
      ["Diferencie tipos de indústria.", "Compreenda a transformação industrial."]),
    lesson("Cadeias produtivas",
      "Uma cadeia produtiva reúne as etapas de produção, transformação, distribuição e comercialização de um bem. Diferentes setores econômicos participam desse processo.",
      ["Uma cadeia pode envolver produção agrícola, indústria, transporte e comércio."],
      ["Identifique as etapas da cadeia.", "Relacione setores primário, secundário e terciário."]),
    lesson("Agricultura, indústria e economia global",
      "A produção agropecuária e industrial está conectada a mercados nacionais e internacionais. Logística, tecnologia, infraestrutura e comércio influenciam a localização e a competitividade das atividades.",
      ["Cadeias globais podem distribuir etapas de produção entre diferentes países."],
      ["Analise a integração entre atividades econômicas.", "Relacione produção, transporte e mercado."])
  ]
},


126: {
  title: "Energia, recursos naturais, transportes e infraestrutura",
  goal: "Compreender a importância dos recursos naturais, das fontes de energia e da infraestrutura para a organização econômica e territorial.",
  days: [
    lesson("Recursos naturais",
      "Recursos naturais são elementos da natureza utilizados pelas sociedades. Podem ser renováveis ou não renováveis, dependendo de sua capacidade de reposição e das condições de exploração.",
      ["Água, solo, minerais e florestas são exemplos de recursos naturais."],
      ["Diferencie recursos renováveis e não renováveis.", "Analise a importância dos recursos para a sociedade."]),
    lesson("Fontes de energia",
      "As fontes de energia podem ser classificadas como renováveis e não renováveis. Sua utilização depende de fatores naturais, econômicos, tecnológicos e políticos.",
      ["Solar, eólica, hidrelétrica, petróleo e carvão mineral."],
      ["Compare fontes energéticas.", "Reconheça vantagens e limitações."]),
    lesson("Matriz energética e matriz elétrica",
      "A matriz energética reúne as fontes utilizadas para atender às necessidades de energia de uma sociedade. A matriz elétrica representa especificamente as fontes utilizadas para gerar eletricidade.",
      ["As duas matrizes possuem significados diferentes."],
      ["Diferencie matriz energética e elétrica.", "Interprete gráficos de consumo."]),
    lesson("Transportes e circulação",
      "Os sistemas de transporte permitem a circulação de pessoas, mercadorias e informações. Rodovias, ferrovias, hidrovias, portos e aeroportos apresentam características diferentes.",
      ["A escolha do modal depende de custo, distância, capacidade e infraestrutura."],
      ["Compare os modais de transporte.", "Relacione transporte e economia."]),
    lesson("Infraestrutura e desenvolvimento",
      "Infraestrutura envolve redes e serviços essenciais para o funcionamento de uma sociedade, como energia, saneamento, transporte, comunicação e abastecimento.",
      ["A infraestrutura influencia a localização de atividades econômicas."],
      ["Reconheça os principais tipos de infraestrutura.", "Analise desigualdades de acesso."]),
    lesson("Energia, transporte e impactos ambientais",
      "A produção de energia e a construção de infraestrutura podem provocar impactos ambientais e sociais. O planejamento busca conciliar desenvolvimento, eficiência e conservação.",
      ["Impactos podem envolver poluição, fragmentação de habitats e alterações territoriais."],
      ["Identifique impactos ambientais.", "Relacione planejamento e sustentabilidade."])
  ]
},

127: {
  title: "Comércio, serviços, globalização e divisão internacional do trabalho",
  goal: "Analisar a organização dos setores econômicos, as relações comerciais e a integração da economia mundial.",
  days: [
    lesson("Setores da economia",
      "As atividades econômicas são frequentemente organizadas em três setores: primário, secundário e terciário. Eles se relacionam por meio da produção, transformação e circulação de bens e serviços.",
      ["Agricultura, indústria e comércio são exemplos de atividades desses setores."],
      ["Diferencie os três setores.", "Relacione suas atividades."]),
    lesson("Comércio interno e externo",
      "O comércio envolve a compra e venda de bens e serviços. Pode ocorrer dentro de um país ou entre diferentes países, por meio de exportações e importações.",
      ["Exportar é vender para outros países.", "Importar é comprar de outros países."],
      ["Diferencie exportação e importação.", "Interprete relações comerciais."]),
    lesson("Setor de serviços",
      "O setor de serviços reúne atividades que atendem a necessidades da população e das empresas, como educação, saúde, turismo, transporte, tecnologia e serviços financeiros.",
      ["Os serviços possuem participação importante nas economias contemporâneas."],
      ["Reconheça atividades terciárias.", "Compreenda sua importância econômica."]),
    lesson("Globalização econômica",
      "A globalização intensificou a integração entre países por meio de fluxos de mercadorias, capitais, informações, tecnologias e pessoas.",
      ["Empresas podem organizar etapas produtivas em diferentes países."],
      ["Identifique os fluxos globais.", "Analise a integração econômica."]),
    lesson("Divisão internacional do trabalho",
      "A divisão internacional do trabalho representa a distribuição de atividades econômicas entre países e regiões. Essa organização pode refletir diferenças tecnológicas, produtivas e históricas.",
      ["Países podem ocupar posições diferentes nas cadeias produtivas globais."],
      ["Compreenda a especialização produtiva.", "Analise desigualdades econômicas."]),
    lesson("Comércio, serviços e desigualdade",
      "A integração comercial pode gerar oportunidades econômicas, mas seus benefícios e custos são distribuídos de maneira desigual entre países, empresas e trabalhadores.",
      ["A posição de um país na economia mundial influencia suas possibilidades de desenvolvimento."],
      ["Analise vantagens e desafios da globalização.", "Relacione comércio e desigualdade."])
  ]
},

128: {
  title: "Geopolítica, Estados, fronteiras, conflitos e relações de poder",
  goal: "Compreender a organização política do espaço mundial e as relações de poder entre Estados e outros agentes.",
  days: [
    lesson("Introdução à geopolítica",
      "A geopolítica estuda as relações entre poder, território, política e espaço geográfico. Recursos naturais, localização, população e economia podem influenciar os interesses dos Estados.",
      ["A geopolítica envolve disputas e cooperações entre diferentes agentes."],
      ["Defina geopolítica.", "Relacione território e poder."]),
    lesson("Estado, nação e território",
      "Estado é uma organização política soberana sobre um território. Nação está relacionada a identidades e vínculos históricos e culturais, enquanto território envolve relações de poder e apropriação do espaço.",
      ["Estado e nação não são conceitos equivalentes."],
      ["Diferencie Estado, nação e território.", "Reconheça suas relações."]),
    lesson("Fronteiras e limites territoriais",
      "Fronteiras delimitam áreas de controle político e podem apresentar dimensões físicas, culturais, econômicas e simbólicas. Sua organização pode ser resultado de acordos ou conflitos históricos.",
      ["Fronteiras podem mudar ao longo do tempo."],
      ["Diferencie fronteira e limite.", "Analise disputas territoriais."]),
    lesson("Conflitos e disputas geopolíticas",
      "Conflitos geopolíticos podem envolver território, recursos naturais, segurança, influência política, identidade e interesses econômicos.",
      ["Os conflitos possuem causas múltiplas e contextos históricos específicos."],
      ["Identifique diferentes causas de conflitos.", "Evite explicações simplistas."]),
    lesson("Cooperação e relações internacionais",
      "Os Estados também estabelecem acordos e formas de cooperação em áreas como comércio, segurança, meio ambiente, saúde e diplomacia.",
      ["Tratados e organizações internacionais podem facilitar a cooperação."],
      ["Diferencie conflito e cooperação.", "Compreenda o papel da diplomacia."]),
    lesson("Análise geopolítica contemporânea",
      "A análise geopolítica considera diferentes escalas, agentes e interesses. Mapas, notícias, dados econômicos e documentos ajudam a compreender relações internacionais.",
      ["Uma mesma situação pode envolver interesses políticos, econômicos e territoriais."],
      ["Interprete mapas geopolíticos.", "Relacione contexto histórico e interesses."])
  ]
},

129: {
  title: "Blocos econômicos, organismos internacionais e mundo multipolar",
  goal: "Compreender formas de integração regional, instituições internacionais e a distribuição do poder mundial.",
  days: [
    lesson("Integração econômica regional",
      "Países podem estabelecer acordos para facilitar o comércio, aproximar suas economias e ampliar a cooperação regional. Existem diferentes níveis de integração.",
      ["Acordos comerciais podem reduzir barreiras entre participantes."],
      ["Compreenda a ideia de integração regional.", "Identifique seus objetivos."]),
    lesson("Blocos econômicos",
      "Blocos econômicos são associações de países que estabelecem formas de cooperação e integração econômica. Seus objetivos e níveis de integração variam.",
      ["União Europeia e Mercosul são exemplos de blocos regionais."],
      ["Reconheça exemplos de blocos.", "Compare objetivos e características."]),
    lesson("Organismos internacionais",
      "Organismos internacionais são instituições criadas para promover cooperação e tratar de questões que ultrapassam fronteiras nacionais.",
      ["ONU, OMC, FMI e Banco Mundial possuem funções diferentes."],
      ["Identifique as funções das instituições.", "Diferencie suas áreas de atuação."]),
    lesson("Organização das Nações Unidas",
      "A ONU foi criada em 1945, após a Segunda Guerra Mundial, com objetivos relacionados à paz, segurança internacional, cooperação e direitos humanos.",
      ["A Assembleia Geral e o Conselho de Segurança são órgãos da ONU."],
      ["Compreenda os objetivos da ONU.", "Reconheça seus principais órgãos."]),
    lesson("Mundo bipolar e multipolar",
      "A distribuição do poder mundial pode ser analisada por diferentes configurações. Durante a Guerra Fria, destacou-se a bipolaridade entre Estados Unidos e União Soviética. Após esse período, a organização mundial passou por transformações.",
      ["Bipolaridade e multipolaridade representam configurações distintas de poder."],
      ["Diferencie bipolaridade e multipolaridade.", "Relacione poder político e econômico."]),
    lesson("Desafios da ordem mundial",
      "A ordem mundial contemporânea envolve disputas econômicas, tecnológicas, políticas e ambientais. Países e instituições buscam ampliar sua influência e enfrentar desafios compartilhados.",
      ["Cooperação internacional e disputas de poder coexistem."],
      ["Analise diferentes centros de poder.", "Interprete desafios internacionais."])
  ]
},

130: {
  title: "Brasil: território, regiões, população, urbanização e desigualdade",
  goal: "Compreender a organização territorial brasileira, sua diversidade regional e as desigualdades socioespaciais.",
  days: [
    lesson("Formação e organização do território brasileiro",
      "O território brasileiro foi formado por processos históricos de ocupação, expansão econômica, disputas e acordos. Sua organização atual apresenta grande diversidade regional.",
      ["A formação territorial envolveu diferentes períodos históricos."],
      ["Reconheça processos de formação territorial.", "Relacione história e geografia."]),
    lesson("Regiões brasileiras",
      "O Brasil é dividido oficialmente em cinco grandes regiões: Norte, Nordeste, Centro-Oeste, Sudeste e Sul. Cada uma apresenta características naturais, econômicas e sociais próprias.",
      ["A divisão regional oficial utiliza critérios definidos pelo IBGE."],
      ["Identifique as cinco regiões.", "Compare características regionais."]),
    lesson("População brasileira",
      "A população brasileira apresenta distribuição desigual pelo território e passou por transformações demográficas ao longo do tempo.",
      ["A população se concentra de maneira desigual entre as regiões."],
      ["Interprete dados demográficos.", "Analise a distribuição populacional."]),
    lesson("Urbanização brasileira",
      "A urbanização brasileira se intensificou principalmente durante o século XX, acompanhando a industrialização, as migrações e a expansão das atividades urbanas.",
      ["O crescimento urbano ocorreu de maneira desigual."],
      ["Relacione industrialização e urbanização.", "Compreenda a expansão das cidades."]),
    lesson("Rede urbana e metropolização",
      "As cidades se conectam por fluxos de pessoas, mercadorias, serviços e informações. Metrópoles exercem influência sobre outras cidades e regiões.",
      ["A rede urbana apresenta diferentes níveis de influência."],
      ["Diferencie cidade e metrópole.", "Compreenda a hierarquia urbana."]),
    lesson("Desigualdade socioespacial",
      "As desigualdades socioespaciais aparecem nas diferenças de acesso à moradia, saneamento, transporte, educação, saúde e oportunidades econômicas.",
      ["A distribuição desigual de infraestrutura influencia a qualidade de vida."],
      ["Identifique desigualdades urbanas.", "Relacione políticas públicas e território."])
  ]
},

131: {
  title: "Brasil: industrialização, agricultura, energia, recursos naturais e questões ambientais",
  goal: "Analisar a economia brasileira e os desafios relacionados à produção, ao uso dos recursos naturais e à conservação ambiental.",
  days: [
    lesson("Industrialização brasileira",
      "A industrialização brasileira ganhou força ao longo do século XX e modificou a economia, a organização do território e as relações de trabalho.",
      ["A industrialização contribuiu para o crescimento de centros urbanos."],
      ["Compreenda o processo de industrialização.", "Relacione indústria e urbanização."]),
    lesson("Distribuição industrial no Brasil",
      "As atividades industriais se distribuem de maneira desigual pelo território, influenciadas por infraestrutura, mercado consumidor, mão de obra, logística e políticas econômicas.",
      ["A concentração industrial historicamente foi maior no Sudeste."],
      ["Analise a localização das indústrias.", "Reconheça processos de desconcentração industrial."]),
    lesson("Agricultura brasileira",
      "A agricultura brasileira apresenta grande diversidade produtiva, envolvendo agricultura familiar, agronegócio, produção de alimentos e cultivos voltados à exportação.",
      ["A estrutura fundiária brasileira apresenta desigualdades históricas."],
      ["Compare formas de produção.", "Analise a concentração de terras."]),
    lesson("Energia e recursos naturais no Brasil",
      "O Brasil utiliza diferentes fontes de energia e possui recursos naturais importantes. A exploração desses recursos envolve questões econômicas, sociais e ambientais.",
      ["Hidrelétricas, petróleo, biomassa, energia solar e eólica."],
      ["Reconheça a matriz energética brasileira.", "Analise desafios de exploração."]),
    lesson("Questões ambientais brasileiras",
      "O país enfrenta desafios como desmatamento, queimadas, poluição, degradação do solo, pressão sobre recursos hídricos e perda de biodiversidade.",
      ["Os impactos ambientais variam conforme a região e a atividade econômica."],
      ["Identifique problemas ambientais.", "Relacione atividades humanas e impactos."]),
    lesson("Desenvolvimento e sustentabilidade no Brasil",
      "O desenvolvimento sustentável busca conciliar necessidades econômicas e sociais com a conservação dos recursos naturais e a proteção dos ecossistemas.",
      ["Planejamento ambiental e políticas públicas são importantes para a sustentabilidade."],
      ["Compreenda o desenvolvimento sustentável.", "Avalie propostas de conservação."])
  ]
},

132: {
  title: "Revisão geral — Geografia 1 + 2",
  goal: "Consolidar os conteúdos de geografia física, humana, econômica, política e ambiental estudados.",
  days: [
    lesson("Revisão de cartografia e geologia",
      "Revise mapas, escalas, coordenadas, projeções, fusos horários, sensoriamento remoto, estrutura da Terra, rochas e placas tectônicas.",
      ["Interprete mapas, escalas e representações."],
      ["Resolva questões cartográficas.", "Reconheça processos geológicos."]),
    lesson("Revisão de clima e natureza",
      "Retome clima, massas de ar, vegetação, biomas, solos, hidrografia, relevo e fenômenos geológicos.",
      ["Relacione fatores naturais e paisagens."],
      ["Diferencie clima e tempo.", "Analise características dos biomas."]),
    lesson("Revisão de população e urbanização",
      "Revise indicadores demográficos, migrações, crescimento populacional, urbanização, rede urbana e desigualdade socioespacial.",
      ["Interprete pirâmides etárias e dados populacionais."],
      ["Analise gráficos demográficos.", "Relacione urbanização e desigualdade."]),
    lesson("Revisão de economia e globalização",
      "Retome agricultura, indústria, serviços, recursos naturais, energia, transportes, infraestrutura, comércio e divisão internacional do trabalho.",
      ["Relacione produção e circulação econômica."],
      ["Compare setores econômicos.", "Analise cadeias produtivas."]),
    lesson("Revisão de geopolítica e Brasil",
      "Revise Estados, fronteiras, conflitos, organismos internacionais, blocos econômicos, mundo multipolar e organização territorial brasileira.",
      ["Interprete relações de poder e organização do espaço."],
      ["Analise mapas geopolíticos.", "Relacione escalas global e nacional."]),
    lesson("Simulado geral de Geografia",
      "Resolva questões integradas envolvendo mapas, gráficos, textos, fenômenos naturais, economia e relações geopolíticas.",
      ["Questões de interpretação e aplicação de conceitos."],
      ["Registre erros e dúvidas.", "Atualize o diagnóstico 🟢🟡🔴."])
  ]
},

133: {
  title: "Trovadorismo, Humanismo, Classicismo e Quinhentismo",
  goal: "Conhecer os primeiros movimentos e manifestações literárias estudados na literatura em língua portuguesa.",
  days: [
    lesson("Contexto da literatura medieval",
      "A literatura medieval em língua portuguesa desenvolveu-se em um contexto de forte influência religiosa, organização feudal e cultura cortesã.",
      ["A produção literária circulava em diferentes ambientes sociais."],
      ["Relacione literatura e contexto histórico.", "Reconheça características medievais."]),
    lesson("Trovadorismo",
      "O Trovadorismo foi uma manifestação literária medieval marcada pela produção de cantigas, frequentemente acompanhadas por música.",
      ["Cantigas de amor, amigo, escárnio e maldizer."],
      ["Diferencie os tipos de cantiga.", "Reconheça características trovadorescas."]),
    lesson("Humanismo",
      "O Humanismo representa um período de transição entre a cultura medieval e a moderna, com maior valorização do ser humano e mudanças na produção cultural.",
      ["Gil Vicente é um importante autor do teatro português."],
      ["Compreenda o contexto de transição.", "Reconheça características humanistas."]),
    lesson("Classicismo",
      "O Classicismo valorizou referências da Antiguidade greco-romana, equilíbrio formal, racionalidade e busca por harmonia estética.",
      ["Luís de Camões é um dos principais representantes da literatura classicista portuguesa."],
      ["Identifique características clássicas.", "Relacione forma e conteúdo."]),
    lesson("Quinhentismo no Brasil",
      "O Quinhentismo reúne textos produzidos no contexto da chegada e colonização portuguesa, incluindo relatos de viagem e textos de caráter religioso.",
      ["A Carta de Pero Vaz de Caminha é um documento importante desse período."],
      ["Diferencie literatura informativa e religiosa.", "Compreenda o contexto colonial."]),
    lesson("Comparação dos primeiros períodos literários",
      "Compare Trovadorismo, Humanismo, Classicismo e Quinhentismo, observando seus contextos, temas, formas de expressão e principais autores.",
      ["Os períodos refletem transformações históricas e culturais."],
      ["Organize os movimentos cronologicamente.", "Identifique diferenças e permanências."])
  ]
},

134: {
  title: "Barroco e Arcadismo",
  goal: "Compreender as características do Barroco e do Arcadismo e relacioná-las aos contextos históricos e culturais.",
  days: [
    lesson("Contexto do Barroco",
      "O Barroco desenvolveu-se em um contexto de conflitos religiosos, Contrarreforma e tensões entre valores espirituais e materiais.",
      ["O movimento apresenta contrastes e conflitos."],
      ["Relacione Barroco e contexto religioso.", "Reconheça tensões temáticas."]),
    lesson("Características do Barroco",
      "A literatura barroca utiliza contrastes, antíteses, paradoxos, linguagem elaborada e conflitos entre razão, fé, corpo e espírito.",
      ["Cultismo e conceptismo são tendências associadas ao Barroco."],
      ["Identifique figuras de linguagem.", "Diferencie cultismo e conceptismo."]),
    lesson("Barroco no Brasil",
      "O Barroco brasileiro apresentou manifestações literárias e artísticas relacionadas à sociedade colonial e à influência religiosa.",
      ["Gregório de Matos e Padre Antônio Vieira."],
      ["Reconheça autores importantes.", "Analise temas e linguagem."]),
    lesson("Contexto do Arcadismo",
      "O Arcadismo surgiu sob influência do Iluminismo e valorizou simplicidade formal, equilíbrio e referências à natureza.",
      ["O movimento também é conhecido como Neoclassicismo."],
      ["Relacione Arcadismo e Iluminismo.", "Reconheça a valorização da natureza."]),
    lesson("Características do Arcadismo",
      "A literatura árcade frequentemente utiliza idealização da vida campestre, referências clássicas e expressões de equilíbrio e simplicidade.",
      ["Bucolismo, pastoralismo e fugere urbem."],
      ["Reconheça convenções árcades.", "Interprete temas recorrentes."]),
    lesson("Arcadismo no Brasil e comparação",
      "O Arcadismo brasileiro esteve relacionado ao contexto colonial do século XVIII e contou com autores como Cláudio Manuel da Costa e Tomás Antônio Gonzaga.",
      ["Compare a linguagem barroca e a árcade."],
      ["Diferencie os dois movimentos.", "Relacione literatura e contexto histórico."])
  ]
},

135: {
  title: "Romantismo",
  goal: "Compreender as características do Romantismo e suas manifestações na literatura brasileira.",
  days: [
    lesson("Contexto histórico do Romantismo",
      "O Romantismo desenvolveu-se no contexto de transformações políticas e sociais dos séculos XVIII e XIX, valorizando subjetividade, sentimentos e identidade nacional.",
      ["O movimento se relaciona a transformações do mundo moderno."],
      ["Relacione Romantismo e contexto histórico.", "Reconheça a valorização do indivíduo."]),
    lesson("Características do Romantismo",
      "A literatura romântica apresenta subjetividade, idealização, sentimentalismo, nacionalismo, liberdade criativa e valorização da imaginação.",
      ["O eu lírico frequentemente expressa emoções e conflitos pessoais."],
      ["Identifique características românticas.", "Analise a subjetividade."]),
    lesson("Primeira geração romântica",
      "No Brasil, a primeira geração romântica destacou temas nacionalistas e indianistas, contribuindo para a construção de uma identidade literária nacional.",
      ["Gonçalves Dias é um representante importante."],
      ["Reconheça o indianismo.", "Analise a construção da identidade nacional."]),
    lesson("Segunda geração romântica",
      "A segunda geração romântica apresenta forte subjetividade, pessimismo, melancolia e temas ligados à idealização amorosa e à existência.",
      ["Álvares de Azevedo é um representante dessa geração."],
      ["Reconheça o ultrarromantismo.", "Analise os temas existenciais."]),
    lesson("Terceira geração romântica",
      "A terceira geração romântica apresenta preocupação social e política, com destaque para a crítica à escravidão e a defesa de ideais de liberdade.",
      ["Castro Alves é associado à poesia social e abolicionista."],
      ["Reconheça o condoreirismo.", "Relacione literatura e crítica social."]),
    lesson("Romantismo em prosa e revisão",
      "A prosa romântica brasileira desenvolveu romances urbanos, indianistas e regionalistas, explorando diferentes grupos sociais e paisagens.",
      ["José de Alencar foi um autor importante da prosa romântica."],
      ["Diferencie tipos de romance.", "Compare as gerações românticas."])
  ]
},

136: {
  title: "Realismo e Naturalismo",
  goal: "Analisar as características do Realismo e do Naturalismo e compreender suas críticas à sociedade.",
  days: [
    lesson("Contexto do Realismo",
      "O Realismo surgiu no século XIX em um contexto de transformações científicas, sociais e econômicas, buscando representar a sociedade de maneira crítica.",
      ["O movimento questionou idealizações comuns em parte da literatura romântica."],
      ["Relacione Realismo e contexto histórico.", "Reconheça a crítica social."]),
    lesson("Características do Realismo",
      "A literatura realista apresenta análise psicológica, crítica social, observação do cotidiano e questionamento de valores e instituições.",
      ["A construção dos personagens pode revelar contradições sociais."],
      ["Identifique características realistas.", "Analise personagens e narradores."]),
    lesson("Realismo no Brasil",
      "O Realismo brasileiro teve em Machado de Assis um de seus principais representantes, com obras que exploram relações sociais e complexidade psicológica.",
      ["Memórias Póstumas de Brás Cubas é uma obra importante."],
      ["Reconheça a ironia e a crítica social.", "Analise a construção narrativa."]),
    lesson("Contexto do Naturalismo",
      "O Naturalismo desenvolveu-se sob influência de correntes científicas do século XIX e enfatizou fatores sociais, ambientais e biológicos na representação dos personagens.",
      ["O movimento apresenta relações com o cientificismo da época."],
      ["Compreenda o contexto naturalista.", "Reconheça suas influências."]),
    lesson("Características do Naturalismo",
      "A literatura naturalista frequentemente apresenta determinismo, análise de ambientes sociais, observação de comportamentos e atenção às condições materiais.",
      ["O ambiente e as condições sociais recebem grande destaque."],
      ["Identifique características naturalistas.", "Analise a relação entre indivíduo e ambiente."]),
    lesson("Naturalismo no Brasil e comparação",
      "Aluísio Azevedo é um dos principais representantes do Naturalismo brasileiro. Realismo e Naturalismo compartilham a crítica à idealização, mas apresentam enfoques distintos.",
      ["O Cortiço é uma obra importante do Naturalismo brasileiro."],
      ["Compare Realismo e Naturalismo.", "Reconheça autores e obras."])
  ]
},

137: {
  title: "Parnasianismo, Simbolismo e Pré-Modernismo",
  goal: "Identificar características desses movimentos literários e compreender suas relações com as transformações culturais brasileiras.",
  days: [
    lesson("Parnasianismo",
      "O Parnasianismo valorizou rigor formal, elaboração estética, métrica, rimas e atenção à construção do poema.",
      ["A busca pela perfeição formal é uma característica central."],
      ["Reconheça características parnasianas.", "Analise a estrutura dos poemas."]),
    lesson("Parnasianismo no Brasil",
      "O Parnasianismo brasileiro destacou a valorização da forma poética e contou com autores como Olavo Bilac, Raimundo Correia e Alberto de Oliveira.",
      ["A tríade parnasiana é uma referência importante."],
      ["Reconheça os principais autores.", "Observe métrica e linguagem."]),
    lesson("Simbolismo",
      "O Simbolismo valorizou musicalidade, subjetividade, espiritualidade, sugestão e exploração de sensações e estados interiores.",
      ["Símbolos e imagens poéticas ajudam a sugerir sentidos."],
      ["Identifique musicalidade e simbolismo.", "Interprete imagens e sensações."]),
    lesson("Simbolismo no Brasil",
      "O Simbolismo brasileiro teve como representantes importantes Cruz e Sousa e Alphonsus de Guimaraens.",
      ["A poesia simbolista explora temas espirituais e subjetivos."],
      ["Reconheça autores.", "Analise recursos expressivos."]),
    lesson("Pré-Modernismo",
      "O Pré-Modernismo brasileiro reúne obras que abordam conflitos sociais, desigualdades, regionalismos e aspectos pouco representados da realidade nacional.",
      ["Euclides da Cunha, Lima Barreto e Monteiro Lobato."],
      ["Compreenda a diversidade temática.", "Relacione literatura e realidade brasileira."]),
    lesson("Comparação e revisão",
      "Compare Parnasianismo, Simbolismo e Pré-Modernismo, observando linguagem, temas, contexto histórico e principais autores.",
      ["Os movimentos apresentam diferentes respostas às transformações do período."],
      ["Diferencie os movimentos.", "Interprete textos literários."])
  ]
},

138: {
  title: "Modernismo — primeira fase",
  goal: "Compreender a ruptura modernista e as transformações estéticas e culturais da primeira fase do Modernismo brasileiro.",
  days: [
    lesson("Contexto do Modernismo",
      "O Modernismo brasileiro desenvolveu-se em um contexto de transformações urbanas, sociais, culturais e artísticas, questionando padrões tradicionais de produção estética.",
      ["A Semana de Arte Moderna ocorreu em 1922."],
      ["Relacione Modernismo e contexto histórico.", "Compreenda a proposta de renovação artística."]),
    lesson("Semana de Arte Moderna de 1922",
      "A Semana de Arte Moderna reuniu artistas e intelectuais interessados em renovar a produção cultural brasileira e questionar modelos acadêmicos tradicionais.",
      ["O evento ocorreu no Theatro Municipal de São Paulo."],
      ["Reconheça os objetivos do evento.", "Compreenda seu papel simbólico."]),
    lesson("Ruptura estética modernista",
      "A primeira fase modernista valorizou experimentação, linguagem coloquial, liberdade formal, humor, crítica e aproximação com a realidade brasileira.",
      ["O uso de versos livres foi uma das possibilidades exploradas."],
      ["Identifique rupturas formais.", "Analise a linguagem modernista."]),
    lesson("Manifestos e nacionalismo crítico",
      "Os manifestos modernistas apresentaram propostas de renovação cultural e diferentes formas de pensar a identidade brasileira.",
      ["Manifesto Pau-Brasil e Manifesto Antropófago."],
      ["Reconheça propostas dos manifestos.", "Analise a ideia de identidade cultural."]),
    lesson("Autores da primeira fase",
      "Mário de Andrade, Oswald de Andrade e Manuel Bandeira foram autores importantes da primeira fase modernista, com produções marcadas pela experimentação.",
      ["Macunaíma é uma obra importante de Mário de Andrade."],
      ["Reconheça autores e obras.", "Observe características estilísticas."]),
    lesson("Análise de textos modernistas",
      "A análise de textos da primeira fase considera linguagem, forma, humor, referências culturais, crítica social e construção da identidade nacional.",
      ["Compare textos modernistas com produções anteriores."],
      ["Interprete recursos de linguagem.", "Identifique rupturas e permanências."])
  ]
},

139: {
  title: "Modernismo — segunda/terceira fases + literatura contemporânea",
  goal: "Compreender a diversidade da literatura modernista brasileira e reconhecer tendências da produção contemporânea.",
  days: [
    lesson("Segunda fase modernista: contexto",
      "A segunda fase modernista desenvolveu-se em um período de transformações políticas, econômicas e sociais, ampliando a diversidade temática e formal da literatura brasileira.",
      ["A segunda fase ocorreu principalmente entre 1930 e 1945."],
      ["Relacione literatura e contexto histórico.", "Reconheça a ampliação temática."]),
    lesson("Poesia da segunda fase",
      "A poesia da segunda fase modernista apresenta diversidade de estilos, reflexão social, questões existenciais e experimentação da linguagem.",
      ["Carlos Drummond de Andrade e Cecília Meireles."],
      ["Reconheça diferentes propostas poéticas.", "Analise temas e linguagem."]),
    lesson("Prosa da segunda fase",
      "A prosa da segunda fase modernista destacou questões sociais e regionais, explorando desigualdade, seca, migração e condições de vida.",
      ["Graciliano Ramos, Jorge Amado e Rachel de Queiroz."],
      ["Identifique o romance de 1930.", "Relacione literatura e realidade social."]),
    lesson("Terceira fase modernista",
      "A terceira fase modernista apresentou diferentes caminhos de experimentação narrativa e poética, com aprofundamento psicológico e exploração da linguagem.",
      ["Clarice Lispector e João Guimarães Rosa são referências importantes."],
      ["Reconheça características da prosa.", "Analise experimentação linguística."]),
    lesson("Literatura contemporânea",
      "A literatura contemporânea apresenta grande diversidade de vozes, temas, gêneros e formas de publicação, abordando experiências individuais e coletivas.",
      ["Podem aparecer questões de identidade, memória, desigualdade e cultura."],
      ["Reconheça diversidade de perspectivas.", "Analise o contexto de produção."]),
    lesson("Comparação das fases modernistas",
      "Compare as três fases modernistas e a literatura contemporânea, considerando contexto, linguagem, temas, autores e transformações estéticas.",
      ["As fases não representam estilos totalmente uniformes."],
      ["Diferencie as fases.", "Interprete textos de diferentes períodos."])
  ]
},

140: {
  title: "Revisão geral — Português 1 + 2 + Literatura",
  goal: "Consolidar gramática, sintaxe, semântica, interpretação, argumentação e literatura em língua portuguesa.",
  days: [
    lesson("Revisão de classes gramaticais e verbos",
      "Revise classes gramaticais, flexões, tempos e modos verbais, funções das palavras e efeitos de sentido produzidos no contexto.",
      ["A função de uma palavra depende de seu uso na frase."],
      ["Classifique palavras.", "Interprete efeitos de sentido."]),
    lesson("Revisão de sintaxe e pontuação",
      "Retome sujeito, predicado, complementos, adjuntos, orações, períodos, coordenação, subordinação, concordância, regência, crase e pontuação.",
      ["Analise a estrutura das orações."],
      ["Identifique funções sintáticas.", "Justifique a pontuação."]),
    lesson("Revisão de semântica e interpretação",
      "Revise polissemia, sinonímia, antonímia, ambiguidade, inferência, pressupostos, implícitos, tese e argumentação.",
      ["O sentido depende do contexto e da relação entre as partes do texto."],
      ["Identifique ideias explícitas e implícitas.", "Analise argumentos."]),
    lesson("Revisão da literatura: períodos iniciais ao século XIX",
      "Retome Trovadorismo, Humanismo, Classicismo, Quinhentismo, Barroco, Arcadismo, Romantismo, Realismo e Naturalismo.",
      ["Relacione escolas literárias e contextos históricos."],
      ["Organize movimentos cronologicamente.", "Reconheça autores e características."]),
    lesson("Revisão da literatura: século XX e contemporaneidade",
      "Revise Parnasianismo, Simbolismo, Pré-Modernismo, as fases modernistas e a literatura contemporânea.",
      ["Compare diferentes propostas estéticas."],
      ["Identifique características dos movimentos.", "Interprete textos literários."]),
    lesson("Simulado geral de Português e Literatura",
      "Resolva questões de gramática, interpretação, sintaxe, semântica e literatura. Corrija as respostas e registre os assuntos que precisam de reforço.",
      ["Questões de análise linguística e interpretação textual."],
      ["Justifique as respostas.", "Atualize o diagnóstico 🟢🟡🔴."])
  ]
},


141: {
  title: "Phrasal verbs e expressões idiomáticas",
  goal: "Ampliar a compreensão e o uso de expressões comuns do inglês em diferentes situações de comunicação.",
  days: [
    lesson("Introdução aos phrasal verbs",
      "Phrasal verbs são combinações de verbos com partículas, como preposições ou advérbios. O significado da combinação pode ser diferente do significado isolado do verbo.",
      ["Give up = desistir.", "Find out = descobrir.", "Turn on = ligar."],
      ["Reconheça verbo e partícula.", "Observe o significado da expressão completa."]),
    lesson("Phrasal verbs do cotidiano",
      "Muitos phrasal verbs aparecem em conversas sobre rotina, atividades domésticas, estudos e trabalho.",
      ["Wake up, get up, sit down, stand up, turn off."],
      ["Identifique expressões cotidianas.", "Utilize-as em frases contextualizadas."]),
    lesson("Phrasal verbs em diferentes contextos",
      "Uma mesma combinação pode apresentar sentidos diferentes dependendo do contexto. A interpretação deve considerar a frase completa.",
      ["Look for = procurar.", "Look after = cuidar.", "Look up = pesquisar ou consultar."],
      ["Não traduza palavra por palavra.", "Utilize o contexto para interpretar."]),
    lesson("Expressões idiomáticas",
      "Expressões idiomáticas possuem sentidos convencionais que nem sempre podem ser compreendidos pela tradução literal de cada palavra.",
      ["Break the ice = quebrar o gelo.", "Piece of cake = algo muito fácil."],
      ["Reconheça sentidos figurados.", "Diferencie significado literal e idiomático."]),
    lesson("Phrasal verbs e idioms em diálogos",
      "Phrasal verbs e expressões idiomáticas aparecem frequentemente em diálogos, filmes, entrevistas e textos informais.",
      ["I ran out of time = fiquei sem tempo.", "Let's figure it out = vamos descobrir."],
      ["Interprete expressões em diálogos.", "Observe o nível de formalidade."]),
    lesson("Produção e interpretação",
      "Nesta aula, combine phrasal verbs e expressões idiomáticas em pequenos diálogos e textos. O objetivo é reconhecer o sentido e utilizar as expressões naturalmente.",
      ["Produza frases com diferentes expressões."],
      ["Utilize pelo menos cinco phrasal verbs.", "Interprete expressões pelo contexto."])
  ]
},

142: {
  title: "Estruturas complexas e conectores",
  goal: "Construir frases e textos mais elaborados, utilizando conectores e estruturas gramaticais complexas.",
  days: [
    lesson("Revisão dos conectores",
      "Conectores estabelecem relações de adição, contraste, causa, consequência, condição e conclusão entre ideias.",
      ["Furthermore = além disso.", "However = entretanto.", "Therefore = portanto."],
      ["Identifique a relação entre ideias.", "Escolha conectores adequados."]),
    lesson("Conectores de contraste e concessão",
      "Estruturas de contraste apresentam ideias diferentes ou opostas. Algumas expressões introduzem concessões, indicando que uma informação não impede outra.",
      ["Although it was difficult, I finished it.", "Despite the difficulty, I finished it."],
      ["Diferencie although e despite.", "Observe a estrutura que vem depois do conector."]),
    lesson("Causa, consequência e finalidade",
      "Conectores de causa, consequência e finalidade ajudam a organizar explicações e argumentos.",
      ["Because = porque.", "Consequently = consequentemente.", "In order to = a fim de."],
      ["Explique causas.", "Apresente consequências e objetivos."]),
    lesson("Conectores de condição e hipótese",
      "Estruturas condicionais permitem expressar situações reais, possibilidades e hipóteses. A escolha da estrutura verbal depende do sentido pretendido.",
      ["If you study, you will improve.", "If I had more time, I would travel."],
      ["Revise os condicionais.", "Diferencie possibilidades e hipóteses."]),
    lesson("Construção de períodos complexos",
      "Períodos complexos podem reunir orações principais e subordinadas. A organização das orações ajuda a expressar relações mais detalhadas.",
      ["I stayed home because it was raining, although I wanted to go out."],
      ["Organize orações com clareza.", "Evite conectar ideias sem relação lógica."]),
    lesson("Produção de texto argumentativo",
      "Um texto argumentativo em inglês deve apresentar uma ideia central, argumentos organizados, exemplos e uma conclusão coerente.",
      ["Use conectores para indicar progressão e contraste."],
      ["Escreva um parágrafo argumentativo.", "Revise coesão e coerência."])
  ]
},

143: {
  title: "Relative clauses e estruturas de referência",
  goal: "Compreender e utilizar orações relativas e recursos de referência para construir textos mais coesos.",
  days: [
    lesson("Introdução às relative clauses",
      "Relative clauses são orações que acrescentam informações sobre um substantivo ou pronome. Elas ajudam a evitar repetições e a conectar informações.",
      ["The boy who lives here is my friend."],
      ["Identifique a informação retomada.", "Reconheça a função da oração relativa."]),
    lesson("Relative pronouns",
      "Os pronomes relativos introduzem orações relativas e estabelecem relações com pessoas, coisas, lugares ou situações.",
      ["Who: pessoas.", "Which: coisas ou animais.", "That: pessoas ou coisas em determinados contextos.", "Whose: posse."],
      ["Diferencie os pronomes relativos.", "Observe o antecedente."]),
    lesson("Defining relative clauses",
      "Orações relativas restritivas identificam precisamente a pessoa ou coisa mencionada. A informação é necessária para determinar o referente.",
      ["The book that I bought is interesting."],
      ["Reconheça informações essenciais.", "Compreenda a identificação do referente."]),
    lesson("Non-defining relative clauses",
      "Orações relativas explicativas acrescentam informações adicionais sobre um referente já identificado. Geralmente aparecem separadas por vírgulas.",
      ["My brother, who lives in Brazil, is a student."],
      ["Diferencie explicação e restrição.", "Observe o uso das vírgulas."]),
    lesson("Referência e substituição",
      "Textos coesos utilizam pronomes, expressões demonstrativas e outras estruturas para retomar informações já mencionadas ou antecipar ideias.",
      ["This, that, these, those, it, they."],
      ["Identifique a que cada pronome se refere.", "Evite ambiguidades."]),
    lesson("Interpretação de textos com referências",
      "A compreensão de textos exige identificar referentes, relações entre orações e informações retomadas ao longo dos parágrafos.",
      ["Observe pronomes e expressões que retomam ideias anteriores."],
      ["Localize antecedentes.", "Interprete relative clauses em textos."])
  ]
},

144: {
  title: "Discurso indireto, voz passiva e condicionais avançados",
  goal: "Integrar estruturas gramaticais avançadas para relatar informações, descrever processos e expressar hipóteses.",
  days: [
    lesson("Reported speech",
      "O discurso indireto permite relatar o que alguém disse sem reproduzir exatamente suas palavras. Dependendo do contexto, pronomes, tempos verbais e expressões temporais podem mudar.",
      ["Direct: She said, 'I am tired.'", "Reported: She said that she was tired."],
      ["Diferencie discurso direto e indireto.", "Observe mudanças de referência."]),
    lesson("Reported questions e commands",
      "Perguntas e ordens também podem ser relatadas indiretamente. A estrutura costuma mudar para uma organização afirmativa, sem a inversão típica de perguntas diretas.",
      ["He asked where I lived.", "She told me to wait."],
      ["Reconheça perguntas indiretas.", "Utilize estruturas de relato."]),
    lesson("Passive voice avançada",
      "A voz passiva destaca a ação ou o elemento que recebe a ação, em vez de colocar o agente como foco principal.",
      ["The project was completed.", "The results have been published."],
      ["Identifique sujeito paciente.", "Reconheça diferentes tempos verbais na passiva."]),
    lesson("Condicionais avançados",
      "Estruturas condicionais avançadas expressam hipóteses, possibilidades e situações imaginárias. Algumas combinam referências a diferentes momentos do tempo.",
      ["If I had studied, I would have passed.", "If I had studied harder, I would be more confident now."],
      ["Revise third conditional.", "Reconheça mixed conditionals."]),
    lesson("Integração das estruturas",
      "Discurso indireto, voz passiva e condicionais podem aparecer no mesmo texto, especialmente em notícias, relatórios e textos acadêmicos.",
      ["The researcher said that the results would be analyzed."],
      ["Identifique diferentes estruturas.", "Interprete relações temporais e lógicas."]),
    lesson("Aplicação em textos",
      "Analise textos que utilizam discurso indireto, voz passiva e condicionais. Depois, produza frases próprias e revise sua estrutura.",
      ["Transforme frases diretas em indiretas.", "Reescreva frases na voz passiva."],
      ["Combine as três estruturas.", "Revise tempos verbais e conectores."])
  ]
},

145: {
  title: "Vocabulário acadêmico, formação de palavras e contexto",
  goal: "Ampliar o vocabulário e compreender como palavras são formadas e interpretadas em textos mais complexos.",
  days: [
    lesson("Vocabulário acadêmico",
      "Textos acadêmicos utilizam vocabulário relacionado a pesquisa, análise, argumentação, resultados e explicações.",
      ["Evidence = evidência.", "Research = pesquisa.", "Findings = resultados encontrados."],
      ["Reconheça termos acadêmicos.", "Observe o assunto do texto."]),
    lesson("Prefixos",
      "Prefixos são elementos adicionados ao início de uma palavra e podem modificar seu significado.",
      ["Unhappy, impossible, rewrite, misunderstand."],
      ["Identifique prefixos comuns.", "Deduzir significados a partir da formação."]),
    lesson("Sufixos",
      "Sufixos são elementos adicionados ao final das palavras e podem alterar sua classe gramatical ou seu significado.",
      ["Careful, happiness, development, readable."],
      ["Reconheça sufixos.", "Identifique mudanças de classe gramatical."]),
    lesson("Famílias de palavras",
      "Palavras de uma mesma família compartilham uma base e podem aparecer em diferentes formas gramaticais.",
      ["Create, creative, creation, creatively."],
      ["Identifique a palavra-base.", "Reconheça relações entre substantivos, verbos e adjetivos."]),
    lesson("Vocabulário pelo contexto",
      "Nem sempre é necessário conhecer todas as palavras de um texto. O contexto, a estrutura da frase e as palavras próximas ajudam a deduzir significados.",
      ["Observe exemplos, contrastes, definições e explicações ao redor do termo."],
      ["Deduzir significados desconhecidos.", "Utilize pistas contextuais."]),
    lesson("Leitura de vocabulário em textos acadêmicos",
      "Nesta aula, interprete trechos acadêmicos e identifique palavras-chave, famílias de palavras, prefixos, sufixos e sentidos contextuais.",
      ["Observe como uma mesma raiz aparece em diferentes formas."],
      ["Amplie seu vocabulário.", "Justifique interpretações pelo contexto."])
  ]
},

146: {
  title: "Textos jornalísticos, científicos e literários",
  goal: "Reconhecer diferentes gêneros textuais em inglês e adaptar estratégias de leitura a cada um.",
  days: [
    lesson("Textos jornalísticos",
      "Textos jornalísticos apresentam acontecimentos, informações e análises. É importante identificar título, subtítulo, fonte, data, fato principal e posicionamento.",
      ["News report, article, interview, editorial."],
      ["Identifique o fato principal.", "Diferencie notícia e opinião."]),
    lesson("Textos científicos",
      "Textos científicos apresentam pesquisas, procedimentos, resultados e explicações. Frequentemente utilizam vocabulário técnico e linguagem objetiva.",
      ["Research, method, results, conclusion."],
      ["Identifique objetivo e resultados.", "Reconheça informações técnicas."]),
    lesson("Textos literários",
      "Textos literários exploram narrativas, personagens, linguagem figurada, perspectivas e recursos expressivos.",
      ["Short story, poem, novel, dialogue."],
      ["Identifique narrador e personagens.", "Interprete sentidos figurados."]),
    lesson("Comparação entre gêneros",
      "Cada gênero possui objetivos e características próprios. Comparar textos permite reconhecer diferenças de linguagem, estrutura, público e finalidade.",
      ["Uma notícia informa; um artigo científico apresenta conhecimento; um conto constrói uma narrativa."],
      ["Diferencie objetivos comunicativos.", "Compare estruturas textuais."]),
    lesson("Fontes, confiabilidade e intenção",
      "A leitura crítica considera a origem das informações, a autoria, as evidências apresentadas, a intenção comunicativa e possíveis vieses.",
      ["Observe fontes, dados e argumentos."],
      ["Avalie a confiabilidade.", "Diferencie evidência e opinião."]),
    lesson("Leitura integrada de gêneros",
      "Leia trechos jornalísticos, científicos e literários, identificando tema, vocabulário, estrutura e intenção comunicativa.",
      ["Utilize estratégias diferentes para cada gênero."],
      ["Interprete informações explícitas e implícitas.", "Justifique suas conclusões."])
  ]
},

147: {
  title: "Interpretação avançada e questões de vestibular",
  goal: "Desenvolver leitura crítica e resolução de questões de inglês com diferentes gêneros e níveis de complexidade.",
  days: [
    lesson("Leitura global e identificação do tema",
      "A leitura global busca compreender o assunto principal e a organização geral de um texto antes de analisar detalhes.",
      ["Observe título, introdução, palavras repetidas e conclusão."],
      ["Identifique o tema central.", "Reconheça a finalidade do texto."]),
    lesson("Localização de informações específicas",
      "Questões de interpretação frequentemente exigem localizar dados, datas, relações, exemplos e informações específicas.",
      ["Utilize leitura seletiva para encontrar informações."],
      ["Localize evidências textuais.", "Evite responder apenas por opinião."]),
    lesson("Inferência e informação implícita",
      "Inferir significa chegar a uma conclusão a partir de pistas do texto. A resposta precisa ser sustentada por informações disponíveis.",
      ["Observe contexto, conectores, escolhas de palavras e relações entre ideias."],
      ["Diferencie inferência e suposição.", "Justifique conclusões."]),
    lesson("Tese, argumento e intenção",
      "Textos argumentativos apresentam posições, justificativas e recursos de persuasão. Identificar a tese ajuda a compreender a intenção do autor.",
      ["Observe conectores argumentativos e exemplos."],
      ["Identifique a tese.", "Reconheça argumentos e contra-argumentos."]),
    lesson("Questões de vestibular",
      "Questões de vestibular podem cobrar interpretação, vocabulário contextual, estruturas gramaticais e reconhecimento de gêneros textuais.",
      ["Leia o enunciado e retorne ao trecho que sustenta a resposta."],
      ["Analise todas as alternativas.", "Elimine respostas incompatíveis com o texto."]),
    lesson("Simulado de interpretação avançada",
      "Resolva questões de inglês com textos de diferentes gêneros. Registre erros relacionados a vocabulário, interpretação, gramática e distração.",
      ["Trabalhe com textos jornalísticos, científicos e literários."],
      ["Justifique as respostas.", "Identifique dificuldades recorrentes."])
  ]
},

148: {
  title: "Revisão geral — Inglês 1 + 2",
  goal: "Consolidar gramática, vocabulário, leitura, interpretação e comunicação estudados ao longo do curso.",
  days: [
    lesson("Revisão dos tempos verbais",
      "Revise presente, passado, futuro, tempos contínuos, Present Perfect, Past Perfect e Present Perfect Continuous.",
      ["Compare estruturas e seus usos em contexto."],
      ["Reconheça referências temporais.", "Escolha tempos verbais adequados."]),
    lesson("Revisão de estruturas gramaticais",
      "Retome voz passiva, discurso indireto, condicionais, relative clauses, gerúndio, infinitivo e estruturas complexas.",
      ["Observe a organização das orações."],
      ["Identifique estruturas avançadas.", "Revise transformações de frases."]),
    lesson("Revisão de vocabulário",
      "Revise vocabulário cotidiano, acadêmico, formação de palavras, phrasal verbs e expressões idiomáticas.",
      ["Utilize contexto e famílias de palavras."],
      ["Interprete expressões.", "Reconheça prefixos e sufixos."]),
    lesson("Revisão de conectores e coesão",
      "Retome conectores de adição, contraste, causa, consequência, condição e conclusão, além dos recursos de referência.",
      ["Furthermore, however, therefore, although, despite."],
      ["Organize ideias.", "Evite ambiguidades e repetições."]),
    lesson("Revisão de gêneros e interpretação",
      "Revise estratégias de leitura de notícias, textos científicos, textos literários, diálogos e textos argumentativos.",
      ["Identifique tema, finalidade, tese e informações específicas."],
      ["Faça inferências justificadas.", "Reconheça a intenção comunicativa."]),
    lesson("Avaliação geral de Inglês",
      "Realize uma avaliação que integre gramática, vocabulário, leitura e interpretação. Utilize os resultados para identificar os conteúdos que ainda precisam de reforço.",
      ["Questões integradas dos dois módulos."],
      ["Registre erros recorrentes.", "Atualize o diagnóstico 🟢🟡🔴."])
  ]
},

149: {
  title: "Revisão geral absoluta",
  goal: "Revisar todas as matérias do currículo, priorizando questões, erros anteriores e conteúdos que ainda precisam de reforço.",
  days: [
    lesson("Matemática e Física",
      "Revise conceitos fundamentais, fórmulas, operações, funções, geometria, movimentos, forças, energia, eletricidade e demais conteúdos estudados.",
      ["Priorize exercícios e interpretação de situações-problema."],
      ["Revise fórmulas.", "Resolva questões variadas."]),
    lesson("Biologia e Química",
      "Retome os principais conceitos de células, genética, evolução, ecologia, química geral, reações, soluções, equilíbrio e conteúdos estudados.",
      ["Relacione conceitos e aplicações."],
      ["Revise processos biológicos.", "Interprete fenômenos químicos."]),
    lesson("História e Geografia",
      "Revise processos históricos, transformações sociais, organização territorial, geopolítica, economia e questões ambientais.",
      ["Utilize linhas do tempo, mapas e gráficos."],
      ["Relacione causas e consequências.", "Interprete dados geográficos."]),
    lesson("Português e Inglês",
      "Retome gramática, sintaxe, semântica, interpretação, literatura, vocabulário e estruturas das duas línguas.",
      ["Priorize leitura e análise de textos."],
      ["Identifique dificuldades linguísticas.", "Revise interpretação."]),
    lesson("Filosofia, Sociologia, Artes e Educação Física",
      "Revise os conceitos, autores, manifestações culturais, práticas corporais e temas sociais estudados ao longo do currículo.",
      ["Organize os conceitos fundamentais de cada matéria."],
      ["Relacione conceitos e exemplos.", "Revise conteúdos esquecidos."]),
    lesson("Diagnóstico geral",
      "Faça um levantamento dos conteúdos dominados, dos que precisam de revisão e daqueles que ainda não foram compreendidos. Utilize os erros antigos como guia.",
      ["Organize os assuntos em 🟢, 🟡 e 🔴."],
      ["Priorize erros antigos.", "Monte uma lista de reforço."])
  ]
},

150: {
  title: "Matemática + Física geral",
  goal: "Completar os conteúdos de matemática e física que ficaram reservados para a etapa de integração final.",
  days: [
    lesson("Geometria analítica",
      "A geometria analítica relaciona elementos geométricos a coordenadas e equações. O plano cartesiano permite representar pontos, retas e outras figuras.",
      ["Distância entre pontos e ponto médio.", "Coeficiente angular e equação da reta."],
      ["Interprete coordenadas.", "Calcule distâncias e pontos médios."]),
    lesson("Circunferência e posições relativas",
      "A circunferência pode ser representada por uma equação no plano cartesiano. A análise das posições relativas permite estudar relações entre pontos, retas e circunferências.",
      ["Centro, raio e equação da circunferência."],
      ["Reconheça centro e raio.", "Analise posições relativas."]),
    lesson("Matrizes, determinantes e sistemas lineares",
      "Matrizes organizam informações numéricas em linhas e colunas. Determinantes e sistemas lineares permitem estudar relações entre variáveis.",
      ["Operações com matrizes e resolução de sistemas."],
      ["Reconheça ordem de matrizes.", "Resolva sistemas lineares."]),
    lesson("Combinatória e probabilidade",
      "A análise combinatória estuda formas de contar possibilidades. A probabilidade utiliza essa contagem para avaliar a chance de eventos.",
      ["Princípio fundamental da contagem, permutações, arranjos e combinações."],
      ["Diferencie arranjo e combinação.", "Calcule probabilidades simples e condicionais."]),
    lesson("Estatística e introdução ao cálculo",
      "A estatística organiza e interpreta dados por medidas de tendência central e dispersão. Limites e derivadas introduzem o estudo de variação de funções.",
      ["Média, mediana, moda, variância e desvio padrão."],
      ["Interprete gráficos e dados.", "Compreenda as ideias iniciais de limite e derivada."]),
    lesson("Física: óptica, eletricidade e magnetismo",
      "Revise óptica geométrica, espelhos, lentes, formação de imagens, eletricidade, circuitos, magnetismo e indução eletromagnética.",
      ["Leis de Faraday e Lenz.", "Motores e geradores."],
      ["Interprete fenômenos ópticos.", "Relacione eletricidade e magnetismo."])
  ]
},

151: {
  title: "Química + Biologia geral",
  goal: "Completar os conteúdos de química orgânica, zoologia, botânica, fisiologia e microbiologia.",
  days: [
    lesson("Química orgânica: carbono e cadeias",
      "A química orgânica estuda principalmente os compostos de carbono. As cadeias carbônicas podem apresentar diferentes tamanhos, ramificações e tipos de ligação.",
      ["Cadeias abertas, fechadas, saturadas e insaturadas."],
      ["Identifique cadeias carbônicas.", "Reconheça suas classificações."]),
    lesson("Funções orgânicas",
      "As funções orgânicas agrupam compostos de acordo com características estruturais. Entre elas estão hidrocarbonetos, álcoois, fenóis, aldeídos, cetonas e ácidos carboxílicos.",
      ["Ésteres, aminas e amidas também são funções orgânicas."],
      ["Reconheça grupos funcionais.", "Relacione estrutura e função."]),
    lesson("Isomeria e reações orgânicas",
      "Isômeros apresentam a mesma fórmula molecular, mas diferentes organizações estruturais ou espaciais. Reações orgânicas transformam compostos em novas substâncias.",
      ["Isomeria plana e espacial.", "Reações de adição, substituição e eliminação."],
      ["Diferencie tipos de isomeria.", "Reconheça transformações orgânicas."]),
    lesson("Zoologia: invertebrados",
      "A zoologia estuda os animais e sua diversidade. Os grupos de invertebrados apresentam diferentes estruturas corporais, formas de reprodução e adaptações.",
      ["Poríferos, cnidários, platelmintos, nematódeos, anelídeos, moluscos, artrópodes e equinodermos."],
      ["Compare os principais filos.", "Reconheça características dos grupos."]),
    lesson("Zoologia: vertebrados e aves",
      "Os cordados incluem animais com características embrionárias compartilhadas. Entre os vertebrados estão peixes, anfíbios, répteis, aves e mamíferos.",
      ["As aves possuem penas e diversas adaptações ao ambiente."],
      ["Compare os grupos de vertebrados.", "Reconheça características das aves."]),
    lesson("Botânica, fisiologia e microbiologia",
      "Revise tecidos vegetais, órgãos das plantas, reprodução vegetal, sistemas do corpo humano e os principais grupos de microrganismos.",
      ["Vírus, bactérias, protozoários e fungos."],
      ["Reconheça estruturas vegetais.", "Relacione sistemas do corpo e funções.", "Compreenda vacinação e resistência bacteriana."])
  ]
},

152: {
  title: "História + Geografia geral",
  goal: "Completar os principais conteúdos de História do Brasil republicano e contemporâneo e aprofundar questões geopolíticas e ambientais.",
  days: [
    lesson("Brasil República",
      "A República brasileira passou por diferentes fases políticas, com transformações institucionais, econômicas e sociais.",
      ["Coronelismo, política dos governadores e política do café com leite."],
      ["Compreenda a Primeira República.", "Relacione poder político e economia."]),
    lesson("Era Vargas e período democrático",
      "A Era Vargas foi marcada por centralização política, transformações trabalhistas e diferentes fases de governo. Após 1945, o Brasil passou por um período democrático.",
      ["Revolução de 1930 e Estado Novo."],
      ["Identifique características do período.", "Relacione política e sociedade."]),
    lesson("Ditadura Militar e redemocratização",
      "A Ditadura Militar brasileira alterou instituições políticas e direitos civis. O processo de redemocratização culminou na Constituição de 1988.",
      ["A Constituição de 1988 estabeleceu a atual ordem constitucional brasileira."],
      ["Compreenda o regime militar.", "Analise a redemocratização."]),
    lesson("Imperialismo e guerras mundiais",
      "O imperialismo, as rivalidades entre potências e as disputas territoriais contribuíram para transformações internacionais e conflitos de grande escala.",
      ["Primeira Guerra, Revolução Russa, crise de 1929 e Segunda Guerra."],
      ["Relacione causas e consequências.", "Reconheça transformações políticas."]),
    lesson("Totalitarismos, Guerra Fria e descolonização",
      "O século XX foi marcado pela ascensão de regimes totalitários, pela Guerra Fria, por revoluções socialistas e por processos de descolonização.",
      ["Fascismo, nazismo, Holocausto e disputas entre blocos."],
      ["Compreenda os conflitos ideológicos.", "Analise a descolonização."]),
    lesson("Geografia ambiental e geopolítica",
      "Revise mudanças climáticas, desmatamento, poluição, recursos hídricos, sustentabilidade, conservação, mundo multipolar e relações de poder.",
      ["Relacione questões ambientais e decisões políticas."],
      ["Analise problemas ambientais.", "Interprete relações geopolíticas."])
  ]
},

153: {
  title: "Português + Redação",
  goal: "Consolidar os conteúdos de língua portuguesa e produzir uma redação completa em condições semelhantes às de uma avaliação.",
  days: [
    lesson("Gramática e classes de palavras",
      "Revise classes gramaticais, flexões, tempos verbais, pronomes, concordância, regência e demais estruturas linguísticas.",
      ["A função das palavras depende do contexto em que aparecem."],
      ["Classifique estruturas.", "Revise dificuldades gramaticais."]),
    lesson("Sintaxe, semântica e pontuação",
      "Retome funções sintáticas, períodos, coordenação, subordinação, relações de sentido, ambiguidades e pontuação.",
      ["Analise a organização dos períodos."],
      ["Identifique relações sintáticas.", "Justifique o uso da pontuação."]),
    lesson("Interpretação e gêneros textuais",
      "A interpretação exige identificar tema, tese, argumentos, informações implícitas, finalidade e organização dos gêneros textuais.",
      ["Diferencie informação explícita e inferência."],
      ["Analise textos variados.", "Identifique estratégias argumentativas."]),
    lesson("Literatura",
      "Revise os movimentos literários estudados, relacionando contexto histórico, características estéticas, autores e obras.",
      ["Do Trovadorismo ao Modernismo e à literatura contemporânea."],
      ["Organize os movimentos.", "Reconheça características literárias."]),
    lesson("Planejamento da redação final",
      "Escolha um tema de redação e organize uma tese, argumentos, repertório e proposta de conclusão, respeitando o gênero e os critérios da avaliação.",
      ["Planeje introdução, desenvolvimento e conclusão."],
      ["Defina uma tese clara.", "Organize argumentos coerentes."]),
    lesson("Redação final",
      "Produza uma redação completa sobre o tema escolhido, simulando as condições de uma prova. Depois, revise estrutura, coesão, argumentação, clareza e domínio da norma-padrão.",
      ["A redação deve apresentar progressão lógica e conclusão adequada."],
      ["Escreva sem interromper constantemente.", "Revise o texto ao terminar."])
  ]
},

154: {
  title: "Inglês geral",
  goal: "Consolidar interpretação, vocabulário e gramática de inglês e concluir a novela estudada durante o curso.",
  days: [
    lesson("Revisão de interpretação",
      "Revise estratégias de leitura global, localização de informações, inferência, identificação de tema e compreensão da intenção do autor.",
      ["Utilize evidências do próprio texto."],
      ["Identifique informações explícitas.", "Justifique inferências."]),
    lesson("Revisão de vocabulário",
      "Retome vocabulário cotidiano e acadêmico, phrasal verbs, expressões idiomáticas, prefixos, sufixos e formação de palavras.",
      ["Observe o significado das expressões em contexto."],
      ["Amplie o vocabulário.", "Interprete expressões figuradas."]),
    lesson("Revisão de gramática",
      "Revise tempos verbais, condicionais, voz passiva, discurso indireto, relative clauses e estruturas complexas.",
      ["Compare estruturas em diferentes situações."],
      ["Reconheça formas verbais.", "Revise construções avançadas."]),
    lesson("Conectores e estruturas textuais",
      "Retome conectores, referência pronominal, organização de parágrafos e recursos de coesão.",
      ["Analise como as ideias se relacionam."],
      ["Organize argumentos.", "Identifique relações lógicas."]),
    lesson("Textos científicos, jornalísticos e literários",
      "Leia textos de diferentes gêneros e identifique finalidade, público, linguagem, informações principais e recursos expressivos.",
      ["Compare textos informativos, argumentativos e literários."],
      ["Adapte estratégias de leitura.", "Avalie informações e argumentos."]),
    lesson("Capítulo final da novela em inglês",
      "Conclua a novela em inglês, acompanhando os acontecimentos, personagens e conflitos. Ao terminar, produza um resumo em inglês ou português e registre o vocabulário aprendido.",
      ["Identifique os principais acontecimentos e o desfecho."],
      ["Conclua a leitura.", "Registre aprendizados e novas expressões."])
  ]
},

155: {
  title: "O simulado completo",
  goal: "Realizar uma avaliação abrangente de todas as matérias, sem consulta, registrando os resultados e identificando pontos fortes e fracos.",
  days: [
    lesson("Preparação para o simulado",
      "Organize o ambiente, os materiais e o tempo disponível. Revise as instruções e prepare-se para realizar a avaliação sem consulta.",
      ["O objetivo é medir o conhecimento construído ao longo do ciclo."],
      ["Organize o tempo.", "Evite consultar materiais durante a avaliação."]),
    lesson("Simulado — Ciências exatas e da natureza",
      "Resolva questões de Matemática, Física, Química e Biologia, abrangendo conceitos, cálculos, interpretação de dados e aplicação de conhecimentos.",
      ["Registre questões demoradas e aquelas em que houve dúvida."],
      ["Resolva sem consulta.", "Marque questões que precisam de revisão."]),
    lesson("Simulado — Ciências humanas",
      "Resolva questões de História, Geografia, Filosofia e Sociologia, considerando processos históricos, conceitos sociais, interpretação de mapas e relações geopolíticas.",
      ["Analise textos, gráficos, mapas e situações-problema."],
      ["Justifique suas escolhas.", "Observe dificuldades de interpretação."]),
    lesson("Simulado — Linguagens",
      "Resolva questões de Português, Literatura, Inglês, Artes e Educação Física, trabalhando interpretação, linguagem, cultura e conhecimentos específicos.",
      ["Leia os enunciados com atenção."],
      ["Diferencie distração e desconhecimento.", "Registre dúvidas."]),
    lesson("Correção completa",
      "Corrija todas as questões e classifique os erros por conteúdo, distração, interpretação e falta de conhecimento. Observe também questões demoradas e respostas dadas por tentativa.",
      ["Registre acertos, erros e questões chutadas."],
      ["Identifique padrões de erro.", "Reconheça matérias fortes e fracas."]),
    lesson("Relatório do simulado",
      "Elabore um relatório final com desempenho por matéria, conteúdos dominados, dificuldades persistentes e prioridades de estudo para o encerramento do ciclo.",
      ["Organize resultados e prioridades."],
      ["Registre os resultados.", "Prepare a análise final da Semana 156."])
  ]
},


156: {
  title: "APITO FINAL — Encerramento do ciclo",
  goal: "Analisar o desempenho construído ao longo das 156 semanas, identificar conhecimentos consolidados e dificuldades restantes e definir os próximos passos de aprendizagem.",
  days: [
    lesson("Análise geral do desempenho",
      "Chegou o momento de observar sua trajetória ao longo das 156 semanas. Analise avaliações, exercícios, relatórios, erros antigos e resultados dos simulados. O objetivo é compreender sua evolução, não apenas olhar para as notas.",
      [
        "Consulte os resultados das avaliações.",
        "Compare seu desempenho ao longo do ciclo."
      ],
      [
        "Identifique sua evolução.",
        "Observe dificuldades recorrentes.",
        "Reconheça conquistas importantes."
      ]),

    lesson("Conteúdos dominados — 🟢",
      "Organize os conteúdos que você consegue explicar, interpretar e aplicar com segurança. Um assunto dominado não é apenas aquele em que você acertou uma questão, mas aquele cujo conhecimento consegue utilizar em diferentes situações.",
      [
        "Liste os assuntos que você domina.",
        "Registre exemplos de exercícios resolvidos corretamente."
      ],
      [
        "Identifique os conteúdos consolidados.",
        "Reconheça suas matérias mais fortes.",
        "Registre suas principais conquistas."
      ]),

    lesson("Conteúdos em desenvolvimento — 🟡",
      "Identifique os assuntos que você compreende parcialmente, mas ainda apresentam dúvidas ou erros ocasionais. Esses conteúdos precisam de exercícios adicionais e revisões periódicas.",
      [
        "Liste assuntos que ainda geram dúvidas.",
        "Identifique erros que aparecem ocasionalmente."
      ],
      [
        "Descubra o que falta compreender.",
        "Priorize revisões e exercícios.",
        "Transforme dificuldades em objetivos de estudo."
      ]),

    lesson("Conteúdos que precisam de reforço — 🔴",
      "Agora identifique os assuntos que ainda não foram compreendidos ou que apresentam dificuldades importantes. Não há problema em encontrar conteúdos nessa categoria: reconhecer uma dificuldade é o primeiro passo para resolvê-la.",
      [
        "Liste os conteúdos que precisam ser reaprendidos.",
        "Consulte erros do simulado e das avaliações anteriores."
      ],
      [
        "Identifique lacunas de aprendizagem.",
        "Separe dificuldades conceituais de erros de interpretação.",
        "Defina prioridades de recuperação."
      ]),

    lesson("Balanço das matérias e competências",
      "Compare o desempenho entre as matérias e observe quais conhecimentos se tornaram mais sólidos e quais precisam de continuidade. Considere também organização, interpretação, resolução de problemas e autonomia nos estudos.",
      [
        "Matérias fortes e matérias que precisam de atenção.",
        "Erros recorrentes e dificuldades específicas.",
        "Habilidades que evoluíram durante o ciclo."
      ],
      [
        "Identifique pontos fortes e fracos.",
        "Reconheça competências desenvolvidas.",
        "Organize prioridades para o futuro."
      ]),

    lesson("O que vem depois — Apito final",
      "As 156 semanas chegaram ao fim, mas a aprendizagem continua. Utilize toda a análise para montar um plano de continuidade, com revisões dos conteúdos pendentes, aprofundamento dos assuntos dominados e novos objetivos de aprendizagem.",
      [
        "Defina quais conteúdos continuarão sendo estudados.",
        "Estabeleça prioridades para o próximo ciclo.",
        "Registre suas conquistas e próximos objetivos."
      ],
      [
        "Prepare seu plano de continuidade.",
        "Defina metas realistas.",
        "Reconheça tudo o que foi construído ao longo das 156 semanas."
      ])
  ]
},

};


// =====================================================
// LABORATÓRIO DE ENGENHARIA
// SEMANAS 10 A 19
// =====================================================

export const ENGINEERING_WEEKS = {

  // ---------------------------------------------------
  // SEMANA 10 — DIAGNÓSTICO
  // ---------------------------------------------------

  10: {
    title: "Diagnóstico de Matemática e Lógica",
    goal: "Identificar conhecimentos prévios de matemática e raciocínio lógico para orientar o início da formação em engenharia.",

    days: [
      lesson(
        "Diagnóstico de operações matemáticas",
        "Revisão diagnóstica das quatro operações, números positivos e negativos e ordem de resolução de expressões. O objetivo é identificar conhecimentos já dominados e pontos que precisam de reforço.",
        ["12 + 8 × 2 = 28", "-5 + 9 = 4"],
        ["Operações fundamentais.", "Ordem das operações.", "Números negativos."]
      ),
      lesson(
        "Diagnóstico de frações",
        "Avaliação inicial de leitura, comparação e operações com frações. Frações aparecem frequentemente em medidas, proporções e cálculos técnicos.",
        ["1/2 + 1/4 = 3/4", "2/3 × 3/5 = 2/5"],
        ["Reconhecer frações.", "Simplificar resultados.", "Realizar operações."]
      ),
      lesson(
        "Diagnóstico de proporções",
        "Verificação da capacidade de comparar grandezas e compreender relações proporcionais, importantes em escalas, misturas e dimensionamentos.",
        ["2/4 = 3/6", "Se 1 peça custa R$ 5, três peças custam R$ 15."],
        ["Interpretar razões.", "Reconhecer proporções.", "Resolver situações simples."]
      ),
      lesson(
        "Diagnóstico de álgebra",
        "Introdução diagnóstica às incógnitas, expressões e equações. A álgebra permite representar situações técnicas por meio de variáveis.",
        ["x + 4 = 10", "3a + 2a = 5a"],
        ["Reconhecer variáveis.", "Simplificar expressões.", "Resolver equações simples."]
      ),
      lesson(
        "Diagnóstico de raciocínio lógico",
        "O raciocínio lógico envolve identificar padrões, relações, sequências e conclusões. É uma habilidade importante para matemática, programação e engenharia.",
        ["Sequência: 2, 4, 6, 8, ...", "Se A é maior que B e B é maior que C, então A é maior que C."],
        ["Identificar padrões.", "Analisar relações.", "Construir conclusões."]
      ),
      lesson(
        "Análise do diagnóstico",
        "Esta aula organiza os resultados do diagnóstico. O objetivo é identificar quais conteúdos estão consolidados e quais precisam ser estudados novamente durante o curso.",
        ["Classificar conteúdos como dominados, em desenvolvimento ou pendentes."],
        ["Reconhecer pontos fortes.", "Identificar lacunas.", "Preparar o plano de estudos."]
      )
    ]
  },

  // ---------------------------------------------------
  // SEMANA 11 — OPERAÇÕES MATEMÁTICAS
  // ---------------------------------------------------

  11: {
    title: "Operações matemáticas, frações e números negativos",
    goal: "Desenvolver segurança em cálculos fundamentais utilizados em problemas de engenharia.",

    days: [
      lesson(
        "Adição e subtração com sinais",
        "A soma e a subtração de números negativos exigem atenção aos sinais. Na reta numérica, somar um número positivo desloca para a direita e somar um negativo desloca para a esquerda.",
        ["-5 + 8 = 3", "-4 - 3 = -7"],
        ["Operar números positivos e negativos.", "Interpretar sinais.", "Utilizar a reta numérica."]
      ),
      lesson(
        "Multiplicação e divisão com sinais",
        "Na multiplicação e divisão, sinais iguais produzem resultado positivo e sinais diferentes produzem resultado negativo.",
        ["(-3) × (-4) = 12", "(-20) ÷ 5 = -4"],
        ["Aplicar regras de sinais.", "Calcular produtos.", "Calcular divisões."]
      ),
      lesson(
        "Ordem das operações",
        "Expressões numéricas devem ser resolvidas seguindo uma ordem. Parênteses, potências, multiplicações e divisões vêm antes de adições e subtrações.",
        ["3 + 2 × 5 = 13", "(3 + 2) × 5 = 25"],
        ["Respeitar prioridades.", "Utilizar parênteses.", "Evitar erros de cálculo."]
      ),
      lesson(
        "Frações e simplificação",
        "Frações representam divisões e partes de uma unidade. Simplificar significa dividir numerador e denominador por um mesmo fator não nulo.",
        ["6/8 = 3/4", "12/18 = 2/3"],
        ["Simplificar frações.", "Encontrar fatores comuns.", "Reconhecer frações equivalentes."]
      ),
      lesson(
        "Operações com frações",
        "As operações com frações seguem regras específicas. Na soma, precisamos de denominadores comuns; na multiplicação, multiplicamos os termos correspondentes.",
        ["1/3 + 1/6 = 1/2", "2/5 × 3/4 = 3/10"],
        ["Somar e subtrair frações.", "Multiplicar e dividir frações.", "Organizar resultados."]
      ),
      lesson(
        "Problemas matemáticos aplicados",
        "Cálculos fundamentais aparecem em situações técnicas, como divisão de materiais, medidas, custos e distribuição de quantidades.",
        ["Uma peça de 12 cm dividida em três partes iguais produz partes de 4 cm."],
        ["Interpretar problemas.", "Selecionar operações.", "Conferir resultados."]
      )
    ]
  },

  // ---------------------------------------------------
  // SEMANA 12 — RAZÕES E PORCENTAGEM
  // ---------------------------------------------------

  12: {
    title: "Razões, proporções e porcentagem",
    goal: "Aplicar relações proporcionais e porcentagens em cálculos e situações técnicas.",

    days: [
      lesson(
        "Razões",
        "Razão é a comparação entre duas grandezas por meio de uma divisão. Em aplicações técnicas, pode representar relações entre medidas e quantidades.",
        ["10/5 = 2", "A proporção entre 2 m e 50 cm pode ser comparada após converter as unidades."],
        ["Interpretar razões.", "Simplificar comparações.", "Observar unidades."]
      ),
      lesson(
        "Proporções",
        "Proporção é uma igualdade entre duas razões. A propriedade fundamental permite encontrar valores desconhecidos por multiplicação cruzada.",
        ["2/4 = 3/6", "Se a/b = c/d, então a × d = b × c."],
        ["Identificar proporções.", "Aplicar a propriedade fundamental.", "Resolver incógnitas."]
      ),
      lesson(
        "Regra de três simples",
        "A regra de três simples permite calcular um valor desconhecido quando duas grandezas apresentam relação proporcional direta ou inversa.",
        ["3 peças custam R$ 30; 6 peças custam R$ 60, mantendo o preço unitário."],
        ["Identificar grandezas.", "Diferenciar relações diretas e inversas.", "Montar cálculos."]
      ),
      lesson(
        "Porcentagem",
        "Porcentagem representa uma quantidade em relação a cem. É utilizada em variações, descontos, rendimentos e análises de resultados.",
        ["15% = 0,15", "20% de 250 = 50"],
        ["Converter porcentagens.", "Calcular valores percentuais.", "Interpretar resultados."]
      ),
      lesson(
        "Aumentos e descontos",
        "Aumentos e descontos percentuais modificam um valor inicial. É importante identificar a base sobre a qual a porcentagem está sendo calculada.",
        ["R$ 200 com desconto de 10% resulta em R$ 180.", "R$ 100 com aumento de 15% resulta em R$ 115."],
        ["Calcular descontos.", "Calcular aumentos.", "Identificar o valor inicial."]
      ),
      lesson(
        "Aplicações técnicas de proporções",
        "Proporções podem ser utilizadas em escalas, receitas técnicas, dimensionamento e comparação de medidas. A conversão de unidades deve ser considerada antes dos cálculos.",
        ["Escala 1:100: 1 cm no desenho representa 100 cm na realidade."],
        ["Aplicar proporções.", "Interpretar escalas.", "Resolver problemas contextualizados."]
      )
    ]
  },

  // ---------------------------------------------------
  // SEMANA 13 — EQUAÇÕES
  // ---------------------------------------------------

  13: {
    title: "Equações básicas e revisão de matemática",
    goal: "Resolver equações simples e utilizar álgebra para representar problemas.",

    days: [
      lesson(
        "Equações e incógnitas",
        "Equações são igualdades matemáticas que possuem valores desconhecidos. A incógnita representa o valor que queremos descobrir.",
        ["x + 5 = 12", "2y = 20"],
        ["Identificar incógnitas.", "Reconhecer igualdades.", "Compreender soluções."]
      ),
      lesson(
        "Equações de primeiro grau",
        "Uma equação de primeiro grau pode ser resolvida isolando a incógnita por meio de operações equivalentes nos dois lados.",
        ["2x + 4 = 10 → x = 3"],
        ["Isolar incógnitas.", "Manter a igualdade.", "Verificar soluções."]
      ),
      lesson(
        "Equações com parênteses",
        "A propriedade distributiva permite eliminar parênteses e simplificar equações antes de isolar a incógnita.",
        ["3(x + 2) = 15 → x = 3"],
        ["Aplicar distributiva.", "Agrupar termos.", "Resolver equações."]
      ),
      lesson(
        "Equações com frações",
        "Equações podem apresentar termos fracionários. Multiplicar os dois lados pelo mínimo múltiplo comum dos denominadores pode eliminar as frações.",
        ["x/2 + 3 = 7 → x = 8"],
        ["Identificar denominadores.", "Eliminar frações.", "Resolver a equação."]
      ),
      lesson(
        "Modelagem de problemas",
        "Problemas técnicos podem ser representados por equações. É necessário identificar as informações disponíveis, definir uma variável e escrever a relação matemática.",
        ["O custo de x peças a R$ 8 cada é C = 8x."],
        ["Definir variáveis.", "Montar equações.", "Interpretar soluções."]
      ),
      lesson(
        "Revisão e aplicações",
        "Revisão integrada de operações, frações, sinais, proporções e equações, com foco em cálculos utilizados na engenharia.",
        ["Resolver 3x - 5 = 16.", "Calcular 15% de 80."],
        ["Integrar conteúdos.", "Resolver problemas.", "Verificar cálculos."]
      )
    ]
  },

  // ---------------------------------------------------
  // SEMANA 14 — POTÊNCIAS E RAÍZES
  // ---------------------------------------------------

  14: {
    title: "Potências, raízes e notação científica",
    goal: "Utilizar potenciação, radiciação e notação científica em cálculos matemáticos e técnicos.",

    days: [
      lesson(
        "Potenciação",
        "Potenciação representa a multiplicação repetida de um mesmo fator. É muito utilizada em cálculos de áreas, volumes e escalas.",
        ["2⁴ = 16", "10³ = 1.000"],
        ["Reconhecer base e expoente.", "Calcular potências.", "Interpretar expoentes."]
      ),
      lesson(
        "Propriedades das potências",
        "As propriedades das potências permitem simplificar expressões com bases iguais, produtos, divisões e expoentes.",
        ["2³ × 2² = 2⁵", "5⁴ ÷ 5² = 5²"],
        ["Somar expoentes em produtos de mesma base.", "Subtrair expoentes em divisões.", "Aplicar propriedades."]
      ),
      lesson(
        "Expoentes negativos e fracionários",
        "Expoentes negativos representam inversos de potências positivas. Expoentes fracionários podem representar raízes.",
        ["2⁻² = 1/4", "9^(1/2) = 3"],
        ["Interpretar expoentes negativos.", "Relacionar expoentes e raízes.", "Simplificar expressões."]
      ),
      lesson(
        "Radiciação",
        "A raiz é a operação inversa da potenciação. Ela permite encontrar um número que, elevado a determinado expoente, produz o radicando.",
        ["√64 = 8", "∛125 = 5"],
        ["Identificar índice e radicando.", "Calcular raízes.", "Verificar resultados."]
      ),
      lesson(
        "Operações com radicais",
        "Radicais podem ser simplificados e operados quando possuem características compatíveis. A simplificação procura retirar fatores que formam potências perfeitas.",
        ["√12 = 2√3", "2√5 + 3√5 = 5√5"],
        ["Simplificar radicais.", "Identificar radicais semelhantes.", "Realizar operações."]
      ),
      lesson(
        "Notação científica aplicada",
        "A notação científica facilita a representação de medidas muito grandes ou pequenas, comuns em ciência e engenharia.",
        ["3.000.000 = 3 × 10⁶", "0,000002 = 2 × 10⁻⁶"],
        ["Converter números.", "Operar potências de dez.", "Interpretar ordens de grandeza."]
      )
    ]
  },

  // ---------------------------------------------------
  // SEMANA 15 — UNIDADES
  // ---------------------------------------------------

  15: {
    title: "Unidades de medida e conversões",
    goal: "Compreender unidades, escalas e conversões fundamentais para medições técnicas.",

    days: [
      lesson(
        "Sistema Internacional de Unidades",
        "O Sistema Internacional padroniza as unidades utilizadas em medições científicas e técnicas. Ele permite que resultados sejam comparados de maneira consistente.",
        ["Metro (m), quilograma (kg), segundo (s), ampere (A)."],
        ["Conhecer o SI.", "Identificar unidades fundamentais.", "Utilizar padrões."]
      ),
      lesson(
        "Conversão de comprimento",
        "Comprimentos podem ser expressos em quilômetros, metros, centímetros e milímetros. Converter significa representar a mesma medida em outra unidade.",
        ["1 m = 100 cm", "1 cm = 10 mm", "2,5 m = 250 cm"],
        ["Converter comprimentos.", "Identificar escalas.", "Evitar misturar unidades."]
      ),
      lesson(
        "Conversão de massa e volume",
        "Massa e volume são grandezas diferentes. A massa mede a quantidade de matéria, enquanto o volume representa o espaço ocupado.",
        ["1 kg = 1.000 g", "1 L = 1.000 mL", "1 m³ = 1.000 L"],
        ["Diferenciar massa e volume.", "Converter unidades.", "Interpretar medidas."]
      ),
      lesson(
        "Tempo e velocidade",
        "Tempo e velocidade são grandezas utilizadas para descrever movimentos. A conversão de unidades é importante ao comparar dados apresentados em sistemas diferentes.",
        ["1 hora = 3.600 segundos", "36 km/h = 10 m/s"],
        ["Converter tempo.", "Converter velocidade.", "Reconhecer unidades compostas."]
      ),
      lesson(
        "Área e volume",
        "Área representa uma superfície e é expressa em unidades quadradas. Volume representa o espaço ocupado e utiliza unidades cúbicas.",
        ["Área de quadrado: A = lado².", "Volume de cubo: V = lado³.", "1 m² = 10.000 cm²."],
        ["Calcular áreas.", "Calcular volumes.", "Converter unidades quadradas e cúbicas."]
      ),
      lesson(
        "Medições e precisão",
        "Toda medição possui uma unidade e uma precisão limitada pelo instrumento e pelo método utilizado. Registrar corretamente uma medida é essencial para evitar interpretações incorretas.",
        ["Uma régua graduada em milímetros possui divisões de 1 mm."],
        ["Registrar medidas.", "Observar resolução dos instrumentos.", "Diferenciar precisão e exatidão."]
      )
    ]
  },

  // ---------------------------------------------------
  // SEMANA 16 — ÁLGEBRA
  // ---------------------------------------------------

  16: {
    title: "Álgebra e expressões matemáticas",
    goal: "Desenvolver a capacidade de representar relações técnicas utilizando variáveis e expressões algébricas.",

    days: [
      lesson(
        "Variáveis e constantes",
        "Variáveis representam valores que podem mudar. Constantes representam valores fixos em determinada expressão ou modelo.",
        ["A = πr²: r é variável e π é constante.", "C = 5x + 10."],
        ["Identificar variáveis.", "Identificar constantes.", "Interpretar fórmulas."]
      ),
      lesson(
        "Termos algébricos",
        "Expressões algébricas são formadas por termos, coeficientes e variáveis. Compreender esses elementos permite simplificar cálculos.",
        ["5x + 3x = 8x", "4a² + 2a² = 6a²"],
        ["Reconhecer coeficientes.", "Identificar termos semelhantes.", "Simplificar expressões."]
      ),
      lesson(
        "Propriedade distributiva",
        "A propriedade distributiva permite multiplicar um fator por cada termo de uma soma ou subtração.",
        ["3(x + 4) = 3x + 12", "2(a - 5) = 2a - 10"],
        ["Aplicar a distributiva.", "Eliminar parênteses.", "Simplificar expressões."]
      ),
      lesson(
        "Produtos notáveis e fatoração",
        "Produtos notáveis são padrões de multiplicação algébrica. A fatoração realiza o processo inverso, transformando uma soma em produto.",
        ["(x + 2)² = x² + 4x + 4", "x² - 4 = (x - 2)(x + 2)"],
        ["Reconhecer padrões.", "Expandir produtos.", "Fatorar expressões."]
      ),
      lesson(
        "Manipulação de fórmulas",
        "Fórmulas técnicas podem ser reorganizadas para isolar uma variável. Essa habilidade permite encontrar diferentes grandezas a partir das mesmas relações.",
        ["v = d/t → d = v × t", "F = m × a → m = F/a"],
        ["Isolar variáveis.", "Reorganizar equações.", "Preservar equivalência."]
      ),
      lesson(
        "Aplicações algébricas na engenharia",
        "A álgebra é utilizada para representar relações entre dimensões, custos, velocidades e outras grandezas. Esta aula reúne expressões e fórmulas em problemas contextualizados.",
        ["Custo total: C = preço × quantidade.", "Área retangular: A = comprimento × largura."],
        ["Construir modelos algébricos.", "Manipular fórmulas.", "Interpretar resultados."]
      )
    ]
  },

  // ---------------------------------------------------
  // SEMANA 17 — GEOMETRIA
  // ---------------------------------------------------

  17: {
    title: "Geometria básica e revisão",
    goal: "Compreender figuras, ângulos, perímetros, áreas e relações geométricas fundamentais.",

    days: [
      lesson(
        "Pontos, retas e planos",
        "A geometria utiliza conceitos fundamentais como ponto, reta e plano. Eles ajudam a descrever posições, alinhamentos e superfícies.",
        ["Uma reta é representada por uma linha que se estende indefinidamente nos dois sentidos."],
        ["Reconhecer elementos geométricos.", "Compreender alinhamentos.", "Interpretar representações."]
      ),
      lesson(
        "Ângulos",
        "Ângulo é a abertura formada por duas semirretas que partem de um mesmo ponto. Sua medida geralmente é expressa em graus.",
        ["Agudo: menor que 90°.", "Reto: 90°.", "Obtuso: entre 90° e 180°."],
        ["Classificar ângulos.", "Medir ângulos.", "Reconhecer relações geométricas."]
      ),
      lesson(
        "Triângulos e quadriláteros",
        "Triângulos possuem três lados e quadriláteros possuem quatro. Essas figuras são fundamentais no estudo de estruturas e superfícies.",
        ["A soma dos ângulos internos de um triângulo é 180°.", "Um quadrado possui quatro lados iguais e quatro ângulos retos."],
        ["Reconhecer polígonos.", "Classificar figuras.", "Identificar propriedades."]
      ),
      lesson(
        "Perímetro",
        "Perímetro é a medida do contorno de uma figura. Para calculá-lo, somamos os comprimentos de seus lados.",
        ["Quadrado de lado 5 cm: P = 20 cm.", "Retângulo de lados 4 cm e 7 cm: P = 22 cm."],
        ["Calcular perímetros.", "Interpretar medidas lineares.", "Aplicar em problemas."]
      ),
      lesson(
        "Áreas e teorema de Pitágoras",
        "Área mede a superfície de uma figura. Em triângulos retângulos, o teorema de Pitágoras relaciona os comprimentos dos catetos e da hipotenusa.",
        ["Área do retângulo: A = base × altura.", "a² + b² = c²."],
        ["Calcular áreas.", "Aplicar Pitágoras.", "Identificar unidades quadradas."]
      ),
      lesson(
        "Geometria aplicada e revisão",
        "A geometria é importante no desenho técnico, na construção de peças e na análise de estruturas. Esta aula integra ângulos, medidas, perímetros e áreas.",
        ["Calcular a área de uma chapa retangular.", "Determinar a diagonal de um retângulo utilizando Pitágoras."],
        ["Resolver problemas geométricos.", "Interpretar dimensões.", "Preparar aplicações técnicas."]
      )
    ]
  },

  // ---------------------------------------------------
  // SEMANA 18 — LÓGICA DE PROGRAMAÇÃO
  // ---------------------------------------------------

  18: {
    title: "Introdução à lógica de programação",
    goal: "Compreender algoritmos, instruções, decisões e raciocínio lógico aplicado à programação.",

    days: [
      lesson(
        "O que é programação?",
        "Programar significa escrever instruções que um computador pode executar. Essas instruções precisam ser organizadas de maneira clara e lógica.",
        ["Uma sequência de comandos pode calcular a soma de dois números."],
        ["Compreender programação.", "Reconhecer instruções.", "Entender a função de um programa."]
      ),
      lesson(
        "Algoritmos",
        "Um algoritmo é uma sequência finita e organizada de passos para resolver um problema ou executar uma tarefa.",
        ["Algoritmo para somar: receber A, receber B, calcular A + B e mostrar o resultado."],
        ["Definir algoritmos.", "Organizar etapas.", "Identificar entradas e saídas."]
      ),
      lesson(
        "Sequência de instruções",
        "Em muitos programas, a ordem das instruções altera o resultado. A execução sequencial segue os comandos na ordem em que foram organizados.",
        ["Receber número → multiplicar por 2 → mostrar resultado."],
        ["Compreender sequência.", "Organizar instruções.", "Identificar dependências."]
      ),
      lesson(
        "Entrada, processamento e saída",
        "Um programa pode receber dados, processá-los e apresentar resultados. Esse modelo ajuda a organizar a solução de problemas.",
        ["Entrada: 5 e 3.", "Processamento: 5 + 3.", "Saída: 8."],
        ["Identificar entradas.", "Identificar processamento.", "Identificar saídas."]
      ),
      lesson(
        "Decisões e condições",
        "Estruturas condicionais permitem que um programa escolha caminhos diferentes dependendo de uma condição.",
        ["Se a temperatura for maior que 30, mostrar 'Quente'; caso contrário, mostrar 'Normal'."],
        ["Compreender condições.", "Interpretar verdadeiro e falso.", "Identificar caminhos alternativos."]
      ),
      lesson(
        "Raciocínio lógico aplicado",
        "A lógica de programação exige dividir problemas em etapas menores, analisar condições e verificar se a solução produz o resultado esperado.",
        ["Verificar se um número é par utilizando o resto da divisão por 2."],
        ["Decompor problemas.", "Testar soluções.", "Desenvolver raciocínio lógico."]
      )
    ]
  },

  // ---------------------------------------------------
  // SEMANA 19 — ALGORITMOS E FLUXOGRAMAS
  // ---------------------------------------------------

  19: {
    title: "Algoritmos e fluxogramas",
    goal: "Representar soluções por meio de algoritmos estruturados e fluxogramas.",

    days: [
      lesson(
        "Representação de algoritmos",
        "Algoritmos podem ser escritos em linguagem natural ou em pseudocódigo. O importante é descrever os passos de maneira clara e organizada.",
        ["Início; receber número; calcular dobro; mostrar resultado; fim."],
        ["Escrever algoritmos.", "Organizar etapas.", "Utilizar instruções claras."]
      ),
      lesson(
        "Pseudocódigo",
        "Pseudocódigo é uma forma estruturada de representar algoritmos sem depender da sintaxe de uma linguagem de programação específica.",
        ["INÍCIO", "LEIA numero", "resultado ← numero * 2", "ESCREVA resultado", "FIM"],
        ["Compreender pseudocódigo.", "Identificar comandos.", "Representar soluções."]
      ),
      lesson(
        "Símbolos de fluxogramas",
        "Fluxogramas representam visualmente os passos de um algoritmo. Símbolos diferentes indicam início, fim, processamento, entrada e saída de dados e decisões.",
        ["Oval: início ou fim.", "Retângulo: processamento.", "Losango: decisão.", "Paralelogramo: entrada ou saída."],
        ["Reconhecer símbolos.", "Interpretar diagramas.", "Relacionar símbolos e operações."]
      ),
      lesson(
        "Construção de fluxogramas",
        "Um fluxograma organiza visualmente o caminho percorrido por um algoritmo. Setas indicam a direção da execução e conectam os blocos.",
        ["Início → receber número → multiplicar por 2 → mostrar resultado → fim."],
        ["Organizar blocos.", "Utilizar setas.", "Representar processos."]
      ),
      lesson(
        "Decisões em fluxogramas",
        "Decisões são representadas por losangos. Cada resultado possível de uma condição pode levar a um caminho diferente.",
        ["Número é maior que zero?", "Sim: mostrar positivo.", "Não: verificar se é zero ou negativo."],
        ["Representar condições.", "Criar ramificações.", "Interpretar caminhos."]
      ),
      lesson(
        "Projeto prático de algoritmo",
        "Nesta aula, os conhecimentos da semana são reunidos em um algoritmo e seu fluxograma correspondente. A solução deve possuir começo, etapas organizadas e resultado definido.",
        ["Criar um algoritmo que receba duas notas, calcule a média e informe se o resultado atingiu a aprovação."],
        ["Construir algoritmos completos.", "Desenhar fluxogramas.", "Testar a lógica da solução."]
      )
    ]
  },


  // SEMANA 20 — VARIÁVEIS
  20: {
    title: "Variáveis e tipos de dados",
    goal: "Compreender armazenamento de informações, variáveis e tipos de dados na programação.",
    days: [
      lesson("O que são variáveis", "Variáveis são espaços identificados por nomes que permitem armazenar valores utilizados durante a execução de um programa.", ["idade = 15", "temperatura = 25.5"], ["Compreender variáveis.", "Reconhecer identificadores.", "Armazenar valores."]),
      lesson("Números inteiros e reais", "Tipos numéricos representam quantidades. Inteiros não possuem parte decimal, enquanto números reais permitem valores fracionários.", ["10 é inteiro.", "10.5 é decimal."], ["Diferenciar inteiros e reais.", "Reconhecer valores.", "Escolher tipos adequados."]),
      lesson("Textos e caracteres", "Dados textuais representam palavras, frases e caracteres. A forma de armazenamento depende da linguagem de programação.", ['nome = "Caio"', 'letra = "A"'], ["Reconhecer strings.", "Compreender caracteres.", "Manipular textos."]),
      lesson("Valores booleanos", "Dados booleanos representam dois estados lógicos: verdadeiro e falso. São utilizados principalmente em condições e decisões.", ["ativo = verdadeiro", "aprovado = falso"], ["Compreender booleanos.", "Identificar estados lógicos.", "Utilizar em decisões."]),
      lesson("Nomes e organização de variáveis", "Nomes claros facilitam a leitura e manutenção dos programas. Cada linguagem possui regras próprias para identificadores.", ["velocidadeMedia", "quantidadePecas"], ["Escolher nomes claros.", "Evitar identificadores inválidos.", "Organizar dados."]),
      lesson("Prática com variáveis", "Criação de pequenos algoritmos que armazenam dados, realizam cálculos e apresentam resultados.", ["Receber duas medidas e armazenar a soma."], ["Declarar variáveis.", "Escolher tipos.", "Testar resultados."])
    ]
  },

  // SEMANA 21 — OPERADORES
  21: {
    title: "Operadores matemáticos e lógicos",
    goal: "Utilizar operadores aritméticos, relacionais e lógicos em algoritmos.",
    days: [
      lesson("Operadores aritméticos", "Operadores aritméticos realizam operações matemáticas com valores e variáveis.", ["+, -, *, /"], ["Somar.", "Subtrair.", "Multiplicar e dividir."]),
      lesson("Divisão inteira e resto", "Algumas linguagens diferenciam divisão comum e divisão inteira. O operador de resto retorna o que sobra de uma divisão.", ["10 % 3 = 1"], ["Compreender módulo.", "Identificar resto.", "Aplicar em problemas."]),
      lesson("Operadores relacionais", "Operadores relacionais comparam valores e produzem resultados booleanos.", ["5 > 3 é verdadeiro.", "2 == 4 é falso."], ["Comparar valores.", "Interpretar resultados.", "Reconhecer igualdade e diferença."]),
      lesson("Operadores lógicos", "Operadores lógicos combinam condições. Os mais comuns são AND, OR e NOT.", ["true AND false = false.", "true OR false = true."], ["Compreender AND.", "Compreender OR.", "Compreender NOT."]),
      lesson("Precedência de operadores", "Expressões com diferentes operadores seguem regras de precedência. Parênteses podem tornar a intenção mais clara.", ["2 + 3 * 4 = 14.", "(2 + 3) * 4 = 20."], ["Respeitar precedência.", "Utilizar parênteses.", "Interpretar expressões."]),
      lesson("Aplicações práticas", "Combinação de operadores em cálculos e verificações lógicas.", ["Verificar se uma temperatura está entre dois limites."], ["Combinar operadores.", "Criar expressões.", "Testar resultados."])
    ]
  },

  // SEMANA 22 — CONDIÇÕES
  22: {
    title: "Condições — if e else",
    goal: "Construir algoritmos que tomam decisões a partir de condições.",
    days: [
      lesson("Introdução às condições", "Uma condição permite verificar se uma expressão é verdadeira ou falsa e escolher o caminho de execução.", ["Se temperatura > 30, indicar calor."], ["Compreender condições.", "Reconhecer verdadeiro e falso.", "Identificar decisões."]),
      lesson("Estrutura if", "A estrutura if executa um bloco de instruções quando determinada condição é verdadeira.", ["if idade >= 18: mostrar mensagem."], ["Compreender if.", "Escrever condições.", "Organizar blocos."]),
      lesson("Estrutura else", "O else define um caminho alternativo quando a condição do if não é satisfeita.", ["Se nota >= 6, aprovado; senão, recuperação."], ["Compreender else.", "Criar alternativas.", "Analisar resultados."]),
      lesson("Condições encadeadas", "Estruturas else if ou elif permitem testar várias condições em sequência.", ["Classificar uma nota em faixas."], ["Criar múltiplos caminhos.", "Ordenar condições.", "Evitar sobreposições."]),
      lesson("Condições combinadas", "Operadores lógicos permitem combinar diferentes condições em uma mesma decisão.", ["Se temperatura > 20 E umidade > 60."], ["Combinar condições.", "Utilizar AND e OR.", "Interpretar expressões."]),
      lesson("Projeto de decisões", "Construção de um pequeno algoritmo que utiliza condições para classificar dados e apresentar respostas.", ["Classificar um número como positivo, negativo ou zero."], ["Construir decisões.", "Testar caminhos.", "Verificar resultados."])
    ]
  },

  // SEMANA 23 — REPETIÇÕES
  23: {
    title: "Estruturas de repetição — loops",
    goal: "Compreender repetições e utilizar laços para automatizar tarefas.",
    days: [
      lesson("O que são loops", "Loops permitem repetir instruções sem escrever o mesmo comando várias vezes.", ["Repetir uma mensagem cinco vezes."], ["Compreender repetição.", "Identificar tarefas repetitivas.", "Reduzir código duplicado."]),
      lesson("Loop for", "O for é utilizado para percorrer sequências ou repetir instruções por uma quantidade definida de vezes.", ["for i de 1 até 5."], ["Compreender for.", "Controlar repetições.", "Utilizar contadores."]),
      lesson("Loop while", "O while repete instruções enquanto uma condição permanecer verdadeira.", ["Enquanto senha estiver incorreta, solicitar novamente."], ["Compreender while.", "Controlar condições.", "Evitar repetição infinita."]),
      lesson("Contadores e acumuladores", "Contadores registram quantas vezes algo acontece. Acumuladores guardam resultados progressivos, como somas.", ["Somar números de 1 até 5."], ["Utilizar contadores.", "Utilizar acumuladores.", "Atualizar variáveis."]),
      lesson("Interrupção e controle de loops", "Comandos de controle podem interromper ou pular etapas de uma repetição, conforme as regras da linguagem.", ["break e continue em linguagens que os oferecem."], ["Controlar execução.", "Identificar condições de parada.", "Evitar loops desnecessários."]),
      lesson("Prática com repetições", "Criação de algoritmos que repetem cálculos, percorrem valores e apresentam resultados acumulados.", ["Calcular a tabuada de um número."], ["Criar loops.", "Testar limites.", "Verificar resultados."])
    ]
  },

  // SEMANA 24 — FUNÇÕES
  24: {
    title: "Funções e organização do código",
    goal: "Compreender funções, parâmetros, retornos e organização de programas.",
    days: [
      lesson("Introdução às funções", "Funções agrupam instruções que realizam uma tarefa específica. Elas ajudam a reutilizar código e organizar programas.", ["Uma função pode calcular a área de um retângulo."], ["Compreender funções.", "Identificar responsabilidades.", "Reutilizar código."]),
      lesson("Parâmetros e argumentos", "Parâmetros são informações recebidas por uma função. Argumentos são os valores fornecidos quando ela é chamada.", ["somar(3, 5)."], ["Identificar parâmetros.", "Passar argumentos.", "Compreender entradas."]),
      lesson("Retorno de funções", "Uma função pode devolver um resultado utilizando um comando de retorno.", ["Uma função de soma retorna a + b."], ["Compreender return.", "Diferenciar retorno e exibição.", "Utilizar resultados."]),
      lesson("Variáveis locais e escopo", "O escopo define onde uma variável pode ser acessada. Variáveis locais geralmente existem dentro da função em que foram declaradas.", ["Uma variável criada dentro de uma função pode não estar disponível fora dela."], ["Compreender escopo.", "Identificar variáveis locais.", "Evitar conflitos."]),
      lesson("Divisão de problemas em funções", "Problemas grandes podem ser divididos em funções menores, cada uma responsável por uma etapa.", ["Separar leitura, cálculo e apresentação."], ["Decompor problemas.", "Organizar responsabilidades.", "Melhorar legibilidade."]),
      lesson("Prática com funções", "Criação de funções para realizar operações matemáticas e reutilizar cálculos.", ["Função para converter metros em centímetros."], ["Definir funções.", "Utilizar parâmetros.", "Retornar resultados."])
    ]
  },

  // SEMANA 25 — EXERCÍCIOS
  25: {
    title: "Exercícios práticos de programação",
    goal: "Integrar variáveis, operadores, condições, repetições e funções em pequenos programas.",
    days: [
      lesson("Programa de operações", "Construção de uma calculadora simples que recebe valores e realiza operações aritméticas.", ["Somar, subtrair, multiplicar e dividir."], ["Receber entradas.", "Realizar cálculos.", "Apresentar resultados."]),
      lesson("Classificação de valores", "Criação de um programa que utiliza condições para classificar números e resultados.", ["Identificar se um número é par ou ímpar."], ["Utilizar operadores.", "Criar condições.", "Testar possibilidades."]),
      lesson("Tabuada automática", "Uso de repetição para gerar a tabuada de um número escolhido.", ["Multiplicar um número pelos valores de 1 a 10."], ["Utilizar loops.", "Controlar contadores.", "Formatar resultados."]),
      lesson("Média de notas", "Construção de um programa que recebe notas, calcula a média e classifica o resultado.", ["Média = soma das notas / quantidade."], ["Acumular valores.", "Calcular médias.", "Aplicar condições."]),
      lesson("Organização em funções", "Refatoração de programas anteriores utilizando funções para separar as responsabilidades.", ["Funções para calcular média e verificar aprovação."], ["Criar funções.", "Reutilizar código.", "Organizar programas."]),
      lesson("Mini projeto de programação", "Desenvolvimento de um programa pequeno que integre os principais conceitos estudados.", ["Sistema simples de cadastro e cálculo."], ["Planejar solução.", "Implementar lógica.", "Testar funcionamento."])
    ]
  },

  // SEMANA 26 — FÍSICA
  26: {
    title: "Introdução à Física e ao Sistema Internacional",
    goal: "Compreender o papel da Física na engenharia e utilizar unidades do Sistema Internacional.",
    days: [
      lesson("O que é Física?", "A Física estuda fenômenos naturais, matéria, energia, movimento e interações. Na engenharia, ajuda a compreender e projetar sistemas.", ["Movimento de máquinas e transferência de energia."], ["Compreender a Física.", "Relacionar ciência e engenharia.", "Identificar fenômenos."]),
      lesson("Grandezas físicas", "Grandezas físicas são propriedades que podem ser medidas e expressas por valores e unidades.", ["Massa, tempo, comprimento e temperatura."], ["Identificar grandezas.", "Registrar medidas.", "Diferenciar unidade e valor."]),
      lesson("Unidades fundamentais do SI", "O Sistema Internacional define unidades fundamentais utilizadas para expressar grandezas físicas.", ["Metro, quilograma, segundo, ampere e kelvin."], ["Conhecer unidades.", "Reconhecer símbolos.", "Utilizar padrões."]),
      lesson("Unidades derivadas", "Unidades derivadas são construídas a partir das unidades fundamentais.", ["Velocidade: m/s.", "Força: N = kg·m/s²."], ["Reconhecer unidades derivadas.", "Relacionar grandezas.", "Interpretar dimensões."]),
      lesson("Conversões de unidades", "A conversão permite expressar a mesma grandeza em unidades diferentes sem alterar seu valor físico.", ["1 km = 1.000 m.", "1 h = 3.600 s."], ["Converter medidas.", "Utilizar fatores.", "Manter coerência."]),
      lesson("Aplicações do SI", "Aplicação das unidades em medições e problemas técnicos.", ["Expressar comprimento em metros e massa em quilogramas."], ["Escolher unidades.", "Registrar resultados.", "Evitar incompatibilidades."])
    ]
  },

  // SEMANA 27 — CINEMÁTICA
  27: {
    title: "Distância, tempo e velocidade",
    goal: "Compreender movimento, distância percorrida, tempo e velocidade média.",
    days: [
      lesson("Referencial e movimento", "O movimento depende do referencial escolhido. Um objeto pode estar em repouso em relação a um observador e em movimento em relação a outro.", ["Uma pessoa sentada em um ônibus está em repouso em relação ao ônibus."], ["Compreender referencial.", "Diferenciar repouso e movimento.", "Analisar situações."]),
      lesson("Distância percorrida e deslocamento", "Distância percorrida representa o comprimento do caminho. Deslocamento representa a diferença entre posição final e inicial.", ["Caminhar 10 m para frente e 10 m para trás: distância 20 m e deslocamento zero."], ["Diferenciar distância e deslocamento.", "Interpretar trajetórias.", "Calcular variações de posição."]),
      lesson("Tempo e intervalo de tempo", "O intervalo de tempo corresponde à diferença entre o instante final e o instante inicial.", ["Δt = tf - ti."], ["Identificar instantes.", "Calcular intervalos.", "Converter unidades."]),
      lesson("Velocidade média", "Velocidade média relaciona deslocamento e intervalo de tempo. A velocidade escalar média relaciona distância total e tempo total.", ["v média = Δs/Δt."], ["Diferenciar velocidades médias.", "Calcular resultados.", "Interpretar sinais."]),
      lesson("Conversão de velocidade", "Velocidades podem ser expressas em metros por segundo ou quilômetros por hora.", ["36 km/h = 10 m/s.", "1 m/s = 3,6 km/h."], ["Converter unidades.", "Comparar velocidades.", "Evitar erros."]),
      lesson("Problemas de velocidade", "Aplicação dos conceitos de distância, deslocamento, tempo e velocidade em situações cotidianas e técnicas.", ["Calcular o tempo de percurso a partir da distância e velocidade."], ["Organizar dados.", "Escolher fórmulas.", "Conferir unidades."])
    ]
  },

  // SEMANA 28 — ACELERAÇÃO
  28: {
    title: "Aceleração e movimento",
    goal: "Compreender aceleração, variação da velocidade e introdução ao movimento uniformemente variado.",
    days: [
      lesson("O que é aceleração?", "A aceleração mede a variação da velocidade em determinado intervalo de tempo.", ["a = Δv/Δt."], ["Definir aceleração.", "Identificar variações.", "Utilizar unidades."]),
      lesson("Aceleração positiva e negativa", "O sinal da aceleração depende da orientação escolhida para a trajetória. Não significa necessariamente acelerar ou frear.", ["Aceleração negativa pode aumentar o módulo da velocidade em movimento retrógrado."], ["Interpretar sinais.", "Considerar o referencial.", "Diferenciar aceleração e rapidez."]),
      lesson("Movimento acelerado e retardado", "O módulo da velocidade aumenta quando velocidade e aceleração possuem o mesmo sentido e diminui quando possuem sentidos opostos.", ["v e a com mesmo sinal: módulo da velocidade aumenta."], ["Comparar sinais.", "Analisar módulo da velocidade.", "Interpretar movimentos."]),
      lesson("Introdução ao MUV", "No movimento uniformemente variado, a aceleração permanece constante e a velocidade varia uniformemente.", ["v = v₀ + at."], ["Reconhecer MUV.", "Aplicar equação da velocidade.", "Identificar aceleração constante."]),
      lesson("Equações do movimento", "As equações do MUV permitem calcular velocidade e posição em função do tempo.", ["s = s₀ + v₀t + at²/2."], ["Identificar variáveis.", "Aplicar equações.", "Resolver problemas."]),
      lesson("Problemas de aceleração", "Resolução de situações envolvendo variação de velocidade, aceleração e tempo.", ["Calcular aceleração de um veículo que muda sua velocidade."], ["Interpretar dados.", "Aplicar fórmulas.", "Verificar resultados."])
    ]
  },

  // SEMANA 29 — GRÁFICOS
  29: {
    title: "Gráficos de movimento e exercícios",
    goal: "Interpretar gráficos de posição, velocidade e aceleração em situações de movimento.",
    days: [
      lesson("Gráfico posição × tempo", "O gráfico posição pelo tempo mostra como a posição de um corpo varia durante o movimento.", ["Uma reta inclinada representa velocidade constante."], ["Interpretar eixos.", "Identificar posição.", "Analisar inclinação."]),
      lesson("Gráfico velocidade × tempo", "O gráfico velocidade pelo tempo permite analisar a variação da velocidade e calcular deslocamento pela área algébrica.", ["Área sob v × t representa deslocamento."], ["Interpretar velocidade.", "Calcular áreas.", "Analisar sinais."]),
      lesson("Gráfico aceleração × tempo", "O gráfico aceleração pelo tempo mostra como a aceleração varia. Sua área algébrica representa a variação da velocidade.", ["Área sob a × t representa Δv."], ["Interpretar aceleração.", "Calcular variação de velocidade.", "Relacionar gráficos."]),
      lesson("Comparação de MU e MUV", "Os gráficos ajudam a distinguir movimentos com velocidade constante daqueles com aceleração constante.", ["No MU, v × t é horizontal.", "No MUV, v × t é uma reta inclinada."], ["Comparar movimentos.", "Reconhecer padrões.", "Interpretar equações."]),
      lesson("Interpretação de gráficos reais", "Análise de gráficos de deslocamento e velocidade em situações de transporte e máquinas.", ["Identificar intervalos de repouso e movimento."], ["Ler gráficos.", "Reconhecer mudanças.", "Interpretar unidades."]),
      lesson("Exercícios integrados", "Resolução de exercícios que combinam equações e gráficos de movimento.", ["Construir um gráfico a partir de uma tabela de posições."], ["Integrar conteúdos.", "Resolver problemas.", "Conferir respostas."])
    ]
  },


  30: {
    title: "Forças e leis de Newton",
    goal: "Compreender força e aplicar as três leis de Newton.",
    days: [
      lesson("O conceito de força", "Força é uma interação capaz de alterar o movimento de um corpo ou provocar deformações. É uma grandeza vetorial, com intensidade, direção e sentido.", ["Empurrar um carrinho.", "Puxar uma caixa."], ["Força é vetorial.", "Sua unidade é o newton (N).", "Pode alterar o movimento."]),
      lesson("Primeira lei de Newton", "A lei da inércia afirma que um corpo mantém seu estado de repouso ou movimento retilíneo uniforme quando a força resultante sobre ele é nula.", ["Passageiro em um veículo durante uma freada."], ["Inércia é resistência à mudança de movimento.", "Força resultante nula não significa ausência de forças.", "O estado de movimento permanece."]),
      lesson("Segunda lei de Newton", "A força resultante sobre um corpo é igual ao produto de sua massa pela aceleração. Para uma mesma força, corpos de maior massa apresentam menor aceleração.", ["F = m · a.", "Um carrinho acelerando."], ["A força resultante produz aceleração.", "A massa é medida em kg.", "A aceleração é medida em m/s²."]),
      lesson("Terceira lei de Newton", "A terceira lei afirma que toda ação possui uma reação de mesma intensidade e direção, mas de sentido oposto. Essas forças atuam em corpos diferentes.", ["Pessoa caminhando.", "Foguete em movimento."], ["Ação e reação têm mesma intensidade.", "Possuem sentidos opostos.", "Atuam em corpos diferentes."]),
      lesson("Força resultante e diagramas", "A força resultante representa a soma vetorial de todas as forças que atuam em um corpo. Diagramas de corpo livre ajudam a identificar essas interações.", ["Duas forças no mesmo sentido.", "Duas forças em sentidos opostos."], ["Some forças considerando seus sentidos.", "Identifique todas as interações.", "Use diagramas para organizar a análise."]),
      lesson("Aplicações das leis de Newton", "A aula reúne situações de movimento e equilíbrio para aplicar as três leis de Newton e interpretar a força resultante.", ["Objeto em repouso.", "Carrinho acelerando.", "Corpos interagindo."], ["Reconheça a lei aplicável.", "Calcule força resultante quando necessário.", "Relacione força e aceleração."])
    ]
  },

  31: {
    title: "Massa, peso e gravidade",
    goal: "Diferenciar massa e peso e compreender a ação gravitacional.",
    days: [
      lesson("Massa", "Massa é uma propriedade física relacionada à inércia de um corpo. Sua unidade no Sistema Internacional é o quilograma.", ["Um objeto de 2 kg."], ["Massa é medida em kg.", "Está relacionada à inércia.", "Não depende do local."]),
      lesson("Peso", "Peso é a força gravitacional exercida sobre um corpo. Seu valor depende da massa e da aceleração da gravidade local.", ["P = m · g."], ["Peso é uma força.", "Sua unidade é o newton.", "Depende da gravidade."]),
      lesson("Gravidade", "A gravidade é a interação de atração entre corpos que possuem massa. Na superfície terrestre, ela contribui para manter objetos próximos ao planeta.", ["Queda de um objeto.", "Órbitas de satélites."], ["A gravidade é uma interação.", "A Terra atrai corpos.", "A intensidade varia conforme a situação."]),
      lesson("Massa e peso em diferentes planetas", "Um corpo mantém sua massa ao mudar de planeta, mas seu peso pode mudar porque a aceleração gravitacional não é igual em todos os lugares.", ["Comparar o peso na Terra e na Lua."], ["Massa permanece a mesma.", "Peso depende de g.", "A Lua possui gravidade menor que a Terra."]),
      lesson("Queda dos corpos", "Na queda livre ideal, desprezando a resistência do ar, os corpos próximos à superfície terrestre apresentam a mesma aceleração gravitacional.", ["Queda de objetos de massas diferentes no vácuo."], ["A resistência do ar pode alterar a queda.", "A gravidade provoca aceleração.", "O modelo ideal despreza o ar."]),
      lesson("Exercícios de massa e peso", "A aula aplica a relação entre massa, aceleração gravitacional e peso em diferentes situações.", ["Calcular o peso de um corpo de 5 kg com g = 10 m/s²."], ["Diferencie massa e peso.", "Utilize P = m · g.", "Observe as unidades."])
    ]
  },

  32: {
    title: "Atrito e equilíbrio",
    goal: "Entender a força de atrito e as condições de equilíbrio de corpos.",
    days: [
      lesson("Força de atrito", "O atrito é uma força que surge entre superfícies em contato e se opõe ao deslizamento ou à tendência de deslizamento relativo.", ["Pneu em contato com o asfalto.", "Caixa sobre o chão."], ["O atrito depende das superfícies.", "O sentido se opõe ao movimento relativo.", "Pode ser útil ou indesejado."]),
      lesson("Atrito estático", "O atrito estático atua quando as superfícies não deslizam entre si. Seu valor se ajusta até um limite máximo.", ["Empurrar uma caixa que ainda não se move."], ["Impede o início do deslizamento.", "Possui valor máximo.", "Pode equilibrar outras forças."]),
      lesson("Atrito cinético", "O atrito cinético atua quando existe deslizamento entre superfícies. Em modelos simples, seu valor depende do coeficiente de atrito e da força normal.", ["Caixa deslizando no chão."], ["Atua durante o deslizamento.", "Depende do contato entre superfícies.", "Transforma parte da energia mecânica em térmica."]),
      lesson("Força normal", "A força normal é a força de contato perpendicular à superfície. Seu valor depende das forças e da geometria da situação.", ["Livro sobre uma mesa.", "Objeto em uma rampa."], ["É perpendicular à superfície.", "Não é sempre igual ao peso.", "Participa do cálculo do atrito."]),
      lesson("Equilíbrio de forças", "Um corpo está em equilíbrio translacional quando a força resultante é nula. Nesse caso, sua aceleração translacional é zero.", ["Objeto parado sobre uma mesa.", "Corpo em movimento retilíneo uniforme."], ["Força resultante igual a zero.", "Aceleração translacional nula.", "Pode haver várias forças atuando."]),
      lesson("Aplicações de atrito e equilíbrio", "A aula integra força normal, atrito e força resultante em situações de repouso e movimento.", ["Caixa em uma superfície horizontal.", "Objeto em uma rampa."], ["Identifique as forças.", "Determine os sentidos.", "Verifique a condição de equilíbrio."])
    ]
  },

  33: {
    title: "Trabalho, energia e potência",
    goal: "Relacionar força, deslocamento, energia e taxa de realização de trabalho.",
    days: [
      lesson("Trabalho mecânico", "Em Física, trabalho mecânico ocorre quando uma força provoca deslocamento e possui componente na direção desse deslocamento.", ["W = F · d em força paralela ao deslocamento."], ["Trabalho é medido em joules.", "Depende da força e do deslocamento.", "O ângulo entre força e deslocamento importa."]),
      lesson("Trabalho positivo, negativo e nulo", "O trabalho pode ser positivo quando a força favorece o deslocamento, negativo quando se opõe a ele e nulo em determinadas situações geométricas.", ["Atrito realizando trabalho negativo.", "Força perpendicular ao deslocamento realizando trabalho nulo."], ["Observe o sentido da força.", "Considere o ângulo.", "Trabalho pode ser positivo, negativo ou nulo."]),
      lesson("Energia cinética", "A energia cinética está associada ao movimento de um corpo. Ela depende da massa e do quadrado da velocidade.", ["Ec = m · v² / 2."], ["É medida em joules.", "Aumenta com a massa.", "Depende do quadrado da velocidade."]),
      lesson("Energia potencial gravitacional", "A energia potencial gravitacional está associada à posição de um corpo em um campo gravitacional. Próximo à superfície terrestre, pode ser calculada por massa, gravidade e altura.", ["Ep = m · g · h."], ["Depende da altura de referência.", "É medida em joules.", "Pode se transformar em energia cinética."]),
      lesson("Conservação da energia mecânica", "Em um sistema ideal sem forças dissipativas, a soma das energias cinética e potencial permanece constante.", ["Objeto descendo uma rampa ideal.", "Pêndulo ideal."], ["Energia pode mudar de forma.", "A energia mecânica se conserva em condições ideais.", "Atrito pode dissipar energia mecânica."]),
      lesson("Potência", "Potência mede a rapidez com que o trabalho é realizado ou a energia é transferida. Sua unidade no Sistema Internacional é o watt.", ["P = W / Δt.", "Máquina realizando trabalho em menos tempo."], ["Potência é medida em watts.", "Relaciona trabalho e tempo.", "Compare máquinas pela taxa de realização de trabalho."])
    ]
  },

  34: {
    title: "Introdução ao torque e à rotação",
    goal: "Compreender o efeito de rotação produzido por forças.",
    days: [
      lesson("Movimento de rotação", "Um corpo realiza movimento de rotação quando gira em torno de um eixo. Esse movimento aparece em rodas, motores e engrenagens.", ["Roda girando.", "Eixo de um motor."], ["Rotação envolve um eixo.", "Pode ser descrita por grandezas angulares.", "Está presente em máquinas."]),
      lesson("Torque", "Torque mede a tendência de uma força produzir rotação em torno de um ponto ou eixo. Depende da intensidade da força e do braço de alavanca.", ["Abrir uma porta pela maçaneta.", "τ = F · d para força perpendicular."], ["Torque é medido em N·m.", "Depende do braço de alavanca.", "A direção da força importa."]),
      lesson("Braço de alavanca", "O braço de alavanca é a distância perpendicular entre o eixo de rotação e a linha de ação da força. Aumentá-lo pode aumentar o torque para a mesma força.", ["Chave de roda longa.", "Maçaneta distante das dobradiças."], ["A distância influencia o torque.", "Considere a distância perpendicular.", "Ferramentas podem aproveitar esse princípio."]),
      lesson("Equilíbrio rotacional", "Um corpo está em equilíbrio rotacional quando a soma dos torques em relação a um eixo é nula.", ["Gangorra equilibrada.", "Balança de braços."], ["Some os torques considerando os sentidos.", "Torque resultante nulo indica equilíbrio rotacional.", "O eixo de referência importa."]),
      lesson("Velocidade angular", "A velocidade angular descreve a rapidez com que um corpo muda sua posição angular. É comum em rodas, motores e sistemas rotativos.", ["Roda girando.", "Ventilador."], ["É medida em rad/s.", "Relaciona ângulo e tempo.", "Descreve a rapidez da rotação."]),
      lesson("Aplicações de torque e rotação", "A aula aplica torque, braço de alavanca e equilíbrio rotacional em exemplos de ferramentas e máquinas.", ["Chave de roda.", "Gangorra.", "Polia."], ["Identifique o eixo.", "Determine o braço de alavanca.", "Compare os torques."])
    ]
  },

  35: {
    title: "Máquinas simples, alavancas e polias",
    goal: "Identificar máquinas simples e compreender como modificam a aplicação de forças.",
    days: [
      lesson("Máquinas simples", "Máquinas simples são dispositivos que facilitam a realização de tarefas ao modificar a intensidade ou a direção de uma força.", ["Alavancas.", "Polias.", "Planos inclinados."], ["Podem modificar a força aplicada.", "Não criam energia.", "Facilitam tarefas mecânicas."]),
      lesson("Alavancas", "Uma alavanca é uma barra que gira em torno de um ponto de apoio. A posição do apoio, da força aplicada e da resistência determina seu funcionamento.", ["Gangorra.", "Alicate.", "Carrinho de mão."], ["Possui ponto de apoio.", "Pode multiplicar força.", "O braço de alavanca influencia o torque."]),
      lesson("Tipos de alavanca", "As alavancas podem ser classificadas conforme a posição relativa do apoio, da força e da resistência: interfixa, inter-resistente e interpotente.", ["Tesoura.", "Carrinho de mão.", "Pinça."], ["Interfixa: apoio entre força e resistência.", "Inter-resistente: resistência entre apoio e força.", "Interpotente: força entre apoio e resistência."]),
      lesson("Polias fixas e móveis", "Polias são rodas com canaletas que utilizam cordas ou cabos. Polias fixas podem mudar a direção da força, enquanto polias móveis podem reduzir a força necessária.", ["Polia fixa.", "Polia móvel."], ["A polia fixa muda a direção.", "A polia móvel pode oferecer vantagem mecânica.", "Sistemas reais possuem perdas."]),
      lesson("Plano inclinado e vantagem mecânica", "O plano inclinado permite elevar objetos aplicando força ao longo de uma distância maior. Ele pode reduzir a força necessária em comparação com uma elevação vertical direta.", ["Rampa.", "Parafuso como plano inclinado adaptado."], ["Aumenta o percurso.", "Pode reduzir a força aplicada.", "A energia não é criada."]),
      lesson("Revisão das máquinas simples", "A revisão compara alavancas, polias e planos inclinados, relacionando força, distância e vantagem mecânica.", ["Comparação entre rampa e elevação vertical.", "Alavancas de diferentes classes."], ["Reconheça os tipos.", "Identifique o apoio e a resistência.", "Explique a vantagem mecânica."])
    ]
  },

  36: {
    title: "Revisão de física e mecânica",
    goal: "Consolidar os fundamentos de movimento, forças, energia e máquinas simples.",
    days: [
      lesson("Revisão de movimento", "Retome posição, deslocamento, velocidade e aceleração, relacionando essas grandezas à descrição do movimento.", ["Movimento uniforme.", "Movimento acelerado."], ["Diferencie velocidade e aceleração.", "Interprete unidades.", "Analise o movimento."]),
      lesson("Revisão das leis de Newton", "Revise força resultante, inércia, relação entre força e aceleração e pares de ação e reação.", ["F = m · a.", "Forças em equilíbrio."], ["Identifique as três leis.", "Calcule força resultante.", "Reconheça pares de ação e reação."]),
      lesson("Revisão de atrito e equilíbrio", "Retome força normal, atrito estático e cinético e condições de equilíbrio translacional.", ["Caixa em repouso.", "Objeto deslizando."], ["Identifique forças de contato.", "Diferencie atritos.", "Verifique a resultante."]),
      lesson("Revisão de trabalho e energia", "Revise trabalho mecânico, energia cinética, energia potencial e conservação da energia mecânica.", ["Queda de um objeto.", "Objeto em movimento."], ["Calcule trabalho.", "Compare formas de energia.", "Reconheça dissipação."]),
      lesson("Revisão de torque e máquinas", "Retome torque, alavancas, polias e planos inclinados, relacionando esses conceitos a aplicações mecânicas.", ["Gangorra.", "Polia.", "Rampa."], ["Identifique eixos e apoios.", "Compare torques.", "Reconheça máquinas simples."]),
      lesson("Integração de mecânica", "Resolva situações que combinam movimento, forças, energia e máquinas simples. Registre os pontos que precisam de revisão adicional.", ["Análise de um carrinho em uma rampa."], ["Conecte os conceitos.", "Escolha as relações adequadas.", "Revise unidades e resultados."])
    ]
  },

  37: {
    title: "Introdução à eletricidade",
    goal: "Conhecer os conceitos fundamentais de carga elétrica e fenômenos elétricos.",
    days: [
      lesson("Carga elétrica", "A carga elétrica é uma propriedade da matéria responsável pelas interações elétricas. Existem cargas positivas e negativas.", ["Prótons positivos.", "Elétrons negativos."], ["Cargas iguais se repelem.", "Cargas opostas se atraem.", "A carga é medida em coulombs."]),
      lesson("Eletrização", "Um corpo pode ser eletrizado por atrito, contato ou indução. Esses processos envolvem transferência ou redistribuição de cargas.", ["Atrito entre materiais.", "Contato entre condutores.", "Indução eletrostática."], ["Atrito pode transferir elétrons.", "Contato permite redistribuição de cargas.", "Indução ocorre sem contato direto."]),
      lesson("Condutores e isolantes", "Materiais condutores permitem maior mobilidade de cargas elétricas, enquanto isolantes dificultam essa movimentação.", ["Cobre como condutor.", "Borracha como isolante."], ["Metais costumam ser bons condutores.", "Isolantes dificultam o movimento de cargas.", "A escolha do material importa em circuitos."]),
      lesson("Corrente elétrica", "A corrente elétrica representa o fluxo ordenado de cargas elétricas. Sua unidade no Sistema Internacional é o ampere.", ["Corrente em um fio condutor.", "I = ΔQ / Δt."], ["Corrente é medida em ampères.", "Relaciona carga e tempo.", "Depende das condições do circuito."]),
      lesson("Tensão elétrica", "A tensão elétrica representa a diferença de potencial entre dois pontos. Ela está relacionada à energia transferida por unidade de carga.", ["Pilha.", "Bateria.", "Fonte de alimentação."], ["Tensão é medida em volts.", "Pode impulsionar a corrente.", "É uma diferença de potencial."]),
      lesson("Revisão de fundamentos elétricos", "A revisão integra carga, eletrização, materiais condutores e isolantes, corrente e tensão elétrica.", ["Pilha conectada a um circuito simples."], ["Diferencie carga e corrente.", "Explique tensão elétrica.", "Identifique condutores e isolantes."])
    ]
  },

  38: {
    title: "Tensão, corrente e resistência",
    goal: "Compreender as grandezas elétricas e suas relações em circuitos.",
    days: [
      lesson("Tensão elétrica em circuitos", "A tensão elétrica é a diferença de potencial entre dois pontos do circuito. Fontes elétricas fornecem energia para movimentar cargas.", ["Pilha de 1,5 V.", "Fonte de alimentação."], ["Tensão é medida em volts.", "É uma diferença de potencial.", "Fontes fornecem energia ao circuito."]),
      lesson("Corrente elétrica em circuitos", "A corrente elétrica descreve a quantidade de carga que atravessa uma seção do condutor por unidade de tempo.", ["Corrente em um LED.", "Corrente em um resistor."], ["Corrente é medida em ampères.", "Relaciona carga e tempo.", "É importante para dimensionar componentes."]),
      lesson("Resistência elétrica", "A resistência elétrica expressa a oposição que um componente oferece à passagem da corrente. Sua unidade é o ohm.", ["Resistor de 220 Ω.", "Resistor de 1 kΩ."], ["Resistência é medida em ohms.", "Depende do material e da geometria.", "Limita a corrente."]),
      lesson("Materiais e resistência", "A resistência de um condutor depende de características como material, comprimento, área de seção transversal e temperatura.", ["Fio longo e fino.", "Fio curto e grosso."], ["Comprimento maior tende a aumentar a resistência.", "Área maior tende a reduzir a resistência.", "O material influencia o resultado."]),
      lesson("Instrumentos de medição", "Multímetros permitem medir grandezas elétricas. A medição de tensão é feita em paralelo e a medição de corrente exige ligação em série.", ["Multímetro na função voltímetro.", "Multímetro na função amperímetro."], ["Tensão é medida em paralelo.", "Corrente é medida em série.", "Selecione a função e a escala corretas."]),
      lesson("Revisão de tensão, corrente e resistência", "A aula relaciona as três grandezas elétricas e prepara a aplicação da Lei de Ohm.", ["Comparar circuitos com diferentes resistências."], ["Diferencie as grandezas.", "Reconheça suas unidades.", "Interprete medições."])
    ]
  },

  39: {
    title: "Lei de Ohm",
    goal: "Aplicar a Lei de Ohm em cálculos e situações de circuitos elétricos simples.",
    days: [
      lesson("Introdução à Lei de Ohm", "A Lei de Ohm relaciona tensão, corrente e resistência em um resistor ôhmico sob condições físicas constantes.", ["U = R · I."], ["Tensão é medida em volts.", "Corrente é medida em ampères.", "Resistência é medida em ohms."]),
      lesson("Calculando tensão", "Quando resistência e corrente são conhecidas, a tensão pode ser calculada multiplicando os dois valores.", ["R = 10 Ω e I = 2 A: U = 20 V."], ["Use U = R · I.", "Confira as unidades.", "Interprete o resultado."]),
      lesson("Calculando corrente", "Quando tensão e resistência são conhecidas, a corrente pode ser calculada dividindo a tensão pela resistência.", ["U = 12 V e R = 6 Ω: I = 2 A."], ["Use I = U / R.", "Corrente é medida em ampères.", "Maior resistência reduz a corrente para a mesma tensão."]),
      lesson("Calculando resistência", "Quando tensão e corrente são conhecidas, a resistência pode ser calculada dividindo a tensão pela corrente.", ["U = 9 V e I = 0,5 A: R = 18 Ω."], ["Use R = U / I.", "Resistência é medida em ohms.", "Verifique se os valores são compatíveis."]),
      lesson("Gráficos e aplicações da Lei de Ohm", "Em um resistor ôhmico, tensão e corrente são proporcionais. Um gráfico de tensão por corrente apresenta uma relação linear cuja inclinação corresponde à resistência.", ["Comparação entre resistores de 10 Ω e 20 Ω."], ["A relação é linear em condições constantes.", "A inclinação depende da resistência.", "A Lei de Ohm possui condições de validade."]),
      lesson("Revisão e problemas de Lei de Ohm", "A aula integra cálculos de tensão, corrente e resistência, além da interpretação de situações simples de circuitos.", ["Circuito com bateria e resistor.", "Cálculo de corrente em diferentes resistências."], ["Identifique os dados.", "Escolha a forma da equação.", "Confira unidades e resultado."])
    ]
  },


  40: {
    title: "Potência elétrica e consumo de energia",
    goal: "Compreender a potência elétrica e calcular o consumo de energia de aparelhos.",
    days: [
      lesson("O que é potência elétrica?", "Potência elétrica representa a taxa de transformação ou transferência de energia elétrica ao longo do tempo.", ["Uma lâmpada de 10 W."], ["Potência é medida em watts.", "Relacione potência e energia."]),
      lesson("Cálculo de potência", "Em circuitos elétricos, a potência pode ser calculada utilizando tensão e corrente.", ["P = U × I."], ["P em watts.", "U em volts.", "I em ampères."]),
      lesson("Energia elétrica", "O consumo de energia depende da potência do aparelho e do tempo durante o qual ele funciona.", ["E = P × t."], ["Considere potência e tempo.", "Observe as unidades utilizadas."]),
      lesson("Quilowatt-hora", "O quilowatt-hora é uma unidade de energia muito utilizada nas contas de eletricidade.", ["1 kW durante 1 hora = 1 kWh."], ["Converta watts em quilowatts.", "Converta minutos em horas quando necessário."]),
      lesson("Consumo de aparelhos", "Calcule o consumo de diferentes equipamentos e compare seus gastos energéticos.", ["Aparelho de 1000 W ligado por 2 horas."], ["Identifique a potência.", "Determine o tempo.", "Calcule a energia consumida."]),
      lesson("Exercícios de potência e consumo", "Resolva problemas envolvendo potência, tensão, corrente, tempo e consumo de energia.", ["Compare o consumo de dois aparelhos."], ["Utilize as fórmulas adequadas.", "Confira as unidades.", "Interprete o resultado."])
    ]
  },

  41: {
    title: "Circuitos em série e em paralelo",
    goal: "Diferenciar associações de componentes e analisar o comportamento de circuitos.",
    days: [
      lesson("Introdução às associações", "Componentes elétricos podem ser conectados em diferentes configurações. As associações influenciam corrente, tensão e resistência equivalente.", ["Duas lâmpadas conectadas ao mesmo circuito."], ["Identifique os caminhos da corrente.", "Observe as conexões."]),
      lesson("Circuitos em série", "Em uma associação em série, os componentes ficam conectados em um único caminho para a corrente elétrica.", ["Dois resistores em sequência."], ["A corrente é a mesma nos componentes.", "A tensão se divide."]),
      lesson("Resistência equivalente em série", "A resistência equivalente de resistores em série é obtida pela soma de suas resistências.", ["Req = R1 + R2."], ["Some as resistências.", "Mantenha a unidade em ohms."]),
      lesson("Circuitos em paralelo", "Em uma associação em paralelo, os componentes são conectados em caminhos diferentes entre os mesmos pontos do circuito.", ["Duas lâmpadas em ramificações."], ["A tensão é a mesma nos ramos.", "A corrente se divide."]),
      lesson("Resistência equivalente em paralelo", "Em associações em paralelo, o inverso da resistência equivalente corresponde à soma dos inversos das resistências.", ["1/Req = 1/R1 + 1/R2."], ["A resistência equivalente é menor que a menor resistência individual.", "Analise os ramos."]),
      lesson("Comparação e exercícios", "Compare circuitos em série e paralelo e resolva problemas de resistência equivalente e distribuição de grandezas.", ["Compare duas lâmpadas em série e em paralelo."], ["Identifique a associação.", "Aplique a relação correta.", "Interprete o funcionamento."])
    ]
  },

  42: {
    title: "Resistores, LEDs e componentes básicos",
    goal: "Reconhecer componentes eletrônicos básicos e compreender suas funções.",
    days: [
      lesson("Componentes de um circuito", "Um circuito pode conter fontes, condutores, resistores, interruptores e outros componentes com funções específicas.", ["Bateria, fios e resistor."], ["Identifique cada componente.", "Relacione componente e função."]),
      lesson("Resistores", "Resistores são componentes que oferecem resistência à passagem da corrente elétrica e podem ser utilizados para controlar grandezas do circuito.", ["Resistor de 220 Ω."], ["Resistência é medida em ohms.", "Resistores dissipam energia."]),
      lesson("Código de cores", "Muitos resistores utilizam faixas coloridas para indicar seu valor de resistência e tolerância.", ["Resistor com faixas coloridas."], ["Aprenda a tabela de cores.", "Observe os algarismos e o multiplicador."]),
      lesson("LEDs", "LEDs são diodos emissores de luz. Eles possuem polaridade e precisam operar dentro de limites elétricos adequados.", ["LED vermelho."], ["Identifique ânodo e cátodo.", "Considere a corrente e a tensão."]),
      lesson("Diodos e interruptores", "Diodos permitem a passagem de corrente predominantemente em um sentido. Interruptores controlam a continuidade do circuito.", ["Diodo comum.", "Chave liga/desliga."], ["Observe a polaridade.", "Entenda os estados aberto e fechado."]),
      lesson("Identificação de componentes", "Analise esquemas simples e identifique fontes, resistores, LEDs, diodos e interruptores.", ["Esquema de um circuito com LED."], ["Leia os símbolos.", "Reconheça a polaridade.", "Explique a função de cada componente."])
    ]
  },

  43: {
    title: "Simulação de circuitos elétricos",
    goal: "Utilizar simulações para montar e analisar circuitos elétricos básicos.",
    days: [
      lesson("Por que simular circuitos?", "Simuladores permitem testar circuitos virtualmente, observar grandezas elétricas e estudar diferentes configurações.", ["Circuito virtual com bateria e resistor."], ["Simulação complementa a teoria.", "Resultados dependem dos parâmetros inseridos."]),
      lesson("Conhecendo o ambiente de simulação", "Explore a interface de um simulador, reconhecendo componentes, conexões e instrumentos de medição.", ["Fonte, resistor e multímetro virtuais."], ["Identifique a biblioteca de componentes.", "Observe os pontos de conexão."]),
      lesson("Montagem de circuito simples", "Monte um circuito virtual básico com fonte, fios e resistor, verificando se as conexões estão completas.", ["Bateria ligada a um resistor."], ["Confira as conexões.", "Identifique o caminho da corrente."]),
      lesson("Medição de tensão e corrente", "Utilize instrumentos virtuais para observar tensão e corrente em diferentes pontos do circuito.", ["Voltímetro e amperímetro."], ["Voltímetro mede tensão.", "Amperímetro mede corrente."]),
      lesson("Testando série e paralelo", "Monte associações em série e paralelo e compare os resultados apresentados pelo simulador.", ["Dois resistores em série e em paralelo."], ["Compare tensão e corrente.", "Observe a resistência equivalente."]),
      lesson("Registro dos resultados", "Documente a montagem, as medições e as conclusões de uma simulação simples.", ["Tabela de tensão e corrente."], ["Registre as condições do teste.", "Compare teoria e simulação.", "Explique diferenças observadas."])
    ]
  },

  44: {
    title: "Segurança elétrica e análise de circuitos",
    goal: "Reconhecer riscos elétricos e desenvolver uma postura responsável na análise de circuitos.",
    days: [
      lesson("Riscos da eletricidade", "A eletricidade exige cuidados porque correntes elétricas podem causar acidentes e danos a equipamentos.", ["Instalações elétricas danificadas."], ["Reconheça situações de risco.", "Não toque em instalações danificadas."]),
      lesson("Isolamento e proteção", "Materiais isolantes, dispositivos de proteção e instalações adequadas ajudam a reduzir riscos elétricos.", ["Cabos isolados.", "Disjuntores."], ["Não utilize cabos danificados.", "Proteções devem ser adequadas à instalação."]),
      lesson("Fusíveis e disjuntores", "Fusíveis e disjuntores interrompem o circuito quando determinadas condições de corrente são ultrapassadas.", ["Fusível.", "Disjuntor."], ["Proteção contra sobrecorrente.", "Cada dispositivo possui características próprias."]),
      lesson("Aterramento e proteção", "O aterramento é parte de um sistema de proteção que ajuda a conduzir correntes de falha por um caminho apropriado.", ["Condutor de proteção."], ["Aterramento não substitui outros cuidados.", "Instalações devem seguir normas técnicas."]),
      lesson("Leitura de esquemas", "Analise esquemas elétricos básicos e identifique fontes, cargas, condutores e dispositivos de proteção.", ["Esquema com disjuntor e carga."], ["Leia os símbolos.", "Identifique a função de proteção.", "Reconheça possíveis falhas conceituais."]),
      lesson("Revisão de segurança e análise", "Revise conceitos de circuitos e segurança elétrica por meio de situações teóricas e exercícios.", ["Análise de um esquema simplificado."], ["Priorize a segurança.", "Não faça intervenções em instalações reais.", "Justifique suas respostas."])
    ]
  },

  45: {
    title: "Introdução ao desenho técnico",
    goal: "Compreender a função do desenho técnico e interpretar representações básicas de peças.",
    days: [
      lesson("O que é desenho técnico?", "O desenho técnico comunica informações sobre objetos e peças de maneira padronizada, permitindo sua fabricação e análise.", ["Desenho de uma peça mecânica."], ["Precisão e clareza.", "Representação padronizada."]),
      lesson("Tipos de linha", "Diferentes tipos de linha representam contornos, elementos ocultos, eixos e outras informações.", ["Linha contínua e tracejada."], ["Cada linha possui uma função.", "Observe a legenda e as convenções."]),
      lesson("Vistas ortográficas", "As vistas ortográficas representam um objeto por diferentes lados, como frente, topo e lateral.", ["Vista frontal, superior e lateral."], ["Observe cada direção.", "Relacione as vistas ao objeto tridimensional."]),
      lesson("Escalas", "A escala estabelece a relação entre as dimensões representadas no desenho e as dimensões reais do objeto.", ["Escala 1:2.", "Escala 2:1."], ["Escala de redução.", "Escala de ampliação.", "Escala natural."]),
      lesson("Cotas e dimensões", "A cotagem registra medidas necessárias para interpretar e fabricar uma peça.", ["Comprimento, largura e diâmetro."], ["Utilize unidades adequadas.", "Leia as cotas com atenção."]),
      lesson("Interpretação de desenhos", "Analise desenhos técnicos simples, reconhecendo vistas, linhas, escalas e dimensões.", ["Desenho cotado de um bloco."], ["Compare as vistas.", "Interprete as cotas.", "Reconstrua mentalmente a forma da peça."])
    ]
  },

  46: {
    title: "Engrenagens, eixos e transmissão de movimento",
    goal: "Entender como mecanismos transmitem movimento e alteram velocidade e torque.",
    days: [
      lesson("Transmissão de movimento", "Máquinas utilizam mecanismos para transmitir movimento e força entre diferentes componentes.", ["Engrenagens e correias."], ["Identifique entrada e saída.", "Observe o sentido do movimento."]),
      lesson("Engrenagens", "Engrenagens possuem dentes que se encaixam para transmitir movimento rotacional entre eixos.", ["Duas engrenagens acopladas."], ["Observe o número de dentes.", "Engrenagens externas giram em sentidos opostos."]),
      lesson("Relação de transmissão", "A relação entre engrenagens depende de suas dimensões ou do número de dentes e influencia a velocidade de rotação.", ["Engrenagem de 20 dentes ligada a uma de 40."], ["Compare os números de dentes.", "Entenda a troca entre velocidade e torque."]),
      lesson("Eixos e mancais", "Eixos transmitem rotação e torque. Mancais ajudam a apoiar e orientar o movimento dos eixos.", ["Eixo apoiado em mancais."], ["Identifique a função do eixo.", "Entenda o apoio e o alinhamento."]),
      lesson("Correias e polias", "Correias e polias transmitem movimento entre eixos, podendo alterar velocidade e direção conforme a configuração.", ["Sistema de polias com correia."], ["Observe os diâmetros.", "Analise a transmissão."]),
      lesson("Aplicações e revisão", "Analise mecanismos simples e identifique como engrenagens, eixos, correias e polias trabalham juntos.", ["Transmissão de uma máquina."], ["Identifique os componentes.", "Analise velocidade e torque.", "Explique o caminho do movimento."])
    ]
  },

  47: {
    title: "Materiais, atrito e resistência mecânica",
    goal: "Conhecer propriedades dos materiais e compreender sua influência no funcionamento de máquinas.",
    days: [
      lesson("Materiais de engenharia", "Materiais são selecionados conforme suas propriedades, custo, disponibilidade e aplicação.", ["Aço, alumínio e polímeros."], ["Considere a aplicação.", "Compare propriedades."]),
      lesson("Propriedades mecânicas", "Propriedades mecânicas descrevem como um material responde a forças e deformações.", ["Resistência, dureza e elasticidade."], ["Diferencie resistência e dureza.", "Observe a deformação."]),
      lesson("Tração e compressão", "Tração tende a alongar um corpo, enquanto compressão tende a encurtá-lo ou comprimi-lo.", ["Barra submetida à tração.", "Coluna sob compressão."], ["Identifique o sentido das forças.", "Relacione força e deformação."]),
      lesson("Cisalhamento e flexão", "Cisalhamento envolve esforços paralelos à seção analisada. Flexão ocorre quando um elemento se curva sob carregamento.", ["Viga apoiada e carregada."], ["Reconheça os esforços.", "Observe a forma de deformação."]),
      lesson("Atrito e desgaste", "O atrito aparece quando superfícies em contato oferecem resistência ao movimento relativo. Ele pode ser útil ou provocar desgaste.", ["Freios e rolamentos."], ["Atrito estático e cinético.", "Lubrificação pode reduzir o desgaste."]),
      lesson("Seleção de materiais", "Compare materiais e selecione opções adequadas para aplicações mecânicas simples, justificando as escolhas.", ["Comparação entre aço e alumínio."], ["Considere resistência.", "Considere massa e custo.", "Considere o ambiente de uso."])
    ]
  },

  48: {
    title: "Introdução à modelagem 3D (CAD)",
    goal: "Conhecer os fundamentos da modelagem tridimensional e sua aplicação na engenharia.",
    days: [
      lesson("O que é CAD?", "CAD é o uso de ferramentas computacionais para criar, modificar e documentar projetos e modelos técnicos.", ["Modelo 3D de uma peça."], ["Projeto assistido por computador.", "Precisão e documentação."]),
      lesson("Ambiente de trabalho 3D", "Conheça a área de trabalho, os eixos, a visualização e as ferramentas básicas de navegação de um software CAD.", ["Eixos X, Y e Z."], ["Observe os três eixos.", "Aprenda a girar e aproximar a visualização."]),
      lesson("Esboços 2D", "A modelagem paramétrica geralmente começa com esboços bidimensionais formados por linhas, círculos e outras entidades.", ["Retângulo e círculo."], ["Utilize dimensões.", "Aplique restrições geométricas."]),
      lesson("Operações básicas 3D", "Operações como extrusão e revolução transformam esboços em sólidos tridimensionais.", ["Extrusão de um retângulo.", "Revolução de um perfil."], ["Entenda o perfil inicial.", "Observe o resultado tridimensional."]),
      lesson("Dimensões e ajustes", "Dimensões e restrições ajudam a controlar o formato do modelo e permitem realizar alterações com precisão.", ["Alterar o diâmetro de um furo."], ["Utilize medidas consistentes.", "Revise as restrições."]),
      lesson("Primeiro modelo CAD", "Planeje e modele uma peça simples, registrando suas dimensões e as operações utilizadas.", ["Bloco com furo central."], ["Planeje antes de modelar.", "Confira as dimensões.", "Salve o projeto."])
    ]
  },

  49: {
    title: "Primeiro experimento integrando os conhecimentos",
    goal: "Planejar um experimento simples que reúna conceitos de matemática, física, eletricidade e engenharia.",
    days: [
      lesson("Definição do experimento", "Escolha um problema simples que possa ser investigado por meio de um experimento seguro, com objetivo e critérios definidos.", ["Estudar a relação entre tensão e corrente em uma simulação."], ["Defina uma pergunta.", "Estabeleça um objetivo.", "Prefira simulações ou atividades supervisionadas."]),
      lesson("Planejamento e variáveis", "Identifique as variáveis que serão observadas e organize um plano de registro dos resultados.", ["Tabela de tensão e corrente."], ["Defina o que será medido.", "Mantenha condições controladas."]),
      lesson("Fundamentação teórica", "Revise os conceitos necessários para explicar o experimento e formule uma previsão baseada na teoria.", ["Lei de Ohm."], ["Selecione os conceitos relevantes.", "Explique sua previsão."]),
      lesson("Execução ou simulação", "Realize a simulação ou atividade didática planejada, registrando as condições e os resultados obtidos.", ["Comparação entre valores previstos e simulados."], ["Siga o planejamento.", "Registre os dados.", "Não realize intervenções elétricas sem supervisão."]),
      lesson("Análise dos resultados", "Organize os dados em tabelas ou gráficos e compare os resultados com as previsões iniciais.", ["Gráfico de tensão por corrente."], ["Organize os dados.", "Identifique padrões.", "Discuta diferenças."]),
      lesson("Relatório do experimento", "Produza um relatório com objetivo, teoria, método, resultados, análise e conclusão.", ["Relatório técnico curto."], ["Documente o processo.", "Justifique as conclusões.", "Registre limitações e possíveis melhorias."])
    ]
  },


  50: {
    title: "Desenvolvimento de um pequeno projeto",
    goal: "Planejar e desenvolver um projeto simples que integre conhecimentos de engenharia.",
    days: [
      lesson("Escolha do problema", "Todo projeto começa com a identificação de uma necessidade ou problema que possa ser trabalhado por meio de uma solução técnica.", ["Suporte simples para um objeto."], ["Defina o problema.", "Identifique o usuário ou finalidade.", "Estabeleça limites."]),
      lesson("Pesquisa e planejamento", "Pesquise soluções existentes, selecione materiais e organize as etapas necessárias para desenvolver o projeto.", ["Lista de materiais e etapas."], ["Pesquise referências.", "Compare alternativas.", "Planeje o trabalho."]),
      lesson("Desenho e modelagem", "Represente a solução por meio de esboços ou de um modelo CAD, registrando as dimensões principais.", ["Desenho técnico de uma peça."], ["Defina dimensões.", "Observe encaixes e formas.", "Registre alterações."]),
      lesson("Princípios de funcionamento", "Explique os princípios matemáticos, físicos e mecânicos envolvidos no funcionamento da solução.", ["Forças, movimento ou circuitos, conforme o projeto."], ["Identifique os conceitos aplicados.", "Justifique as escolhas."]),
      lesson("Organização da construção", "Organize os componentes e as etapas de montagem de forma segura, considerando as ferramentas e a supervisão necessárias.", ["Plano de montagem."], ["Organize os componentes.", "Considere a segurança.", "Não realize procedimentos perigosos sem orientação."]),
      lesson("Documentação do projeto", "Registre o objetivo, os desenhos, os materiais, os princípios de funcionamento e as etapas planejadas.", ["Documento técnico inicial."], ["Descreva a solução.", "Inclua desenhos.", "Registre decisões."])
    ]
  },

  51: {
    title: "Testes, correções e documentação do projeto",
    goal: "Avaliar o projeto, identificar problemas e registrar melhorias.",
    days: [
      lesson("Planejamento dos testes", "Testes devem possuir objetivos e critérios definidos para avaliar se uma solução atende ao que foi planejado.", ["Lista de critérios de avaliação."], ["Defina o que será avaliado.", "Estabeleça critérios.", "Registre as condições."]),
      lesson("Observação dos resultados", "Durante a avaliação, registre o comportamento do projeto e compare os resultados com os objetivos iniciais.", ["Tabela de observações."], ["Registre evidências.", "Compare com os critérios.", "Evite conclusões sem dados."]),
      lesson("Identificação de problemas", "A análise dos resultados ajuda a identificar falhas, limitações e pontos que podem ser melhorados.", ["Lista de problemas encontrados."], ["Descreva o problema.", "Investigue possíveis causas.", "Priorize melhorias."]),
      lesson("Propostas de correção", "As correções devem ser planejadas considerando a causa identificada, os recursos disponíveis e os efeitos esperados.", ["Alteração de dimensões de uma peça."], ["Proponha uma solução.", "Justifique a mudança.", "Considere possíveis efeitos."]),
      lesson("Documentação das alterações", "Registre as mudanças realizadas ou propostas, explicando o motivo e os resultados observados.", ["Histórico de versões."], ["Documente cada alteração.", "Mantenha registros claros.", "Compare versões."]),
      lesson("Relatório final do projeto", "Organize o processo em um relatório com objetivo, planejamento, desenvolvimento, testes, correções e conclusão.", ["Relatório técnico."], ["Apresente evidências.", "Explique limitações.", "Registre aprendizados."])
    ]
  },

  52: {
    title: "Revisão geral e avaliação do primeiro ano",
    goal: "Consolidar os fundamentos de matemática, programação, física, eletricidade e engenharia estudados no primeiro ano.",
    days: [
      lesson("Revisão matemática", "Revise operações, frações, proporções, porcentagens, equações, potências, raízes, unidades e geometria.", ["Exercícios integrados."], ["Confira cálculos.", "Utilize unidades.", "Identifique erros recorrentes."]),
      lesson("Revisão de programação e lógica", "Revise algoritmos, fluxogramas, variáveis, operadores, condições, repetições e funções.", ["Interpretação de um algoritmo."], ["Compreenda a sequência lógica.", "Identifique condições.", "Reconheça repetições."]),
      lesson("Revisão de física e mecânica", "Revise movimento, aceleração, forças, energia, torque, máquinas simples e transmissão de movimento.", ["Problemas de mecânica básica."], ["Identifique grandezas.", "Escolha relações adequadas.", "Interprete os resultados."]),
      lesson("Revisão de eletricidade e circuitos", "Revise tensão, corrente, resistência, Lei de Ohm, potência, consumo, associações e componentes básicos.", ["Análise de circuitos teóricos."], ["Diferencie tensão e corrente.", "Aplique a Lei de Ohm.", "Reconheça associações."]),
      lesson("Revisão de desenho técnico e CAD", "Revise vistas, escalas, cotas, modelagem tridimensional e documentação técnica.", ["Interpretação de uma peça modelada."], ["Leia dimensões.", "Compare vistas.", "Entenda operações básicas de CAD."]),
      lesson("Avaliação final do primeiro ano", "Realize uma avaliação integrada e analise o domínio dos fundamentos estudados ao longo do primeiro ano.", ["Questões teóricas e problemas aplicados."], ["Identifique pontos fortes.", "Registre dificuldades.", "Defina o que precisa ser retomado."])
    ]
  },


};


// =====================================================
// CONSTRUÇÃO AUTOMÁTICA DO CURRÍCULO
// =====================================================

function build(section, weeksObject) {

  return Object.entries(weeksObject)
    .map(([weekNumber, week]) => {

      const number = Number(weekNumber);

      return {
        ...week,

        number,
        week: number,

        phase: Math.ceil(number / 4),

        days: (week.days || []).map((day, dayIndex) => ({
          ...day,
          day: dayIndex + 1
        }))
      };
    })
    .sort((a, b) => a.number - b.number);
}


// =====================================================
// CURRÍCULOS DISPONÍVEIS
// =====================================================

export const LABORATORY_CURRICULUM = {

  matters: build("matters", MATTERS_WEEKS),

  engineering: build("engineering", ENGINEERING_WEEKS)

};


// =====================================================
// FUNÇÕES DE CONSULTA
// =====================================================

export function getCurriculum(section) {

  return LABORATORY_CURRICULUM[section] || [];

}


export function getWeek(section, weekNumber) {

  return getCurriculum(section)
    .find(week => week.number === Number(weekNumber)) || null;

}


export function getWeekName(section, weekNumber) {

  return getWeek(section, weekNumber)?.title || "Semana não cadastrada";

}


export function getLesson(section, weekNumber, dayNumber) {

  const week = getWeek(section, weekNumber);

  if (!week) return null;

  const lessonData = week.days.find(
    day => day.day === Number(dayNumber)
  );

  if (!lessonData) return null;

  return {
    section,
    week: week.number,
    weekTitle: week.title,
    phase: week.phase,

    day: lessonData.day,
    title: lessonData.title,
    explanation: lessonData.explanation || "",
    examples: lessonData.examples || [],
    keyPoints: lessonData.keyPoints || [],
    goal: lessonData.goal || week.goal || ""
  };

  
}

