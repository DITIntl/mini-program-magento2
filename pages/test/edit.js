const app = getApp();

Page({

    data: {
        currentSection: 0,
        currentTool: 0,
        currentAction: 0,
        showInfo: false,
        imageUrl: app.config.evaluationImageUrl,
        record: {},
        fields: [{
            name: 'name',
            title: '姓名',
            type: 'text'
        }, {
            name: 'height',
            title: '身高',
            type: 'number'
        }, {
            name: 'gender',
            title: '性别',
            type: 'selector',
            options: ['男', '女']
        }, {
            name: 'weight',
            title: '体重',
            type: 'number'
        }, {
            name: 'nickname',
            title: '昵称',
            type: 'text'
        }, {
            name: 'telephone',
            title: '电话',
            type: 'number'
        }, {
            name: 'mark',
            title: '分值',
            type: 'number'
        }, {
            name: 'evaluator',
            title: '测评师',
            type: 'text'
        }, {
            name: 'created_at',
            title: '测试时间',
            type: 'date'
        }, {
            name: 'birthday',
            title: '出生日期',
            type: 'date'
        }],
        sections: [{
            name: '视动感观',
            tools: [{
                name: '球',
                scores: [5, 4, 3, 2, 1],
                actions: [{
                    name: '对抛球',
                    steps: [{
                        name: '有提示'
                    }, {
                        name: '无提示'
                    }, {
                        name: '慢速'
                    }, {
                        name: '匀速'
                    }, {
                        name: '快速'
                    }]
                }, {
                    name: '拍球',
                    steps: [{
                        name: '双手同拍'
                    }, {
                        name: '右手拍'
                    }, {
                        name: '左手拍'
                    }, {
                        name: '左右手交替'
                    }, {
                        name: '绕绳拍'
                    }]
                }]
            }]
        }, {
            name: '前庭本体处理系统',
            tools: [{
                name: '滑板',
                scores: [10, 8, 6, 4, 2],
                actions: [{
                    name: '坐拖拉',
                    steps: [{
                        name: '慢速'
                    }, {
                        name: '匀速'
                    }, {
                        name: '快速'
                    }, {
                        name: '匀速取物'
                    }, {
                        name: '匀速听指令取物'
                    }]
                }, {
                    name: '俯卧拖拉',
                    steps: [{
                        name: '头抬高'
                    }, {
                        name: '双臂'
                    }, {
                        name: '腿绷直'
                    }, {
                        name: '身体动作舒展'
                    }, {
                        name: '100% 配合'
                    }]
                }, {
                    name: '青蛙蹬',
                    steps: [{
                        name: '可蹬出'
                    }, {
                        name: '头抬高'
                    }, {
                        name: '双臂'
                    }, {
                        name: '腿部蹬出瞬间绷直'
                    }, {
                        name: '可蹬出 1-2 米'
                    }]
                }]
            }, {
                name: '手摇旋转盘',
                scores: [5, 4, 3, 2, 1],
                actions: [{
                    name: '坐',
                    steps: [{
                        name: '老师辅助旋转'
                    }, {
                        name: '独立自转'
                    }, {
                        name: '匀速转动'
                    }, {
                        name: '加速转动'
                    }, {
                        name: '听指令转动取物'
                    }]
                }]
            }, {
                name: '跳床',
                scores: [10, 8, 6, 4, 2],
                actions: [{
                    name: null,
                    steps: [{
                        name: '地面原地跳'
                    }, {
                        name: '地面大体能环内跳'
                    }, {
                        name: '扶跳跳床'
                    }, {
                        name: '自主跳定点跳'
                    }, {
                        name: '跳跃抛球'
                    }, {
                        name: '对抛球'
                    }, {
                        name: '双球对抛'
                    }, {
                        name: '轮抛'
                    }]
                }]
            }, {
                name: '大龙球',
                scores: [10, 8, 6, 4, 2],
                actions: [{
                    name: null,
                    steps: [{
                        name: '坐颤'
                    }, {
                        name: '俯卧颤'
                    }, {
                        name: '俯卧拖拉'
                    }, {
                        name: '拖拉取物'
                    }, {
                        name: '独立平衡'
                    }]
                }]
            }]
        }, {
            name: '触觉系统',
            tools: [{
                name: '触觉球',
                scores: [10, 8, 6, 4, 2],
                actions: [{
                    name: null,
                    steps: [{
                        name: '根据学员情况给予安全感'
                    }, {
                        name: '沟通交流感受'
                    }]
                }]
            }]
        }, {
            name: '动作协调',
            tools: [{
                name: '平衡木',
                scores: [10, 8, 6, 4, 2],
                actions: [{
                    name: null,
                    steps: [{
                        name: '1-2 段扶走'
                    }, {
                        name: '独立走'
                    }, {
                        name: '慢走'
                    }, {
                        name: '4 段独立走'
                    }, {
                        name: '倒走'
                    }]
                }]
            }, {
                name: '体能环',
                scores: [10, 8, 6, 4, 2],
                actions: [{
                    name: null,
                    steps: [{
                        name: '双脚跳'
                    }, {
                        name: '右脚跳'
                    }, {
                        name: '左脚跳'
                    }, {
                        name: '单双脚交换跳'
                    }, {
                        name: '单双脚听指令跳（6 岁以下）'
                    }]
                }]
            }, {
                name: '踩踏车',
                scores: [10, 8, 6, 4, 2],
                actions: [{
                    name: null,
                    steps: [{
                        name: '辅助'
                    }, {
                        name: '独立前进'
                    }, {
                        name: '限时前进'
                    }, {
                        name: '可后退'
                    }]
                }]
            }, {
                name: '仰卧起坐',
                scores: [10, 8, 6, 4, 2],
                actions: [{
                    name: null,
                    steps: [{
                        name: '老师辅助完成'
                    }, {
                        name: '独立完成'
                    }, {
                        name: '动作标准'
                    }, {
                        name: '连续 10-15 个'
                    }, {
                        name: '连续 15 个以上（匀速完成，愿意坚持）'
                    }]
                }]
            }, {
                name: '跳绳',
                scores: [10, 8, 6, 4, 2],
                actions: [{
                    name: null,
                    steps: [{
                        name: '可将绳子摇起'
                    }, {
                        name: '可跳过'
                    }, {
                        name: '可连续跳跃'
                    }, {
                        name: '起跳距离地面 1 cm（6 岁以上）'
                    }]
                }]
            }]
        }]
    },

    onLoad: function(params) {
        const self = this;
        if (params.id) {
            wx.request({
                url: app.config.getEvaluationUrl,
                header: {
                    'Authorization': app.config.authToken
                },
                data: {
                    id: params.id
                },
                success: function(response) {
                    self.setData({
                        record: response.data
                    });
                }
            });
        }
    },

    backToList: function() {
        app.redirect('/pages/test/index');
    },

    toggleInfo: function() {
        this.setData({
            showInfo: !this.data.showInfo
        });
    },

    saveRecord: function( evt ) {
        const self = this;
        wx.showLoading();
        wx.request({
            url: app.config.saveEvaluationUrl + '?id=' + self.data.record.id,
            method: 'POST',
            header: {
                'content-type': 'application/x-www-form-urlencoded',
                'Authorization': app.config.authToken
            },
            data: evt.detail.value,
            success: function(response) {
                if (response.data.id) {
                    self.setData({
                        'data.id': response.data.id
                    });
                }
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },

    changeSection: function(evt) {
        if (this.data.currentSection !== evt.currentTarget.dataset.idx) {
            this.setData({
                currentSection: evt.currentTarget.dataset.idx,
                currentTool: 0,
                currentAction: 0
            });
        }
    },

    changeTool: function(evt) {
        if (this.data.currentTool !== evt.currentTarget.dataset.idx) {
            this.setData({
                currentTool: evt.currentTarget.dataset.idx,
                currentAction: 0
            });
        }
    },

    changeAction: function(evt) {
        if (this.data.currentAction !== evt.currentTarget.dataset.idx) {
            this.setData({
                currentAction: evt.currentTarget.dataset.idx
            });
        }
    }

});