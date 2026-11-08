// Paste your verified public App Store URL below when available.
// Until then, download badges open an email requesting iOS access.
const PRUNITY_APP_STORE_URL = '';
if (/^https:\/\//.test(PRUNITY_APP_STORE_URL)) {
  document.querySelectorAll('.app-link').forEach(link => {
    link.href = PRUNITY_APP_STORE_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
  const note = document.querySelector('#download-note');
  if (note) note.hidden = true;
} else {
  document.querySelectorAll('.app-link').forEach(link => {
    link.href = 'mailto:support@prunityaudio.com?subject=Prunity%20iOS%20access';
  });
}
