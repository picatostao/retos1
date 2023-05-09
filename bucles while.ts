export function hasEven(myNums:number[]):boolean{
    let i=0
    while (i<myNums.length){
        if(myNums[i]%2==0){
            return true
        }
        i++
    }
    return false
}

export function starWithM (myNames:string[]):boolean{
    let i=0
    while(i<myNames.length){
        if(myNames[i].charAt(0)!=="M"){
            return false
        }
        i++
    }
    return true
}