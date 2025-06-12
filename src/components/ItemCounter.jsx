export default function ItemCounter({
  product,
  decrementProductQuantity,
  incrementProductQuantity,
}) {
  return (
    <div className="item-counter">
      <button
        className="item-counter-btn"
        onClick={(e) => {
          decrementProductQuantity(product.id);
        }}
      >
        -
      </button>
      <p className="item-counter-val">{product.quantity}</p>
      <button
        className="item-counter-btn"
        onClick={(e) => {
          incrementProductQuantity(product.id);
        }}
      >
        +
      </button>
    </div>
  );
}
