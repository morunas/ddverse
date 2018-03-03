<template>
  <div id="dashboard">
  	<div class="container">
      <div class="box">
  		  
      </div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {}
  }
}
</script>

<style scoped>
  #dashboard .container {
    text-align: left;
    padding: 60px 10px 10px;
  }
  .box {
    
  }
  .widget {
    margin: 10px;
    padding: 20px;
    background: white;
    box-shadow: 3px 3px 3px -3px rgba(0,0,0,.5);
    display: inline-block;
    vertical-align: top;
  }

  .widget.short {
    width: 200px;
  }
</style>