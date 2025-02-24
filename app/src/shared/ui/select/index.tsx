import { FC, SelectHTMLAttributes } from "react";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: string[];
    className?: string;
    defaultOption?: string;
}
const selectStyle = 'w-fit px-4 py-2 text-purple bg-transparent ring-2 border-purple rounded-[20px] appearance-none cursor-pointer focus:outline-none focus:shadow-[0_0_20px_var(--color-purple)]';
const Select: FC<ISelectProps> = ({ defaultOption, options, className, ...props }) => {
    return (
        <div className={`relative w-fit`}>
            <select
                {...props}
                className={selectStyle}
            >
                <option value="" disabled  hidden>
                    {defaultOption}
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option} className="text-black">
                        {option}
                    </option>
                ))}
            </select>

            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                ⌄
            </div>
        </div>
    );
};

export default Select;