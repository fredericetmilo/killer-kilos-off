(() => {
  'use strict';
  const audio = document.getElementById('podcast-audio');
  if (!audio) return;
  const player = audio.closest('.podcast-player');
  const controls = player.querySelector('.podcast-controls');
  const button = player.querySelector('.podcast-play');
  const seek = player.querySelector('.podcast-progress');
  const elapsed = player.querySelector('.podcast-elapsed');
  const duration = player.querySelector('.podcast-duration');
  const volume = player.querySelector('#podcast-volume');
  const status = player.querySelector('.podcast-status');
  let failed = false;
  const stopWave = () => player.classList.remove('podcast-is-playing');
  audio.addEventListener('playing', () => {
    if (!audio.paused && !audio.ended && !failed) player.classList.add('podcast-is-playing');
  });
  ['pause', 'ended', 'waiting', 'stalled', 'seeking', 'error', 'emptied', 'abort'].forEach(event => audio.addEventListener(event, stopWave));
  const finiteDuration = () => Number.isFinite(audio.duration) && audio.duration > 0;
  const format = seconds => {
    const total = Math.max(0, Math.round(Number(seconds) || 0));
    return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
  };
  const updateButton = () => {
    button.setAttribute('aria-label', audio.paused ? 'Lire le podcast' : 'Mettre le podcast en pause');
    button.querySelector('span').textContent = audio.paused ? '▶' : 'Ⅱ';
  };
  const update = () => {
    elapsed.textContent = format(audio.currentTime);
    seek.value = String(audio.currentTime || 0);
    const total = Math.max(0, Math.floor(audio.currentTime || 0));
    seek.setAttribute('aria-valuetext', `${Math.floor(total / 60)} minutes ${total % 60} secondes`);
    if (finiteDuration()) {
      seek.max = String(audio.duration);
      seek.disabled = failed;
      duration.textContent = format(audio.duration);
    }
  };
  const fallback = message => {
    stopWave();
    failed = true;
    controls.hidden = true;
    audio.hidden = false;
    audio.controls = true;
    player.classList.remove('podcast-enhanced');
    status.textContent = message;
    status.hidden = false;
  };
  if (!audio.canPlayType('audio/mp4')) {
    status.textContent = 'Ce navigateur ne reconnaît pas le format M4A. Vous pouvez télécharger le podcast pour l’écouter dans un lecteur compatible.';
    status.hidden = false;
    return;
  }
  button.addEventListener('click', async () => {
    if (failed) return;
    if (!audio.paused) { audio.pause(); return; }
    button.disabled = true;
    try {
      if (finiteDuration() && audio.currentTime >= audio.duration) audio.currentTime = 0;
      await audio.play();
      status.hidden = true;
    } catch (error) {
      if (error.name !== 'AbortError') fallback('La lecture n’a pas pu démarrer. Essayez le lecteur audio ci-dessous ou téléchargez le podcast.');
    } finally {
      button.disabled = false;
      updateButton();
    }
  });
  seek.addEventListener('input', () => {
    if (!finiteDuration() || failed) return;
    audio.currentTime = Math.max(0, Math.min(audio.duration, Number(seek.value) || 0));
    update();
  });
  volume.addEventListener('input', () => {
    try { audio.volume = Math.max(0, Math.min(1, Number(volume.value))); }
    catch (_) { /* Certains appareils imposent le contrôle du volume système. */ }
  });
  audio.addEventListener('volumechange', () => { volume.value = String(audio.volume); });
  ['loadedmetadata', 'durationchange', 'timeupdate', 'seeked'].forEach(event => audio.addEventListener(event, update));
  ['play', 'pause', 'ended'].forEach(event => audio.addEventListener(event, updateButton));
  audio.addEventListener('error', () => fallback('Le fichier audio n’a pas pu être chargé. Vérifiez le dossier audio ou utilisez le lien de téléchargement.'));
  audio.controls = false;
  audio.hidden = true;
  controls.hidden = false;
  player.classList.add('podcast-enhanced');
  update();
  updateButton();
})();
