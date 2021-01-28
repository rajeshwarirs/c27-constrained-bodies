class chain{
    constructor(bodyA, bodyB){
        var options= {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 10,
            stiffness: 0.05,
        }
this.constraint= Constraint.create(options);
World.add(world,this.constraint);
    }
display(){
    strokeWeight(5);
    line (this.constraint.bodyA.position.x,this.constraint.bodyA.position.y,this.constraint.bodyB.position.x,this.constraint.bodyB.position.y)
}
}
