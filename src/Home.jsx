import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { MetroSpinner } from "react-spinners-kit";
// import Search from "./search";
function Home() {
  const [datas, setData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);
  //serach parts
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const fetchData = async () => {
    try {
      setTimeout(async () => {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        console.log("Fetched data:", result);
        setData(result.products);
        setDataFetched(true);
        setLoading(false);
      }, 3000);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onSerarch = async (searchTerm) => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/search?q=phone"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      console.log("Fetched data:", result);
      setData(result.products);
      setDataFetched(true);
    } catch (e) {
      console.log(e);
    }
    console.log("Search all", searchTerm);
  };
  // to close a serachbar

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://dummyjson.com/posts/1${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete data");
      }

      const result = await response.json();
      console.log("Deleted data:", result);
      setData(datas.filter((data) => data.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div style={{ display: "flex", gap: "20px" }}>
          <Link
            to="/Create"
            className="btn btn-success my-3"
            style={{
              backgroundColor: "blue",
              color: "white",
              borderRadius: "5px",
              padding: "15px 15px",
              textDecoration: "none",
              marginRight: "500px",
            }}
          >
            Add to cart
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <input
              type="text"
              value={value}
              id="search"
              placeholder="Search items..."
              style={{
                padding: "15px",
                width: "200px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              onChange={onChange}
            />
            <button
              type="button"
              id="search-btn"
              style={{
                padding: "12px",
                width: "150px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "#891652",
                cursor: "pointer",
              }}
              onClick={() => onSerarch(value)}
              required
            >
              Search Items
            </button>
          </div>
        </div>

        {dataFetched ? (
          Array.isArray(datas) && datas.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th>Brand image</th>
                  <th>Title</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((d) => (
                  <tr key={d.id}>
                    <td>
                      <img
                        src={d.thumbnail}
                        alt={d.image}
                        style={{ height: 50, width: 50 }}
                      />
                    </td>
                    <td>{d.title}</td>
                    <td>{d.brand}</td>
                    <td>{d.price}</td>
                    <td>{d.rating}</td>
                    <td>
                      <Link
                        to={`/update/${d.id}`}
                        className="btn btn-success my-3"
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          borderRadius: "5px",
                          padding: "10px 20px",
                          textDecoration: "none",
                          marginRight: "10px",
                        }}
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(d.id)}
                        className="btn btn-success my-3"
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          borderRadius: "5px",
                          padding: "10px 20px",
                          textDecoration: "none",
                          marginRight: "10px",
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data available</p>
          )
        ) : (
          <div
            className="spinner"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <MetroSpinner size={70} color="#803D3B" loading={loading} />
            </div>
            <b
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Loading please wait...
            </b>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
