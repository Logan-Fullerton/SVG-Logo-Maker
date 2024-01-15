class Shapes {
    constructor(){
        this.color = "";
    }
    setColor(color){
        this.color = color;
    }
}
class triangle extends Shapes{
    render(){
        return `polygon points="50,0 100,100 0,100" style="fill:${this.color};"`;
    }
};
class square extends Shapes{
    render(){
        return `rect width="100" height="100" style="fill:${this.color};"`;
    }
};
class circle extends Shapes{
    render(){
        return `circle cx="50" cy="50" r="40" style="fill:${this.color};"`;
    }
};

module.exports={triangle,square,circle}