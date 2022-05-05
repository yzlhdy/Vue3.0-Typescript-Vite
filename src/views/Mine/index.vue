<script setup lang="ts">
import { ref } from 'vue'
import { useInfiniteScroll } from '@vueuse/core'
const el = ref<HTMLElement | null>(null)
const data = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,])
useInfiniteScroll(
	el,
	() => {
		console.log("==================>123");
		const length = data.value.length + 1
		data.value.push(...Array.from({ length: 5 }, (_, i) => length + i))
	},
	{ distance: 10 },
)
</script>

<template>
	<div class>
		<div
			ref="el"
			class="flex flex-col gap-2 p-4 w-300px h-300px m-auto overflow-scroll bg-gray-500/5 rounded"
		>
			<div v-for="item in data" :key="item" class="h-30 bg-gray-500/5 rounded p-3">{{ item }}</div>
		</div>
	</div>
</template>