`use strict`;

//SCRIPT PARA EL BOTON HAMBURGUESA EN EL MODO MÓVIL Y TABLET

//Al hacer click en Header-btn hacemos toggle de la clase isActive para la etiqueta Header-responsive
$(`.Header-btn`).click(function () {
  $(`.Header-responsive`).toggleClass(`isActive`);
});
