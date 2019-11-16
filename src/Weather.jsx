import React, { Component } from 'react';

var weatherkey = '289b20ec1089556a06827982331242b7';
var londonWeatherID = 2643744;
class WeatherComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // name: props.name,
      // job: props.job,
      // src: props.src,
      cityName: 'a',
      mainTemp: 2,
      main: '',
      apiRes: {},
      };
    }

  /*  componentDidMount() {
      fetch('http://api.openweathermap.org/data/2.5/forecast?id=' + londonWeatherID+ '&appid=' + weatherkey)
    //   fetch('http://api.openweathermap.org/data/2.5/forecast?id=' + cityID+ '&appid=' + weatherkey)
    // fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {

          //other calculations for high low and images here

          this.setState({
            // isLoaded: true,
            cityName: result.city.name,
            mainTemp: Math.round(parseFloat(result.list[0].main.temp)-273.15),
            main: result.list[0].main,
            apiRes: result,
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
  } */

      render() {

        return (
          <div>
            <h1>{this.state.cityName}</h1>

            <p>{this.state.mainTemp} ℃</p>

          </div>


        );
        // return <h1>I'm the parent component.</h1>;
      }
  }


  export default WeatherComponent;
