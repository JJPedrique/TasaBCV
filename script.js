const euroLabel = document.getElementById("euro");
const dolarLabel = document.getElementById("dolar");
const fechaLabel = document.getElementById("fecha");

fetch('https://ve.dolarapi.com/v1/euros/oficial')
  .then(response => response.json())
  .then(data => {euroLabel.textContent = `${data.promedio}Bs.`;})
  .catch(error => console.error('Error al obtener los datos:', error));

fetch('https://ve.dolarapi.com/v1/dolares/oficial')
  .then(response => response.json())
  .then(data => {dolarLabel.textContent = `${data.promedio}Bs.`;
        fechaLabel.textContent = `${data.fechaActualizacion}.`.slice(0,10)})
  .catch(error => console.error('Error al obtener los datos:', error));

