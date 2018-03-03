<template>
  <layout id="home">
    <div slot="body">
      <h2>A Dungeons &amp; Dragons Session Manager</h2>
      <h1>DDVERSE</h1>
      <login></login>
    </div>
  </layout>
</template>

<script>
import layout from '@/common/components/layout/Simple'
import login from './components/auth/Login'
export default {
  name: 'home',
  components: { layout, login }
}
</script>

<style>
h1 {
  font-weight: normal;
  font-size: 60px;
}
h2 {
  font-size: 40px;
}
</style>
