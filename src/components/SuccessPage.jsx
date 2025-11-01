import React from "react";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-20 px-4">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-6">
        Registered Successfully
      </h1>
      <p className="text-lg mb-4">Connect with us</p>
      <ul className="space-y-3 text-base sm:text-lg">
        <li>📸 @acm_akgec (Instagram)</li>
        <li>🐦 @acm_akgec (Twitter)</li>
        <li>💼 ACM AKGEC (LinkedIn)</li>
      </ul>
    </div>
  );
};

export default SuccessPage;

