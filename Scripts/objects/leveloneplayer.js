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
            this.y = stage.mouseY;
            this._checkBounds();
            this._checkMouseDirection();
        };
        LevelOnePlayer.prototype.engineOff = function () {
        };
        return LevelOnePlayer;
    })(createjs.Bitmap);
    objects.LevelOnePlayer = LevelOnePlayer;
})(objects || (objects = {}));
//# sourceMappingURL=leveloneplayer.js.map