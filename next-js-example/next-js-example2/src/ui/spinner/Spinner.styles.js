import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  spinner: {
    margin: theme.spacing(2),
    left: 'calc(50% - 20px)',
    position: 'absolute',
  },
}));
