// // import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    price: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/" + id) 
      .then((res) => {
        console.log("Fetched Data:", res.data); 
        setInputData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]); 

  const handleSubmit = (event) => {
    event.preventDefault(); 
    axios.put("https://dummyjson.com/posts/1" + id, inputData)
      .then(() => {
        console.log("Data sent:", inputData); 
        alert("Data updated successfully");
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-itmes-center">
      <div className="w-50 border bg-secondary text-while p-5">
        <form
          style={{
            border: "1px solid #ccc",
            padding: "203px",
            borderRadius: "5px",
            maxWidth: "500px",
          }}
        >
          <div style={{ marginBottom: "40px" }}>
            <label
              htmlFor="title"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter title"
              value={inputData.title}
              onChange={(e) =>
                setInputData({ ...inputData, title: e.target.value })
              }
              style={{
                width: "100%",
                height: "40px",
                padding: "5px",
                borderRadius: "3px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "40px" }}>
            <label
              htmlFor="description"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Enter description"
              value={inputData.description}
              onChange={(e) =>
                setInputData({ ...inputData, description: e.target.value })
              }
              style={{
                width: "100%",
                height: "40px",
                padding: "5px",
                borderRadius: "3px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "40px" }}>
            <label
              htmlFor="price"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              className="form-control"
              placeholder="Enter price"
              value={inputData.price}
              onChange={(e) =>
                setInputData({ ...inputData, price: e.target.value })
              }
              style={{
                width: "100%",
                height: "40px",
                padding: "5px",
                borderRadius: "3px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            className="btn btn-info"
            style={{
              width: "100%",
              height: "40px",
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "3px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleSubmit}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
