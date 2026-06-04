
// ══════════════════════════════════════════
//  QUESTION BANKS
// ══════════════════════════════════════════
const BANKS = {
  general: [
    { type:'single', q:'What is the capital city of Australia?',
      opts:['Sydney','Melbourne','Canberra','Brisbane'], answer:2,
      exp:'Canberra has been the capital of Australia since 1927.' },
    { type:'multi', q:'Which of the following are official languages of Switzerland?',
      opts:['German','French','Italian','Spanish','Romansh'], answer:[0,1,2,4],
      exp:'Switzerland has 4 official languages: German, French, Italian, and Romansh.' },
    { type:'fill', q:'The Great Wall of China was primarily built during the _______ Dynasty.',
      answer:['ming','the ming','ming dynasty'], exp:'The majority of the Great Wall was built during the Ming Dynasty (1368–1644).' },
    { type:'truefalse', q:'The Sahara Desert is the largest desert in the world.',
      answer:false, exp:'Antarctica is actually the largest desert in the world! The Sahara is the largest hot desert.' },
    { type:'order', q:'Arrange these world capitals in order of their population (largest first):',
      items:['Tokyo, Japan','Delhi, India','Shanghai, China','São Paulo, Brazil'],
      answer:[0,1,2,3], exp:'Tokyo (37M), Delhi (33M), Shanghai (29M), São Paulo (22M).' },
    { type:'single', q:'Which ocean is the largest by surface area?',
      opts:['Atlantic','Indian','Arctic','Pacific'], answer:3,
      exp:'The Pacific Ocean covers about 165 million km², making it the largest ocean.' },
    { type:'multi', q:'Which countries share a land border with France?',
      opts:['Germany','Italy','Spain','Portugal','Switzerland'], answer:[0,1,2,4],
      exp:'France borders Germany, Italy, Spain, Switzerland, Belgium, Luxembourg, and Monaco.' },
    { type:'fill', q:'The currency of Japan is the _______.',
      answer:['yen','japanese yen'], exp:'The Japanese Yen (¥) has been Japan\'s currency since 1871.' },
    { type:'truefalse', q:'Diamonds are made of carbon.',
      answer:true, exp:'Diamonds are pure carbon atoms arranged in a crystal lattice structure.' },
    { type:'single', q:'How many sides does a dodecagon have?',
      opts:['10','11','12','13'], answer:2,
      exp:'A dodecagon is a 12-sided polygon. "Dodeca" means twelve in Greek.' },
  ],
  science: [
    { type:'single', q:'What is the chemical symbol for Gold?',
      opts:['Go','Gd','Au','Ag'], answer:2,
      exp:'Au comes from the Latin word "Aurum". Gold\'s atomic number is 79.' },
    { type:'multi', q:'Which of these are types of electromagnetic radiation?',
      opts:['X-rays','Sound waves','Gamma rays','Microwaves','Ocean waves'], answer:[0,2,3],
      exp:'X-rays, gamma rays, and microwaves are all forms of electromagnetic radiation. Sound and ocean waves are mechanical waves.' },
    { type:'fill', q:'The powerhouse of the cell is the _______.',
      answer:['mitochondria','mitochondrion'], exp:'The mitochondria generate most of the cell\'s supply of ATP (energy).' },
    { type:'truefalse', q:'Sound travels faster than light.',
      answer:false, exp:'Light travels at ~300,000 km/s while sound travels at only ~0.343 km/s in air.' },
    { type:'order', q:'Arrange the planets from closest to farthest from the Sun:',
      items:['Earth','Mercury','Mars','Venus'],
      answer:[1,3,0,2], exp:'Mercury → Venus → Earth → Mars in order from the Sun.' },
    { type:'single', q:'What is the most abundant gas in Earth\'s atmosphere?',
      opts:['Oxygen','Argon','Carbon Dioxide','Nitrogen'], answer:3,
      exp:'Nitrogen makes up about 78% of Earth\'s atmosphere. Oxygen is about 21%.' },
    { type:'multi', q:'Which of the following are Newton\'s Laws of Motion?',
      opts:['Every action has an equal and opposite reaction','Objects in motion stay in motion','Energy cannot be created or destroyed','Force equals mass times acceleration'], answer:[0,1,3],
      exp:'Newton\'s 3 Laws: Inertia, F=ma, and Action-Reaction. Conservation of energy is a separate law.' },
    { type:'fill', q:'Water is composed of two hydrogen atoms and one _______ atom.',
      answer:['oxygen','o'], exp:'H₂O = 2 hydrogen atoms + 1 oxygen atom.' },
    { type:'truefalse', q:'DNA stands for Deoxyribonucleic Acid.',
      answer:true, exp:'DNA (Deoxyribonucleic Acid) is the molecule that carries genetic information.' },
    { type:'single', q:'At what temperature (°C) does water boil at sea level?',
      opts:['90°C','95°C','100°C','105°C'], answer:2,
      exp:'Water boils at exactly 100°C (212°F) at standard atmospheric pressure (1 atm).' },
  ],
  tech: [
    { type:'single', q:'What does "CPU" stand for?',
      opts:['Central Processing Unit','Core Processing Utility','Computer Power Unit','Central Program Utility'], answer:0,
      exp:'The CPU (Central Processing Unit) is the brain of a computer that executes instructions.' },
    { type:'multi', q:'Which of these are programming languages?',
      opts:['Python','Cobra','Rust','HTML','Swift'], answer:[0,2,4],
      exp:'Python, Rust, and Swift are programming languages. HTML is a markup language. Cobra isn\'t a mainstream language.' },
    { type:'fill', q:'The programming principle "Don\'t Repeat Yourself" is abbreviated as _______.',
      answer:['dry','d.r.y'], exp:'DRY (Don\'t Repeat Yourself) encourages reducing code duplication.' },
    { type:'truefalse', q:'HTTP is a stateless protocol.',
      answer:true, exp:'HTTP is stateless — each request is independent with no memory of previous requests. Cookies/sessions add state on top.' },
    { type:'order', q:'Arrange these web technologies in order of when they were first released (earliest first):',
      items:['React (2013)','HTML (1991)','Node.js (2009)','CSS (1996)'],
      answer:[1,3,2,0], exp:'HTML 1991 → CSS 1996 → Node.js 2009 → React 2013.' },
    { type:'single', q:'What does "RAM" stand for?',
      opts:['Read Access Memory','Random Access Memory','Rapid Application Memory','Read And Memory'], answer:1,
      exp:'RAM (Random Access Memory) is the computer\'s short-term memory used for active processes.' },
    { type:'multi', q:'Which of these are valid HTTP request methods?',
      opts:['GET','SEND','POST','FETCH','DELETE'], answer:[0,2,4],
      exp:'GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS are valid HTTP methods. SEND and FETCH are not.' },
    { type:'fill', q:'In CSS, the property used to change text color is _______.',
      answer:['color','colour'], exp:'The CSS "color" property sets the foreground color of text and decorations.' },
    { type:'truefalse', q:'JavaScript was originally developed in 10 days.',
      answer:true, exp:'Brendan Eich created the first version of JavaScript in just 10 days in May 1995 at Netscape.' },
    { type:'single', q:'Which data structure follows the LIFO (Last In, First Out) principle?',
      opts:['Queue','Stack','Linked List','Tree'], answer:1,
      exp:'A Stack follows LIFO — the last element added is the first one removed (like a stack of plates).' },
  ]
};

