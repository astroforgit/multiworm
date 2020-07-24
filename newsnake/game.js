var game;
var gameOptions = {}
let snakes = [];
var mapHeight = map[0].length;
var mapWidth = map[0][0].length;
var blocksize = 4;
var Y = blocksize;
var X = Y * 8;


window.onload = function () {
    let gameConfig = {
        type: Phaser.AUTO
        , backgroundColor: 0x87ceeb
        , scale: {
            mode: Phaser.Scale.FIT
            , autoCenter: Phaser.Scale.CENTER_BOTH
            , parent: 'thegame'
            , width: 750
            , height: 500
        }
        , physics: {
            default: 'arcade'
        }
        , scene: playGame
    }
    game = new Phaser.Game(gameConfig);
    window.focus();
}

class playGame extends Phaser.Scene {
    constructor() {
        super('PlayGame');
    }

    preload() {
        this.generateTextures();
        this.initSnake()

    }

    initSnake(){
        if(this.snake){
            for (var j = 0; j < this.snake.length; j++) {
                this.snake[j].destroy();
                this.snake[j].active = false;
            }
        }

        // destroy all heads
        if(this.snakes && this.snakes.length){
            for (var j = 0; j < this.snakes.length; j++) {
                if (this.snakes[j][0]) {
                    this.snakes[j][0].destroy();
                    this.snakes[j][0].active = false;
                }
            }
        }

        this.snake = [];
        this.snake[0] = this.add.sprite(0, 0, 'snakeHead');
        this.snaketmp = this.add.sprite(0, 0, 'snakeBody');
        this.currentplayerindex = 0;
    }


    addNewSnake(){


    }


    destroySnakePart(i){
       if (!this.canMove) return;

       // if last part destroy it
       if(this.snake.length-1==i) {
           this.snake[i].active = false;
           this.snake[i].destroy();
           this.snake.pop();
       }
       // if on middle - cut snake and destroy index piece



        if(this.snake.length-1>i) {
            this.snake[i].active = false;
            this.snake[i].destroy();
            this.snake.splice(i,  1);
        }








    }





   cutSnake(i){
       if (!this.canMove) return;
        console.log('snake length::',this.snake.length);

            this.snake[i]

    }


    generateTextures() {
        assetlist.forEach(({ name, value}) => {
            this.textures.generate(name + "", {
                data: window[name]
                , pixelWidth: blocksize
                , pixelHeight: blocksize
            });
        }, this);
    }


    generateSprites() {
        assetlist.forEach(({name, value}) => {
            this[name] = this.add.group({
                key: name
                , maxSize: 50
                , repeat: 50
                , active: false
                , createCallback: function (obj) {
                    obj.setName(name + this.getLength());
                    obj.x = -100;
                    obj.y = -100;
                    obj.active = false;
                    //console.log('Created', obj.name);
                }
                , removeCallback: function (obj) {
                    console.log('Removed', obj.name);
                }
            });
        }, this);
        debugger;
    }


    create() {
        this.level = 0;
        this.fruits = [];
        this.death = 0;
        this.mleft = 100;
        this.mtop = 95;


        this.canMove = true;
        this.generateSprites();
        this.loadLevel(false);
        this.cursor = this.input.keyboard.createCursorKeys();
        this.ctrkeyObj = this.input.keyboard.addKey('CTRL');
        this.shiftkeyObj = this.input.keyboard.addKey('SHIFT');
    }


