export interface IResponseData<T> {
	code: Number
	msg?: string
	data: T
}