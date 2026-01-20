
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 px-4 text-center dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">404 - Page Not Found</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Sorry, we could not find the page you are looking for.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Go Back Home
      </Link>
    </div>
  );
}
