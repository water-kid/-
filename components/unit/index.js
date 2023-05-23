// components/unit/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    message:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImageTap(){
      console.log(this.properties.message.imageUrl)
      let imgurl = this.properties.message.imageUrl

      wx.previewImage({
        urls:[imgurl],
        current:imgurl
      })
    }
  }
})
