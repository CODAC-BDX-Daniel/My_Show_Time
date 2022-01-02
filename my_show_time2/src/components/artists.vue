<template>
  <div class="ArtistCard">
    <h1>{{ dataArtist }}</h1>
    <p class="DateCss">date</p>
    <p class="GenreCss">genre</p>
    <p><button class="EditButton"> Editer </button></p>
  </div>
</template>

<script>
export default {
  name: "admin.vue",
  props: ['id', 'dataArtist']
}
</script>

<style>
.ArtistCard{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: "sans-serif";
  width: 200px; /* à modifier selon vos besoins */
  overflow: hidden;
  text-overflow: ellipsis;
}

.DateCss {
  color: grey;
  font-size: 22px;
}
.GenreCss {
  color: black;
  font-size: 22px;
}


.EventCard button:hover {
  opacity: 0.7;
}

.EditButton{
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #171616;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}
</style>
