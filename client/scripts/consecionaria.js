let btnAgregar = document.getElementById('btnAgregar');

let vehiculos = [];

const mostrarVehiculos = () => {
  let contenedor = document.getElementById('tblVehiculos');
  let tabla = '';
  for (let r of vehiculos) {
    console.log(r)
    tabla +=
      `<tr>
      <td>${r.tipo}</td>
       <td>${r.marca}</td>
      <td>${r.patente}</td>
      <td>${r.modelo}</td>
      <td>${r.anio}</td>
      <td>${r.precio}</td>
      <td>${r.carga}</td>
    </tr>
 `
  }
  contenedor.innerHTML = tabla;
}


async function load() {
  const url_base = "http://localhost:3000/consecionaria.html";
  const endpoint = "/vehiculos";

  const respuesta = await fetch(url_base + endpoint);
  vehiculos = await respuesta.json();
  console.log(vehiculos);

  mostrarvehiculos()
}

const agregar = async () => {
  let tipo = document.getElementById('tipo').value;
  let marca = document.getElementById('marca').value;
  let patente = document.getElementById('patente').value;
  let modelo = document.getElementById('modelo').value;
  let anio = document.getElementById('anio').value;
  let precio = document.getElementById('precio').value;
  let carga = document.getElementById('carga').value;

  let vehiculo = {
    "tipo": tipo,
    "marca": marca,
    "patente": patente,
    "modelo": modelo,
    "anio": anio,
    "precio": precio,
    "carga": carga



  }
  if (aServidor(vehiculo)) {
    vehiculos.push(vehiculo);
    mostrarvehiculos();
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