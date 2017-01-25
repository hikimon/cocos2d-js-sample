var SampleLayer = cc.Layer.extend({
    isMouseDown:false,

    ctor:function() {
        this._super();

        var director = cc.director;
        var winSize = director.getWinSize();

        //sprite生成
        this.sprite = new cc.Sprite(g_navico, cc.rect(0, 0, 180, 180));
        var sprite  = this.sprite;
        sprite.setPosition(winSize.width / 2, winSize.height / 2);
        this.addChild(sprite);

        //animation設定
        var rotate = new cc.RotateBy(5, 360);
        var repeat = new cc.RepeatForever(rotate);
        sprite.runAction(repeat);

        //mnouse / toucheイベント設定
        if ('touches' in cc.sys.capabilities)
            cc.eventManager.addListener({
                event: cc.EventListener.TOUCH_ALL_AT_ONCE,
                onTouchesMoved: function (touches, event) {
                    var target = event.getCurrentTarget();
                    var delta = touches[0].getDelta();
                    return true;
                }
            }, this);
        else if ('mouse' in cc.sys.capabilities) {
            cc.eventManager.addListener({
                event: cc.EventListener.MOUSE,
                onMouseDown: function (event) {
                    if(event.getButton() == cc.EventMouse.BUTTON_LEFT) {
                        var target = event.getCurrentTarget();
                        var delta  = event.getDelta();
                        var pos    = event.getLocation();
                        target.sprite.x = pos.x;
                        target.sprite.y = pos.y;
                    }
                },
                onMouseUp: function (event) {
                    if(event.getButton() == cc.EventMouse.BUTTON_LEFT) {
                        var target = event.getCurrentTarget();
                        var delta  = event.getDelta();
                        var pos    = event.getLocation();
                        target.sprite.x = pos.x;
                        target.sprite.y = pos.y;
                    }
                },
                onMouseMove: function (event) {
                    if(event.getButton() == cc.EventMouse.BUTTON_LEFT) {
                        var target = event.getCurrentTarget();
                        var delta  = event.getDelta();
                        var pos    = event.getLocation();
                        target.sprite.x = pos.x;
                        target.sprite.y = pos.y;
                    }
                }
            }, this);
       }
    },
    onEnter:function(){
        this._super();
    }
});

