# pixi-miniprogram Canvas 使用方法


本模板主要使用Pixi引擎作为基础，实现手淘Canvas绘制，我们对Pixi原有v6 6.2.1引擎进行了改写，实现了对Canvas的兼容。项目开发非常接近web Pixi。


- Pixi API : [https://pixijs.download/release/docs/index.html](https://pixijs.download/release/docs/index.html)



#### 开发IDE：

- 淘宝开发者工具:[https://developer.taobao.com/?spm=a219a.15212435.0.0.191b669a5E62XM](https://developer.taobao.com/?spm=a219a.15212435.0.0.191b669a5E62XM)
- 支付宝小程序IDE:[https://opendocs.alipay.com/mini/ide/download](https://opendocs.alipay.com/mini/ide/download)

#### 注意：


- 目前Canvas要求手淘版本 > 9.7.0，项目中需要进行判断版本，进行降级抄底
- Canvas 2d: 要求手淘版本 > 9.7.0
- webGL : 要求手淘版本 > 9.9.0


#### 1.开启使用Canvas:


app.json 增加配置项：


- 手淘："enableSkia": "true"



```javascript
{
  "pages": [
    "pages/index/index"
  ],
  "window": {
    "defaultTitle": "My App",
    "enableSkia": "true"
  }
}
```


#### 2.安装依赖


**2.1:npm包安装**


```javascript
// 安装 pixi-canvas 组件
npm install @tbminiapp/pixi-miniprogram-canvas-v6 --by=yarn
// 安装 pixi v6引擎
npm install @tbminiapp/pixi-miniprogram-engine-v6 --by=yarn
// 安装 pixi v6引擎 小程序适配器
npm install @tbminiapp/pixi-miniprogram-adapter --by=yarn
```

#### 3.引用pixi-canvas组件


- index.axml



```javascript
<pixi-canvas id="pixi-canvas" options={{appOptions}} destroyAppOnDidUnmount="true" onError="onPixiCanvasError" onDidUnmount="onPixiCanvasDidUnmount" onAppInit="onAppInit"></pixi-canvas>
```


- index.json



```javascript
{
  "usingComponents":{
      "pixi-canvas": "@tbminiapp/pixi-miniprogram-canvas-v6/components/pixi-canvas/pixi-canvas"
  }
}
```


#### 4.在js中编写pixi-canvas的 事件监听
- options: Pixi Application Options
- destroyAppOnDidUnmount: 是否在pixi-canvas组件DidUnmount生命周期中销毁 Pixi Application
- onAppInit: 当application实例化完成时触发，出参:{canvas, context, options, application}
- onDidUnmount: pixi-canvas组件DidUnmount生命周期对上层抛出的事件

```javascript
import { Texture, Sprite, Text } from "@tbminiapp/pixi-miniprogram-engine-v6"
Page({
  // 供pixi渲染的canvas
  canvas: null,
  context: null,
  // pixi Application
  pixiApplication: null,
  pixiOptions: null,
  data: { 
    appOptions: {
      // 手动指定application的尺寸
      width:750,
      height:750,
      // 全屏-以窗口宽高作为application的尺寸，当设置此选项后，手动设置的width\height会失效
      // isFullScreen: true,
      // application是否背景透明
      // transparent: true,
      // 背景颜色
      backgroundColor: 0x000000,
    }
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onPixiCanvasError(e){
    console.log(e);
  },
  onPixiCanvasDidUnmount(e){
    this.canvas = null;
    this.context = null;
    this.pixiApplication = null;
  },
  onAppInit(e) {
    try {
      const { canvas, context, options, application } = e
      this.canvas = canvas;
      this.context = context;
      this.pixiApplication = application;
      this.pixiOptions = options;
      const { stage } = application
      const text = new Text('欢迎使用阿里小程序Pixi引擎', {
        fontSize: 32,
        fill: 0xFF0000
      });
      text.anchor.set(.5, 1);
      // // 750尺度下的舞台的宽高
      const { width, height } = options;
      stage.addChild(text);
      text.position.set(width / 2, 200);
      const sprite = new Sprite(Texture.from('/resources/logo.png'));
      console.log('sprite',sprite);
      stage.addChild(sprite);
      sprite.anchor.set(.5);
      sprite.position.set(width / 2, height / 2);
    }
    catch(error) {
      console.log('error',error);
    }
    

  },
  onReady() {

  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'Demo-Application',
      desc: 'Demo-Application',
      path: 'pages/application/index',
    };
  },
});
```
