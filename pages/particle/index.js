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

    var sprites = new PIXI.ParticleContainer(10000, {
      scale: true,
      position: true,
      rotation: true,
      uvs: true,
      alpha: true
    });
    application.stage.addChild(sprites);

    // create an array to store all the sprites
    var maggots = [];

    console.log('renderer',application.renderer,PIXI.Renderer,application.renderer instanceof PIXI.Renderer );
    var totalSprites = application.renderer instanceof PIXI.Renderer ? 10000 : 100;

    for (var i = 0; i < totalSprites; i++) {
      // create a new Sprite
      var dude = PIXI.Sprite.from('/resources/maggot_tiny.png');

      dude.tint = Math.random() * 0xE8D4CD;

      // set the anchor point so the texture is centerd on the sprite
      dude.anchor.set(0.5);

      // different maggots, different sizes
      dude.scale.set(0.8 + Math.random() * 0.3);

      // scatter them all
      dude.x = Math.random() * application.screen.width;
      dude.y = Math.random() * application.screen.height;

      dude.tint = Math.random() * 0x808080;

      // create a random direction in radians
      dude.direction = Math.random() * Math.PI * 2;

      // this number will be used to modify the direction of the sprite over time
      dude.turningSpeed = Math.random() - 0.8;

      // create a random speed between 0 - 2, and these maggots are slooww
      dude.speed = (2 + Math.random() * 2) * 0.2;

      dude.offset = Math.random() * 100;

      // finally we push the dude into the maggots array so it it can be easily accessed later
      maggots.push(dude);

      sprites.addChild(dude);
    }

    // create a bounding box box for the little maggots
    var dudeBoundsPadding = 100;
    var dudeBounds = new PIXI.Rectangle(
      -dudeBoundsPadding,
      -dudeBoundsPadding,
      application.screen.width + dudeBoundsPadding * 2,
      application.screen.height + dudeBoundsPadding * 2
    );

    var tick = 0;

    application.ticker.add(function () {
      // iterate through the sprites and update their position
      for (var i = 0; i < maggots.length; i++) {
        var dude = maggots[i];
        dude.scale.y = 0.95 + Math.sin(tick + dude.offset) * 0.05;
        dude.direction += dude.turningSpeed * 0.01;
        dude.x += Math.sin(dude.direction) * (dude.speed * dude.scale.y);
        dude.y += Math.cos(dude.direction) * (dude.speed * dude.scale.y);
        dude.rotation = -dude.direction + Math.PI;

        // wrap the maggots
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

      // increment the ticker
      tick += 0.1;
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
      title: 'Demo-Particle',
      desc: 'Demo-Particle',
      path: 'pages/particle/index',
    };
  },
});
