module scenes {
    export class LevelTwo extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sea: objects.Sea;
        private _playerleveltwo: objects.LevelTwoPlayer;
        private _island: objects.Island;
        private _enemyOne: objects.LevelTwoEnemy;
        private _enemyTwo: objects.LevelTwoEnemy;
        private _enemyThree: objects.LevelTwoEnemy;
        private _targetLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _delay: number;

        private _collision: managers.LevelTwoCollision;
        
        //PUBLIC INSTANCE
        public target: number;
        public lives: number;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
            
            //Initializing target
            this.target = 0;
            
            //Initialize lives
            this.lives = 5;
            
            //Initialize Delay
            this._delay = 0;
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

            // Score Label
            this._targetLabel = new objects.Label("Target: " + this.target + "/120 kms", "30px Frijole", "#FFFF00", 5, 5, false);
            this.addChild(this._targetLabel);
            
            // Lives Label
            this._livesLabel = new objects.Label("lives: " + this.lives, "30px Frijole", "#FFFF00", 480, 5, false);
            this.addChild(this._livesLabel);
            
            // add collision manager to the scene
            this._collision = new managers.LevelTwoCollision(this._playerleveltwo);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // level 2 Scene updates here
        public update(): void {
            // check target and change scene if target fulfilled
            if (this.target >= 15) {
                // change scene
                this._playerleveltwo.levelTwoEngineSound.stop();
                scene = config.Scene.LEVELTWOEND;
                changeScene();
            }
            
            //check lives
            if (this.lives <= 0){
                // change scene
                this._playerleveltwo.levelTwoEngineSound.stop();
                scene = config.Scene.LEVELTWOLOSE;
                changeScene();                
            }
            
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
            
            //update target
            if (this._delay >= 45) {
                this.target = this.target + 1;
                this._delay = 0;
            }
            else {
                this._delay += 1;
            }
            
                        
            //update labels
            this._targetLabel.text = "Target: " + this.target + "/120 kms";
            this._livesLabel.text = "lives: " + this.lives;

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
    }
}