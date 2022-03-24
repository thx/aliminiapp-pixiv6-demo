import * as PIXI from "@tbminiapp/pixi-miniprogram-engine-v6";
import { APNGLoader } from '@tbminiapp/pixi-miniprogram-engine-v6';

// 为Loader注册 APNG加载器
PIXI.Loader.registerPlugin(APNGLoader);

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
    const loader = new PIXI.Loader();
    // apng文件的扩展名必须为.apng loader会根据扩展名去判断使用哪种解析器进行文件解析
    // apng解析器会根据文件的arraybuffer头部签名来判断是否为apng文件，如果非apng文件 使用了.apng扩展名，则resource为null
    const textureKey = 'flowerball';
    loader.add(textureKey, 'https://img.alicdn.com/imgextra/i2/O1CN01r3wWKG1wfwDE15AKb_!!6000000006336-54-tps-270-270.apng')
    loader.load((_loader, resource) => {
      try {
        const explosionTextures = [];
        // frameDelay: 帧间隔时间 ms
        // frameTextureKeys: apng分帧后 每一帧在TextureCache中的 cacheId,
        // frameCount: apng 总帧数,
        const { frameDelay, frameTextureKeys, frameCount } = resource[textureKey];
        frameTextureKeys.forEach((item, index) => {
          explosionTextures.push(PIXI.Texture.from(item));
        })
        const animatedSprite = new PIXI.AnimatedSprite(explosionTextures);
        animatedSprite.animationSpeed = 0.5;
        animatedSprite.play();
        animatedSprite.anchor.set(0.5);
        animatedSprite.position.set(application.screen.width / 2, application.screen.height / 2)
        application.stage.addChild(animatedSprite);
      } catch (e) {
        console.error(e);
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
      title: 'Demo-Container',
      desc: 'Demo-Container',
      path: 'pages/container/index',
    };
  },
});
