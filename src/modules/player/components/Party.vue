<template>
  <div id="party">
    <companions></companions>
  </div>
</template>

<script>
import avatar from './Avatar';
import companions from './Companions';
export default {
  name: 'Party',
  components: { avatar, companions }
}
</script>

<style scoped>
  #party {
    font-size: 0;
    padding-left: 200px;
  }
  #party > div {
    display: inline-block;    
  }
</style>