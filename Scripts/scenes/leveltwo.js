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
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        LevelTwo.prototype.start = function () {
            //Add sea
            this._sea = new objects.Sea();
            this.addChild(this._sea);
            //added PLAYEr to the scene
            this._playerleveltwo = new objects.LevelTwoPLayer();
            this.addChild(this._playerleveltwo);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // MENU Scene updates here
        LevelTwo.prototype.update = function () {
            this._sea.update();
        };
        return LevelTwo;
    })(objects.Scene);
    scenes.LevelTwo = LevelTwo;
})(scenes || (scenes = {}));
//# sourceMappingURL=leveltwo.js.map