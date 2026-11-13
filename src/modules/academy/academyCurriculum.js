// Currículo oficial da Academia de Línguas.
// Cada semana contém 6 focos diários. A prova semanal revisa os seis dias.
const jp = [
["Hiragana + estrutura básica","Revisão rápida do Hiragana","Sons e combinações","Ordem básica das frases","です e は","Frases afirmativas","Apresentação pessoal"],
["Partículas básicas"," は"," が"," を"," も","Função das partículas","Frases simples"],
["Partículas de localização e direção"," に"," で"," へ"," と"," から e まで","Aplicação em frases reais"],
["Verbos básicos","Verbos do cotidiano","Presente","Negativo","Passado","Passado negativo","Frases simples"],
["Adjetivos","い-adjetivos","な-adjetivos","Afirmativo","Negativo","Passado","Descrever pessoas, lugares e objetos"],
["Números e tempo","Números","Idade","Horas","Dias e meses","Datas","Contadores básicos"],
["Rotina e cotidiano","Escola","Casa","Comida","Hobbies","Família e amigos","Atividades e rotina pessoal"],
["Perguntas e respostas","だれ (quem)","なに (o quê)","どこ (onde)","いつ (quando)","なぜ / どうして (por quê)","どう / いくら / いくつ (como / quanto)"],
["Forma て","Formação da forma て","Reconhecimento","Uso básico","Sequência de ações","Verbos comuns na forma て","Construção de frases"],
["Forma て na prática","Pedidos","Permissão","Ações em andamento","Situações cotidianas","Respostas naturais","Prática contextualizada"],
["Forma ない","Formação da forma ない","Negação","Uso em frases","Proibição","Verbos do cotidiano","Prática de transformação"],
["Forma た","Formação da forma た","Passado informal","Experiências","Pequenas narrativas","Sequência temporal","Prática contextualizada"],
["Desejo e intenção","たい","ほしい","つもり","Planos","Convites","Falar de desejos e intenções"],
["Comparações e descrições","より","ほうが","いちばん","Comparações","Preferências","Descrever e comparar"],
["Construção de diálogos","Apresentação","Perguntas","Respostas","Rotina e gostos","Passado e planos","Pedidos e diálogos completos"],
["Teste de base","Apresentar-se","Perguntar e responder","Falar da rotina","Falar de gostos","Falar do passado e dos planos","Compreender frases básicas"],
["Katakana I","ア〜ソ","Leitura","Escrita","Pronúncia","Reconhecimento","Palavras em katakana"],
["Katakana II","タ〜ン","Dakuten","Handakuten","Combinações","Leitura","Escrita e reconhecimento"],
["Katakana III","ッ","Vogais longas","Combinações especiais","Palavras estrangeiras","Pronúncia","Leitura de palavras"],
["Katakana + japonês básico","Hiragana e katakana","Alternância entre sistemas","Leitura de palavras reais","Frases mistas","Vocabulário","Leitura integrada"],
["Introdução aos Kanji","O que são kanji","Radicais","Como memorizar","On'yomi","Kun'yomi","Primeiros kanji"],
["Kanji fundamentais","Números","Pessoas","Natureza","Dias","Tempo","Leitura e escrita inicial"],
["Kanji do cotidiano","Escola","Casa","Comida","Lugares","Objetos","Vocabulário com kanji"],
["Kanji + vocabulário","Aprender palavras completas","Leituras em contexto","Combinações frequentes","Escrita","Reconhecimento","Revisão de vocabulário"],
["Kanji em frases","Kanji e hiragana","Kanji e katakana","Partículas em frases","Leitura guiada","Compreensão","Construção de frases"],
["Kanji II","Novos caracteres","Leituras","Vocabulário","Radicais","Palavras compostas","Revisão"],
["Kanji III","Novos caracteres","Palavras compostas","Leituras em contexto","Escrita","Reconhecimento","Revisão"],
["Kanji IV","Reconhecimento visual","Leituras comuns","Vocabulário","Frases curtas","Leitura guiada","Revisão"],
["Kanji V","Escrita","Ordem dos traços","Leitura","Vocabulário","Palavras compostas","Aplicação"],
["Kanji VI","Kanji em textos","Vocabulário contextual","Leitura","Compreensão","Análise de frases","Revisão"],
["Kanji VII","Textos maiores","Identificação de kanji","Vocabulário contextual","Leitura fluida","Compreensão","Revisão"],
["Kanji VIII","Vocabulário intermediário","Palavras compostas","Leitura contextual","Reconhecimento","Frases complexas","Revisão"],
["Leitura com Kanji","Textos simples","Leitura sem tradução palavra por palavra","Pistas de contexto","Vocabulário","Compreensão","Interpretação"],
["Revisão geral","Kanji","Katakana","Hiragana","Gramática","Vocabulário","Leitura integrada"],
["Gramática intermediária","Revisão de estruturas","Partículas em contexto","Formas verbais","Conectores","Frases complexas","Aplicação"],
["Condicionais","たら","なら","と","Diferenças de uso","Exemplos contextualizados","Prática"],
["Potencial","Forma potencial","Capacidade","Possibilidade","Verbos do grupo 1","Verbos do grupo 2 e irregulares","Frases de habilidade"],
["Experiência","ことがある","Falar de experiências","Perguntas sobre experiências","Respostas","Marcadores temporais","Diálogos"],
["Dar e receber","あげる","くれる","もらう","Ponto de vista","Benefício e direção","Prática em contexto"],
["Frases relativas","Modificar substantivos","Ordem da oração","Informações adicionais","Identificar referente","Construir frases","Leitura"],
["Conectores e estruturas complexas","Conectores","Causa e consequência","Contraste","Explicações longas","Frases encadeadas","Produção"],
["Revisão","Gramática intermediária","Condicionais","Potencial","Experiência","Dar e receber","Frases relativas e conectores"],
["Leitura","Textos graduados","Identificar ideia principal","Encontrar detalhes","Inferir significado","Vocabulário contextual","Interpretação"],
["Escuta","Diálogos curtos","Identificar palavras-chave","Compreender intenção","Diferentes velocidades","Anotações","Compreensão auditiva"],
["Vocabulário cotidiano","Expressões comuns","Colocações","Contexto informal","Contexto formal","Sinônimos","Uso natural"],
["Interpretação","Pistas contextuais","Ideia principal","Detalhes","Inferência","Intenção do falante","Interpretação completa"],
["Escrita","Frases conectadas","Parágrafo curto","Diário","Coesão","Revisão de texto","Produção escrita"],
["Conversação","Iniciar conversa","Fazer perguntas","Responder naturalmente","Pedir esclarecimento","Manter diálogo","Simulações"],
["Conteúdo real","Trechos de anime","Vídeos curtos","Histórias","Identificar expressões","Compreender contexto","Análise crítica"],
["Imersão","Leitura","Escuta","Escrita","Vocabulário","Fala","Rotina de imersão"],
["Revisão final","Hiragana e katakana","Kanji","Gramática","Vocabulário","Leitura e escuta","Produção"],
["Teste final","Texto novo","Áudio novo","Diálogo","Escrita","Compreensão","Desafio integrado"]
];

