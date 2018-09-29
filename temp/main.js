var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    
    scene: [ Preloader, MainMenu, Game ]
};

var game = new Phaser.Game(config);
