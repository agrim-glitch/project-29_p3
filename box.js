class Box {
    constructor(x, y) {
      var options = {
          'restitution':0.1,
          'friction': 0.5,
          'density' : 1.2
         
      }
      this.body = Bodies.rectangle(x, y, 70, 70, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      rectMode(CENTER);
      fill(255,0,0);
      rect(pos.x, pos.y, 70, 70);
      
    }
  };
  