import { FiDownload } from 'react-icons/fi';

export default function PipelineHealth() {
  const currentDate = new Date();

  currentDate.setDate(currentDate.getDate() - 7);

  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Pipeline Health</h1>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
            Date from,{' '}
            {`${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()}, ${currentDate.getHours()}:${currentDate.getMinutes()}`}
          </span>
        </div>

        <div className="flex gap-x-3 text-xs font-medium mt-3 sm:mt-0">
          <select
            name="pipelines"
            id="pipelines"
            className="p-2 rounded outline-none border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900"
          >
            <option selected>Pipelines</option>
            <option value="Pipelines 1">Pipelines 1</option>
            <option value="Pipelines 2">Pipelines 2</option>
            <option value="Pipelines 3">Pipelines 3</option>
            <option value="Pipelines 4">Pipelines 4</option>
          </select>

          <select
            name="pipelines"
            id="pipelines"
            className="p-2 rounded outline-none border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900"
          >
            <option selected>Owner</option>
            <option value="Jack">Jack</option>
            <option value="John Doe">John Doe</option>
            <option value="Renata">Renata</option>
            <option value="Philiph">Philiph</option>
          </select>

          <button className="py-2 px-3 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-blue-700 dark:text-blue-600 text-sm">
            <FiDownload />
          </button>
        </div>
      </div>

      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mt-10">Top 10 open deals</h2>
    </>
  );
}
