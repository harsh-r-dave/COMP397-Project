/* 
    Date First Modified: Apr 18, 2016
    Date Last  Modified: Apr 18, 2016
    Last Modified by: Viranch Shah, student, Centennial College
    
    Program Description: super class for game objects.
    Revision History: Created
*/

module objects {
    // STAR CLASS ++++++++++++++++++++++++++++++++++++
    export class Ammo extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("ammo");

            this._reset(this._leftBounds);
            this.name = "ammo";
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check to see if the star met the reset criteria
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        }

        // reset the star offscreen
        protected _reset(value: number): void {
            this.visible = true;
            // behaviour of objects
            this._speed.x = 6;
            
            // location of objects
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the star
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        }
    }
}