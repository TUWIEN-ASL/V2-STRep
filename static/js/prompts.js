(() => {
  'use strict';

  function initPrompts() {
    const section = document.getElementById('prompts');
    if (!section || section.dataset.promptReady === 'true') return;

    const tablist = section.querySelector('.prompt-tabs');
    const tabs = Array.from(section.querySelectorAll('.prompt-tab'));
    const panels = Array.from(section.querySelectorAll('.prompt-panel'));
    const status = section.querySelector('.prompt-status');
    if (!tablist || !tabs.length || tabs.length !== panels.length) return;
    section.dataset.promptReady = 'true';

    function activateTab(tab, focus = false) {
      const target = tab.getAttribute('aria-controls');
      tabs.forEach((item) => {
        const active = item === tab;
        item.setAttribute('aria-selected', String(active));
        item.tabIndex = active ? 0 : -1;
      });
      panels.forEach((panel) => { panel.hidden = panel.id !== target; });
      status.textContent = '';
      if (focus) tab.focus();
    }

    tablist.setAttribute('role', 'tablist');
    tabs.forEach((tab) => {
      tab.setAttribute('role', 'tab');
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', tab.id);
      tab.addEventListener('click', () => activateTab(tab));
    });

    tablist.addEventListener('keydown', (event) => {
      const index = tabs.indexOf(event.target);
      if (index < 0) return;
      let next;
      switch (event.key) {
        case 'ArrowRight': next = (index + 1) % tabs.length; break;
        case 'ArrowLeft': next = (index - 1 + tabs.length) % tabs.length; break;
        case 'Home': next = 0; break;
        case 'End': next = tabs.length - 1; break;
        default: return;
      }
      event.preventDefault();
      activateTab(tabs[next], true);
    });

    async function copyText(text) {
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(text);
          return true;
        } catch (_) {
          // Use the local-file fallback if clipboard access is unavailable.
        }
      }
      const previousFocus = document.activeElement;
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.readOnly = true;
      textarea.style.cssText = 'position:fixed;left:0;top:0;opacity:0;width:1px;height:1px;';
      document.body.appendChild(textarea);
      textarea.select();
      let copied = false;
      try { copied = document.execCommand('copy'); }
      catch (_) { copied = false; }
      finally {
        textarea.remove();
        if (previousFocus && previousFocus.focus) {
          previousFocus.focus({ preventScroll: true });
        }
      }
      return copied;
    }

    panels.forEach((panel) => {
      const text = panel.querySelector('.prompt-text');
      const expand = panel.querySelector('[data-prompt-expand]');
      const copy = panel.querySelector('[data-prompt-copy]');
      expand.hidden = false;
      copy.hidden = false;

      expand.addEventListener('click', () => {
        const expanded = text.classList.toggle('is-expanded');
        expand.setAttribute('aria-expanded', String(expanded));
        expand.textContent = expanded ? 'Collapse' : 'Expand';
      });

      copy.addEventListener('click', async () => {
        copy.disabled = true;
        const copied = await copyText(text.textContent);
        copy.disabled = false;
        status.textContent = copied
          ? 'Prompt copied.'
          : 'Copy unavailable. Select the prompt text or use Download .txt.';
      });
    });

    activateTab(tabs[0]);
    tablist.hidden = false;
    section.classList.add('is-enhanced');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPrompts, { once: true });
  } else {
    initPrompts();
  }
})();
