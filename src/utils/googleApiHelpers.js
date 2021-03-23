import ReactDOMServer from 'react-dom/server';

export function searchNearby(google, map, request) {
  var infoWindow = new google.maps.InfoWindow();
  initAutocomplete(google, map, infoWindow)

  return new Promise((resolve, reject) => {
    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status, pagination) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < 10; i++) {
          createMarker(google, map, results[i]);
        }
        resolve(results, pagination);
      } else {
        reject(results, status);
      }
    })
  });



}



export function initAutocomplete(google, map) {
  const input = document.getElementById("pac-input")
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
    google.maps.event.trigger(map, 'resize')
  });
  let markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length === 0) {
      return;
    }
    // Clear out the old markers.
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];
    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();

    for (let i = 0; i < places.length; i++) {
      var place = places[i];
      console.log(place)
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }
        // Create a marker for each place.
        createMarker(google, map, place);
  
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
    }
    map.fitBounds(bounds);
  });
}






export function createMarkers(google, map, places, collectionsList) {

  if (!places || places.length === 0) {
    return
  } else {
    //create empty LatLngBounds object   
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < places.length; i++) {
      createMarker(google, map, places[i], collectionsList)
      if (places[i].location) {
        if (!isNaN(places[i].location.lat && !isNaN(places[i].location.lng))) {
          bounds.extend(new google.maps.LatLng(places[i].location));
        }
      }  
    }
    //now fit the map to the newly inclusive bounds
    map.fitBounds(bounds);
  
    //(optional) restore the zoom level after the map is done scaling
    var listener = google.maps.event.addListener(map, "idle", function () {
        map.setZoom(14);
        google.maps.event.removeListener(listener);
    });
  }
    
}


export function createMarker(google, map, place, collectionsList) {
  var position;

  if (!place.geometry) {
    if (!place.location) {
      return
    }
    position = place.location;
    console.log("Place.location", position)
  } else {
    position = place.geometry.location;
    console.log(place)
  }

  //if (!place.geometry || !place.geometry.location) return;

  var marker = new google.maps.Marker({
    map,
    position: position
  });
  

  google.maps.event.addListener(marker, "click", (function() {
    return function() {
      marker.infoWindow = new google.maps.InfoWindow();
      var html = ReactDOMServer.renderToStaticMarkup(searchDetails(place, collectionsList));
      map.panTo(marker.getPosition());
      marker.infoWindow.setContent(html);
      marker.infoWindow.open(map, marker);
    }(marker);
  }))

  return {
    position: position
  };
}

export function searchDetails(place, collections) {
  function returnCorrectLocation(place) {
    if (place.geometry!== undefined) {
      return <div>Lat:{place.geometry.location.lat()}    Lng: {place.geometry.location.lng()}</div>
    } else if (place.location !== undefined) {
      return <div>Lat: {place.location.lat}    Lng: {place.location.lng}</div>
    }
  }
  function returnCorrectWebsite(place) {
    if (place.website) {
      return <div>Website: {place.website}<br/></div>
    } 
    return
  }

  return (
    <div>
      {console.log("place info in search Details: ", place)}
      <div>Place Name: {place.name}</div>
      {returnCorrectWebsite(place)}<br/>
      <div>Copy info below and paste information into "Add to Place Collection" tab to add place your collection</div>
      <div>Place_id: {place.place_id}    </div>
      {returnCorrectLocation(place)}
    </div>
  )
}


export function geoLocateUser(google, map) {
  var infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location"; 
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Your location");
          //infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }
}



/*
 * getDetails
 * Get details from the Google API about one specific place.
 */
export function getDetails(google, map, placeId) {
  return new Promise((resolve, reject) => {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      placeId: placeId
    }

    service.getDetails(request, (place, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        console.log("status!== OK in getDetails. Request is here: ", request)
        return reject(status);
      } else {
        resolve(place);
      }
    })
  })
}
