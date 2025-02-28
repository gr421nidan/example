import {FC, InputHTMLAttributes} from "react";
import { cn } from "@/shared/utils/cn";
import { inputsStyles } from "../style"
import { Icon } from "@iconify/react";

interface IInputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}
const Input: FC<IInputBaseProps> = ({ placeholder, type, className = "", ...props}) => {
    const isSearch = type === "search";
    return (
        <div className={cn("relative", { "w-fit": isSearch })}>
            <input
                {...props}
                type={type}
                className={cn(inputsStyles({ variant: "basic" }), { "pr-[50px]": isSearch }, className)}
                placeholder={placeholder}
            />
            {isSearch && (
                <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 ">
                    <Icon icon="bi:search" className="w-8 h-8 text-lightPurple dark:text-white" />
                </button>
            )}
        </div>
    );
}
export default Input;