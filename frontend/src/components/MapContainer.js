import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import '../css/Map.css';
import MapFunction from './MapFunction'
import {Grid} from '@material-ui/core'
/*function findMap() {
    var service;
    var infowindow;
    var sydney = new google.maps.LatLng(-33.867, 151.195);

    infowindow = new google.maps.InfoWindow();

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {lat: 40.731, lng: -73.997}
    });
    map = new google.maps.Map(
        document.getElementById('map'), {center: sydney, zoom: 15});

    var request = {
        query: document.getElementById(element),
        fields: ['name', 'geometry'],
    };

    service = new google.maps.places.PlacesService(map);
    var marker;
    service.findPlaceFromQuery(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var place=results[i];
                marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });

                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent(place.name);
                    infowindow.open(map, this);
                });
            }

            map.setCenter(results[0].geometry.location);
        }
    });
}
*/
export class MapContainer extends Component{
    constructor(props){
        super(props);
        this.listingPage=props.listingPage;
        this.listingLocation=props.listingLocation;
    }
    get maps(){
        return(<Map/>)
    }

    MapSearch(mapProps, map) {
        const {google} = mapProps;
        var sydney = new google.maps.LatLng(-33.9173,151.2313);
        let mapSearch = new MapFunction(this.props,sydney, google, map);
        mapSearch.searchPlace('ListingSearch');
        mapSearch.searchPlace('where');
        localStorage.setItem('location',mapSearch.listPlace());
        if (this.listingPage) {
            mapSearch.geoMap(this.listingLocation);
        }
    }

    render() {

        const mapStyle = {
            marginTop: 20,
            width: '100%',
            height: '100%',
            z_index: 0,
            inline: true
        }

         const centre = {
            lat: -33.867,
            lng: 151.2313
        }/*
        const centre = {
            lat: -32.0948,
            lng: 147.0100
        }*/
        return (


<div style={{height: "10px"}}>
    <div >
    <Map  onReady={this.MapSearch}
          style={mapStyle}
          className="maps"
          initialCenter={centre}
          google={this.props.google}
          zoom={14}/>

    </div>
</div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAtO4JyetkqAKRLeoSdXPtEbXhn9XE_IR8"
})(MapContainer)