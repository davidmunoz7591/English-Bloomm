const levels = [
  { id: "A1", name: "Principiante", topics: [
    ["Saludos y presentaciones", "greetings introductions English beginner explained in Spanish", [["How do you say «Hola»?", "Hello", "Goodbye", "Please", 0], ["What does «My name is Ana» mean?", "Mi nombre es Ana", "Tengo hambre", "Estoy cansado", 0], ["Choose a greeting for the morning.", "Good morning", "Good night", "Goodbye", 0]]],
    ["Verbo to be", "verb to be am is are English explained Spanish", [["I ___ happy.", "am", "is", "are", 0], ["She ___ my friend.", "is", "am", "are", 0], ["They ___ students.", "are", "is", "am", 0]]],
    ["Presente simple", "present simple English beginner explained Spanish", [["He ___ football every day.", "plays", "play", "playing", 0], ["I ___ English at school.", "study", "studies", "studying", 0], ["She doesn't ___ coffee.", "like", "likes", "liking", 0]]],
    ["Pronombres y vocabulario", "English pronouns basic vocabulary explained Spanish", [["Mary is my sister. ___ is kind.", "She", "He", "They", 0], ["What is the plural of «book»?", "Books", "Bookes", "Book", 0], ["What does «thank you» mean?", "Gracias", "Por favor", "Hasta luego", 0]]]
  ]},
  { id: "A2", name: "Básico", topics: [
    ["Pasado simple", "past simple English explained in Spanish", [["Yesterday I ___ at home.", "was", "am", "be", 0], ["The past of «go» is...", "went", "goed", "goes", 0], ["She ___ a movie last night.", "watched", "watch", "watches", 0]]],
    ["Futuro con going to", "going to future English explained Spanish", [["I am ___ study tonight.", "going to", "go", "went to", 0], ["They are going to ___ tomorrow.", "travel", "travelled", "travels", 0], ["She ___ going to cook.", "is", "are", "am", 0]]],
    ["Comparativos", "English comparatives superlatives explained Spanish", [["An elephant is ___ than a cat.", "bigger", "big", "biggest", 0], ["Today is ___ than yesterday.", "colder", "coldest", "cold", 0], ["The superlative of «small» is...", "the smallest", "smaller", "smallest than", 0]]],
    ["Can, must y should", "English modal verbs explained in Spanish", [["You ___ wear a seatbelt. It's important.", "should", "can to", "are", 0], ["I can ___ English.", "speak", "speaks", "speaking", 0], ["You ___ smoke here. It's prohibited.", "mustn't", "should to", "can to", 0]]]
  ]},
  { id: "B1", name: "Intermedio", topics: [
    ["Present perfect", "present perfect English explained in Spanish", [["I have ___ my homework.", "finished", "finish", "finishing", 0], ["She has never ___ to London.", "been", "be", "being", 0], ["They ___ lived here for years.", "have", "has", "did", 0]]],
    ["Primer condicional", "first conditional English explained Spanish", [["If it rains, we ___ home.", "will stay", "stayed", "would stay", 0], ["If you study, you ___ pass.", "will", "would have", "are", 0], ["If I see him, I ___ tell him.", "will", "would have", "did", 0]]],
    ["Expresar opiniones", "English expressing opinions B1 explained Spanish", [["Which phrase gives an opinion?", "I think that...", "Yesterday at...", "There are...", 0], ["«In my opinion» means...", "En mi opinión", "En otra ocasión", "Por la mañana", 0], ["A polite disagreement is...", "I see your point, but...", "You are stupid", "No, never", 0]]],
    ["Voz pasiva", "passive voice English intermediate explained Spanish", [["The cake ___ by Ana.", "was made", "made", "has make", 0], ["English ___ around the world.", "is spoken", "speaks", "speaking", 0], ["The letters were ___ yesterday.", "sent", "send", "sending", 0]]]
  ]},
  { id: "B2", name: "Intermedio alto", topics: [
    ["Estilo indirecto", "reported speech English B2 explained Spanish", [["He said, «I am tired». He said he ___ tired.", "was", "is", "be", 0], ["She said, «I like tea». She said she ___ tea.", "liked", "likes", "liking", 0], ["He told me ___ wait.", "to", "for", "that to", 0]]],
    ["Phrasal verbs", "English phrasal verbs B2 explained in Spanish", [["«Give up» means...", "Rendirse", "Continuar", "Llegar", 0], ["«Look after» means...", "Cuidar", "Buscar", "Mirar arriba", 0], ["«Find out» means...", "Descubrir", "Olvidar", "Repetir", 0]]],
    ["Condicionales avanzados", "English conditionals B2 explained Spanish", [["If I had known, I ___ helped.", "would have", "will have", "would", 0], ["If I were rich, I ___ travel.", "would", "will have", "did", 0], ["If she had studied, she ___ passed.", "would have", "will", "would", 0]]],
    ["Conectores y escritura", "English linking words formal writing B2 Spanish", [["Which connector shows contrast?", "However", "Therefore", "For example", 0], ["«Therefore» expresses...", "Consecuencia", "Contraste", "Tiempo", 0], ["Which is more formal?", "I would appreciate your reply.", "Gimme an answer.", "Hey dude!", 0]]]
  ]},
  { id: "C1", name: "Avanzado", topics: [
    ["Inversión gramatical", "advanced English inversion C1 explained Spanish", [["Rarely ___ such a beautiful view.", "have I seen", "I have seen", "I saw have", 0], ["Not only ___ late, but he forgot the keys.", "was he", "he was", "he did", 0], ["Never ___ such a thing.", "have I seen", "I have saw", "I seen have", 0]]],
    ["Collocations", "advanced English collocations C1 explained Spanish", [["Which phrase is natural?", "Make a decision", "Do a decision", "Create a decision", 0], ["We say «heavy...»", "rain", "windy", "sun", 0], ["Which collocation is correct?", "Take responsibility", "Do responsibility", "Make responsibility", 0]]],
    ["Registro formal", "formal informal English C1 explained Spanish", [["A formal alternative to «get» is...", "obtain", "grabby", "gotten it", 0], ["Which is appropriate in a formal email?", "I am writing to enquire...", "Yo, what's up?", "Gimme that.", 0], ["«Furthermore» means...", "Además", "Sin embargo", "Nunca", 0]]],
    ["Expresiones idiomáticas", "English idioms C1 explained in Spanish", [["«A piece of cake» means...", "Algo muy fácil", "Un problema grave", "Una comida cara", 0], ["«Break the ice» means...", "Romper la tensión inicial", "Romper una ventana", "Enfadarse", 0], ["«Under the weather» means...", "Sentirse enfermo", "Estar afuera", "Tener calor", 0]]]
  ]},
  { id: "C2", name: "Maestría", topics: [
    ["Ironía y sarcasmo", "C2 English irony sarcasm explained in Spanish", [["Someone says «Great weather!» during a storm. This may be...", "Sarcasm", "A literal forecast", "A command", 0], ["Irony often involves a contrast between...", "Expectation and reality", "Two synonyms", "Past and future", 0], ["Understanding sarcasm often requires...", "Context and tone", "Only spelling", "Counting syllables", 0]]],
    ["Matices del vocabulario", "C2 English vocabulary nuances explained Spanish", [["«Slim» and «skinny» differ mainly in...", "Connotation", "Spelling only", "Tense", 0], ["A synonym always has exactly the same meaning in every context.", "False", "True", "Only in writing", 0], ["Word choice depends partly on...", "Context and register", "Alphabetical order", "Word length only", 0]]],
    ["Inferencias", "C2 advanced English inference listening explained Spanish", [["An inference is a conclusion based on...", "Evidence and clues", "A random guess only", "A dictionary alone", 0], ["If the ground is wet, it ___ have rained.", "may", "mustn't to", "did to", 0], ["A reliable interpretation should consider...", "Context and evidence", "One word only", "Personal preference only", 0]]],
    ["Argumentación crítica", "C2 English critical argumentation explained Spanish", [["A strong argument needs...", "Evidence and reasoning", "Insults", "Repeated claims only", 0], ["A counterargument is...", "An opposing argument", "A summary title", "A greeting", 0], ["To qualify a claim means to...", "Limit or clarify its scope", "Repeat it louder", "Remove all evidence", 0]]]
  ]}
];

