import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

const HatsDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{`TopicDetails: ${props.match.params.ItemId}`}</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
