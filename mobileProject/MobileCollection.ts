import { Mobile } from "./mobile";

export class MobileCollection{
    private mobiles:Mobile[]
    totalprice:number
    constructor(mobiles:Mobile[]){
        this.mobiles=mobiles
        this.totalprice=this.calTotal()


        
    }
    private calTotal():number{
        let totalprice=0
        for(let mobile of this.mobiles){
            totalprice += mobile.getPrice()
        }
        return totalprice
    }
    public getMobiles():Mobile[]{
        return this.mobiles
    }
    public setMobiles(mobiles:Mobile[]){
        this.mobiles=mobiles
        this.totalprice=this.calTotal()
    }
    public getCalTotal():number{
     return this.totalprice   
    }
    public setCalTotal(totalprice:number){
        this.totalprice=totalprice
    }
    public printMobiles(){
        for(let mobile of this.mobiles){
            mobile
        }
    }
}









