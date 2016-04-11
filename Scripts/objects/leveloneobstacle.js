var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var LevelOneObstacle = (function (_super) {
        __extends(LevelOneObstacle, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function LevelOneObstacle() {
            _super.call(this, "Stone");
            this._reset(this._leftBounds);
            this.name = "LevelOneObstacle";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        LevelOneObstacle.prototype._checkBounds = function (value) {
            // check to see if the object met the reset criteria
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        };
        // reset the object offscreen
        LevelOneObstacle.prototype._reset = function (value) {
            this.visible = true;
            // behaviour of objects
            this._speed.x = 2;
            // location of objects
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        LevelOneObstacle.prototype.update = function () {
            // scroll the object
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        };
        return LevelOneObstacle;
    })(objects.GameObject);
    objects.LevelOneObstacle = LevelOneObstacle;
})(objects || (objects = {}));
//# sourceMappingURL=leveloneobstacle.js.map