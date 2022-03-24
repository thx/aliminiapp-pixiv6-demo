import * as PIXI from "@tbminiapp/pixi-miniprogram-engine-v6";
import { CompressedTextureLoader, KTXLoader } from '@tbminiapp/pixi-miniprogram-engine-v6';

const URLs_1024_1024 = {
   astc: "https://g.alicdn.com/eva-assets/5e6ae93071c1bb38e11712fcc77d391f/0.0.1/tmp/9283514/image.astc.ktx",
   etc: "https://g.alicdn.com/eva-assets/a40edfcf927b517a70e9f775ce9e8498/0.0.1/tmp/0297670/image.etc.ktx",
   pvrtc: "https://g.alicdn.com/eva-assets/6ee6897c376c025ffb0d1392ccfb528a/0.0.1/tmp/23782bb/image.pvrtc.ktx",
   png: "https://gw.alicdn.com/imgextra/i2/O1CN01YGMeEX1jvsztwlFAI_!!6000000004611-2-tps-1024-1024.png"
};


const URL_ASTC = [
  "https://g.alicdn.com/eva-assets/04be0753bdd801e7282233cedb461e72/0.0.1/tmp/9283514/image.astc.ktx",
  "https://g.alicdn.com/eva-assets/4404d6ba129e41949f5631315c2892b0/0.0.1/tmp/9283514/image.astc.ktx",
  "https://g.alicdn.com/eva-assets/4de1b02ba8436e1427e5fee5ddbadc81/0.0.1/tmp/9283514/image.astc.ktx",
  "https://g.alicdn.com/eva-assets/74d2e0c8e166c0a152c232103e58de90/0.0.1/tmp/9283514/image.astc.ktx",
  "https://g.alicdn.com/eva-assets/64bf142f1064349c5a77dbee0541fdfe/0.0.1/tmp/9283514/image.astc.ktx",
  "https://g.alicdn.com/eva-assets/b3d0069873599693ca9986bff8600a7b/0.0.1/tmp/9283514/image.astc.ktx",
  "https://g.alicdn.com/eva-assets/bfed4b91849d577788fb68cf1543a3d1/0.0.1/tmp/9283514/image.astc.ktx",
  "https://g.alicdn.com/eva-assets/8d83885caa708dbcbb2797d917495936/0.0.1/tmp/9283514/image.astc.ktx",
  "https://g.alicdn.com/eva-assets/61bf043b4b49f28b544b7f1e82c2a074/0.0.1/tmp/9283514/image.astc.ktx",
  "https://g.alicdn.com/eva-assets/5e6ae93071c1bb38e11712fcc77d391f/0.0.1/tmp/9283514/image.astc.ktx"
]

const URL_ETC = [
  "https://g.alicdn.com/eva-assets/1e486e021712ad92b237adee88de6d62/0.0.1/tmp/0297670/image.etc.ktx",
  "https://g.alicdn.com/eva-assets/3d7320fb731e86476f030f99bdb04a74/0.0.1/tmp/0297670/image.etc.ktx",
  "https://g.alicdn.com/eva-assets/4c4e7a9ef803bb2d8104cb973f3b8c5f/0.0.1/tmp/0297670/image.etc.ktx",
  "https://g.alicdn.com/eva-assets/b80de739b6cb1f91c334fe14d2a6a272/0.0.1/tmp/0297670/image.etc.ktx",
  "https://g.alicdn.com/eva-assets/2102ad9ed42d755f9f20b11d7906e85b/0.0.1/tmp/0297670/image.etc.ktx",
  "https://g.alicdn.com/eva-assets/f3491903cba402e3df8c5a9f44892f12/0.0.1/tmp/0297670/image.etc.ktx",
  "https://g.alicdn.com/eva-assets/9e6f606f3f3be3b0fc54c42a849d6344/0.0.1/tmp/0297670/image.etc.ktx",
  "https://g.alicdn.com/eva-assets/1f20a9516c7e87ea7e66337be3022e28/0.0.1/tmp/0297670/image.etc.ktx",
  "https://g.alicdn.com/eva-assets/8752e64e086baec03233f1f8d0f15b87/0.0.1/tmp/0297670/image.etc.ktx",
  "https://g.alicdn.com/eva-assets/a40edfcf927b517a70e9f775ce9e8498/0.0.1/tmp/0297670/image.etc.ktx"
]

