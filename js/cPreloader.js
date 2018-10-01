var cPreloader = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function cPreloader (){
        Phaser.Scene.call(this, { key: 'cPreloader' });
    },


    init: function(){

      var canvas = this.sys.game.canvas;
      var fullscreen = this.sys.game.device.fullscreen;

      if (!fullscreen.available)
      {
          return;
      }

      startBtn = document.createElement('button');
      stopBtn = document.createElement('button');

      startBtn.textContent = 'Start Fullscreen';
      stopBtn.textContent = 'Stop Fullscreen';

      canvas.parentNode.appendChild(startBtn);
      canvas.parentNode.appendChild(stopBtn);

      startBtn.addEventListener('click', function ()
      {
          if (document.fullscreenElement) { return; }

          canvas[fullscreen.request]();
      });

      stopBtn.addEventListener('click', function ()
      {
          document[fullscreen.cancel]();
      });

      //this.events.on('shutdown', shutdown, this);



      console.log('init');
    },


    preload: function (){

      var progressBar = this.add.graphics();
      var progressBox = this.add.graphics();
      progressBox.fillStyle(0x222222, 0.8);
      progressBox.fillRect(240, 270, 320, 50);

      this.load.on('progress', function (value) {
          //console.log(value);
          progressBar.clear();
          progressBar.fillStyle(0xffffff, 1);
          progressBar.fillRect(250, 280, 300 * value, 30);

      });
      this.load.on('fileprogress', function (file) {
        //console.log(file.src);
      });

      this.load.on('complete', function () {
          //console.log('complete');
          progressBar.destroy();
          progressBox.destroy();
      });

      //LOAD Backgrounds

      this.load.image('bgblur', OPTIONS.imgbase + 'bg/bgblur1024x768.jpg');
      this.load.image('bgdepth', OPTIONS.imgbase + 'bg/bgdepth1024x768.jpg');
      this.load.image('bggradient', OPTIONS.imgbase + 'bg/bggradient1024x768.jpg');

      //LOAD Quiztiles
      this.load.image('qtanimals', OPTIONS.imgbase + 'quiztiles/animals.jpg');
      this.load.image('qtarchitecture', OPTIONS.imgbase + 'quiztiles/architecture.jpg');
      this.load.image('qtmusic', OPTIONS.imgbase + 'quiztiles/music.jpg');

      //LOAD Trash

      this.load.image('bgwall', OPTIONS.imgbase + 'bg_wall.png');
      this.load.image('bgearth', OPTIONS.imgbase + 'bg_earth.png');
      this.load.image('bggrass', OPTIONS.imgbase + 'bg_grass.png');

      this.load.image('bgsky', OPTIONS.imgbase + 'bg_sky.png');
      this.load.image('star', OPTIONS.imgbase + 'star.png');
      this.load.image('bomb', OPTIONS.imgbase + 'bomb.png');

      //this.load.image('earth', 'assets/earth.png');
      this.load.image('ground', OPTIONS.imgbase + 'platform.png');
      //this.load.image('star', 'assets/star.png');
      //this.load.image('bomb', 'assets/bomb.png');
      this.load.spritesheet('dude', OPTIONS.imgbase + 'dude.png', { frameWidth: 32, frameHeight: 48 });
      this.load.image('btn1', OPTIONS.imgbase + 'btn1.png'); //180x60
      this.load.image('btn2', OPTIONS.imgbase + 'btn2.png');
      this.load.image('btn3', OPTIONS.imgbase + 'btn3.png');
      this.load.spritesheet('btn', OPTIONS.imgbase + 'btn_stripe.png', { frameWidth: 180, frameHeight: 60 });




      console.log('cPreloader.preload');




    },

    create: function () {
      var bg = this.add.image(512, 384, 'bgblur');
      //game.add.tileSprite(0, 0, 800, 600, 'bggradient');
      bg.alpha = 0;
      this.tweens.add({
          targets: bg,
          alpha: 1,
          duration: 1000,
          //ease: 'Power2',
          delay: 100,
          callbackScope: this,
          //onComplete: this.goMenu2()
          onComplete: function(){this.goMenu();}
      });

      console.log('cPreloader.create');
      //this.scene.start('cMainMenu');
      //this.goscene();
    },

    goMenu: function() {
        console.log('goMenu');
        this.scene.start('cMainMenu');
    }


});
