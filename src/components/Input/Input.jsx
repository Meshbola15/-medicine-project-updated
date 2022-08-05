import React from "react";

const Input = ({ placeholder, value, onChange, label }) => {
  return (
    <div>
      <label className="text-bas pl-4 pb-2 capitalize font-[poppins]">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded-full outline-none w-full border-neutral-200 bg-gray-100  font-[poppins] lowercase text-base text-gray-500 px-4 py-2 border shadow-md focus:shadow-lg"
      />
    </div>
  );
};

export default Input;
