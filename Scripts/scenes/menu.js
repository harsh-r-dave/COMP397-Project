/*
    Source File: COMP397-W2016-MailPilotDemo-master/ menu.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Apr 5, 2016
    Date Last  Modified: Apr 7, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Game menu scene
    Revision History: UI updated
*/
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
            // play game track
            this._gameTrack = createjs.Sound.play("GameTrack", 0, 0, 0, -1, 0.5, 0);
            // Add background to the scene
            this._background = new createjs.Bitmap(assets.getResult("Menu_bg"));
            this.addChild(this._background);
            //Add Menu Label
            this._menuLabel = new objects.Label("Earth Defender", "50px Frijole", "#ffff00", 50, config.Screen.CENTER_Y, false);
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
            // add the Close button to the MENU scene
            this._closeButton = new objects.Button("CloseButton", 570, 5, false);
            this.addChild(this._closeButton);
            // Close Button event listener
            this._closeButton.on("click", this._closeButtonClick, this);
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
            this._gameTrack.stop();
            scene = config.Scene.LEVELONE;
            changeScene();
        };
        // INSTRUCTIONS Button click event handler
        Menu.prototype._instructionsButtonClick = function (event) {
            // Switch to the INSTRUCTIONS Scene
            this._gameTrack.stop();
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        };
        // CLOSE Button click event handler
        Menu.prototype._closeButtonClick = function (event) {
            // Switch to the GOODBYE PAGE
            window.location.href = "../../goodbye.html";
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map