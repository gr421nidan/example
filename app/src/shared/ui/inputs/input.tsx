import {FC, InputHTMLAttributes, useState} from "react";
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
}

const inputStyles: Record<EInputVariant, string> = {
    [EInputVariant.BASE]: "input",
    [EInputVariant.SEARCH]: "input",
    [EInputVariant.CHECKBOX]: "hidden peer",
    [EInputVariant.FILE_INPUT]: "btn",
    [EInputVariant.PASSWORD]: "input block",
};

const Input: FC<IInputProps> = ({variant, placeholder, icon, type, className = "", ...props}) => {
    const [showPassword, setShowPassword] = useState(false);
    const renderInput = () => {
        switch (variant) {
            case EInputVariant.CHECKBOX:
                return (
                    <label className="relative flex items-center cursor-pointer">
                        <input {...props} type="checkbox" className={inputStyles[variant]} />
                        <div className="w-6 h-6 border-2 border-purple-500 rounded-md flex items-center justify-center transition-all peer-checked:bg-purple-500">

                            <Icon
                                icon="mdi:check"
                                className="w-4 h-4 text-white opacity-0 transition-opacity peer-checked:opacity-100 peer-checked:block"
                            />
                        </div>
                    </label>
                );
            case EInputVariant.SEARCH:
                return (
                    <div className="relative w-fit">
                        <input
                            {...props}
                            type="search"
                            placeholder={placeholder}
                            className={`${inputStyles[variant]} ${className} pr-10`}
                        />
                        <button
                            type="submit"
                            className="absolute top-0 end-4 h-full flex items-center text-lightPurple dark:text-white"
                        >
                            <Icon icon="bi:search" className="w-[29px] h-[28px]" />
                        </button>
                    </div>
                );
            case EInputVariant.FILE_INPUT:
                return (
                    <label className={`btn inline-flex ${className}`}>
                        <input {...props} type="file" multiple className="hidden"/>
                        <span>{placeholder}</span>
                    </label>
                );
            case EInputVariant.PASSWORD:
                return (
                    <div className="relative w-fit" >
                        <input
                            {...props}
                            type={showPassword ? "text" : "password"}
                            className={`${inputStyles[variant]} ${className} pr-10`}
                            placeholder={placeholder}
                        />
                        <button
                            type="button"
                            className="absolute top-0 end-4 h-full flex items-center text-lightPurple dark:text-white "
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            <Icon icon={showPassword ? "mage:eye" : "iconamoon:eye-off-thin"} className="w-[30px] h-[30px]" />
                        </button>
                    </div>
                );
            default:
                return <input {...props} type={type} className={`${inputStyles[variant]} ${className}`}
                              placeholder={placeholder}/>;
        }
    };

    return renderInput();
};


export default Input;