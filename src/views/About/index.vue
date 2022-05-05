<template >
  <!-- <div class="rounded-md bg-white p-4 mx-2 pt-2 shadow-md">
    <p class="box">{{ t("title") }}</p>
  </div>
  <van-button type="success" class="bg-green-700 border-0" block @click="handleLanguageChange()">123</van-button>

  <button @click="copy()" type="button">
    <span v-if="!copied">Copy</span>
    <span v-else>Copied!</span>
  </button>-->
  <div
    ref="el"
    class="flex flex-col gap-2 p-4 w-300px h-300px m-auto overflow-scroll bg-gray-500/5 rounded"
  >
    <div v-for="item in data" :key="item" class="h-30 bg-gray-500/5 rounded p-3">{{ item }}</div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import gsap from "gsap";
import { useClipboard } from '@vueuse/core'
import { useInfiniteScroll } from '@vueuse/core'
onMounted(() => {
  gsap.from(".box", {
    duration: 0.5,
    opacity: 0,
    translateX: -100,
  });
});
const { locale, t } = useI18n({
  useScope: "global",
});
const handleLanguageChange = (): void => {
  locale.value = locale.value === "en" ? "zh" : "en";
};
const source = ref<string>('Hello')
const { text, copy, copied, isSupported } = useClipboard({ source })
// 无限滚动
const el = ref<HTMLElement | null>(null)
const data = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

useInfiniteScroll(
  el,
  () => {
    // load more

    const length = data.value.length + 1
    data.value.push(...Array.from({ length: 5 }, (_, i) => length + i))
  },
  { distance: 0 }
)
</script>
<style lang="" scoped>
</style>