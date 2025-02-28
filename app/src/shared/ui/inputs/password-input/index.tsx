import {FC, InputHTMLAttributes, useState} from "react";
import { Icon } from "@iconify/react";
import { inputsStyles } from "../style";
import {cn} from "@/shared/utils/cn";

interface IInputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}
const PasswordInput: FC<IInputPasswordProps> = ({ className, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="relative w-fit">
            <input
                {...props}
                type={showPassword ? "text" : "password"}
                className={cn(inputsStyles({ variant: "basic" }),"pr-[47px]", className)}
            />
            <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
                <Icon icon={showPassword ? "iconamoon:eye-thin" : "iconamoon:eye-off-thin"} className="text-black dark:text-white w-[20px] h-[20px]" />
            </button>
        </div>
    );
};

export default PasswordInput;