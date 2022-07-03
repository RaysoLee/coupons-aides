export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/activities/index',
    'pages/mine/index',
    'pages/couponEdit/index',
    'pages/activityEdit/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list:[
      {
        pagePath: 'pages/index/index',
        text: "首页",
        // iconPath: ""
      },
      {
        pagePath: 'pages/activities/index',
        text: "活动",
        // iconPath: ""
      },
      {
        pagePath: 'pages/mine/index',
        text: "我的",
        // iconPath: ""
      }
    ]
  }
})
