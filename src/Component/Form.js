// import React, { useState } from "react";

// function Form() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     gender: "",
//     country: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validate = () => {
//     let tempErrors = {};

//     if (!formData.name) tempErrors.name = "Name is required";
//     if (!formData.email) tempErrors.email = "Email is required";
//     if (!formData.gender) tempErrors.gender = "Gender is required";
//     if (!formData.country) tempErrors.country = "Country is required";

//     setErrors(tempErrors);

//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validate()) {
//       console.log("Form submitted successfully", formData);
//     }
//   };

//   return (
//     <div className="container mx-auto mt-10 w-1/2 p-10 text-white">
//       <h2 className="text-2xl mb-5 font-bold text-green-900">FORM</h2>
//       <form
//         onSubmit={handleSubmit}
//         className="bg-teal-700 p-6 rounded-lg shadow-lg"
//       >
//         <div className="mb-4">
//           <label className="block mb-2">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//           {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm">{errors.email}</p>
//           )}
//         </div>

//         <div className="mb-4">
//           <span className="block mb-2">Gender</span>
//           <label className="inline-flex items-center mr-4">
//             <input
//               type="radio"
//               name="gender"
//               value="male"
//               onChange={handleChange}
//               className="form-radio"
//             />
//             <span className="ml-2">Male</span>
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               name="gender"
//               value="female"
//               onChange={handleChange}
//               className="form-radio"
//             />
//             <span className="ml-2">Female</span>
//           </label>
//           {errors.gender && (
//             <p className="text-red-500 text-sm">{errors.gender}</p>
//           )}
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2">Country</label>
//           <select
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           >
//             <option value="" label="Select country" />
//             <option value="USA" label="USA" />
//             <option value="Canada" label="Canada" />
//             <option value="UK" label="UK" />
//           </select>
//           {errors.country && (
//             <p className="text-red-500 text-sm">{errors.country}</p>
//           )}
//         </div>

//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Form;

import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Form submitted with data:", formData);
  };

  return (
    <div>
      <h2>Basic React Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <br />
          <input
            className="bg-gray-200"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <br />
          <input
            className="bg-gray-200"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            className="bg-gray-200"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="mt-5 bg-green-600 rounded-xl text-white px-5 py-3"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
