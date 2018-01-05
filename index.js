module.exports = class Mcaptcha {
  constructor(options) {
    this.options = options;
    this.fontSize = options.height * 3 / 4;
    this.init();
    this.refresh(this.options.code);
  }
  init() {
    this.ctx = wx.createCanvasContext(this.options.el);
    this.ctx.setTextBaseline("middle");
    this.ctx.setFillStyle(this.randomColor(180, 240));
    this.ctx.fillRect(0, 0, this.options.width, this.options.height);
  }
  refresh(code) {
    let arr = (code + '').split('');
    if (arr.length === 0) {
      arr = ['n', 'o', 't'];
    };
    let offsetLeft = this.options.width * 0.6 / (arr.length - 1);
    let marginLeft = this.options.width * 0.2;
    arr.forEach((item, index) => {
      this.ctx.setFillStyle(this.randomColor(0, 180));
      let size = this.randomNum(24, this.fontSize);
      this.ctx.setFontSize(size);
      let dis = offsetLeft * index + marginLeft - size * 0.3;
      let deg = this.randomNum(-30, 30);
      this.ctx.translate(dis, this.options.height*0.5);
      this.ctx.rotate(deg * Math.PI / 180);
      this.ctx.fillText(item, 0, 0);
      this.ctx.rotate(-deg * Math.PI / 180);
      this.ctx.translate(-dis, -this.options.height * 0.5);
    })
    this.ctx.draw();
  }
  randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  randomColor(min, max) {
    let r = this.randomNum(min, max);
    let g = this.randomNum(min, max);
    let b = this.randomNum(min, max);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

}
