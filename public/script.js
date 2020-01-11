const searchElement = document.querySelector(['data-city-search']);
const searchBox = new google.maps.api.places.searchBox(searchElement);
searchBox.addListener('places_changed', () => {
    const place = searchBox.getPlaces()[0]
    if (places == null) return
    const latitude = place.geometry.location.lat();
    const longitude = place.geometry.loation.lng();
    fetch('/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            latitude: latitude,
            longitude: longitude
        }).then(res => res.json()).then(data => {
            setWeatherData(data, place.formatted_address)
        })
    })
})