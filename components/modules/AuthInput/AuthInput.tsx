import { AuthInputProps } from '@/interfaces/AuthInput.interface'
import { Input } from '@nextui-org/react'
import React from 'react'

const AuthInput: React.FC<AuthInputProps> = ({
    placeholder,
    value,
    type = 'text', // Default type is 'text'
    className = '', // Default className is an empty string
    errorMessage,
    onChange,
  }) => {
    return (
      <>
        <Input
          variant="faded"
          placeholder={placeholder}
          className={`font-peyda ${className}`} // Combine className with default class
          type={type}
          value={value} // Controlled input
          onChange={onChange} // Handle input changes
          id="authInputs"
        />
        {errorMessage && <span className="text-red-500">{errorMessage}</span>} {/* Display error message if present */}
      </>
    );
  };

export default AuthInput