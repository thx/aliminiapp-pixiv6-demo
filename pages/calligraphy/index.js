import { Sprite, Text, Graphics } from "@tbminiapp/pixi-miniprogram-engine-v6";
import * as calligraphy from "@tbminiapp/pixi-v6-plugin-calligraphy";
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
      backgroundColor: 0xFFFFFF,
      // 是否强制用2d上下文渲染，如果为false,则优先使用webgl渲染
      forceCanvas: true
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
    const { stage } = application;
    const { width: stageWidth, height: stageHeight } = application.screen;
    // 实例化Tablet
    const tablet = new calligraphy.Tablet({
      width: stageWidth,
      height: stageHeight,
      resolution: application.renderer.resolution
    });
    // 设置笔刷
    tablet.selectBrush(calligraphy.BRUSH_TYPE.LARGE);

    // 开始接受笔画
    tablet.start();
    stage.addChild(tablet);


    const tips = new Text("来写字吧", {
      fill: "#000000",
      fontSize: 48,
      trim: true
    });
    tips.anchor.set(.5);
    tips.position.set(stageWidth / 2, 168);
    stage.addChild(tips);

    const btnsSprite = new Sprite();
    stage.addChild(btnsSprite);

    const btnClear = new Sprite();
    const btnClearBg = new Graphics();
    btnClearBg.beginFill(0x000000, .75);
    btnClearBg.drawRect(0, 0, 200, 75);
    btnClearBg.endFill();
    btnClear.addChild(btnClearBg);
    const btnClearTxt = new Text("重写", {
      fill: "#ffffff",
      fontSize: 32,
      trim: true
    });
    btnClearTxt.anchor.set(.5);
    btnClearTxt.position.set(100, 38);
    btnClear.addChild(btnClearTxt);
    btnClear.position.set(50, stageHeight - 150);
    btnsSprite.addChild(btnClear);

    const btnUndo = new Sprite();
    const btnUndoBg = new Graphics();
    btnUndoBg.beginFill(0x000000, .75);
    btnUndoBg.drawRect(0, 0, 200, 75);
    btnUndoBg.endFill();
    btnUndo.addChild(btnUndoBg);
    const btnUndoTxt = new Text("撤消", {
      fill: "#ffffff",
      fontSize: 32,
      trim: true
    });
    btnUndoTxt.anchor.set(.5);
    btnUndoTxt.position.set(100, 38);
    btnUndo.addChild(btnUndoTxt);
    btnUndo.position.set(stageWidth - 50 - 200, stageHeight - 150);
    btnsSprite.addChild(btnUndo);

    const btnPlayer = new Sprite();
    const btnPlayerBg = new Graphics();
    btnPlayerBg.beginFill(0xFF0000, .75);
    btnPlayerBg.drawRect(0, 0, 200, 75);
    btnPlayerBg.endFill();
    btnPlayer.addChild(btnPlayerBg);
    const btnPlayerTxt = new Text("回放", {
      fill: "#ffffff",
      fontSize: 32,
      trim: true
    });
    btnPlayerTxt.anchor.set(.5);
    btnPlayerTxt.position.set(100, 38);
    btnPlayer.addChild(btnPlayerTxt);
    btnPlayer.position.set((stageWidth - 200) / 2, stageHeight - 150);
    btnsSprite.addChild(btnPlayer);


    btnClear.interactive = true;
    btnClear.on("tap", (e) => {
      console.log('clear');
      tablet.clear();
    });

    btnUndo.interactive = true;
    btnUndo.on("tap", (e) => {
       tablet.undo();
    });

    let player;
    btnPlayer.interactive = true;
    btnPlayer.on("tap", (e) => {
      tablet.visible = false;
      btnsSprite.visible = false;

      if (player) {
        player.stop();
      }
      else {
        player = new calligraphy.Player({
          width: stageWidth,
          height: stageHeight,
          resolution: application.renderer.resolution
        });
        stage.addChild(player);
      }

      player.once('end', () => {
        btnsSprite.visible = true;
        tablet.visible = true;

        player.visible = false;
      });

      player.visible = true;
      player.play(tablet.getPlainHistory());
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
      title: 'Demo-Application',
      desc: 'Demo-Application',
      path: 'pages/application/index',
    };
  },
});
