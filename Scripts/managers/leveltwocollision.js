var managers;
(function (managers) {
    // COLLISION MANAGER CLASS
    var LevelTwoCollision = (function () {
        function LevelTwoCollision(player) {
            this._player = player;
        }
        LevelTwoCollision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        LevelTwoCollision.prototype.check = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfWidth = this._player.width * 0.5;
            var objectHalfWidth = object.width * 0.5;
            var minimumDistance = playerHalfWidth + objectHalfWidth;
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
                            //createjs.Sound.play("Crash", 0, 0, 0, 0, 0.5, 0);
                            break;
                    }
                    object.setIsColliding(true);
                }
            }
            else {
                object.setIsColliding(false);
            }
        };
        return LevelTwoCollision;
    })();
    managers.LevelTwoCollision = LevelTwoCollision;
})(managers || (managers = {}));
//# sourceMappingURL=leveltwocollision.js.map