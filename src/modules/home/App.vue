<template>
  <layout id="home">
    <div slot="body">
      <img v-bind:src="logo"/>
      <h2>A Dungeons &amp; Dragons Session Manager</h2>
      <h1>DDVERSE</h1>
      <login></login>
    </div>
  </layout>
</template>

<script>
import layout from '@/common/components/layout/Simple'
import login from './components/auth/Login'
import logo from '@/assets/aaron_icon.png'
export default {
  name: 'home',
  data() { return { logo } },
  components: { layout, login }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
  font-size: 60px;
}
h2 {
  font-size: 40px;
}
</style>
