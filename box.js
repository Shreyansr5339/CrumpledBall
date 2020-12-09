class Box{
    constructor(x,y){
    this.x = x;
    this.y = y;
    this.boxWidth = 200;
    this.boxHeight = 100;
    this.thickness = 20;
    this.angle = 0;
    this.bottombody = Bodies.rectangle(this.x,this.y,this.boxWidth,this.thickness,{isStatic:true});
    this.leftbody = Bodies.rectangle(this.x - this.boxWidth/2,this.y - this.boxHeight/2,this.thickness,this.boxHeight,{isStatic:true});
    this.rightbody = Bodies.rectangle(this.x + this.boxWidth/2,this.y - this.boxHeight/2,this.thickness,this.boxHeight,{isStatic:true});
    Matter.Body.setAngle(this.leftbody,this.angle)
    Matter.Body.setAngle(this.rightbody,(-1)*this.angle)
    World.add(world,this.bottombody);
    World.add(world,this.leftbody);
    World.add(world,this.rightbody);
    }
display(){
    var pos = this.bottombody.position
    var posleft = this.leftbody.position
    var posright = this.rightbody.position
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill("blue");
    rect(0,0,this.boxWidth,this.thickness);
    pop()
    push();
    translate(posleft.x,posleft.y);
    angleMode(RADIANS)
    rectMode(CENTER);
    fill("blue");
    rotate(this.angle);
    rect(0,0,this.thickness,this.boxHeight);
    pop()
    push();
    translate(posright.x,posright.y);
    angleMode(RADIANS)
    rectMode(CENTER);
    fill("blue");
    rotate(-1*this.angle);
    rect(0,0,this.thickness,this.boxHeight);
    pop()
}
  }