/*
    Source File: Harsh Dave - Skywars/ gamebackground.ts
    Author's name: Harsh Dave, student, Centennial College
    Modified by: Anjali Macwan, Student, Centennial College
    
    Date First Modified: Apr 15, 2016
    Date Last  Modified: Apr 15, 2016
    Last Modified by: Anjali Macwan, student, Centennial College
    
    Program Description: level three background
    Revision History: minor changes
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var LevelThreeBackground = (function (_super) {
        __extends(LevelThreeBackground, _super);
        //PRIVATE INSTANCE VARIABLES
        // CONSTRUCTOR ++++++++++++++++++++++++
        function LevelThreeBackground() {
            _super.call(this, "Space");
            this._speed.x = 2; // space speed
            this._reset(-640);
            //this._reset(0);   // right to left
        }
        // PUBLIC METHODS
        LevelThreeBackground.prototype.update = function () {
            this.x += this._speed.x; // left to right
            //this.x -= this._speed.y;      // right to left
            this._checkBounds(0); // left to right
            //this._checkBounds(-1360);     // right to left
        };
        //PRIVATE METHODS
        // reset the space to make it look continues
        LevelThreeBackground.prototype._reset = function (value) {
            this.x = value; // left to right   -1360
            //this.x = value;       // right to left
        };
        // check boundaries of space
        LevelThreeBackground.prototype._checkBounds = function (value) {
            if (this.x >= value) {
                this._reset(-640);
            }
            /*if(this.x <= value)       // right to left
            {
                this._reset(0);
            }*/
        };
        return LevelThreeBackground;
    })(objects.GameObject);
    objects.LevelThreeBackground = LevelThreeBackground;
})(objects || (objects = {}));
//# sourceMappingURL=levelthreebackground.js.map