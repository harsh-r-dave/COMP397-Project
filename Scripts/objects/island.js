/*
    Source File: COMP397-W2016-MailPilotDemo-master/ island.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Viranch Shah, Student, Centennial College
    
    Date First Modified: Apr 8, 2016
    Date Last  Modified: Apr 8, 2016
    Last Modified by: Viranch Shah, student, Centennial College
    
    Program Description: level two island
    Revision History: updated variable values for scrolling
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // ISLAND CLASS ++++++++++++++++++++++++++++++++++++
    var Island = (function (_super) {
        __extends(Island, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Island() {
            _super.call(this, "island");
            this._speed.x = 5; //isalnd speed
            this._reset(this._leftBounds);
            this.name = "island";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Island.prototype._checkBounds = function (value) {
            // check to see if the right side of the island 
            // is outside of the viewport
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        };
        // reset the island offscreen
        Island.prototype._reset = function (value) {
            this.x = value;
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height));
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Island.prototype.update = function () {
            // scroll the isalnd 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        };
        return Island;
    })(objects.GameObject);
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map