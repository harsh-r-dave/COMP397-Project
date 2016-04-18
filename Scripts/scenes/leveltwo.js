/*
    Source File: COMP397-W2016-MailPilotDemo-master/ play.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Viranch Shah, Student, Centennial College
    
    Date First Modified: Apr 6, 2016
    Date Last  Modified: Apr 15, 2016
    Last Modified by: Viranch Shah, student, Centennial College
    
    Program Description: Level two scene where gameplay takes action.
    Revision History: UI updated
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var LevelTwo = (function (_super) {
        __extends(LevelTwo, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function LevelTwo() {
            _super.call(this);
            //Initializing target
            this.target = 0;
            //Initialize lives
            this.lives = 5;
            //Initialize Delay
            this._delay = 0;
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        LevelTwo.prototype.start = function () {
            //Add sea
            this._sea = new objects.Sea();
            this.addChild(this._sea);
            //Added island in the scene
            this._island = new objects.Island();
            this.addChild(this._island);
            // add enemy to the scene
            this._enemyOne = new objects.LevelTwoEnemy("LevelTwoEnemy1");
            this.addChild(this._enemyOne);
            this._enemyTwo = new objects.LevelTwoEnemy("LevelTwoEnemy2");
            this.addChild(this._enemyTwo);
            this._enemyThree = new objects.LevelTwoEnemy("LevelTwoEnemy3");
            this.addChild(this._enemyThree);
            //added PLAYEr to the scene
            this._playerleveltwo = new objects.LevelTwoPlayer();
            this.addChild(this._playerleveltwo);
            // Score Label
            this._targetLabel = new objects.Label("Target: " + this.target + "/120 kms", "30px Frijole", "#FFFF00", 5, 5, false);
            this.addChild(this._targetLabel);
            // Lives Label
            this._livesLabel = new objects.Label("lives: " + this.lives, "30px Frijole", "#FFFF00", 480, 5, false);
            this.addChild(this._livesLabel);
            // add collision manager to the scene
            this._collision = new managers.LevelTwoCollision(this._playerleveltwo);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // level 2 Scene updates here
        LevelTwo.prototype.update = function () {
            // check target and change scene if target fulfilled
            if (this.target >= 15) {
                // change scene
                this._playerleveltwo.levelTwoEngineSound.stop();
                scene = config.Scene.LEVELTWOEND;
                changeScene();
            }
            //check lives
            if (this.lives <= 0) {
                // change scene
                this._playerleveltwo.levelTwoEngineSound.stop();
                scene = config.Scene.LEVELTWOLOSE;
                changeScene();
            }
            //update sea
            this._sea.update();
            //update island
            this._island.update();
            // update enemy and check collision
            this._enemyOne.update();
            this._collision.check(this._enemyOne);
            this._enemyTwo.update();
            this._collision.check(this._enemyTwo);
            this._enemyThree.update();
            this._collision.check(this._enemyThree);
            //update player
            this._playerleveltwo.update();
            //update target
            if (this._delay >= 45) {
                this.target = this.target + 1;
                this._delay = 0;
            }
            else {
                this._delay += 1;
            }
            //update labels
            this._targetLabel.text = "Target: " + this.target + "/120 kms";
            this._livesLabel.text = "lives: " + this.lives;
        };
        return LevelTwo;
    })(objects.Scene);
    scenes.LevelTwo = LevelTwo;
})(scenes || (scenes = {}));
//# sourceMappingURL=leveltwo.js.map