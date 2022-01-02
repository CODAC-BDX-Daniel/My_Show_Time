<template>
  <div>

    <transition name="modal">
      <div v-if="isOpen">
        <div class="rectangle" @click.self="isOpen = false;">
          <div class="modal">
            <h1>Créer un concert!</h1>
            {{titre}}
            {{message}}
            <h2><input v-model="titre" placeholder="groupe"></h2>
            <input v-model="message" placeholder="date">
            <p>
              <input v-on:click="AddEvent()" type="submit" value="Submit" >
            </p>
          </div>
        </div>
      </div>
    </transition>
    <button @click="isOpen = !isOpen;">
      {{ isOpen ? "Close" : "Créer un Concert" }}
    </button>
  </div>
</template>

<script>
import axios from "axios";
import note from '@/components/note.vue'

export default {
  data: function () {
    return {
      isOpen: false,
      titre: null,
      message:null,
    };
  },


  methods: {
    AddEvent: function () {
      axios.post('http://5.135.119.239:3090/notes',
          {
            "title": this.titre,
            "content": [ this.message]
          })
          .then(creation => {
            console.log(creation)
            this.postits = creation.data.notes;
          })
      {alert("Vous venez de créez un Concert");}
    }

  },
}

</script>

<style >
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
  background-color: #a80d0d;
  color: white;
  font-size: 1.1rem;
}
input {
  padding: 7px;
  margin-top: 10px;
  background-color: #a80d0d;
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
