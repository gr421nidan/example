import {FC, ButtonHTMLAttributes} from "react";


export enum EButtonVariant {
    BASE = "base",
    ICON = "icon",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    variant: EButtonVariant;
    src?: string;
}

const buttonStyles: Record<EButtonVariant, string> = {
    [EButtonVariant.BASE]: "cursor-pointer p-2 px-4 text-center rounded-[20px] border-2 border-purple bg-white text-black dark:text-white dark:bg-secondaryDarkPurple hover:shadow-[0_0_20px_#AEA1C9] active:text-purple",
    [EButtonVariant.ICON]: "cursor-pointer hover:shadow-[0_0_20px_#AEA1C9]",
};

const Button: FC<IButtonProps> = ({variant, label, src, type = "button", className, ...props}) => {
    return (
        <button
            {...props}
            className={`shadow ${buttonStyles[variant]}`}
        >
            {variant === EButtonVariant.ICON && src ? (
                <img src={src}  className="w-6 h-6" />
            ) : (
                label && <span>{label}</span>
            )}
        </button>
    );
};

export default Button;