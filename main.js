var Game;


game = new Phaser.Game(600, 450, Phaser.AUTO, '');

game.state.add('Menu', Menu);
game.state.start('Menu');
game.state.add('Game_Over', Game_Over);
game.state.add('Game', Game);
game.state.add('Game_Won', Game_Won);