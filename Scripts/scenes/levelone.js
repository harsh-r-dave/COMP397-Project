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
            // add enemy to the scene
            this._enemyOne = new objects.LevelOneEnemy("LevelOneEnemy1");
            this.addChild(this._enemyOne);
            this._enemyTwo = new objects.LevelOneEnemy("LevelOneEnemy3");
            this.addChild(this._enemyTwo);
            // add player to theh scene
            this._player = new objects.LevelOnePlayer();
            this.addChild(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // MENU Scene updates here
        LevelOne.prototype.update = function () {
            this._background.update();
            this._player.update();
            //  update enemy
            this._enemyOne.update();
            this._enemyTwo.update();
        };
        return LevelOne;
    })(objects.Scene);
    scenes.LevelOne = LevelOne;
})(scenes || (scenes = {}));
//# sourceMappingURL=levelone.js.map