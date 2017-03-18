mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ1bmFzYW5rIiwiYSI6ImRKNlNQa3MifQ.SIx-g-J1oWWlP4grTXopcg';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/arunasank/cj0fiafqr001y2rs424a14w63', //hosted style id
    center: [80.22979, 13.01417], // starting position
    zoom: 16.16, // starting zoom
    hash: true
});
