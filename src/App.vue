<script setup>
import Register from "./components/Register.vue"
import Checker from "./components/Checker.vue"
</script>

<template>
  <div class="header">
    <img src="./assets/header.png" class="header-bg" title="header-bg">
    <div class="content">
      <img src="./assets/logo.png" class="logo" title="logo" />
      <p class="font-title font-center white bold">申花球迷家庭日</p>
      <p class="font-h-1 font-center white bold">报名通道</p>
    </div>
  </div>
  <Register />
  <!-- <Checker /> -->
  <!-- <van-back-top /> -->
</template>

<style>
body, #app {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
.logo {
  width: 109px;
  height: 109px;
}
.header {
    width: 750px;
    height: 509px;
    position: relative;
}
.header-bg {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 105px;
  box-sizing: border-box;
}
p {
  margin: 0;
}
.blue {
  color: #003882;
}
.green {
  color: #4dce36;
}
.red {
  color: #ef3737;
}
.font-title {
  font-size: 72px;
}
.font-h-1 {
  font-size: 40px;
  line-height: 72px;
}
.font-h-2 {
  font-size: 36px;
  line-height: 72px;
}
.font-h-3 {
  font-size: 24px;
}
.font-center {
  text-align: center;
}
.font-left {
  text-align: left;
}
.white {
  color: #FFF;
}
.bold {
  font-weight: bold;
}
</style>
