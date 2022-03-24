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

    var bg = PIXI.Sprite.from('/resources/bg_rotate.jpg');

    bg.anchor.set(0.5);

    bg.x = application.screen.width / 2;
    bg.y = application.screen.height / 2;

    application.stage.addChild(bg);

    var container = new PIXI.Container();
    container.x = application.screen.width / 2;
    container.y = application.screen.height / 2;

    // add a bunch of sprites
    var bgFront = PIXI.Sprite.from('/resources/bg_scene_rotate.jpg');
    bgFront.anchor.set(0.5);

    var light2 = PIXI.Sprite.from('/resources/light_rotate_2.png');
    light2.anchor.set(0.5);

    var light1 = PIXI.Sprite.from('/resources/light_rotate_1.png');
    light1.anchor.set(0.5);

    var panda = PIXI.Sprite.from('/resources/panda.png');
    panda.anchor.set(0.5);

    container.addChild(bgFront, light2, light1, panda);

    application.stage.addChild(container);

    // let's create a moving shape
    var thing = new PIXI.Graphics();
    application.stage.addChild(thing);
    thing.x = application.screen.width / 2;
    thing.y = application.screen.height / 2;
    thing.lineStyle(0);

    container.mask = thing;

    var count = 0;

    application.stage.on('tap', function () {
      if (!container.mask) {
        container.mask = thing;
      } else {
        container.mask = null;
      }
    });

    var help = new PIXI.Text('Click or tap to turn masking on / off.', {
      fontFamily: 'Arial',
      fontSize: 12,
      fontWeight: 'bold',
      fill: 'white'
    });
    help.y = application.screen.height - 26;
    help.x = 10;
    application.stage.addChild(help);

    application.ticker.add(function () {
      bg.rotation += 0.01;
      bgFront.rotation -= 0.01;

      light1.rotation += 0.02;
      light2.rotation += 0.01;

      panda.scale.x = 1 + Math.sin(count) * 0.04;
      panda.scale.y = 1 + Math.cos(count) * 0.04;

      count += 0.1;

      thing.clear();

      thing.beginFill(0x8bc5ff, 0.4);
      thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
      thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count) * 20);
      thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count) * 20);
      thing.lineTo(-120 + Math.cos(count) * 20, 100 + Math.sin(count) * 20);
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
      title: 'Demo-Mask Graphics',
      desc: 'Demo-Mask Graphics',
      path: 'pages/mask_graphics/index',
    };
  },
});
