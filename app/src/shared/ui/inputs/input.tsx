import {FC, InputHTMLAttributes, useState} from "react";
import {Icon} from "@iconify/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ru} from "date-fns/locale";

export enum EInputVariant {
    BASE = "base",
    SEARCH = "search",
    CHECKBOX = "checkbox",
    FILE_INPUT = "file-input",
    PASSWORD = "password",
    DATE = "date",
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
    [EInputVariant.DATE]: "btn placeholder:text-purple",
};

const Input: FC<IInputProps> = ({variant, placeholder, icon, type, className = "", ...props}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    if (variant === EInputVariant.DATE) {
        return (
            <div className="relative w-fit">
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                            dateFormat="dd.MM.yyyy"
                            locale={ru}
                            className={`${inputStyles[variant]} ${className} `}
                            placeholderText="дд.мм.гггг"/>
            </div>
        );
    }
    if (variant === EInputVariant.CHECKBOX) {
        return (
            <label className="relative flex items-center cursor-pointer">
                <input {...props} type="checkbox" className={inputStyles[variant]}/>
                <div
                    className="w-6 h-6 border-2 border-purple rounded-md flex items-center justify-center transition-all peer-checked:bg-purple">

                    <Icon
                        icon="mdi:check"
                        className="w-4 h-4 text-white opacity-0 transition-opacity peer-checked:opacity-100 peer-checked:block"
                    />
                </div>
            </label>
        );
    }
    if (variant === EInputVariant.SEARCH) {
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
                    className="input_icon"
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
                    className={`${inputStyles[variant]} ${className} pr-10`}
                    placeholder={placeholder}
                />
                <button
                    type="button"
                    className="input_icon"
                    onClick={() => setShowPassword((prev) => !prev)}
                >
                    <Icon icon={showPassword ? "mage:eye" : "iconamoon:eye-off-thin"} className="w-[30px] h-[30px]"/>
                </button>
            </div>
        );
    }
    return <input {...props} type={type} className={`${inputStyles[variant]} ${className}`}
                  placeholder={placeholder}/>;


};


export default Input;