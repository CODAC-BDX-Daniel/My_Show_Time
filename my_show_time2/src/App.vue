<template>
  <div class="HeaderNavBar">
    <div class="slogan"> Billeterie 100 % officielle </div>
    <nav>
      <div>

        <ul>
          <li>
            <router-link  to="/Login">Se connecter</router-link>
          </li>
          <li>
            <router-link to="/registration">S'enregistrer</router-link>
          </li>
          <li>
            <router-link to="/user">Profil utilisateur</router-link>
          </li>
          <li>
            <router-link to="/Admin">Profil Admin</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div class="SubNavbar">
    <router-link to="/">My Show Time</router-link>
  </div>

  <div>
    <router-view />
  </div>
</template>

<style>

.HeaderNavBar {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #171616;
  padding: 10px;
  color: #FFFF;
  font-size: medium;
  font-family: "sans-serif";
}
.slogan{
  padding: 10px;
  font-size: large;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #a80d0d;
}

.SubNavbar {
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: #a80d0d;
  color: #FFFF;
  padding: 30px;
  font-size: xx-large;
  font-family: "sans-serif";
  text-decoration: none;
}
.SubNavbar a {
  color: white;
  text-decoration: none;
}
.SubNavbar a:hover{
  background-color: #efeaea;
}
</style>
