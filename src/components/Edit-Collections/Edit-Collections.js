import React, { Component } from 'react';
import axios from 'axios';

export default class EditCollection extends Component {
  constructor(props) {
    super(props);

    this.onChangeCollectionName = this.onChangeCollectionName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      collectionName: '',
      collections: []
    }
  }

  componentDidMount() {
    axios.get('http://0.0.0.0:5000/collections/')
      .then(response => {
        if (response.data.collectionsList.length > 0) {
          this.setState({
              collections: response.data.collectionsList.map(collection => collection.name),
              collectionName: response.data.collectionsList[0].name
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

    if (window.confirm("Confirm you want to delete this collection! This action is irreversible.")) {
      const request = {
        collectionName: this.state.collectionName
      }
  
      axios.post('http://0.0.0.0:5000/collections/delete/collection', request)
        .then(res => {
          console.log(res.data);
          alert("Collection successfully deleted!");
          window.location = '/edit';
        })
        .catch(err => {
          alert(err)
        })
    }
  }

  render() {
    return (
    <div>
      <div className="component-title">Edit Collections Collection</div>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Collection Name </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.collectionName}
              onChange={this.onChangeCollectionName}>
              {
                this.state.collections.map(function(collection) {
                  return <option 
                    key={collection}
                    value={collection}>{collection}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group">
          <input type="submit" value="Delete Collection" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}