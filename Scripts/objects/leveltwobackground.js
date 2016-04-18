/*
    Source File: COMP397-W2016-MailPilotDemo-master/ ocean.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Viranch Shah, Student, Centennial College
    
    Date First Modified: Apr 6, 2016
    Date Last  Modified: Apr 10, 2016
    Last Modified by: Viranch Shah, student, Centennial College
    
    Program Description: Level two background
    Revision History: updated variable values for scrolling
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var LevelTwoBackground = (function (_super) {
        __extends(LevelTwoBackground, _super);
        //PRIVATE INSTANCE VARIABLES
        // CONSTRUCTOR ++++++++++++++++++++++++
        function LevelTwoBackground() {
            _super.call(this, "Sea");
            this._speed.x = 2; // space speed
            this._reset(-640);
            //this._reset(0);   // right to left
        }
        // PUBLIC METHODS
        LevelTwoBackground.prototype.update = function () {
            this.x += this._speed.x; // left to right
            //this.x -= this._speed.y;      // right to left
            this._checkBounds(0); // left to right
            //this._checkBounds(-1360);     // right to left
        };
        //PRIVATE METHODS
        // reset the space to make it look continues
        LevelTwoBackground.prototype._reset = function (value) {
            this.x = value; // left to right   -1360
            //this.x = value;       // right to left
        };
        // check boundaries of space
        LevelTwoBackground.prototype._checkBounds = function (value) {
            if (this.x >= value) {
                this._reset(-640);
            }
            /*if(this.x <= value)       // right to left
            {
                this._reset(0);
            }*/
        };
        return LevelTwoBackground;
    })(objects.GameObject);
    objects.LevelTwoBackground = LevelTwoBackground;
})(objects || (objects = {}));
//# sourceMappingURL=leveltwobackground.js.map