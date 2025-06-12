import Product from "./Product";

export default function ProductsList({ products, onAddItemtoCart }) {
  return (
    <div className="productListContainer">
      <div className="productList">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            onAddItemtoCart={onAddItemtoCart}
          />
        ))}
      </div>
    </div>
  );
}
