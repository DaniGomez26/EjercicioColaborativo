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
  //declaramos una variable acumuladora (suma) la cual se encargara de guardar la suma total de todas nuestras notas
  let suma= 0
  //para recorrer el arreglo ocupamos for
  for (let i = 0; i <arregloNotas.length; i++){
    suma += arregloNotas[i];
  }
  return suma/arregloNotas.length;
}
//console.log("El promedio de notas es: "+promedioNotas(notas)); 

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
console.log("****************Comienzo del menú******************");
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

