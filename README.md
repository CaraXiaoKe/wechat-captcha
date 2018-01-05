## wxm中引入节点
    <canvas style="width:{{cvs.width}};height:{{cvs.height}};" canvas-id="canvas"></canvas>
## 引入组件
    假设mcaptcha.js文件放在utils下边
    let Mcaptcha = require('../../utils/mcaptcha.js');
    ............
    onReady: function () {
        new Mcaptcha({
            el: 'canvas',
            width: 120,
            height: 40,
            code: "afced"
        );
    }
    ..........

