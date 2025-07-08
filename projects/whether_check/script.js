const button = document.getElementById('search_button');
const input = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time')
const cityTemp = document.getElementById('city-temp');

// Go to Free api like https://www.weatherapi.com/ copy the api key and opnen another side or api explorer and paste it here which page required.
// scroll down and change the option no to yes under the value option.
// copy the call section link and paste it on URL bar.
// http://api.weatherapi.com/v1/current.json?key=fe6126bd61c94f5289d145747230909&q=London&aqi=yes

async function getData(cityName) {
  const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=fe6126bd61c94f5289d145747230909&q=${cityName}&aqi=yes`);
  return await promise.json()
}
button.addEventListener('click', async ()=> {
   const value = input.value
   const result = await getData(value);
   console.log(result);
   
});