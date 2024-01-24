class SceneMainMenu extends Phaser.Scene {
    constructor() {
      super({ key: "SceneMainMenu" });
    }
    preload() {
      StartLoading();
      this.load.on('progress', function (value) {
      //console.log(value);
      });
      this.load.on('complete', function () {
        //console.log('complete');
        LoadingComplete();
      });
      //by me...
      this.load.image("backgroundImage", "content/backgroundImage.jpg");
        this.load.image("buttonCreditsUp", "content/buttonCredits.png");
        this.load.image("buttonCreditsOver", "content/buttonCreditsHover.png");
        this.load.image("buttonCreditsDown", "content/buttonCreditsDown.png");
        /*this.load.image("buttonOptionsUp", "content/buttonOptions.png");
        this.load.image("buttonOptionsOver", "content/buttonOptionsHover.png");
        this.load.image("buttonOptionsDown", "content/buttonOptionsDown.png");*/
        this.load.image("field_alley", "content/field_alley.jpg");
        this.load.image("menuMainBg", "content/menuMainBg.jpg");
      //
        this.load.image("sprBg0", "content/sprBg0.png");
        this.load.image("sprBg1", "content/sprBg1.png");
        this.load.image("sprBtnPlay", "content/sprBtnPlay.png");
        this.load.image("sprBtnPlayHover", "content/sprBtnPlayHover.png");
        this.load.image("sprBtnPlayDown", "content/sprBtnPlayDown.png");
        this.load.image("sprBtnRestart", "content/sprBtnRestart.png");
        this.load.image("sprBtnRestartHover", "content/sprBtnRestartHover.png");
        this.load.image("sprBtnRestartDown", "content/sprBtnRestartDown.png");
        this.load.audio("sndBtnOver", "content/sndBtnOver.wav");
        this.load.audio("sndBtnDown", "content/sndBtnDown.wav");

    }
    create() {
      //by me...
      this.add.image(this.game.config.width * 0.5, this.game.config.height * 0.5, 'backgroundImage');
      this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      //this.add.image(160, 284, 'menuMainBg');
      this.add.image(this.game.config.width * 0.5, this.game.config.height * 0.5, 'menuMainBg');
      //this.scene.start("SceneMain");
      this.sfx = {
        btnOver: this.sound.add("sndBtnOver"),
        btnDown: this.sound.add("sndBtnDown")
      };
      this.btnPlay = this.add.sprite(
        this.game.config.width * 0.5,
        //this.game.config.height * 0.5,
        400,
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
        //Poki stuff
startCommercialFirst();
        //Poki...
        gameStart();
        //this.scene.start("SceneMain",{ down: 1, touchdown: false, yards_to_go:100, tds:0 });
      }, this);
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
//options button...
/*this.btnOptions = this.add.sprite(
  this.game.config.width * 0.5,
  450,
  "buttonOptionsUp"
);
this.btnOptions.setInteractive();
this.btnOptions.on("pointerover", function() {
  this.btnOptions.setTexture("buttonOptionsOver"); // set the button texture to sprBtnPlayHover
  this.sfx.btnOver.play(); // play the button over sound
}, this);
this.btnOptions.on("pointerout", function() {
  this.setTexture("buttonOptionsUp");
});
this.btnOptions.on("pointerdown", function() {
  this.btnOptions.setTexture("buttonOptionsDown");
  this.sfx.btnDown.play();
}, this);
this.btnOptions.on("pointerup", function() {
  this.btnOptions.setTexture("buttonOptionsUp");
  //
  this.scene.start("SceneOptionsMenu");
}, this);*/

//Credits button...
this.btnCredits = this.add.sprite(
  this.game.config.width * 0.5,
  450,
  "buttonCreditsUp"
);
this.btnCredits.setInteractive();
this.btnCredits.on("pointerover", function() {
  this.btnCredits.setTexture("buttonCreditsOver"); // set the button texture to sprBtnPlayHover
  this.sfx.btnOver.play(); // play the button over sound
}, this);
this.btnCredits.on("pointerout", function() {
  this.setTexture("buttonCreditsUp");
});
this.btnCredits.on("pointerdown", function() {
  this.btnCredits.setTexture("buttonCreditsDown");
  this.sfx.btnDown.play();
}, this);
this.btnCredits.on("pointerup", function() {
  this.btnCredits.setTexture("buttonCreditsUp");
  //
  this.scene.start("SceneCreditsMenu");
}, this);


    }

    update(){
      if (this.keySpace.isDown && !firstPlay) {
              //Poki stuff
              startCommercialFirst();
              //Poki...
              gameStart();
              firstPlay = true;
              //this.scene.remove("SceneMainMenu");
      }
       // for (var i = 0; i < this.backgrounds.length; i++) {
       //     this.backgrounds[i].update();
        //  }
    }

  }

