var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var LevelOnePlayer = (function (_super) {
        __extends(LevelOnePlayer, _super);
        function LevelOnePlayer() {
            _super.call(this, assets.getResult("PlayerLevelOne"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);
            this.x = 540;
            this._previousY = this.y;
            // Assign keyboard controls
            this._assignControls();
        }
        // PRIVATE METHODS
        LevelOnePlayer.prototype._checkBounds = function () {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }
            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        };
        //for check mouse movement direction
        LevelOnePlayer.prototype._checkMouseDirection = function () {
            if (this._previousY < this.y) {
                this.rotation = -5;
            }
            else if (this._previousY > this.y) {
                this.rotation = 5;
            }
            else {
                this.rotation = 0;
            }
            this._previousY = this.y;
        };
        // PUBLIC METHODS
        LevelOnePlayer.prototype.update = function () {
            if (controls.UP == true || controls.DOWN == true) {
                // move with mouse
                this._controlAction();
                stage.mouseY = this.y; // change mouseY to move player with keyboard
            }
            else {
                this.y = stage.mouseY;
            }
            // check players boundary
            this._checkBounds();
            this._checkMouseDirection();
        };
        // Bind key actions to player events
        LevelOnePlayer.prototype._assignControls = function () {
            window.onkeydown = this._onControlDown;
            window.onkeyup = this._onControlUp;
        };
        // Switch statement to activate movement and rotation
        LevelOnePlayer.prototype._onControlDown = function (event) {
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
        LevelOnePlayer.prototype._onControlUp = function (event) {
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
        LevelOnePlayer.prototype._controlAction = function () {
            // Execute left turn
            if (controls.UP) {
                this.moveUp();
            }
            // Execute right turn
            if (controls.DOWN) {
                this.moveDown();
            }
        };
        // Turn Left Method
        LevelOnePlayer.prototype.moveUp = function () {
            this.y -= 5;
        };
        // Turn Right Method
        LevelOnePlayer.prototype.moveDown = function () {
            this.y += 5;
        };
        // turn off the engine
        LevelOnePlayer.prototype.engineOff = function () {
        };
        return LevelOnePlayer;
    })(createjs.Bitmap);
    objects.LevelOnePlayer = LevelOnePlayer;
})(objects || (objects = {}));
//# sourceMappingURL=leveloneplayer.js.map