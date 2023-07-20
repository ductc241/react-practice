import { ChangeEvent, useEffect, useState } from "react";
import { twMerge as tw } from "tailwind-merge";
import AngleIcon from "../icons/AngleIcon";
import { ControllerRenderProps } from "react-hook-form";

interface IOption {
  label: string;
  value: string;
}
interface ISelectProps {
  options: IOption[];
  value: string;
  placeholder: string;
  containerCls?: string;
  field: ControllerRenderProps<any, any>;
}

const Select = ({
  options,
  value,
  placeholder,
  containerCls,
  field,
}: ISelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>(value);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  const handleClickOption = (item: IOption) => {
    setCurrentValue(item.value);
  };

  return (
    <div className={tw("relative", containerCls)}>
      <select id="gender" onChange={field.onChange} value={currentValue}>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <div
        className="px-3 py-2.5 border-2 border-gray-300 rounded-md"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex justify-between">
          <span>{currentValue ?? placeholder}</span>

          {isOpen ? <AngleIcon /> : <AngleIcon />}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-300 rounded-md">
          {options.map((item) => (
            <div
              className="px-3 py-2.5 cursor-pointer hover:bg-gray-100"
              onClick={() => handleClickOption(item)}
              key={item.value}
            >
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
