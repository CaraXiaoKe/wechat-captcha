## 页面结构文件wxm中引入canvas节点
    <canvas bindtouchend="onTap" style="width:{{cvs.width}}px;height:{{cvs.height}}px;" canvas-id="canvas"></canvas>
## 页面逻辑文件js中引入mcaptcha
    假设mcaptcha.js文件放在utils下边
    let Mcaptcha = require('../../utils/mcaptcha.js');
    ............
    data:{
        cvs:{
            width:120,
            height:35
        }
    },
    onReady: function () {
        this.mcaptcha = new Mcaptcha({
            el: 'canvas',
            width: this.data.cvs.width,
            height: this.data.cvs.height,
            code: "afced"
        );
    },
    //刷新图形验证码
    onTap(){
        this.mcaptcha.refresh("ftgcv");
    },
    ..........
## 参考文章
+  [canvas实现图形验证码小插件](https://www.jianshu.com/p/064a80a3561a)