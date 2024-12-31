<script setup>
import MyHeader from "@/components/MyHeader.vue";

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <MyHeader />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style scoped>

.common-layout {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

</style>
