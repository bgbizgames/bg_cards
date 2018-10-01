var cMainMenu = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function cMainMenu ()
    {
        Phaser.Scene.call(this, { key: 'cMainMenu' });
    },

    preload: function ()
    {


    },

    create: function ()
    {
      var bg = this.add.image(512, 384, 'bgblur');
      this.add.image(100, 384, 'dude');


      console.log('cMainMenu.create');
      /*
      var mybtnOK = new cButton('OK', function(){
        console.log("success test");
      });
      */
      var mybtnOK = new cButton('OK', this.execOK.bind(this));
      mybtnOK.draw(this, 400, 300, 180, 60);

      var mybtnCancel = new cButton('Cancel');
      mybtnCancel.draw(this, 400, 380, 180, 60);


      //this.drawButton();



    },

    execOK: function(){
        console.log("button ok clicked");
        this.scene.start('cQuizList');
    }
});
