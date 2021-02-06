



var Carlos = parseInt(prompt(`ingrese la edad de Carlos`))
var Omar = parseInt(prompt(`ingrese la edad de Omar`))
var Jose = parseInt(prompt(`ingrese la edad de Jose`))

if(Carlos > Omar & Carlos > Jose){
     console.log(`carlos es el mayor`)
}
else if(Omar > Carlos & Omar > Jose){
    console.log(`Omar es el mayor`)
}
else{
    console.log("Jose es mayor")
}