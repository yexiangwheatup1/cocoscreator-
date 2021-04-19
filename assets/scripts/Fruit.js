cc.Class({
    extends: cc.Component,

    properties: {
        id: 0,
    },
    init(data) {
        this.id = data.id
        const sp = this.node.getComponent(cc.Sprite)
        sp.spriteFrame = data.iconSF
        // todo 控制一下每种水果的尺寸
    },
    start() {
//特-价9.9元--一套-cocoscreator代-码-联-系-Q-2483367084 
//所有游戏列表 链接：https://pan.baidu.com/s/1lJBgutpFHZJGNaarRQF-Cg 
//提取码：1111
    },
    onBeginContact(contact, self, other) {
        // 貌似检测有点消耗性能
        if (self.node && other.node) {
            const s = self.node.getComponent('Fruit')
            const o = other.node.getComponent('Fruit')
            if (s && o && s.id === o.id) {
                self.node.emit('sameContact', {self, other});
            }
        }
    },
});
