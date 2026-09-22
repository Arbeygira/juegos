const goodHabitsData = [
  { id: 'agua', emoji: '💧', label: 'Agua' },
  { id: 'fruta', emoji: '🍎', label: 'Frutas' },
  { id: 'desayuno', emoji: '🥣', label: 'Desayuno' },
  { id: 'ejercicio', emoji: '🏃', label: 'Ejercicio' },
  { id: 'sueño', emoji: '😴', label: 'Sueño' },
  { id: 'higiene', emoji: '🧼', label: 'Higiene' },
  { id: 'verduras', emoji: '🥗', label: 'Verduras' },
  { id: 'relajacion', emoji: '🧘', label: 'Relajación' }
];

const badHabitsData = [
  { id: 'sedentarismo', emoji: '🛋️', label: 'Sedentarismo' },
  { id: 'azucar', emoji: '🍬', label: 'Mucho azúcar' },
  { id: 'suenio', emoji: '😵', label: 'Poco sueño' },
  { id: 'tabaco', emoji: '🚬', label: 'Tabaco' },
  { id: 'pantallas', emoji: '📱', label: 'Pantallas' },
  { id: 'sal', emoji: '🍟', label: 'Alto sodio' },
  { id: 'estres', emoji: '😣', label: 'Estrés' },
  { id: 'deshidrata', emoji: '🥤', label: 'Mal hidratación' }
];

const sortItems = [
  { emoji: '🏃', label: 'Hacer ejercicio', type: 'good' },
  { emoji: '📵', label: 'Dormir con el celular toda la noche', type: 'bad' },
  { emoji: '🥗', label: 'Comer verduras y frutas', type: 'good' },
  { emoji: '🍟', label: 'Consumir frituras todos los días', type: 'bad' },
  { emoji: '😴', label: 'Tener un horario regular de sueño', type: 'good' },
  { emoji: '🚬', label: 'Fumar en espacios cerrados', type: 'bad' },
  { emoji: '💧', label: 'Tomar agua durante el día', type: 'good' },
  { emoji: '🍬', label: 'Beber demasiada soda y dulces', type: 'bad' }
];

const routineSteps = [
  { label: 'Dormir con horario regular', order: 1 },
  { label: 'Lavarse las manos', order: 2 },
  { label: 'Comer frutas y verduras', order: 3 },
  { label: 'Hacer actividad física', order: 4 },
  { label: 'Tomar agua durante el día', order: 5 }
];

const trueFalseQuestions = [
  {
    question: 'La hidratación regular ayuda a mantener el cuerpo funcionando bien.',
    answer: true
  },
  {
    question: 'Dormir con pantallas encendidas mejora la calidad del sueño.',
    answer: false
  },
  {
    question: 'La actividad física diaria favorece la salud cardiovascular.',
    answer: true
  },
  {
    question: 'Consumir muchas bebidas azucaradas es una opción saludable para la alimentación.',
    answer: false
  }
];

