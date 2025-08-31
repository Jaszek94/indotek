'use client';

type Props = {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: string;
};

export default function FormInput({
  label,
  name,
  value,
  onChange,
  type = 'text',
  error,
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
        className={`px-3 py-2 text-gray-600 border rounded-lg focus:outline-none ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
}
