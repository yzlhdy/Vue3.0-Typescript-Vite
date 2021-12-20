import Vue from 'vue'
import { createI18n } from 'vue-i18n'
import { Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US';
import zhLocal from './zh'
import enLocal from './en'

type ZhSchema = typeof zhLocal
type enSchema = typeof enLocal

const message: any = {
	zh: {
		...enUS,
		...zhLocal
	},
	en: {
		...enUS,
		...enLocal
	}
}

const i18n = createI18n<any>({
	locale: 'zh',
	messages: message,
	fallbackLocale: 'en',
})

function vantLocales(lang: string) {
	switch (lang) {
		case 'zh':
			Locale.use('zh-CN', zhLocal);
			break;
		default:
			Locale.use('en-US', enUS);
			break;

	}
}

export { i18n, vantLocales }