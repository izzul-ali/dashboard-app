interface TableDetail {
  title: React.ReactNode;
  body: React.ReactNode;
}

export default function Table({ title, body }: TableDetail) {
  return (
    <table className="w-full table-auto">
      <thead className="text-xs text-gray-600 dark:text-gray-500 border-b border-gray-200 dark:border-gray-800 [&>tr>th]:text-start [&>tr>th]:py-4 [&>tr>th]:whitespace-nowrap">
        <tr>{title}</tr>
      </thead>
      <tbody className="text-sm [&>tr>td]:py-4 [&>tr>td]:whitespace-nowrap font-medium dark:text-gray-300">
        {body}
      </tbody>
    </table>
  );
}
