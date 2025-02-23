import { FC, InputHTMLAttributes } from "react";
import { Icon } from "@iconify/react";

export enum EInputVariant {
    BASE = "base",
    SEARCH = "search",
    CHECKBOX = "checkbox",
    CODE_INPUT = "code-input",
    FILE_INPUT = "file-input",
}


interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    variant: EInputVariant;
    type?: string;
    icon?: string;
    options?: string[];
}

const inputStyles: Record<EInputVariant, string> = {
    [EInputVariant.BASE]: "cursor-pointer h-[54px] border border-purple rounded-[20px] bg-white px-[27px] placeholder-black hover:shadow-[0_0_20px_#AEA1C9] focus:shadow-none outline-none focus:placeholder-transparent dark:text-white dark:bg-buttonBg dark:placeholder-white",
    [EInputVariant.SEARCH]: "cursor-pointer ",
    [EInputVariant.CHECKBOX]: "cursor-pointer w-6 h-6 bg-white checked:bg-pink-600 checked:border-pink-600 ",
    [EInputVariant.CODE_INPUT]: "cursor-pointer ",
    [EInputVariant.FILE_INPUT]: "cursor-pointer p-2 px-4 text-center rounded-[20px] border-2 border-purple hover:border-lightPurple hover:text-gray bg-white text-black dark:text-white dark:bg-buttonBg hover:shadow-[0_0_20px_#AEA1C9] active:text-purple active:shadow-none file-input-label",
};

const Input: FC<IInputProps> = ({ variant, placeholder, icon, type, options, className, ...props }) => {

    const renderInput = () => {
        switch (variant) {
            case EInputVariant.SEARCH:
                return (
                    <div className={`search-input-wrapper ${className}`}>
                        <input {...props} type="text" placeholder={placeholder} className="search-input" />
                        {icon && <Icon icon={icon} className="search-icon" />}
                    </div>
                );
            case EInputVariant.FILE_INPUT:
                return (
                    <label className={`${inputStyles[variant]}`}>
                        <input {...props} type="file" multiple={true} className="file-input" style={{ display: "none" }} />
                        <span>{placeholder}</span>
                    </label>
                );
            default:
                return <input {...props} type={type} className={`${inputStyles[variant]}`} placeholder={placeholder} />;
        }
    };

    return renderInput();
};


export default Input;