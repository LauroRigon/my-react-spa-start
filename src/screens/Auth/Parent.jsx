import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

const AuthParent = (props) => {
  return (
    <Container>
      <Grid>
        <Grid.Row centered>
          {props.children}  {/* RENDER ROUTES NESTED TO THE COMPONENT IN Root.jsx */}
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default AuthParent;
