//code for all pikachu actions 

import MovingDirection from "./MovingDirection.js";

export default class Pacemon {
    constructor(x,y, tileSize, velocity, tileMap) {
        this.x =x;
        this.y = y;
        this.tileSize = tileSize;
        this.velocity = velocity;
        this.tileMap = tileMap;

        this.currentMovingDirection = null;
        this.requestedMovingDirection = null;

this.pacmanRotation = this.Rotation.right;
this.wakaSound = new Audio("waka.wav");
this.powerDotSound = new Audio("power_dot.wav");
this.powerDotActive = false;
this.powerDotAboutToExpire = false;
this.timers = [];

this.eatGhostSound = new Audio("eat_ghost.wav");

this.madeFirstMove = false;

        document.addEventListener("keydown", this.#keydown)

        this.#loadPacmanImage();
    }

//rotates pikachu depending on direction
    Rotation = {
        right: 0,
        down: 1,
        left: 2,
        up: 3,
    }



draw(ctx, pause, enemies) {
    if(!pause) {
        this.#move();
    }
    this.#eatDot();
    this.#eatPowerDot();
    this.#eatGhost(enemies);


    const size = this.tileSize/2;

    ctx.save();
    ctx.translate(this.x + size, this.y + size);
    ctx.rotate((this.pacmanRotation * 90 * Math.PI) / 180);
    ctx.drawImage(this.pacmanImage[this.pacmanImageIndex], -size, -size, this.tileSize, this.tileSize);

    ctx.restore();

    // ctx.drawImage(this.pacmanImage[this.pacmanImageIndex], this.x, this,this.y, this.tileSize, this.tileSize)
}

#loadPacmanImage() {
    const pacmanImage = new Image();
    pacmanImage.src = 'Pikachu.png'

    this.pacmanImage = [pacmanImage];

    this.pacmanImageIndex = 0;
}

//rotation 
#keydown =(event)=> {
//up
if (event.keyCode == 38){
    if(this.currentMovingDirection === MovingDirection.down)
        this.currentMovingDirection= MovingDirection.up;
    this.requestedMovingDirection = MovingDirection.up;
    this.madeFirstMove = true;
}
//down
if (event.keyCode == 40){
    if(this.currentMovingDirection === MovingDirection.up)
        this.currentMovingDirection= MovingDirection.down;
    this.requestedMovingDirection = MovingDirection.down;
    this.madeFirstMove = true;
}
//left
if (event.keyCode == 37){
    if(this.currentMovingDirection === MovingDirection.right)
        this.currentMovingDirection= MovingDirection.left;
    this.requestedMovingDirection = MovingDirection.left;
    this.madeFirstMove = true;
}
//right
if (event.keyCode == 39){
    if(this.currentMovingDirection === MovingDirection.left)
        this.currentMovingDirection= MovingDirection.right;
    this.requestedMovingDirection = MovingDirection.right;
    this.madeFirstMove = true;
}
};
 
#move () {
    if(this.currentMovingDirection !== this.requestedMovingDirection) {
        if (Number.isInteger(this.x/this.tileSize) && Number.isInteger(this.y/this.tileSize))
     {
        if(!this.tileMap.didCollideWithEnvironment(
            this.x,
            this.y,
            this.requestedMovingDirection
        )
    )
        this.currentMovingDirection = this.requestedMovingDirection
    }
}

if(this.tileMap.didCollideWithEnvironment(this.x,this.y, this.currentMovingDirection)) {
    return;
}

switch(this.currentMovingDirection) {
    case MovingDirection.up:
        this.y -= this.velocity;
        this.pacmanRotation = this.Rotation.up;
        break;
        case MovingDirection.down:
            this.y += this.velocity;
            this.pacmanRotation = this.Rotation.down;
            break;
     case MovingDirection.left:
       this.x -= this.velocity;
       this.pacmanRotation = this.Rotation.left;
        break;
    case MovingDirection.right:
    this.x += this.velocity;
    this.pacmanRotation = this.Rotation.right;
    break;
                    
                

}
}

#eatDot() {
    if(this.tileMap.eatDot(this.x, this.y) && this.madeFirstMove) {
        this.wakaSound.play();
    }
}

#eatPowerDot() {
    if(this.tileMap.eatPowerDot(this.x, this.y) && this.madeFirstMove) {
       
        this.powerDotSound.play();
        this.powerDotActive = true;
        this.powerDotAboutToExpire = false;
        this.timers.forEach((timer) => clearTimeout(timer));
        this.timer = [];

let powerDotTimer = setTimeout(() =>{
    this.powerDotActive = false;
    this.powerDotAboutToExpire = false;
}, 1000*4)

        this.timers.push(powerDotTimer);

        let powerDotAboutToExpireTimer = setTimeout(()=> {
            this.powerDotAboutToExpire= true;
        }, 1000 * 2);

        this.timers.push(powerDotAboutToExpireTimer);
    }
}

//plays sound when colliding with scared enemies
#eatGhost (enemies) {
    if(this.powerDotActive){
        const collideEnemies = enemies.filter((enemy) => enemy.collideWith(this));
        collideEnemies.forEach((enemy)=>{enemies.splice(enemies.indexOf(enemy), 1);
            this.eatGhostSound.play();
    });
}
}
}