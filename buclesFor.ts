  ////////////////////////
 //     1-impares      //
////////////////////////

export function evenNumbers(num:number){
    for(let i=0;i<=num;i++){
        if(i%2!==0){
            console.log(i)
        }
    }
}

  ////////////////////////
 // 2 array revertido  //
////////////////////////

export function myRevert(myArr:[]):any[]{ //no me deja poner :any en myArr
    let reverse=[]
    for(let i=myArr.length-1;i>=0; i--){
        reverse.push(myArr[i]);
    }
    return myArr
}


  ////////////////////////
 //     4 arcoiris     //
////////////////////////

export function isRainbow(colors:string[]){
    let arcoiris=["rojo","naranja","amarillo","verde","añil", "azul", "violeta"]
    for (let color of colors){
        if (arcoiris.includes(color)){
            console.log("el ",color, " está en el arcoiris")
        }else{
            console.log("el ",color, " NO está en el arcoiris")
        }
    }
}

  //////////////////////////
 // 5 suma de caracteres //
//////////////////////////

export function add(myWords:string[]):number{
    let sum=0
    for (let letras of myWords){
        sum += letras.length
    }
    return sum
}
