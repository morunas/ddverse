<template>
  <page>
    <div id="header"
         slot="header"
         v-bind:style="{ backgroundImage: `url('${background}')` }">
      <div class="container">
        <div class="logo-section">
          <img class="logo" :src="logo"/>
          <h1>{{ title }}</h1>
        </div>
        <slot name="header"></slot>
      </div>
    </div>
    <div id="body"
         slot="body">
      <div class="container">
        <slot name="body"></slot>
      </div>
    </div>
  </page>
</template>

<script>
import background from '@/assets/banner-background.png';
import page from './Base'
export default {
  name: 'Layout-1',
  data () {
    return {
      background,
      logo: this.$store.getters['campaign/getLogo'],
      title: this.$store.getters['campaign/getName']
    }
  },
  components: { page }
}
</script>

<style scoped>
#header {
  height: 260px;
  position: relative;
}
#header::after {
  content: " ";
  position: absolute;
  left: -2px;
  right: -2px;
  top: 100%;
  box-shadow: 0 -1px 1px 0px rgba(0,0,0,.2);
  height: 1px;
  z-index: 2;
}
#header .container {
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
</style>