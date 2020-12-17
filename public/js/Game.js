var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent:'my game',

    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0}
        }
    },
    scene: {
        preload: preload,
        create: create,
    }
};

var game = new Phaser.Game(config);

function preload() {

    this.load.image('tiles', '../assets/tilesets/level1__tilesheet.png');
    this.load.image('ground', '../assets/images/Level1_Ground.png');
    this.load.image('walls', '../assets/images/Level1_Walls.png');

    this.load.json('map', '../assets/tilemaps/Level1.json');

}

function create() {

    const backgroundImage = this.add.image(0,0, 'ground').setOrigin(0,0);
    const Image = this.add.image(0,0, 'walls').setOrigin(0,0);



}
