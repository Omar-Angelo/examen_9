
//pregunta 2
const promedio = function(n1,n2,n3,n4){
    var suma =n1+n2+n3+n4;
    var pro = suma/4;
    console.log(`el prom es ${pro}`)
}
promedio(parseInt(prompt("ingrese nota 1")),parseInt(prompt("ingrese nota 2")),
parseInt(prompt("ingrese nota 3")),parseInt(prompt("ingrese nota 4")))