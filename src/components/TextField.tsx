import { ComponentPropsWithoutRef, Ref, forwardRef } from "react";
import { twMerge as tw } from "tailwind-merge";

interface ITextFieldProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: string;
  containerCls?: string;
  labelCls?: string;
}

const TextField = forwardRef(
  (inputProps: ITextFieldProps, ref: Ref<HTMLInputElement>) => {
    const { id, name, className, label, containerCls, error, ...props } =
      inputProps;

    return (
      <div className={tw("mb-5", containerCls)}>
        {label && (
          <label
            htmlFor={id}
            className="block mb-1 text-gray-500 font-semibold capitalize"
          >
            {label}
          </label>
        )}

        <input
          type="text"
          id={id}
          name={name}
          className={tw(
            "w-full px-3 py-2.5 border border-2 rounded-md outline-none",
            error ? "border-red-500 text-red-500" : "border-gray-300",
            className
          )}
          ref={ref}
          {...props}
        />

        {error && <span className="block mt-1 text-red-500">{error}</span>}
      </div>
    );
  }
);

export default TextField;
