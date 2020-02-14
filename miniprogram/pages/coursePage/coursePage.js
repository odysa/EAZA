// miniprogram/pages/coursePage/coursePage.js"
import * as echarts from '../../ec-canvas/echarts.js';
var grade_list = [];
let chart = null
var numberToPercent = function (value) {
  value = value * 100;
  var str = value.toFixed(1);
  str += "%";
  return str
}
function initChart(canvas, width, height) {
    chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  chart.showLoading()
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
      data:[{
        value : 100,
        name : '等待中'
      }],
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
  chart.hideLoading();
  return chart;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    term_list: [],
    id : '',
    a_count : 0,
    ab_count :0,
    b_count : 0,
    bc_count : 0,
    c_count : 0,
    d_count : 0,
    tot_count : 0,
    ec: {
      onInit : initChart
    },
    full_name:'',
    abb: '',
    num : '',
    short_name: '',
  },
  count_course : function (course_list) {
    console.log(course_list)
    var tot,a,ab,b,bc,c,d,f;
    tot = a = b = c = d = bc = ab = f = 0;
    for (var i= 0 ;i< course_list.length;++i) {
      var item=course_list[i];
      a += item.a_count;
      b += item.b_count;
      bc += item.bc_count;
      ab += item.ab_count;
      c += item.c_count;
      d += item.d_count;
      f += item.f_count;
      ;
    }
    /** 
    this.setData({
      a_count: a,
      ab_count: ab,
      b_count: b,
      bc_count: bc,
      c_count: c,
      d_count: d,
      f_count: f,
      tot_count: tot,
    })
    **/
    tot = a + b + bc + ab + c + d + f    
    this.change_data(a,ab,b,bc,c,d,f,tot);
  },
  change_data: function (a, ab, b, bc, c, d, f, tot){
    console.log(a)
    var rest = tot - (a + ab + b + bc + c + d + f)
    var arr = new Array(a, ab, b, bc, c, d, f, tot);
    if (a == 0) a = NaN;
    if (ab == 0) ab = NaN;
    if (b == 0) b = NaN;
    if (bc == 0) bc = NaN;
    if (c == 0) c = NaN;
    if (d == 0) d = NaN;
    if (f == 0) f = NaN;
    if(rest == 0) rest = NaN;
    var option = {
      backgroundColor: "#ffffff",
      color: ["#e54d42", "#e03997", "#39b54a", "#8dc63f", "#0081ff", "#fbbd08"],
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
          value: a,
          name: `A\n`+numberToPercent(a/tot/1.0)
        }, {
          value: ab,
            name: `AB\n` + numberToPercent(ab / tot / 1.0)
        }, {
          value: b,
            name: `B\n` + numberToPercent(b / tot / 1.0)
        }, {
          value: bc,
            name: `BC\n` + numberToPercent(bc / tot / 1.0)
        }, {
          value: c,
            name: `C\n` + numberToPercent(c / tot / 1.0)
        },{
          value: rest,
            name: `others` + numberToPercent(rest / tot / 1.0)
        }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 2, 2, 0.3)'
          }
        }
      }]
    }
    chart.setOption(option,true)
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
          term_list: res.result.data,
          full_name: res.result.data[0].full_name,
          short_name: res.result.data[0].subject_name,
          num: res.result.data[0].number,
          abb: res.result.data[0].abbreviation,
        })
        this.count_course(res.result.data)
      })
      .catch(console.error);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.echartsComponnet = this.selectComponent('#mychart');
    this.setData({
      id : options.id
    });
    this.find_term();
    //this.count_course(this.data.term_list)
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