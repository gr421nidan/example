import { FC, useState } from "react";
import { Icon } from "@iconify/react";

interface ISelectProps {
    options: string[];
    className?: string;
    defaultOption?: string;
}
const CustomSelect: FC<ISelectProps> = ({ defaultOption, options, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(defaultOption);

    return (
        <div className={`relative ${className}`}>
            <div
                className={`custom-select-box ${isOpen ? "shadow-[0_0_5px_var(--color-purple)]" : ""}`}
                onClick={() => setIsOpen(!isOpen)}>
                {selected}
                <Icon icon="ep:arrow-down"
                    className={`text-purple transition-transform ${isOpen ? "rotate-180" : ""}`}/>
            </div>

            {isOpen && (
                <ul className={`custom-select-option`}>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={`custom-option ${index !== 0 ? "border-t-2 border-lightPurple" : ""}`}
                            onClick={() => {
                                setSelected(option);
                                setIsOpen(false);
                            }}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
