var cGrass = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function cGrass ()
    {
        Phaser.Scene.call(this, { key: 'cGrass' });
    },

    preload: function ()
    {
        //this.load.image('face', 'assets/pics/bw-face.png');
    },

    create: function ()
    {
      /*
        this.add.sprite(400, 300, 'face').setAlpha(0.2);

        this.input.once('pointerdown', function () {

            console.log('From SceneA to SceneB');

            this.scene.start('sceneB');

        }, this);
        */
    }

});
