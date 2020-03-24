/* criando componente H1*/
/* paramentros para create Element 
tipo,{classeCSS},texto ou array de outros compornentes*/

/*Criando o texto Ola Rodrigo*/
const onHello = React.createElement(
  "h1",
  null,
  "Ola Rodrigo"
);

/* Criando uma lista de itens */
const onUl = React.createElement(
  "ul",
  null,
  [
    React.createElement("li",null,"01"),
    React.createElement("li",null,"02"),
    React.createElement("li",null,"03"),
  ]
);

/* Criando uma div com o array de todos os dados*/
const onDiv = React.createElement(
  "div",
  null,
  [
    onHello,
    onUl
  ]
);

/*determinando o container de exibição e refatorando no render*/
const container = document.getElementById('app');
ReactDOM.render(onDiv,container);