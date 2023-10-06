var config = {
    type: Phaser.CANVAS,//Phaser.AUTO
    width: 1550,//800//1550
    height: 750,//600
    // type: Phaser.AUTO,
    // // width: 1800,
    // // height: 900,
    // scale: {
    //     mode: Phaser.Scale.ScaleModes.EXACT_FIT,
    // },
    // physics: {
    //     default: 'arcade',
    //     arcade: {
    //         gravity: { y: 200 }
    //     }
    // },
    scene: [Level1]
};

var game = new Phaser.Game(config);






































// //initiate the phaser framework
// // var game = new Phaser.Game(640, 360, Phaser.CANVAS);//canvas
// var game = new Phaser.Game(960,540,Phaser.CANVAS,'');

// //this game will have only 1 state
// var GameState = {
//     //loads the game assets
//     preload: function () {
//         this.load.image('bg', 'asstes/images/Bg.png');
//     },
//     //executed after everything is loaded
//     create: function () {
//         this.background = this.game.add.sprite(0, 0, 'bg');
//     },
//     //this is executed multiple times per second
//     update: function () {

//     }
// };


// game.state.add('GameState', GameState);
// game.state.start('GameState');