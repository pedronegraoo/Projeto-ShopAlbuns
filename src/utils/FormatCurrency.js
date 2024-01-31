function FormatCurrency(value, currency) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: currency,
  });
}

export default FormatCurrency;
