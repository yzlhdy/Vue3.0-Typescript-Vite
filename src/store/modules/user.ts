import { defineStore } from 'pinia'


export const userStore = defineStore('user', {
	state: () => {
		return {
			userInfo: {
				name: '',
				avatar: 'skfjksdfj.jpg',
				token: '1232kjk12j3k21j3k12j3k123jk'
			}
		}
	},
	actions: {
		setUserInfo(name: string) {
			this.$state.userInfo.name = name
		}
	}
})