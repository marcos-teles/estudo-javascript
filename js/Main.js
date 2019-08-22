
import Sprite  from "./Sprite.js";
import Screen  from "./Screen.js";
import Vector2 from "./Vector2.js";

var player;
var screen;

function init(){
    screen = new Screen();   
    player = new Sprite("./img/teste.png", new Vector2(300, 300));
    screen.addChild(player);
}

init()
