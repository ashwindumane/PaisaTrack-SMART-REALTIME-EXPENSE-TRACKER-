import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, placeholder, label, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      {label && (
        <label className="block text-[13px] font-medium text-slate-700 mb-1">
          {label}
        </label>
      )}
      <div className="input-box flex items-center border rounded-lg px-3 py-2 bg-white focus-within:ring-2 ring-primary">
        <input
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-sm"
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={20}
                className="text-primary cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaRegEyeSlash
                size={20}
                className="text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
