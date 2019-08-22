import Node from "./Node.js"

class Screen extends Node{
    constructor(){
        super();
        console.log("screen")
        this.fps = 30/1000
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");        
        this.renderInterval = setInterval(this.render.bind(this), this.fps);
    }

    render(context){
        for(var i=0; i<this.children.length; i++)
        {
            if(this.children[i].image){
                this.context.drawImage(this.children[i].image,
                                       this.children[i].position.x,
                                       this.children[i].position.y)
            }
        }       
    }  

}

export default Screen;

    /*  render(){
        //flip
        this.context.save()
        this.context.scale(-1,1)       
        this.context.drawImage(this.img, 0, 0, 55, 71, -500-55, 300, 55, 71)
        this.context.restore();
        this.context.drawImage(this.img, 0, 0, 55, 71, 500, 370, 55, 71)        
    }*/