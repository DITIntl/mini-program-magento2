const app = getApp();
const selector = wx.createSelectorQuery();

Page({

    data: {
        imageUrl: app.config.evaluationImageUrl,
        searchKey: null,
        records: {}
    },

    onLoad: function() {
        const self = this;
        wx.request({
            header: {
                'Authorization': app.config.authToken
            },
            url: app.config.listEvaluationUrl,
            success: function(response) {
                self.setData({
                    records: response.data.items
                });
            }
        });
    },

    updateSearchKey: function(evt) {
        this.setData({
            searchKey: evt.detail.value
        });
    },

    updateList: function(evt) {
        const self = this;
        wx.request({
            header: {
                'Authorization': app.config.authToken
            },
            url: app.config.listEvaluationUrl,
            data: evt.detail.value,
            success: function(response) {
                self.setData({
                    records: response.data.items
                });
            }
        });
    },

    redirectCreate: function() {
        app.redirect('/pages/test/edit');
    },

    redirectEdit: function(evt) {
        app.redirect('/pages/test/edit?id=' + evt.currentTarget.dataset.id);
    }

});