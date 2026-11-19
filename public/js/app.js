const folderLink = document.getElementById('folderLink');
const connectButton = document.getElementById('connectButton');
const statusText = document.getElementById('status');

connectButton.addEventListener('click', () => {
  const link = folderLink.value.trim();

  if (!link) {
    statusText.textContent = 'Silakan masukkan link folder Google Drive.';
    return;
  }

  if (!link.includes('drive.google.com')) {
    statusText.textContent = 'Link yang dimasukkan bukan link Google Drive.';
    return;
  }

  statusText.textContent = 'Link berhasil dibaca. Fitur koneksi Google Drive akan dibuat pada tahap berikutnya.';
});
