const questions = [
  {
    question: 'O que você prefere fazer no seu tempo livre?',
    options: [
      { text: 'Ler livros ou estudar algo novo.', value: 'a' },
      { text: 'Fazer atividades ao ar livre ou esportes.', value: 'b' },
      {
        text: 'Criar coisas, como desenhar, escrever ou cozinhar.',
        value: 'c',
      },
      { text: 'Ajudar outras pessoas ou resolver problemas.', value: 'd' },
    ],
  },
  {
    question: 'Qual dessas matérias você mais gosta?',
    options: [
      { text: 'Matemática ou Ciências.', value: 'a' },
      { text: 'Educação Física ou Biologia.', value: 'b' },
      { text: 'Artes ou Literatura.', value: 'c' },
      { text: 'História ou Filosofia.', value: 'd' },
    ],
  },
  {
    question: 'Como você se descreveria?',
    options: [
      { text: 'Analítico e lógico.', value: 'a' },
      { text: 'Prático e ativo.', value: 'b' },
      { text: 'Criativo e imaginativo.', value: 'c' },
      { text: 'Empático e comunicativo.', value: 'd' },
    ],
  },
  {
    question: 'Qual ambiente de trabalho você prefere?',
    options: [
      { text: 'Um escritório ou laboratório.', value: 'a' },
      { text: 'Ao ar livre ou em movimento.', value: 'b' },
      { text: 'Um estúdio ou espaço criativo.', value: 'c' },
      { text: 'Um local onde possa interagir com pessoas.', value: 'd' },
    ],
  },
  {
    question: 'Qual dessas habilidades você tem mais facilidade?',
    options: [
      { text: 'Resolver problemas complexos.', value: 'a' },
      { text: 'Coordenar atividades físicas ou práticas.', value: 'b' },
      { text: 'Expressar ideias de forma criativa.', value: 'c' },
      { text: 'Mediar conflitos ou ajudar os outros.', value: 'd' },
    ],
  },
  {
    question: 'O que você valoriza mais em um trabalho?',
    options: [
      { text: 'Desafios intelectuais.', value: 'a' },
      { text: 'Liberdade de movimento e ação.', value: 'b' },
      { text: 'Liberdade para expressar sua criatividade.', value: 'c' },
      {
        text: 'Oportunidade de fazer a diferença na vida das pessoas.',
        value: 'd',
      },
    ],
  },
  {
    question: 'Qual dessas áreas você acha mais interessante?',
    options: [
      { text: 'Tecnologia ou Engenharia.', value: 'a' },
      { text: 'Saúde ou Esportes.', value: 'b' },
      { text: 'Artes ou Design.', value: 'c' },
      { text: 'Educação ou Serviço Social.', value: 'd' },
    ],
  },
  {
    question: 'Como você lida com desafios?',
    options: [
      { text: 'Analiso todas as possibilidades antes de agir.', value: 'a' },
      { text: 'Enfrento de forma prática e direta.', value: 'b' },
      { text: 'Penso em soluções inovadoras e diferentes.', value: 'c' },
      { text: 'Busco ajuda ou colaboração para resolver.', value: 'd' },
    ],
  },
  {
    question: 'Qual dessas atividades você faria com prazer?',
    options: [
      { text: 'Desenvolver um software ou resolver equações.', value: 'a' },
      { text: 'Praticar um esporte ou cuidar de animais.', value: 'b' },
      { text: 'Pintar um quadro ou escrever um poema.', value: 'c' },
      { text: 'Dar aulas ou orientar alguém.', value: 'd' },
    ],
  },
  {
    question: 'O que você acha mais gratificante?',
    options: [
      { text: 'Resolver um problema difícil.', value: 'a' },
      { text: 'Concluir uma tarefa física ou prática.', value: 'b' },
      { text: 'Ver sua criação ganhar vida.', value: 'c' },
      { text: 'Saber que ajudou alguém.', value: 'd' },
    ],
  },
  {
    question: 'Qual desses filmes ou livros você preferiria?',
    options: [
      { text: 'Um documentário sobre ciência ou tecnologia.', value: 'a' },
      { text: 'Uma história de aventura ou esportes.', value: 'b' },
      { text: 'Um romance ou obra de ficção.', value: 'c' },
      { text: 'Um drama humano ou história inspiradora.', value: 'd' },
    ],
  },
  {
    question: 'Como você toma decisões?',
    options: [
      { text: 'Baseado em dados e fatos.', value: 'a' },
      { text: 'Baseado na intuição e experiência prática.', value: 'b' },
      { text: 'Baseado na criatividade e inspiração.', value: 'c' },
      { text: 'Baseado no impacto nas pessoas ao redor.', value: 'd' },
    ],
  },
  {
    question: 'Qual desses gadgets você acha mais útil?',
    options: [
      { text: 'Um computador potente.', value: 'a' },
      { text: 'Um smartwatch ou equipamento esportivo.', value: 'b' },
      { text: 'Uma câmera fotográfica ou tablet para desenho.', value: 'c' },
      { text: 'Um aplicativo de comunicação ou organização.', value: 'd' },
    ],
  },
  {
    question: 'O que você gosta de fazer em grupo?',
    options: [
      { text: 'Discutir ideias ou projetos.', value: 'a' },
      { text: 'Participar de atividades físicas ou competições.', value: 'b' },
      { text: 'Colaborar em projetos criativos.', value: 'c' },
      { text: 'Ajudar ou orientar os outros.', value: 'd' },
    ],
  },
  {
    question: 'Qual desses valores é mais importante para você?',
    options: [
      { text: 'Conhecimento e inovação.', value: 'a' },
      { text: 'Saúde e vitalidade.', value: 'b' },
      { text: 'Expressão e originalidade.', value: 'c' },
      { text: 'Solidariedade e justiça.', value: 'd' },
    ],
  },
]

