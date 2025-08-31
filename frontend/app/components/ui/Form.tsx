import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  className?: string;
};

export default function Form({ children, onSubmit, className = '' }: Props) {
  return (
    <form
      onSubmit={onSubmit}
      className={`w-full space-y-4 bg-white p-6 rounded-lg shadow-sm ${className}`}
    >
      {children}
    </form>
  );
}
