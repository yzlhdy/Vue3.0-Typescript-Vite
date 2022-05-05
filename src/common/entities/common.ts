// 通用响应
export interface CommonResponseData {
	code: number;
	msg: string;
}

// 请求分页
export interface PageRequest {
	page: number;
	limit: number;
}

