import React from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';

const Projects = () => {
  return (
    <div>
      Fuck off, your projects suck dick
<Segment>
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
          <Image size='large' src={require('./BeerTraderScreen.png')} />
          <p>A nifty little app that allows craft beer afficionados to effectively set up trades in an environment suited to the task</p>
      </Grid.Column>
      <Grid.Column>
          <Image size='large' src={require('./AuctioneerScreen.png')} />
          <p>Student project that tried to emulate the base functionality of an Ebay auction in a ReactJS environment.</p>
      </Grid.Column>
      <Grid.Column>
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
