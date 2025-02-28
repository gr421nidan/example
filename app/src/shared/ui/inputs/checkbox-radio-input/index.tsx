import {FC, InputHTMLAttributes, useState} from "react";
import {Icon} from "@iconify/react";
import {cn} from "@/shared/utils/cn";
import {inputsStyles} from "../style";

interface IInputCheckboxRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    type: "checkbox" | "radio";
}

const InputCheckboxRadio: FC<IInputCheckboxRadioProps> = ({type, checked = false, className, ...props}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                {...props}
                type={type}
                checked={isChecked}
                onChange={handleChange}
                className={cn(
                    inputsStyles({ variant: "check" }),
                    "appearance-none",
                    isChecked
                        ? "bg-purple dark:bg-buttonBg shadow-[0_0_20px_var(--color-shadowBorder)]"
                        : "bg-white",
                    className
                )}
            />
            {isChecked && (
                <Icon
                    icon="uil:check"
                    className="absolute pointer-events-none text-white w-full h-full flex items-center justify-center"
                />
            )}
        </label>

    );
};

export default InputCheckboxRadio;
