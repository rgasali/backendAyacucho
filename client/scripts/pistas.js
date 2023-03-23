let inputCancion=document.getElementById('inputCancion');
let inputDuracion=document.getElementById('inputDuracion');
let inputInterprete=document.getElementById('inputInterprete');
let inputGenero=document.getElementById('inputGenero');
let inputFecha=document.getElementById("inputFecha");
let btnAgregar=document.getElementById('btnAgregar');
let btnAnalizar=document.getElementById('btnAnalizar');
const lista=[];



//crear pista
function crearPista(){
    let identificador=lista.length+1;
    let cancion=inputCancion.value;
    let duracion=inputDuracion.value;
    let interprete=inputInterprete.value;
    let genero=inputGenero.value;
    let fecha=inputFecha.value;
    let pista={
        "identificador":Number(identificador),
        "cancion":cancion,
        "duracion":Number(duracion),
        "interprete":interprete,
        "genero":genero,
        "fecha":Number(fecha)
    };
    if(pista.cancion===""||pista.duracion===0||pista.interprete===""||pista.genero===""||pista.fecha===0){
        return false;
    }else
    return(pista)

}


//agregar pista
function agregarPista(){
    if(crearPista()===false){
        return alert("los campos no estan completos")
    }else{
        lista.push(crearPista());
}}


//mostrar Lista
function mostrarLista(){
    let divLista=document.getElementById("divLista");
    let divIdentificador=document.getElementById("divIdentificador")
    let divCancion=document.getElementById("divCancion")
    let divDuracion=document.getElementById("divDuracion")
    let divInterprete=document.getElementById("divInterprete")
    let divGenero=document.getElementById("divGenero")
    let divFecha=document.getElementById("divFecha")


    let tablaId="";
    let tablaCancion="";
    let tablaDuracion="";
    let tablaInterprete="";
    let tablaGenero="";
    let tablaFecha="";

    for (let i=0;i<lista.length;i++){
        tablaId+=
        `<p>${lista[i].identificador}<br><p>`;
        tablaCancion+=
        `<p>${lista[i].cancion}<br><p>` ;
        tablaDuracion+=
        `<p>${lista[i].duracion}<br><p>`;
        tablaInterprete+=
        `<p>${lista[i].interprete}<br><p>`;
        tablaGenero+=
        `<p>${lista[i].genero}<br><p>`;
        tablaFecha+=
        `<p>${lista[i].fecha}<br><p>`;

    }
    divIdentificador.innerHTML=tablaId;
    divCancion.innerHTML=tablaCancion;
    divDuracion.innerHTML=tablaDuracion;
    divInterprete.innerHTML=tablaInterprete;
    divGenero.innerHTML=tablaGenero;
    divFecha.innerHTML=tablaFecha;
}


//calcular Duracion
function calcularDuracion(){
    let duracionLista=0;
    for(let i=0;i<lista.length;i++){
        duracionLista=duracionLista+lista[i].duracion;
    }
  return  console.log(`el tiempo total de la lista es:  ${duracionLista}`)
}

function ordenarListaxDuracion(Milista){
    let listaXDuracion=Milista;
    listaXDuracion.sort(function (a, b) {
        if (a.duracion > b.duracion) {
          return 1;
        }
        if (a.duracion < b.duracion) {
          return -1;
        }
        
        return 0;
      })
      return listaXDuracion
}

 //tema mas largo

 function calcularMayorDuracion(lista){
  
      console.log(`El tema mas largo es  ${lista[lista.length-1].cancion} que dura ${lista[lista.length-1].duracion}`)

 }
 //autor con mas temas
function calcularCantantePreferido(lista){
   
    let listaxCantante=lista;
    let cantanteA="";
    let cantanteB="";
    let cantanteC="";
    let contadorA=0;
    let contadorB=0;
    let contadorC=0;


      for(let i=0;i<listaxCantante.length;i++){
         cantanteC=listaxCantante[i].interprete;
         if(cantanteA===""){
            cantanteA=cantanteC;
            contadorA++;
         } else { if(cantanteA===cantanteC){
            contadorA++;
            }else if(cantanteB===""){
                    cantanteB=cantanteC;
                    contadorB++
                   }else{
                    if(cantanteB===cantanteC){
                        contadorB++;
                        if(contadorB>contadorA){
                            cantanteC=cantanteA;
                            cantanteA=cantanteB;
                            cantanteB=cantanteC;
                            contadorC=contadorA;
                            contadorA=contadorB;
                            contadorB=contadorC;
                        }
                    }
                }
           
         }


      }
   
       console.log(`el cantante prefero es ${cantanteA}, con ${contadorA} temas.`)
 
}


 //genero mas repetido
 //titulo mas moderno
 //titulo mas antiguo
 //temas con mas de un año de antigüedad



//Leer json

fetch('../json/pistas.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.tracks.forEach(element => {
       lista.push(element); 
    });
    console.log(lista)
    

  })
  









  //botonera

btnAgregar.addEventListener('click',()=>{
   
   agregarPista()
   
   mostrarLista()
   
 
})

btnAnalizar.addEventListener('click',()=>{
    calcularDuracion()
    calcularMayorDuracion(ordenarListaxDuracion(lista))
    calcularCantantePreferido(lista)
})

