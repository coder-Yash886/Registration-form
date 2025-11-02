import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import SuccessPage from "./components/SuccessPage";
import Background from "./components/Background";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    studentNo: "",
    gender: "",
    branch: "",
    domain: "",
    contact: "",
    email: "",
    residency: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden text-white flex flex-col items-center justify-between">
      
      <Background />

    
      <div className="w-full flex-shrink-0">
        <Header />
      </div>

  
      <main className="flex-grow flex items-center justify-center w-full px-4 sm:px-6 md:px-10 z-10">
        {step === 1 && (
          <StepOne
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <StepTwo
            formData={formData}
            handleChange={handleChange}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        )}
        {step === 3 && <SuccessPage />}
      </main>

    
      <div className="w-full flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;
