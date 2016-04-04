// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _menuLabel: objects.Label;
        private _playButton: objects.Button;
        private _instructions: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            //Add Menu Label
            this._menuLabel = new objects.Label(
                "MENU SCENE", "60px Consolas",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._menuLabel);
            
            
            // add the Play button to the MENU scene
            this._playButton = new objects.Button(
                "PlayNowButton",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 180, false);
            this.addChild(this._playButton);
            
            // Play Button event listener
            this._playButton.on("click", this._playButtonClick, this);
            
            // add the Instructions button to the MENU scene
            this._instructions = new objects.Button(
                "InstructionsButton",
                config.Screen.CENTER_X + 50,
                config.Screen.CENTER_Y + 180, false);
            this.addChild(this._instructions);
            
            // Instructions Button event listener
            this._instructions.on("click", this._instructionsButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // MENU Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // PLAY Button click event handler
        private _playButtonClick(event: createjs.MouseEvent) {
            // Switch to the PLAY LEVEL - 1 Scene
            scene = config.Scene.LEVELONE;
            changeScene();
        }
        
        // INSTRUCTIONS Button click event handler
        private _instructionsButtonClick(event: createjs.MouseEvent) {
            // Switch to the INSTRUCTIONS Scene
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        }
    }
}