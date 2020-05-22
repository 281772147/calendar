# calendar

#### 介绍
微信小程序原生日历组件Calendar
![组件样式](https://images.gitee.com/uploads/images/2020/0522/100150_360431e0_89049.png "屏幕截图.png")

使用组件

把demo代码中components/calendar复制到工程根目录下
![目录结构](https://images.gitee.com/uploads/images/2020/0521/234551_88bffaa7_89049.png "Snip20200521_1.png")

app.json中引入组件

```
{
    "usingComponents": {
        "calendar": "/components/calendar/calendar"
    }
}
```

页面使用calendar组件

```
<!--index.wxml-->
<view class="container">
  <view>
    <calendar id="calendar" isOpen="{{true}}" selected="{{selectedDays}}" lockDay="{{lockday}}" bind:getdate="getdate" bind:checkall="checkall"></calendar>
  </view>
</view>
```

组件属性
| 属性         | 说明     | 类别                                    |
|------------|--------|---------------------------------------|
| selected   | 初始选中日期 | Array 例如:['2020-01-01', '2020-01-02'] |
| lockDay    | 锁定日期   | String 例如:'2020-0101','2020-01-02'    |
| isOpen     | 是否展开   | Boolean 默认:false                      |
| multiple   | 是否多选日期 | Boolean 默认:true                       |
| showHeader | 是否展示头部 | Boolean 默认:true                       |
| readonly   | 是否不能修改 | Boolean 默认:false |
| mini       | 使用mini样式 | Boolean 默认:false |


index.wxml 文件

```
<calendar id="calendar" isOpen="{{true}}" selected="{{selectedDays}}" lockDay="{{lockday}}" bind:select="cmfclick" bind:getdate="getdate" bind:checkall="checkall" bind:clear="clear"></calendar>
```


index.js 文件
```
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
```








