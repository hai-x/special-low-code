<template>
  <div class="stage__wrapper">
    <Grid />
    <Render />
    <Mask />
  </div>
</template>

<script lang="ts" setup>
import Render from "./components/Render.vue";
import Mask from "./components/Mask.vue";
import Grid from "./components/Grid.vue";
</script>

<style lang="scss" scoped>
.stage__wrapper{
  width:100%;
  height:100%;
}
</style>
