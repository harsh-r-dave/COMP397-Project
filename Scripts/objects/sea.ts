/* 
    Source File: COMP397-W2016-MailPilotDemo-master/ ocean.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Viranch Shah, Student, Centennial College
    
    Date First Modified: Apr 8, 2016
    Date Last  Modified: Apr 8, 2016
    Last Modified by: Viranch Shah, student, Centennial College
    
    Program Description: super class for game objects.
    Revision History: updated variable values for scrolling
*/

module objects {
    // SEA CLASS ++++++++++++++++++++++++++++++++++++
    export class Sea extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("sea");
            
           this._speed.x = 5; //ocean speed
           this._reset(-800);
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the right side of the ocean 
            // has met the right side of the scene
            if(this.x >= value) {
                this._reset(-800);
            }
        }
        
        // reset the sea offscreen
        protected _reset(value:number):void {
            this.x = value;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the sea 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(0);
        }
    }
}