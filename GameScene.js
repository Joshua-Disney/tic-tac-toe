let plot
let grid = []

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene'})
    }

    preload() {

    }

    create() {
        
    }

    // helper functions
    endGame() {
        this.scene.stop('GameScene');
        this.scene.start('EndScene');
        game.input.enabled = true;
      }
}