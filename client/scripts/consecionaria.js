let btnAgregar = document.getElementById('btnAgregar');

let vehiculos = [];

const mostrarVehiculos = () => {
  let contenedor = document.getElementById('tblVehiculos');
  let tabla = '';
  for (let r of vehiculos) {
   /*  console.log(r) */
    tabla +=
      `<tr>
      <td>${r.tipo}</td>
       <td>${r.marca}</td>
      <td>${r.patente}</td>
      <td>${r.modelo}</td>
      <td>${r.anio}</td>
      <td>${r.precio}</td>
      <td>${r.carga}</td>
      <td> <a href='http://localhost:3000/vehiculoDetail.html?index=${r.patente}' > Ver detalles </a> </td>
      <td> <button type="button" class="btnEliminar" id="${r.patente}">Eliminar</button></td>
      </tr>
 `
  }
  contenedor.innerHTML = tabla;

  const borrarVehiculo = async(e) => {
    let patente = e.target.id;
    
    let respuesta = await fetch(`/vehiculos/${patente}`, {
      method: 'DELETE',
      headers: {"Content-Type" : "application/json"}
      
    })

    load();
  }

  let botonesBorrar = document.querySelectorAll('.btnEliminar'); 

  botonesBorrar.forEach(boton => {

    boton.addEventListener('click', (e) => {
          /*  console.log(e) */
           borrarVehiculo(e)
    } )
  })

}


async function load() {
  const url_base = "http://localhost:3000";///consecionaria.html
  const endpoint = "/vehiculos";

  const respuesta = await fetch(url_base + endpoint);
  vehiculos = await respuesta.json();
  /* console.log(vehiculos); */

  mostrarVehiculos()
}

const eliminar = (data) => {
  console.log("a eliminar", data);
};

const agregar = async () => {
  let tipo = document.getElementById('tipo').value;
  let marca = document.getElementById('marca').value;
  let patente = document.getElementById('patente').value;
  let modelo = document.getElementById('modelo').value;
  let anio = document.getElementById('anio').value;
  let precio = document.getElementById('precio').value;
  

  let vehiculo = {
    "tipo": tipo,
    "marca": marca,
    "patente": patente,
    "modelo": modelo,
    "anio": Number(anio),
    "precio":Number(precio),
    
  }

  

  if (aServidor(vehiculo)) {
    vehiculos.push(vehiculo);
    mostrarVehiculos();
  }
}


const aServidor = async (datos) => {
  let respuesta = await fetch('/vehiculos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });
  return (await respuesta.text() == "ok");
}



btnAgregar.addEventListener('click', agregar);




load();