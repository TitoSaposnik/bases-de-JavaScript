//switch

const metodoPago = "cheque";

switch(metodoPago){
    case "tarjeta": console.log("Usas Tarjeta");
        break;
    case "efectivo": console.log("Usas Efectivo");
        break;
    case "cheque": console.log("Usas Cheque");
        break;
    default: console.log("Usas X metodo de pago");
        break;
}