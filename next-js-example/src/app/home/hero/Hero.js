import React from 'react';

import { Container, Typography } from 'ui';
import useStyles from './Hero.styles';

export const Hero = ({ title, description }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" component="p">
        {description}
      </Typography>
    </Container>
  );
};
