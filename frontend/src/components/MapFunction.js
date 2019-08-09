import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import '../css/Map.css';
import config from '../utils/config'
import MapContainer from './MapContainer'
import {Grid} from '@material-ui/core'
import axios from "axios";
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

export function MapCons(props){

    function MapSearch(mapProps, map) {
        const {google} = mapProps;
        var sydney = new google.maps.LatLng(-33.867, 151.195);
        let mapSearch = new MapFunction(sydney, google, map);
        mapSearch.searchPlace();
        if (props.listing) {
            mapSearch.geoMap();
        } else {
            if (props.addList) {
                mapSearch.listPlace();
            }
        }
    }



        const mapStyle = {
            marginTop: 20,
            width: '100%',
            height: '100%',
            z_index: 0,
            inline: true
        };

        const centre = {
            lat: -33.9173,
            lng: 151.2313
        };
        return (
            <div>
                <Map
                    onReady={MapSearch}
                    style={mapStyle}
                    className="maps"
                    initialCenter={centre}
                    google={props.google}
                    zoom={17}/>
            </div>
        )

}
export default class MapFunction extends Component{

    constructor(props,place,google,map){
        super(props);
        this.google=google;
        this.map=map;
        this.place=place;
        this.state={
            listings:[],
            listMarkers:[],
        };
        this.setMark=this.setMark.bind(this);
        this.listPlace=this.listPlace.bind(this);
        this.searchPlace=this.searchPlace.bind(this);
        this.searchP=this.searchP.bind(this);
        this.find_closest_marker=this.find_closest_marker.bind(this);
        this.setPlace=this.setPlace(this);
    }

