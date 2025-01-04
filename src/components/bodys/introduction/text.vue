<script setup>

import axios from "axios";
import {ref} from "vue";

const text = ref("# test")

</script>

<template>
  <v-md-preview :text="text"/>
</template>

<style scoped>

</style>