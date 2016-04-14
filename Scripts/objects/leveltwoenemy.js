var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var LevelTwoEnemy = (function (_super) {
        __extends(LevelTwoEnemy, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function LevelTwoEnemy(enemyType) {
            _super.call(this, enemyType);
            this._type = enemyType;
            this._reset(this._leftBounds);
            this.name = "LevelTwoEnemy";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        LevelTwoEnemy.prototype._checkBounds = function (value) {
            // check to see if the enemy met the reset criteria
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        };
        // reset the enemy offscreen
        LevelTwoEnemy.prototype._reset = function (value) {
            this.visible = true;
            // behaviour of objects
            console.log(this._type);
            if (this._type == "LevelTwoEnemy1") {
                this._speed.x = Math.floor(Math.random() * 2) + 6;
            }
            else if (this._type == "LevelTwoEnemy2") {
                this._speed.x = Math.floor(Math.random() * 2) + 6;
            }
            else if (this._type == "LevelTwoEnemy3") {
                this._speed.x = Math.floor(Math.random() * 2) + 8;
            }
            // location of objects
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        LevelTwoEnemy.prototype.update = function () {
            // scroll the enemy
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        };
        return LevelTwoEnemy;
    })(objects.GameObject);
    objects.LevelTwoEnemy = LevelTwoEnemy;
})(objects || (objects = {}));
//# sourceMappingURL=leveltwoenemy.js.map