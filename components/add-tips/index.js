const STORAGE_KEY = 'PLUG-ADD-MYAPP-KEY';
Component({
  properties: {
    name: {
      type: String,
      value: '测试'
    },
    duration: {
      type: Number,
      value: 10
    },
    logo: {
      type: String,
      value: 'https://imgkr.cn-bj.ufileos.com/c958e4cd-6bab-43ed-93aa-697207cf33a5.png'
    },
    custom: {
      type: Boolean,
      value: false
    }
  },
  lifetimes: {
    attached: function() {
			if (wx.getStorageSync(STORAGE_KEY)) return;
      let rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
			let { screenWidth } = wx.getSystemInfoSync();
			this.setData({
				navbarHeight: rect.bottom,
				arrowR:screenWidth-rect.right+rect.width*3/4-5,
				bodyR: screenWidth - rect.right
			})
			this.setData({
				SHOW_TOP: true
			});
			setTimeout(() => {
				this.setData({
					SHOW_TOP: false
				})
			}, this.data.duration * 1000);
    },
  },
  data: {
    SHOW_TOP: false
  },
  methods: {
		hidden: function() {
      this.setData({
        SHOW_TOP: false
      },()=>{
				wx.setStorageSync(STORAGE_KEY, true)
			});
    }
  }
})