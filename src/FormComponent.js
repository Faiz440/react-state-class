import { useState } from 'react';
import './fpormComponent.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    file: null,
    title: '',
    description: '',
    price: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.title) {
      formErrors.title = "Title is required";
    }

    if (!formData.description) {
      formErrors.description = "Description is required";
    }

    if (!formData.price) {
      formErrors.price = "Price is required";
    } else if (isNaN(formData.price)) {
      formErrors.price = "Price must be a number";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully');
      console.log(formData);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add New Items</h2>

        <input type="file" onChange={handleFileChange} />
        {errors.file && <span className="error">{errors.file}</span>}

        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={errors.title ? 'error-input' : ''}
        />
        {errors.title && <span className="error">{errors.title}</span>}

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={errors.description ? 'error-input' : ''}
        />
        {errors.description && <span className="error">{errors.description}</span>}

        <label>Price</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className={errors.price ? 'error-input' : ''}
        />
        {errors.price && <span className="error">{errors.price}</span>}

        <div className="button-group">
          <button type="button" className="btn-cancel">Cancel items</button>
          <button type="submit" className="btn-add">Add items</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
