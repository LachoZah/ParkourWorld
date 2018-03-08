function myMap() {
  var mapLocation1 = new google.maps.LatLng(42.68353, 23.34483);
  var marker1 = new google.maps.Marker({
    position:mapLocation1,
  });
  var mapLocation2 = new google.maps.LatLng(42.69734, 23.30825);
  var marker2 = new google.maps.Marker({
    position:mapLocation2,
  });
  var infowindow = new google.maps.InfoWindow({
    content:"Братска Могила"
  });
  var infowindow2 = new google.maps.InfoWindow({
    content:"Зона Б5"
  });
  var mapOptions = {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:9,
      center: mapLocation1,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapOptions);
  marker1.setMap(map);
  marker1.addListener('click', function() {
    infowindow.open(map, marker1);
  });
  marker2.setMap(map);
  marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
  });
  // function isInfoWindowOpen(infowindow){
  //   var mapInfo = infowindow.getMap();
  //   return (mapInfo !== null && typeof mapInfo !== "undefined");
  // }
  // if (isInfoWindowOpen(infoWindow)){
  //
  // } else {
  //   marker1.addListener('click', function() {
  //     infowindow.close(map, marker1);
  //   });
  // }
}
