import { useState, useEffect } from 'react'
import Taro from "@tarojs/taro"
import { View } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import './index.scss'

const Index = () => {
  const [infos, setInfos] = useState({})
  const [userInfo, setUserInfo] = useState<any>({})

  useEffect(() => {
    fetchUserInfo()
  }, [])

  const fetchUserInfo = () => {
    Taro.getUserInfo({
      withCredentials: true,
      success: (res: any) => {
        console.log(res)
        onUserInfoSuccess(res)
      },
      fail: (res) => {
        Taro.showToast({
          title: res.errMsg,
          icon: "error",
          duration: 2000,
          complete: () => {
            getUserInfo()
          }
        })
      }
    })
  }

  const getUserInfo = () => {
    Taro.getUserProfile({
      desc: "获取用户信息用于显示账号信息",
      success: (res: any) => {
        console.log(res, infos)
        onUserInfoSuccess(res)
      },
      fail: (res) => {
        Taro.showToast({
          title: res.errMsg,
          icon: "error",
          duration: 3000
        })
      }
    })
  }

  const onUserInfoSuccess = (result: any) => {
    setInfos(result)
    setUserInfo(result.userInfo || {})
  }

  // const onClick = () => {
  //   console.log("test success", infos)
  // }

  return <View className='container mine-container'> 
    <View className='at-row at-col__align--center userInfo-wrapper'>
      <View className='at-col at-col-1 at-col--auto'>
        <AtAvatar size='large' image={userInfo.avatarUrl}></AtAvatar>
      </View>
      <View className='at-col nick-name'>{userInfo.nickName}</View>
    </View>
  </View>
}
export default Index
   
