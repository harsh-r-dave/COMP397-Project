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

module objects {
    // ISLAND CLASS ++++++++++++++++++++++++++++++++++++
    export class Island extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("island");
            
           this._speed.x = 5; //isalnd speed
           this._reset(this._leftBounds);
           this.name = "island";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the right side of the island 
            // is outside of the viewport
            if(this.x >= value) {
                this._reset(this._leftBounds);
            }
        }
        
        // reset the island offscreen
        protected _reset(value:number):void {
            this.x = value;
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height));
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the isalnd 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        }
    }
}