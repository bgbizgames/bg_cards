var cMainMenu = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function cMainMenu ()
    {
        Phaser.Scene.call(this, { key: 'cMainMenu' });
    },

    preload: function ()
    {


    },

    create: function ()
    {
      var bg = this.add.image(512, 384, 'bgtablet');
      this.add.image(512, 384, 'dude');


      console.log('cMainMenu.create2');
      /*
      var mybtnOK = new cButton('OK', function(){
        console.log("success test");
      });
      */
      var mybtnOK = new cButton('OK', this.testit.bind(this));

      mybtnOK.drawButton(this, 400, 300, 180, 60);

      var mybtnCancel = new cButton('Cancel');
      mybtnCancel.drawButton(this, 400, 380, 180, 60);


      //this.drawButton();



    },

    testit: function(){
        console.log("success test");
        console.log(this.testit);
    }
});
