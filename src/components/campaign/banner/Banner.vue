<template>
  <div id="banner"
       v-bind:style="{ backgroundImage: `url('${background}')` }">
    <div class="container">
      <div class="logo-section">
        <img class="logo" :src="logo"/>
        <h1>{{ title }}</h1>
      </div>
      <party class="party"></party>
    </div>
  </div>
</template>

<script>
import party from './Party';
import background from '../../../assets/banner-background.png';
export default {
  name: 'Banner',
  data () {
    return {
      background,
      logo: this.$store.getters['campaign/getLogo'],
      title: this.$store.getters['campaign/getName']
    }
  },
  components: { party }
}
</script>

<style scoped>
  #banner {
    height: 260px;
    position: relative;
  }
  #banner::after {
    content: " ";
    position: absolute;
    left: -2px;
    right: -2px;
    top: 100%;
    box-shadow: 0 -1px 1px 0px rgba(0,0,0,.2);
    height: 1px;
    z-index: 2;
  }
  #banner .container {
    height: 100%;
  }
  .logo-section {
    position: absolute;
    top: 20px;
    left: 20px;
    height: 80px;
    font-size: 0;
  }
  .logo {
    height: 100%;
    margin-right: 15px;
    display: inline-block;
    vertical-align: middle;
  }
  .logo + h1 {
    color: white;
    font-size: 40px;
    display: inline-block;
    vertical-align: middle;
  }
  .party {
    position: absolute;
    left: 20px;
    bottom: 0;
    font-size: 0;
  }
</style>