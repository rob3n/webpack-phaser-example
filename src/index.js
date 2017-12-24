import 'pixi'
import 'p2'
import Phaser from 'phaser'


var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('logo', './assets/images/phaser.png');
}

function create() {
    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
};

function update() {
    // ¯ \_(ツ)_/¯
    // "surprise me"
}