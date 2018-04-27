import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/scanner.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <div className="left-column">
                <div className="top-left-div">
                </div>
                <div className="bottom-div-border">
                    <div>
                        <input type="button" className="button button-left-bigtop" value="Move Up"/>
                        <input type="button" className="button button-left-bigtop" value="Move Down"/>
                    </div>
                    <div>
                        <input type="button" className="button button-left-smallout" value="Insert"/>
                        <input type="button" className="button button-left-smallin" value="Rescan"/>
                        <input type="button" className="button button-left-smallin" value="Append"/>
                        <input type="button" className="button button-left-smallin" value="Delete"/>
                        <input type="button" className="button button-left-smallout" value="Delete All"/>
                    </div>
                    <div className="">
                        <input type="button" className="button button-left-bigbottom" value="Save"/>
                        <input type="button" className="button button-left-bigbottom" value="Cancel"/>
                    </div>
                </div>
            </div>
            <div className="right-column">
                <div className="top-right-div">
                </div>
                <div className="bottom-div-border">
                    <div className="">
                        <input type="button" className="button button-right-big" value="Previous"/>
                        <input type="button" className="button button-right-big" value="Next"/>
                        <input type="button" className="button button-right-big" value="Zoom Out"/>
                        <input type="button" className="button button-right-big" value="Zoom In"/>
                        <input type="button" className="button button-right-big" value="Fit Page"/>
                        <input type="button" className="button button-right-big" value="Fit Width"/>
                        <input type="button" className="button" style={{padding: '5px 27px'}} value="Actual Size"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
