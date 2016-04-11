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
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // MENU Scene updates here
        LevelOne.prototype.update = function () {
            this._background.update();
        };
        return LevelOne;
    })(objects.Scene);
    scenes.LevelOne = LevelOne;
})(scenes || (scenes = {}));
//# sourceMappingURL=levelone.js.map