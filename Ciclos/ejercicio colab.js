/*Pedir al usuario que ingrese la cantidad de alumnos a los cuales les asignara una nota, luego que ingrese la cantidad de notas se desplegará un menú
las opciones del menú serán:
1.-mostrar promedio
2.- mostrar si la nota es aprobatoria o reprobatoria  
3.- mostrar si la nota está por sobre o bajo el promedio del curso*/
/*algoritmo(que hay que hacer)
1.- definir array
2.-pedir la cantidad de alumnos
3.- solicitar las notas de cada alumno y guardarlas en un array
4.- saber cual es la nota aprobatoria
5.- validar la cantidad de notas sea la correcta y definir notas válidas
6.- hacer una funcion por cada opción del menú
7.- crear el menú
8.-definir cuando termina el menú
definir promedio del curso*/

const notas=[];
const notaAprobatoria=4.0;
let cantAlumnos=parseInt(prompt("Ingrese la cantidad de alumnos: "));

for(let i=1; i<=cantAlumnos;i++){
  let notaAlumno=0
  //se declara do while para verificar que el calor de la nota esté entre 1 y 7
do{
  notaAlumno=parseFloat(prompt("Ingrese nota de alumno n° "+i+": "))
}while(notaAlumno>7||notaAlumno<1);
  notas.push(notaAlumno);
}
//Funciones del menú

function promedioNotas(arregloNotas){
  let suma= 0
  for (let i = 0; i <arregloNotas.length; i++){
    suma += arregloNotas[i];
  }
  return suma/arregloNotas.length;
}
 


//vamos a crear una funcion que nos muestre si la nota es aprobatoria o reprobatoria

function aprobado(notaAprobatoria, arregloNotas ){
  for(let i = 0; i<arregloNotas.length; i++){
    if(arregloNotas[i]>=notaAprobatoria){
      console.log("La nota del alumno "+(i+1)+" fue de: "+arregloNotas[i]+" por lo que aprueba")
    }else{
      console.log("La nota del alumno "+(i+1)+" fue de: "+arregloNotas[i]+" por lo que reprueba")
    }
  }
}
aprobado(notaAprobatoria,notas);

//funcion nos va a decir si esta o no sobre el promedio
function sobreProm(arregloNotas , promedioNotas){
  for(let i = 0; i<arregloNotas.length; i++){
    if(arregloNotas[i]>promedioNotas){
      console.log("La nota del alumno "+(i+1)+" fue de: "+arregloNotas[i]+", la cual está por sobre el promedio del curso que fue de: "+promedioNotas);
    }else if(arregloNotas[i]== promedioNotas){
      console.log("La nota del alumno "+(i+1)+" fue de: "+arregloNotas[i]+", la cual es igual al promedio del curso que fue de: "+promedioNotas);
    }
    else{
       console.log("La nota del alumno "+(i+1)+" fue de: "+arregloNotas[i]+", la cual está bajo el promedio del curso que fue de: "+promedioNotas);
    }
  }
}

/** ************************/
console.lot("****************Comienzo del menú******************");
let opcion=1;
while(opcion!=0){
do{
    console.log("Bienvenido/a");
    console.log("Seleccione 1 si quiere obtener el promedio del curso");
    console.log("Seleccione 2 si quiere ver si la nota es aprobatoria o reprobatoria");
    console.log("Seleccione 3 si quiere obtener el promedio del curso");
    console.log("Seleccione 0 para salir del menú");
    opcion = parseInt(prompt("Ingrese su opción: "));
}while(0>opcion>3);
  if(opcion == 1){
    promedioNotas(notas);
    console.log("El promedio de notas fue: "+promedioNotas(notas));
  }else if(opcion == 2){
    aprobado(notaAprobatoria, notas);
  }else if(opcion==3){
    let promedio= promedioNotas(notas);
    sobreProm(notas, promedio);
  }else{
    console.log("Gracias, Adiós")
  }

}

