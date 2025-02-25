import { FC, SelectHTMLAttributes } from "react";
import {Icon} from "@iconify/react";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: string[];
    className?: string;
    defaultOption?: string;
}
const selectStyle = 'w-fit px-4 py-2 text-purple bg-buttonBg ring-2 border-purple rounded-[20px] appearance-none cursor-pointer focus:outline-none focus:shadow-[0_0_20px_var(--color-purple)]';
const Select: FC<ISelectProps> = ({ defaultOption, options, className, ...props }) => {
    return (
        <div className="relative w-fit">
            <select
                {...props}
                className={selectStyle}
            >
                <option value="" disabled selected hidden>
                    {defaultOption}
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option} className="text-black">
                        {option}
                    </option>
                ))}
            </select>
            <Icon icon="ep:arrow-down" className="cursor-pointer absolute top-0 end-4 h-full flex items-center text-purple "/>
        </div>
    );
};

export default Select;