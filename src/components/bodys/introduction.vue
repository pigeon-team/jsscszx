<script setup>

import RemoteText from './introduction/text.vue'

</script>

<template>
  <el-container style="width: 60%;">
    <RemoteText style="margin: 50px;min-height: 100px;"/>
  </el-container>
</template>

<style scoped>

.el-container {
  width: 60%;
  margin: auto auto;
  background: var(--el-color-info-light-9);
  border-radius: 10px;
}

</style>