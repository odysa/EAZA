// pages/coursePage/coursePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show : true,
    value: 80,//此处调用云数据（a率*100）
    gradientColor: {
      '0%': '#00d000',
      '100%': '#ee0000'
    }

  },
  
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Component({
      options: {
        styleIsolation: 'shared'
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      show : false
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})