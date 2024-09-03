document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("buttonText").addEventListener("click", guardarInfo);
    document.getElementById("clear").addEventListener("click", clearInfo);
});


function guardarInfo(){
    //recupero dato ingrasado
    let input=document.getElementById("inputText");
    let datos=[];
    //Existe localstorage?
    if(localStorage.getItem("datos")!=null){
        //Cargo localstorage
        datos=JSON.parse(localStorage.getItem("datos"));
    }
    //guardo input en array
    datos.push(input.value);
    //guardo localStorage
    localStorage.setItem("datos", JSON.stringify(datos))
    //limpio el input
    input.value="";
}

function clearInfo(){
    localStorage.setItem("datos","[]");
}