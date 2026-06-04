import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">Sorry, we couldn’t find that page.</p>
        <Link href="/" className="btn btn-primary px-4 py-2 rounded-lg">
          Go back home
        </Link>
      </div>
    </div>
  );
}
