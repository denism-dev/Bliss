import React, { useState } from 'react';

const DigitalProductForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    category: '',
    price: '',
    licenseType: 'Personal',
    deliveryMethod: 'instant',
    downloadLimit: 5,
    expiryDays: '',
    sellerName: '',
    sellerEmail: '',
    paymentMethods: [],
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto mt-1.5 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Upload Digital Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Product Name */}
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        
        {/* Description */}
        <textarea
          name="description"
          placeholder="Product Description"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        ></textarea>
        
        {/* Category */}
        <select
          name="category"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="E-books">E-books</option>
          <option value="Software">Software</option>
          <option value="Graphics">Graphics</option>
        </select>
        
        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price ($)"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        
        {/* License Type */}
        <select
          name="licenseType"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        >
          <option value="Personal">Personal</option>
          <option value="Commercial">Commercial</option>
          <option value="Extended">Extended</option>
        </select>
        
        {/* Delivery Method */}
        <div className="flex space-x-4">
          <label><input type="radio" name="deliveryMethod" value="instant" checked={formData.deliveryMethod === 'instant'} onChange={handleChange} /> Instant Download</label>
          <label><input type="radio" name="deliveryMethod" value="email" onChange={handleChange} /> Email Delivery</label>
        </div>
        
        {/* Download Limit */}
        <input
          type="number"
          name="downloadLimit"
          placeholder="Max Downloads"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        
        {/* Seller Name */}
        <input
          type="text"
          name="sellerName"
          placeholder="Seller Name"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        
        {/* Seller Email */}
        <input
          type="email"
          name="sellerEmail"
          placeholder="Seller Email"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        
        {/* Terms Agreement */}
        <label className="flex items-center space-x-2">
          <input type="checkbox" name="agreeTerms" onChange={handleChange} required />
          <span>I agree to the Terms & Conditions</span>
        </label>
        
        {/* Submit Button */}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
};

export default DigitalProductForm;
