window.addEventListener('load', () => {
	console.log('Starting...');
});

class Game {
	/**
	 * The Game
	 * @param {Number} gameWidth 
	 * @param {Number} gameHeight 
	 */
	construct(gameWidth, gameHeight) {
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
		this.game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });
	}

	/**
	 * Loading the assets as sprites
	 */
	preload(){
	}

	create(){

	}

	update(){

	}
}