<template>
  <div id="app">
  <intro></intro>
  <h2>Vue JS Image Search</h2>
  <form @submit.prevent="formSubmitted">
      <label for="searchTerm">Search Term</label>
      <input v-model="searchTerm" class="u-full-width" type="text" id="searchTerm" name="searchTerm">
      <button type="submit">Search</button>
  </form>
  <img v-if="loading" id="loadingImage" src="https://imgur.com/LVHmLnb.gif">
  <section class="images">
    <img v-for="image in images" :key="image" :src="image">
  </section>
  </div>
</template>

<script>
import Intro from './components/Intro.vue'
import getImages from './api';

export default {
  name: 'App',
  data: () => ({
    searchTerm: '',
    loading: false,
    images: [],
  }),
  methods: {
    async formSubmitted() {
      this.loading = true;
      this.images = [];
      this.images = await getImages(this.searchTerm);
      this.loading = false;
    }
  },
  components: {
    Intro
  }
}
</script>

<style>
body {
  width: 80%;
  margin: 2em auto 0 auto;
}

.images {
  column-count: 3;
}

img {
  width: 100%;
}

@media (max-width: 1200px) {
  .images {
    column-count: 2;
  }
}

@media (max-width: 800px) {
  .images {
    column-count: 1;
  }
}
</style>
