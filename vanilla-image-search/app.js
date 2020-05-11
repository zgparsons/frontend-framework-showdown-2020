// Import function from api.js file:
import getImages from './api.js';

// Get neccessary elements from HTML page
const form = document.querySelector('form');
const loadingImage = document.querySelector('#loadingImage');
const imagesSection = document.querySelector('.images');

// Begin with no loading image - set style.display to 'none':
loadingImage.style.display = 'none';

// Listen for submit event on form:
form.addEventListener('submit', async (event) => {
    // Browser default for form submission needs to be prevented:
    event.preventDefault();

    // Clear any current elements in the section to be filled with new images:
    imagesSection.innerHTML = '';
    
    // Create new object from the HTML form and get the search term we need for the API search:
    // 'FormData' is a Web API provided by browser - https://developer.mozilla.org/en-US/docs/Web/API/FormData
    const formData = new FormData(form);
    const searchTerm = formData.get('searchTerm');

    // As the API call is made show the loading image:
    loadingImage.style.display = '';
    
    // Make the API call:
    const images = await getImages(searchTerm);

    // Finally add the images from the API call to the page:
    addImagesToPage(images);
});

function addImagesToPage(images) {

    // One way to do this (could be vulnerable to XSS if data not sanitized):
    // imagesSection.innerHTML = images.reduce((html, image) => {
    //     return html + `<img src="${image.image}">`;
    // }, '');

    // A safer way to do this:
    // Iterate through the data returned from the API:
    images.forEach((item) => {
        // Create an HTML element for the image:
        const imageElement = document.createElement('img');
        // Set the src of that element to the current image URL:
        imageElement.src = item.image;
        // Append the element to the current HTML node / section:
        imagesSection.append(imageElement);
    })
    // Remove the loading image once API call made and data added to page:
    loadingImage.style.display = 'none';
}