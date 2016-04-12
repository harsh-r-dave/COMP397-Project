module managers {
    export class Scoreboard {
        // PRIVATE INSTANCE VARIABLES
        private _levelOneTarget: number;
        private _levelOneLives: number;
        
        private _levelTwoTarget: number;
        private _levelTwoLives: number;
        
        private _levelThreeTarget: number;
        private _levelThreeLives: number;
        
        // PUBLIC METHODS
        public setLevelOneTarget(value: number): void {
            this._levelOneTarget = value ;
        }
        public getLevelOneTarget(): number {
            return this._levelOneTarget;
        }
        
        public setLevelTwoTarget(value: number): void {
            this._levelTwoTarget = value ;
        }
        public getLevelTwoTarget(): number {
            return this._levelTwoTarget;
        }
        
        public setLevelThreeTarget(value: number): void {
            this._levelThreeTarget = value ;
        }
        public getLevelThreeTarget(): number {
            return this._levelThreeTarget;
        }
        
        public setLevelOneLives(value: number) {
            this._levelOneLives = value;
        }
        public getLevelOneLives(): number {
            return this._levelOneLives;
        }
        
        public setLevelTwoLives(value: number) {
            this._levelTwoLives = value;
        }
        public getLevelTwoLives(): number {
            return this._levelTwoLives;
        }
        
        public setLevelThreeLives(value: number) {
            this._levelThreeLives = value;
        }
        public getLevelThreeLives(): number {
            return this._levelThreeLives;
        }
        
        public addLevelOneScore(score: number): void {
            this._levelOneTarget += score;
        }
        
        public addLevelTwoScore(score: number): void {
            this._levelTwoTarget += score;
        }
        
        public addLevelThreeScore(score: number): void {
            this._levelThreeTarget += score;
        }
        
        public addLevelOneLives(life: number): void {
            this._levelOneLives += life;
        }
        public removeLevelOneLives(life: number): void {
            this._levelOneLives -= life;
        }
        
        public addLevelTwoLives(life: number): void {
            this._levelTwoLives += life;
        }
        public removeLevelTwoLives(life: number): void {
            this._levelTwoLives -= life;
        }
        
        public addLevelThreeLives(life: number): void {
            this._levelThreeLives += life;
        }
        public removeLevelThreeLives(life: number): void {
            this._levelThreeLives -= life;
        }
    }
}