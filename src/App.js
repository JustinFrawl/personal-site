import React, { Component } from 'react';
import logo from './logo.svg';
import Bio from './Bio.js'
import './App.css';
import { Grid, Menu, Segment } from 'semantic-ui-react'
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Future Justin Frawley Website</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Grid>
        <Segment>
        <Grid.Column width={2}>
          <Menu pointing secondary size='massive'>
            <Menu.Item as='a'><Link to="/bio">Bio</Link></Menu.Item>
            <Menu.Item as='a'><Link to="/projects">Projects</Link></Menu.Item>
            <Menu.Item as='a'><Link to="/gitHub">Github</Link></Menu.Item>
            <Menu.Item as='a'><Link to="/contact">Contact Info</Link></Menu.Item>
          </Menu>
          </Grid.Column>
          </Segment>

        <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the tab height
          </Segment>
        </Grid.Column>
      </Grid>
      <Switch>
      <Route path="/bio" component={Bio} />
      </Switch>
      </div>
    );
  }
}

export default App;
