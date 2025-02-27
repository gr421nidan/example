import {FC, ButtonHTMLAttributes} from "react";
import { Icon } from "@iconify/react";

export enum EButtonVariant {
    BASE = "base",
    ICON = "icon",
    WITH_ICON="with_icon",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    variant: EButtonVariant;
    icon?: string;
}

const buttonStyles: Record<EButtonVariant, string> = {
    [EButtonVariant.BASE]: "btn",
    [EButtonVariant.ICON]: "btn-icon",
    [EButtonVariant.WITH_ICON]: "btn-with-icon",
};

const Button: FC<IButtonProps> = ({ variant, label, icon, type = "button", className = "", ...props }) => {
    return (
        <button
            {...props}
            type={type}
            className={`${buttonStyles[variant]} ${className}`}
        >
            {variant === EButtonVariant.ICON && icon ? (
                <Icon icon={icon} className={className} />
            ) : variant === EButtonVariant.WITH_ICON && icon ? (
                <>
                    {label && <span>{label}</span>}
                    <Icon icon={icon} className="pr-2 w-fit" />
                </>
            ) : (
                label && <span>{label}</span>
            )}
        </button>
    );
};
export default Button;