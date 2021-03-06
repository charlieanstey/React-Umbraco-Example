import React, { Component } from 'react';
import './index.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ContentPage from './ContentPage';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { initialState } = this.props

    const RoutedContentPage = (innerProps) => {
      return (
        <ContentPage
          initialState={initialState}
          {...innerProps}
        />
      );
    }

    return (
      <Router>
        <div className="App">
          {Object.keys(this.props.initialState.content).map((item, index) => <Route key={index} exact path={item} component={RoutedContentPage} /> )}
        </div>
      </Router>
    );
  }
}

export default App;
