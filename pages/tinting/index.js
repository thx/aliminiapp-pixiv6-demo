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

    // holder to store the aliens
    var aliens = [];

    var totalDudes = 20;

    for (var i = 0; i < totalDudes; i++) {
      // create a new Sprite that uses the image name that we just generated as its source
      var dude = PIXI.Sprite.from('/resources/eggHead.png');
      // set the anchor point so the texture is centerd on the sprite
      dude.anchor.set(0.5);

      // set a random scale for the dude - no point them all being the same size!
      dude.scale.set(0.8 + Math.random() * 0.3);

      // finally lets set the dude to be at a random position..
      dude.x = Math.random() * application.screen.width;
      dude.y = Math.random() * application.screen.height;

      dude.tint = Math.random() * 0xFFFFFF;

      // create some extra properties that will control movement :
      // create a random direction in radians. This is a number between 0 and PI*2 which is the equivalent of 0 - 360 degrees
      dude.direction = Math.random() * Math.PI * 2;

      // this number will be used to modify the direction of the dude over time
      dude.turningSpeed = Math.random() - 0.8;

      // create a random speed for the dude between 0 - 2
      dude.speed = 2 + Math.random() * 2;

      // finally we push the dude into the aliens array so it it can be easily accessed later
      aliens.push(dude);

      application.stage.addChild(dude);
    }
    // create a bounding box for the little dudes
    var dudeBoundsPadding = 100;
    var dudeBounds = new PIXI.Rectangle(-dudeBoundsPadding,
      -dudeBoundsPadding,
      application.screen.width + dudeBoundsPadding * 2,
      application.screen.height + dudeBoundsPadding * 2);

    application.ticker.add(function () {
      // iterate through the dudes and update their position
      for (var i = 0; i < aliens.length; i++) {
        var dude = aliens[i];
        dude.direction += dude.turningSpeed * 0.01;
        dude.x += Math.sin(dude.direction) * dude.speed;
        dude.y += Math.cos(dude.direction) * dude.speed;
        dude.rotation = -dude.direction - Math.PI / 2;

        // wrap the dudes by testing their bounds...
        if (dude.x < dudeBounds.x) {
          dude.x += dudeBounds.width;
        } else if (dude.x > dudeBounds.x + dudeBounds.width) {
          dude.x -= dudeBounds.width;
        }

        if (dude.y < dudeBounds.y) {
          dude.y += dudeBounds.height;
        } else if (dude.y > dudeBounds.y + dudeBounds.height) {
          dude.y -= dudeBounds.height;
        }
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
      title: 'Demo-Tinting',
      desc: 'Demo-Tinting',
      path: 'pages/container/index',
    };
  },
});
