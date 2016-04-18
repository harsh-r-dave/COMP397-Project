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

module objects {
    // BULLET CLASS ++++++++++++++++++++++++++++++
    export class Bullet extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _topBounds: number;
        private _bottomBounds: number;
        private _bulletSpeed: number;

        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;

        constructor() {
            super(assets.getResult("Bullet"));

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
        public update(): void {
            this.x -= this._bulletSpeed;
        }

        public setBulletPoisition(playerX: number, playerY: number): void {
            this.x = playerX;
            this.y = playerY;
            createjs.Sound.play("Shoot");
        }
    }
}