/* 
    Source File: COMP397-W2016-MailPilotDemo-master/ game.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Apr 3, 2016
    Date Last  Modified: Apr 18, 2016
    Last Modified by: Viranch Shah, student, Centennial College
    
    Program Description: Contains assets and other required features needed during game play.
    Revision History: updated assets
                      scenes created
                      updated assets
                      updated assets
*/

/// <reference path = "_reference.ts" />

// global variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;
var scoreboard: managers.Scoreboard;
var percentLoaded: number;

// Game Scenes
var menu: scenes.Menu;
var instructions: scenes.Instructions;
var play: scenes.Play;
var levelOne: scenes.LevelOne;
var levelTwo: scenes.LevelTwo;
var levelThree: scenes.LevelThree;
var end: scenes.End;
var levelOneEnd: scenes.LevelOneEnd;
var levelTwoEnd: scenes.LevelTwoEnd;
var levelOneLose: scenes.LevelOneLose;
var levelTwoLose: scenes.LevelTwoLose;
var levelThreeLose: scenes.LevelThreeLose;

var assetData: objects.Asset[] = [
    // Add your Assets here
    { id: "GameTrack", src: "../../Assets/audio/Gametrack.mp3" },          // gametrack
    { id: "Menu_bg", src: "../../Assets/images/menu_bg.jpg" },          // menu screen - background images
    { id: "Instructions", src: "../../Assets/images/instructions.jpg" },          // instruction s screen - background images
    { id: "Desert", src: "../../Assets/images/desert.jpg" },            // level one - background
    { id: "PlayerLevelOne", src: "../../Assets/images/player_level1.png" },     // level one - player
    { id: "LevelOneEnemy1", src: "../../Assets/images/enemy1_level1.png" },     // level one - enemy
    { id: "LevelOneEnemy2", src: "../../Assets/images/enemy2_level1.png" },     // level one - enemy
    { id: "LevelOneEnemy3", src: "../../Assets/images/enemy3_level1.png" },     // level one - enemy
    { id: "Stone", src: "../../Assets/images/stone.png" },                      // level one - obstacle
    { id: "Fuel", src: "../../Assets/images/gas.png" },                         // level one - collector
    { id: "sea", src: "../../Assets/images/sea.jpg" },                          // level two - sea
    { id: "island", src: "../../Assets/images/island.png" },                    // level two - island
    { id: "ammo", src: "../../Assets/images/ammo.png" },                    // level two - ammo
    { id: "player_level2", src: "../../Assets/images/player_level2.png" },      // level two - player
    { id: "LevelTwoEnemy1", src: "../../Assets/images/level2_enemy1.png" },            // level two - enemy
    { id: "LevelTwoEnemy2", src: "../../Assets/images/level2_enemy2.png" },            // level two - enemy
    { id: "LevelTwoEnemy3", src: "../../Assets/images/level2_enemy3.png" },            // level two - enemy
    { id: "LevelTwoCrash", src: "../../Assets/audio/crash.wav" },            // level two - plane impact sound    
    { id: "SpaceShipSound", src: "../../Assets/audio/spaceship.wav" },            // level two - spaceship sound    
    { id: "TankEngine", src: "../../Assets/audio/tankEngine.mp3" },                         // level one - sound
    { id: "TankCrash", src: "../../Assets/audio/tankCrash.mp3" },                         // level one - sound
    { id: "Collect", src: "../../Assets/audio/collect.mp3" },                         // level one - sound
    { id: "LevelClear", src: "../../Assets/audio/Levelclear.mp3" },                         // level clear - sound
    { id: "GameWin", src: "../../Assets/audio/win.mp3" },                         // game win - sound
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "RestartButton", src: "../../Assets/images/RestartButton.png" },
    { id: "BackButton", src: "../../Assets/images/BackButton.png" },
    { id: "LevelOneButton", src: "../../Assets/images/levelone.png" },
    { id: "LevelTwoButton", src: "../../Assets/images/leveltwo.png" },
    { id: "LevelThreeButton", src: "../../Assets/images/levelthree.png" },
    { id: "GameOverButton", src: "../../Assets/images/gameover.png" },
    { id: "NextButton", src: "../../Assets/images/NextButton.png" },
    { id: "PlayNowButton", src: "../../Assets/images/playNow.png" },
    { id: "InstructionsButton", src: "../../Assets/images/help.png" },
    { id: "CloseButton", src: "../../Assets/images/closeButton.png" },
    { id: "Space", src: "../../Assets/images/background.png" },             // background for gameplay
    { id: "Bullet", src: "../../Assets/images/bullet.png" },                // play scene - bullet
    { id: "Enemy1", src: "../../Assets/images/enemy1.png" },                // play scene - enemy
    { id: "Enemy2", src: "../../Assets/images/enemy2.png" },                // play scene - enemy
    { id: "Enemy3", src: "../../Assets/images/enemy3.png" },                // play scene - enemy
    { id: "Enemy4", src: "../../Assets/images/enemy4.png" },                // play scene - enemy
    { id: "Enemy5", src: "../../Assets/images/enemy5.png" },                // play scene - enemy
    { id: "Enemy6", src: "../../Assets/images/enemy6.png" },                // play scene - enemy
    { id: "Enemy7", src: "../../Assets/images/enemy7.png" },                // play scene - enemy
    { id: "Enemy8", src: "../../Assets/images/enemy8.png" },                // play scene - enemy
    { id: "Planet1", src: "../../Assets/images/planet1.png" },              // play scene - obstacle
    { id: "Planet2", src: "../../Assets/images/planet2.png" },              // play scene - obstacle
    { id: "Planet3", src: "../../Assets/images/planet3.png" },              // play scene - obstacle
    { id: "Planet4", src: "../../Assets/images/planet4.png" },              // play scene - obstacle
    { id: "Player", src: "../../Assets/images/player_level3.png" },                // play scene - player
    { id: "Stone1", src: "../../Assets/images/stone1.png" },                // play scene - obstacle
    { id: "Stone2", src: "../../Assets/images/stone2.png" },                // play scene - obstacle
    { id: "Star", src: "../../Assets/images/star.png" },                    // play scene - star
    { id: "Shoot", src: "../../Assets/audio/Shoot.mp3" },                   // play scene - bullet shot sound
    { id: "Engine", src: "../../Assets/audio/Spaceship.mp3" },              // play scene - spaceship sound
    { id: "Collect", src: "../../Assets/audio/Collect.mp3" },               // play scene - star collect sound
    { id: "Crash", src: "../../Assets/audio/Crash.mp3" },                   // play scene - obstacle collide with player
    { id: "BulletCrash", src: "../../Assets/audio/BulletCrash.mp3" },       // play scene - bullet collide with enemy
    { id: "AmmoSound", src: "../../Assets/audio/ammo.mp3" },       // play scene - ammo collide with enemy
    { id: "Instructions", src: "../../Assets/images/instructions.jpg" },    // instructions scene - background
    { id: "PlayNow", src: "../../Assets/images/playNow.png" },              // menu scene - PlayNow button
    { id: "Help", src: "../../Assets/images/help.png" },                    // menu scene - Help button
    { id: "GotIt", src: "../../Assets/images/gotit.png" },                  // instructions scene - Got It button
    { id: "Up", src: "../../Assets/images/up.png" },                        // instructions scene - Up button
    { id: "Down", src: "../../Assets/images/down.png" },                    // instructions scene - Down button
    { id: "PlayAgain", src: "../../Assets/images/playAgain.png" },          // end scene - PlayAgain button
    { id: "Home", src: "../../Assets/images/home.png" }
];

