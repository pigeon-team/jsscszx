<script setup>

</script>

<template>
  <el-carousel type="card" height="200px">
    <el-carousel-item >
      <el-image src="@/components/bodys/index/1.png" fit="contain" alt="1"/>
    </el-carousel-item>
    <el-carousel-item >
      <el-image src="@/components/bodys/index/2.png" />
    </el-carousel-item>
    <el-carousel-item >
      <img src="@/components/bodys/index/1.png" alt="1">
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>