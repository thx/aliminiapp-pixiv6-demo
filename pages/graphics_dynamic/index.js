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

    application.stage.interactive = true;

    var graphics = new PIXI.Graphics();

    // set a fill and line style
    graphics.beginFill(0xFF3300);
    graphics.lineStyle(10, 0xffd900, 1);

    // draw a shape
    graphics.moveTo(50, 50);
    graphics.lineTo(250, 50);
    graphics.lineTo(100, 100);
    graphics.lineTo(250, 220);
    graphics.lineTo(50, 220);
    graphics.lineTo(50, 50);
    graphics.endFill();

    // set a fill and line style again
    graphics.lineStyle(10, 0xFF0000, 0.8);
    graphics.beginFill(0xFF700B, 1);

    // draw a second shape
    graphics.moveTo(210, 300);
    graphics.lineTo(450, 320);
    graphics.lineTo(570, 350);
    graphics.quadraticCurveTo(600, 0, 480, 100);
    graphics.lineTo(330, 120);
    graphics.lineTo(410, 200);
    graphics.lineTo(210, 300);
    graphics.endFill();

    // draw a rectangle
    graphics.lineStyle(2, 0x0000FF, 1);
    graphics.drawRect(50, 250, 100, 100);

    // draw a circle
    graphics.lineStyle(0);
    graphics.beginFill(0xFFFF0B, 0.5);
    graphics.drawCircle(470, 200, 100);
    graphics.endFill();

    graphics.lineStyle(20, 0x33FF00);
    graphics.moveTo(30, 30);
    graphics.lineTo(600, 300);


    application.stage.addChild(graphics);

    // let's create a moving shape
    var thing = new PIXI.Graphics();
    application.stage.addChild(thing);
    thing.x = 800 / 2;
    thing.y = 600 / 2;

    var count = 0;

    // Just click on the stage to draw random lines
    application.stage.interactive = true;
    application.stage.on('tap', onPointerDown);

    function onPointerDown() {
      graphics.lineStyle(Math.random() * 30, Math.random() * 0xFFFFFF, 1);
      graphics.moveTo(Math.random() * 800, Math.random() * 600);
      graphics.bezierCurveTo(
        Math.random() * 800, Math.random() * 600,
        Math.random() * 800, Math.random() * 600,
        Math.random() * 800, Math.random() * 600
      );
    }

    application.ticker.add(function () {
      count += 0.1;

      thing.clear();
      thing.lineStyle(10, 0xff0000, 1);
      thing.beginFill(0xffFF00, 0.5);

      thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
      thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count) * 20);
      thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count) * 20);
      thing.lineTo(-120 + Math.cos(count) * 20, 100 + Math.sin(count) * 20);
      thing.lineTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);

      thing.rotation = count * 0.1;
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
      title: 'Demo-Graphics Dynamic',
      desc: 'Demo-Graphics Dynamic',
      path: 'pages/graphics_dynamic/index',
    };
  },
});
