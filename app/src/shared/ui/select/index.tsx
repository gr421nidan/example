import { FC, SelectHTMLAttributes } from "react";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: string[];
    className?: string;
}
const selectStyle = 'cursor-pointer';
const Select: FC<ISelectProps> = ({ options, className, ...props }) => {
    return (
        <select {...props} className={selectStyle}>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Select;