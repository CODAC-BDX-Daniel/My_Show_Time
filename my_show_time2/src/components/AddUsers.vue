<template>
  <transition name="modal">
    <div v-if="isOpen">
      <div class="rectangle" @click.self="isOpen = false;">
        <div class="modal">
          <h1>Créer un Utilisateurs</h1>
          {{email}}
          {{password}}
          <h2><input v-model="email" placeholder="email"></h2>
          <h2><input v-model="password" placeholder="mot de passe"></h2>
          <p>
            <input v-on:click="createArtist()" type="submit" value="Submit" >
          </p>
        </div>
      </div>
    </div>
  </transition>
  <button @click="isOpen = !isOpen;">
    {{ isOpen ? "Close" : "Créer un Utilisateur" }}
  </button>
</template>

<script>
import axios from "axios";
import artists from '@/components/artists.vue'

export default {
  data: function () {
    return {
      isOpen: false,
      email: null,
      password: null,
    };
  },
  methods: {
    createArtist: function () {
      axios.post('http://localhost:3000/users',
          {
            "email": this.email,
            "password": this.password,
          })
          .then(creation => {
            console.log(creation)
            this.users = creation.data.users;
          })
      {alert("Vous venez de créer un Utlisateur");}
    }

  },
}
</script>

<style scoped>

</style>
