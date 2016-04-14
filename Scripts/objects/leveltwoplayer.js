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
            this.y = stage.mouseY;
            this._checkBounds();
            this._checkMouseDirection();
        };
        return LevelTwoPlayer;
    })(createjs.Bitmap);
    objects.LevelTwoPlayer = LevelTwoPlayer;
})(objects || (objects = {}));
//# sourceMappingURL=leveltwoplayer.js.map