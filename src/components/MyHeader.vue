<script lang="ts" setup>
import {ref} from 'vue'
import {School} from "@element-plus/icons-vue";

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <el-menu-item index="1">
      <img
          style="height:50px"
          src="./icons/908fa0ec08fa513dbd4a09e37b6d55fbb2fbd92f.jpg"
          alt="Element logo"
      />
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <School/>
      </el-icon>
      学校介绍
    </el-menu-item>
    <el-sub-menu index="3">
      <template #title>竞赛获奖</template>
      <el-sub-menu index="3-1">
        <template #title>五大学科竞赛</template>
        <el-menu-item index="3-1-1">数学</el-menu-item>
        <el-menu-item index="3-1-2">物理</el-menu-item>
        <el-menu-item index="3-1-3">化学</el-menu-item>
        <el-menu-item index="3-1-4">生物</el-menu-item>
        <el-menu-item index="3-1-5">信息</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3-2">
        语文
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>


</style>