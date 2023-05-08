class Photon {

  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(-Cvalue.value(), 0);
    this.history = [];
    this.stopped = false;
    this.theta = PI;
  }

  stop() {
    this.stopped = true;
  }

  update() {
    
    if (!this.stopped) {
      //if (frameCount % 5 == 0) {
        this.history.push(this.pos.copy());
      //}
      const deltaV = this.vel.copy();
      deltaV.mult(dt);
      this.pos.add(deltaV);
    }

    if (this.history.length > 500) {
      this.history.splice(0, 1);
    }
    
    if (this.pos.x < 0 || this.pos.x > width ||
        this.pos.y < 0 || this.pos.y > height) {
      this.stop(); 
    }

  }

  show() {
    strokeWeight(4);
    stroke(rcol1, rcol2, rcol3);
    point(this.pos.x, this.pos.y);

    strokeWeight(2);
    noFill();
    beginShape();
 //  for (let v of this.history) {
//      vertex(v.x, v.y);
 //   }

    endShape();

  }


}
