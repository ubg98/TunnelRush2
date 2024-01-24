class SceneGameOver extends Phaser.Scene {
    constructor() {
      super({ key: "SceneGameOver" });
    }
    preload() {
        this.load.image("menuBg", "content/menuBg.jpg");
        this.load.image("buttonUpgradesUp", "content/buttonUpgradesUp.png");
        this.load.image("buttonUpgradesOver", "content/buttonUpgradesOver.png");
        this.load.image("buttonUpgradesDown", "content/buttonUpgradesDown.png");
        this.load.image("buttonBonusUp", "content/buttonBonusUp.png");
        this.load.image("buttonBonusOver", "content/buttonBonusOver.png");
        this.load.image("buttonBonusDown", "content/buttonBonusDown.png");
        this.load.image("buttonLevel1up", "content/buttonLevel1up.png");
        this.load.image("buttonLevel1over", "content/buttonLevel1over.png");
        this.load.image("buttonLevel1down", "content/buttonLevel1down.png");
        this.load.image("buttonLevel2up", "content/buttonLevel2up.png");
        this.load.image("buttonLevel2over", "content/buttonLevel2over.png");
        this.load.image("buttonLevel2down", "content/buttonLevel2down.png");
        this.load.image("buttonLevel3up", "content/buttonLevel3up.png");
        this.load.image("buttonLevel3over", "content/buttonLevel3over.png");
        this.load.image("buttonLevel3down", "content/buttonLevel3down.png");
        this.load.image("buttonLevel4up", "content/buttonLevel4up.png");
        this.load.image("buttonLevel4over", "content/buttonLevel4over.png");
        this.load.image("buttonLevel4down", "content/buttonLevel4down.png");
        this.load.image("buttonLevel5up", "content/buttonLevel5up.png");
        this.load.image("buttonLevel5over", "content/buttonLevel5over.png");
        this.load.image("buttonLevel5down", "content/buttonLevel5down.png");
        this.load.image("buttonLevel6up", "content/buttonLevel6up.png");
        this.load.image("buttonLevel6over", "content/buttonLevel6over.png");
        this.load.image("buttonLevel6down", "content/buttonLevel6down.png");
        this.load.image("buttonLevel7up", "content/buttonLevel7up.png");
        this.load.image("buttonLevel7over", "content/buttonLevel7over.png");
        this.load.image("buttonLevel7down", "content/buttonLevel7down.png");
        this.load.image("buttonLevel8up", "content/buttonLevel8up.png");
        this.load.image("buttonLevel8over", "content/buttonLevel8over.png");
        this.load.image("buttonLevel8down", "content/buttonLevel8down.png");
        this.load.image("buttonLevel9up", "content/buttonLevel9up.png");
        this.load.image("buttonLevel9over", "content/buttonLevel9over.png");
        this.load.image("buttonLevel9down", "content/buttonLevel9down.png");
        this.load.image("buttonLevel10up", "content/buttonLevel10up.png");
        this.load.image("buttonLevel10over", "content/buttonLevel10over.png");
        this.load.image("buttonLevel10down", "content/buttonLevel10down.png");
        this.load.image("buttonLevelLocked", "content/buttonLevelLocked.png");
    }

    create() {
      //by me...
      this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      //this.add.image(160, 284, 'menuBg');
      this.add.image(this.game.config.width * 0.5, this.game.config.height * 0.5, 'menuBg');
      //this.add.image(305, 15, 'star_icon');
      //this.add.image(this.game.config.width * 0.5 + 145, 15, 'star_icon');
      touchdownYards = level*50 + 50;
      yardsToGo = touchdownYards - yards;
      invincible = false;
      //upgradeBlocker = 0;


      this.rankNow = this.add.text(this.game.config.width * 0.5, 150, "Rank:", {
        fontFamily: 'monospace',
        fontSize: 15,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center'
      });
      this.rankNow.setOrigin(0.5);
      this.rankText = this.add.text(this.game.config.width * 0.5, 170, rank, {
        fontFamily: 'monospace',
        fontSize: 27,
        fontStyle: 'bold',
        color: '#ffff00',
        align: 'center'
      });
      this.rankText.setOrigin(0.5);
      /*this.yardsText = this.add.text(this.game.config.width * 0.5, 200, "Yards: " + yards, {
        fontFamily: 'monospace',
        fontSize: 15,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center'
      });
      this.yardsText.setOrigin(0.5);
      this.yardsToGoText = this.add.text(this.game.config.width * 0.5, 190, "Yards to Go: " + yardsToGo, {
        fontFamily: 'monospace',
        fontSize: 15,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center'
      });
      this.yardsToGoText.setOrigin(0.5);
      this.totalYardsText = this.add.text(this.game.config.width * 0.5, 220, "Total Yards Rushed: " + yardsTotal, {
        fontFamily: 'monospace',
        fontSize: 15,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center'
      });
      this.totalYardsText.setOrigin(0.5);
      */
      this.starsText = this.add.text(this.game.config.width * 0.5 + 350, 75, "$ " + stars, {
        fontFamily: 'monospace',
        fontSize: 15,
        fontStyle: 'bold',
        color: '#ffff00',
        align: 'right'
      });
      this.starsText.setOrigin(1.0,0.0);
      

        /*this.title = this.add.text(this.game.config.width * 0.5, 128, "GAME OVER", {
            fontFamily: 'monospace',
            fontSize: 48,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
          });
          this.title.setOrigin(0.5);*/
          this.sfx = {
            btnOver: this.sound.add("sndBtnOver"),
            btnDown: this.sound.add("sndBtnDown")
          };


          
          //level1
          this.btnLevel1 = this.add.sprite(
            this.game.config.width * 0.5 - 200,
            140,
            "buttonLevel1up"
          );
          this.btnLevel1.setInteractive();
          this.btnLevel1.on("pointerover", function() {
            this.btnLevel1.setTexture("buttonLevel1over"); // set the button texture to sprBtnPlayHover
            this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.btnLevel1.on("pointerout", function() {
            this.setTexture("buttonLevel1up");
          });
          this.btnLevel1.on("pointerdown", function() {
            this.btnLevel1.setTexture("buttonLevel1down");
            this.sfx.btnDown.play();
          }, this);
          this.btnLevel1.on("pointerup", function() {
            this.btnLevel1.setTexture("buttonLevel1up");
            muted = 0;
            this.sound.setVolume(muted);
            //Poki stuff...
            
            PokiSDK.commercialBreak().then(
              () => { //you can also use a normal function here
                //reset variables...
                //variables...
                level = 1;
//end new variables
beastmode = false;
beastmode_count = 100;
speed = speedOriginal;
spinning = false;
tackled = false;
touchdown = false;
outOfBounds = false;
              invincible = false;
              gameStart();
              muted = 1;
                    console.log('End of commercial break');
            //
            this.scene.start("SceneStadium");
              }
            );
            
            //put back into Poki commercial break after fixing Poxi up down arrow problem...
//variables...

          }, this);
          
          //end level 1

          //level2
          if(unlockedLevel2){
            this.btnLevel2 = this.add.sprite(
              this.game.config.width * 0.5 - 200,
              195,
              "buttonLevel2up"
            );
            this.btnLevel2.setInteractive();
            this.btnLevel2.on("pointerover", function() {
              this.btnLevel2.setTexture("buttonLevel2over"); // set the button texture to sprBtnPlayHover
              this.sfx.btnOver.play(); // play the button over sound
            }, this);
            this.btnLevel2.on("pointerout", function() {
              this.setTexture("buttonLevel2up");
            });
            this.btnLevel2.on("pointerdown", function() {
              this.btnLevel2.setTexture("buttonLevel2down");
              this.sfx.btnDown.play();
            }, this);
            this.btnLevel2.on("pointerup", function() {
              this.btnLevel2.setTexture("buttonLevel2up");
              muted = 0;
              this.sound.setVolume(muted);
              //Poki stuff...
              
              PokiSDK.commercialBreak().then(
                () => { //you can also use a normal function here
                  //reset variables...
                  //variables...
                  level = 2;
                  //end new variables
              beastmode = false;
              beastmode_count = 100;
              speed = speedOriginal;
              spinning = false;
              tackled = false;
              touchdown = false;
              outOfBounds = false;
              invincible = false;
              gameStart();
              muted = 1;
                    console.log('End of commercial break');
                    this.scene.start("SceneStadium");
                }
              );
              //this.scene.start("SceneMain");
            }, this);
          }
          if(!unlockedLevel2){
            this.buttonLocked2 = this.add.sprite(this.game.config.width * 0.5 - 200,195,"buttonLevelLocked");
          }
          //end level 2

          //Bonus1
          if(unlockedBonus1){
          this.btnBonus = this.add.sprite(
            this.game.config.width * 0.5 - 200,
            250,
            "buttonBonusUp"
          );
          this.btnBonus.setInteractive();
          this.btnBonus.on("pointerover", function() {
            this.btnBonus.setTexture("buttonBonusOver"); // set the button texture to sprBtnPlayHover
            this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.btnBonus.on("pointerout", function() {
            this.setTexture("buttonBonusUp");
          });
          this.btnBonus.on("pointerdown", function() {
            this.btnBonus.setTexture("buttonBonusDown");
            this.sfx.btnDown.play();
          }, this);
          this.btnBonus.on("pointerup", function() {
            this.btnBonus.setTexture("buttonBonusUp");
            muted = 0;
            this.sound.setVolume(muted);
            //Poki stuff...
            PokiSDK.commercialBreak().then(
              () => { //you can also use a normal function here
                //reset variables...
                level = 0;
                bonusLevel = 1;
                beastmode = false;
                beastmode_count = 100;
                speed = speedOriginal;
                spinning = false;
                tackled = false;
                touchdown = false;             
                outOfBounds = false;
                invincible = false;
                gameStart();
                muted = 1;
                
                this.scene.start("SceneMain");
              }
            );

            this.scene.start("SceneMain");
          }, this);
        }
        if(!unlockedBonus1){
          this.buttonLockedBonus1 = this.add.sprite(this.game.config.width * 0.5 - 200,250,"buttonLevelLocked");
        }
          //end Bonus 1

          //level3
          if(unlockedLevel3){
          this.btnLevel3 = this.add.sprite(
            this.game.config.width * 0.5 - 200,
            305,
            "buttonLevel3up"
          );
          this.btnLevel3.setInteractive();
          this.btnLevel3.on("pointerover", function() {
            this.btnLevel3.setTexture("buttonLevel3over"); // set the button texture to sprBtnPlayHover
            this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.btnLevel3.on("pointerout", function() {
            this.setTexture("buttonLevel3up");
          });
          this.btnLevel3.on("pointerdown", function() {
            this.btnLevel3.setTexture("buttonLevel3down");
            this.sfx.btnDown.play();
          }, this);
          this.btnLevel3.on("pointerup", function() {
            this.btnLevel3.setTexture("buttonLevel3up");
            muted = 0;
            this.sound.setVolume(muted);
            //Poki stuff...
            
            PokiSDK.commercialBreak().then(
              () => { //you can also use a normal function here
                //reset variables...
                //variables...
                level = 3;
                //end new variables
                beastmode = false;
                beastmode_count = 100;
                speed = speedOriginal;
                spinning = false;
                tackled = false;
                touchdown = false;
                outOfBounds = false;
                invincible = false;
                muted = 1;
            //
            this.scene.start("SceneStadium");
              }
            );
          }, this);
        }
        if(!unlockedLevel3){
          this.buttonLocked3 = this.add.sprite(this.game.config.width * 0.5 - 200,305,"buttonLevelLocked");
        }
          //end level 3

          //level4
          if(unlockedLevel4){
          this.btnLevel4 = this.add.sprite(
            this.game.config.width * 0.5 - 200,
            360,
            "buttonLevel4up"
          );
          this.btnLevel4.setInteractive();
          this.btnLevel4.on("pointerover", function() {
            this.btnLevel4.setTexture("buttonLevel4over"); // set the button texture to sprBtnPlayHover
            this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.btnLevel4.on("pointerout", function() {
            this.setTexture("buttonLevel4up");
          });
          this.btnLevel4.on("pointerdown", function() {
            this.btnLevel4.setTexture("buttonLevel4down");
            this.sfx.btnDown.play();
          }, this);
          this.btnLevel4.on("pointerup", function() {
            this.btnLevel4.setTexture("buttonLevel4up");
            muted = 0;
            this.sound.setVolume(muted);
            //Poki stuff...
            PokiSDK.commercialBreak().then(
              () => { //you can also use a normal function here
                //reset variables...
                //variables...
                level = 4;
                  //end new variables
              beastmode = false;
              beastmode_count = 100;
              speed = speedOriginal;
              spinning = false;
              tackled = false;
              touchdown = false;
              outOfBounds = false;
              invincible = false;
              gameStart();
              muted = 1;
                    console.log('End of commercial break');
                    this.scene.start("SceneStadium");
              }
            );

            }, this);
        }
        if(!unlockedLevel4){
          this.buttonLocked4 = this.add.sprite(this.game.config.width * 0.5 - 200,360,"buttonLevelLocked");
        }
          //end level 4

          //Bonus2
          if(unlockedBonus2){
          this.btnBonus2 = this.add.sprite(
            this.game.config.width * 0.5 - 200,
            415,
            "buttonBonusUp"
          );
          this.btnBonus2.setInteractive();
          this.btnBonus2.on("pointerover", function() {
            this.btnBonus2.setTexture("buttonBonusOver"); // set the button texture to sprBtnPlayHover
            this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.btnBonus2.on("pointerout", function() {
            this.setTexture("buttonBonusUp");
          });
          this.btnBonus2.on("pointerdown", function() {
            this.btnBonus2.setTexture("buttonBonusDown");
            this.sfx.btnDown.play();
          }, this);
          this.btnBonus2.on("pointerup", function() {
            this.btnBonus2.setTexture("buttonBonusUp");
            muted = 0;
            this.sound.setVolume(muted);
            //Poki stuff...
            
            PokiSDK.commercialBreak().then(
              () => { //you can also use a normal function here
                //reset variables...
                level = 0;
           bonusLevel = 2;
           beastmode = false;
           beastmode_count = 100;
           speed = speedOriginal;
           spinning = false;
           tackled = false;
           touchdown = false;             
           outOfBounds = false;
           invincible = false;
           gameStart();
           muted = 1;
            this.scene.start("SceneMain");
              }
            );

          }, this);
        }
        if(!unlockedBonus2){
          this.buttonLockedBonus2 = this.add.sprite(this.game.config.width * 0.5 - 200,415,"buttonLevelLocked");
        }
          //end Bonus 2

          //level5
          if(unlockedLevel5){
          this.btnLevel5 = this.add.sprite(
            this.game.config.width * 0.5 - 200,
            470,
            "buttonLevel5up"
          );
          this.btnLevel5.setInteractive();
          this.btnLevel5.on("pointerover", function() {
            this.btnLevel5.setTexture("buttonLevel5over"); // set the button texture to sprBtnPlayHover
            this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.btnLevel5.on("pointerout", function() {
            this.setTexture("buttonLevel5up");
          });
          this.btnLevel5.on("pointerdown", function() {
            this.btnLevel5.setTexture("buttonLevel5down");
            this.sfx.btnDown.play();
          }, this);
          this.btnLevel5.on("pointerup", function() {
            this.btnLevel5.setTexture("buttonLevel5up");
            muted = 0;
            this.sound.setVolume(muted);
            //Poki stuff...
            
            PokiSDK.commercialBreak().then(
              () => { //you can also use a normal function here
                //reset variables...
                //variables...
                level = 5;
                //end new variables
            beastmode = false;
            beastmode_count = 100;
            speed = speedOriginal;
            spinning = false;
            tackled = false;
            touchdown = false;
            outOfBounds = false;
            invincible = false;
            gameStart();
            muted = 1;
                  console.log('End of commercial break');
                  this.scene.start("SceneStadium");
              }
            );
            
            
            //this.scene.start("SceneMain");
          }, this);
        }
        if(!unlockedLevel5){
          this.buttonLocked5 = this.add.sprite(this.game.config.width * 0.5 - 200,470,"buttonLevelLocked");
        }
          //end level 5


          //RIGHT SIDE...
          //level6
          if(unlockedLevel6){
          this.btnLevel6 = this.add.sprite(
            this.game.config.width * 0.5 + 200,
            140,
            "buttonLevel6up"
          );
          this.btnLevel6.setInteractive();
          this.btnLevel6.on("pointerover", function() {
            this.btnLevel6.setTexture("buttonLevel6over"); // set the button texture to sprBtnPlayHover
            this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.btnLevel6.on("pointerout", function() {
            this.setTexture("buttonLevel6up");
          });
          this.btnLevel6.on("pointerdown", function() {
            this.btnLevel6.setTexture("buttonLevel6down");
            this.sfx.btnDown.play();
          }, this);
          this.btnLevel6.on("pointerup", function() {
            this.btnLevel6.setTexture("buttonLevel6up");
            muted = 0;
            this.sound.setVolume(muted);
            //Poki stuff...
            
            PokiSDK.commercialBreak().then(
              () => { //you can also use a normal function here
                //reset variables...
                //variables...
                level = 6;
                //end new variables
            beastmode = false;
            beastmode_count = 100;
            speed = speedOriginal;
            spinning = false;
            tackled = false;
            touchdown = false;
            outOfBounds = false;
            invincible = false;
            gameStart();
            muted = 1;
                  console.log('End of commercial break');
                  this.scene.start("SceneStadium");
              }
            );
            
            
            //this.scene.start("SceneMain");
          }, this);
        }
        if(!unlockedLevel6){
          this.buttonLocked6 = this.add.sprite(this.game.config.width * 0.5 + 200,140,"buttonLevelLocked");
        }
          //end level 6

          
          //Bonus3
          if(unlockedBonus3){
          this.btnBonus3 = this.add.sprite(
            this.game.config.width * 0.5 + 200,
            195,
            "buttonBonusUp"
          );
          this.btnBonus3.setInteractive();
          this.btnBonus3.on("pointerover", function() {
            this.btnBonus3.setTexture("buttonBonusOver"); // set the button texture to sprBtnPlayHover
            this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.btnBonus3.on("pointerout", function() {
            this.setTexture("buttonBonusUp");
          });
          this.btnBonus3.on("pointerdown", function() {
            this.btnBonus3.setTexture("buttonBonusDown");
            this.sfx.btnDown.play();
          }, this);
          this.btnBonus3.on("pointerup", function() {
            this.btnBonus3.setTexture("buttonBonusUp");
            muted = 0;
            this.sound.setVolume(muted);
            //Poki stuff...
            
            PokiSDK.commercialBreak().then(
              () => { //you can also use a normal function here
                //reset variables...
                level = 0;
           bonusLevel = 3;
            beastmode = false;
            beastmode_count = 100;
            speed = speedOriginal;
            spinning = false;
            tackled = false;
            touchdown = false;             
            outOfBounds = false;
            invincible = false;
            gameStart();
            muted = 1;
                  console.log('End of commercial break');
                  this.scene.start("SceneMain");
              }
            );
            
           
            
            //this.scene.start("SceneMain");
          }, this);
        }
        if(!unlockedBonus3){
          this.buttonLockedBonus3 = this.add.sprite(this.game.config.width * 0.5 + 200,195,"buttonLevelLocked");
        }
          //end Bonus 3
          
          //level7
          if(unlockedLevel7){
          this.btnLevel7 = this.add.sprite(
            this.game.config.width * 0.5 + 200,
            250,
            "buttonLevel7up"
          );
          this.btnLevel7.setInteractive();
          this.btnLevel7.on("pointerover", function() {
            this.btnLevel7.setTexture("buttonLevel7over"); // set the button texture to sprBtnPlayHover
            this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.btnLevel7.on("pointerout", function() {
            this.setTexture("buttonLevel7up");
          });
          this.btnLevel7.on("pointerdown", function() {
            this.btnLevel7.setTexture("buttonLevel7down");
            this.sfx.btnDown.play();
          }, this);
          this.btnLevel7.on("pointerup", function() {
            this.btnLevel7.setTexture("buttonLevel7up");
            muted = 0;
            this.sound.setVolume(muted);
            //Poki stuff...
            
            PokiSDK.commercialBreak().then(
              () => { //you can also use a normal function here
                //reset variables...
                //variables...
                level = 7;
                //end new variables
            beastmode = false;
            beastmode_count = 100;
            speed = speedOriginal;
            spinning = false;
            tackled = false;
            touchdown = false;
            outOfBounds = false;
            invincible = false;
            gameStart();
            muted = 1;
                  console.log('End of commercial break');
                  this.scene.start("SceneStadium");
              }
            );
            
           
            
            //this.scene.start("SceneMain");
          }, this);
        }
        if(!unlockedLevel7){
          this.buttonLocked7 = this.add.sprite(this.game.config.width * 0.5 + 200,250,"buttonLevelLocked");
        }
          //end level 7

          //level8
          if(unlockedLevel8){
          this.btnLevel8 = this.add.sprite(
            this.game.config.width * 0.5 + 200,
            305,
            "buttonLevel8up"
          );
          this.btnLevel8.setInteractive();
          this.btnLevel8.on("pointerover", function() {
            this.btnLevel8.setTexture("buttonLevel8over"); // set the button texture to sprBtnPlayHover
            this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.btnLevel8.on("pointerout", function() {
            this.setTexture("buttonLevel8up");
          });
          this.btnLevel8.on("pointerdown", function() {
            this.btnLevel8.setTexture("buttonLevel8down");
            this.sfx.btnDown.play();
          }, this);
          this.btnLevel8.on("pointerup", function() {
            this.btnLevel8.setTexture("buttonLevel8up");
            muted = 0;
            this.sound.setVolume(muted);
            //Poki stuff...
            
            PokiSDK.commercialBreak().then(
              () => { //you can also use a normal function here
                //reset variables...
                //variables...
                level = 8;
                //end new variables
            beastmode = false;
            beastmode_count = 100;
            speed = speedOriginal;
            spinning = false;
            tackled = false;
            touchdown = false;
            outOfBounds = false;
            invincible = false;
            gameStart();
            muted = 1;
                  console.log('End of commercial break');
                  this.scene.start("SceneStadium");
              }
            );
            
           
            
            //this.scene.start("SceneMain");
          }, this);
        }
        if(!unlockedLevel8){
          this.buttonLocked8 = this.add.sprite(this.game.config.width * 0.5 + 200,305,"buttonLevelLocked");
        }
          //end level 8

          //Bonus4
          if(unlockedBonus4){
          this.btnBonus4 = this.add.sprite(
            this.game.config.width * 0.5 + 200,
            360,
            "buttonBonusUp"
          );
          this.btnBonus4.setInteractive();
          this.btnBonus4.on("pointerover", function() {
            this.btnBonus4.setTexture("buttonBonusOver"); // set the button texture to sprBtnPlayHover
            this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.btnBonus4.on("pointerout", function() {
            this.setTexture("buttonBonusUp");
          });
          this.btnBonus4.on("pointerdown", function() {
            this.btnBonus4.setTexture("buttonBonusDown");
            this.sfx.btnDown.play();
          }, this);
          this.btnBonus4.on("pointerup", function() {
            this.btnBonus4.setTexture("buttonBonusUp");
            muted = 0;
            this.sound.setVolume(muted);
            //Poki stuff...
            
            PokiSDK.commercialBreak().then(
              () => { //you can also use a normal function here
                //reset variables...
                level = 0;
           bonusLevel = 4;
            beastmode = false;
            beastmode_count = 100;
            speed = speedOriginal;
            spinning = false;
            tackled = false;
            touchdown = false;             
            outOfBounds = false;
            invincible = false;
            gameStart();
            muted = 1;
                  console.log('End of commercial break');
                  this.scene.start("SceneMain");
              }
            );
            
           
            
            //this.scene.start("SceneMain");
          }, this);
        }
        if(!unlockedBonus4){
          this.buttonLockedBonus4 = this.add.sprite(this.game.config.width * 0.5 + 200,360,"buttonLevelLocked");
        }
          //end Bonus 4

          //level9
          if(unlockedLevel9){
          this.btnLevel9 = this.add.sprite(
            this.game.config.width * 0.5 + 200,
            415,
            "buttonLevel9up"
          );
          this.btnLevel9.setInteractive();
          this.btnLevel9.on("pointerover", function() {
            this.btnLevel9.setTexture("buttonLevel9over"); // set the button texture to sprBtnPlayHover
            this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.btnLevel9.on("pointerout", function() {
            this.setTexture("buttonLevel9up");
          });
          this.btnLevel9.on("pointerdown", function() {
            this.btnLevel9.setTexture("buttonLevel9down");
            this.sfx.btnDown.play();
          }, this);
          this.btnLevel9.on("pointerup", function() {
            this.btnLevel9.setTexture("buttonLevel9up");
            muted = 0;
            this.sound.setVolume(muted);
            //Poki stuff...
            
            PokiSDK.commercialBreak().then(
              () => { //you can also use a normal function here
                //reset variables...
                //variables...
                level = 9;
                //end new variables
            beastmode = false;
            beastmode_count = 100;
            speed = speedOriginal;
            spinning = false;
            tackled = false;
            touchdown = false;
            outOfBounds = false;
            invincible = false;
            gameStart();
            muted = 1;
                  console.log('End of commercial break');
                  this.scene.start("SceneStadium");
              }
            );
            
           
            
            //this.scene.start("SceneMain");
          }, this);
        }
        if(!unlockedLevel9){
          this.buttonLocked9 = this.add.sprite(this.game.config.width * 0.5 + 200,415,"buttonLevelLocked");
        }
          //end level 9

          //level10
          if(unlockedLevel10){
          this.btnLevel10 = this.add.sprite(
            this.game.config.width * 0.5 + 200,
            470,
            "buttonLevel10up"
          );
          this.btnLevel10.setInteractive();
          this.btnLevel10.on("pointerover", function() {
            this.btnLevel10.setTexture("buttonLevel10over"); // set the button texture to sprBtnPlayHover
            this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.btnLevel10.on("pointerout", function() {
            this.setTexture("buttonLevel10up");
          });
          this.btnLevel10.on("pointerdown", function() {
            this.btnLevel10.setTexture("buttonLevel10down");
            this.sfx.btnDown.play();
          }, this);
          this.btnLevel10.on("pointerup", function() {
            this.btnLevel10.setTexture("buttonLevel10up");
            muted = 0;
            this.sound.setVolume(muted);
            //Poki stuff...
            
            PokiSDK.commercialBreak().then(
              () => { //you can also use a normal function here
                //reset variables...
                //variables...
                level = 10;
                //end new variables
            beastmode = false;
            beastmode_count = 100;
            speed = speedOriginal;
            spinning = false;
            tackled = false;
            touchdown = false;
            outOfBounds = false;
            invincible = false;
            gameStart();
            muted = 1;
                  console.log('End of commercial break');
                  this.scene.start("SceneStadium");
              }
            );
            
           
            
            //this.scene.start("SceneMain");
          }, this);
        }
        if(!unlockedLevel10){
          this.buttonLocked10 = this.add.sprite(this.game.config.width * 0.5 + 200,470,"buttonLevelLocked");
        }
          //end level 10











          //upgrades button...
          this.btnUpgrades = this.add.sprite(
            this.game.config.width * 0.5,
            450,
            "buttonUpgradesUp"
          );
          this.btnUpgrades.setInteractive();
          this.btnUpgrades.on("pointerover", function() {
            this.btnUpgrades.setTexture("buttonUpgradesOver"); // set the button texture to sprBtnPlayHover
            this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.btnUpgrades.on("pointerout", function() {
            this.setTexture("buttonUpgradesUp");
          });
          this.btnUpgrades.on("pointerdown", function() {
            this.btnUpgrades.setTexture("buttonUpgradesDown");
            this.sfx.btnDown.play();
          }, this);
          this.btnUpgrades.on("pointerup", function() {
            this.btnUpgrades.setTexture("buttonUpgradesUp");
            //
            //Poki...startCommercial();
            //startCommercial();
            muted = 0;
            this.sound.setVolume(muted);
            PokiSDK.commercialBreak().then(
              () => { 
                  console.log('End of commercial break');
                  this.scene.start("SceneUpgradesMenu");
              }
            );
            
          }, this);
          
          /*this.backgrounds = [];
            for (var i = 0; i < 5; i++) {
            var keys = ["sprBg0", "sprBg1"];
            var key = keys[Phaser.Math.Between(0, keys.length - 1)];
            var bg = new ScrollingBackground(this, key, i * 10);
            this.backgrounds.push(bg);
            }*/
    }

    update(){
      //Space Bar down...
      if (this.keySpace.isDown) {
        //reset variables...
        /*beastmode = false;
        beastmode_count = 100;
        speed = speedOriginal;
        spinning = false;
        tackled = false;
        touchdown = false;             
        outOfBounds = false;
        invincible = false;
        //Poki stuff
        gameStart();
        this.scene.start("SceneMain");*/

        muted = 0;
            this.sound.setVolume(muted);
            //Poki stuff...
            PokiSDK.commercialBreak().then(
              () => { //you can also use a normal function here
                //reset variables...
            beastmode = false;
            beastmode_count = 100;
            speed = speedOriginal;
            spinning = false;
            tackled = false;
            touchdown = false;             
            outOfBounds = false;
            invincible = false;
            gameStart();
            muted = 1;
                  console.log('End of commercial break');
                  this.scene.start("SceneMain");
              }
            );
      }

      ///End space bar
        /*for (var i = 0; i < this.backgrounds.length; i++) {
            this.backgrounds[i].update();
          }*/
    }

  }