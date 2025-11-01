// import React from "react";
// import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

// const SuccessPage = () => {
//   return (
//     <div className="flex flex-col items-center justify-center text-center mt-20 px-4">
//       <h1 className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-6">
//         Registered Successfully
//       </h1>

//       <p className="text-lg mb-4 text-white">Connect with us</p>

//       <ul className="space-y-4 text-base sm:text-lg text-white">
//         <li className="flex items-center justify-center gap-2">
//           <FaInstagram className="text-pink-500 text-2xl" />
//           <a
//             href="https://www.instagram.com/team__oss?igsh=MTlhMmExbGM4MmVjMg=="
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:underline hover:text-pink-400 transition duration-200"
//           >
//             @team__oss (Instagram)
//           </a>
//         </li>

//         <li className="flex items-center justify-center gap-2">
//           <FaTwitter className="text-sky-400 text-2xl" />
//           <a
//             href="https://twitter.com/acm_akgec"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:underline hover:text-sky-300 transition duration-200"
//           >
//             @acm_akgec (Twitter)
//           </a>
//         </li>

//         <li className="flex items-center justify-center gap-2">
//           <FaLinkedin className="text-blue-600 text-2xl" />
//           <a
//             href="https://www.linkedin.com/company/team-oss/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:underline hover:text-blue-400 transition duration-200"
//           >
//             Team OSS (LinkedIn)
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default SuccessPage;

import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-20 px-4">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-6">
        Registered Successfully
      </h1>

      <p className="text-lg mb-4 text-white">Connect with us</p>

      <ul className="space-y-4 text-base sm:text-lg text-white">
        <li className="flex items-center justify-center gap-2">
          <FaInstagram className="text-pink-500 text-2xl" />
          <a
            href="https://www.instagram.com/team__oss?igsh=MTlhMmExbGM4MmVjMg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-pink-400 transition duration-200"
          >
            @team__oss (Instagram)
          </a>
        </li>

        <li className="flex items-center justify-center gap-2">
          <FaTwitter className="text-sky-400 text-2xl" />
          <a
            href="https://twitter.com/acm_akgec"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-sky-300 transition duration-200"
          >
            @acm_akgec (Twitter)
          </a>
        </li>

        <li className="flex items-center justify-center gap-2">
          <FaLinkedin className="text-blue-600 text-2xl" />
          <a
            href="https://www.linkedin.com/company/team-oss/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-400 transition duration-200"
          >
            Team OSS (LinkedIn)
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SuccessPage;

