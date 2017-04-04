// CI287 Web Based Game Development - Group Project Year 2 (2017)
// Developed by Alan, ??? & Martin
// Code sources: Please see readme file



// Create game variable
var RPGGame = RPGGame || {};

// Set up viewport based on window x/y sizes. Displayed game area should be square and auto scale to viewport size.
var viewPortX = window.screen.availWidth;
var viewPortY = window.screen.availHeight;

var displayedX = 0;
var displayedY = 0;

if (viewPortX < viewPortY) {
    displayedX = viewPortX;
    displayedY = viewPortX;
}
else {
    displayedX = viewPortY;
    displayedY = viewPortY;
}



//initiate the Phaser framework
RPGGame.game = new Phaser.Game(displayedX, displayedY, Phaser.AUTO, '');

RPGGame.game.state.add('boot', RPGGame.boot);
RPGGame.game.state.add('preload', RPGGame.preload);
RPGGame.game.state.add('MainMenuScreen', RPGGame.MainMenuScreen);
RPGGame.game.state.add.('HomeCastleScreen', RPGGame.HomeCastleScreen);
RPGGame.game.state.add('MainWorldScreen', RPGGame.MainWorldScreen);
RPGGame.game.state.add('BattleScreen', RPGGame.BattleScreen);
RPGGame.game.state.add('GameCompleteScreen', RPGGame.GameCompleteScreen);

RPGGame.game.state.start('boot');



// Example code for reference

/**
*{
*    
*  // Load game assets before the game starts    
*  preload: function() {
*      
*      // loadUpdate - This function is not mandatory. *Could be used to generate a loading progress bar.
*      
*  },
*    
*  // Executes after assets are loaded
*  create: function() {},
*    
*  // Updates game model. Runs at approx 60Hz
*  update: function() {},
*  
*  // This function is not mandatory. Executes after update *func. Could be used for debug overlay or HUD running *separate from update func.
*  // render: function() {},
*    
*};
*/
