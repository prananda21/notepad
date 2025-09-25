import type { JSX } from "react";

interface ICommonLabelProps {
    className?: string;
    text: string;
}

const CommonLabel = ({ props }: { props: ICommonLabelProps }): JSX.Element => {
    const { className, text } = props;

    return <label className={className}>{text}</label>;
};

export default CommonLabel;
