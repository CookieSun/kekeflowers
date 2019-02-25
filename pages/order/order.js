// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
		'../../images/veer-327537871.jpg',
		'../../images/veer-311917883.jpg',
		'../../images/veer-148872680.jpg',
		'../../images/veer-305510493.jpg',
		'../../images/veer-307427597.jpg',
	],
    toView: 'red1',
    _click:0,
    left: [
		{ txt: '玫瑰', id: 'new' }, 
	    { txt: '月季', id: 'phone' }, 
		{ txt: '百合', id: 'mv' }, 
		{ txt: '雏菊', id: 'computer' },
		],
    right: [
        { txt: '玫瑰', 
		  id: 'new',
		  li: [
			  { src: '../../images/veer-327537871.jpg', name: '红玫瑰' }, 
			  { src: '../../images/veer-311917883.jpg', name: '粉玫瑰' }, 
			  { src: '../../images/veer-148872680.jpg', name: '蓝玫瑰' }, 
			  { src: '../../images/a.jpg', name: '小玫瑰' }, 
			  { src: '../../images/veer-305510493.jpg', name: '紫玫瑰' }, 
			  { src: '../../images/veer-144750450.jpg', name: '菊玫瑰' },
			  ],
	    }, 
        { txt: '月季', 
		  id: 'phone',
		  li: [
			  { src: '../../images/b.jpg', name: '红月季' }, 
		      { src: '../../images/d.jpg', name: '粉月季' }, 
			  { src: '../../images/e.jpg', name: '蓝月季' }, 
			  { src: '../../images/veer-305510493.jpg', name: '小月季' }, 
			  { src: '../../images/veer-144750450.jpg', name: '紫月季' }, 
			  { src: '../../images/veer-327537871.jpg', name: '仙女月季' },
		      ],
		}, 
        { txt: '百合', 
		  id: 'mv', 
		  li: [
			  { src: '../../images/veer-327537871.jpg', name: '红百合' }, 
			  { src: '../../images/veer-311917883.jpg', name: '粉百合' }, 
			  { src: '../../images/veer-148872680.jpg', name: '蓝百合' }, 
			  { src: '../../images/d.jpg', name: '小百合' }, 
			  { src: '../../images/a.jpg', name: '白百合' }, 
			  { src: '../../images/veer-305510493.jpg', name: '紫百合' },
			  ],
		}, 
        { txt: '雏菊', 
		  id: 'computer', 
		  li: [
			  { src: '../../images/veer-327537871.jpg', name: '小雏菊' }, 
			  { src: '../../images/veer-311917883.jpg', name: '粉雏菊' }, 
			  { src: '../../images/veer-148872680.jpg', name: '紫雏菊' }, 
			  { src: '../../images/veer-305510493.jpg', name: '蓝雏菊' }, 
			  { src: '../../images/veer-305510493.jpg', name: '白雏菊' }, 
			  { src: '../../images/veer-305510493.jpg', name: '红雏菊' },
			  ],
		},
		],
	 
  },
  
   scroll: function (e) {
    console.log(e)//右侧列表滑动-左侧列表名称样式跟着改变，然而我不会写，搁置中，谁会告诉我，谢谢！
  },
  tap: function (e) {  
    var j = parseInt(e.currentTarget.dataset.i);
    this.setData({
      toView: this.data.left[j].id,//控制视图滚动到为此id的<view>
      _click:j                     //控制左侧点击后样式
        })
  },


  onLoad(options) {
    this.setData({
      title: options.title
    })
  },

    

//   scroll: function (e) {
//     console.log(e)
//   },
//   tap: function (e) {  
//     var j = parseInt(e.currentTarget.dataset.i);
//     this.setData({
//       toView: this.data.left[j].id,//控制视图滚动到为此id的<view>
//       _click:j                     //控制左侧点击后样式
//         })  
//   },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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