import MovingDirection from "./MovingDirection.js";

export default class enemy{

    //code for all ghost (pokeball) actions
    constructor (x, y, tileSize, velocity, tileMap) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.velocity = velocity;
        this.tileMap = tileMap;
    



        this.#loadImages();

        this.movingDirection = Math.floor(Math.random() * Object.keys(MovingDirection).length);

        this.directionTimerDefault = this.#random(1,3);
        this.directionTimer = this.directionTimerDefault;

        this.scaredAboutToExpireTimerDefault = 10;
        this.scaredAboutToExpireTimer =  this.scaredAboutToExpireTimerDefault;
    }
    draw(ctx, pause, pacman) {
        if(!pause) {
            this.#move();
        this.#changeDirection();
        }
        
        this.#setImage(ctx, pacman);
    }

    //function that allows browser to recognize when you collide with a ghost
    collideWith(pacman){
        const size = this.tileSize / 2;
        if (
            this.x < pacman.x + size &&
            this.x + size > pacman.x &&
            this.y < pacman.y + size &&
            this.y + size > pacman.y
        ) 
        {
            return true;
        }
        else {
            return false;
        }
    }

    #setImage(ctx, pacman) {
        if(pacman.powerDotActive){
            this.#setImageWhenPowerDotIsActive(pacman)
        } else {
            this.image = this.normalGhost;
        }
        ctx.drawImage(this.image, this.x, this.y, this.tileSize, this.tileSize);
    }

    //timer for scared pokeball
    #setImageWhenPowerDotIsActive(pacman) {
        if(pacman.powerDotAboutToExpire) {
            this.scaredAboutToExpireTimer--;
            if(this.scaredAboutToExpireTimer ===0){
                this.scaredAboutToExpireTimer = this.scaredAboutToExpireTimerDefault;
                if(this.image === this.scaredGhost) {
                    this.image = this.blinkGhost;
                } else {
                    this.image = this.scaredGhost
                }
            }
        } else {
            this.image = this.scaredGhost;
        }
    }

    #changeDirection() {
        this.directionTimer--;
        let newMoveDirection = null;
        if(this.directionTimer ==0) {
            this.directionTimer = this.directionTimerDefault;
            newMoveDirection = Math.floor(Math.random() * Object.keys(MovingDirection).length);
        }
        if(newMoveDirection !=null && this.movingDirection != newMoveDirection) {
            if(Number.isInteger(this.x/this.tileSize) && Number.isInteger(this.y/this.tileSize)) {
                if(!this.tileMap.didCollideWithEnvironment(this.x, this.y, newMoveDirection)) {
                    this.movingDirection = newMoveDirection;
                }
            }
        }
    }
    #move() {
        
        if(!this.tileMap.didCollideWithEnvironment(this.x, this.y, this.movingDirection)) {
            switch(this.movingDirection) {
                case MovingDirection.up:
                    this.y -= this.velocity;
                    break;
                    case MovingDirection.down:
                    this.y += this.velocity;
                    break;
                    case MovingDirection.left:
                    this.x -= this.velocity;
                    break;
                    case MovingDirection.right:
                    this.x += this.velocity;
                    break;
            }
        }
    }

#random(min, max) {
    return Math.floor(Math.random() * (max-min+1)) + min;
}

    #loadImages() {
        this.normalGhost = new Image();
        this.normalGhost.src = "pokeballsprite.png";

        this.scaredGhost = new Image();
        this.scaredGhost.src = "scared.png";

        this.blinkGhost = new Image();
        this.blinkGhost.src = "pokeblink.png";


        this.image = this.normalGhost;
    }
}