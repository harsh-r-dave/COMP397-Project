var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var LevelOneEnemy = (function (_super) {
        __extends(LevelOneEnemy, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function LevelOneEnemy(enemyType) {
            _super.call(this, enemyType);
            this._reset(this._leftBounds);
            this.name = "LevelOneEnemy";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        LevelOneEnemy.prototype._checkBounds = function (value) {
            // check to see if the enemy met the reset criteria
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        };
        // reset the enemy offscreen
        LevelOneEnemy.prototype._reset = function (value) {
            this.visible = true;
            // behaviour of objects
            this._speed.x = Math.floor(Math.random() * 2) + 5;
            // location of objects
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        LevelOneEnemy.prototype.update = function () {
            // scroll the enemy
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        };
        return LevelOneEnemy;
    })(objects.GameObject);
    objects.LevelOneEnemy = LevelOneEnemy;
})(objects || (objects = {}));
//# sourceMappingURL=leveloneenemy.js.map