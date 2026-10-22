(() => {
  'use strict';
  const data = window.PROJECT_DATA;
  const byId = (id) => document.getElementById(id);
  const taskById = (id) => data.tasks.find((task) => task.id === id);
  let actionVersion = 0;

  function showVideo(containerId, media, label) {
    const container = byId(containerId);
    container.querySelectorAll('video').forEach((video) => video.pause());
    container.replaceChildren();
    const wrapper = document.createElement('div');
    wrapper.className = 'media-slot';
    if (!media) {
      wrapper.classList.add('missing-video');
      const mark = document.createElement('span');
      mark.className = 'failure-mark';
      mark.setAttribute('aria-hidden', 'true');
      mark.textContent = '—';
      const title = document.createElement('strong');
      title.textContent = 'No robot execution';
      const note = document.createElement('p');
      note.textContent = 'Optimization failed due to a joint limit.';
      wrapper.append(mark, title, note);
    } else {
      const video = document.createElement('video');
      video.controls = true;
      video.playsInline = true;
      video.preload = 'none';
      video.muted = true;
      video.poster = media.poster;
      video.src = media.src;
      video.setAttribute('aria-label', label);
      wrapper.append(video);
    }
    container.append(wrapper);
  }

  function comparisonVideos() {
    return [...document.querySelectorAll('.comparison-grid video')];
  }

  function updatePlayButton() {
    const playing = comparisonVideos().some((video) => !video.paused && !video.ended);
    byId('play-comparison').textContent = playing ? 'Pause together' : 'Play together';
  }

  function bindComparisonVideos() {
    comparisonVideos().forEach((video) => {
      video.playbackRate = Number(byId('comparison-speed').value);
      ['play', 'pause', 'ended'].forEach((event) => video.addEventListener(event, updatePlayButton));
    });
  }

  byId('comparison-task').addEventListener('change', (event) => {
    actionVersion++;
    const task = taskById(event.target.value);
    showVideo('comparison-source', task.source, `${task.name} — generated source video`);
    [['ours', 'V²-STRep'], ['dream', 'Dream2Flow'], ['nova', 'NovaFlow']].forEach(([key, name]) => {
      showVideo(`comparison-${key}`, task[key], `${task.name} — ${name}`);
    });
    byId('comparison-task-title').textContent = task.name;
    byId('comparison-instruction').textContent = task.instruction;
    byId('comparison-status').textContent = '';
    bindComparisonVideos();
    updatePlayButton();
  });

  byId('play-comparison').addEventListener('click', async () => {
    const videos = comparisonVideos();
    const version = ++actionVersion;
    if (videos.some((video) => !video.paused && !video.ended)) {
      videos.forEach((video) => video.pause());
      return;
    }
    videos.forEach((video) => { if (video.ended) video.currentTime = 0; });
    const results = await Promise.allSettled(videos.map((video) => video.play()));
    if (version !== actionVersion) return;
    byId('comparison-status').textContent = results.some((result) => result.status === 'rejected') ? 'Some clips could not start. Use the individual video controls to play them.' : '';
    updatePlayButton();
  });

  byId('restart-comparison').addEventListener('click', () => {
    actionVersion++;
    comparisonVideos().forEach((video) => { video.pause(); video.currentTime = 0; });
    byId('comparison-status').textContent = '';
    updatePlayButton();
  });

  byId('comparison-speed').addEventListener('change', (event) => {
    comparisonVideos().forEach((video) => { video.playbackRate = Number(event.target.value); });
  });
  
  function applyTransferSpeed() {
    const video = byId('transfer-robot').querySelector('video');
  
    if (video) {
      video.playbackRate = Number(byId('transfer-speed').value);
    }
  }
  
  byId('transfer-task').addEventListener('change', (event) => {
    const task = taskById(event.target.value);
  
    showVideo(
      'transfer-source',
      task.transferSource,
      `${task.name} — generated source for transfer`
    );
  
    showVideo(
      'transfer-robot',
      task.transferRobot,
      `${task.name} — robot execution in a new scene`
    );
  
    applyTransferSpeed();
  });
  
  byId('transfer-speed').addEventListener('change', applyTransferSpeed);
  
  applyTransferSpeed();

  byId('copy-citation').addEventListener('click', async () => {
    const text = byId('bibtex-code').textContent;
    let copied = false;
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch (_) {
      const field = document.createElement('textarea');
      field.value = text;
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.append(field);
      field.select();
      try { copied = document.execCommand('copy'); } catch (_) { /* Manual selection remains available. */ }
      field.remove();
      byId('copy-citation').focus();
    }
    byId('copy-status').textContent = copied ? 'BibTeX copied.' : 'Select and copy the BibTeX text below.';
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) document.querySelectorAll('video').forEach((video) => video.pause());
  });
  bindComparisonVideos();
})();



(() => {
  const speedSelect = document.getElementById('adaptation-speed');
  if (!speedSelect) return;

  function applyAdaptationSpeed() {
    const speed = Number(speedSelect.value);

    document.querySelectorAll('#adaptation video.adaptation-robot')
      .forEach((video) => {
        video.playbackRate = speed;
      });
  }

  speedSelect.addEventListener('change', applyAdaptationSpeed);
  applyAdaptationSpeed();
})();
