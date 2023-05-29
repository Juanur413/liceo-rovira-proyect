    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        // Obtener los valores de los campos del formulario
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        alert("¡Mensaje enviado con éxito!");

        document.getElementById("contact-form").reset();
    });