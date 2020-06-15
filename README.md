# Mini-add-tips
> 用于提示用户首次进入小程序时，点击右上角菜单进行【添加到我的小程序】操作

与支付宝Favorite组件保持一致,支持在自定义导航栏场景下保持一致效果。

##　样例
在[开发者工具预览](https://developers.weixin.qq.com/s/O5bxd8mY7ii4)

![screenshot]](https://imgkr.cn-bj.ufileos.com/25b73c4e-bdb0-4c8f-aeff-18c7d1d9d7b7.gif)
## 安装使用
### 1. 获取组件
#### git
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
参考[/pages](https://github.com/makergyt/mini-add-tips/tree/master/demo/index/index)
```html
<!-- index.wxml -->
<add-tips name="示例"/>
```
```js
Page({
	onAddToFavorites(res) {

	}
}) 
```

## 属性列表
| 属性 |类型| 默认值|必填|说明|
| -- | --|--|--|--|
| name | String | 测试 | 是 |小程序名称|
| logo | String | 'https://imgkr.cn-bj.ufileos.com/c958e4cd-6bab-43ed-93aa-697207cf33a5.png' | 否 |小程序Logo|
| duration | Number | 10 | 否 |持续显示时间(s)|
| custom | Boolean | false | 否 |当前页面是否{"navigationStyle": "custom"}|

## Todo
- [x] 根据用户使用小程序频次、收藏及关闭收藏等行为，智能控制显示时间及疲劳度

## 开发说明

1. 无法获取当前是否"navigationStyle": "custom",只能由外部传入,
2. 无法获知是否收藏，只能获知组件是否显示过,即仅展示一次
3. 没必要低估用户，提供添加的方法
4. onAddToFavorites是页面的生命周期，不能在组件内监听