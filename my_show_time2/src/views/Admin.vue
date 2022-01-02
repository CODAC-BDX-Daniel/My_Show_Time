<template>
  <div class="AdminTitle">Admin</div>
  <div class="AdminSubTitle">Evenements</div>
  <AddEvent class="BtnCreate" href="javascript:window.location.reload()">Créer Artiste</AddEvent>
  <div class="AlignUsersCard">
    <event v-for="event in events" :key="event.id" :dataEvent="event.name" :id="event._id"/>
  </div>
  <div class="AdminSubTitle">Artistes</div>
  <AddArtist class="BtnCreate" href="javascript:window.location.reload()">Créer Artiste</AddArtist>
  <div class="AlignArtistCard">
    <artists v-for="artist in artists" :key="artist.id" :dataArtist="artist.name" :id="artist._id"/>
  </div>
  <div class="AdminSubTitle">Genres Musicaux</div>
  <AddGenre class="BtnCreate" href="javascript:window.location.reload()">Créer un style </AddGenre>
  <div class="AlignUsersCard">
    <genres v-for="genre in genres" :key="genre.id" :dataGenre="genre.name" :id="genre._id"/>
  </div>
  <div class="AdminSubTitle">Utilisateurs</div>
  <AddUsers class="BtnCreate" href="javascript:window.location.reload()">Créer Artiste</AddUsers>
  <div class="AlignUsersCard">
    <users v-for="user in users" :key="user.id" :dataUser="user.email" :id="user._id"/>
  </div>

</template>

<script>
import artists from '@/components/artists.vue'
import event from "@/components/event";
import axios from 'axios'
import AddArtist from "@/components/AddArtist";
import AddEvent from "@/components/AddEvent";
import users from "@/components/users";
import AddUsers from "@/components/AddUsers";
import genres from "@/components/genres";
import AddGenre from "@/components/AddGenre";

export default {
  name: 'Home',
  components: {AddGenre, AddArtist, artists, event, AddEvent, users, AddUsers, genres},
  data() {
    return {
      artists: [],
      users:[],
      events:[],
      genres:[]
    }
  },
  mounted() {
    axios.get('http://localhost:3000/artists')
        .then(response => {
          console.log("utlisateurs",response.data)
          this.artists = response.data;
        })
    axios.get('http://localhost:3000/users')
        .then(response => {
          console.log("utilisateurs",response.data)
          this.users = response.data;
        })
    axios.get('http://localhost:3000/events')
        .then(response => {
          console.log("events",response.data)
          this.events = response.data;
        })
    axios.get('http://localhost:3000/genres')
        .then(response => {
          console.log("genres",response.data)
          this.genres = response.data;
        })

  }

}
</script>
<style>

.AlignArtistCard {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  grid-template-rows: auto auto auto auto auto auto auto;
  grid-gap: 10px;
  padding: 10px;
}
.AlignUsersCard {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  grid-template-rows: auto auto auto auto auto auto auto;
  grid-gap: 10px;
  padding: 10px;
}
.BtnCreate {
  margin: 30px;

}

body {
  background-color: #eae8e8;
}

.AdminTitle {
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: #171616;
  color: #f8f4f4;
  padding: 10px;
  font-size: xx-large;
  font-family: "sans-serif";
  text-decoration: none;
}
.AdminSubTitle {
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: #464444;
  color: #f8f4f4;
  padding: 5px;
  font-size: x-large;
  font-family: "sans-serif";
  text-decoration: none;
}
</style>
