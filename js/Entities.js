class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, type) {
    super(scene, x, y, key);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.setData("type", type);
    this.setData("isDead", false);
  }
  explode(canDestroy){
    if (!this.getData("isDead")) {
        // Set the texture to the explosion image, then play the animation
        this.setTexture("sprExplosion");  // this refers to the same animation key we used when we added this.anims.create previously
        this.play("sprExplosion"); // play the animation
        // pick a random explosion sound within the array we defined in this.sfx in SceneMain
        this.scene.sfx.explosions[Phaser.Math.Between(0, this.scene.sfx.explosions.length - 1)].play();
        /*if (this.shootTimer !== undefined) {
          if (this.shootTimer) {
            this.shootTimer.remove(false);
          }
        }*/
        this.setAngle(0);
        this.body.setVelocity(0, 0);
        this.on('animationcomplete', function() {
          if (canDestroy) {
            this.destroy();
          }
          else {
            this.setVisible(false);
          }
        }, this);
        this.setData("isDead", true);
      }
    }
}

class Player extends Entity{
    constructor(scene, x, y, key, type) {
        //super(scene, x, y, key, "Player");
        //by me...
        super(scene, x, y, "sprRun_back100", "Player");
        this.states = {
          MOVE_DOWN: "MOVE_DOWN",
          CHASE: "CHASE",
          TACKLED: "TACKLED",
          BEAST_MODE: "BEAST_MODE",
          CELEBRATE: "CELEBRATE",
          STAND: "STAND",
          SPINNING: "SPINNING",
          RUNNING: "RUNNING",
          RUNNINGupLt: "RUNNINGupLt",
          RUNNINGupRt: "RUNNINGupRt",
          RUNNINGlt: "RUNNINGlt",
          RUNNINGrt: "RUNNINGrt",
          RUNNINGdown: "RUNNINGdown",
          RUNNINGdownLt: "RUNNINGdownLt",
          RUNNINGdownRt: "RUNNINGdownRt"
        };
        //this.setData("speed", speedOriginal);
        this.setData("speed", 200);
        this.setData("isSpinning", false);
        this.setData("isTackled", false);
        this.setData("runningLt", false);
        this.setData("runningUpLt", false);
        this.setData("runningUp", false);
        this.setData("runningUpRt", false);
        this.setData("runningRt", false);
        this.setData("runningDownRt", false);
        this.setData("runningDown", false);
        this.setData("runningDownLt", false);
        
this.setData("timerShootDelay", 10);
this.setData("timerShootTick", this.getData("timerShootDelay") - 1);
//by me...
this.play("sprRun_back100");
this.body.setSize(30, 20, false);
     this.body.immovable = true;
    }
    moveUp() {
        this.body.velocity.y = -this.getData("speed");
      }
      moveDown() {
        this.body.velocity.y = this.getData("speed");
      }
      moveLeft() {
        this.body.velocity.x = -this.getData("speed");
      }
      moveRight() {
        this.body.velocity.x = this.getData("speed");
      }
    
