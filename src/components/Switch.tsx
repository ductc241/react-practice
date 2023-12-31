import { ForwardedRef, forwardRef, useState } from "react";
import { twMerge as tw } from "tailwind-merge";

interface ISwitchProps {
  value?: boolean;
  label?: string;
  onChange?: (value: boolean) => void;
}

const Switch = forwardRef(
  (props: ISwitchProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { value = false, label, onChange: handleChangeValue } = props;

    const [isChecked, setIsChecked] = useState<boolean>(value);

    const handleChange = () => {
      if (handleChangeValue) handleChangeValue(isChecked);
    };

    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="hidden" onChange={handleChange} />
        <div
          className={tw(
            "w-11 h-6 bg-gray-200 rounded-full border focus:border-blue-500",
            "after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all",
            isChecked && "bg-blue-600 after:translate-x-full after:border-white"
          )}
          onClick={() => setIsChecked((prev) => !prev)}
          ref={ref}
        ></div>

        {label && <span className="ml-3 text-gray-900">{label}</span>}
      </label>
    );
  }
);

export default Switch;
