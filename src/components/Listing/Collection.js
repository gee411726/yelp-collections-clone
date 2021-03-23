import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import classnames from 'classnames';

import Item from './Item';
import styled from "styled-components"; 
import * as RiIcons from "react-icons/ri"; 


var port = process.env.PORT || 5000;
var host = process.env.HOST || '0.0.0.0';

const SidebarLink = styled(Link)` 
  display: flex; 
  color: #e1e9fc; 
  justify-content: space-between; 
  align-items: center; 
  padding: 20px; 
  list-style: none; 
  height: 60px; 
  text-decoration: none; 
  font-size: 18px; 
  
  &:hover { 
    background: #252831; 
    border-left: 4px solid green; 
    cursor: pointer; 
  } 
`; 
  
const DropdownLink = styled(Link)` 
  background: #252831; 
  height: 60px; 
  padding-left: 3rem; 
  display: flex; 
  align-items: center; 
  top: 50%;
  text-decoration: none; 
  color: #f5f5f5; 
  font-size: 18px; 
  
  &:hover { 
    background: green; 
    cursor: pointer; 
  } 
`; 

const iconClosed = <RiIcons.RiArrowDownSFill />
const iconOpened = <RiIcons.RiArrowUpSFill />


export default class Collection extends Component {

    constructor(props) {
      super(props);

      this.showPlaces = this.showPlaces.bind(this);
      this.onClick = this.onClick.bind(this);

      this.state = {
          places: [],
          showPlaces: false,
      };
    }

    componentDidMount() {
      const collectionQuery = {
          collectionName: this.props.collectionName
      }

      axios.post(`https://${host}:${port}/api/collections/collectionName/`, collectionQuery)
        .then(response => {
          this.setState({
              places: response.data
          })
        })
        .catch((error) => {
          console.log(error);
        })
    }

    showPlaces () { 
      this.setState({showPlaces: !this.state.showPlaces});
      if (this.state.places && this.state.showPlaces === false) {
        this.props.setCurrentPlaces(this.state.places.filter( place => 'name' in place));
        console.log(this.props.collectionName)
        this.props.sendCurrentCollectionToMapView(this.props.collectionName) 
      } else {
        this.props.setCurrentPlaces([])
        this.props.removeDetailItem()
      }
    }

    onClick(place, map, google) {
      if (this.props.onListItemClick) {
        place.place = place;
        this.props.onListItemClick(place, map, google)
      }
    }

    render() {
        return ( 
          <div>
            <SidebarLink onClick={this.showPlaces}
              className = {classnames(styles.item,{[styles.itemHovered]: this.state.hovered })}>
              <h1 className={classnames(styles.title, "dd-header-title")}> { this.props.collectionName } <br/> </h1>
              <div>
                {this.state.showPlaces
                ? iconOpened
                : iconClosed}
              </div>
            </SidebarLink>
            { this.state.showPlaces && this.state.places.filter( place => 'name' in place).map( place => {
                return ( 
                  <DropdownLink>
                    <Item place={place}
                      onClickPlace={this.props.onClickPlace}
                      onHighlight={this.props.onHighlight}
                      offHighlight={this.props.offHighlight}
                      key={place.id}
                      setDBPlace={this.props.setDBPlace}
                      />
                  </DropdownLink>
                )
              })
            }
          </div>
        )
    }
}