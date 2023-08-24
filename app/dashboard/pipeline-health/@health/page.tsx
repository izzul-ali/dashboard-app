'use client';

import { PiWarningCircle } from 'react-icons/pi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function HealthIndex() {
  return (
    <div className="mt-5 font-medium">
      <div className="sm:flex sm:items-center sm:justify-between md:justify-around text-sm">
        <div className="space-y-1 md:text-base text-gray-700 dark:text-gray-200">
          <p>
            Top 10 deals represent value{' '}
            <span className="text-blue-700 dark:text-blue-600 font-semibold"> $28,458</span> which is{' '}
            <span className="text-blue-700 dark:text-blue-600 font-semibold">14%</span> of total pipeline.
          </p>
          <p>
            These deals weighted value <span className="text-blue-700 dark:text-blue-600 font-semibold">$17,921</span>{' '}
            which is <span className="text-blue-700 dark:text-blue-600 font-semibold">18%</span> of total pipeline.
          </p>
        </div>

        <div className="mt-5 w-fit rounded border border-gray-200 dark:border-gray-800 p-4">
          <p>
            Pipeline health index{' '}
            <span className="p-1 rounded bg-green-600/30 text-green-600 font-semibold text-xs">+0,2</span>
          </p>
          <span className="flex items-center gap-x-2 relative mt-2">
            <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">3,4</span>
            <PiWarningCircle className="text-gray-500 cursor-pointer peer text-base" />
            <span className="transition-opacity duration-200 opacity-0 peer-hover:opacity-100 absolute left-16 -top-3 text-xs px-3 py-1 rounded-md border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 break-all">
              health index
            </span>
          </span>

          <span className="flex gap-x-[2px] mt-1">
            <span className="w-5 h-1 rounded-md bg-yellow-500"></span>
            <span className="w-5 h-1 rounded-md bg-yellow-500"></span>
            <span className="w-5 h-1 rounded-md bg-yellow-500"></span>
            <span className="w-5 h-1 rounded-md bg-gray-300"></span>
            <span className="w-5 h-1 rounded-md bg-gray-300"></span>
          </span>
        </div>
      </div>

      <div className="w-full h-52 mt-10 md:mt-16 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              bottom: 0,
              left: 0,
              right: 2,
              top: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="linear" strokeWidth={2} dataKey="pv" stroke="#8884d8" dot={false} />
            <Line type="linear" strokeWidth={2} dataKey="uv" stroke="#82ca9d" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
