//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  onLoad: function () {
    
  },
  /**
   * 点击日期时候触发的事件
   * bind:getdate
   */
  getdate(e) {
    console.log(e.detail);
  },
  /**
   * 点击全选触发的事件
   * bind:checkall
   */
  checkall(e) {
    console.log(e.detail.days);
  },
  /** 
  * 点击确定按钮触发的事件
  * bind:select
  */
  cmfclick(e){
    console.log(e.detail.selectDays);
  },
  /** 
  * 点击清空事件
  * bind:clear
  */
  clear(e) {
    console.log("要清空选中日期")
  }
})
