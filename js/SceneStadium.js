
class SceneStadium extends Phaser.Scene {
    constructor() {
      super({ key: "SceneStadium" });
      //by me...

    }
    
    preload() {
      if (this.sys.game.device.os.desktop){
        mobile = false;
      }
      else{
        mobile = true;
      }
              //by me reset score...
              if(level == 1){
                speedChase = 200;
                if(rank == 'Veteran'){
                  speedChase = 300;
                }
                if(rank == 'All Pro'){
                  speedChase = 355;
                }
              }
              if(level == 2){
                speedChase = 220;
                if(rank == 'Veteran'){
                  speedChase = 245;
                }
                if(rank == 'All Pro'){
                  speedChase = 360;
                }
              }
              if(level == 3){
                speedChase = 230;
                if(rank == 'Veteran'){
                  speedChase = 255;
                }
                if(rank == 'All Pro'){
                  speedChase = 365;
                }
              }
              if(level == 4){
                speedChase = 240;
                if(rank == 'Veteran'){
                  speedChase = 265;
                }
                if(rank == 'All Pro'){
                  speedChase = 370;
                }
              }
              if(level == 5){
                speedChase = 250;
                if(rank == 'Veteran'){
                  speedChase = 275;
                }
                if(rank == 'All Pro'){
                  speedChase = 375;
                }
              }
              if(level == 6){
                speedChase = 250;
                if(rank == 'Veteran'){
                  speedChase = 285;
                }
                if(rank == 'All Pro'){
                  speedChase = 375;
                }
              }
              if(level == 7){
                speedChase = 250;
                if(rank == 'Veteran'){
                  speedChase = 295;
                }
                if(rank == 'All Pro'){
                  speedChase = 375;
                }
              }
              if(level == 8){
                speedChase = 250;
                if(rank == 'Veteran'){
                  speedChase = 305;
                }
                if(rank == 'All Pro'){
                  speedChase = 380;
                }
              }
              if(level == 9){
                speedChase = 250;
                if(rank == 'Veteran'){
                  speedChase = 315;
                }
                if(rank == 'All Pro'){
                  speedChase = 385;
                }
              }
              if(level == 10){
                speedChase = 300;
                if(rank == 'Veteran'){
                  speedChase = 355;
                }
                if(rank == 'All Pro'){
                  speedChase = 390;
                }
              }
              score = 0;
              speed = speedOriginal;
              strength = upgradeStrength;
              speedBoost = upgradeSpeed*50 + 200;
        //this.load.image("endzone", "content/endzone.png");
        //this.load.image("field_alley", "content/field_alley.jpg");
        //this.load.image("field_alley_line", "content/field_alley_line.png");
        this.load.image("buttonArrow", "content/buttonArrow.png");
        this.load.image("buttonArrowUp", "content/buttonArrowUp.png");
        this.load.image("fieldMud", "content/fieldMud.png");
        this.load.image("fieldStadium", "content/fieldStadium.jpg");
        this.load.image("football", "content/football.png");
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
        this.load.image("instructions1", "content/instructions1.png");
        this.load.image("instructions2", "content/instructions2.png");
        this.load.image("instructions3", "content/instructions3.png");
        this.load.image("instructionsGo", "content/instructionsGo.png");
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
        this.load.spritesheet("lbRunUp", "content/lbRunUp.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("lbRunUpLt", "content/lbRunUpLt.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("lbRunUpRt", "content/lbRunUpRt.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("lbRunDownLt", "content/lbRunDownLt.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("lbRunDownRt", "content/lbRunDownRt.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("lbRunLt", "content/lbRunLt.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("lbRunRt", "content/lbRunRt.png", {
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
        this.load.spritesheet("lbDiveTackleLt", "content/lbTackleLt.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("lbDiveTackleUpLt", "content/lbTackleUpLt.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("lbDiveTackleUpRt", "content/lbTackleUpRt.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("lbDiveTackleRt", "content/lbTackleRt.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("lbDiveTackleDownRt", "content/lbTackleDownRt.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("lbDiveTackleDownLt", "content/lbTackleDownLt.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("lbDiveTackleUp", "content/lbTackleUp.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("lbStand", "content/lbStand.png", {
          frameWidth: 120,
          frameHeight: 120
        });
        this.load.spritesheet("lbStandUp", "content/lbStandUp.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("linemanRun", "content/linemanRun.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("pickupBeastMode", "content/pickup_beastmode.png", {
          frameWidth: 40,
          frameHeight: 42
        });
        /*this.load.spritesheet("endzone", "content/endzone.png", {
          frameWidth: 320,
          frameHeight: 568
        });*/
        this.load.spritesheet("pickupSpin", "content/pickupSpin.png", {
          frameWidth: 40,
          frameHeight: 37
        });
        this.load.spritesheet("rbRunDown", "content/rbRunDown.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("rbRunDownLt", "content/rbRunDownLt.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("rbRunDownRt", "content/rbRunDownRt.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("rbRunLt", "content/rbRunLt.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("rbRunRt", "content/rbRunRt.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("rbRunUpLt", "content/rbRunUpLt.png", {
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.spritesheet("rbRunUpRt", "content/rbRunUpRt.png", {
          frameWidth: 100,
          frameHeight: 100
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
        //this.load.audio("footballCatch","content/footballCatch.mp3");
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
      //this.add.image(this.game.config.width * 0.5, this.game.config.height * 0.5, 'fieldStadium');
      var arrayFieldX = [0,504  ,1008 ,-300,400  ,-500,660 ,470  ,800 ,-709,1751];
      var arrayFieldY = [0,-1000,-1020,-900,-1200,-850,-960,-1100,-800,-990,-1251];
      field = this.add.sprite(arrayFieldX[level], arrayFieldY[level], 'fieldStadium');
      var arrayMud1X = [0,0,99999 ,0,-1200,0,99999,0,99999,0,99999];
      var arrayMud1Y = [0,-1200,99999 ,-1800,-1000,300,99999,-600,99999,0,99999];
      var arrayMud2X = [0,99999,99999 ,200,-1100,99999,200,99999,99999,-900,99999];
      var arrayMud2Y = [0,99999,99999 ,-1900,-1200,99999,99999,-800,99999,0,99999];
      var arrayMud3X = [0,99999,99999 ,99999,99999,99999,99999,400,99999,300,99999];
      var arrayMud3Y = [0,99999,99999 ,99999,99999,99999,99999,-500,99999,-1200,99999];
      var arrayMud4X = [0,99999,99999 ,99999,99999,99999,99999,99999,99999,1100,99999];
      var arrayMud4Y = [0,99999,99999 ,99999,99999,99999,99999,99999,99999,-1900,99999];
      var arrayMud5X = [0,99999,99999 ,99999,99999,99999,99999,99999,99999,1200,99999];
      var arrayMud5Y = [0,99999,99999 ,99999,99999,99999,99999,99999,99999,-1800,99999];
        this.mudPies = this.add.group();
        var mud1 = null;
        mud1 = new Mud(this,arrayMud1X[level], arrayMud1Y[level],0);
        this.mudPies.add(mud1);
        //
        var mud2 = null;
        mud2 = new Mud(this,arrayMud2X[level], arrayMud2Y[level],0);
        this.mudPies.add(mud2);
        //
        var mud3 = null;
        mud3 = new Mud(this,arrayMud3X[level], arrayMud3Y[level],0);
        this.mudPies.add(mud3);
        //
        var mud4 = null;
        mud4 = new Mud(this,arrayMud4X[level], arrayMud4Y[level],0);
        this.mudPies.add(mud4);
        //
        var mud5 = null;
        mud5 = new Mud(this,arrayMud5X[level], arrayMud5Y[level],0);
        this.mudPies.add(mud5);
        //
      //}
      var arrayLb1X = [0,-300,-300,-300,0,-600,-600,-700,-1000,900,0];
      var arrayLb1Y = [0,0,0,0,0,0,0,300,200,9,400];
      var arrayLb2X = [0,300,300,900,100,600,600,700,100,1200,-200];
      var arrayLb2Y = [0,0,0,0,0,0,0,300,200,9,200];
      var arrayLb3X = [0,-600,-600,-600,-1000,-600,-600,0,-800,500,-400];
      var arrayLb3Y = [0,-200,-200,-200,-200,-200,-200,7,8,109,10];
      var arrayLb4X = [0,600,600,1200,600,600,600,200,0,700,-600];
      var arrayLb4Y = [0,-200,-200,-200,-200,-200,-200,7,8,19,-100];
      var arrayLb5X = [0,-1000,-1000,0,-1200,-600,0,-600,-608,190,-1000];
      var arrayLb5Y = [0,-400,-400,-400,-400,-400,-400,-1700,0,199,0];
      var arrayLb6X = [0,1200,1200,1000,1200,600,100,600,8,1099,-1200];
      var arrayLb6Y = [0,-400,-400,-400,-400,-400,-400,-1700,-80,-99,0];
      var arrayLb7X = [0,-400,-400,0,0,1000,-500,0,-1200,699,-1100];
      var arrayLb7Y = [0,-800,-800,-800,-800,-800,-800,-1970,-2088,-190,-210];
      var arrayLb8X = [0,400,400,1200,1200,1200,500,1000,1200,99,-900];
      var arrayLb8Y = [0,-800,-800,-800,-800,-800,-800,-1970,-2088,-99,-600];
      var arrayLb9X = [0,-900,-900,-1000,0,300,-1000,-1000,-600,0,0];
      var arrayLb9Y = [0,-1000,-1000,-1000,-1000,-1000,-1000,-2000,-2088,-999,0];
      var arrayLb10X = [0,900,900,600,-1200,1200,1000,600,600,9,-600];
      var arrayLb10Y = [0,-1000,-1000,-1000,-1000,-1000,-1000,-2000,-2088,399,-1810];
      var arrayLb11X = [0,0,0,0,0,0,0,0,0,0,0];
      var arrayLb11Y = [0,-1300,-1200,-1200,-1400,-1500,-1800,-2200,-2118,-2019,-1810];
      var arrayLb12X = [0,900,900,600,-1200,-1200,-1200,-1200,-1200,-1200,-1200];
      var arrayLb12Y = [0,-1000,-1000,-1000,-1000,-2000,-2000,-2000,-2000,-2000,-2000];
      var arrayLb13X = [0,900,900,600,-1200,1200,1200,1200,1200,1200,1200];
      var arrayLb13Y = [0,-1000,-1000,-1000,-1000,-2000,-2000,-2000,-2000,-2000,-2000];
      var arrayLb14X = [0,900,900,600,-1200,-600,-600,-600,-600,-600,-600];
      var arrayLb14Y = [0,-1000,-1000,-1000,-1000,-2000,-2000,-2000,-2000,-2000,-2000];
      var arrayLb15X = [0,900,900,600,-1200,600,600,600,600,600,600];
      var arrayLb15Y = [0,-1000,-1000,-1000,-1000,-2000,-2000,-2000,-2000,-2000,-2000];
      var arrayLb16X = [0,0,0,0,0,0,0,0,0,0,0];
      var arrayLb16Y = [0,-1000,-1000,-1000,-1000,-2000,-2000,-2000,-2000,-2000,-2000];
      var arrayLb17X = [0,-300,-300,-300,-300,-300,-300,-300,-300,-300,-300];
      var arrayLb17Y = [0,-1700,-1700,-1700,-1700,-1700,-1700,-1700,-1700,-1700,-1700];
      var arrayLb18X = [0,300,300,300,300,300,300,300,300,300,300];
      var arrayLb18Y = [0,1700,1700,1700,1700,1700,1700,1700,1700,1700,1700];
      var arrayLb19X = [0,900,900,600,-1200,1200,1000,600,600,9,-1000];
      var arrayLb19Y = [0,-1000,-1000,-1000,-1000,-1000,-1000,-2000,-2088,399,-2200];
      var arrayLbDist = [0, 500, 500, 500, 500, 500, 6000, 700, 800, 900, 1000];
        
      //this.add.image(950, 15, 'star_icon');
      this.add.image(0,0, 'scoreboard').setOrigin(0.0, 0.0);
      soundButton1 = this.add.image(this.game.config.width - 50, 40, 'buttonSound1');
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
      /*soundButton2.setInteractive();
      soundButton2.on("pointerup", function() {
        soundButton2.setTexture("soundButton2");
        muted = 1;
      }, this);*/

      buttonBoost = this.add.image(55, 250, 'iconBoost');
      buttonBoost.setInteractive();
      buttonBoost.on("pointerover", function() {
        
      }, this);
      buttonBoost.on("pointerout", function() {
        
      }, this);
      buttonBoost.on("pointerdown", function() {
        if(mobile){
          if (boostCount > 0 && !tackled && !touchdown) {
            boosting = true;
          }
        }
      }, this);

      buttonBoost.on("pointerup", function() {
        if(mobile){
          boosting = false;
        }
      }, this);
      //
      buttonSpin = this.add.image(55, 300, 'iconSpin');
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


      this.football = this.add.sprite(this.game.config.width * 0.5,0, "football");
      //spinIcon = this.add.sprite(55, 300, "iconSpin");
      stiffArmIcon = this.add.sprite(55, 250, "iconStiffArm");
      stiffArmIcon.visible = false;
      strengthIcon = this.add.sprite(50, 75, "iconStrength");
      //boostIcon = this.add.sprite(55, 250, "iconBoost");
      //boostIcon.visible = false;
      //this.add.image(15,400, "barBeastmode");
      beastmodeIcon = this.add.sprite(50, 500, "iconBeastmode").setOrigin(0.5, 1.0);
      beastmodeIcon.visible = false;
      beastmodeBar = this.add.sprite(50, 450, "barBeastmode").setOrigin(0, 1.0);
      beastmodeBar.visible = false;
      boostBar = this.add.sprite(50, 225, "barBoost").setOrigin(0, 1.0);
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
            key: "lbRunUp",
            frames: this.anims.generateFrameNumbers("lbRunUp"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "lbRunUpLt",
            frames: this.anims.generateFrameNumbers("lbRunUpLt"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "lbRunUpRt",
            frames: this.anims.generateFrameNumbers("lbRunUpRt"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "lbRunDownLt",
            frames: this.anims.generateFrameNumbers("lbRunDownLt"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "lbRunDownRt",
            frames: this.anims.generateFrameNumbers("lbRunDownRt"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "lbRunLt",
            frames: this.anims.generateFrameNumbers("lbRunLt"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "lbRunRt",
            frames: this.anims.generateFrameNumbers("lbRunRt"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "lbBlasted",
            frames: this.anims.generateFrameNumbers("lbBlasted"),
            frameRate: 30,
            repeat: 0
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
            repeat: 0
          });
          this.anims.create({
            key: "lbDiveTackleLt",
            frames: this.anims.generateFrameNumbers("lbDiveTackleLt"),
            frameRate: 30,
            repeat: 0
          });
          this.anims.create({
            key: "lbDiveTackleUpLt",
            frames: this.anims.generateFrameNumbers("lbDiveTackleUpLt"),
            frameRate: 30,
            repeat: 0
          });
          this.anims.create({
            key: "lbDiveTackleUp",
            frames: this.anims.generateFrameNumbers("lbDiveTackleUp"),
            frameRate: 30,
            repeat: 0
          });
          this.anims.create({
            key: "lbDiveTackleUpRt",
            frames: this.anims.generateFrameNumbers("lbDiveTackleUpRt"),
            frameRate: 30,
            repeat: 0
          });
          this.anims.create({
            key: "lbDiveTackleRt",
            frames: this.anims.generateFrameNumbers("lbDiveTackleRt"),
            frameRate: 30,
            repeat: 0
          });
          this.anims.create({
            key: "lbDiveTackleDownRt",
            frames: this.anims.generateFrameNumbers("lbDiveTackleDownRt"),
            frameRate: 30,
            repeat: 0
          });
          this.anims.create({
            key: "lbDiveTackleDownLt",
            frames: this.anims.generateFrameNumbers("lbDiveTackleDownLt"),
            frameRate: 30,
            repeat: 0
          });
          this.anims.create({
            key: "lbStand",
            frames: this.anims.generateFrameNumbers("lbStand"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "lbStandUp",
            frames: this.anims.generateFrameNumbers("lbStandUp"),
            frameRate: 30,
            repeat: 0
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
            key: "rbRunDown",
            frames: this.anims.generateFrameNumbers("rbRunDown"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "rbRunDownLt",
            frames: this.anims.generateFrameNumbers("rbRunDownLt"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "rbRunDownRt",
            frames: this.anims.generateFrameNumbers("rbRunDownRt"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "rbRunLt",
            frames: this.anims.generateFrameNumbers("rbRunLt"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "rbRunRt",
            frames: this.anims.generateFrameNumbers("rbRunRt"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "rbRunUpRt",
            frames: this.anims.generateFrameNumbers("rbRunUpRt"),
            frameRate: 30,
            repeat: -1
          });
          this.anims.create({
            key: "rbRunUpLt",
            frames: this.anims.generateFrameNumbers("rbRunUpLt"),
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
              //this.sound.add("footballCatch"),
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
            musicLoaded = true;
            this.sfx.theme[0].setVolume(0.2);
          }
          this.sound.setVolume(muted);
          /*this.backgrounds = [];
            var bg = new movingBackground(this, "field_alley", 200);
            this.backgrounds.push(bg);
            var bgYardline = new movingYardline(this, "field_alley_line", 200);
            this.backgrounds.push(bgYardline);*/

          this.player = new Player(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.75,
            "sprRun_back100"
          ); 
          //by me...
         if(upgradeBlockerLeft){
          this.linemanLt = new Lineman2(
            this,
            this.game.config.width * 0.5 - 75,
            this.game.config.height * 0.50,
            "linemanRun"
          ); 
         }
         if(upgradeBlockerCenter){
          this.linemanCntr = new Lineman2(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.45,
            "linemanRun"
          ); 
         }
         if(upgradeBlockerRight){
          this.linemanRt = new Lineman2(
            this,
            this.game.config.width * 0.5 + 75,
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
            this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
            this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
            this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

            //this.enemies = this.add.group();
            this.enemies = this.physics.add.group({
              bounceX: 0.3,
              bounceY: 0.3,
          });
          this.physics.add.collider(this.enemies, this.enemies);
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
            var lb = null;
            lb = new Linebacker(
              this,
              arrayFieldX[level] + arrayLb1X[level],
              arrayLb1Y[level],
              0
            );
            lb.setScale(1);
            var lb2 = null;
            lb2 = new Linebacker(
              this,
              arrayFieldX[level] + arrayLb2X[level],
              arrayLb2Y[level],
              0
            );
            lb2.setScale(1);

            var lb3 = null;
            lb3 = new Linebacker(
              this,
              arrayFieldX[level] + arrayLb3X[level],
              arrayLb3Y[level],
              0
            );
            lb.setScale(1);
            var lb4 = null;
            lb4 = new Linebacker(
              this,
              arrayFieldX[level] + arrayLb4X[level],
              arrayLb4Y[level],
              0
            );
            lb4.setScale(1);
            var lb5 = null;
            lb5 = new Linebacker(
              this,
              arrayFieldX[level] + arrayLb5X[level],
              arrayLb5Y[level],
              0
            );
            lb5.setScale(1);
            var lb6 = null;
            lb6 = new Linebacker(
              this,
              arrayFieldX[level] + arrayLb6X[level],
              arrayLb6Y[level],
              0
            );
            lb6.setScale(1);
            var lb7 = null;
            lb7 = new Linebacker(
              this,
              arrayFieldX[level] + arrayLb7X[level],
              arrayLb7Y[level],
              0
            );
            lb7.setScale(1);
            var lb8 = null;
            lb8 = new Linebacker(
              this,
              arrayFieldX[level] + arrayLb8X[level],
              arrayLb8Y[level],
              0
            );
            lb8.setScale(1);
            var lb9 = null;
            lb9 = new Linebacker(
              this,
              arrayFieldX[level] + arrayLb9X[level],
              arrayLb9Y[level],
              0
            );
            lb9.setScale(1);
            var lb10 = null;
            lb10 = new Linebacker(
              this,
              arrayFieldX[level] + arrayLb10X[level],
              arrayLb10Y[level],
              0
            );
            lb10.setScale(1);
            var lb11 = null;
            lb11 = new Linebacker(
              this,
              arrayFieldX[level] + arrayLb11X[level],
              arrayLb11Y[level],
              0
            );
            lb11.setScale(1);
            //extra backers...
            if(level > 4){
                var lb12 = null;
                lb12 = new Linebacker(this,arrayFieldX[level] + arrayLb12X[level],arrayLb12Y[level],0);
                lb12.setScale(1);
                //
                var lb13 = null;
                lb13 = new Linebacker(this,arrayFieldX[level] + arrayLb13X[level],arrayLb13Y[level],0);
                lb13.setScale(1);
            }
            if(level > 6){
              var lb14 = null;
              lb14 = new Linebacker(this,arrayFieldX[level] + arrayLb14X[level],arrayLb14Y[level],0);
              lb14.setScale(1);
              //
              var lb15 = null;
              lb15 = new Linebacker(this,arrayFieldX[level] + arrayLb15X[level],arrayLb15Y[level],0);
              lb15.setScale(1);
            }
            if(level > 8){
              var lb16 = null;
              lb16 = new Linebacker(this,arrayFieldX[level] + arrayLb16X[level],arrayLb16Y[level],0);
              lb16.setScale(1);
              //
              var lb17 = null;
              lb17 = new Linebacker(this,arrayFieldX[level] + arrayLb17X[level],arrayLb17Y[level],0);
              lb17.setScale(1);
            }
            if(level == 10){
              var lb18 = null;
              lb18 = new Linebacker(this,arrayFieldX[level] + arrayLb18X[level],arrayLb18Y[level],0);
              lb18.setScale(1);
              //
              var lb19 = null;
              lb19 = new Linebacker(this,arrayFieldX[level] + arrayLb19X[level],arrayLb19Y[level],0);
              lb19.setScale(1);
            }
            

            this.enemies.add(lb);
            this.enemies.add(lb2);
            this.enemies.add(lb3);
            this.enemies.add(lb4);
            this.enemies.add(lb5);
            this.enemies.add(lb6);
            this.enemies.add(lb7);
            this.enemies.add(lb8);
            this.enemies.add(lb9);
            this.enemies.add(lb10);
            this.enemies.add(lb11);
            if(level > 4){
              this.enemies.add(lb12);
              this.enemies.add(lb13);
            }
            if(level > 6){
              this.enemies.add(lb14);
              this.enemies.add(lb15);
            }
            if(level > 8){
              this.enemies.add(lb16);
              this.enemies.add(lb17);
            }
            if(level == 10){
              this.enemies.add(lb18);
              this.enemies.add(lb19);
            }

            this.time.addEvent({
                delay: 1000000,
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
                          if(pickupCounter == 3){
                            pickup = new pickupSpin(
                              this,
                              Phaser.Math.Between(this.game.config.width * 0.5 - 160, this.game.config.width * 0.5 + 160),
                              0,
                              speed
                            );
                          }
                          if(pickupCounter == 9){
                            pickup = new pickupBeastMode(
                              this,
                              Phaser.Math.Between(this.game.config.width * 0.5 - 160, this.game.config.width * 0.5 + 160),
                              0,
                              speed
                            );
                          }
                          if(pickupCounter == 18){
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
                        if(pickupCounter > 18){
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
        //mud
        this.physics.add.overlap(this.mudPies, this.enemies, function(mud, enemy) {
          if (!enemy.getData("isDead")) {
            enemy.setData("muddyFactor", 0.5);
          }
        });
        //mud
        //mud
        this.physics.add.overlap(this.mudPies, this.player, function(mud, player) {
          muddyFactor = 0.5;
          if (!player.getData("isDead")) {

          }
        });
        //mud
        this.physics.add.collider(this.player, this.enemies, function(player, enemy) {
        //this.physics.add.overlap(this.player, this.enemies, function(player, enemy) {
            if (!player.getData("isDead") && !enemy.getData("isDead")) {
                  if(!spinning && !beastmode && !touchdown && strength < 1 && !enemy.getData("blasted") && !enemy.getData("isStandingUp") && !invincible){
                    //player.explode(false);
                    player.setData("isTackled", true);
                    player.onDestroy();
                    //by me...
                    speed = 0;
                    enemy.celebrate();
                    tackled = true;
                    upgradeBlocker = 0;
                    //new for LA2
                    upgradeBlockerLeft = false;
                    upgradeBlockerCenter = false;
                    upgradeBlockerRight = false;
                    //
                  }
                  if(strength > 0 && !beastmode){
                    if(!enemy.getData("blasted")){
                      strength -= 1;
                      enemy.setData("blasted", true);
                      //PokiSDK.happyTime(0.1);
                    }
                  }
                  if(beastmode){
                    //createParticle.
                    if(!enemy.getData("blasted")){
                      particles.emitParticleAt(player.x, player.y);
                    }  
                   // PokiSDK.happyTime(0.5);
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
          //linemanLT hit lb...
          if(upgradeBlockerLeft){
            //this.physics.add.collider(this.linemanLt, this.player);
            this.physics.add.overlap(this.linemanLt, this.enemies, function(linemanLt, enemy) {
              if (!linemanLt.getData("isDead") && !enemy.getData("isDead")) {
                      //createParticle.
                      if(!enemy.getData("blasted")){
                        particles.emitParticleAt(linemanLt.x, linemanLt.y);
                      }  
                      enemy.setData("blasted", true);               
              }
            });
          }
          //end linemanLT hit lb
          //linemanCenter hit lb...
          if(upgradeBlockerCenter){
            //this.physics.add.collider(this.linemanCntr, this.player);
            this.physics.add.overlap(this.linemanCntr, this.enemies, function(linemanCntr, enemy) {
              if (!linemanCntr.getData("isDead") && !enemy.getData("isDead")) {
                      //createParticle.
                      if(!enemy.getData("blasted")){
                        particles.emitParticleAt(linemanCntr.x, linemanCntr.y);
                      }  
                      enemy.setData("blasted", true);               
              }
            });
          }
          //end linemanCnter hit lb

          //linemanRt hit lb...
          if(upgradeBlockerRight){
            //this.physics.add.collider(this.linemanRt, this.player);
            this.physics.add.overlap(this.linemanRt, this.enemies, function(linemanRt, enemy) {
              if (!linemanRt.getData("isDead") && !enemy.getData("isDead")) {
                      //createParticle.
                      if(!enemy.getData("blasted")){
                        particles.emitParticleAt(linemanRt.x, linemanRt.y);
                      }  
                      enemy.setData("blasted", true);               
              }
            });
          }
          //end linemanRt hit lb

          /*this.physics.add.overlap(this.player, this.enemyLasers, function(player, laser) {
            if (!player.getData("isDead") &&
                !laser.getData("isDead")) {
              player.explode(false);
              player.onDestroy();
              laser.destroy();
            }
          });*/
          //by me... score
          this.scoreBox = this.add.text(50, 10, 'Money', {
            fontFamily: 'arial',
            fontSize: 12,
            //fontStyle: 'bold',
            color: '#ffffff',
            align: 'left'
          });
          this.scoreBox.setOrigin(0.0);
          //to go...
          this.moneyText = this.add.text(50, 25, '$ ' + stars, {
            fontFamily: 'arial',
            fontSize: 15,
            //fontStyle: 'bold',
            color: '#ffff00',
            align: 'left'
          });
          this.moneyText.setOrigin(0.0);
          //
          //down...
          this.rankText = this.add.text(200, 15, 'RANK', {
            fontFamily: 'arial',
            fontSize: 12,
            fontStyle: 'bold',
            color: '#ff0000',
            align: 'left'
          });
          this.rankText.setOrigin(0.0);
          this.rankText2 = this.add.text(200, 25, '"' + rank + '"', {
            fontFamily: 'arial',
            fontSize: 15,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'left'
          });
          this.rankText2.setOrigin(0.0);
          //
          //by me... starsText
          /*
          this.starsText = this.add.text(900, 6, stars, {
            fontFamily: 'arial',
            fontSize: 15,
            fontStyle: 'bold',
            color: '#ffff00',
            align: 'right'
          });
          this.starsText.setOrigin(1.0,0.0);
          */
          //by me... spinsText
          this.spinsText = this.add.text(60, 325, spinCount, {
            fontFamily: 'arial',
            fontSize: 18,
            fontStyle: 'bold',
            color: '#cbcbff',
            align: 'left'
          });
          this.spinsText.setOrigin(1.0,0.0);
          //
          instructionsCount = 0;
          if(level == 1 && rank == "Rookie"){
            instructions1 = this.add.sprite(this.game.config.width * 0.5, 100, "instructions1");
            instructions1.setOrigin(0.5,0.0);
            instructions2 = this.add.sprite(this.game.config.width * 0.5, 150, "instructions2");
            instructions2.setOrigin(0.5,0.0);
            instructions3 = this.add.sprite(this.game.config.width * 0.5, 200, "instructions3");
            instructions3.setOrigin(0.5,0.0);
            //instructions2.visible = false;
          }else{
            instructionsGo = this.add.sprite(this.game.config.width * 0.5, 150, "instructionsGo");
            instructionsGo.setOrigin(0.5,0.0);
          }

          //dpad arrows...mobile controls...
          if(mobile){
            game.input.addPointer();
            game.input.addPointer();
            game.input.addPointer();
            this.btnUp = this.add.sprite(this.game.config.width - 175,
              this.game.config.height - 250,
              "buttonArrowUp"
            );
            this.btnUp.setInteractive();
            this.btnUp.on("pointerover", function() {
              this.btnUp.setTexture("buttonArrowUp"); // set the button texture to sprBtnPlayHover
               // play the button over sound
               mobileUp = true;
            }, this);
            this.btnUp.on("pointerout", function() {
              this.setTexture("buttonArrowUp");
              mobileUp = false;
            });
            this.btnUp.on("pointerdown", function() {
              this.btnUp.setTexture("buttonArrow");
              mobileUp = true;
  
            }, this);
            this.btnUp.on("pointerup", function() {
              this.btnUp.setTexture("buttonArrowUp");
              mobileUp = false;
            }, this);

            //button Right
            this.btnRt = this.add.sprite(this.game.config.width - 100,
              this.game.config.height - 175,
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
              this.game.config.height - 175,
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
            this.btnDn = this.add.sprite(this.game.config.width - 175,
              this.game.config.height - 100,
              "buttonArrowUp"
            );
            this.btnDn.setInteractive();
            this.btnDn.on("pointerover", function() {
              this.btnDn.setTexture("buttonArrowUp"); // set the button texture to sprBtnPlayHover
              mobileDown = true;
            }, this);
            this.btnDn.on("pointerout", function() {
              this.setTexture("buttonArrowUp");
              mobileDown = false;
            });
            this.btnDn.on("pointerdown", function() {
              this.btnDn.setTexture("buttonArrow");
              mobileDown = true;
  
            }, this);
            this.btnDn.on("pointerup", function() {
              this.btnDn.setTexture("buttonArrowUp");
              mobileDown = false;
            }, this);
            this.btnDn.angle = 180;
          }
          
    }//end create

    update(){
      if(level == 1 && rank == "Rookie" && instructionsCount < 500){
        instructionsCount += 1;
        if(instructionsCount > 60 && instructionsCount < 75){
          instructions1.x += 10;
        }
        if(instructionsCount > 75){
          instructions1.x -= 100;
        }
        if(instructionsCount > 125 && instructionsCount < 140){
          instructions2.x += 10;
        }
        if(instructionsCount > 140){
          instructions2.x -= 100;
        }
        if(instructionsCount > 175 && instructionsCount < 190){
          instructions3.x += 10;
        }
        if(instructionsCount > 190){
          instructions3.x -= 100;
        }
        if(instructionsCount == 193){
          instructionsGo = this.add.sprite(this.game.config.width * 0.5, 150, "instructionsGo");
          instructionsGo.setOrigin(0.5,0.0);
        }
        if(instructionsCount > 230){
          instructionsGo.visible = false;
        }
      }else{
        if(instructionsCount < 33){
          instructionsCount += 1;
            if(instructionsCount > 30){
              instructionsGo.visible = false;
            }
        }
      }
      if(this.football != null){
        this.football.y += 10;
        if(this.football.y > this.player.y){
          //this.sfx.explosions[2].play();
          this.football.destroy();
        }
      }
      if(muddyFactor < 1){
        muddyFactor += 0.01;
      }
      if(level == 1 || level == 2 || level == 3 || level == 4 || level == 5
        || level == 6 || level == 7 || level == 8 || level == 9 || level == 10){
        /*if(yards > 10){
          instructions1.visible = false;
        }
        if(yards > 10 && yards < 20){
          instructions2.visible = true;
        }
        if(yards > 20){
          instructions2.visible = false;
        }*/
        if(field.y > 1650){
          if(!touchdown){
            touchdown = true;
            stars += 100 + level*10;
            if(level == 1){
              unlockedLevel2 = true;
            }
            if(level == 2){
              unlockedBonus1 = true;
            }
            if(level == 3){
              unlockedLevel4 = true;
            }
            if(level == 4){
              unlockedBonus2 = true;
            }
  
            if(level == 5){
              unlockedLevel6 = true;
            }
            if(level == 6){
              unlockedBonus3 = true;
            }
  
            if(level == 7){
              unlockedLevel8 = true;
            }
            if(level == 8){
              unlockedBonus4 = true;
            }
  
            if(level == 9){
              unlockedLevel10 = true;
            }
            if(level == 10){
              if(rank == 'Rookie'){
                rank = 'Veteran'
                unlockedBonus1 = false;
                unlockedBonus2 = false;
                unlockedBonus3 = false;
                unlockedBonus4 = false;
                unlockedLevel2 = false;
                unlockedLevel3 = false;
                unlockedLevel4 = false;
                unlockedLevel5 = false;
                unlockedLevel6 = false;
                unlockedLevel7 = false;
                unlockedLevel8 = false;
                unlockedLevel9 = false;
                unlockedLevel10 = false;
              }else if(rank == 'Veteran'){
                unlockedBonus1 = false;
                unlockedBonus2 = false;
                unlockedBonus3 = false;
                unlockedBonus4 = false;
                unlockedLevel2 = false;
                unlockedLevel3 = false;
                unlockedLevel4 = false;
                unlockedLevel5 = false;
                unlockedLevel6 = false;
                unlockedLevel7 = false;
                unlockedLevel8 = false;
                unlockedLevel9 = false;
                unlockedLevel10 = false;
                rank = 'All Pro'
              }
            }
          }
        }
        if(field.x < -823 || field.x >  1831 || field.y < -1350){
          outOfBounds = true;
          this.player.onDestroy();
          //by me...
          speed = 0;
          for (var i = 0; i < this.enemies.getChildren().length; i++) {
            var enemy = this.enemies.getChildren()[i];
            enemy.celebrate();
          }
          moveX = 0;
          moveY = 0;
          upgradeBlocker = 0;
          //new for LA2
              upgradeBlockerLeft = false;
              upgradeBlockerCenter = false;
              upgradeBlockerRight = false;
              //
        }
      }
      //by me...
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
      this.moneyText.setText('$: ' + stars);
      //this.starsText.setText(stars);
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
        if (!this.player.getData("isDead") && !outOfBounds) {
            this.player.update();
            if(!mobile){
              if (this.keyS.isDown) {
                if(spinCount > 0 && !spinning && !tackled && !touchdown){
                  spinCount -= 1;
                  spinning = true;
                  this.player.setData("isSpinning", true);
                }
              }
              //if (this.keyUp.isDown && boostCount > 0 && !tackled && !touchdown) {
              if (this.keyUp.isDown && !tackled && !touchdown) {
                moveY = 3*muddyFactor;
                field.y += moveY;
                if(boosting){
                  moveY = +5;
                  field.y += moveY;
                }
              }
              if (this.keyDown.isDown && !tackled && !touchdown) {
                moveY = -3*muddyFactor;
                field.y += moveY;
                if(boosting){
                  moveY = -5;
                  field.y += moveY;
                }
              }
              if (this.keyLeft.isDown && !tackled && !touchdown) {
                  moveX = 3*muddyFactor;
                  field.x += moveX;
                if(boosting){
                  moveX = +5;
                  field.x += moveX;
                }
              }
              else if (this.keyRight.isDown && !tackled && !touchdown) {
                //this.player.moveRight();
                moveX = -3*muddyFactor;
                field.x += moveX;
                if(boosting){
                  moveX = -5;
                  field.x += moveX;
                }
              }
  
              if(!this.keyLeft.isDown && !this.keyRight.isDown){
                moveX = 0;
              }
              if(!this.keyUp.isDown && !this.keyDown.isDown){
                moveY = 0;
              }
              if(touchdown || tackled){
                moveX = 0;
                moveY = 0;
              }
              // redo boosting for LA2
              if (this.keyW.isDown && boostCount > 0 && !tackled && !touchdown) {
                boosting = true;
              }
              if (!this.keyW.isDown) {
                boosting = false;
                //if(!beastmode && !tackled && !touchdown){
                //  speed = speedOriginal;
                //}
              }
              if(boostCount <= 0){
                boosting = false;
              }
            }
            
            
            //MOBILE MOVEMENT...
            if(mobile){
                if (mobileUp && !tackled && !touchdown) {
                  moveY = 3*muddyFactor;
                  field.y += moveY;
                  if(boosting){
                    moveY = +5;
                    field.y += moveY;
                  }
                }
                if (mobileDown && !tackled && !touchdown) {
                  moveY = -3*muddyFactor;
                  field.y += moveY;
                  if(boosting){
                    moveY = -5;
                    field.y += moveY;
                  }
                }
                if (mobileLeft && !tackled && !touchdown) {
                    moveX = 3*muddyFactor;
                    field.x += moveX;
                  if(boosting){
                    moveX = +5;
                    field.x += moveX;
                  }
                }
                else if (mobileRight && !tackled && !touchdown) {
                  //this.player.moveRight();
                  moveX = -3*muddyFactor;
                  field.x += moveX;
                  if(boosting){
                    moveX = -5;
                    field.x += moveX;
                  }
                }

                if(!mobileLeft && !mobileRight){
                  moveX = 0;
                }
                if(!mobileUp && !mobileDown){
                  moveY = 0;
                }
                if(touchdown || tackled){
                  moveX = 0;
                  moveY = 0;
                }
            }

            ///END MOBILE MOVEMENT

        }
        for (var i = 0; i < this.enemies.getChildren().length; i++) {
            var enemy = this.enemies.getChildren()[i];
            enemy.update(tackled,moveX,moveY);
        }

        if(upgradeBlockerLeft){
          this.linemanLt.update();
        }
        if(upgradeBlockerCenter){
          this.linemanCntr.update();
        }
        if(upgradeBlockerRight){
          this.linemanRt.update();
        }

          /*for (var i = 0; i < this.backgrounds.length; i++) {
            this.backgrounds[i].update(tackled);
          }
          for (var i = 0; i < this.pickups.getChildren().length; i++) {
            this.pickups.getChildren()[i].update();
          }*/
          for (var i = 0; i < this.mudPies.getChildren().length; i++) {
            this.mudPies.getChildren()[i].update();
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