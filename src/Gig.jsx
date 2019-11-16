import React, { Component } from 'react';

var londonGigID = 24426;
var goldCoastGigID = 26785;

class GigComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // name: props.name,
      // job: props.job,
      // src: props.src,
      name: 'a',
      venue: 'b',
      location: 'c',
      date: '',
      // collectionId: props.collectionId,
      // locationId: props.location,
      // apiRes: props.data,
      };
    }

    componentDidMount() {
      // fetchData();
  }

  fetchData(locationId)
  {
    //https://api.songkick.com/api/3.0/search/locations.json?query="Location String"&apikey=
    fetch('https://api.songkick.com/api/3.0/metro_areas/'+locationId+'/calendar.json?apikey=b7gkiDLuqicUVMIA')
 //   fetch('http://api.openweathermap.org/data/2.5/forecast?id=' + cityID+ '&appid=' + weatherkey)
 // fetch("https://api.example.com/items")
   .then(res => res.json())
   .then(
     (result) => {

       //other calculations for high low and images here
       let gigList = result.resultsPage.results.event;
       let gig1 = gigList[this.state.collectionId];
       let location = gig1.location.city;
       let venue = gig1.venue.displayName;
       let gigName = gig1.displayName;
       this.setState({
         // isLoaded: true,
         name: gigName,
         venue: venue,
         location: location,
         locationId: locationId,
         date: '',
         apiRes: {},
       });
     },
     // Note: it's important to handle errors here
     // instead of a catch() block so that we don't swallow
     // exceptions from actual bugs in components.
     (error) => {
       this.setState({
         // isLoaded: true,
         error
       });
     }
   )
  }

      render() {
        /* this.fetchData(this.props.location); */
        return (
          <div className='restaurant'>

            <p>{this.props.data.displayName}</p>
            <p>{this.props.data.location.city}</p>
            <p>{this.props.data.venue.displayName}</p>

          </div>


        );
      }
  }


  export default GigComponent;
