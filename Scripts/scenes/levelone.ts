module scenes {
    export class LevelOne extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: objects.LevelOneBackground;
        private _player: objects.LevelOnePlayer;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // add background to the scene
            this._background = new objects.LevelOneBackground();
            this.addChild(this._background);
            
            // add player to theh scene
            this._player = new objects.LevelOnePlayer();
            this.addChild(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // MENU Scene updates here
        public update(): void {
            this._background.update();
            this._player.update();
        }


        //EVENT HANDLERS ++++++++++++++++++++
    }
}