const en = [
["Estrutura base + pronomes e presente simples","Fonética e sons essenciais","Pronomes pessoais","To be afirmativo","To be negativo e perguntas","Apresentação pessoal","Falar sobre si"],
["Presente simples: ações do cotidiano","Verbos da rotina","Afirmativas","Terceira pessoa: -s","Do e does","Negativas","Descrever hábitos"],
["Perguntas no presente e frequência","Do you...?","Does he...?","Always e usually","Sometimes e never","Diálogos de introdução","Perguntar sobre hábitos"],
["Passado simples: verbos regulares","Regra -ed","Pronúncia do -ed","Afirmativas","Didn't","Did you...?","Falar de ontem"],
["Passado simples: irregulares","Went e had","Saw e ate","Made e got","Memorizar verbos em contexto","Narrativas curtas","Contar acontecimentos"],
["Futuro: planos e intenções","Will","Going to","Decisões rápidas","Previsões","Planos planejados","Falar do futuro"],
["Rotina e casa","Cômodos e casa","Comida e mercado","Tecnologia e gadgets","Trabalho","Estudos","Descrever o ambiente"],
["As 7 perguntas mestras","Who e what","Where e when","Why e because","How","How much e how many","Diálogo com perguntas"],
["Passado contínuo","Was e were","Verbo + ing","Afirmativas","Negativas e perguntas","When e while","Descrever ações passadas"],
["Presente contínuo","Am, is e are + ing","Afirmativas","Negativas","Perguntas","Present Simple x Continuous","O que acontece agora"],
["Modais: habilidade e permissão","Can","Could","May","Might","Pedir favores e permissão","Falar de possibilidades"],
["Modais: obrigação e conselho","Must","Have to","Should","Regras","Dar conselhos","Expressar obrigação"],
["Comparações","Comparativos com -er","More ... than","Superlativos com -est","The most","Irregularidades comuns","Comparar coisas"],
["Adjetivos: descrição e emoções","Aparência e personalidade","Sentimentos","Adjetivos -ed","Adjetivos -ing","Tired e excited","Descrever situações"],
["Diálogos completos","Apresentação","Perguntas e respostas","Rotina e gostos","Passado","Planos e opiniões","Diálogo integrado"],
["Teste de base","Apresentação pessoal","Perguntas","Rotina e gostos","Passado","Futuro","Compreensão de instruções"],
["Conectores básicos","And e but","Because e so","Or","Although","Unir frases","Parágrafos coesos"],
["Phrasal verbs essenciais I","Wake up e get up","Turn on e turn off","Look for","Find out","Give up","Usar em contexto"],
["Phrasal verbs essenciais II","Hang out","Catch up","Run out of","Figure out","Drop off","Interações sociais"],
["Present Perfect","Have e has + particípio","Experiências","Already","Yet e just","Ever e never","Perguntar sobre experiências"],
["Present Perfect Continuous","Have been + ing","Duração","For e since","Ações que continuam","Perguntas e respostas","Falar de duração"],
["Past Perfect","Had + particípio","Ordem de acontecimentos","Before e after","Past Perfect x Simple Past","Narrativas","Contar histórias complexas"],
["Voz passiva","Objeto em foco","Be + particípio","Presente passivo","Passado passivo","Agente com by","Transformar frases"],
["Reported Speech","Relatar afirmações","Mudança de pronomes","Mudança de tempos","Say e tell","Perguntas indiretas","Relatar conversas"],
["Expressões idiomáticas","Piece of cake","Once in a blue moon","Cost an arm and a leg","Hit the nail on the head","Contexto e sentido figurado","Usar idioms"],
["Gerúndio vs infinitivo","Want to do","Enjoy doing","Verbos + infinitivo","Verbos + gerúndio","Mudança de significado","Escolher a estrutura"],
["Condicionais zero, first e second","Zero Conditional","First Conditional","Second Conditional","If clauses","Consequência","Comparar hipóteses"],
["Revisão geral da fase 2","Tempos verbais","Conectores","Phrasal verbs","Present Perfect","Condicionais","Conversas simuladas"],
["Terceira condicional e mistas","Third Conditional","If + Past Perfect","Would have + particípio","Mixed Conditionals","Passado e presente","Hipóteses"],
["Relative Clauses","Who","Which e that","Whose","Where","Defining clauses","Unir frases"],
["Gírias e expressões informais","Gonna","Wanna e gotta","Kinda e sort of","Lemme","Whatcha","Entender fala informal"],
["Opiniões, acordos e desacordos","From my point of view","I see your point","I totally agree","That's debatable","Discordar educadamente","Argumentar"],
["Trabalho, negócios e e-mails","Reuniões","Chamadas de vídeo","E-mails formais","E-mails informais","Networking","Comunicação profissional"],
["Viagem e situações de emergência","Aeroporto","Hotel","Alfândega","Problemas de voo","Saúde e farmácia","Resolver situações"],
["Leitura de artigos e notícias","Manchetes","Ideia principal","Vocabulário político","Vocabulário econômico","Contexto cultural","Leitura crítica"],
["Escuta ativa","Podcasts","Cenas rápidas","Sotaque americano","Sotaque britânico","Sotaque australiano","Anotações auditivas"],
["Redação avançada","Introdução","Desenvolvimento","Conclusão","Coesão","Diário e ensaios","Texto longo"],
["Debates e hipóteses complexas","Defender opinião","Evidências","Argumentos lógicos","Concessões","Hipóteses","Debate estruturado"],
["Humor, ironia e sarcasmo","Ironia","Sarcasmo","Trocadilhos","Referências culturais","Contexto","Interpretar humor"],
["Revisão e ajuste de rota","Pronúncia","Vocabulário específico","Gramática residual","Diagnóstico","Plano de revisão","Prática integrada"],
["Imersão em séries e filmes","Compreender cenas","Contexto visual","Expressões naturais","Acompanhar diálogos","Anotar dúvidas","Assistir sem legendas"],
["Leitura de livros","Escolher livro adequado","Leitura por contexto","Vocabulário necessário","Ritmo de leitura","Resumo","Leitura extensiva"],
["Podcasts nativos avançados","Conversas reais","Entrevistas longas","Debates","Identificar argumentos","Sotaques","Compreensão avançada"],
["Pensar em inglês","Monólogo interno","Narrar o dia","Descrever ambiente","Planejar em inglês","Evitar tradução mental","Fluidez mental"],
["Shadowing","Escolher trecho curto","Ouvir e acompanhar","Entonação","Ritmo","Linking sounds","Repetição guiada"],
["Conversação com nativos ou profissionais","Iniciar conversa","Manter fluidez","Pedir esclarecimento","Reformular","Responder espontaneamente","Conversação"],
["Escrita criativa e diário","Reflexões","Resenhas","Crônicas","Voz narrativa","Revisão","Produção criativa"],
["Resolução de problemas complexos","Pesquisar tutoriais","Ler receitas","Entender manuais","Resolver tarefas técnicas","Vocabulário específico","Explicar soluções"],
["Música e cultura pop","Expressões em músicas","Gírias geracionais","Referências culturais","Sentido figurado","Contexto","Análise cultural"],
["Imersão total","Configurar ambientes em inglês","Consumo de conteúdo","Leitura","Escuta","Escrita","Rotina de imersão"],
["Revisão final completa","Gramática aplicada","Compreensão auditiva","Conversação espontânea","Vocabulário","Leitura","Diagnóstico final"],
["Teste final","Palestra ou debate inédito","Compreensão sem legendas","Artigo complexo","Entrevista","Respostas inesperadas","Desafio integrado"]
];

