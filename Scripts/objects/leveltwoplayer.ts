/* 
    Source File: COMP397-W2016-MailPilotDemo-master/ player.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Viranch Shah, Student, Centennial College
    
    Date First Modified: Apr 8, 2016
    Date Last  Modified: Apr 8, 2016
    Last Modified by: Viranch Shah, student, Centennial College
    
    Program Description: Level two player
    Revision History: updated variable values for scrolling
*/

module objects {
    //PLAYER CLASS
    export class LevelTwoPlayer extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIABLES
        private _topBounds: number;
        private _bottomBounds: number;
        private _oldY: number = this.y;

        //PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        public levelTwoEngineSound: createjs.AbstractSoundInstance;

        constructor() {
            super(assets.getResult("player_level2"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);

            this.x = 550;

            //this.levelTwoEngineSound = createjs.Sound.play("SpaceShipSound", 0, 0, 0, -1, 0.5, 0);

            this._assignControls();

        }

        //PRIVATE METHODS
        //for checking bounds
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
            if (this._oldY < this.y) {
                this.rotation = -10;
            }
            else if (this._oldY > this.y) {
                this.rotation = +10;
            } 
            else {
                this.rotation = 0;
            }
            this._oldY = this.y;

        }


        //PUBLIC METHODS
        public update(): void {
            if (controls.UP == true || controls.DOWN == true) {
                // move with mouse
                this._controlAction();
                stage.mouseY = this.y;      // change mouseY to move player with keyboard
            }
            else {
                this.y = stage.mouseY;
            }
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
            // Execute up turn
            if (controls.UP) {
                this.moveUp();
            }

            // Execute down turn
            if (controls.DOWN) {
                this.moveDown();
            }
        }

        // Move Upt Method
        public moveUp() {
            this.y -= 5;
        }

        // Move Down Method
        public moveDown() {
            this.y += 5;
        }
    }
}