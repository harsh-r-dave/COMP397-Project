module scenes {
    export class LevelOne extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _lavelOneLabel: objects.Label;
        private _backButton: objects.Button;
        private _nextButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            //Add Level One Label
            this._lavelOneLabel = new objects.Label(
                "Level 1 SCENE", "60px Consolas",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._lavelOneLabel);
            
            
            // add the Back button to the MENU scene
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 180, false);
            this.addChild(this._backButton);
            
            // Back Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            
            // add the Next button to the MENU scene
            this._nextButton = new objects.Button(
                "NextButton",
                config.Screen.CENTER_X + 50,
                config.Screen.CENTER_Y + 180, false);
            this.addChild(this._nextButton);
            
            // Next Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // MENU Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // PLAY Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        }
        
        // INSTRUCTIONS Button click event handler
        private _nextButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEVEL TWO Scene
            scene = config.Scene.LEVELTWO;
            changeScene();
        }
    }
}