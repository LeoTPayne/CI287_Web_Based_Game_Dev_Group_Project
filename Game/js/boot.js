// boot.js file initialises the game

var RPGGame = RPGGame || {};

RPGGame.boot = function(){};

RPGGame.boot.prototype = {
    
    // This is not mandatory. Can be used to display splash icon, splash screen or loading bar.
    //preload: function() {}
    
    create: function(){
        
        // Set background screen to black
        this.game.stage.backgroundColor = '#000';
        
        // Centre game horizontally
        this.scale.pageAlignHorizontally = true;
        
        // Activate Phaser ARCADE physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        // Calls 'preload' state
        this.state.start('preload');
        
    }
    
};