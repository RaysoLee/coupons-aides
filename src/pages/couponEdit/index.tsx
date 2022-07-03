import { useState, useEffect } from 'react'
import Taro from "@tarojs/taro"
import { View, Picker } from '@tarojs/components'
import { AtForm, AtInput, AtList, AtListItem, AtTextarea, AtButton } from 'taro-ui'
import DataToImage from './../../components/dataToImage'
import { IFormitem, formList } from './const'

import { templateApi } from "../../utils/apiGroup"
import apiFetch from '../../utils/apiFetch'

import './index.scss'

const Index = () => {
  const [data, setData] = useState<any>({
    cName: "小店的满减券",
    cNumber: 5
  })

  useEffect(() => {
    getList()
    getTemplate()
    console.log(Taro.getCurrentInstance().router)
    Taro.setNavigationBarTitle({
      title: '创建或编辑'
    })
  }, [])

  useEffect(() => {
    console.log(data)
  },[data])

  const getList = () => {
    const params = {
      curPage: 1,
      pageSize: 10
    }
    apiFetch.post(templateApi.list, params).then((res: any) => {
      console.log(res)
    })
  }

  const getTemplate = () => {
    const params = { id: 3}
    apiFetch.post(templateApi.get, params).then((res: any) => {
      console.log(res)
    })
  }

  const deleteT = () => {
    const params = { id: 3}
    apiFetch.post(templateApi.delete, params).then((res: any) => {
      console.log(res)
    })
  }

  const updateT = () => {
    const params = {
      name: "测试修改后的名字",
      coupon_type: 3,
      id: 6
    }
    apiFetch.post(templateApi.update, params).then((res: any) => {
      console.log(res)
    })
  }

  const onSubmit = () => {
    const { cName, cType, startTime, endTime, cNumber, rules} = data
    const params = {
      name: cName,
      type: cType,
      startTime,
      endTime,
      worth: cNumber,
      rules,
      themCode: "2.png"
    }
    apiFetch.post(templateApi.add, params).then((res: any) => {
      console.log(res)
    })
    console.log("test success", params)
  }
  // const onReset = () => {
  //   console.log("test success")
  // }

  const onChange = (name, value) => {
    console.log(value)
    setData({
      ...data,
      [name]: value
    })
  }

  const buildForms = () => {
    return <AtList>
      {formList.map((item: IFormitem, index: number) => {
        switch (item.type) {
          case 'text':
          case 'number':
            return <AtInput 
              name={item.keyName} 
              title={item.label}
              type={item.type}
              placeholder={item.placeholder} 
              value={data[item.keyName]} 
              onChange={(value) => {onChange(item.keyName, value)}}
            />
          case 'selector':
            return <Picker 
              mode='selector' 
              range={item.options || []} 
              rangeKey={item.rangeKey}
              onChange={(e) => {onChange(item.keyName, e.detail.value)}}
            >
              <AtListItem title={item.label} extraText={item.options?.[data[item.keyName]]?.desc || '请选择'} />
            </Picker>
          case 'date':
            return <Picker
              mode='date' 
              value={data[item.keyName]}
              onChange={(e) => {onChange(item.keyName, e.detail.value)}}
            >
              <AtListItem title={item.label} extraText={data[item.keyName] || '请选择'} />
            </Picker>
          case 'textarea':
            return <AtTextarea
              value={data[item.keyName]}
              onChange={(value) => {onChange(item.keyName, value)}}
              maxLength={200}
              placeholder={item.placeholder}
            />
          }
        })
      }
    </AtList>
  }

  return <View className='container coupon-edit-container'> 
    <DataToImage unit='折' data={data} />
    <AtForm >
      {buildForms()}  
    </AtForm>
    <AtButton type='primary' onClick={onSubmit}>提交</AtButton>
    <AtButton type='primary' onClick={deleteT}>删除</AtButton>
    <AtButton type='primary' onClick={updateT}>更新</AtButton>
  </View>
}
export default Index
   
