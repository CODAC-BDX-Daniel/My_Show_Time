<template>
  <div>
      <h2><input class="titre1"  v-model="name" placeholder="name"></h2>

      <p>
        <router-link :to="{name:'Admin'}" tag="button">
        <input class="submit" v-on:click="UpdateEvent()" type="submit" value="Valider">
        </router-link>
      </p>
      <p>
        <router-link :to="{name:'Admin'}" tag="button">
          <button class="delete" v-on:click="DeleteEvent()" type="delete" value="Delete">Supprimer</button>
        </router-link>
      </p>
    <event v-for="event in events" :key="event.id" :dataEvent="event.name" :id="event._id"/>
  </div>
</template>

<script>

import event from "@/components/event";
import axios from 'axios'


export default {
  name: '"UpdateEvent"',
  props: ['name', 'id'],
  components: { event },

  data : function () {
    return {
      event: [],
      name: null,
    };
  },
  methods: {
    UpdateEvent: function () {
      axios.patch('http://localhost:3000/events/'+this.id,
          {
            "name": this.name,

          })
          .then(modification => {
            console.log("modification",modification)

            {alert("Vous venez de modifier cette évenement");}
          })
    },

    DeleteEvent: function () {
      axios.delete('http://localhost:3000/events/'+this.id,)

          .then(supprimer => {
            console.log(supprimer)
            /*this.postits = modification.data.notes.id;*/

            {alert("Vous venez de supprimer cette évenement");}
          })
    }
  },

  mounted() {
    axios.get('http://localhost:3000/events/'+this.id)
        .then(response => {

          //Stocker titre

          this.name = response.data.event.name

          console.log(response.data.event.name)

        })

  },
}
</script>

<style scoped>

</style>
