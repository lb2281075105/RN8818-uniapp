
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/home","pages/community/community","pages/publish/publish","pages/life/life","pages/mine/mine"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#444444","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/home/home","iconPath":"/static/images/tab/tab_icon_home_normal@2x.png","selectedIconPath":"/static/images/tab/tab_icon_home_selected@2x.png","text":"首页"},{"pagePath":"pages/community/community","iconPath":"static/images/tab/tab_icon_zt_normal@2x.png","selectedIconPath":"static/images/tab/tab_icon_zt_selected@2x.png","text":"社区"},{"pagePath":"pages/publish/publish","iconPath":"static/images/tab/tab_icon_pub_normal@2x.png","selectedIconPath":"static/images/tab/tab_icon_pub_selected@2x.png","text":"发布"},{"pagePath":"pages/life/life","iconPath":"static/images/tab/tab_icon_life_normal@2x.png","selectedIconPath":"static/images/tab/tab_icon_life_selected@2x.png","text":"生活"},{"pagePath":"pages/mine/mine","iconPath":"static/images/tab/tab_icon_me_normal@2x.png","selectedIconPath":"static/images/tab/tab_icon_me_selected@2x.png","text":"个人中心"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"appname":"生活资讯APP","compilerVersion":"2.7.9","entryPagePath":"pages/home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页"}},{"path":"/pages/community/community","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"社区"}},{"path":"/pages/publish/publish","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"发布"}},{"path":"/pages/life/life","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"生活"}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
