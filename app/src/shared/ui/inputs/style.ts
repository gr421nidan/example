import { cva } from "class-variance-authority";

export const inputsStyles = cva(
    "border-2  outline-none transition-all hover:shadow-[0_0_20px_var(--color-shadowBorder)] " +
    "text-black dark:text-white hover:placeholder-black dark:hover:placeholder-white focus:border-purple hover:border-purple",
    {
        variants: {
            variant: {
                basic: "h-[54px] px-[27px] rounded-[20px] bg-white dark:bg-buttonBg placeholder-gray dark:placeholder-whiteSecondary border-lightPurple",
                file: "rounded-[20px] h-[52px] border-3 text-center items-center justify-center bg-white text-black border-purple " +
                    "dark:bg-buttonBg dark:hover:border-purple dark:hover:text-white dark:active:text-purple active:text-purple active:shadow-none " +
                    "active:border-purple",
                check: "flex items-center justify-center rounded-[5px] border-purple cursor-pointer transition-all w-[20px] h-[20px]",
                otp: "rounded-[10px] w-[60px] h-[60px] border-purple text-center focus:outline-none hover:shadow-[0_0_20px_var(--color-shadowBorder)] dark:text-white text-[32px]",
            },
            error: {
                true: "border-errorPrimary bg-errorSecondary focus:border-errorPrimary hover:border-errorPrimary",
                false: "",
            },
        },

    }
);