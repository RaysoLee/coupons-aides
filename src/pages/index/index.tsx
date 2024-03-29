import { useState, useEffect } from 'react'
import Taro from "@tarojs/taro"
import { View } from '@tarojs/components'
import { AtButton, AtIcon } from 'taro-ui'
import './index.scss'

const Index = () => {
  const [diy, setDiy] = useState("rayso")

  useEffect(() => {
    setDiy("生成一张优惠券")
  }, [])

  const onClick = () => {
    console.log("test success")
    Taro.navigateTo({
      url: '/pages/couponEdit/index',
    })
  }

  return <View className='index'> 
    <AtButton type='primary' onClick={onClick}>{`${diy} click`}</AtButton>
    <AtIcon value='clock' size='30' color='#F00'></AtIcon>
  </View>
}
export default Index
   
