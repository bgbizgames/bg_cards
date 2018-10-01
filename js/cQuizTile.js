var cQuizTile = new Phaser.Class({

    initialize: function cQuizTile () {
      console.log("cQuizTile:constructor");

    },

    draw: function(target, x, y){
      console.log('cQuizList.draw');


      w = 300;
      h = 200;


      var graphics = target.add.graphics({ lineStyle: { width: 1, color: 0xaa0000 }, fillStyle: { color: 0x0000aa } });
      var rect = new Phaser.Geom.Rectangle();

      graphics.clear();
      rect.x = x;
      rect.y = y;
      rect.width = w;
      rect.height = h;

      var area = Phaser.Geom.Rectangle.Area(rect);
      //graphics.fillRectShape(rect);
      //graphics.fillRoundedRect(32, 32, w, h, 32, 10);

      graphics.fillRoundedRect(x, y, w, h, { tl: 32, tr: 22, bl: 12, br: 0 });

      //sprite.mask = new Phaser.Display.Masks.GeometryMask(graphics);
    },

    drawtile: function(target, x, y){
      var sprite = target.add.sprite(x, y, 'qtmusic');
      //sprite.scale.setTo(rand, rand);

    },





    onClick: function(){
      console.log('cQuizTile.onClick');
    },

});
