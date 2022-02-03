//const precioOriginal = 220;
//const descuento = 15;


function calculaPrecioConDescuento (precioOriginal, descuento ) {
    const descuentoAplicado = (precioOriginal * descuento)/100;
    return precioOriginal - descuentoAplicado;
}

function calculateDiscount() {
    const price = document.getElementById("price")
    const priceValue = price.value

    const discount = document.getElementById("discount")
    const discountValue = discount.value
    
    const precioFinal = calculaPrecioConDescuento(priceValue, discountValue)
    const resultPrice = document.getElementById("resultPrice")
    resultPrice.innerText="El precio con descuento es: $" + precioFinal
}