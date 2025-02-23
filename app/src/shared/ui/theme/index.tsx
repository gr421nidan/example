import {Switch} from "@headlessui/react";
import {useContext} from "react";
import {ThemeContext} from "@/app/providers/ThemeProvider";

const ThemeSwitcher = () => {
    const {theme, switchTheme} = useContext(ThemeContext);
    return (
        <Switch
            checked={theme === "dark"}
            onChange={switchTheme}
            className={`relative inline-flex h-[24px] w-[44px] p-[2px] items-center rounded-[12px] border transition cursor-pointer 
                ${theme === "dark" ? "bg-darkPurple border-white hover:shadow-[0_0_20px_#AEA1C9]" : "bg-white border-purple hover:shadow-[0_0_20px_#624699]"}`}
        >
            <span
                className={`inline-block h-[20px] w-[20px] transform rounded-full transition 
                    ${theme === "dark" ? "bg-white" : "bg-purple translate-x-[19px]"}`}
            />
        </Switch>
    );
};
export default ThemeSwitcher;
