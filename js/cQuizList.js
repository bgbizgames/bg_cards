var cQuizList = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function cQuizList ()
    {
        Phaser.Scene.call(this, { key: 'cQuizList' });
    },

    preload: function ()
    {


    },

    create: function () {
      console.log("cQuizList.create");
      var bg = this.add.image(512, 384, 'bggradient');

      var myQuizTile1 = new cQuizTile();
      myQuizTile1.draw(this, 30, 30);
      //myQuizTile1.drawtile(this, 30, 330);

      //var myQuizTile2 = new cQuizTile();
      //myQuizTile2.draw(this, 250, 30);

      //var myQuizTile3 = new cQuizTile();
      //myQuizTile3.draw(this, 470, 30);



    },

/*
    draw: function(target, x, y){
      console.log('cQuizList.draw');


      w = 100;
      h = 50;


      var graphics = this.add.graphics({ lineStyle: { width: 1, color: 0xaa0000 }, fillStyle: { color: 0x0000aa } });
      var rect = new Phaser.Geom.Rectangle();

      graphics.clear();
      rect.x = x;
      rect.y = y;
      rect.width = w;
      rect.height = h;

      var area = Phaser.Geom.Rectangle.Area(rect);
      graphics.fillRectShape(rect);
    },


*/


});
