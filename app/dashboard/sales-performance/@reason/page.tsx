import CardTitle from '~/components/card-title';
import Table from '~/components/table';

export default function Reason() {
  return (
    <CardTitle title="Deals to watch by reason">
      <Table
        title={
          <>
            <th>Healt Index</th>
            <th>Deals</th>
            <th>Value</th>
          </>
        }
        body={Array(5)
          .fill('')
          .map((_, i) => (
            <tr key={i}>
              <td className="flex items-center gap-x-2">
                <span className="p-2 rounded bg-blue-700"></span>
                <span>Often value change</span>
              </td>
              <td>5</td>
              <td>$3,878</td>
            </tr>
          ))}
      />
    </CardTitle>
  );
}
