export interface ThemeConfig {
  id: number
  title: string
  description: string
  author: string
  tags: string[]
  coverImage?: string
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
    coverImage: "/capa-eternos.jpeg",
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
    coverImage: "/o-silmarillion-capa.jpg",
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
    coverImage: "/discworld-capa.jpg",
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
    coverImage: "/sandman-capa.webp",
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
    coverImage: "/cthulhu-capa.webp",
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
        question: "Qual é o nome do 'Deus Cego e Idiota' que reside no centro do universo?",
        alternatives: ["Cthulhu", "Yog-Sothoth", "Azathoth", "Hastur"],
        correct: 2,
      },
      {
        question: "Qual Deusa Exterior é conhecida como 'A Cabra Negra dos Bosques com Milhares de Cria'?",
        alternatives: ["Yig", "Shub-Niggurath", "Bast", "Ghatanothoa"],
        correct: 1,
      },
      {
        question:
          "Qual é a cidade portuária no Plano Onírico, conhecida por seus mercados, em 'A Busca Onírica de Kadath'?",
        alternatives: ["Ulthar", "Celephaïs", "Dylath-Leen", "Arkham"],
        correct: 1,
      },
      {
        question:
          "Em qual conto Lovecraft introduziu o Grande Antigo Cthulhu e a cidade submersa de R'lyeh?",
        alternatives: ["Nas Montanhas da Loucura", "O Chamado de Cthulhu", "A Sombra Sobre Innsmouth", "O Horror de Dunwich"],
        correct: 1,
      },
      {
        question:
          "Qual Deusa Exterior é associada à chave e ao portal, existindo simultaneamente em todos os tempos e espaços?",
        alternatives: ["Azathoth", "Yog-Sothoth", "Cthulhu", "Dagon"],
        correct: 1,
      },
    ],
  },
  {
    id: 5,
    title: "Stephen King",
    description: "O Mestre da Literatura de Horror contemporâneo",
    author: "Stephen King",
    coverImage: "/stephen-king-capa.jpg",
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
        question:
          "(Carrie) Qual é o poder especial de Carrie White que desencadeia os eventos centrais da história?",
        alternatives: [
          "Telepatia — ela lê mentes.",
          "Telecinésia — ela move objetos com a mente.",
          "Invisibilidade — ela some em momentos de raiva.",
          "Viagem no tempo — ela revive eventos passados.",
          "Controle do clima — ela manipula tempestades.",
        ],
        correct: 1,
      },
      {
        question:
          "(O Nevoeiro) Por que os personagens decidem queimar o carro antes de fugir da loja de conveniência?",
        alternatives: [
          "Para sinalizar para reforços da polícia.",
          "Para evitar que o carro exploda sozinho com os monstros se aproximando.",
          "Para eliminar o cheiro e não atrair os monstros.",
          "Para iluminar a saída através da neblina.",
          "Para evitar que monstros usem o carro como esconderijo.",
        ],
        correct: 2,
      },
      {
        question: "(It – A Coisa) Qual é o verdadeiro nome do palhaço maligno que aterroriza Derry?",
        alternatives: ["Pennywise.", "Bob Gray.", "Derry the Clown.", "Georgie Denbrough.", "It — ele não tem outro nome."],
        correct: 0,
      },
      {
        question:
          "(O Iluminado) No hotel Overlook, qual é o don (habilidade psíquica) especial do menino Danny Torrance?",
        alternatives: [
          "Clarividência — ver acontecimentos futuros.",
          "Teletransporte — mover-se de um lugar a outro instantaneamente.",
          "“O Brilho” — perceber memórias e presenças de espíritos.",
          "Invisibilidade — tornar-se invisível às entidades do hotel.",
          "Comunicação com animais — falar com os espíritos do hotel.",
        ],
        correct: 2,
      },
      {
        question:
          "(A Torre Negra) Qual é a missão principal do pistoleiro Roland Deschain?",
        alternatives: [
          "Destruir um império corrupto.",
          "Encontrar e alcançar a misteriosa Torre Negra, que sustenta todos os universos.",
          "Salvar a humanidade de uma praga sobrenatural.",
          "Impedir a ascensão de um mago maligno chamado Randall Flagg.",
          "Derrotar monstros que ameaçam seu próprio mundo.",
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 6,
    title: "Elric",
    description: "O Guerreiro Eterno e sua espada maldita",
    author: "Michael Moorcock",
    coverImage: "/elric-capa.png",
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
    coverImage: "/conan-capa.jpg",
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
        question: "Qual foi o primeiro ator a interpretar Conan nos cinemas?",
        alternatives: ["Arnold Schwarzenegger", "Jason Momoa", "Dolph Lundgren", "Lou Ferrigno", "Kevin Sorbo"],
        correct: 0,
      },
      {
        question: "Quem era o Deus de Conan?",
        alternatives: ["Mitras", "Crom", "Set", "Ishtar", "Odin"],
        correct: 1,
      },
      {
        question: "Quem é o autor de Conan?",
        alternatives: ["J.R.R. Tolkien", "Robert E. Howard", "Michael Moorcock", "Edgar Rice Burroughs", "Fritz Leiber"],
        correct: 1,
      },
      {
        question: "Quantos livros de Conan foram escritos pelo autor?",
        alternatives: ["1", "2", "3", "5", "8"],
        correct: 2,
      },
      {
        question: "Qual a origem de Conan?",
        alternatives: ["Aquilônia", "Cimmeria (Siméria)", "Asgard", "Kush", "Nemédia"],
        correct: 1,
      },
    ],
  },
  {
    id: 8,
    title: "Duna",
    description: "Um universo de política, religião e controle de recursos",
    author: "Frank Herbert",
    coverImage: "/duna-capa.jpg",
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
        question:
          "(Duna) Qual é a substância mais valiosa do universo de Duna, essencial para viagens espaciais e prolongar a vida?",
        alternatives: ["Água da Vida.", "Especiaria (Melange).", "Slep.", "Sapho.", "Spice gas."],
        correct: 1,
      },
      {
        question:
          "(Duna) Quem é a ordem secreta de mulheres altamente treinadas, com memória ancestral e controle corporal?",
        alternatives: ["Os Fremen.", "A Casa Harkonnen.", "A Irmandade Bene Gesserit.", "A Guilda Espaço-Tempo.", "Os Sardaukar."],
        correct: 2,
      },
      {
        question:
          "(Duna) Qual título aristocrático ergue a família principal de protagonistas no começo da história, governando Arrakis?",
        alternatives: ["Duque.", "Barão.", "Conde.", "Visconde.", "Príncipe."],
        correct: 0,
      },
      {
        question:
          "(Duna) Qual criatura gigantesca vital para o ecossistema de Arrakis produz a especiaria?",
        alternatives: ["O Verme-da-Areia (Shai-Hulud).", "O Grue.", "As Ostras de Melange.", "O Sand-Caterpillar.", "A Larva Spice."],
        correct: 0,
      },
      {
        question:
          "(Duna) Qual é o nome profetizado pelas Bene Gesserit para o ser capaz de ver passado e futuro?",
        alternatives: ["Kwisatz Haderach.", "Muad’Dib.", "Lisan al Gaib.", "A Voz do Deserto.", "Usul."],
        correct: 0,
      },
    ],
  },
  {
    id: 9,
    title: "Alice, Dorothy e Wendy",
    description: "As Heroínas que adentraram Mundos Extraordinários",
    author: "Carroll, Bayn e Barrie",
    coverImage: "/alice-dorothy-wendy-capa.jpg",
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
