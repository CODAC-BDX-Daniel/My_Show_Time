<template>
  <div class="Login">
    <form>
      <h3>Sign In</h3>
      <div>
        <label>Email address</label>
        <input type="email"/>
      </div>

      <div>
        <label>Password</label>
        <input type="password"/>
      </div>

      <button type="submit">Sign In</button>
      <p>
        <router-link to="/forgot-password">mot de passe oublié ?</router-link>
      </p>

    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>
.Login {
  background-color: #865757;
}
</style>
