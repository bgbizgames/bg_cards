var Game = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Game ()
    {
        Phaser.Scene.call(this, { key: 'game' });
    },

    preload: function()
    {
        this.load.image('sky', 'assets/sky.png');


    },


    create: function ()
    {
      this.add.image(400, 300, 'sky');

    },


    update: function()
    {

    }


});
