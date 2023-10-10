<template>
  <div class="main">
    <div class="rules">
      <p class="blue font-h-1 bold font-left">活动规则</p>
      <div class="rules-content"></div>
    </div>
    <div class="form">
      <p class="blue font-h-1 bold font-left">信息填写</p>
      <div class="field">
        <p class="blue font-h-2 font-left">报名者手机号(仅需输入一人)</p>
        <div class="field-content-input">
          <van-field v-model="register" placeholder="请输入手机号"></van-field>
        </div>
      </div>
      <div class="field">
        <p class="blue font-h-2 font-left">添加报名信息(家长)</p>
        <div class="field-content" v-for="(member, index) in members">
          <div class="field-content-input">
            <p class="blue font-h-3 font-left">{{ `成员${index === 0 ? '一' : '二'}` }}</p>
            <van-field v-model="member.name" placeholder="请输入姓名"></van-field>
            <van-field v-model="member.idCard" placeholder="请输入身份证"></van-field>
          </div>
          <img src="../assets/add.png" class="handler">
        </div>
      </div>
      <div class="field">
        <p class="blue font-h-2 font-left">添加报名信息(儿童)</p>
        <div class="field-content" v-for="(child, index) in childs">
          <div class="field-content-input">
            <p class="blue font-h-3 font-left">{{ `成员${index === 0 ? '一' : '二'}` }}</p>
            <van-field v-model="child.name" placeholder="请输入姓名"></van-field>
            <van-field v-model="child.idCard" placeholder="请输入身份证"></van-field>
          </div>
          <img src="../assets/add.png" class="handler">
        </div>
      </div>
      <div class="field">
        <p class="blue font-h-1 bold font-left">上传家庭合照</p>
        <div class="uploader">
          <van-uploader :after-read="afterRead" />
        </div>
        <p class="blue font-h-3 font-center" style="margin-bottom: 90px;">点击上传家庭合照</p>
      </div>
      <div class="btns">
        <van-button color="#00479d">提交信息</van-button>
        <van-button color="#c7c7c7" disabled style="color: gray">名额已满</van-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 参与者
const register = ref('')
// 家长
const members = ref([
  {
    name: '',
    idCard: ''
  },
  {
    name: '',
    idCard: ''
  }
])
// 儿童
const childs = ref([
  {
    name: '',
    idCard: ''
  },
  {
    name: '',
    idCard: ''
  }
])
const fileList = ref([])
const afterRead = (file) => {
  console.log(file);
}
</script>

<style scoped>
:deep(.van-field) {
  border-radius: 6px;
}
.main {
  width: 750px;
  background-image:url('../assets/bg.png');
  background-repeat: no-repeat;
  background-position: 0 0;
  background-color: #d4d4d4;
  background-size: 100% auto;
  padding: 72px 72px 0 72px;
  box-sizing: border-box;
}
.rules-content {
  width: 100%;
  height: 450px;
}
.field {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}
.field-content {
  position: relative;
}
.field-content-input {
  width: 568px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.handler {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  right: -50px;
}
.uploader {
  width: 100%;
  height: 392px;
  border-radius: 10px;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btns {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 20px;
}

</style>
