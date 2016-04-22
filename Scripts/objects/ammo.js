/*
    Date First Modified: Apr 18, 2016
    Date Last  Modified: Apr 18, 2016
    Last Modified by: Viranch Shah, student, Centennial College
    
    Program Description: super class for game objects.
    Revision History: Created
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // STAR CLASS ++++++++++++++++++++++++++++++++++++
    var Ammo = (function (_super) {
        __extends(Ammo, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Ammo() {
            _super.call(this, "ammo");
            this._reset(this._leftBounds);
            this.name = "ammo";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Ammo.prototype._checkBounds = function (value) {
            // check to see if the star met the reset criteria
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        };
        // reset the star offscreen
        Ammo.prototype._reset = function (value) {
            this.visible = true;
            // behaviour of objects
            this._speed.x = 6;
            this._speed.y = 0.5;
            // location of objects
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Ammo.prototype.update = function () {
            // scroll the star
            this.x += this._speed.x;
            this.y += this._speed.y;
            this._checkBounds(this._rightBounds);
        };
        return Ammo;
    })(objects.GameObject);
    objects.Ammo = Ammo;
})(objects || (objects = {}));
//# sourceMappingURL=ammo.js.map