

const calcular =function(n1,n2,n3){
    if(n1 >=11){
        console.log(` Jose esta aprobado con ${n1}`)
    }
    else {
        console.log(` Jose esta desaprobado con ${n1}`)
    }
    if(n2 >= 11){
        console.log(` Luis esta aprobado con ${n2}`)
    }
    else {
        console.log(` Luis esta desaprobado con ${n2}`)
    }
     if(n3 >= 11){
        console.log(` Omar esta aprobado con ${n3}`)
    }
    else{
        console.log(`Omar esta desaprobado con ${n3}`)
    }
}
calcular(parseInt(prompt("ingrese nota de Jose")),
parseInt(prompt("ingrese nota de Luis")),parseInt(prompt("ingrese nota de Omar")))

