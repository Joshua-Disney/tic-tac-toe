const config = {
	type: Phaser.AUTO,
	width: 480,
	height: 640,
	physics: {
		default: 'arcade',
	},
	backgroundColor: '92f8b3',
	scene: [StartScene, GameScene, EndScene],
};

const game = new Phaser.Game(config);