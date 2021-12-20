import {
	Button,
	Loading,
	Dialog,
	Cell, CellGroup,
	NavBar
} from 'vant'

import 'vant/lib/index.css'

export default function SetVantPlugins(app: any) {
	app
		.use(Button)
		.use(Loading)
		.use(Dialog)
		.use(Cell).use(CellGroup).use(NavBar)
}