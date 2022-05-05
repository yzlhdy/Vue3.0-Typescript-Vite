import { Ref, ref } from 'vue';
import service from '@/utils/request';
// 使用Hooks封装axios loading eror
interface UserAxiosGetResponse {
	loading: Ref<boolean>;
	data: any;
	errorMessage: Ref<string | null>;
}


export function userAxiosGet<T>(url: string,): UserAxiosGetResponse {
	const loading = ref<boolean>(false);
	const data = ref<T | any>(null)
	const errorMessage = ref<string | null>(null)
	loading.value = true;
	service.get(url, data).then(res => {
		data.value = res.data;
		loading.value = false;
	}).catch(err => {
		errorMessage.value = err
	}).finally(() => {
		loading.value = false
	})
	return {
		loading,
		data,
		errorMessage
	}

}