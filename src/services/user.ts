
import api from './api'
import service from '../utils/request'


export const getUser = (): Promise<any> => {
	return service.get<any, any>(api.DOME_LIST,)
}