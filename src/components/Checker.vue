<template>
    <div class="main">
        <div class="statu">
            <template v-if="statu">
                <img src="../assets/pass.png" class="statu-pic">
                <p class="font-h-1 bold green">审核通过</p>
            </template>
            <template v-else>
                <img src="../assets/reject.png" class="statu-pic">
                <p class="font-h-1 bold red">审核失败</p>
            </template>
        </div>
        <div class="rqcode">
            <p class="font-center blue bold metion">请耐心等待工作人员电话联系 如有疑问,可添加客服二维码</p>
            <div class="code"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const statu = ref(false)
</script>

<style scoped>
.main {
    width: 100%;
    padding: 132px 90px;
    background-image:url('../assets/bg.png');
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 100% auto;
    background-color: #d4d4d4;
    box-sizing: border-box;
}
.statu {
    width: 568px;
    height: 348px;
    border-radius: 6px;
    background-color: #efefef;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.metion {
    width: 388px;
    font-size: 28px;
}
.rqcode {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 135px 0;
}
.code {
    width: 300px;
    height: 300px;
    background-color: #FFF;
}
</style>