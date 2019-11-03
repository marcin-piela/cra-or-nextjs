import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

import useStyles from './Spinner.styles';

export const Spinner = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" component="main">
      <CircularProgress className={classes.spinner} />
    </Container>
  );
};
