async function getFromAPI() {
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    console.log(data.results[0])
    picture = '<img src=\"' + data.results[0].picture.large + '\" width="128" height="128">'
    cell = '<div>' + 'Cell: ' + data.results[0].cell + '</div>'
    city = '<div>' + 'City: ' + data.results[0].location.city + '</div>'
    email = '<div>' + 'E-mail: ' + data.results[0].email + '</div>'
    coordinates = '<div>' + 'Coordinates: ' + data.results[0].location.coordinates.latitude + '; ' + data.results[0].location.coordinates.longitude + '</div>'
    dataSet = [picture, cell, city, email, coordinates]
    return dataSet
}

async function getData() {
    for (var i = 1; i < 6; i++) {
        currentObject = 'person' + i
        person = document.getElementById(currentObject)
        data = await getFromAPI()
        person.innerHTML = data[0] + data[1] + data[2] + data[3] + data[4]
    }
}
