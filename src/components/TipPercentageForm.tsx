import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { TipOption } from "../interfaces";

const tipOptions: TipOption[] = [
  { id: "tip-10", value: 0.1, label: "10%" },
  { id: "tip-20", value: 0.2, label: "20%" },
  { id: "tip-50", value: 0.5, label: "50%" },
];

interface TipPercentageFormProps {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
}

export const TipPercentageForm = ({ setTip, tip }: TipPercentageFormProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTip(+event.target.value);
  };

  return (
    <div className="space-y-4 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <h3 className="font-black text-2xl text-gray-900 dark:text-white">
        Propina:
      </h3>

      <form className="space-y-2">
        {tipOptions.map((tipOption) => (
          <label
            key={tipOption.id}
            htmlFor={tipOption.id}
            className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all duration-300
              ${
                tip === tipOption.value
                  ? "bg-teal-100 border-teal-400 dark:bg-teal-700/40 dark:border-teal-500"
                  : "bg-gray-50 border-gray-300 dark:bg-gray-800 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
          >
            <span className="font-medium">{tipOption.label}</span>

            <input
              onChange={handleChange}
              className="cursor-pointer accent-teal-600 dark:accent-teal-400"
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              checked={tipOption.value === tip}
            />
          </label>
        ))}
      </form>
    </div>
  );
};
