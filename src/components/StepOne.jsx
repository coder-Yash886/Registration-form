import React from "react";

const StepOne = ({ formData, handleChange, nextStep }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        nextStep();
      }}
      className="flex flex-col gap-5 w-full max-w-lg sm:max-w-xl bg-transparent p-4 sm:p-6 rounded-lg"
    >
      <div>
        <label className="block mb-2 text-lg font-semibold">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full p-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>

      <div>
        <label className="block mb-2 text-lg font-semibold">Student No</label>
        <input
          type="text"
          name="studentNo"
          value={formData.studentNo}
          onChange={handleChange}
          placeholder="Enter your student no"
          className="w-full p-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>

      <div>
        <p className="font-semibold text-lg mb-2">Gender</p>
        <div className="flex gap-8 flex-wrap">
          <label><input type="radio" name="gender" value="Male" onChange={handleChange}/> Male</label>
          <label><input type="radio" name="gender" value="Female" onChange={handleChange}/> Female</label>
        </div>
      </div>

      <div>
        <label className="block mb-2 text-lg font-semibold">Branch</label>
        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <option value="">Select Branch</option>
          {["CSE","IT","ECE","CSIT","CS","CSE DS","CSE AIML","AIML","CS HINDI","EEE","ME","CE"].map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-2 text-lg font-semibold">Domain</label>
        <select
          name="domain"
          value={formData.domain}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <option value="">Select Domain</option>
          <option value="Web Dev">Web Dev</option>
          <option value="AI/ML">AI/ML</option>
          <option value="Cyber Security">Cyber Security</option>
        </select>
      </div>

      <button type="submit" className="mt-6 bg-gray-200 text-black py-2 px-6 rounded-lg font-semibold hover:bg-gray-300">
        Next
      </button>
    </form>
  );
};

export default StepOne;
