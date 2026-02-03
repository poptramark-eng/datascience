"use client"
import Link from 'next/link';
import {useRouter} from 'next/navigation';

export default function Registration(){
    const router = useRouter();
    async function handleSubmit (e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    const data= new FormData(e.currentTarget);
    const obj = Object.fromEntries(data.entries());
    const user = { 
        email:obj.email,
        password:obj.password
        };
    const res = await fetch("/api/v1/login", {
        method: "POST",headers:{"Content-Type":"application/json"},
        body: JSON.stringify(user)
       });
 const base = await res.json();
    if(base.message==='success'){
        router.push('/');
     } 
     else if(base.message === 'user does not exist'){alert('Please register first')}

 else if(base.message === 'wrong password'){
   
    alert('wrong password');
 }
       
    }



    return (
       <div className="flex min-h-screen items-center justify-center bg-gray-100">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-lg"
  >
    <h1 className="text-center text-2xl font-bold text-gray-800">
      Login
    </h1>

    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <input
      type="submit"
      value="Login"
      className="w-full cursor-pointer rounded-md bg-blue-600 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <div className="text-center">
      <Link
        href="/authenthication/registration"
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        New? Register
      </Link>
    </div>
  </form>
</div>

    );
}