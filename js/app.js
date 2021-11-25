const GetAmountOfBitcoins = document.querySelector('.numberOfBitcoins');
const inputField = document.querySelector('input[type="number"]');
const GetPrice = document.querySelector('.GetPrice')
const GetCurrencyType = document.querySelector('#CurrencyType')
const ConvertedP = document.querySelector('.ConvertedPrice')

GetPrice.addEventListener('click', getBitcoinPrice);

function getBitcoinPrice() {
    let ConvertedPrice = "";
    let numberOfBitcoins = inputField.value;
    let url = `https://api.coindesk.com/v1/bpi/currentprice.json`;
    let CurrencyType = GetCurrencyType.value
    fetch(url)
    .then(Response => {
        return Response.json();
    })
    .then(data =>{
        
        switch (CurrencyType) {
            case "EUR":{
                ConvertedPrice = numberOfBitcoins * (data.bpi.EUR.rate_float)
                break;
            }
            case "GBP":{
                ConvertedPrice = numberOfBitcoins * (data.bpi.GBP.rate_float)
                break;
            }
            case "USD":{
                ConvertedPrice = numberOfBitcoins * (data.bpi.USD.rate_float);
                break;
            }
        }

        ConvertedP.innerHTML = ConvertedPrice.toFixed(2);
    });
};