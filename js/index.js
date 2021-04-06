$(".agregar").click(function(e)
{
  e.preventDefault();
  let texto=$("#newText").val();
  $("#newText").val("");
  let elemento=$(
  `<div id="elemento">
    <li>
      <p id="texto">${texto}</p>
      <button id="checar">check</button>
      <button id="borrar">delete</button>
    </li>
  </div>`);
  $(".Lista").append(elemento);
}
);

$(".Lista").on('click', '#checar', function()
{
  let texto=$(this).parent().children("#texto");
  texto.toggleClass("sinLínea");
  if (texto.hasClass("sinLínea"))
  {
    texto.css("text-decoration", "line-through");
  }   
  else
  {
    texto.css("text-decoration", "none");
  }
}
);

$(".Lista").on('click', '#borrar', function()
{
  let elemento=$(this).parent().parent();
  elemento.remove();
}
);