
import React from 'react'
import { getDetails } from '../../utils/googleApiHelpers'
import styles from './styles.module.css'
import axios from 'axios';


var port = process.env.PORT || 5000;
var host = process.env.HOST || '0.0.0.0';

export class Detail extends React.Component {

  constructor(props, context) {
    super(props, context)

    this.showDetails = this.showDetails.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
    this.deletePlaceFromCollection = this.deletePlaceFromCollection.bind(this);

    this.state = {
      place: {},
      location: {},
      showDetails: false
    }
  }

  componentDidMount() {
    if (this.props.map) {
      this.getDetails(this.props.map)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // getDetails sets state to place that is returned from function
    // showDetails of that place after we get it
    if (this.props.map &&
        (prevProps.map !== this.props.map ||
         prevProps.placeId !== this.props.placeId)) {
      this.getDetails(this.props.map);
      this.setState({showDetails: true})
    }
    // showDetails if prev place differs from current 
    if (this.state.place && prevState.place !== this.state.place ) {
      this.setState({showDetails: true})
    // hideDetails if we changed to no place in state
    } else if (!this.state.place && prevState.place !== this.state.place) {
      this.setState({
        showDetails: false,
        place: {}
      })
    }
  }
  
  getDetails(map) {
    const { google } = this.props; 
    const placeId = this.props.placeId;

    if (placeId) {
      getDetails(google, map, placeId)
      .then((place) => {
        const {location} = place.geometry; 
        const loc = {
          lat: location.lat(),
          lng: location.lng()
        }
        this.setState({
          place: place,
          location: loc,
        })
      })
      .catch(err => console.log("error: ", err))
    }
  }


  renderPhotos(place) {
    if (!place.photos || place.photos.length === 0) return;

    const cfg = {maxWidth: 100, maxHeight: 100}
    return (<div className={styles.photoStrip}>
      {place.photos.map(p => {
        const url = `${p.getUrl(cfg)}.png`
        return (<img key={url} src={url} alt={"unable to find img"}/>)
      })}
    </div>)
  }

  showDetails() {
    const {place} = this.state; 

    if (this.state.showDetails === true && 'place_id' in this.state.place) {
      return (
        <div>
          <button className={styles.closeDetail} onClick={this.closeDetails}>
            <h1>X</h1>
          </button>
          <div className={styles.body}>
            <h2>{place.name}</h2> 
            <h2>Address: {place.formatted_address}</h2>
            <h2>Current Status: {place.business_status}</h2>
            <h2>Phone Number: {place.formatted_phone_number}</h2>
            <h2><u><a href={place.website}>Website</a></u></h2>
            {<h2>Comments: {this.props.DBPlace.comments}</h2>}
            {this.renderPhotos(this.state.place)}
          </div>

          <button onClick={this.deletePlaceFromCollection}>Delete from collection</button>
        </div>
      )
    } else if (this.state.showDetails === true && this.state.place === undefined) {
        return (
          <div>
            <button className={styles.closeDetail} onClick={this.closeDetails}>
              <h1>X</h1>
            </button>
            <h2>There are currently no places in this collection</h2>
          </div>
        )
    }
  }

  closeDetails = () => {
    this.setState({
      showDetails: false,
      place: undefined
    })
  }

  deletePlaceFromCollection = () => {
    if (window.confirm("confirm you want to delete this place from the collection")) {
      const request = {
        collectionName: this.props.currentCollectionName,
        place_id: this.props.placeId
      }
      axios.post(`http://${host}:${port}/api/collections/delete/place`, request)
      .then(res => console.log(res.data))
      .catch(err => console.log(err)); 
  
      window.location = '/'
    }
  }

  render() {
    return (
      <div className={styles.details}>
        {this.showDetails()}
      </div>
    )
  }
}

export default Detail