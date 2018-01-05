## wxm中引入节点
    <canvas style="width:{{cvs.width}};height:{{cvs.height}};" canvas-id="canvas"></canvas>
## 引入组件
    假设mcaptcha.js文件放在utils下边
     Mcaptcha = require('../../utils/mcaptcha.js');
    ............
    onReady: function () {
        this.mcaptcha = new Mcaptcha({
            el: 'canvas',
            width: 120,
            height: 40,
            code: "afced"
        );
    }
    ..........
##刷新图形验证码
    this.mcaptcha.refresh("dfdff");
## 参考文章
+  [canvas实现图形验证码小插件](https://www.jianshu.com/p/064a80a3561a)