    update (){
        this.body.setVelocity(0, 0);
    this.x = Phaser.Math.Clamp(this.x, this.scene.game.config.width * 0.5 - 160, this.scene.game.config.width * 0.5 + 160);
    this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);
    /*if (this.getData("isShooting")) {
        if (this.getData("timerShootTick") < this.getData("timerShootDelay")) {
          this.setData("timerShootTick", this.getData("timerShootTick") + 1); // every game update, increase timerShootTick by one until we reach the value of timerShootDelay
        }
        else { // when the "manual timer" is triggered:
          var laser = new PlayerLaser(this.scene, this.x, this.y);
          this.scene.playerLasers.add(laser);
        
          this.scene.sfx.laser.play(); // play the laser sound effect
          this.setData("timerShootTick", 0);
        }
      }*/
      if(!touchdown && !outOfBounds){
        if(this.getData("isSpinning") && this.state != this.states.SPINNING && this.state != this.states.TACKLED){
          this.play("rbSpin");
          this.state = this.states.SPINNING;
          this.once('animationcomplete', function() {
            //this.play("sprRun_back100");
            //this.state = this.states.RUNNING;
            this.setData("isSpinning", false);
            spinning = false;
          }, this);
        }
        if(!this.getData("isTackled") && !this.getData("isSpinning") && this.state != this.states.RUNNING){
          this.play("sprRun_back100");
          this.state = this.states.RUNNING;
        }
        if(level == 1 || level == 2 || level == 3 || level == 4 || level == 5 || level == 6
          || level == 7 || level == 8 || level == 9 || level == 10){
            if(!this.getData("isTackled") && !this.getData("isSpinning")){
              if(moveX > 0 && moveY == 0  && !this.getData("runningLt")){
                this.play("rbRunLt");
                this.setData("runningLt", true);
                this.setData("runningUpLt", false);
                this.setData("runningUp", false);
                this.setData("runningUpRt", false);
                this.setData("runningRt", false);
                this.setData("runningDownRt", false);
                this.setData("runningDown", false);
                this.setData("runningDownLt", false);
              }
              if(moveX > 0 && moveY > 0 && !this.getData("runningUpLt")){
                this.play("rbRunUpLt");
                this.setData("runningLt", false);
                this.setData("runningUpLt", true);
                this.setData("runningUp", false);
                this.setData("runningUpRt", false);
                this.setData("runningRt", false);
                this.setData("runningDownRt", false);
                this.setData("runningDown", false);
                this.setData("runningDownLt", false);
              }
              if(moveX == 0 && moveY > 0 && !this.getData("runningUp")){
                this.play("sprRun_back100");
                this.setData("runningLt", false);
                this.setData("runningUpLt", false);
                this.setData("runningUp", true);
                this.setData("runningUpRt", false);
                this.setData("runningRt", false);
                this.setData("runningDownRt", false);
                this.setData("runningDown", false);
                this.setData("runningDownLt", false);
              }
              if(moveX < 0 && moveY > 0 && !this.getData("runningUpRt")){
                this.play("rbRunUpRt");
                this.setData("runningLt", false);
                this.setData("runningUpLt", false);
                this.setData("runningUp", false);
                this.setData("runningUpRt", true);
                this.setData("runningRt", false);
                this.setData("runningDownRt", false);
                this.setData("runningDown", false);
                this.setData("runningDownLt", false);
              }
              if(moveX < 0 && moveY == 0 && !this.getData("runningRt")){
                this.play("rbRunRt");
                this.setData("runningLt", false);
                this.setData("runningUpLt", false);
                this.setData("runningUp", false);
                this.setData("runningUpRt", false);
                this.setData("runningRt", true);
                this.setData("runningDownRt", false);
                this.setData("runningDown", false);
                this.setData("runningDownLt", false);
              }
              if(moveX < 0 && moveY < 0 && !this.getData("runningDownRt")){
                this.play("rbRunDownRt");
                this.setData("runningLt", false);
                this.setData("runningUpLt", false);
                this.setData("runningUp", false);
                this.setData("runningUpRt", false);
                this.setData("runningRt", false);
                this.setData("runningDownRt", true);
                this.setData("runningDown", false);
                this.setData("runningDownLt", false);
              }
              if(moveX == 0 && moveY < 0 && !this.getData("runningDown")){
                this.play("rbRunDown");
                this.setData("runningLt", false);
                this.setData("runningUpLt", false);
                this.setData("runningUp", false);
                this.setData("runningUpRt", false);
                this.setData("runningRt", false);
                this.setData("runningDownRt", false);
                this.setData("runningDown", true);
                this.setData("runningDownLt", false);
              }
              if(moveX > 0 && moveY < 0 && !this.getData("runningDownLt")){
                this.play("rbRunDownLt");
                this.setData("runningLt", false);
                this.setData("runningUpLt", false);
                this.setData("runningUp", false);
                this.setData("runningUpRt", false);
                this.setData("runningRt", false);
                this.setData("runningDownRt", false);
                this.setData("runningDown", false);
                this.setData("runningDownLt", true);
              }
              if(moveX == 0 && moveY == 0 && !this.getData("isTackled") && this.state != this.states.TACKLED && !touchdown && !this.getData("isSpinning")){
                this.play("sprRun_back100");
              }
            }  
          }
        if(this.getData("isTackled") && this.state != this.states.TACKLED){
          this.scene.sfx.explosions[1].play();
          this.play("rbTackled");
          this.state = this.states.TACKLED;
          /*this.on('animationcomplete', function() {
            this.play("sprRun_back100");
            this.state = this.states.RUNNING;
            this.setData("isSpinning", false);
            spinning = false;
          }, this);*/
        }
      }
        if(touchdown && this.state != this.states.CELEBRATE){
          //this.scene.sfx.explosions[1].play();
          particles.emitParticleAt(this.x, this.y);
          this.onTD();
          this.play("rbCelebration");
          this.state = this.states.CELEBRATE;
          this.playSound();
        }
        
    }//end update
    onTD(){
        this.scene.time.addEvent({ // go to game over scene
            delay: 3000,
            callback: function() {
              //new for LA2
              //level += 1;
              upgradeBlockerLeft = false;
              upgradeBlockerCenter = false;
              upgradeBlockerRight = false;
              //
              down = 1;
              yards = 0;
              activateEndzone = false;
              this.scene.scene.start("SceneGameOver");
              //Poki stuff
              gameStop();
              PokiSDK.happyTime(1.0);
              /*
              //startCommercial();
              
              */
            },
            callbackScope: this,
            loop: false
          });
    }
    playSound(){
      this.scene.sfx.pickups[3].play();
    }

    onDestroy(){
        this.scene.time.addEvent({ // go to game over scene
            delay: 3000,
            callback: function() {
              down += 1;
              if(down > 4){
                down = 1;
                yards = 0;
                //new for LA2
              //level += 1;
              upgradeBlockerLeft = false;
              upgradeBlockerCenter = false;
              upgradeBlockerRight = false;
              //
                //Poki stuff
                //startCommercial();
              }
              //Poki stuff
              gameStop();
              this.scene.scene.start("SceneGameOver");
            },
            callbackScope: this,
            loop: false
          });
    }
}


