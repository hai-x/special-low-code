<template>
  <div class="playground__wrap">
    <div class="stage__toolbar">
        <el-radio-group :model-value="mode" @update:modelValue="handleSwitchMode" size="small">
          <el-radio-button label="phone" />
          <el-radio-button label="pc" />
        </el-radio-group>
    </div>
    <div class="stage__wrap" :style="{width:mode==='phone'?'375px':'100%'}">
      <Grid/>
      <Render />
      <Mask />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Render from "./components/Render.vue";
import Mask from "./components/Mask.vue";
import Grid from "./components/Grid.vue";
import { inject } from "vue";

const mode = inject('mode')
const handleSwitchMode = inject('handleSwitchMode')
</script>

<style lang="scss" scoped>
.playground__wrap {
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.stage__wrap {
  height: 100%;;
  position: relative;
}
.stage__toolbar {
  padding:10px 20px;
}

</style>
