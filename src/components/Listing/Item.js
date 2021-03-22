import React from 'react';
import classnames from 'classnames';

import Rating from '../Rating/Rating';
import styles from './styles.module.css';


export class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
      placeName: this.props.place.placeName,
      address: this.props.place.address,
      lat: this.props.place.lat,
      lng: this.props.place.lng,
      type: this.props.place.type,
      comments: this.props.place.comments
    }
  }

  onClickPlace() {
    this.props.onClickPlace(this.props.place);
    this.props.setDBPlace(this.props.place);
  }
  
  render() {
    const {place} = this.props; // apparently this is equivalent to this.props.place
    return (
      <div
        onClick={this.onClickPlace.bind(this)}
        className={classnames(styles.item, {
        [styles.itemHovered]: this.state.hovered
      })}>
        
        <h1 className={classnames(styles)}>{place.name}</h1>
        <Rating className={styles.rating}
                percentage={(place.rating/5)} />
      </div>
    )
  }
}


export default Item
