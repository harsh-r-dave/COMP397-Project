var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // SEA CLASS ++++++++++++++++++++++++++++++++++++
    var Sea = (function (_super) {
        __extends(Sea, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Sea() {
            _super.call(this, "sea");
            this._speed.x = 5; //ocean speed
            this._reset(-800);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Sea.prototype._checkBounds = function (value) {
            // check to see if the right side of the ocean 
            // has met the right side of the scene
            if (this.x >= value) {
                this._reset(-800);
            }
        };
        // reset the sea offscreen
        Sea.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Sea.prototype.update = function () {
            // scroll the sea 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(0);
        };
        return Sea;
    })(objects.GameObject);
    objects.Sea = Sea;
})(objects || (objects = {}));
//# sourceMappingURL=sea.js.map