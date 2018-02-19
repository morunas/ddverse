<template>
  <div id="home">
  	<div class="container">
	    <h1>DDVERSE</h1>
	    <h2>A Dungeons &amp; Dragons Session Manager</h2>
	    <login></login>
	</div>
  </div>
</template>

<script>
// <router-link to="/dm-session">DM</router-link>
// <router-link to="/session">Player</router-link>
import login from './auth/Login';
export default {
  name: 'Home',
  data () { return {} },
  components: { login }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
	padding: 60px 20px 20px;
}
h1 {
  font-weight: normal;
  font-size: 60px;
}
h2 {
  font-size: 40px;
}
</style>