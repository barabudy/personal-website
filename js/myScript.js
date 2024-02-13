$(document).ready(function () {

    //$("#myName").text("Talia");

    today = new Date();
    var year = today.getFullYear();
    document.getElementById("currentYear").innerHTML = year;

    //Run code in index page only
    //if (document.getElementsByTagName("h1")[0].innerHTML === "Volunteering with us") {
    //    var amountOfVolunteers = 10 + Math.round(Math.random() * 90); //Random number between 10 to 100

    //}

    //Run code in about page only
    /*
    if (document.getElementsByTagName("h1")[0].innerHTML === "About The Shelter") {
        console.log("Map page");

        var myLocation = new google.maps.LatLng(49.029, -122.2854);
        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService();

        function initialize() {
            directionsDisplay = new google.maps.DirectionsRenderer();
            var mapOptions = {
                center: myLocation,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("myGoogleMap"), mapOptions);

            var myHomeIcon = 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678085-house-48.png';

            var shelterMarker = new google.maps.Marker({
                position: myLocation,
                animation: google.maps.Animation.DROP,
                icon: myHomeIcon
            });

            directionsDisplay.setMap(map);
            shelterMarker.setMap(map);

            var homeInfowindow = new google.maps.InfoWindow({
                content: "<div id='markerContent'>This is where the shelter is located</div>"
            });

            google.maps.event.addListener(shelterMarker, 'click', function () {
                homeInfowindow.open(map, shelterMarker);
            });
        }

        google.maps.event.addDomListener(window, 'load', initialize);
    }
    */
});