<script lang="ts" setup>
import {ref} from 'vue'
import {School, TrendCharts, GoldMedal, TrophyBase} from "@element-plus/icons-vue";

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
    <el-sub-menu index="3">
      <template #title>
        <el-icon>
          <TrendCharts/>
        </el-icon>
        竞赛获奖
      </template>
      <el-sub-menu index="3-1">
        <template #title>
          <el-icon>
            <GoldMedal/>
          </el-icon>
          五大学科竞赛
        </template>
        <el-menu-item index="3-1-1" route="/rewards/mathematics">数学</el-menu-item>
        <el-menu-item index="3-1-2" route="/rewards/physics">物理</el-menu-item>
        <el-menu-item index="3-1-3" route="/rewards/chemistry">化学</el-menu-item>
        <el-menu-item index="3-1-4" route="/rewards/biology">生物</el-menu-item>
        <el-menu-item index="3-1-5" route="/rewards/informatics">信息</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3-2">
        <template #title>
          <el-icon>
            <TrophyBase/>
          </el-icon>
          其余竞赛
        </template>
        <el-menu-item index="3-2" route="/rewards/chinese">
          语文
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>


</style>