document.addEventListener('DOMContentLoaded', () => {
  const buttons = [...document.querySelectorAll('.topic-button')];
  const rows = [...document.querySelectorAll('.note-row')];
  if (!buttons.length) return;
  function filter(topic) {
    let count = 0;
    rows.forEach(row => {
      const show = topic === 'All' || JSON.parse(row.dataset.topics).includes(topic);
      row.hidden = !show;
      if (show) count++;
    });
    buttons.forEach(button => {
      const active = button.dataset.topic === topic;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    document.querySelector('#filter-status').textContent = `${count} ${count === 1 ? 'note' : 'notes'} shown${topic === 'All' ? '' : ' in ' + topic}.`;
    document.querySelector('.filter-empty').hidden = count !== 0;
  }
  function fromURL() {
    const topic = new URLSearchParams(location.hash.slice(1)).get('category') || 'All';
    filter(topic);
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    const topic = button.dataset.topic;
    history.replaceState(null, '', topic === 'All' ? '#listing-notes' : '#category=' + encodeURIComponent(topic));
    filter(topic);
  }));
  addEventListener('hashchange', fromURL);
  fromURL();
});
