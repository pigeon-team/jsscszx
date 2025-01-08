<script setup>

import axios from "axios";
import {ref} from "vue";
import * as test from "node:test";
import {Refresh} from "@element-plus/icons-vue";

const text = ref("# Loading...")

function tester() {
  // console.log("tester");
  axios.get("https://api.jsscszx.asia/jsscszx/api/get article.php", {
    params: {
      id: 1
    },
  }).then((response) => {
    // console.log(response.data);
    text.value = response.data.data.main;
  }).catch((error) => {
    console.log(error);
  })
  // console.log(text);
  console.log("test")
}

tester();

</script>

<template>
  <div style="margin: 50px;min-height: 100px;">
    <v-md-preview :text="text"/>
    <el-button @click="tester">
      update
      <el-icon>
        <Refresh/>
      </el-icon>
    </el-button>
  </div>
</template>

<style scoped>

</style>