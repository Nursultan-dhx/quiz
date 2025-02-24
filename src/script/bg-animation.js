function hexToRgb(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

class ShapeController {
    constructor() {
      this.shapes = [];
      this.frame = new Date().getTime();
      this.vel = {
        scrollX: 0,
        scrollY: 0
      };
      this.data = {
        amount: 24,
        scale: 1.25,
        minVel: 0.2,
        maxVel: 1.0,
        allowShuffle: true,
        colors: ["#FA4248", "#5DDBBA", "#64C3F2", "#EDE670"],
        shapes: {
          rectangle: [
            { x: 0.33, y: -0.33 },
            { x: 0.66, y: -0.33 },
            { x: 0.66, y: 1.33 },
            { x: 0.33, y: 1.33 },
            { x: 0.33, y: -0.33 }
          ],
          triangle: [
            { x: 0.5, y: 0.07 },
            { x: 1.0, y: 0.93 },
            { x: 0.0, y: 0.93 },
            { x: 0.5, y: 0.07 }
          ],
          circle: [1],
          cross: [
            { x: 0.33, y: 0.00 },
            { x: 0.66, y: 0.00 },
            { x: 0.66, y: 0.33 },
            { x: 1.00, y: 0.33 },
            { x: 1.00, y: 0.66 },
            { x: 0.66, y: 0.66 },
            { x: 0.66, y: 1.00 },
            { x: 0.33, y: 1.00 },
            { x: 0.33, y: 0.66 },
            { x: 0.00, y: 0.66 },
            { x: 0.00, y: 0.33 },
            { x: 0.33, y: 0.33 },
            { x: 0.33, y: 0.00 }
          ]
        }
      };
    }
  
    init() {
      this.getElements();
      this.initShapes();
      this.render();
    }
  

    
    getElements() {
      this.el = document.getElementsByTagName("canvas")[0];
      this.stage = this.el.getContext("2d");
    }
  
    initShapes() {
      for (let i = 0; i < this.data.amount; i++) {
        this.addShape();
      }
    }
  
    addShape(type, color, x, y, r, xvel, yvel, rvel) {
      const buffer = this.data.scale * 250;
      const types = Object.keys(this.data.shapes);
      if (!type || types.indexOf(type) === -1) {
        type = types[Math.floor(Math.random() * types.length)];
      }
      const colors = this.data.colors;
      if (!color || colors.indexOf(color) === -1) {
        color = colors[Math.floor(Math.random() * colors.length)];
      }
      if (x === undefined) x = -buffer + Math.random() * (window.innerWidth + 2 * buffer);
      if (y === undefined) y = -buffer + Math.random() * (window.innerHeight + 2 * buffer);
      if (r === undefined) r = Math.random() * 360;
  
      if (xvel === undefined) {
        const dir = Math.random() > 0.5 ? -1 : 1;
        const vel = this.data.minVel + Math.random() * (this.data.maxVel - this.data.minVel);
        xvel = dir * vel;
      }
      if (yvel === undefined) {
        const dir = Math.random() > 0.5 ? -1 : 1;
        const vel = this.data.minVel + Math.random() * (this.data.maxVel - this.data.minVel);
        yvel = dir * vel;
      }
      if (rvel === undefined) {
        const dir = Math.random() > 0.5 ? -1 : 1;
        const vel = this.data.minVel + Math.random() * (this.data.maxVel - this.data.minVel);
        rvel = dir * vel;
      }
  
      this.shapes.push({
        type,
        color,
        mult: 0.5 + Math.random() * 2,
        pos: { x, y, r },
        vel: { x: xvel, y: yvel, r: rvel }
      });
    }
  
    repo(shape, rate) {
      const buffer = this.data.scale * 250;
      shape.pos.x += (shape.vel.x + this.vel.scrollX * shape.mult) * (rate / (1000 / 60));
      shape.pos.y += (shape.vel.y + this.vel.scrollY * shape.mult) * (rate / (1000 / 60));
      shape.pos.r += (shape.vel.r / 2) * (rate / (1000 / 60));
      let shuffle = false;
  
      if (shape.pos.x > window.innerWidth + buffer) {
        shape.pos.x = -buffer;
        shuffle = true;
      }
      if (shape.pos.x < -buffer) {
        shape.pos.x = window.innerWidth + buffer;
        shuffle = true;
      }
      if (shape.pos.y > window.innerHeight + buffer) {
        shape.pos.y = -buffer;
        shuffle = true;
      }
      if (shape.pos.y < -buffer) {
        shape.pos.y = window.innerHeight + buffer;
        shuffle = true;
      }
      if (shape.pos.r > 360) shape.pos.r -= 360;
      if (shape.pos.r < 0) shape.pos.r += 360;
  
      if (shuffle && this.data.allowShuffle) {
        const types = Object.keys(this.data.shapes);
        const colors = this.data.colors;
        shape.type = types[Math.floor(Math.random() * types.length)];
        shape.color = colors[Math.floor(Math.random() * colors.length)];
      }
    }
  
    draw(shape) {
        const c = this.stage;
        const s = shape;
        const p = this.data.shapes[s.type];
        const m = this.data.scale * 200;
    
        // Преобразуем HEX-цвет в RGB
        let color = hexToRgb(s.color);
        let alpha = 0.1; // Прозрачность 50%
    
        // Устанавливаем цвет с прозрачностью
        c.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
    
        c.save();
        c.translate(s.pos.x, s.pos.y);
        c.rotate((s.pos.r * Math.PI) / 180);
        c.beginPath();
    
        if (p.length > 1) {
            for (let i = 0; i < p.length; i++) {
                const x = (p[i].x - 0.5) * m;
                const y = (p[i].y - 0.5) * m;
                if (i === 0) c.moveTo(x, y);
                else c.lineTo(x, y);
            }
        } else {
            c.arc(0, 0, p[0] * m * 0.5, 0, 2 * Math.PI);
        }
    
        c.fill();
        c.restore();
    }
  
    scale() {
      if (this.width !== window.innerWidth || this.height !== window.innerHeight) {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.el.width = document.body.clientWidth;
        this.el.height = document.body.clientHeight;
      }
    }
  
    friction(rate) {
      if (Math.abs(this.vel.scrollX) > 0.01) {
        this.vel.scrollX = Math.round(this.vel.scrollX * 0.95 * 1000) / 1000;
      } else {
        this.vel.scrollX = 0;
      }
      if (Math.abs(this.vel.scrollY) > 0.01) {
        this.vel.scrollY = Math.round(this.vel.scrollY * 0.95 * 1000) / 1000;
      } else {
        this.vel.scrollY = 0;
      }
    }
  
    render() {
      this.scale();
      const elapsed = new Date().getTime();
      this.stage.clearRect(0, 0, this.width, this.height);
      this.friction(elapsed - this.frame);
      for (let i = 0; i < this.shapes.length; i++) {
        this.repo(this.shapes[i], elapsed - this.frame);
        this.draw(this.shapes[i]);
      }
      this.frame = elapsed;
      requestAnimationFrame(() => this.render());
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    window.App = new ShapeController();
    App.init();
  });