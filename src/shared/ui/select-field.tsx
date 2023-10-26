import clsx from "clsx";
import React, { FC, PropsWithRef, SelectHTMLAttributes, useId } from "react";

export type SelectOptions = {
  value: string;
  label: string;
};

export type SelectFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options?: SelectOptions[];
};

const SelectField: FC<SelectFieldProps> = ({
  className,
  label,
  error,
  selectProps,
  options,
}) => {
  const id = useId();

  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label className="block" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        {...selectProps}
        id={id}
        className={clsx(
          selectProps?.className,
          "rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none",
        )}
      >
        {options?.map(({ value, label }, idx) => (
          <option key={idx} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <div className="text-rose-400 text-sm">{error}</div>}
    </div>
  );
};

export default SelectField;
