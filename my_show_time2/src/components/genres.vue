<template>
  <div class="ArtistCard">
    <h2>{{ dataGenre }}</h2>
    <p class="DateCss">date</p>
    <p class="GenreCss">genre</p>
    <p><button class="EditButton"> Editer </button></p>
  </div>
</template>

<script>
export default {
  name: "admin.vue",
  props: ['id', 'dataGenre']
}
</script>

<style scoped>

</style>
