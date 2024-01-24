var config = {
  type: Phaser.WEBGL,
  //width: 320,
  //height: 568,
  width: 1008,
  height: 568,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
},
  //backgroundColor: "black",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  scene: [
      SceneMainMenu,
      SceneMain,
      SceneStadium,
      SceneGameOver,
      SceneUpgradesMenu,
      SceneOptionsMenu,
      SceneCreditsMenu
  ],
  pixelArt: true,
  roundPixels: true
};


//console.log(config.width);

var adBlocker = false;
var activateEndzone = false;
var beastmode = false;
var beastmode_count = 0;
var beastmode_count_max = 0;
var beastmode_time = 150;
var beastmodeBar;
var beastmodeIcon;
var bonusLevel = 0;
var boostIcon;
var boostBar;
var boostCount = 100;
var boosting = false;
var buttonBoost;
var buttonSpin;
var emitter;
var emitterOn = false;
var emitterOnCount = 0;
var down = 1;
var field;
var firstPlay = false;
var instructions1;
var instructions2;
var instructions3;
var instructionsGo;
var instructionsCount = 0;
var invincible = false;
var level = 1;
var mobile = false;
var mobileUp = false;
var mobileDown = false;
var mobileLeft = false;
var mobileRight = false;
var moveX = 0;
var moveY = 0;
var muddyFactor = 0.5;
var musicLoaded = false;
var muted = 1;
var outOfBounds = false;
var particles;
//var pickupBoost;
var pickupCounter = 0;
var rank = 'Rookie';
var soundButton1;
var soundButton2;
var score = 10;
var speed = 200;
var speedChase = 100;
var speedBoost = 200;
var speedXEnemy = 50;
var speedOriginal = 200;
var spinCount = 3;
var spinIcon;
var spinning = false;
var stars = 0;
var stiffArmIcon;
var strength = 0;
var strengthIcon;
var tackled = false;
var touchdown = false;
var touchdownYards = 100;
var unlockedBonus1 = false;
var unlockedBonus2 = false;
var unlockedBonus3 = false;
var unlockedBonus4 = false;
var unlockedBonus5 = false;
var unlockedLevel1 = false;
var unlockedLevel2 = false;
var unlockedLevel3 = false;
var unlockedLevel4 = false;
var unlockedLevel5 = false;
var unlockedLevel6 = false;
var unlockedLevel7 = false;
var unlockedLevel8 = false;
var unlockedLevel9 = false;
var unlockedLevel10 = false;
var upgradeBeastmode = 0;
var upgradeBeastmodePrice = 1000;
var upgradeBlocker = 0;
var upgradeBlockerLeft = false;
var upgradeBlockerCenter = false;
var upgradeBlockerRight = false;
var upgradeBlockerPrice = 15000;
var upgradeContract = 0;
var upgradeContractPrice = 1000;
var upgradeSpeed = 0;
var upgradeSpeedPrice = 1000;
var upgradeSkills = 0;
var upgradeSkillsPrice = 1000;
var upgradeStrength = 0;
var upgradeStrengthPrice = 1000;
var yards = 0;
var yardsToGo = 100;
var yardsTotal = 0;

var game = new Phaser.Game(config);


//Poki stuff
PokiSDK.init().then(
() => {
    // successfully initialized
    console.log("PokiSDK initialized");
    // continue to game
}
).catch(
() => {
    // initialized but the user has an adblock
    console.log("Adblock enabled");
    adBlocker = true;
    // feel free to kindly ask the user to disable AdBlock, like forcing weird usernames or showing a sad face; be creative!
    // continue to the game
}
);

