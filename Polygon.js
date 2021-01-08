class Polygon{
   constructor(x,y,r){
    var options = {
        'restitution': 0.1,
        'friction' : 1,
        'density' : 2
    }
   this.body = Bodies.circle(x,y,r,options);
   this.r = r;
   World.add(world,this.body);
   this.image = loadImage("polygon.png");
  }

 display(){
  imageMode(CENTER);
  image(this.image,this.body.position.x,this.body.position.y,50,50);
   }
 }

