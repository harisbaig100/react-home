import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
					className={classes.media}
					image="https://vignette.wikia.nocookie.net/monsterlegends/images/c/ce/Nemestrinus.jpg/revision/latest/scale-to-width-down/567?cb=20131224182055&path-prefix=es"
          // image="./src/assets/static/images/cards/contemplative-reptile.jpg"
          title="Druid"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Druid
          </Typography>
          <Typography component="p">
          Druids revere nature above all, gaining their spells and other 
          magical powers either from the force of nature itself or from a 
          nature deity. Many druids pursue a mystic spirituality of transcendent 
          union with nature rather than devotion to a divine entity, while 
          others serve gods of wild nature, animals, or elemental forces. 
          The ancient druidic traditions are sometimes called the Old Faith, 
          in contrast to the worship of gods in temples and shrines.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    


  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
