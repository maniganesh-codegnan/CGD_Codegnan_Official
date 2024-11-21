import { useState } from "react";
import "./form.css";
import axios from "axios";

const FormComponent = () => {
  // State to manage form data
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  // Handles input changes and updates state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submission logic
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents default form behavior
    console.log("Student Form Data: ", formData);

    if (validateForm()) {
      setIsLoading(true); // Start loading
      try {
        // Sending data to the server
        const response = await axios.post(
          // "https://codegnan.amoga.io/api/v2/core/service/apt/trigger/website-9ht4s4",
          // "http://localhost:5001/storedata",
          "http://127.0.0.1:5000/studentdata",

          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("response", response);

        if (response.status === 200) {
          alert("Data stored successfully!");
          console.log("Response Data:", response.data);
        } else {
          console.log("Unexpected response:", response.status, response.data);
          alert("Unexpected server response. Please try again.");
        }
        // Reset the form fields after successful submission
        setFormData({
          name: "",
          email: "",
          mobile: "",
        });
      } catch (error) {
        console.error(
          "Error storing data:",
          error.response?.data || error.message
        );
        alert("Failed to store data. Please try again later.");
      } finally {
        setIsLoading(false); // End loading
      }
    } else {
      alert("Please fill in all required fields.");
    }
  };

  // Validation logic to ensure all fields are filled
  const validateForm = () => {
    const { name, email, mobile } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!name.trim()) {
      alert("Please enter your full name.");
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
    } else if (!mobileRegex.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
    }

    return (
      name.trim() &&
      email.trim() &&
      mobile.trim() &&
      emailRegex.test(email) &&
      mobileRegex.test(mobile)
    );
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <input
          type="text"
          placeholder="Full Name *"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email *"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          placeholder="Phone No *"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>
      <center>
        {/* <button className="explore-button" type="submit">
          Submit
        </button> */}
        <button className="explore-button" type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </center>
    </form>
  );
};
export default FormComponent;

///==========================================================================================================================//
//// "https://codegnan.amoga.io/api/v2/core/service/apt/trigger/website-9ht4s4",
// import { useState } from "react";
// import "./form.css";
// import axios from "axios";

// const FormComponent = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     // userType: "student",
//     // availability: "morning",
//     // course: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     alert("Form Data added");
//     console.log("Student Form Data : ", formData);
//     if (validateForm()) {
//       try {
//         const response = await axios.post(
//           "https://codegnan.amoga.io/api/v2/core/service/apt/trigger/website-9ht4s4",
//           // "http://localhost:5000/storedata",
//           // "https://jsonplaceholder.typicode.com/users", //
//           formData
//         );
//         alert("Data stored successfully");
//         console.log("Server Response:", response);

//         // Clear the form after successful submission
//         setFormData({
//           name: "",
//           email: "",
//           mobile: "",
//           // userType: "student",
//           // availability: "morning",
//           // course: "",
//         });
//       } catch (error) {
//         console.error("Error storing data:", error);
//         alert("Failed to store data. Please try again.");
//       }
//     } else {
//       alert("Please fill in all required fields.");
//     }
//   };

