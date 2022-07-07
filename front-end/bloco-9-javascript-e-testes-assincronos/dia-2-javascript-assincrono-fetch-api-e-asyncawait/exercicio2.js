const API_URL = 'https://api.coincap.io/v2/assets';


const fetchAssets = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const list = document.querySelector("ul");

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      const assets = data.data
      assets.map((a) => {
        const createLi = document.createElement("li");
        const asset = `${a.name} (${a.symbol}): ${a.priceUsd}.`
        createLi.innerHTML = asset;
        list.appendChild(createLi);
      })
    })

  
};

window.onload = () => fetchAssets();