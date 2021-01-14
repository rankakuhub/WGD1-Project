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

    //objects load
    this.load.image('arcade1', '../assets/images/Arcade1.png');
    this.load.image('arcade2', '../assets/images/Arcade2.png');
    this.load.image('arcade3', '../assets/images/Arcade3.png');
    this.load.image('arcade4', '../assets/images/Arcade4.png');
    this.load.image('arcade5', '../assets/images/Arcade5.png');

    this.load.image('freezer', '../assets/images/Freezer.png');
    this.load.image('kitchentop', '../assets/images/Kitchen.png');
    this.load.image('toilet', '../assets/images/Pooper.png');
    this.load.image('sink2', '../assets/images/Sink2.png');

    this.load.image('bed', '../assets/images/Bed.png');
    this.load.image('counter', '../assets/images/SideCounter.png');

    this.load.image('desk', '../assets/images/Desk.png');
    this.load.image('seat', '../assets/images/Seat1.png');
    this.load.image('bookshelf', '../assets/images/Bookshelf.png');
    this.load.image('drink', '../assets/images/DrinkTable.png');

    this.load.image('tv', '../assets/images/TV.png');
    this.load.image('sofa1', '../assets/images/Sofa1.png');
    this.load.image('seat2', '../assets/images/LivingRoomSeat.png');
    this.load.image('sofa2', '../assets/images/Sofa2.png');


    this.load.image('sink', '../assets/images/Sink.png');
    this.load.image('table', '../assets/images/Table.png');

    this.load.image('bullet', '../assets/images/Bullet1.png');

    //load map
    this.load.json('map', '../assets/tilemaps/Level1.json');

}

let inputCursor;
let wallsCollider
let playerSprite;
let enemySprite;
let arcadeSprite;
let bathroomSprite;
let kitchenSprite;
let dinningSprite;
let bedroomSprite;
let officeSprite;
let lounge1Sprite;
let lounge2Sprite;

let enemySprite1;
let enemySprite2;
let enemySprite3;
let enemySprite4;
let enemySprite5;
let enemySprite6;
let enemySprite7;
let enemySprite8;
let enemySprite9;
let enemySprite10;

let score = 0;
let scoreText;
let playerBullet;
let mouse;
let control = false;
let worldBounds;

