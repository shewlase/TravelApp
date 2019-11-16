import React, { Component } from 'react';

var pexelsKey = '563492ad6f91700001000001da0ffdd88dd64342b698ac6fb52e2a29';

class ParentComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      job: props.job,
      src: props.src,
    };

  }

  render() {

    return (
      <div>
        <h1>{this.state.name}</h1>

        <p>{this.state.job}</p>

        <img alt = 'gax' src={this.state.src}></img>

      </div>


    );
    // return <h1>I'm the parent component.</h1>;
  }

}

export default ParentComponent;
