import CardTitle from '~/components/card-title';
import Table from '~/components/table';

export default function Owner() {
  return (
    <CardTitle title="Deals to watch by owner">
      <Table
        title={
          <>
            <th>Name</th>
            <th>Deals</th>
            <th>Value</th>
          </>
        }
        body={Array(5)
          .fill('')
          .map((_, i) => (
            <tr>
              <td key={i} className="flex gap-x-2">
                <span className="block h-9 w-9 rounded-full bg-blue-700"></span>
                <div>
                  <span>Wade Warren</span>
                  <span className="block text-xs text-gray-700 dark:text-gray-500">Owner: Peter Varga</span>
                </div>
              </td>
              <td>{i + 1}</td>
              <td>$9,155</td>
            </tr>
          ))}
      />
    </CardTitle>
  );
}
