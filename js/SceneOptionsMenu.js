class SceneOptionsMenu extends Phaser.Scene {
    constructor() {
      super({ key: "SceneOptionsMenu" });
    }
    preload() {
      //by me...
        this.load.image("menuBg", "content/menuBg.jpg");
        this.load.image("star_icon", "content/star_icon.png");


    }
    create() {
      //by me...
      this.add.image(160, 284, 'menuBg');
      this.add.image(305, 15, 'star_icon');
      //this.scene.start("SceneMain");
      this.sfx = {
        btnOver: this.sound.add("sndBtnOver"),
        btnDown: this.sound.add("sndBtnDown")
      };

      this.btnPlay = this.add.sprite(
        this.game.config.width * 0.5,
        500,
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
        this.scene.start("SceneMainMenu");
      }, this);
//STARS TEXT
        this.starsText = this.add.text(290, 6, "Stars " + stars, {
            fontFamily: 'monospace',
            fontSize: 15,
            fontStyle: 'bold',
            color: '#ffff00',
            align: 'right'
        });
        this.starsText.setOrigin(1.0,0.0);

    }

    update(){
        this.starsText.setText(stars);
    }

  }