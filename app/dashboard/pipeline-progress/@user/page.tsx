import React from 'react';
import { AiOutlineRise } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';

export default function page() {
  return (
    <div className="flex flex-wrap justify-start sm:justify-start gap-4 mb-10">
      <Card title="User Actives" avarage="Avg.users 289" value="309" percentage="+1.14%" />
      <Card title="New Users" avarage="Avg.new users 159" value="162" percentage="+0.62%" />
      <Card title="Time on Page" avarage="Avg.time 00:02:43" value="00:03:12" percentage="-0.32%" />
      <Card title="Bounce Rate" avarage="Avg.rate 82.54%" value="86.18%" percentage="+0.87%" />
    </div>
  );
}

interface CardDetail {
  title: string;
  avarage: string;
  value: string;
  percentage: string;
}

function Card(detail: CardDetail) {
  return (
    <div className="rounded border border-gray-200 dark:border-gray-800 w-48 text-sm">
      <div className="p-2 flex justify-between border-b border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium">
        <span>{detail.title}</span>
        <button>
          <BsThreeDots />
        </button>
      </div>

      <div className="p-2">
        <span className="text-xs text-gray-600 dark:text-gray-400">{detail.avarage}</span>

        <div className="flex justify-between mt-1">
          <span className="text-xl text-gray-900 dark:text-gray-200 font-semibold">{detail.value}</span>
          <span
            className={`flex items-center gap-x-1 p-1 rounded text-xs font-semibold ${
              detail.percentage.includes('-') ? 'bg-red-600/10 text-red-600' : 'bg-green-600/10 text-green-600'
            }`}
          >
            <AiOutlineRise className={`text-sm ${detail.percentage.includes('-') ? 'rotate-90' : 'rotate-0'}`} />
            <span>{detail.percentage}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
