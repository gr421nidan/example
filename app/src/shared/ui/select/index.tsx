import { FC } from "react";
import { Select, Option } from "@material-tailwind/react";

interface ISelectProps {
    options: string[];
    className?: string;
    defaultOption?: string;
}

const selectStyle =
    "w-fit px-4 py-2 text-purple bg-buttonBg ring-2 border-purple rounded-[20px] appearance-none cursor-pointer focus:outline-none focus:shadow-[0_0_20px_var(--color-purple)]";

const CustomSelect: FC<ISelectProps> = ({ defaultOption, options, className, ...props }) => {
    return (
        <Select {...props} className={`${selectStyle} ${className || ""}`} label={defaultOption}>
            {options.map((option, index) => (
                <Option key={index} value={option} className="text-black">
                    {option}
                </Option>
            ))}
        </Select>
    );
};

export default CustomSelect;
