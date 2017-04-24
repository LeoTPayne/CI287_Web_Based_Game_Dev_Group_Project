// preload.js initialises the game assets

var RPGGame = RPGGame || {};

RPGGame.preload = function(){};

RPGGame.preload.prototype = {
    
    // Load game assets
    preload: function(){
        
        // Assets to be added here...
        // example code
        // this.load.image('rock', 'assets/images/rock.png');
        // this.load.spritesheet('player', 'assets/images/player.png', 12, 12);
        // this.load.audio('swordclash', 'assets/audio/swordclash.ogg');
        
    },
    
    create: function(){
        
        // Calls 'MainMenuScreen' state
        this.state.start('MainMenuScreen');
        
    }
    
};