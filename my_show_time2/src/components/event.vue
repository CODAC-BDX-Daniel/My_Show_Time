<template>
  <div class="EventCard">
    <h1>{{ dataEvent }}</h1>
    <p class="DateCss"></p>
    <p class="GenreCss"></p>
    <router-link :to="{name:'EventDetails', params:{id:id}}" tag="button">
      <button>Cliquer pour plus de détails</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "event",
  props: ['id', 'dataEvent']
}
</script>

<style>
.EventCard{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: "sans-serif";
  width: 200px;
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
.EventCard button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #a80d0d;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.EventCard button:hover {
  opacity: 0.7;
}
</style>
