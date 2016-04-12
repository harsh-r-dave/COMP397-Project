module objects {
    // SEA CLASS ++++++++++++++++++++++++++++++++++++
    export class Sea extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("sea");
            
           this._speed.x = 5; //ocean speed
           this._reset(-800);
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the right side of the ocean 
            // has met the right side of the scene
            if(this.x >= value) {
                this._reset(-800);
            }
        }
        
        // reset the sea offscreen
        protected _reset(value:number):void {
            this.x = value;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the sea 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(0);
        }
    }
}