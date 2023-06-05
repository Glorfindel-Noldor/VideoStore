// Waits until the DOM is completely rendered, then fires up JS code
document.addEventListener('DOMContentLoaded', async () => {
  let coffees = await fetchCoffees();
  renderCoffees(coffees);
});

const COFFEE_API = 'https://api.sampleapis.com/coffee/hot';

const fetchCoffees = async () => {
  let response = await fetch(COFFEE_API);
  let data = await response.json();
  return data;
};

const renderCoffees = (coffees) => {
  let parentNode = document.querySelector('#display-data');

  coffees.forEach((coffee) => {
    let titleNode = document.createElement('h2');
    titleNode.innerText = coffee.title;

    let descNode = document.createElement('p');
    descNode.innerText = coffee.description;

    let ingrNode = document.createElement('p');
    ingrNode.innerText = `Ingredients: ${coffee.ingredients.join(', ')}`;

    let childNode = document.createElement('div');
    childNode.appendChild(titleNode);
    childNode.appendChild(descNode);
    childNode.appendChild(ingrNode);

    parentNode.appendChild(childNode);
  });
};
