(this["webpackJsonpyelp-collections-clone"]=this["webpackJsonpyelp-collections-clone"]||[]).push([[0],{18:function(e,t,n){e.exports={container:"styles_container__pfXLW",item:"styles_item__3Ewvd",rating:"styles_rating__2kYbX",title:"styles_title__3IQPt"}},24:function(e,t,n){e.exports={flex:"styles_flex__1xwGd",header:"styles_header__2BJ0K",h2:"styles_h2__2RY3y",details:"styles_details__1_iSS",photoStrip:"styles_photoStrip__3Y2RF",img:"styles_img__3nacW",closeDetail:"styles_closeDetail__2ZOa_"}},30:function(e,t,n){e.exports={sprite:"styles_sprite__1V54V",top:"styles_top__XJt2X",bottom:"styles_bottom__3fU2l"}},33:function(e,t,n){e.exports={wrapper:"styles_wrapper__2kJ7s",description:"styles_description__1lGBn","infowindow-content":"styles_infowindow-content__2eOoO",title:"styles_title__1Uj2j",map:"styles_map__18zEb","pac-card":"styles_pac-card__3qqUO","pac-container":"styles_pac-container__3iFR9","pac-controls":"styles_pac-controls__1H9Fw","pac-input":"styles_pac-input__3l0cQ",target:"styles_target__27iso","check-places-state":"styles_check-places-state__2Pu21"}},38:function(e,t,n){e.exports={sidebar:"styles_sidebar__3IiGt",heading:"styles_heading__1fDwD",h1:"styles_h1__aoBmm"}},54:function(e,t,n){e.exports={wrapper:"styles_wrapper__3QwWf",content:"styles_content__2YXfp","component-wrapper":"styles_component-wrapper__2XfWN"}},61:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n(2),c=n.n(a),s=n(25),i=n.n(s),l=n(4),r=n(5),u=n(7),h=n(6),p=(n(60),n(61),n(11)),d=n(8),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(o.jsx)(p.b,{to:"/",className:"navbar-brand",children:"Yelp Collections Clone"}),Object(o.jsx)("div",{className:"collpase navbar-collapse",children:Object(o.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(o.jsx)("li",{className:"navbar-item",children:Object(o.jsx)(p.b,{to:"/",className:"nav-link",children:"View Collections"})}),Object(o.jsx)("li",{className:"navbar-item",children:Object(o.jsx)(p.b,{to:"/create",className:"nav-link",children:"Create Collection"})}),Object(o.jsx)("li",{className:"navbar-item",children:Object(o.jsx)(p.b,{to:"/add",className:"nav-link",children:"Add Place to Collection"})}),Object(o.jsx)("li",{className:"navbar-item",children:Object(o.jsx)(p.b,{to:"/edit",className:"nav-link",children:"Delete Collections"})}),Object(o.jsx)("li",{className:"navbar-item",children:Object(o.jsx)(p.b,{to:"/user",className:"nav-link",children:"Create User"})})]})})]})}}]),n}(a.Component),j=n(3),b=n(10),f=n.n(b),O=n(21),v=n.n(O),g=n(33),C=n.n(g),x=n(34),y=n.n(x);function N(e,t){var n=document.getElementById("pac-input"),o=new e.maps.places.SearchBox(n);t.controls[e.maps.ControlPosition.TOP_CENTER].push(n),t.addListener("bounds_changed",(function(){o.setBounds(t.getBounds()),e.maps.event.trigger(t,"resize")}));var a=[];o.addListener("places_changed",(function(){var n=o.getPlaces();if(0!==n.length){a.forEach((function(e){e.setMap(null)})),a=[];for(var c=new e.maps.LatLngBounds,s=0;s<n.length;s++){var i=n[s];if(console.log(i),!i.geometry||!i.geometry.location)return void console.log("Returned place contains no geometry");P(e,t,i),i.geometry.viewport?c.union(i.geometry.viewport):c.extend(i.geometry.location)}t.fitBounds(c)}}))}function P(e,t,n,a){var c;if(n.geometry)c=n.geometry.location,console.log(n);else{if(!n.location)return;c=n.location,console.log("Place.location",c)}var s=new e.maps.Marker({map:t,position:c});return e.maps.event.addListener(s,"click",(function(){return function(){s.infoWindow=new e.maps.InfoWindow;var a=y.a.renderToStaticMarkup(function(e,t){function n(e){return void 0!==e.geometry?Object(o.jsxs)("div",{children:["Location (Lat, Lng): (",e.geometry.location.lat(),", ",e.geometry.location.lng(),")"]}):void 0!==e.location?Object(o.jsxs)("div",{children:["Location (Lat, Lng): (",e.location.lat,", ",e.location.lng,")"]}):void 0}function a(e){if(e.website)return Object(o.jsxs)("div",{children:["Website: ",e.website,Object(o.jsx)("br",{})]})}return Object(o.jsxs)("div",{children:[console.log("place info in search Details: ",e),Object(o.jsxs)("div",{children:["Place Name: ",e.name]}),a(e),Object(o.jsx)("br",{}),Object(o.jsx)("div",{children:'Copy info below and paste in "Add to Place Collection" tab to add to your collection'}),Object(o.jsxs)("div",{children:["Place_id: ",e.place_id]}),n(e)]})}(n));t.panTo(s.getPosition()),s.infoWindow.setContent(a),s.infoWindow.open(t,s)}()})),{position:c}}var _=n(24),w=n.n(_),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e,o){var a;return Object(l.a)(this,n),(a=t.call(this,e,o)).closeDetails=function(){a.setState({showDetails:!1,place:void 0})},a.deletePlaceFromCollection=function(){if(window.confirm("confirm you want to delete this place from the collection")){var e={collectionName:a.props.currentCollectionName,place_id:a.props.placeId};f.a.post("http://localhost:5000/collections/delete/place",e).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)})),window.location="/"}},a.showDetails=a.showDetails.bind(Object(j.a)(a)),a.closeDetails=a.closeDetails.bind(Object(j.a)(a)),a.deletePlaceFromCollection=a.deletePlaceFromCollection.bind(Object(j.a)(a)),a.state={place:{},location:{},showDetails:!1},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.map&&this.getDetails(this.props.map)}},{key:"componentDidUpdate",value:function(e,t){!this.props.map||e.map===this.props.map&&e.placeId===this.props.placeId||(this.getDetails(this.props.map),this.setState({showDetails:!0})),this.state.place&&t.place!==this.state.place?this.setState({showDetails:!0}):this.state.place||t.place===this.state.place||this.setState({showDetails:!1,place:{}})}},{key:"getDetails",value:function(e){var t=this,n=this.props.google,o=this.props.placeId;o&&function(e,t,n){return new Promise((function(o,a){var c=new e.maps.places.PlacesService(t),s={placeId:n};c.getDetails(s,(function(t,n){if(n!==e.maps.places.PlacesServiceStatus.OK)return console.log("status!== OK in getDetails. Request is here: ",s),a(n);o(t)}))}))}(n,e,o).then((function(e){var n=e.geometry.location,o={lat:n.lat(),lng:n.lng()};t.setState({place:e,location:o})})).catch((function(e){return console.log("error: ",e)}))}},{key:"renderPhotos",value:function(e){if(e.photos&&0!==e.photos.length){var t={maxWidth:100,maxHeight:100};return Object(o.jsx)("div",{className:w.a.photoStrip,children:e.photos.map((function(e){var n="".concat(e.getUrl(t),".png");return Object(o.jsx)("img",{src:n,alt:"unable to find img"},n)}))})}}},{key:"showDetails",value:function(){var e=this.state.place;return!0===this.state.showDetails&&"place_id"in this.state.place?Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:w.a.closeDetail,onClick:this.closeDetails,children:Object(o.jsx)("h1",{children:"X"})}),Object(o.jsxs)("div",{className:w.a.body,children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("h2",{children:["Address: ",e.formatted_address]}),Object(o.jsxs)("h2",{children:["Current Status: ",e.business_status]}),Object(o.jsxs)("h2",{children:["Phone Number: ",e.formatted_phone_number]}),Object(o.jsx)("h2",{children:Object(o.jsx)("u",{children:Object(o.jsx)("a",{href:e.website,children:"Website"})})}),Object(o.jsxs)("h2",{children:["Comments: ",this.props.DBPlace.comments]}),this.renderPhotos(this.state.place)]}),Object(o.jsx)("button",{onClick:this.deletePlaceFromCollection,children:"Delete from collection"})]}):!0===this.state.showDetails&&void 0===this.state.place?Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:w.a.closeDetail,onClick:this.closeDetails,children:Object(o.jsx)("h1",{children:"X"})}),Object(o.jsx)("h2",{children:"There are currently no places in this collection"})]}):void 0}},{key:"render",value:function(){return Object(o.jsx)("div",{className:w.a.details,children:this.showDetails()})}}]),n}(c.a.Component),D=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"onReady",value:function(e,t){N(this.props.google,t),function(e,t){var n=new e.maps.InfoWindow,o=document.createElement("button");function a(e,n,o){n.setPosition(o),n.setContent(e?"Error: The Geolocation service failed.":"Error: Your browser doesn't support geolocation."),n.open(t)}o.textContent="Pan to Current Location",o.classList.add("custom-map-control-button"),t.controls[e.maps.ControlPosition.TOP_CENTER].push(o),o.addEventListener("click",(function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var o={lat:e.coords.latitude,lng:e.coords.longitude};n.setPosition(o),n.setContent("Your location"),t.setCenter(o)}),(function(){a(!0,n,t.getCenter())})):a(!1,n,t.getCenter())}))}(this.props.google,t),function(e,t,n,o){if(n&&0!==n.length){for(var a=new e.maps.LatLngBounds,c=0;c<n.length;c++)P(e,t,n[c]),n[c].location&&(isNaN(n[c].location.lat&&!isNaN(n[c].location.lng))||a.extend(new e.maps.LatLng(n[c].location)));t.fitBounds(a);var s=e.maps.event.addListener(t,"idle",(function(){t.setZoom(14),e.maps.event.removeListener(s)}))}}(this.props.google,t,this.props.currentPlacesFromCollection,this.props.collections)}},{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(v.a,{onReady:this.onReady.bind(this),google:this.props.google,className:C.a.map,zoomControl:!0,zoomControlOptions:{position:this.props.google.maps.ControlPosition.LEFT_CENTER},onRecenter:this.props.onMove,onDragend:this.props.onMove,onClick:this.props.onClick,initialCenter:{lat:40.7812,lng:-73.9665},mapTypeControlOptions:{mapTypeIds:[]},children:[Object(o.jsx)("input",{id:"pac-input",className:"controls",type:"text",placeholder:"Search Box"}),Object(o.jsx)(k,{placeId:this.props.detailItem.place_id,currentCollectionName:this.props.currentCollectionName,DBPlace:this.props.DBPlace})]},(new Date).getTime())})}}]),n}(c.a.Component),S=Object(O.GoogleApiWrapper)({apiKey:"AIzaSyDOebAULq91uQFtusyxc0Dcj6T14BpnDVU"})(D),L=n(22),I=n(17),B=n.n(I),T=n(18),F=n.n(T),M=n(29),U=n(30),R=n.n(U),E=function(e){return Object(o.jsx)("span",{children:"\u2605"})},V=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.percentage,t={width:"".concat(100*(e||0),"%")};return Object(o.jsxs)("div",{className:R.a.sprite,children:[Object(o.jsxs)("div",{className:R.a.top,style:t,children:[Object(o.jsx)(E,{}),Object(o.jsx)(E,{}),Object(o.jsx)(E,{}),Object(o.jsx)(E,{}),Object(o.jsx)(E,{})]}),Object(o.jsxs)("div",{className:R.a.bottom,children:[Object(o.jsx)(E,{}),Object(o.jsx)(E,{}),Object(o.jsx)(E,{}),Object(o.jsx)(E,{}),Object(o.jsx)(E,{})]})]})}}]),n}(c.a.Component),A=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).state={hovered:!1,placeName:o.props.place.placeName,address:o.props.place.address,lat:o.props.place.lat,lng:o.props.place.lng,type:o.props.place.type,comments:o.props.place.comments},o}return Object(r.a)(n,[{key:"onClickPlace",value:function(){this.props.onClickPlace(this.props.place),this.props.setDBPlace(this.props.place)}},{key:"render",value:function(){var e=this.props.place;return Object(o.jsxs)("div",{onClick:this.onClickPlace.bind(this),className:B()(F.a.item,Object(M.a)({},F.a.itemHovered,this.state.hovered)),children:[Object(o.jsx)("h1",{className:B()(F.a),children:e.name}),Object(o.jsx)(V,{className:F.a.rating,percentage:e.rating/5})]})}}]),n}(c.a.Component),W=n(23),q=n(37);function z(){var e=Object(L.a)([" \n  background: #252831; \n  height: 60px; \n  padding-left: 3rem; \n  display: flex; \n  align-items: center; \n  top: 50%;\n  text-decoration: none; \n  color: #f5f5f5; \n  font-size: 18px; \n  \n  &:hover { \n    background: green; \n    cursor: pointer; \n  } \n"]);return z=function(){return e},e}function H(){var e=Object(L.a)([" \n  display: flex; \n  color: #e1e9fc; \n  justify-content: space-between; \n  align-items: center; \n  padding: 20px; \n  list-style: none; \n  height: 60px; \n  text-decoration: none; \n  font-size: 18px; \n  \n  &:hover { \n    background: #252831; \n    border-left: 4px solid green; \n    cursor: pointer; \n  } \n"]);return H=function(){return e},e}var X=Object(W.a)(p.b)(H()),Y=Object(W.a)(p.b)(z()),G=Object(o.jsx)(q.a,{}),J=Object(o.jsx)(q.b,{}),K=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).showPlaces=o.showPlaces.bind(Object(j.a)(o)),o.onClick=o.onClick.bind(Object(j.a)(o)),o.state={places:[],showPlaces:!1},o}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t={collectionName:this.props.collectionName};f.a.post("http://localhost:5000/collections/collectionName/",t).then((function(t){e.setState({places:t.data})})).catch((function(e){console.log(e)}))}},{key:"showPlaces",value:function(){this.setState({showPlaces:!this.state.showPlaces}),this.state.places&&!1===this.state.showPlaces?(this.props.setCurrentPlaces(this.state.places.filter((function(e){return"name"in e}))),console.log(this.props.collectionName),this.props.sendCurrentCollectionToMapView(this.props.collectionName)):(this.props.setCurrentPlaces([]),this.props.removeDetailItem())}},{key:"onClick",value:function(e,t,n){this.props.onListItemClick&&(e.place=e,this.props.onListItemClick(e,t,n))}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{children:[Object(o.jsxs)(X,{onClick:this.showPlaces,className:B()(F.a.item,Object(M.a)({},F.a.itemHovered,this.state.hovered)),children:[Object(o.jsxs)("h1",{className:B()(F.a.title,"dd-header-title"),children:[" ",this.props.collectionName," ",Object(o.jsx)("br",{})," "]}),Object(o.jsx)("div",{children:this.state.showPlaces?J:G})]}),this.state.showPlaces&&this.state.places.filter((function(e){return"name"in e})).map((function(t){return Object(o.jsx)(Y,{children:Object(o.jsx)(A,{place:t,onClickPlace:e.props.onClickPlace,onHighlight:e.props.onHighlight,offHighlight:e.props.offHighlight,setDBPlace:e.props.setDBPlace},t.id)})}))]})}}]),n}(a.Component),Q=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e,o){var a;return Object(l.a)(this,n),(a=t.call(this,e,o)).collectionsList=a.collectionsList.bind(Object(j.a)(a)),a}return Object(r.a)(n,[{key:"collectionsList",value:function(){var e=this;return String.prototype.toProperCase=function(){return this.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},this.props.collections.filter((function(e){return"users"!==e.collectionName})).map((function(t){return Object(o.jsx)(K,{collectionName:t.name.toProperCase(),onClickPlace:e.props.onClickPlace,removeDetailItem:e.props.removeDetailItem,setCurrentPlaces:e.props.setCurrentPlaces,sendCurrentCollectionToMapView:e.props.sendCurrentCollectionToMapView,setDBPlace:e.props.setDBPlace},t.collectionName)}))}},{key:"render",value:function(){return Object(o.jsx)("div",{className:B()(F.a.container),children:this.collectionsList()})}}]),n}(a.Component),Z=n(38),$=n.n(Z),ee=n(53);function te(){var e=Object(L.a)([" \n  margin-left: 2rem; \n  font-size: 2rem; \n  height: 80px; \n  display: flex; \n  justify-content: flex-start; \n  align-items: center; \n"]);return te=function(){return e},e}function ne(){var e=Object(L.a)([" \n  background: #15171c; \n  height: 80px; \n  display: flex; \n  justify-content: flex-start; \n  align-items: center; \n"]);return ne=function(){return e},e}var oe=W.a.div(ne()),ae=Object(W.a)(p.b)(te()),ce=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).showSidebar=function(){return o.setState({sidebar:!o.state.sidebar})},o.showSidebar=o.showSidebar.bind(Object(j.a)(o)),o.state={sidebar:!1},o}return Object(r.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:B()($.a.sidebar),children:[Object(o.jsxs)(oe,{children:[Object(o.jsx)(ae,{to:"#",children:Object(o.jsx)(ee.a,{onClick:this.showSidebar})}),Object(o.jsx)("h2",{children:this.props.title})]}),Object(o.jsx)("div",{className:B()($.a.listingRatings),children:Object(o.jsx)(Q,{className:"listing",places:this.props.places,onClickPlace:this.props.onClickPlace,removeDetailItem:this.props.removeDetailItem,collections:this.props.collections,children:this.props.children,setCurrentPlaces:this.props.setCurrentPlaces,sendCurrentCollectionToMapView:this.props.sendCurrentCollectionToMapView,setDBPlace:this.props.setDBPlace})})]})}}]),n}(c.a.Component),se=n(54),ie=n.n(se),le={width:"100%",height:"100%"},re=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e,o){var a;return Object(l.a)(this,n),(a=t.call(this,e,o)).setCurrentPlaces=a.setCurrentPlaces.bind(Object(j.a)(a)),a.onClickPlace=a.onClickPlace.bind(Object(j.a)(a)),a.removeDetailItem=a.removeDetailItem.bind(Object(j.a)(a)),a.sendCurrentCollectionToMapView=a.sendCurrentCollectionToMapView.bind(Object(j.a)(a)),a.setDBPlace=a.setDBPlace.bind(Object(j.a)(a)),a.state={currentPlacesFromCollection:[],detailItem:{},currentCollectionName:"",DBPlace:{}},a}return Object(r.a)(n,[{key:"setCurrentPlaces",value:function(e){this.setState({currentPlacesFromCollection:e})}},{key:"componentDidUpdate",value:function(e,t){this.state.currentPlacesFromCollection!==t.currentPlacesFromCollection&&this.setState({currentPlacesFromCollection:this.state.currentPlacesFromCollection})}},{key:"onClickPlace",value:function(e){this.setState({detailItem:e})}},{key:"removeDetailItem",value:function(){this.setState({detailItem:{}})}},{key:"sendCurrentCollectionToMapView",value:function(e){this.setState({currentCollectionName:e})}},{key:"setDBPlace",value:function(e){this.setState({DBPlace:e})}},{key:"render",value:function(){return Object(o.jsxs)(v.a,{google:this.props.google,visible:!1,className:ie.a.wrapper,style:le,children:[Object(o.jsx)(ce,{title:"Collections List",collections:this.props.collections,className:"Sidebar",setCurrentPlaces:this.setCurrentPlaces,onClickPlace:this.onClickPlace,removeDetailItem:this.removeDetailItem,sendCurrentCollectionToMapView:this.sendCurrentCollectionToMapView,setDBPlace:this.setDBPlace}),Object(o.jsx)(S,{currentPlacesFromCollection:this.state.currentPlacesFromCollection,detailItem:this.state.detailItem,location:this.props.location,currentCollectionName:this.state.currentCollectionName,collections:this.props.collections,DBPlace:this.state.DBPlace})]})}}]),n}(c.a.Component),ue=Object(O.GoogleApiWrapper)({apiKey:"AIzaSyDOebAULq91uQFtusyxc0Dcj6T14BpnDVU"})(re),he=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).deletePlace=o.deletePlaceFromCollection.bind(Object(j.a)(o)),o.state={currentCollection:"",collections:[]},o}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:5000/collections/").then((function(t){e.setState({collections:t.data.collectionsList.filter((function(e){return"users"!==e.collectionName}))})})).catch((function(e){console.log(e)}))}},{key:"deletePlaceFromCollection",value:function(e){}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"component-title",children:"View Collections"}),Object(o.jsx)(ue,{collections:this.state.collections})]})}}]),n}(a.Component),pe=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).onChangeCollectionName=o.onChangeCollectionName.bind(Object(j.a)(o)),o.onSubmit=o.onSubmit.bind(Object(j.a)(o)),o.state={collectionName:"",collections:[]},o}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:5000/collections/").then((function(t){t.data.usersList.length>0&&e.setState({users:t.data.usersList.map((function(e){return e.username})),username:t.data.usersList[0].username})})).catch((function(e){console.log(e)}))}},{key:"onChangeCollectionName",value:function(e){this.setState({collectionName:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={collectionName:this.state.collectionName};f.a.post("http://localhost:5000/collections/add",t).then((function(e){console.log(e.data),alert("Collection successfully created!"),window.location="/"})).catch((function(e){alert(e)}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"component-title",children:"Create New Collection"}),Object(o.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Collection Name: "}),Object(o.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.collectionName,onChange:this.onChangeCollectionName})]}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"submit",value:"Create Collection",className:"btn btn-primary"})})]})]})}}]),n}(a.Component),de=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).onChangeUsername=o.onChangeUsername.bind(Object(j.a)(o)),o.onSubmit=o.onSubmit.bind(Object(j.a)(o)),o.state={username:""},o}return Object(r.a)(n,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username};console.log(t),f.a.post("http://localhost:5000/users/add",t).then((function(e){return console.log(e.data)})),this.setState({username:""})}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"component-title",children:"Create New User"}),Object(o.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Username: "}),Object(o.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})]}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"submit",value:"Create User",className:"btn btn-primary"})})]})]})}}]),n}(a.Component),me=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).onChangeCollectionName=o.onChangeCollectionName.bind(Object(j.a)(o)),o.onSubmit=o.onSubmit.bind(Object(j.a)(o)),o.state={collectionName:"",collections:[]},o}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:5000/collections/").then((function(t){t.data.collectionsList.length>0&&e.setState({collections:t.data.collectionsList.map((function(e){return e.name})),collectionName:t.data.collectionsList[0].name})})).catch((function(e){console.log(e)}))}},{key:"onChangeCollectionName",value:function(e){this.setState({collectionName:e.target.value})}},{key:"onSubmit",value:function(e){if(e.preventDefault(),window.confirm("Confirm you want to delete this collection! This action is irreversible.")){var t={collectionName:this.state.collectionName};f.a.post("http://localhost:5000/collections/delete/collection",t).then((function(e){console.log(e.data),alert("Collection successfully deleted!"),window.location="/edit"})).catch((function(e){alert(e)}))}}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"component-title",children:"Edit Collections Collection"}),Object(o.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Collection Name "}),Object(o.jsx)("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.collectionName,onChange:this.onChangeCollectionName,children:this.state.collections.map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))})]}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"submit",value:"Delete Collection",className:"btn btn-primary"})})]})]})}}]),n}(a.Component),je=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).onChangeCollection=o.onChangeCollection.bind(Object(j.a)(o)),o.onChangePlaceId=o.onChangePlaceId.bind(Object(j.a)(o)),o.onChangePlaceName=o.onChangePlaceName.bind(Object(j.a)(o)),o.onChangeComments=o.onChangeComments.bind(Object(j.a)(o)),o.onChangeLat=o.onChangeLat.bind(Object(j.a)(o)),o.onChangeLng=o.onChangeLng.bind(Object(j.a)(o)),o.onChangeRating=o.onChangeRating.bind(Object(j.a)(o)),o.onSubmit=o.onSubmit.bind(Object(j.a)(o)),o.state={collection:"",collections:[],placeId:"",placeName:"",lat:0,lng:0,comments:""},o}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:5000/collections/").then((function(t){t.data.collectionsList.length>0&&(e.setState({collections:t.data.collectionsList.filter((function(e){return"users"!==e.name})).map((function(e){return e.name}))}),e.setState({collection:e.state.collections[0]}))})).catch((function(e){console.log(e)}))}},{key:"onChangeCollection",value:function(e){this.setState({collection:e.target.value})}},{key:"onChangePlaceId",value:function(e){this.setState({placeId:e.target.value})}},{key:"onChangePlaceName",value:function(e){this.setState({placeName:e.target.value})}},{key:"onChangeComments",value:function(e){this.setState({comments:e.target.value})}},{key:"onChangeLat",value:function(e){this.setState({lat:e.target.value})}},{key:"onChangeLng",value:function(e){this.setState({lng:e.target.value})}},{key:"onChangeRating",value:function(e){this.setState({rating:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={collectionName:this.state.collection,placeId:this.state.placeId,placeName:this.state.placeName,lat:this.state.lat,lng:this.state.lng,rating:this.state.rating,comments:this.state.comments};f.a.post("http://localhost:5000/collections/place/add",t).then((function(e){console.log(e.data),alert("Place successfully added to collection!"),window.location="/"})).catch((function(e){alert(e)}))}},{key:"render",value:function(){return String.prototype.toProperCase=function(){return this.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"component-title",children:"Add Place to Collection"}),Object(o.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:Object(o.jsx)("b",{children:"Collection to Add to: "})}),Object(o.jsx)("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.collection,onChange:this.onChangeCollection,children:this.state.collections.map((function(e){return Object(o.jsx)("option",{value:e,children:e.toProperCase()},e)}))})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Place Id"}),Object(o.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.placeId,onChange:this.onChangePlaceId})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Place Name"}),Object(o.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.placeName,onChange:this.onChangePlaceName})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Lattitude"}),Object(o.jsx)("input",{type:"text",required:!0,className:"form-control",onChange:this.onChangeLat})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Longitude"}),Object(o.jsx)("input",{type:"text",required:!0,className:"form-control",onChange:this.onChangeLng})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Rating (Out of 5)"}),Object(o.jsx)("input",{type:"float",className:"form-control",value:this.state.rating,onChange:this.onChangeRating})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Comments"}),Object(o.jsx)("input",{type:"text",className:"form-control",value:this.state.comments,onChange:this.onChangeComments})]}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"submit",value:"Add to Collection",className:"btn btn-primary"})})]})]})}}]),n}(a.Component),be=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(o.jsxs)(p.a,{className:"container",children:[Object(o.jsx)(m,{}),Object(o.jsx)(d.a,{path:"/",exact:!0,component:he}),Object(o.jsx)(d.a,{path:"/edit",component:me}),Object(o.jsx)(d.a,{path:"/create",component:pe}),Object(o.jsx)(d.a,{path:"/user",component:de}),Object(o.jsx)(d.a,{path:"/add",component:je})]})}}]),n}(c.a.Component);i.a.render(Object(o.jsx)(be,{}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.112663b2.chunk.js.map