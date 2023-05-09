export class Mobile{
    private name:string
    private trademark:string
    private model:string
    private color:string
    private price:number
    constructor(nombre:string,trademark:string,modelo:string,color:string,precio:number){
        this.name=nombre
        this.trademark=trademark
        this.model=modelo
        this.color=color
        this.price=precio

        //getters
    }
public getName():string{
    return this.name
}
public getTradeM():string{
    return this.trademark
}
public getModel():string{
    return this.model
}
public getColor():string{
    return this.color
}
public getPrice():number{
    return this.price
}
    //setters

public setName(name:string){
    this.name=name
}
public setTradeM(trademark:string){
    this.trademark=trademark
}
public setModel(model:string){
    this.model=model
}
public setColor(color:string){
    this.color=color
}
public setPrice(price:number){
    this.price=price
}



}