// ══════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════
let questions = [], qi = 0, score = 0, answered = false;
let timerInterval = null, timeLeft = 0;
let selectedTopic = 'general';
let results = []; // {correct, skipped, qText, userAns, correctAns}

// ══════════════════════════════════════════
//  TOPIC SELECTION
// ══════════════════════════════════════════
document.querySelectorAll('.topic-card').forEach(c => {
  c.addEventListener('click', () => {
    document.querySelectorAll('.topic-card').forEach(x => x.classList.remove('selected'));
    c.classList.add('selected');
    selectedTopic = c.dataset.topic;
  });
});

// ══════════════════════════════════════════
//  START / RESTART
// ══════════════════════════════════════════
function startQuiz() {
  questions = shuffle([...BANKS[selectedTopic]]);
  qi = 0; score = 0; results = [];
  updateHUD();
  show('screenQuiz');
  loadQuestion();
}

function restartQuiz() {
  clearInterval(timerInterval);
  show('screenSplash');
}

// ══════════════════════════════════════════
//  LOAD QUESTION
// ══════════════════════════════════════════
function loadQuestion() {
  answered = false;
  const q = questions[qi];
  const total = questions.length;

  // Progress
  document.getElementById('qCounter').textContent = `Question ${qi+1} of ${total}`;
  document.getElementById('progressFill').style.width = `${(qi/total)*100}%`;

  // Type tag
  const tag = document.getElementById('qTypeTag');
  const tagMap = {single:['tag-single','Single Choice'],multi:['tag-multi','Multi-Select'],
                  fill:['tag-fill','Fill in Blank'],order:['tag-order','Ordering'],
                  truefalse:['tag-truefalse','True / False']};
  tag.className = 'q-type-tag ' + tagMap[q.type][0];
  tag.textContent = tagMap[q.type][1];

  // Q num & text
  document.getElementById('qNum').textContent = `Q${qi+1}`;
  document.getElementById('qText').textContent = q.q;

  // Hint
  const hint = document.getElementById('qHint');
  if (q.type === 'multi') {
    hint.textContent = `Select all that apply (${q.answer.length} correct answers)`;
    hint.style.display = 'flex';
  } else if (q.type === 'order') {
    hint.textContent = 'Drag and drop to reorder the items';
    hint.style.display = 'flex';
  } else {
    hint.style.display = 'none';
  }

  // Feedback reset
  const fb = document.getElementById('feedbackBar');
  fb.className = 'feedback-bar'; fb.style.display = '';

  // Buttons
  document.getElementById('btnCheck').style.display = 'block';
  document.getElementById('btnNext').style.display = 'none';

  // Body
  renderBody(q);

  // Animate card
  const card = document.getElementById('qCard');
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = '';

  // Timer
  startTimer(q.type === 'order' ? 30 : 20);
}