const quizQuestions = [
  {
    question: 'Según la Resolución 3280 de 2018, ¿qué favorece más los hábitos saludables?',
    options: ['Dormir menos de 5 horas', 'Actividad física regular y alimentación balanceada', 'Consumir solo dulces'],
    correctIndex: 1,
    explanation: 'La actividad física regular y una alimentación balanceada fortalecen la salud y previenen enfermedades.'
  },
  {
    question: '¿Cuál es una buena práctica de higiene del sueño?',
    options: ['Dormir y levantarse a la misma hora cuando sea posible', 'Ver pantallas todo el tiempo antes de dormir', 'Dormir sin horario fijo'],
    correctIndex: 0,
    explanation: 'Mantener horarios regulares ayuda a mejorar la calidad del sueño y la recuperación del cuerpo.'
  },
  {
    question: '¿Qué opción representa una alimentación más saludable?',
    options: ['Frutas, verduras y agua en la rutina diaria', 'Solo bebidas azucaradas y snacks', 'Comer sin intención ni variedad'],
    correctIndex: 0,
    explanation: 'La variedad en frutas, verduras y agua favorece una nutrición adecuada y un mejor bienestar.'
  },
  {
    question: '¿Qué hábito ayuda a cuidar la salud mental y emocional?',
    options: ['Evitar pausas de descanso', 'Practicar relajación y manejar el estrés', 'Trabajar sin descanso'],
    correctIndex: 1,
    explanation: 'La relajación y el manejo del estrés ayudan a mantener equilibrio físico y emocional.'
  },
  {
    question: '¿Qué acción es recomendable para la higiene personal?',
    options: ['Lavarse las manos y mantener limpieza diaria', 'No bañarse por varios días', 'Evitar el cepillado dental'],
    correctIndex: 0,
    explanation: 'La higiene personal diaria protege la salud y reduce riesgos de infecciones.'
  },
  {
    question: '¿Cuál es la mejor opción para hidratarse?',
    options: ['Tomar agua de forma regular durante el día', 'Evitar el agua por completo', 'Consumir solo soda'],
    correctIndex: 0,
    explanation: 'La hidratación regular favorece procesos corporales esenciales como la digestión y la regulación térmica.'
  }
];

const board = document.getElementById('gameBoard');
const statusEl = document.getElementById('status');
const restartBtn = document.getElementById('restartBtn');
const homeBtn = document.getElementById('homeBtn');
const soundToggle = document.getElementById('soundToggle');
const menuCards = document.querySelectorAll('.menu-card');
const topbar = document.querySelector('.topbar');
const welcomeScreen = document.getElementById('welcomeScreen');
const startBtn = document.getElementById('startBtn');
const menuScreen = document.getElementById('menuScreen');
const gameView = document.getElementById('gameView');
const memoryMode = document.getElementById('memoryMode');
const quizMode = document.getElementById('quizMode');
const sortMode = document.getElementById('sortMode');
const questionText = document.getElementById('questionText');
const answerButtons = document.getElementById('answerButtons');
const gameTitle = document.getElementById('gameTitle');
const sortQuestion = document.getElementById('sortQuestion');
const sortItem = document.getElementById('sortItem');
const routineMode = document.getElementById('routineMode');
const routineList = document.getElementById('routineList');
const trueFalseMode = document.getElementById('trueFalseMode');
const trueFalseQuestion = document.getElementById('trueFalseQuestion');

const statLabel1 = document.getElementById('statLabel1');
const statLabel2 = document.getElementById('statLabel2');
const statLabel3 = document.getElementById('statLabel3');
const statValue1 = document.getElementById('statValue1');
const statValue2 = document.getElementById('statValue2');
const statValue3 = document.getElementById('statValue3');

let deck = [];
let flippedCards = [];
let isBoardLocked = false;
let moves = 0;
let matches = 0;
let seconds = 0;
let timerId = null;
let currentMode = 'good';
let soundEnabled = true;
let audioContext = null;
let quizIndex = 0;
let quizScore = 0;
let sortQueue = [];
let sortIndex = 0;
let sortScore = 0;
let routineOrder = [];
let routineCurrentStep = 0;
let routineScore = 0;
let trueFalseIndex = 0;
let trueFalseScore = 0;

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatTime(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const secs = String(totalSeconds % 60).padStart(2, '0');
  return `${minutes}:${secs}`;
}

function createDeckFromData(data) {
  return shuffle([...data, ...data]).map((item, index) => ({
    ...item,
    uniqueId: `${item.id}-${index}`
  }));
}

