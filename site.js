/* Add your verified public App Store / TestFlight URL when it is available. */
const PRUNITY = {
  iosUrl: ''
};

const iosLink = document.querySelector('#ios-download');
if (PRUNITY.iosUrl && /^https:\/\//.test(PRUNITY.iosUrl)) {
  iosLink.href = PRUNITY.iosUrl;
  iosLink.textContent = 'Get Prunity for iOS ↗';
  iosLink.target = '_blank';
  iosLink.rel = 'noopener noreferrer';
  document.querySelector('#download-note').hidden = true;
}

// The matching before/after recordings are included in assets/audio.
// Pause the other recording when either player begins, to make comparisons easier.
const players = [document.getElementById('audio-before'), document.getElementById('audio-after')];
players.forEach(player => {
  player.addEventListener('play', () => {
    players.forEach(other => { if (other !== player) other.pause(); });
  });
});
