module objects {
    export class LevelOnePlayer extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _topBounds: number;
        private _bottomBounds: number;
        private _previousY: number;

        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;

        constructor() {
            super(assets.getResult("PlayerLevelOne"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);

            this.x = 540;
            this._previousY = this.y;
        }

        // PRIVATE METHODS
        private _checkBounds(): void {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }

            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        }

        //for check mouse movement direction
        private _checkMouseDirection(): void {
            if (this._previousY < this.y) {
                this.rotation = -5;
            }
            else if (this._previousY > this.y) {
                this.rotation = 5;
            }
            else {
                this.rotation = 0;
            }
            this._previousY = this.y;
        }

        // PUBLIC METHODS
        public update(): void {
            this.y = stage.mouseY;
            this._checkBounds();
            this._checkMouseDirection();
        }

        public engineOff(): void {

        }
    }
}