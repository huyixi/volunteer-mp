export default defineAppConfig({
  pages: ["pages/index/index", "pages/profile/index", "pages/activity/index"],
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        // iconPath: "/assets/icon/house.svg",
        // selectedIconPath: "/assets/icon/house.svg",
      },
      {
        pagePath: "pages/activity/index",
        text: "报名",
        // iconPath: "/assets/icon/flag.svg",
        // selectedIconPath: "/assets/icon/flag.svg",
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
        // iconPath: "/assets/icon/user-round.svg",
        // selectedIconPath: "/assets/icon/user-round.svg",
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
