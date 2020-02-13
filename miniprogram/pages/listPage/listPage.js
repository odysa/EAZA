// miniprogram/pages/listPage/listPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course_list : [],
    subject : 'No',
    actions: [{
      type: 'primary',
      text: '了解更多'
    }]
  },
  get_course : function(){
    wx.cloud.callFunction({
      name: 'order_course',
      data: {
        course_name : this.data.subject
      }
    })
    .then(res => {
      this.setData({
        course_list: res.result.data
      })
    })
    .catch(console.error);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.subject)
    this.setData({
      subject: options.subject
    })
    //console.log(this.data.subject)
    this.get_course()
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