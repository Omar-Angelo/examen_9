


const bono = function(n){
   if(n == 1 ){
       console.log(`se le dara $100`)
   }
   else if(n== 2){
       console.log(`se le da ra $200`)
   }
   else if (n== 3){
       console.log(`se le dara $300`)
   }
   else if(n == 4){
       console.log(`se le dara $400`)
   }
   else {
       console.log("se le dara $500")
   }

}
bono(parseInt(prompt(`ingrese año de antiguedad`)))