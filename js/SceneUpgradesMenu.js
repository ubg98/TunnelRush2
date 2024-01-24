class SceneUpgradesMenu extends Phaser.Scene {
  constructor() {
    super({ key: "SceneUpgradesMenu" });
  }
  preload() {
    //by me...
    this.load.image("menuBg", "content/menuBg.jpg");
    this.load.image("buttonBlocker", "content/buttonBlocker.jpg");
    this.load.image("buttonBlocker2", "content/buttonBlocker2.jpg");
    this.load.image("buttonBlocker3", "content/buttonBlocker3.jpg");
      this.load.image("buttonBuy1", "content/buttonBuy1.png");
      this.load.image("buttonBuy2", "content/buttonBuy2.png");
      this.load.image("buttonBuy3", "content/buttonBuy3.png");
      this.load.image("buttonVideo", "content/buttonVideo.jpg");
      this.load.image("buttonVideo2", "content/buttonVideo2.jpg");
      this.load.image("buttonVideo3", "content/buttonVideo3.jpg");
      //icons..
      //this.load.image("iconBeastmode", "content/pickup_beastmode.png");
    //

  }
  create() {
    //by me...
    this.add.image(this.game.config.width * 0.5, this.game.config.height * 0.5, 'menuBg');
    //this.add.image(this.game.config.width * 0.5 + 145, 15, 'star_icon');
    //this.scene.start("SceneMain");
    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown")
    };

    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      475,
      "sprBtnPlay"
    );
    this.btnPlay.setInteractive();
    this.btnPlay.on("pointerover", function() {
      this.btnPlay.setTexture("sprBtnPlayHover"); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);
    this.btnPlay.on("pointerout", function() {
      this.setTexture("sprBtnPlay");
    });
    this.btnPlay.on("pointerdown", function() {
      this.btnPlay.setTexture("sprBtnPlayDown");
      this.sfx.btnDown.play();
    }, this);
    this.btnPlay.on("pointerup", function() {
      this.btnPlay.setTexture("sprBtnPlay");
      //this.scene.start("SceneMain");
      this.scene.start("SceneGameOver");
    }, this);
//STARS TEXT
      this.starsText = this.add.text(this.game.config.width * 0.5 + 350, 75, "$ " + stars, {
          fontFamily: 'monospace',
          fontSize: 15,
          fontStyle: 'bold',
          color: '#ffff00',
          align: 'right'
      });
      this.starsText.setOrigin(1.0,0.0);


      //Blocker texts...
      this.blockerLeftText = this.add.text(this.game.config.width * 0.5 - 150, 275, "Left Blocker", {
        fontFamily: 'arial',
                fontSize: 15,
                //fontStyle: 'none',
                color: '#ffffff',
                align: 'right'
    });
    this.blockerLeftText.setOrigin(0.5,0);
    this.blockerCenterText = this.add.text(this.game.config.width * 0.5, 275, "Center Blocker", {
      fontFamily: 'arial',
              fontSize: 15,
              //fontStyle: 'none',
              color: '#ffffff',
              align: 'right'
  });
  this.blockerCenterText.setOrigin(0.5,0);
        this.blockerRightText = this.add.text(this.game.config.width * 0.5 + 150, 275, "Right Blocker", {
          fontFamily: 'arial',
                  fontSize: 15,
                  //fontStyle: 'none',
                  color: '#ffffff',
                  align: 'right'
      });
      this.blockerRightText.setOrigin(0.5,0);


      //Blocker Lt...
            //Text Blocker left...
      this.btnBuyBlockerLt = this.add.sprite(
          this.game.config.width * 0.5 - 150,
          375,
          "buttonBlocker"
        );
        this.btnBuyBlockerLt.setInteractive();
        this.btnBuyBlockerLt.on("pointerover", function() {
          this.btnBuyBlockerLt.setTexture("buttonBlocker2"); // set the button texture to sprBtnPlayHover
          this.sfx.btnOver.play(); // play the button over sound
        }, this);
        this.btnBuyBlockerLt.on("pointerout", function() {
          this.setTexture("buttonBlocker");
        });
        this.btnBuyBlockerLt.on("pointerdown", function() {
          this.btnBuyBlockerLt.setTexture("buttonBlocker3");
          this.sfx.btnDown.play();
        }, this);
        this.btnBuyBlockerLt.on("pointerup", function() {
          this.btnBuyBlockerLt.setTexture("buttonBlocker");
          //this.scene.start("SceneMain");
          if(stars >= 300 && !upgradeBlockerLeft){
            upgradeBlockerLeft = true;
            stars -= 300;
          }
        }, this);

        //Blocker Center...
            //Text Blocker Center...
      this.btnBuyBlockerCntr = this.add.sprite(
        this.game.config.width * 0.5,
        375,
        "buttonBlocker"
      );
      this.btnBuyBlockerCntr.setInteractive();
      this.btnBuyBlockerCntr.on("pointerover", function() {
        this.btnBuyBlockerCntr.setTexture("buttonBlocker2"); // set the button texture to sprBtnPlayHover
        this.sfx.btnOver.play(); // play the button over sound
      }, this);
      this.btnBuyBlockerCntr.on("pointerout", function() {
        this.setTexture("buttonBlocker");
      });
      this.btnBuyBlockerCntr.on("pointerdown", function() {
        this.btnBuyBlockerCntr.setTexture("buttonBlocker3");
        this.sfx.btnDown.play();
      }, this);
      this.btnBuyBlockerCntr.on("pointerup", function() {
        this.btnBuyBlockerCntr.setTexture("buttonBlocker");
        //this.scene.start("SceneMain");
        if(stars >= 300 && !upgradeBlockerCenter){
          upgradeBlockerCenter = true;
          stars -= 300;
        }
      }, this);

      //Blocker Right...
            //Text Blocker Right...
            this.btnBuyBlockerRt = this.add.sprite(
              this.game.config.width * 0.5 + 150,
              375,
              "buttonBlocker"
            );
            this.btnBuyBlockerRt.setInteractive();
            this.btnBuyBlockerRt.on("pointerover", function() {
              this.btnBuyBlockerRt.setTexture("buttonBlocker2"); // set the button texture to sprBtnPlayHover
              this.sfx.btnOver.play(); // play the button over sound
            }, this);
            this.btnBuyBlockerRt.on("pointerout", function() {
              this.setTexture("buttonBlocker");
            });
            this.btnBuyBlockerRt.on("pointerdown", function() {
              this.btnBuyBlockerRt.setTexture("buttonBlocker3");
              this.sfx.btnDown.play();
            }, this);
            this.btnBuyBlockerRt.on("pointerup", function() {
              this.btnBuyBlockerRt.setTexture("buttonBlocker");
              //this.scene.start("SceneMain");
              if(stars >= 300 && !upgradeBlockerRight){
                upgradeBlockerRight = true;
                stars -= 300;
              }
            }, this);


    //Boost...
            //Text Bestmode...
            this.boostText = this.add.text(this.game.config.width * 0.5 - 185, 175, "Fill Boost Power", {
              fontFamily: 'arial',
              fontSize: 21,
              //fontStyle: 'none',
              color: '#ffff00',
              align: 'right'
          });
          this.boostText.setOrigin(1.0,0.5);
    //this.add.image(25, 150, 'iconBoost');
    //button Buy Boost...
    //if(boostCount < 100){
      this.btnBuyBoost = this.add.sprite(
          this.game.config.width * 0.5 - 125,
          175,
          "buttonBuy1"
        );
        this.btnBuyBoost.setInteractive();
        this.btnBuyBoost.on("pointerover", function() {
          this.btnBuyBoost.setTexture("buttonBuy2"); // set the button texture to sprBtnPlayHover
          this.sfx.btnOver.play(); // play the button over sound
        }, this);
        this.btnBuyBoost.on("pointerout", function() {
          this.setTexture("buttonBuy1");
        });
        this.btnBuyBoost.on("pointerdown", function() {
          this.btnBuyBoost.setTexture("buttonBuy3");
          this.sfx.btnDown.play();
        }, this);
        this.btnBuyBoost.on("pointerup", function() {
          this.btnBuyBoost.setTexture("buttonBuy1");
          //this.scene.start("SceneMain");
          if(stars >= 150){
            boostCount = 100;
            stars -= 150;
          }
        }, this);
    //}


      //Text skills...
    this.skillsText = this.add.text(this.game.config.width * 0.5 - 185, 223, "+1 Spin Move $150", {
      fontFamily: 'arial',
              fontSize: 21,
              //fontStyle: 'none',
              color: '#ffff00',
              align: 'right'
  });
  this.skillsText.setOrigin(0.0);
    //button Buy skills...
    this.btnBuySkills = this.add.sprite(
      this.game.config.width * 0.5 - 125,
      225,
      "buttonBuy1"
    );
    this.skillsText.setOrigin(1.0,0.5);
    this.btnBuySkills.setInteractive();
    this.btnBuySkills.on("pointerover", function() {
      this.btnBuySkills.setTexture("buttonBuy2"); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);
    this.btnBuySkills.on("pointerout", function() {
      this.setTexture("buttonBuy1");
    });
    this.btnBuySkills.on("pointerdown", function() {
      this.btnBuySkills.setTexture("buttonBuy3");
      this.sfx.btnDown.play();
    }, this);
    this.btnBuySkills.on("pointerup", function() {
      this.btnBuySkills.setTexture("buttonBuy1");
      if(stars >= 150){
        spinCount += 1;
        stars -= 150;
      }
    }, this);





    //Text Free Stars...
    this.freeStarsText = this.add.text(this.game.config.width * 0.5 + 300, 180, "Free Money!", {
      fontFamily: 'arial',
              fontSize: 21,
              //fontStyle: 'none',
              color: '#ffff00',
              align: 'right'
  });
  this.freeStarsText.setOrigin(0.5,0);
  this.freeStarsText2 = this.add.text(this.game.config.width * 0.5 + 300, 300, "Watch Video", {
    fontFamily: 'arial',
            fontSize: 21,
            //fontStyle: 'none',
            color: '#ffff00',
            align: 'right'
});
this.freeStarsText2.setOrigin(0.5,0);
    //button free stars...
    if(!adBlocker){
    this.btnFreeStars = this.add.sprite(
      this.game.config.width * 0.5 + 300,
      250,
      "buttonVideo"
    );
    this.btnFreeStars.setInteractive();
    this.btnFreeStars.on("pointerover", function() {
      this.btnFreeStars.setTexture("buttonVideo2"); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);
    this.btnFreeStars.on("pointerout", function() {
      this.setTexture("buttonVideo");
    });
    this.btnFreeStars.on("pointerdown", function() {
      this.btnFreeStars.setTexture("buttonVideo3");
      this.sfx.btnDown.play();
    }, this);
    this.btnFreeStars.on("pointerup", function() {
      this.btnFreeStars.setTexture("buttonVideo");
      muted = 0;
      this.sound.setVolume(muted);
      PokiSDK.rewardedBreak().then(
        (withReward) => {
            if(withReward){
                stars += 150;
                //resume game
                muted = 1;
                this.sound.setVolume(muted);
            }
        });
    }, this);
  }
    
    /*this.title = this.add.text(this.game.config.width * 0.5, 128, "SPACE SHOOTER", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });
    this.title.setOrigin(0.5);*/
    /*this.backgrounds = [];
      //for (var i = 0; i < 1; i++) {
      //var keys = ["sprBg0", "sprBg1"];
      //var keys = ["field_alley"];
      var key = ["field_alley"];
      //var key = keys[Phaser.Math.Between(0, keys.length - 1)];
      //var bg = new ScrollingBackground(this, key, 100);
      var bg = new movingBackground(this, key, 100);
      this.backgrounds.push(bg);
      //}*/
  }

  update(){
      this.starsText.setText("$ " + stars);

      if(boostCount == 100 || stars < 150){
          //this.btnBuyBoost.visible = false;
          this.btnBuyBoost.setAlpha(0.2);
          this.boostText.setText("Boost Power Full");
      }
      if(boostCount < 100 && stars >= 150){
        this.btnBuyBoost.setAlpha(1.0);
        this.boostText.setText("Fill Boost Power $150");
    }

      //if(upgradeSkills > 5){
//this.btnBuySkills.visible = false;
      //}
      if(stars < 150){
        this.btnBuySkills.setAlpha(0.2);
      }
      if(stars >= 150){
        this.btnBuySkills.setAlpha(1.0);
      }
      //upgradeSkillsPrice = upgradeSkills*2000 + 1000;
      //this.skillsText.setText("+1 Spin Move $150");


      if(upgradeBlocker > 0){
        //this.btnBuyBlocker.visible = false;
    }
    if(upgradeBlockerLeft || stars < 300){
      this.btnBuyBlockerLt.setAlpha(0.2);
    }
    if(upgradeBlockerCenter || stars < 300){
      this.btnBuyBlockerCntr.setAlpha(0.2);
    }
    if(upgradeBlockerRight || stars < 300){
      this.btnBuyBlockerRt.setAlpha(0.2);
    }

    if(!upgradeBlockerLeft && stars >= 300){
      this.btnBuyBlockerLt.setAlpha(1.0);
    }
    if(!upgradeBlockerCenter && stars >= 300){
      this.btnBuyBlockerCntr.setAlpha(1.0);
    }
    if(!upgradeBlockerRight && stars >= 300){
      this.btnBuyBlockerRt.setAlpha(1.0);
    }

    if(!adBlocker){
      this.freeStarsText.setText("Free Money!");
      this.freeStarsText2.setText("Watch Video");
    }
    if(adBlocker){
      this.freeStarsText.setText("");
      this.freeStarsText2.setText("");
    }
  }

}

