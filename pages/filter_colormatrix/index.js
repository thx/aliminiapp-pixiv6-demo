import * as PIXI from "@tbminiapp/pixi-miniprogram-engine-v6"
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


var filter = new PIXI.filters.ColorMatrixFilter();

var container = new PIXI.Container();
container.x = application.screen.width / 2;
container.y = application.screen.height / 2;


var bgFront = PIXI.Sprite.from('/resources/bg_scene_rotate.jpg');
bgFront.anchor.set(0.5);

container.addChild(bgFront);

var light2 = PIXI.Sprite.from('/resources/light_rotate_2.png');
light2.anchor.set(0.5);
container.addChild(light2);

var light1 = PIXI.Sprite.from('/resources/light_rotate_1.png');
light1.anchor.set(0.5);
container.addChild(light1);

var panda = PIXI.Sprite.from('/resources/panda.png');
panda.anchor.set(0.5);

container.addChild(panda);

application.stage.addChild(container);

application.stage.filters = [filter];

var count = 0;
var enabled = true;

application.stage.on('pointertap', function() {
    enabled = !enabled;
    application.stage.filters = enabled ? [filter] : null;
});

var help = new PIXI.Text('Click or tap to turn filters on / off.', {
    fontFamily: 'Arial',
    fontSize: 12,
    fontWeight: 'bold',
    fill: 'white'
});
help.y = application.screen.height - 25;
help.x = 10;

application.stage.addChild(help);

application.ticker.add(function(delta) {
    bg.rotation += 0.01;
    bgFront.rotation -= 0.01;
    light1.rotation += 0.02;
    light2.rotation += 0.01;

    panda.scale.x = 1 + Math.sin(count) * 0.04;
    panda.scale.y = 1 + Math.cos(count) * 0.04;

    count += 0.1;

    var matrix = filter.matrix;

    matrix[1] = Math.sin(count) * 3;
    matrix[2] = Math.cos(count);
    matrix[3] = Math.cos(count) * 1.5;
    matrix[4] = Math.sin(count / 3) * 2;
    matrix[5] = Math.sin(count / 2);
    matrix[6] = Math.sin(count / 4);
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
      title: 'Demo-Color Matrix Filter',
      desc: 'Demo-Color Matrix Filter',
      path: 'pages/filter_colormatrix/index',
    };
  },
});
