# calendar

#### 介绍
微信小程序原生日历组件Calendar


使用组件

把demo代码中components/calendar复制到工程根目录下
![输入图片说明](https://images.gitee.com/uploads/images/2020/0521/234551_88bffaa7_89049.png "Snip20200521_1.png")

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



