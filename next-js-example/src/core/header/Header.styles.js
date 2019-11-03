import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: theme.spacing(4),
  },
}));
