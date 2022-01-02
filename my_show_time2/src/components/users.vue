<template>
  <div class="ArtistCard">
    <h3>{{ dataUser }}</h3>
    <p class="DateCss">date</p>
    <p class="GenreCss">genre</p>
    <p><button class="EditButton"> Editer </button></p>
  </div>
</template>

<script>
export default {
  name: "admin.vue",
  props: ['id', 'dataUser']
}
</script>

<style scoped>

</style>
