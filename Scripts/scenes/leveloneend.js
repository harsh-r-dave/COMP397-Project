var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var LevelOneEnd = (function (_super) {
        __extends(LevelOneEnd, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function LevelOneEnd() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        LevelOneEnd.prototype.start = function () {
            // add the Back button to the MENU scene
            this._backButton = new objects.Button("LevelTwoButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, false);
            this.addChild(this._backButton);
            // Back Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add the Next button to the MENU scene
            this._nextButton = new objects.Button("GameOverButton", config.Screen.CENTER_X + 50, config.Screen.CENTER_Y + 180, false);
            this.addChild(this._nextButton);
            // Next Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // MENU Scene updates here
        LevelOneEnd.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // PLAY Button click event handler
        LevelOneEnd.prototype._backButtonClick = function (event) {
            // Switch to the THREE Scene
            scene = config.Scene.LEVELTWO;
            changeScene();
        };
        // INSTRUCTIONS Button click event handler
        LevelOneEnd.prototype._nextButtonClick = function (event) {
            // Switch to the END Scene
            scene = config.Scene.LEVELONE;
            changeScene();
        };
        return LevelOneEnd;
    })(objects.Scene);
    scenes.LevelOneEnd = LevelOneEnd;
})(scenes || (scenes = {}));
//# sourceMappingURL=leveloneend.js.map