//Yeswanth Sai Edhala code
// Select DOM elements

const dogImage = document.getElementById('dog-image');
const nextBtn = document.getElementById('next-btn');


async function fetchDogImage() {
    try {
       
        dogImage.style.opacity = 0;

        
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();

      
        dogImage.src = data.message;
        setTimeout(() => {
            dogImage.style.opacity = 1;
        }, 100); 
    } catch (error) {
        console.error('Error fetching dog image:', error);
        dogImage.alt = 'Failed to load image';
    }
}


fetchDogImage();


nextBtn.addEventListener('click', fetchDogImage);
