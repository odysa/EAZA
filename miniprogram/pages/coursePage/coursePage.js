// miniprogram/pages/coursePage/coursePage.js"
import * as echarts from '../../ec-canvas/echarts.js';
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
    series: [{
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: [0, '60%'],
      tooltip: {
      },
      data: [{
        value: 55,
        name: 'A'
      }, {
        value: 20,
        name: 'AB'
      }, {
        value: 10,
        name: 'B'
      }, {
        value: 20,
        name: 'BC'
      }, {
        value: 38,
        name: 'C'
      },
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 2, 2, 0.3)'
        }
      }
    }]
  };
  chart.setOption(option);
  return chart;
}
var count_course = function(course_list){
  var A,B,C,D,BC,AB = 0
  for(var item in course_list){
    A += item.a_count;
    B += item.b_count;
    BC += item.bc_count;
    AB += item.ab_count;
    C += item.c_count;
    D += item.d_count;

  }
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    term_list: [],
    id : '',
    a_count : 0,
    ab_count : 0,
    b_count : 0,
    bc_count : 0,
    c_count : 0,
    d_count : 0,
    tot_count : 0,
    
    ec: {
      onInit: initChart
    }
  },
  find_term: function () {
    wx.cloud.callFunction({
      name: 'find_course_by_id',
      data: {
        id: this.data.id
      }
    })
      .then(res => {
        this.setData({
          term_list: res.result.data
        })

      })
      .catch(console.error);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id : options.id
    });
    this.find_term();
  
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