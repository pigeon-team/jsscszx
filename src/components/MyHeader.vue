<script lang="ts" setup>
import {ref} from 'vue'
import {School} from "@element-plus/icons-vue";

const activeIndex = ref('1')


</script>

<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      :ellipsis="false"
      :router="true"
  >
    <el-menu-item index="1" route="/home">
      <img
          style="height:50px"
          src="./icons/908fa0ec08fa513dbd4a09e37b6d55fbb2fbd92f.jpg"
          alt="Element logo"
      />
    </el-menu-item>
    <el-menu-item index="2" route="/introduction">
      <el-icon>
        <School/>
      </el-icon>
      学校介绍
    </el-menu-item>
    <el-menu-item index="3" route="/friends">
      <template #title>
        友校
      </template>
    </el-menu-item>
    <el-menu-item style="margin-left: auto" index="4" route="/thanks">
      <template #title>
        开发人员名单
      </template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>


</style>