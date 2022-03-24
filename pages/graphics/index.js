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
      backgroundColor: 0x1099bb,
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

    var graphics = new PIXI.Graphics();

    // Rectangle
    graphics.beginFill(0xDE3249);
    graphics.drawRect(50, 50, 100, 100);
    graphics.endFill();

    // Rectangle + line style 1
    graphics.lineStyle(2, 0xFEEB77, 1);
    graphics.beginFill(0x650A5A);
    graphics.drawRect(200, 50, 100, 100);
    graphics.endFill();

    // Rectangle + line style 2
    graphics.lineStyle(10, 0xFFBD01, 1);
    graphics.beginFill(0xC34288);
    graphics.drawRect(350, 50, 100, 100);
    graphics.endFill();

    // Rectangle 2
    graphics.lineStyle(2, 0xFFFFFF, 1);
    graphics.beginFill(0xAA4F08);
    graphics.drawRect(530, 50, 140, 100);
    graphics.endFill();

    // Circle
    graphics.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
    graphics.beginFill(0xDE3249, 1);
    graphics.drawCircle(100, 250, 50);
    graphics.endFill();

    // Circle + line style 1
    graphics.lineStyle(2, 0xFEEB77, 1);
    graphics.beginFill(0x650A5A, 1);
    graphics.drawCircle(250, 250, 50);
    graphics.endFill();

    // Circle + line style 2
    graphics.lineStyle(10, 0xFFBD01, 1);
    graphics.beginFill(0xC34288, 1);
    graphics.drawCircle(400, 250, 50);
    graphics.endFill();

    // Ellipse + line style 2
    graphics.lineStyle(2, 0xFFFFFF, 1);
    graphics.beginFill(0xAA4F08, 1);
    graphics.drawEllipse(600, 250, 80, 50);
    graphics.endFill();

    // draw a shape
    graphics.beginFill(0xFF3300);
    graphics.lineStyle(4, 0xffd900, 1);
    graphics.moveTo(50, 350);
    graphics.lineTo(250, 350);
    graphics.lineTo(100, 400);
    graphics.lineTo(50, 350);
    graphics.endFill();

    // draw a rounded rectangle
    graphics.lineStyle(2, 0xFF00FF, 1);
    graphics.beginFill(0x650A5A, 0.25);
    graphics.drawRoundedRect(50, 440, 100, 100, 16);
    graphics.endFill();

    // draw star
    graphics.lineStyle(2, 0xFFFFFF);
    graphics.beginFill(0x35CC5A, 1);
    graphics.drawStar(360, 370, 5, 50);
    graphics.endFill();

    // draw star 2
    graphics.lineStyle(2, 0xFFFFFF);
    graphics.beginFill(0xFFCC5A, 1);
    graphics.drawStar(280, 510, 7, 50);
    graphics.endFill();

    // draw star 3
    graphics.lineStyle(4, 0xFFFFFF);
    graphics.beginFill(0x55335A, 1);
    graphics.drawStar(470, 450, 4, 50);
    graphics.endFill();

    // draw polygon
    var path = [600, 370, 700, 460, 780, 420, 730, 570, 590, 520];

    graphics.lineStyle(0);
    graphics.beginFill(0x3500FA, 1);
    graphics.drawPolygon(path);
    graphics.endFill();

    application.stage.addChild(graphics);


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
      title: 'Demo-Graphics',
      desc: 'Demo-Graphics',
      path: 'pages/graphics/index',
    };
  },
});
