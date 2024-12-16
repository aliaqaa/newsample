interface AuthInputProps {
  placeholder?: string;
  value?: string;
  type?: string; // Make type optional
  className?: string; // Make className optional
  errorMessage?: string; // Make errorMessage optional
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle changes
}
export  type {AuthInputProps}