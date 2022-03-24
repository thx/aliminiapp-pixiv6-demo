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
      width: 750,
      height: 300,
      // 全屏-以窗口宽高作为application的尺寸，当设置此选项后，手动设置的width\height会失效
      // isFullScreen: true,
      // application是否背景透明
      // transparent: true,
      // 背景颜色
      backgroundColor: 0x000000,
      // !!! 废弃 （pixi6 中此选项已经无效，需要手动引用降级包）是否强制用2d上下文渲染，如果为false,则优先使用webgl渲染
      forceCanvas: false
    },
    base64: ''
  },
  onCapture(e) {
    const { pixiApplication } = this;
    if (!pixiApplication) return;
    const captureCanvas = pixiApplication.renderer.extract.canvas(pixiApplication.stage);
    const base64 = captureCanvas.toDataURL();
    this.setData({ base64 });
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onPixiCanvasError(e) {
    console.log(e);
  },
  onPixiCanvasDidUnmount(e) {
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
    const { stage } = application;
    const { width, height } = application.screen;
    const g = new PIXI.Graphics();
    g.beginFill(0xFFFF00);
    g.drawRect(0, 0, width, height);
    stage.addChild(g);

    const sprite = new PIXI.Sprite(PIXI.Texture.from('/resources/logo.png'));
    stage.addChild(sprite);
    sprite.anchor.set(.5);
    sprite.position.set(width / 2, height / 2);

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
