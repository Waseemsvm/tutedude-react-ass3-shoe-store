export default function Product({ product, onAddItemtoCart }) {
  return (
    <div className="product">
      <img className="prod-img" src={`${product.image}.jpg`} width={"200px"} />
      <p className="prod-desc">{product.name}</p>
      <div className="prod-add-price">
        <p className="prod-price">${product.price}</p>
        <button
          className="add-to-cart"
          onClick={(e) => {
            onAddItemtoCart(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
