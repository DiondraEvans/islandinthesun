// import React, { useState } from 'react';
// import './index.css';
// import Nav from '../../components/nav';

// function Contactform (){
//   const [formData, setFormData] = useState({
//     firstName:'', LastName:'', email:'', phone:'', message:''
//   })
// let handleSubmit=(e)=>{
//   e.preventDefault();
//   setFormData(e)
//   console.log('Form submitted:', formData);

// }
// let handleChange =(e)=>{
// // Destructure name and value from the target input element
// const { name, value } = e.target;
// // Update the state with the new value for the corresponding field
// setFormData({
//   ...formData,
//   [name]: value
// });
// }
// return(
//   <>
//   <Nav />
//   <form onSubmit = {handleSubmit}>
//     <div>
//       <label htmlFor="firstName">First Name:</label>
//       <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
//     </div>
//     <div>
//         <label htmlFor="lastName">Last Name:</label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="phone">Phone Number:</label>
//         <input
//           type="tel"
//           id="phone"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="message">Message:</label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button type="submit">Submit</button>
//   </form>
//   </>
// )
// }
// export default Contactform;