function create() {
    this.add.image(0,0, 'ground').setOrigin(0,0);
    playerSprite = this.physics.add.sprite(130, 445, 'player');
    playerSprite.setScale(0.15);

    wallsCollider = this.physics.add.staticGroup();
    wallsCollider.create(0, 0, 'walls');
    wallsCollider = this.add.image(0,0, 'walls').setOrigin(0,0);
    this.physics.add.collider(playerSprite, wallsCollider);

    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    playerBullet = this.physics.add.sprite(playerSprite.x,playerSprite.y,'bullet');
    playerBullet.setScale(0)
    mouse = this.input.mousePointer;

    //enemy spam...
    enemySprite = this.physics.add.sprite(180, 350, 'enemy');
    enemySprite.setScale(0.15);
    enemySprite1 = this.physics.add.sprite(290, 280, 'enemy');
    enemySprite1.setScale(0.15);
    enemySprite2 = this.physics.add.sprite(310, 190, 'enemy');
    enemySprite2.setScale(0.15);
    enemySprite3 = this.physics.add.sprite(130, 230, 'enemy');
    enemySprite3.setScale(0.15);
    enemySprite4 = this.physics.add.sprite(205, 110, 'enemy');
    enemySprite4.setScale(0.15);
    enemySprite5 = this.physics.add.sprite(400, 235, 'enemy');
    enemySprite5.setScale(0.15);
    enemySprite6 = this.physics.add.sprite(460, 140, 'enemy');
    enemySprite6.setScale(0.15);
    enemySprite7 = this.physics.add.sprite(520, 110, 'enemy');
    enemySprite7.setScale(0.15);
    enemySprite8 = this.physics.add.sprite(740, 40, 'enemy');
    enemySprite8.setScale(0.15);
    enemySprite9 = this.physics.add.sprite(650, 375, 'enemy');
    enemySprite9.setScale(0.15);
    enemySprite10 = this.physics.add.sprite(450, 500, 'enemy');
    enemySprite10.setScale(0.15);

    //objects
    arcadeSprite = this.physics.add.sprite(390, 105, 'arcade1');
    arcadeSprite.setScale(0.5);
    arcadeSprite = this.physics.add.sprite(460, 105, 'arcade2');
    arcadeSprite.setScale(0.5);
    arcadeSprite = this.physics.add.sprite(370, 175, 'arcade3');
    arcadeSprite.setScale(0.5);
    arcadeSprite = this.physics.add.sprite(370, 240, 'arcade4');
    arcadeSprite.setScale(0.5);
    arcadeSprite = this.physics.add.sprite(460, 260, 'arcade5');
    arcadeSprite.setScale(0.5);

    bathroomSprite = this.physics.add.sprite(580, 33, 'toilet');
    bathroomSprite.setScale(0.35);
    bathroomSprite = this.physics.add.sprite(660, 63, 'sink');
    bathroomSprite.setScale(0.35);

    bedroomSprite = this.physics.add.sprite(780, 40, 'bed');
    bedroomSprite.setScale(0.35);
    bedroomSprite = this.physics.add.sprite(694, 20, 'counter');
    bedroomSprite.setScale(0.2);

    officeSprite = this.physics.add.sprite(710, 185, 'desk');
    officeSprite.setScale(0.27);
    officeSprite = this.physics.add.sprite(740, 185, 'seat');
    officeSprite.setScale(0.27);
    officeSprite = this.physics.add.sprite(630, 160, 'bookshelf');
    officeSprite.setScale(0.4);
    officeSprite = this.physics.add.sprite(600, 270, 'drink');
    officeSprite.setScale(0.4);

    lounge1Sprite = this.physics.add.sprite(120, 320, 'sofa2');
    lounge1Sprite.setScale(0.35);
    lounge1Sprite = this.physics.add.sprite(275, 360, 'seat2');
    lounge1Sprite.setScale(0.27);

    lounge2Sprite = this.physics.add.sprite(550, 508, 'tv');
    lounge2Sprite.setScale(0.4);
    lounge2Sprite = this.physics.add.sprite(550, 430, 'sofa1');
    lounge2Sprite.setScale(0.35);


    kitchenSprite = this.physics.add.sprite(205, 95, 'freezer');
    kitchenSprite.setScale(0.5);
    kitchenSprite = this.physics.add.sprite(90, 112, 'kitchentop');
    kitchenSprite.setScale(0.5);
    kitchenSprite = this.physics.add.sprite(100, 85, 'sink2');
    kitchenSprite.setScale(0.5);

    dinningSprite = this.physics.add.sprite(220, 195, 'table');
    dinningSprite.setScale(0.2);



    this.keys = this.input.keyboard.createCursorKeys();
    this.cameras.main.startFollow(playerSprite);
    this.cameras.main.zoom = 3;
    inputCursor = this.input;
   // wallsCollider.setImmovable(true);
    playerSprite.setCollideWorldBounds(true);

   // this.physics.add.collider(playerSprite, wallsCollider);

    worldBounds = this.physics.world.bounds;
}

