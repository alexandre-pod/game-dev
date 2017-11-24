window.addEventListener('load', () => {
	console.log('Starting...');
	var game = new Game(800, 600);
});

class Game {
	/**
	 * The Game
	 * @param {Number} gameWidth 
	 * @param {Number} gameHeight 
	 */
	constructor(gameWidth, gameHeight) {
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
		this.game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, '', this);
	}

	/**
	 * Loading the assets as sprites
	 */
	preload(){
		this.game.load.image('background', 'assets/Base pack/bg.png');
		this.game.load.image('ground', 'assets/Base pack/Tiles/grassMid.png');
		this.game.load.image('coin', 'assets/Base pack/Items/coinGold.png');
		this.game.load.spritesheet('dude', 'assets/Base pack/Player/p1_spritesheet.png', 70, 94);
	}

	create(){
		this.game.add.sprite(0, 0, 'coin');
	}

	update(){

	}
}