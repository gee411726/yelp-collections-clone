import React, { Component } from 'react';
import axios from 'axios';

export default class AddtoCollection extends Component {
  constructor(props) {
    super(props);

    this.onChangeCollection = this.onChangeCollection.bind(this);
    this.onChangePlaceId = this.onChangePlaceId.bind(this);
    this.onChangePlaceName = this.onChangePlaceName.bind(this);
    this.onChangeComments = this.onChangeComments.bind(this);
    this.onChangeLat = this.onChangeLat.bind(this);
    this.onChangeLng = this.onChangeLng.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      collection: '',
      collections: [],
      placeId: '',
      placeName: '',
      lat: 0.000,
      lng: 0.000,
      comments: ''
    }
  }

  componentDidMount() {
    axios.get(`https://gentle-tundra-70710.herokuapp.com/api/collections/`)
      .then(response => {
        if (response.data.collectionsList.length > 0) {
          this.setState({
              collections: response.data.collectionsList.filter(el => el.name !== 'users').sort().map(collection => collection.name)
        });
          this.setState({
            collection: this.state.collections[0]
          });
      }
    })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeCollection(e) {
    this.setState({
      collection: e.target.value
    })
  }

  onChangePlaceId(e) {
    this.setState({
      placeId: e.target.value
    })
  }

  onChangePlaceName(e) {
    this.setState({
      placeName: e.target.value
    })
  }

  onChangeComments(e) {
    this.setState({
      comments: e.target.value
    })
  }

  onChangeLat(e) {
    this.setState({
      lat: e.target.value
    })
  }

  onChangeLng(e) {
    this.setState({
      lng: e.target.value
    })
  }

  onChangeRating(e) {
    this.setState({
      rating: e.target.value
    })
  }



  onSubmit(e) {
    e.preventDefault();

    const place = {
      collectionName: this.state.collection,
      placeId: this.state.placeId,
      placeName: this.state.placeName,
      lat: this.state.lat,
      lng: this.state.lng,
      rating: this.state.rating,
      comments: this.state.comments
    }

    axios.post(`https://gentle-tundra-70710.herokuapp.com/api/collections/place/add`, place)
      .then(res => {
        console.log(res.data);
        alert("Place successfully added to collection!");
        window.location = '/';
      })
      .catch(err => {
        alert(err)
      })

  }

  render() {
    String.prototype.toProperCase = function () {
      return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    return (
    <div>
      <div className="component-title">Add Place to Collection</div>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label><b>Collection to Add to: </b></label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.collection}
              onChange={this.onChangeCollection}>
              {
                this.state.collections.map(function(collection) {
                  return <option 
                    key={collection}
                    value={collection}>{collection.toProperCase()}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
            <label>Place Id</label>
            <input type="text"
                required
                className="form-control"
                value={this.state.placeId}
                onChange={this.onChangePlaceId}
                />
          </div>
        <div className="form-group"> 
          <label>Place Name</label>
          <input type="text"
              required
              className="form-control"
              value={this.state.placeName}
              onChange={this.onChangePlaceName}
              />
        </div>
        <div className="form-group"> 
            <label>Lattitude</label>
          <input type="text"
              required
              className="form-control"
              onChange={this.onChangeLat}
              />
        </div>
        <div className="form-group"> 
            <label>Longitude</label>
          <input type="text"
              required
              className="form-control"
              onChange={this.onChangeLng}
              />
        </div>
        <div className="form-group"> 
          <label>Rating (Out of 5)</label>
          <input type="float"
              className="form-control"
              value={this.state.rating}
              onChange={this.onChangeRating}
              />
        </div>
        <div className="form-group"> 
          <label>Comments</label>
          <input type="text"
              className="form-control"
              value={this.state.comments}
              onChange={this.onChangeComments}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Add to Collection" className="btn btn-primary" />
        </div>
      </form>

    </div>
    )
  }
}