    loadLevel(neww) {
        this.snakes = [];
        let tsnake = [];
        for (var i = 0; i < map[this.level].length; i++)
            for (var j = 0; j < map[this.level][0].length; j++) {
                let elem = this.buildStandartElem(map[this.level][i][j], i, j, neww);
                // additional data for levels

                if (map[this.level][i][j] == foodi) {
                    elem.poz = {i: i, j: j};
                    this.fruits.push(elem);

                    if (map[this.level][i + 1][j] == wall){
                        elem.rotation = 0;
                    } else if(j + 1 < map[this.level][0].length && map[this.level][i][j + 1] == wall){
                        elem.rotation = -Math.PI / 2;
                    } else{
                        elem.rotation = Math.PI;
                    }
                }


                if (map[this.level][i][j] >= 5) {
                    if (map[this.level][i][j] != 5) {
                        console.log('add snake part!!',map[this.level][i][j]);
                        this.snake[map[this.level][i][j] - 5] = this.snakeBody.getFirstDead();
                        this.snake[map[this.level][i][j] - 5].active = true;
                    } else {
                        this.snake[map[this.level][i][j] - 5].rotation = 0;
                    }
                    this.snake[map[this.level][i][j] - 5].setX(this.mleft + j * X);
                    this.snake[map[this.level][i][j] - 5].setY(this.mtop + i * X);

                }

                if (map[this.level][i][j] >= 'A' && map[this.level][i][j] <= 'D') {
                    let charnumber = map[this.level][i][j].charCodeAt(0) -  65;
                    if (map[this.level][i][j] != 'A') {
                        console.log('add snake part!!',map[this.level][i][j]);
                        tsnake[charnumber] = this.snakeBody.getFirstDead();
                        tsnake[charnumber].active = true;
                    } else {
                        tsnake[0] = this.add.sprite(0, 0, 'snakeHead');
                        tsnake[charnumber].rotation = 0;
                        tsnake[charnumber].active = true;
                    }
                    tsnake[charnumber].setX(this.mleft + j * X);
                    tsnake[charnumber].setY(this.mtop + i * X);

                }
                this.inputbool = true;
            } //end for
            this.snakes.push(this.snake);
            this.snakes.push(tsnake);
    }

    getAssetRecordByValue(val) {
        return assetlist.find((el) => {
            return el.value == val
        })
    }


    buildStandartElem(elemtype, i, j, neww) {
        //elemtype = elemtype>6?6:elemtype;
        if (elemtype >= 5) return;
        let res = this.getAssetRecordByValue(elemtype);
        let name = "";
        if (res) name = res.name;
        let spriteelement = this[name];
        if (!spriteelement) return;
        let block = spriteelement.getFirstDead();
        block.setX(this.mleft + j * X);
        block.setY(this.mtop + i * X);
        block.active = true;
        return block;
    }


    fallSnake() {
        if (!this.inputbool) {
            return;
        }
        for (var i = this.snake.length - 1; i >= 0; i--) {
            this.moveSnakeHead(i, 0, X, true);
        }
    }

    anyDirectionKeyIsDown() {
        if ((this.cursor.up.isDown || this.cursor.down.isDown || this.cursor.right.isDown || this.cursor.left.isDown)) return true;
        return false;
    }

    cantMove() {
        let up = this.caanMove(this.snake[0].x, this.snake[0].y - X);
        let down = this.caanMove(this.snake[0].x, this.snake[0].y + X);
        let left = this.caanMove(this.snake[0].x - X, this.snake[0].y);
        let right = this.caanMove(this.snake[0].x + X, this.snake[0].y);
        return !(up || down || left || right);
    }


    caanMove(x, y) {
        let one = this.isEmpty(x, y);
        let two = this.isTail(x, y);
        return one && !two;
    }


    moveTail() {
        for (var i = this.snake.length - 1; i >= 1; i--) {
            this.moveSnakeHead(i, this.snake[i - 1].x - this.snake[i].x, this.snake[i - 1].y - this.snake[i].y);
        }
    }


