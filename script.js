function animates(id) {
    const box = document.getElementById(id);
    box.addEventListener('click', () => {
    box.classList.add('animate-fade-in-out');
  setTimeout(() => {
    box.classList.remove('animate-fade-in-out');
  }, 200);
});

  }
  
  