export default defineAppConfig({
  pages: ["pages/index/index", "pages/profile/index", "pages/activity/index"],
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        pagePath: "pages/activity/index",
        text: "报名",
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
