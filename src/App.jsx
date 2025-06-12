import { useEffect, useState } from "react";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import AppBar from "./components/AppBar";
import "./styles/styles.css";

// import productslist from "./assets/data.json";

function App() {
  const [products, setProducts] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const productslist = (await import("./assets/data.json")).default;
      productslist.forEach((p) => (p.quantity = 0));
      setProducts(productslist);
    }
    fetchData();
  }, []);

  const onAddItemtoCart = (item) => {
    const p = [...productsInCart].find((p) => p.id == item.id);
    if (!p) {
      const i = { ...item };
      i.quantity += 1;
      setProductsInCart([...productsInCart, i]);
    }
  };

  const decrementProductQuantity = (id) => {
    const items = [...productsInCart];
    const item = items.find((p) => p.id == id);
    if (item.quantity == 1) {
      const index = items.indexOf(item);
      items.splice(index, 1);
      setProductsInCart(items);
    } else {
      item.quantity -= 1;
      setProductsInCart(items);
    }
  };

  const incrementProductQuantity = (id) => {
    const item = [...productsInCart].find((p) => p.id == id);
    item.quantity += 1;
    setProductsInCart([...productsInCart]);
  };

  return (
    <main className="mainContainer">
      <AppBar />
      <div className="productContainer">
        <ProductsList products={products} onAddItemtoCart={onAddItemtoCart} />
        <Cart
          products={productsInCart}
          decrementProductQuantity={decrementProductQuantity}
          incrementProductQuantity={incrementProductQuantity}
        />
      </div>
    </main>
  );
}

export default App;
