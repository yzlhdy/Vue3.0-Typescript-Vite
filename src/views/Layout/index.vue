<template >
  <div class="app-container">
    <div class="layout-content h-screen">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <div v-else>
        <router-view></router-view>
      </div>
    </div>
    <div class="layout-footer">
      <NavBar />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "../../components/NavBar/index.vue";

export default defineComponent({
  name: "Layout",
  setup: () => {
    return {};
  },
  components: { NavBar },
});
</script>
<style  scoped>
</style>