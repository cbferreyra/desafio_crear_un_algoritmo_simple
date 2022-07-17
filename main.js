//entrada (Solicitud de datos al cliente)
let pedidoCafeteria = prompt(
  "Elija que desea tomar:\n Café\n Café doble \n Café con leche \n Capuccino"
);
let pedidoPanaderia = prompt(
  "Elija que desea comer:\n medialunas \n Cookies \n Donas\n Porción pastafrola"
);
let nombreCliente = prompt("Ingrese su nombre");
let numeroDeMesa = prompt(
  "Por favor, ingrese el número de mesa, indicado en la misma "
);
//salida (Ticket con el pedido para entregar al mozo)
alert(
  "El pedido del cliente " +
    nombreCliente +
    " de la mesa " +
    numeroDeMesa +
    " es:\n " +
    pedidoCafeteria +
    " con " +
    pedidoPanaderia
);
