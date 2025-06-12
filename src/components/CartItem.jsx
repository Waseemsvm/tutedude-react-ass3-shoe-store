import ItemCounter from "./ItemCounter";

export default function CartItem({
  product,
  incrementProductQuantity,
  decrementProductQuantity,
}) {
  return (
    <div className="cart-item">
      <img src={`${product.image}.jpg`} />
      <p>{product.name}</p>
      <p>{parseInt(product.price) * product.quantity}</p>
      <ItemCounter
        product={product}
        incrementProductQuantity={incrementProductQuantity}
        decrementProductQuantity={decrementProductQuantity}
      />
    </div>
  );
}
