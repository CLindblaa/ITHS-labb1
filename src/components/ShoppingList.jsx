import React from "react";
import { ListItem } from "./ListItem";

export const ShoppingList = ({
  products,
  addProduct,
  removeProduct,
  editProduct,
}) => {
  return (
    <div className="pb-4 mt-5 container bg-light border rounded shadow">
      <h4 className="fw-light m-4">You need to buy:</h4>
      <div className="list-group">
        {products.map((product) => (
          <ListItem
            product={product}
            key={product.id}
            addProduct={addProduct}
            removeProduct={removeProduct}
            editProduct={editProduct}
          />
        ))}
        {!products.length && (
          <h3>You haven't add something to your shoppinglist</h3>
        )}
      </div>
    </div>
  );
};
