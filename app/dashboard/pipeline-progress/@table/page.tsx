import CardTitle from '~/components/card-title';

export default function Table() {
  return (
    <CardTitle title="User Explore">
      <div className="w-full overflow-x-scroll">
        <table className="mt-4 text-xs w-full table-auto">
          <thead className="text-gray-500 border-b border-gray-200 dark:border-gray-800 font-light [&>tr>th]:text-start [&>tr>th]:p-4 [&>tr>th]:whitespace-nowrap">
            <tr>
              <th className="text-center">No</th>
              <th>Pages</th>
              <th>Sessions</th>
              <th>Avg Sessions Duration</th>
              <th>Bounce Rate</th>
              <th>Revenue</th>
              <th>Transaction</th>
              <th>Goal Conversion Rate</th>
            </tr>
          </thead>

          <tbody className="[&>tr>td]:p-4 [&>tr>td]:whitespace-nowrap font-medium dark:text-gray-100">
            {Array(10)
              .fill('')
              .map((_, i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-gray-50 dark:bg-gray-900' : ''}>
                  <td className="text-center">{i + 1}</td>
                  <td>Landing Page</td>
                  <td>17.95%</td>
                  <td>00:03:12</td>
                  <td>86.18%</td>
                  <td>
                    $73.60 <span className="text-gray-500">{'($73.60%)'}</span>
                  </td>
                  <td>
                    $104 <span className="text-gray-500">{'($73.60%)'}</span>
                  </td>
                  <td>86.18%</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </CardTitle>
  );
}
