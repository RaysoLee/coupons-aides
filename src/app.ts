import { Component } from 'react'
import Taro from "@tarojs/taro"
import { userApi } from "./utils/apiGroup"
import apiFetch from './utils/apiFetch'
import './assets/css/reset.scss'
import './assets/css/app.scss'

class App extends Component {

  componentDidMount () {
    this.login()
    // Taro.checkSession({
    //   success: function () {
    //     console.log("登陆有效")
    //     console.log(Taro.getStorageInfoSync())
    //     //session_key 未过期，并且在本生命周期一直有效
    //   },
    //   fail: () => {
    //     // session_key 已经失效，需要重新执行登录流程
    //     this.login() //重新登录
    //   }
    // })
  }

  onLanch(){
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  login () {
    Taro.login( {
      success: (res) => {
        console.log(res)
        if (res.code) {
          //发起网络请求
          apiFetch.post(userApi.login, {code: res.code}).then((data: any) => {
            console.log(data)
            const { openid, session_key } = data.data || {}
            Taro.setStorageSync("openid", openid)
            Taro.setStorageSync("session_key", session_key)
            this.getDictionary()
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }

  getDictionary () {
    console.log(Taro.getStorageInfoSync())
    apiFetch.post(userApi.dictionary, {type: "coupons_type"}).then((data: any) => {
      console.log(data)
    })
  }

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
