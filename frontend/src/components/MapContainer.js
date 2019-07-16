import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import '../css/map.css';

export class MapContainer extends Component {
    render() {
        /*const mapStyle = {
            marginTop: 30
        }

        const centre = {
            lat: -33.9173,
            lng: 151.2313
        }
*/
        return (
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>"gggooo"</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCCcrMNsAZnLxERQxNyY-W3aUMxb6U0jeU"
})(MapContainer)