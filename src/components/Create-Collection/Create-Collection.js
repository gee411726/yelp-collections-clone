import React, { Component } from 'react';
import axios from 'axios';

var port = process.env.PORT || 5000;
var host = process.env.HOST || '0.0.0.0';

export default class CreateCollection extends Component {
  constructor(props) {
    super(props);

    this.onChangeCollectionName = this.onChangeCollectionName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      collectionName: '',
      collections: [],
    }
  }

  componentDidMount() {
    axios.get(`https://gentle-tundra-70710.herokuapp.com/api/collections/`)
      .then(response => {
        if (response.data.usersList.length > 0) {
          this.setState({
              users: response.data.usersList.map(user => user.username),
              username: response.data.usersList[0].username
        })
      }
    })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeCollectionName(e) {
    this.setState({
      collectionName: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const collection = {
      collectionName: this.state.collectionName,
    }

    axios.post(`https://gentle-tundra-70710.herokuapp.com/api/collections/add`, collection)
      .then(res => {
        console.log(res.data);
        alert("Collection successfully created!");
        window.location = '/';
      })
      .catch(err => {
        alert(err)
      })
  }

  render() {
    return (
    <div>
      <div className="component-title">Create New Collection</div>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
            <label>Collection Name: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.collectionName}
                onChange={this.onChangeCollectionName}
                />
          </div>
        <div className="form-group">
          <input type="submit" value="Create Collection" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}