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
            
            this.levelTwoEngineSound = createjs.Sound.play("SpaceShipSound", 0, 0, 0, -1, 0.5, 0);

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
        private _checkMouseDirection(): void{
            if (this._oldY < this.y){
                this.rotation = -10;
            }
            if (this._oldY > this.y){
                this.rotation = +10;
            }
            this._oldY = this.y;

        }

        
        //PUBLIC METHODS
        public update(): void {
            this.y = stage.mouseY;
            this._checkBounds();
            this._checkMouseDirection();

        }
    }
}