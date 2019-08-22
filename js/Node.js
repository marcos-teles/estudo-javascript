import Vector2 from "./Vector2.js"

class Node{

    constructor(){
        this.position = new Vector2(100, 300);
        this.localPosition;
        this.scale;
        this.alpha;
        this.children = [];
        this.zIndex;
        this.parent;
    }

    addChild(child){
        child.parent = this;
        this.children.push(child);

    }    
}

export default Node