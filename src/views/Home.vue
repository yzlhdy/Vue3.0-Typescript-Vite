<template >
  <header-bar title="Home"> 456 </header-bar>

  <transition-group
    tag="ul"
    appear
    class="mx-3 grid grid-cols-2 gap-2"
    @enter="enter"
    @before-enter="beforeEnter"
  >
    <li
      v-for="(item, index) in productData"
      :data-index="index"
      :key="item.id"
      class="shadow-xl bg-white my-2 rounded-md p-2"
    >
      <div class="h-40">
        <img :src="item.image" alt="" class="object-cover w-full h-full" />
      </div>
      <p class="truncate py-2 box">{{ item.title }}</p>
    </li>
  </transition-group>
  <navbar />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Navbar from "../components/NavBar/index.vue";
import HeaderBar from "@/components/HeaderBar/index.vue";
import gsap from "gsap";

export default defineComponent({
  components: { Navbar, HeaderBar },
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