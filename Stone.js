class Stone{
	constructor(x,y,width,height){
		var op = {
			restitution:0.8,
			friction:0.9,
			density:12
		}
		this.body = Bodies.rectangle(x, y, width, height,op)
		World.add(world,this.body)
		this.width = width
		this.height = height
			}
			display(){
			push ()
			translate(this.body.position.x,this.body.position.y)
			rotate(this.body.angle)
			rectMode(CENTER);
			
			fill("black")
			rect(0,0,this.width, this.height);
			pop ()
			}
}