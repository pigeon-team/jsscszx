<script setup>

import axios from "axios";
import {ref} from "vue";
import * as test from "node:test";
import {Refresh} from "@element-plus/icons-vue";

const text = ref("# Loading...")

function tester() {
  // console.log("tester");
  axios.post("/api/get article.php", {id: 1}).then((response) => {
    // console.log(response.data);
    text.value = response.data.data.main;
  }).catch((error) => {
    console.log(error);
  })
  // console.log(text);
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