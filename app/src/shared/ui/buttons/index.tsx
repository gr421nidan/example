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
    [EButtonVariant.BASE]: "cursor-pointer p-2 px-4 text-center hover:shadow-[0_0_20px_#AEA1C9] rounded-[20px] border-2 border-purple hover:border-lightPurple hover:text-gray bg-white text-black dark:text-white dark:bg-buttonBg  active:text-purple active:shadow-none",
    [EButtonVariant.ICON]: "cursor-pointer text-purple hover:drop-shadow-[0_0_5px_#624699] dark:text-lightPurple dark:text-purple dark:hover:drop-shadow-[0_0_5px_#624699]",
};

const Button: FC<IButtonProps> = ({variant, label, icon, type = "button", className, ...props}) => {
    return (
        <button
            {...props}
            className={`${buttonStyles[variant]}`}
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