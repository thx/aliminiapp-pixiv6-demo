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


    application.stage.interactive = true;

    var bg = PIXI.Sprite.from('/resources/bg_plane.jpg');

    application.stage.addChild(bg);
    var cells = PIXI.Sprite.from('/resources/cells.png');

    cells.scale.set(1.5);

    var mask = PIXI.Sprite.from('/resources/flowerTop.png');
    mask.anchor.set(0.5);
    mask.x = 310;
    mask.y = 190;

    cells.mask = mask;

    application.stage.addChild(mask, cells);

    var target = new PIXI.Point();

    reset();

    function reset() {
      target.x = Math.floor(Math.random() * 550);
      target.y = Math.floor(Math.random() * 300);
    }

    application.ticker.add(function () {
      mask.x += (target.x - mask.x) * 0.1;
      mask.y += (target.y - mask.y) * 0.1;

      if (Math.abs(mask.x - target.x) < 1) {
        reset();
      }
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
      title: 'Demo-Mask Sprite',
      desc: 'Demo-Mask Sprite',
      path: 'pages/mask_sprite/index',
    };
  },
});
