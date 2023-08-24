'use client';

import CardTitle from '~/components/card-title';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, PieLabel, Tooltip } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

export default function Graph() {
  return (
    <CardTitle title="Graph of reasons">
      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              // label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip wrapperClassName="text-xs rounded-md" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </CardTitle>
  );
}
