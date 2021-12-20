<style scoped>
.nav-wrapper {
  @apply fixed left-0 right-0 bottom-0;
  box-shadow: -3px 3px 12px rgb(245, 244, 244);
}
.navbar {
  @apply duration-300 w-full md:w-8/12  lg:w-4/12 mx-auto px-6 py-2 bg-white flex justify-between;
}
</style>
<template>
  <section class="nav-wrapper">
    <div class="navbar">
      <template v-for="(item, index) in navList" :key="index">
        <div class="flex flex-col items-center" @click="handleNav(item, index)">
          <p>
            <i
              class="las text-2xl font-bold"
              :class="[
                item.icon,
                index === currentIndex ? 'text-blue-500' : 'text-gray-500',
              ]"
            ></i>
          </p>
          <p
            :class="[
              'text-xs',
              index === currentIndex ? 'text-blue-500' : 'text-gray-500',
            ]"
          >
            {{ item.name }}
          </p>
        </div>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
interface NavBar {
  icon: string;
  name: string;
}
export default defineComponent({
  name: "NavBar",
  setup: () => {
    const router = useRouter();
    const currentIndex = ref<number>(0);
    const navList = ref<Array<NavBar>>([
      {
        icon: "la-home",
        name: "Home",
      },
      {
        icon: "la-school",
        name: "About",
      },
      {
        icon: "la-heart",
        name: "Content",
      },
      {
        icon: "la-comment-dots",
        name: "Home",
      },
      {
        icon: "la-address-card",
        name: "Home",
      },
    ]);
    const handleNav = (item: NavBar, index: number): void => {
      currentIndex.value = index;
      router.push({
        name: item.name,
      });
    };
    return {
      navList,
      handleNav,
      currentIndex,
    };
  },
});
</script>
