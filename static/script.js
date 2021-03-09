
//Funcion para mostrar contenido de pestañas de HTML
function hideDivById(divId) {
    hideAllDivW3Includes()
    var element = document.getElementById(divId)
    if (element.style.display === "none") {
        element.style.display = "block"
    }
}

//Ocultar todo el contenido de pestañas de HTML
function hideAllDivW3Includes() {
    var elementArray = document.getElementsByName("pages")
    for (var element of elementArray) {
        element.style.display = "none"
    }
}

w3.includeHTML()

//Enviar Correo

function sendEmail() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value

    alert("De: " + name + " <" + email + "> " + "\n Mensaje: \n " + message)

}