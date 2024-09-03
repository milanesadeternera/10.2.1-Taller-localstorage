document.addEventListener("DOMContentLoaded", (event) => {
    //Leo localstorage
    let valores=JSON.parse(localStorage.getItem("datos"));
    if(valores != null){
        //muestro en pantalla
        valores.forEach(element => {
            document.getElementById("data").innerHTML+=element+", ";
        });
    }
});