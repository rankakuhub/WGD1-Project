const config = {
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
        update: update,
    }
};

const game = new Phaser.Game(config);

function preload() {

    this.load.image('tiles', '../assets/tilesets/level1__tilesheet.png');
    this.load.image('ground', '../assets/images/Level1_Ground.png');
    this.load.image('walls', '../assets/images/Level1_Walls.png');
    this.load.image('player', '../assets/images/PlayerCharacter.png');

    this.load.json('map', '../assets/tilemaps/Level1.json');

}

//var inputCursor;
let playerSprite
function create() {

    this.add.image(0,0, 'ground').setOrigin(0,0);
    this.add.image(0,0, 'walls').setOrigin(0,0);
    playerSprite = this.physics.add.sprite(130, 445, 'player');
    playerSprite.setScale(0.3);

    this.keys = this.input.keyboard.createCursorKeys();
    this.cameras.main.startFollow(playerSprite);
    this.cameras.main.zoom = 3;
   // this.input = inputCursor;

}

function update(){
   // let angle=Phaser.Math.Angle.Between(playerSprite.x,playerSprite.y,inputCursor.x,inputCursor.y);

    this.keys = this.input.keyboard.addKeys(
        {up:Phaser.Input.Keyboard.KeyCodes.W,
            down:Phaser.Input.Keyboard.KeyCodes.S,
            left:Phaser.Input.Keyboard.KeyCodes.A,
            right:Phaser.Input.Keyboard.KeyCodes.D});

    if (this.keys.left.isDown) {
        playerSprite.x -= 1.5;
    }
    if (this.keys.right.isDown) {
        playerSprite.x += 1.5;
    }
    if (this.keys.up.isDown) {
        playerSprite.y -= 1.5;
    }
    if (this.keys.down.isDown) {
        playerSprite.y += 1.5;
    }


}
