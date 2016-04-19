/*
    Source File: COMP397-W2016-MailPilotDemo-master/ end.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Apr 18, 2016
    Date Last  Modified: Apr 18, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Instructions scene
    Revision History: background, buttons added
*/
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
            // play game track
            this._gameTrack = createjs.Sound.play("GameTrack", 0, 0, 0, -1, 0.5, 0);
            // add instructions image to the scene
            this._instructionsImage = new createjs.Bitmap(assets.getResult("Instructions"));
            this.addChild(this._instructionsImage);
            // add the Play button to the MENU scene
            this._button = new objects.Button("GotIt", config.Screen.CENTER_X, config.Screen.CENTER_Y + 210, true);
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
            this._gameTrack.stop();
            scene = config.Scene.MENU;
            changeScene();
        };
        return Instructions;
    })(objects.Scene);
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map