/*
    Source File: Harsh Dave - Skywars/ bullet.ts
    Author's name: Harsh Dave, student, Centennial College
    Modified by: Anjali Macwan, Student, Centennial College
    
    Date First Modified: Apr 15, 2016
    Date Last  Modified: Apr 15, 2016
    Last Modified by: Anjali Macwan, student, Centennial College
    
    Program Description: level three weapon
    Revision History: minor changes
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // BULLET CLASS ++++++++++++++++++++++++++++++
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        function Bullet() {
            _super.call(this, assets.getResult("Bullet"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);
            this._bulletSpeed = 15;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Bullet.prototype.update = function () {
            this.x -= this._bulletSpeed;
        };
        Bullet.prototype.setBulletPoisition = function (playerX, playerY) {
            this.x = playerX;
            this.y = playerY;
            createjs.Sound.play("Shoot");
        };
        return Bullet;
    })(createjs.Bitmap);
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map