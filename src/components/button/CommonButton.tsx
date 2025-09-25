import type { ButtonHTMLAttributes, JSX, ReactNode } from "react";

interface ICommonButtonProps {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
  loadingClassName?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

const CommonButton = ({
  props,
  children,
}: {
  props: ICommonButtonProps;
  children: ReactNode;
}): JSX.Element => {
  const { type, className, loadingClassName, isDisabled, isLoading, onClick } =
    props;

  return (
    <div>
    <button
      className={className}
      disabled={isDisabled}
      onClick={onClick}
      type={type}
    >
      {isLoading ? (
        <span className={loadingClassName}>Loading...</span>
      ) : (
        children
      )}
    </button>
    </div>
  );
};

export default CommonButton;
