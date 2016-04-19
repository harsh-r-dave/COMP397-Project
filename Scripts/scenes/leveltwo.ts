/*
    Source File: COMP397-W2016-MailPilotDemo-master/ play.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Viranch Shah, Student, Centennial College
    
    Date First Modified: Apr 6, 2016
    Date Last  Modified: Apr 18, 2016
    Last Modified by: Viranch Shah, student, Centennial College
    
    Program Description: Level two scene where gameplay takes action.
    Revision History: UI updated
*/

module scenes {
    export class LevelTwo extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sea: objects.Sea;
        private _playerleveltwo: objects.LevelTwoPlayer;
        private _island: objects.Island;
        private _ammo: objects.Ammo;
        private _enemyOne: objects.LevelTwoEnemy;
        private _enemyTwo: objects.LevelTwoEnemy;
        private _enemyThree: objects.LevelTwoEnemy;
        private _targetLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _ammoLabel: objects.Label;
        private _delay: number;
        private _levelThreeBackground: objects.LevelThreeBackground;

        private _collision: managers.LevelTwoCollision;
        // edited to fix sound bug
        private _levelTwoEngineSound: createjs.AbstractSoundInstance;
        
        //PUBLIC INSTANCE
        public target: number;
        public lives: number;
        public ammo: number;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
            
            //Initializing target
            this.target = 0;
            
            //Initialize lives
            this.lives = 5;
            
            //Initialize ammo
            this.ammo = 0;

            //Initialize Delay
            this._delay = 0;
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add sound to the scene
            this._levelTwoEngineSound = createjs.Sound.play("SpaceShipSound", 0, 0, 0, -1, 1, 0);
            
            //Add sea
            this._sea = new objects.Sea();
            this.addChild(this._sea);

            //Added level3 background
            this._levelThreeBackground = new objects.LevelThreeBackground();
            this._levelThreeBackground.alpha = 0;
            this.addChild(this._levelThreeBackground);

            //Added island in the scene
            this._island = new objects.Island();
            this.addChild(this._island);

            //Added ammo in the scene
            this._ammo = new objects.Ammo();
            this.addChild(this._ammo);
            
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

            // ammos Label
            this._ammoLabel = new objects.Label("ammo: " + this.lives, "30px Frijole", "#FFFF00", 5, 40, false);
            this.addChild(this._ammoLabel);
            
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
                //this._playerleveltwo.levelTwoEngineSound.stop();
                this._levelTwoEngineSound.stop();   // edited
                scene = config.Scene.LEVELTWOEND;
                changeScene();
            }
            
            //check lives
            if (this.lives <= 0) {
                // change scene
                //this._playerleveltwo.levelTwoEngineSound.stop();
                this._levelTwoEngineSound.stop();   // edited
                scene = config.Scene.LEVELTWOLOSE;
                changeScene();
            }
            
            //update sea
            this._sea.update();
            
            //update level3 background
            this._levelThreeBackground.update();
            
            //update island
            this._island.update();

            //update ammo
            this._ammo.update();
            this._collision.check(this._ammo);

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
                
                if (this._island.scaleX >= 0 && this._island.scaleY >= 0) {
                    this._island.scaleX -= 0.01;
                    this._island.scaleY -= 0.01;
                }

                // reduce sea visibility at every 2 KMs
                if (this.target % 2 == 0) {
                    this._sea.alpha -= 0.01;
                }

                // increase darkness after 50KMs at every KMs
                if (this.target > 50) {
                    if (this.target % 2 == 0) {
                        this._levelThreeBackground.alpha += 0.01;
                    }
                }
            }
            else {
                this._delay += 1;
            }
                        
            //update labels
            this._targetLabel.text = "Target: " + this.target + "/120 kms";
            this._livesLabel.text = "lives: " + this.lives;
            this._ammoLabel.text = "ammo: " + this.ammo;            

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
    }
}