//console.log(document.location.host);
if(document.location.host != "www.glowmonkey.com"){
//Poki lock
var _0x2837=["\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4A\x4B\x4C\x4D\x4E\x4F\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5A\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6A\x6B\x6C\x6D\x6E\x6F\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2B\x2F\x3D","","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74","\x63\x68\x61\x72\x41\x74","\x5F\x6B\x65\x79\x53\x74\x72","\x6C\x65\x6E\x67\x74\x68","\x72\x65\x70\x6C\x61\x63\x65","\x69\x6E\x64\x65\x78\x4F\x66","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x6E","\x62\x47\x39\x6A\x59\x57\x78\x6F\x62\x33\x4E\x30\x4C\x77\x3D\x3D","\x63\x57\x45\x74\x5A\x6D\x6C\x73\x5A\x58\x4D\x75\x63\x47\x39\x72\x61\x53\x35\x6A\x62\x32\x30\x3D","\x4E\x57\x52\x6B\x4D\x6D\x45\x31\x5A\x44\x51\x74\x4D\x44\x45\x31\x5A\x69\x30\x78\x4D\x57\x56\x68\x4C\x57\x46\x6B\x4E\x54\x59\x74\x4F\x57\x4E\x69\x4E\x6D\x51\x77\x5A\x44\x6B\x35\x4E\x57\x59\x33\x4C\x6E\x42\x76\x61\x32\x6B\x74\x5A\x32\x52\x75\x4C\x6D\x4E\x76\x62\x51\x3D\x3D","\x62\x47\x39\x6A\x59\x57\x78\x6F\x62\x33\x4E\x30\x4F\x67\x3D\x3D","\x64\x65\x63\x6F\x64\x65","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x77\x77\x77","\x2F\x2F","\x73\x70\x6C\x69\x74","\x73\x75\x62\x73\x74\x72","\x49\x33\x56\x69\x5a\x7a\x49\x7a\x4e\x51\x3d\x3d","\x74\x6F\x70"];(function checkInit(){var _0x4d45x2={_keyStr:_0x2837[0],encode:function(_0x4d45x3){var _0x4d45x4=_0x2837[1];var _0x4d45x5,_0x4d45x6,_0x4d45x7,_0x4d45x8,_0x4d45x9,_0x4d45xa,_0x4d45xb;var _0x4d45xc=0;_0x4d45x3= _0x4d45x2._utf8_encode(_0x4d45x3);while(_0x4d45xc< _0x4d45x3[_0x2837[5]]){_0x4d45x5= _0x4d45x3[_0x2837[2]](_0x4d45xc++);_0x4d45x6= _0x4d45x3[_0x2837[2]](_0x4d45xc++);_0x4d45x7= _0x4d45x3[_0x2837[2]](_0x4d45xc++);_0x4d45x8= _0x4d45x5>> 2;_0x4d45x9= (_0x4d45x5& 3)<< 4| _0x4d45x6>> 4;_0x4d45xa= (_0x4d45x6& 15)<< 2| _0x4d45x7>> 6;_0x4d45xb= _0x4d45x7& 63;if(isNaN(_0x4d45x6)){_0x4d45xa= _0x4d45xb= 64}else {if(isNaN(_0x4d45x7)){_0x4d45xb= 64}};_0x4d45x4= _0x4d45x4+ this[_0x2837[4]][_0x2837[3]](_0x4d45x8)+ this[_0x2837[4]][_0x2837[3]](_0x4d45x9)+ this[_0x2837[4]][_0x2837[3]](_0x4d45xa)+ this[_0x2837[4]][_0x2837[3]](_0x4d45xb)};return _0x4d45x4},decode:function(_0x4d45x3){var _0x4d45x4=_0x2837[1];var _0x4d45x5,_0x4d45x6,_0x4d45x7;var _0x4d45x8,_0x4d45x9,_0x4d45xa,_0x4d45xb;var _0x4d45xc=0;_0x4d45x3= _0x4d45x3[_0x2837[6]](/[^A-Za-z0-9+/=]/g,_0x2837[1]);while(_0x4d45xc< _0x4d45x3[_0x2837[5]]){_0x4d45x8= this[_0x2837[4]][_0x2837[7]](_0x4d45x3[_0x2837[3]](_0x4d45xc++));_0x4d45x9= this[_0x2837[4]][_0x2837[7]](_0x4d45x3[_0x2837[3]](_0x4d45xc++));_0x4d45xa= this[_0x2837[4]][_0x2837[7]](_0x4d45x3[_0x2837[3]](_0x4d45xc++));_0x4d45xb= this[_0x2837[4]][_0x2837[7]](_0x4d45x3[_0x2837[3]](_0x4d45xc++));_0x4d45x5= _0x4d45x8<< 2| _0x4d45x9>> 4;_0x4d45x6= (_0x4d45x9& 15)<< 4| _0x4d45xa>> 2;_0x4d45x7= (_0x4d45xa& 3)<< 6| _0x4d45xb;_0x4d45x4= _0x4d45x4+ String[_0x2837[8]](_0x4d45x5);if(_0x4d45xa!= 64){_0x4d45x4= _0x4d45x4+ String[_0x2837[8]](_0x4d45x6)};if(_0x4d45xb!= 64){_0x4d45x4= _0x4d45x4+ String[_0x2837[8]](_0x4d45x7)}};_0x4d45x4= _0x4d45x2._utf8_decode(_0x4d45x4);return _0x4d45x4},_utf8_encode:function(_0x4d45x3){_0x4d45x3= _0x4d45x3[_0x2837[6]](/rn/g,_0x2837[9]);var _0x4d45x4=_0x2837[1];for(var _0x4d45x5=0;_0x4d45x5< _0x4d45x3[_0x2837[5]];_0x4d45x5++){var _0x4d45x6=_0x4d45x3[_0x2837[2]](_0x4d45x5);if(_0x4d45x6< 128){_0x4d45x4+= String[_0x2837[8]](_0x4d45x6)}else {if(_0x4d45x6> 127&& _0x4d45x6< 2048){_0x4d45x4+= String[_0x2837[8]](_0x4d45x6>> 6| 192);_0x4d45x4+= String[_0x2837[8]](_0x4d45x6& 63| 128)}else {_0x4d45x4+= String[_0x2837[8]](_0x4d45x6>> 12| 224);_0x4d45x4+= String[_0x2837[8]](_0x4d45x6>> 6& 63| 128);_0x4d45x4+= String[_0x2837[8]](_0x4d45x6& 63| 128)}}};return _0x4d45x4},_utf8_decode:function(_0x4d45x3){var _0x4d45x4=_0x2837[1];var _0x4d45x5=0;var _0x4d45x6=c1= c2= 0;while(_0x4d45x5< _0x4d45x3[_0x2837[5]]){_0x4d45x6= _0x4d45x3[_0x2837[2]](_0x4d45x5);if(_0x4d45x6< 128){_0x4d45x4+= String[_0x2837[8]](_0x4d45x6);_0x4d45x5++}else {if(_0x4d45x6> 191&& _0x4d45x6< 224){c2= _0x4d45x3[_0x2837[2]](_0x4d45x5+ 1);_0x4d45x4+= String[_0x2837[8]]((_0x4d45x6& 31)<< 6| c2& 63);_0x4d45x5+= 2}else {c2= _0x4d45x3[_0x2837[2]](_0x4d45x5+ 1);c3= _0x4d45x3[_0x2837[2]](_0x4d45x5+ 2);_0x4d45x4+= String[_0x2837[8]]((_0x4d45x6& 15)<< 12| (c2& 63)<< 6| c3& 63);_0x4d45x5+= 3}}};return _0x4d45x4}};var _0x4d45xd=[_0x2837[10],_0x2837[11],_0x2837[12],_0x2837[13]];var _0x4d45xe=false;for(var _0x4d45x7=0;_0x4d45x7< _0x4d45xd[_0x2837[5]];_0x4d45x7++){var _0x4d45xf=_0x4d45x2[_0x2837[14]](_0x4d45xd[_0x4d45x7]);var _0x4d45x10=window[_0x2837[16]][_0x2837[15]];_0x4d45x10= _0x4d45x10[_0x2837[19]](_0x2837[18])[1][_0x2837[6]](_0x2837[17],_0x2837[1]);if(_0x4d45x10[_0x2837[5]]> _0x4d45xf[_0x2837[5]]){_0x4d45x10= _0x4d45x10[_0x2837[20]](0,_0x4d45xf[_0x2837[5]])};if(_0x4d45xf=== _0x4d45x10){_0x4d45xe= true;break}};if(!_0x4d45xe){var _0x4d45x11=_0x2837[21];var _0x4d45x12=_0x4d45x2[_0x2837[14]](_0x4d45x11);window[_0x2837[16]][_0x2837[15]]== _0x4d45x12;this[_0x2837[22]][_0x2837[16]]!== this[_0x2837[16]]&& (this[_0x2837[22]][_0x2837[16]]== this[_0x2837[16]])}})();
console.log("not at www.glowmonkey.com");
}

