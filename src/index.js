import React from 'react';
import ReactDOM from 'react-dom';

import DocView from './components/docview';
// Create a new component. This component should produce html

//some html
const App = () => {
  return <DocView />;
}
//Take this component's HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('#docview'));
