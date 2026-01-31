'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type User = { 
  id: number; 
  name: string; 
  email: string;
  created_at: string; 
};

export default function Usage() {
  const router = useRouter(); 
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function query() {
      try {
        const data = await fetch('/api/users', { method: 'GET' });
        const response = await data.json();
        if (response) {
          setUsers(response);
        } else {
          console.log(response);
        }
      } catch (err) {
        console.error(err);
      }
    }
    query();
  }, []);

  return (
    <div className="p-6">
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">NAME</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">EMAIL</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr 
                key={user.id} 
                onClick={() => router.push(`/users/${user.id}`)} 
                className="hover:bg-gray-50 cursor-pointer"
              >
                <td className="px-6 py-4 text-sm text-gray-900">{user.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{user.email}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(user.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
