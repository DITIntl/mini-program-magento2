const config = require('/config.js');
const utility = require('/lib/utility.js');

App({

    config: config,
    userInfo: null,

    onLaunch: function() {

        const self = this;

        wx.getSetting({
            success: function(response) {
                if (response.authSetting['scope.userInfo']) {
                    self.userInfo = response.authSetting['scope.userInfo'];
                }
            }
        });

    },

    translate: function(txt) {
        let translations = {
            'Back to List': '返回列表'
        };
        return translations[txt] || txt;
    },

    redirect: function(path, clear) {
        wx.showLoading();
        if (clear) {
            wx.reLaunch({
                url: path,
                complete: function() {
                    wx.hideLoading();
                }
            });
        } else {
            wx.redirectTo({
                url: path,
                complete: function() {
                    wx.hideLoading();
                }
            });
        }
    },

    authorize: function(scope, success, fail) {

        wx.getSetting({
            success: function(response) {
                if (!response.authSetting[scope]) {
                    if (scope === 'scope.userInfo') {
                        utility.execute(fail, response);
                        return;
                    } else {
                        wx.authorize({
                            scope: scope,
                            success: success,
                            fail: function(response) {
                                utility.execute(fail, response);
                            }
                        });
                    }
                } else {
                    success();
                }
            },
            fail: function() {
                utility.execute(fail, response);
            }
        });

    },

    /**
     * System connects to WeChat server for login session
     *     when exceuting wx.checkSession and wx.login methods.
     */
    checkLogin: function() {

        wx.checkSession({
            fail: function() {
                wx.login({
                    success: function(response) {
                        wx.request({
                            url: config.loginUrl,
                            data: {
                                code: response.code
                            },
                            success: function(response) {
                                response.data.openid;
                                console.log(response);
                            },
                            fail: function() {

                            }
                        });
                    },
                    fail: function() {

                    }
                });
            }
        });

    }

});