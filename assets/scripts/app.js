'use strict';

import * as utils from "./utils.js";

const TOKEN ='pk.eyJ1Ijoibmljb2xhc2JlbHRyYW4yOCIsImEiOiJjbHExOWhwdnMwNzllMm1vNTR6YzBvZGZoIn0.78EqNgzYEAYWaQ6fcjxlkA'


function geoLocation(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    createMap(longitude,latitude);
}

function createMap(longitude,latitude){
    mapboxgl.accessToken = TOKEN;
    const map = new mapboxgl.Map({
    container: 'map',
    center: [longitude, latitude],
    zoom: 14.5
    });
    const marker = new mapboxgl.Marker({
        color: "#FE4F5A",
        draggable: true
        }).setLngLat([longitude, latitude])
        .addTo(map);
}

function errorHandler(){
    console.log('Unable to retrieve your location');
}

function setUpMap(){
    const options={enableHighAccuracy: true};
    if('geolocation' in navigator){
        navigator.geolocation.watchPosition(geoLocation,errorHandler,options);
    }else{
        console.log('geolocation API is not supported by your browser');
    }
    
}

utils.onEvent('load',window,setUpMap)

