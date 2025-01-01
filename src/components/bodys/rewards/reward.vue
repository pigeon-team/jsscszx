<script setup>

</script>

<template>
<el-container>
  <el-aside>

  </el-aside>
  <el-main>
    <router-view :key="this.$route.params.id"/>
  </el-main>
</el-container>
</template>

<style scoped>

</style>