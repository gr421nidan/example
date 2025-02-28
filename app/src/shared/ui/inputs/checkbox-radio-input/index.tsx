import { forwardRef, InputHTMLAttributes } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/shared/utils/cn";
import { inputsStyles } from "../style";

interface IInputCheckboxRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    type: "checkbox" | "radio";
    name: string;
}

const InputCheckboxRadio = forwardRef<HTMLInputElement, IInputCheckboxRadioProps>(
    ({ type, name, className, ...props }, ref) => {
        return (
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    {...props}
                    ref={ref}
                    type={type}
                    name={name}
                    className={cn(
                        inputsStyles({ variant: "check" }),
                        "appearance-none peer",
                        "checked:bg-purple checked:border-transparent",
                        className
                    )}
                />
                <Icon
                    icon="uil:check"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100"
                />
            </label>
        );
    }
);

InputCheckboxRadio.displayName = "InputCheckboxRadio"; // Нужно для `forwardRef`

export default InputCheckboxRadio;
