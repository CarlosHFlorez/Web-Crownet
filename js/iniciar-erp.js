`use strict`;

//SCRIPT PARA EL BOTON HAMBURGUESA EN EL MODO MÓVIL Y TABLET

$(`.Header-btn`).click(function () {
  $(`.Header-responsive`).toggleClass(`isActive`);
});