// ══════════════════════════════════════════
//  RENDER BODY
// ══════════════════════════════════════════
function renderBody(q) {
  const body = document.getElementById('qBody');

  if (q.type === 'single') {
    body.innerHTML = `<div class="options">${q.opts.map((o,i) => `
      <button class="option" data-idx="${i}" onclick="selectSingle(this)">
        <span class="opt-letter">${String.fromCharCode(65+i)}</span>${o}
      </button>`).join('')}</div>`;

  } else if (q.type === 'multi') {
    body.innerHTML = `<div class="options">${q.opts.map((o,i) => `
      <button class="option" data-idx="${i}" onclick="toggleMulti(this)">
        <span class="opt-letter">${String.fromCharCode(65+i)}</span>${o}
      </button>`).join('')}</div>`;

  } else if (q.type === 'truefalse') {
    body.innerHTML = `<div class="options">
      <button class="option" data-val="true" onclick="selectSingle(this)">
        <span class="opt-letter">T</span>True
      </button>
      <button class="option" data-val="false" onclick="selectSingle(this)">
        <span class="opt-letter">F</span>False
      </button>
    </div>`;

  } else if (q.type === 'fill') {
    body.innerHTML = `<div class="fill-wrap">
      <input class="fill-input" id="fillInput" type="text" placeholder="Type your answer here…"
        autocomplete="off" spellcheck="false"
        onkeydown="if(event.key==='Enter'&&!answered)checkAnswer()"/>
    </div>`;
    setTimeout(() => document.getElementById('fillInput')?.focus(), 50);

  } else if (q.type === 'order') {
    const items = shuffleArr([...q.items.map((t,i)=>({text:t,orig:i}))]);
    body.innerHTML = `<div class="order-list" id="orderList">${items.map((item,i)=>`
      <div class="order-item" draggable="true" data-orig="${item.orig}" data-pos="${i}"
           ondragstart="dragStart(event,this)" ondragover="dragOver(event,this)"
           ondrop="drop(event,this)" ondragleave="dragLeave(this)" ondragend="dragEnd(this)">
        <span class="drag-handle">⠿</span>
        <span class="order-num">${i+1}</span>
        <span>${item.text}</span>
      </div>`).join('')}</div>`;
    // update numbers on DOM
    updateOrderNums();
  }
}

