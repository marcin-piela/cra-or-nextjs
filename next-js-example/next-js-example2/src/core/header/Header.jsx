import React from 'react';
import Link from 'next/link';

import { AppBar, Toolbar, CompareIcon, Typography } from 'ui';
import useStyles from './Header.styles';
import { useAuthState } from 'hooks';

export const Header = () => {
  const classes = useStyles();
  const { isAuthorized } = useAuthState();

  return (
    <AppBar position="relative">
      <Toolbar>
        <CompareIcon className={classes.icon} />
        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
          CRA vs Next.js
        </Typography>

        <Link href="/">
          <a className={classes.link}>Home</a>
        </Link>

        {isAuthorized && (
          <Link href="/orders">
            <a className={classes.link}>Orders</a>
          </Link>
        )}

        {!isAuthorized && (
          <Link href="/login" prefetch={false}>
            <a className={classes.link}>Login</a>
          </Link>
        )}

        {isAuthorized && (
          <Link href="/logout">
            <a className={classes.link}>Logout</a>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};
