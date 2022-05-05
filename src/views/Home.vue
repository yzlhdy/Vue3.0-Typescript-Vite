<template >
  <header-bar title="Home" class="font-sans">456</header-bar>
  <div class="font-poppins">123123</div>
  <transition-group
    tag="ul"
    appear
    class="mx-3 grid grid-cols-2 gap-2"
    @enter="enter"
    @before-enter="beforeEnter"
  >
    <li v-for="(item, index) in productData" :data-index="index" :key="item.id" class="card">
      <div class="h-40">
        <img :src="item.image" class="object-cover w-full h-full" />
      </div>
      <p class="truncate py-2 box">{{ item.title }}</p>
    </li>
  </transition-group>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

import HeaderBar from "@/components/HeaderBar/index.vue";
import gsap from "gsap";

export default defineComponent({
  components: { HeaderBar },
  name: "Home",
  setup: () => {
    const productData: any = ref([]);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => (productData.value = json));
    const beforeEnter = (el: any) => {
      gsap.to(el, {
        duration: 0.5,
        opacity: 1,
        translateY: 0,
        delay: 0.1 * el.getAttribute("data-index"),
      });
    };
    const enter = (el: any) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(100px)";
    };


    return {
      productData,
      enter,
      beforeEnter,
    };
  },
});
</script>

<style lang="" scoped>
</style>