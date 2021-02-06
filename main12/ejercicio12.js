

const salario = function(n){
    var incremento= n*0.1
    var año1= n + incremento

    var incremento2 =año1*0.1
    var año2 = año1 + incremento2

    var incremento3 = año2 * 0.1
    var año3 = año2 + incremento3
    
    var incremento4 = año3 * 0.1
    var año4 = año3 + incremento4

    var incremento5 = año3 * 0.1
    var año5 = año4 + incremento5

    var incremento6 = año5 * 0.1
    var año6= año5 + incremento6

    console.log(año1,año2,año3,año4,año5,año6)

}
salario(1500)

