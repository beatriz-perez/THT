const baseUrl = 'https://compare.monedero.com/api/getPrice';

const fetchApiInfo = (pairQuery, amountQuery) => 
    fetch(`${baseUrl}?pair=${pairQuery}&amount=${amountQuery}`)
    .then(response => response.json());

export { fetchApiInfo };

