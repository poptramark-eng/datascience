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
        method: "POST",
        body: JSON.stringify(user)
       });
 const base = await res.json();
    if(base.message==='success'){
        router.push('/');
     } 
 else if(base.message==="fail") {
    alert('user already registered, proceed to login');
 }
       
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div>
                <input type="submit" value="Register" />
                </div>
                <div>
                    <Link href="/authenthication/login">
                        <h2>Already Registered? click here to login</h2>
                    </Link>
                </div>
            </form>
        </div>
    );
}