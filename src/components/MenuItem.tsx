import type { MenuItem as IMenuItem } from "../interfaces";
import { formatCurrency } from "../utils";
import { BsPlusLg } from "react-icons/bs";

interface MenuItemProps {
    menuItem: IMenuItem;
    addItem: (item: IMenuItem) => void;
}

export const MenuItem = ({ menuItem, addItem }: MenuItemProps) => {
    return (
        <div
            className="group border border-gray-200 hover:border-teal-400 bg-white dark:bg-slate-800 dark:border-gray-800 w-full rounded-2xl p-4 flex justify-between items-center transition-all duration-300 shadow-sm hover:shadow-md hover:bg-teal-50 dark:hover:bg-slate-900 active:scale-[0.98]"
        >
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-300 group-hover:text-teal-700 transition-colors">
                {menuItem.name}
            </p>

            <div className="flex items-center gap-3">
                <span className="text-teal-700 dark:text-teal-400 font-bold text-lg">
                    {formatCurrency(menuItem.price)}
                </span>
                <button
                    onClick={() => addItem(menuItem)}
                    className="cursor-pointer bg-teal-500 group-hover:bg-teal-600 text-white rounded-full p-2 transition-transform transform group-hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    aria-label={`Agregar ${menuItem.name} al pedido`}
                >
                    <BsPlusLg className="text-sm" />
                </button>
            </div>
        </div>

    );
};
