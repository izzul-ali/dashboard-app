export default function Layout({ user, table }: { user: React.ReactNode; table: React.ReactNode }) {
  return (
    <div className="min-h-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded p-2">
      <div className="mb-10 p-2">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Conversion</h1>
        <p className="text-xs font-medium text-gray-600 dark:text-gray-400">For deals between 1.3.2021 and 12.3.2021</p>
      </div>

      {user}
      {table}
    </div>
  );
}
