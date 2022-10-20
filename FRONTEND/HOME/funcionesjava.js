        
        
        
        
        /* Hace que los inputs (nombre, dirección y teléfono) del formulario de INDEX1
         hagan la función de fijar el value arriba de la casilla, cuando se
         introduce un dato */
        
        var inputs = document.getElementsByClassName("input");
        for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keyup", function () {
        if (this.value.length >= 1) {
        this.nextElementSibling.classList.add("fijar");
        } else {
        this.nextElementSibling.classList.remove("fijar");
        }
        });
        }

        
        /* Hace que el input_correo del formulario de INDEX1
         hagan la función de fijar el value arriba de la casilla, cuando se
         introduce un dato */
        
        var inputs = document.getElementsByClassName("input_correo");
        for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keyup", function () {
        if (this.value.length >= 1) {
        this.nextElementSibling.classList.add("fijar");
        } else {
        this.nextElementSibling.classList.remove("fijar");
        }
        });
        }


         /* Hace que el input_rut del formulario de INDEX1
         hagan la función de fijar el value arriba de la casilla, cuando se
         introduce un dato */
        
        var inputs = document.getElementsByClassName("input_rut");
        for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keyup", function () {
        if (this.value.length >= 1) {
        this.nextElementSibling.classList.add("fijar");
        } else {
        this.nextElementSibling.classList.remove("fijar");
        }
        });
        }
        