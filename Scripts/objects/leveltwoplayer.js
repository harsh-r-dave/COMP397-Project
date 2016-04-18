/*
    Source File: COMP397-W2016-MailPilotDemo-master/ player.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Viranch Shah, Student, Centennial College
    
    Date First Modified: Apr 8, 2016
    Date Last  Modified: Apr 8, 2016
    Last Modified by: Viranch Shah, student, Centennial College
    
    Program Description: Level two player
    Revision History: updated variable values for scrolling
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //PLAYER CLASS
    var LevelTwoPlayer = (function (_super) {
        __extends(LevelTwoPlayer, _super);
        function LevelTwoPlayer() {
            _super.call(this, assets.getResult("player_level2"));
            this._oldY = this.y;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);
            this.x = 550;
            //this.levelTwoEngineSound = createjs.Sound.play("SpaceShipSound", 0, 0, 0, -1, 0.5, 0);
            this._assignControls();
        }
        //PRIVATE METHODS
        //for checking bounds
        LevelTwoPlayer.prototype._checkBounds = function () {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }
            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        };
        //for check mouse movement direction
        LevelTwoPlayer.prototype._checkMouseDirection = function () {
            if (this._oldY < this.y) {
                this.rotation = -10;
            }
            if (this._oldY > this.y) {
                this.rotation = +10;
            }
            this._oldY = this.y;
        };
        //PUBLIC METHODS
        LevelTwoPlayer.prototype.update = function () {
            if (controls.UP == true || controls.DOWN == true) {
                // move with mouse
                this._controlAction();
                stage.mouseY = this.y; // change mouseY to move player with keyboard
            }
            else {
                this.y = stage.mouseY;
            }
            this._checkBounds();
            this._checkMouseDirection();
        };
        // Bind key actions to player events
        LevelTwoPlayer.prototype._assignControls = function () {
            window.onkeydown = this._onControlDown;
            window.onkeyup = this._onControlUp;
        };
        // Switch statement to activate movement and rotation
        LevelTwoPlayer.prototype._onControlDown = function (event) {
            switch (event.keyCode) {
                case keys.W:
                case keys.UP:
                    controls.UP = true;
                    break;
                case keys.S:
                case keys.DOWN:
                    controls.DOWN = true;
                    break;
            }
        };
        // switch statement to reset controls
        LevelTwoPlayer.prototype._onControlUp = function (event) {
            switch (event.keyCode) {
                case keys.W:
                case keys.UP:
                    controls.UP = false;
                    break;
                case keys.S:
                case keys.DOWN:
                    controls.DOWN = false;
                    break;
            }
        };
        // Respond to player key presses
        LevelTwoPlayer.prototype._controlAction = function () {
            // Execute up turn
            if (controls.UP) {
                this.moveUp();
            }
            // Execute down turn
            if (controls.DOWN) {
                this.moveDown();
            }
        };
        // Move Upt Method
        LevelTwoPlayer.prototype.moveUp = function () {
            this.y -= 5;
        };
        // Move Down Method
        LevelTwoPlayer.prototype.moveDown = function () {
            this.y += 5;
        };
        return LevelTwoPlayer;
    })(createjs.Bitmap);
    objects.LevelTwoPlayer = LevelTwoPlayer;
})(objects || (objects = {}));
//# sourceMappingURL=leveltwoplayer.js.map