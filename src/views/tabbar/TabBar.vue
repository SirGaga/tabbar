<template>
  <div id='tab-bar'>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home1.svg">
      <div>首页</div>
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/1.svg">
      分类
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/cart1.svg">
      购物车
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/mine1.svg">
      我的
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f2f2f2;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
}

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  line-height: 49px;
}
.tab-bar-item img{
  height: 24px;
  width: 24px;
}
</style>