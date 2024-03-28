import { useState } from "react";

export const ListItem = ({ product, removeProduct, editProduct }) => {
  const [isDone, setIsDone] = useState(false);
  const [editedProductName, setEditedProductName] = useState(product.product);

  const setStatus = () => {
    setIsDone((status) => !status);
  };

  const handleChange = (e) => {
    setEditedProductName(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    editProduct(editedProductName);
    setEditedProductName("");
  };

  return (
    <div className="py-1">
      <div
        className={`container py-2 px-4 d-flex input-group justify-content-between rounded ${
          isDone ? "list-group-item-success line-through" : ""
        }`}
      >
        <button
          className="btn-danger rounded px-3 py-2"
          onClick={() => removeProduct(product.id)}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <input
          type="text"
          name="product"
          className={`form-control ms-3 py-4 rounded ${
            isDone
              ? "list-group-item-success text-decoration-line-through border-light fs-5 fw-light"
              : "fw-bold fs-5"
          }`}
          value={editedProductName}
          onChange={handleChange}
          placeholder={product.product}
        />
        <button
          className="btn rounded px-3 mx-3 "
          onClick={submitHandle}
          type="submit"
        >
          <i class="fa-solid fa-pen"></i>
        </button>
        <button className="btn text-end rounded fs-6" onClick={setStatus}>
          {!isDone ? "Picked" : "Unpick"}
        </button>
      </div>
    </div>
  );
};
