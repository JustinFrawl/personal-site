import React, { Component } from 'react';
import logo from './logo.svg';
import Bio from './Bio.js';
import Projects from './Projects.js';
import './App.css';
import { Grid, Menu, Segment, Container, Header } from 'semantic-ui-react'
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header
            as='h1'
            content='Justin Cole Frawley, Fullstack Developer'
            style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: '1em', marginTop: '1em', color: 'blue' }}
          />
        </Container>

        <Grid>
        <Segment>
        <Grid.Column width={2}>
          <Menu pointing secondary size='massive'>
            <Menu.Item as='a'><Link to="/bio">Bio</Link></Menu.Item>
            <Menu.Item as='a'><Link to="/projects">Projects</Link></Menu.Item>
            <Menu.Item as='a'><a href ='https://github.com/JustinFrawl'>Github</a></Menu.Item>
            <Menu.Item as='a'><Link to="/contact">Contact Info</Link></Menu.Item>
          </Menu>
          </Grid.Column>
          </Segment>
      </Grid>
      <Switch>
      <Route path="/bio" component={Bio} />
      <Route path="/projects" component={Projects} />
      </Switch>
      </div>
    );
  }
}

export default App;
