var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var LevelOne = (function (_super) {
        __extends(LevelOne, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function LevelOne() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        LevelOne.prototype.start = function () {
            // add background to the scene
            this._background = new objects.LevelOneBackground();
            this.addChild(this._background);
            // add obstacle to the scene
            this._obstacle = new objects.LevelOneObstacle;
            this.addChild(this._obstacle);
            // add collector to the scene
            this._collector = new objects.LevelOneCollector();
            this.addChild(this._collector);
            // add enemy to the scene
            this._enemyOne = new objects.LevelOneEnemy("LevelOneEnemy1");
            this.addChild(this._enemyOne);
            this._enemyTwo = new objects.LevelOneEnemy("LevelOneEnemy3");
            this.addChild(this._enemyTwo);
            // add player to theh scene
            this._player = new objects.LevelOnePlayer();
            this.addChild(this._player);
            // Score Label
            this._targetLabel = new objects.Label("Target: 5000/5000 ltr", "30px Frijole", "#FFFF00", 5, 5, false);
            this.addChild(this._targetLabel);
            // Lives Label
            this._livesLabel = new objects.Label("lives: 5", "30px Frijole", "#FFFF00", 480, 5, false);
            this.addChild(this._livesLabel);
            // add collision manager to the scene
            this._collision = new managers.LevelOneCollision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // MENU Scene updates here
        LevelOne.prototype.update = function () {
            this._background.update();
            this._player.update();
            // check if enemy is colliding with player and update it
            this._enemyOne.update();
            this._collision.check(this._enemyOne);
            this._enemyTwo.update();
            this._collision.check(this._enemyTwo);
            // check if obstacle is colliding with player and update it
            this._obstacle.update();
            this._collision.check(this._obstacle);
            // check if collector is colliding with player and update it
            this._collector.update();
            this._collision.check(this._collector);
        };
        return LevelOne;
    })(objects.Scene);
    scenes.LevelOne = LevelOne;
})(scenes || (scenes = {}));
//# sourceMappingURL=levelone.js.map