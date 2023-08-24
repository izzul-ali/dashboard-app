import React from 'react';
import CardTitle from '~/components/card-title';

export default function Overview() {
  return (
    <CardTitle title="All pipelines overview">
      <div className="h-52 w-full mt-5 p-3 text-sm font-medium text-gray-700 dark:text-gray-200 overflow-y-scroll">
        <div className="flex justify-around text-xs font-bold ">
          <button className="px-2 py-1 rounded bg-gray-50 dark:bg-gray-900 text-blue-700">QUARTALS</button>
          <button className="px-2 py-1 rounded bg-gray-50 dark:bg-gray-900 text-gray-500">MONTHS</button>
        </div>

        <div className="mt-5 flex justify-center">
          <table className="w-full">
            <thead className="text-gray-400 [&>tr>th]:py-2">
              <tr>
                <th>Quartal</th>
                <th>Deals</th>
                <th>Value</th>
              </tr>
            </thead>

            <tbody className="text-center font-semibold [&>tr>td]:py-2">
              {Array(10)
                .fill('')
                .map((_) => (
                  <tr>
                    <td>Q1/21</td>
                    <td>12</td>
                    <td>$15.721</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </CardTitle>
  );
}
