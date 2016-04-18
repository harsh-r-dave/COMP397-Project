module scenes {
    export class Instructions extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _instructionsImage : createjs.Bitmap;
        private _button: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // add instructions image to the scene
            this._instructionsImage = new createjs.Bitmap(assets.getResult("Instructions"));
            this.addChild(this._instructionsImage);

            // add the Play button to the MENU scene
            this._button = new objects.Button(
                "GotIt",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 210, true);
            this.addChild(this._button);

            // Play Button event listener
            this._button.on("click", this._buttonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }

        //EVENT HANDLERS ++++++++++++++++++++
        
        // PLAY Button click event handler
        private _buttonClick(event: createjs.MouseEvent) {
            // Switch to the PLAY LEVEL - 1 Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}