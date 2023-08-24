import CardTitle from '~/components/card-title';
import Table from '~/components/table';

export default function Watch() {
  return (
    <CardTitle title="Top 5 deals to watch">
      <Table
        title={
          <>
            <th>Name</th>
            <th>Health index</th>
            <th>Value</th>
          </>
        }
        body={Array(5)
          .fill('')
          .map((_, i) => (
            <tr>
              <td key={i}>
                <span>Deal #0{i + 1}</span>
                <span className="block text-xs text-gray-700 dark:text-gray-500">Owner: Peter Varga</span>
              </td>
              <td>{i + 1}</td>
              <td>$9,155</td>
            </tr>
          ))}
      />
    </CardTitle>
  );
}