const URL_PVRTC = [
  "https://g.alicdn.com/eva-assets/9c26fa89d169c8ab6ba30b9918f64d65/0.0.1/tmp/23782bb/image.pvrtc.ktx",
  "https://g.alicdn.com/eva-assets/62d21fd1d6b2c9c926103b0687a9071c/0.0.1/tmp/23782bb/image.pvrtc.ktx",
  "https://g.alicdn.com/eva-assets/e2f2e6d52e40a89d72fe55eddb4c5ece/0.0.1/tmp/23782bb/image.pvrtc.ktx",
  "https://g.alicdn.com/eva-assets/0376458a6b0ac9f17bf4b37ad556738f/0.0.1/tmp/23782bb/image.pvrtc.ktx",
  "https://g.alicdn.com/eva-assets/d40edc65cf28cfe7db3034142d7e8824/0.0.1/tmp/23782bb/image.pvrtc.ktx",
  "https://g.alicdn.com/eva-assets/9bd960fb8a5ca25a68029773733597a1/0.0.1/tmp/23782bb/image.pvrtc.ktx",
  "https://g.alicdn.com/eva-assets/7d3b742306704ff42d00a8193faedfd6/0.0.1/tmp/23782bb/image.pvrtc.ktx",
  "https://g.alicdn.com/eva-assets/cabd956ee24f900308d4398440e0e119/0.0.1/tmp/23782bb/image.pvrtc.ktx",
  "https://g.alicdn.com/eva-assets/8ff1c1102392d23bea64a2cc932ac0a7/0.0.1/tmp/23782bb/image.pvrtc.ktx",
  "https://g.alicdn.com/eva-assets/6ee6897c376c025ffb0d1392ccfb528a/0.0.1/tmp/23782bb/image.pvrtc.ktx"
]

const URL_Bitmap = [
  "https://gw.alicdn.com/imgextra/i4/O1CN01MpaOz51beT0cdr34g_!!6000000003490-0-tps-1024-1024.jpg",
  "https://gw.alicdn.com/imgextra/i1/O1CN01Wy3jjs1pmcgJtumTy_!!6000000005403-0-tps-1024-1024.jpg",
  "https://gw.alicdn.com/imgextra/i2/O1CN012L6kZf1sMSuOyhCQ1_!!6000000005752-0-tps-1024-1024.jpg",
  "https://gw.alicdn.com/imgextra/i3/O1CN01bD0FcU1KANWFzY6WA_!!6000000001123-0-tps-1024-1024.jpg",
  "https://gw.alicdn.com/imgextra/i1/O1CN01xNwquj1r6bZwCus8p_!!6000000005582-0-tps-1024-1024.jpg",
  "https://gw.alicdn.com/imgextra/i1/O1CN01t6SHsl1ILFh0W54Nx_!!6000000000876-0-tps-1024-1024.jpg",
  "https://gw.alicdn.com/imgextra/i1/O1CN01GRegrq1uptaWhzjAW_!!6000000006087-0-tps-1024-1024.jpg",
  "https://gw.alicdn.com/imgextra/i2/O1CN01s1asE21OLbh7q6tlA_!!6000000001689-0-tps-1024-1024.jpg",
  "https://gw.alicdn.com/imgextra/i2/O1CN01JssRo31JIKmhNlmBB_!!6000000001005-0-tps-1024-1024.jpg",
  "https://gw.alicdn.com/imgextra/i2/O1CN01YGMeEX1jvsztwlFAI_!!6000000004611-2-tps-1024-1024.png"
]


