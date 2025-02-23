import {useState, createContext} from "react";
import {PropsWithChildren} from "react";

type Theme = "light" | "dark" | null;

interface IThemeContextProps {
    theme: Theme;
    switchTheme: () => void;
}

const defaultThemeContext: IThemeContextProps = {
    theme: "light",
    switchTheme: () => {
    }
};

export const ThemeContext = createContext<IThemeContextProps>(defaultThemeContext);

export const ThemeProvider = ({children}: PropsWithChildren) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const storeTheme = localStorage.getItem("theme") as Theme;
        if (storeTheme) {
            document.documentElement.setAttribute("data-theme", storeTheme);
        }
        return storeTheme || "light";
    });

    const switchTheme = () => {
        setTheme((prev: Theme) => {
            const newTheme = prev === "light" ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{theme, switchTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
