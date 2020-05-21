//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  onLoad: function () {
    
  },
  getdate(e) {
    console.log(e.detail);
  },
  checkall(e) {
    console.log(e.detail.days);
  }
})
