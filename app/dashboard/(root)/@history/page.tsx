'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1 May',
    pipeline_1: 4000,
    pipeline_2: 3184,
    pipeline_3: 5624
  },
  {
    name: '4 May',
    pipeline_1: 298103,
    pipeline_2: 314141,
    pipeline_3: 988979
  },
  {
    name: '8 May',
    pipeline_1: 907787,
    pipeline_2: 34242,
    pipeline_3: 4231
  }
];

export default function History() {
  return (
    <div className="bg-white rounded p-2 shadow-sm w-full">
      <h1 className="md:text-lg font-bold text-gray-800">Pipelines value history</h1>

      <div className="mt-5 h-52 w-full p-3 text-xs font-medium text-gray-700">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pipeline_1" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="pipeline_2" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="pipeline_3" stackId="1" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
