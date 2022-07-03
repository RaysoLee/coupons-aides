
const prefix = "/api/v1"
const templateApiPrefix = '/template' // 券模板相关接口前缀
// const activityApiPrefix = '/activity' // 活动相关接口前缀
// const couponApiPrefix = '/coupon' // 优惠券实体相关接口前缀

export const	userApi = {
	login: `${prefix}/login`,
	dictionary: `${prefix}/dictionary`,
}

export const	templateApi = {
	add: `${prefix}${templateApiPrefix}/add`,
	delete: `${prefix}${templateApiPrefix}/delete`,
	update: `${prefix}${templateApiPrefix}/update`,
	list: `${prefix}${templateApiPrefix}/list`,
	get: `${prefix}${templateApiPrefix}/get`,
}
