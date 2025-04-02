class Rectangle{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    area()
    {
        const area= this.width*this.height;
        console.log(area);
        return area;
    }
    paint()
    {
        console.log(`Paintig in color ${this.color}`);
    }
}

const rect= new Rectangle(2,3,"red");
rect.area();
rect.paint();