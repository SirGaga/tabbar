<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/home1.svg"/>
      <img slot="item-icon-active" src="~assets//img/tabbar/home2.svg"/>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/1.svg"/>
      <img slot="item-icon-active" src="~assets/img/tabbar/2.svg"/>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets//img/tabbar/cart1.svg"/>
      <img slot="item-icon-active" src="~assets/img/tabbar/cart2.svg"/>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets//img/tabbar/mine1.svg"/>
      <img slot="item-icon-active" src="~assets//img/tabbar/mine2.svg"/>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>