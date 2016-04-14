module objects {
    export class LevelTwoEnemy extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        private _type: string;

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor(enemyType: string) {
            super(enemyType);

            this._type = enemyType;
            this._reset(this._leftBounds);
            this.name = "LevelTwoEnemy";
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check to see if the enemy met the reset criteria
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        }

        // reset the enemy offscreen
        protected _reset(value: number): void {
            this.visible = true;
            // behaviour of objects
            console.log(this._type);
            if (this._type == "LevelTwoEnemy1") {
                this._speed.x = Math.floor(Math.random() * 2) + 6;
            }
            else if (this._type == "LevelTwoEnemy2") {
                this._speed.x = Math.floor(Math.random() * 2) + 6;
            }
            else if (this._type == "LevelTwoEnemy3") {
                this._speed.x = Math.floor(Math.random() * 2) + 8;
            }
            // location of objects
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the enemy
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        }
    }
}