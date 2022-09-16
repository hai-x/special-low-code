<template>
  <router-view></router-view>
</template>

<script lang='ts' setup>
  import { provide } from 'vue';
import {useSchema} from './store/schema'

const schemaStore = useSchema()
// window.schemaStore = schemaStore 

provide('schemaStore',schemaStore)

</script>

<style lang="scss" scoped>

</style>