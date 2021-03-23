import React, { Component } from 'react';
import axios from 'axios';
import MapsViewContainer from '../../views/Maps-View-Container/maps-view-container';


export default class ViewCollections extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCollection: '',
      collections: []
    };
  }

  componentDidMount() {
    axios.get(`https://gentle-tundra-70710.herokuapp.com/api/collections`)
      .then(response => {
        this.setState({ 
          collections: response.data.collectionsList.sort().filter(el => el.collectionName !== 'users'),
        })
      })
      .catch((error) => {
        console.log(error);
      })
    }

  render() {
    return (
      <div>
        <div className="component-title">View Collections ------- Instructions: Search for a place, click on any marker(s) that pops up to get place info to use to add place to collection</div>
        <MapsViewContainer collections={this.state.collections}
                              />
      </div>
    )
  }
}