function updateStats() {
  if (currentMode === 'good' || currentMode === 'bad') {
    statValue1.textContent = String(moves);
    statValue2.textContent = formatTime(seconds);
    statValue3.textContent = `${matches}/${deck.length / 2}`;
    statLabel1.textContent = 'Movimientos';
    statLabel2.textContent = 'Tiempo';
    statLabel3.textContent = 'Parejas';
    return;
  }

  if (currentMode === 'quiz') {
    statValue1.textContent = String(quizScore);
    statValue2.textContent = `Q${quizIndex + 1}`;
    statValue3.textContent = `${quizScore}/${quizQuestions.length}`;
    statLabel1.textContent = 'Puntaje';
    statLabel2.textContent = 'Ronda';
    statLabel3.textContent = 'Total';
    return;
  }

  if (currentMode === 'routine') {
    statValue1.textContent = String(routineScore);
    statValue2.textContent = `${routineCurrentStep}/${routineSteps.length}`;
    statValue3.textContent = 'Rutina';
    statLabel1.textContent = 'Puntaje';
    statLabel2.textContent = 'Paso';
    statLabel3.textContent = 'Modo';
    return;
  }

  if (currentMode === 'truefalse') {
    statValue1.textContent = String(trueFalseScore);
    statValue2.textContent = `${trueFalseIndex + 1}/${trueFalseQuestions.length}`;
    statValue3.textContent = 'Verdadero';
    statLabel1.textContent = 'Puntaje';
    statLabel2.textContent = 'Ronda';
    statLabel3.textContent = 'Modo';
    return;
  }

  statValue1.textContent = String(sortScore);
  statValue2.textContent = sortQueue.length ? `${sortIndex + 1}/${sortQueue.length}` : '0/0';
  statValue3.textContent = 'Clasifica';
  statLabel1.textContent = 'Puntaje';
  statLabel2.textContent = 'Ronda';
  statLabel3.textContent = 'Modo';
}

function ensureAudioContext() {
  if (!audioContext) {
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (AudioCtor) {
      audioContext = new AudioCtor();
    }
  }

  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume();
  }
}

function playTone({ frequency, duration, type = 'sine', gain = 0.08, delay = 0 }) {
  if (!soundEnabled || !audioContext) return;

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  const startTime = audioContext.currentTime + delay;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);

  gainNode.gain.setValueAtTime(0.0001, startTime);
  gainNode.gain.exponentialRampToValueAtTime(gain, startTime + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start(startTime);
  oscillator.stop(startTime + duration);
}

function playSound(type) {
  if (!soundEnabled) return;
  ensureAudioContext();

  if (type === 'match') {
    playTone({ frequency: 660, duration: 0.12, type: 'triangle', gain: 0.06 });
    playTone({ frequency: 880, duration: 0.14, type: 'triangle', gain: 0.05, delay: 0.08 });
    return;
  }

  if (type === 'wrong') {
    playTone({ frequency: 210, duration: 0.2, type: 'sawtooth', gain: 0.07 });
    return;
  }

  if (type === 'win') {
    playTone({ frequency: 400, duration: 0.12, type: 'sine', gain: 0.06 });
    playTone({ frequency: 520, duration: 0.12, type: 'sine', gain: 0.06, delay: 0.1 });
    playTone({ frequency: 680, duration: 0.18, type: 'triangle', gain: 0.06, delay: 0.2 });
    return;
  }

  if (type === 'answer') {
    playTone({ frequency: 540, duration: 0.1, type: 'square', gain: 0.04 });
  }
}

