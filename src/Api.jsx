import { useEffect, useState } from "react";
// import {handleButtonClick} from "./Additms1";

function App() {
  const [products, setProducts] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    // name: "",
    brand: "",
    price: "",
    category: "",
  });
  // const [items, setItems] = useState(["title", "brand", "price"]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      console.log("Fetched data:", result);
      setProducts(result.products);
      setDataFetched(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const addNewProduct = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("Failed to add new product");
      }

      const addedProduct = await response.json();

      setProducts((prevProducts) => [...prevProducts, addedProduct]);
      setNewProduct({
        title: "",
        // name: "",
        brand: "",
        price: "",
        category: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>API Data Fetch</h1>
        <div>
          <input
            name="thumbnail"
            value={newProduct.image}
            onChange={handleInputChange}
            placeholder="Image"
          />
          <input
            type="text"
            name="title"
            value={newProduct.title}
            onChange={handleInputChange}
            placeholder="name"
          />
          <input
            type="text"
            name="brand"
            value={newProduct.brand}
            onChange={handleInputChange}
            placeholder="Brand"
          />
          <input
            type="text"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            placeholder="Price"
          />
          <input
            type="text"
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            placeholder="category"
          />
          <button onClick={addNewProduct}>Add New Item</button>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Brand Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action button</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.thumbnail}
                    alt={product.image}
                    style={{ height: 50, width: 50 }}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td> 
                    {/* <button onClick={handleButtonClick}>Click me</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
