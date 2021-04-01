import {
  ListItemAvatar,
  ListItem,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  List,
  IconButton,
  Badge,
  Grid,
} from "@material-ui/core";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/ducks";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../store/ducks/cartProducts";
import { formatPrice } from "../../shared/utils";

export const Cart = () => {
  const CartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const remove = () => {
    const id = CartItems[0].id;
    dispatch(removeFromCart({ id }));
  };

  const increment = () => {
    const id = CartItems[0].id;
    dispatch(incrementQuantity({ id }));
  };

  const decrement = () => {
    const id = CartItems[0].id;
    dispatch(decrementQuantity({ id }));
  };

  const totalProductsValue =
    CartItems.length === 0
      ? 0
      : CartItems.map((item) => item.price * item.quantity).reduce(
          (itemPrice, accPrice) => accPrice + itemPrice
        );
  return (
    <List>
      {CartItems.length > 0 ? (
        CartItems.map((item) => (
          <ListItem>
            <Grid md={11} lg={11} xs={11}>
              <ListItem divider>
                <ListItemAvatar>
                  <Badge badgeContent={item.quantity} color="primary">
                    <Avatar src={item.photo_url} variant="square" />
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={formatPrice(item.price)}
                />
                <ListItemSecondaryAction>
                  <IconButton onClick={remove} edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Grid>
            <Grid md={1} lg={1} xs={1} direction="column">
              <Grid item>
                <IconButton
                  style={{ margin: 0, padding: 0 }}
                  onClick={increment}
                >
                  <ArrowDropUpIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  style={{ margin: 0, padding: 0 }}
                  onClick={decrement}
                >
                  <ArrowDropDownIcon />
                </IconButton>
              </Grid>
            </Grid>
          </ListItem>
        ))
      ) : (
        <h1>Carrinho Vazio</h1>
      )}
      {CartItems.length > 0 ? (
        <h5>Total dos produtos: {formatPrice(totalProductsValue)}</h5>
      ) : null}
    </List>
  );
};

export default Cart;
