/**
 * 
 */
import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import '../css/Map.css'
import MapFunction from './MapFunction'

/**
 * 
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

    /**
     * 
     * @param {*} mapProps 
     * @param {*} map 
     */
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
        }

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

/**
 * 
 */
export default GoogleApiWrapper({
    apiKey: "AIzaSyAtO4JyetkqAKRLeoSdXPtEbXhn9XE_IR8"
})(MapContainer)