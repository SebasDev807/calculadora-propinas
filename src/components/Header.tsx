import { BsMoon, BsSun, BsCalculator } from "react-icons/bs";
import { useTheme } from "../hooks";

export const Header = () => {

  const { toggleTheme, isDark } = useTheme();

  return (
    <header className="bg-linear-to-r from-teal-500 to-teal-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo + título */}
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-3 rounded-xl">
            <BsCalculator className="text-white text-3xl" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Calculadora de Propinas
          </h1>
        </div>

        {/* Botón modo noche */}
        <button
          onClick={toggleTheme}
          className="cursor-pointer flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2 rounded-xl transition-all shadow-md backdrop-blur-sm"
        >
          {isDark ? <BsSun className="text-lg" /> : <BsMoon className="text-lg" />}

          <span className="hidden sm:inline">
            {isDark ? 'Modo Claro' : 'Modo Oscuro'}
          </span>

        </button>
      </div>
    </header>
  );
};
