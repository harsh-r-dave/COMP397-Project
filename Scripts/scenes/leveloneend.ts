module scenes {
    export class LevelOneEnd extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _levelOneBackground: objects.LevelOneBackground;
        private _levelTwoBackground: objects.Sea;
        private _levelOnePlayer: objects.LevelOnePlayer;
        private _levelTwoPlayer: objects.LevelTwoPlayer;

        private _levelClearLabel: objects.Label;
        private _instructionsLabel: objects.Label;
        private _backButton: objects.Button;
        private _nextButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // play level clear sound
            createjs.Sound.play("LevelClear", 0, 0, 0, 0, 1, 0);

            // add level one background to the scene
            this._levelOneBackground = new objects.LevelOneBackground();
            this.addChild(this._levelOneBackground);

            // add level two background to the scene
            this._levelTwoBackground = new objects.Sea();
            this.addChild(this._levelTwoBackground);
            this._levelTwoBackground.alpha = 0;

            // add level one player to the scene
            this._levelOnePlayer = new objects.LevelOnePlayer();
            this._levelOnePlayer.x = 580;
            this._levelOnePlayer.y = 240;
            this.addChild(this._levelOnePlayer);

            // add level two player to the scene
            this._levelTwoPlayer = new objects.LevelTwoPlayer();
            this._levelTwoPlayer.x = -this._levelTwoPlayer.width - 10;
            this._levelTwoPlayer.y = 240;
            this.addChild(this._levelTwoPlayer);

            // add level clear label to the scene
            this._levelClearLabel = new objects.Label(
                "Level 1 Clear", "60px Frijole",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 100, true);
            this.addChild(this._levelClearLabel);
            this._levelClearLabel.visible = false;

            // add instructions label to the scene
            this._instructionsLabel = new objects.Label(
                "   You have collected enough fuel \n           for the plane !! \nFly over the ocean and reach \n          till the space...",
                "20px Frijole",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 20, true);
            this.addChild(this._instructionsLabel);
            this._instructionsLabel.visible = false;

            // add the Back button to the MENU scene
            this._backButton = new objects.Button(
                "LevelTwoButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._backButton);

            // Back Button event listener
            this._backButton.on("click", this._backButtonClick, this);

            // add the Next button to the MENU scene
            this._nextButton = new objects.Button(
                "GameOverButton",
                config.Screen.CENTER_X + 50,
                config.Screen.CENTER_Y + 180, false);
            //this.addChild(this._nextButton);

            // Next Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // MENU Scene updates here
        public update(): void {
            this._levelOneBackground.update();
            this._levelOnePlayer.x -= 5;


            // check if level one player reaches to the level two player's position
            if (this._levelOnePlayer.x <= 120) {
                this._levelTwoPlayer.x += 5;
                this._levelClearLabel.visible = true;
                this._instructionsLabel.visible = true;
                this._levelOneBackground.alpha -= 0.1;
                this._levelTwoBackground.alpha += 0.1;
                if (this._levelTwoPlayer.x >= 550) {
                    this._levelTwoPlayer.x = 550;
                    this._levelTwoBackground.update();
                }
            }
        }


        //EVENT HANDLERS ++++++++++++++++++++

        // PLAY Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the THREE Scene
            scene = config.Scene.LEVELTWO;
            changeScene();
        }

        // INSTRUCTIONS Button click event handler
        private _nextButtonClick(event: createjs.MouseEvent) {
            // Switch to the END Scene
            scene = config.Scene.LEVELONE;
            changeScene();
        }
    }
}