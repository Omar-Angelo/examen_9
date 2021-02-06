

const votacion = function(n){
    if(n>=18){
        console.log(`si puedes votar`)
    }
    else{
        console.log(`aun no votas por ser menor de edad`)
    }
}
votacion(parseInt(prompt(`ingrese su edad `)))




