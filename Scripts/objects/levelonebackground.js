/*
    Source File: COMP397-W2016-MailPilotDemo-master/ ocean.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Apr 5, 2016
    Date Last  Modified: Apr 5, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: level onw background
    Revision History: updated variable values for scrolling
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var LevelOneBackground = (function (_super) {
        __extends(LevelOneBackground, _super);
        //PRIVATE INSTANCE VARIABLES
        // CONSTRUCTOR ++++++++++++++++++++++++
        function LevelOneBackground() {
            _super.call(this, "Desert");
            this._speed.x = 3; // space speed
            this._reset(-640);
            //this._reset(0);   // right to left
        }
        // PUBLIC METHODS
        LevelOneBackground.prototype.update = function () {
            this.x += this._speed.x; // left to right
            //this.x -= this._speed.y;      // right to left
            this._checkBounds(0); // left to right
            //this._checkBounds(-1360);     // right to left
        };
        //PRIVATE METHODS
        // reset the space to make it look continues
        LevelOneBackground.prototype._reset = function (value) {
            this.x = value; // left to right   -1360
            //this.x = value;       // right to left
        };
        // check boundaries of space
        LevelOneBackground.prototype._checkBounds = function (value) {
            if (this.x >= value) {
                this._reset(-640);
            }
            /*if(this.x <= value)       // right to left
            {
                this._reset(0);
            }*/
        };
        return LevelOneBackground;
    })(objects.GameObject);
    objects.LevelOneBackground = LevelOneBackground;
})(objects || (objects = {}));
//# sourceMappingURL=levelonebackground.js.map