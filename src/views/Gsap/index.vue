<template>
	<div class="box1 w-14 h-14 bg-purple-300 rounded">123</div>
	<div class="box2 w-14 h-14 bg-purple-300 rounded">123</div>
	<div class="box3 w-14 h-14 bg-purple-300 rounded">{{ counterStore.userInfo.name }}</div>
	<van-button type="success" class="bg-green-700 border-0" block @click="handleUpdate">修改状态</van-button>
	<button @click="mode = mode === 'dark' ? 'light' : 'dark'">Mode {{ mode }}</button>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { userStore } from '@/store/modules/user';
import { useColorMode } from '@vueuse/core'
const counterStore = userStore()
console.log(counterStore.userInfo.name);
onMounted(() => {
	gsap.from('.box1', {
		opacity: 0,
		y: -100,
		duration: 1,
	})
})

const handleUpdate = () => {
	counterStore.setUserInfo("users")
}

const mode = useColorMode({
	attribute: 'theme',
	modes: {
		// custom colors
		dim: 'dim',
		cafe: 'cafe',
	},
})
</script>

<style scoped>
</style>