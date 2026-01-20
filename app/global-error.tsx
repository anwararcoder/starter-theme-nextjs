'use client';
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex h-screen w-full flex-col items-center justify-center px-4 text-center">
            <h2 className="text-2xl font-bold">Critical System Error</h2>
             <p className="mt-2 text-gray-600">
                {error.message || "Something went wrong globally."}
            </p>
            <button
                onClick={() => reset()}
                className="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
            >
            Try again
            </button>
        </div>
      </body>
    </html>
  );
}
