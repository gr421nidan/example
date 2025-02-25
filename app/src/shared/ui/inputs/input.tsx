import { FC, InputHTMLAttributes, useState } from "react";
import {Icon} from "@iconify/react";

export enum EInputVariant {
    BASE = "base",
    SEARCH = "search",
    CHECKBOX = "checkbox",
    FILE_INPUT = "file-input",
    PASSWORD = "password",

}

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    variant: EInputVariant;
    type?: string;
    icon?: string;
    checked?: boolean;
}

const inputStyles: Record<EInputVariant, string> = {
    [EInputVariant.BASE]: "input",
    [EInputVariant.SEARCH]: "input",
    [EInputVariant.CHECKBOX]: "input-checkbox",
    [EInputVariant.FILE_INPUT]: "btn block flex",
    [EInputVariant.PASSWORD]: "input block",
};

const Input: FC<IInputProps> = ({variant, placeholder, icon, type, checked = false, className = "", ...props}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(checked);
    if (variant === EInputVariant.CHECKBOX) {
        return (
            <div
                className={`${inputStyles[variant]} ${isChecked ? "input-checkbox-checked" : ""} ${className}`}
                onClick={() => setIsChecked((prev) => !prev)}>
                {isChecked && <Icon icon="uil:check" className="text-white min-w-6 min-h-6" />}
            </div>
        );
    }
    if (variant === EInputVariant.SEARCH) {
        return (
            <div className="relative w-fit">
                <input
                    {...props}
                    type="search"
                    placeholder={placeholder}
                    className={`${inputStyles[variant]} ${className} pr-[48px]`}
                />
                <button
                    type="submit"
                    className="input-icon"
                >
                    <Icon icon="bi:search" className="w-[29px] h-[28px]"/>
                </button>
            </div>
        );
    }
    if (variant === EInputVariant.FILE_INPUT) {
        return (
            <label className={`${inputStyles[variant]} ${className}`}>
                <input {...props} type="file" multiple className="hidden"/>
                <span>{placeholder}</span>
            </label>
        );
    }
    if (variant === EInputVariant.PASSWORD) {
        return (
            <div className="relative w-fit">
                <input
                    {...props}
                    type={showPassword ? "text" : "password"}
                    className={`${inputStyles[variant]} ${className} pr-[48px]`}
                    placeholder={placeholder}
                />
                <button
                    type="button"
                    className="input-icon"
                    onClick={() => setShowPassword((prev) => !prev)}
                >
                    <Icon icon={showPassword ? "mage:eye" : "iconamoon:eye-off-thin"} className="w-[30px] h-[30px]"/>
                </button>
            </div>
        );
    }
    return <input {...props} type={type} className={`${inputStyles[variant]} ${className} pr-[27px]`}
                  placeholder={placeholder}/>;


};


export default Input;