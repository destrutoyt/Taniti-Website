window.addEventListener('load', () => {
  const intro = document.getElementById('intro');

  setTimeout(() => {
    intro.classList.add('hidden');
    setTimeout(() => {
      intro.style.display = 'none';
    }, 1000);
  }, 2000); // Display intro for 3 seconds
});
