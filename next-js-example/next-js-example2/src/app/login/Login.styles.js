import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  leftSide: {
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    flex: '0 0 50%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  rightSide: {
    flex: '0 0 50%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flex: '0 0 100%',
    },
  },
  formWrapper: {
    padding: theme.spacing(5, 15),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5),
    },
  },
}));
