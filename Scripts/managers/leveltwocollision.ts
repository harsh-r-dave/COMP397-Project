module managers {
    // COLLISION MANAGER CLASS
    export class LevelTwoCollision {
        // PRIVATE INSTANCE VARIABLES
        private _player: objects.LevelTwoPlayer;
        
        constructor(player: objects.LevelTwoPlayer) {
            this._player = player;
        }

        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2))
        }

        public check(object: objects.GameObject) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfWidth: number = this._player.width * 0.5;
            var objectHalfWidth: number = object.width * 0.5;
            var minimumDistance: number = playerHalfWidth + objectHalfWidth;

            startPoint.x = this._player.x;
            startPoint.y = this._player.y;

            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;


            /* check if the distance between the player and 
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (object.getIsColliding() == false) {
                    switch (object.name) {
                        case "LevelTwoEnemy":
                            object.visible = false;
                            console.log("enemy hit");
                            levelTwo.lives = levelTwo.lives - 1;
                            createjs.Sound.play("LevelTwoCrash", 0, 0, 0, 0, 0.5, 0);
                            
                            break;
                    }
                    object.setIsColliding(true);
                }
            }
            else {
                object.setIsColliding(false);
            }
        }
    }
}