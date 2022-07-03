
interface IFormitem {
	keyName: string,
	label: string,
	placeholder: string,
	required: boolean,
	type: 'selector' | 'text' | 'number' | 'date' | 'textarea' | undefined,
	options?: any[]
	[keys: string]: any
}
const couponsTypes: any[] = [
	{desc: '立减券', code: 1},
	{desc: '满减券', code: 2},
	{desc: '打折券', code: 3},
	{desc: '满折券', code: 4},
]
const formList: IFormitem[] = [
	{
		keyName: 'cType',
		label: '券类型',
		placeholder: '选择优惠券类型',
		required: true,
		type: 'selector',
		rangeKey: 'desc',
		options: couponsTypes
	},
	{
		keyName: 'cName',
		label: '券标题',
		placeholder: 'eg: 微店立减券',
		type: 'text',
		required: true,
	},
	{
		keyName: 'cNumber',
		label: '优惠金额',
		placeholder: 'eg: 5',
		type: 'number',
		required: true,
	},
	{
		keyName: 'startTime',
		label: '开始时间',
		placeholder: 'eg: 2022-06-30',
		type: 'date',
		required: true,
	},
	{
		keyName: 'endTime',
		label: '结束时间',
		placeholder: 'eg: 2022-07-30',
		type: 'date',
		required: true,
	},
	{
		keyName: 'rules',
		label: '使用规则',
		placeholder: '规则描述',
		type: 'textarea',
		required: true,
	}
]

export {
	IFormitem,
	couponsTypes,
	formList
}