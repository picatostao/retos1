
  ////////////////////////
 // 2.signos zodiacales//
////////////////////////
function zodiac(day:number,month:number){
    switch(month){
        case 1:
            if(day>=1 && day<=19){
                return "Es capricornio"
            }else if(day>=20 && day<=31){
                return "Es acuario"
            }
        break;
        case 2:
            if(day>=1 && day<=18){
                return "Es acuario"
            }else if(day>=19 && day<=29){
                return "Es piscis"
            }
            break;
        case 3:
            if(day>=1 && day<=20){
                return "Es piscis"
            }else if(day>=21 && day<=31){
                return "Es aries"
            }
            break;
        case 4:
            if(day>=1 && day<=19){
                return "aries"
            }else if(day>=20 && day<=30){
                return "tauro"
            }
            break;
        case 5:
            if(day>=1 && day<=20){
                return "Es tauro"
            }else if(day>=21 && day<=31){
                return "Es acuario"
            }
            break;
        case 6:
            if(day>=1 && day<=20){
                return "Es capricornio"
            }else if(day>=21 && day<=31){
                return "Es cancer"
            }
            break;
        case 7:
            if(day>=1 && day<=22){
                 return "Es cancer"
            }else if(day>=23 && day<=31){
                return "Es leo"
                }
            break;
        case 8:
            if(day>=1 && day<=22){
                    return "Es leo"
            }else if(day>=23 && day<=31){
                return "Es virgo"
                    }
            break;
        case 9:
            if(day>=1 && day<=22){
                     return "Es virgo"
            }else if(day>=23 && day<=31){
                    return "Es libra"
                    }
        case 10:
            if(day>=1 && day<=22){
                     return "Es libra"
            }else if(day>=23 && day<=31){
                    return "Es escorpio"
                    } 
        case 11:
            if(day>=1 && day<=21){
                     return "Es escorpio"
            }else if(day>=22 && day<=31){
                    return "Es sagitario"
                    }
        case 12:
            if(day>=1 && day<=21){
                     return "sagitario"
            }else if(day>=22 && day<=31){
                    return "Es capricornio"
                    }                                                   
    }
    
}

  ////////////////////////
 //      3.paises      //
////////////////////////


function continent(country:string){
    switch(country){
        case "España" || "Portugal" || "Francia" || "Italia"||"alemania":
            console.log("estás en Europa")
            break
        case "Angola"||"Etiopia"||"Kenia"||"Marruecos"|| "Senegal":
            console.log("Estás en Africa")
            break
        case "Argentina"||"Estados Unidos"||"Perú"||"Venezuela"||"Canadá":
            console.log("Estás en América")
            break
        case "China"||"Japón"||"Rusia"||"Mongolia"||"India":
            console.log("Estás en Asia");
            break
        case "Australia"||"Fiyi"||"Islas Marshall"||"Nueva Zelanda"||"Palaos":
            console.log("Estás en Oceanía")
            break
            default:
            console.log("No sé dónde estás")
        }
    }

  ////////////////////////
 //      4 es par      //
////////////////////////

function isEven(num:number){
    if (num%2==0){
        console.log(num,"es par")
    }else{
        console.log(num,"es impar")
    }
}



