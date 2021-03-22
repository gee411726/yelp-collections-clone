import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'
import MapComponent from '../Map/Map';

import Sidebar from '../../components/Sidebar/Sidebar'
import styles from './styles.module.css'


const mapStyles = {
  width: '100%',
  height: '100%'
};


export class MapsViewContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.setCurrentPlaces = this.setCurrentPlaces.bind(this);
    this.onClickPlace = this.onClickPlace.bind(this);
    this.removeDetailItem = this.removeDetailItem.bind(this);
    this.sendCurrentCollectionToMapView = this.sendCurrentCollectionToMapView.bind(this);
    this.setDBPlace = this.setDBPlace.bind(this);

    this.state = {
      currentPlacesFromCollection: [],
      detailItem: {},
      currentCollectionName: '',
      DBPlace: {}
    }
  }

  setCurrentPlaces (currentPlacesFromCollection) {
    this.setState({
      currentPlacesFromCollection: currentPlacesFromCollection
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPlacesFromCollection !== prevState.currentPlacesFromCollection ) {
      this.setState( { currentPlacesFromCollection:  this.state.currentPlacesFromCollection} )
    }
  }

  onClickPlace(item) { 
    this.setState({ detailItem: item }) //sends place object to Collection / Detail
  }

  removeDetailItem() {
    this.setState({ detailItem: {} })
  }

  sendCurrentCollectionToMapView(currentCollection) {
    this.setState({ currentCollectionName: currentCollection })
  }

  setDBPlace(DBPlace) {
    this.setState({ DBPlace: DBPlace })
  }

  render() {

    return (
        <Map
          google={this.props.google}
          visible={false}
          className={styles.wrapper}
          style={mapStyles}
          >
          <Sidebar
            title={'Collections List'}
            collections={this.props.collections}
            className="Sidebar"
            setCurrentPlaces={this.setCurrentPlaces}
            onClickPlace={this.onClickPlace}
            removeDetailItem={this.removeDetailItem}
            sendCurrentCollectionToMapView={this.sendCurrentCollectionToMapView}
            setDBPlace={this.setDBPlace}
          >      
          </Sidebar>
          <MapComponent 
            currentPlacesFromCollection={this.state.currentPlacesFromCollection}
            detailItem={this.state.detailItem}
            location={this.props.location}
            currentCollectionName={this.state.currentCollectionName}
            collections={this.props.collections}
            DBPlace={this.state.DBPlace}>
            </MapComponent>
        </Map>
    )
  }
}


const GAPI_KEY = process.env.REACT_APP_GAPI_KEY;
export default GoogleApiWrapper({
  apiKey: GAPI_KEY
})(MapsViewContainer)