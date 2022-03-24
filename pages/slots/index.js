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
      width: 750,
      height: 563,
      // 全屏-以窗口宽高作为application的尺寸，当设置此选项后，手动设置的width\height会失效
      // isFullScreen: true,
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
    const container = new PIXI.Container();
    application.stage.addChild(container);
    var loader = new PIXI.Loader();
    loader
      .add('/resources/eggHead.png', '/resources/eggHead.png')
      .add('/resources/flowerTop.png', '/resources/flowerTop.png')
      .add('/resources/helmlok.png', '/resources/helmlok.png')
      .add('/resources/skully.png', '/resources/skully.png')
      .load(onAssetsLoaded);

    var REEL_WIDTH = 160;
    var SYMBOL_SIZE = 150;

    // onAssetsLoaded handler builds the example.
    function onAssetsLoaded() {
      // Create different slot symbols.
      var slotTextures = [
        PIXI.Texture.from('/resources/eggHead.png'),
        PIXI.Texture.from('/resources/flowerTop.png'),
        PIXI.Texture.from('/resources/helmlok.png'),
        PIXI.Texture.from('/resources/skully.png')
      ];

      // Build the reels
      var reels = [];
      var reelContainer = new PIXI.Container();
      for (var i = 0; i < 5; i++) {
        var rc = new PIXI.Container();
        rc.x = i * REEL_WIDTH;
        reelContainer.addChild(rc);

        var reel = {
          container: rc,
          symbols: [],
          position: 0,
          previousPosition: 0,
          blur: new PIXI.filters.BlurFilter()
        };
        reel.blur.blurX = 0;
        reel.blur.blurY = 0;
        rc.filters = [reel.blur];

        // Build the symbols
        for (var j = 0; j < 4; j++) {
          var symbol = new PIXI.Sprite(slotTextures[Math.floor(Math.random() * slotTextures.length)]);
          // Scale the symbol to fit symbol area.
          symbol.y = j * SYMBOL_SIZE;
          symbol.scale.x = symbol.scale.y = Math.min(SYMBOL_SIZE / symbol.width, SYMBOL_SIZE / symbol.height);
          symbol.x = Math.round((SYMBOL_SIZE - symbol.width) / 2);
          reel.symbols.push(symbol);
          rc.addChild(symbol);
        }
        reels.push(reel);
      }
      application.stage.addChild(reelContainer);

      // Build top & bottom covers and position reelContainer
      var margin = (application.screen.height - SYMBOL_SIZE * 3) / 2;
      reelContainer.y = margin;
      reelContainer.x = Math.round(application.screen.width - REEL_WIDTH * 5);
      var top = new PIXI.Graphics();
      top.beginFill(0, 1);
      top.drawRect(0, 0, application.screen.width, margin);
      var bottom = new PIXI.Graphics();
      bottom.beginFill(0, 1);
      bottom.drawRect(0, SYMBOL_SIZE * 3 + margin, application.screen.width, margin);

      // Add play text
      var style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#ffffff', '#00ff99'], // gradient
        stroke: '#4a1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440
      });

      var playText = new PIXI.Text('Spin the wheels!', style);
      playText.x = Math.round((bottom.width - playText.width) / 2);
      playText.y = application.screen.height - margin + Math.round((margin - playText.height) / 2);
      bottom.addChild(playText);

      // Add header text
      var headerText = new PIXI.Text('PIXI MONSTER SLOTS!', style);
      headerText.x = Math.round((top.width - headerText.width) / 2);
      headerText.y = Math.round((margin - headerText.height) / 2);
      top.addChild(headerText);

      application.stage.addChild(top);
      application.stage.addChild(bottom);

      // Set the interactivity.
      bottom.interactive = true;
      bottom.buttonMode = true;
      bottom.addListener('tap', function () {
        startPlay();
      });

      var running = false;

      // Function to start playing.
      function startPlay() {
        if (running) return;
        running = true;

        for (var i = 0; i < reels.length; i++) {
          var r = reels[i];
          var extra = Math.floor(Math.random() * 3);
          tweenTo(r, 'position', r.position + 10 + i * 5 + extra, 2500 + i * 600 + extra * 600, backout(0.5), null, i === reels.length - 1 ? reelsComplete : null);
        }
      }

      // Reels done handler.
      function reelsComplete() {
        running = false;
      }

      // Listen for animate update.
      application.ticker.add(function (delta) {
        // Update the slots.
        for (var i = 0; i < reels.length; i++) {
          var r = reels[i];
          // Update blur filter y amount based on speed.
          // This would be better if calculated with time in mind also. Now blur depends on frame rate.
          r.blur.blurY = (r.position - r.previousPosition) * 8;
          r.previousPosition = r.position;

          // Update symbol positions on reel.
          for (var j = 0; j < r.symbols.length; j++) {
            var s = r.symbols[j];
            var prevy = s.y;
            s.y = ((r.position + j) % r.symbols.length) * SYMBOL_SIZE - SYMBOL_SIZE;
            if (s.y < 0 && prevy > SYMBOL_SIZE) {
              // Detect going over and swap a texture.
              // This should in proper product be determined from some logical reel.
              s.texture = slotTextures[Math.floor(Math.random() * slotTextures.length)];
              s.scale.x = s.scale.y = Math.min(SYMBOL_SIZE / s.texture.width, SYMBOL_SIZE / s.texture.height);
              s.x = Math.round((SYMBOL_SIZE - s.width) / 2);
            }
          }
        }
      });
    }

    // Very simple tweening utility function. This should be replaced with a proper tweening library in a real product.
    var tweening = [];
    function tweenTo(object, property, target, time, easing, onchange, oncomplete) {
      var tween = {
        object: object,
        property: property,
        propertyBeginValue: object[property],
        target: target,
        easing: easing,
        time: time,
        change: onchange,
        complete: oncomplete,
        start: Date.now()
      };

      tweening.push(tween);
      return tween;
    }
    // Listen for animate update.
    application.ticker.add(function (delta) {
      var now = Date.now();
      var remove = [];
      for (var i = 0; i < tweening.length; i++) {
        var t = tweening[i];
        var phase = Math.min(1, (now - t.start) / t.time);

        t.object[t.property] = lerp(t.propertyBeginValue, t.target, t.easing(phase));
        if (t.change) t.change(t);
        if (phase === 1) {
          t.object[t.property] = t.target;
          if (t.complete) t.complete(t);
          remove.push(t);
        }
      }
      for (var i = 0; i < remove.length; i++) {
        tweening.splice(tweening.indexOf(remove[i]), 1);
      }
    });

    // Basic lerp funtion.
    function lerp(a1, a2, t) {
      return a1 * (1 - t) + a2 * t;
    }

    // Backout function from tweenjs.
    // https://github.com/CreateJS/TweenJS/blob/master/src/tweenjs/Ease.js
    function backout(amount) {
      return function (t) {
        return (--t * t * ((amount + 1) * t + amount) + 1);
      };
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
      title: 'Demo-Slots',
      desc: 'Demo-Slots',
      path: 'pages/slots/index',
    };
  },
});
