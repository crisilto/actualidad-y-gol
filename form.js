function validarFormulario(event) {
    const form = event.target;

    //Validamos que el campo Nombre no esté vacío
    if (form.name.value.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        event.preventDefault(); //Con event.preventDefault() evitamos que se envíe el formulario
        return;
    }
    //Validamos que el campo Apellidos no esté vacío
    if (form.surname.value.trim() === "") {
        alert("Por favor, ingresa tus apellidos.");
        event.preventDefault(); 
        return;
    }
    //Validamos que el campo Correo electrónico sea una dirección de correo válida
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(form.email.value)) {
        alert("Por favor, ingresa una dirección de correo válida.");
        event.preventDefault(); 
        return;
    }
    //Validamos que el campo "Edad" esté dentro del rango permitido
    const age = parseInt(form.age.value);
    if (isNaN(age) || age < 14 || age > 100) {
        alert("Por favor, ingresa una edad válida (entre 14 y 100 años).");
        event.preventDefault(); 
        return;
    }
    //Validamos que el campo Dirección no esté vacío
    if (form.direction.value.trim() === "") {
        alert("Por favor, ingresa tu dirección.");
        event.preventDefault(); 
        return;
    }
    //Validamos que el campo ¿En qué te podemos ayudar? no esté vacío
    if (form.letter.value.trim() === "") {
        alert("Por favor, cuéntanos en qué te podemos ayudar.");
        event.preventDefault(); 
        return;
    }
    //Si todo lo anterior es correcto, el formulario es válido
    alert("Formulario enviado con éxito");
}

//Escuchamos el evento "submit" del formulario y llamamos a la función de validación
const formulario = document.getElementById("form");
formulario.addEventListener("submit", validarFormulario);