import React from "react";

const StepTwo = ({ formData, handleChange, prevStep, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-full max-w-lg sm:max-w-xl bg-transparent p-4 sm:p-6 rounded-lg"
    >
      <div>
        <label className="block mb-2 text-lg font-semibold">Contact Number</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Enter contact no"
          className="w-full p-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>

      <div>
        <label className="block mb-2 text-lg font-semibold">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your college email"
          className="w-full p-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          pattern="^[a-zA-Z0-9._%+-]+@akgec\.ac\.in$"
          title="Use your AKGEC email (e.g. name@akgec.ac.in)"
          required
        />
       </div>

       <div>
         <p className="font-semibold text-lg mb-2">Residency Status</p>
         <div className="flex gap-8 flex-wrap">
          <label><input type="radio" name="residency" value="Hosteler" onChange={handleChange}/> Hosteler</label>
           <label><input type="radio" name="residency" value="Day Scholar" onChange={handleChange}/> Day Scholar</label>
         </div>
       </div>

       <div className="flex justify-between mt-6">         <button type="button" onClick={prevStep} className="bg-gray-200 text-black py-2 px-6 rounded-lg font-semibold hover:bg-gray-300">
           Back
         </button>
         <button type="submit" className="bg-cyan-400 text-black py-2 px-6 rounded-lg font-semibold hover:bg-cyan-500">
           Submit
         </button>
       </div>
     </form>
   );
 };

 export default StepTwo; 


         


          