const profiles = {
  a: {
    emoji: '🔬',
    area: 'Ciências Exatas, Tecnologia & Engenharia',
    description:
      'Você tem um perfil analítico e orientado a dados. Gosta de desafios lógicos, precisa de resultados mensuráveis e se destaca em ambientes que exigem raciocínio sistemático e inovação técnica.',
    professions: [
      { icon: '💻', name: 'Desenvolvedor de Software' },
      { icon: '🤖', name: 'Engenheiro de IA / ML' },
      { icon: '📊', name: 'Cientista de Dados' },
      { icon: '⚙️', name: 'Engenheiro Civil' },
      { icon: '🔧', name: 'Engenheiro Mecânico' },
      { icon: '⚡', name: 'Engenheiro Elétrico' },
      { icon: '🧪', name: 'Químico / Pesquisador' },
      { icon: '🛡️', name: 'Especialista em Cibersegurança' },
      { icon: '📡', name: 'Engenheiro de Telecomunicações' },
      { icon: '🌐', name: 'Arquiteto de Sistemas' },
      { icon: '🧬', name: 'Biotecnólogo' },
      { icon: '🚀', name: 'Engenheiro Aeroespacial' },
    ],
  },
  b: {
    emoji: '🏃',
    area: 'Saúde, Esportes & Atividades Práticas',
    description:
      'Você é uma pessoa prática e dinâmica, que aprecia o movimento, a ação e o cuidado com o corpo. Trabalha bem em situações reais e concretas, e se realiza quando vê resultados tangíveis e imediatos.',
    professions: [
      { icon: '🩺', name: 'Médico' },
      { icon: '💊', name: 'Farmacêutico' },
      { icon: '🦷', name: 'Odontólogo' },
      { icon: '🤸', name: 'Educador Físico' },
      { icon: '🏋️', name: 'Personal Trainer' },
      { icon: '🧘', name: 'Fisioterapeuta' },
      { icon: '🌿', name: 'Nutricionista' },
      { icon: '🐾', name: 'Veterinário' },
      { icon: '🚑', name: 'Enfermeiro / Paramédico' },
      { icon: '🧠', name: 'Neurologista' },
      { icon: '🏊', name: 'Treinador Esportivo' },
      { icon: '🌾', name: 'Agrônomo' },
    ],
  },
  c: {
    emoji: '🎨',
    area: 'Artes, Design & Comunicação',
    description:
      'Você possui um olhar sensível e criativo para o mundo. Tem facilidade em transformar ideias em experiências, seja por meio de imagens, palavras, sons ou projetos visuais. Sua originalidade é seu maior diferencial.',
    professions: [
      { icon: '🎨', name: 'Designer Gráfico / UX' },
      { icon: '📸', name: 'Fotógrafo / Diretor de Arte' },
      { icon: '✍️', name: 'Escritor / Copywriter' },
      { icon: '🎬', name: 'Cineasta / Editor de Vídeo' },
      { icon: '🎵', name: 'Músico / Produtor Musical' },
      { icon: '🏛️', name: 'Arquiteto' },
      { icon: '👗', name: 'Designer de Moda' },
      { icon: '📱', name: 'Designer de Produto Digital' },
      { icon: '🎭', name: 'Ator / Diretor Teatral' },
      { icon: '🖊️', name: 'Jornalista / Repórter' },
      { icon: '📺', name: 'Apresentador / Creator' },
      { icon: '🌆', name: 'Designer de Interiores' },
    ],
  },
  d: {
    emoji: '🤝',
    area: 'Ciências Humanas, Educação & Serviço Social',
    description:
      'Você é movido pelas pessoas. Tem empatia natural, habilidade para comunicar e uma forte vocação para contribuir com o bem-estar coletivo. Se realiza em ambientes onde pode escutar, orientar e transformar vidas.',
    professions: [
      { icon: '🎓', name: 'Professor / Educador' },
      { icon: '🧭', name: 'Orientador Educacional' },
      { icon: '🧑‍⚖️', name: 'Advogado / Juiz' },
      { icon: '🧑‍💼', name: 'Administrador / Gestor de RH' },
      { icon: '💬', name: 'Psicólogo / Terapeuta' },
      { icon: '🌍', name: 'Assistente Social' },
      { icon: '🏛️', name: 'Cientista Político / Diplomata' },
      { icon: '📣', name: 'Relações Públicas' },
      { icon: '🕊️', name: 'Mediador de Conflitos' },
      { icon: '💡', name: 'Coach / Mentor de Carreira' },
      { icon: '📚', name: 'Bibliotecário / Curador' },
      { icon: '🌱', name: 'Gestor de ONGs / Terceiro Setor' },
    ],
  },
}

