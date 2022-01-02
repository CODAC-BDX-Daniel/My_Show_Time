<template>
  <transition name="modal">
    <div v-if="isOpen">
      <div class="rectangle" @click.self="isOpen = false;">
        <div class="modal">
          <h1>Créer un Artiste</h1>
          {{name}}
          <h2><input v-model="name" placeholder="name"></h2>
          <p>
            <input v-on:click="createArtist()" type="submit" value="Submit" >
          </p>
        </div>
      </div>
    </div>
  </transition>
  <button @click="isOpen = !isOpen;">
    {{ isOpen ? "Close" : "Créer un Artiste" }}
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
    createArtist: function () {
      axios.post('http://localhost:3000/artists',
          {
            "name": this.name,
          })
          .then(creation => {
            console.log(creation)
            this.artists = creation.data.artists;
          })
      {alert("Vous venez de créer un Artiste");}
    }

  },
}
</script>

<style>
.modal {
  width: 500px;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
}
.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}
button {
  padding: 7px;
  margin-top: 10px;
  background-color: #171616;
  color: white;
  font-size: 1.1rem;
}
input {
  padding: 7px;
  margin-top: 10px;
  background-color: #171616;
  color: white;
  font-size: 1.1rem;
}

.rectangle {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}
</style>