const storageKey = "lingobloom-academy-v1";
const totalTopics = levels.reduce((sum, level) => sum + level.topics.length, 0);
const placementQuestions = levels.flatMap((level, levelIndex) =>
  level.topics.slice(0, 2).map((topic) => ({ question: topic[2][0], levelIndex }))
);

function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return {
      unlocked: Number.isInteger(saved.unlocked) ? Math.max(0, Math.min(saved.unlocked, levels.length - 1)) : 0,
      done: Array.isArray(saved.done) ? saved.done : [],
      best: saved.best && typeof saved.best === "object" ? saved.best : {},
      placement: Number.isInteger(saved.placement) ? Math.max(0, Math.min(saved.placement, levels.length - 1)) : null
    };
  } catch {
    return { unlocked: 0, done: [], best: {}, placement: null };
  }
}

const state = { ...readProgress(), placementAnswers: [], activeLevel: 0, activeTopic: null, quizAnswers: [], quizSubmitted: false };

function updateStats() {
  document.getElementById("currentLevel").textContent = state.placement === null ? "Por descubrir" : levels[state.placement].id;
  document.getElementById("passedCount").textContent = state.done.length;
  document.getElementById("progress").textContent = `${Math.round((state.done.length / totalTopics) * 100)}%`;
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify({ unlocked: state.unlocked, done: state.done, best: state.best, placement: state.placement }));
  } catch {
    // Keep the academy usable when browser storage is unavailable.
  }
  updateStats();
}

