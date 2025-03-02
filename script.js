// Select DOM elements
const dogImage = document.getElementById('dog-image');
const nextBtn = document.getElementById('next-btn');

// Function to fetch a random dog image
async function fetchDogImage() {
    try {
        // Fade out current image
        dogImage.style.opacity = 0;

        // Fetch data from Dog CEO API
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();

        // Update image source and fade in
        dogImage.src = data.message;
        setTimeout(() => {
            dogImage.style.opacity = 1;
        }, 100); // Small delay for smooth transition
    } catch (error) {
        console.error('Error fetching dog image:', error);
        dogImage.alt = 'Failed to load image';
    }
}

// Load initial image
fetchDogImage();

// Add event listener to button
nextBtn.addEventListener('click', fetchDogImage);
