import * as PIXI from "@tbminiapp/pixi-miniprogram-engine";
const mcJson = require('/resources/spritesheet/mc.json');
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
    const container = new PIXI.Container();
    application.stage.addChild(container);
    // Create a new texture

    application.stop();
    var loader = new PIXI.loaders.Loader();
    loader
      .add('mcimg', '/resources/spritesheet/mc.png')
      .load(onAssetsLoaded);

    function onAssetsLoaded() {
      // create an array to store the textures
      const baseTexture = PIXI.utils.BaseTextureCache['mcimg'];
      const spriteSheet = new PIXI.Spritesheet(baseTexture, mcJson);
      spriteSheet.parse(() => {
        var explosionTextures = [];
        var i;

        for (i = 0; i < 26; i++) {
          var texture = PIXI.Texture.fromFrame('Explosion_Sequence_A ' + (i + 1) + '.png');
          explosionTextures.push(texture);
        }

        for (i = 0; i < 50; i++) {
          // create an explosion AnimatedSprite
          var explosion = new PIXI.extras.AnimatedSprite(explosionTextures);

          explosion.x = Math.random() * application.screen.width;
          explosion.y = Math.random() * application.screen.height;
          explosion.anchor.set(0.5);
          explosion.rotation = Math.random() * Math.PI;
          explosion.scale.set(0.75 + Math.random() * 0.5);
          explosion.gotoAndPlay(Math.random() * 27);
          application.stage.addChild(explosion);
        }

        // start animating
        application.start();
      });

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
      title: 'Demo-Animated Sprite',
      desc: 'Demo-Animated Sprite',
      path: 'pages/animatedsprite/index',
    };
  },
});
