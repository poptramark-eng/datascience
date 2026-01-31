'use client'
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-blue-700">
        Database CRUD Operations Application
      </h1>

      {/* Navigation */}
      <nav className="bg-white shadow-md rounded-lg">
        <ul className="flex space-x-6 p-4 justify-center">
          <li>
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/addForm"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              USER ADDITION FORM
            </Link>
          </li>
        </ul>
      </nav>

      {/* Article Section */}
      <article className="bg-white shadow-md rounded-lg p-6 leading-relaxed text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        accusamus, qui deleniti harum quod ipsa at natus eaque labore
        molestiae sunt fuga consequatur consectetur voluptatibus dolore
        libero totam fugit? Facere.
      </article>
    </div>
  );
}
