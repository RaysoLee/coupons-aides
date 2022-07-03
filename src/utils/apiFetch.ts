import Taro from "@tarojs/taro"

const baseApi = 'http://192.168.1.106:3000'

interface IParams {
	[keys: string]: any
}

interface IRequestOptions {
	url: string,
	data: IParams,
	method: "GET" | "POST",
	header: {
		[keys: string]: any
	},
	[keys: string]: any
}

const fetchBody = (type: "GET" | "POST", url: string, params: IParams = {}, options = {}) => {
	return new Promise((resolve, reject) => {
		Taro.showLoading()
		//发起网络请求
		const requestOptions: IRequestOptions = {
			url: `${baseApi}${url}`,
			method: type,
			data: { 
				...params,
			},
			success: (data) => {
				console.log(data)
				resolve(data.data)
			},
			fail: (err) => {
				console.log(err)
				Taro.showToast({
					title: `${err.errMsg}`,
					icon: 'error',
					duration: 3000
				})
				reject(err)
			},
			complete: () => {
				Taro.hideLoading()
			},
			header: {},
			...options
		}
		requestOptions.header = {
			...requestOptions.header,
			
		}
		Taro.request({ ...requestOptions })
	})
}

const apiFetch = {
	post: (url: string, params: IParams = {}) => {
		return fetchBody("POST", url, params)
	},
	get: (url: string, params: IParams) => {
		return fetchBody("GET", url, params)
	}
}

export default apiFetch