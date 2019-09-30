const app = getApp();
const recorderManager = wx.getRecorderManager();

Component({

    behaviors: ['wx://form-field'],

    data: {
        duration: 0
    },

    properties: {
        name: {
            type: String
        },
        placeholder: {
            type: String
        },
        value: {
            type: String
        }
    },

    methods: {

        startGetVoice: function() {

            const self = this;

            recorderManager.onStop(function(recorderResult) {
                wx.uploadFile({
                    url: app.config.voiceUrl,
                    header: {
                        'Authorization': app.config.authToken
                    },
                    filePath: recorderResult.tempFilePath,
                    name: 'voice',
                    success: function (response) {
                        console.log(response);
                        if (response.data) {
                            let result = JSON.parse(response.data);
                            if (result.result) {
                                self.setData({
                                    value: self.data.value + ' ' + result.result.join(' ')
                                });
                            }
                        }
                    }
                });
            });

            /**
             * Use Baidu ASR REST API to do translate
             * @see https://developers.weixin.qq.com/miniprogram/dev/api/RecorderManager.start.html
             * @see http://ai.baidu.com/docs#/ASR-Tool-convert/top
             */
            recorderManager.start({
                duration: 30000,
                sampleRate: 16000,
                numberOfChannels: 1,
                format: 'mp3'
            });

        },

        endGetVoice: function() {
            recorderManager.stop();
        },

        updateData: function(evt) {
            this.setData({
                value: evt.detail.value
            });
            this.triggerEvent('input', {
                value: evt.detail.value
            });
        }

    }

});