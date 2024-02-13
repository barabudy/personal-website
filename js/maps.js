
var minLatitude = 48;
var maxLatitude = 50;
var minLongitude = -124;
var maxLongitude = -122;
var SIZE = 20;
var nav = navigator.geolocation; 
var map = document.getElementById('map');
 function displayCityMap()
 {
     var lat = Number(this.children[0].textContent);
      var lon =Number(this.children[1].textContent);
      var mapOptions ={
                    center: new google.maps.LatLng(lat,lon),
                    zoom: 12,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
               new google.maps.Map(map,mapOptions);
 }
 function failure(){
      var x = document.getElementById('message');
      x.setAttribute('hidden', true);
      x.innerHTML = "Geolocation is not supported by the browser"; 
 }
 function generateRandomCoordinates()
{
   var styles = [, "active","success", "danger", "warning"];
   var table = document.getElementById("coordinates");
   
   var coordinates= new Array();
   
   for(i=0;i<SIZE;i++){
       var lat= Math.random() * (maxLatitude - minLatitude)+ minLatitude;
       var lon = Math.random() * (maxLongitude - minLongitude) + minLongitude;
          
      coordinates.push([lat, lon]);
      
    }
    //Add the data rows
    
    var tbody = document.createElement("tbody");
    for (var i = 1; i < coordinates.length; i++) {
        var tr = document.createElement("tr");
        tr.setAttribute("class", styles[i % styles.length]);
        tr.onmouseover = displayCityMap;
        for (var j = 0; j < 2; j++) {
            var td = document.createElement("td");
            td.setAttribute("class", "text-center");
            var cell = document.createTextNode(coordinates[i][j]);
            td.appendChild(cell);
            tr.appendChild(td);
      }
      tbody.appendChild(tr);
      table.appendChild(tbody);
    }

     
   
        
   }
 var latitude = document.getElementById("latitude");
var longitude = document.getElementById("longitude");
var message = document.getElementById("message");
var map = document.getElementById('map');
//document.getElementById("geo").onclick(getLocation);
var request = new XMLHttpRequest();
var url = "https://www.ipinfo.io/json";
request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var response = JSON.parse(this.responseText);
        console.log(response);
        document.getElementById("latitude").innerHTML = response.loc.split(",")[0];
        document.getElementById("longitude").innerHTML = response.loc.split(",")[1];
        document.getElementById("ip").innerHTML = response.ip;
        document.getElementById("city").innerHTML = response.city;
        document.getElementById("region").innerHTML = response.region;
        document.getElementById("country").innerHTML = response.country;
    }
};
request.open("Get", url, true);
request.send();

