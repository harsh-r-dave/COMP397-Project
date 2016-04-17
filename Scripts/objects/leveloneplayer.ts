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

            // Assign keyboard controls
            this._assignControls();
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
            if (controls.UP == true || controls.DOWN == true) {
                // move with mouse
                this._controlAction();
                stage.mouseY = this.y;      // change mouseY to move player with keyboard
            }
            else {
             this.y = stage.mouseY;   
            }
            // check players boundary
            this._checkBounds();
            this._checkMouseDirection();
        }

        // Bind key actions to player events
        private _assignControls() {
            window.onkeydown = this._onControlDown;
            window.onkeyup = this._onControlUp;
        }

        // Switch statement to activate movement and rotation
        private _onControlDown(event: KeyboardEvent) {
            switch (event.keyCode) {
                case keys.W:
                case keys.UP:
                    controls.UP = true;
                    break;
                case keys.S:
                case keys.DOWN:
                    controls.DOWN = true;
                    break;
            }
        }

        // switch statement to reset controls
        private _onControlUp(event: KeyboardEvent) {
            switch (event.keyCode) {
                case keys.W:
                case keys.UP:
                    controls.UP = false;
                    break;
                case keys.S:
                case keys.DOWN:
                    controls.DOWN = false;
                    break;
            }
        }

        // Respond to player key presses
        private _controlAction() {
            // Execute left turn
            if (controls.UP) {
                this.moveUp();
            }

            // Execute right turn
            if (controls.DOWN) {
                this.moveDown();
            }

        }

        // Turn Left Method
        public moveUp() {
            this.y -= 5;
        }

        // Turn Right Method
        public moveDown() {
            this.y += 5;
        }

        // turn off the engine
        public engineOff(): void {

        }
    }
}