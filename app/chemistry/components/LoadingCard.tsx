export default function LoadingCard() {
  return (
    <div className="animate-pulse rounded-xl bg-gray-200 p-4 dark:bg-gray-700">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gray-300 dark:bg-gray-600" />
          <div className="h-4 w-32 rounded bg-gray-300 dark:bg-gray-600" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-gray-300 dark:bg-gray-600" />
          <div className="h-3 w-3/4 rounded bg-gray-300 dark:bg-gray-600" />
        </div>
      </div>
    </div>
  );
}