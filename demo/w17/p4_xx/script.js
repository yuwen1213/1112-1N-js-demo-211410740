const main = document.querySelector('#main');
const addUserBtn = document.querySelector('#add-user');
const doubleBtn = document.querySelector('#double');
const showMillionariesBtn = document.querySelector('#show-millionaires');
const sortBtn = document.querySelector('#sort');
const calculateBtn = document.querySelector('#calculate-wealth');

let data = [];

const config = {
  numRandom: 5,
  ratio: 1.5,
  showCondition: 20000000,
};

// 顯示出人名、錢
const updateDOM = (providedData = data) => {
  let tempData = providedData.map((item) => {
    return`
    <div class="person">
      <strong>${item.name}</strong> 
      ${formatMoney(item.money)}
    </div>
    `;
  });
  tempData = tempData.join('');
  console.log('data', data);
  main.innerHTML = `<h2><strong>Person</strong> Wealth</h2> ${tempData}`;
};

const addData = (obj) => {
  data.push(obj);
  // console.log('data', data);
  updateDOM();
};

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

const getRandomUser = async () => {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  const user = data.results[0];
  // add your code

  const newUser = {
    name: `${user.name.first}${user.name.last}`,
    money: Math.floor(Math.random() * 10000000),
  };
  addData(newUser);
};

const getUsers = () => {
  for (let i = 0; i < config.numRandom; i++) {
    getRandomUser();
  }
};

getUsers();

const changeBtnText = () => {};

changeBtnText();

const sortByRichest = () => {};

const calculateWealth = () => {};

addUserBtn.addEventListener('click', getRandomUser);
sortBtn.addEventListener('click', sortByRichest);
calculateBtn.addEventListener('click', calculateWealth);
