// Scroll progress bar
window.addEventListener('scroll', () => {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  bar.style.width = pct + '%';
}, { passive: true });

// Action-list checkbox + progress tracker (used on action-plan page)
function updateProgress() {
  const lists = [
    { id: 'quick-wins', bar: 'bar-quick', pct: 'pct-quick' },
    { id: 'medium-effort', bar: 'bar-medium', pct: 'pct-medium' },
    { id: 'strategic', bar: 'bar-strategic', pct: 'pct-strategic' }
  ];
  lists.forEach(({ id, bar, pct }) => {
    const listEl = document.getElementById(id);
    if (!listEl) return;
    const items = listEl.querySelectorAll('li');
    const done = listEl.querySelectorAll('li.done');
    const percent = items.length ? Math.round((done.length / items.length) * 100) : 0;
    const barEl = document.getElementById(bar);
    const pctEl = document.getElementById(pct);
    if (barEl) barEl.style.width = percent + '%';
    if (pctEl) pctEl.textContent = percent + '%';
  });
}

document.querySelectorAll('.action-list li').forEach(li => {
  li.addEventListener('click', () => {
    li.classList.toggle('done');
    updateProgress();
  });
});

// Animate gap bars on scroll-into-view
const gapBars = document.querySelectorAll('.gap-bar-fill');
if (gapBars.length && 'IntersectionObserver' in window) {
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.style.width;
      }
    });
  }, { threshold: 0.5 });
  gapBars.forEach(b => barObserver.observe(b));
}
