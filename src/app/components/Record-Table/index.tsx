
'use client';

import { RecordsTableProps } from '../../types/types';

const RecordsTable = ({ records }: RecordsTableProps) => {
  return (
    <div className="overflow-x-auto mt-8">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Description</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Range</th>
            <th className="py-2 px-4 border">Valid</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record) => (
              <tr key={record.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border">{record.id}</td>
                <td className="py-2 px-4 border">{record.title}</td>
                <td className="py-2 px-4 border">{record.description || '-'}</td>
                <td className="py-2 px-4 border">{record.email}</td>
                <td className="py-2 px-4 border">{record.range}</td>
                <td className="py-2 px-4 border">
                  {record.valid ? 'Yes' : 'No'}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="py-4 px-4 border text-center">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RecordsTable;