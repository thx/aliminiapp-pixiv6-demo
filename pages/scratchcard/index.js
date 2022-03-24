import * as PIXI from "@tbminiapp/pixi-miniprogram-engine-v6";
Page({
  // 供pixi渲染的canvas
  canvas: null,
  context: null,
  // pixi Application
  pixiApplication: null,
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
    this.canvas = canvas;
    this.context = context;
    this.pixiApplication = application;
    const container = new PIXI.Container();
    application.stage.addChild(container);
    var stage = application.stage;

    // prepare circle texture, that will be our brush
    var brush = new PIXI.Graphics();
    brush.beginFill(0xffffff);
    brush.drawCircle(0, 0, 50);
    brush.endFill();

    try {
      var loader = application.loader;
      loader.add('t1', '/resources/bg_grass.jpg');
      loader.add('t2', '/resources/bg_rotate.jpg');
      loader.load(setup);
    } catch (e) {
      console.log('error', e);
    }

    let _i = 0;
    function setup(loader, resources) {
      var background = new PIXI.Sprite(resources.t1.texture);
      stage.addChild(background);
      background.width = application.screen.width;
      background.height = application.screen.height;

      var imageToReveal = new PIXI.Sprite(resources.t2.texture);
      stage.addChild(imageToReveal);
      imageToReveal.width = application.screen.width;
      imageToReveal.height = application.screen.height;

      var renderTexture = PIXI.RenderTexture.create(application.screen.width, application.screen.height);
      var renderTextureSprite = new PIXI.Sprite(renderTexture);
      stage.addChild(renderTextureSprite);
      imageToReveal.mask = renderTextureSprite;


      stage.interactive = true;
      stage.on('touchstart', pointerDown);
      stage.on('touchend', pointerUp);
      stage.on('touchmove', pointerMove);

      var dragging = false;

      function pointerMove(event) {
        if (dragging) {
          brush.position.copyFrom(event.data.global);
          // !!! 在IOS 手淘9.22 webGL下，进入目录页->本页->返回目录页->重新进入本页。执行到这行，手淘会crash
          // 安卓下正常
          // 绕过方法：设置pixi-canvas组件的 destroyAppOnDidUnmount="true"  每次DidUnmount时候 销毁application对象
          application.renderer.render(brush, renderTexture, false, null, false);
        }
      }

      function pointerDown(event) {
        dragging = true;
        pointerMove(event);
      }

      function pointerUp(event) {
        dragging = false;
        _i++;
      }

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
    title: 'Demo-ScratchCard',
    desc: 'Demo-ScratchCard',
    path: 'pages/scratchcard/index',
  };
},
});
