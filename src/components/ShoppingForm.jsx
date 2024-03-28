import React, { useState, useRef, useEffect } from "react";

export const ShoppingForm = ({ addProduct }) => {
  const [productName, setProductName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (productName.trim() === "") {
      return setErrorMessage(
        "Hey! You cant shop nothing. Add an item to your list!"
      );
    }

    setErrorMessage("");

    addProduct(productName);
    setProductName("");
    inputRef.current.focus();
  };

  return (
    <div className="mt-5 container">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="input-group mb-3">
            <input
              ref={inputRef}
              name="requiredField"
              type="text"
              className="form-control"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter item to your shoppinglist..."
            />
            <button className=" fw-bold btn btn-outline-primary">Add</button>
          </div>
          {errorMessage && !productName.length && (
            <p className="error text-danger"> {errorMessage} </p>
          )}
        </div>
      </form>
    </div>
  );
};
