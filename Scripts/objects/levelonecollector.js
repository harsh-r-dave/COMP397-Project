var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var LevelOneCollector = (function (_super) {
        __extends(LevelOneCollector, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function LevelOneCollector() {
            _super.call(this, "Fuel");
            this._reset(this._leftBounds);
            this.name = "LevelOneCollector";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        LevelOneCollector.prototype._checkBounds = function (value) {
            // check to see if the object met the reset criteria
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        };
        // reset the object offscreen
        LevelOneCollector.prototype._reset = function (value) {
            this.visible = true;
            // behaviour of objects
            this._speed.x = 3;
            // location of objects
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        LevelOneCollector.prototype.update = function () {
            // scroll the object
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        };
        return LevelOneCollector;
    })(objects.GameObject);
    objects.LevelOneCollector = LevelOneCollector;
})(objects || (objects = {}));
//# sourceMappingURL=levelonecollector.js.map