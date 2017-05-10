// Here I set all the variables called in the code below
var platforms;
var score = 0;
var scoreText;
var speed = 100;
var Game = {

    
    // Loading the
    preload : function() {
    game.load.image('sky', './assets/images/sky.png');
    game.load.image('ground', './assets/images/platform.png');   
    game.load.image('star', './assets/images/star.png');
    game.load.image('diamond', './assets/images/diamond.png');    
    game.load.spritesheet('baddie', './assets/images/baddie.png', 32, 32);
    game.load.spritesheet('dude', 'assets/images/dude.png', 32, 48);
    },

    create : function() {

 

   game.add.sprite(0, 0, 'star');
   game.stage.backgroundColor = '#061f27';

   game.world.resize(4000, 900);


        

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
     game.add.tileSprite(0, 0, 4000, 900, 'sky');

        
    player = game.add.sprite(10, game.world.height - 100, 'dude');
    baddie = game.add.sprite(500, game.world.height - 100, 'baddie');
    baddie1 = game.add.sprite(300, game.world.height - 300, 'baddie');
    diamond = game.add.sprite(850, game.world.height -650, 'diamond');    
        
    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.4;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
   
        
     //  We need to enable physics on the player
    game.physics.arcade.enable(baddie);
    game.physics.arcade.enable(baddie1);   
    
    
    // Create diamond     
    game.physics.arcade.enable(diamond);    
        
    diamond.body.bounce.y = 1.0;
    diamond.body.gravity.y = 300;
    diamond.body.collideWorldBounds = true;
    
    
    
        
    //  Player physics properties. Give the little guy a slight bounce.
    baddie.body.bounce.y = 0.2;
    baddie.body.gravity.y = 300;
    baddie.body.collideWorldBounds = true;    
        
        
    baddie1.body.bounce.y = 0.5;
    baddie1.body.gravity.y = 300;
    baddie1.body.collideWorldBounds = true;        
               
        
    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 32, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(20, 1);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create two ledges
    var ledge = platforms.create(0, 720, 'ground');

    ledge.body.immovable = true;

    ledge = platforms.create(650, 650, 'ground');

    ledge.body.immovable = true;

        
    //  Two new platforms above the exisitng ones
    var ledge = platforms.create(0, 520, 'ground');

    ledge.body.immovable = true;

    ledge = platforms.create(650, 350, 'ground');

    ledge.body.immovable = true;    
        
        

    stars = game.add.group();

    stars.enableBody = true;

    //  Here we'll create 12 of them evenly spaced apart
    for (var i = 0; i < 12; i++)
    {
        //  Create a star inside of the 'stars' group
        var star = stars.create(i * 70, 600, 'star');

        //  Let gravity do its thing
        star.body.gravity.y = 60;

        //  This just gives each star a slightly random bounce value
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
        
        
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    scoreText.fixedToCamera = true;
    scoreText.cameraOffset.setTo(0, 0);
        
    cursors = game.input.keyboard.createCursorKeys();
  
    game.camera.follow(player);
    },



    update: function() {
 
        
  game.physics.arcade.collide(player, platforms);        
  game.physics.arcade.collide(baddie, platforms);
  game.physics.arcade.collide(baddie1, platforms);
  game.physics.arcade.overlap(player, baddie, killplayer, null, this);
  game.physics.arcade.overlap(player, baddie1, killplayer, null, this);
  game.physics.arcade.overlap(player, stars, collectStar, null, this);
  game.physics.arcade.collide(stars, platforms);
  game.physics.arcade.collide(diamond, platforms);
  game.physics.arcade.overlap(player, diamond, killplayer, null, this);      
  player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
    //  Stand still
        player.animations.stop();

        player.frame = 4;
    }
        
    

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350;
    }   
    
    if(baddie.x == 500){
     baddie.body.velocity.x = -speed;
    // baddie.animations.play('bleft');
    }
        
    else if(baddie.x < 300){
     baddie.body.velocity.x = speed;
   //  baddie.animations.play('bright');
    }
        
        
    if(baddie1.x == 300){
     baddie1.body.velocity.x = -speed;
    // baddie.animations.play('bright');
    }
        
    else if(baddie1.x < 100){
     baddie1.body.velocity.x = speed;
   //  baddie.animations.play('bleft');
    }    
        
        
    function killplayer (player, baddie)
        { 
       player.kill();
        score = score - score;
        scoreText.text = 'score: ' + score;     
        game.state.start('Game_Over');  
        }
          
            
    function collectStar (player, star) {

    // Removes the star from the screen
    star.kill();
    score += 10;
    scoreText.text = 'score: ' + score; 
    }
    
        // Removes the diamond from the screen
    function collectDiamond (player, diamond) 
    {
    player.kill();
    game.state.start('Game_Won');    
    } 
    
        
        
        
    }




};