// ══════════════════════════════════════════
//  SELECTION HELPERS
// ══════════════════════════════════════════
function selectSingle(el) {
  if (answered) return;
  document.querySelectorAll('#qBody .option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
}

function toggleMulti(el) {
  if (answered) return;
  el.classList.toggle('selected');
}

// ══════════════════════════════════════════
//  DRAG & DROP (Ordering)
// ══════════════════════════════════════════
let dragSrc = null;
function dragStart(e, el) { dragSrc = el; el.classList.add('dragging'); e.dataTransfer.effectAllowed='move'; }
function dragOver(e, el)  { e.preventDefault(); if(el!==dragSrc) el.classList.add('drag-over'); }
function dragLeave(el)    { el.classList.remove('drag-over'); }
function dragEnd(el)      { el.classList.remove('dragging'); document.querySelectorAll('.order-item').forEach(x=>x.classList.remove('drag-over')); }
function drop(e, el) {
  e.preventDefault();
  if (!dragSrc || dragSrc === el) return;
  const list = document.getElementById('orderList');
  const items = [...list.children];
  const si = items.indexOf(dragSrc), di = items.indexOf(el);
  if (si < di) list.insertBefore(dragSrc, el.nextSibling);
  else list.insertBefore(dragSrc, el);
  el.classList.remove('drag-over');
  updateOrderNums();
}
function updateOrderNums() {
  document.querySelectorAll('#orderList .order-item').forEach((el,i) => {
    el.querySelector('.order-num').textContent = i+1;
  });
}

// ══════════════════════════════════════════
//  CHECK ANSWER
// ══════════════════════════════════════════
function checkAnswer() {
  if (answered) return;
  const q = questions[qi];
  stopTimer();
  answered = true;

  let correct = false, userAnsStr = '', correctAnsStr = '';

  if (q.type === 'single') {
    const sel = document.querySelector('#qBody .option.selected');
    if (!sel) { skippedFeedback(q); return; }
    const idx = parseInt(sel.dataset.idx);
    correct = idx === q.answer;
    userAnsStr = q.opts[idx];
    correctAnsStr = q.opts[q.answer];
    document.querySelectorAll('#qBody .option').forEach(o => {
      o.classList.add('disabled');
      if (parseInt(o.dataset.idx) === q.answer) o.classList.add(correct?'correct':'reveal-correct');
    });
    if (!correct) sel.classList.add('wrong');
    else sel.classList.add('correct');

  } else if (q.type === 'truefalse') {
    const sel = document.querySelector('#qBody .option.selected');
    if (!sel) { skippedFeedback(q); return; }
    const val = sel.dataset.val === 'true';
    correct = val === q.answer;
    userAnsStr = val ? 'True' : 'False';
    correctAnsStr = q.answer ? 'True' : 'False';
    document.querySelectorAll('#qBody .option').forEach(o => {
      o.classList.add('disabled');
      if ((o.dataset.val === 'true') === q.answer) o.classList.add(correct?'correct':'reveal-correct');
    });
    if (!correct) sel.classList.add('wrong');
    else sel.classList.add('correct');

  } else if (q.type === 'multi') {
    const sels = [...document.querySelectorAll('#qBody .option.selected')].map(o=>parseInt(o.dataset.idx));
    correct = arrEqual(sels.sort(), [...q.answer].sort());
    userAnsStr = sels.map(i=>q.opts[i]).join(', ') || '(none)';
    correctAnsStr = q.answer.map(i=>q.opts[i]).join(', ');
    document.querySelectorAll('#qBody .option').forEach(o => {
      o.classList.add('disabled');
      const i = parseInt(o.dataset.idx);
      if (q.answer.includes(i)) o.classList.add(correct?'correct':'reveal-correct');
      else if (o.classList.contains('selected')) o.classList.add('wrong');
    });

  } else if (q.type === 'fill') {
    const val = document.getElementById('fillInput')?.value.trim().toLowerCase() || '';
    correct = q.answer.includes(val);
    userAnsStr = val || '(blank)';
    correctAnsStr = q.answer[0];
    const inp = document.getElementById('fillInput');
    inp.disabled = true;
    inp.classList.add(correct ? 'correct' : 'wrong');
    if (!correct) inp.value = inp.value + '  → ' + q.answer[0];

  } else if (q.type === 'order') {
    const items = [...document.querySelectorAll('#orderList .order-item')];
    const userOrder = items.map(el => parseInt(el.dataset.orig));
    correct = JSON.stringify(userOrder) === JSON.stringify(q.answer);
    userAnsStr = userOrder.map(i => q.items[i]).join(' → ');
    correctAnsStr = q.answer.map(i => q.items[i]).join(' → ');
    items.forEach((el, i) => {
      el.setAttribute('draggable','false');
      el.classList.add(parseInt(el.dataset.orig) === q.answer[i] ? 'correct' : 'wrong');
    });
  }

  if (correct) { score++; updateHUD(true); }
  results.push({ correct, skipped:false, qText:q.q, type:q.type, userAns:userAnsStr, correctAns:correctAnsStr });

  showFeedback(correct, q.exp);
  showNextBtn();
}

function skippedFeedback(q) {
  answered = true;
  stopTimer();
  results.push({ correct:false, skipped:true, qText:q.q, type:q.type, userAns:'(skipped)', correctAns:'' });
  showFeedback(false, 'You didn\'t select an answer.');
  showNextBtn();
}

function showFeedback(correct, exp) {
  const bar = document.getElementById('feedbackBar');
  bar.className = 'feedback-bar show ' + (correct ? 'correct' : 'wrong');
  document.getElementById('feedbackIcon').textContent = correct ? '✓' : '✗';
  document.getElementById('feedbackMsg').textContent = correct ? 'Correct! Well done.' : 'Not quite right.';
  document.getElementById('feedbackExp').textContent = exp || '';
  document.getElementById('btnCheck').style.display = 'none';
}

function showNextBtn() {
  const btn = document.getElementById('btnNext');
  const isLast = qi === questions.length - 1;
  btn.textContent = isLast ? 'See Results →' : 'Next Question →';
  btn.style.display = 'block';
}

// ══════════════════════════════════════════
//  NEXT
// ══════════════════════════════════════════
function nextQuestion() {
  qi++;
  if (qi >= questions.length) { showResults(); return; }
  loadQuestion();
}

// ══════════════════════════════════════════
//  TIMER
// ══════════════════════════════════════════
function startTimer(seconds) {
  clearInterval(timerInterval);
  timeLeft = seconds;
  const circ = document.getElementById('timerCircle');
  const CIRC = 2 * Math.PI * 14; // 87.96
  circ.style.strokeDasharray = CIRC;
  updateTimerUI(seconds, CIRC);

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerUI(timeLeft, CIRC);
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (!answered) { showFeedback(false, 'Time\'s up!'); skippedFeedback(questions[qi]); }
    }
  }, 1000);
}

