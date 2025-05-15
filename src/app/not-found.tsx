import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-16">
      <div className="container-custom text-center">
        <h1 className="text-5xl font-bold mb-6">404</h1>
        <h2 className="text-2xl font-bold mb-4">Content Not Found</h2>
        <p className="text-purdue-secondary-gray2 mb-8 text-xl">
          The page or content you are looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/"
          className="bg-purdue-gold hover:bg-yellow-500 text-purdue-black font-bold py-3 px-6 rounded-lg transition-colors font-heading"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
