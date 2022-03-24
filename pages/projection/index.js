import * as PIXI from '@tbminiapp/pixi-miniprogram-engine-v6';
import { Sprite2d } from '@tbminiapp/pixi-projection';
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


    var w = application.screen.width / 2; 
    var h = application.screen.height / 2;

    const text = new PIXI.Text('试着拖动4个控制点',{fill:0xFF0000});
    text.anchor.set(0.5,0);
    text.position.set(w,100);
    application.stage.addChild(text);

    function createSquare(x, y) {
      var square = new PIXI.Sprite(PIXI.Texture.WHITE);
      square.tint = 0xff0000;
      square.factor = 1;
      square.anchor.set(0.5);
      square.width = square.height = 30;
      square.position.set(x, y);
      return square;
    }

    var squares = [
      createSquare(w - 150, h - 150),
      createSquare(w + 150, h - 150),
      createSquare(w + 150, h + 150),
      createSquare(w - 150, h + 150)
    ];

    var quad = squares.map(function (s) { return s.position; });

    // add sprite itself
    var containerSprite = new Sprite2d(PIXI.Texture.from('/resources/bg_scene_rotate.jpg'));
    containerSprite.anchor.set(0.5);

    application.stage.addChild(containerSprite);
    squares.forEach(function (s) { application.stage.addChild(s); });

    // Listen for animate update
    application.ticker.add(function (delta) {
      containerSprite.proj.mapSprite(containerSprite, quad);
    });

    squares.forEach(function (s) { addInteraction(s); });

    // let us add sprite to make it more funny

    var bunny = new Sprite2d(PIXI.Texture.from('/resources/flowerTop.png'));
    bunny.anchor.set(0.5);
    containerSprite.addChild(bunny);

    addInteraction(bunny);
 
    // === INTERACTION CODE  ===

    function toggle(obj) {
    }

    function snap(obj) {
      if (obj === bunny) {
        obj.position.set(0);
      } else {
        obj.position.x = Math.min(Math.max(obj.position.x, 0), application.screen.width);
        obj.position.y = Math.min(Math.max(obj.position.y, 0), application.screen.height);
      }
    }

    function addInteraction(obj) {
      obj.interactive = true;
      obj
        .on('touchstart', onDragStart)
        .on('touchend', onDragEnd)
        .on('touchmove', onDragMove);
    }

    function onDragStart(event) {
      var obj = event.currentTarget;
      obj.dragData = event.data;
      obj.dragging = 1;
      obj.dragPointerStart = event.data.getLocalPosition(obj.parent);
      obj.dragObjStart = new PIXI.Point();
      obj.dragObjStart.copyFrom(obj.position);
      obj.dragGlobalStart = new PIXI.Point();
      obj.dragGlobalStart.copyFrom(event.data.global);
    }

    function onDragEnd(event) {
      var obj = event.currentTarget;
      if (obj.dragging === 1) {
        toggle(obj);
      } else {
        snap(obj);
      }
      obj.dragging = 0;
      obj.dragData = null;
      // set the interaction data to null
    }

    function onDragMove(event) {
      var obj = event.currentTarget;
      if (!obj.dragging) return;
      var data = obj.dragData; // it can be different pointer!
      if (obj.dragging === 1) {
        // click or drag?
        if (Math.abs(data.global.x - obj.dragGlobalStart.x)
          + Math.abs(data.global.y - obj.dragGlobalStart.y) >= 3) {
          // DRAG
          obj.dragging = 2;
        }
      }
      if (obj.dragging === 2) {
        var dragPointerEnd = data.getLocalPosition(obj.parent);
        // DRAG
        obj.position.set(
          obj.dragObjStart.x + (dragPointerEnd.x - obj.dragPointerStart.x),
          obj.dragObjStart.y + (dragPointerEnd.y - obj.dragPointerStart.y)
        );
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
      title: 'Demo-BlurFilter',
      desc: 'Demo-BlurFilter',
      path: 'pages/filter_blur/index',
    };
  },
});
