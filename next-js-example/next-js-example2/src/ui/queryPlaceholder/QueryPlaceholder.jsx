import React from 'react';

import { Typography, Container, Paper } from 'ui';
import useStyles from './QueryPlaceholder.styles';
import { Spinner } from 'ui/spinner/Spinner';

export const QueryPlaceholder = ({ isError }) => {
  const classes = useStyles();

  if (isError) {
    return (
      <Container maxWidth="md" component="main">
        <Paper className={classes.errorPaper}>
          <Typography variant="h5" component="h3">
            Unexpected error
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" component="main">
      <Spinner />
    </Container>
  );
};
