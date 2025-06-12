import CartItem from "./CartItem";

export default function Cart({
  products,
  incrementProductQuantity,
  decrementProductQuantity,
}) {
  console.log(products);
  return (
    <div className="cartContainer">
      <h1>Cart</h1>
      <div className="cart-items">
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            decrementProductQuantity={decrementProductQuantity}
            incrementProductQuantity={incrementProductQuantity}
          />
        ))}
        {
          !products.length && "Your Cart is Empty" 
        }
      </div>
      <div className="cart-footer">
        <p>
          <span>Total:</span>$
          <span className="price">
            {products.reduce(
              (acc, p) => acc + p.quantity * parseInt(p.price),
              0
            )}{" "}
          </span>
        </p>
      </div>
    </div>
  );
}
