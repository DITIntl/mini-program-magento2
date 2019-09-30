Page({

    data: {
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },

    onLoad() {

        wx.getSetting({
            success: function(response) {
                if (response.authSetting['scope.userInfo']) {
                    wx.reLaunch({
                        url: '/pages/index/index'
                    });
                }
            }
        });

    },

    onGetUserInfo(evt) {

        if (evt.detail.userInfo) {
            wx.reLaunch({
                url: '/pages/index/index'
            });
        }

    }

})