function stopTimer() { clearInterval(timerInterval); }

function updateTimerUI(t, CIRC) {
  const el = document.getElementById('timerCircle');
  const num = document.getElementById('timerNum');
  const total = questions[qi]?.type === 'order' ? 30 : 20;
  const pct = t / total;
  el.style.strokeDashoffset = CIRC * (1 - pct);
  el.className = 'timer-fill' + (t <= 5 ? ' warn' : '');
  num.textContent = t;
  num.style.color = t <= 5 ? 'var(--red)' : 'var(--ink)';
}

// ══════════════════════════════════════════
//  RESULTS
// ══════════════════════════════════════════
function showResults() {
  clearInterval(timerInterval);
  show('screenResults');

  const total = questions.length;
  const correct = results.filter(r=>r.correct).length;
  const wrong = results.filter(r=>!r.correct&&!r.skipped).length;
  const skipped = results.filter(r=>r.skipped).length;
  const pct = Math.round((correct/total)*100);

  // Emoji & title
  const [emoji, title, sub] = pct===100 ? ['🏆','Perfect Score!','You nailed every single question!'] :
    pct>=80 ? ['🎉','Excellent!','You really know your stuff!'] :
    pct>=60 ? ['👍','Good Job!','Solid performance overall.'] :
    pct>=40 ? ['📚','Keep Studying','A bit more practice and you\'ll nail it!'] :
              ['💪','Don\'t Give Up!','Every expert was once a beginner.'];

  document.getElementById('resultsEmoji').textContent = emoji;
  document.getElementById('resultsTitle').textContent = title;
  document.getElementById('resultsSub').textContent   = sub;
  document.getElementById('scoreBig').textContent = correct;
  document.getElementById('scoreOf').textContent  = `out of ${total}`;
  document.getElementById('statCorrect').textContent = correct;
  document.getElementById('statWrong').textContent   = wrong;
  document.getElementById('statSkipped').textContent = skipped;
  document.getElementById('statPct').textContent     = pct+'%';

  // Conic gradient for score circle
  document.getElementById('scoreCircle').style.setProperty('--pct', pct+'%');
  document.getElementById('scoreCircle').style.background =
    `conic-gradient(var(--gold) 0%, var(--gold) ${pct}%, var(--border) ${pct}%)`;

  // Review
  const icons = {single:'🔘', multi:'☑️', fill:'✍️', order:'↕️', truefalse:'✅'};
  document.getElementById('reviewItems').innerHTML = results.map((r,i) => `
    <div class="review-item">
      <span class="review-icon">${r.correct ? '✅' : (r.skipped ? '⏭' : '❌')}</span>
      <div>
        <div class="review-q">${icons[questions[i].type]} Q${i+1}: ${r.qText}</div>
        <div class="review-a">
          ${r.correct ? `<strong>✓ ${r.userAns}</strong>` :
            `Your answer: ${r.userAns} &nbsp;|&nbsp; Correct: <strong>${r.correctAns}</strong>`}
        </div>
      </div>
    </div>`).join('');
}

// ══════════════════════════════════════════
//  HUD
// ══════════════════════════════════════════
function updateHUD(bump=false) {
  const el = document.getElementById('hudScore');
  el.textContent = score;
  if (bump) {
    el.classList.add('bump');
    setTimeout(()=>el.classList.remove('bump'), 400);
  }
}

// ══════════════════════════════════════════
//  HELPERS
// ══════════════════════════════════════════
function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function shuffle(arr) {
  for (let i=arr.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr;
}

function shuffleArr(arr) { return shuffle(arr); }

function arrEqual(a,b) { return a.length===b.length && a.every((v,i)=>v===b[i]); }
