
class Screen{
    constructor(){
        console.log("screen")
        this.fps = 30/1000
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");        
        this.renderInterval = setInterval(this.render.bind(this), this.fps);        
    }
    
    render(){        
        this.context.fillRect(100,100,100,100);        
    }
}

export default Screen;