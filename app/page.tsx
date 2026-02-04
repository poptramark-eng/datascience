import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">

      <p className="text-gray-200 md:text-lg mb-8 max-w-2xl">
        A modern web application to manage your data seamlessly. Create, Read, Update, and Delete records with ease. Built with Next.js, TypeScript, and Tailwind CSS.
      </p>


      <section className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-blue-400 mb-2">Create</h3>
          <p className="text-gray-200">
            Easily add new records to your database with a clean and intuitive interface.
          </p>
        </div>
        <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-blue-400 mb-2">Read</h3>
          <p className="text-gray-200">
            Quickly view and search through your data with responsive tables and filters.
          </p>
        </div>
        <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-blue-400 mb-2">Update & Delete</h3>
          <p className="text-gray-200">
            Keep your database accurate by updating or deleting records in just a few clicks.
          </p>
        </div>
      </section>
    </div>
  );
}
