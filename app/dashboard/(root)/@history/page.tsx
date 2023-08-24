'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CardTitle from '~/components/card-title';

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
    <CardTitle title="Pipeline value history">
      <div className="h-64 md:h-52 mt-10 w-full text-xs font-medium text-gray-700">
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
            <Area type="monotone" dataKey="pipeline_1" stackId="1" stroke="#1a6cc9" fill="#1a6cc9" />
            <Area type="monotone" dataKey="pipeline_2" stackId="1" stroke="#9c9824" fill="#9c9824" />
            <Area type="monotone" dataKey="pipeline_3" stackId="1" stroke="#1830c9" fill="#1830c9" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </CardTitle>
  );
}
