import React from 'react';

import { Container, Grid, Typography, Hidden, Card, CardMedia, CardContent, CardActionArea } from 'ui';
import useStyles from './Posts.styles';

export const Posts = ({ posts }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" component="main" className={classes.heroContent}>
      <Grid container spacing={4}>
        {posts.map(post => (
          <Grid item key={post.title} xs={12} md={6}>
            <CardActionArea component="a" href="#">
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {post.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {post.date}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {post.description}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      Continue reading...
                    </Typography>
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                </Hidden>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
