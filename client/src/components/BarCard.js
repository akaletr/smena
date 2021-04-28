import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginTop: 15,
    minWidth: 175,
    maxWidth: 300,

  },
  bullet: {
    display: 'block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  img: {
    width: '100%'
  }
});

const BarCard = ({bar}) => {
  const classes = useStyles();
  console.log(bar)
  return (
    <Card className={classes.root} variant="outlined">
      <img className={classes.img} src={bar.imageUrl} alt="#"/>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {bar.address}
        </Typography>
        <Typography variant="h5" component="h2">
          {bar.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Подписчики: {bar.subscriptions.length}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><NavLink to={`/detail/${bar._id}`}>Подробнее</NavLink></Button>
      </CardActions>
    </Card>
  );
}

export default BarCard;