function startTimer() {
  clearInterval(timerId);
  timerId = setInterval(() => {
    seconds += 1;
    if (currentMode === 'good' || currentMode === 'bad') {
      statValue2.textContent = formatTime(seconds);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

function setMode(mode) {
  currentMode = mode;

  menuScreen.classList.toggle('hidden', true);
  gameView.classList.toggle('hidden', false);

  memoryMode.classList.toggle('hidden', mode !== 'good' && mode !== 'bad');
  quizMode.classList.toggle('hidden', mode !== 'quiz');
  sortMode.classList.toggle('hidden', mode !== 'sort');
  routineMode.classList.toggle('hidden', mode !== 'routine');
  trueFalseMode.classList.toggle('hidden', mode !== 'truefalse');

  if (mode === 'good') {
    gameTitle.textContent = 'Buenos hábitos';
    statusEl.textContent = 'Encuentra las parejas de hábitos saludables.';
    resetMemoryGame();
    return;
  }

  if (mode === 'bad') {
    gameTitle.textContent = 'Malos hábitos';
    statusEl.textContent = 'Identifica y empareja los hábitos poco saludables.';
    resetMemoryGame();
    return;
  }

  if (mode === 'quiz') {
    statusEl.textContent = 'Responde las preguntas sobre hábitos de salud, sueño y alimentación.';
    resetQuizGame();
    return;
  }

  if (mode === 'routine') {
    statusEl.textContent = 'Haz clic en los pasos en el orden correcto para una rutina saludable.';
    resetRoutineGame();
    return;
  }

  if (mode === 'truefalse') {
    statusEl.textContent = 'Lee la afirmación y decide si es verdadera o falsa.';
    resetTrueFalseGame();
    return;
  }

  statusEl.textContent = 'Clasifica cada acción como saludable o no saludable.';
  resetSortGame();
}

function renderBoard() {
  board.innerHTML = '';

  deck.forEach((card) => {
    const cardButton = document.createElement('button');
    cardButton.type = 'button';
    cardButton.className = 'card';
    cardButton.dataset.id = card.id;
    cardButton.dataset.uniqueId = card.uniqueId;
    cardButton.setAttribute('aria-label', `Carta de ${card.label}`);
    cardButton.innerHTML = `
      <span class="card-inner">
        <span class="card-face card-front" aria-hidden="true"></span>
        <span class="card-face card-back" aria-hidden="true">
          <span class="emoji">${card.emoji}</span>
          <span class="label">${card.label}</span>
        </span>
      </span>
    `;

    cardButton.addEventListener('click', () => handleMemoryCardClick(cardButton));
    board.appendChild(cardButton);
  });
}

function handleMemoryCardClick(cardElement) {
  if (
    (currentMode !== 'good' && currentMode !== 'bad') ||
    isBoardLocked ||
    cardElement.classList.contains('is-flipped') ||
    cardElement.classList.contains('matched') ||
    flippedCards.some((card) => card.dataset.uniqueId === cardElement.dataset.uniqueId)
  ) {
    return;
  }

  cardElement.classList.add('is-flipped');
  flippedCards.push(cardElement);
  playSound('answer');

  if (!timerId) {
    startTimer();
  }

  if (flippedCards.length === 2) {
    moves += 1;
    const [firstCard, secondCard] = flippedCards;

    if (firstCard.dataset.id === secondCard.dataset.id) {
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');
      matches += 1;
      playSound('match');
      statusEl.textContent = `¡Muy bien! Encontraste la pareja de ${firstCard.querySelector('.label').textContent}.`;
      flippedCards = [];
      updateStats();

      if (matches === deck.length / 2) {
        stopTimer();
        playSound('win');
        statusEl.textContent = `¡Ganaste! Completaste todas las parejas en ${formatTime(seconds)} con ${moves} movimientos.`;
      }
      return;
    }

    isBoardLocked = true;
    playSound('wrong');
    statusEl.textContent = 'No coincide. Inténtalo de nuevo.';
    updateStats();

    setTimeout(() => {
      firstCard.classList.remove('is-flipped');
      secondCard.classList.remove('is-flipped');
      flippedCards = [];
      isBoardLocked = false;
      statusEl.textContent = currentMode === 'good' ? 'Sigue buscando hábitos saludables.' : 'Sigue analizando los hábitos poco saludables.';
    }, 800);
  }
}

function resetMemoryGame() {
  deck = createDeckFromData(currentMode === 'good' ? goodHabitsData : badHabitsData);
  flippedCards = [];
  isBoardLocked = false;
  moves = 0;
  matches = 0;
  seconds = 0;
  stopTimer();
  updateStats();
  renderBoard();
}

function renderQuestion() {
  const question = quizQuestions[quizIndex];
  questionText.textContent = question.question;
  answerButtons.innerHTML = '';

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-btn';
    button.dataset.index = String(index);
    button.textContent = option;
    button.addEventListener('click', () => handleQuizAnswer(button, index, question));
    answerButtons.appendChild(button);
  });
}

function handleQuizAnswer(button, selectedIndex, question) {
  const buttons = [...answerButtons.querySelectorAll('button')];
  buttons.forEach((btn) => {
    btn.disabled = true;
    if (Number(btn.dataset.index) === question.correctIndex) {
      btn.classList.add('correct');
    }
  });

  const isCorrect = selectedIndex === question.correctIndex;
  if (isCorrect) {
    quizScore += 1;
    button.classList.add('correct');
    statusEl.textContent = `¡Correcto! ${question.explanation}`;
    playSound('match');
  } else {
    button.classList.add('wrong');
    statusEl.textContent = `No es correcto. ${question.explanation}`;
    playSound('wrong');
  }

  updateStats();

  setTimeout(() => {
    if (quizIndex === quizQuestions.length - 1) {
      statusEl.textContent = `Tu puntaje final es ${quizScore} de ${quizQuestions.length}. ¡Sigue reforzando estos hábitos!`;
      updateStats();
      return;
    }

    quizIndex += 1;
    renderQuestion();
    statusEl.textContent = 'Responde la siguiente pregunta para seguir aprendiendo.';
    updateStats();
  }, 1400);
}

function resetQuizGame() {
  quizIndex = 0;
  quizScore = 0;
  renderQuestion();
  updateStats();
}

function buildSortQueue() {
  sortQueue = shuffle([...sortItems]);
  sortIndex = 0;
  sortScore = 0;
  renderSortItem();
  updateStats();
}

function renderSortItem() {
  const item = sortQueue[sortIndex];
  if (!item) {
    sortItem.innerHTML = '<span>🎉</span><strong>¡Terminaste!</strong>';
    sortQuestion.textContent = 'Tu clasificación final';
    statusEl.textContent = `Clasificaste ${sortScore} de ${sortQueue.length} elementos correctamente.`;
    return;
  }

  sortQuestion.textContent = '¿Cómo clasificarías esta acción?';
  sortItem.innerHTML = `<span>${item.emoji}</span><strong>${item.label}</strong>`;
  sortItem.dataset.type = item.type;
}

function handleSortAnswer(answer) {
  const current = sortQueue[sortIndex];
  if (!current) return;

  const isCorrect = answer === current.type;
  if (isCorrect) {
    sortScore += 1;
    statusEl.textContent = `¡Correcto! ${current.label} es un hábito ${current.type === 'good' ? 'saludable' : 'poco saludable'}.`;
    playSound('match');
  } else {
    statusEl.textContent = `No era correcto. ${current.label} es un hábito ${current.type === 'good' ? 'saludable' : 'poco saludable'}.`;
    playSound('wrong');
  }

  updateStats();

  setTimeout(() => {
    if (sortIndex >= sortQueue.length - 1) {
      sortIndex = sortQueue.length;
      renderSortItem();
      updateStats();
      return;
    }

    sortIndex += 1;
    renderSortItem();
    updateStats();
  }, 1100);
}

function resetSortGame() {
  buildSortQueue();
  statusEl.textContent = 'Clasifica cada acción como saludable o no saludable.';
  updateStats();
}

function resetRoutineGame() {
  const shuffled = shuffle([...routineSteps]);
  routineOrder = shuffled.map((step) => step.label);
  routineCurrentStep = 0;
  routineScore = 0;
  renderRoutineGame();
  updateStats();
}

function renderRoutineGame() {
  routineList.innerHTML = '';

  routineOrder.forEach((label, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'routine-step';
    button.textContent = `${index + 1}. ${label}`;
    button.addEventListener('click', () => handleRoutineStep(button, label));
    routineList.appendChild(button);
  });
}

function handleRoutineStep(button, label) {
  const expected = routineSteps[routineCurrentStep]?.label;

  if (label === expected) {
    button.classList.add('correct');
    button.classList.add('disabled');
    button.disabled = true;
    routineCurrentStep += 1;
    routineScore += 1;
    statusEl.textContent = `¡Correcto! ${label} va en el orden correcto.`;
    playSound('match');
    updateStats();

    if (routineCurrentStep === routineSteps.length) {
      statusEl.textContent = `¡Excelente! Completaste la rutina saludable con ${routineScore} pasos correctos.`;
      playSound('win');
    }
    return;
  }

  statusEl.textContent = 'Ese paso no va ahí. Intenta otra acción.';
  playSound('wrong');
}

function resetTrueFalseGame() {
  trueFalseIndex = 0;
  trueFalseScore = 0;
  renderTrueFalseQuestion();
  updateStats();
}

function renderTrueFalseQuestion() {
  const question = trueFalseQuestions[trueFalseIndex];
  if (!question) {
    trueFalseQuestion.textContent = '¡Terminaste!';
    statusEl.textContent = `Tu puntaje final fue ${trueFalseScore} de ${trueFalseQuestions.length}.`;
    return;
  }

  trueFalseQuestion.textContent = question.question;
}

function handleTrueFalseAnswer(answer) {
  const current = trueFalseQuestions[trueFalseIndex];
  if (!current) return;

  const isCorrect = answer === current.answer;
  if (isCorrect) {
    trueFalseScore += 1;
    statusEl.textContent = '¡Correcto! Esa afirmación es correcta.';
    playSound('match');
  } else {
    statusEl.textContent = `No es correcto. La respuesta correcta es ${current.answer ? 'Verdadero' : 'Falso'}.`;
    playSound('wrong');
  }

  updateStats();

  setTimeout(() => {
    if (trueFalseIndex >= trueFalseQuestions.length - 1) {
      trueFalseIndex = trueFalseQuestions.length;
      renderTrueFalseQuestion();
      updateStats();
      return;
    }

    trueFalseIndex += 1;
    renderTrueFalseQuestion();
    updateStats();
  }, 1200);
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  soundToggle.textContent = soundEnabled ? '🔊 Sonido' : '🔇 Silencio';
  soundToggle.setAttribute('aria-label', soundEnabled ? 'Activar o desactivar sonido' : 'Activar sonido');
}

function showMenu() {
  topbar.classList.toggle('hidden', false);
  welcomeScreen.classList.toggle('hidden', true);
  menuScreen.classList.toggle('hidden', false);
  gameView.classList.toggle('hidden', true);
  statusEl.textContent = 'Selecciona un juego para comenzar.';
}

function showWelcome() {
  topbar.classList.toggle('hidden', true);
  welcomeScreen.classList.toggle('hidden', false);
  menuScreen.classList.toggle('hidden', true);
  gameView.classList.toggle('hidden', true);
}

restartBtn.addEventListener('click', () => {
  if (currentMode === 'good' || currentMode === 'bad') {
    resetMemoryGame();
    return;
  }

  if (currentMode === 'quiz') {
    resetQuizGame();
    return;
  }

  if (currentMode === 'routine') {
    resetRoutineGame();
    return;
  }

  if (currentMode === 'truefalse') {
    resetTrueFalseGame();
    return;
  }

  resetSortGame();
});

homeBtn.addEventListener('click', () => {
  showMenu();
});

startBtn.addEventListener('click', showMenu);

soundToggle.addEventListener('click', toggleSound);
menuCards.forEach((button) => {
  button.addEventListener('click', () => setMode(button.dataset.mode));
});
document.querySelectorAll('.sort-btn').forEach((button) => {
  button.addEventListener('click', (event) => {
    const { answer } = event.currentTarget.dataset;
    if (currentMode === 'sort') {
      handleSortAnswer(answer);
      return;
    }

    if (currentMode === 'truefalse') {
      handleTrueFalseAnswer(answer === 'true');
    }
  });
});

updateStats();
showWelcome();
