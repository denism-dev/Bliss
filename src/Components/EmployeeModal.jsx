import React, { useState } from 'react';

const EmployeeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [employee, setEmployee] = useState({ name: '', email: '', position: '' });
  const [page, setPage] = useState(1);

  const toggleModal = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Added:', employee);
    setIsOpen(false);
  };

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  return (
    <div className="p-6">
      <button onClick={toggleModal} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Add New Employee
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-2xl w-96">
            <h2 className="text-2xl font-bold mb-4">New Employee</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {page === 1 && (
                <>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full p-2 border rounded"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full p-2 border rounded"
                    onChange={handleChange}
                    required
                  />
                </>
              )}

              {page === 2 && (
                <>
                  <input
                    type="text"
                    name="position"
                    placeholder="Position"
                    className="w-full p-2 border rounded"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    className="w-full p-2 border rounded"
                    onChange={handleChange}
                  />
                </>
              )}

              <div className="flex justify-between mt-4">
                {page > 1 && (
                  <button type="button" onClick={prevPage} className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500">
                    Previous
                  </button>
                )}
                {page < 2 ? (
                  <button type="button" onClick={nextPage} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Next
                  </button>
                ) : (
                  <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                    Add Employee
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeModal;
