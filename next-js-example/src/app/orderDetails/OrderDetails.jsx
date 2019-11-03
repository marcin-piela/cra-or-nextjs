import React from 'react';

import { Typography, Container } from 'ui';
import useStyles from './OrderDetails.styles';
import { QueryPlaceholder } from 'ui/queryPlaceholder/QueryPlaceholder';

export const OrderDetails = ({ isLoading, isError, data }) => {
  const classes = useStyles();

  if (isError || isLoading) {
    return <QueryPlaceholder isError={isError} />;
  }

  return (
    <Container maxWidth="md" component="main">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.title}>
        {data.title}
      </Typography>
      <Typography
        component="h1"
        variant="h5"
        align="center"
        color="textPrimary"
        gutterBottom
        className={classes.description}
      >
        {data.description}
      </Typography>
    </Container>
  );
};
