console.log("Hola a todos");

/**FLUJO DE CONTROL
 * Cuando hablamos de flujo de control hablamos del orden natural en el que se ejecutan las instrucciones de nuestro programa (arriba/abajo izq/der). Estas instrucciones pueden ser una función, un console.log, un ciclo, etc.
 * 
 * 
 * La importancia que tiene el control de flujo radica en posibilidad de poder ejecutar cosas o instrucciones dependiendo de una condicional (elemento o instrucción detonante).
 * 
 * 
 * Condicionales
 * 
 * Las condicionales son palabras reservadas que nos permiten evaluar si una condicion se cumple o no bajo ciertos criterios (estipulados por el programador).
 *Las respuestas o salidas esperadas siempre partirán de un true o false. 
 *
 * 
 * 
 * 
 * Condicional if (Si)
 * 
 * If nos sirve para validar si una condición se cumple o no, entonces ejecutamos un bloque de código que está dentro del If. Si no se cumple, entonces no se hace nada.
 * Nota: es la condicional más sencilla, pero la más limitante pues solo ofrece una opción.
 * 
 *  if(Condición) {
 *      Bloque de código que se ejecuta si la condición es verdadera (se cumple)
 *  }
 * 
*/

//Ejemplo: Felipe quiere ir a una fiesta y necesita tener su camisa favorita limpia para poder ir

if(camisaLimpia = true){//Siempre tiene que ser true para que se ejecute el código
console.log("Felipe va a la fiesta");
}

/**
 Else (Sino, entonces, de otro modo, de lo contrario)
 
    if(condición detonante){
        //Bloque de código que se ejecuta si la condición es verdadera
    }
    else{
        //Bloque de código que se ejecuta si la condición es falsa
    }

*/

if(camisaLimpia = true){
    console.log("Felipe va a la fiesta (modo if-else)");//true
} else{
    console.log("Felipe se queda en su casa");//false
}

/**
    else if

    Esta condición nos ayuda a jugar con más opciones y más detonantes, para tener muchas más posibilidades en el mismo código. Para lograr esto vamos a unir el else con el if

    if(condicion detonante){
        //Bloque de código que se ejecuta si la condición es verdadera
    } else if(condición detonante 2){
        //Bloque de código que se ejecuta si la condición 1 es falsa y la condición 2 verdadera
    } else{
        //Bloque de código que se ejecuta si las dos condiciones son falsas
    }

*/

//Ejemplo: Felipe tiene hambre, y quiere comer chilaquiles verdes

// if( hambre = true ){
//     console.log("Felipe va a comer")
// }else if(chilaquilesVerdes = true){
//     console.log("Felipe come chilaquiles verdes")
// }else{
//     console.log("Felipe No va a comer")
// }


//Ejemplo 3: Escribe un programa que muestre 3 mensajes diferentes. El primer mensaje se puestra si son las 13:00 hr y deberá imprimir "vamos a descanso". El segundo mensaje se muestra si son las 14:30 hr y deberá imprimir "vamos a comer". El tercer mensaje se muestra si no se cumple nada de lo anterior y deberá imprimir "Lo siento, seguimos programando".


//Prompt es una forma de ingresar datos y poder hacer uso de ellos

//alert("Hola CH31");

let hora = prompt ("Dime un numero");


//let hora = 17; antes del prompt

if(hora == 13){
    console.log("vamos a descanso");
} else if(hora == 14){
    console.log("vamos a comer");
} else{
    console.log("Lo siento, seguimos programando");
}


/**
 Switch (cambiar o intercambiar / según sea el caso)

 Esta condicional nos permite hacer múltiples operaciones y tomar decisiones en función de la opción deseada (estado de la variable)

 Evalua una expresión comparando el valor de una variable con la expresión o caso y ejecuta las declaracionesasociadas con ese caso, así como los casos que siguen.


    Expresión con un valor
    switch(expresion){
        case 1:
            //Bloque de código que se ejecuta si la opción seleccionada es igual a 1
            break;
        
        case 2:
            //Bloque de código que se ejecuta si la opción seleccionada es igual a 2
            break;

        case 3:
            //Bloque de código que se ejecuta si la opción seleccionada es igual a 3
            break;

        default:
            //Bloque de código que se ejecuta si ninguna opción coincide
            break;            
    }

*/

//Elevador con else if
let piso = 5;

if(piso == 1){
    console.log("Llegaste al piso 1 (if)");
}else if(piso == 2){
    console.log("Llegaste al piso 2 (if)");
} else if(piso == 3){
    console.log("Llegaste al piso 3 (if)");
}else if(piso == 4){
    console.log("Llegaste al piso 4 (if)");
}else if(piso == 5){
    console.log("Llegaste al piso 5 (if)");
}else{
     console.log("Piso no encontrado (if)");
}




//Elevador con switch
let pisoSwitch = prompt("A que piso vas?");//prompt introduce datos como cadena de datos, no como número
switch(pisoSwitch){
    case "1"://En este caso con las comillas " " se le indica el caso va analizar un string
        console.log("Llegaste al piso 1")
        break;
        
    case "2":
        console.log("Llegaste al piso 2")
        break;

    case "3":
        console.log("Llegaste al piso 3")
        break;

    default:
        console.log("Opcion no valida")
        break;            
}





/////////////////////////////////
//// Funciones aplicables a Consultorio Dental
/////////////////////////////////


//Calcular costo de consulta (condicionales)

// let tipoServicio;
// let tiempoConsulta;
// let emergencia;
// let promocion;
// let clienteFrecuente;

// function calcularCostoConsulta(tipoServicio, tiempoConsulta, emergencia, promocion, clienteFrecuente) {

//     //Datos que necesito para mi función
//     tipoServicio = "extraccion";
//     tiempoConsulta = 120;
//     emergencia = true;
//     promocion = .10;
//     clienteFrecuente = true;
//     costo = 1000;
//     promocionClienteFrecuente = .10;
// }

//Ejemplo más sencillo

function calcularCostoConsultaDos(duracionMinutos, costoPorMinuto, clienteFrecuente) {
    let costoTotal = duracionMinutos * costoPorMinuto;

    if(clienteFrecuente){
        costoTotalConDescuento = costoTotal * .9;
    }

    return costoTotalConDescuento;

}

console.log(calcularCostoConsultaDos(45, 15, true))