    moveSnakeHead(i, x, y, fall) {
        fall = fall || false;

        let newwX = this.snake[i].x + x;
        let newwY = this.snake[i].y + y;

        if (i == this.snake.length - 2) {
            this.snaketmp.x = this.snake[i].x;
            this.snaketmp.y = this.snake[i].y;
        }

        if (fall) {
            this.snaketmp.x = -100;
            this.snaketmp.y = -100;
        }

        let speed = 0;
        if (i == 0 || i == this.snake.length - 1 || fall) {
            if (fall) {
                speed = 100;
            } else {
                speed = 150;
            }

            this.tweens.add({
                targets: this.snake[i],
                props: {
                    y: {
                        value: this.snake[i].y + y
                    },
                    x: {
                        value: this.snake[i].x + x
                    }
                },
                duration: speed,
                callbackScope: this,
                onComplete: function (event, sprite) {
                    console.log("snake animation complete!");
                }
            });


        } else {
            this.snake[i].x += x;
            this.snake[i].y += y;
        }

        if (this.canMove && fall) {
            this.canMove = false;
            this.time.delayedCall(160, function () {
                this.canMove = true;
            }, null, this);
        } else if (this.canMove) {
            this.canMove = false;
            this.time.delayedCall(250, function () {
                console.log("callback", this);
                this.canMove = true;
            }, null, this);
        }


        if (this.isSpike(newwX, newwY)) {
            this.killSnake();
        }

        else if (i == 0 && this.isFood(newwX, newwY)) {
            //this.okSound.play();
            if (this.fruits.length > 0) {
                this.snake[this.snake.length] = this.snakeBody.getFirstDead();
                this.snake[this.snake.length-1].active = true;
                this.snake[this.snake.length-1].x = this.snake[this.snake.length-2].x;
                this.snake[this.snake.length-1].y = this.snake[this.snake.length-2].y;
            }
        }



        if (this.fruits.length==0) {
                    if (!this.inputbool)
                        return;
                    this.inputbool= false;
                    this.time.delayedCall(500, function () {
                        this.nextLevel();
                    }, null, this);
        }


    }

    switchPlayer(){
        if (!this.canMove) return;

        let allsnakescount = this.snakes.length;
        this.currentplayerindex
        if (this.currentplayerindex==this.snakes.length-1){
            this.currentplayerindex = 0;
        } else{
            this.currentplayerindex = this.currentplayerindex +1;
        }
        this.snake = this.snakes[this.currentplayerindex];


    }


    inputs() {
        if (!this.inputbool) return;

        if (this.anyDirectionKeyIsDown() && this.cantMove()) {
            this.killSnake();
        }

        if (this.input.keyboard.checkDown(this.shiftkeyObj, 250))
        {
            this.canMove = false;
            this.time.delayedCall(250, function () {
                console.log("callback", this);
                this.canMove = true;
                this.switchPlayer();
            }, null, this);
        }

        if (this.input.keyboard.checkDown(this.ctrkeyObj, 250)){
            this.canMove = false;

            this.time.delayedCall(250, function () {
                this.canMove = true;
                this.destroySnakePart(3);
            }, null, this);
        }

        if (this.cursor.up.isDown && this.caanMove(this.snake[0].x, this.snake[0].y - X)) {
            this.moveTail();
            this.moveSnakeHead(0, 0, -X);
            this.snake[0].rotation = 0;


        } else if (this.cursor.down.isDown && this.caanMove(this.snake[0].x, this.snake[0].y + X)) {
            this.moveTail();
            this.moveSnakeHead(0, 0, +X);
            this.snake[0].rotation = Math.PI;
        } else if (this.cursor.left.isDown && this.caanMove(this.snake[0].x - X, this.snake[0].y)) {
            this.moveTail();
            this.moveSnakeHead(0, -X, 0);
            this.snake[0].rotation = -Math.PI / 2;
        } else if (this.cursor.right.isDown && this.caanMove(this.snake[0].x + X, this.snake[0].y)) {
            this.moveTail();
            this.moveSnakeHead(0, +X, 0);
            this.snake[0].rotation = Math.PI / 2;
        }
    }


    getIJ(x, y) {
        let newX = Math.floor((x - this.mleft) / X);
        let newY = Math.floor((y - this.mtop) / X);
        return {
            i: newX
            , j: newY
        };
    }

    isTail(x, y) {
        let tmp = this.getIJ(x, y);
        let tmp2 = false;
        this.snake.forEach(function (e) {
            if (e.x == x && e.y == y)
                tmp2 = true;
        }, this);
        return tmp2;
    }


    isWallType(x, y){
        let iswall =  this.isWall(x,y);
        let isothersnake = this.isOtherSnake(x,y);
        return iswall && isothersnake;
    }

