import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Caret() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/1")
      .then((res) => {
        console.log(res.data);
        setData(res.data.products);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div className="container">
      <h2>api call</h2>
      <Link to="/create" className="btn-btn-success my-3">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? ( // Check if data is populated before rendering
            data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.title}</td>
                <td>{d.price}</td>
                <td>
                  <button
                    className="text-decortion-none btn btn-sm btn-success"
                    to={`/update/${d.id}`}
                  >
                    Update
                  </button>
                  <Link
                    className="text-decortion-none btn btn-sm btn-danger mx-1"
                    to={`/read/${d.id}`}
                  >
                    read
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            // Render a loading message or placeholder if data is not yet available
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Caret;
