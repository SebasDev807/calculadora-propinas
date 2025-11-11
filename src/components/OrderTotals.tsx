import { useMemo } from "react";
import type { OrderItem } from "../interfaces";
import { formatCurrency } from "../utils";
import { BsSave2Fill } from "react-icons/bs";

interface OrderTotalsProps {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
}

export const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProps) => {
  const subtotalAmount = useMemo(
    () => order.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [order]
  );

  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, subtotalAmount]);
  const totalAmount = useMemo(
    () => subtotalAmount + tipAmount,
    [subtotalAmount, tipAmount]
  );

  return (
    <>
      <div className="space-y-3 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <h2 className="font-black text-2xl text-gray-900 dark:text-white">
          Totales y Propina:
        </h2>

        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold text-teal-600 dark:text-teal-400">
            {formatCurrency(subtotalAmount)}
          </span>
        </p>

        <p>
          Propina:{" "}
          <span className="font-bold text-teal-600 dark:text-teal-400">
            {formatCurrency(tipAmount)}
          </span>
        </p>

        <p>
          Total:{" "}
          <span className="font-bold text-teal-700 dark:text-teal-300">
            {formatCurrency(totalAmount)}
          </span>
        </p>
      </div>

      <button
        onClick={placeOrder}
        disabled={totalAmount === 0}
        className={`flex items-center justify-center gap-2 text-lg font-bold text-white rounded-lg w-full p-3 mt-10 shadow-lg transition-all duration-300
          ${
            totalAmount === 0
              ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed opacity-70"
              : "bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-500"
          }`}
      >
        <BsSave2Fill />
        Guardar Orden
      </button>
    </>
  );
};
