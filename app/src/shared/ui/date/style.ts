import { cva } from "class-variance-authority";

export const datePickerContainer = cva(
    "outline-none h-[52px] rounded-[20px] text-center border border-3 bg-white text-black border-purple hover:border-purple-light hover:text-dark-gray hover:shadow-[0_0_10px_var(--color-custom-shadow)] dark:text-white dark:hover:text-white dark:bg-gray dark:active:text-purple dark:hover:border-purple active:text-purple active:shadow-none active:border-purple"
);

export const datePickerCalendar = cva(
    "bg-white dark:bg-purple-dark shadow-[0_0_20px_var(--color-black)] "
);

export const datePickerDay = cva(
    "text-black dark:text-white hover:bg-purple hover:text-white transition"
);


export const datePickerWeekDay = cva(
    "text-purple text-lg hover:bg-purple hover:text-white rounded-lg transition"
);

