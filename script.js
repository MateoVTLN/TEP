document.querySelectorAll('.carousel-container').forEach((container) => {
    let images = container.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    let totalImages = images.length;
  
    if (totalImages === 0) {
      console.error('Aucune image trouvée pour le carousel.');
      return;
    }
  
    // Affiche la première image au chargement
    images[currentIndex].classList.add('active');
  
    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
          img.classList.add('active');
          console.log(`Affichage de l'image : ${img.src}`);
        }
      });
    }
  
    // Navigation avec les boutons
    container.querySelector('.next').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
    });
  
    container.querySelector('.prev').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      showImage(currentIndex);
    });
  
    // Défilement automatique toutes les 5 secondes
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
    }, 5000);
  });
  