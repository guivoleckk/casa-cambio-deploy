const takeInput = document.querySelector('#coin-country');
const takeButton = document.querySelector('button');
const takeText = document.querySelector('h2');
const ulsLis = document.querySelector('ul');

const fetchAPI = () => {
    const endPointApi = `https://api.exchangerate.host/latest?base=${takeInput.value}`;
   return fetch(endPointApi).then((response) => response.json().then((data) => {
        treatingData(data);
    }));
};

const treatingData = (data) => {
    const dataRates = Object.entries(data.rates);
    ulsLis.innerHTML = '';
    dataRates.forEach(([element1, element2]) => {
        const li = document.createElement('li');
        li.classList.add('lis');
        li.innerHTML = `${element1} = ${element2}`
        ulsLis.appendChild(li);
    });
};

takeButton.addEventListener('click', () => {
    fetchAPI();
    takeText.innerHTML = `Valor referente a ${takeInput.value.toUpperCase()}`;
});