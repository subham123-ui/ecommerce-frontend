import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";

const cartItems = [];
const subtotal = 40000;
const tax = Math.round(subtotal * 0.18);
const shippinCharges = 200;
const total = subtotal + tax + shippinCharges;
const discount = 400;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if(Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>

        {
          cartItems.map(i=>
            
          )
        }




      </main>
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

        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>{" "}
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
      </aside>
    </div>
  );
};

export default Cart;
