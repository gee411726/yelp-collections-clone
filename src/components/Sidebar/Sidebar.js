import React from 'react'
import classnames from 'classnames';
import Listing from '../Listing/Listing';
import styles from './styles.module.css';
// dropdown sidebar stuff
import styled from "styled-components"; 
import { Link } from "react-router-dom"; 
import * as FaIcons from "react-icons/fa"; 


const Nav = styled.div` 
  background: #15171c; 
  height: 80px; 
  display: flex; 
  justify-content: flex-start; 
  align-items: center; 
`; 

  
const NavIcon = styled(Link)` 
  margin-left: 2rem; 
  font-size: 2rem; 
  height: 80px; 
  display: flex; 
  justify-content: flex-start; 
  align-items: center; 
`; 

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.showSidebar = this.showSidebar.bind(this);

    this.state = {
        sidebar: false
      };
  }

  showSidebar = () => this.setState({sidebar: !this.state.sidebar})

  render() {
    return (
      <div className={classnames(styles.sidebar)}>
        <Nav> 
          <NavIcon to="#"> 
            <FaIcons.FaBars onClick={this.showSidebar} /> 
          </NavIcon> 
              <h2>{this.props.title}</h2>
        </Nav>
            <div className={classnames(styles.listingRatings)}>
              <Listing className="listing" places={this.props.places}
                onClickPlace={this.props.onClickPlace}
                removeDetailItem={this.props.removeDetailItem}
                collections={this.props.collections}
                children={this.props.children}
                setCurrentPlaces={this.props.setCurrentPlaces}
                sendCurrentCollectionToMapView={this.props.sendCurrentCollectionToMapView}
                setDBPlace={this.props.setDBPlace}/>
            </div>
      </div>
    )
  }
}

export default Sidebar