var StartLoading = function () {
  PokiSDK.gameLoadingStart();
}

var LoadingComplete = function() {
  console.log("We're done loading!");
  PokiSDK.gameLoadingFinished();
}


var startCommercial = function(){
  //muted = 0;
  console.log("Commercial Starting");
   //Poki stuff...
  PokiSDK.commercialBreak().then(
    () => { //you can also use a normal function here
        console.log('End of commercial break');
        //muted = 1;
    }
  );
  //end Poki stuff
}


var startCommercialFirst = function(){
  console.log("Commercial Starting");
  muted = 0;
   //Poki stuff...

  PokiSDK.commercialBreak().then(
    () => { //you can also use a normal function here
      firstPlay = true;
        console.log('End of commercial break');
        game.scene.start("SceneGameOver",{ down: 1, touchdown: false, yards_to_go:100, tds:0 });
        game.scene.remove("SceneMainMenu");
        muted = 1;
    }
  );

 game.scene.start("SceneGameOver",{ down: 1, touchdown: false, yards_to_go:100, tds:0 });
 game.scene.remove("SceneMainMenu");
  //end Poki stuff
}

var gameStart = function(){
  console.log("gameStarting :)")
  //Poki...

  PokiSDK.gameplayStart();

}

var gameStop = function(){
  console.log("gameStopping");
  //Poki...

  PokiSDK.gameplayStop();

}

