import * as PIXI from "@tbminiapp/pixi-miniprogram-engine-v6";
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
      // width:750,
      // height:1000,
      // 全屏-以窗口宽高作为application的尺寸，当设置此选项后，手动设置的width\height会失效
      isFullScreen: true,
      // application是否背景透明
      // transparent: true,
      // 背景颜色
      backgroundColor: 0x1099bb,
      // !!! 废弃 （pixi6 中此选项已经无效，需要手动引用降级包）是否强制用2d上下文渲染，如果为false,则优先使用webgl渲染
      forceCanvas: false,
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
    const { canvas, context, options, application } = e
    console.log('onAppInit', e);
    this.canvas = canvas;
    this.context = context;
    this.pixiApplication = application;
    this.pixiOptions = options;
    const container = new PIXI.Container();
    application.stage.addChild(container);
    PIXI.settings.TARGET_FPMS = 0.06;
    var bol = false;

    // create a texture from an image path
    var texture = PIXI.Texture.from('/resources/flowerTop.png');
    // texture.on('update',()=>{

      
    // })
    // create a second texture
    var secondTexture = PIXI.Texture.from('/resources/eggHead.png');
    // create a new Sprite using the texture
      var dude = new PIXI.Sprite(texture);
      // dude.tint = 0xFF0000;
      // center the sprites anchor point
      dude.anchor.set(0.5);

      // move the sprite to the center of the screen
      dude.x = application.screen.width / 2;
      dude.y = application.screen.height / 2;

      application.stage.addChild(dude);

      // make the sprite interactive
      dude.interactive = true;
      dude.buttonMode = true;

      dude.on('tap', function () {
        bol = !bol;
        if (bol) {
          dude.texture = secondTexture;
        } else {
          dude.texture = texture;
        }
      });

      // const graphics = new PIXI.Graphics();
      // graphics.beginFill(0x35CC5A, 1);
      // graphics.drawStar(0, 0, 5, 50);
      // graphics.endFill();
      // graphics.x = application.screen.width / 2;
      // graphics.y = application.screen.height / 2 - 200;
      // application.stage.addChild(graphics);
      let time = Date.now();
      application.ticker.add(function () {
        // just for fun, let's rotate mr rabbit a little
        dude.rotation += 0.1;
        // graphics.rotation += 0.1;
        const now= Date.now();
        // console.log(now-time);
        time = now;
      });

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
      title: 'Demo-Texture Swap',
      desc: 'Demo-Texture Swap',
      path: 'pages/textureswap/index',
    };
  },
});
