import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MyShoppingList } from "./components/MyShoppingList";

function App() {
  const [products, setProducts] = useState([
    { id: "12fad45", product: "Coffee", completed: false },
    { id: "12nj25", product: "Bananas", completed: false },
  ]);

  const addProduct = (productName) => {
    setProducts((oldProducts) => {
      return [
        ...oldProducts,
        { id: Date.now().toString(), product: productName },
      ];
    });
  };

  const removeProduct = (id) => {
    setProducts((oldProducts) => {
      return oldProducts.filter((products) => products.id !== id);
    });
  };

  const editProduct = (productName, newProductName) => {
    setProducts((oldProducts) => {
      return oldProducts.map((product) => {
        if (product.product === productName) {
          return { ...product, product: newProductName };
        }
        return product;
      });
    });
  };

  return (
    <div className="App">
      <Navbar />
      <MyShoppingList
        products={products}
        addProduct={addProduct}
        editProduct={editProduct}
        removeProduct={removeProduct}
      />
    </div>
  );
}

export default App;
