var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            //Add Menu Label
            this._menuLabel = new objects.Label("MENU SCENE", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._menuLabel);
            // add the Play button to the MENU scene
            this._playButton = new objects.Button("PlayNowButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, false);
            this.addChild(this._playButton);
            // Play Button event listener
            this._playButton.on("click", this._playButtonClick, this);
            // add the Instructions button to the MENU scene
            this._instructions = new objects.Button("InstructionsButton", config.Screen.CENTER_X + 50, config.Screen.CENTER_Y + 180, false);
            this.addChild(this._instructions);
            // Instructions Button event listener
            this._instructions.on("click", this._instructionsButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // MENU Scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // PLAY Button click event handler
        Menu.prototype._playButtonClick = function (event) {
            // Switch to the PLAY LEVEL - 1 Scene
            scene = config.Scene.LEVELONE;
            changeScene();
        };
        // INSTRUCTIONS Button click event handler
        Menu.prototype._instructionsButtonClick = function (event) {
            // Switch to the INSTRUCTIONS Scene
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map