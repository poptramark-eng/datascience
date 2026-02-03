"use client"
import Link from 'next/link';
import {useRouter} from 'next/navigation';

export default function Registration(){
    const router = useRouter();
    async function handleSubmit (e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    const data= new FormData(e.currentTarget);
    const obj = Object.fromEntries(data.entries());
    const user = { email:obj.email, password:obj.password};
    const res = await fetch("/api/v1/login", {
        method: "POST",
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
        <div>
            <form onSubmit={handleSubmit}>
 
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div>
                <input type="submit" value="Login" />
                </div>
                <div>
                    <Link href="/authenthication/registration">
                        <h2>New? Register</h2>
                    </Link>
                </div>
            </form>
        </div>
    );
}