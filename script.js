// Liste des URLs d'images
const imageList = [
    "https://risibank.fr/cache/medias/0/19/1942/194208/full.png",
    "https://risibank.fr/cache/medias/0/10/1095/109551/full.png",
    "https://risibank.fr/cache/medias/0/14/1437/143788/full.png",
    "https://risibank.fr/cache/medias/0/18/1873/187333/full.png",
    "https://risibank.fr/cache/medias/0/14/1477/147728/full.png",
    "https://risibank.fr/cache/medias/0/13/1388/138884/full.png",
    "https://risibank.fr/cache/medias/0/10/1038/103818/full.gif",
    "https://risibank.fr/cache/medias/0/1/136/13653/thumb.png",
    "https://risibank.fr/cache/medias/0/28/2844/284448/thumb.png",
    "https://risibank.fr/cache/medias/0/14/1468/146854/full.png",
    "https://risibank.fr/cache/medias/0/14/1468/146854/full.png",
    "https://risibank.fr/cache/medias/0/28/2844/284448/thumb.png",
    "https://risibank.fr/cache/medias/0/1/136/13653/thumb.png",
    "https://risibank.fr/cache/medias/0/10/1038/103818/full.gif",
    "https://risibank.fr/cache/medias/0/0/0/12/thumb.gif",
    "https://risibank.fr/cache/medias/0/3/325/32581/thumb.png",
    "https://risibank.fr/cache/medias/0/0/6/619/thumb.gif",
    "https://risibank.fr/cache/medias/0/1/160/16039/thumb.png",
    "https://risibank.fr/cache/medias/0/0/25/2500/thumb.gif",
    "https://risibank.fr/cache/medias/0/0/67/6754/thumb.png",
    "https://risibank.fr/cache/medias/0/1/190/19055/thumb.gif",
    "https://risibank.fr/cache/medias/0/24/2403/240375/thumb.png",
    "https://risibank.fr/cache/medias/0/0/0/14/thumb.gif",
    "https://risibank.fr/cache/medias/0/0/7/702/thumb.gif",
    "https://risibank.fr/cache/medias/0/0/7/700/thumb.gif",
    "https://risibank.fr/cache/medias/0/1/134/13495/thumb.gif",
    "https://risibank.fr/cache/medias/0/0/16/1612/thumb.gif",
    "https://risibank.fr/cache/medias/0/23/2319/231942/thumb.gif",
    "https://risibank.fr/cache/medias/0/23/2383/238399/thumb.gif",
    "https://risibank.fr/cache/medias/0/0/91/9151/thumb.gif"
];

// Fonction pour mélanger un tableau (algorithme de Fisher-Yates)
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Échange les éléments
    }
    return arr;
}

// Fonction pour ajouter des images aléatoires à un carrousel
function addImagesToCarousel(container, numImages = 8) {
    const shuffledImages = shuffleArray([...imageList]);  // Mélanger les images
    const images = shuffledImages.slice(0, numImages);     // Sélectionner les premières images après le mélange

    images.forEach(imageURL => {
        const imgElement = document.createElement('img');
        imgElement.src = imageURL;
        imgElement.classList.add('carousel-image');
        container.querySelector('.carousel').appendChild(imgElement);
    });
}

// Appliquer le mélange d'images aux carrousels
document.querySelectorAll('.carousel-container').forEach((container) => {
    addImagesToCarousel(container); // Ajouter des images aléatoires au carrousel

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
