<template>
  <div id="login">
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
    <input
      type="text"
      placeholder="username"
      v-model="credentials.username">
    <input
      type="password"
      placeholder="password"
      v-model="credentials.password">
    <button class="ddv-button"
            v-on:click="submit">Login</button>
    <button class="ddv-button inverted"
            v-on:click="register">Create an account</button>
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
    },
    register() { this.$router.push({ path: 'register' }) }
  }

}
</script>

<style lang="less" scoped>
@import '../../../common/style/core.less';
@import '../../../common/style/position.less';
#login {
  font-size: 0;
  text-align: left;
}
</style>