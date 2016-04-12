var managers;
(function (managers) {
    var Scoreboard = (function () {
        function Scoreboard() {
        }
        // PUBLIC METHODS
        Scoreboard.prototype.setLevelOneTarget = function (value) {
            this._levelOneTarget = value;
        };
        Scoreboard.prototype.getLevelOneTarget = function () {
            return this._levelOneTarget;
        };
        Scoreboard.prototype.setLevelTwoTarget = function (value) {
            this._levelTwoTarget = value;
        };
        Scoreboard.prototype.getLevelTwoTarget = function () {
            return this._levelTwoTarget;
        };
        Scoreboard.prototype.setLevelThreeTarget = function (value) {
            this._levelThreeTarget = value;
        };
        Scoreboard.prototype.getLevelThreeTarget = function () {
            return this._levelThreeTarget;
        };
        Scoreboard.prototype.setLevelOneLives = function (value) {
            this._levelOneLives = value;
        };
        Scoreboard.prototype.getLevelOneLives = function () {
            return this._levelOneLives;
        };
        Scoreboard.prototype.setLevelTwoLives = function (value) {
            this._levelTwoLives = value;
        };
        Scoreboard.prototype.getLevelTwoLives = function () {
            return this._levelTwoLives;
        };
        Scoreboard.prototype.setLevelThreeLives = function (value) {
            this._levelThreeLives = value;
        };
        Scoreboard.prototype.getLevelThreeLives = function () {
            return this._levelThreeLives;
        };
        Scoreboard.prototype.addLevelOneScore = function (score) {
            this._levelOneTarget += score;
        };
        Scoreboard.prototype.addLevelTwoScore = function (score) {
            this._levelTwoTarget += score;
        };
        Scoreboard.prototype.addLevelThreeScore = function (score) {
            this._levelThreeTarget += score;
        };
        Scoreboard.prototype.addLevelOneLives = function (life) {
            this._levelOneLives += life;
        };
        Scoreboard.prototype.removeLevelOneLives = function (life) {
            this._levelOneLives -= life;
        };
        Scoreboard.prototype.addLevelTwoLives = function (life) {
            this._levelTwoLives += life;
        };
        Scoreboard.prototype.removeLevelTwoLives = function (life) {
            this._levelTwoLives -= life;
        };
        Scoreboard.prototype.addLevelThreeLives = function (life) {
            this._levelThreeLives += life;
        };
        Scoreboard.prototype.removeLevelThreeLives = function (life) {
            this._levelThreeLives -= life;
        };
        return Scoreboard;
    })();
    managers.Scoreboard = Scoreboard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map