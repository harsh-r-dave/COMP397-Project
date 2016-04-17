module config {

    // Scene Constants
    export class Scene {
        public static MENU: number = 0;
        public static INSTRUCTIONS: number = 1;
        public static PLAY: number = 2;
        public static LEVELONE: number = 3;
        public static LEVELONELOSE: number = 4;
        public static LEVELONEEND: number = 5;
        public static LEVELTWO: number = 6;
        public static LEVELTWOLOSE: number = 7;
        public static LEVELTWOEND: number = 8;
        public static LEVELTHREE: number = 9;
        public static END: number = 10;
        public static LEVELTHREELOSE: number = 11;
        
 
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}