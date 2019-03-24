//app.js
App({
  onLaunch: function () {
    var that = this;
    that.curid = wx.getStorageSync('curid') || that.curid;//API：获取本地缓存，若不存在设置为全局属性
    that.setlocal('curid', that.curid);//调用全局方法
  },
  //2、自定义全局方法部分
  setlocal: function (id, val) {
    wx.setStorageSync(id, val);//API：设置本地缓存
  },
  //3、自定义全局属性部分
  curid: "CN101010100",
  version: "1.0"
})