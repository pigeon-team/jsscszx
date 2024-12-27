<script setup>
import MyHeader from "@/components/MyHeader.vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const route = useRoute()

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <MyHeader />
      </el-header>
      <el-main>
        <router-view :key=route.fullPath />
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
