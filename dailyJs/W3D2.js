/*
This is a large problem to refactor!
Try it to attempt at breaking down this large function.
Remember to think through your Parameters and return values!
*/

 // Your task is to refactor this function into several smaller ones. Here are the arguments for handleOrderProcessing: ​

  /* order: An object containing:
        items: An array of objects containing:
            price: The price of the item (a number)
            quantity: The quantity of the item (a number)
        discount: A discount to apply to the total price (a number)
        shipping: Whether or not to charge for shipping (a boolean)
 ​Each new function should be responsible for only one aspect of the order processing. The sum of the values returned by these functions should be the total price of the order.

// Use these pre-defined functions to help split up the
// complex function, handleOrderProcessing, into smaller functions. */
//
// Here is a sample test case:
// const order = {
//    items: [{ quantity: 4, price: 5 }],
//    discount: 10,
//    shipping: false,
//  } // Output: 19.8

function calculateOrderTotal(order) {
  let totalPrice = 0;
  for (let i = 0; i < order.items.length; i++) {
    const item = order.items[i];
    let itemTotal = 0;

    if (item.quantity > 0 && item.price > 0) {
      itemTotal = item.quantity * item.price;
    }

    totalPrice += itemTotal;
  }
  return totalPrice;
}

function applyDiscount(total, order) {
  if (order.discount > 0) {
    const discountAmount = (order.discount / 100) * total;
    total -= discountAmount;
  }
  return total;
}

function addTax(total) {
  const taxRate = 0.1;
  const taxAmount = taxRate * total;
  total += taxAmount;
  return total;
}

function addShipping(total, order){
      if (order.shipping) {
    total += 5;
  }
  return total;
}

function handleOrderProcessing(order){
      const currentTotal = calculateOrderTotal(order);
  const totalAfterDiscount = applyDiscount(currentTotal, order);
  const totalAfterTax = addTax(totalAfterDiscount);
  const totalAfterShipping = addShipping(totalAfterTax, order);
  return totalAfterShipping;

}
