//(c)BG BizGames GmbH

var config = {
    type: Phaser.AUTO,
    width: OPTIONS.gamewidth,
    height: OPTIONS.gameheight,
    backgroundColor: OPTIONS.gamebackgroundcolor,
    scene: [ cPreloader, cEarth, cMainMenu, cQuizList ]
};



var game = new Phaser.Game(config);
