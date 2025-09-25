import type { JSX } from "react";

interface ICommonInputProps {
  type: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommonInput = ({ props }: { props: ICommonInputProps }): JSX.Element => {
  const { type, className, placeholder, value, onChange } = props;

  return (
    <input
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};

export default CommonInput;
