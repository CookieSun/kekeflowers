// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      code:"0001",
      name:"红玫瑰",
      url:"../../images/veer-327537871.jpg",
      style:"进口",
      price:"4999",
      select:"circle",
      num:"1",
    },
    {
      code: "0002",
      name: "鸳鸯",
      url: "../../images/veer-311917883.jpg",
      style: "粉红",
      price: "149",
      select: "circle",
      num: "1"
    },{
      code: "0003",
      name: "爱之心",
      url: "../../images/veer-148872680.jpg",
      style: "淡蓝",
      price: "19",
      select: "circle",
      num: "1"
    }],
	
  },
  
  //改变选框状态
  change:function(e){
    var that=this
    //得到下标
    var index = e.currentTarget.dataset.index
    //得到选中状态
    var select = e.currentTarget.dataset.select
    
    if(select == "circle"){
       var stype="success"
    }else{
       var stype="circle"
    }
 //把新的值给新的数组
   var newList= that.data.list
   newList[index].select=stype
    //把新的数组传给前台
    that.setData({
      list:newList
    })
    },
  
  //全选
  allSelect:function(e){
  var that=this;
  //先判断现在选中没
  var allSelect = e.currentTarget.dataset.select;
  var newList = that.data.list;
  if(allSelect == "circle"){
  //先把数组遍历一遍，然后改掉select值
      for (var i = 0; i < newList.length; i++) {
  	  newList[i].select = "success";
  	}
  	var select="success";
  }else{
     //取消全选
  	for (var i = 0; i < newList.length; i++) {
  	  newList[i].select = "circle";
  	}
  	var select = "circle";
    }
    that.setData({
  	list:newList,
  	allSelect:select
    })
  },
  //加法
  addtion:function(e){
    var that=this
    //得到下标
    var index = e.currentTarget.dataset.index
    //得到点击的值
    var num = e.currentTarget.dataset.num
    //默认99件最多
    if(num<100){
      num++
    }
    //把新的值给新的数组
    var newList = that.data.list
    newList[index].num =num
   
    //把新的数组传给前台
    that.setData({
      list: newList
    })
  },
  //减法
	subtraction:function(e){
	  var that = this
	  //得到下标
	  var index = e.currentTarget.dataset.index
	  //得到点击的值
	  var num = e.currentTarget.dataset.num
	  //把新的值给新的数组
	  var newList = that.data.list
	  //当1件时，点击移除
	  if (num == 1) {
		  newList.splice(index,1)
	  }else{
		num--
		newList[index].num = num
	  }
	  
	  //把新的数组传给前台
	  that.setData({
		list: newList
	  })
	},
	//计算数量
	countNum:function(){
	  var that=this
	  //遍历数组，把既选中的num加起来
	  var newList = that.data.list
	  var allNum=0
	  for (var i = 0; i < newList.length; i++) {
			if(newList[i].select=="success"){
			  allNum += parseInt(newList[i].num) 
			}
	  }
	  parseInt
	  console.log(allNum)
	  that.setData({
		num:allNum
	  })
	},
	//计算金额方法
	count:function(){
	  var that=this 
	  //思路和上面一致
	  //选中的订单，数量*价格加起来
	  var newList = that.data.list
	  var newCount=0
	  for(var i=0;i<newList.length;i++){
		if(newList[i].select == "success"){
		  newCount += newList[i].num * newList[i].price
		}
	  }
	  that.setData({
		count:newCount
	  })
	  return count;
	},
  
  
  
  
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