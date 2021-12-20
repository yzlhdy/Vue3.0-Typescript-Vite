<template >
  <div class="rounded-md bg-white p-4 mx-2 pt-2 shadow-md">
    <p class="box">{{ t("title") }}</p>
  </div>
  <van-button type="success">123</van-button>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import gsap from "gsap";
export default defineComponent({
  name: "About",
  setup: () => {
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
    locale.value = "zh";
    return {
      t,
    };
  },
});
</script>
<style lang="" scoped>
</style>