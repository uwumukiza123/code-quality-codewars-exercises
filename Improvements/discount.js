function calculateDiscount(totalAmount) {
  let discount;

  return totalAmount > 100
    ? (discount = totalAmount * 0.1)
    : (discount = totalAmount * 0.05);
}
