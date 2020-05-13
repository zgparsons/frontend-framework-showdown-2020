<template>
    <div class="intro">
        <h1>Vue Image Search 👨‍💻</h1>
        <p>This is a project made by <a href="https://zacharyparsons.co.uk">Zachary</a> while watching a <a href="https://www.twitch.tv/codinggarden">Coding Garden live stream</a>.</p>
        <p>The purpose of this project is to create an image search SPA using different frontend frameworks to compare them.</p>
        <ol>
            <li>Vue Image Search - You're here now! 📍</li>
            <li><a href="https://react-image-search-z.now.sh/">React Image Search</a></li>
            <li><a href="https://vanilla-image-search-z.now.sh">Vanilla Image Search</a></li>
            <li><a href="https://angular-image-search-z.now.sh">Angular Image Search</a></li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    components: {
    
  }
}
</script>

<style>
    .intro {
        width: 80%;
        margin: auto;
        background-color: #EEE;
        text-align: center;
    }

    h1 {
        font-size: 2rem;
    }
</style>