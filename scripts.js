var cnt = 0;
var locations = [
    ["Biblio Cafe, 48.463424, -123.309931",
        48.463424, -123.309931
    ],
    ["Clearihue Building, 48.464269, -123.310387",
        48.464269, -123.310387
    ],
    ["Felicitas Pub, 48.464629, -123.307914",
        48.464629, -123.307914
    ]
]
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(48.463649, -123.311951),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});
var marker, i;
for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
    });
}
var infowindow = new google.maps.InfoWindow();
var marker, i;
for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            cnt++;
            infowindow.setContent(locations[i][0] +"<p>"+ cnt+"</p>");
            infowindow.open(map, marker);
        }
    })(marker, i));
}
google.maps.event.addListener(map, "bounds_changed", function() {
    var bounds = map.getBounds();
    console.log(bounds);
});
