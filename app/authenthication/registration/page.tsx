"use client"
import Link from 'next/link';
import {useRouter} from 'next/navigation';

export default function Registration(){
    const router = useRouter();
    async function handleSubmit (e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const data= new FormData(e.currentTarget);
        const obj = Object.fromEntries(data.entries());
        const user = {name:obj.name, email:obj.email, password:obj.password};
        const res = await fetch("/api/v1/register", {
            method: "POST",headers: {"Content-Type":"application/json"},
            body: JSON.stringify(user)
        });
        const base = await res.json();
        if(base.message==='success'){
      
            router.push('/');
        } 
        else if(base.message==='fail') {
            alert('user already registered, proceed to login');
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form 
                onSubmit={handleSubmit} 
                className="w-full max-w-md bg-white p-8 rounded-xl shadow-md space-y-6"
            >
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-gray-700">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col space-y-1">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <input 
                        type="submit" 
                        value="Register" 
                        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                    />
                </div>

                <div className="text-center">
                    <Link href="/authenthication/login">
                        <h2 className="text-sm text-blue-600 hover:underline cursor-pointer">
                            Already Registered? click here to login
                        </h2>
                    </Link>
                </div>
            </form>
        </div>
    );
}
