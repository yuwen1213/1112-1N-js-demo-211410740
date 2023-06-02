const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  const url = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
try {
	const response = await fetch(url);
	const data = await response.json();
	console.log('data', data.drinks);
  displayItems(data.drinks);
} catch (error) {
	console.error(error);
}
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const {strDrink} = item;
      return `<p>${strDrink}</p>`;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
