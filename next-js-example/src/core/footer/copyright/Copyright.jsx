import React from 'react';

import { Typography, Link } from 'ui';

export const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://material-ui.com/">
      Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);
