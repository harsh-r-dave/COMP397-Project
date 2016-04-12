module scenes {
    export class LevelOne extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: objects.LevelOneBackground;
        private _player: objects.LevelOnePlayer;

        private _enemyOne: objects.LevelOneEnemy;
        private _enemyTwo: objects.LevelOneEnemy;

        private _obstacle: objects.LevelOneObstacle;
        private _collector: objects.LevelOneCollector;

        private _targetLabel: objects.Label;
        private _livesLabel: objects.Label;

        private _collision: managers.LevelOneCollision;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // initialize scoreboard
            scoreboard.setLevelOneLives(5);
            scoreboard.setLevelOneTarget(0);
            
            // add background to the scene
            this._background = new objects.LevelOneBackground();
            this.addChild(this._background);

            // add obstacle to the scene
            this._obstacle = new objects.LevelOneObstacle;
            this.addChild(this._obstacle);

            // add collector to the scene
            this._collector = new objects.LevelOneCollector();
            this.addChild(this._collector);

            // add enemy to the scene
            this._enemyOne = new objects.LevelOneEnemy("LevelOneEnemy1");
            this.addChild(this._enemyOne);
            this._enemyTwo = new objects.LevelOneEnemy("LevelOneEnemy3");
            this.addChild(this._enemyTwo);

            // add player to theh scene
            this._player = new objects.LevelOnePlayer();
            this.addChild(this._player);

            // Score Label
            this._targetLabel = new objects.Label("Target: 0/5000 ltr", "30px Frijole", "#FFFF00", 5, 5, false);
            this.addChild(this._targetLabel);

            // Lives Label
            this._livesLabel = new objects.Label("lives: 5", "30px Frijole", "#FFFF00", 450, 5, false);
            this.addChild(this._livesLabel);

            // add collision manager to the scene
            this._collision = new managers.LevelOneCollision(this._player);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // MENU Scene updates here
        public update(): void {
            this._background.update();
            this._player.update();

            // check if enemy is colliding with player and update it
            this._enemyOne.update();
            this._collision.check(this._enemyOne);
            this._enemyTwo.update();
            this._collision.check(this._enemyTwo);

            // check if obstacle is colliding with player and update it
            this._obstacle.update();
            this._collision.check(this._obstacle);

            // check if collector is colliding with player and update it
            this._collector.update();
            this._collision.check(this._collector);

           this._updateScore();
           
           if(scoreboard.getLevelOneLives() <= 0) {
               scene = config.Scene.END;
               changeScene();
           }
           
           if(scoreboard.getLevelOneTarget() >= 750) {
               scene = config.Scene.LEVELTWO;
               changeScene();
           }
        }

        // method to update scoreboard
        private _updateScore(): void {
            this._targetLabel.text = "Score: " + scoreboard.getLevelOneTarget() + "/5000 ltr";
            this._livesLabel.text = "Lives: " + scoreboard.getLevelOneLives();
        }
        //EVENT HANDLERS ++++++++++++++++++++
    }
}