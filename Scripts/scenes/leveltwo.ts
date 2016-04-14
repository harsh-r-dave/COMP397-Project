module scenes {
    export class LevelTwo extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sea: objects.Sea;
        private _playerleveltwo: objects.LevelTwoPlayer;
        private _island: objects.Island;
        private _enemyOne: objects.LevelTwoEnemy;
        private _enemyTwo: objects.LevelTwoEnemy;
        private _enemyThree: objects.LevelTwoEnemy;

        private _collision: managers.LevelTwoCollision;
        
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
            
            // add enemy to the scene
            this._enemyOne = new objects.LevelTwoEnemy("LevelTwoEnemy1");
            this.addChild(this._enemyOne);
            this._enemyTwo = new objects.LevelTwoEnemy("LevelTwoEnemy2");
            this.addChild(this._enemyTwo);
            this._enemyThree = new objects.LevelTwoEnemy("LevelTwoEnemy3");
            this.addChild(this._enemyThree);

            //added PLAYEr to the scene
            this._playerleveltwo = new objects.LevelTwoPlayer();
            this.addChild(this._playerleveltwo);

            // add collision manager to the scene
            this._collision = new managers.LevelTwoCollision(this._playerleveltwo);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // MENU Scene updates here
        public update(): void {
            //update sea
            this._sea.update();
            
            //update island
            this._island.update();

            // update enemy and check collision
            this._enemyOne.update();
            this._collision.check(this._enemyOne);
            this._enemyTwo.update();
            this._collision.check(this._enemyTwo);
            this._enemyThree.update();
            this._collision.check(this._enemyThree);
            
            //update player
            this._playerleveltwo.update();

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
    }
}