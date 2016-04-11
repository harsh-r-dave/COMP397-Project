module scenes {
    export class LevelOne extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: objects.LevelOneBackground;
        private _player: objects.LevelOnePlayer;

        private _enemyOne: objects.LevelOneEnemy;
        private _enemyTwo: objects.LevelOneEnemy;

        private _obstacle: objects.LevelOneObstacle;
        private _collector: objects.LevelOneCollector;

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

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // MENU Scene updates here
        public update(): void {
            this._background.update();
            this._player.update();

            //  update enemy
            this._enemyOne.update();
            this._enemyTwo.update();

            // update obstacle
            this._obstacle.update();

            // update collector
            this._collector.update();
        }


        //EVENT HANDLERS ++++++++++++++++++++
    }
}