    isOtherSnake(x,y){
        let tmp = this.getIJ(x, y);
        let lol= true;
        if(this.snakes && this.snakes.length){
            for (var j = 0; j < this.snakes.length; j++) {
                if (this.currentplayerindex!=j){
                    let tmpsnake = this.snakes[j];
                    tmpsnake.forEach(function (elem) {
                        let tmp1 = this.getIJ(elem.x, elem.y);
                        if ((tmp1.i === tmp.i) && (tmp1.j === tmp.j)){
                            lol = false;
                        }
                    }, this);
                }
            }
        }
        return lol;
    }


    isWall(x,y){
        let tmp = this.getIJ(x, y);
        return (map[this.level][tmp.j][tmp.i] != wall);

    }


    isEmpty(x, y) {
        let tmp = this.getIJ(x, y);
        if (tmp.j >= mapHeight || tmp.i >= mapWidth) {
            return true;
        } else {
                return this.isWallType(x,y)
                // check wall

            }
    }

    // check if element could be walk over
    hasGround(x,y){
        let tmp = this.getIJ(x, y);
        if (tmp.j >= mapHeight || tmp.i >= mapWidth) {
            return true;
        } else {
                // food
                if (map[this.level][tmp.j][tmp.i] == foodi) {
                    let lol = true;
                    this.fruits.forEach(function (e) {
                        if (e.poz.i == tmp.j && e.poz.j == tmp.i)
                            lol = false;
                    }, this);
                    return lol;
                } else {
                    return this.isEmpty(x,y);
                }
        }
    }




    isSpike(x, y) {
        let tmp = this.getIJ(x, y);
        if (tmp.j >= mapHeight || tmp.i >= mapWidth)
            return false;
        else
            return (map[this.level][tmp.j][tmp.i] == spikei);
    }


    isFood(x, y) {
        let tmp = this.getIJ(x, y);
        if (tmp.j >= mapHeight || tmp.i >= mapWidth)
            return false;
        else if (map[this.level][tmp.j][tmp.i] == foodi) {
            let tmp2 = false;
            this.fruits.forEach(function(e){
                if (e.poz.i == tmp.j && e.poz.j == tmp.i) {
                    tmp2 = true;
                    this.tweens.add({
                        targets: e,
                        scaleX: 0,
                        scaleY: 0,
                        duration: 100,
                        callbackScope: this,
                        onComplete: function (event, sprite) {
                           e.destroy();
                        }
                    });
                    this.fruits.splice(this.fruits.indexOf(e), 1);
                }
            }, this);
            return tmp2;
        }
    }

    killSnake() {
        if (!this.inputbool){
            return;
        }
        this.death++;
        //this.boomSound.play();
        this.inputbool = false;

        this.time.delayedCall(150, function () {
            this.snaketmp.x = -100;
            this.snaketmp.y = -100;
            for (var j = 0; j < this.snake.length; j++) {
                this.snake[j].destroy();
                this.snake[j].active = false;
            }
        }, null, this);

        this.time.delayedCall(200, function () {
            this.resetLevel(false);
        }, null, this);
    }


    nextLevel(){
        this.level++;
        this.resetLevel(true);
    }


    resetAllGroups(){
        assetlist.forEach( ({name, value})=>{
            this[name].setX(-100);
            this[name].setY(-100);
            this[name].getChildren().forEach((el)=>el.active=false);
        });
    }


    resetLevel(neww){
        this.resetAllGroups();
        this.snaketmp.x = -100;
        this.snaketmp.y = -100;
        this.fruits = [];
        this.initSnake();
        this.loadLevel(neww);
    }


    snakeShouldFall(){
        let shouldfall = true;
        for (var i = 0; i < this.snake.length; i++) {
            if (!this.hasGround(this.snake[i].x, this.snake[i].y + X)) {
                shouldfall = false;
                break;
            }
        }
        return shouldfall;
    }

    update() {
        if (this.canMove) {
            if (this.snakeShouldFall()) {
                this.fallSnake();
            } else {
                this.inputs();
            }
        }
    }
}
