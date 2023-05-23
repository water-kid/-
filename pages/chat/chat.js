// pages/chat/chat.js
import {Images} from "../../model/images";
import {Unit} from "../../model/unit";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:"",
    images:null,
    messages:[],
  },
  handleSend(){
    console.log("handle send ..")
    if (!this.data.inputValue){
      wx.showToast({
        title:"发送内容不能为空",
        icon:"none",
        duration:1000
      })
      return
    }
    var unit = new Unit(new Date().toLocaleString(),this.data.inputValue,this.data.images.randomImage());
    // this.data.messages.push(unit)
    this.data.messages.push(unit)

    this.setData({
      messages:this.data.messages,
      inputValue:""
    })

  },
  handleInput(e){
    console.log(e.detail.value)

    this.setData({
       inputValue:e.detail.value
    })

    console.log(this.data.inputValue)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    var userInfo = wx.getStorageSync("userInfo");
    console.log(userInfo)
    var images = new Images();
    this.setData({
      images
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
