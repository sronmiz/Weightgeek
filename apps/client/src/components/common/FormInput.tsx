import React from "react";

interface IFormInput extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  isInvalid?: boolean;
  errorMessage?: boolean;
}

export const FormInput: React.FC<IFormInput> = (props) => {
  const { icon, isInvalid, errorMessage, ...inputProps } = props;

  return (
    <div className="flex w-full h-[50px] flex-col">
      <div className="flex">
        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center text-gray-900">
          {icon}
        </div>
        <input
          className={`p-3 pl-10 -ml-10 border border-gray-300 rounded text-base w-full transition-colors duration-1000 text-gray-900 focus:(text-gray-900 custom-ring) ${
            isInvalid && `custom-ring ring-red-400`
          }`}
          {...inputProps}
        />
      </div>
      {isInvalid && (
        <div className="relative bottom-[20px] text-right font-light pr-2 pb-2 text-xs text-red-400 font-semibold">
          {errorMessage}
        </div>
      )}
    </div>
  );
};