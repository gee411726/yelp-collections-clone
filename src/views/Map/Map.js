import React from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react';
import styles from './styles.module.css';
import './styles.module.css';
import {geoLocateUser, initAutocomplete, createMarkers} from '../../utils/googleApiHelpers';
import Detail from '../Detail/Detail';



export class MapComponent extends React.Component {

  onReady(mapProps, map) {
    initAutocomplete(this.props.google, map);
    geoLocateUser(this.props.google, map);
    createMarkers(this.props.google, map, this.props.currentPlacesFromCollection, this.props.collections)
  }

  render() {

    return (
      <div>
        <Map 
          onReady={this.onReady.bind(this)}
          google={this.props.google}
          className={styles.map}
          zoomControl={true}
          zoomControlOptions={{position: this.props.google.maps.ControlPosition.LEFT_CENTER}}
          onRecenter={this.props.onMove}
          onDragend={this.props.onMove}
          onClick={this.props.onClick}
          initialCenter = {{ lat: 40.7812, lng: -73.9665 }}
          key={new Date().getTime()}
          mapTypeControlOptions= {{ mapTypeIds: [] }}
        >
          <input
            id="pac-input"
            className="controls"
            type="text"
            placeholder="Search for places to add here"
          />
          <Detail 
          placeId={this.props.detailItem.place_id} 
          currentCollectionName={this.props.currentCollectionName}
          DBPlace={this.props.DBPlace}/>      
        </Map>
      </div>

    )
  }
}

const GAPI_KEY = process.env.REACT_APP_GAPI_KEY;
export default GoogleApiWrapper({
  apiKey: GAPI_KEY
})(MapComponent)


