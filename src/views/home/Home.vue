<template>
  <div>
    <h2>首页</h2>
    <h1>这里是父组件的共享状态</h1>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <h1>这里是子组件中的共享状态</h1>
    <HelloVuex></HelloVuex>
  </div>

</template>

<script>
import HelloVuex from "../../components/HelloVuex";
export default {
  name: "Home",
  components: {
    HelloVuex
  },
  methods: {
    addition() {
      this.$store.commit('increment');
    },
    subtraction() {
      this.$store.commit('decrement');
    }
  }
}
</script>

<style scoped>

</style>