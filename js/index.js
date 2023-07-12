`use strict`;

//SCRIPT PARA EL BOTON HAMBURGUESA EN EL MODO MÓVIL Y TABLET

//Al hacer click en Header-btn hacemos toggle de la clase isActive para la etiqueta Header-responsive
$(`.Header-btn`).click(function () {
  $(`.Header-responsive`).toggleClass(`isActive`);
});

//SCRIPT PARA CARGAR LOS VÍDEOS DE LAS REVIEWS

$(`.Reviews-img`).click(function () {
  $(`.Reviews-img`).removeClass(`isActive`);
  let i = $(`.Reviews-img`).index($(this));
  let source = $(`.Reviews-li`).eq(i).attr(`src`);
  $(`.Reviews-img`).eq(i).addClass(`isActive`);
  $(`.Reviews-slider`).attr(`src`, source);
});
