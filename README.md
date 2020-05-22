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






