import type { MenuItem, OrderItem } from "../interfaces";
import { formatCurrency } from "../utils";
import { BsFillTrashFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

interface OrderContentsProps {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
}

export const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
  return (
    <section className="p-6">
      <h2 className="text-4xl font-extrabold text-teal-700 mb-6 text-center">
        Consumo
      </h2>

      <div className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-6">

        <ul className="space-y-5 mt-4">
          <AnimatePresence>
            {order.map((item) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex justify-between items-center rounded-xl p-4 shadow-sm hover:shadow-md transition-all bg-gray-50 dark:bg-slate-700"
              >
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Precio unitario:{" "}
                    <span className="font-medium text-gray-700">
                      {formatCurrency(item.price)}
                    </span>
                  </p>
                  <p className="font-semibold text-gray-700 dark:text-gray-300">
                    Cantidad:{" "}
                    <span className="text-teal-600 dark:text-teal-300">{item.quantity}</span> —{" "}
                    Total:{" "}
                    <span className="text-teal-700 dark:text-teal-300 font-bold">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="cursor-pointer bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-md transition-transform transform hover:scale-110 active:scale-95"
                  title="Eliminar producto"
                >
                  <BsFillTrashFill className="text-lg" />
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

      </div>
    </section>
  );
};
