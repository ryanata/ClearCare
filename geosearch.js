var searchElement = document.getElementById("regionSearch");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    searchElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  console.log(position.coords.latitude + " " + position.coords.longitude);
  callMapAPI(position.coords.latitude, position.coords.longitude);
}

function readState(input){
    console.log(input);
    $('#regionSearch').val(input);
    $('#submitButton').trigger('click');
}


function callMapAPI(lati,long){
    const KEY = "AIzaSyDgbrlpgW7H3M26JXivX3oQvDYncdoC6r4";
    const LAT = lati;
    const LNG = long;
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LAT},${LNG}&key=${KEY}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    console.log(data);
    let parts = data.results[0].address_components;
    //document.body.insertAdjacentHTML(
    //    "beforeend",
    //    `<p>Formatted: ${data.results[0].formatted_address}</p>`
    //);
    parts.forEach(part => {
        //if (part.types.includes("country")) {
        //we found "country" inside the data.results[0].address_components[x].types array
        //document.body.insertAdjacentHTML(
        //    "beforeend",
        //    `<p>COUNTRY: ${part.long_name}</p>`
        //);
        //}
        if (part.types.includes("administrative_area_level_1")) {
        //document.body.insertAdjacentHTML(
        //    "beforeend",
        //    `<p>PROVINCE: ${part.long_name}</p>`
        //);
        readState(part.long_name);
        }
    });
    })
    .catch(err => console.warn(err.message));

}
