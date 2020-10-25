<template>
  <div id="app">
    <TabBar></TabBar>
  </div>
</template>

<script>
  import TabBar from "./views/tabbar/TabBar";

  export default {
    name: 'App',
    components: {
      TabBar
    }
  }
</script>
<style>
  @import "./assets/css/base.css";

</style>
