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
  onPixiCanvasError(e) {
    console.log(e);
  },
  onPixiCanvasDidUnmount(e) {
    console.log('aaa', e);
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


    // create two render textures... these dynamic textures will be used to draw the scene into itself
    var renderTexture = PIXI.RenderTexture.create(
      application.screen.width,
      application.screen.height
    );
    var renderTexture2 = PIXI.RenderTexture.create(
      application.screen.width,
      application.screen.height
    );
    var currentTexture = renderTexture;

    // create a new sprite that uses the render texture we created above
    var outputSprite = new PIXI.Sprite(currentTexture);

    // align the sprite
    outputSprite.x = application.screen.width / 2;
    outputSprite.y = application.screen.height / 2;
    outputSprite.anchor.set(0.5);

    // add to stage
    application.stage.addChild(outputSprite);

    var stuffContainer = new PIXI.Container();

    stuffContainer.x = application.screen.width / 2;
    stuffContainer.y = application.screen.height / 2;

    application.stage.addChild(stuffContainer);

    // create an array of image ids..
    var fruits = [
      '/resources/rt_object_01.png',
      '/resources/rt_object_02.png',
      '/resources/rt_object_03.png',
      '/resources/rt_object_04.png',
      '/resources/rt_object_05.png',
      '/resources/rt_object_06.png',
      '/resources/rt_object_07.png',
      '/resources/rt_object_08.png'
    ];

    // create an array of items
    var items = [];

    // now create some items and randomly position them in the stuff container
    for (var i = 0; i < 20; i++) {
      var item = PIXI.Sprite.from(fruits[i % fruits.length]);
      item.x = Math.random() * (application.screen.width / 2) - 200;
      item.y = Math.random() * (application.screen.width / 2) - 200;
      item.anchor.set(0.5);
      stuffContainer.addChild(item);
      items.push(item);
    }

    // used for spinning!
    var count = 0;

    application.ticker.add(function () {
      for (var i = 0; i < items.length; i++) {
        // rotate each item
        var item = items[i];
        item.rotation += 0.1;
      }

      count += 0.01;

      // swap the buffers ...
      var temp = renderTexture;
      renderTexture = renderTexture2;
      renderTexture2 = temp;

      // set the new texture
      outputSprite.texture = renderTexture;

      // twist this up!
      stuffContainer.rotation -= 0.01;
      outputSprite.scale.set(1 + Math.sin(count) * 0.2);

      // render the stage to the texture
      // the 'true' clears the texture before the content is rendered
      application.renderer.render(application.stage, renderTexture2, false);
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
