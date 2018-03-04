<template>
  <div id="login">
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
    <div>
      <input
        type="text"
        placeholder="username"
        v-model="credentials.username">
    </div>
    <div>
      <input
        type="password"
        placeholder="password"
        v-model="credentials.password">
    </div>
    <button @click="submit()">Login</button>
  </div>
</template>

<script>
import auth from '@/utils/auth'
export default {
  name: 'Login',
  data() {
    return {
      credentials: { username: '', password: '' },
      error: ''
    }
  },
  methods: {
    submit() {
      var credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      auth.login(this, credentials, 'dashboard')
    }
  }

}
</script>

<style scoped>
  #login {
    display: inline-block;
    text-align: left; 
    padding: 40px 20px;
  }
  h2, input, button { margin: 5px }
  input {
    border: 0;
    background: white;
    padding: 10px 11px;
    box-shadow: inset -2px -3px 3px -1px rgba(0,0,0,.3);
  }
  input:focus {
    outline: none;
    border: 1px solid rgb(140,140,140);
    margin: 4px;
  }
</style>