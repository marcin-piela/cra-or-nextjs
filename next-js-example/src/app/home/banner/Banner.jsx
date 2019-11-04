import React from 'react';

import { Paper, Grid, Typography, Link } from 'ui';
import useStyles from './Banner.styles';

export const Banner = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost} square>
      {<img style={{ display: 'none' }} src="https://source.unsplash.com/user/erondu" alt="background" />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Title of a longer featured blog post
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Multiple lines of text that form the lede, informing new readers quickly and efficiently about what&apos;s
              most interesting in this post&apos;s contents.
            </Typography>
            <Link variant="subtitle1" href="/">
              Continue reading…
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
