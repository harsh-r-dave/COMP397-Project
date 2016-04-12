var managers;
(function (managers) {
    // COLLISION MANAGER CLASS
    var LevelOneCollision = (function () {
        function LevelOneCollision(player) {
            this._player = player;
        }
        LevelOneCollision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        LevelOneCollision.prototype.check = function (object) {
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
                        case "LevelOneEnemy":
                            object.visible = false;
                            scoreboard.removeLevelOneLives(1);
                            console.log("enemy hit");
                            //createjs.Sound.play("Crash", 0, 0, 0, 0, 0.5, 0);
                            break;
                        case "LevelOneObstacle":
                            object.visible = false;
                            scoreboard.removeLevelOneLives(1);
                            console.log("obstacle hit");
                            //createjs.Sound.play("Crash", 0, 0, 0, 0, 0.5, 0);
                            break;
                        case "LevelOneCollector":
                            object.visible = false;
                            scoreboard.addLevelOneScore(250);
                            console.log("gas hit");
                            //createjs.Sound.play("Collect", 0, 0, 0, 0, 0.5, 0);
                            break;
                    }
                    object.setIsColliding(true);
                }
            }
            else {
                object.setIsColliding(false);
            }
        };
        return LevelOneCollision;
    })();
    managers.LevelOneCollision = LevelOneCollision;
})(managers || (managers = {}));
//# sourceMappingURL=levelonecollision.js.map