import React from 'react';
import Link from 'next/link';

import { Card, CardActions, CardContent, CardHeader, Grid, StarIcon, Typography, Container } from 'ui';
import useStyles from './Orders.styles';
import { QueryPlaceholder } from 'ui/queryPlaceholder/QueryPlaceholder';

export const Orders = ({ isLoading, isError, orders }) => {
  const classes = useStyles();

  if (isError || isLoading) {
    return <QueryPlaceholder isError={isError} />;
  }

  return (
    <Container maxWidth="md" component="main">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.title}>
        Orders
      </Typography>
      <Grid container spacing={5} alignItems="flex-end">
        {orders.map(tier => (
          <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
            <Card>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                action={tier.title === 'Pro' ? <StarIcon /> : null}
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.cardPricing}>
                  <Typography component="h2" variant="h3" color="textPrimary">
                    ${tier.price}
                  </Typography>
                  <Typography component="h5" variant="h5" color="textPrimary">
                    {tier.date}
                  </Typography>
                </div>
                <ul>
                  <Typography component="li" variant="subtitle1" align="center">
                    {tier.description}
                  </Typography>
                </ul>
              </CardContent>
              <CardActions>
                <Link href="/orders/[id]" as={`/orders/${tier.id}`}>
                  <a className={classes.link}>Go to details</a>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
