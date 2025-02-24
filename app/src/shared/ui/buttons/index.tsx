import {FC, ButtonHTMLAttributes} from "react";
import { Icon } from "@iconify/react";

export enum EButtonVariant {
    BASE = "base",
    ICON = "icon",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    variant: EButtonVariant;
    icon?: string;
}

const buttonStyles: Record<EButtonVariant, string> = {
    [EButtonVariant.BASE]: "btn",
    [EButtonVariant.ICON]: "btn-icon",
};

const Button: FC<IButtonProps> = ({ variant, label, icon, type = "button", className = "", ...props }) => {
    return (
        <button
            {...props}
            className={`${buttonStyles[variant]} ${className}`}
        >
            {variant === EButtonVariant.ICON && icon ? (
                <Icon icon={icon} />
            ) : (
                label && <span>{label}</span>
            )}
        </button>
    );
};
export default Button;