import React, { Component } from 'react';

class Thumbnail extends Component {

  constructor(props) {
    super(props);

    this.state = { sourceURL: ''};
  }

  render () {
    return <img src="{this.state.sourceURL}"/>;
  }

  //new methods
  setURL() {

  }
}

export default Thumbnail;
