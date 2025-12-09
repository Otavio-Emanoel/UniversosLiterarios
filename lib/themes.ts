export interface ThemeConfig {
  id: number
  title: string
  description: string
  author: string
  tags: string[]
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }
  questions: Question[]
}

export interface Question {
  question: string
  alternatives: string[]
  correct: number
}

export const themes: ThemeConfig[] = [
  {
    id: 0,
    title: "Os Eternos",
    description: "A verdade sobre a criação e os guardiões cósmicos",
    author: "Jack Kirby",
    tags: ["Ficção Científica", "Mitologia"],
    colors: {
      primary: "#FFD700",
      secondary: "#FFA500",
      accent: "#FF6B6B",
      background: "#1a0f2e",
      text: "#ffffff",
    },
    questions: [
      {
        question: "Os Eternos foram criados por qual raça?",
        alternatives: ["Os Celestiais", "Os Deuses Antigos", "Os Skrulls", "Os Krees", "Os Vingadores"],
        correct: 0,
      },
      {
        question: "Qual é o nome do líder dos Eternos?",
        alternatives: ["Ajax", "Ikaris", "Thena", "Makkari", "Druig"],
        correct: 1,
      },
      {
        question: "Os Eternos têm qual poder especial?",
        alternatives: [
          "Teletransporte",
          "Imortalidade e manipulação de energia",
          "Viagem no tempo",
          "Leitura de mentes",
          "Super força apenas",
        ],
        correct: 1,
      },
      {
        question: "Qual grupo antagonista dos Eternos?",
        alternatives: ["Deviantes", "Titãs", "Gnomos", "Druidas", "Espectros"],
        correct: 0,
      },
      {
        question: "Em qual era Os Eternos foi publicado?",
        alternatives: ["Anos 50", "Anos 60", "Anos 70", "Anos 80", "Anos 90"],
        correct: 2,
      },
    ],
  },
  {
    id: 1,
    title: "O Silmarillion",
    description: "A épica mitologia da Terra-média antes do Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    tags: ["Fantasia", "Mitologia Épica"],
    colors: {
      primary: "#2E7D32",
      secondary: "#81C784",
      accent: "#558B2F",
      background: "#0d2818",
      text: "#e8f5e9",
    },
    questions: [
      {
        question: "Quem criou o Silmarillion?",
        alternatives: ["Ilúvatar", "Morgoth", "Elbereth", "Varda", "Manwë"],
        correct: 0,
      },
      {
        question: "Qual é a joia mais importante da história?",
        alternatives: ["O Anel Único", "Os Silmarils", "A Coroa de Gondor", "O Arkenstone", "Os Anéis de Poder"],
        correct: 1,
      },
      {
        question: "Quem é o principal antagonista?",
        alternatives: ["Sauron", "Morgoth", "Glaurung", "Balrog", "Dol Guldur"],
        correct: 1,
      },
      {
        question: "Em qual idade acontece a maioria dos eventos?",
        alternatives: ["1ª Idade", "2ª Idade", "3ª Idade", "4ª Idade", "Idades sem conta"],
        correct: 0,
      },
      {
        question: "Quem escreve o prólogo para O Silmarillion?",
        alternatives: ["Christopher Tolkien", "Frodo Bolseiro", "Bilbo Bolseiro", "Gandalf", "Elrond"],
        correct: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Discworld",
    description: "Um mundo de fantasia cômico e absurdo em um disco mágico",
    author: "Terry Pratchett",
    tags: ["Comédia", "Fantasia", "Aventura"],
    colors: {
      primary: "#8B4513",
      secondary: "#CD853F",
      accent: "#FFD700",
      background: "#1a1410",
      text: "#f5deb3",
    },
    questions: [
      {
        question: "Em que animal Discworld repousa?",
        alternatives: ["Elefante", "Tartaruga", "Cobra", "Dragão", "Baleia"],
        correct: 1,
      },
      {
        question: "Qual é a capital de Discworld?",
        alternatives: ["Anhk-Morpork", "Lancre", "Überwald", "Genua", "Perdição"],
        correct: 0,
      },
      {
        question: "Quem é a Morte em Discworld?",
        alternatives: ["Um personagem falante", "Uma abstração", "Um Deus", "Uma máquina", "Um fantasma"],
        correct: 0,
      },
      {
        question: "Qual é a profissão de Rincewind?",
        alternatives: ["Guerreiro", "Mago", "Rei", "Ladino", "Monge"],
        correct: 1,
      },
      {
        question: "Quantos livros de Discworld foram publicados?",
        alternatives: ["15", "25", "41", "50", "60"],
        correct: 2,
      },
    ],
  },
  {
    id: 3,
    title: "Sandman",
    description: "Os Perpétuos: Sete seres antigos que personificam conceitos universais",
    author: "Neil Gaiman",
    tags: ["Fantasia Sombria", "Sobrenatural"],
    colors: {
      primary: "#4A148C",
      secondary: "#7E57C2",
      accent: "#C51162",
      background: "#0a0a0a",
      text: "#e1bee7",
    },
    questions: [
      {
        question: "Qual é o verdadeiro nome do Sandman?",
        alternatives: ["Morpheus", "Dream", "Nosso Senhor dos Sonhos", "Todos acima", "Nenhum deles"],
        correct: 3,
      },
      {
        question: "Quantos dos Perpétuos existem?",
        alternatives: ["5", "7", "9", "11", "13"],
        correct: 1,
      },
      {
        question: "Qual perpétuo personifica a morte?",
        alternatives: ["Sonho", "Destruição", "Morte", "Desespero", "Destino"],
        correct: 2,
      },
      {
        question: "Em qual série Sandman aparece?",
        alternatives: ["Sandman: Lost", "The Sandman", "Dreaming Days", "Os Perpétuos", "Príncipe das Mentiras"],
        correct: 1,
      },
      {
        question: "Qual é a dimensão onde Dream reina?",
        alternatives: ["O Realm Etéreo", "O Entremeio", "O Sonhar", "A Dimensão Onírica", "O Domínio de Morpheus"],
        correct: 2,
      },
    ],
  },
  {
    id: 4,
    title: "Os Mitos de Cthulhu",
    description: "Horrores cósmicos além da compreensão humana",
    author: "H.P. Lovecraft",
    tags: ["Horror Cósmico", "Mistério"],
    colors: {
      primary: "#0D47A1",
      secondary: "#1A237E",
      accent: "#00BCD4",
      background: "#0a0e27",
      text: "#b3e5fc",
    },
    questions: [
      {
        question: "Quem ou o que é Cthulhu?",
        alternatives: [
          "Um Deus maior",
          "Uma entidade cósmica",
          "Um alienígena",
          "Uma criatura do abismo",
          "Todas as opções acima",
        ],
        correct: 4,
      },
      {
        question: "Onde Cthulhu dorme?",
        alternatives: [
          "Na Montanha do Louco",
          "Na Cidade R'lyeh",
          "No Necronomicon",
          "No Vácuo do Espaço",
          "Na Dimensão Perdida",
        ],
        correct: 1,
      },
      {
        question: "O que é o Necronomicon?",
        alternatives: [
          "Um grimório mágico",
          "Um livro de conhecimento proibido",
          "Uma cidade antiga",
          "Uma entidade cósmica",
          "Uma civilização perdida",
        ],
        correct: 1,
      },
      {
        question: "Qual é o efeito de ver diretamente uma entidade de Lovecraft?",
        alternatives: ["Morte instantânea", "Mutação", "Loucura", "Escravidão mental", "Imortalidade forçada"],
        correct: 2,
      },
      {
        question: "Em qual época Lovecraft começou a publicar seus contos?",
        alternatives: ["Anos 1900", "Anos 1910", "Anos 1920", "Anos 1930", "Anos 1940"],
        correct: 2,
      },
    ],
  },
  {
    id: 5,
    title: "Stephen King",
    description: "O Mestre da Literatura de Horror contemporâneo",
    author: "Stephen King",
    tags: ["Horror", "Thriller Psicológico"],
    colors: {
      primary: "#8B0000",
      secondary: "#DC143C",
      accent: "#FF69B4",
      background: "#1a0000",
      text: "#ffe4e1",
    },
    questions: [
      {
        question: "Qual é a obra mais famosa de Stephen King?",
        alternatives: ["It", "The Shining", "Carrie", "O Iluminado", "Misery"],
        correct: 0,
      },
      {
        question: "Em qual livro um ator fica isolado em um hotel no inverno?",
        alternatives: ["Carrie", "The Shining", "It", "Misery", "The Stand"],
        correct: 1,
      },
      {
        question: "Qual cidade fictícia aparece frequentemente em King's works?",
        alternatives: ["Derry", "Castle Rock", "Jerusalem's Lot", "Todas acima", "Nenhuma delas"],
        correct: 3,
      },
      {
        question: "Quantos livros Stephen King publicou aproximadamente?",
        alternatives: ["25", "40", "60", "80", "100+"],
        correct: 4,
      },
      {
        question: "Qual é o pseudônimo usado por Stephen King?",
        alternatives: ["Stanley Kubrick", "Richard Bachman", "James Herbert", "Dean Koontz", "Clive Barker"],
        correct: 1,
      },
    ],
  },
  {
    id: 6,
    title: "Elric",
    description: "O Guerreiro Eterno e sua espada maldita",
    author: "Michael Moorcock",
    tags: ["Ficção Científica", "Fantasia Épica"],
    colors: {
      primary: "#D81B60",
      secondary: "#F06292",
      accent: "#C2185B",
      background: "#280d2b",
      text: "#f8bbd0",
    },
    questions: [
      {
        question: "Qual é o nome da espada de Elric?",
        alternatives: ["Stormbringer", "Excalibur", "Mystère", "Murasama", "Anduril"],
        correct: 0,
      },
      {
        question: "Qual cor é Elric naturalmente?",
        alternatives: ["Negro", "Branco", "Dourado", "Prateado", "Azul"],
        correct: 1,
      },
      {
        question: "De qual império Elric é imperador?",
        alternatives: ["Melniboné", "Karmareth", "Vilmirian", "Mabden", "Calimshan"],
        correct: 0,
      },
      {
        question: "O que Stormbringer alimenta?",
        alternatives: ["Magia", "Sangue", "Almas", "Sonhos", "Escuridão"],
        correct: 2,
      },
      {
        question: "Qual é a maldição de Elric?",
        alternatives: [
          "Imortalidade",
          "Fraqueza física e dependência de drogas mágicas",
          "Loucura",
          "Cegueira",
          "Perda de memória",
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 7,
    title: "Conan",
    description: "O Bárbaro das Terras Selvagens e seus esplêndidos feitos",
    author: "Robert E. Howard",
    tags: ["Ficção Heroica", "Aventura"],
    colors: {
      primary: "#B8860B",
      secondary: "#DAA520",
      accent: "#FF8C00",
      background: "#2d1f0d",
      text: "#ffeaa7",
    },
    questions: [
      {
        question: "De qual região Conan é originário?",
        alternatives: ["Cimmeria", "Aquilônia", "Stygia", "Kush", "Khitai"],
        correct: 0,
      },
      {
        question: "Qual é a principal profissão de Conan?",
        alternatives: ["Rei", "Mercenário/Guerreiro Aventureiro", "Ladino", "Sacerdote", "Feiticeiro"],
        correct: 1,
      },
      {
        question: "Em qual era a história de Conan se passa?",
        alternatives: ["Era Hiboriana", "Era Clássica", "Idade do Bronze", "Era Escura", "Era dos Deuses"],
        correct: 0,
      },
      {
        question: "Qual é a arma favorita de Conan?",
        alternatives: ["Arco", "Lança", "Espada", "Machado", "Besta"],
        correct: 2,
      },
      {
        question: "Quantas histórias de Conan foram publicadas originalmente?",
        alternatives: ["12", "23", "45", "67", "89"],
        correct: 1,
      },
    ],
  },
  {
    id: 8,
    title: "Duna",
    description: "Um universo de política, religião e controle de recursos",
    author: "Frank Herbert",
    tags: ["Ficção Científica Épica", "Política"],
    colors: {
      primary: "#D4A574",
      secondary: "#8B7355",
      accent: "#FFA500",
      background: "#3a2f28",
      text: "#f4d5b9",
    },
    questions: [
      {
        question: "Qual é o planeta principal em Duna?",
        alternatives: ["Caladan", "Duna", "Giedi Prime", "Kaitain", "Carthag"],
        correct: 1,
      },
      {
        question: "O que é a Melange?",
        alternatives: [
          "Uma especiaria",
          "Uma droga que aumenta a longevidade e percepção",
          "Um recurso precioso",
          "Todas acima",
          "Apenas A e C",
        ],
        correct: 3,
      },
      {
        question: "Qual é o nome do protagonista principal?",
        alternatives: ["Paul Atreides", "Leto Atreides", "Feyd-Rautha", "Baron Harkonnen", "Thufir Hawat"],
        correct: 0,
      },
      {
        question: "Qual é a Casa Nobre rival dos Atreides?",
        alternatives: ["Casa Corrino", "Casa Harkonnen", "Casa Ecaz", "Casa Moritani", "Casa Thorium"],
        correct: 1,
      },
      {
        question: "Em qual ano Frank Herbert publicou Duna?",
        alternatives: ["1955", "1960", "1965", "1970", "1975"],
        correct: 2,
      },
    ],
  },
  {
    id: 9,
    title: "Alice, Dorothy e Wendy",
    description: "As Heroínas que adentraram Mundos Extraordinários",
    author: "Carroll, Bayn e Barrie",
    tags: ["Clássicos da Literatura", "Aventura Fantástica"],
    colors: {
      primary: "#E91E63",
      secondary: "#FF69B4",
      accent: "#FF1493",
      background: "#2d1b2e",
      text: "#ffc0cb",
    },
    questions: [
      {
        question: "Qual menina caiu em uma toca de coelho?",
        alternatives: ["Alice", "Dorothy", "Wendy", "Emilie", "Lucy"],
        correct: 0,
      },
      {
        question: "Qual livro Dorothy viajou para uma terra mágica?",
        alternatives: [
          "Alice no País das Maravilhas",
          "O Mágico de Oz",
          "Peter Pan",
          "A Rainha de Narnia",
          "As Crônicas de Nárnia",
        ],
        correct: 1,
      },
      {
        question: "Para onde Wendy foi com Peter Pan?",
        alternatives: ["País das Maravilhas", "Oz", "Terra do Nunca", "Nárnia", "Wonderland"],
        correct: 2,
      },
      {
        question: "Qual autor criou Alice?",
        alternatives: ["L. Frank Baum", "J.M. Barrie", "Lewis Carroll", "C.S. Lewis", "Charles Dickens"],
        correct: 2,
      },
      {
        question: "Qual é o nome do gato de Alice?",
        alternatives: ["Cheshire", "Dinah", "Puss", "Tom", "Figaro"],
        correct: 1,
      },
    ],
  },
]
