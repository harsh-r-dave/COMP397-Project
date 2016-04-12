/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var menu;
var instructions;
var play;
var levelOne;
var levelTwo;
var levelThree;
var end;
var assetData = [
    // Add your Assets here
    { id: "Menu_bg", src: "../../Assets/images/menu_bg.jpg" },
    { id: "Desert", src: "../../Assets/images/desert.jpg" },
    { id: "PlayerLevelOne", src: "../../Assets/images/player_level1.png" },
    { id: "LevelOneEnemy1", src: "../../Assets/images/enemy1_level1.png" },
    { id: "LevelOneEnemy2", src: "../../Assets/images/enemy2_level1.png" },
    { id: "LevelOneEnemy3", src: "../../Assets/images/enemy3_level1.png" },
    { id: "Stone", src: "../../Assets/images/stone.png" },
    { id: "Fuel", src: "../../Assets/images/gas.png" },
    { id: "sea", src: "../../Assets/images/sea.png" },
    { id: "island", src: "../../Assets/images/island.png" },
    { id: "player_level2", src: "../../Assets/images/player_level2.png" },
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
    { id: "CloseButton", src: "../../Assets/images/closeButton.png" }
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
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
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
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
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
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
        case config.Scene.LEVELTWO:
            // show the LEVEL TWO scene
            stage.removeAllChildren();
            levelTwo = new scenes.LevelTwo();
            currentScene = levelTwo;
            console.log("Starting LEVEL TWO Scene");
            break;
        case config.Scene.LEVELTHREE:
            // show the LEVEL THREE scene
            stage.removeAllChildren();
            levelThree = new scenes.LevelThree();
            currentScene = levelThree;
            console.log("Starting LEVEL THREE Scene");
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
//# sourceMappingURL=game.js.map