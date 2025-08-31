'use client';

import { ReactNode } from 'react';

type Column<T> = {
  header: string;
  accessor: keyof T | ((row: T) => ReactNode);
  className?: string;
};

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
  rowKey: keyof T;
};

export function Table<T>({ columns, data, rowKey }: TableProps<T>) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-primary/20">
          <tr>
            {columns.map((col, i) => (
              <th
                key={i}
                className={`px-6 py-3 text-left text-sm font-semibold text-gray-700 ${
                  col.className || ''
                }`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={String(row[rowKey])} className="hover:bg-gray-50">
              {columns.map((col, i) => {
                const value =
                  typeof col.accessor === 'function'
                    ? col.accessor(row)
                    : row[col.accessor];
                return (
                  <td
                    key={i}
                    className={`px-6 py-4 text-sm text-gray-700 ${
                      col.className || ''
                    }`}
                  >
                    {value as ReactNode}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
