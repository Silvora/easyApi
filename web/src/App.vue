<template>
  <a-config-provider :locale="zhCN">
    <!-- <router-view></router-view> -->
    <Home></Home>
  </a-config-provider>
</template>

<script lang="ts" setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import Home from "@/views/Home.vue"
</script>

<style scoped>

</style>