const phases = (lang, n) => {
  if (lang === "ja") return n <= 16 ? "Fase 1 — Conseguir se virar" : n <= 20 ? "Fase 2 — Katakana" : n <= 34 ? "Fase 3 — Kanji" : "Fase 4 — Entender japonês";
  return n <= 16 ? "Fase 1 — Descomplicando a comunicação" : n <= 28 ? "Fase 2 — Fluidez funcional" : n <= 40 ? "Fase 3 — Autonomia e naturalidade" : "Fase 4 — Imersão total";
};

function build(lang, rows) {
  return rows.map((row, i) => ({
    number: i + 1,
    title: row[0],
    phase: phases(lang, i + 1),
    goal: `Dominar ${row[0].toLowerCase()} e aplicar o conteúdo em situações reais.`,
    days: row.slice(1).map((topic, d) => ({
      day: d + 1,
      title: topic.trim(),
      explanation: lang === "ja"
        ? `Nesta aula você vai estudar ${topic.trim().toLowerCase()} dentro do tema “${row[0]}”. Observe os exemplos, identifique a estrutura, pratique a leitura e tente criar frases próprias.`
        : `Nesta aula você vai estudar ${topic.trim().toLowerCase()} dentro do tema “${row[0]}”. Observe a estrutura, compare exemplos, pratique e produza frases próprias.`,
      examples: lang === "ja"
        ? ["わたしは がくせいです。 — Eu sou estudante.", "これは ほんです。 — Isto é um livro."]
        : ["I am learning English.", "She studies every day."],
      keyPoints: [topic.trim(), row[0], "Aplicação em frases", "Reconhecimento em contexto"]
    }))
  }));
}
export const CURRICULA = { ja: build("ja", jp), en: build("en", en) };
export const LANGUAGE_NAMES = { ja: "Japonês", en: "Inglês" };
