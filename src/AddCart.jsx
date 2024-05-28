import { useState } from "react";

function AddCart() {
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          brand: brand,
          price: price,
          category: category,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add item");
      }

      console.log("Item added successfully!");
      
      // Clear input fields after successfully adding item
      setTitle("");
      setBrand("");
      setPrice("");
      setCategory("");
    } catch (error) {
      console.error("Error adding item:", error.message);
    }
  };

  return (
    <div>
      <h1>Add New Item</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Brand:
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddCart;
