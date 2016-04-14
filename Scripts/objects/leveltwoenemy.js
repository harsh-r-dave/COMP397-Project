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
            this._target = 0;
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
            if (this._type == "LevelTwoEnemy1") {
                if (this._target < 100) {
                    this._speed.x = Math.floor(Math.random() * 2) + 6;
                    this.x = value;
                }
                else {
                    this._speed.x = 0;
                    this.x = this._rightBounds;
                }
            }
            else if (this._type == "LevelTwoEnemy2") {
                if ((this._target >= 100) && (this._target < 200)) {
                    this._speed.x = Math.floor(Math.random() * 2) + 6;
                    this.x = value;
                }
                else {
                    this._speed.x = 0;
                    this.x = this._rightBounds;
                }
            }
            else if (this._type == "LevelTwoEnemy3") {
                if (this._target >= 200) {
                    this._speed.x = Math.floor(Math.random() * 2) + 8;
                    this.x = value;
                }
                else {
                    this._speed.x = 0;
                    this.x = this._rightBounds;
                }
            }
            // location of objects
            this.y = Math.floor(Math.random() * this._bottomBounds);
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        LevelTwoEnemy.prototype.update = function () {
            // scroll the enemy
            this.x += this._speed.x;
            this._target = levelTwo.target;
            this._checkBounds(this._rightBounds);
        };
        return LevelTwoEnemy;
    })(objects.GameObject);
    objects.LevelTwoEnemy = LevelTwoEnemy;
})(objects || (objects = {}));
//# sourceMappingURL=leveltwoenemy.js.map