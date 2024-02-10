import cn from "../../helpers/UtilKit";
import ErrorByFieldName from "./ErrorByFieldName";

const defaultClassName =
  "block w-full rounded-md border p-2 border-gray-300 pl-3 pr-10 text-base font-medium focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm disabled:cursor-not-allowed";

export default function SelectField({
  label = "",
  name = "",
  id = "",
  extraClassName,
  labelClassName,
  value = "",
  options = [],
  errors,
  onChange = () => {},
  onBlur = () => {},
  disabled = false,
}) {
  return (
    <div className="w-full space-y-1">
      <label
        htmlFor={id}
        className={cn(
          "block font-bold text-sm text-neutral-700",
          labelClassName
        )}
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        className={cn(defaultClassName, extraClassName)}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={`${
              option.disabled ? "text-gray-500" : "text-gray-900"
            } font-semibold`}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      <ErrorByFieldName field={name} errors={errors} />
    </div>
  );
}