//Lineman...
class Lineman extends Entity{
  constructor(scene, x, y, key, type) {
      //super(scene, x, y, key, "Lineman");
      //by me...
      super(scene, x, y, "linemanRun", "Lineman");
      this.states = {
        MOVE_DOWN: "MOVE_DOWN",
          CHASE: "CHASE",
          TACKLED: "TACKLED",
          BEAST_MODE: "BEAST_MODE",
          CELEBRATE: "CELEBRATE",
          STAND: "STAND",
          SPINNING: "SPINNING",
          RUNNING: "RUNNING"
      };
//by me...
this.setData("speed", speedOriginal);
        this.setData("isSpinning", false);
        this.setData("isTackled", false);
this.setData("timerShootDelay", 10);
this.setData("timerShootTick", this.getData("timerShootDelay") - 1);
//by me...
this.play("linemanRun");
this.body.setSize(30, 20, false);
  }
  
  update (){
      this.body.setVelocity(0, 0);
  this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
  this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);
    if(!touchdown){

      }
      if(!this.getData("isTackled") && !this.getData("isSpinning") && this.state != this.states.RUNNING){

      }
      if(this.getData("isTackled") && this.state != this.states.TACKLED){

      }
      if(touchdown && this.state != this.states.CELEBRATE){

      }
  }
  onTD(){

  }
  playSound(){
    //this.scene.sfx.pickups[3].play();
  }

  onDestroy(){
    this.destroy();
  }
}
//End Lineman

//LA2
//Lineman2...
class Lineman2 extends Entity{
  constructor(scene, x, y, key, type) {
      //super(scene, x, y, key, "Lineman2");
      //by me...
      super(scene, x, y, "linemanRun", "Lineman2");
      this.body.immovable = true;
      this.body.velocity.y = -150;
      this.states = {
        MOVE_DOWN: "MOVE_DOWN",
          CHASE: "CHASE",
          TACKLED: "TACKLED",
          BEAST_MODE: "BEAST_MODE",
          CELEBRATE: "CELEBRATE",
          STAND: "STAND",
          SPINNING: "SPINNING",
          RUNNING: "RUNNING"
      };
//by me...
this.setData("speed", speedOriginal);

//by me...
this.play("linemanRun");
this.body.setSize(30, 20, false);
  }
  
  update (){
    this.x += moveX;
      this.y += moveY;
      //this.body.setVelocity(0, -150);
    if(!touchdown){

      }
      if(!this.getData("isTackled") && !this.getData("isSpinning") && this.state != this.states.RUNNING){

      }
      if(this.getData("isTackled") && this.state != this.states.TACKLED){

      }
      if(touchdown && this.state != this.states.CELEBRATE){

      }
  }
  onTD(){

  }
  playSound(){
    //this.scene.sfx.pickups[3].play();
  }

  onDestroy(){
    this.destroy();
  }
}
//End Lineman2
//


class ChaserShip extends Entity {
    constructor(scene, x, y, yVelocity) {
      //super(scene, x, y, "sprEnemy1", "ChaserShip");
      super(scene, x, y, yVelocity, "lbRun", "ChaserShip");
      this.body.velocity.y = yVelocity;
      //by me...
      this.body.setSize(50, 30, true);
      this.body.immovable = true;
      this.yVelocity = yVelocity;
      //
      this.states = {
        MOVE_DOWN: "MOVE_DOWN",
        CHASE: "CHASE",
        TACKLE: "TACKLE",
        BLASTED: "BLASTED",
        CELEBRATE: "CELEBRATE",
        STAND: "STAND"
      };
      this.state = this.states.MOVE_DOWN;
      this.play("lbRun");
      this.setData("isTackling", false);
      this.setData("blasted", false);
      this.setData("celebrating", false);
      this.setData("standing", false);
    }
    celebrate(){
      this.setData("celebrating", true);
    }

