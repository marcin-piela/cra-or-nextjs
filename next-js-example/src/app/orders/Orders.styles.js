import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  errorPaper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(2),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  link: {
    color: theme.palette.primary,
    textDecoration: 'none',
    textTransform: 'uppercase',
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(1),
    width: '100%',
    textAlign: 'center',
  },
}));