function showAcademy() {
  renderAcademy();
  document.getElementById("app").scrollIntoView({ behavior: "smooth" });
}

function startPlacement() {
  state.placementAnswers = [];
  renderPlacement(0);
  document.getElementById("app").scrollIntoView({ behavior: "smooth" });
}

function renderPlacement(index) {
  const app = document.getElementById("app");
  if (index === placementQuestions.length) {
    let result = 0;
    for (let levelIndex = 0; levelIndex < levels.length; levelIndex++) {
      const correct = state.placementAnswers.filter((answer) => answer.levelIndex === levelIndex && answer.correct).length;
      if (correct >= 1) result = levelIndex;
      else break;
    }
    state.placement = result;
    state.unlocked = Math.max(state.unlocked, result);
    saveProgress();
    app.innerHTML = `<section class="panel result-panel"><span class="pill">RESULTADO INICIAL</span><h2>Tu nivel estimado es ${levels[result].id}</h2><p>Tu resultado sugiere que puedes comenzar en ${levels[result].id} (${levels[result].name}). Aprueba las pruebas de los temas para confirmar y avanzar.</p><p class="muted">Esta prueba es orientativa; no es una certificación oficial del MCER.</p><button class="btn" type="button" data-action="academy">Ver mis lecciones</button></section>`;
    app.querySelector('[data-action="academy"]').addEventListener("click", showAcademy);
    return;
  }

  const item = placementQuestions[index];
  const question = item.question;
  app.innerHTML = `<section class="panel placement-panel"><span class="pill">PRUEBA DE NIVEL · ${index + 1}/${placementQuestions.length}</span><h2>Descubramos tu inglés</h2><p class="muted">Hay dos preguntas por nivel. La dificultad aumenta paso a paso.</p><div class="question"><h3>${question[0]}</h3><div class="answers">${question.slice(1, 4).map((answer, answerIndex) => `<button class="answer" type="button" data-placement-answer="${answerIndex}">${answer}</button>`).join("")}</div></div></section>`;
  app.querySelectorAll("[data-placement-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      state.placementAnswers.push({ correct: Number(button.dataset.placementAnswer) === question[4], levelIndex: item.levelIndex });
      renderPlacement(index + 1);
    });
  });
}

