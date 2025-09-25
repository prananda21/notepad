interface ICommonFormProps {
  className?: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CommonForm = ({props}: {props: ICommonFormProps }) => {}

export default CommonForm;