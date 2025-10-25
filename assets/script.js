// CONFIG: coloque a data de quando vcs se conheceram aqui (YYYY-MM-DD)
const START_DATE = '2025-06-12'; // <--- troque pela data real

function calculateTimeSince(startDate) {
  const start = new Date(startDate + 'T00:00:00');
  const now = new Date();
  const diffMs = now - start;

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30.4375); // média de dias por mês
  const years = Math.floor(months / 12);

  return {
    years,
    months: months % 12,
    days: days % 30,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60,
    start
  };
}

function updateCounter() {
  const info = calculateTimeSince(START_DATE);
  document.getElementById('years').textContent = info.years;
  document.getElementById('months').textContent = info.months;
  document.getElementById('days').textContent = info.days;
  document.getElementById('hours').textContent = info.hours;
  document.getElementById('minutes').textContent = info.minutes;
  document.getElementById('seconds').textContent = info.seconds;
  document.getElementById('since-date').textContent = info.start.toLocaleDateString();
}

// Inicializa os elementos no HTML (se ainda não existirem)
function setupTimerDisplay() {
  const counter = document.querySelector('.counter');
  if (!counter) return;
  counter.innerHTML = `
    <div class="counter-item"><span id="years">0</span><small>anos</small></div>
    <div class="counter-item"><span id="months">0</span><small>meses</small></div>
    <div class="counter-item"><span id="days">0</span><small>dias</small></div>
    <div class="counter-item"><span id="hours">0</span><small>horas</small></div>
    <div class="counter-item"><span id="minutes">0</span><small>min</small></div>
    <div class="counter-item"><span id="seconds">0</span><small>seg</small></div>
  `;
}

// gallery: clique para ampliar (simples)
function setupGalleryClicks() {
  document.querySelectorAll('.polaroid img').forEach(img => {
    img.addEventListener('click', () => {
      const w = window.open('', '_blank');
      w.document.write(`<img src="${img.src}" style="max-width:100%;height:auto">`);
    });
  });
}

// Inicialização
window.addEventListener('DOMContentLoaded', () => {
  setupTimerDisplay();
  updateCounter();
  setInterval(updateCounter, 1000); // atualiza a cada segundo
  setupGalleryClicks();
});
