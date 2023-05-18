const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  const url = 'https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4424&s=2019';
try {
	const response = await fetch(url);
	const data = await response.json();
	console.log('data', data.events);
  displayItems(data.events);
} catch (error) {
	console.error(error);
}
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { strEvent} = item;
      return `<p>${strEvent}</p>`;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
