import pages from './pages'
Page({
  data: {
    pages
  },
  onReady() {
  },
  jumpTo(event) {
    
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
      title: 'Pixi Miniapp Demo',
      desc: 'Pixi Miniapp Demo',
      path: 'pages/index/index',
    };
  },
});