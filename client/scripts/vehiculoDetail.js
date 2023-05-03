let container = document.querySelector('#container');
let params = [];



const processParams=()=> {
let paramstr = window.location.search.substring(1);
let paramarr = paramstr.split("&");
for (let i = 0; i < paramarr.length; i++) {
let tmparr = paramarr[i].split("=");
params[tmparr[0]] = tmparr[1];
}
}


const getVehiculoDetail= async ()=>{
    try {
        processParams();
        const response = await fetch(`http://localhost:3000/vehiculos/${params["index"]}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        } else {
         const vehiculo = await response.json();
         console.log(vehiculo) 
         document.querySelector('#marca').innerHTML += vehiculo['marca'];
         document.querySelector('#patente').innerHTML += vehiculo['patente'];
         document.querySelector('#modelo').innerHTML += vehiculo['modelo'];
         document.querySelector('#anio').innerHTML += vehiculo['anio'];
         document.querySelector('#precio').innerHTML += vehiculo['precio'];
         
        }
    } catch (error) {
        console.error(error);
        container.innerHTML = "<h1>Connection error</h1>";

    }
}
getVehiculoDetail();



        