// ── DOM refs ──
const questionContainer = document.getElementById('questionContainer')
const nextBtn = document.getElementById('nextBtn')
const resultDiv = document.getElementById('result')
const progressFill = document.getElementById('progressFill')
const progressLabel = document.getElementById('progressLabel')

let currentIndex = 0
let answers = { a: 0, b: 0, c: 0, d: 0 }

// ── Render question ──
function showQuestion() {
  const q = questions[currentIndex]

  // update progress
  const pct = (currentIndex / questions.length) * 100
  progressFill.style.width = pct + '%'
  progressLabel.textContent = `${currentIndex} / ${questions.length}`

  questionContainer.innerHTML = `
    <p class="question-num">Pergunta ${currentIndex + 1} de ${questions.length}</p>
    <p class="question-text">${q.question}</p>
    <ul class="options-list">
      ${q.options
        .map(
          (opt, i) => `
        <li class="option-item">
          <label>
            <input type="radio" name="q" value="${opt.value}">
            <span class="option-label-text">${opt.text}</span>
          </label>
        </li>
      `
        )
        .join('')}
    </ul>
  `

  // Re-animate card
  questionContainer.style.animation = 'none'
  requestAnimationFrame(() => {
    questionContainer.style.animation = 'slideUp .3s cubic-bezier(.4,0,.2,1)'
  })

  nextBtn.classList.remove('hidden')
}

// ── Next / submit ──
nextBtn.addEventListener('click', () => {
  const selected = document.querySelector('input[name="q"]:checked')
  if (!selected) {
    shakeCard()
    return
  }

  answers[selected.value]++
  currentIndex++

  if (currentIndex < questions.length) {
    showQuestion()
  } else {
    showResult()
  }
})

function shakeCard() {
  questionContainer.style.animation = 'none'
  requestAnimationFrame(() => {
    questionContainer.style.animation = 'shake .35s ease'
  })
}

// ── Shake animation ──
const shakeStyle = document.createElement('style')
shakeStyle.textContent = `
@keyframes shake {
  0%,100%{transform:translateX(0)}
  20%{transform:translateX(-6px)}
  40%{transform:translateX(6px)}
  60%{transform:translateX(-4px)}
  80%{transform:translateX(4px)}
}`
document.head.appendChild(shakeStyle)

// ── Show result ──
function showResult() {
  progressFill.style.width = '100%'
  progressLabel.textContent = `${questions.length} / ${questions.length}`

  const top = Object.keys(answers).reduce((a, b) =>
    answers[a] > answers[b] ? a : b
  )
  const profile = profiles[top]

  document.getElementById('resultBadge').textContent = profile.emoji
  document.getElementById('resultArea').textContent = profile.area
  document.getElementById('resultText').textContent = profile.description

  const grid = document.getElementById('professionsGrid')
  grid.innerHTML = `
    <p class="professions-label" style="grid-column:1/-1">Carreiras compatíveis com seu perfil</p>
    ${profile.professions
      .map(
        (p) => `
      <div class="profession-chip">
        <span class="chip-icon">${p.icon}</span>
        <span>${p.name}</span>
      </div>
    `
      )
      .join('')}
  `

  // swap views
  questionContainer.classList.add('hidden')
  nextBtn.classList.add('hidden')
  resultDiv.classList.remove('hidden')

  // restart button
  document.getElementById('restartBtn').addEventListener('click', () => {
    currentIndex = 0
    answers = { a: 0, b: 0, c: 0, d: 0 }
    resultDiv.classList.add('hidden')
    questionContainer.classList.remove('hidden')
    showQuestion()
  })
}

// ── Start ──
showQuestion()
