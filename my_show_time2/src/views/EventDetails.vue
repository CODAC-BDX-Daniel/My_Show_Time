<template>
  <div>
    <router-link :to="{name:'UpdateEvent', params:{id:id}}" tag="button">
      <button>Cliquer pour modifier l'évenement</button>
    </router-link>
  </div>
  <div class="contenant">
    <div class="texte_centrer">
      <h2>{{ name }}</h2>
      <textarea cols="50" rows="3" wrap="hard" readonly="yes">{{ name }}</textarea>
      <div class="AlignUsersCard">
        <event v-for="event in events" :key="event.id" :dataEvent="event.name" :id="event._id"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import event from "@/components/event";
import UpdateEvent from "@/views/UpdateEvent";


export default {
  name: 'EventDetail',
  props: ['name', 'id'],
  components: {event, UpdateEvent  },
  data () {
    return {
      event: [],
      name: null,

    }
  },
  mounted() {
    axios.get('http://localhost:3000/events/'+this.id)
        .then(response => {
          this.name = response.data.name;
          console.log("events",response.data.name)
        })
  },
}
</script>

<style>

</style>
