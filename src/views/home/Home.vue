<template>
  <div>
    <h2>首页</h2>
    <h2>--------App内容：modules的内容--------</h2>
    <h2>{{$store.state.a}}</h2>
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="changeModuleState('李四')">修改module中的name状态</button>

    <h2>--------App内容：info对象的内容是否是响应式--------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>
    <h1>这里是父组件的共享状态</h1>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="additionCount(5)">+5</button>
    <button @click="additionCount(10)">+10</button>
    <h1>getters 相关内容</h1>
    <p>{{$store.getters.powerCounter}}</p>
    <p>{{$store.getters.olderThan20}}</p>
    <p>{{$store.getters.olderThanAge(18)}}</p>

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
    },
    additionCount(count) {
      // 普通的提交风格
      // this.$store.commit('incrementCount',count)
      // 特殊的提交风格
      this.$store.commit({
        type: 'incrementCount',
        count: count
      });
    },
    updateInfo(){
      // this.$store.commit('updateInfo');
      // this.$store.dispatch('asyncUpdateInfo','我是payload');
      this.$store.dispatch('aUpdateInfo','我是payload')
          .then(() => {
            console.log('提交完成可以调用别的了');
          });
    },
    changeModuleState(newName){
      this.$store.commit('updateName',newName);
    }
  }
}
</script>

<style scoped>

</style>