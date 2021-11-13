function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;
  return precioConDescuento;
}

function ClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  const InputCupon = document.getElementById("InputCupon").value;
  switch (true) {
    case InputCupon=="prima":
      const discount = 15;
      const precioConDescuento = calcularPrecioConDescuento(priceValue,discount);
      const Price = document.getElementById("ResultPrice");
      Price.innerText = "El precio con descuento es de: " + precioConDescuento;
      break;
    case InputCupon=="del_campo":
      const discount2 = 25;
      const precioConDescuento2 = calcularPrecioConDescuento(priceValue,discount2);
      const Price2 = document.getElementById("ResultPrice");
      console.log("El precio con descuento es de: " + precioConDescuento2);
      Price2.innerText = "El precio con descuento es de: " + precioConDescuento2;
      break;
    case InputCupon=="todos_tus_secretos":
      const discount3 = 30;
      const precioConDescuento3 = calcularPrecioConDescuento(priceValue,discount3);
      const Price3 = document.getElementById("ResultPrice");
      Price3.innerText = "El precio con descuento es de: " + precioConDescuento3;
      break;
  }
}

function ClickButtonPriceDiscount2(){
  const inputPrice=document.getElementById("InputPrice2");
  const priceValue=inputPrice.value;
  const inputDiscount=document.getElementById("InputDiscount");
  const discountValue=inputDiscount.value;
  const precioConDescuento=calcularPrecioConDescuento(priceValue,discountValue);
  //imprime valor de precio
  const Price=document.getElementById("ResultPrice2");
  Price.innerText="El precio con descuento es de: "+precioConDescuento;
}