function renderAcademy() {
  const app = document.getElementById("app");
  updateStats();
  app.innerHTML = `<div class="academy-heading"><div><span class="eyebrow">TU PLAN DE ESTUDIO</span><h2>Tu academia</h2></div><p class="muted">Aprueba las pruebas de los temas para desbloquear el siguiente nivel.</p></div><div class="level-grid">${levels.map((level, levelIndex) => {
    const done = level.topics.filter((_, topicIndex) => state.done.includes(`${levelIndex}-${topicIndex}`)).length;
    const unlocked = levelIndex <= state.unlocked;
    const percentage = Math.round((done / level.topics.length) * 100);
    return `<article class="level-card${unlocked ? "" : " locked"}"><div class="level-top"><span class="pill">${level.id}</span><span class="level-count">${done}/${level.topics.length} aprobados</span></div><h3>${level.name}</h3><p>${level.topics.length} temas para aprender y practicar.</p><div class="track" role="progressbar" aria-label="Progreso de ${level.id}" aria-valuenow="${percentage}" aria-valuemin="0" aria-valuemax="100"><div class="fill" style="width:${percentage}%"></div></div><small>${percentage}% completado</small><button class="btn${unlocked ? "" : " secondary"}" type="button" data-open-level="${levelIndex}" ${unlocked ? "" : "disabled"}>${unlocked ? "Entrar al nivel" : "🔒 Bloqueado"}</button></article>`;
  }).join("")}</div>`;
  app.querySelectorAll("[data-open-level]").forEach((button) => button.addEventListener("click", () => openLevel(Number(button.dataset.openLevel))));
}

function openLevel(levelIndex) {
  if (levelIndex > state.unlocked) return;
  state.activeLevel = levelIndex;
  state.activeTopic = null;
  const level = levels[levelIndex];
  const app = document.getElementById("app");
  app.innerHTML = `<button class="btn secondary back-button" type="button" data-action="academy">← Volver a niveles</button><div class="academy-heading level-heading"><div><span class="eyebrow">${level.id} · NIVEL</span><h2>${level.name}</h2></div><span class="topic-total">${level.topics.length} temas</span></div><div class="topic-list">${level.topics.map((topic, topicIndex) => {
    const id = `${levelIndex}-${topicIndex}`;
    const done = state.done.includes(id);
    const best = state.best[id];
    return `<article class="topic panel"><div class="topic-copy"><span class="pill">TEMA ${String(topicIndex + 1).padStart(2, "0")}</span><h3>${topic[0]}</h3><span class="muted">${done ? `✓ Aprobado · Mejor resultado ${best}/3` : "Video de estudio + prueba de 3 preguntas"}</span></div><button class="btn" type="button" data-open-topic="${topicIndex}">${done ? "Repasar tema" : "Estudiar tema"}</button></article>`;
  }).join("")}</div>`;
  app.querySelector('[data-action="academy"]').addEventListener("click", showAcademy);
  app.querySelectorAll("[data-open-topic]").forEach((button) => button.addEventListener("click", () => openTopic(levelIndex, Number(button.dataset.openTopic))));
}

function openTopic(levelIndex, topicIndex) {
  state.activeLevel = levelIndex;
  state.activeTopic = topicIndex;
  state.quizAnswers = [];
  state.quizSubmitted = false;
  renderTopic();
}

