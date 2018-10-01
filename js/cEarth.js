var cEarth = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function cEarth () {
        Phaser.Scene.call(this, { key: 'cEarth' });
    },

    preload: function () {

    },

    create: function (){
      this.add.image(400, 300, 'bgearth');
      this.add.image(50, 50, 'star');
      this.add.image(50, 150, 'bomb');
      console.log('cEarth.create');
    }

});
