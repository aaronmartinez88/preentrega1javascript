/* menu con bucle while y switch*/
let eleccion
do {
    eleccion = prompt("Bienvenido a la Calculadora Online por favor escriba el numero correspondiente a su seleccion y presione enter. \n \n 1-. Realizar una SUMA. \n 2-. Realizar una RESTA. \n 3-. Realizar una MULTIPLICACION. \n 4-. Realizar una DIVISION. \n 5-. Comprobar si un numero es PAR o IMPAR. \n 6-. Salir de la Calculadora.")
    eleccion = parseInt(eleccion)
    switch (eleccion) {
        case 1:
            /* variables */
            let valor1
            let valor2
            valor1 = prompt("Ingrese por favor el primer numero que quiere usar para la SUMA")
            valor1 = parseInt(valor1)
            valor2 = prompt("Ingrese por favor el segundo numero que quiere usar para la SUMA")
            valor2 = parseInt(valor2)
            suma = valor1 + valor2
            alert("La SUMA de " + valor1 + " y " + valor2 + " es igual a : " + suma)
            break;
        case 2:
            /* funcion */
            let valor3
            let valor4
            function resta(valor3, valor4) {
                let restar
                restar = valor3 - valor4
                return restar
            }
            let restas = resta(valor3 = parseInt(prompt("Ingrese por favor el primer numero que quiere usar para la RESTA")), valor4 = parseInt(prompt("Ingrese por favor el segundo numero que quiere usar para la RESTA")))
            alert("La RESTA de " + valor3 + " y " + valor4 + " es igual a : " + restas)
            break;
        case 3:
            /* funcion anonima */
            const multiplicar = function (valor5, valor6) {
                multiplicacion = valor5 * valor6
                alert("La MULTIPLICACION de " + valor5 + " y " + valor6 + " es igual a : " + multiplicacion)
            }
            multiplicar(valor5 = parseInt(prompt("Ingrese por favor el primer numero que quiere usar para la multiplicacion")), valor6 = parseInt(prompt("Ingrese por favor el segundo numero que quiere usar para la multiplicacion")))
            break;
        case 4: 
        /* USO de IF ELSE*/
            valor7 = parseInt(prompt("Ingrese por favor el primer numero que quiere usar para la division"))
            if (valor7 > 0) {
                valor8 = parseInt(prompt("Ingrese por favor el segundo numero que quiere usar para la division"))
                if (valor8 >= valor7) {
                    dividir = valor7 / valor8
                    alert("La DIVISION de " + valor7 + " entre " + valor8 + " es igual a : " + dividir)
                }
                else {
                    if (valor8 < valor7) {
                        if (valor8 == 0) {
                            alert("No es posible de calcular, por favor intenta de nuevo")
                        }
                        else {
                            if (valor8 >= 1) {
                                dividir = valor7 / valor8
                                alert("La DIVISION de " + valor7 + " entre " + valor8 + " es igual a : " + dividir)
                            }
                            if (valor8 < 0) {
                                alert("No es posible de calcular, por favor intenta de nuevo")
                            }
                        }
                    }

                }
            }
            else {
                if (valor7 == 0) {
                    alert("No es posible de calcular, por favor intenta de nuevo")
                }
                if (valor7 < 0) {
                    alert("No es posible de calcular, por favor intenta de nuevo")
                }
            }

            break;
        case 5:
            /* funcion flecha */
           const parono = (valor9) =>
           {
           
if (valor9%2 == 0){
    alert(valor9 + " es un numero : PAR"  )
}

if (valor9%2 == 1){
    alert(valor9 + " es un numero : IMPAR"  )
}
    }

           
           parono(valor9 = parseInt(prompt("Ingrese por favor el primer numero del cual quieres saber si es PAR o IMPAR")))
            break;
            case 6: 
            alert("Saliendo de la Calculadora")
            break;
        default:
            alert("Elegiste una opcion incorrecta, intenta de nuevo por favor.")

    }
} while (eleccion != 6)
