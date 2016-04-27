function addHeader(pageName=""){

    header = document.getElementById("body-cpanel-header");

    header.innerHTML += "<h1 style='padding-top: 20px;font-size: 60px; color=black'><a href='index.html'>Andrew & Sarah</a></h1>";
    header.innerHTML += "<hr class='light'> ";
    header.innerHTML += "<ul class='headerList' id='navMenu'> </ul>";
    header.innerHTML += "<hr class='light'> ";

    list = document.getElementById("navMenu");

    if( pageName == "celebrate" ){
	list.innerHTML += "<li id='navMenuCelebrate'> <a style='color:#bc984e'  href='celebrate.html'>Celebrate</a> </li> ";
    }else{    
	list.innerHTML += "<li id='navMenuCelebrate'> <a href='celebrate.html'>Celebrate</a> </li> ";
    }
    if( pageName == "travel" ){
	list.innerHTML += "<li id='navMenuTravel'> <a style='color:#bc984e' href='travel.html'>Travel</a> </li> ";
    }else{
	list.innerHTML += "<li id='navMenuTravel'> <a href='travel.html'>Travel</a> </li> ";
    }
    if( pageName == "sleep" ){
	list.innerHTML += "<li id='navMenuSleep'> <a style='color:#bc984e' href='sleep.html'>Sleep</a> </li> ";
    }else{
	list.innerHTML += "<li id='navMenuSleep'> <a href='sleep.html'>Sleep</a> </li> ";
    }
    if( pageName == "explore" ){
	list.innerHTML += "<li id='navMenuExplore'> <a style='color:#bc984e' href='explore.html'>Explore</a> </li> ";
    }else{
	list.innerHTML += "<li id='navMenuExplore'> <a href='explore.html'>Explore</a> </li> ";
    }
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
