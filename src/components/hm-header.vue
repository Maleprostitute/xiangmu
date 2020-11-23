<template>
  <div class="hm-header">
    <div class="left">
      <span class="iconfont iconjiantou2" @click="$router.go(-1)"></span>
    </div>
    <div class="conter">
      <slot></slot>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.hm-header {
  display: flex;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-top: 10px;
  .conter {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    height: 40px;
    line-height: 40px;
    flex: 1;
  }
}
.left,
.right {
  width: 50px;
  height: 40px;
  line-height: 40px;
}
.iconjiantou2 {
  font-size: 14px;
}
</style>
