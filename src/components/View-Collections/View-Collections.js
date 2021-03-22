import React, { Component } from 'react';
import axios from 'axios';
import MapsViewContainer from '../../views/Maps-View-Container/maps-view-container';


export default class ViewCollections extends Component {
  constructor(props) {
    super(props);

    this.deletePlace = this.deletePlaceFromCollection.bind(this);

    this.state = {
      currentCollection: '',
      collections: []
    };
  }

  componentDidMount() {
    axios.get('http://0.0.0.0:5000/collections/')
      .then(response => {
        this.setState({ 
          collections: response.data.collectionsList.filter(el => el.collectionName !== 'users'),
        })
      })
      .catch((error) => {
        console.log(error);
      })
    }

  deletePlaceFromCollection(e) {
    /*
    axios.delete('http://0.0.0.0:5000/collections/'+placeName)
      .then(response => { console.log(response.data)});

    this.setState({
      collections: this.state.collections.filter(el => el._placeName !== placeName)
    })
    */
  }


  render() {
    return (
      <div>
        <div className="component-title">View Collections</div>
        <MapsViewContainer collections={this.state.collections}
                              />
      </div>
    )
  }
}