    update(tackled){
      if(touchdown && this.state != this.states.BLASTED){
        this.play("lbStand");
        this.state = this.states.STAND;
        this.body.setVelocity(
          0,
          0
        );
      }
      if(!touchdown){
        if (!this.getData("isDead") && this.scene.player) {
          //this.body.velocity.y = speed;
          this.yVelocity = speed + 75;
            /*if (Phaser.Math.Distance.Between(
              this.x,
              this.y,
              this.scene.player.x,
              this.scene.player.y
            ) < 320) {
              this.state = this.states.CHASE;
            }*/
            if(this.getData("blasted") && this.state != this.states.BLASTED){
              this.play("lbBlasted");
              this.state = this.states.BLASTED;
              this.scene.sfx.explosions[0].play();
              stars += 50 + 10*upgradeContract;
            }
            if(this.scene.player.y - this.y < 150 && !this.getData("celebrating") && this.state != this.states.BLASTED){
              if(!this.getData("isTackling")){
                this.play("lbDiveTackle");
                this.setData("isTackling", true);
              }
              this.state = this.states.TACKLE;
            }
            if(this.states != this.states.TACKLE && !this.getData("celebrating") && this.state != this.states.BLASTED){
              if(this.y > 20 && this.y < this.scene.player.y){
                this.state = this.states.CHASE;
              }
              if(this.y > this.scene.player.y){
                this.state = this.states.MOVE_DOWN;
                this.body.velocity.y = this.yVelocity;
              }
              if (this.state == this.states.CHASE) {
                if(this.scene.player.x > this.x){
                  this.body.setVelocity(
                    speedXEnemy,
                    this.yVelocity
                  );
                }
                if(this.scene.player.x < this.x){
                  this.body.setVelocity(
                    -speedXEnemy,
                    this.yVelocity
                  );
                }
              }
            }//end if(this.states != this.states.TACKLE && !this.getData("celebrating")){
              //tackled...set velocity to 0
            if(tackled && this.state != this.states.CELEBRATE && this.state != this.states.BLASTED){
              this.play("lbStand");
              this.state = this.states.STAND;
              this.body.setVelocity(
                0,
                0
              );
            }
              //
            if(this.getData("celebrating") && this.state != this.states.CELEBRATE && this.state != this.states.BLASTED){
              this.play("lbCelebration");
              this.state = this.states.CELEBRATE;
              this.body.setVelocity(
                0,
                0
              );
            }
        }
      }
    }
  }

  class Linebacker extends Entity {
    constructor(scene, x, y, yVelocity) {
      //super(scene, x, y, "sprEnemy1", "ChaserShip");
      super(scene, x, y, yVelocity, "lbRun", "Linebacker");
      this.body.velocity.y = yVelocity;
      //by me...
      this.body.setSize(50, 30, true);
      this.body.immovable = true;
      this.yVelocity = yVelocity;
      //
      this.states = {
        MOVE_DOWN: "MOVE_DOWN",
        CHASE: "CHASE",
        TACKLE: "TACKLE",
        BLASTED: "BLASTED",
        CELEBRATE: "CELEBRATE",
        STAND: "STAND",
        STANDINGUP: "STANDINGUP"
      };
      this.state = this.states.STAND;
      this.play("lbStand");
      this.setData("isTackling", false);
      this.setData("blasted", false);
      this.setData("celebrating", false);
      this.setData("standing", false);
      this.setData("direction", 'down');
      this.setData("isStandingUp", false);
      this.setData("runningLt", false);
      this.setData("runningUpLt", false);
      this.setData("runningUp", false);
      this.setData("runningUpRt", false);
      this.setData("runningRt", false);
      this.setData("runningDownRt", false);
      this.setData("runningDown", false);
      this.setData("runningDownLt", false);
      this.setData("muddyFactor", 1);
    }
    celebrate(){
      this.setData("celebrating", true);
    }

    update(tackled,moveX,moveY){
      this.x += moveX;
      this.y += moveY;
      //if(touchdown && this.state != this.states.BLASTED){
      if(touchdown){
        //this.play("lbStand");
        //this.state = this.states.STAND;
        this.body.setVelocity(
          0,
          0
        );
      }
      if(!touchdown){
        if (!this.getData("isDead") && this.scene.player) {
          ////this.body.velocity.y = speed;
          //this.yVelocity = speed + 75;
            if(this.getData("blasted") && this.state != this.states.BLASTED){
              this.play("lbBlasted");
              this.scene.sfx.explosions[0].play();
              //stars += 50 + 10*upgradeContract;
              this.body.setVelocity(
                0,
                0
              );
              this.once('animationcomplete', function() {
                this.setData("isTackling", false);
                this.setData("isStandingUp", true);
                this.setData("blasted", false);
                this.body.setVelocity(
                  0,
                  0
                );
              }, this);
              this.state = this.states.BLASTED;
            }
            //if(this.scene.player.y - this.y < 150 && !this.getData("celebrating") && this.state != this.states.BLASTED){
              /*if(!this.getData("isTackling")){
                this.play("lbDiveTackle");
                this.setData("isTackling", true);
              }
              this.state = this.states.TACKLE;*/
            //}
            if(this.states != this.states.TACKLE && !this.getData("celebrating") && !this.getData("blasted") && !this.getData("isStandingUp")){
              var dist = Phaser.Math.Distance.Between(this.x,this.y,this.scene.player.x,this.scene.player.y);
              if(dist < 150 && (this.body.velocity.y !=0 || this.body.velocity.x != 0)){
                if(!this.getData("isTackling")){
                  if(this.getData("direction") == 'left'){
                    this.play("lbDiveTackleLt");
                  }
                  if(this.getData("direction") == 'upLt'){
                    this.play("lbDiveTackleUpLt");
                  }
                  if(this.getData("direction") == 'up'){
                    this.play("lbDiveTackleUp");
                  }
                  if(this.getData("direction") == 'upRt'){
                    this.play("lbDiveTackleUpRt");
                  }
                  if(this.getData("direction") == 'right'){
                    this.play("lbDiveTackleRt");
                  }
                  if(this.getData("direction") == 'downRt'){
                    this.play("lbDiveTackleDownRt");
                  }
                  if(this.getData("direction") == 'down'){
                    this.play("lbDiveTackle");
                  }
                  if(this.getData("direction") == 'downLt'){
                    this.play("lbDiveTackleDownLt");
                  }
                  this.setData("isTackling", true);
                  this.setData("runningLt", false);
                  this.setData("runningUpLt", false);
                  this.setData("runningUp", false);
                  this.setData("runningUpRt", false);
                  this.setData("runningRt", false);
                  this.setData("runningDownRt", false);
                  this.setData("runningDown", false);
                  this.setData("runningDownLt", false);
                  this.once('animationcomplete', function() {
                    this.setData("isTackling", false);
                    this.setData("isStandingUp", true);
                      this.body.setVelocity(
                        0,
                        0
                      );
                  }, this);
                }
                this.state = this.states.TACKLE;
              }
              if(dist < 500 && !this.getData("isTackling") && this.states != this.states.TACKLE && !this.getData("celebrating") && this.state != this.states.BLASTED
              &&  !this.getData("isStandingUp")){
                this.state = this.states.CHASE;
                if(this.getData("direction") == 'left' && !this.getData("runningLt")){
                  this.play("lbRunLt");
                  this.setData("runningLt", true);
                  this.setData("runningUpLt", false);
                  this.setData("runningUp", false);
                  this.setData("runningUpRt", false);
                  this.setData("runningRt", false);
                  this.setData("runningDownRt", false);
                  this.setData("runningDown", false);
                  this.setData("runningDownLt", false);
                }
                if(this.getData("direction") == 'upLt' && !this.getData("runningUpLt")){
                  this.play("lbRunUpLt");
                  this.setData("runningLt", false);
                  this.setData("runningUpLt", true);
                  this.setData("runningUp", false);
                  this.setData("runningUpRt", false);
                  this.setData("runningRt", false);
                  this.setData("runningDownRt", false);
                  this.setData("runningDown", false);
                  this.setData("runningDownLt", false);
                }
                if(this.getData("direction") == 'up' && !this.getData("runningUp")){
                  this.play("lbRunUp");
                  this.setData("runningLt", false);
                  this.setData("runningUpLt", false);
                  this.setData("runningUp", true);
                  this.setData("runningUpRt", false);
                  this.setData("runningRt", false);
                  this.setData("runningDownRt", false);
                  this.setData("runningDown", false);
                  this.setData("runningDownLt", false);
                }
                if(this.getData("direction") == 'upRt' && !this.getData("runningUpRt")){
                  this.play("lbRunUpRt");
                  this.setData("runningLt", false);
                  this.setData("runningUpLt", false);
                  this.setData("runningUp", false);
                  this.setData("runningUpRt", true);
                  this.setData("runningRt", false);
                  this.setData("runningDownRt", false);
                  this.setData("runningDown", false);
                  this.setData("runningDownLt", false);
                }
                if(this.getData("direction") == 'right' && !this.getData("runningRt")){
                  this.play("lbRunRt");
                  this.setData("runningLt", false);
                  this.setData("runningUpLt", false);
                  this.setData("runningUp", false);
                  this.setData("runningUpRt", false);
                  this.setData("runningRt", true);
                  this.setData("runningDownRt", false);
                  this.setData("runningDown", false);
                  this.setData("runningDownLt", false);
                }
                if(this.getData("direction") == 'downRt' && !this.getData("runningDownRt")){
                  this.play("lbRunDownRt");
                  this.setData("runningLt", false);
                  this.setData("runningUpLt", false);
                  this.setData("runningUp", false);
                  this.setData("runningUpRt", false);
                  this.setData("runningRt", false);
                  this.setData("runningDownRt", true);
                  this.setData("runningDown", false);
                  this.setData("runningDownLt", false);
                }
                if(this.getData("direction") == 'down' && !this.getData("runningDown")){
                  this.play("lbRun");
                  this.setData("runningLt", false);
                  this.setData("runningUpLt", false);
                  this.setData("runningUp", false);
                  this.setData("runningUpRt", false);
                  this.setData("runningRt", false);
                  this.setData("runningDownRt", false);
                  this.setData("runningDown", true);
                  this.setData("runningDownLt", false);
                }
                if(this.getData("direction") == 'downLt' && !this.getData("runningDownLt")){
                  this.play("lbRunDownLt");
                  this.setData("runningLt", false);
                  this.setData("runningUpLt", false);
                  this.setData("runningUp", false);
                  this.setData("runningUpRt", false);
                  this.setData("runningRt", false);
                  this.setData("runningDownRt", false);
                  this.setData("runningDown", false);
                  this.setData("runningDownLt", true);
                }
              }
            
                /*if (Phaser.Math.Distance.Between(
                  this.x,
                  this.y,
                  this.scene.player.x,
                  this.scene.player.y
                ) < 10320) {
                  this.state = this.states.CHASE;
                }*/
                if (this.state == this.states.CHASE  && !this.getData("isTackling") && !this.getData("blasted")) {
                  var dx = this.scene.player.x - this.x;
                  var dy = this.scene.player.y - this.y;
                  var angle = Math.atan2(dy, dx);
                  //speedChase = 100;
                  this.body.setVelocity(
                    Math.cos(angle) * speedChase * this.getData("muddyFactor"),
                    Math.sin(angle) * speedChase * this.getData("muddyFactor")
                  );
                  if(angle <= -2.5 || angle > 2.5){
                    this.setData("direction", 'left');
                  }
                  if(angle > -2.5 && angle < -1.8){
                    this.setData("direction", 'upLt');
                  }
                  if(angle >= -1.8 && angle < -0.75){
                    this.setData("direction", 'up');
                  }
                  if(angle >= -0.75 && angle < -0.25){
                    this.setData("direction", 'upRt');
                  }
                  if(angle >= -0.25 && angle < 0.25){
                    this.setData("direction", 'right');
                  }
                  if(angle >= 0.25 && angle < 0.75){
                    this.setData("direction", 'downRt');
                  }
                  if(angle >= 0.75 && angle <= 1.75){
                    this.setData("direction", 'down');
                  }
                  if(angle >= 1.75 && angle <= 2.5){
                    this.setData("direction", 'downLt');
                  }
                  if(this.getData("muddyFactor") < 1){
                    var increase = this.getData("muddyFactor") + 0.1;
                    this.setData("muddyFactor", increase);
                  }
                }
            }
            //end if(this.states != this.states.TACKLE && !this.getData("celebrating")){
              //getting or standing up...
              if(this.state != this.states.CELEBRATE && !this.getData("blasted") && this.state != this.states.STANDINGUP  
                && !this.getData("isTackling") && this.getData("isStandingUp")){
                this.play("lbStandUp");
              this.once('animationcomplete', function() {
                this.setData("isTackling", false);
                this.setData("isStandingUp", false);
                this.setData("runningLt", false);
                this.setData("runningUpLt", false);
                this.setData("runningUp", false);
                this.setData("runningUpRt", false);
                this.setData("runningRt", false);
                this.setData("runningDownRt", false);
                this.setData("runningDown", false);
                this.setData("runningDownLt", false);
              }, this);
              this.state = this.states.STANDINGUP;
            }
              //tackled...set velocity to 0
            if(tackled && this.state != this.states.CELEBRATE && this.state != this.states.BLASTED){
              this.play("lbStand");
              this.state = this.states.STAND;
              this.body.setVelocity(
                0,
                0
              );
            }
              //
            if(this.getData("celebrating") && this.state != this.states.CELEBRATE && this.state != this.states.BLASTED){
              this.play("lbCelebration");
              this.state = this.states.CELEBRATE;
              this.body.setVelocity(
                0,
                0
              );
            }
        }
      }
    }
  }

  //by me...
  class pickupBeastMode extends Entity {
    constructor(scene, x, y, velocityY) {
      super(scene, x, y, "pickupBeastMode", "pickupBeastMode");
      //this.body.velocity.y = velocityY;
      this.play("pickupBeastMode");
      this.setData("typePickupBeastMode", true);
      this.setDepth(-1);
    }
    update(){
      this.body.velocity.y = speed;
      if(this.y > this.scene.game.config.height){
        this.destroy();
      }
    }
    playSound(){
      this.scene.sfx.pickups[0].play();
      this.scene.sfx.pickups[1].play();
    }
  }

  class pickupSpin extends Entity {
    constructor(scene, x, y, velocityY) {
      super(scene, x, y, "pickupSpin", "pickupSpin");
      this.body.velocity.y = velocityY;
      this.play("pickupSpin");
      this.setData("typePickupSpin", true);
      this.setDepth(-1);
    }
    update(){
      this.body.velocity.y = speed;
      if(this.y > this.scene.game.config.height){
        this.destroy();
      }
    }
    playSound(){
      this.scene.sfx.pickups[2].play();
    }
  }

  class pickupBoost extends Entity {
    constructor(scene, x, y, velocityY) {
      super(scene, x, y, "pickupBoost", "pickupBoost");
      this.body.velocity.y = velocityY;
      //this.play("pickupBoost");
      this.setData("typePickupBoost", true);
      this.setDepth(-1);
      this.body.setSize(50, 50, true);
     this.body.immovable = true;
    }
    update(){
      this.body.velocity.y = speed;
      if(this.y > this.scene.game.config.height){
        this.destroy();
      }
    }
    playSound(){
      this.scene.sfx.pickups[2].play();
    }
  }


  class CarrierShip extends Entity {
    constructor(scene, x, y) {
      super(scene, x, y, "sprEnemy2", "CarrierShip");
      this.body.velocity.y = Phaser.Math.Between(50, 100);
      this.play("sprEnemy2");
    }
  }

  class ScrollingBackground {
    constructor(scene, key, velocityY) {
        this.scene = scene;
        this.key = key;
        this.velocityY = velocityY;
        this.layers = this.scene.add.group();

        this.createLayers();
    }
    createLayers(){
        for (var i = 0; i < 2; i++) {
            // creating two backgrounds will allow a continuous scroll
            var layer = this.scene.add.sprite(0, 0, this.key);
            layer.y = (layer.displayHeight * i);
            var flipX = Phaser.Math.Between(0, 10) >= 5 ? -1 : 1;
            var flipY = Phaser.Math.Between(0, 10) >= 5 ? -1 : 1;
            layer.setScale(flipX * 2, flipY * 2);
            layer.setDepth(-5 - (i - 1));
            this.scene.physics.world.enableBody(layer, 0);
            layer.body.velocity.y = this.velocityY;
            this.layers.add(layer);
          }
    }
    update(){
        if (this.layers.getChildren()[0].y > 0) {
            for (var i = 0; i < this.layers.getChildren().length; i++) {
              var layer = this.layers.getChildren()[i];
              layer.y = (-layer.displayHeight) + (layer.displayHeight * i);
            }
          }
    }
  }


  class movingBackground {
    constructor(scene, key, velocityY) {
        this.scene = scene;
        this.key = key;
        this.velocityY = velocityY;
        this.layers = this.scene.add.group();

        this.createLayers();
    }
    createLayers(){
        for (var i = 0; i < 3; i++) {
            // creating two backgrounds will allow a continuous scroll
            //var layer = this.scene.add.sprite(160, 284, this.key);
            var layer = this.scene.add.sprite(this.scene.game.config.width * 0.5, 284, this.key);
            layer.y = (layer.displayHeight * i);
            //var flipX = Phaser.Math.Between(0, 10) >= 5 ? -1 : 1;
            //var flipY = Phaser.Math.Between(0, 10) >= 5 ? -1 : 1;
            layer.setScale(1);
            layer.setDepth(-5 - (i - 1));
            this.scene.physics.world.enableBody(layer, 0);
            layer.body.velocity.y = this.velocityY;
            this.layers.add(layer);
          }
    }
    update(){
      //by me...
      this.layers.getChildren()[0].body.velocity.y = speed;
        this.layers.getChildren()[1].body.velocity.y = speed;
        this.layers.getChildren()[2].body.velocity.y = speed;
      if(tackled){
        this.layers.getChildren()[0].body.velocity.y = 0;
        this.layers.getChildren()[1].body.velocity.y = 0;
        this.layers.getChildren()[2].body.velocity.y = 0;
      }
        if (this.layers.getChildren()[0].y > 0) {
            for (var i = 0; i < this.layers.getChildren().length; i++) {
              var layer = this.layers.getChildren()[i];
              layer.y = (-layer.displayHeight) + (layer.displayHeight * i);
            }
          }
    }
  }

  class movingYardline {
    constructor(scene, key, velocityY) {
        this.scene = scene;
        this.key = key;
        this.velocityY = velocityY;
        this.layers = this.scene.add.group();

        this.createLayers();
    }
    createLayers(){
        for (var i = 0; i < 1; i++) {
            // creating two backgrounds will allow a continuous scroll
            var layer = this.scene.add.sprite(this.scene.game.config.width * 0.5, 5, this.key);
            //var layer = this.scene.add.sprite(160, 5, this.key);
            layer.y = (layer.displayHeight * i);
            //var flipX = Phaser.Math.Between(0, 10) >= 5 ? -1 : 1;
            //var flipY = Phaser.Math.Between(0, 10) >= 5 ? -1 : 1;
            layer.setScale(1);
            layer.setDepth(-2 - (i - 1));
            this.scene.physics.world.enableBody(layer, 0);
            layer.body.velocity.y = this.velocityY;
            this.layers.add(layer);
          }
    }
    update(tackled){
        /*if (this.layers.getChildren()[0].y > 0) {
            for (var i = 0; i < this.layers.getChildren().length; i++) {
              var layer = this.layers.getChildren()[i];
              layer.y = (-layer.displayHeight) + (layer.displayHeight * i);
            }
          }*/
          //by me...
          this.layers.getChildren()[0].body.velocity.y = speed;
          if(tackled){
            this.layers.getChildren()[0].body.velocity.y = 0;
          }

          if (this.layers.getChildren()[0].y < this.scene.game.config.height && this.layers.getChildren()[0].y > this.scene.player.y) {
            //invincible = true;
          }

          if (this.layers.getChildren()[0].y > this.scene.game.config.height) {
          //if(this.y > this.scene.game.config.height/2){
            yards += 5;
            yardsTotal += 5;
            //yardsToGo -= 5;
            stars += 5 + 5*upgradeContract;
            this.layers.getChildren()[0].y = 0;
            //if(yardsToGo == 5){
              //activateEndzone = true;
            //}
          }
    }
  }

  /*class movingEndzone {
    constructor(scene, x, y, key, velocityY) {
        this.scene = scene;
        this.key = key;
        this.velocityY = velocityY;
        this.x = x;
        this.y = y;
        //this.setVisible(false);
        this.createLayers();
    }
    createLayers(){
            // creating two backgrounds will allow a continuous scroll
            var layer = this.scene.add.sprite(160, 0, this.key);
            layer.y = -284;
            layer.setScale(1);
            layer.setDepth(-2);
            this.scene.physics.world.enableBody(layer, 0);
            layer.body.velocity.y = this.velocityY;
            //this.layers.add(layer);
    }
    update(tackled){
      console.log(this.y);
      if(!touchdown){
        console.log(touchdown);
        //this.body.velocity.y = speed;
          if(tackled){
            //this.body.velocity.y = 0;
          }
          if (this.y > this.scene.game.config.height/2) {
            yards += 5;
            stars += 5;
            this.y = 0;
            console.log(this.y);
            //this.body.velocity.y = 0;
            touchdown = true;
            console.log("TD!!!!");
          }
      }
    }
  }*/

  /*class endzone extends Entity {
    constructor(scene, x, y, velocityY) {
      super(scene, x, y, "endzone", "endzone");
      this.body.velocity.y = velocityY;
      //this.play("endzone");
      this.setData("typePickupEndzone", true);
      this.setDepth(-1);
    }
    update(){
      if(!touchdown && activateEndzone){
        this.body.velocity.y = speed;
        if(this.y > this.scene.game.config.height/2){
          //this.destroy();
          touchdown = true;
          stars += upgradeContract*100 + 100;
          upgradeBlocker = 0;
          this.body.velocity.y = 0;
        }
      }
    }
    playSound(){
      this.scene.sfx.pickups[2].play();
    }
  }*/

  class BeastmodeFire extends Entity {
    constructor(scene, x, y, velocityY) {
      super(scene, x, y, "beastmodeFire", "beastmodeFire");
      this.body.velocity.y = velocityY;
      //this.play("pickupSpin");
      //this.setData("typePickupSpin", true);
      this.setDepth(-1);
    }
    update(){
      this.body.velocity.y = 500;
      if(this.y > this.scene.game.config.height){
        this.destroy();
      }
    }
  }

  class Mud extends Entity {
    constructor(scene, x, y, velocityY) {
      super(scene, x, y, "fieldMud", "mud");
      this.body.velocity.y = velocityY;
      //this.setDepth(-1);
      //this.body.setSize(50, 50, false);
    }
    update(){
      this.x += moveX;
      this.y += moveY;
      this.body.velocity.y = 0;
      this.body.velocity.x = 0;
    }
  }