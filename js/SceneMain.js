
class SceneMain extends Phaser.Scene {
    constructor() {
      super({ key: "SceneMain" });
      //by me...

    }
    
    preload() {
              //by me reset score...
              if(bonusLevel == 1){
                speedOriginal = 250;
                speedXEnemy = 75;
              }
              if(bonusLevel == 2){
                speedOriginal = 275;
                speedXEnemy = 80;
              }
              if(bonusLevel == 3){
                speedOriginal = 300;
                speedXEnemy = 90;
              }
              if(bonusLevel == 4){
                speedOriginal = 400;
                speedXEnemy = 100;
              }

              if(level == 2){
                speedOriginal = 225;
                speedXEnemy = 55;
              }
              if(level == 3){
                speedOriginal = 250;
                speedXEnemy = 60;
              }
              if(level == 4){
                speedOriginal = 300;
                speedXEnemy = 70;
              }
              if(level == 5){
                speedOriginal = 350;
                speedXEnemy = 75;
              }
              if(level == 6){
                speedOriginal = 400;
                speedXEnemy = 80;
              }
              if(level > 6){
                speedOriginal = 450;
                speedXEnemy = 100;
              }
              score = 0;
              speed = speedOriginal;
              strength = upgradeStrength;
              speedBoost = upgradeSpeed*50 + 200;
        //this.load.image("endzone", "content/endzone.png");
        this.load.image("bgBonus", "content/bgBonus.png");
        this.load.image("field_alley", "content/field_alley.jpg");
        this.load.image("field_alley_line", "content/field_alley_line.png");
        //this.load.image("pickupSpin", "content/pickupSpin.png");
        this.load.image("pickupBoost", "content/pickup_boost2.png");
        this.load.image("scoreboard", "content/scoreboard.png");
        this.load.image("star_icon", "content/star_icon.png");
        this.load.image("barBeastmode", "content/barBeastmode.png");
        this.load.image("barBoost", "content/barBoost.png");
        this.load.image("beastmodeFire", "content/beastmode_fire.png");
        this.load.image("iconBeastmode", "content/iconBeastmode.png");
        this.load.image("iconStrength", "content/iconStrength.png");
        this.load.image("iconSpin", "content/spinIcon.png");
        this.load.image("iconBoost", "content/iconBoost.png");
        this.load.image("iconStiffArm", "content/iconStiffArm.png");
        //this.load.image("instructions1", "content/instructions1.png");
        //this.load.image("instructions2", "content/instructions2.png");
        this.load.image("buttonSound1", "content/buttonSound1.png");
        this.load.image("buttonSound2", "content/buttonSound2.png");
              //end by me
        this.load.image("sprBg0", "content/sprBg0.png");
        this.load.image("sprBg1", "content/sprBg1.png");
        this.load.spritesheet("sprExplosion", "content/sprExplosion.png", {
          frameWidth: 32,
          frameHeight: 32
        });
        //by me...
        this.load.spritesheet("tackled", "content/rb_tackled.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        //
        this.load.spritesheet("sprEnemy0", "content/sprEnemy0.png", {
          frameWidth: 16,
          frameHeight: 16
        });
        //this.load.image("sprEnemy1", "content/sprEnemy1.png");
        //by me...
        this.load.spritesheet("sprRunLb", "content/sprRunLb.png", {
          frameWidth: 120,
          frameHeight: 120
        });
        this.load.spritesheet("lbBlasted", "content/lbBlasted.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("lbRun", "content/lbRun.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("lbCelebration", "content/lbCelebration.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("lbDiveTackle", "content/lbDiveTackle.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("lbStand", "content/lbStand.png", {
          frameWidth: 120,
          frameHeight: 120
        });
        this.load.spritesheet("linemanRun", "content/linemanRun.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("pickupBeastMode", "content/pickup_beastmode.png", {
          frameWidth: 40,
          frameHeight: 42
        });
        this.load.spritesheet("endzone", "content/endzone.png", {
          frameWidth: 320,
          frameHeight: 568
        });
        this.load.spritesheet("pickupSpin", "content/pickupSpin.png", {
          frameWidth: 40,
          frameHeight: 37
        });
        this.load.spritesheet("rbSpin", "content/spin_move.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("rbTackled", "content/tackled.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("rbCelebration", "content/rbCelebration.png", {
          frameWidth: 120,
          frameHeight: 120
        });
        //
        this.load.spritesheet("sprEnemy2", "content/sprEnemy2.png", {
          frameWidth: 16,
          frameHeight: 16
        });
        this.load.image("sprLaserEnemy0", "content/sprLaserEnemy0.png");
        this.load.image("sprLaserPlayer", "content/sprLaserPlayer.png");
        //this.load.spritesheet("sprPlayer", "content/sprPlayer.png", {
        this.load.spritesheet("sprRun_back100", "content/sprRun_back100.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.audio("hit", "content/hit.mp3");
        this.load.audio("sndTackled", "content/sndTackled.mp3");
        this.load.audio("sndCrowd", "content/sndCrowd.mp3");
        this.load.audio("sndFire", "content/sndFire.mp3");
        this.load.audio("sndPowerUp", "content/sndPowerUp.mp3");
        this.load.audio("sndPing", "content/sndPing.mp3");
        this.load.audio('themeSong', 'content/LinebackerAlleySong.mp3');
        //this.load.audio("sndExplode0", "content/sndExplode0.wav");
//this.load.audio("sndExplode1", "content/sndExplode1.wav");
//this.load.audio("sndLaser", "content/sndLaser.wav");
    }

    

    create() {
      //by me...
      particles = this.add.particles('star_icon');

      particles.createEmitter({
        /*x: 100,
        y: 100,
        lifespan: 5000,
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'*/


        //angle: { min: 0, max: 360, steps: 32 },
        lifespan: 1000,
        speed: 150,
        quantity: 32,
        scale: { start: 1, end: 0 },
        on: false
      });
      
      //emitter.on = false;
        
      //this.add.image(this.game.config.width * 0.5 + 145, 15, 'star_icon');
      this.add.image(this.game.config.width * 0.5,this.game.config.height * 0.5, 'bgBonus');
      this.add.image(this.game.config.width * 0.5 - 160,0, 'scoreboard').setOrigin(0.0, 0.0);
      soundButton1 = this.add.image(this.game.config.width * 0.5 + 145, 40, 'buttonSound1');
      //soundButton2 = this.add.image(this.game.config.width * 0.5 + 145, 40, 'buttonSound2');
      soundButton1.setInteractive();
      soundButton1.on("pointerover", function() {
        //soundButton1.setTexture("soundButton1");
      }, this);
      soundButton1.on("pointerout", function() {
        //soundButton1.setTexture("soundButton1");
      }, this);
      soundButton1.on("pointerdown", function() {
        //soundButton1.setTexture("soundButton1");
      }, this);

      soundButton1.on("pointerup", function() {
        soundButton1.setTexture("buttonSound1");
        if(muted == 1){
          muted = 0;
          soundButton1.setAlpha(0.5);
        }else if(muted == 0){
          muted = 1;
          soundButton1.setAlpha(1);
        }
      }, this);
      
      
      buttonBoost = this.add.image(this.game.config.width * 0.5 - 135, 250, 'iconBoost');
      buttonBoost.setInteractive();
      buttonBoost.on("pointerover", function() {
        
      }, this);
      buttonBoost.on("pointerout", function() {
        
      }, this);
      buttonBoost.on("pointerdown", function() {
        if(mobile){
          if (boostCount > 0 && !tackled && !touchdown) {
            boosting = true;
            console.log(boosting);
          }
        }
      }, this);

      buttonBoost.on("pointerup", function() {
          boosting = false;
      }, this);
      //
      buttonSpin = this.add.image(this.game.config.width * 0.5 - 135, 300, 'iconSpin');
      buttonSpin.setInteractive();
      buttonSpin.on("pointerover", function() {
        
      }, this);
      buttonSpin.on("pointerout", function() {
        
      }, this);
      buttonSpin.on("pointerdown", function() {
        
      }, this);

      buttonSpin.on("pointerup", function() {
        if(mobile){
          if(spinCount > 0 && !spinning && !tackled && !touchdown){
            spinCount -= 1;
            spinning = true;
            this.player.setData("isSpinning", true);
          }
        }
      }, this);


      //spinIcon = this.add.sprite(this.game.config.width * 0.5 - 135, 300, "iconSpin");
      stiffArmIcon = this.add.sprite(this.game.config.width * 0.5 - 135, 250, "iconStiffArm");
      stiffArmIcon.visible = false;
      strengthIcon = this.add.sprite(this.game.config.width * 0.5 - 140, 75, "iconStrength");
      //boostIcon = this.add.sprite(this.game.config.width * 0.5 - 135, 250, "iconBoost");
      //boostIcon.visible = false;
      buttonBoost.visible = false;
      //this.add.image(15,400, "barBeastmode");
      beastmodeIcon = this.add.sprite(this.game.config.width * 0.5 - 140, 500, "iconBeastmode").setOrigin(0.5, 1.0);
      beastmodeIcon.visible = false;
      beastmodeBar = this.add.sprite(this.game.config.width * 0.5 - 140, 450, "barBeastmode").setOrigin(0, 1.0);
      beastmodeBar.visible = false;
      boostBar = this.add.sprite(this.game.config.width * 0.5 - 140, 225, "barBoost").setOrigin(0, 1.0);
      boostBar.visible = false;
      //pickupBoost = this.add.sprite(50,50, "pickupBoost");
      //var rect = new Phaser.Geom.Rectangle(10, 200, 10, beastmode_time);
      //var updates...
      beastmode_time = upgradeBeastmode*50 + 150;

        this.anims.create({
            key: "sprEnemy0",
            frames: this.anims.generateFrameNumbers("sprEnemy0"),
            frameRate: 20,
            repeat: -1
          });
          //by me..
          this.anims.create({
            key: "lbRun",
            frames: this.anims.generateFrameNumbers("lbRun"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "lbBlasted",
            frames: this.anims.generateFrameNumbers("lbBlasted"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "lbCelebration",
            frames: this.anims.generateFrameNumbers("lbCelebration"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "lbDiveTackle",
            frames: this.anims.generateFrameNumbers("lbDiveTackle"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "lbStand",
            frames: this.anims.generateFrameNumbers("lbStand"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "pickupBeastMode",
            frames: this.anims.generateFrameNumbers("pickupBeastMode"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "pickupSpin",
            frames: this.anims.generateFrameNumbers("pickupSpin"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "rbSpin",
            frames: this.anims.generateFrameNumbers("rbSpin"),
            frameRate: 30,
            repeat: 0
          });
          this.anims.create({
            key: "rbTackled",
            frames: this.anims.generateFrameNumbers("tackled"),
            frameRate: 30,
            repeat: 0
          });
          this.anims.create({
            key: "rbCelebration",
            frames: this.anims.generateFrameNumbers("rbCelebration"),
            frameRate: 30,
            repeat: 0
          });
          //
          this.anims.create({
            key: "sprEnemy2",
            frames: this.anims.generateFrameNumbers("sprEnemy2"),
            frameRate: 20,
            repeat: -1
          });
          this.anims.create({
            key: "sprExplosion",
            frames: this.anims.generateFrameNumbers("sprExplosion"),
            frameRate: 20,
            repeat: 0
          });
          this.anims.create({
            key: "sprRun_back100",
            frames: this.anims.generateFrameNumbers("sprRun_back100"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "linemanRun",
            frames: this.anims.generateFrameNumbers("linemanRun"),
            frameRate: 30,
            repeat: -1
          });
          this.sfx = {
            explosions: [
              this.sound.add("hit"),
              this.sound.add("sndTackled"),
              //this.sound.add("sndExplode0"),
              //this.sound.add("sndExplode1")
            ],
            pickups: [
              this.sound.add("sndPowerUp"),
              this.sound.add("sndFire"),
              this.sound.add("sndPing"),
              this.sound.add("sndCrowd"),
              //this.sound.add("sndExplode0"),
              //this.sound.add("sndExplode1")
            ],
            theme: [
              this.sound.add("themeSong"),
            ],
            //laser: this.sound.add("sndLaser")
          };
          if(!musicLoaded){
            this.sfx.theme[0].loop = true;
            this.sfx.theme[0].play();
            this.sfx.theme[0].setVolume(muted);
            musicLoaded = true;
          }
          this.sound.setVolume(muted);
          this.backgrounds = [];
            //for (var i = 0; i < 5; i++) { // create five scrolling backgrounds
            //var bg = new ScrollingBackground(this, "sprBg0", i * 10);
            var bg = new movingBackground(this, "field_alley", 200);
            this.backgrounds.push(bg);
            var bgYardline = new movingYardline(this, "field_alley_line", 200);
            this.backgrounds.push(bgYardline);
            //var bgEndzone = new movingEndzone(this,160,-284, "endzone", 200);
            //this.backgrounds.push(bgEndzone);
            //}
          this.player = new Player(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.75,
            "sprRun_back100"
          ); 
          //by me...
          //this.player.body.setSize(30, 30, 40,40);
         // this.player.body.immovable = true;
         if(upgradeBlocker > 0){
          this.lineman = new Lineman(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.50,
            "linemanRun"
          ); 
         }
         //}
          //
          this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
            this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
            this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
            //this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
            //by me...
            this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
            this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
            this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

            this.enemies = this.add.group();
            this.pickups = this.add.group();
            /*var pickupEndzone = null;
                            pickupEndzone = new endzone(
                              this,
                              this.game.config.width * 0.5,
                              -284,
                              0
                            );
                          if (pickupEndzone !== null) {
                            pickupEndzone.setScale(1);
                            this.pickups.add(pickupEndzone);
                          }*/

            //this.enemyLasers = this.add.group();
            //this.playerLasers = this.add.group();

            this.time.addEvent({
                delay: 750,
                callback: function() {
                  if(!tackled && !touchdown){
                    if(this.enemies.getChildren().length < 3){
                      var enemy = null;
  
  
  
                          enemy = new ChaserShip(
                            this,
                            //Phaser.Math.Between(0, this.game.config.width),
                            Phaser.Math.Between(this.game.config.width * 0.5 - 160, this.game.config.width * 0.5 + 160),
                            0,
                            speed
                          );
  
                          var pickup = null;
                          if(pickupCounter == 20){
                            pickup = new pickupSpin(
                              this,
                              Phaser.Math.Between(this.game.config.width * 0.5 - 160, this.game.config.width * 0.5 + 160),
                              0,
                              speed
                            );
                          }
                          if(pickupCounter == 40){
                            pickup = new pickupBeastMode(
                              this,
                              Phaser.Math.Between(this.game.config.width * 0.5 - 160, this.game.config.width * 0.5 + 160),
                              0,
                              speed
                            );
                          }
                          if(pickupCounter == 60){
                            pickup = new pickupBoost(
                              this,
                              Phaser.Math.Between(this.game.config.width * 0.5 - 160, this.game.config.width * 0.5 + 160),
                              0,
                              speed
                            );
                          }
                          if (pickup !== null) {
                            //pickupCounter += 1;
                            pickup.setScale(1);
                            this.pickups.add(pickup);
                            //if(pickupCounter > 2){
                             // pickupCounter = 0;
                            //}
                          }
  
  
  
                      if (enemy !== null) {
                        pickupCounter += 1;
                        if(pickupCounter > 60){
                          pickupCounter = 0;
                        }
                        //enemy.setScale(Phaser.Math.Between(10, 20) * 0.1);
                        enemy.setScale(1);
                        this.enemies.add(enemy);
                      }
                    }
                  }
            
                },
                callbackScope: this,
                loop: true
              });
        /*this.physics.add.collider(this.playerLasers, this.enemies, function(playerLaser, enemy) {
            if (enemy) {
                if (enemy.onDestroy !== undefined) {
                  enemy.onDestroy();
                }
                enemy.explode(true);
                playerLaser.destroy();
                //by me...
                score += 1;
                console.log(score);
                //
              }
        });*/
        this.physics.add.collider(this.player, this.enemies, function(player, enemy) {
        //this.physics.add.overlap(this.player, this.enemies, function(player, enemy) {
            if (!player.getData("isDead") && !enemy.getData("isDead")) {
                  if(!spinning && !beastmode && !touchdown && strength < 1 && !enemy.getData("blasted") && !invincible){
                    //player.explode(false);
                    player.setData("isTackled", true);
                    player.onDestroy();
                    //by me...
                    speed = 0;
                    enemy.celebrate();
                    tackled = true;
                    upgradeBlocker = 0;
                    if(bonusLevel == 1){
                      unlockedLevel3 = true;
                    }
                    if(bonusLevel == 2){
                      unlockedLevel5 = true;
                    }
                    if(bonusLevel == 3){
                      unlockedLevel7 = true;
                    }
                    if(bonusLevel == 4){
                      unlockedLevel9 = true;
                    }
                  }
                  if(strength > 0 && !beastmode){
                    if(!enemy.getData("blasted")){
                      strength -= 1;
                      enemy.setData("blasted", true);
                      /*
                      PokiSDK.happyTime(0.1);
                      */
                    }
                  }
                  if(beastmode){
                    //createParticle.
                    if(!enemy.getData("blasted")){
                      particles.emitParticleAt(player.x, player.y);
                    }  
                    /*
                    PokiSDK.happyTime(0.5);
                    */
                    enemy.setData("blasted", true);               
                  }
              //enemy.explode(true);
            }
          });
          this.physics.add.overlap(this.player, this.pickups, function(player, pickup) {
            if (!player.getData("isDead")) {
              //by me...
              if(pickup.getData("typePickupSpin")){
                spinCount += upgradeSkills + 1;
                pickup.playSound();
                pickup.destroy();
              }
              if(pickup.getData("typePickupBeastMode")){
                speed = speedOriginal + 500;
                beastmode = true;
                beastmode_count_max = 0;
                pickup.playSound();
                pickup.destroy();
              }
              if(pickup.getData("typePickupBoost")){
                boostCount = 100;
                pickup.playSound();
                pickup.destroy();
              }
              if(pickup.getData("typePickupEndzone")){
                invincible = true;
              }
            }
          });
          //lineman hit lb...
          if(upgradeBlocker > 0){
            this.physics.add.overlap(this.lineman, this.enemies, function(lineman, enemy) {
              if (!lineman.getData("isDead") && !enemy.getData("isDead")) {
                      //createParticle.
                      if(!enemy.getData("blasted")){
                        particles.emitParticleAt(lineman.x, lineman.y);
                      }  
                      enemy.setData("blasted", true);               
                //enemy.explode(true);
              }
            });
          }
          //end lineman hit lb
          /*this.physics.add.overlap(this.player, this.enemyLasers, function(player, laser) {
            if (!player.getData("isDead") &&
                !laser.getData("isDead")) {
              player.explode(false);
              player.onDestroy();
              laser.destroy();
            }
          });*/
          //by me... score
          this.scoreBox = this.add.text(this.game.config.width * 0.5 - 150, 10, 'Yards: ' + yards, {
            fontFamily: 'arial',
            fontSize: 18,
            //fontStyle: 'bold',
            color: '#ffffff',
            align: 'left'
          });
          this.scoreBox.setOrigin(0.0);
          //to go...
          /*
          this.nextTdText = this.add.text(this.game.config.width * 0.5 - 150, 50, 'Next TD: ' + touchdownYards, {
            fontFamily: 'arial',
            fontSize: 12,
            //fontStyle: 'bold',
            color: '#ffff00',
            align: 'left'
          });
          this.nextTdText.setOrigin(0.0);
          */
          //
          //down...
          /*
          this.downText = this.add.text(this.game.config.width * 0.5 - 150, 30, 'Down: ' + down, {
            fontFamily: 'arial',
            fontSize: 12,
            fontStyle: 'bold',
            color: '#ff0000',
            align: 'left'
          });
          this.nextTdText.setOrigin(0.0);
          */
          //
          //by me... starsText
          this.starsText = this.add.text(this.game.config.width * 0.5 + 130, 6, "$ " + stars, {
            fontFamily: 'arial',
            fontSize: 15,
            fontStyle: 'bold',
            color: '#ffff00',
            align: 'right'
          });
          this.starsText.setOrigin(1.0,0.0);
          //by me... spinsText
          this.spinsText = this.add.text(this.game.config.width * 0.5 - 130, 325, spinCount, {
            fontFamily: 'arial',
            fontSize: 18,
            fontStyle: 'bold',
            color: '#cbcbff',
            align: 'left'
          });
          this.spinsText.setOrigin(1.0,0.0);
          //
          /*if(level == 1){
            instructions1 = this.add.sprite(this.game.config.width * 0.5, 200, "instructions1");
            instructions1.setOrigin(0.5,0.0);
            instructions2 = this.add.sprite(this.game.config.width * 0.5, 200, "instructions2");
            instructions2.setOrigin(0.5,0.0);
            instructions2.visible = false;
          }*/
          if(mobile){
            game.input.addPointer();
            game.input.addPointer();
            game.input.addPointer();
            //button Right
            this.btnRt = this.add.sprite(this.game.config.width - 100,
              this.game.config.height - 125,
              "buttonArrowUp"
            );
            this.btnRt.setInteractive();
            this.btnRt.on("pointerover", function() {
              this.btnRt.setTexture("buttonArrowUp"); // set the button texture to sprBtnPlayHover
              mobileRight = true;
            }, this);
            this.btnRt.on("pointerout", function() {
              this.setTexture("buttonArrowUp");
              mobileRight = false;
            });
            this.btnRt.on("pointerdown", function() {
              this.btnRt.setTexture("buttonArrow");
              mobileRight = true;
  
            }, this);
            this.btnRt.on("pointerup", function() {
              this.btnRt.setTexture("buttonArrowUp");
              mobileRight = true;
            }, this);
            this.btnRt.angle = 90;
            //
            //button Left
            this.btnLt = this.add.sprite(this.game.config.width - 250,
              this.game.config.height - 125,
              "buttonArrowUp"
            );
            this.btnLt.setInteractive();
            this.btnLt.on("pointerover", function() {
              this.btnLt.setTexture("buttonArrowUp"); // set the button texture to sprBtnPlayHover
              mobileLeft = true;
            }, this);
            this.btnLt.on("pointerout", function() {
              this.setTexture("buttonArrowUp");
              mobileLeft = false;
            });
            this.btnLt.on("pointerdown", function() {
              this.btnLt.setTexture("buttonArrow");
              mobileLeft = true;
  
            }, this);
            this.btnLt.on("pointerup", function() {
              this.btnLt.setTexture("buttonArrowUp");
              mobileLeft = false;
            }, this);
            this.btnLt.angle = -90;
            //
          }

    }

    update(){
      //if(tackled && musicLoaded){
        //this.sfx.theme[0].destroy();
       // musicLoaded = false;
      //}
      /*if(level == 1){
        if(yards > 10){
          instructions1.visible = false;
        }
        if(yards > 10 && yards < 20){
          instructions2.visible = true;
        }
        if(yards > 20){
          instructions2.visible = false;
        }
      }*/
      //by me...
      //icons...
      /*if(emitterOn){
        emitterOnCount += 1;
        if(emitterOnCount > 30){
          emitter.on = false;
          emitterOnCount = 0;
          emitterOn = false;
        }
      }*/
      this.sound.setVolume(muted);
      /*if(muted == 0){
        soundButton1.visible = false;
        soundButton2.visible = true;
      }
      if(muted == 1){
        soundButton1.visible = true;
        soundButton2.visible = false;
      }*/
      if(strength <1){
        strengthIcon.visible = false;
      }
      if(touchdown){
        speed = 0;
      }
      this.scoreBox.setText('Yards: ' + yards);
      this.starsText.setText("$ " + stars);
      this.spinsText.setText(spinCount);
      //var graphics = this.add.graphics({ x: 0, y: 0 });
        //graphics.clear();
        if(boostCount > 0){
          boostBar.visible = true;
          //boostIcon.visible = true;
          buttonBoost.visible = true;
        }
        boostBar.displayHeight = (boostCount/100)*100;
      if(boosting && !tackled && !touchdown){
        speed = speedOriginal + speedBoost;
        boostCount -= 1;
      }
      if(boostCount <= 0){
        boosting = false;
        //boostIcon.visible = false;
        buttonBoost.visible = false;
        if(!beastmode && !tackled && !touchdown){
          speed = speedOriginal;
        }
      }

      if(beastmode){
        beastmodeIcon.visible = true;
        beastmodeBar.visible = true;
        beastmodeBar.displayHeight = ((beastmode_time - beastmode_count_max)/beastmode_time)*100;
        beastmode_count += 1;
        if(beastmode_count > beastmode_time){
          beastmode_count_max += 1;
        }
        if(!touchdown){
          var fire = null;
          fire = new BeastmodeFire(
            this,
            this.player.x,
            this.player.y,
            speed
          );
          fire.angle = Phaser.Math.Between(0, 360),
          this.pickups.add(fire);
        }
        //var graphics = this.add.graphics({ fillStyle: { color: 0xffaa00 } });
        //graphics.beginPath();
        //graphics.lineStyle(5, 0xFFFF00, 1.0);
        //graphics.fillStyle(0xffaa00, 1.0);
        //graphics.fillRect(10, 250, 10, beastmode_count);
        /*var heightOfBar = ((beastmode_time - beastmode_count_max)/beastmode_time)*100;
        graphics.clear();
        graphics.beginPath();
        graphics.fillStyle(0xffaa00, 1.0);
        graphics.fillRect(10, 250, 10, heightOfBar);
        graphics.closePath();*/
        if(beastmode_count_max > beastmode_time - 1){
          speed = speedOriginal;
          beastmode_count = 0;
          beastmode_count_max = 0;
          beastmodeIcon.visible = false;
          beastmodeBar.visible = false;
          beastmode = false;
          //graphics.clear();
        }
        //this.graphics.fillRectShape(rect);
      }
      //
        if (!this.player.getData("isDead")) {
            this.player.update();
            if(!mobile){
              if (this.keyS.isDown) {
                if(spinCount > 0 && !spinning && !tackled && !touchdown){
                  spinCount -= 1;
                  spinning = true;
                  this.player.setData("isSpinning", true);
                }
              }
              if (this.keyUp.isDown && boostCount > 0 && !tackled && !touchdown) {
                boosting = true;
              }
              if (!this.keyUp.isDown) {
                boosting = false;
                if(!beastmode && !tackled && !touchdown){
                  speed = speedOriginal;
                }
              }
              if(boostCount <= 0){
                boosting = false;
              }
              //else if (this.keyS.isDown) {
              //  this.player.moveDown();
              //}
              if (this.keyLeft.isDown && !tackled && !touchdown) {
                this.player.moveLeft();
              }
              else if (this.keyRight.isDown && !tackled && !touchdown) {
                this.player.moveRight();
              }
            }
            
            

          //MOBILE MOVEMENT...
          if(mobile){
            if(boostCount <= 0){
              boosting = false;
            }
            if (mobileLeft && !tackled && !touchdown) {
              this.player.moveLeft();
            }
            else if (mobileRight && !tackled && !touchdown) {
              this.player.moveRight();
            }


        }

        ///END MOBILE MOVEMENT
            
        }
        for (var i = 0; i < this.enemies.getChildren().length; i++) {
            var enemy = this.enemies.getChildren()[i];
            enemy.update(tackled);
            if (enemy.x < -enemy.displayWidth ||
                enemy.x > this.game.config.width + enemy.displayWidth ||
                enemy.y < -enemy.displayHeight * 4 ||
                enemy.y > this.game.config.height + enemy.displayHeight) {
                if (enemy) {
                  if (enemy.onDestroy !== undefined) {
                    enemy.onDestroy();
                  }
                  enemy.destroy();
                }
            }
        }
        /*for (var i = 0; i < this.enemyLasers.getChildren().length; i++) {
            var laser = this.enemyLasers.getChildren()[i];
            laser.update();
            if (laser.x < -laser.displayWidth ||
              laser.x > this.game.config.width + laser.displayWidth ||
              laser.y < -laser.displayHeight * 4 ||
              laser.y > this.game.config.height + laser.displayHeight) {
              if (laser) {
                laser.destroy();
              }
            }
          }*/
          /*for (var i = 0; i < this.playerLasers.getChildren().length; i++) {
            var laser = this.playerLasers.getChildren()[i];
            laser.update();
            if (laser.x < -laser.displayWidth ||
              laser.x > this.game.config.width + laser.displayWidth ||
              laser.y < -laser.displayHeight * 4 ||
              laser.y > this.game.config.height + laser.displayHeight) {
              if (laser) {
                laser.destroy();
              }
            }
          }*/
          for (var i = 0; i < this.backgrounds.length; i++) {
            this.backgrounds[i].update(tackled);
          }
          for (var i = 0; i < this.pickups.getChildren().length; i++) {
            this.pickups.getChildren()[i].update();
          }
    }

    getEnemiesByType(type) {
        var arr = [];
        for (var i = 0; i < this.enemies.getChildren().length; i++) {
          var enemy = this.enemies.getChildren()[i];
          if (enemy.getData("type") == type) {
            arr.push(enemy);
          }
        }
        return arr;
      }


  }