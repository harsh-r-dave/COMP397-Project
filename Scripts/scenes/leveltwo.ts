module scenes {
    export class LevelTwo extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sea: objects.Sea;
        private _playerleveltwo: objects.LevelTwoPLayer;
        private _island: objects.Island;

        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            //Add sea
            this._sea = new objects.Sea();
            this.addChild(this._sea);

            //Added island in the scene
            this._island = new objects.Island();
            this.addChild(this._island);

            //added PLAYEr to the scene
            this._playerleveltwo = new objects.LevelTwoPLayer();
            this.addChild(this._playerleveltwo);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // MENU Scene updates here
        public update(): void {
            this._sea.update();
            this._island.update();

            this._playerleveltwo.update();

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
    }
}