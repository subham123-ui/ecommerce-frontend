const Cart = () => {
  const cartitems = [];
  const subtotal = 40000;
  const tax = Math.round(subtotal * 0.18);
  const shippinCharges = 200;
  const total = subtotal + tax + shippinCharges;
  const discount = 400;
  return (
    <div className="cart">
      <main></main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippinCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount - <em>₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total} </b>
        </p>
      </aside>
    </div>
  );
};

export default Cart;