PIXI.Loader.registerPlugin(CompressedTextureLoader);
PIXI.Loader.registerPlugin(KTXLoader);
Page({
  // 供pixi渲染的canvas
  canvas: null,
  context: null,
  // pixi Application
  pixiApplication: null,
  pixiOptions: null,
  loader: null,
  measurement: {
    loadTime: 0,
  },
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
  load_png() {
    this.loadTexture(this.loader, this.pixiApplication, URLs_1024_1024['png'], 'png');
  },
  load_etc() {
    this.loadTexture(this.loader, this.pixiApplication, URLs_1024_1024['etc'], 'etc');
  },
  load_astc() {
    this.loadTexture(this.loader, this.pixiApplication, URLs_1024_1024['astc'], 'astc');
  },
  load_pvrtc() {
    this.loadTexture(this.loader, this.pixiApplication, URLs_1024_1024['pvrtc'], 'pvrtc');
  },
  load_png_2() {
    this.loadMultipeTexture(this.loader, this.pixiApplication, URL_Bitmap, 'png')
  },
  load_etc_2() {
    this.loadMultipeTexture(this.loader, this.pixiApplication, URL_ETC, 'etc')
  },
  load_astc_2() {
    this.loadMultipeTexture(this.loader, this.pixiApplication, URL_ASTC, 'astc')
  },
  load_pvrtc_2() {
    this.loadMultipeTexture(this.loader, this.pixiApplication, URL_PVRTC, 'pvrtc')
  },
  onPixiCanvasDidUnmount(e) {
    this.canvas = null;
    this.context = null;
    this.pixiApplication = null;
  },

  loadTexture(loader,application, url, format) {

    var start = new Date().getTime();

    while(application.stage.children.length > 0){   var child = application.stage.getChildAt(0);  application.stage.removeChild(child);}

    var onload = (texture)=>{
      var end = new Date().getTime();
      this.measurement.loadTime = end-start;
      my.alert({content:`${format}资源加载耗时:${this.measurement.loadTime}ms`})
      const container = new PIXI.Container();
      const sprite = new PIXI.Sprite(texture);
      sprite.scale.set(0.6);
      container.addChild(sprite);
      application.stage.addChild(container);
      container.x = 0;
      container.y = 0;

      const text = new PIXI.Text(format, new PIXI.TextStyle({ fill: 0xffffff, fontSize: 70}));
      container.addChild(text);
      text.anchor.set(0.5, 1);
      text.position.set(sprite.width / 2, sprite.height);
    }

    if(PIXI.utils.TextureCache[url]) {
      my.alert({content:'cached'})
      onload(PIXI.utils.TextureCache[url]);
      return;
    }

    loader.add(url, url);
    loader.load(() => {
      onload(PIXI.utils.TextureCache[url]);
    });
  },

 loadMultipeTexture(loader,application, urls, format) {
    while(application.stage.children.length > 0){   var child = application.stage.getChildAt(0);  application.stage.removeChild(child);}

    var onload = (texture, container, offset)=>{
      // console.log(`texture: ${texture}, offset: ${offset.x}, ${offset.y}`)
      const sprite = new PIXI.Sprite(texture);
      sprite.scale.set(0.5);
      container.addChild(sprite);
      application.stage.addChild(container);
      sprite.x = offset.x;
      sprite.y = offset.y;
      
      const text = new PIXI.Text(format, new PIXI.TextStyle({ fill: 0xffffff, fontSize: 270}));
      container.addChild(text);
      text.anchor.set(0.5, 1);
      text.position.set(sprite.width / 2, sprite.height);
    }

    urls.forEach((item)=> {
      // console.log('load url: ' + item);
      loader.add(item, item);
    });

    const container = new PIXI.Container();
    container.x = 0;
    container.y = 0;



    loader.load(() => {
      urls.forEach((item, index)=> {
        // console.log(`before load: texture: ${item}, ${PIXI.utils.TextureCache[item]}`)
        onload(PIXI.utils.TextureCache[item], container, {
          x: Math.round(Math.random()*100) + index,
          y: (index+1)*50
        });
      })

    });


  },

  onAppInit(e) {
    const { canvas, context, options, application } = e
    console.log('onAppInit', e);
    this.canvas = canvas;
    this.context = context;
    this.pixiApplication = application;
    this.pixiOptions = options;
    const loader = new PIXI.Loader();
    this.loader = loader;
    console.log('loader', loader);
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
      title: 'Demo-compressed-texture',
      desc: 'Demo-compressed-texture',
      path: 'pages/compressed-texture/index',
    };
  },
});