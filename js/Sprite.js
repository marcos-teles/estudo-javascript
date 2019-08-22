import Node from "./Node.js"

class Sprite extends Node{
    constructor(srcImg, position){
        super();
        this.position = position;  
        this.image = new Image();
        this.image.src = srcImg;
        this.image.onload = ()=>{
            this.width = this.image.width;
            this.height = this.image.height;
            //this.hitBox = 
        }
    }
}

export default Sprite;