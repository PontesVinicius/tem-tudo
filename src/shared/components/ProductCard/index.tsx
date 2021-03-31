import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { formatPrice } from "../../utils";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export type ProductCardProps = {
  props: {
    name: string;
    description: string;
    photo_url: string;
    price: number;
  };
};

const ProductCard: React.FC<ProductCardProps> = ({ props }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={5} lg={5}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.photo_url}
            title={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
            <Typography variant="button" color="textPrimary" component="p">
              {formatPrice(props.price)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Adicionar ao carrinho
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default ProductCard;
