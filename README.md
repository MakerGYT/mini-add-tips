# Mini-add-tips
[![GitHub stars](https://img.shields.io/github/stars/MakerGYT/mini-add-tips?style=flat-square)](https://github.com/MakerGYT/mini-add-tips)

> 用于提示用户首次进入小程序时，点击右上角菜单进行【添加到我的小程序】操作

## 特性
与支付宝原收藏组件(添加到首页)保持样式一致,支持在自定义导航栏场景下保持一致效果。

## 预览
### 截图
![screenshot](https://imgkr.cn-bj.ufileos.com/5acd4635-f326-4f9e-8969-424952b7886b.gif)
### 样例
在[开发者工具预览](https://developers.weixin.qq.com/s/egmClxmG7biw)

![小程序使用预览](https://cdn.blog.makergyt.com/mini/assets/poster-H.png)
## 安装使用
### 1. 获取组件
#### 下载release(稳定)
[latest release](https://github.com/MakerGYT/mini-add-tips/releases/latest)
#### master(最新)
```sh
git clone https://github.com/MakerGYT/mini-add-tips.git
```
将项目中components/add-tips文件夹拷贝到组件路径下

### 2. 引入组件
在使用该组件的页面对应json文件中添加：
```json
{
  "usingComponents": {
    "add-tips":"/components/add-tips/index" 
  }
}
```

### 3. 使用组件
```html
<!-- index.wxml -->
<add-tips name="示例"/>
```
自定义导航栏请参考[/pages/index](https://github.com/makergyt/mini-add-tips/tree/master/pages/index)
## 属性列表
| 属性 |类型| 默认值|必填|说明|
| -- | --|--|--|--|
| name | String | 测试 | 否 |小程序名称|
| logo | String | <img src="https://imgkr.cn-bj.ufileos.com/c958e4cd-6bab-43ed-93aa-697207cf33a5.png" width=50/> | 否 |小程序Logo|
| duration | Number | 10 | 否 |持续显示时间(s)|
| delay | Number | 2 | 否 |进入页面延迟时间(s)开始显示|
| custom | Boolean | false | 否 |当前页面是否{"navigationStyle": "custom"}|

## 开发说明
鉴于目前微信基础库的设计:
1. 收藏操作与添加到我的小程序对于用户容易混淆，但效应一样，故没必要具体引导用户。目前只有监听用户点击右上角菜单“收藏”按钮的行为,但实际上**兼听不到收藏行为，只能定义收藏内容**
2. 无法获知是否已经收藏、是否已经添加到我的小程序,故提示可能对用户造成干扰。
3. 目前没有可以调起添加小程序的api、button,或许出于"降低干扰度"的考虑，但就迫使手动设置引导,又会造成如2中所述干扰。
4. 即便已经设置{"navigationStyle": "custom"},其[导航栏相关的api](https://developers.weixin.qq.com/miniprogram/dev/api/#%E5%AF%BC%E8%88%AA%E6%A0%8F)依然调用是有效的，无论组件还是页面内均无法据此获知导航栏是否custom,只能由外部传入。

### Todo
- [ ] 根据用户使用小程序频次、收藏等行为，智能控制显示区间及显示时机。

## License
[MIT](https://github.com/MakerGYT/mini-add-tips/blob/master/LICENSE) © MakerGYT