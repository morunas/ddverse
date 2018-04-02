<template>
  <div id="register">
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
    <input
      type="text"
      placeholder="username"
      autocomplete="nope"
      v-model="credentials.username">
    <input
      type="password"
      placeholder="password"
      autocomplete="new-password"
      v-model="credentials.password">
    <button class="ddv-button inverted"
            v-on:click="cancel">I already have an account</button>
    <button class="ddv-button"
            v-on:click="submit">Register</button>
  </div>
</template>

<script>
import create from '@/utils/auth'
export default {
  name: 'register',
  data () {
    return {
      credentials: { username: '', password: '' },
      error: ''
    }
  },
  methods: {
    submit() {
      alert("MISSING FEATURE")
      var credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      auth.login(this, credentials, 'dashboard')
    },
    cancel() { this.$router.push({ path: '/' }) }
  }
}
</script>

<style lang="less" scoped>
@import '../../../common/style/core.less';  
</style>