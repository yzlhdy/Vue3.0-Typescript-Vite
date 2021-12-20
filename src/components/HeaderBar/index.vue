
<template >
  <!-- <div class="flex justify-between items-center h-10">
    <div class="bg-green-300">1</div>
    <div class="flex-1 text-center bg-purple-300">2</div>
    <div class="bg-yellow-300">3</div>
  </div> -->

  <van-nav-bar :title="title">
    <template #left>
      <i class="las la-angle-left text-2xl"></i>
    </template>
    <template #right>
      <slot></slot>
    </template>
  </van-nav-bar>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from "@vue/runtime-core";
name: "HeaderBar";
const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: "",
  },
});
</script>
<style lang="" scoped>
</style>