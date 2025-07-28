// components/EnrollModal.jsx
import { X } from "lucide-react";
import Logo from "../../src/assets/logo.png"

const EnrollModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center min-h-screen px-4">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal content */}
        <div className="text-center">
          <img
            src={Logo}
            alt="Logo"
            className="mx-auto h-16 mb-4"
          />
          <h2 className="text-2xl font-semibold text-[#032c40] mb-2">
            Login or Signup
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Enter your phone number and we’ll send you an OTP.
          </p>

          {/* Input */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <span className="text-gray-600 mr-2">+91</span>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="bg-transparent w-full outline-none text-sm"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
            />
          </div>

          {/* CTA Button */}
          <button className="mt-6 w-full py-2 rounded-lg bg-[#032c40] text-white hover:bg-white hover:text-[#032c40] border border-[#032c40] transition-all duration-300 font-medium">
            Get OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnrollModal;
