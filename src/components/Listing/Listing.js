import React, { Component } from 'react'
import classnames from 'classnames'

import styles from './styles.module.css'
import Collection from './Collection'


export class Listing extends Component {
  constructor(props, context) {
    super(props, context);

    this.collectionsList = this.collectionsList.bind(this);
  }

  
  collectionsList() {
    
    String.prototype.toProperCase = function () {
      return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    return this.props.collections.filter(el => el.collectionName !== 'users').map(collection => {
      return (
      <Collection 
        collectionName={collection.name.toProperCase()}
        key={collection.collectionName}
        onClickPlace={this.props.onClickPlace}
        removeDetailItem={this.props.removeDetailItem}
        setCurrentPlaces={this.props.setCurrentPlaces}
        sendCurrentCollectionToMapView={this.props.sendCurrentCollectionToMapView}
        setDBPlace={this.props.setDBPlace}/>
      )
    })
  }

  render() {
    return (
      <div className={classnames(styles.container)}>
        {this.collectionsList()}
      </div>
    )
  }
}

export default Listing