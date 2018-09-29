class cButton {



  constructor(newtext){
    console.log("cButton:constructor");
    this.newtext = newtext;
  }

  drawButton(target, x, y, width, height) {
    console.log('drawbutton: x: ' + x);
    console.log('drawbutton: y: ' + y);
    console.log('drawbutton: w: ' + width);
    console.log('drawbutton: h: ' + height);
    var sprite = target.add.sprite(x, y, 'btn').setInteractive();

    sprite.on('pointerdown', function (pointer) {

        this.setTint(0xff0000);

    });

    sprite.on('pointerout', function (pointer) {

        this.clearTint();

    });

    sprite.on('pointerup', function (pointer) {

        this.clearTint();

    });


    var t = target.make.text({
        x: x,
        y: y,
        //text: this.newtext,
        text: this.newtext,
        origin: { x: 0.5, y: 0.5 },
        style: {
            font: OPTIONS.btnfont,
            fill: 'white',
            align: 'center',
            wordWrap: { width: width, useAdvancedWrap: true }
        }
    });
    sprite.alpha=0;
    t.alpha = 0;
    target.tweens.add({
        targets: [t, sprite],
        alpha: 1,
        duration: 2000,
        ease: 'Power4',
        x: '+=200',
        delay: 100,
        callbackScope: this,
        //onComplete: this.goMenu2()
        //onComplete: function(){this.goMenu();}
    });


  }

}
