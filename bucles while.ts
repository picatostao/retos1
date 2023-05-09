function hasEven(myNums:number[]):boolean {
    for(let num of myNums){
        if (num%2 == 0){
            return true;
        }
    }
    return false
}

function starWithM (myNames:string[]):boolean{
    let i=0
    while(i<myNames.length){
        if(myNames[i].charAt(0)!=="M"){
            return false
        }
        i++
    }
    return true
}