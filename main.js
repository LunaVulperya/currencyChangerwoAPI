document.getElementById('currency-form').addEventListener('submit', function(event){
    event.preventDefault();

    // Obter valor de entrada
    const valor = document.getElementById('amount').value;
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    // Define taxas de câmbio
    const exchangeRates = {
        USD: {BRL:5.73, EUR:0.88},
        BRL: {USD:0.17, EUR:0.15},
        EUR: {USD:1.13, BRL:6.50}
    };
});
