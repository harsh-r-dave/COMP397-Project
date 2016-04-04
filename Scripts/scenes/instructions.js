var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Instructions() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Instructions.prototype.start = function () {
            //Add Play Label
            this._instructionsLabel = new objects.Label("INSTRUCTIONS SCENE", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._instructionsLabel);
            // add the Play button to the MENU scene
            this._button = new objects.Button("BackButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180, false);
            this.addChild(this._button);
            // Play Button event listener
            this._button.on("click", this._buttonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Instructions.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // PLAY Button click event handler
        Instructions.prototype._buttonClick = function (event) {
            // Switch to the PLAY LEVEL - 1 Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Instructions;
    })(objects.Scene);
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map