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
      // height:750,
      // 全屏-以窗口宽高作为application的尺寸，当设置此选项后，手动设置的width\height会失效
      isFullScreen: true,
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
    const { canvas, context, options, application } = e
    console.log('onAppInit', e);
    this.canvas = canvas;
    this.context = context;
    this.pixiApplication = application;
    this.pixiOptions = options;
    var bg = PIXI.Sprite.from('/resources/bg_depth_blur.jpg');
    bg.width = application.screen.width;
    bg.height = application.screen.height;
    application.stage.addChild(bg);

    var littleDudes = PIXI.Sprite.from('/resources/depth_blur_dudes.png');
    littleDudes.x = (application.screen.width / 2) - 315;
    littleDudes.y = 200;
    application.stage.addChild(littleDudes);

    var littleRobot = PIXI.Sprite.from('/resources/depth_blur_moby.png');
    littleRobot.x = (application.screen.width / 2) - 200;
    littleRobot.y = 100;
    application.stage.addChild(littleRobot);

    var blurFilter1 = new PIXI.filters.BlurFilter();
    var blurFilter2 = new PIXI.filters.BlurFilter();

    littleDudes.filters = [blurFilter1];
    littleRobot.filters = [blurFilter2];

    var count = 0;

    application.ticker.add(function () {
      count += 0.005;

      var blurAmount = Math.cos(count);
      var blurAmount2 = Math.sin(count);

      blurFilter1.blur = 20 * (blurAmount);
      blurFilter2.blur = 20 * (blurAmount2);
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
      title: 'Demo-BlurFilter',
      desc: 'Demo-BlurFilter',
      path: 'pages/filter_blur/index',
    };
  },
});
