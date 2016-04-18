/* 
    Source File: Harsh Dave - Skywars/ obstacles.ts
    Author's name: Harsh Dave, student, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Apr 5, 2016
    Date Last  Modified: Apr 5, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: level one obstacles
    Revision History: minor changes
*/

module objects {
    export class LevelOneObstacle extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("Stone");

            this._reset(this._leftBounds);
            this.name = "LevelOneObstacle";
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check to see if the object met the reset criteria
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        }

        // reset the object offscreen
        protected _reset(value: number): void {
            this.visible = true;
            // behaviour of objects
            this._speed.x = 3;
            
            // location of objects
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the object
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        }
    }
}