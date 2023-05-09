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
    distanceToOrigin():number{
        let distancia=Math.sqrt(this.x*this.x + this.y*this.y)
        return distancia                                              ///math.sqrt---raiz cuadrada
    }
    calculateDistance(anotherPoint:Point):number{
        let x1=this.x
        let y1=this.y
        let x2=anotherPoint.getx()
        let y2=anotherPoint.gety()
        let distance=Math.sqrt((x2*x1)**2+(y2-y1)**2)
        return distance 
    }
    calculateQuadrant():number{
        if(this.x==0 || this.y==0){ 
            return 0
        }else if (this.x>0 && this.y>0){
            return 1
        }else if(this.x<0 && this.y>0){
            return 2
        }else if(this.x<0 && this.y<0){ 
            return 3
        }else{ 
            return 4
        } 

        
    }
}