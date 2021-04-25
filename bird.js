class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.1,
          'friction': 0,
          'density' : 1.2
         
      }
      this.body = Bodies.circle(x, y, 35, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      rectMode(CENTER);
      fill(0,230,0);
      ellipse(pos.x, pos.y, 70, 70);
      
    }
  };
  