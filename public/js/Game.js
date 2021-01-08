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
    this.load.image('player', '../assets/images/MainCharacterAim.png');
    this.load.image('enemy', '../assets/images/EnemyAim.png');

    this.load.json('map', '../assets/tilemaps/Level1.json');

}

var inputCursor;
var wallsCollider
let playerSprite
let enemySprite

function create() {

    this.add.image(0,0, 'ground').setOrigin(0,0);
    wallsCollider = this.add.sprite(0,0, 'walls').setOrigin(0,0);

    //main player
    playerSprite = this.physics.add.sprite(130, 445, 'player');
    playerSprite.setScale(0.15);

    //enemy spam...

    enemySprite = this.physics.add.sprite(130, 350, 'enemy');
    enemySprite.setScale(0.15);
    enemySprite = this.physics.add.sprite(290, 280, 'enemy');
    enemySprite.setScale(0.15);
    enemySprite = this.physics.add.sprite(310, 190, 'enemy');
    enemySprite.setScale(0.15);
    enemySprite = this.physics.add.sprite(130, 230, 'enemy');
    enemySprite.setScale(0.15);
    enemySprite = this.physics.add.sprite(50, 90, 'enemy');
    enemySprite.setScale(0.15);

    enemySprite = this.physics.add.sprite(375, 250, 'enemy');
    enemySprite.setScale(0.15);
    enemySprite = this.physics.add.sprite(460, 100, 'enemy');
    enemySprite.setScale(0.15);
    enemySprite = this.physics.add.sprite(520, 110, 'enemy');
    enemySprite.setScale(0.15);
    enemySprite = this.physics.add.sprite(740, 40, 'enemy');
    enemySprite.setScale(0.15);
    enemySprite = this.physics.add.sprite(650, 375, 'enemy');
    enemySprite.setScale(0.15);
    enemySprite = this.physics.add.sprite(450, 500, 'enemy');
    enemySprite.setScale(0.15);


    this.keys = this.input.keyboard.createCursorKeys();
    this.cameras.main.startFollow(playerSprite);
    this.cameras.main.zoom = 3;
    inputCursor = this.input;
    playerSprite.setCollideWorldBounds(true);
    

}

function update(){

    let angle = Phaser.Math.Angle.Between(playerSprite.x,playerSprite.y,inputCursor.x,inputCursor.y);
    playerSprite.setRotation(angle);playerSprite.setRotation(angle);
    playerSprite.setRotation(angle+Math.PI/2);

    let angle2 = Phaser.Math.Angle.Between(enemySprite.x,enemySprite.y,playerSprite.x,playerSprite.y);
    enemySprite.setRotation(angle2);enemySprite.setRotation(angle2);
    enemySprite.setRotation(angle2+Math.PI/2);

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
