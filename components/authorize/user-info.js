const app = getApp();

Component({

    data: {
        canUse: wx.canIUse('button.open-type.getUserInfo'),
        show: !app.userInfo
    },

    methods: {

        onGetUserInfo(evt) {
            if (evt.detail.userInfo) {
                app.userInfo = evt.detail.userInfo;
                this.data.show = false;
                this.setData(this.data);
            }
        }

    },

    attached: function() {

        this.data.show = !(app.userInfo && app.userInfo.nickName);
        this.setData(this.data);
        console.log(app.userInfo);
        console.log(this.data);

    }

});