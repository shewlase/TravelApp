import React from 'react';
import ParentComponent from './parent'
import WeatherComponent from './Weather'
import RestaurantsComponent from './Restaurants'
import GigComponent from './Gig'
import logo from './logo.svg';
import './App.css';
var londonZomID = 61;
var goldCoastZomID = 280;
var zomatoKey = 'dfb3484d191ae8bed61de303469acbec';

var goldCoastGigID = 26785;
var londonGigID = 24426;

var londonWeatherID = 2643744;
var surfersWeatherID = 2147849;

var zomCityId = 0;
var songKickId = 0;
var searchTerm = '';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: 'auckland',
      // location: goldCoastZomID,
      // gigLocation: goldCoastGigID,

      // weatherData: {},
      // zomatoData: {displayName: 'yo'},
      //need to store json from all 3 fetches
       //weatherData, zomatoData, gigData
    }
    this.keyDown = this.keyDown.bind(this);
  }

  fetchSongKickLocation(locationString)
  {
    //https://api.songkick.com/api/3.0/search/locations.json?query="Location String"&apikey=
    fetch('https://api.songkick.com/api/3.0/search/locations.json?query='+locationString+'&apikey=b7gkiDLuqicUVMIA')
    //   fetch('http://api.openweathermap.org/data/2.5/forecast?id=' + cityID+ '&appid=' + weatherkey)
    // fetch("https://api.example.com/items")
    .then(res => res.json())
    .then(
     (result) => {
         songKickId = result.resultsPage.results.location[0].metroArea.id;
         // songKickData: result.resultsPage.results;

       console.log(songKickId);
       this.fetchSongKick(songKickId);
     },
     (error) => {
       this.setState({
         error
       });
     }
    )
  }

  fetchSongKick(locationID)
  {
    //https://api.songkick.com/api/3.0/search/locations.json?query="Location String"&apikey=
    fetch('https://api.songkick.com/api/3.0/metro_areas/'+locationID+'/calendar.json?apikey=b7gkiDLuqicUVMIA')
    //   fetch('http://api.openweathermap.org/data/2.5/forecast?id=' + cityID+ '&appid=' + weatherkey)
    // fetch("https://api.example.com/items")
    .then(res => res.json())
    .then(
     (result) => {
       this.setState({
         songKickData: result.resultsPage.results,
       });
     },
     (error) => {
       this.setState({
         error
       });
     }
    )
  }

    fetchZomatoLocation(searchQuery)
    {
      let fetchData =
      {
          "method": "GET",
         "headers":
        {
          "user-key": zomatoKey
        }
      }
       fetch('https://developers.zomato.com/api/v2.1/cities?q='+searchQuery , fetchData)
    //   fetch('http://api.openweathermap.org/data/2.5/forecast?id=' + cityID+ '&appid=' + weatherkey)
    // fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {

          //other calculations for high low and images here
          zomCityId = result.location_suggestions[0].id;
          console.log(zomCityId);
          this.fetchZomato(zomCityId);
        },
        (error) => {
          console.log(error);
        }
      )
    }

    fetchZomato(locationId)
    {
      let fetchData =
      {
          "method": "GET",
         "headers":
        {
          "user-key": zomatoKey
        }
      }
       fetch('https://developers.zomato.com/api/v2.1/collections?city_id='+locationId , fetchData)
    //   fetch('http://api.openweathermap.org/data/2.5/forecast?id=' + cityID+ '&appid=' + weatherkey)
    // fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {

          //other calculations for high low and images here

          this.setState({
            zomatoData: result.collections,
          });
        },
        (error) => {
          this.setState({
            // isLoaded: true,
            error
          });
        }
      )
    }

  fetchAllData(locationString)
  {
    // fetchWeather(locationString);
    this.fetchZomato(locationString);
    this.fetchSongKick(locationString);
  }

  componentDidMount() {
    // this.fetchAllData();
    // this.fetchZomatoLocation('manchester');
  }

  changeLocation = () => {
    //re fetch data with new location string
    // this.fetchZomatoLocation(this.state.searchQuery);
    this.fetchZomatoLocation(searchTerm);
    this.fetchSongKickLocation(searchTerm);
    //toggle location between surfers and london
    // this.setState({
    //     location: londonZomID,
    //     // location: 'surfers',
    //   });
  }

  handleType(event)
  {
    // this.setState({
    //   searchQuery: event.target.value,
    // });
    searchTerm = event.target.value;
  }

  keyDown(event)
  {
    if(event.keyCode == 13)
    {
      this.changeLocation();
    }
  }
  //send all components fetched data
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={this.changeLocation}>Search</button>
          <input id='searchInput' onChange={this.handleType} onKeyDown={this.keyDown} type='text'></input>
          <WeatherComponent />

          <h1>Eat</h1>
          {this.state.zomatoData ?
          <div className='restaurantGrid'>
            <RestaurantsComponent data={this.state.zomatoData[0]}/>
            <RestaurantsComponent data={this.state.zomatoData[1]}/>
            <RestaurantsComponent data={this.state.zomatoData[2]}/>
          </div> : <p>Loading...</p>}
          <h1>Music</h1>

          {this.state.songKickData ?
              <div className='restaurantGrid'>
                <GigComponent data={this.state.songKickData.event[0]}/>
                <GigComponent data={this.state.songKickData.event[1]}/>
                <GigComponent data={this.state.songKickData.event[2]}/>
              </div> : <p>Loading...</p>}

        </header>
      </div>
    );
  }
}

export default App;
