<script setup>
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <MyHeader/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <MyFooter/>
      </el-footer>
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

.el-container {
  min-height: 100%;
}

.el-footer{
  background: var(--el-color-primary-light-3);
  height: 150px;
  bottom: 0;
}

</style>
