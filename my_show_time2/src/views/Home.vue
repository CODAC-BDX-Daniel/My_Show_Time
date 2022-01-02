<template>
  <div class="AlignEventCard">
<event v-for="event in events" :key="event.id" :dataEvent="event.name" :id="event._id"/>
  </div>
</template>

<script>
import event from '@/components/event.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {event},
  data() {
    return {
      events: []
    }
  },
  mounted() {
    axios.get('http://localhost:3000/events')
        .then(response => {
          console.log("evenements", response.data)
          this.events = response.data;
        })
  }

}
</script>
<style>

.AlignEventCard {
  display: grid;
  grid-template-columns: auto auto auto auto auto ;
  grid-template-rows: auto auto auto auto;
  grid-gap: 10px;
  padding: 10px;
}
body {
  background-color: #eae8e8;
}
</style>
