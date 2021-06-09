cargarArchivo = function() {
    let archivos = document.getElementById("customFile").files;

    let archivo = archivos[0];

    let reader = new FileReader();

    reader.onload = function(e) {
        let arc = e.target.result
        document.getElementById("taCS").value = archivoABox(arc);
        
    }
    reader.readAsText(archivo)

} 

function archivoABox(entrada) {
    let limpio = [];

    for(let i = 0; i < entrada.length; i++) {
        limpio.push(entrada.charAt(i));
    }
    
    return limpio.join("");
}