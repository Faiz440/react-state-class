import { useState } from "react";

export default function Additms() {

  const [product ,setProducts] = useState();
  fetch("https://dummyjson.com/products/1", {
    method: "PUT" /* or PATCH */,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "iPhone Galaxy +1",
    }),
  })
    .then((res) => res.json())
    .then(console.log);

  return (
    <>
      <h1>data show</h1>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Price</th>
            <th>title</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {product.map((products) => (
            <tr key={products.id}>
            <td>
            <td>{products.title}</td>

            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