function renderTopic() {
  const levelIndex = state.activeLevel;
  const topicIndex = state.activeTopic;
  const level = levels[levelIndex];
  const topic = level.topics[topicIndex];
  const search = `${level.id} English ${topic[1]} clase explicada en español`;
  const videoUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(search)}`;
  const app = document.getElementById("app");
  app.innerHTML = `<button class="btn secondary back-button" type="button" data-action="level">← Volver a ${level.id}</button><section class="topic-panel panel"><span class="pill">${level.id} · TEMA ${topicIndex + 1}</span><h2>${topic[0]}</h2><p class="muted">Busca una clase en español para estudiar este tema. Después, vuelve aquí para responder las preguntas.</p><div class="notice"><strong>Video de estudio</strong><br>Se abrirá YouTube con una búsqueda específica. Elige una clase adecuada antes de realizar la prueba.</div><a class="btn video-button" href="${videoUrl}" target="_blank" rel="noopener noreferrer">▶ Buscar video en YouTube ↗</a><div class="assessment-heading"><h3>Prueba del tema</h3><p class="muted">Responde las tres preguntas. Necesitas al menos 2 respuestas correctas para aprobar.</p></div><div class="topic-questions">${topic[2].map((question, questionIndex) => `<div class="question"><h3>${questionIndex + 1}. ${question[0]}</h3><div class="answers">${question.slice(1, 4).map((answer, answerIndex) => `<button class="answer" type="button" data-question="${questionIndex}" data-choice="${answerIndex}">${answer}</button>`).join("")}</div></div>`).join("")}</div><button class="btn" id="submitQuiz" type="button">Calificar prueba</button><div id="quizResult" role="status" aria-live="polite"></div></section>`;
  app.querySelector('[data-action="level"]').addEventListener("click", () => openLevel(levelIndex));
  app.querySelectorAll("[data-question]").forEach((button) => button.addEventListener("click", () => selectAnswer(Number(button.dataset.question), Number(button.dataset.choice))));
  app.querySelector("#submitQuiz").addEventListener("click", submitQuiz);
}

function selectAnswer(questionIndex, answerIndex) {
  if (state.quizSubmitted) return;
  state.quizAnswers[questionIndex] = answerIndex;
  document.querySelectorAll(`[data-question="${questionIndex}"]`).forEach((button) => {
    const selected = Number(button.dataset.choice) === answerIndex;
    button.classList.toggle("chosen", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function submitQuiz() {
  const topic = levels[state.activeLevel].topics[state.activeTopic];
  const result = document.getElementById("quizResult");
  if (state.quizAnswers.filter((answer) => answer !== undefined).length < topic[2].length) {
    result.innerHTML = '<p class="notice" role="alert">Responde las tres preguntas antes de calificar.</p>';
    return;
  }

  state.quizSubmitted = true;
  const score = topic[2].reduce((sum, question, index) => sum + Number(state.quizAnswers[index] === question[4]), 0);
  const topicId = `${state.activeLevel}-${state.activeTopic}`;
  const passed = score >= 2;
  state.best[topicId] = Math.max(state.best[topicId] || 0, score);
  if (passed && !state.done.includes(topicId)) state.done.push(topicId);

  const levelIndex = state.activeLevel;
  const allTopicsPassed = levels[levelIndex].topics.every((_, index) => state.done.includes(`${levelIndex}-${index}`));
  const unlockedNext = allTopicsPassed && levelIndex < levels.length - 1 && state.unlocked < levelIndex + 1;
  if (unlockedNext) state.unlocked = levelIndex + 1;
  saveProgress();

  document.querySelectorAll("[data-question]").forEach((button) => {
    const questionIndex = Number(button.dataset.question);
    const answerIndex = Number(button.dataset.choice);
    const correctIndex = topic[2][questionIndex][4];
    button.disabled = true;
    if (answerIndex === correctIndex) button.classList.add("correct");
    else if (answerIndex === state.quizAnswers[questionIndex]) button.classList.add("incorrect");
  });
  document.getElementById("submitQuiz").disabled = true;
  result.innerHTML = `<div class="notice result-notice"><h3>${passed ? "✿ ¡Prueba aprobada!" : "Sigue practicando"}</h3><p>Resultado: ${score}/3 respuestas correctas.</p><p>${passed ? "Has demostrado tus conocimientos de este tema." : "Necesitas al menos 2 respuestas correctas. Repasa el tema e inténtalo de nuevo."}</p>${unlockedNext ? `<p class="unlock-message">🔓 ¡Desbloqueaste el nivel ${levels[levelIndex + 1].id}!</p>` : ""}<div class="result-actions"><button class="btn" type="button" data-action="level">Volver a los temas</button>${passed ? "" : '<button class="btn secondary" type="button" data-action="retry">Repetir prueba</button>'}</div></div>`;
  result.querySelector('[data-action="level"]').addEventListener("click", () => openLevel(levelIndex));
  result.querySelector('[data-action="retry"]')?.addEventListener("click", () => openTopic(levelIndex, state.activeTopic));
}

document.getElementById("placementButton").addEventListener("click", startPlacement);
document.getElementById("academyButton").addEventListener("click", showAcademy);
renderAcademy();
