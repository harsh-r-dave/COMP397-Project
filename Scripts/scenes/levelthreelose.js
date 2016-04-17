var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var LevelThreeLose = (function (_super) {
        __extends(LevelThreeLose, _super);
        //private _obstacles: objects.Obstacles[];
        //private _obstaclesCollection: string[];
        // CONSTRUCTOR ++++++++++++++++++++++
        function LevelThreeLose() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        LevelThreeLose.prototype.start = function () {
            //Add Menu Label
            /* this._endLabel = new objects.Label(
                 "END SCENE", "60px Consolas",
                 "#000000",
                 config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
             this.addChild(this._endLabel);
             */
            // add the BACK button to the OVER scene
            /* this._restartButton = new objects.Button(
                 "RestartButton",
                 config.Screen.CENTER_X,
                 config.Screen.CENTER_Y + 180, true);
             this.addChild(this._restartButton);
            
             // START_OVER Button event listener
             this._restartButton.on("click", this._restartButtonClick, this);
             */
            // instantiate obstacles collection
            //this._obstaclesCollection = new Array("Planet1", "Planet2", "Planet3", "Planet4", "Stone1", "Stone2");
            // instantiate obstacles array
            //this._obstacles = new Array<objects.Obstacles>();
            // Add background to the scene
            this._background = new objects.GameBackground();
            this.addChild(this._background);
            // add obstacle graphics to the scene
            /*for (var obstacle: number = 0; obstacle < 2; obstacle++) {
                var randomObstacle = Math.floor(Math.random() * 6);

                this._obstacles[obstacle] = new objects.Obstacles(this._obstaclesCollection[randomObstacle]);
                this.addChild(this._obstacles[obstacle]);
            }*/
            //Add SCORE Label
            this._scoreLabel = new objects.Label("\nSorry you lost!! \nNo worries, Try again!!", "25px Frijole", "#ffff00", config.Screen.CENTER_X, 100, true);
            this.addChild(this._scoreLabel);
            //add player images in the end scene
            /*this._player1= new createjs.Bitmap(assets.getResult("PlayerLevelOne"));
            this._player1.x = config.Screen.CENTER_X;
            this._player1.y = 300;
            this.addChild(this._player1);
            */
            /*this._player2= new createjs.Bitmap(assets.getResult("player_level2"));
            this._player2.x = config.Screen.CENTER_X - 50;
            this._player2.y = 300;
            this.addChild(this._player2);
            */
            this._player3 = new createjs.Bitmap(assets.getResult("Player"));
            this._player3.x = 450;
            this._player3.y = 300;
            this.addChild(this._player3);
            // add the PlayAgain button to the END scene
            this._playAgainButton = new objects.Button("PlayAgain", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 190, false);
            this.addChild(this._playAgainButton);
            // PLAY_AGAIN Button event listener
            this._playAgainButton.on("click", this._playAgainButtonClick, this);
            // add the Home button to the END scene
            this._homeButton = new objects.Button("Home", config.Screen.CENTER_X + 50, config.Screen.CENTER_Y + 190, false);
            this.addChild(this._homeButton);
            // HOME Button event listener
            this._homeButton.on("click", this._homeButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        LevelThreeLose.prototype.update = function () {
            this._background.update();
            // obstacles update
            /* this._obstacles.forEach(obstacle => {
                 obstacle.update();
             });
             */
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // PLAY_AGAIN Button click event handler
        LevelThreeLose.prototype._playAgainButtonClick = function (event) {
            // Switch to the PLAY Scene
            scene = config.Scene.LEVELTHREE;
            changeScene();
        };
        // HOME Button click event handler
        LevelThreeLose.prototype._homeButtonClick = function (event) {
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return LevelThreeLose;
    })(objects.Scene);
    scenes.LevelThreeLose = LevelThreeLose;
})(scenes || (scenes = {}));
//# sourceMappingURL=levelthreelose.js.map