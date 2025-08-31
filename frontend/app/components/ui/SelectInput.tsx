'use client';

type Option = {
  value: string | number;
  label: string;
};

type Props = {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
};

export default function SelectInput({
  label,
  name,
  value,
  onChange,
  options,
}: Props) {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="text-gray-700 font-medium">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="px-3 py-2 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
