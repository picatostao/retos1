export class Point{
    private x:number
    private y:number
    constructor(x:number, y:number){
        this.x=x
        this.y=y
    }
    getx():number{
        return this.x
    }
    gety():number{
        return this.y
    }
    setx(x:number){
        this.x=x
    }
    sety(y:number){
        this.y=y
    }
    toString():string{
        return `(${this.x},${this.y})`
    }
}