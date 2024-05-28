import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [inputData, setInputData] = useState({
    file: null,
    title: "",
    description: "",
    price: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessages, setSuccessMessages] = useState({});
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
    setSuccessMessages({
      ...successMessages,
      [name]: "",
    });
    setSuccessMessage("");
  };

  const validate = () => {
    let formErrors = {};
    let formSuccess = {};

    if (!inputData.title) {
      formErrors.title = "*Title is required";
    } else {
      formSuccess.title = "Title looks good!";
    }

    if (!inputData.description) {
      formErrors.description = "*Description is required";
    } else {
      formSuccess.description = "Description looks good!";
    }

    if (!inputData.price) {
      formErrors.price = "*Price is required";
    } else if (isNaN(inputData.price)) {
      formErrors.price = "*Price must be a number";
    } else {
      formSuccess.price = "Price looks good!";
    }

    setErrors(formErrors);
    setSuccessMessages(formSuccess);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      axios.post("https://dummyjson.com/products/add", inputData).then(() => {
        setSuccessMessages({
          title: "Title looks good!",
          description: "Description looks good!",
          price: "Price looks good!",
        });
        setSuccessMessage("Data posted successfully");
        setInputData({ title: "", description: "", price: "" });
        setErrors({});
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      });
    }
  };
  // const user = null;
  return (
    <div>
      {/* <h3>your name is {user?.name || "vs"}</h3>
      <h3>your age is {user?.age || "dsvs"}</h3> */}
      <div style={{ color: "#F8F4E1" }}>
        <Link
          to="/home"
          className="btn btn-success my-3"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
            padding: "10px 20px",
            textDecoration: "none",
          }}
        >
        Go To Home
        </Link>
      </div>
      <div
        className="d-flex w-100 vh-100 justify-content-center align-items-center box-border h-32 w-32 p-4"
        style={{ backgroundColor: "black" }}
      >
        <div
          className="w-50 border bg-secondary text-white p-5"
          style={{ backgroundColor: "#F8F4E1" }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              border: "3px solid black",
              padding: "30px",
              marginTop: "10px",
              maxWidth: "500px",
            }}
          >
            <h2>Add New items</h2>
            {successMessage && (
              <div
                style={{
                  color: "green",
                  marginBottom: "20px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                {successMessage}
              </div>
            )}
            <div>
              <input type="file" accept="image/*" />
            </div>
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
                onChange={handleChange}
                value={inputData.title}
                style={{
                  width: "100%",
                  height: "40px",
                  padding: "5px",
                  borderRadius: "3px",
                  border: "3px solid #ccc",
                  boxSizing: "border-box",
                }}
              />
              {errors.title && (
                <span className="error" style={{ color: "red" }}>
                  {errors.title}
                </span>
              )}
              {successMessages.title && !errors.title && (
                <span className="success" style={{ color: "green" }}>
                  {successMessages.title}
                </span>
              )}
            </div>
            <div style={{ marginBottom: "40px" }}>
              <label
                htmlFor="description"
                style={{ display: "block", marginBottom: "5px" }}
              >
                Description
              </label>
              <textarea
                name="description"
                className="form-control"
                onChange={handleChange}
                value={inputData.description}
                style={{
                  width: "100%",
                  height: "80px",
                  padding: "5px",
                  borderRadius: "3px",
                  border: "3px solid #ccc",
                  boxSizing: "border-box",
                }}
              />
              {errors.description && (
                <span className="error" style={{ color: "red" }}>
                  {errors.description}
                </span>
              )}
              {successMessages.description && !errors.description && (
                <span className="success" style={{ color: "green" }}>
                  {successMessages.description}
                </span>
              )}
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
                onChange={handleChange}
                value={inputData.price}
                style={{
                  width: "100%",
                  height: "40px",
                  padding: "5px",
                  borderRadius: "3px",
                  border: "3px solid #ccc",
                  boxSizing: "border-box",
                }}
              />
              {errors.price && (
                <span className="error" style={{ color: "red" }}>
                  {errors.price}
                </span>
              )}
              {successMessages.price && !errors.price && (
                <span className="success" style={{ color: "green" }}>
                  {successMessages.price}
                </span>
              )}
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <button
                type="reset"
                className="btn btn-reset"
                style={{
                  flex: "1",
                  height: "55px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  borderRadius: "3px",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setInputData({ title: "", description: "", price: "" });
                  setErrors({});
                  setSuccessMessages({});
                }}
              >
                Cancel items
              </button>
              <button
                type="submit"
                className="btn btn-success"
                style={{
                  flex: "1",
                  height: "55px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  borderRadius: "3px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Add items
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
