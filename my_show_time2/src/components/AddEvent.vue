<template>
  <transition name="modal">
    <div v-if="isOpen">
      <div class="rectangle" @click.self="isOpen = false;">
        <div class="modal">
          <h1>Créer un Evenement</h1>
          {{name}}
          <h2><input v-model="name" placeholder="name"></h2>
          <select v-model="selected">
            <option v-for="artist in artists" v-bind:value="artist.value">
              {{ artist.name }}
            </option>
          </select>
          <span>Sélectionné : {{ selected }}</span>
          <p>
            <input v-on:click="createEvent()" type="submit" value="Submit" >
          </p>
        </div>
      </div>
    </div>
  </transition>
  <button @click="isOpen = !isOpen;">
    {{ isOpen ? "Close" : "Créer un Evenement" }}
  </button>
</template>

<script>
import axios from "axios";
import artists from '@/components/artists.vue'

export default {
  components: { artists},
  data: function () {
    return {
      isOpen: false,
      name: null,
      selected: 'artistes',
      artists: [],
    };
  },
  mounted() {
    axios.get('http://localhost:3000/artists')
        .then(response => {
          this.artists = response.data;
          console.log("Artistooo", response.data)
        })
  },
  methods: {
    createEvent: function () {
      axios.post('http://localhost:3000/events',
          {
            "name": this.name,


          })
          .then(creation => {
            console.log(creation)
            this.events = creation.data.events;
          })
      {alert("Vous venez de créer un Evénement");}
    }

  },
}
</script>

<style scoped>

</style>
