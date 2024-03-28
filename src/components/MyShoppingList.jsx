import React from "react";
import { ShoppingForm } from "./ShoppingForm";
import { ShoppingList } from "./ShoppingList";

export const MyShoppingList = ({
  products,
  addProduct,
  editProduct,
  removeProduct,
}) => {
  return (
    <div>
      <header className="p-4 bg-custom display-6 border-bottom shadow text-light">
        My shoppinglist
      </header>
      <ShoppingForm addProduct={addProduct} />
      <ShoppingList
        products={products}
        editProduct={editProduct}
        removeProduct={removeProduct}
      />
    </div>
  );
};
