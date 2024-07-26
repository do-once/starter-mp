// package-sub2/keyboard-height.ts

const app = getApp<MyApp.IAppOption>()

const isAndroidOrIOS = () =>
  ['android', 'ios'].includes(app.globalData.deviceInfo?.platform ?? '')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    keyboardHeight: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},

  onFocus(e: any) {
    if (
      /** 真机 */
      isAndroidOrIOS() &&
      /** 未更新过键盘高度 */
      !app.globalData.keyboardHeight
    ) {
      app.globalData.emitter?.emit('UPDATE_KEYBOARD_HEIGHT', e.detail.height)

      this.setData({
        keyboardHeight: e.detail.height,
      })
    }
  },

  onClickInput() {
    if (isAndroidOrIOS() && app.globalData.keyboardHeight) {
      this.setData({
        keyboardHeight: app.globalData.keyboardHeight,
      })
    }
  },

  onBlur() {
    if (isAndroidOrIOS()) {
      this.setData({
        keyboardHeight: 0,
      })
    }
  },
})
