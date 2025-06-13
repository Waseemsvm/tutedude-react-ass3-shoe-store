import { useEffect, useState } from "react";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import AppBar from "./components/AppBar";
import "./styles/styles.css";

const productslist = [
  {
    id: "item1",
    name: "Blue Classic Sneakers",
    price: "50",
    image: "/pic1",
    quantity: 0,
  },
  {
    id: "item2",
    name: "Brown Sneakers",
    price: "150",
    image: "/pic2",
    quantity: 0,
  },
  {
    id: "item3",
    name: "White Nike Shoes",
    price: "75",
    image: "/pic3",
    quantity: 0,
  },
  {
    id: "item4",
    name: "Yello White shoes",
    price: "20",
    image: "/pic4",
    quantity: 0,
  },
  {
    id: "item5",
    name: "Fancy Shoes",
    price: "100",
    image: "/pic5",
    quantity: 0,
  },
  {
    id: "item6",
    name: "Brown Shoes",
    price: "40",
    image: "/pic6",
    quantity: 0,
  },
  {
    id: "item7",
    name: "Brown Sandals",
    price: "30",
    image: "/pic7",
    quantity: 0,
  },
  {
    id: "item8",
    name: "Red Shoes",
    price: "80",
    image: "/pic8",
    quantity: 0,
  },
  {
    id: "item9",
    name: "Brown Boots",
    price: "85",
    image: "/pic9",
    quantity: 0,
  },
  {
    id: "item10",
    name: "Blue Shoes",
    price: "150",
    image: "/pic10",
    quantity: 0,
  },
  {
    id: "item11",
    name: "White Shoes",
    price: "10",
    image: "/pic11",
    quantity: 0,
  },
];

function App() {
  const [products, setProducts] = useState(productslist);
  const [productsInCart, setProductsInCart] = useState([]);

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
