import { useEffect, useState } from "react";

export const useTheme = () => {

    const [isDark, setIsDark] = useState(() => {

        const saved = localStorage.getItem("theme");

        if (saved) {
            return saved === "dark";
        }

        // Si no hay preferencia guardada, usar la del sistema
        const prefersDark =
            window.matchMedia("(prefers-color-scheme: dark)").matches;

        return prefersDark;
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark((prev) => !prev);

    return { toggleTheme, isDark };
};
