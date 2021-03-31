import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { selectProductsState } from "../../store/ducks";
import { getProductsDispatcher } from "../../store/ducks/products";
import ProductCard from "../../shared/components/ProductCard";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

const HomeView = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { success, productsList } = useSelector(selectProductsState);
  const getProducts = useCallback(() => dispatch(getProductsDispatcher()), [
    dispatch,
  ]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <h2>Produtos</h2>
      <Grid container className={classes.root} spacing={2}>
        {success &&
          productsList?.map((res) => <ProductCard key={res.id} props={res} />)}
      </Grid>
    </>
  );
};

export default HomeView;
