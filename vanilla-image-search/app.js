import getImages from './api.js';

const form = document.querySelector('form');
const loadingImage = document.querySelector('#loadingImage');
const imagesSection = document.querySelector('.images');

loadingImage.style.display = 'none';

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    // console.log('Form submitted...')
    const formData = new FormData(form);
    const searchTerm = formData.get('searchTerm');
    loadingImage.style.display = '';
    const images = await getImages(searchTerm);
    addImagesToPage(images);
});

function addImagesToPage(images) {
    imagesSection.innerHTML = '';
    images.forEach((item) => {
        const imageElement = document.createElement('img');
        imageElement.src = item.image;
        imagesSection.append(imageElement);
    })
    loadingImage.style.display = 'none';
}