module objects {
    export class LevelTwoEnemy extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        private _type: string;
        private _target: Number = 0;

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
            if (this._type == "LevelTwoEnemy1") {
                if (this._target < 40) {
                    this._speed.x = Math.floor(Math.random() * 2) + 6;
                    this.x = value;
                }
                else {
                    this._speed.x = 0;
                    this.x = this._rightBounds;
                }
            }
            else if (this._type == "LevelTwoEnemy2") {
                if ((this._target >= 40) && (this._target < 80)) {
                    this._speed.x = Math.floor(Math.random() * 2) + 6;
                    this.x = value;
                }
                else {
                    this._speed.x = 0;
                    this.x = this._rightBounds;
                }
            }
            else if (this._type == "LevelTwoEnemy3") {
                if (this._target >= 80) {
                    this._speed.x = Math.floor(Math.random() * 2) + 8;
                    this.x = value;
                }
                else {
                    this._speed.x = 0;
                    this.x = this._rightBounds;
                }
            }
            // location of objects
            this.y = Math.floor(Math.random() * this._bottomBounds);
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the enemy
            this.x += this._speed.x;
            this._target = levelTwo.target;
            this._checkBounds(this._rightBounds);
        }
    }
}