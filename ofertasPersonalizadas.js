//  ERNESTO BUIATTI INICIO

/*Historia de usuario: 
"Como cliente, quiero personalizar la experiencia del usuario en mi sitio para generar *engagement y potenciar su interés en mis productos y servicios de manera de maximizar la posibilidad de compra"

*(El Engagement puede definirse como el nivel de compromiso que tienen los consumidores y usuarios con una marca)*

**Se necesita:**

- Cuando el usuario ingrese al sitio (desde cualquier página) debemos preguntarle si desea ingresar su nombre y su email. Debemos guardar esa información localmente.
- Validar que no ingrese datos vacíos. En el caso del email, solo validar que lo ingresado contenga "." y "@"
- Debemos recordar su decisión para no volver a preguntarle cada vez que ingrese.*/


let decision = "";//este parámetro se guarda en local storage por unica vez la primera vez que entra
let nombre = "";
let email = "";

if (!localStorage.getItem ("decision")){// si esta vacio es porque entra por primera vez

    if (confirm("Desea ingresar su nombre y su email")){
        decision = "si"
        
        do{
            nombre = prompt ("Ingrese su nombre: ");
            if (nombre != ""){
                localStorage.setItem ("nombre", nombre);
                alert ("Nombre guardado correctamente");
            }
            else{
                alert ("No se acepta un campo vacío, vualva a intentarlo por favor");
            }
        }while (nombre === "")
        
        do{
            email = prompt ("Ingrese su email: ");
            if (email != "" && email.indexOf(".")!==-1 && email.indexOf("@")!==-1){
                localStorage.setItem ("email", email);
                alert ("Email guardado correctamente");
            }
            else{
                alert ("Ingreso inválido, vualva a intentarlo por favor");
            }
        }while (email === "")

    }else{
        decision = "no"
       
    }
    localStorage.setItem ("decision", decision);
}


//ERNESTO BUIATTI FINAL
