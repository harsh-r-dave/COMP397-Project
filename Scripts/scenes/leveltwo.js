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
            //Add Level One Label
            this._lavelTwoLabel = new objects.Label("Level 2 SCENE", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._lavelTwoLabel);
            // add the Back button to the MENU scene
            this._backButton = new objects.Button("LevelOneButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, false);
            this.addChild(this._backButton);
            // Back Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add the Next button to the MENU scene
            this._nextButton = new objects.Button("LevelThreeButton", config.Screen.CENTER_X + 50, config.Screen.CENTER_Y + 180, false);
            this.addChild(this._nextButton);
            // Next Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // MENU Scene updates here
        LevelTwo.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // PLAY Button click event handler
        LevelTwo.prototype._backButtonClick = function (event) {
            // Switch to the MENU Scene
            scene = config.Scene.LEVELONE;
            changeScene();
        };
        // INSTRUCTIONS Button click event handler
        LevelTwo.prototype._nextButtonClick = function (event) {
            // Switch to the LEVEL TWO Scene
            scene = config.Scene.LEVELTHREE;
            changeScene();
        };
        return LevelTwo;
    })(objects.Scene);
    scenes.LevelTwo = LevelTwo;
})(scenes || (scenes = {}));
//# sourceMappingURL=leveltwo.js.map