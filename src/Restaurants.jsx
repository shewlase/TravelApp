import React, { Component } from 'react';

var zomatoKey = 'dfb3484d191ae8bed61de303469acbec';
var londonZomID = 61;
var goldCoastZomID = 2555;

class RestaurantsComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // name: props.name,
      // job: props.job,
      // src: props.src,
      name: 'a',
      description: 'b',
      collectionId: props.collectionId,
      location: props.location,
      apiRes: {},
      };
    }

    componentDidMount() {
      // this.fetchData(this.state.location);
  }

  fetchData(locationId)
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
          // isLoaded: true,
          name: result.collections[this.state.collectionId].collection.title,
          description: result.collections[this.state.collectionId].collection.description,
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
  }

      render() {

        /* this.fetchData(this.props.location); */
        return (
          <div className='restaurant'>
            <h1>{this.props.data.collection.title}</h1>

            <p>{this.props.data.collection.description}</p>

          </div>


        );
        // return <h1>I'm the parent component.</h1>;
      }
  }


  export default RestaurantsComponent;
