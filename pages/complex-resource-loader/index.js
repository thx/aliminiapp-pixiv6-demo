import * as PIXI from "@tbminiapp/pixi-miniprogram-engine-v6";
import { KTXComplexResourceLoader } from '@tbminiapp/pixi-miniprogram-engine-v6';

const URLs_1024_1024 = {
  astc: "https://g.alicdn.com/eva-assets/5e6ae93071c1bb38e11712fcc77d391f/0.0.1/tmp/9283514/image.astc.ktx",
  etc: "https://g.alicdn.com/eva-assets/a40edfcf927b517a70e9f775ce9e8498/0.0.1/tmp/0297670/image.etc.ktx",
  pvrtc: "https://g.alicdn.com/eva-assets/6ee6897c376c025ffb0d1392ccfb528a/0.0.1/tmp/23782bb/image.pvrtc.ktx",
  png: "https://gw.alicdn.com/imgextra/i2/O1CN01YGMeEX1jvsztwlFAI_!!6000000004611-2-tps-1024-1024.png"
};

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
    const ktxComplexResourcTextureKey = 'TestComplextResource';
    const ktxComplexResourceOptions = {
      // texture存储在cache中的key
      texutreKey: ktxComplexResourcTextureKey,
      // 是否自动加载 如果不配置，则默认自动加载
      autoLoad: true,
      // 纹理资源地址
      textures: {
        // 在探测配置的所有压缩纹理格式不被设备支持的时候，降级使用的普通纹理格式地址（png/jpg/webp等）
        downgrade: 'https://gw.alicdn.com/imgextra/i2/O1CN01YGMeEX1jvsztwlFAI_!!6000000004611-2-tps-1024-1024.png',
        // ktx封装的astc压缩纹理格式地址
        astc: 'https://g.alicdn.com/eva-assets/5e6ae93071c1bb38e11712fcc77d391f/0.0.1/tmp/9283514/image.astc.ktx',
        // ktx封装的etc压缩纹理格式地址
        etc:'https://g.alicdn.com/eva-assets/a40edfcf927b517a70e9f775ce9e8498/0.0.1/tmp/0297670/image.etc.ktx',
        // ktx封装的pvrtc压缩纹理格式地址
        pvrtc:'https://g.alicdn.com/eva-assets/6ee6897c376c025ffb0d1392ccfb528a/0.0.1/tmp/23782bb/image.pvrtc.ktx'
      }
    }
    const loader = new KTXComplexResourceLoader(application.renderer, ktxComplexResourceOptions);
    const { validateResourceType } = loader;
    const { extension, src } = validateResourceType;
    // 手动加载代码如下
    // if(!ktxComplexResourceOptions.autoLoad){
    //   loader.add(ktxComplexResourceOptions.texutreKey, src);
    //   loader.load();
    // }
    loader.onComplete.add((loader) => {
      try{
        console.log('validateResourceType',validateResourceType);
        const sprite = new PIXI.Sprite(PIXI.utils.TextureCache[ktxComplexResourcTextureKey]);
        application.stage.addChild(sprite);
        sprite.scale.set(750 / sprite.texture.width);
        const text = new PIXI.Text(`纹理类型：${ extension }`, { fontSize: 48, fill: [0xFF0000] });
        application.stage.addChild(text);
        text.y = 100;
        sprite.y = 150;
      }catch(error){
        console.error(error);
      }
    })
    loader.onError.add((error) => {
      console.log('error',error);
    })

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
      title: 'Demo-complex-resource-loader',
      desc: 'Demo-complex-resource-loader',
      path: 'pages/complex-resource-loader/index',
    };
  },
});