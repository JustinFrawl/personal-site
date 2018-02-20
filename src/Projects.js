import React from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';

const Projects = () => {
  return (
    <div>
<Segment>
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
          <h3 floated='center'>Beer Trader!</h3>
          <Image size='large' src={require('./BeerTraderScreen.png')} href='https://beer-trading.herokuapp.com/login'/>
          <p>A nifty little app that allows craft beer afficionados to effectively set up trades in an environment suited to the task</p>
          <a href='https://github.com/JustinFrawl/beer-trader-front-end' floated='left'>Front-End Github </a>
          <a href='https://github.com/JustinFrawl/beer-trader-backend' floated='left'>/ Back-End Github </a>
          <a href='https://beer-trading.herokuapp.com/login' floated='left'>/ Demo</a>
      </Grid.Column>
      <Grid.Column>
          <h3 floated='center'>Auctioneer!</h3>
          <Image size='large' src={require('./AuctioneerScreen.png')} href='https://mediocre-auction.herokuapp.com/home'/>
          <p>Student project that tried to emulate the base functionality of an Ebay auction in a ReactJS environment.</p>
          <a href='https://github.com/JustinFrawl/auction-front-end'>Front-End Github </a>
          <a href='https://github.com/vijaypraju04/auction-back-end'>/ Back-End Github </a>
          <a href='https://mediocre-auction.herokuapp.com/home'>/ Demo</a>
      </Grid.Column>
      <Grid.Column>
          <h3 floated='center'>RKSK!</h3>
          <Image size='large' src={require('./RKSKScreen.png')} />
          <p>Travel application that allows people to enter their destination and have Etsy suggest a pack of items based on the weather at that location.</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>
    </div>
  )
}
export default Projects;
