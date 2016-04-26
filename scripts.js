function addHeader(){

    header = document.getElementById("body-cpanel-header");

    header.innerHTML += "<h1 style='padding-top: 20px;font-size: 60px; color=black'><a href='index.html'>Andrew & Sarah</a></h1>";
    header.innerHTML += "<hr class='light'> ";
    header.innerHTML += "<ul class='headerList' id='navMenu'> </ul>";
    header.innerHTML += "<hr class='light'> ";

    list = document.getElementById("navMenu");
    list.innerHTML += "<li id='navMenuSleep'> <a href='sleep.html'>Sleep</a> </li> ";
    list.innerHTML += "<li id='navMenuEat'> <a href='eat.html'>Eat</a> </li> ";
    list.innerHTML += "<li id='navMenuPlay'> <a href='play.html'>Play</a> </li> ";
    list.innerHTML += "<li id='navMenuTravel'> <a href='travel.html'>Travel</a> </li> ";

}

function insertContent(){

    loadScript("jquery-1.11.3.min.js");

    jQuery.get('eat.html', function(data) {
    alert(data);
});

}

function loadScript(url){

    document.body.appendChild(document.createElement("script")).src = url;
}

function loadMap() {

    loadScript("https://maps.googleapis.com/maps/api/js"); 
    
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
	center: new google.maps.LatLng(42.9571858,-72.0688942),
	zoom: 8,
	mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
}

google.maps.event.addDomListener(window, 'load', initialize);

function initialize(){

    addHeader();
    loadMap();

}

$(function(){

    $('#navMenu a').each(function() {
	if($(this).prop('href') == window.location.href) {
	    $(this).addClass('active');
	}
    });
});