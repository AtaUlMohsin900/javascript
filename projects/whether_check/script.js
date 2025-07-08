const button = document.getElementById('search_button');
const input = document.getElementById('city-input');

// Go to Free api like https://www.weatherapi.com/ copy the api key and opnen another side or api explorer and paste it here which page required.
// scroll down and change the option no to yes under the value option.
// copy the call section link and paste it on URL bar.
// http://api.weatherapi.com/v1/current.json?key=fe6126bd61c94f5289d145747230909&q=London&aqi=yes
async function getData(cityName) {
  const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=fe6126bd61c94f5289d145747230909&q=${cityName}&aqi=yes`)
  return await promise.json()
}
button.addEventListener('click', ()=> {
   console.log(input.value);

});