function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.addEventListener("progress", handleProgress);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function handleProgress(event: ProgressEvent): void {
    percentLoaded = event.loaded;
    document.getElementById("load").innerHTML = "Loading. . ." + (Math.floor(percentLoaded * 100)).toString() + "%";
}

function init(): void {
    // remove loading status
    document.getElementById("load").remove();
    
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");

    // create our main display list container
    stage = new createjs.Stage(canvas);

    // Enable mouse events
    stage.enableMouseOver(20);

    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);

    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);

    // sets up our stats counting workflow
    setupStats();

    // define scoreboard
    scoreboard = new managers.Scoreboard();

    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event: createjs.Event): void {
    // start collecting stats for this frame
    stats.begin();

    // calling State's update method
    currentScene.update();

    // redraw/refresh stage every frame
    stage.update();

    // stop collecting stats for this frame
    stats.end();
}

// Setup Game Stats
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {

    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.INSTRUCTIONS:
            // show the INSTRUCTIONS scene
            stage.removeAllChildren();
            instructions = new scenes.Instructions();
            currentScene = instructions;
            console.log("Starting INSTRUCTIONS Scene");
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.LEVELONE:
            // show the LEVEL ONE scene
            stage.removeAllChildren();
            levelOne = new scenes.LevelOne();
            currentScene = levelOne;
            console.log("Starting LEVEL ONE Scene");
            break;
        case config.Scene.LEVELONEEND:
            // show the LEVEL ONE scene
            stage.removeAllChildren();
            levelOneEnd = new scenes.LevelOneEnd();
            currentScene = levelOneEnd;
            console.log("Starting LEVEL ONE END Scene");
            break;
        case config.Scene.LEVELTWO:
            // show the LEVEL TWO scene
            stage.removeAllChildren();
            levelTwo = new scenes.LevelTwo();
            currentScene = levelTwo;
            console.log("Starting LEVEL TWO Scene");
            break;
        case config.Scene.LEVELTWOEND:
            // show the LEVEL TWO END scene
            stage.removeAllChildren();
            levelTwoEnd = new scenes.LevelTwoEnd();
            currentScene = levelTwoEnd;
            console.log("Starting LEVEL TWO END Scene");
            break;
        case config.Scene.LEVELTHREE:
            // show the LEVEL THREE scene
            stage.removeAllChildren();
            levelThree = new scenes.LevelThree();
            currentScene = levelThree;
            console.log("Starting LEVEL THREE Scene");
            break;
        case config.Scene.LEVELONELOSE:
            // show the LEVEL THREE scene
            stage.removeAllChildren();
            levelOneLose = new scenes.LevelOneLose();
            currentScene = levelOneLose;
            console.log("Starting LEVEL ONE LOSE Scene");
            break;
        case config.Scene.LEVELTWOLOSE:
            // show the LEVEL THREE scene
            stage.removeAllChildren();
            levelTwoLose = new scenes.LevelTwoLose();
            currentScene = levelTwoLose;
            console.log("Starting LEVEL TWO LOSE Scene");
            break;
        case config.Scene.LEVELTHREELOSE:
            // show the LEVEL THREE scene
            stage.removeAllChildren();
            levelThreeLose = new scenes.LevelThreeLose();
            currentScene = levelThreeLose;
            console.log("Starting LEVEL THREE LOSE Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
    }

    console.log(currentScene.numChildren);
}

window.onload = preload;