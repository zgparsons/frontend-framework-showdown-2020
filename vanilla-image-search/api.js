// API created by https://coding.garden
// URL for API Requests:
const API_URL = `https://nature-image-api.now.sh/search?q=`;

// Function to make async call to Image API and return data:
// * Fucntion is 'export default' so it can be used in other file...
export default async function getImages(searchTerm) {
    const response = await fetch(`${API_URL}${searchTerm}`);
    const json = await response.json();
    return json.images;
}