const app = getApp();

Page({

    data: {
        location: {}
    },

    onLoad: function (params) {

        const scene = decodeURIComponent(params.scene);
        const self = this;

        wx.getBatteryInfo({
            success: function (response) {
                self.setData({
                    battery: response
                });
            }
        });

        wx.getLocation({
            success(response) {
                self.setData({
                    location: response
                });
            }
        });

        wx.getHCEState({
            success: function (response) {
                self.setData({
                    hce: response
                });
            }
        });

        wx.onCompassChange(function (response) {
            self.setData({
                compass: response
            });
        });
        wx.startCompass();

        wx.onDeviceMotionChange(function (response) {
            self.setData({
                deviceMotion: response
            });
        });
        wx.startDeviceMotionListening();

        wx.onAccelerometerChange(function (response) {
            self.setData({
                accelerometer: response
            });
        });
        wx.startAccelerometer();

        wx.onGyroscopeChange(function (response) {
            self.setData({
                gyroscope: response
            });
        });
        wx.startGyroscope();

        wx.onHCEMessage(function (response) {
            self.setData({
                nfc: response
            });
        });
        wx.startHCE({
            aid_list: ['F222222222'],
            success(res) {
                console.log(res.errMsg)
            }
        });

    },

    getCode: function (response) {
        wx.showModal({
            title: 'OK',
            content: JSON.stringify(response)
        });
    }

});