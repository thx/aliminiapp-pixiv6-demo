import { Texture, Sprite, Text } from "@tbminiapp/pixi-miniprogram-engine-v6"
import * as PIXI from "@tbminiapp/pixi-miniprogram-engine-v6";
const {documentAlias} = PIXI.miniprogram;
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
      // !!! 废弃 （pixi6 中此选项已经无效，需要手动引用降级包）是否强制用2d上下文渲染，如果为false,则优先使用webgl渲染
      forceCanvas: false
    },
    appOptions2: {
      // 手动指定application的尺寸
      width:750,
      height:750,
      // 全屏-以窗口宽高作为application的尺寸，当设置此选项后，手动设置的width\height会失效
      // isFullScreen: true,
      // application是否背景透明
      // transparent: true,
      // 背景颜色
      backgroundColor: 0x000000,
      // !!! 废弃 （pixi6 中此选项已经无效，需要手动引用降级包）是否强制用2d上下文渲染，如果为false,则优先使用webgl渲染
      forceCanvas: false
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
    try{
      const { canvas, context, options, application } = e
      
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
      


      // const offScreenCanvas = my.createOffscreenCanvas(200,200);
      // 注意要这样使用 离屏canvas texture
      // const offScreenCanvas = PIXI.miniprogram.documentAlias.createElement('canvas');
      // offScreenCanvas.width = offScreenCanvas.height = 200;
      // const offScreenCtx = offScreenCanvas.getContext('2d');
      // offScreenCtx.rect(0,0,200,200);
      // offScreenCtx.fillStyle="green";
      // offScreenCtx.fill();

      // const testSprite = new Sprite(Texture.from(offScreenCanvas));
      // stage.addChild(testSprite);

    }catch(error){
      console.log('error',error);
    }
    

  },
  onAppInit2(e) {
    try{
      const { canvas, context, options, application } = e
      
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

    }catch(error){
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
