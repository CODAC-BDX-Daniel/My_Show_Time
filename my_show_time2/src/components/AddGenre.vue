<template>
  <transition name="modal">
    <div v-if="isOpen">
      <div class="rectangle" @click.self="isOpen = false;">
        <div class="modal">
          <h1>Créer un Genre</h1>
          {{name}}
          <h2><input v-model="name" placeholder="nom du style de musique"></h2>
          <p>
            <input v-on:click="createEvent()" type="submit" value="Submit" >
          </p>
        </div>
      </div>
    </div>
  </transition>
  <button @click="isOpen = !isOpen;">
    {{ isOpen ? "Close" : "Créer un Style" }}
  </button>
</template>

<script>
import axios from "axios";
import artists from '@/components/artists.vue'

export default {
  data: function () {
    return {
      isOpen: false,
      name: null,
    };
  },
  methods: {
    createEvent: function () {
      axios.post('http://localhost:3000/genres',
          {
            "name": this.name,
          })
          .then(creation => {
            console.log(creation)
            this.genres = creation.data.genres;
          })
      {alert("Vous venez de créer un Genre");}
    }

  },
}
</script>

<style scoped>

</style>
