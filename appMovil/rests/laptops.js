const IP = "192.168.1.2";
const PORT = 3001;
const URL = "http://" + IP + ":" + PORT + "/";

export const getAllLaptops = (fnRefreshList) => {
  console.log("Mostrando laptops: ");
  fetch(URL + "laptops")
    .then((response) => response.json())
    .then((body) => {
      console.log("Respuesta del servidor:", body);
      fnRefreshList(body);
    })
    .catch((error) => {
      console.log("❌ Error al obtener laptops:", error);
    });
};


export const saveLaptopsRest = (laptop, fnShowMessage) => {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            marca: laptop.marca,
            procesador: laptop.procesador,
            memoria: laptop.memoria,
            disco: laptop.disco
        })
    }
    fetch(
        URL+"laptops", config
    )
    .then(response => response.json())
    .then(body=>{
        fnShowMessage();
        console.log(body);
    })
}