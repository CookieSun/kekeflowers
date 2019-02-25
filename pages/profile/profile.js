// pages/profile/profile.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
		avatarUrl:"../../images/touxiang.jpg",
		nickName:"小彩蛋呀"
	},
    motto: 'Hello World',
    // orderItems
    orderItems: [
      {
        typeId: 0,
        name: '待付款',
        url: 'bill',
        imageurl: '../../images/fukuan.png',
      },
      {
        typeId: 1,
        name: '待发货',
        url: 'bill',
        imageurl: '../../images/fahuo.png',
      },
      {
        typeId: 2,
        name: '待收货',
        url: 'bill',
        imageurl: '../../images/shouhuo.png'
      },
      {
        typeId: 3,
        name: '待评价',
        url: 'bill',
        imageurl: '../../images/comment.png'
      }
    ],
  },
  
  toOrder: function () {
    wx.navigateTo({
      url: '../order/order'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
//     app.getUserInfo(function (userInfo) {
//       //更新数据
//       that.setData({
//         userInfo: userInfo
//       })
//     })

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