function update(){

    let angle = Phaser.Math.Angle.Between(playerSprite.x,playerSprite.y,inputCursor.x,inputCursor.y);
    playerSprite.setRotation(angle);playerSprite.setRotation(angle);
    playerSprite.setRotation(angle+Math.PI/2);

    if(mouse.isDown && control === false){
        //for fire again
        playerBullet = this.physics.add.sprite(playerSprite.x,playerSprite.y,'bullet');
        //move to mouse position
        this.physics.moveTo(playerBullet,inputCursor.x,inputCursor.y, 250);
        playerBullet.setScale(0.2);
        control = true;
    }

    if(playerBullet.x > worldBounds.width || playerBullet.y > worldBounds.height ||playerBullet.x < 0 || playerBullet.y < 0)
    {
        control = false;
    }

    this.physics.add.overlap(playerBullet, enemySprite, destroy,null,this);
    this.physics.add.overlap(playerBullet, enemySprite1, destroy,null,this);
    this.physics.add.overlap(playerBullet, enemySprite2, destroy,null,this);
    this.physics.add.overlap(playerBullet, enemySprite3, destroy,null,this);
    this.physics.add.overlap(playerBullet, enemySprite4, destroy,null,this);
    this.physics.add.overlap(playerBullet, enemySprite5, destroy,null,this);
    this.physics.add.overlap(playerBullet, enemySprite6, destroy,null,this);
    this.physics.add.overlap(playerBullet, enemySprite7, destroy,null,this);
    this.physics.add.overlap(playerBullet, enemySprite8, destroy,null,this);
    this.physics.add.overlap(playerBullet, enemySprite9, destroy,null,this);
    this.physics.add.overlap(playerBullet, enemySprite10, destroy,null,this);


    let angle2 = Phaser.Math.Angle.Between(enemySprite.x,enemySprite.y,playerSprite.x,playerSprite.y);
    enemySprite.setRotation(angle2);enemySprite.setRotation(angle2);
    enemySprite.setRotation(angle2+Math.PI/2);

    let angle3 = Phaser.Math.Angle.Between(enemySprite1.x,enemySprite1.y,playerSprite.x,playerSprite.y);
    enemySprite1.setRotation(angle3);enemySprite1.setRotation(angle3);
    enemySprite1.setRotation(angle3+Math.PI/2);

    let angle4 = Phaser.Math.Angle.Between(enemySprite2.x,enemySprite2.y,playerSprite.x,playerSprite.y);
    enemySprite2.setRotation(angle4);enemySprite2.setRotation(angle4);
    enemySprite2.setRotation(angle4+Math.PI/2);

    let angle5 = Phaser.Math.Angle.Between(enemySprite3.x,enemySprite3.y,playerSprite.x,playerSprite.y);
    enemySprite3.setRotation(angle5);enemySprite3.setRotation(angle5);
    enemySprite3.setRotation(angle5+Math.PI/2);

    let angle6 = Phaser.Math.Angle.Between(enemySprite4.x,enemySprite4.y,playerSprite.x,playerSprite.y);
    enemySprite4.setRotation(angle6);enemySprite4.setRotation(angle6);
    enemySprite4.setRotation(angle6+Math.PI/2);

    let angle7 = Phaser.Math.Angle.Between(enemySprite5.x,enemySprite5.y,playerSprite.x,playerSprite.y);
    enemySprite5.setRotation(angle7);enemySprite5.setRotation(angle7);
    enemySprite5.setRotation(angle7+Math.PI/2);

    let angle8 = Phaser.Math.Angle.Between(enemySprite6.x,enemySprite6.y,playerSprite.x,playerSprite.y);
    enemySprite6.setRotation(angle8);enemySprite6.setRotation(angle8);
    enemySprite6.setRotation(angle8+Math.PI/2);

    let angle9 = Phaser.Math.Angle.Between(enemySprite7.x,enemySprite7.y,playerSprite.x,playerSprite.y);
    enemySprite7.setRotation(angle9);enemySprite7.setRotation(angle9);
    enemySprite7.setRotation(angle9+Math.PI/2);

    let angle10 = Phaser.Math.Angle.Between(enemySprite8.x,enemySprite8.y,playerSprite.x,playerSprite.y);
    enemySprite.setRotation(angle10);enemySprite8.setRotation(angle10);
    enemySprite.setRotation(angle10+Math.PI/2);

    let angle11 = Phaser.Math.Angle.Between(enemySprite9.x,enemySprite9.y,playerSprite.x,playerSprite.y);
    enemySprite9.setRotation(angle11);enemySprite9.setRotation(angle11);
    enemySprite9.setRotation(angle11+Math.PI/2);

    let angle12 = Phaser.Math.Angle.Between(enemySprite10.x,enemySprite10.y,playerSprite.x,playerSprite.y);
    enemySprite10.setRotation(angle12);enemySprite10.setRotation(angle12);
    enemySprite10.setRotation(angle12+Math.PI/2);


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

function destroy(playerBullet,enemySprite,) {

    enemySprite.disableBody(true,true);
    playerBullet.disableBody(true,true);
    control=false;
    score += 10;
    scoreText.setText('Score: ' + score);
}