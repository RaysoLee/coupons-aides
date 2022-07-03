import { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton, AtIcon } from 'taro-ui'
import './index.scss'

const Index = () => {
  const [diy, setDiy] = useState("rayso")

  useEffect(() => {
    setDiy("missLee")
  }, [])

  const onClick = () => {
    console.log("test success")
  }

  return <View className='index'> 
    <Text>活动页</Text>
    <AtButton type='primary' onClick={onClick}>{`${diy} click`}</AtButton>
    <AtIcon value='clock' size='30' color='#F00'></AtIcon>
  </View>
}
export default Index
   
