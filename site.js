'use strict';

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#nav-links');
function closeMenu() {
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('open', open);
  menu.setAttribute('aria-expanded', String(open));
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});

const compilerData = JSON.parse(document.querySelector('#compiler-data').textContent);
const metricNames = { f1: 'F1', recall: 'Recall', precision: 'Precision' };
const chartRows = [...document.querySelectorAll('.comparison-row')];
const metricButtons = [...document.querySelectorAll('[data-metric]')];
function changeMetric(metric) {
  metricButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.metric === metric)));
  const descriptions = [];
  chartRows.forEach((element, index) => {
    const data = compilerData[index];
    const before = data.rows[0][metric];
    const after = data.rows[data.rows.length - 1][metric];
    const gain = after - before;
    const xBefore = 6 + 3.88 * before;
    const xAfter = 6 + 3.88 * after;
    element.querySelector('.gain-line').setAttribute('x1', xBefore);
    element.querySelector('.gain-line').setAttribute('x2', xAfter);
    element.querySelector('.direct-point').setAttribute('cx', xBefore);
    element.querySelector('.acg-point').setAttribute('cx', xAfter);
    element.querySelector('.before').textContent = before.toFixed(2);
    element.querySelector('.after').textContent = `${after.toFixed(2)}%`;
    element.querySelector('.gain').textContent = `${gain > 0 ? '+' : ''}${gain.toFixed(2)} points`;
    const description = `${data.model}: ${metricNames[metric]} ${before.toFixed(2)}% direct, ${after.toFixed(2)}% with ACG`;
    element.querySelector('svg').setAttribute('aria-label', description);
    descriptions.push(description);
  });
  document.querySelector('#metric-announcement').textContent = descriptions.join('. ');
}
metricButtons.forEach(button => button.addEventListener('click', () => changeMetric(button.dataset.metric)));

const tabs = [...document.querySelectorAll('.example-tabs [role="tab"]')];
function selectTab(tab, focus = false) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let target;
    if (event.key === 'ArrowRight') target = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') target = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') target = 0;
    if (event.key === 'End') target = tabs.length - 1;
    if (target !== undefined) {
      event.preventDefault();
      selectTab(tabs[target], true);
    }
  });
});

const copyButton = document.getElementById('copy-citation');
copyButton.addEventListener('click', async () => {
  const citation = document.getElementById('citation');
  const status = document.getElementById('copy-status');
  let copied = false;
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(citation.textContent);
      copied = true;
    } catch { /* Fall back to selection on file previews and restricted browsers. */ }
  }
  if (!copied) {
    const range = document.createRange();
    range.selectNodeContents(citation);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    try { copied = document.execCommand('copy'); } catch { copied = false; }
    if (copied) selection.removeAllRanges();
  }
  copyButton.textContent = copied ? 'Copied' : 'Select and copy';
  status.textContent = copied ? 'BibTeX copied to clipboard.' : 'Citation selected. Use your browser’s copy command.';
  window.setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; }, 2500);
});
