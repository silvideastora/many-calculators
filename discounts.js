//const precioOriginal = 220;
//const descuento = 15;


function calculaPrecioConDescuento (precioOriginal, descuento ) {
    const descuentoAplicado = (precioOriginal * descuento)/100;
    const precioAjustado = precioOriginal - descuentoAplicado;

    if (precioAjustado) {
        return (`Precio Final con Descuento es: $ ${precioAjustado}`)
    }
}
function calculaPrecioConCupones (precioOriginal, descuento, coupon) {
    const descuentoAplicado = (precioOriginal * descuento)/100;
    const precioAjustado = precioOriginal - descuentoAplicado;
    const precioAjustadoCupon = precioAjustado - coupon;

    if(precioAjustadoCupon){
        return (`Precio Total con CUPON: $${precioAjustadoCupon}.`);
    }
}


function calculateDiscount() {
    const price = document.getElementById("price")
    const priceValue = price.value

    const discount = document.getElementById("discount")
    const discountValue = discount.value

    const precioFinal = calculaPrecioConDescuento(priceValue, discountValue)
    const resultPrice = document.getElementById("resultPrice")
    resultPrice.innerText= precioFinal
}

const coupons = [
    "SUMMER",
    "SUPER",
    "WELCOME"
]
function calculateDiscountWithCoupons() {
    const price1 = document.getElementById("price")
    const priceValue1 = price1.value

    const discount1 = document.getElementById("discount")
    const discountValue1 = discount1.value

    const coupon = document.getElementById("coupon")
    const couponValue = coupon.value


    let couponDiscount;
    
    switch(couponValue) {
    case "SUMMER": //Summer fest
        couponDiscount = 15;
    break;
    case "SUPER": //
        couponDiscount = 12;
    break;
    case "WELCOME": //Frecuent Client!
        couponDiscount = 35;
    break;
}
    const precioFinalConCupon = calculaPrecioConCupones(priceValue1, discountValue1, couponDiscount);
    const resultPriceCoupon = document.getElementById("resultPriceCoupon")
    resultPriceCoupon.innerText = precioFinalConCupon;
}