//   const validateForm = () => {
//     const { name, email, mobile } = formData;
//     return name && email && mobile;
//     // const { fullname, email, phone, course } = formData;
//     // return fullname && email && phone && course;
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form-container">
//       <div className="form-group">
//         <input
//           type="text"
//           placeholder="Full Name *"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <input
//           type="email"
//           placeholder="Email *"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <input
//           type="tel"
//           placeholder="Phone No *"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       {/* <div className="form-group">
//         <select
//           name="userType"
//           value={formData.userType}
//           onChange={handleChange}
//         >
//           <option value="student">Student</option>
//           <option value="job seeker">Job Seeker</option>
//           <option value="working professional">Working Professional</option>
//           <option value="other">Other</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <select
//           name="availability"
//           value={formData.availability}
//           onChange={handleChange}
//         >
//           <option value="morning">Morning</option>
//           <option value="afternoon">Afternoon</option>
//           <option value="evening">Evening</option>
//           <option value="other">
//             I did like to have more details, before I decide.
//           </option>
//         </select>
//       </div> */}
//       {/* <div className="form-group">
//         <select
//           name="course"
//           value={formData.course}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Course</option>
//           <option value="c">C</option>
//           <option value="c++">C++</option>
//           <option value="java">Java</option>
//           <option value="java-full-stack">Java Full Stack</option>
//           <option value="python">Python</option>
//           <option value="python-full-stack">Python Full Stack</option>
//           <option value="machine-learning">Machine Learning</option>
//           <option value="data-science">Data Science</option>
//           <option value="react-js">React JS</option>
//           <option value="software-testing">Software Testing</option>
//           <option value="data-structures">Data Structures</option>
//         </select>
//       </div> */}
//       <center>
//         <button className="explore-button" type="submit">
//           Submit
//         </button>
//       </center>
//     </form>
//   );
// };
// export default FormComponent;

///////////////========================================================================================//

// import React, { useState } from "react";
// import "./form.css";
// import axios from "axios";

// const FormComponent = () => {
//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     phone: "",
//     userType: "student",
//     availability: "morning",
//     course: "", // Adding course field
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     alert("Form Data added");
//     console.log("Student Form Data : ", formData);
//     if (validateForm()) {
//       // Form is valid, clear the form data
//       setFormData({
//         fullname: "",
//         email: "",
//         phone: "",
//         userType: "student",
//         availability: "morning",
//         course: "", // Resetting course field
//       });
//       const response = await axios.post(
//         "http://localhost:5000/storedata",
//         formData
//       );
//       alert("Data stored sucessfully");
//     } else {
//       // Form is not valid, do something like showing an error message
//       console.log(
//         "Form submission failed. Please fill in all required fields."
//       );
//     }
//   };

//   const validateForm = () => {
//     // Check if required fields are filled out
//     return (
//       formData.fullname !== "" &&
//       formData.email !== "" &&
//       formData.phone !== "" &&
//       formData.course !== "" // Adding validation for course field
//     );
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form-container">
//       <div className="form-group">
//         <input
//           type="text"
//           placeholder="Full Name *"
//           name="fullname"
//           value={formData.fullname}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <input
//           type="email"
//           placeholder="Email *"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <input
//           type="tel"
//           placeholder="Phone No *"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <select
//           placeholder="User Type"
//           name="userType"
//           value={formData.userType}
//           onChange={handleChange}
//         >
//           <option value="student">Student</option>
//           <option value="job seeker">Job Seeker</option>
//           <option value="working professional">Working Professional</option>
//           <option value="other">Other</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <select
//           placeholder="Availability"
//           name="availability"
//           value={formData.availability}
//           onChange={handleChange}
//         >
//           <option value="morning">Morning</option>
//           <option value="afternoon">Afternoon</option>
//           <option value="evening">Evening</option>
//           <option value="other">
//             I'd like to have more details, before I decide.
//           </option>
//         </select>
//       </div>
//       <div className="form-group">
//         <select
//           placeholder="Course"
//           name="course"
//           value={formData.course}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Course</option>
//           <option value="c">C</option>
//           <option value="c++">C++</option>
//           <option value="java">Java</option>
//           <option value="java-full-stack">Java Full Stack</option>
//           <option value="python">Python</option>
//           <option value="python-full-stack">Python Full Stack</option>
//           <option value="machine-learning">Machine Learning</option>
//           <option value="data-science">Data Science</option>
//           <option value="react-js">React JS</option>
//           <option value="software-testing">Software Testing</option>
//           <option value="data-structures">Data Structures</option>
//         </select>
//       </div>
//       <center>
//         <button className="explore-button" type="submit">
//           Submit
//         </button>
//       </center>
//     </form>
//   );
// };

// export default FormComponent;
