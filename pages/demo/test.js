const app = getApp();

Page({

    data: {
        rotate: {
            x: 0,
            y: 0,
            z: 0
        }
    },

    onLoad: function() {

        const self = this;

        wx.onDeviceMotionChange(function(response) {

            response.beta

            self.setData({
                deviceMotion: response,
                rotate: {
                    x: -response.beta,
                    y: 0,
                    z: 0
                }
            });
        });
        wx.startDeviceMotionListening();

    }

});