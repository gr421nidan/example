import {cva} from "class-variance-authority";

export const flexCol = "flex flex-col";
export const formAuthStyles = cva(
    `${flexCol} px-[76px] py-[40px] gap-[62px] w-[626px] bg-white rounded-[45px]`
);

export const inputContainerStyles = cva(
    `${flexCol} gap-[24px]`
);
export const radioContainerStyles = cva(
    "flex items-center gap-2 cursor-pointer"
);

export const formContainerStyles = cva(
    `${flexCol} gap-[24px] items-center`
);

export const errorTextStyles = cva(
    `pt-1 text-errorPrimary`, {
        variants: {
            error: {
                true: "text-errorPrimary",
                false: "",
            }
        },
    });
export const headerStyles = cva(
    "bg-lightPurple rounded-[12px] px-3 w-fit"
);
export const iconStyles = cva(
    "absolute text-white opacity-0 peer-checked:opacity-100"
);

export const linkStyles = cva(
    "flex gap-2 text-[20px]"
);