    getUserListings() {
        axios.get('http://localhost:5000/api/listings')
            .then((res) => {
                console.log(res)
                this.setState({
                    listings: res.data.data
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    setPlace(listings){
            let locations=new this.google.maps.LatLng(-33.867, 151.195);
            let google=this.google;
                var request={
                    query: listings.street+listings.suburb+listings.state+listings.postcode+listings.country,
                    fields: ['name', 'geometry']
                };
                let service = new this.google.maps.places.PlacesService(this.map);
                service.findPlaceFromQuery(request, function (results, status) {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        locations=results[0].geometry.location;
                    }})
            this.place=locations;

            };


    setMark(){
        this.getUserListings();
        let locations=[];
        let google=this.google;
        let map=this.map;
        this.state.listings.forEach(function(listing){
            let listings=listing.location;
            var request={
                query: listings.street+listings.suburb+listings.state+listings.postcode+listings.country,
                fields: ['name', 'geometry']
            };
            let service = new this.google.maps.places.PlacesService(this.map);
            service.findPlaceFromQuery(request, function (results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    locations.push([results[0].geometry.location,listing]);
                }})
        });

        let Markers=[];
        locations.forEach(function (property) {
            Markers.push(new google.maps.Marker({
                map: map,
                title: JSON.stringify(property[1]),
                position: property[0],
            }))
        });
        this.setState({listMarkers:Markers});
    }




    get marker(){
        return this.state.listMarkers;
    }
    mapsu(){
        this.map=this.google.maps.Map(document.getElementById('listMap'));
        return(<div id={'listMap'}></div>)
    }
    listPlace(){

        let google=this.google;
        let map=this.map
        var service;
        // Create the search box and link it to the UI element.
        var input = document.getElementById('address');
        var searchBox = new google.maps.places.SearchBox(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
            searchBox.setBounds(map.getBounds());
        });
        var locate;
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        var mapData;
        searchBox.addListener('places_changed', function() {
            var request = {
                query:  input.value,
                fields: ['name', 'geometry','formatted_address', 'icon','photos','place_id'],
            };

            service = new google.maps.places.PlacesService(this.map);
            service.findPlaceFromQuery(request, function (results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    let property=results[0];
                    locate = property.geometry.location;
                    var addrRequest={
                        place_id: property.place_id,
                        fields: ['address_components' ]
                    }
                    service.getDetails(addrRequest, function(addressBreakdown,addrStatus){

                        var streetNumber;
                        var streetName;
                        var suburb;
                        var state;
                        var postcode;
                        var country;
                        for(var i = 0; i < addressBreakdown.address_components.length; i++){
                            let addr=addressBreakdown.address_components[i];
                            for(var k = 0; k < addr.types.length; k++){
                                if (addr.types[k] === "street_number")
                                    streetNumber = addr.short_name;
                                else if (addr.types[k] === "route")
                                    streetName = addr.short_name;
                                else if (addr.types[k] === "administrative_area_level_2")
                                    suburb = addr.short_name;
                                else if (addr.types[k] === "administrative_area_level_1")
                                    state = addr.short_name;
                                else if (addr.types[k] === "postal_code")
                                    postcode = addr.long_name;
                                else if (addr.types[k] === "country")
                                    country = addr.long_name;
                            }
                        }
                        mapData={
                            /*locate: locate,*/
                            street: streetName,
                            suburb: suburb,
                            state: state,
                            postcode: postcode,
                            country: country,
                        }
                    });

                    this.place=locate;
                }

            });


        });

        return JSON.stringify(mapData);
    }

    find_closest_marker() {
        let google=this.google;
        this.setMark();
        var distances = [];
        var closeFar=[];
        this.state.listMarkers.forEach(function(property){
            var d = google.maps.geometry.spherical.computeDistanceBetween(property.position, this.place);
            distances.push([d,property.title]);
        });
        distances.sort();
        distances.forEach(function (property) {
            closeFar.push(property[1])
        });
        return closeFar;
    }

    searchPlace(searchBar) {
        // Create the search box and link it to the UI element.
        var input = document.getElementById(searchBar);
        var searchBox = new this.google.maps.places.SearchBox(input);

        let map=this.map;
        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
            searchBox.setBounds(map.getBounds());
        });

        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        let findClose=this.find_closest_marker;
        var dist;
        searchBox.addListener('places_changed', function() {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }

            this.place=places[0].geometry.location;
            dist=findClose();
            });
        return dist;
    };



    searchP(query){
        var infowindow;
        infowindow = new this.google.maps.InfoWindow();

        var service;

        var locate;
        service = new this.google.maps.places.PlacesService(this.map);
        var markers=[];
        var bounds = new this.google.maps.LatLngBounds();
        service.nearbySearch(query, function(results, status) {
            if (status === this.google.maps.places.PlacesServiceStatus.OK) {
                locate=results[0].geometry.location;
                results.forEach(function(place) {

                    if (!place.geometry) {
                        console.log("Returned place contains no geometry");
                        return;
                    }
                    var icon = {
                        url: place.icon,
                        size: new this.google.maps.Size(100, 100),
                        origin: new this.google.maps.Point(0, 0),
                        anchor: new this.google.maps.Point(17, 34),
                        scaledSize: new this.google.maps.Size(25, 25)
                    };

                    // Create a marker for each place.
                    markers.push(new this.google.maps.Marker({
                        map: this.map,
                        title: place.name,
                        position: place.geometry.location
                    }));
                    this.google.maps.event.addListener(markers, 'click', function() {
                        infowindow.setContent(place.name);
                        infowindow.open(this.map, this);
                    });
                    if (place.geometry.viewport) {
                        // Only geocodes have viewport.
                        bounds.union(place.geometry.viewport);
                    } else {
                        bounds.extend(place.geometry.location);
                    }
                });



                this.map.setCenter(locate);
            }
        });
    }

    geoMap(location) {
        this.setPlace(location)
        var sydney = new this.google.maps.LatLng(-33.867, 151.195);
        var pyrmont = new this.google.maps.LatLng(-32.8665433,147.1956316);
        var query;
        query = {
            location: this.place,
            radius: '50000',
            keyword: ['train'],
        };

        this.searchP(query);
        query = {
            location: this.place,
            radius: '50000',
            keyword: ['university'],
        };
        this.searchP(query);

    }

}

