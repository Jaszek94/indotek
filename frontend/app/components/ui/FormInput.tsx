'use client';

type Props = {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

export default function FormInput({
  label,
  name,
  value,
  onChange,
  type = 'text',
}: Props) {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="text-gray-700 font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="px-3 py-2 text-gray-600 border border-gray-300 rounded-lg focus:outline-none"
      />
    </div>
  );
}
