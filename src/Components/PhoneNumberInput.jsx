import { useState, useRef, useEffect } from "react";

// Country codes list
const countryCodes = [
  { code: "+1", country: "United States", flag: "🇺🇸" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+971", country: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
];

const PhoneNumberInput = ({ formData = { phone: "" }, setFormData = () => {}, errors = {}, setErrors = () => {} }) => {
  const [selectedCode, setSelectedCode] = useState(countryCodes[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePhoneChange = (e) => {
    let value = e.target.value;

    // Remove non-numeric characters (except "+", "(", ")", and "-")
    value = value.replace(/[^\d\s\-\(\)\+]/g, "");

    setFormData((prev) => ({ ...prev, phone: value }));

    if (!value || value.replace(/\D/g, "").length < 7) {
      setErrors((prev) => ({ ...prev, phone: "Please enter at least 7 digits." }));
    } else {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handleCountryChange = (country) => {
    setSelectedCode(country);
    setDropdownOpen(false);
    setSearchQuery("");
  };

  return (
    <div className="relative w-full">
      <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm md:text-base">
        Phone Number *
      </label>
      <div className="flex space-x-2 w-full">
        {/* Country Code Selector (Dropdown) */}
        <div className="relative w-1/3 md:w-1/4" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 
              focus:ring-2 focus:ring-blue-400 flex items-center justify-between text-sm md:text-base"
          >
            <span className="flex items-center">
              <span className="mr-2">{selectedCode.flag}</span>
              <span>{selectedCode.code}</span>
            </span>
            <span>▼</span>
          </button>

          {/* Dropdown Options */}
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-full bg-white dark:bg-gray-800 border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
              <input
                type="text"
                placeholder="Search country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border-b dark:bg-gray-900 dark:text-white text-sm md:text-base"
              />
              <ul className="py-2 text-sm md:text-base">
                {countryCodes
                  .filter((country) =>
                    country.country.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((country) => (
                    <li
                      key={country.code}
                      onClick={() => handleCountryChange(country)}
                      className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center"
                    >
                      <span className="mr-2">{country.flag}</span>
                      <span>{country.country} ({country.code})</span>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>

        {/* Phone Number Input */}
        <input
          type="tel"
          name="phone"
          value={formData.phone || ""}
          onChange={handlePhoneChange}
          required
          placeholder="123 456 7890"
          pattern="^\+?[0-9\s\-\(\)]+$"
          title="Please enter a valid phone number."
          className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 
            focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
        />
      </div>

      {/* Error Message */}
      {errors.phone && <span className="text-red-500 text-sm mt-1 block">{errors.phone}</span>}
    </div>
  );
};

export default PhoneNumberInput;
