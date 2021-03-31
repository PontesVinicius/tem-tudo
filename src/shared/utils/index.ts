export const formatPrice = (value: number | undefined) => {
  return value
    ? new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value)
    : "R$ 0,00";
};
