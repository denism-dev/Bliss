import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [filePreview, setFilePreview] = useState(null);

  const validateField = (name, value) => {
    let errorMessage = "";

    if (!value.trim() && name !== "file") {
      errorMessage = `${name} is required.`;
    } else if (name === "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      errorMessage = "Please enter a valid email address.";
    }

    return errorMessage;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];
    const maxSize = 5 * 1024 * 1024; // 5MB limit

    if (file) {
      if (!allowedTypes.includes(file.type)) {
        setErrors({ ...errors, file: "Only PNG, JPG, and PDF files are allowed." });
        setFormData({ ...formData, file: null });
        setFilePreview(null);
        return;
      }
      if (file.size > maxSize) {
        setErrors({ ...errors, file: "File size must be under 5MB." });
        setFormData({ ...formData, file: null });
        setFilePreview(null);
        return;
      }

      setFormData({ ...formData, file });
      setFilePreview(URL.createObjectURL(file)); // Generate file preview
      setErrors({ ...errors, file: "" }); // Clear any previous file errors
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};
    let hasErrors = false;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) hasErrors = true;
      newErrors[key] = error;
    });

    setErrors(newErrors);
    if (hasErrors) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", message: "", file: null });
      setFilePreview(null);
      setErrors({});
    }, 2000);
  };

  return (
    <div className="p-6 rounded-lg bg-gray-50 mb-3 dark:bg-gray-800 shadow-lg">
      {successMessage && (
        <div className="mb-4 p-3 text-green-700 bg-green-100 border border-green-400 rounded-lg">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-200">First Name *</label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              className={`mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none 
                ${errors.firstName ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}
                dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700`}
            />
            {errors.firstName && <span className="text-red-500 text-sm mt-1 block">{errors.firstName}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-200">Last Name *</label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              className={`mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none 
                ${errors.lastName ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}
                dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700`}
            />
            {errors.lastName && <span className="text-red-500 text-sm mt-1 block">{errors.lastName}</span>}
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-200">Email *</label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@example.com"
            value={formData.email}
            onChange={handleChange}
            className={`mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none 
              ${errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}
              dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700`}
          />
          {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>}
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-200">Message *</label>
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className={`mt-2 w-full h-32 px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none 
              ${errors.message ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}
              dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700`}
          />
          {errors.message && <span className="text-red-500 text-sm mt-1 block">{errors.message}</span>}
        </div>

        {/* File Upload */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-200">Attach a File (JPG, PNG, PDF) - Max 5MB</label>
          <input
            type="file"
            accept=".png, .jpg, .jpeg, .pdf"
            onChange={handleFileChange}
            className="mt-2 w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
          />
          {errors.file && <span className="text-red-500 text-sm mt-1 block">{errors.file}</span>}
          {filePreview && <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Selected File: {formData.file?.name}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full mt-6 py-3 px-6 text-white rounded-lg transition duration-300 shadow-md transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 
            ${isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-800 hover:bg-blue-700'}`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
